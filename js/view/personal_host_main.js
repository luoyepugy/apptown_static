angular.module('personal_host_main',["directive_mml",'tm.pagination',"activity_servrt"])
.controller('personal_host_main',["$scope","activity_data",function($scope,activity_data) {//主办方详情
	$(".person_tab_1 p").removeClass("act");//选项卡切换
	$(".person_tab_1 p").eq(0).addClass("act");//选项卡切换
	$(".person_activity_list").css("display","block");
	$(".person_host_message").css("display","none");
	$scope.user_id=window.location.search.split("sponsor_id=")[1];//获取主办方idsecrchH
		activity_data.person_detail_info({"user_id":$scope.user_id}).then(//主办方详情
				function success(data) {
                         $scope.perDeta= new secrchH(data.info);
                         if($scope.perDeta.attention_sponsor==0||$scope.perDeta.attention_sponsor==null){
                        	 $(".attent_change").css("background","#4FA45D").attr("data-x",1).text("关注TA");
                         }else {
                        	 
                        	 $(".attent_change").css("background","#a9a9a9").attr("data-x",2).text("取消关注");
                         }
                         
				}, function error() {
					console.log("获取主办方详情失败")
		});

	
	
	var data_per={};
	data_per.sponsor_id=$scope.user_id;	
	data_per.time_status=1;//1：未结束 2:已结束
	data_per.pageIndex=1;//页码
	data_per.pageSize=20;//行数
	$scope.perList=[];//获得数据的数组
	
	$scope.personListA=function (){
		activity_data.person_li(data_per).then(//主办方发起的未结束活动列表
				function success(data) {
					$(data.rows).map(function(){
						var ar= new person_list(this);
						$scope.perList.push(ar)
					})
					$scope.pResult=data.results;
				}, function error() {
					console.log("获取发起的未结束活动列表失败")
		});
	}
	$scope.personListA();
	$scope.person_tab_act=function(){//主办方发起的活动
		$(".person_tab_1 p").removeClass("act");//选项卡切换
		$(".person_tab_1 p").eq(0).addClass("act");//选项卡切换
		$(".person_activity_list").css("display","block");
		$(".person_host_message").css("display","none");
		$(".check_overdate,.person_overdate_list").css("display","block");
		
	}
	
	
	var data_over={}; 
	data_over.sponsor_id=$scope.user_id;	
	data_over.time_status=2;//1：未结束 2:已结束
	data_over.pageIndex=0;//页码
	data_over.pageSize=4;//行数
	$scope.perOver=[];//获得数据的数组
	$scope.check_overdate=function(){//查看过期的活动
		$(".person_overdate_list").css({"display":"block"});
		data_over.pageIndex+=1;
		activity_data.person_li(data_over).then(//主办方发起的结束活动列表
				function success(data) {
					$(data.rows).map(function(){
						var er= new person_list(this);
						$scope.perOver.push(er)
					})
					$scope.OResult=data.results;
				}, function error() {
					console.log("获取主办方发起的结束活动列表失败")
		});
	}
	
	
	//关注主办方操作
	$scope.attentHost=function(){	
		 if(!$scope.prefsession_a){
    		 $('#log_in').modal('toggle');
    		 return;
    	 }
			if($(".attent_change").attr("data-x")==1){
				activity_data.exec_attention({"resources_id":$scope.user_id,"type":4}).then(//主办方发起的结束活动列表
						function success(data) {
								$(".attent_change").css("background","#a9a9a9").attr("data-x",2).text("取消关注");

						}, function error() {
							console.log("获取主办方发起的结束活动列表失败")
				});
			}else if($(".attent_change").attr("data-x")==2){
				activity_data.cancel_attention({"resources_id":$scope.user_id,"type":4}).then(//主办方发起的结束活动列表
						function success(data) {			
								$(".attent_change").css("background","#4FA45D").attr("data-x",1).text("关注TA");

						}, function error() {
							console.log("获取主办方发起的结束活动列表失败")
				});
			}
			
			
	   
			
	}	
	
	
	$scope.person_tab_mes=function(){//主办方留言的列表
		$(".person_tab_1 p").removeClass("act");//选项卡切换
		$(".person_tab_1 p").eq(1).addClass("act");//选项卡切换
		$(".person_activity_list").css("display","none");
		$(".person_host_message").css("display","block");
		$(".check_overdate,.person_overdate_list").css("display","none");
		$scope.mess_oiu=[]; 
		$scope.act_detail={
				"mess_po":function(){//留言数据获取
			    	 /*活动留言*/
				        activity_data.comment_list($scope.user_id,1).then(
				 			function success(data) {
				 				 if(data.code!=0){
									 alert("活动留言："+data.msg)
									 return
								 }
				 				
				 				$(data.rows).map(function(){
				 					var myt=new comment_list_f(this)
				 					$scope.mess_oiu.push(myt)
				 				})
				 			}, function error() {
				 				console.log("获取留言失败")
				 	    });
			     },"ti_message":function(){//提交留言
			    	   var comment_content=$("#meeage_p").val().trim();//获取留言框
			    	   if(comment_content==""){
			    		   alert("请输入留言")
			    		   $("#meeage_p").focus()
			    		   return;
			    	   }
			    	   $scope.act_detail.km_mess($scope.user_id,1,comment_content)
			      },"ti_er_message":function(em,id){//二级留言
			    	  var comment_content_a=$(em).parents(".er_poiu_qd").find(".er_poou").val().trim();
			    	  $scope.act_detail.km_mess("",1,comment_content_a,id);
			     	  $(em).parents(".er_poiu_qd").hide();
			      },"km_mess":function(id,ty,comment_content,superior,Comment){
				      activity_data.add_comment_data(id,ty,comment_content,superior,Comment).then(
		 				function success(data) {
		                     if(data.code!=0){
		                   	  $('#log_in').modal(true)
		                   	  return;
		                     }
		                     $scope.mess_oiu=[]
		                     $("#meeage_p").val("")
		                     $scope.act_detail.mess_po();//初始化留言数据
		 				}, function error() {
		 					console.log("评论提交失败")
		 				});
		        }
				
		}
			$scope.act_detail.mess_po();//初始化留言
		
		    $("body").on("click",".hui_pou_a",function(){//留言二级回复
    	
		     var di_i= $(this).parents("li")
		     var username=$(di_i).find(".user_name_o_i").text();
			 $(di_i).find(".er_poiu_qd").show().find(".er_poou").focus().val("回复@"+username+"：")
		 
	      })
					
		
	}
	$scope.activity_hot=[];
	   /*热门活动*/
    activity_data.getActivityHot().then(
				function success(data) {
					if(data.code!=0){
						console.log(data.msg)
						return;
					}
					$(data.info).map(function(){
						var hoti=new preferential(this)
						 $scope.activity_hot.push(hoti)
					})
			}, function error() {
				console.log("获取热门活动失败")
		});
	

}])

