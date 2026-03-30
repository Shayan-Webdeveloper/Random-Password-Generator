let passwordBox = document.querySelector("#password")
let length = 12;
let btn = document.querySelector("button")
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789";
let symbol = "!@#$%^&*()-_=+[]{}|:;',<>./?"
let allChars = upperCase + lowerCase + num + symbol;
let copyIcon = document.querySelector(".display img")
btn.addEventListener("click", () => {
     let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.length)]
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
     password += num[Math.floor(Math.random() * num.length)]
     password += symbol[Math.floor(Math.random() * symbol.length)]
while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
}
passwordBox.value = password;
})
copyIcon.addEventListener("click", () => {
     passwordBox.select();
     document.execCommand("copy");
})
