import '../assets/style.css';
import * as Header from './header';

const content = document.querySelector('#content');

Header.loadHeader();

const phrase = document.createElement('p');
phrase.textContent = 'This is the best treat';

content.appendChild(phrase);

const addPhrase = () => {
  content.appendChild(phrase);
}

addPhrase();