let moviename = localStorage.getItem("moviename")
const inputEl = document.querySelector(" .input__wrapper")
let movie = localStorage.getItem("moviename") 
const searchnameEl = document.querySelector(" .search__results")
const movieListEl = document.querySelector(".movies")


function search(){
    var input = document.getElementById("movie__input");
    localStorage.setItem("moviename", input.value);
    var storedValue = localStorage.getItem("moviename");
}

console.log(moviename)


function displaySearch() {
    inputEl.innerHTML = inputHTML();
    searchnameEl.innerHTML = searchnameHTML();
}

displaySearch();

function searchnameHTML(){
    return `
    <h5 class="results__for">Search Results for "${moviename}" </h5>`
}

function inputHTML(){
    return `   
    <input value="${moviename}" id="movie__input" class="input" type="text" placeholder="Eg. Fast and Furious">
    <button id="magn">
    <i class="fa-solid fa-magnifying-glass"></i>
    </button> 
    `
}


 async function getMovies(moviename) {
    const movies = await fetch(`https://omdbapi.com/?apikey=55f7d091&s=${moviename}`)
    const moviesData = await movies.json();
    console.log(moviesData)   
    movieListEl.innerHTML = moviesData.split("").map(movie => movieHTML(movie)).slice(0,6).join('')
}

function movieHTML(movie){
      return `
        <div class="movie">
        <figure class="movie__img">
            <img src="${movie.Poster}" alt="">
        </figure>
    
        <h5 class="movie__name">${movie.title}</h5>
        <br>
    
        <div class="movie__description">
            <p class="movie__year">${movie.Year}</p>
            <p class="movie__type">${movie.Type}</p>
        </div>
    
    </div>`

}



getMovies(moviename);


const spinner = document.querySelector("#spinner") 

spinner.classList.add('invisible')

async function renderMovies(){
   
}

renderMovies();



// function renderMovies(moviesData){
//     console.log(moviesData)
//     for(i=0; i< moviesData.length; ++i) {

//     }

//     return
// }

// renderMovies();



