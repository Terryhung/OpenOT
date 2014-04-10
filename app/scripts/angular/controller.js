'use strict';

/* Controllers */

angular.module('OpenOT.controllers', [])
.controller('GroupsCtrl', ['$scope', function($scope) {
    chrome.storage.local.get(null, function(result) {
        $scope.groups = result.tabGroups;
        $scope.$apply();
    });
}]);
