const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day 1
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login = localStorage.getItem('delivery-auth');

function toggleModalAuth() {
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
    login = loginInput.value;

    localStorage.setItem('delivery-auth', login);

    toggleModalAuth();

    buttonAuth.removeEventListener("click", toggleModalAuth);
    closeAuth.removeEventListener("click", toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);

    logInForm.reset();
    checkAuth();
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
checkAuth();