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
bc.controller('index',function($scope,$http){

		$scope.arr=[
		{txt:'首页',sref:'index'},
		{txt:'政策信息',sref:'info'},
		{txt:'创业信息',sref:'chuangye'},
		{txt:'专家信息',sref:'zhuanjia'}
		];
		$scope.BtnIndex=0;
		$scope.clickFn=function(index){
			$scope.BtnIndex=index;
		};
	
})
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
		templateUrl: 'views/zhuanjia.html',
		controller:'zhuanjia'
		
	})
	$urlRouterProvider.when('', '/index');

})