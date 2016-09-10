/**
 * 赞助详情
 */
angular.module('sponsor_detail', [ "directive_mml","activity_servrt"])
.controller('sponsor_centerController',["$scope","activity_data",function($scope,activity_data) {
	$(".head_full_details").css({"opacity":"1"})
	$scope.detail;//赞助数据
	$scope.user=[];//赞助用户列表数据
	$scope.pageSize=12;//初始化赞助用户列表行数
	$scope.pageIndex=1;//初始化赞助用户页数
	$scope.userSum;//赞助用户列表总数
	$scope.commentDetail=[];//评论人数
	$scope.num_m=0;//票种价格
	$scope.o_induction;//赞助说明
	$scope.o_repaytime;//赞助回报时间
	$scope.o_repayId;//赞助回报Id
	$scope.sumP;
	$scope.ticket_num;//票种数量
	$scope.ticket_horner_name;//票种人姓名
	$scope.ticket_horner_phone;//票种人手机
	$scope.ticket_horner_address;//票种人公司地址
	$scope.personLimit;//票种人数限制
	$scope.detailId=$('#supportId').val();
	$scope.sponsor_1st;//赞助标题
	activity_data.query_sponsor_detail($scope.detailId).then( //赞助详情
		function success(data){
			var deta=new sponsorDetail(data.info);
			$scope.detail=deta;
			$scope.sponsor_1st=$scope.detail.name
		},function error(data){
			
		}
	)
	/*
	 pageIndex页数
	 pageSize 行数
	 activity_support_id 赞助ID
	 * */
	activity_data.query_sponsor_user($scope.pageIndex,$scope.pageSize,$scope.detailId).then( //赞助详情获取赞助用户列表
		function success(data){
			$(data.rows).map(function(){
				var deta=new sponsorUser(this);
				$scope.user.push(deta);	
			})
			$scope.userSum=data.results;
		},function error(data){

		}
	)
	
	$scope.pup_spoason=function(num,introduction,repaytime,repayId,personLimit){//去赞助弹框以及传递赞助回报金额
		$('#repay_money').text($scope.num_m)  //重置订单详情支付金额
		$("#submit_repay_num").text(1);
		$scope.num_m=num;//票种价格
		$scope.o_induction=introduction;//赞助说明
		$scope.o_repaytime=repaytime;//赞助回报时间
		$scope.o_repayId=repayId;//赞助回报ID
		$scope.personLimit=personLimit;//赞助人数限制
		$('#modal-sponsor').modal('toggle')  
	}
	
	$scope.add_more=function(){
		$scope.pageIndex++;
		activity_data.query_sponsor_user($scope.pageIndex,$scope.pageSize,$scope.detailId).then( //点击更多加载赞助详情获取赞助用户列表
		function success(data){
			$(data.rows).map(function(){
				var deta=new sponsorUser(this);
				$scope.user.push(deta);	
			})
		},function error(data){

		}
	)
	}
	
	$(".repay-num-exec").on("click",function(){

	var num = parseInt($('#submit_repay_num').text());
	if($(this).attr("data-tag") == "a"){
		if(num<$scope.personLimit){
		   	num++;	
		}else if($scope.personLimit<=0){
			num++;
		}
	}else if($(this).attr("data-tag") == "c"){
		if(num>1){
			num--
		}	
	}
	$('#submit_repay_num').text(num);
	$("#repay_money").text(num*$scope.num_m)
	$("#data_sum").attr("data_sum",num*$scope.num_m)
	$scope.sumP=$("#data_sum").attr("data_sum")
})
	
		    
	$scope.$on('ngfinish', function(ngfinishEvent) {//图片轮播
		  $(".act_de_lef").addClass("op1")
		 $(".carousel-inner .item").eq(0).addClass("active")
		 $(".switchover_poi .fl").eq(0).addClass("active")
		  $(".ticket_type_p").eq(0).addClass("act")
	})


    
    
    $scope.detail;//赞助详情数据
	     $scope.id=$scope.detailId;
	     $scope.mess_oiu=[];//赞助留言数据
	     $scope.act_detail={"ticket_types":function(remark,price){
	    	  $scope.remark=(remark==""||remark==null?"无":remark);
	    	  $scope.ticket_price=price
	     },"mess_po":function(){//留言数据获取
	    	 /*活动留言*/
		        activity_data.comment_list($scope.id,1).then(
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
	    	   $scope.act_detail.km_mess($scope.id,1,comment_content)
	      },"ti_er_message":function(em,id){//二级留言
	    	  var comment_content_a=$(em).parents(".er_poiu_qd").find(".er_poou").val();
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
	     $scope.act_detail.mess_po();//初始化留言数据
	     
		$scope.modalPay=function (){
		$scope.sumP=$("#repay_money").text()
		$scope.ticket_num=parseInt($("#submit_repay_num").text())//票种数量		
		$scope.ticket_horner_name=$("#repay_form_name").val();//票种人姓名
		$scope.ticket_horner_phone=$("#repay_form_phone").val();//票种人手机
		$scope.ticket_horner_address=$("#repay_form_address").val();//票种人公司地址
		if(!form_mm.isnull($scope.ticket_horner_name)){
	    		 alert("姓名不能为空");
	    		 return
	    	 }
	    	 if(!form_mm.tel($scope.ticket_horner_phone)){
	    		 alert("手机号码格式错误");
	    		 return
	    	 }
	    	 if(!form_mm.isnull($scope.ticket_horner_address)){
	    		 alert("公司地址不能为空");
	    		 return
	    	 }
		if($(".post_xy_a label").attr("data-in")=="true"){
				$("#mo_close").click()
			    $("#wechatPay").modal("toggle");	
			}else {
				alert("请您阅读并同意e场景活动的《e场景活动平台赞助服务协议》")
			}
	     }
	     
	     $scope.toggleCorrect=function (){  
		 	if($(".toggleBackground").attr("data-in")=="true"){
		 		$(".toggleBackground").css("background","#ffffff");
		 		$(".toggleBackground").attr("data-in",false);	
		 	}else if($(".toggleBackground").attr("data-in")=="false"){
		 		$(".toggleBackground").css("background","url(/img/pc_icon.png) -280px -18px");
		 		$(".toggleBackground").attr("data-in",true);
		 	}
	
		}
	    
	    /*
	        赞助微信支付
	     * */
	    
	   
	    
	    
	    $scope.wechar_pay_sponsor=function(){
		    	var sp_repayjson={
		    	"repay_id":$scope.o_repayId,
	            "num":$scope.ticket_num,
				"repay_from":{"name":$scope.ticket_horner_name,"tel":$scope.ticket_horner_phone,"address":$scope.ticket_horner_address}
		         }
		    	var n_sum=parseInt(sp_repayjson.num)*$scope.num_m;		    
				activity_data.query_sponsor_repay(sp_repayjson).then( 
					function success(data){
						if(data.code!=0){
				    	    	alert(data.msg);
				    	    	return
				    	   }				    	   
				    window.location.href='/activity/wechat_pay?code_url='+data.info.code_url+'&price='+n_sum+"&out_trade_no="+data.info.out_trade_no+"&type_p=2";
					},function error(data){
			           console.log("赞助支付失败")
					}
				)
	    	
	    } 
	    
	   
    
  
}])

$(function(){
	/*回复按钮触发事件*/
	 $("body").on("click",".hui_pou_a",function(){
	
	     var di_i= $(this).parents("li")
	     var username=$(di_i).find(".user_name_o_i").text();
		 $(di_i).find(".er_poiu_qd").show().find(".er_poou").focus().val("回复@"+username+"：")
		 
	 })
	 $(".qd_poiuy").on("click",function(){
		 $(".pup_act_f").show()
	 })
	 $(".close_p").on("click",function(){
		 $(".pup_act_f").hide()
	 })
	 
	 $("body").on("click",".liuy_tipye_top_n",function(){
		$(".liuy_tipye_top .fl").removeClass("act");
		$(this).addClass("act");
		 window.location.href=$(this).attr("data-hf")
	})
	setTimeout(function(){
		tipye=$(".liuy_tipye_top").offset().top;
		top_s=$(".act_list_p_right").offset().top
	},1000)
		
	 $(window).scroll( function() {
		var top_s=500;
	var tipye=500
		 var top_po_l=$(this).scrollTop()-(top_s+0);
		 var  max_top=$(".act_list_p_lefy").height()-$(".act_list_p_right").height()//最多滚动的距离
		 if($(this).scrollTop()>tipye){
			 $(".liuy_tipye_top").css({"position":"fixed","top":"0"})
		 }else{
			 $(".liuy_tipye_top").css({"position":"relative","top":"0"})
		 }
		 if($(this).scrollTop()>top_s){
			 if(top_po_l<max_top){
				 $(".act_list_p_right").css({ "margin-top": top_po_l})
			 }
		 }else{
			 $(".act_list_p_right").css({ "margin-top": 0})
		 }
	 })
	 
	 	

	

})

$('.j-navCity').addClass('none').prev('a').removeClass('none');


