/**
 * controller、、视图
 */


angular.module('ticket_volume_list', [ "directive_mml","activity_servrt","ui.router"])
.controller('mode_Controller',["$scope","activity_data","$location",function($scope,activity_data, $location) {//公共方法
	/*分类*/   
	$scope.classify=[
	                 {"title":"分类","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"路演场馆"},{"id":"2","name":"置业装修"},{"id":"3","name":"汽车活动"},{"id":"5","name":"商家促销"},{"id":"6","name":"精品课程"},{"id":"7","name":"户外运动"},{"id":"9","name":"保险投资"}]},
	                 {"title":"行业","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"孵化器"},{"id":"2","name":"房产"},{"id":"3","name":"互联网"},{"id":"4","name":"公益"},{"id":"5","name":"培训"},{"id":"6","name":"汽车"},{"id":"7","name":"旅游"},{"id":"8","name":"酒店"},{"id":"9","name":"家装"},{"id":"10","name":"卖场"},{"id":"11","name":"明星"},{"id":"12","name":"商会"},{"id":"13","name":"社区"},{"id":"14","name":"展会"},{"id":"15","name":"大健康"},{"id":"16","name":"校园"},{"id":"17","name":"媒体"},{"id":"18","name":"趣味"},{"id":"19","name":"金融"},{"id":"20","name":"其他"}]},
	                 {"title":"城市","maker_title":[{"id":"1","name":"北京 "},{"id":"2","name":"天津 "},{"id":"3","name":"上海 "},{"id":"4","name":"重庆 "},{"id":"51","name":"大连 "},{"id":"86","name":"南京 "},{"id":"99","name":"杭州 "},{"id":"128","name":"厦门 "},{"id":"418","name":"武汉 "},{"id":"435","name":"长沙 "},{"id":"449","name":"广州 "},{"id":"450","name":"深圳 "},{"id":"556","name":"西安 "},{"id":"627","name":"香港特别行政区"}]},
	                 {"title":"时间","maker_title":[{"id":"0","name":"不限"},{"id":"1","name":"明天"},{"id":"2","name":"近7天"},{"id":"3","name":"一个月"}] },
	                 {"title":"收费类型","maker_title":[{"id":"","name":"不限"},{"id":"0","name":"免费"},{"id":"1","name":"收费"}] }
	                 
	                 ];
  
	
	
	/* 赞助分类*/
	$scope.classification={"title":"行业","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"孵化器"},{"id":"2","name":"房产"},{"id":"3","name":"互联网"},{"id":"4","name":"公益"},{"id":"5","name":"培训"},{"id":"6","name":"汽车"},{"id":"7","name":"旅游"},{"id":"8","name":"酒店"},{"id":"9","name":"家装"},{"id":"10","name":"卖场"},{"id":"11","name":"明星"},{"id":"12","name":"商会"},{"id":"13","name":"社区"},{"id":"14","name":"展会"},{"id":"15","name":"大健康"},{"id":"16","name":"校园"},{"id":"17","name":"媒体"},{"id":"18","name":"趣味"},{"id":"19","name":"金融"},{"id":"20","name":"其他"}]}
	
	  /* 加密*/
	$scope.decrypt_p={"aesKey":"1234367822345608","ivStr":"1166222233334455","newAesKey":null,"aesEncrypt":function(data, keyStr, ivStr) {//加密
		  var sendData = CryptoJS.enc.Utf8.parse(data);
	        var key = CryptoJS.enc.Utf8.parse(keyStr);
	        var iv  = CryptoJS.enc.Utf8.parse(ivStr);
	        var encrypted = CryptoJS.AES.encrypt(sendData, key,{iv:iv,mode:CryptoJS.mode.CBC});
	        return encrypted.toString();
	    }
	  }
	
	 $(".menu_pup li").on("click",function(){
		 $(".menu_pup").toggleClass("show_a")
	 })
	  $scope.open_p=function (path){
		open(path)
	}

	$scope.city_name=localStorage.city_name==undefined?"深圳":localStorage.city_name
	
	
			  /*验证是否登陆*/
/*			 activity_data.verifyUserLogin().then(
			    		function success(data){
			    			if(data.code==0){
			    				$location.path("personal_center")
			    			}
			    		}, function error() {
							console.log("验证失败");
			    });*/
	
	
}])
.controller('index_controller',["$scope","activity_data",function($scope,activity_data) {//首页
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(0).addClass("bottom_act");
	$(".ds_poiu_a").addClass("show_a")
	$(".retreat_icon").addClass("none")

	$scope.act_index={
			"banner_index":[],
			"activity_hot":[],
			"activity_sum":{}
	}
	
    var mySwiper = new Swiper('.banner_top_b_banner',{
	             autoplay : 3000,//自动滑动 滚动速度
	             observer: true,//修改swiper自己或子元素时，自动初始化swiper
	             observeParents: true,//修改swiper的父元素时，自动初始化swiper
	             pagination : '.swiper-pagination',//分页器的class的名字
	             paginationClickable :true,//点击标题跳转到指定的那页
	      });
		
    
	/*轮播图*/
    activity_data.banner_index().then(
			function success(data) {
				if(data.code!=0){
					console.log(data.msg)
					return;
				}
				$(data.info).map(function(){
					if(this.activity_banner_url==null){
						return
					}
					var bandata= new indexbanner(this.activity_id,this.activity_banner_url)
					$scope.act_index.banner_index.push(bandata)
				})
			}, function error() {
				console.log("获取轮播图失败")
	});
	
	  /*热门三条数据*/
    activity_data.activityIndex().then(
			function success(data) {
				$scope.act_index.activity_sum=new activity_sum(data)
				
		}, function error() {
			console.log("获取热门活动失败")
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
					 $scope.act_index.activity_hot.push(hoti)
				})
		}, function error() {
			console.log("获取热门活动失败")
	});
    
	
}]).controller('activities_list',["$scope","activity_data","$stateParams",function($scope,activity_data,$stateParams) {//活动列表
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(0).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a")
	$(".retreat_icon").removeClass("none")
	var title_po="创客"
	var tio=parseInt($stateParams.activityTypeId)
	switch(tio){
		case 1:title_po="路演场馆";break
		case 2:title_po="置业装修";break
		case 3:title_po="汽车活动";break
		case 9:title_po="商家促销";break
		case 5:title_po="精品课程";break
		case 6:title_po="户外运动";break
		case 7:title_po="商品促销";break
		case 0:title_po="全部";break
	}
	$(".sys-loading").addClass("show_a")
	$(".list_activities .box_a").eq(0).find("span").text(title_po)
	
    var list_data={}
    	list_data.name="";//活动标题
        list_data.type=tio;//活动类型
    	list_data.cityId="";//城市ID
    	list_data.freeType="";//收费类型  1免费  2收费
    	list_data.industryId="";//行业ID
    	list_data.pageIndex=1;//页码
        list_data.pageSize=7;//行数
        list_data.time_status="";//时间
 
     $scope.act_list={  
    		 "activity_list":[],//初始化活动列表数据
    		 "select_data":[],//初始化活动下拉框数据
    		 "title_p":function(type,ev){
    			   	$(".list_active").addClass("show_a")
    			 	switch(type){
    			 		case 1:$scope.act_list.select_data=$scope.classify[0];break;
    			 		case 2:$scope.act_list.select_data=$scope.classify[1];break;
    			 		case 3:$scope.act_list.select_data=$scope.classify[3];break;
    			 		case 4:$scope.act_list.select_data=$scope.classify[4];break;
    			    }
    		 },
    		 "se_function":function(title,id,name){//下拉框点击方法
    				$(".sys-loading").addClass("show_a")
    				$scope.act_list.activity_list=[];
			 		list_data.pageIndex=1;
			 	  	$(".list_active").removeClass("show_a")
			 		switch(title){
    			 		case "分类": list_data.type=id;$(".list_activities .box_a").eq(0).find("span").text(name);break
    			 		case "行业":list_data.industryId=id;$(".list_activities .box_a").eq(1).find("span").text(name);break
    			 		case "时间":list_data.time_status=id;$(".list_activities .box_a").eq(2).find("span").text(name);break
    			 		case "收费类型":list_data.freeType=id;$(".list_activities .box_a").eq(3).find("span").text(name);break
			 		}
    				 $scope.act_list.act_list_data(list_data);
    		 },
    		 "act_list_data":function(act_list_data){//活动列表数据
    	         activity_data.myLaunchActivity(act_list_data).then(
    	    		function success(data){
    	    			if(data.code!=0){
    	    				alert(data.msg);
    	    				return 
    	    			}
    	    			$(data.rows).map(function(){
    	    				var da_info=new query_activity_list(this)
    	    				$scope.act_list.activity_list.push(da_info)
    	    			})
    	    			$(".sys-loading").removeClass("show_a")
    	    		}, function error() {
    					console.log("获取活动列表数据失败");
    	    });
     }}
   
     $scope.act_list.act_list_data(list_data);
     
   
     var poiu_po=true;
     var myscroll = new iScroll('wrapper',{
    	 vScrollbar: false,
    	 doubleTapZoom: 10, //双触放大几倍  
         onScrollEnd: function(){
               if(this.y == this.maxScrollY&&poiu_po){
            	   poiu_po=false
            	   pullupRefresh();
            	   $(".sys-loading").addClass("show_a")
               }
         }
     })
     /*轮播图遍历完之后执行*/
		$scope.$on('ngfinish', function(ngfinishEvent) {
			myscroll.refresh();//刷新
		})

     /**
      * 上拉加载具体业务实现
      */
     function pullupRefresh() {
         setTimeout(function() {
        	 poiu_po=true
        	  ++list_data.pageIndex;
        	  $scope.act_list.act_list_data(list_data);
            
         }, 1500);
     }


     
        
     
}]).controller('sponsor_listController',["$scope","activity_data",function($scope,activity_data) {//票卷列表
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(1).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none");
	$(".acr_poui_x span").on("click",function(){
		$(".acr_poui_x span").removeClass("ls")
		$(this).addClass("ls")
	})
	/*行业类别按钮点击事件*/
    $(".asddf_poiu").on("click",function(){
    	$(".menu_pup_p").toggleClass("show_a");
    })
    $("input").focus(function(){
    	$("footer").hide()
    })
    $("input").blur(function(){
    	$("footer").show()
    })
	var parameter_p= {"page":1,"rows":4, "sort":1,"industry_id":""}
	$scope.sponsor_list={ 
			"activitySupport_list":[],//初始化赞助数据
			"sp_sort":function(tp,stry){
				parameter_p.page=1;
				$scope.sponsor_list.activitySupport_list=[];
				if(stry==1){
					parameter_p.sort=tp;
				}else if(stry==2){
					$(".menu_pup_p").toggleClass("show_a");
					parameter_p.industry_id=tp;
				}
			
				 $scope.sponsor_list.sponsorship_re(parameter_p)
			},
			"sponsorship_re":function(parameter_p){ //赞助数据
				 /*票卷数据查看*/
			    activity_data.support_list(parameter_p).then(
			    		function success(data){
			    			if(data.code!=1){
			    				console.log(data.msg);
								return;
			    			}
			    			$(data.activitySupport_list).map(function(){
			    				  var ticket_volume_list=new sponsor_list(this);
			    				  $scope.sponsor_list.activitySupport_list.push(ticket_volume_list);
			    			})
			    			 
						  $(".sys-loading").removeClass("show_a")
			    		}, function error() {
							console.log("赞助列表数据获取失败");
			    });
			}
	}
    
    var poiu_po=true;
    var myscroll = new iScroll('wrapper',{
   	 vScrollbar: false,
   	 doubleTapZoom: 10, //双触放大几倍  
        onScrollEnd: function(){
              if(this.y == this.maxScrollY&&poiu_po){
           	   poiu_po=false
           	   sponsor_list_Refresh();
           	   $(".sys-loading").addClass("show_a")
              }
        }
    })
    /*轮播图遍历完之后执行*/
		$scope.$on('ngfinish', function(ngfinishEvent) {
			myscroll.refresh();//刷新
		})

    /**
     * 上拉加载具体业务实现
     */
    function sponsor_list_Refresh() {
        setTimeout(function() {
       	 poiu_po=true
       	  ++parameter_p.page;
         $scope.sponsor_list.sponsorship_re(parameter_p)
        }, 1500);
    }

    
    
    $scope.sponsor_list.sponsorship_re(parameter_p)
	
}]).controller('ticket_volume_listController',["$scope","activity_data",function($scope,activity_data) {//票卷列表
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(3).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a")
	$(".retreat_icon").removeClass("none")
	$scope.pload_p=false;
		  /*验证是否登陆*/
		 activity_data.verifyUserLogin().then(
		    		function success(data){
		    			if(data.code==0){
		    				$scope.pload_p=true
		    			}
		    		}, function error() {
						console.log("验证失败");
		    });
	
	
	var parameter_a= {
			 "pageIndex":1,//页数
			"pageSize":100,//行数
			"filter":0,// (活动状态1未开始2进行中3结束)  可选
		 }
	
	$scope.volume_list={
			"v_data":[],//没有过期票卷列表数据
			"over_data":[],//过期票卷列表数据
			"TicketList":function(parameter,filter){
		 /*票卷数据查看*/
	    activity_data.queryTicketList(parameter).then(
	    		function success(data){
	    			if(data.code!=0){
	    				console.log(data.msg);
						return;
	    			}
	    			$(data.info).map(function(){
	    				var tick_info=new ticket_volume_list(this);
	    				if(parameter.filter!=3){
	    					$scope.volume_list.v_data.push(tick_info);
	    					
	    					
	    				}else if(parameter.filter==3){//过期票卷
	    					
	    					$scope.volume_list.over_data.push(tick_info);
	    				}
	    			
	    			})
	    			
				
	    		}, function error() {
					console.log("查看票卷数据失败");
	    });
	},"ticket_volume":function(evt){//查看过期票卷
		 $(".volume_button").hide();
         $(".expired_ticket_volume").show();
         parameter_a.filter=3
          $scope.volume_list.TicketList(parameter_a);
	}
	
	}
	 console.log(parameter_a)
	$scope.volume_list.TicketList(parameter_a);
	

}]).controller('add_page_controller',["$scope","activity_data",function($scope,activity_data) {//点击加号进来的页面
	$(".mml_bottom a").removeClass("bottom_act");
	  $scope.add_page={"msg":function(){
	       mui.alert('发起活动请到电脑端发起', 'E场景活动');
	
	  }}
}]).controller('loadController',["$scope","activity_data","$location",function($scope,activity_data,$location) {//登陆
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(4).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none");
	
	$(".forget_in").on("click",function(){
		 mui.alert('忘记密码请到PC端修改', 'E场景活动', function() {
				  $("#account").focus()
			  });
	})
	$scope.load_ing={
		"landing":function(){//登陆
		  var account=$("#account").val();//账号
		  var password=$("#password").val();//密码
		  
		  
		  if(!form_mm.isnull(account)){
			  mui.alert('请输入手机号码', 'E场景活动', function() {
				  $("#account").focus()
			  });
			  return;
		  }
		  if(!form_mm.tel(account)){
			  mui.alert('手机号码格式错误', 'E场景活动', function() {
				  $("#account").focus()
			  });
			  return;
		  }
		  if(!form_mm.isnull(password)){
			  mui.alert('请输入密码', 'E场景活动', function() {
				  $("#password").focus()
			  });
			  return;
		  }
		  var u_password=$scope.decrypt_p.aesEncrypt(password,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr)
		  var datytt={}
		  datytt.user_phone=account   
		  datytt.user_password=u_password
		   activity_data.userLogin(datytt).then(
		    		function success(data){
		    			if(data.code!=0){
		    				  mui.alert(data.msg, 'E场景活动', function() {
			    					
			    				});
		    				  
							return;
		    			}
		    			 window.history.back()
		    			
					
		    		}, function error() {
		    			  mui.alert('登陆失败', 'E场景活动', function() {
		    					
		    			});
		    });
			
			 
	  }}
  	activity_data.selectOne().then(
    		function success(data){
    			if(data.code!=0){
    				  $location.path("/loading")
    				  return
    			}
    			 $location.path("/personal_center")
    		}, function error() {
				console.log("获取用户信息失败");
    });
	  
	 
	  
}]).controller('registerController',["$scope","activity_data",function($scope,activity_data) {//注册
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(4).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none");  
	 var countdown=true,countdown_time=90,reret=true;//倒计时
	 
	$scope.register={
			"verification_code":function(){
				 var rit_phone=$("#rit_phone").val(),//手机号码
				 	 valueCode=$("#valueCode").val()//图形验证码
				 	
			     if(!form_mm.isnull(rit_phone)){
				     mui.alert('请输入手机号码', 'E场景活动', function() {
				    	 $("#rit_phone").focus()
				     });
				     return;
			 	 }
			 	  if(!form_mm.tel(rit_phone)){
					  mui.alert('手机号码格式错误', 'E场景活动', function() {
						  $("#rit_phone").focus()
					  });
					  return;
				  }
			 	 if(!form_mm.isnull(valueCode)){
				     mui.alert('请输入图形验证码', 'E场景活动', function() {
				    	 $("#valueCode").focus()
				     });
				     return;
			 	 }
			 	 if(!countdown){
			 		 return
			 	 }
			 	 if(countdown){
			 		activity_data.registerCode(rit_phone,valueCode).then(
				    		function success(data){
				                 if(data!=0){
				                	   mui.alert(data.msg, 'E场景活动', function() {
				      			    	 $("#valueCode").focus();
				      			    	 $scope.register.replace()
				      			     });
				                	   return;
				                 }
				                 countdown=false;
				             	var down_time=setInterval(function(){
						 			if(--countdown_time>0){
						 				$(".df_poiu_a").text(countdown_time).css({"background":"#e0e0e0","width":"70px"})
						 			}else{
						 				 countdown=true;
						 				clearTimeout(countdown_time)
						 				$(".df_poiu_a").css({"background":"#4FA45D"}).text("获取验证码")
						 			}
						 			
						 		}, 1000);
				    		}, function error() {
				    			 mui.alert('短信验证发送失败', 'E场景活动', function() {
			      			    	 $("#valueCode").focus()
			      			     });
				   });
			 	
			 		
			 	 }
			},"replace":function(){//更换图形验证码
				$(".verification_code").attr("src","/validateImageServlet?v="+new Date().getTime())
			},"register_event":function(){//注册按钮点击方法
				var rit_phone=$("#rit_phone").val(),//手机号码
		    		valueCode=$("#valueCode").val(),//图形验证码
		    		rit_code=$("#rit_code").val(),//短息验证码
		    		rit_pwd=$("#rit_pwd").val(),//密码
		    		rit_pwdT=$("#rit_pwdT").val(),//确认密码
		    		data_ur={'phone':rit_phone,'rit_code':rit_code,'password':rit_pwd};
				 if(!form_mm.isnull(rit_phone)){
				     mui.alert('请输入手机号码', 'E场景活动', function() {
				    	 $("#rit_phone").focus()
				     });
				     return;
			 	 }
			 	  if(!form_mm.tel(rit_phone)){
					  mui.alert('手机号码格式错误', 'E场景活动', function() {
						  $("#rit_phone").focus()
					  });
					  return;
				  }
			 	 if(!form_mm.isnull(valueCode)){
				     mui.alert('请输入图形验证码', 'E场景活动', function() {
				    	 $("#valueCode").focus()
				     });
				     return;
			 	 }
			 	 if(!form_mm.isnull(rit_code)){
				     mui.alert('请输入短息验证码', 'E场景活动', function() {
				    	 $("#rit_code").focus()
				     });
				     return;
			 	 }
			 	 
			 	 if(!form_mm.isnull(rit_pwd)){
				     mui.alert('请输入密码', 'E场景活动', function() {
				    	 $("#rit_pwd").focus()
				     });
				     return;
			 	 }
			 	 if(rit_pwd.length<6){
				     mui.alert('密码不能小余6位', 'E场景活动', function() {
				    	 $("#rit_pwd").focus()
				     });
				     return;
			 	 }
			 	 if(!form_mm.isnull(rit_pwdT)){
				     mui.alert('请输入确认密码', 'E场景活动', function() {
				    	 $("#rit_pwdT").focus()
				     });
				     return;
			 	 }
			 	 if(rit_pwd!=rit_pwdT){
				     mui.alert('两次密码输入不一致', 'E场景活动', function() {
				    	 $("#rit_pwdT").focus()
				     });
				     return;
			 	 }
			 	$(".sys-loading").addClass("show_a")
			 	if(!reret){
			 		return
			 	}
			 
			 	activity_data.doRegister(data_ur).then(
			    		function success(data){
			    			reret=true
			    			if(data.code!=0){
			    				$(".sys-loading").removeClass("show_a")
			    				mui.alert(data.msg, 'E场景活动', function() {
			      			    	 
			      			     });
			    				return
			    			}
			    		
			    			$(".sys-loading").removeClass("show_a")
			    			$location.path("personal_center")
			    		}, function error() {
			    			 mui.alert('注册失败', 'E场景活动', function() {
			    				 reret=true
			    		});
			   });
				reret=false  
	}}
	
}]).controller('loan_co',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //白条功能

	$scope.activity_id=$stateParams.activity_id;//获取传过来的活动
	  $scope.answerPup=function(){ //申请成功提示
		  	var loan_name=$(".loan_name").val();//姓名
		  	var loan_tel=$(".loan_tel").val();//手机
		  	var loan_money=parseFloat($(".loan_money").val());//贷款金额
		  	var loan_remark=$(".loan_remark").val();//备注理由
		  	var sex=$("#sex1").is(":checked")?1:2;//性别选择
		  	var periods=parseInt($("#showUserPicker").text());//分期期数
		  	var activity_id=$(".activity_id").val();
		  	var loan_data={
		   "name":loan_name,
		   "sex":sex,
		   "phone":loan_tel,
		   "apply_money":loan_money,
		    "contact_status":1,
		    "user_remark":loan_remark,
		    "periods":periods,
		    "activity_id":$scope.activity_id
					}
		  	if(!form_mm.isnull(loan_name)){
				mui.alert("姓名不能为空")
				$(".loan_name").focus();
				return;
			}
		  	if(!form_mm.tel(loan_tel)){
				mui.alert("手机号码格式错误")
				$(".loan_tel").focus();
				return;
			}
		  	if(isNaN(loan_money)){
				mui.alert("贷款金额不能为空")
				$(".loan_money").focus();
				return;
			}
		  	if(loan_money<=0){
				mui.alert("贷款金额不能小于0")
				$(".loan_money").focus();
				return;
			}
		  	if(isNaN(periods)){
				mui.alert("请选择还款期数")
				$("#showUserPicker").focus();
				return;
			}
		  	activity_data.loan_money(loan_data).then(
		    		function success(data){
		    			if(data.code!=0){
		    				mui.alert(data.msg) 
		    				return
		    			}
		    				mui.alert("申请成功！\n工作人员近期会和您取的联系！")  
		    				$(".now_check").text("待审核").css({"background":"rgba(0,0,0,.2)"}).unbind("click")
		    			
		    		}, function error() {
		    			mui.alert("验证失败");
		    });
			  	
		  }
		  $scope.showAnswer=function(){  //常见问题显示
		  		$(".answer_wrap").css("display","block")
		  }
		  $scope.divideMoney=function(){  //分期期数选择器
		  		(function($, doc) {
				$.init();
				$.ready(function() {
					var picker = new mui.PopPicker();
					
					
				    picker.setData([{value:'1',text:'1期'},{value:'3',text:'3期'},{value:'6',text:'6期'},{value:'12',text:'12期'},{value:'24',text:'24期'},{value:'36',text:'36期'}]);
				    picker.show(function (selectItems) {				    	
				    	document.getElementById("showUserPicker").innerHTML=selectItems[0].text;				    
				    })
					
				});
			})(mui, document);
		  }

}]).controller('personal_center',["$scope","activity_data","$location",function($scope,activity_data,$location) { //个人中心
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(4).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none"); 
    mui.previewImage();
    var kmnb_p=true
	$scope.pe_er={   
			"user_icon_o":{},
			"logged_out":function(){//退出登录
				activity_data.clear_cookie().then(
			    		function success(data){
			    			 $location.path("/home")
			    		}, function error() {
							console.log("退成登录失败");
			    });
				
			},
			"modify_data":function(){//修改资料
				var nickname=$("#nickname").val(),//昵称
				sex_may=$("#sex_may").val(),//性别
				industry_id=$("#industry_id").val(),//行业
				signature=$("#signature").val(),//签名
				user_id=$scope.pe_er.user_icon_o.user_id
				if(!kmnb_p){
					return
				}
				activity_data.updateUserInfo_to(user_id,nickname,sex_may,industry_id,signature).then(
			    		function success(data){
			    			kmnb_p=true
			    			if(data.code!=1){
			    				return
			    			}
			    			$location.path("personal_center")
			    			
			    			$(".sys-loading").removeClass("show_a")
			    		}, function error() {
							console.log("修改密码失败");
			    });
				kmnb_p=false
				
			},"feedback":function(){
				var suggestion_feedback=$(".suggestion_feedback").val();//获取意见反馈信息
				
				if(!form_mm.isnull(suggestion_feedback)){
					mui.alert("意见反馈信息不能为空")
					$(".suggestion_feedback").focus();
					return;
				}
				activity_data.add_feedback(suggestion_feedback).then(
			    		function success(data){
			    			if(data.code!=1){
			    				mui.alert('意见反馈提交失败', 'E场景活动');
			    				  return;
			    			}
			    			mui.alert('意见反馈提交成功', 'E场景活动',function(){
			    				  $location.path("/loading")
			    			});
			    			 $location.path("/loading")
			    			
			    		}, function error() {
							console.log("意见反馈提交失败");
			    });
				
			}
	}
  	activity_data.selectOne().then(
    		function success(data){
    		/*	if(data.code!=0){
    				  $location.path("/loading")
    				  return
    			}*/
    			$scope.pe_er.user_icon_o=new user_info(data.info)
    		}, function error() {
				console.log("获取用户信息失败");
    });

    activity_data.getDatas('GET', '/sponsor/get_sponsorapply')
    .then(function(data) {
    	if(data.code == 0 && data.info.status == 1) {
			$scope.sponsorStatus = true;
		} else {
			$scope.sponsorStatus = false;
		}
    });
	
}]).controller('change_passwordController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //修改密码
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(4).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none"); 
	var user_id=$stateParams.user_id
	var kmnb=true;
	$scope.password=function(){
			var rit_pwd=$("#rit_pwd").val(),//密码
    		rit_pwdT=$("#rit_pwdT").val(),
    		new_pwd=$("#new_pwd").val();//确认密码
			 if(!form_mm.isnull(new_pwd)){
			     mui.alert('请输入原始密码', 'E场景活动', function() {
			    	 $("#rit_pwd").focus()
			     });
			     return;
		 	 }
    		 if(!form_mm.isnull(rit_pwd)){
			     mui.alert('请输入密码', 'E场景活动', function() {
			    	 $("#rit_pwd").focus()
			     });
			     return;
		 	 }
		 	 if(rit_pwd.length<6){
			     mui.alert('密码不能小余6位', 'E场景活动', function() {
			    	 $("#rit_pwd").focus()
			     });
			     return;
		 	 }
		 	 if(!form_mm.isnull(rit_pwdT)){
			     mui.alert('请输入确认密码', 'E场景活动', function() {
			    	 $("#rit_pwdT").focus()
			     });
			     return;
		 	 }
		 	 if(rit_pwd!=rit_pwdT){
			     mui.alert('两次密码输入不一致', 'E场景活动', function() {
			    	 $("#rit_pwdT").focus()
			     });
			     return;
		 	 }
		 	 if(!kmnb){
		 		 return
		 	 }
		 	$(".sys-loading").addClass("show_a")
		 	
		 	
		 	
/*		    new_pwd=$scope.decrypt_p.aesEncrypt(new_pwd,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr)
		 	rit_pwdT=$scope.decrypt_p.aesEncrypt(rit_pwdT,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr)*/
		 	var opidate={}
		 	opidate.new_pwd=rit_pwdT  
		 	opidate.old_pwd=new_pwd
		 	 activity_data.updateUserInfo(opidate).then(
		    		function success(data){
		    			kmnb=true
		    			$(".sys-loading").removeClass("show_a");
		    			if(data.code!=0){
		    				   mui.alert(data.msg, 'E场景活动', function() {
		    				    	 
		    				     });
		    				return
		    			}
		    			 mui.alert(data.msg, 'E场景活动', function() {
		    					$location.path("personal_center")
    				     });
		    			
		    		
		    			
		    			
		    		}, function error() {
						console.log("修改密码失败");
		    });
		 	kmnb=false;
		  
	  }
	
}]).controller('my_activities_controller',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //个人中心我的活动
	$(".mml_bottom a").removeClass("bottom_act");
	$(".mml_bottom a").eq(4).addClass("bottom_act");
	$(".ds_poiu_a").removeClass("show_a");
	$(".retreat_icon").removeClass("none"); 
	var data_act={"pageIndex":1,"pageSize":10,"user_id":$stateParams.user_id,"time_status":""}  // 1:未开始    3：已结束
	var poiu_po=true;

	var type=$stateParams.type
	$scope.type_p=$stateParams.type
	$(".sys-loading").addClass("show_a");
	$(".act_use_p a").on("click",function(){
		$(".act_use_p a").removeClass("cat_poo")
		$(this).addClass("cat_poo")
	})
	$scope.my_activities={ "activity_list":[],//初始化活动列表数据
		"participant":function(data_act){//参与的活动
	 	 activity_data.myTakePartInActivity(data_act).then(
	
		    		function success(data){
		     			$(".sys-loading").removeClass("show_a")
		    			if(data.code!=0){
		    				  mui.alert(data.msg, 'E场景活动',function(){
		    					  window.location.href="/#/loading"
		    				  });
		    				return;
		    			}
		    			
		    			poiu_po=true
		    			
		    			 $(data.rows).map(function(){
		    				 var khg=new query_activity_list(this)
		    				 khg.order_id=this.order_id
		    				 $scope.my_activities.activity_list.push(khg) 
		    			
		    			 })
		    		
		    		}, function error() {
						console.log("活动我的活动失败");
		    });
	},"category":function(ty){//参与活动类别查询
		$(".sys-loading").addClass("show_a");
		data_act.pageIndex=1
		data_act.time_status=ty
		$scope.my_activities.activity_list=[]
		type=parseInt(type)
		switch(type){
			case 1:$scope.my_activities.participant(data_act);break;
			case 2:$scope.my_activities.collection(data_act);break;
			case 3:$scope.my_activities.enshrine(data_act);break;
		}

	},"promotional_activities":function(){
		setTimeout(function(){
			++data_act.pageIndex;
			type=parseInt(type)
			switch(type){
				case 1:$scope.my_activities.participant(data_act);break;
				case 2:$scope.my_activities.collection(data_act);break;
				case 3:$scope.my_activities.enshrine(data_act);break;
			}
		
		},1000)
		
	},
	"collection":function(data_act){
		 activity_data.myLaunchActivity(data_act).then(
		    		function success(data){ 
		    			$(".sys-loading").removeClass("show_a")
		    		
		    			if(data.code!=0){
		    				  mui.alert(data.msg, 'E场景活动',function(){
		    					  window.location.href="/#/loading"
		    				  });
		    				 
		    				return;
		    			}
		    		
		    			poiu_po=true
		    		
		    			 $(data.rows).map(function(){
		    				 var khg=new query_activity_list(this)
		    				 $scope.my_activities.activity_list.push(khg) 
		    				
		    			 })
		    		
		    		}, function error() {
						console.log("活动我的活动失败");
		    });
		
	},
	"enshrine":function(data_act){//收藏活动
		 activity_data.myAtteActivityData(data_act).then(
		    		function success(data){    		
		    			if(data.code!=0){
		    				  mui.alert(data.msg, 'E场景活动',function(){
		    					  window.location.href="/#/loading"
		    				  });
		    				return
		    			}
		    			$(".sys-loading").removeClass("show_a")
		    			poiu_po=true
		    			
		    			 $(data.rows).map(function(){
		    				 var khg=new query_activity_list(this)
		    				 $scope.my_activities.activity_list.push(khg) 
		    				
		    			 })
		    		
		    		}, function error() {
						console.log("活动我的活动失败");
		    });
		
	}}
	
 
    var myscroll = new iScroll('wrapper',{
   	 vScrollbar: false,
   	 doubleTapZoom: 10, //双触放大几倍  
        onScrollEnd: function(){
              if(this.y == this.maxScrollY&&poiu_po){
            	  	poiu_po=false
            	  	$(".sys-loading").addClass("show_a")
            		$scope.my_activities.promotional_activities();
              }
        }
    })
    /*列表遍历完执行*/
		$scope.$on('ngfinish', function(ngfinishEvent) {
		     myscroll.refresh();//刷新
		})
		
		switch(type){
		case "1":
			$(".user_ad_top a").removeClass("act_a");
			$(".user_ad_top a").eq(0).addClass("act_a");
			data_act.pageIndex=1
			data_act.time_status=0
			type=1
			$scope.my_activities.activity_list=[]
			$scope.my_activities.participant(data_act)
			$(".user_act_pii").removeClass("user_act_pii_p")
			break;
		case "2":
			$(".user_ad_top a").removeClass("act_a");
			$(".user_ad_top a").eq(1).addClass("act_a");
			data_act.pageIndex=1
			data_act.time_status=0
			type=2
			$scope.my_activities.activity_list=[]
			$scope.my_activities.collection(data_act)
		    $(".user_act_pii").addClass("user_act_pii_p")
			;break;
		case "3":
			$(".user_ad_top a").removeClass("act_a");
			$(".user_ad_top a").eq(2).addClass("act_a");
			data_act.pageIndex=1
			data_act.time_status=0
			type=3
			$scope.my_activities.activity_list=[]
			$scope.my_activities.enshrine(data_act)
			$(".user_act_pii").addClass("user_act_pii_p")
			;break;
	}
	

}]).controller('sponsorship_detailsController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //个人中心我的赞助
	$scope.type=$stateParams.type;//获取传过来的参数    1.发起在赞助  2，赞助的
	var sp_data={"pageIndex":1,"pageSize":10,"status":""}
	var poiu_po=true;
	$(".act_use_p a").on("click",function(){
		$(".act_use_p a").removeClass("cat_poo")
		$(this).addClass("cat_poo")
	})
	$(".user_ad_top  a").on("click",function(){
		$(".user_ad_top  a").removeClass("act_a");
		$(this).addClass("act_a");
	})
	$scope.sponsorship={
    		"sp_list":[],//发起的赞助列表信息
    		"project_sponsor":function(sp_data){//发起的赞助
    			$(".user_ad_top  a").removeClass("act_a").eq(0).addClass("act_a");
		     activity_data.my_launch_support(sp_data).then(
		    		function success(data){    		
		    			  if(data.code!=0){
		    				  return;
		    			  }
		    			  $(data.rows).map(function(){
		    				  var sp_date=new sponsorship_details(this);
		    				  $scope.sponsorship.sp_list.push(sp_date);
		    			  })	  
		    			  poiu_po=true
		    			    	$(".sys-loading").removeClass("show_a")
		    		}, function error() {
						console.log("获取赞助失败");
		    });
    },"friendly":function(sp_data){//赞助的活动
    	$(".user_ad_top  a").removeClass("act_a").eq(1).addClass("act_a");
    	  activity_data.my_takein_support(sp_data).then(
		    		function success(data){    		
		    			  if(data.code!=0){
		    				  return;
		    			  }
		    			  $(data.rows).map(function(){
		    				  var sp_date=new sponsorship_details(this);
		    				  $scope.sponsorship.sp_list.push(sp_date);
		    			  })	  
		    			  poiu_po=true
		    			    	$(".sys-loading").removeClass("show_a")
		    		}, function error() {
						console.log("获取赞助失败");
		    });
    },"sponsored_title":function(ty){//赞助标题点击
    	$scope.type=ty
    	$scope.sponsorship.status("",ty)
    },"status":function(ty){//赞助分类
    	$scope.sponsorship.sp_list=[]
        sp_data.pageIndex==1;
    	sp_data.status=ty;
    	if($scope.type==1){
    		$scope.sponsorship.project_sponsor(sp_data);
    	}else if($scope.type==2){
    		$scope.sponsorship.friendly(sp_data);
    	}else if($scope.type==3){
    	
    		$scope.sponsorship.sp_list=[]
            sp_data.pageIndex==1;
    	}
    	
    },"refresh":function(){
    	++sp_data.pageIndex;
    	$scope.sponsorship.project_sponsor(sp_data);
    }
	
	}

    switch($scope.type){
    		case  "1":$scope.sponsorship.project_sponsor(sp_data);break;
    		case  "2":$scope.sponsorship.friendly(sp_data);break;
    		case  "3":$scope.sponsorship.sp_list=[];
    				  sp_data.pageIndex==1;
    				  $(".user_ad_top  a").removeClass("act_a").eq(2).addClass("act_a");
    				  ;break;
    }
	
	/*下拉刷新*/
	var myscroll = new iScroll('wrapper',{
	   	 vScrollbar: false,
	   	 doubleTapZoom: 10, //双触放大几倍  
	        onScrollEnd: function(){
	              if(this.y == this.maxScrollY&&poiu_po){
	            	  	poiu_po=false
	            	  	$scope.sponsorship.refresh();
	            	  	$(".sys-loading").addClass("show_a")
	              }
	        }
	    })
	    /*轮播图遍历完之后执行*/
			$scope.$on('ngfinish', function(ngfinishEvent) {
			     myscroll.refresh();//刷新
		  })
	
	
}]).controller('my_sponsorship_detailsController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //个人赞助详情
		var sp_id=$stateParams.id;	
		var  data_p={"activity_support_id":sp_id,"peo_num":"","rows":25,"page":1};
        $scope.my_sponsorship={
        		"money":$stateParams.money,//获取穿过来的已筹金额
        		"peo_num":$stateParams.peo_num,//获取穿过来的人数
        		"data_array":[],
        		"particulars":function(data_p){
        			activity_data.takein_detail(data_p).then(
        		    		function success(data){    		
        		    			  if(data.code!=0){
        		    				  return;
        		    			  }
        		    			  $(data.activitySupport_list).map(function(){
        		    				  var data_o=new takein_detail(this)
            		    			  $scope.my_sponsorship.data_array.push(data_o)
        		    			  })
        		    		
        		    		}, function error() {
        						console.log("获取赞助详情失败");
        		    });
        		}
        }
		$scope.my_sponsorship.particulars(data_p);
	
}]).controller('sponsorship_paymentController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //赞助--支付详情
	$scope.my_sponsorship={  
			"payment":{},
			"sponsorship_payment":function(data_p){
				activity_data.order_detaill(data_p).then(
    		    		function success(data){    		
    		    			  if(data.code!=1){
    		    				  return;
    		    			  }
    		    			  $scope.my_sponsorship.payment=new income_details(data.supportPay); 
        		    		
    		    		}, function error() {
    						console.log("获取赞助支付详情失败");
    		    });
			}
	}
	$scope.my_sponsorship.sponsorship_payment($stateParams.id)
}]).controller('volume_details_Controller',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //活动详情
     $scope.volume_details={
    		   "data_p":[],
    		  "dat_po":{}, 
    		    "details_a":function(data_p){
            	 activity_data.query_consumption_user_list(data_p).then(
     		    		function success(data){    		
     		    			  if(data.code!=0){
     		    				  mui.alert(data.msg, 'E场景活动');
     		    				  return;
     		    			  }
     		    			 $scope.volume_details.dat_po.results=data.results//已报名
     		    			 $scope.volume_details.dat_po.already_sign=data.otherinfo.already_sign//已签到
     		    			 $scope.volume_details.dat_po.not_sign=data.otherinfo.not_sign//未签到
     		    			
     		    			  $(data.rows).map(function(){
     		    				  var da_th=new query_consumption_user_list(this);
     		    				 $scope.volume_details.data_p.push(da_th)
     		    			  })
         		    		
     		    		}, function error() {
     						console.log("获取活动详情失败");
     		    });  
             }		 
     }

     $scope.volume_details.details_a({"pageIndex":1,"activity_id":$stateParams.id,"pageSize":"500"})
}]).controller('my_whiteController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //活动详情
	var type_i=$stateParams.type,poiu_po=true;
	var date_p={"user_id":$stateParams.user_id,"pageIndex":1,"pageSize":"10","contact_status":"1"}
	$scope.ious_p={  
			"date_arr":[],
			"date_pio":function(date_p){
				activity_data.query_page_p(date_p).then(
		    		function success(data){    		
		    			  if(data.code!=0){
		    				  mui.alert(data.msg, 'E场景活动');
		    				  return;
		    			  }
		    			  poiu_po=true;
		    				$(".sys-loading").removeClass("show_a")
		    			  $(data.rows).map(function(){
		    				  var dkhg_this=new query_page(this);
		    				  $scope.ious_p.date_arr.push(dkhg_this);
		    			  })
		    			  
		    		}, function error() {
						console.log("获取白条信息失败");
		    });  
	},"iou_state":function(ty){//改变状态
		date_p.pageIndex=1;//初始化页码
		$scope.ious_p.date_arr=[];//初始化列表数据
		date_p.contact_status=ty;
		
		$scope.ious_p.date_pio(date_p)
	}
	
	}
	date_p.contact_status=type_i;
	$(".user_poi p").removeClass("act_p_o")
	$(".user_poi p").eq((type_i-1)).addClass("act_p_o"); 
	$scope.ious_p.date_pio(date_p);//页面打开执行
	var myscroll = new iScroll('wrapper',{
   	 vScrollbar: false,
   	 doubleTapZoom: 10, //双触放大几倍  
        onScrollEnd: function(){
              if(this.y == this.maxScrollY&&poiu_po){
            	  	poiu_po=false
            	  	$(".sys-loading").addClass("show_a")
            	  	++date_p.pageIndex
            		$scope.ious_p.date_pio(date_p);
              }
        }
    })
    /*列表遍历完执行*/
		$scope.$on('ngfinish', function(ngfinishEvent) {
		     myscroll.refresh();//刷新
		}) 
	$(".user_poi p").on("click",function(){
		$(".user_poi p").removeClass("act_p_o")
		$(this).addClass("act_p_o")
	})
}]).controller('review_detailsController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //活动详情
   $scope.review=$stateParams
   var img_src=["","/img/examine_a.png","/img/examine_b.png","/img/examine_c.png","/img/examine_d.png"]
   $scope.review.img_src=img_src[$scope.review.contact_status]

}]).controller('sponsor_authCtrl', ['$scope','activity_data', '$stateParams', function ($scope,activity_data,$stateParams) {
	var vm = $scope;
	vm.sponsor = {};
	// 认证状态
	vm.status = {
		'editForm': false,
		'success': false,
		'fail': false,
		'waiting': false
	};
	// var data = {
	// 	code: 0,
	// 	msg: '错误',
	// 	info: {
	// 	"name":"小猫公司",
	// 	"contacter":"喵先生",
	// 	"contacter_phone":"18307673909",
	// 	"introduction":"主办方是一个庞大的养喵的组织",
	// 	"status": 2
	// 	}
	// };
	activity_data.getDatas('GET', '/sponsor/get_sponsorapply')
    .then(function(data) {
    	if(data.info == null) {
			vm.status.editForm = true;
			return false;
		}
		if(data.code==0 && data.info.status){
			switch(Number(data.info.status)) {
		  		case 1:  vm.status.success = true;vm.sponsor = data.info; break;
		    	case 2:  vm.status.fail = true;vm.sponsor.failInfo = data.msg; break;
		    	case 3:  vm.status.waiting = true; break;
			}
		}
    });

	$scope.sponsorAuthForm = function() {
		if(!form_mm.isnull(vm.sponsor.name)){
		     mui.alert('请输入主办方单位名称', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	if(!form_mm.isnull(vm.sponsor.contacter)){
		     mui.alert('请输入主办方联系人', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	if(!form_mm.isnull(vm.sponsor.contacter_phone)){
		     mui.alert('请输入主办方联系方式', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	if(!form_mm.tel(vm.sponsor.contacter_phone)){
		     mui.alert('主办方联系方式格式错误', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	if(!form_mm.isnull(vm.sponsor.introduction)){
		     mui.alert('请输入主办方简介', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	if((vm.sponsor.introduction).length > 150){
		     mui.alert('主办方简介不能超过150字', 'E场景活动', function() {
		  
		     });
		     return;
	 	}
	 	activity_data.getDatas('POST', '/sponsor/add_or_update_apply_sponsor', vm.sponsor)
	    .then(function(data) {
	    	if(data.code == 0){
				vm.status.editForm = false;
				vm.status.waiting = true;
			} else {
				mui.alert(data.msg,'E场景活动', function() {});
			}
	    });
	}
	// 重新认证，显示主办方认证表单
	$scope.reSponsorAuth = function () {
		vm.status.editForm = true;
		vm.status.fail = false;
	}
			
}]).controller('activity_show_ticket',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) { //活动详情
	  var data_p={"id":3};//投票ID
	  $scope.type_p;//投票单选多选
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
    			   $(this).attr("data-i",2)
    		   }else {
    			   $(this).css("background-position","-26px -1119px"); 
    			   $(this).attr("data-i",1)
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
		    			  }	
		    		for(var i=0;i<arr1.length;i++){
		    			var piuy=$(arr1[i]).find(".vote_me").attr("data-tk")
		    			$(arr1[i]).find(".vote_me").text(++piuy+"票")
		    		}	
		    			
		    		}, function error() {
						console.log("执行投票失败");
		    });
		
	 })
    	   
    	
		  
	  
	  

	}])

