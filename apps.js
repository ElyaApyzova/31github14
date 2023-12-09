let currentYear = new Date().getFullYear();

let err = new Audio("");
let correct = new Audio("");

const ResolveAge = () => {
  let year = document.getElementById("year").value;
  let incorrect = document.getElementById("incorrect");
  let result = document.getElementById("result");

  year = parseInt(year);

  if (Number.isNaN(year)) {
    incorrect.style.display = "block";
    incorrect.style.color = "#E966A0";
    result.style.display = "none";
    err.play();
  } else {
    let res = currentYear - year;
    result.style.display = "block";
    incorrect.style.display = "none";
    result.innerHTML = "Your age:" + res;
    result.style.color = "#40513B";
    correct.play();
  }
};
