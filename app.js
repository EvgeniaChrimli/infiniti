import { applicationModal, initModal } from "./scripts/modal.js";
import { initService, services } from "./scripts/services.js";
import { initWorks, works } from "./scripts/works.js";

const slides = [
  {
    id: 1,
    src: "/assets/images/slider/slid3.png",
  },
  {
    id: 2,
    src: "/assets/images/slider/slid2.png",
  },
  {
    id: 3,
    src: "/assets/images/slider/slid1.png",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

if (
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html")
) {
  const swiper = new Swiper("#firstSwiper", {
    pagination: {
      el: ".pagination",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  slides.map((item) => {
    const html = `
    <div class="swiper-slide">
        <img class="swiper-slide_img" src="${item.src}"/>
<div class="container">
    <div class="swiper-slide_textWrap">
              <div class="swiper-slide_title">
                Собственное производство высококачественной резиновой крошки
              </div>
              <div class="swiper-slide_text">
                Сертифицированные материалы, свои бригады, сотни реализованных объектов
              </div>
                  <button class="swiper-slide_btn-wrap btn">рассчитать стоимость</button>
              </div>
    <button class="swiper-slide_btn openModal btn">рассчитать стоимость</button>
    </div>
            </div>
    `;
    swiperWrapper.insertAdjacentHTML("afterbegin", html);
  });

  const swiperSecond = new Swiper("#secondSlider", {
    pagination: {
      el: ".slider-mobile_pagination",
    },
  });

  const swiperThird = new Swiper("#thirdSwiper", {
    pagination: {
      el: ".reviews-mobile_pagination",
    },
  });

  const fourthSlider = new Swiper("#fourthSlider");

  const allslides = document.querySelectorAll(".reviews_slide");
  const prevBtn = document.querySelector(".reviews_prev");
  const nextBtn = document.querySelector(".reviews_next");
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = allslides[0].clientWidth;
    const slidesContainer = document.querySelector(".reviews_slides");
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1.3) % allslides.length;
    showSlide(currentIndex);
    nextBtn.classList.toggle("active-nav");
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1.3 + allslides.length) % allslides.length;
    showSlide(currentIndex);
    prevBtn.classList.toggle("active-nav");
  });
}

const menuBtn = document.querySelector(".burger");
const nav = document.querySelector(".mobile-menu_list");
const overlay = document.querySelector(".overlay");
const menuOpen = (e) => {
  e.stopPropagation();
  nav.classList.toggle("active-list");
  overlay.classList.toggle("active");
};
menuBtn.addEventListener("click", menuOpen);
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove("active-list");
    overlay.classList.remove("active");
  }
});

if (window.location.pathname.includes("contacts.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([59.896153, 30.30874], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([59.896153, 30.30874])
      .addTo(map)
      .bindPopup("Митрофаньевское шоссе 2к2, оф. 214")
      .openPopup();
  });
}

if (window.location.pathname.includes("service.html")) {
  initService(services);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelectorAll(".bottom-body_btn");

  btn.forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = parseInt(el.dataset.id);
      const work = works.find((item) => item.id === id);
      if (work) {
        initModal(work);
      }
    });
  });
});

if (window.location.pathname.includes("works.html")) {
  initWorks(works);
}

document.addEventListener("DOMContentLoaded", () => {
  const applicationBtn = document.querySelectorAll(".succes");

  applicationBtn.forEach((el) => {
    const originalText = el.dataset.default;

    el.addEventListener("click", () => {
      const isActive = el.classList.toggle("succes-active");
      if (isActive) {
        el.textContent = "Успешно!";
        el.style.color = "black";
      } else {
        btn.textContent = originalText;
      }
    });
  });
  const openModalBtn = document.querySelectorAll(".openModal");
  openModalBtn.forEach((el) => {
    el.addEventListener("click", applicationModal);
  });
});
