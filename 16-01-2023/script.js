fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => dataManipolazione(data));

   

const dataManipolazione = data => {
    data.forEach((element) => {
        console.log (element.title);
        console.log (element.description);
    });
}

