let passwordBox = document.querySelector("#password")
let btn = document.querySelector("button")
let copyIcon = document.querySelector(".display img")
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789";
let symbol = "!@#$%^&*()-_=+[]{}|:;',<>./?"
let allChars = upperCase + lowerCase + num + symbol;
btn.addEventListener("click", () => {
     let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.length)]
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
     password += num[Math.floor(Math.random() * num.length)]
     password += symbol[Math.floor(Math.random() * symbol.length)]
for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
}

passwordBox.value = password;
})
copyIcon.addEventListener("click", () => {
     passwordBox.select();
     document.execCommand("copy");
})
