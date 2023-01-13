// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione. Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

const images = [
    "https://picsum.photos/300/500?1",
    "https://picsum.photos/500/500?2",
    "https://picsum.photos/500/500?3",
    "https://picsum.photos/500/500?4",
    "https://picsum.photos/500/500?5",
  ];
  const carouselImgEl = document.querySelector(".carousel__img");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  let carouselState = 0;
  

  btn1.addEventListener("click", (e) => {
    carouselImgEl.setAttribute("src", images[0]);
    carouselState++;
  
    if (carouselState > 4) {
      carouselState = 0;
    }
  });
  
  btn2.addEventListener("click", () => {
    carouselImgEl.setAttribute("src", images[carouselState]);
    carouselState--;
  
    if (carouselState < 0) {
      carouselState = 4;
    }
  });



























// Avanzato
// Creare il template dello slider cui sopra completamente dinamico (via Javascript).