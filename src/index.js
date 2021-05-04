import '../assets/style.css';
import * as Header from './header';
import * as Home from './headlinePage';
import loadMenuPage from './menuPage';
import loadReservationPage from './reservationPage';

const content = document.querySelector('#content');

Header.loadHeader();

const cleanDOM = () => {
  content.innerHTML = '';
};

document.addEventListener('onload', Home.loadHomePage());

Header.homeItem.addEventListener('click', () => {
  cleanDOM();
  Home.loadHomePage();
});

Header.menuItem.addEventListener('click', () => {
  cleanDOM();
  loadMenuPage();
})

Header.contactItem.addEventListener('click', () => {
  cleanDOM();
  loadReservationPage();
})


// const phrase = document.createElement('p');
// phrase.textContent = 'This is the best treat';

// content.appendChild(phrase);

// const addPhrase = () => {
//   content.appendChild(phrase);
// }

// addPhrase();