'use strict';

angular.module('rocEventManagerApp', [
  'rocEventManagerApp.auth',
  'rocEventManagerApp.admin',
  'rocEventManagerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ui.tinymce'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
