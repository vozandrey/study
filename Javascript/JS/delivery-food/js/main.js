'use strict';

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('delivery-auth');

function toggleModal() {
  modal.classList.toggle("is-open");
}

function toggleModalAuth() {
  loginInput.style.borderColor = '';
  modalAuth.classList.toggle("is-open");
}

function authorized() {
  function logOut() {
    login = '';
    localStorage.removeItem('delivery-auth');
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonAuth.style.display = '';

    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  console.log('Авторизован ' + login);
  userName.textContent = login;

  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonAuth.style.display = 'none';

  buttonOut.addEventListener('click', logOut);
}

function nonAuthorized() {

  function logIn(event){
    event.preventDefault();

    if (loginInput.value) {
      login = loginInput.value;
      localStorage.setItem('delivery-auth', login);
      toggleModalAuth();
      buttonAuth.removeEventListener("click", toggleModalAuth);
      closeAuth.removeEventListener("click", toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else{
      loginInput.style.borderColor = 'red';
    }
  }
  buttonAuth.addEventListener("click", toggleModalAuth);
  closeAuth.addEventListener("click", toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
  console.log('Не авторизован');
}

function checkAuth() {
  if (login){
    authorized();
  } else {
    nonAuthorized();
  }
}

function createCartRestaurant() {
  const card = `
  <a class="card card-restaurant">
    <img src="img/gusi-lebedi/preview.jpg" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
          <h3 class="card-title">Гуси Лебеди</h3>
          <span class="card-tag tag">75 мин</span>
      </div>
      <div class="card-info">
        <div class="rating">
            4.5
        </div>
        <div class="price">От 1 000 ₽</div>
        <div class="category">Русская кухня</div>
      </div>
    </div>
  </a>
`;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);
}

function createCardGood(){
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML('beforeend', `
      <img src="img/gusi-lebedi/preview.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
            <h3 class="card-title">Гуси Лебеди</h3>
            <span class="card-tag tag">75 мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
              4.5
          </div>
          <div class="price">От 1 000 ₽</div>
          <div class="category">Русская кухня</div>
        </div>
      </div>
    `);
  cardsMenu.insertAdjacentElement('beforeend', card);
}

function openGoods(event) {
  const target = event.target;
  const restaurant = target.closest('.card-restaurant');

  if (!login){
    toggleModalAuth();
  } else if (restaurant){
    cardsMenu.textContent = '';
    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    createCardGood();
    createCardGood();
    createCardGood();
  }
}


cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
cardsRestaurants.addEventListener('click', openGoods);

logo.addEventListener('click', function () {
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');
})

checkAuth();

createCartRestaurant();
createCartRestaurant();
createCartRestaurant();
