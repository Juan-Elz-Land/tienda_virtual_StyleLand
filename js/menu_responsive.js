"use strict"

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

  const dropdown = document.querySelector('.dropdown')
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('open')
    }
  })

