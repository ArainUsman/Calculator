console.log("Calculator in JavaScript..!");

let str = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.innerHTML == "=") {
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == "C") {
            str = "";
            document.querySelector('input').value = str;
        }
        else {
            str = str + e.target.innerHTML;
            // console.log(str);
            document.querySelector('input').value = str;
        }
    })
})