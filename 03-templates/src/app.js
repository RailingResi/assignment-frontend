import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
//import magnusTpl from './templates/magnus.hbs'
//import sergeyTpl from './templates/sergey.hbs'
import playersTpl from './templates/players.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app');

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

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function playersfunc(ctx) {

  let tpl = () => {};
  let player = ctx.params.player; // key player/magnus
  let playerData = players[player]; // auf die values von Objekten greift man wie auf ein array zu

  console.log(playerData);

  if(player) {
    $app.html(playersTpl(playerData));
  }
  else{
    notFound();
  }

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', playersfunc)
router('/contact', contact)
router('*', notFound)
router()
