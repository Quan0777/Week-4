const form = document.getElementById("search-form");
const input = document.getElementById("input-show");
const container = document.querySelector(".show-container");
const button = document.getElementById("submit-data")

button.addEventListener("click", async function () {
    const query = input.value;
    const url = "https://api.tvmaze.com/search/shows?q=" + query;
    const response = await fetch(url);
    const responseJSON = await response.json();

    container.innerHTML = '';

    responseJSON.forEach(function (result) {
    const show = result.show;
    const imageUrl = show.image ? show.image.medium : '';
    const showData = document.createElement("div");
    showData.classList.add("show-data");

    showData.innerHTML = 
    "<img src='" + imageUrl + "'>" +
    "<div class='show-info'>" +
        "<h1>" + show.name + "</h1>" +
        show.summary +
    "</div>";
    container.appendChild(showData);

  });
});