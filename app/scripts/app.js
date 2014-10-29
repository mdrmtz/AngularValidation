'use strict';

/**
 * @ngdoc overview
 * @name angularCalendarAppApp
 * @description
 * # angularCalendarAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularCalendarAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularCalendarAppApp.services',
    'angularCalendarAppApp.directives',
    'angularCalendarAppApp.filters',
    'angularCalendarAppApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
