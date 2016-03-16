'use strict';

angular.module('rocEventManagerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sessionPropose', {
        url: '/sessionPropose',
        templateUrl: 'app/sessionPropose/sessionPropose.html',
        controller: 'SessionProposeCtrl'
      });
  });
