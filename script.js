// script.js

function changeGreeting() {
    var greetings = ["벨링엄", "윌리엄스", "야말", "케인 무관"];
    var randomIndex = Math.floor(Math.random() * greetings.length);
    var greeting = greetings[randomIndex];
    document.getElementById("greeting").textContent = greeting;
}
