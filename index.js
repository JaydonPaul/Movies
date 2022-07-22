async function main(){
    const movies = await fetch ("http://www.omdbapi.com/?apikey=55f7d0917&s")
    console.log(movies)
}

main();