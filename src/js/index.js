//Declare variables of any button
const num = document.getElementsByClassName("btn");
const submit = document.querySelector(".submit");
const container = document.querySelector(".main");
const thx = document.querySelector(".thx");

try {
  num[0].addEventListener("click", () => {
    num[0].classList.add("active");
    num[1].classList.remove("active");
    num[2].classList.remove("active");
    num[3].classList.remove("active");
    num[4].classList.remove("active");
    rate = 1;
  });

  num[1].addEventListener("click", () => {
    num[0].classList.remove("active");
    num[1].classList.add("active");
    num[2].classList.remove("active");
    num[3].classList.remove("active");
    num[4].classList.remove("active");
    rate = 2;
  });

  num[2].addEventListener("click", () => {
    num[0].classList.remove("active");
    num[1].classList.remove("active");
    num[2].classList.add("active");
    num[3].classList.remove("active");
    num[4].classList.remove("active");
    rate = 3;
  });

  num[3].addEventListener("click", () => {
    num[0].classList.remove("active");
    num[1].classList.remove("active");
    num[2].classList.remove("active");
    num[3].classList.add("active");
    num[4].classList.remove("active");
    rate = 4;
  });

  num[4].addEventListener("click", () => {
    num[0].classList.remove("active");
    num[1].classList.remove("active");
    num[2].classList.remove("active");
    num[3].classList.remove("active");
    num[4].classList.add("active");
    rate = 5;
  });

  submit.addEventListener("click", () => {
    getRate(rate);
    container.classList.add("hidden");
    thx.classList.remove("hidden");
    console.log(rate);
  });
} catch (error) {}

function getRate(stars) {
  console.log("hola");
  const answer = document.querySelector(".subtitle");
  const element = document.createElement("span");
  answer.innerHTML += `<span>You selected ${stars} out of 5</span>`;
}
