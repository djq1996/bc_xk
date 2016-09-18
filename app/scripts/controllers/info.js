'use strict';

/**
 * @ngdoc function
 * @name bcXkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcXkApp
 */
var server="http://123.56.227.177:2503"
       bc.controller("info",function($scope,$http){
            $http({
                method:"GET",
                url:server+"/xiang-info/"
            }).success(function(e){
                $scope.data=e
            })
            $scope.edit=function(e){
                
                $scope.s=e
            }
            $scope.save=function(){
                $http({
                    method:"PUT",
                    url:server+"/xiang-info/"+$scope.s.id,
                    data:$scope.s
                }).success(function(){

                })
            }
            $scope.addsave=function(){
                $http({
                    url:server+"/xiang-info/",
                    method:"POST",
                    data:$scope.s
                }).success(function(){
                    $scope.data.push($scope.s)
                })
            }
            $scope.del=function(e){
                $http({
                    url:server+"/xiang-info/"+ e.id,
                    method:"DELETE"
                }).success(function(){
                    $scope.data.splice($scope.data.indexOf(e),1)
                })
            }
        })
