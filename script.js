const button = document.getElementById("checkButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "JavaScript работает успешно!";
});
