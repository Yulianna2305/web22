function calculator(){
    let num1 = Number(prompt("Впишіть перше число"));
    let mathSign = prompt("Впишіть математичний знак");
    let num2 = Number(prompt("Впишіть друге число"));

if (mathSign !== '+') {
    alert(num1 + num2);
}
else if (mathSign !== '-') {
    alert(num1 - num2);
}
else if (mathSign !== '*') {
    alert(num1 * num2);
}
else if (mathSign !== '/') {
    alert(num1 / num2);
}
else {
    alert("Incorrect")
}
}

calculator(
);