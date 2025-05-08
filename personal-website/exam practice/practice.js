document.getElementById("bookForm").addEventListener("submit", function(event){
    const error = document.getElementById("error-message");
    error.textContent = "";
    event.preventDefault();

    const book = {
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        description: document.getElementById("description").value,
        year: document.getElementById("year").value,
        genre: document.getElementById("genre").value
    };

    alert(JSON.stringify(book)); // <- This is what makes the popup
});
