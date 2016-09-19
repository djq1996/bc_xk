'use strict';

/**
 * @ngdoc function
 * @name bcXkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcXkApp
 */
var server="http://123.56.227.177:2503";
  		var files=[]
        var setFiles=function(element){
            files = [];
            for (var i = 0; i < element.files.length; i++) {
                files.push(element.files[i]);
            }
        }
       bc.controller("chuangye",function($scope,$http){
            $http({
                method:"GET",
                url:server+"/xiang-chuangye/"
            }).success(function(e){
                $scope.data=e
            })
            $scope.edit=function(e){
                
                $scope.s=e
            }
            $scope.save=function(){
            	$(".summernote").summernote("dddd")
                $http({
                    method:"PUT",
                    url:server+"/xiang-chuangye/"+$scope.s.id,
                    data:$scope.s
                }).success(function(){

                })
            }
            $scope.clear=function(){
            	$scope.s={};
            }
          
            $scope.del=function(e){
                $http({
                    url:server+"/xiang-chuangye/"+ e.id,
                    method:"DELETE"
                }).success(function(){
                    $scope.data.splice($scope.data.indexOf(e),1)
                })
            }
            //上传图片
            $scope.s={}
            $scope.s.img=""
            $scope.addsave=function(){
                console.log($(".summernote").summernote("code"))
                $scope.s.content=$(".summernote").summernote("code")
//              alert($(".summernote").summernote("code"))
				if($scope.s.toindex==false){
					$scope.s.toindex=0
				}else{
					$scope.s.toindex=1
				}
                $http({
                    url:server+"/xiang-chuangye",
                    method:"post",
                    data:$scope.s
                }).success(function(){
 					$scope.data.push($scope.s)
                })
            }



            $scope.params={"subdir":"images","comments":"","uniqueFilename":true};
            $scope.uploadFiles=function(){
                var fd = new FormData()
                for (var i in files) {
                    fd.append("uploadedFile", files[i])
                }
                $http({
                    url:'http://123.56.227.177:2503/xiang-upload',
                        method:"POST",
                    headers: {
    'Content-Type': undefined},
                    transformRequest: angular.identity,
                    params:$scope.params,
                    data:fd
                }).success(function(e){
                    console.log(e)
                    $scope.s.img= e[0].filename
                })
            }
        })

