"use strict";

var app = angular.module("IceCreamApp", ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'partials/greetings.html'

    }).
    when('/showall', {
      templateUrl: 'partials/flavor-list.html',
      controller: "FlavorCtrl"
    }).
    //add some more after first works
    when('/cream', {
    	templateURL: 'partials/cream.html',
    	controller: "FlavorCtrl"
    }).
     when('/sherbet', {
    	templateURL: 'partials/sherbet.html',
    	controller: "FlavorCtrl"
    }).
    otherwise('/');

});

console.log("hello");