angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = ['Sam', 'Kai', "Clark", "Zach", "Cooler Ryan"];
  $scope.addFriend = function(){
    $scope.friends.push($scope.friendsToAdd)
  }
});
