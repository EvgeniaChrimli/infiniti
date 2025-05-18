import { services } from "./services.js";
const navName = document.getElementById("nav-name");
const navText = document.getElementById("nav-text");
const navImg = document.getElementById("nav-img");
const current = document.getElementById("current");

const mainImg = document.getElementById("main-img");
const main1Img = document.getElementById("img1");
const main2Img = document.getElementById("img2");

const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

let product;
product = services.find((p) => p.id === productId);

if (!product) {
  document.body.innerHTML = "<h2>Услуга не найдена</h2>";
} else {
  navName.textContent = product.name;
  navText.textContent = product.header.info;
  navImg.src = product.header.img;
  current.textContent = product.name;
  mainImg.src = product.main.img1;
  main1Img.src = product.main.img2;
  main2Img.src = product.main.img3;
  text1.textContent = product.main.text1;
  text2.textContent = product.main.text2;
}
