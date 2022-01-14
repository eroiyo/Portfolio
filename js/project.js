import data from './data.js';

const myProjects = data;
const modal = document.querySelector('.modal-background');
const bt = document.querySelector('.modal-buttons');

function Project(object) {
  if (object.img !== undefined) {
    this.image = object.img;
  } else {
    this.image = 'assest/placeholder.png';
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
}

export default Project;
