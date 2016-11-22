/**
 * 活动详情
 */
angular.module('activity_detail', [ "directive_mml","activity_servrt"])
.controller('detail_centerController',["$scope","activity_data",function($scope,activity_data) {
		$(".head_full_details").css({"opacity":"1"})
		 $scope.detail;//活动详情数据
	     $scope.id=$("#activityId").val();
	     $scope.ticket_price;//票种价格
	     $scope.remark;//票种说明
	     $scope.activity_hot=[];
		 $scope.p_num=1;//票种张数    
	     $scope.mess_oiu=[];//活动留言数据
	     $scope.mess_cy=[];//参与活动
	     $scope.kmnb=1;//当前票价价格
	     $scope.active_state=1;//活动状态     1=没有结束的活动    2=已结束的活动
	     $scope.this_href= window.location.href;
	     $scope.postpone_p=true;
	     $scope.act_detail={"ticket_types":function(remark,price){
	    	  $scope.remark=(remark==""||remark==null?"无":remark);
	    	  $scope.ticket_price=price*$scope.p_num
	    	  $scope.kmnb=price
	     },"sign_up_p":function(){//我要报名
	    	 if( $scope.active_state==2){//活动结束
	    		 return;
	     }
	    	 
	    	 if(!$scope.prefsession_a){
	    		 $('#log_in').modal('toggle');
	    		 return;
	    	 }
	    	  $('#change_form_o').modal('toggle')
	     },"want_sign_up":function(tyoe_a){  //tyoe_a==1   收费报名  0免费报名
	  
	    	 if($scope.ticket_price==0){
	    		 tyoe_a=1
	    	 }
	    
	    	 
	    	 var input_text=[]
	    	 $(".input_form_m input").map(function(){
	    		 input_text.push($(this).val().trim())
	    	 })
	         var from_d= new this.m_form_data(input_text);//初始化表单数据
	    	 console.log(from_d) 
	    	 if(!form_mm.isnull(from_d.name)){
	    		 alert("报名姓名不能为空");
	    		 return
	    	 }
	    	 if(!form_mm.isnull(from_d.tel)){
	    		 alert("报名手机号码不能为空");
	    		 return
	    	 }
	    	 if(!form_mm.tel(from_d.tel)){
	    		 alert("报名手机号码格式错误");
	    		 return
	    	 }
	     	 for(var i=0;i<$(".input_form_m input").length;i++){
	    		 var thiiput=$(".input_form_m input").eq(i);
	    		 if($(thiiput).attr("data-bt")=="y"&&!form_mm.isnull($(thiiput).val())){
	    			 alert($(thiiput).attr("placeholder"));
		    		 return
	    		 }
	    	 }
	    	 var consumption=""
	    	 if(tyoe_a==1){
	    		 if(!$scope.postpone_p){
		    		 return
		    	 }
	    		 $scope.postpone_p=false;
	    		 var tyoe=1;//支付类型 0e币  1微信
	    		
	    		 $('.zf_poi:radio[name="coin"]').map(function(){
                      if($(this).is(":checked")){
                    	  tyoe=$(this).attr("data-ty")
                      }
                })
             
                $(".ticket_type_p").map(function(){
	    			 if($(this).attr("data-xz")==0){
	    				 consumption={"ticket_id":parseInt($(this).attr("data-id"))}
	    			 }
	    		 })
	    		  var data_p={"consumption":consumption,"conDetails":from_d,"quantity":$scope.p_num}
	    		
	    
	    		 
	    		if(tyoe==0||$scope.ticket_price==0){
	    			/* 提交表单数据*/
				     activity_data.pay_consumption(data_p).then(
				       function success(data) {
				    	    if(data.code!=0){
				    	    	alert(data.msg);
				    	    	return
				    	    }
				    	    location.reload();
					   },function error() {
						 console.log("报名失败")
					 });
	    			
	    			return;
	    		} 
	    		 if(tyoe==1&&$scope.ticket_price>0){
	    			/* 提交表单数据*/
	    			 data_p.channel=3
				     activity_data.charge_consumption(data_p).then(
				       function success(data) {
				    	   if(data.code!=0){
				    	    	alert(data.msg);
				    	    	return
				    	    }
				    	   window.location.href='/activity/wechat_pay?code_url='+data.info.code_url+'&price='+$scope.ticket_price+"&out_trade_no="+data.info.out_trade_no+"&type_p=1"
					   },function error() {
						 console.log("报名失败")
					 });
		    		 return;
	    			 
	    		 }
                

	    		 
	    	 }
	    	 
	    	 
	    	 
	    	 
	    	 if($scope.detail.ticket_list.length>0&&$scope.ticket_price>0){
	    		   $(".form_p_type_ouy").hide();
	  		       $(".ion_poiu_a").show();
	    	 }else{
	    		
	    		 /*提交表单数据*/
			     activity_data.add_consumption($scope.id,from_d).then(
			       function success(data) {
			    	  if(data.code!=0){
			    		  alert(data.msg)
			    		     	  $('#change_form').modal('toggle')
			    		  return
			    	  }
			    	  $('#change_form').modal('toggle')
			    	  location.reload();
				   },function error() {
					 console.log("提交表单失败")
				 });
	    	 }
	         
		     
		     
		  
		     
	    	 console.log(from_d)
	 
	
	     },"m_form_data":function(data){//免费活动表单数据
	    	 var cofig=$scope.detail.detail_config
	    	 for(var i=0;i<cofig.length;i++){
	    		 this[cofig[i].designation]=data[i]
	    	 }
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
         },"sign_up":function(id,page,size){
        	     activity_data.activity_id_by_consumption_list(id,page,size).then(
       				function success(data) {
       					$scope.results=data.results
       					$(data.rows).map(function(){
       						var kmes=new activity_id_by_consumption_list(this)
       						$scope.mess_cy.push(kmes)
       					})
       					
       				}, function error() {
       					console.log("获取参与人数失败")
       				});
         },"plus_sign":function(ty){//票卷加减号  
        	 /*ty等于真  为减否则加*/
        	 $scope.ticket_price=$scope.kmnb
        	 if(ty){
        		 if($scope.p_num>1){
        			 $scope.p_num--
        		 }
        	 }else{
        		 if($scope.p_num<10){
        			 $scope.p_num++
        		 } 
        	 }
        	 $scope.ticket_price= $scope.ticket_price*$scope.p_num;
         },"release_po":function(){//发布活动
        	 
        	 var data_p={"activity":{"id":$scope.id,"status":0}}
        	 $.ajax({ 
        	        type: "POST", 
        	        contentType : 'application/json;charset=UTF-8',
        	         url:  "/activity/release_activity", 
        	         data: JSON.stringify(data_p), 
        	         dataType: 'json', 
        	         success: function(result) {
        	        	 if(result.code!=0){
        	        		alert(data.msg)
   						  	return;
        	        	 }else{
        	        		 location.reload();
        	        	 }
        	         },
        	         error: function(res){
        	        	 console.log("活动发布失败")
        	         }, 
        	         complete:function(){
        	        	 console.log("活动发布失败")
        			} 
        	      }); 
        	 
        	 
        	 
        	/* activity_data.update_activity(data_p).then(
        				function success(data) {
        					  if(data.code!=0){
        						  alert(data.msg)
        						  return;
        					  }
        					  location.reload();
        					
        				}, function error() {
        					console.log("活动发布失败")
        				});*/
         },"qd_sign_in":function(url){//活动签到点击
           var vote_p=0;
           try{
        	   vote_p=$scope.detail.vote.id
           }catch(e){
        	   
           }
        	 open('/scan/sign_wall?activityId='+$("#activityId").val()+"&url="+url+"&vote_id="+vote_p)
         },"load_poi":function(){
        	 location.reload();
         }
         
	  }
	     /*获取赞助信息*/
	     $scope.support_id=$("#support_id").val();//获取赞助ID
	     if( $scope.support_id!=undefined){
	    	   activity_data.query_sponsor_detail($scope.support_id).then( //赞助详情
		    			function success(data){
		    				var deta=new sponsorDetail(data.info);
		    				$scope.detail_o=deta;
		    			},function error(data){
		    				
		    			}
		    		)
	     }
	  
	    		
	     $scope.act_detail.mess_po();//初始化留言数据
	     $scope.act_detail.sign_up($scope.id,1,10000);//初始化参数人的数据
	    /* 活动详情数据*/
	     activity_data.activity_detail($scope.id).then(
	    		
			function success(data) {
			
				 if(data.code!=0){
					 alert(data.msg)
					 return
				 }
					
				 $scope.detail=new activity_detail(data.info);
				 $scope.detail.apply_switch = data.info.apply_switch;
				 
				 var ntime=new Date().getTime();//获取当前的时间
			
				 if($scope.detail.eDate<ntime){
					 $scope.active_state=2;
				 }
				 try{
					 $scope.ticket_price=$scope.detail.ticket_list[0].price;//获取第一张票种价格
					 $scope.kmnb=$scope.detail.ticket_list[0].price
					 $scope.remark=$scope.detail.ticket_list[0].remark==""||$scope.detail.ticket_list[0].remark==null?"无":$scope.detail.ticket_list[0].remark;//获取第一张票种说明
				
				 }catch(e){
					 
				 }
				
			}, function error() {
				console.log("获取活动详情失败")
			});
	     
	    
	     
	     
	     
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
	     
	     
	     $scope.$on('ngfinish', function(ngfinishEvent) {
	    	  $(".act_de_lef").addClass("op1")
	    	 $(".carousel-inner .item").eq(0).addClass("active")
	    	   setTimeout(function(){
	    		 
	    		 	 $(".carousel-indicators .fl").eq(1).click() 
	    	   },1000)
	   
	    	 $(".switchover_poi .fl").eq(0).addClass("active")
	    	  $(".ticket_type_p").eq(0).addClass("act")
	    	  $(".ticket_type_p").eq(0).attr("data-xz",0)
	    	  
		})
	
}]).controller('launch_indexController',["$scope","activity_data",function($scope,activity_data) {//发起活动主页
	
	  $scope.act_index={"promotional_activities":function(a){//发起点击事件  a传1为发起活动，a传2为发起赞助
		  if(!$scope.prefsession_a){//判读用户是否登录
			  $('#log_in').modal('toggle');
			  return;
		  }
		  if(a==1){			 
			 window.open("/activity/to_sponsor_activity" )
		  }else if(a==2){
			 window.open("/activity/to_launch_sponsor")
		  }
		  
	  }}
}]).controller('wechat_payController',["$scope","activity_data",function($scope,activity_data) {//微信支付
	   var register=0;
	
	 
	   count_down();
	     function count_down(){
	    		 var orderid_date={
	 		            "out_trade_no":$("#order_number").text(),//订单号
	 					"channel":1
	 		   }
	 		   if(register++>20){
	 			  clearTimeout(time_or)
	 			   $("#wxqr").empty().css({"background":"#f2f2f2","text-align": "center","line-height": "265px","font-size": "18px"}).html('<span class="qc_text_m">二维码失效，请重新获取</span>')
	 			   return ;
	 		   }
	 		   activity_data.by_orderid(orderid_date).then(
	 				   function success(data) {
	 					   if(data.code!=0){
	 						   console.log(data.msg+"微信订单查")
	 						   return;
	 					   }
	 					   $(".first_step_pay").hide();
	 					   $(".second_step").show();
	 					  clearTimeout(time_or);//结束时钟
	 				   }, function error() {
	 					   console.log("微信订单查询失败")
	 				   });
	 		     var time_or=setTimeout(function(){
		 	    	  count_down();
		   	     },6000)
	     }

	
	
	
}])

