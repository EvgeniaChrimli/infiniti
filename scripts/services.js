export const services = [
  {
    id: 1,
    name: "Детские площадки",
    header: {
      img: "./assets/images/kids/kidsTop.svg",
      info: "Проектирование и укладка резинового покрытия для детских площадок под ключ. Безопасно, ярко и долговечно",
    },
    main: {
      img1: "./assets/images/kids/kidsCent.png",
      img2: "./assets/images/kids/kids1.png",
      img3: "./assets/images/kids/kids2.png",
      text1:
        "Мы проектируем и обустраиваем детские площадки с безопасным покрытием из резиновой крошки или EPDM. Покрытие устойчиво к влаге, ультрафиолету и механическим повреждениям, соответствует ГОСТам и имеет антискользящую поверхность.",
      text2:
        "Площадка может быть как стандартной, так и по индивидуальному дизайну — с фигурами, цветными зонами и 3D-элементами. Наши специалисты выезжают на замеры и сопровождают проект от идеи до сдачи.",
    },
  },
  {
    id: 2,
    name: "Спортивные покрытия",
    header: {
      img: "./assets/images/sportCovering/coveringTop.svg",
      info: "Надёжность, безопасность и профессиональный подход — основа наших решений.",
    },
    main: {
      img1: "./assets/images/servicess/servi5.png",
      img2: "./assets/images/sportCovering/covering1.png",
      img3: "./assets/images/sportCovering/covering2.png",
      text1:
        "Мы проектируем и укладываем спортивные покрытия для различных объектов: от школьных стадионов до профессиональных арен. Наши материалы устойчивы к износу, погодным условиям и соответствуют стандартам безопасности. Мы предлагаем покрытие из резиновой крошки, ПУ-систем, акриловых и модульных решений — под каждую задачу.",
      text2:
        "Подходит для: футбольных и баскетбольных площадок, теннисных кортов, беговых дорожек.",
    },
  },
  {
    id: 3,
    name: "Резиновая крошка",
    header: {
      img: "./assets/images/crumb/crumbTop.svg",
      info: "Экологичное и безопасное решение для детских и спортивных площадок.",
    },
    main: {
      img1: "./assets/images/servicess/servi4.jpg",
      img2: "./assets/images/crumb/crumb1.png",
      img3: "./assets/images/crumb/crumb2.png",
      text1:
        "Мы производим и укладываем покрытие из переработанной резиновой крошки, соответствующее стандартам ГОСТ и санитарной безопасности. Благодаря амортизирующим свойствам, покрытие снижает риск травм и обеспечивает комфорт при активной эксплуатации. Доступно множество цветов и форм.",
      text2:
        "Подходит для: детских и спортивных площадок, территорий у ЖК, парков.",
    },
  },
  {
    id: 4,
    name: "Плитка и модульные покрытия",
    header: {
      img: "./assets/images/crumb/crumbTop.svg",
      info: "Быстрая укладка, высокая прочность, эстетичный вид.",
    },
    main: {
      img1: "./assets/images/servicess/servi3.jpg",
      img2: "./assets/images/tile/tile1.png",
      img3: "./assets/images/tile/tile2.png",
      text1:
        "Резиновая плитка и модульные покрытия — идеальный выбор для тех, кто ищет долговечное и простое в обслуживании покрытие. Они устойчивы к ультрафиолету и перепадам температур, легко демонтируются и заменяются. Предлагаем широкий ассортимент по толщине, цвету и текстуре.",
      text2:
        "Подходит для: террас, уличных тренажёров, входных зон, производственных помещений.",
    },
  },
  {
    id: 5,
    name: "Асфальтирование",
    header: {
      img: "./assets/images/asphalt/white.svg",
      info: "Качественное асфальтовое покрытие для любых задач.",
    },
    main: {
      img1: "./assets/images/servicess/servi2.jpg",
      img2: "./assets/images/asphalt/asphalt1.png",
      img3: "./assets/images/asphalt/asphalt2.png",
      text1:
        "Предоставляем полный цикл работ по асфальтированию — от подготовки основания до укладки и разметки. Используем современные технологии и технику, что позволяет добиваться прочного, ровного и долговечного результата.",
      text2:
        "Подходит для: придомовых территорий, парковок, подъездных путей, промышленных площадок.",
    },
  },
  {
    id: 6,
    name: "Каменный ковер",
    header: {
      img: "./assets/images/crumb/crumbTop.svg",
      info: "Современное покрытие с эффектом натурального камня.",
    },
    main: {
      img1: "./assets/images/servicess/kamen.png",
      img2: "./assets/images/kamen/kamen1.png",
      img3: "./assets/images/kamen/kamen2.png",
      text1:
        "Каменный ковёр — декоративное и при этом функциональное покрытие, состоящее из натуральной мраморной или кварцевой крошки, связанной полиуретаном. Оно устойчиво к влаге, морозам, ультрафиолету и механическим повреждениям. Обеспечивает премиальный внешний вид.",
      text2: "Подходит для: дорожек, веранд, фасадов, коммерческих объектов.",
    },
  },
];

export const initService = (services) => {
  const serviceBody = document.querySelector(".service-bottom");

  const renderItems = () => {
    services.forEach((element) => {
      const html = `
        <div class="service-body">
             <img src="${element.main.img1}" alt="services" class="service-body_img" />
            <div  class="service-body_title">${element.name}</div>
            <a
             href="servicePage.html?id=${element.id}"
              class="service-body_btn btn btn-green"
              >подробнее</a
            >
          </div>
      `;
      serviceBody.insertAdjacentHTML("beforeend", html);
    });
  };

  renderItems();
};
