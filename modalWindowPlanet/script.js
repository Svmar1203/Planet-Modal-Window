'use strict';

const btnOpenModel1 = document.querySelector('.show-modal1');
const btnOpenModal2 = document.querySelector('.show-modal2');
const btnOpenModal3 = document.querySelector('.show-modal3');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const openModal1 = function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openModal3 = function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal1 = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeModal2 = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeModal3 = function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};
const overlay1 = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};
const overlay2 = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};
const overlay3 = function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnOpenModel1.addEventListener('click', openModal1);
btnCloseModal1.addEventListener('click', closeModal1);
overlay.addEventListener('click', overlay1);

btnOpenModal2.addEventListener('click', openModal2);
btnCloseModal2.addEventListener('click', closeModal2);
overlay.addEventListener('click', overlay2);

btnOpenModal3.addEventListener('click', openModal3);
btnCloseModal3.addEventListener('click', closeModal3);

overlay.addEventListener('click', overlay3);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    closeModal1();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal2();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal3.classList.contains('hidden')) {
    closeModal3();
  }
});
