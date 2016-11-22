import $ from 'jquery';
import router from './router'
import homeTpl from './templates/home.hbs';
import contactTpl from './templates/contact.hbs';
import magnusTpl from './templates/magnus.hbs';
import sergayTpl from './templates/sergay.hbs';
import notFoundTpl from './templates/not-found.hbs';

const $app = $('#app');

function index() {
  $app.html(homeTpl());
}

function contact() {
  $app.html(contactTpl());
}

function magnus() {
  $app.html(magnusTpl());
}

function sergay() {
  $app.html(sergayTpl());
}

function notFound() {
  $app.html(notFoundTpl());
}

router('/', index);
router('/contact', contact);
router('/magnus', magnus);
router('/sergay', sergay);
router('*', notFound);
router();

const players = {
    'magnus': {
        name: 'Magnus Carlsen',
        image: 'img.jpg',
        description: 'Lorem ipsum'
    },
    'sergery': {
        name: 'Sergery Karajkin',
        imag: 'Sergery.jpg',
        description: 'Lorem ipsum'
    }
}
