// Get the element that will display the viewport width
const viewportDimensions = document.querySelector(".viewport-dimensions");
// Get the viewport width
const width = window.innerWidth;
// Set the text of the element to show the viewport width
viewportDimensions.innerHTML = `Viewport Width: <b>${width}px</b>`;

window.addEventListener("resize", () => {
  // Get the viewport width
  const width = window.innerWidth;
  // Set the text of the element to show the viewport width
  viewportDimensions.innerHTML = `Viewport Width: <b>${width}px</b>`;
});

const hamburgerButton = document.querySelector('.hamburger-button')
const navMenu = document.querySelector('.navbar')

hamburgerButton.addEventListener('click', function() { 
  console.log('clicked')
  //hamburgerFunction()
  navMenu.classList.toggle('hidden')
})

const hamburgerFunction = () => {
  navMenu.style.display = navMenu.style.display === '' || navMenu.style.display === 'none' ? 'flex' : 'none'
}
