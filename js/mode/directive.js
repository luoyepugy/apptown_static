/**
 * 公共方法
 */
 angular.module('directive_mml', ["activity_servrt"]).
     run(["$rootScope","activity_data",function($rootScope,activity_data){  //此处写公共的变量和公共的JQ方法
    	 $rootScope.versions=12;//版本号 
    	 $("body").on("click",".pup_bg_mml,.close_poiu",function(){
    		 $(".tabbable_nav").removeClass("in").hide();
    		 $(".pup_bg_mml").remove(); 
    	 })
      	  $rootScope.qcode=function(vier,url,wd,hig){
    	  	 $("."+vier).qrcode({render:"canvas",width : wd,height : hig,background:'#FFFFFF',text:url});
    	 }
    	 $rootScope.mml={"err_pup":function(text){
    		 $(".df_oiuy").show();
    		 $(".df_oiuy").html(' <i class="f_i error_icon"></i>'+text);
    		   setTimeout(function(){
    			   $(".df_oiuy").hide();
    		    },3000)
    	 }}
    	   /*分类*/ 
    	  $rootScope.classify=[{"title":"分类","maker_title":[{"id":"1","name":"商会场馆"},{"id":"2","name":"创业投资"},{"id":"3","name":"亲子教育"},{"id":"4","name":"金融财经"},{"id":"5","name":"精品课程"},{"id":"6","name":"休闲户外"},{"id":"7","name":"娱乐艺术"}]},{"title":"行业","maker_title":[{"id":"1","name":"孵化器"},{"id":"2","name":"房产"},{"id":"3","name":"互联网"},{"id":"4","name":"公益"},{"id":"5","name":"培训"},{"id":"6","name":"汽车"},{"id":"7","name":"旅游"},{"id":"8","name":"酒店"},{"id":"9","name":"家装"},{"id":"10","name":"卖场"},{"id":"11","name":"明星"},{"id":"12","name":"商会"},{"id":"13","name":"社区"},{"id":"14","name":"展会"},{"id":"15","name":"大健康"},{"id":"16","name":"校园"},{"id":"17","name":"媒体"},{"id":"18","name":"趣味"},{"id":"19","name":"金融"},{"id":"20","name":"其他"}]},{"title":"城市","maker_title":[{"id":"1","name":"北京 "},{"id":"2","name":"天津 "},{"id":"3","name":"上海 "},{"id":"4","name":"重庆 "},{"id":"51","name":"大连 "},{"id":"86","name":"南京 "},{"id":"99","name":"杭州 "},{"id":"128","name":"厦门 "},{"id":"418","name":"武汉 "},{"id":"435","name":"长沙 "},{"id":"449","name":"广州 "},{"id":"450","name":"深圳 "},{"id":"556","name":"西安 "},{"id":"627","name":"香港特别行政区"}]}];
         /* 赞助分类*/
    	  $rootScope.classification={"title":"行业","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"孵化器"},{"id":"2","name":"房产"},{"id":"3","name":"互联网"},{"id":"4","name":"公益"},{"id":"5","name":"培训"},{"id":"6","name":"汽车"},{"id":"7","name":"旅游"},{"id":"8","name":"酒店"},{"id":"9","name":"家装"},{"id":"10","name":"卖场"},{"id":"11","name":"明星"},{"id":"12","name":"商会"},{"id":"13","name":"社区"},{"id":"14","name":"展会"},{"id":"15","name":"大健康"},{"id":"16","name":"校园"},{"id":"17","name":"媒体"},{"id":"18","name":"趣味"},{"id":"19","name":"金融"},{"id":"20","name":"其他"}]}
    	
    	  /* 加密*/
    	  $rootScope.decrypt_p={"aesKey":"1234367822345608","ivStr":"1166222233334455","newAesKey":null,"aesEncrypt":function(data, keyStr, ivStr) {//加密
    		  var sendData = CryptoJS.enc.Utf8.parse(data);
    	        var key = CryptoJS.enc.Utf8.parse(keyStr);
    	        var iv  = CryptoJS.enc.Utf8.parse(ivStr);
    	        var encrypted = CryptoJS.AES.encrypt(sendData, key,{iv:iv,mode:CryptoJS.mode.CBC});
    	        return encrypted.toString();
    	    }
    	  }
    	  $rootScope.user_con;
    	  $rootScope.prefsession_a=false;//登录状态
    	  activity_data.person_userDetail().then(
   			    function success(data) {
   	 			    if(data.code!=0){
   	 			    	console.log(data.msg);
   	 				    return;
   	 			    }
   	 			    $(".user_logo_a").hide();
   	 			    $(".user_logo_b").show();
   	 			    $rootScope.user_con=new personUserDetail(data.info);
   	 			  $rootScope.prefsession_a=true;
   				}, function error() {
   					console.log("获取用户信息失败")
   			});
   			
    	  
    	  
    	 
    }]).controller('navigation_mml',["$scope","activity_data",function($scope,activity_data ) {  //导航控制器
	       $scope.act_index={"promotional_activities":function(){//发起活动判断是否登录
			  if(!$scope.prefsession_a){//判读用户是否登录
				  $('#log_in').modal('toggle');
				  return;
			  }	 
				 window.open("/activity/to_sponsor_activity" )  
		  }}
    	$scope.check_remenber=function(tar){
    		if($(tar).attr("data-x")==1){
    			$(tar).removeClass("fa-check-square");
    			$(tar).addClass("fa-square-o");
    			$(tar).attr("data-x","")
    		}else{
    			$(tar).removeClass("fa-square-o");
    			$(tar).addClass("fa-check-square");
    			$(tar).attr("data-x",1);
    		}
				
		}

 		$scope.xy_check=true;//是否勾选注册协议
 		var klk=false,uoiu=1;
 		$scope.nav_mml={"reset_set":function(){  /* 导航的注册按钮触发事件*/
 			  this.puc_event(1);
 			 klk=true;
 			uoiu=2;
 		},"loging":function(){/*导航的登录按钮触发事件*/
 			this.puc_event(0);
 			klk=true;
 			uoiu=1;
 		},"pup_login":function(this_l){//弹出层的登录按钮切换
 			 this.puc_event(0); 
 			uoiu=1
 		
 		},"pup_request":function(this_l){//弹出层的注册按钮切换
 			 this.puc_event(1);
 			uoiu=2
 		},"gx_radio_a":function(this_a){
            if($scope.xy_check){
                $(this_a).addClass("gx_icon_g");
                $scope.xy_check=false;
            }else{
                $(this_a).removeClass("gx_icon_g");
                $scope.xy_check=true;
            }
 		},"puc_event":function(num){
 			  $(".yuuyt_poi").removeClass("active");
			  $("#request_poi_q").addClass("active");
			  $(".pup_title_a").removeClass("act_p");
	 		  $(".pup_title_a").eq(num).addClass("act_p");
	 		  $(".form_log_left  .tab-pane").removeClass("active");
              $(".form_log_left  .tab-pane").eq(num).addClass("active");
              $(".log_in_title a").removeClass("act_p");
              $(".log_in_title a").eq(num).addClass("act_p");
 		}
 	}
 	   var iph_code_poi=true
 		$scope.user_lo={"phone_login":function(){  //用户登录
 			var u_phone=$("#user_phone").val();//活动用户的手机号码
 			var u_password=$("#user_password").val();//活动用户的密码
 			var isRemember=$(".jq_rem_password").attr("data-x");//1：记住密码  不传：不记住
 			u_password=$scope.decrypt_p.aesEncrypt(u_password,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr)
 			var form_data_user={"user_phone":u_phone,"user_password":u_password,"isRemember":isRemember}; 			
 		    activity_data.phone_login(form_data_user).then(
					function success(data) {
					  if(data.code!=0){
						  alert(data.msg)
						  return;
					  }
					  location.reload();
				}, function error() {
					console.log("登录失败")
			});
 		},"login_out":function(){//退出登录
 			 activity_data.login_out().then(
 					function success(data) {
 					window.location.href="/";
 				}, function error() {
 					console.log("退出登录失败")
 			});
 		},"user_logoing":function(){//用户注册
 			var phone_user=$("#phone_user").val();//获取用户的手机号码
 			var get_code=$("#get_code").val();//获取用户输入的验证码
 			var identification=$("#identification").val();//短信验证码
 			var pwd_user=$("#pwd_user").val();//密码
 			var pwd_q_user=$("#pwd_q_user").val();//确认密码
 			if(!form_mm.isnull(phone_user)){
 				alert("手机号码不能为空");
 				return
 			}
 			if(!form_mm.format(phone_user)){
 				alert("手机号码格式错误");
 				return
 			}
 			if(!form_mm.isnull(get_code)){
 				alert("图像验证码不能为空");
 				return
 			}
 			if(!form_mm.isnull(pwd_user)){
 				alert("密码不能为空");
 				return
 			}
 			if(pwd_user!=pwd_q_user){
 				alert("两次密码输出不一样");
 				return
 			}
 			pwd_q_user=$scope.decrypt_p.aesEncrypt(pwd_q_user,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr);//加密密码
 			activity_data.do_register(phone_user,pwd_q_user,identification).then(
 					function success(data) {
 		 				if(data.code!=0){
 		 					alert(data.msg);
 		 					return;
 		 			    }
 		 				window.location.href="/user/to_user_center";//成功跳转个人中心
 					
 				}, function error() {
 					console.log("注册失败")
 			});	
 		},"get_code":function(){//注册获取手机验证码
 			var phone_user=$("#phone_user").val();//获取用户的手机号码
 			var get_code=$("#get_code").val();//获取用户输入的验证码
 			if(!form_mm.isnull(phone_user)){
 				alert("手机号码不能为空");
 				return
 			}
 			if(!form_mm.format(phone_user)){
 				alert("手机号码格式错误");
 				return
 			}
 			if(!form_mm.isnull(get_code)){
 				alert("图像验证码不能为空");
 				return
 			}
 			if(iph_code_poi){
 				iph_code_poi=false;
 				var count_down=60
 			    
 				activity_data.get_sms_code(get_code,phone_user).then(
 	 					function success(data) {
 	 					  if(data.code!=0){
 	 						 alert(data.msg)
 	 						  	iph_code_poi=true
 	 						 $("#code_icon").attr("src","/validateImageServlet?v="+Math.floor(Math.random()*1000))
 	 						  return;
 	 					  }
 	 					var set_itime= setInterval(function(){
 	 	 			        $("#test_get_code").text(--count_down).css({"background":"#f1f1f1"})
 	 	 			         console.log(count_down==0)
 	 	 			        if(count_down==0){
 	 	 			        	clearTimeout(set_itime)
 	 	 			        	iph_code_poi=true
 	 	 			        	 $("#test_get_code").text("获取验证码").removeAttr("style")
 	 	 			        	
 	 	 			        }
 	 	 			    },1000)
 	 					  alert("短信发送成功")
 	 				}, function error() {
 	 					console.log("登录失败")
 	 			});
 			}
 			 
 			 
 		},"user_info":function(){//获取用户的信息
 			
 		}
 		
 		}
 		
 		
 		 $("#code_icon").on("click",function(){
 			$("#code_icon").attr("src","/validateImageServlet?v="+Math.floor(Math.random()*1000))
 		 })
 	
 		     $('body').keypress(function(event){
 		    	var pkj= $("#log_in").hasClass("in")
 		   	 if(klk&&pkj){
 		    	 if(event.which==13){
 		    		
 		    		 if(uoiu==1){
 		    			$scope.user_lo.phone_login()
 		    		 }else  if(uoiu==2){
 		    			$scope.user_lo.user_logoing()
 		    		 }
 		    		
 		    	 }
 		   	 }
 		     }); 
 		 
 		
 		
 		 $(".dropdown-menu-pou li").on("click",function(){
 			 $(".poiuytr_q").attr("data-type",$(this).index())
 			 $(".dropdown_toggle_o").html($(this).text()+' <span class="caret"></span>')
 		 })
 		 
 		 $(".poiuytr_q").on("click",function(){
 			//放大镜搜素
  			var suosuo_p=$("#suosuo_p").val();//获取搜素的值
  			var inde_x=$(this).attr("data-type")
  			switch(inde_x){
  			   case '0':window.location.href="/activity/to_activity_page?act="+suosuo_p;break;
  			   /*case '1':window.location.href="/support/supporList?sponsor_title="+suosuo_p ;break;
  			   case '2':window.location.href="/activity/to_host_page?host_title="+suosuo_p;break;*/
  			  case '1':window.location.href="/activity/to_host_page?host_title="+suosuo_p;break;
  			  
  			}
 		 })
 		
 	}])
 	.controller('bottom_mml',function($scope) {//底部方法
 		
 	}).directive('finish', function ($timeout) {//轮播图遍历完之后执行
     return {
         restrict: 'A',
         link: function(scope, element, attr) {
             if (scope.$last === true) {
                 $timeout(function() {
                     scope.$emit('ngfinish');
                 });
             }
         }
     };
 }).directive('href', function () { //跳转制定的页面
     return {
         restrict: 'AE',
         link: function(scope,ele,attr){
             ele.on('click',function(e){
            	 /*阻止触发时间冒泡*/
                 e.preventDefault();
                 e.stopPropagation();
                 var this_href=$(this).attr("data-href"),
                 op=$(this).attr("data-open");  //传入data-open:1则会打开一个新的窗口
                 if(op=="1"){  
                	window.open(this_href);
                 }else{
                	 window.location.href=this_href
                 }
                
             });
         }
     };
 }).directive('pupshow', function () { //弹出层
     return {
         restrict: 'AE',
         link: function(scope,ele,attr){
             ele.on('click',function(e){
            
            	 /*阻止触发时间冒泡*/
                 e.preventDefault();
                 e.stopPropagation();
                 var piu_id="#"+$(this).attr("pupshow")
         		 $(piu_id).addClass("in").show()
     			 $("body").append('<div class="pup_bg_mml" ng-click="puphide()"></div>')
             });
         }
     };
 }).filter("win_hao",function(){//自定义过滤器  去掉双号
     return function(x){
    	  var reg = new RegExp('"', 'g'); // 创建正则RegExp对象
    	  x = x.replace(reg, "");
         return x
     }
 }).filter('to_trusted', ['$sce', function ($sce) {  
	   return function (text) {  //输入HTml 
	
	       return $sce.trustAsHtml(text); 
	   }
}]).filter("getDateDiff",function(){//多长时间前
    return function(dateTimeStamp){
   	    var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if(diffValue < 0){
            //若日期不符则弹出窗口告之
            //alert("结束日期不能小于开始日期！");
        }
        var monthC =diffValue/month;
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(monthC>=1){
            result=parseInt(monthC) + "个月前";
        }
        else if(weekC>=1){
            result=parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
            result=parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
            result=parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
            result=parseInt(minC) +"分钟前";
        }else
            result="刚刚发表";
        return result;
   }
}).filter("reduce_time",function(){//剩余天数
    return function(dateTimeStamp){
    	 var minute = 1000 * 60;
         var hour = minute * 60;
         var day = hour * 24;
         var halfamonth = day * 15;
         var month = day * 30;
         var now = new Date().getTime();
         var diffValue =dateTimeStamp-now;
         if(diffValue < 0){
             //若日期不符则弹出窗口告之
             //alert("结束日期不能小于开始日期！");
         }
         var monthC =diffValue/month;
         var weekC =diffValue/(7*day);
         var dayC =diffValue/day;
         var hourC =diffValue/hour;
         var minC =diffValue/minute;
         if(monthC>=1){
             result=parseInt(monthC) + "个月";
         }
         else if(weekC>=1){
             result=parseInt(weekC) + "周";
         }
         else if(dayC>=1){
             result=parseInt(dayC) +"天";
         }
         else if(hourC>=1){
             result=parseInt(hourC) +"小时";
         }
         else if(minC>=1){
             result=parseInt(minC) +"分钟";
         }else
             result="已结束";
         return result;
   }
}).factory('MyData', function($websocket) {
    // Open a WebSocket connection
    var dataStream = $websocket('ws://'+window.location.hostname+'/webSocketServer');
    var collection = [],q_random=Math.floor(Math.random()*99999+1) ;
    var hjkh=false;
    dataStream.onMessage(function(message) {
    	/*collection.push(JSON.parse(message.data));*/
    	console.info(message.data);
    	var iiuyh_p=JSON.parse(message.data)
    	if(iiuyh_p!=""&&hjkh){
    		$(".sogn_success").addClass("show")
    		setTimeout(function(){
    				$(".sogn_success").removeClass("show")
    		},6000)	
    		var a=document.getElementById("player_p")
    		a.play()//播放
    	}
    	hjkh=true
    					
    	$(iiuyh_p).map(function(){
    		collection.unshift(this)
    	}) 
    	$(".yuyt_poiu").text(collection.length)
    });
    var methods = {
      act_id:0,		
      collection: collection,
      get: function() {
        dataStream.send(this.act_id+"#"+q_random);
      }
    };
    
     return methods;
  })
  
   /* 图片上传*/
   function updata_icon(ja_url,data_icon,uio_o){
	   $("#iconFile").off("change").on("change",function(x){
		   
	   $.ajaxFileUpload({
	   		url : ja_url,
	   		secureuri : false,
	   		
	   		fileElementId : "iconFile",//input标签的name属性和id
	   		dataType : 'json',
	   		success : function(data, status) {
	   			if(data.code==0){//上传成功
	   				data_icon(data.msg)
	   			}
	   		},
	   		error : function(data, status, e) {
	   			
	   		}
	   	  });
	   })
   }
