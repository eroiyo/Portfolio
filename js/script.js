const nav2 = document.getElementById('nav2');
const screenSize = window.matchMedia('(min-width: 638px)');
const logo = document.querySelector('.logo');
const modal = document.querySelector('.modal-background');
const bt = document.querySelector('.modal-buttons');

function clickFunction() {
  const para = document.getElementById('toggle-icon');
  const header = document.getElementById("header")
  const logo = document.getElementById("logo")
  const menu = document.getElementById("menu")
  para.classList.toggle('rotate-icon');
  if (nav2.style.display !== 'flex') {
    logo.textContent = "            "
    header.classList.add("changed-header")
    nav2.style.display = 'flex';
    logo.classList.remove('not-hidden');
    logo.classList.add('hidden');
  } else {
    header.classList.remove("changed-header")
    logo.textContent = "Arturo Ortega"
    nav2.style.display = 'none';
    logo.classList.add('not-hidden');
    logo.classList.remove('hidden');
  }
}

function phone(screenSize) {
  if (screenSize.matches) {
    if (nav2.style.display === 'flex') {
      clickFunction();
    }
  }
}

function closeModal() {
  bt.style.display = 'none';
  modal.style.visibility = 'hidden';
}

phone(screenSize);
screenSize.addListener(phone);