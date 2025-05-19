export const works = [
  {
    id: 1,
    name: "ЖК Олимп",
    img: "assets/images/ourWork/ourWork1.jpg",
    about1:
      "Для нового жилого комплекса «Солнечный квартал» наша команда реализовала яркую, функциональную и полностью безопасную детскую площадку. Основной задачей было создать пространство, где детям интересно, а родителям спокойно.",
    about2:
      "Мы использовали резиновое покрытие толщиной 40 мм с декоративным рисунком — солнце и волны, в цветах корпоративной айдентики застройщика. Установлены игровые формы, горки, лазалки и балансиры, соответствующие ГОСТам.",
    about3:
      "Особое внимание уделили безопасности и долговечности — покрытие выдерживает перепады температур и не выцветает на солнце. Также создана дренажная система под основанием для отвода воды.",
    time: "Срок выполнения: 4 дня",
    square: "Площадь: 150 m2",
  },
  {
    id: 2,
    name: "Сквер “Молодежный”",
    img: "assets/images/ourWork/ourWork2.jpg",
  },
  {
    id: 3,
    name: "Спорткомплекс “Аврора”",
    img: "assets/images/ourWork/ourWork3.jpg",
  },
  {
    id: 4,
    name: "ЖК Березовая Роща",
    img: "assets/images/ourWork/ourWork4.jpg",
  },
  {
    id: 5,
    name: "Лицей №5",
    img: "assets/images/ourWork/ourWork5.png",
  },
  {
    id: 6,
    name: "ЖК Гармония",
    img: "assets/images/ourWork/ourWork6.jpg",
  },
];

export const initWorks = (works) => {
  const section = document.querySelector(".ourwork_bottom");
  works.forEach((el) => {
    const html = `
        <div class="bottom-body">
            <img
              src="${el.img}"
              alt="works"
              class="bottom-body_img"
            />
            <div class="bottom-body_group">
              <div class="bottom-body_name">${el.name}</div>
              <button  data-id="${el.id}" class="bottom-body_btn btn btn-green">Подробнее</button>
            </div>
          </div>
        `;
    section.insertAdjacentHTML("beforeend", html);
  });
};
