'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Erin Van Doren',
    'state': 'main'
  }, {
    'title': 'About',
    'state': 'about'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('erinvandorenApp')
  .controller('NavbarController', NavbarController);
