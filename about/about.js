'use strict';

angular.module('eProjectApp.about',[])
  .controller("sectionCtrl",function($routeParams,$anchorScroll,$location){ //move to id
    $location.hash($routeParams.section);
    $anchorScroll();
  })