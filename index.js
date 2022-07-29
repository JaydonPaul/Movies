function saveMovies(){
    var input = document.getElementById("movie__input");
    localStorage.setItem("moviename", input.value);
    var storedValue = localStorage.getItem("moviename", input.value);
}



