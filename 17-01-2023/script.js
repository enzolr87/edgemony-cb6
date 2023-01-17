// Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Con il metodo giusto per la manipolazione delle stringhe limitiamo il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
// Dovremo crere anche un addEventListner al pulsante di aggiunta al carrello, in modo da aggiungere l'elemento al vostro carrello const cart = [] facendo apparire un alert() che indichi l'avvenuta aggiunta al carrello dell'elemento.
// NB: è gradita sempre la gestione degli errori per il metodo fetch() ed un loader

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data =>
    data.forEach(element => {
      cardCreator(element);
    })
  );

const cardCreator = item => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.slice(0, 10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;

  const descEl = document.createElement("p");
  descEl.className = "description";
  //   descEl.textContent = item.description;
  descEl.textContent = item.description.slice(0, 30);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    cartCreation();
    console.log(cart);
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);

};



const cartCreation = () =>{
  tendina.innerHTML = "";
  cart.forEach(item => {
    const cartEl = document.createElement("div");
    cartEl.innerHTML = `<p class="pippo">${item.title}</p><p>${item.price}</p>`;
    tendina.appendChild(cartEl);
  })};