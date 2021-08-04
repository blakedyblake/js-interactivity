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
    message.textContent = `${event.target.parentNode.textContent} deleted!`
    revealMessage();
}

document.querySelector("form").addEventListener("submit",addMovie);



//Step 4 Cross off
function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched!`;
    } 
    else message.textContent = `${event.target.textContent} added back!`

    revealMessage();
}


function revealMessage(){
    message.classList.remove("hide")
    setTimeout(function () {message.classList.add("hide")},1000);
    message.hide(); 
}