'use strict';
angular.module('eProjectApp.features',[])
  .controller('facilityCtrl',['$scope','$http',function($scope,$http){
    $http.get('json/facilities.json').then(function(response){
      $scope.facilityList = response.data;
    })
  }]).controller('serviceCtrl',['$scope','$http',function($scope,$http){
    $http.get('json/services.json').then(function(response){
      $scope.serviceList = response.data;
    })
  }]).controller('centreCtrl',['$scope','$http',function($scope,$http){
    $http.get('json/centres.json').then(function(response){
      $scope.centreList = response.data;
    })
  }])