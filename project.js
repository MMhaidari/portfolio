const portfolioItems = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'desktop-ingrediants/card.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: 'desktop-ingrediants/card-1.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Facebook 360',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: 'desktop-ingrediants/card-2.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: 'desktop-ingrediants/card-3.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'Uber',
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
    <h3 class="project-card-header">Tonic</h3>
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
          <a href="#" class="see-live">See live <img src="./desktop-ingrediants/Icon.png" alt="icon"></a>
          </li>
          <li>
          <a href="#" class="see-source">See Source <img src="./desktop-ingrediants/Frame.png" alt="icon"></a>
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
