'use strict';

/* Controllers */

angular.module('mySailsApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.name = "Someone";
  }]);