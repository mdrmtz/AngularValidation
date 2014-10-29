'use strict';

/**
 * @ngdoc directive
 * @name angularCalendarAppApp.directive:ensureUnique
 * @description
 * # ensureUnique
 */
angular.module('angularCalendarAppApp')
  .directive('ensureUnique', function ($http) {
    return {
    	require: 'ngModel',
       /* jshint unused: false */
    	link: function(scope, ele, attrs, c) {
          scope.$watch(attrs.ngModel, function() {
            $http({
              method: 'POST',
              url: '/api/check/' + attrs.ensureUnique,
              data: {'field': attrs.ensureUnique}
              /* jshint unused: false */
            }).success(function(data, status, headers, cfg) {
              c.$setValidity('unique', data.isUnique);
              /* jshint unused: false */
            }).error(function(data, status, headers, cfg) {
              c.$setValidity('unique', true);
            });
          });
        }
    };
  });
