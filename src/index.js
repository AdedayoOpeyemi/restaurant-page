import nav_sec from "./page-frame"
console.log('Page is up and running');

function component() {
  const element = document.createElement('div');

 // Lodash, currently included via a script, is required for this line to work
 // Lodash, now imported by this script
  element.innerHTML = 'Hello';

  return element;
}

document.body.appendChild(component());
document.body.appendChild(nav_sec);