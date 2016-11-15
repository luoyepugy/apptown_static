$("#dataLoad").hide(); 
/**
 * 个人中心
 */

angular.module('user_center',["directive_mml",'tm.pagination',"activity_servrt","ui.router", "common", "request", "pagination"])
.controller('user_centerController',["$scope","activity_data",function($scope,activity_data) {//帮助中心
	try{
		var user_left_a=$(".pull-left").offset().top;
		$(window).scroll( function() {
			console.log($(this).scrollTop()>user_left_a)
			 if($(this).scrollTop()>user_left_a){
				 $(".pull-left").css({ "position": "fixed","top":"0"})
			 }else{
				 $(".pull-left").css({ "position": "relative"})
			 }
		 })
	}catch(e){}
	var tabnub=$("#tabnub").val();//获取传过来 的id
	$("#myTabContent ul").removeClass("in active");
	$("#myTabContent ul").eq(tabnub).addClass("in active");


	
}]).controller('personal_center',function($scope,activity_data, messageService, httpService) {//个人中心控制层
	
	$(".user_list_left li").css({"background":"#fff"}).eq(0).css({"background":"#f1f1f1"});
	$scope.user_detail;//获取用户基本信息
	$scope.user_detailAdmit;//修改用户基本信息
	$scope.user_icon_url;//用户头像图片路径
	$scope.user_real_detail;//用户实名认证信息
	$scope.person_detail_edit=function(){//修改基本信息
		var user_name=$("#personal_user_name").val();//用户昵称
		var user_icon=$("#personal_user_icon").attr("src");//用户头像
		var user_id=$("#personal_user_id").html();//用户ID
		var user_phone=$("#personal_user_phone").val();//用户联系方式
		var user_sex=$(".ra_poiu input[type='radio']:checked").attr("data-sex");//用户性别	
		var user_sign=$("#personal_user_signature").val();//用户签名
		var form_json={'user_name':user_name,'user_icon':user_icon,'user_id':user_id,'user_phone':user_phone,'user_sex':user_sex,'user_sign':user_sign}
		if(!form_mm.isnull(user_name)){
			alert("用户姓名不能为空")
			return;
		}
		if(!form_mm.tel(user_phone)){
			alert("用户手机号码为空或者格式错误")
			return;
		}
		/*个人中心修改基本信息*/
		activity_data.person_userDetailEdit(form_json).then(
				function success(data) {
					$(data).map(function(){
						var user_detailAdmit= new personUserDetail(this)
						alert("您的个人基本信息提交成功")
					})
				}, function error() {
					console.log("获取用户基本信息失败")
		});
    }
	
	$scope.person_real_edit=function(){//修改实名认证消息
		var real_name=$("#real_name").val();//用户真实姓名
		var contact_info=$("#real_phone").val();//用户手机号码
		var identity_id=$("#real_idcard").val();//用户身份证
		var user_id=parseFloat($("#personal_user_id").text());//用户ID
		var real_json={'real_name':real_name,'contact_info':contact_info,'identity_id':identity_id,'user_id':user_id};
		if(!form_mm.isnull(real_name)){
			alert("用户姓名不能为空")
			return;
		}
		if(!form_mm.tel(contact_info)){
			alert("用户手机号码为空或者格式错误")
			return;
		}
		if(!form_mm.isCardNo(identity_id)){
			alert("用户身份证不能为空或者格式错误")
			return;
		}		
		/*个人中心修改基本信息*/
		activity_data.person_upDateRealDetail(real_json).then(
				function success(data) {
					if(data.code==0){
					  alert("您的个人实名认证提交成功");
					}
				}, function error() {
					console.log("您的个人实名认证提交失败");
		});
    }

	
	// 默认头像选择
    $scope.userIcon = {
        "default_cover": [{
            "id": "1",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_01.png"
        },
        {
            "id": "2",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_02.png"
        },
        {
            "id": "3",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_03.png"
        },
        {
            "id": "4",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_04.png"
        },
        {
            "id": "5",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_05.png"
        },
        {
            "id": "6",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_06.png"
        },
        {
            "id": "7",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_07.png"
        },
        {
            "id": "8",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_08.png"
        },
        {
            "id": "9",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_09.png"
        },
        {
            "id": "10",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_10.png"
        },
        {
            "id": "11",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_11.png"
        },
        {
            "id": "12",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_12.png"
        },
        {
            "id": "13",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_13.png"
        },
        {
            "id": "14",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_14.png"
        },
        {
            "id": "15",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_15.png"
        },
        {
            "id": "16",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_16.png"
        },
        {
            "id": "17",
            "name": "",
            "img": "http://172.16.2.250/headImage/tx_17.png"
        }] //默认封面
        ,
        "confirm": function() { //弹出层确认按钮触发
            $('#myModal').modal('toggle');
            var src = $('.userIconSelected').attr('src');
            httpService.getDatas('POST', '/user/update_user_icon?user_icon='+src).then(function(data) {
            	if(data.code!=0){
                    $scope.mml.err_pup(data.msg);
                    return;
                }
                $('.userIcon').attr('src', src);
                $scope.user_detail.user_icon  = src;
            });
        }
	}
	// 选择图片
	$('body').on('click', '.j-userIcon', function() {
		$('.j-userIcon').removeClass('userIconSelected');
		$(this).addClass('userIconSelected');
	});



	/*
	 * 张晗
	 * 主办方认证
	 * 获取主办方当前状态（1表示成功，2表示失败，3表示等待审核）
	 */
    var vm = $scope;
    vm.sponsor = {};
    vm.sponsor.sponsor_icon = '/img/userIcon.jpg';
    // 认证状态
	vm.status = {
		'editForm': false,
		'success': false,
		'fail': false,
		'waiting': false
	};
    // 判断主办方是否认证
    activity_data.getDatas('GET', '/sponsor/get_sponsorapply')
    .then(function(data) {
    	if(data.info == null) {
			vm.status.editForm = true;
			return false;
		}
		if(data.code == 0 && data.info.status){
			switch(Number(data.info.status)) {
		  		case 1:  vm.status.success = true;vm.sponsor = data.info; break;
		    	case 2:  vm.status.fail = true;vm.sponsor.failInfo = data.info.remark; break;
		    	case 3:  vm.status.waiting = true; break;
			}
		}
    });
    // 提交主办方认证信息表单
    $scope.sponsorAuthForm = function() {  	
    	if(vm.sponsor.sponsor_icon == '/img/userIcon.jpg') {
    		alert('请上传主办方头像');
    		return;
    	}
    	if(!form_mm.isnull(vm.sponsor.name)) {
    		alert('主办方名称不能为空');
    		return;
    	}
    	if(!form_mm.isnull(vm.sponsor.contacter)) {
    		alert('联系人不能为空');
    		return;
    	}
    	if(!form_mm.tel(vm.sponsor.contacter_phone)) {
    		alert('联系电话不能为空或格式错误');
    		return;
    	}
    	if(!form_mm.isnull(vm.sponsor.introduction)) {
    		alert('主办方简介不能为空');
    		return;
    	}
    	if((vm.sponsor.introduction).length > 150) {
    		alert('主办方简介不能超过150字');
    		return;
    	}
  
    	/* 提交主办方认证表单 */
    	activity_data.getDatas('POST', '/sponsor/add_or_update_apply_sponsor', vm.sponsor)
	    .then(function(data) {
	    	if(data.code == 0){
				vm.status.editForm = false;
				vm.status.waiting = true;
				alert("您的主办方认证申请成功");
			}
	    });
    };
    // 主办方头像图片上传
    $scope.sponsorIcon = function(){
    	$("#iconFile").click();
		updata_icon("/sponsor/sponsor_icon_upload_byuser",function(url){
			$scope.$apply(function() {
				vm.sponsor.sponsor_icon = url;
			});
		});
	}
	// 重新认证，显示主办方认证表单
	$scope.reSponsorAuth = function () {
		vm.status.editForm = true;
		vm.status.fail = false;
	}





	
	$scope.uoicon=function(){//上传图片
		$("#iconFile").click();
		 updata_icon("/user/upload_user_icon",function(url){
			$('.userIcon').attr('src', url);
            $scope.user_detail.user_icon  = url;
            location.reload() ;
		 })		 
	}
	 /*个人中心获取基本信息*/
    activity_data.person_userDetail().then(
			function success(data) {
				$scope.user_detail= new personUserDetail(data.info)
			}, function error() {
				console.log("获取用户基本信息失败")
	});
    /*个人中心获取实名认证信息*/
    activity_data.person_getRealDetail().then(
			function success(data) {
				$scope.user_real_detail= new getUserRealDetail(data.info)
			}, function error() {
				console.log("获取用户基本信息失败")
	});
    
	
}).controller('my_activities', function($scope,activity_data, httpService, messageService) {//我的活动

	  $(".user_list_left li").css({"background":"#fff"}).eq(1).css({"background":"#f1f1f1"});
	
	  var act_tye=window.location.search.split("v=")[1];//地址栏判读是否是发起的活动
	  if(act_tye==undefined){
		  act_tye=1
	  }

	  $scope.act_my_p=[];//我的活的数据    
	  $scope.my_act={};//传到后台的数据
	  $scope.my_act.pageIndex=1;   
	  $scope.max_ym=1;//最多有几页
	  $scope.my_act.time_status=""; 
	  activity_data.person_userDetail().then(
 			    function success(data) {
 	 			    if(data.code!=0){
 	 			    	console.log(data.msg);
 	 				    return;
 	 			    }
 	 			     $scope.my_act.flag=1
 	 			   if( $scope.act_fu.active_state==1){
 	 				  $scope.act_fu.list_a();
 	 				  $scope.act_fu.fengye();
 	 			  }else  if( $scope.act_fu.active_state==2){
 	 				  $scope.act_fu.activities_the();
 	 				  $scope.act_fu.fengye();
 	 				  
 	 				 
 	 				  
 	 			  }
 	 			    
 	 			   
 	 			    
 				}, function error() {
 					console.log("获取用户信息失败")
 			});
	  
	 
$scope.act_fu={
 	"active_state":act_tye,//活动状态   1=发起活动   2=参与的活动		  
	"ac_tyoe":function(x,time_status){
		  $(".tioiy_po_po span").removeClass("zb")
		  $(x).addClass("zb")
		  $scope.my_act.pageIndex=1;//初始化页码  
		  $scope.my_act.time_status=time_status;
		  if( $scope.act_fu.active_state==1){
			  $scope.act_fu.list_a();
		  }else  if( $scope.act_fu.active_state==2){
			  $scope.act_fu.activities_the();
		  }
	  },"page_in":function(x,y){
		  if($scope.my_act.pageIndex==1&&x){
			  $(y).addClass("zc");
			  return;
		  }
	
          if($scope.max_ym/10<$scope.my_act.pageIndex&&x==false){
        	  $(y).addClass("zc");
        	  return;
		  }
          $(".pager a").removeClass("zc");
          
		  if(x){
			  --$scope.my_act.pageIndex;
		  }else{  
			  ++$scope.my_act.pageIndex;
		  }
		 
		 
		  if( $scope.act_fu.active_state==1){
			  $scope.act_fu.list_a();
		  }else  if( $scope.act_fu.active_state==2){
			  $scope.act_fu.activities_the();
		  }
		  $("html,body").animate({scrollTop:0},200);
	  },"fengye":function(){ //分页
            $(".tcdPageCode").createPage({
						pageCount:10,
						current:$scope.my_act.pageIndex,
						backFn:function(p){	
							$scope.my_act.pageIndex=p
							if($scope.act_fu.active_state==1){
								$scope.act_fu.list_a()
							}else{
								$scope.act_fu.activities_the()
							}						    
						}
    				});	
            }
        ,
	  "list_a":function (){
		  $(".user_poiy_er li").removeClass("active");
		  $(".user_poiy_er li").eq(0).addClass("active");
		  $scope.act_fu.active_state=1;//初始化划活动状态
		  activity_data.my_activity_list($scope.my_act).then(
					function success(data) {
						if(data.code!=0){
	   						console.log(data.msg)
	   						return;
	   					}
						$(".tcdPageCode").createPage({
								pageCount:Math.ceil(data.results/10),//总页数
								current:$scope.my_act.pageIndex,//当前页数
								backFn:function(p){	//回调,p为当前页数												      
								}
    					});
						$scope.act_my_p=[];
						$(data.rows).map(function(){
							var act_di=new query_activity_list(this);
							act_di.tip = this.tip;
							act_di.apply_switch = this.apply_switch;
							$scope.act_my_p.push(act_di);
						})
					/*	判断有没有数据*/
						if($scope.act_my_p.length==0){
							$(".zhng_poi_a_p").show()
						}else{
							$(".zhng_poi_a_p").hide()
						}
						/*判断是否分页*/
						if(data.results/10>=1){
							$(".fe_page").show()
						}else{
							$(".fe_page").hide()
						}
						 $scope.max_ym=data.results
					}, function error() {
						console.log("获取我的活动失败")
			});
	  },"activities_the":function(){//参与的活动
		  $(".user_poiy_er li").removeClass("active");
		  $(".user_poiy_er li").eq(1).addClass("active");
		  $scope.act_fu.active_state=2;//初始化划活动状态
		  activity_data.join_activity($scope.my_act).then(
				 
					function success(data) {
						if(data.code!=0){
	   						console.log(data.msg)
	   						return;
	   					}
						$(".tcdPageCode").createPage({
								pageCount:Math.ceil(data.results/10),//总页数
								current:$scope.my_act.pageIndex,//当前页数
								backFn:function(p){	//回调,p为当前页数												      
								}
    					});
						$scope.act_my_p=[];
						$(data.rows).map(function(){
							var act_di=new query_activity_list(this);
							act_di.tip = this.tip;
							act_di.apply_switch = this.apply_switch;
							$scope.act_my_p.push(act_di);
						})
					/*	判断有没有数据*/
						if($scope.act_my_p.length==0){
							$(".zhng_poi_a_p").show()
						}else{
							$(".zhng_poi_a_p").hide()
						}
						/*判断是否分页*/
						if(data.results/10>=1){
							$(".fe_page").show()
						}else{
							$(".fe_page").hide()
						}
						 $scope.max_ym=data.results
					}, function error() {
						console.log("获取我的活动失败")
			});
	  },"more_time":function(stime,etime){//活动的状态
		    var ntime=new Date().getTime();
		    if(stime>ntime){
		    	return "未开始"
		    }
		    
		    if(ntime>stime&&etime>ntime){
		    	return "进行中"
		    }
		    if(etime<ntime){
		    	return "已结束"
		    }
		  
	  },"post_activity":function(id){//发布活动
		//发布活动
		  var data_p={"activity":{"id":id,"status":0}}
     	 $.ajax({ 
     	        type: "POST", 
     	        contentType : 'application/json;charset=UTF-8',
     	         url:  "/activity/release_activity", 
     	         data: JSON.stringify(data_p), 
     	         dataType: 'json', 
     	         success: function(result) {
     	        	 if(result.code!=0){
     	        		alert(result.msg)
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
      
	  },"the_ticket":function(activity_id,order_id){//取票按钮方法

		  $scope.superginseng=[]
		  /* 活动详情数据*/
		     activity_data.buy_ticket_info({"order_id":order_id}).then(
				function success(data) {
					 if(data.code!=0){
						 alert(data.msg)
						 return
					 }
					 $('#the_ticket').modal('toggle');
			         $("div[class='modal-backdrop fade in']").css({"position":"static"})
			         
					 $scope.superginseng=data;
				}, function error() {
					console.log("获取活动详情失败")
				});
	  }
	  
	  
	  
	  }
	
	// 切换报名状态
	$scope.closeEnroll = [];
	$scope.switchEnroll = function(index, id, status) {
		status = (status == 1) ? 0 : 1;
		httpService.getDatas('POST', '/activity/apply_switch?activityid=' + id + '&apply_switch=' + status).then(function(data) {
			$scope.act_my_p[index].apply_switch = status;
			var tip = (status == 0) ? '报名已关闭': '报名已开启';
			alert(tip);
	  	});
	}

	
}).controller('my_sponsor',["$scope","activity_data",function($scope,activity_data) {//个人中心我发起的赞助
	$(".user_list_left li").css({"background":"#fff"}).eq(2).css({"background":"#f1f1f1"});
	$("body").on("click",".tioiy_po_po span",function(){
		$(".tioiy_po_po span").css("color","#333333")
		$(this).css("color","#4ea45d")
	})
	$scope.clickmysponsor=function(){
		  	$('.tcdPageCode').off("click");
		    var mySp_pageIndex=1;//初始化页数
			var mySp_status="";// 0:保存、1:通过、2:拒绝、3:待审核、4:预热中、5:赞助中、6:赞助成功、7:赞助失败
			var mySp_timeStatus="";//1.未开始 2:进行中 3：已结束
			var mySp_userId;//赞助ID
		    var person_sp_result;//我发起赞助的列表总数
			$scope.mySp_list=[];//我发起赞助的列表
			$scope.mySp_userId;
			$scope.typeStatus=1;//判断是否是发起的活动
			$scope.arr_status={'6':'已成功','7':'已失败','4':'预热中','3':'审核中','0':'保存','5':'赞助中'};
			$scope.change_password=function(){
				$("#change_password").modal('toggle') 
				    $("div[class='modal-backdrop fade in']").css({"position":"static"})			
			}
			 activity_data.person_userDetail().then( 	
		 			    function success(data) {
		 	 			    if(data.code!=0){
		 	 			    	console.log(data.msg);
		 	 				    return;
		 	 			    }		 			    
		 	 			     mySp_userId=data.info.user_id;
		 	 			     $scope.mySp_userId=data.info.user_id;
		 	 			   $scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
		 	 			   $scope.list_person_sponsor.fengye1()
		 				}, function error() {
		 					console.log("获取用户信息失败")
		 			});			
			$scope.list_person_sponsor ={ 
				"allsponspor":function(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus){
					activity_data.query_person_my_sponsor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus).then(
		 			    function success(data) {
		 			    		$scope.mySp_list=[];
		                    if(data.code!=0){
								alert(data.msg);
								return;
							}
		                    $(".tcdPageCode").createPage({
								pageCount:Math.ceil(data.results/10),//总页数
								current:mySp_pageIndex,//当前页数
								backFn:function(p){	//回调,p为当前页数												      
								}
    						});
    							$scope.mySp_list=[];
		                    $(data.rows).map(function(){
		                    	var spon=new personMySponsor(this);
		                    	$scope.mySp_list.push(spon);
		                    })   
		                    person_sp_result=data.results;
		                    $scope.person_sp_result=data.results;
		 				}, function error() {
		 					console.log("获取个人中心我的赞助列表失败")
		 			});   
				},"fengye1":function(){ //分页
			            $(".tcdPageCode").createPage({
									pageCount:10,
									current:mySp_pageIndex,
									backFn:function(p){	
										mySp_pageIndex=p;
										$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
									}
			    				});	
			            }
        		,
				"next_page":function(){		//上一页
					$scope.mySp_list=[];
					if(mySp_pageIndex<person_sp_result/10){
						mySp_pageIndex++
					}
			      	$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)	 
				},
				"previous_page":function(){		//下一页
					$scope.mySp_list=[];			
					if(mySp_pageIndex>1){
						mySp_pageIndex--;
					}
			      	$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)	 
				},
				"all":function(){  //赞助中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=5;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,'','')
				},
				"sponsoring":function(){  //赞助中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=5;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				},"success_sponsor":function(){  //已成功
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=6;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				},"fail_sponsor":function(){    //已失败
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=7;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				},"future_sponsor":function(){   //预热中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=4;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				},"checking_sponsor":function(){   //审核中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=3;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				},"unpublish_sponsor":function(){   //未发布
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					mySp_status=0;
					$scope.list_person_sponsor.allsponspor(mySp_pageIndex,mySp_userId,mySp_status,mySp_timeStatus)
				}
			}
		
	}
    //	我参与的赞助开始
    $scope.clickmyattentsponsor=function(){
    		$('.tcdPageCode').off("click");
		    var mySp_pageIndex=1;//初始化页数
			var mySp_status="";// 6:赞助成功、7:赞助失败
			var mySp_timeStatus="";//1:预热中、2:赞助中、
		    var person_sp_result;//我发起赞助的列表总数change_password
			$scope.mySp_list=[];//我发起赞助的列表
			$scope.typeStatus=2;//判断是否是参与的活动
			$scope.sponsor_form_title;//赞助标题
			$scope.sponsor_form_title;//赞助数量
			$scope.sponsor_form_order_id;//赞助订单ID
			$scope.sponsor_form_price;//赞助单价金额
			$scope.sponsor_form_repay_content;//赞助回报内容
			$scope.sponsor_form_repay_time;//赞助回报时间
			$scope.sponsor_form_create_support_phone;//赞助回报电话
			$scope.sponsor_form_create_support_user_name;//赞助发起人
			$scope.sponsor_form_my_pay_money;//支付总金额
		    $scope.arr_status={'6':'已成功','7':'已失败','4':'预热中','3':'审核中','0':'保存','5':'赞助中'};
		    $scope.date_po={}
			$scope.change_password=function(date){
		$scope.date_po=date
		$("#change_password").modal('toggle') 
		$("div[class='modal-backdrop fade in']").css({"position":"static"})
			/*$scope.sponsor_form_title=title;//赞助标题
			$scope.sponsor_form_num=num;//赞助数量
			$scope.sponsor_form_order_id=order_id;//赞助订单ID
			$scope.sponsor_form_price=my_pay_money/num;//赞助单价金额
			$scope.sponsor_form_repay_content=repay_content;//赞助回报内容
			$scope.sponsor_form_repay_time=repay_time;//赞助回报时间
			$scope.sponsor_form_create_support_phone=create_support_phone;//赞助回报电话
			$scope.sponsor_form_create_support_user_name=create_support_user_name;//赞助发起人
			$scope.sponsor_form_my_pay_money=my_pay_money;//支付总金额
			$scope.sponsor_form_support_peoson=support_peoson;//赞助人姓名
			$scope.sponsor_form_support_phone=support_phone;//赞助人手机
			$scope.sponsor_form_support_address=support_address;//赞助人地址
			alert(support_peoson)
				$("#change_password").modal('toggle') 
				    $("div[class='modal-backdrop fade in']").css({"position":"static"})		*/		
			}	
			$scope.list_personattent_sponsor ={
				"allsponspor":function(mySp_pageIndex,mySp_status,mySp_timeStatus){
		
					activity_data.query_person_my_attentsponsor(mySp_pageIndex,mySp_status,mySp_timeStatus).then(
		 			    function success(data) {
		                    if(data.code!=0){
								alert(data.msg);
								return;
							}
		                     $(".tcdPageCode").createPage({
								pageCount:Math.ceil(data.results/10),//总页数
								current:mySp_pageIndex,//当前页数
								backFn:function(p){	//回调,p为当前页数												      
								}
    						});
    							$scope.mySp_list=[];
		                    $(data.rows).map(function(){
		                    	var spon=new personMyAttentSponsor(this);
		                    	$scope.mySp_list.push(spon);
		                    })   
		                    person_sp_result=data.results;
		                    $scope.person_sp_result=data.results;
		 				}, function error() {
		 					console.log("获取个人中心我的赞助列表失败")
		 			});   
				},
				"fengye2":function(){ //分页
			            $(".tcdPageCode").createPage({
									pageCount:10,
									current:mySp_pageIndex,
									backFn:function(p){	
										mySp_pageIndex=p;
										$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,mySp_timeStatus)
									}
			    				});	
			            }
        		,
				"next_page_a":function(){		//上一页
					$scope.mySp_list=[];
					if(mySp_pageIndex<person_sp_result/10){
						mySp_pageIndex++
					}
			      	$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,mySp_timeStatus)	 
				},
				"previous_page_a":function(){		//下一页
					$scope.mySp_list=[];			
					if(mySp_pageIndex>1){
						mySp_pageIndex--;
					}
			      	$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,mySp_timeStatus)	 
				},
				"all_a":function(){  //全部
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,'','')
				},
				"sponsoring_a":function(){  //赞助中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,2)
				},"success_sponsor_a":function(){  //已成功
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,6,mySp_timeStatus)
				},"fail_sponsor_a":function(){    //已失败
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,7,mySp_timeStatus)
				},"future_sponsor_a":function(){   //预热中
					mySp_pageIndex=1;
					$scope.mySp_list=[];
					$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,1)
				}
			}
		$scope.list_personattent_sponsor.allsponspor(mySp_pageIndex,mySp_status,mySp_timeStatus)
		$scope.list_personattent_sponsor.fengye2()
	}
    
	//	我参与的赞助结束
	
	
