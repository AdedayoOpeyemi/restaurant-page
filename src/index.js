import '../assets/style.css';
import * as Header from './header';
import * as Home from './headlinePage';

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

// const phrase = document.createElement('p');
// phrase.textContent = 'This is the best treat';

// content.appendChild(phrase);

// const addPhrase = () => {
//   content.appendChild(phrase);
// }

// addPhrase();