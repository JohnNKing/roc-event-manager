'use strict';

angular.module('rocEventManagerApp.auth', [
  'rocEventManagerApp.constants',
  'rocEventManagerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
