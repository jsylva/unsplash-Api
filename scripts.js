document.getElementById("btn-img").addEventListener("click", () => {
    const imageSearch = document.getElementById("search").value;
    console.log(imageSearch);

    fetch(
        `https://api.unsplash.com/search/photos?per_page=30&query=${imageSearch}&client_id=Vrd8qcyp2IG5Y_AnxsYqCeznpyBDyITmJWWHVbCEMts`
    )
        .then((response) => response.json())
        .then((data) => {
            const images = data.results
                .map((image) => {
                    console.log(image);
                    return `<img src="${image.urls.small}" />`;
                })
                .join("");

            document.getElementById("images").innerHTML = images;
        });
});
