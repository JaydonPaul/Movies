let moviename = localStorage.getItem("moviename")
const inputEl = document.querySelector(" .input__wrapper")
let movie = localStorage.getItem("moviename") 
const searchnameEl = document.querySelector(" .search__results")
const movieListEl = document.querySelector(".movies")
const spinner = document.querySelector("#spinner")
const movies = document.querySelector(".movies")

console.log(moviename)

// INPUT VALUE RETENTION
function inputHTML(){
    return `   
    <input value="${moviename}" onchange="renderMovies()" id="movie__input" class="input" type="text" placeholder="Eg. Fast and Furious">
    <button id="magn">
    <i class="fa-solid fa-magnifying-glass"></i>
    </button> 
    `
}

// MOVIE FETCH

 async function getMovies(moviename) {
    const movies = await fetch(`https://omdbapi.com/?apikey=55f7d091&s=${moviename}`)
    const moviesData = await movies.json();
    const check = moviesData.Response 
    const check2 = moviesData.Error
    console.log(moviesData)   
    console.log(check2)
    setTimeout(() => {
        if(check === 'True'){
            movieListEl.innerHTML = moviesData.Search.map(movie => movieHTML(movie)).slice(0,6).join('')
            searchnameEl.innerHTML = searchnameHTML();
            }
        else if(check2 === "Movie not found!"){
            searchnameEl.innerHTML = noResultsHTML();
        }
        else if(check2 === "Too many results."){
            searchnameEl.innerHTML = tooManyResults();
        }
    }, 300);
}

function movieHTML(movie){
        const arr = []
        arr.push(movie)
        const readable = `N/A`

        for(i=0; i < 5; ++i){
            if(movie.Poster !== readable){
                return `    
                <div class="movie">
                <figure class="movie__img--wrapper">
                    <img class="movie__img" src="${movie.Poster}" alt="">
                </figure>
                <div class="movie__description--wrapper">
                <h5 class="movie__name">${movie.Title}</h5>
                <div class="movie__description">
                    <p class="movie__year">Year: <span class="color__theme capitalize">${movie.Year}</span></p>
                    <p class="movie__type">Type: <span class="color__theme capitalize">${movie.Type}</span></p>
                </div>
                </div>
            </div>`
            }

            else if(!!readable){
                return `    
                <div class="movie">
                <figure class="movie__img--wrapper">
                    <img class="movie__img" src="" alt="There is No Image">
                </figure>
                <div class="movie__description--wrapper">
                <h5 class="movie__name">${movie.Title}</h5>
                <div class="movie__description">
                    <p class="movie__year">Year: <span class="color__theme capitalize">${movie.Year}</span></p>
                    <p class="movie__type">Type: <span class="color__theme capitalize">${movie.Type}</span></p>
                </div>
                </div>
            </div>`
            }        
        }
}

async function renderMovies(){
    spinner.classList += " loading__state"
    await getMovies();
    spinner.classList.remove("loading__state")
}

getMovies(moviename);

// SEARCH

function search(){
    var input = document.getElementById("movie__input");
    localStorage.setItem("moviename", input.value);
    var storedValue = localStorage.getItem("moviename");
}

function displaySearch() {
    inputEl.innerHTML = inputHTML();
}

displaySearch();

function searchnameHTML(){
    return `
    <h5 class="results__for">Search results for "${moviename}" </h5>`
}

function noResultsHTML(){
    return `
    <h5 class="results__for">There are no search results for "${moviename}" </h5>`
}

function tooManyResults(){
    return `
    <h5 class="results__for">There are too many search results for "${moviename}" </h5>`
}









