'use strict';

/**
 * @ngdoc overview
 * @name bcXkApp
 * @description
 * # bcXkApp
 *
 * Main module of the application.
 */
var bc = angular.module('bcXkApp', ['ui.router']);
bc.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
		url: '/index',
		templateUrl: 'views/main.html',
		controller:'main'
	}).state('info', {
		url: '/info',
		templateUrl: 'views/info.html',
		controller:'info'
		
	}).state('chuangye', {
		url: '/chuangye',
		templateUrl: 'views/chuangye.html',
		controller:'chuangye'
		
	}).state('zhuanjia', {
		url: '/zhuanjia',
		templateUrl: 'views/zhuanjia.html'
		
	})
	$urlRouterProvider.when('', '/chuangye');

})