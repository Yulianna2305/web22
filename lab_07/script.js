

let balance = 100;

while (confirm("Почати нову гру?")) {
    if (balance < 20) {
        alert("У вас недостатньо балансу для гри :(");
        break;
    }

    alert(`Ваш баланс: ${balance}`);
    let randomNum = Math.floor(Math.random() * 5) + 1;
    balance -= 20;

    let win = false;
    for (let i = 0; i < 3; i++) {
        let guess = prompt("Вгадайте число (1-20):");
        if (Number(guess) === randomNum) {
            let reward = [40, 20, 10][i];
            balance += reward;
            alert(`Ви виграли! +${reward}$`);
            win = true;
            break;
        }
        alert(i === 2 ? "Ваш баланс -20$" : "спробуйте ще раз");
    }
}

alert("Гра закінчилась! Ваш баланс: " + balance);
