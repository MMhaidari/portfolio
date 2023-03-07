const portfolioItems = [
  {
    name: 'Awesome Book',
    description:
      'A Book library app build in JavaScript, HTML, CSS you can use to add your books online so then you can use it, add new books, or delete it.',
    featuredImage: 'mobile-ingrediants/awesomebook.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://mmhaidari.github.io/awesome-book/',
    sourceLink: 'https://github.com/MMhaidari/awesome-book',
    category: 'self-made',
    stack: 'Front-end dev',
    year: '2023',
  },
  {
    name: 'ToDo List App',
    description:
      'A ToDoList app build in HTML, CSS and JavaScript, used to list the daily tasks of client. it is also interactive which means that clients are able to customize their task after adding it to the lis….',
    featuredImage: 'mobile-ingrediants/todolist.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://github.com/MMhaidari/ToDoList',
    sourceLink: 'https://github.com/MMhaidari/ToDoList',
    category: 'self-made',
    stack: 'Front-end dev',
    year: '2015',
  },
  {
    name: 'Online School',
    description:
      "This website is build on HTML CSS, SASS and JavaScript. this website is for an school which offers education in an online platform",
    featuredImage: 'mobile-ingrediants/onlineSchool.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://mmhaidari.github.io/html-css-js-capstone/',
    sourceLink: 'https://github.com/MMhaidari/html-css-js-capstone',
    category: 'self-made',
    stack: 'Front-end dev',
    year: '2023',
  },
  {
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: 'desktop-ingrediants/card-3.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'self-made',
    stack: 'Lead Developer',
    year: '2018',
  },
];

const cardProject = document.querySelector('#section-projects');

let portfolioSection = '';
portfolioItems.forEach((item, index) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies += `<li>${tech}</li>`;
  });
  const portfolioItem = `
  <div class="project">
  <div class="first-col">
    <img class="card-img" src="${item.featuredImage}" alt="project demo image" />
  </div>
  <div class="project-container">
    <h3 class="project-card-header">${item.name}</h3>
    <div class="project-info">
      <h4>${item.name}</h4>
      <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
      <h4 class="project-card-header-2">${item.category}</h4>
      <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
      <h4 class="project-card-header-2">${item.year}</h4>
    </div>
    <p class="card-decrption">
      ${item.description}
    </p>
    <ul class="programming-lang">
    ${technologies}
    </ul>
    </ul>
    <button id="portfolio-button-${index}" class="btn see-project-button">See Project</button>
  </div>
</div>`;
  portfolioSection += portfolioItem;
});

cardProject.innerHTML += portfolioSection;

const seeProjectButtons = document.querySelectorAll('.see-project-button');

const popupContainer = document.querySelector('#popup');
seeProjectButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const buttonIndex = Number(e.target.id.split('-')[2]);
    const portfolioItem = portfolioItems[buttonIndex];
    let technologies = '';
    portfolioItem.technologies.forEach((tech) => {
      technologies += `<li>${tech}</li>`;
    });

    popupContainer.innerHTML = `
    <div class="overlay">
    <div class="popup-wrapper">
    <div class="model first-card-model">
      <div class="model__header_container">
        <h3 class="model__header">${portfolioItem.name}</h3>
        <button type="button" title="close button" class="close_btn">
          <img src="mobile-ingrediants/Icon.png" width="100%" alt="close button">
        </button>
      </div>
      <div class="model-info">
        <h4>${portfolioItem.category}</h4>
        <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
        <h4 class="project-card-header-2">${portfolioItem.stack}</h4>
        <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
        <h4 class="project-card-header-2">${portfolioItem.year}</h4>
      </div>
      <img class="model-img" src="${portfolioItem.featuredImage}" alt="project demo image" />
      <div class="model-info-desription">
      <p class="model-decrption">
      ${portfolioItem.description}
      </p>
      <div>
        <ul class="programming-lang">
        ${technologies}
        </ul>
        <hr class="breakline">
        <ul class="model_btn">
        <li>
          <a href="${portfolioItem.liveLink}" class="see-live" target="_blank">See live <img src="./desktop-ingrediants/Icon.png" alt="icon"></a>
          </li>
          <li>
          <a href="${portfolioItem.sourceLink}" class="see-source" target="_blank">See Source <img src="./desktop-ingrediants/Frame.png" alt="icon"></a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  </div>`;
    popupContainer.style.display = 'flex';
    document.querySelector('.close_btn').addEventListener('click', () => {
      popupContainer.style.display = 'none';
      document.querySelector('body').classList.remove('hidescrollbar');
    });
  });
});
