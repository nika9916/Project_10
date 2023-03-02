const headerText = document.getElementById('header-title');
const btn = document.querySelector(".btn")
const btnText = 'Click Me';
const homeText = 'Registration';
let incrise = 0;
let speed = 200;

function textAnimation() {
  headerText.innerText = homeText.slice(0, incrise);
  btn.innerText = btnText.slice(0, incrise)
  incrise++
  if(incrise > homeText.length) {
    incrise = 0
  }
  setTimeout(textAnimation, speed)
}

textAnimation()

// click function

const onClick = function(event) {
    event.target.textContent = 'Clicked'
      btn.textContent = 'Clicked'
}
btn.addEventListener('click', onClick)

// part2

const modal = document.querySelector('.modal')
setTimeout (function modalState() {
    modal.classList.toggle('display-none')
}, 2000)


