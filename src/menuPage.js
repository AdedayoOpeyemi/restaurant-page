const content = document.querySelector('#content');

const loadMenuPage = () => {

  const drinkItems = ['Coca-cola', 'Pepsi', 'Smoov', 'BCocktail', 'Red Wine'];
  const pastryItems = ['Burger', 'Meat-Pie', 'Donuts', 'Sausage', 'Pizza'];
  const mealItems = ['Jollof rices', 'Fried rice', 'Spagethi', 'Macaronni'];

  const navList = document.querySelector('nav > ul').childNodes
  const activeButton = document.querySelector('#menu');
  for (let i = 0; i < navList.length; i += 1) {
    navList[i].classList.remove('active');
  }
  


  activeButton.classList.add('active');

  const pageContent = document.createElement('DIV');
  pageContent.setAttribute('id', 'menu');
  pageContent.setAttribute('class', 'menuContent');
  const list = document.createElement('UL');

  const drinks = list.cloneNode(false);
  const drinksTitle = document.createElement('H3');
  drinksTitle.innerText = 'Drinks';
  drinks.appendChild(drinksTitle);
  console.log(drinksTitle);
  console.log(drinks);

  const pastry = list.cloneNode(false);
  const pastryTitle = document.createElement('H3');
  pastryTitle.innerText = 'Pastry';
  pastry.appendChild(pastryTitle);

  const meals = list.cloneNode(false);
  const mealsTitle = document.createElement('H3');
  mealsTitle.innerText = 'Snacks';
  meals.appendChild(mealsTitle);

  const menuLists = [drinks, pastry, meals];

  

  const menuListBuilder = (menu, item) => {
    const li = document.createElement('LI');
    li.innerText = item;
    menu.appendChild(li);
    return true;
  };

  drinkItems.map(item => menuListBuilder(drinks, item));
  pastryItems.map(item => menuListBuilder(pastry, item));
  mealItems.map(item => menuListBuilder(meals, item));

  console.log(menuLists);

  pageContent.append(...menuLists);
  content.appendChild(pageContent);
};

export default loadMenuPage;