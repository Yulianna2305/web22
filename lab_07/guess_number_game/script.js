const randomNumber = Math.floor(Math.random() * 20) + 1;

while (true) {
    const guess = prompt("Введіть число від 1 до 21:");
    if (guess == randomNumber) {
        alert("Вітаю! Ви вгадали число.");
        break;
    } else if (guess < randomNumber) {
        alert("Більше.");
    } else {
        alert("Менше.");
    }
}

