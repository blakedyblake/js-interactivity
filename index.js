let message = document.querySelector("#message")


function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click",crossOffMovie);

    document.querySelector("ul").appendChild(movie);
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click",deleteMovie);
    movie.appendChild(deleteBtn);

    inputField.value = "";

    movieTitle.addEventListener("click",crossOffMovie);

    
}
function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!"
}

document.querySelector("form").addEventListener("submit",addMovie);



//Step 4 Cross off
function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) message.textContent = "Movie watched!";
    else message.textContent = "Movie added back!"
}


