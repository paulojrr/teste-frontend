//import axios from 'axios';

let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';

  menuSection.classList.toggle('on', show);
  show = !show;
});

//const button = document.querySelector('.newslatter-button');

/*function handleFetch() {
  axios
    .post('http://localhost:3000', {
      email: 'email',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}*/
