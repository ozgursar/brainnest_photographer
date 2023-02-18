// Logo animation using IntersectionObserver
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

// Hamburger menu dropdown toggle
const menu = document.querySelector(".nav-wrapper")
const handleMenuClick = (e) => {
  menu.classList.toggle('open')
}
if (menu) {
  menu.addEventListener('click', handleMenuClick)
}

// Expand portfolio items toggle
const expandButtons = document.querySelectorAll(".expand-button")
const handleExpandItems = (e) => {
  // Target only the portfolio items in this button's parent container
  // currentTarget is the button element
  // Does not matter if user clicks on the inner text or icon inside the button
  const parent = e.currentTarget.parentElement
  const gridContainer = parent.querySelector(".portfolio-items-wrapper")
  const expandButtonIcon = parent.querySelector(".expand-button i")

  gridContainer.classList.toggle("expanded")
  if (expandButtonIcon.classList.contains("icon-chevron-down")) {
    expandButtonIcon.classList.remove("icon-chevron-down")
    expandButtonIcon.classList.add("icon-chevron-up")
  } else {
    expandButtonIcon.classList.remove("icon-chevron-up")
    expandButtonIcon.classList.add("icon-chevron-down")
  }
}

for (let i=0; i<expandButtons.length; i++) {
  expandButtons[i].addEventListener('click', handleExpandItems)
}


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

// Animate objects that come into viewport
let observerOptions = {
  rootMargin: '0px',
  threshold: 0.35
}

const observerLazyAnimate = new IntersectionObserver(lazyAnimateCallback, observerOptions);

function lazyAnimateCallback(entries, observerLazyAnimate) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //trigger animation and remove from observe list
        if (entry.target.classList.contains("top-about-image") || entry.target.classList.contains("bottom-about-image")) {
          entry.target.classList.add("played")  
        } else {
          entry.target.classList.add("animated")
        }
        observerLazyAnimate.unobserve(entry.target)
      }
  });
};

document.querySelectorAll('.lazy-animate').forEach((i) => {
  if (i) {
    observerLazyAnimate.observe(i)
  }
});