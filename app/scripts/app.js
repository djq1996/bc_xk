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
bc.controller('index',function($scope,$http){//政策信息创业信息专家信息
//	<li>
//							<a href="javascript:;" ui-sref='info'>政策信息</a>
//						</li>
//						<li>
//							<a href="javascript:;" ui-sref='chuangye'>创业信息</a>
//						</li>
//						<li>
//							<a href="javascript:;" ui-sref='zhuanjia'>专家信息</a>
//						</li>
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
	$urlRouterProvider.when('', '/chuangye');

})