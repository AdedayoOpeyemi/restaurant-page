const content = document.querySelector('#content');
const menuHome = document.createElement('BUTTON');

const loadHomePage = () => {
  const elements = document.createElement('DIV');
  elements.setAttribute('id', 'home');
  elements.setAttribute('class', 'elements');
  const catchPhrase = document.createElement('P');
  const headLine = document.createElement('H2');

  // const nav = document.querySelector('nav > ul');
  const navlist = document.querySelector('#navList').childNodes
  // const navList = nav.childNodes;
  const activeButton = document.querySelector('#home');
  for (let i = 0; i < navList.length; i += 1) {
    navList[i].classList.remove('active');
  }

  activeButton.classList.add('active');
  menuHome.classList.add('center');
  // const activeText = document.querySelector('home > li');
  // activeText.classList.add('zoom');


  headLine.textContent = 'Hungry?!';
  catchPhrase.innerText = 'We have got something \n fresh, yummy and delicious';
  menuHome.innerText = 'View our Menu';
  menuHome
  elements.append(headLine, catchPhrase,  menuHome);

  content.appendChild(elements);
};

export { menuHome, loadHomePage };