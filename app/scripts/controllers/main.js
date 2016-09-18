        var files=[]
        var images={};
        var setFiles=function(element){
            files = [];
            for (var i = 0; i < element.files.length; i++) {
                files.push(element.files[i]);
            }
        }
        var server="http://123.56.227.177:2503"
        bc.controller("main",function($scope,$http){
            $http({
                method:"GET",
                url:server+"/xiang-auto/"
            }).success(function(e){
            	debugger
                $scope.data=e
            })
            $scope.edit=function(e){
            	
                $scope.isshow=true
                $scope.s=e

            }
            $scope.save=function(){
            	alert(123)
                $http({
                    method:"PUT",
                    url:server+"/xiang-auto/"+$scope.s.id,
                    data:$scope.s
                }).success(function(){

                })
            }
            $scope.add=function(){
                $scope.isshow=true

            }
            $scope.addsave=function(){
                $http({
                    url:server+"/xiang-auto/",
                    method:"POST",
                    data:$scope.s
                }).success(function(){
                    $scope.data.push($scope.s)
                })
            }
            $scope.del=function(e){
            	
                $http({
                    url:server+"/xiang-auto/"+ e.id,
                    method:"DELETE"
                }).success(function(){
                	//alert(1)
                    $scope.data.splice($scope.data.indexOf(e),1)
                }).error(function(){
                	//alert(2)
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
                	
              		  $scope.images= e[0].filename;
              		   debugger
              		  console.log( $scope.images)
              		  
//						$scope.images = {}
//                      $scope.images.push(e[0].filename)
                })
                  $http({
              	  method:"POST",
              	  url:"http://123.56.227.177:2503/xiang-auto",
               	  data:{'img':$scope.images}
		            }).success(function(e){
		               console.log(e)
		            })
            
            }

            
            
        })
   