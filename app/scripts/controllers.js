'use strict';

angular
  .module('angularCalendarAppApp.controllers', [

  ]).controller('FrameController',
  		['$scope',function($scope){
  		$scope.today = new Date();
  		$scope.name = 'WF!';
  }])
  .controller('DashboardController',
  		['$scope', function($scope) {    
  		$scope.entryInput = undefined;
  }]);