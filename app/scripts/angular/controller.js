'use strict';

/* Controllers */

angular.module('OpenOT.controllers', [])
.controller('GroupsCtrl', ['$scope', function($scope) {
    chrome.storage.local.get(null, function(result) {
        $scope.groups = result.tabGroups;
        $scope.$apply();
    });


    $scope.openUrl = function(groupIndex, tabIndex) {
        var group = $scope.groups[groupIndex];
        var tab   = group[tabIndex];

        chrome.tabs.create({'url': tab.url}, function() {
            // Remove this tab from group
            group.splice(tabIndex, 1);

            $scope.groups[groupIndex] = group;
            $scope.$apply();
        });
    }
}]);
