'use strict';
angular.module('eProjectApp.departmentService',[])
  .factory('departmentAPIservice',['$http',function($http){
    var departmentAPI={};
    departmentAPI.getDepartments = function(){
      return $http.get("json/departments.json");
    };
    return departmentAPI;
  }]);

angular.module('eProjectApp.departmentCatalog',[])
  .controller('depCatalogCtrl',['$scope','departmentAPIservice',function($scope,departmentAPIservice){
    $scope.pageTitle="Departments";
    departmentAPIservice.getDepartments().then(function(response){
      $scope.departmentList= response.data;
    })
  }])

angular.module('eProjectApp.departments',[])
  .controller('departmentCtrl',['$scope','$filter','departmentAPIservice','$routeParams',function($scope,$filter,departmentAPIservice,$routeParams){
    $scope.departmentId= $routeParams.id;
    departmentAPIservice.getDepartments().then(function(response){
      var data=response.data;
      $scope.department= $filter('filter')(data,{id:($scope.departmentId)},true)[0];
      // if 'id' is a number 
      // $scope.department= $filter('filter')(data,{id:parseInt($scope.departmentId)},true)[0];
    })
  }])

