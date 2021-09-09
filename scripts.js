document.getElementById("search-btn").addEventListener("click", () => {
    searchTerm = document.getElementById("searchParameter").value;

    fetch(`https://www.omdbapi.com/?apikey=67ab0474&s=${searchTerm}`).then(response => response.json()).then(data => {
        const movies = data.Search.map(movie => {
            return `<img src="${movie.Poster}"  onclick="info('${movie.imdbID}')"/>`
        }).join('');
        document.getElementById('app').innerHTML = movies;
    })

});


function info(imdb) {
    fetch(`https://www.omdbapi.com/?apikey=67ab0474&i=${imdb}`).then(response => response.json()).then(data => {
        document.getElementById('description').innerHTML = " <h2>-Movie Information-</h2> <br/> Movie Title: " + data.Title + "<br />" + "The Movie Was Released: " + data.Released + "<br />" + "The Movie Is Rated: " + data.Rated + "<br />" + "Writer: " + data.Director + "<br />" + "Actors: " + data.Actors;
    })
}