var act_tye=window.location.search.split("sor=")[1];

if(act_tye==1||act_tye==undefined){
	$scope.clickmysponsor()		//初始化我发起的赞助列表数据
	$(".user_poiy_er li").removeClass("active").eq("0").addClass("active");
	
}
if(act_tye==2){
	$scope.clickmyattentsponsor()		//初始化我发起的赞助列表数据
	$(".user_poiy_er li").removeClass("active").eq("1").addClass("active");
}
	
	   
}]).controller('ecoin_controller',["$scope","activity_data",function($scope,activity_data) {//我的钱包
$(".user_list_left li").css({"background":"#fff"}).eq(3).css({"background":"#f1f1f1"});
		$scope.judgment=true;//是否是最后一页
	   $scope.ecoin={"balance":0,//e币余额
			        "account_id_a":0,//银行卡id
			        "top_up_qr_code":"",//充值二维码
			        "gettime":function(str){//获取时间戳
			        	   str = str.replace(/-/g,"/");
			     	  	  var date = new Date(str);
			     	  	  return date.getTime()
			        },
			        "data_up":{},//查询历史记录的数据
			        "bank_query_arr":[],//银行卡
			        "recorded_data":[],//后台放回记录数据也
			        "recentchanges":function(page_type){//近期记录查询
	                    var st_tme=$("#stat_time_a").val();//开始时间
	                    var end_tme=$("#end_time_a").val();//结束时间
			        	this.data_up.startDate=this.gettime(st_tme+" 00:00");//初始化开始时间
			            this.data_up.endDate=this.gettime(end_tme+" 23:59");//初始化结束时间
                        if(isNaN(this.data_up.startDate)){
                        	alert("请选择查询账户历史记录的开始时间");
                        	return;                     
                        }
                        if(isNaN(this.data_up.endDate)){
                        	alert("请选择查询账户历史记录的结束时间");
                        	return;                     
                        }
                        if(this.data_up.startDate>this.data_up.endDate){
                        	alert("查询账户历史记录的开始时间不能大于结束时间");
                        	return;                     
                        }
			            this.data_up.pageSize=10;
			            if(page_type==0){
			            	$scope.judgment=true;
			                this.data_up.pageIndex=1;
			            }
			            if(page_type==1&&this.data_up.pageIndex>1){
			            	$scope.judgment=true;
			            	$(".down_clase_p").removeClass("zc");
			                --this.data_up.pageIndex;
			            }
			            if(this.data_up.pageIndex==1){
			            	$(".up_clase_p").addClass("zc");
			            }
			            
			            if(!$scope.judgment){
			            	return
			            }
			            if(page_type==2){
			            	$(".up_clase_p").removeClass("zc")
			                ++this.data_up.pageIndex;
			            }
			            this.trade_recor_f(this.data_up)
			       
			        },
			        "trade_recor_f":function(data){
			        	 activity_data.trade_record(data).then(
			     				function success(data) {
			     					if(data.code!=0){
			     						alert(data.msg);
			     						return;
			     					}
			     					$scope.ecoin.recorded_data=[]
			     					$(data.rows).map(function(){
			     						  var row_dat=new history(this)
			     						  $scope.ecoin.recorded_data.push(row_dat);
			     					})
			     					$scope.judgment=true 
			     					 if($scope.ecoin.recorded_data.length<10&&data.results>11){
			     						$(".down_clase_p").addClass("zc")
			     						$scope.judgment=false
			     					 }
			     						
			     					if(data.results>11){
			     						$(".pager_poi").show()
			     					}else{
			     						$(".pager_poi").hide()	
			     					}
			     					
			     					 
			     				}, function error() {
			     					console.log("查询记录失败")
			     		});
			        },"withdraw_deposit":function(){
			        	/*	获取银行卡*/
						activity_data.bank_query().then(
								function success(data) {
									if(data.code!=0){
										alert(data.msg);
										return;
									}
									$scope.ecoin.bank_query_arr=[];
									$(data.info).map(function(){
										var yu_date=this
										$scope.ecoin.bank_query_arr.push(yu_date)
									})
								}, function error() {
									console.log("获取银行卡失败")
						});
			        },"draw_cash_apply":function(){
			        	var apply_data={};//提现提交后台的数据
			        	if($(".monery_oiiu").val().trim()==0||$(".monery_oiiu").val().trim()==""){
			        		alert("提现金额大于0");
			        		$(".monery_oiiu").focus();
			        		return;
			        	}
			        	if(this.account_id_a==0){
			        		alert("请选择银行卡");
			        		return;
			        	}
			        	apply_data.amount=$(".monery_oiiu").val().trim();//获取提现金额
			        	apply_data.account_id=this.account_id_a
			        	activity_data.cash_apply(apply_data).then(
								function success(data) {
									if(data.code!=0){
										alert(data.msg);
										return;
									}
									alert("提现申请成功，你所输入的金额将会在7个工作日内打到你的账户");
									 location.reload(); 
								}, function error() {
									console.log("提现失败")
						});
			        	
			        },"user_top_up":function(){//充值按钮点击事件
			        	  $(".text_poiu_moner").val($(".text_poiu_moner").val().replace(/[^\d]/g,''))
			        	  if( $(".text_poiu_moner").val()==0|| $(".text_poiu_moner").val()==""){
			        		  $(".text_poiu_moner").val(1)
			        	  }
			            var  Price=$(".text_poiu_moner").val()
			        	this.wxpay_topup_f(Price);
			          
			            
			        },"wxpay_topup_f":function(Price){
			        	activity_data.wxpay_topup(Price).then(
								function success(data) {
									if(data.code!=0){
										alert(data.msg);
										return;
									}
									var qc_url=data.info.code_url
									qc_url+="&time"+new Date().getTime()
									$(".qc_icon_a_o").empty()
									$(".qc_icon_a_o").qrcode({render:"canvas",width : 120,height :122,background:'#FFFFFF',text:qc_url});
									console.log(qc_url)
									
								}, function error() {
									console.log("充值获取二维码失败")
						});
			        	
			        }
			        
			       
			        
	   }
	
	   $("body").on("click",".bank_card_case",function(){
		   $scope.ecoin.account_id_a=$(this).attr("data-account_id");
		   $(".bank_card_case").removeClass("bank_card_bor");
		   $(this).addClass("bank_card_bor");
       })
       $(".withdraw_deposit_p").on("click",function(){
    	   $(".tixian_button").click()
       })
          $(".phone_immediately").on("click",function(){
    	   $(".zhongzhide").click()
       })
       /*查询e币余额*/
	   activity_data.user_ecoin().then(
				function success(data) {
					if(data.code!=0){
						alert(data.msg);
						return;
					}
					$scope.ecoin.balance=data.info;
				}, function error() {
					console.log("查询e币余额失败")
		});
	   
	   $(".monery_oiiu").blur(function(){
		   var moner=$(this).val().trim();//获取提现金额
		   if(moner!=""||moner!=0){
			   $(".g_my_blank").show();
			   $scope.ecoin.withdraw_deposit();
		   }
	   })
	   
	   $('#stat_time_a').datetimepicker({
           format:'Y/m/d',
           timepicker:false
       })
       
      $('#end_time_a').datetimepicker({
    	  format:'Y/m/d',
          timepicker:false
     });
	$(".user_list_left li").css({"background":"#fff"}).eq(3).css({"background":"#f1f1f1"});
}]).controller('bankAccount_controller',["$scope","activity_data",function($scope,activity_data) {//我的银行卡
	$(".user_list_left li").css({"background":"#fff"}).eq(4).css({"background":"#f1f1f1"});

	$scope.bank_card_p={
			"bank_add_data":{},
			"bank_query_arr":[],
			"bank_f":function(){
			var  holder=$("#ban_user_name").val().trim();//银行卡姓名
			var  bank_account=$("#card_number").val().trim();//银行卡  卡号
			var  bank_name =$("#deposit_bank").val().trim();//开户银行
			if(!form_mm.isnull(holder)){
      		  $scope.mml.err_pup("请输入持卡人姓名！");
      		  $("#ban_user_name").focus()
      		  return;
      	    }
			if(!form_mm.isnull(bank_account)){
	      		  $scope.mml.err_pup("银行卡  卡号！");
	      		  $("#card_number").focus()
	      		  return;
	      	    }
			if(!form_mm.isnull(holder)){
	      		  $scope.mml.err_pup("bank_name");
	      		  $("#deposit_bank").focus()
	      		  return;
	      	}
			this.bank_add_data.holder=holder;
			this.bank_add_data.bank_account=bank_account;
			this.bank_add_data.bank_name=bank_name;
			/*	添加银行卡*/
				activity_data.bank_account(this.bank_add_data).then(
						function success(data) {
							if(data.code!=0){
								alert(data.msg);
								return;
							}
							 $(".df_poiu").click();
							 $scope.bank_card_p.bank_query_arr=[]
							$scope.bank_card_p.bank_query();
						}, function error() {
							console.log("添加银行卡失败");
				});
			},"bank_query":function(){//查询银行卡
				/*	获取银行卡失败*/
				activity_data.bank_query().then(
						function success(data) {
							if(data.code!=0){
								alert(data.msg);
								return;
							}
							$(data.info).map(function(){
								var yu_date=this
								$scope.bank_card_p.bank_query_arr.push(yu_date)
							})
							
							
						}, function error() {
							console.log("获取银行卡失败")
				});
			},"bank_delete_f":function(account_id){//删除银行卡
				/*	获取银行卡失败*/
				activity_data.bank_delete(account_id).then(
						function success(data) {
							if(data.code!=0){
								alert(data.msg);
								return;
							}
							
							
							 $scope.bank_card_p.bank_query_arr=[]
								$scope.bank_card_p.bank_query();
						}, function error() {
							console.log("获取银行卡失败")
				});
			}
			
	}
	$(".blur_name_add").click(function(){
		$(".add_poiu_m").click()
	})
	$scope.bank_card_p.bank_query();
}])
// ===================================== 打赏名单 ===================================
.controller('activity_reward_detailCtrl', ['$scope','httpService', function($scope, httpService) {
	var index = 1;
	// 分页	
	// 活动ID
	$scope.id = $("#activityId").val();
	// 获取活动数据
	httpService.getDatas('GET', '/activity/activity_detail', {'activity_id': $scope.id}).then(function(data) {
		$scope.reward = data.info;
	});
	// 获取打赏总额数据
	httpService.getDatas('GET', '/activityTip/' + $scope.id + '/info').then(function(data) {
		$scope.rewardTotal = data.info;
	});
	// 获取打赏列表数据
	var getRewardList = function(index) {
		httpService.getDatas('GET', '/activityTip/' + $scope.id, {'pageIndex': index, 'pageSize':10}).then(function(data) {
			$scope.rewardList = data.rows;
			$(".tcdPageCode").createPage({
						pageCount:Math.ceil(data.total/10),
						current:index,
						backFn:function(p){	
						}
    		});	
			
		});
	}
	getRewardList(1);
	$(".tcdPageCode").createPage({
						pageCount:10,
						current:index,
						backFn:function(p){	
							index=p
						   getRewardList(index);  
						}
    });	
   
}])
.controller('immediately_p',["$scope","activity_data",function($scope,activity_data) {//报名详情
	
	$scope.id=$("#activityId").val();//活动ID
	$scope.act_xq={};//获取活动的数据
	$scope.mess_cy=[];//获取报名的信息  
	$scope.ticket=[]; // 导入数据信息
	$scope.import_repeat=[]; //导入重复的数据
	$scope.import_success=[]; // 导入成功的数据
	$scope.import_fail=[]; //导入失败的数据
	// 打开报名详情
    $scope.show = function(showData) {
		$scope.showData=showData;
		$("#show_win").modal('show');  
    };
    // 发送短信预览
    $scope.sms = function(showData){
    	$scope.showData=showData;
		$("#sms_win").modal('show');  
    }
    
    // 查询文件
    $scope.queryFile = function(obj){
    	console.info(obj.id);
    	$("#excelFile"+obj.id).click();
    	$("body").on("change","#excelFile"+obj.id,function(){
    		$('#excel_data_'+obj.id).val($(this).val());
    	})
    }
    
    $scope.queryTicketFile = function(obj){
    	$("#excelFile").click();
    	$('body').on('change',"input[id=excelFile]",function() {
     	   console.log($(this).val());
     	   $('#excel_data').val($(this).val());
       });
    }
    
    // 上传无票种的数据
    var submit_flag = true ;
    $scope.submitNoTicket = function(){
    	var data = $('#excel_data').val();
    	var extStart = data.lastIndexOf(".");
        var ext = data.substring(extStart, data.length).toUpperCase();
    	if(data==''){
    		alert('请选择需要上传的文件!');
    		return ;
    	}
    	if(ext!=".XLS"){
    		alert("上传文件类型错误,请上传excel格式文件！");
    		return ;	
    	}
    	
    	if(submit_flag){
    		submit_flag = false ;
    		var activityId = $("#activityId").val();
        	console.info(activityId);
        	$scope.import_repeat.length=0;
        	$scope.import_success.length=0;
        	$scope.import_fail.length=0;
        	$.ajaxFileUpload({
        		url : '/dataImport/importNoExcelData?activityId='+activityId , //用于文件上传的服务器端请求地址
        		secureuri : false, //是否需要安全协议，一般设置为false
        		fileElementId : 'excelFile', //文件上传域的ID
        		dataType : 'json', //返回值类型 一般设置为json
        		success : function(data,status) //服务器成功响应处理函数
        		{
        			if (data.code == 0) {
        				console.info(data.info);
        				 $.each(data.info,function(key,values){  
	    					    if(key=='1'){// 导入重复的
	    					    	$(values).each(function(){  
	    					    		var obj = JSON.parse(this); 
	    					    		console.info(obj.tel);
		    					        $scope.import_repeat.push(obj.name+";\n");
		    					    });
	    					    } 
	    					    
	    					    if(key=='0'){// 导入成功的
	    					    	$(values).each(function(){  
	    					    		var obj = JSON.parse(this); 
		    					        $scope.import_success.push(obj.name+";\n");
		    					    });
	    					    }
	    					    
	    					    if(key=='-1'){// 导入失败的
	    					    	$(values).each(function(){   
	    					    		console.info(this);
		    					        $scope.import_fail.push(this+";\n");
		    					    });
	    					    }
	    				});  
	    				if($scope.import_repeat.length>0){
	    					 $("#repeat_size").html($scope.import_repeat.length+"条");
	    					 $("#repeat_div").html($scope.import_repeat);
	    					 $("#import_repeat_msg").html("<p style='color:red'>(重复提示:手机号码已存在)</p>");
	    				}else{
	    					$("#repeat_size").html("0条");
	    					$("#repeat_div").html("");
	    					$("#import_repeat_msg").html("");
	    				}
	    				
	    				if($scope.import_success.length>0){
	    					 $("#success_size").html($scope.import_success.length+"条");
	    					 $("#success_div").html($scope.import_success);
	    				}else{
	    					$("#success_size").html("0条");
	    					$("#success_div").html("");
	    				}
	    				
	    				if($scope.import_fail.length>0){
	    					 $("#fail_size").html($scope.import_fail.length+"条");
	    					 $("#fail_div").html($scope.import_fail);
	    					 $("#import_fail_msg").html("<p style='color:red'>(错误提示:表格可能为空，或者格式错误)</p>");
	    					 
	    				}else{
	    					$("#fail_size").html("0条");
	    					$("#fail_div").html("");
	    					$("#import_fail_msg").html("");
	    				}
	    				$("#import_result").modal();
	    				getConsumptionList();
	    				$("#import_win").modal('hide'); 
        			}else{
        				alert("导入数据格式错误 !");
        			}
        			submit_flag = true ;
        		},
        		error : function(data, status, e)//服务器响应失败处理函数
        		{
        			submit_flag = true ;
        			alert(e);
        		}
        	})
        	return false;
    	}else{
    		alert('请不要重新提交');
    		return ;
    	}
    	
    }
    
    // 上传有票种的数据
    var _submit_flag = true ;
    $scope.submitTicket = function(obj){
    	var activityId = $("#activityId").val();
    	var i = obj.id ;
    	var ticketId = obj.id ;
    	var data = $('#excel_data_'+i).val();
    	var extStart = data.lastIndexOf(".");
        var ext = data.substring(extStart, data.length).toUpperCase();
    	if(data==''){
    		alert('请选择需要上传的文件!');
    		return ;
    	}
    	if(ext!=".XLS"){
    		alert("上传文件类型错误,请上传excel格式文件！");
    		return ;	
    	}
    	if(_submit_flag){
    		_submit_flag = false ;
    		$scope.import_repeat.length=0;
        	$scope.import_success.length=0;
        	$scope.import_fail.length=0;
        	$.ajaxFileUpload({
        		url : '/dataImport/importExcelData?activityId='+activityId+'&ticketId='+ticketId+"&i="+i, //用于文件上传的服务器端请求地址
        		secureuri : false, //是否需要安全协议，一般设置为false
        		fileElementId : 'excelFile'+i, //文件上传域的ID
        		dataType : 'json', //返回值类型 一般设置为json
        		success : function(data,status) //服务器成功响应处理函数
        		{
        			if (data.code == 0){
        				console.info(data.info);
    	   				$.each(data.info,function(key,values){  
    	   					    if(key=='1'){// 导入重复的
    	   					    	$(values).each(function(){  
    	   					    		var obj = JSON.parse(this); 
    	   					    		console.info(obj.tel);
    		    					        $scope.import_repeat.push(obj.name+"\n");
    		    					    });
    	   					    } 
    	   					    
    	   					    if(key=='0'){// 导入成功的
    	   					    	$(values).each(function(){  
    	   					    		var obj = JSON.parse(this); 
    		    					        $scope.import_success.push(obj.name+"\n");
    		    					    });
    	   					    }
    	   					    
    	   					    if(key=='-1'){// 导入失败的
    	   					    	$(values).each(function(){  
    	   					    		  $scope.import_fail.push(this+"\n");
    		    					    });
    	   					    }
    	   				});  
    	   				if($scope.import_repeat.length>0){
    	   					 $("#repeat_size").html($scope.import_repeat.length+"条");
    	   					 $("#repeat_div").html($scope.import_repeat);
    	   					 $("#import_repeat_msg").html("<p style='color:red'>(重复提示:手机号码已存在)</p>");
    	   				}else{
    	   					$("#repeat_size").html("0条");
    	   					$("#repeat_div").html("");
    	   				    $("#import_repeat_msg").html("");
    	   				}
    	   				
    	   				if($scope.import_success.length>0){
    	   					 $("#success_size").html($scope.import_success.length+"条");
    	   					 $("#success_div").html($scope.import_success);
    	   				}else{
    	   					$("#success_size").html("0条");
    	   					$("#success_div").html("");
    	   				}
    	   				
    	   				if($scope.import_fail.length>0){
    	   					 $("#fail_size").html($scope.import_fail.length+"条");
    	   					 $("#fail_div").html($scope.import_fail);
    	   					 $("#import_fail_msg").html("<p style='color:red'>(错误提示:表格可能为空，或者格式错误)</p>");
    	   				}else{
    	   					$("#fail_size").html("0条");
    	   					$("#fail_div").html("");
    	   					$("#import_fail_msg").html("");
    	   				}
    	   				$("#import_result").modal();
        				$("#import_win").modal('hide'); 
        				getConsumptionList();
        			}else{
        				alert("导入数据格式错误 !");
        			}
        			_submit_flag = true ;
        		},
        		error : function(data, status, e)//服务器响应失败处理函数
        		{
        			_submit_flag = true ;
        			alert(e);
        		}
        		
        	})
        	return false;
    	}else{
    		alert('请不要重新提交');
    		return ;
    	}
    	
    }
    
    
    
    // 发送批量短信
    $scope.sendMassSms = function(){
    	var _length =   $("input[name='ms_check']:checked").length ;
    	if(_length<2){
    		alert("请至少选择2条记录进行批量短信发送!");
    		return ;
    	}
    	$scope.mass_sms=[] ;
    	$("input[name='ms_check']").each(function(){
    		if($(this).prop("checked")){
    			for(var i=0 ; i<$scope.mess_cy.length;i++){
    				if($(this).attr("id")==$scope.mess_cy[i].consumptionId){
    					if($scope.mess_cy[i].is_remind!=0){ // 已发送过的不在重复发送
    						$scope.mass_sms.push($scope.mess_cy[i]);
    					}
    				}
    			}
    		}
    	});
    	$("#mass_send_win").modal();  
    }
    
    // 导入数据界面
    $scope.importData = function(activityId){
    	activity_data.import_data(activityId).then(
    			function success(data) {
    				$scope.ticket.length=0;
    				$(data.ticketList).map(function(){
    					var _ticket = new ticket(this);
    					console.log(_ticket);
    					$scope.ticket.push(_ticket);
    				})
    				console.info($scope.ticket.length);
    			}, function error() {
   					console.log("导入失败!");
   			    }	
    	);
    	$(".input-large").val('');
    	$("#import_win").modal();  
    }
    
    // 全选择
    $scope.check_all = function(){
    	var status = $("input[name='all_check_box']").prop("checked");
    	console.info(status);
    	$("input[name='ms_check']").each(function(){
    			$(this).prop("checked",!this.checked);
     	});
    	$("input[name='all_check_box']").prop("checked",status);
    }
    
    
    // 发送短信
    var send_sms_flag = true ;
    $scope.sendsms = function(obj){
    	var consumptionId = {"consumptionId":obj} ;
    	if(send_sms_flag){
    		send_sms_flag = false ;
    		activity_data.send_sms(consumptionId).then(
        			function success(data) {
        				console.info(data.code);
       				 if(data.code==0){
       					getConsumptionList();
       					$("#sms_win").modal('hide');  
       					 alert(data.msg);
       					 return
       				 }else{
       					 alert(data.msg);
       					 return 
       				 }
       				send_sms_flag = true ; 
       				}, function error() {
       					console.log("发送短信失败!");
       			    }
       		);
    	}else{
    		alert('请不要重新提交');
    		return ;
    	}
    	
    }
    
    // 发送批发短信
    var send_mass_sms_flag = true
    $scope.send_mass_sms = function(obj){
    	var consumptionIds ="" ;
    	if(obj.length<=0){
    		alert("您选择中报名信息的早已发送,请批量选择没有发送短信的报名信息!");
    		return ;
    	}
    	for(var i=0 ; i<obj.length;i++){
    		consumptionIds += obj[i].consumptionId+","
    	}
    	var activityId = $("#activityId").val();
    	consumptionIds = {"consumptionIds":consumptionIds.substring(0,consumptionIds.length-1),"activityId":activityId};
    	console.info(consumptionIds);
    	if(send_mass_sms_flag){
    		send_mass_sms_flag = false ;
    		activity_data.send_mass_sms(consumptionIds).then(
    	    	      function success(data){
    	    	    	  if(data.code==0){
    	    	    		  getConsumptionList();
    	     					$("#mass_send_win").modal('hide');  
    	    					 alert(data.msg);
    	    					 return
    	    				 }else{
    	    					 alert(data.msg);
    	    					 return 
    	    				 }
    	    	    	  send_mass_sms_flag = true ;
    	       				}, function error() {
    	       					console.log("发送短信失败!");
    	       			    }
    	       	)
    	}else{
    		alert('请不要重新提交');
    		return ;
    	}
     }
    
    
	
	activity_data.activity_detail($scope.id).then(
			function success(data) {
				 if(data.code!=0){
					 alert(data.msg)
					 return
				 }
				 $scope.act_xq=new activity_detail(data.info);
				 }, function error() {
					console.log("获取活动详情失败")
			});
	
		
	
	    /*获取报名信息*/
		var getConsumptionList = function(){
			var param_text  = $("#param_text").val() ;// 姓名或者手机号码
			console.info(param_text);
			var check_status = $("#param_check").prop("checked"); // 已签到
			$("input[name='all_check_box']").prop("checked",false); // 设全选为空
			console.info(check_status);
			
			var postData = {
			    param_text :param_text,
			    check_status:check_status,
				pageIndex: $scope.paginationConf.currentPage,
		        pageSize:  $scope.paginationConf.itemsPerPage
		    }
			activity_data.activity_id_by_consumption_list($scope.id,postData.pageIndex,postData.pageSize,postData.param_text,postData.check_status).then(
		    function success(data) {
				$scope.mess_cy.length=0;
				$scope.paginationConf.totalItems = data.results ;
				$("#consumption_count").html(data.results);
				$(data.rows).map(function(){
					var kmes = new activity_id_by_consumption_list(this);
					console.log(kmes);
					$scope.mess_cy.push(kmes)
				})
			}, function error() {
				console.log("获取参与人数失败")
			});
			 
		}
		
		//配置分页基本参数
	    $scope.paginationConf = {
	        currentPage: 1,
	        itemsPerPage: 10
	    };
	    
	    $scope.watch_flag = false ;
	    $scope.$watch('mess_cy',function(){
	    	$scope.watch_flag = true ;
	    	getConsumptionList();
	    });
	    $scope.$watch('paginationConf.currentPage+paginationConf.itemsPerPage', function(newValue, oldValue) {
	    	 if (newValue === oldValue) { 
	    		 return; 
	    	 }
	    	 if($scope.watch_flag){
		    	 getConsumptionList();
		    }
	    });

	    
	     // 查询
	    $scope.queryData = function(){
	    	$scope.watch_flag = true ;
	    	getConsumptionList() ;
	    }
	    
	    
	   
        
	   
           
        

}]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
    $urlRouterProvider.when('activities_collection','/activities_collection')  // 收藏活动
    				  .when('hacer_mipad_rine','/hacer_mipad_rine')  // 我的赞助
    				  .when('my_purse','/my_purse')  // 我的钱包
    				  .when('user_my_activities','/user_my_activities')  // 个人中心发起的活动
    				  .when('bank_card','/bank_card')  // 我的银行卡
    				  .otherwise('/personal_center');  //首页    默认项
    $stateProvider.state('personal_center',{
    	url: '/personal_center', //首页
    	templateUrl: '/html/user/personal_center.html'
    }).state('activities_collection',{  //收藏活动                     
        url: '/activities_collection',
        templateUrl: '/html/user/activities_collection.html'
    }).state('hacer_mipad_rine',{  //我的赞助                 
        url: '/hacer_mipad_rine',
        templateUrl: '/html/user/hacer_mipad_rine.html'
    }).state('my_purse',{  //我的钱包               
        url: '/my_purse',
        templateUrl: '/html/user/my_purse.html'
    }).state('user_my_activities',{  //个人中心发起的活动             
        url: '/user_my_activities',
        templateUrl: '/html/user/user_my_activities.html?v=5'
    }).state('bank_card',{  //我的银行卡     
        url: '/bank_card',
        templateUrl: '/html/user/bank_card.html'
    })


}])


$('.j-navCity').addClass('none').prev('a').removeClass('none');

