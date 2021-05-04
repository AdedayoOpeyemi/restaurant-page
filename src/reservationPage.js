const content = document.querySelector('#content');

const reservation = () => {
  const navList = document.querySelector('#navList').childNodes;
  const activeButton = document.querySelector('#reservation');
  for (let i = 0; i < navList.length; i += 1) {
    navList[i].classList.remove('active');
  }

  activeButton.classList.add('active');

  const reservationDetails = document.createElement('DIV');
  reservationDetails.setAttribute('id', 'reservation');
  reservationDetails.setAttribute('class', 'reservation');

  const openTimeSpan = document.createElement('P');
  openTimeSpan.innerText = 'We are open at this time \n everyday of the week';

  const openTime = document.createElement('H6');
  openTime.innerText = '8 AM - 10 PM';

  const contactDetailsSpan = document.createElement('P');
  contactDetailsSpan.innerText = 'For info and reservations:';
  const contactDetails = document.createElement('H6');
  contactDetails.innerText = '(+234) 800 0000 000, \n (+234) 800 0000 00';

  reservationDetails.append(openTimeSpan, openTime, contactDetailsSpan, contactDetails);

  content.appendChild(reservationDetails);
};

export default reservation;