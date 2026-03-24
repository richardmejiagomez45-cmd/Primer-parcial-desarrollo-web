fetch("components/header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);



fetch("components/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);


let allCars = [];
let currentSort = "default";


fetch("data/productos.json")
  .then(res => res.json())
  .then(data => {
    allCars = data;
    if (document.getElementById("products-container")) {
      displayCarsTemplate(data.slice(0, 3));
    }

    if (document.getElementById("cars")) {
   
      displayCars(data);
    }
  });
