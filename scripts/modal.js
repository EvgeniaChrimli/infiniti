export const initModal = (work) => {
  const modalOverlay = document.querySelector(".modal-overlay");
  const img = document.querySelector(".modal_img");
  const time = document.querySelector(".modal-info_top");
  const square = document.querySelector(".modal-info_bottom");
  const text1 = document.querySelector(".modal_text1");
  const text2 = document.querySelector(".modal_text2");
  const text3 = document.querySelector(".modal_text3");

  modalOverlay.classList.add("active");
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });

  img.src = work.img;
  time.textContent = work.time || "Срок не указан";
  square.textContent = work.square || "Площадь не указана";
  text1.textContent = work.about1 || "";
  text2.textContent = work.about2 || "";
  text3.textContent = work.about3 || "";
};

export const applicationModal = () => {
  const application = document.querySelector(".application");
  application.classList.add("active");

  application.addEventListener("click", (e) => {
    if (e.target === application) {
      application.classList.remove("active");
    }
  });
};
