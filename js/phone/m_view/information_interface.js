/**
 * 票券详情
 */
angular.module('information_interface', ["directive_mml","activity_servrt"])
.controller('information_Controller',["$scope","activity_data",function($scope,activity_data) {
	$scope.infomation={
			"in_data":{"order_id":$("#order_id").val()},
			"volume_details":""
	}

	/* 获取票务详情*/
    activity_data.buy_ticket_info($scope.infomation.in_data).then(
      function success(data) {
   	    if(data.code!=0){
   	    	alert(data.msg);
   	    	return
   	    }
   	    $scope.infomation.volume_details=new  buy_ticket_info(data.info)
	   },function error() {
		 console.log("票务详情获取失败")
	 });
}])