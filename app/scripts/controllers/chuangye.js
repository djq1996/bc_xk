'use strict';

/**
 * @ngdoc function
 * @name bcXkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcXkApp
 */
var server="http://123.56.227.177:2503"
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
                $http({
                    method:"PUT",
                    url:server+"/xiang-chuangye/"+$scope.s.id,
                    data:$scope.s
                }).success(function(){

                })
            }
            $scope.addsave=function(){
                $http({
                    url:server+"/xiang-chuangye/",
                    method:"POST",
                    data:$scope.s
                }).success(function(){
                    $scope.data.push($scope.s)
                })
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
            $scope.updata={}
            $scope.updata.img=""
            $scope.save=function(){
                console.log($(".form-control").summernote("code"))
                $scope.updata.content=$(".form-control").summernote("code")

                $http({
                    url:"http://123.56.227.177:2503/xiang-chuangye",
                    method:"post",
                    data:$scope.updata
                }).success(function(){

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
                    $scope.updata.img= e[0].filename
                })
            }
        })

