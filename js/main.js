/* ================ LOAD HEADER ================ */
/* ================ LOAD HEADER + SIDEBAR ================ */
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    return fetch("components/sidebar.html");
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar").innerHTML = data;

    // 🔥 AHORA TODO EXISTE
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });

      const navLinks = sidebar.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          sidebar.classList.remove("active");
        });
      });
    }
  });

/* ================ LOAD FOOTER ================ */
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

/* ================ VARIABLES ================ */
let allCars = [];
let currentSort = "default";

/* ================ FETCH DATA ================ */
fetch("data/productos.json")
  .then(res => res.json())
  .then(data => {
    allCars = data;


    if (document.getElementById("products-container")) {
      // INDEX → TEMPLATE (solo 3)
      displayCarsTemplate(data.slice(0, 3));
    }

    if (document.getElementById("cars")) {
      // VEHICLES → WEB COMPONENT (todos)
      displayCars(data);
    }
  });

/* ================ TEMPLATE (INDEX) ================ */
function displayCarsTemplate(cars) {
  const container = document.getElementById("products-container");
  const template = document.getElementById("product-template");

  if (!container || !template) return;

  container.innerHTML = '';

  cars.forEach(car => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.product-image').src = car.image;
    clone.querySelector('.product-name').textContent = car.name;
    clone.querySelector('.product-description').textContent = car.description;
    clone.querySelector('.product-price').textContent = `$${car.price.toLocaleString()}`;

    container.appendChild(clone);
  });
}

/* ================ WEB COMPONENT (VEHICLES) ================ */
function displayCars(cars) {
  const container = document.getElementById("cars");

  if (!container) return;

  container.innerHTML = '';

  cars.forEach(car => {
    const card = document.createElement('product-card');

    card.setAttribute('name', car.name);
    card.setAttribute('price', car.price);
    card.setAttribute('description', car.description);
    card.setAttribute('image', car.image);

    container.appendChild(card);
  });
}

/* ================ SEARCH ================ */
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = allCars.filter(car =>
      car.name.toLowerCase().includes(value) ||
      car.description.toLowerCase().includes(value)
    );

    displayCars(filtered);
  });
}

/* ================ OFFERS ================ */
const offersContainer = document.getElementById("offers");

if (offersContainer) {
  fetch("data/productos.json")
    .then(res => res.json())
    .then(data => {
      data.slice(0, 2).forEach(car => {
        const discount = Math.floor(Math.random() * 20) + 5;

        const card = document.createElement('product-card');

        card.setAttribute('name', car.name);
        card.setAttribute('price', car.price);
        card.setAttribute('description', car.description);
        card.setAttribute('image', car.image);

        offersContainer.appendChild(card);

        card.setDiscount(discount);
      });
    });
}

/* ================ CONTACT FORM ================ */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "Mensaje enviado ✅";
    mensaje.style.display = "block";

    form.reset();

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);
  });
}