'use strict';

/**
 * @ngdoc directive
 * @name angularCalendarAppApp.directive:ngFocus
 * @description
 * # ngFocus
 */
angular.module('angularCalendarAppApp')
  .directive('ngFocus', function () {
    var FOCUS_CLASS = 'ng-focused';
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
          ctrl.$focused = false;
          /* jshint unused: false */
          element.bind('focus', function(evt) {
            element.addClass(FOCUS_CLASS);
            scope.$apply(function() {ctrl.$focused = true;});
          /* jshint unused: false */
          }).bind('blur', function(evt) {
            element.removeClass(FOCUS_CLASS);
            scope.$apply(function() {ctrl.$focused = false;});
          });
        }
      };
  });
