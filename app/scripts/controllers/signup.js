/*global alert*/
'use strict';

/**
 * @ngdoc function
 * @name angularCalendarAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularCalendarAppApp
 */
angular.module('angularCalendarAppApp')
  .controller('SignupCtrl',  ['$scope', function($scope) {
      $scope.submitted = false;
      $scope.signupForm = function() {
        /*jshint camelcase: false */
        if ($scope.signup_form.$valid) {
          // Submit as normal
          alert('passed');
        } else {
          /*jshint camelcase: false */
          $scope.signup_form.submitted = true;
        }
      };
    }]);