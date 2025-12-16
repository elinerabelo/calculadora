const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === "clear") {
            display.innerText = "";
        } 
        else if (item.id === "backspace") {
            display.innerText = display.innerText.slice(0, -1);
        } 
        else if (item.id === "equal") {
            if (display.innerText !== "") {
                display.innerText = eval(display.innerText);
            } else {
                display.innerText = "Empty!";
                setTimeout(() => display.innerText = "", 2000);
            }
        } 
        else {
            display.innerText += item.id;
        }
    };
});

/* toggler */

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
};
