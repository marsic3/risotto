function setUnit() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

setUnit()

window.addEventListener('resize', setUnit)
