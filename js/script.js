// Logo animation
const target = document.querySelector('.main-spacer')
const logo = document.querySelector('.logo-container .logo-text')
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

// Expand portfolio grid items
const gridContainer = document.querySelector(".portfolio-items-wrapper")
const expandButton = document.querySelector(".expand-button")
const expandButtonIcon = document.querySelector(".expand-button i")

const handleExpandItems = () => {
  gridContainer.classList.toggle("expanded")
  if (expandButtonIcon.classList.contains("icon-chevron-down")) {
    expandButtonIcon.classList.remove("icon-chevron-down")
    expandButtonIcon.classList.add("icon-chevron-up")
  } else {
    expandButtonIcon.classList.remove("icon-chevron-up")
    expandButtonIcon.classList.add("icon-chevron-down")
  }
}
expandButton.addEventListener('click', handleExpandItems)

// Modal
const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modal-content")
const modalImage = document.querySelector(".modal-image")
const portfolioItems = document.querySelectorAll(".portfolio-item")
const closeIcon = document.querySelector(".icon-close")
const body = document.querySelector("body")

const openModal = (e) => {
  body.style.overflow = "hidden"
  modalImage.src = e.target.querySelector(".portfolio-item img").getAttribute("src")
  modalImage.alt = e.target.querySelector(".portfolio-item img").getAttribute("alt")
  modal.style.display = "block"
}

const closeModal = (e) => {
  if (e.target && !e.target.classList.contains("modal-image")) {
    body.style.overflow = "auto"
    modal.style.display = "none"
  }
}

// Modal event listeners
closeIcon.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

for (let i=0; i<portfolioItems.length; i++) {
  portfolioItems[i].addEventListener('click', openModal)
}

document.addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    body.style.overflow = "auto"
    modal.style.display = "none"
  }
});


