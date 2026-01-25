document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello Worlds");

    // DOM elemek kikeresése
    let button = document.getElementById("myButton");
    let message = document.getElementById("message");

    // Gomb kattintás esemény
    button.addEventListener("click", function() {
        message.textContent = "Sikeresen rákattintottál a gombra!";
    });
});