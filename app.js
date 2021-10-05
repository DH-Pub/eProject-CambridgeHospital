'use strict';

angular.module("eProjectApp",[
  'ngRoute',
  'ngMaterial',
  'eProjectApp.about',
  'eProjectApp.departmentCatalog',
  'eProjectApp.departments',
  'eProjectApp.departmentService',
  'eProjectApp.features'
]).controller('HeaderController',function($scope,$location){ // to add class
  $scope.isActive= function(route){
    return route === $location.path();
  };
  $scope.subCheck= function(){
    alert("Thank you for subscribing!");
  }
}).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/",{templateUrl: "home/home.html",controller:"homeCtrl"})
    .when("/about/:section?",{templateUrl: "about/about.html",controller:"sectionCtrl"})
    .when("/departments",{templateUrl: "departments/depcatalog.html",controller:"depCatalogCtrl"})
    .when("/departments/:id",{templateUrl:"departments/departments.html",controller:"departmentCtrl"})
    
    .when("/features",{templateUrl:"features/features.html"})
    .when("/facilities",{templateUrl:"features/facilities.html",controller:"facilityCtrl"})
    .when("/services",{templateUrl:"features/services.html",controller:"serviceCtrl"})
    .when("/centres",{templateUrl:"features/centres.html",controller:"centreCtrl"})

    .when("/contact",{templateUrl:"contact/contact-us.html",controller:"sectionCtrl"}) //same ctrl as about
    .when("/vacancies",{templateUrl:"vacancies/vacancies.html",controller:"vacancyCtrl"})
}]).controller("homeCtrl",function($scope){

}).controller("formCtrl",function($scope){
  $scope.queryCheck= function(){
    alert("Thank you for your query!");
  }
}).controller("vacancyCtrl",function($scope){

}).controller("cvCtrl",function($scope){
  $scope.cvCheck= function(){
    alert("Thank you for your time!");
  }
}).controller("registerCtrl", function ($scope) {
  $scope.registerCheck = function () {
    var x = registerFrm.password.value;
    var y = registerFrm.confirmPassword.value;
    if (x!=y) {
      alert("Password and Confirm Password not the same!");
    }
    if (x==y) {
      alert("Thank you for your register!");
    }
  }
});

// feedback
$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});
	$("#feedback-form form").on('submit', function() {
		alert("Thank you for your feedback!");
    $("#feedback-form").toggle("slide");
	});
});

$(window).scroll(function(){
  if($(window).scrollTop()>110){
    $('#nav-scroll').addClass('fixed-top');
    $('#main').addClass('scroll-margin');
  }
  if($(window).scrollTop()<110){
    $('#nav-scroll').removeClass('fixed-top');
    $('#main').removeClass('scroll-margin');
  }
})