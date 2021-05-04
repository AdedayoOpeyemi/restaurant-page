const content = document.querySelector('#content');
const body = document.querySelector('body');
const homeItem = document.createElement('LI');
const menuItem = document.createElement('LI');
const contactItem = document.createElement('LI');
const brandLogo = document.createElement('h1');

const loadHeader = () => {
  const header = document.createElement('HEADER');
  header.setAttribute('id', 'header');

  brandLogo.setAttribute('id', 'logo');
  brandLogo.innerText = 'Amazing Food';

  const nav = document.createElement('NAV');
  const navList = document.createElement('UL');
  navList.setAttribute('id', 'navList');

  homeItem.textContent = 'Home';
  homeItem.setAttribute('id', 'home');
  menuItem.textContent = 'Menu';
  menuItem.setAttribute('id', 'menu');
  contactItem.textContent = 'Reservation';
  contactItem.setAttribute('id', 'reservation');

  navList.appendChild(homeItem);
  navList.appendChild(menuItem);
  navList.appendChild(contactItem);

  nav.appendChild(navList);

  header.append(brandLogo, nav);

  body.insertBefore(header, content);
};

export {
  homeItem, menuItem, contactItem, brandLogo, loadHeader,
};