import data from './data.js';

const myProjects = data;
const modal = document.querySelector('.modal-background');
const bt = document.querySelector('.modal-buttons');

function Project(object) {
  if (object.img !== undefined) {
    this.image = object.img;
  } else {
    this.image = 'image/test.jpg';
  }
  if (object.bImg !== undefined) {
    this.bigImage = object.bImg;
  } else {
    this.bigImage = 'assest/Big.png';
  }
  if (object.title !== undefined) {
    this.title = object.title;
  } else {
    this.title = 'Multi-Post Stories';
  }
  if (object.subtitle !== undefined) {
    this.subtitle = object.subtitle;
  } else {
    this.subtitle = 'Multi-Post Stories';
  }
  if (object.alt !== undefined) {
    this.alt = object.alt;
  } else {
    this.alt = 'placeholder';
  }
  if (object.bAlt !== undefined) {
    this.bigAlt = object.bAlt;
  } else {
    this.bigAlt = 'big_placeholder';
  }
  if (object.view !== undefined) {
    this.overview = object.view;
  } else {
    this.overview = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  }
  if (object.desc !== undefined) {
    this.description = object.desc;
  } else {
    this.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
  }
  if (object.tags !== undefined) {
    this.tags = object.tags.split(',');
  } else {
    this.tags = ['Css', 'Html', 'Bootstrap', 'Ruby'];
  }
  if (object.live !== undefined) {
    this.live = object.live;
  } else {
    this.live = '#';
  }
  if (object.repo !== undefined) {
    this.repo = object.repo;
  } else {
    this.repo = '#';
  }
  if (object.id !== undefined) {
    this.id = object.id;
  } else {
    this.id = '?';
  }

  function callp(num) {
    const b = myProjects[num];
    const p = new Project(b);
    p.message();
    bt.style.display = 'flex';
    modal.style.visibility = 'visible';
  }
  this.appear = function (right) {
    //create the project card
    const objetive = document.getElementById('projects');
    const projectCard = document.createElement('li');
    projectCard.classList.add("project-card");

    //create the project info box
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = this.title;
    projectTitle.classList.add("project-title")
    const projectSubTitle = document.createElement("h4");
    projectSubTitle.classList.add("project-subtitle")
    projectSubTitle.textContent = this.subtitle;
    const projectOverview = document.createElement("p");
    projectOverview.classList.add("project-description")
    projectOverview.textContent = this.overview;
    projectInfo.appendChild(projectTitle)
    projectInfo.appendChild(projectSubTitle)
    projectInfo.appendChild(projectOverview)

    //create tags
    const tags = document.createElement('ul');
    tags.classList.add('skills-used');
    const tagsCurrentValues = this.tags;
    for (let i = 0; i < tagsCurrentValues.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = this.tags[i];
      tags.appendChild(li);
    }
    projectInfo.appendChild(tags)

    //create button
    const button = document.createElement("button");
    button.classList.add("projectbutton");
    button.classList.add("btn");
    button.value ="See Project";
    button.textContent ="See Project";
    button.type = 'button';
    const temp = 0 + this.id;
    button.onclick = function () {
      callp(temp);
    };
    projectInfo.appendChild(button)

    //create image section
    const projectImage = document.createElement("div");
    projectImage.classList.add("project-image");
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container")
    const smImg = document.createElement('img');
    smImg.src = this.image;
    smImg.alt = this.alt;
    smImg.classList.add('image');
    imageContainer.appendChild(smImg);
    projectImage.appendChild(imageContainer);

    projectCard.appendChild(projectInfo);
    projectCard.appendChild(projectImage);
    if(right){
      projectCard.classList.add("reverse")
    }
    objetive.appendChild(projectCard)
  }
  this.message = function () {
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = this.title;
    const modalImage = document.querySelector('.modal-img');
    modalImage.src = this.bigImage;
    const modalInfo = document.querySelector('.modal-info');
    modalInfo.textContent = this.description;
    const modalTags = document.querySelector('#modal-tags');
    while (modalTags.hasChildNodes()) {
      modalTags.removeChild(modalTags.lastChild);
    }
    const copy = this.tags;
    for (let i = 0; i < copy.length; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = this.tags[i];
      modalTags.appendChild(span);
    }
    const live = document.querySelector('.live');
    live.href = this.live;
    const repo = document.querySelector('.repo');
    repo.href = this.repo;
  };
}

export default Project;
