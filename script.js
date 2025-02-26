const inputValue = document.getElementById("userinput");

const  calculate = document.querySelectorAll("operations")
.forEach(function (item) {
item.addEventListener("click", function (e) {
    console.log(e.target.innerText);
});
});