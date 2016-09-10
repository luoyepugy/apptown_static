/**
 * 
 */
 angular.module('directive_mml', ["activity_servrt","ui.router"])
 .run(["$rootScope","activity_data",function($rootScope,activity_data){  
	 $rootScope.mode={"the_menu":function(){
		 $(".menu_pup").toggleClass("show_a")
	 }} 
 }])
 .controller('mode_Controller',["$scope","activity_data",function($scope) {
	

}]).directive('backButton', function ($window) {
        var directive = {
            restrict: 'AE',
            link: link
        };
        return directive;

        function link(scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        };
})
.directive('finish', function ($timeout) {//轮播图遍历完之后执行
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
})
.directive('href', function () { //跳转制定的页面
     return {
         restrict: 'AE',
         link: function(scope,ele,attr){
             ele.on('click',function(e){
            	 /*阻止触发时间冒泡*/
                 e.preventDefault();
                 e.stopPropagation();
                 var this_href=$(this).attr("data-href")
                 window.location.href=this_href;
             });
         }
     };
 }).directive("back", function() {
     return {
         restrict: "AE",
         link: function(t, e) {
             e.on("click",
                 function(t) {
                     t.preventDefault(),
                         window.history.back()
                        
                         
                 })
         }
     }
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
}).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
    $urlRouterProvider.otherwise('home',"home") //首页    默认项
    				  .when('ticket_volume_list','/ticket_volume_list')  // 票卷列表
    				  .when('activities_list','/activities_list')  // 活动列表
    				  .when('sponsor_list','/sponsor_list') // 赞助列表
    				  .when('add_activities','/add_activities')  // 赞助列表
    				  .when('loading','/loading')  // 登陆
    				  .when('register','/register')  // 注册
    				  .when('agreement','/agreement')  // 协议
    				  .when('personal_center','/personal_center')  // 个人中心
    				  .when('personal_information','/personal_information')  // 个人信息
    				  .when('change_password','/change_password')  // 修改密码
    				  .when('modify_information','/modify_information')  // 修改资料
    				  .when('my_activities','/my_activities')  // 我的活动
    				  .when('suggestion_feedback','/suggestion_feedback')  // 意见反馈
    				  .when('about_us','/about_us')  // 关于我们
    				  .when('sponsorship_details','/sponsorship_details')  // 我的赞助
    				  .when('my_sponsorship_details','/my_sponsorship_details')  // 我的赞助 
    				  .when('sponsorship_payment','/sponsorship_payment')  // 支付详情  
    				  .when('volume_details','/volume_details')  // 票卷详情  
    				  .when('activity_loan','/activity_loan')  //活动白条
    				  .when('my_white','/my_white')  //个人中心我的活动白条
    				  .when('review_details','/review_details')  //个人中心我的活动白条详情
                      .when('sponsor_auth','/sponsor_auth')   // 主办方认证编辑
    				  
    $stateProvider
     .state('home',{
    	url: '/home', //首页
    	templateUrl: '/html/home.html'
    }).state('ticket_volume_list',{
    	url: '/ticket_volume_list', //票卷列表
    	templateUrl: '/html/user/ticket_volume_list.html'
    }).state('activities_list',{
    	url: '/activities_list/:activityTypeId', //活动列表
    	templateUrl: '/html/activities/activities_list.html'
    }).state('sponsor_list',{
    	url: '/sponsor_list', //赞助列表
    	templateUrl: '/html/sponsorship/sponsor_list.html'
    }).state('add_activities',{
    	url: '/add_activities', //加号进来的页面
    	templateUrl: '/html/add_activities.html'
    }).state('loading',{
    	url: '/loading', //登陆
    	templateUrl: '/html/user/log_in.html'
    }).state('register',{
    	url: '/register', //注册
    	templateUrl: '/html/user/register.html'
    }).state('agreement',{
    	url: '/agreement', //协议
    	templateUrl: '/html/user/agreement.html' 
    }).state('personal_center',{
    	url: '/personal_center', //个人中心
    	templateUrl: '/html/user/personal_center.html'
    }).state('personal_information',{
    	url: '/personal_information/:user_id', //个人信息
    	templateUrl: '/html/user/personal_information.html'
    }).state('change_password',{
    	url: '/change_password/:user_id',  // 修改密码
    	templateUrl: '/html/user/change_password.html'
    }).state('modify_information',{
    	url: '/modify_information',  // 修改资料
    	templateUrl: '/html/user/modify_information.html'
    }).state('my_activities',{
    	url: '/my_activities/:type/:user_id',  // 我的活动
    	templateUrl: '/html/user/my_activities.html'
    }).state('suggestion_feedback',{
    	url: '/suggestion_feedback',  // 意见反馈
    	templateUrl: '/html/user/suggestion_feedback.html'
    }).state('about_us',{
    	url: '/about_us',  // 意见反馈
    	templateUrl: '/html/user/about_us.html'
    }).state('sponsorship_details',{
    	url: '/sponsorship_details/:type',  // 我的赞助
    	templateUrl: '/html/user/sponsorship_details.html'
    }).state('my_sponsorship_details',{
    	url: '/my_sponsorship_details/:id/:money/:peo_num',  // 个人中心赞助详情
    	templateUrl: '/html/user/my_sponsorship_details.html'
    }).state('sponsorship_payment',{
    	url: '/sponsorship_payment/:id',  // 个人中心赞助--支付详情
    	templateUrl: '/html/user/sponsorship_payment.html'
    }).state('volume_details',{
    	url: '/volume_details/:id',  // 个人中心-票卷详情
    	templateUrl: '/html/user/volume_details.html'
    }).state('activity_loan',{
    	url: '/activity_loan/:activity_id',  //活动白条
    	templateUrl: '/html/activities/activities_loan.html'
    }).state('my_white',{
    	url: '/my_white/:type/:user_id',  //个人中心我的活动白条
    	templateUrl: '/html/user/my_white.html'
    }).state('review_details',{
    	url: '/review_details/:id/:activity_id/:name/:sex/:phone/:apply_money/:contact_status/:user_remark/:periods/:create_time',  //个人中心我的活动白条详情
    	templateUrl: '/html/user/review_details.html'
    }).state('sponsor_auth',{
        url: '/sponsor_auth',  //主办方认证编辑
        templateUrl: '/html/user/sponsor_auth.html'
    })

  
   
}]);

