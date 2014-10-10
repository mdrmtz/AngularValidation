'use strict';

angular
  .module('angularCalendarAppApp.controllers', [

  ]).controller('FrameController',
  		['$scope',function($scope){
  		$scope.today = new Date();
  		$scope.name = 'Dude!';
  }])
  .controller('DashboardController',
  		['$scope', function($scope) {    
  		$scope.entryInput = undefined;
  }]);