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
}]).controller('streamingCtrl',function($scope,activity_data,$location,$stateParams) {  

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
			        height: "500px"      // 播放器高度
			    });
		 }); 
	
})
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

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