var calcApp = angular.module("calcApp", [])

calcApp.controller('KeyController', ['$scope', '$log', function($scope, $log){

$scope.value = "1";
$scope.changeValue = function(newValue){
  $scope.oldvalue = $scope.value;
  $scope.value =$scope.oldvalue.concat(newValue.toString());
  $log.log(newValue);
}

}])