$(function(){
	/*导航选中状态*/
	$(".nav_li").eq(3).addClass("act");
	$('.j-navCity').addClass('none').prev('a').removeClass('none');
	
	var top_s=500;
	var tipye=500
	$("body").on("click",".ticket_type_p",function(){
		$(".ticket_type_p").removeClass("act")
		$(this).addClass("act")
	
		  $(".ticket_type_p").attr("data-xz",1)
		  	$(this).attr("data-xz",0)
	})
	
	$("body").on("click",".liuy_tipye_top_n",function(){
		$(".liuy_tipye_top .fl").removeClass("act");
		$(this).addClass("act");
		 window.location.href=$(this).attr("data-hf")
	})
	setTimeout(function(){
		try{

			tipye=$(".liuy_tipye_top").offset().top;
			top_s=$(".act_list_p_right").offset().top
		}catch(e){}
	},1000)
		
	 $(window).scroll( function() {

		 var top_po_l=$(this).scrollTop()-(top_s+0);
		 var  max_top=$(".act_list_p_lefy").height()-$(".act_list_p_right").height()//最多滚动的距离
		 if($(this).scrollTop()>tipye){
			 $(".liuy_tipye_top").css({"position":"fixed","top":"0","z-index":1000})
			 $(".men_nav").hide()
			 $(".act_list_right_a_1").addClass("marhion_left")
			  if(top_po_l<max_top){	
				  $(".act_list_p_right").css({ "margin-top": top_po_l})
			  }
			 
		 }else{
			 $(".liuy_tipye_top").css({"position":"relative","top":"0"})
			 $(".men_nav").show()
			 	 $(".act_list_right_a_1").removeClass("marhion_left")
			 	 $(".act_list_p_right").css({ "margin-top": 0})
			
		 }
		 /*if($(this).scrollTop()>top_s){
			 if(top_po_l<max_top){				
				 $(".act_list_p_right").css({ "margin-top": top_po_l})
				 $(".act_list_right_a_1").animate({marginLeft:"424px"});
			 }
		 }else{
			 $(".act_list_p_right").css({ "margin-top": 0})
			 $(".act_list_right_a_1").animate({marginLeft:"0"});
		 }*/
	 })
	
	 /*回复按钮触发事件*/
	 $("body").on("click",".hui_pou_a",function(){
	
	     var di_i= $(this).parents("li")
	     var username=$(di_i).find(".user_name_o_i").text();
		 $(di_i).find(".er_poiu_qd").show().find(".er_poou").focus().val("回复@"+username+"：")
		 
	 })

	 $(".close_p").on("click",function(){
		 $(".pup_act_f").hide()
	 })
})


