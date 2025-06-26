"use strict"
function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active')    
    const element = document.querySelector('.container-main')
    const clss_exists = element.classList.contains('main-top')

    if (clss_exists) {
      document.querySelector('.container-main').classList.remove("main-top")
      document.querySelector('.container-main').classList.add("old-main-top")
    } else {
      document.querySelector('.container-main').classList.remove("old-main-top")
      document.querySelector('.container-main').classList.add("main-top")      
    }   
}

  const dropdown = document.querySelector('.dropdown')
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('open')
    }
  })

