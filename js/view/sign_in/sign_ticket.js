/**
 * 签到墙视图
 */
angular.module('sign_ticket', [ "directive_mml","activity_servrt","ui.router","ngWebSocket"])
.controller('sign_ticketxController',["$scope","activity_data","MyData",function($scope,activity_data,MyData) {
	var parameter={}
	parameter.activity_id=$("#activityId").val();
	parameter.pageIndex=1 
	parameter.pageSize=500
	parameter.code_use=2;//1未签到 2已签到
	parameter.sort=1;//排序  2根据签到时间倒序排
	var arr_leg,ne_p=1,q_random=Math.floor(Math.random()*99999+1) 
    $(".title_poiu").text(title_p);
	$scope.sign_f={
			"sign_data":[], 
			"sopouy_le":0,
			"sign_function":function(data_p){
				MyData.act_id=parameter.activity_id
				$scope.MyData = MyData;  
			    MyData.get() 
			}
	}
	$scope.sign_f.sign_function(parameter);
}])
/*
 * 张晗
 * 广告屏控制器
 */
.controller('signAdCtrl', ['$scope', 'activity_data',"$state", function($scope, activity_data,$state) {
    $scope.vote_id_oio=vote_id==""?0:vote_id
    $scope.activityId=$("#activityId").val()	 
    
	$scope.adCarousel = {
		'wrap': false,
		// 'list': ['/img/bg_admin_imge.jpg', '/img/test.jpg', '/img/test.jpg', '/img/bg_admin_imge.jpg'],
		'show': function() {
			// 获取广告图
		    activity_data.getDatas('GET', '/activity/get_activity_ad_urls/'+ $("#activityId").val())
		    .then(function(data) {
		      	if(data.code == 0) {
					if(data.info && data.info.ad_urls.length > 0) {
						$scope.adCarousel.wrap = true;
		        		$scope.adCarousel.list = data.info.ad_urls;
						$('#myCarousel').carousel({
							interval: 6000,
							pause: ''
						});
					} else {
						alert('您未上传广告图片');
					}
		        }
		    });
		},
		'close': function() {
			$scope.adCarousel.wrap = false;
		}
	};

	// 手势滑动操作广告轮播图
	var myElement = document.getElementById('adCarousel');
	var mc = new Hammer(myElement);
	mc.on("swipeleft swiperight", function(ev) {
		if($scope.adCarousel.list && $scope.adCarousel.list.length > 0) {
			$('#myCarousel').carousel('pause');
			var len = $scope.adCarousel.list.length - 1;
			var active = $('.j-adCarousel .item.active');
		    if(ev.type == 'swipeleft') {
		    	if(active.index() == len) { 
		    		active.removeClass('active');
		    		$('.j-adCarousel .item').eq(0).addClass('active');
		    	} else {
		    		active.removeClass('active').next('.item').addClass('active');
		    	}
		    } else if(ev.type == 'swiperight') {
		    	if(active.index() == 0) {
		    		active.removeClass('active');
		    		$('.j-adCarousel .item').eq(len).addClass('active');
		    	} else {
		    		active.removeClass('active').prev('.item').addClass('active');
		    	}
		    }
		    $('#myCarousel').carousel('cycle');
	    }
	});
	
	   $scope.stau=function(){
	    	$state.go('polls_show', {'vote_id': $scope.vote_id_oio});	
		}	
}])
.controller('polls_showController',["$scope","activity_data","$location","$stateParams",function($scope,activity_data,$location,$stateParams) {  
    var vote_id=$stateParams.vote_id;//投票ID
    var date={"id":vote_id}
    $scope.polls_li=""; 
    $scope.voteItemList_p=[]
    $scope.vote_p=function(date){
    	 activity_data.query_vote_p(date).then(
    				function success(data) {
    					if(data.info==null){
    						return
    					}
    					 $scope.voteItemList_p=[]
    					  $scope.polls_li=new query_vote(data.info)
    					  $($scope.polls_li.voteItemList).map(function(){
    						 var hjh= new voteItemList(this)
    						 $scope.voteItemList_p.push(hjh)
    					  })
    					  
    					   $(".title_poiu").text($scope.polls_li.title) 
    					   $(".yuyt_poiu").text($scope.polls_li.total_vote)
    					   $(".yuyt_poiu_a").text("总投票")
    				}, function error() {
    					console.log("获取投票信息失败")
    		});
    }
    $scope.vote_p(date)
      setInterval(function(){
            $scope.vote_p(date)
    },50000)
}]).controller('streamingCtrl',function($scope,activity_data,$location,$stateParams) { //直播 

  var player=""
		  activity_data.getDatas('GET', '/Live/query_live_info?activity_id='+$stateParams.act_id)
		  .then(function(data) {
			 if(data.code!=0){
				 return
			 }
			   // 初始化播放器
			      player = new prismplayer({
			        id: "J_prismPlayer", // 容器id
			        source: data.info.live_url_str.liveurl_m3u8,// 视频地址 
			        autoplay: false,    //自动播放：否
			        isLive:true,  //是否是直播
			        width: "100%",       // 播放器宽度
			        height: "500px" ,     // 播放器高度
			        waterMark:"/img/sylogo.png|TL|0.15|0.5" 
			    });
		 }); 
	
}).controller('lotteryraffleCtrl',function($scope,activity_data,$location,$stateParams) { //抽奖
   $scope.act_id=$stateParams.act_id;
   activity_data.getDatas('GET', '/activity/query_draw_by_activity_id/'+  $scope.act_id)
	  .then(function(data) {
		 if(data.code!=0){
			 alert(data.msg);
			 return
		 }
		 $scope.detail=data.info.draw_detail_array
		 $scope.kmnb=$scope.detail[0]
	 }); 

   $scope.draw_list=function(){
	   activity_data.getDatas('GET', '/draw/query_draw_list/?activity_id='+  $scope.act_id)
		  .then(function(data) {
			 if(data.code!=0){
				 alert(data.msg);
				 return;
			 }
			 $scope.draw_data=data
			 $scope.random_p=data.info
		 }); 
   }
   $scope.winners_p=function(){
	   activity_data.getDatas('GET', '/draw/get_win_prize?activity_id='+  $scope.act_id)
		  .then(function(data) {
			 if(data.code!=0){
				 alert(data.msg)
				 return
			 }
			 $scope.win_prize_data=data.info
		 }); 
   }

   $scope.draw_list();
   $scope.winners_p()
   $(".lottery_raffle_se").on("click",function(){
	   $(this).toggleClass("lkjh_a");
   })
   $scope.d_bs=function(e,y){
	   $(e).parents(".lottery_raffle_se").find(".draw_name_q").text($(e).text().trim())
	   $scope.kmnb=y
   }
   var time_in,quto=$(".surplus_quota").text();
    $scope.lottery_raffle={"began_draw":function(e){
    	quto=parseInt($(".surplus_quota").text().trim())+1
    	var quota_me=$(".quota_me").text().trim()
    	console.log(quto+"   "+quota_me);
    	if(quto>=$scope.kmnb.quota){
    		alert($(".draw_name_q").text()+"名额已满")
    		return
    	}
    	if($scope.random_p.length<=1){
    		alert("抽奖人数不够")
    		return;
    	}
    	
    	if($(e).attr("data-ty")=="0"){
    		$(e).text("停止")
    		time_in=setInterval(function(){
    			$scope.winning_numbers=$scope.random_p[Math.floor(Math.random()*$scope.random_p.length)]
    			var kmg=$scope.winning_numbers.entry_code,hjh;
    			if(kmg.length<=6){
    				 hjh=kmg.substring(0,1)+"****"+kmg.substring(kmg.length-1,kmg.length); 
    			}else{
    				 hjh=kmg.substring(0,3)+"****"+kmg.substring(kmg.length-3,kmg.length); 
    			}
    			$(".input_sj").val(hjh).attr("consumption_id",$scope.winning_numbers.consumption_id); 
    		},40)
    		$(e).attr("data-ty","1")
    	}else if($(e).attr("data-ty")=="1"){
    		clearTimeout(time_in)
    		$(e).text("开始抽奖")
    		$(e).attr("data-ty","0")
    		var data_lk={};
    		data_lk.draw_id=$scope.draw_data.msg;
    		data_lk.consumption_id=$(".input_sj").attr("consumption_id");
    		data_lk.prize_name=$(".draw_name_q").text();
    		this.win_draw(data_lk);
    	
    	}
    },"win_draw":function(da){
		
    	
    	activity_data.getDatas('POST', '/draw/add_win_draw',da)
  	  .then(function(data) {
  		 if(data.code!=0){
  			 return
  		 }
  		$scope.draw_list();
		$scope.winners_p();
		$(".surplus_quota").text(++quto)
		
  	 }); 
    }
    
    }
 
}).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.when('polls_show','/polls_show')  // 收藏活动
    				 .otherwise('/sign_wall');  //首页    默认项
    $stateProvider.state('sign_wall',{
    	url: '/sign_wall', //首页
    	templateUrl: '/html/activity/sign_wall.html'
    }).state('polls_show',{
    	url: '/polls_show/:vote_id', //投票
    	templateUrl: '/html/activity/polls_show.html'
    }).state('streaming',{
    	url: '/streaming/:act_id', //直播
    	templateUrl: '/html/activity/streaming.html',
    	controller: 'streamingCtrl'
    }).state('lotteryraffle',{
    	url: '/lotteryraffle/:act_id', //抽奖
    	templateUrl: '/html/activity/lottery_raffle.html',
    	controller: 'lotteryraffleCtrl'
    })


}]) 


$(".full_screen").on("click",function(){
					 if($(this).attr("data-lx")==1){
						 requestFullScreen()
						 $(this).attr("data-lx",2)
					 }else  if($(this).attr("data-lx")==2){
						 exitFullscreen()
						 $(this).attr("data-lx",1)
					 }
		             
		        })
    function requestFullScreen() {
            var de = document.documentElement;
             if (de.requestFullscreen) {
                     de.requestFullscreen();
                 } else if (de.mozRequestFullScreen) {
                     de.mozRequestFullScreen();
                 } else if (de.webkitRequestFullScreen) {
                     de.webkitRequestFullScreen();
                 }
         }


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}