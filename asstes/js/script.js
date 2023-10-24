//HTML elementlerin yaradilib, menimsedilmesi
const body = document.querySelector("body");
const modalSection = document.createElement("section");
const modal = document.createElement("div");
const button = document.createElement("button");
const closeBtn = document.createElement("button");

const h1 = document.createElement("h1");
const input = document.createElement("input");
const submitBtn = document.createElement("button");

//body, modalSection, modal element'lerine child'larin elave edilmesi
body.append(button, modalSection);
modalSection.append(modal);
modal.append(h1, input, submitBtn,closeBtn);

//Elemenlere class'in elave edilmesi
button.classList.add("btn");
modal.classList.add("modal_box");
closeBtn.classList.add("closeBtn");
modalSection.classList.add("modalSection");

h1.classList.add("header_text");
input.classList.add("input");
submitBtn.classList.add("submit_button");

//Elementlerin contentent'ini ve placeholder'inin elave edilmesi
closeBtn.textContent = "Close";
button.textContent = "Subscribe";
h1.textContent = "Subscribe Now!";
submitBtn.textContent = "Submit";
input.placeholder = "email@example.com";

//Button'lara click etdikde hansi funksiyani yerine yetirceyini teyin edilmesi
button.onclick = () => {
    modalSection.style.display = "block";
};

closeBtn.onclick = () => {
    modalSection.style.display = "none";
};
