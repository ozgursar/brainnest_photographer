// Logo animation
const target = document.querySelector('.main-spacer')
const logo = document.querySelector('.logo-container h1')
const logoWidth = logo.clientWidth

function handleIntersection(entries) {
  entries.map((entry) => {
    const reducedWidth = logoWidth * entry.intersectionRatio

    if (reducedWidth>0 && reducedWidth<=logoWidth) {
      logo.style.width = reducedWidth + "px"
      logo.style.opacity = entry.intersectionRatio
      logo.style.visibility = "visible"
      logo.style.paddingRight = "10px"
    } else {
      logo.style.width = 0
      logo.style.opacity = 0
      logo.style.visibility = "hidden"
      logo.style.paddingRight = 0
    }
  })
}

const observer = new IntersectionObserver(handleIntersection, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] })
observer.observe(target)

// Hamburger menu animation
const menu = document.querySelector(".nav-wrapper")
const handleMenuClick = (e) => {
  menu.classList.toggle('open')
}
menu.addEventListener('click', handleMenuClick)
