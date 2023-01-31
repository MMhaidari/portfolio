const navigationLinks = document.querySelector('.navigation-links');
const menuBtn = document.querySelector('.humbarger-btn');
const bodyElement = document.querySelector('body');
const navigationLinksEl = document.querySelector('.navigation-links > a');

const projectContainer = document.querySelector('.section-projects');
const popupWrapper = document.querySelector('.popup-wrapper');


const Projects = [
  {
    title: 'Multi-Post Stories New',
    subInfo: [
      'FACEBOOK',
      'Full Stack Dev',
      '2015'
    ],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.'
  }
]

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navigationLinks.classList.toggle('open-nav');
  updateMenuBtnImage();
});

function updateMenuBtnImage() {
  if (navigationLinks.classList.contains('open-nav')) {
    menuBtn.setAttribute('src', 'mobile-ingrediants/Union.png');
    bodyElement.classList.remove('hidescrollbar');
  } else {
    menuBtn.setAttribute('src', './mobile-ingrediants/Icon.png');
    bodyElement.classList.add('hidescrollbar');
  }
}

navigationLinks.addEventListener('click', function () {
  navigationLinks.classList.add('open-nav');
  bodyElement.classList.remove('hidescrollbar');
  menuBtn.setAttribute('src', 'mobile-ingrediants/Union.png');
});

projectContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'A'){
    e.preventDefault();
    popupWrapper.classList.remove('close_popup')

    addClickEventToPopup()
  }
})

function addClickEventToPopup(){
  popupWrapper.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('close_btn')){
      popupWrapper.classList.add('close_popup')
    }
  })
}


function addProject(){
  console.log('working');
  let html = '';

  Projects.forEach(project => {
    html += `
    <div class="project first-card" [id]=>
        <div class="overflow-img">
          <img class="card-img" src="desktop-ingrediants/card.png" alt="project demo image" />
        </div>
        <div class="project-container">
          <h3 class="project-card-header">${project.title}</h3>
          <div class="project-info">
            <h4>CANOPY</h4>
            <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
            <h4 class="project-card-header-2">Back End Dev</h4>
            <img class="dot-icon" src="mobile-ingrediants/Counter.png" alt="icon" />
            <h4 class="project-card-header-2">2015</h4>
          </div>
          <p class="card-decrption">
          ${project.description}
          </p>
          <ul class="programming-lang">
            <li>html</li>
            <li>css</li>
            <li>JavaScript</li>
          </ul>
          <div class="project-btn">
            <a href="#" class="btn">See Project</a>
          </div>
        </div>
      </div>
    
    `
  })

  projectContainer.innerHTML += html
}

addProject();