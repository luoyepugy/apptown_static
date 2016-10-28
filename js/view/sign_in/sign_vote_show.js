/**
 * 投票详情页面
 */
angular.module('ticket_volume_list', [ "directive_mml","activity_servrt"])
.controller('activity_show_ticket',["$scope","activity_data",function($scope,activity_data) {
	var vote_id=$("#vote_id").val();
	var data_p={"id":vote_id};//投票ID
 /*   $scope.activity_id=window.location.href.split("vote/")[1];//活动ID
*/	  $scope.type_p;//投票单选多选
	   $scope.is_vote;//0未投票 1已投票
	  activity_data.query_vote_p(data_p).then(
	    		function success(data){    		
	    			  if(data.code!=0){
	    				  mui.alert(data.msg);
	    				  return;
	    			  }	
	    			$scope.vote_detail=new query_vote(data.info)
	    			$scope.type_p=data.info.type;
	    			$scope.is_vote=data.info.is_vote;
	    			
	    		}, function error() {
					console.log("投票详情查询失败");
	    });
    
     $(document).on("click",".about_vote_content label",function(){
  	   var type_po=$("#type_p").val();
  	   if(type_po==1){
  		   $(".about_vote_content label").css("background-position","-26px -1119px").removeAttr("data-i");
      	   $(this).css("background-position","-26px -1160px").attr("data-i",2);
  	   }else if(type_po==2){
  		   if( $(this).attr("data-i")==1){
  			   $(this).css("background-position","-26px -1160px"); 
  			   $(this).attr("data-i",2);
  		   }else {
  			   $(this).css("background-position","-26px -1119px"); 
  			   $(this).attr("data-i",1);
  		   }
  		   
  	   }
  	   
     })

	 
		  
	 $(".vote_comfirm").on('click',function(){
		 var str="";
		 var arr1=[]
		$(".about_vote_content label").map(function(){
			if($(this).attr("data-i")==2){
				str+='_'+$(this).attr("data-id")
				arr1.push($(this).parents(".about_vote_list"))
			}
		})
	
		 var data_t={"ids":str.substring(1)}
		 activity_data.query_vote_do(data_t).then(
		    		function success(data){    		
		    			  if(data.code!=0){
		    				  mui.alert(data.msg);  
		    				  return;
		    			  }else if(data.code==0){
		    				  $(".about_vote_tip").css("display","block")
		    				   setTimeout(function(){$(".about_vote_tip").css("display","none")},1500)
		    				   for(var i=0;i<arr1.length;i++){
		   		    			var piuy=$(arr1[i]).find(".vote_me").attr("data-tk")
		   		    			$(arr1[i]).find(".vote_me").text(++piuy+"票")
		   		    		}	
		    			  }	
		    		$(".vote_comfirm").unbind("click").text("您已投票").css("background","#878787")
		    			
		    		}, function error() {
						console.log("执行投票失败");
		    });
	 })
	}]).controller('draw_lotteryctl',function($scope,activity_data) {
		 activity_data.getDatas('GET', '/activity/query_draw_by_activity_id/'+ act_id)
		  .then(function(data) {
			 if(data.code!=0){
				 alert(data.msg);
				 return
			 }
			 $scope.detail=data.info.draw_detail_array
		 }); 
		 activity_data.getDatas('GET', '/draw/get_win_prize?activity_id='+ act_id)
		  .then(function(data) {
			 if(data.code!=0){
				 alert(data.msg)
				 return
			 }
			 $scope.win_prize_data=data.info
		 }); 
		 
		 $scope.start_time=start_time
   	   	$scope.end_time=end_time
	})

