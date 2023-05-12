const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a3d86f618msh8e145a5ee45a742p1e0f75jsn544c49f97b59',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
const movieContainer = document.getElementsByClassName("movieContainer")[0];

const getMovie = async ()=>{

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const resultArr = await Array.from(result);
        console.log(resultArr);


        result.forEach((e,i)=>{
            let elem = document.createElement("div");
            elem.classList.add("movieBox");
            elem.innerHTML = `
        <div class="moviePoster">
            <img src="${result[i].thumbnail}" alt="${result[i].title}">
         </div>
        <div class="movieText">
            <p>Rating: ${result[i].rating}</p>
            <h1>Title: ${result[i].title}</h1>
            <p class="bigText">Rank: ${result[i].rank}</p>
        </div>
            `
            movieContainer.appendChild(elem);
        })
    } catch (error) {
        console.error(error);
    }
    
}

const btn = document.getElementById("goTop");
btn.addEventListener("click", ()=>{
  document.documentElement.scrollTo({
    top:0,
    behavior: "smooth"
  })
})

getMovie();
