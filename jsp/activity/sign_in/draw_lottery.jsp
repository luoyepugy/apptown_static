<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <!DOCTYPE html>
<html ng-app="ticket_volume_list">
	<head>
		<meta charset="UTF-8">
		<title></title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="format-detection" content="telephone=no">
		<meta http-equiv="Cache-Control" content="no-transform "> 
 		<link href="/css/base.css" rel="stylesheet">
    		<link href="/css/style.css" rel="stylesheet">
     		<link href="/css/common/mui.min.css" rel="stylesheet">
     <style>
         body{
             padding-top: 0px;
             background: #fff;
             padding-bottom: 70px;
         } 
         p{
             margin: 0;
         }
    	  .ckgedu{
             padding-top: 10px;
             padding-bottom: 10px;
             background: #ff6600;
             color: #fff;
             border: 1px solid ff6600;
         }
     
         
        </style>
        <script>
           var act_id="${activity_id}"
               start_time="${start_time}",
         	   end_time="${end_time}"
        </script>
</head> 
	<body ng-controller="draw_lotteryctl">
	  <section>
	      <img src="/img/cj_banner.jpg" class="w100"> 
	  </section>
	  <section class="pd">
	      <p class="fz16 zd mt10">
	          
		${name}
	      </p>
	      <p class="mt0 fz14 mt5">   
	        	  时间：{{start_time|date:'MM/dd EEE  HH:mm'}} ~ {{end_time|date:'MM/dd EEE  HH:mm'}}
	      </p>
	      
	      <section class="case_poo mt10"  ng-repeat="dl in detail">
	           <img ng-src="{{dl.prize_image}}" class="fl case_ico">
	           <section class="ov pl10">
	               <p class="fz14 zd" ng-bind="dl.draw_name"></p>
	               <p class="dianer fz12 aasd_poos" ng-bind="dl.prize_remark">   </p>
	               <p class="fz12">
	                   名额：{{dl.quota}}名
	               </p>
	           </section>
	          <p class="qc"></p>
	      </section> 
	       
	    
	      
	      <section class="mt40 pr hjmd_po">
               <p class="zjmd_icon cen">
                <img src="/img/zjmd.png" class="mui-col-xs-10">
               </p>
               <section class="zjmd_row cen"  ng-repeat="win in win_prize_data">
                   <section class="mui-col-xs-6 fl pl10">
                       <img ng-src="{{win.user_icon}}" class="zj_user_icon yj fl">
                       <section class="ov tl pl10 mt14">
                           <p class="fz12 zd zc" ng-bind="win.name"></p>
                           
                       </section>
                   </section>
                       <section class="mui-col-xs-3 fl fz12 mt14 zc" ng-bind="win.entry_code">
                       
                   </section>
                         <section class="mui-col-xs-3 fl fz12 mt14 zc" ng-bind="win.prize_name">
                
                   </section>
                   <p class="qc"></p>
               </section> 
	          
               
	          
	      </section>
	      
	<!--       <p class="xiahhg_as fz12 cen pt10 pm10">
	          参看更多
	          <i class="mui-icon mui-icon-arrowdown"></i>
	          
	      </p> -->
	      <p>
	          <a class="mui-btn w100 ckgedu" ng-href="http://m.apptown.cn/index.html#/award">查看我的获奖</a>
	      </p>
	      
	  </section>
	  
	  
	  
	  
	  <ul class="vote_nav">
  <li class="vote_nav_list">
   <a ng-href="/scan/to_ticket_info?activity_id=${activityId }&entry_code=${entry_code}">
      <label class="vote_index"></label>
  	 <p>首页</p>
   </a>  	
  </li>
  <li class="vote_nav_list">
    <a >

  	 <label class="vote_red"></label>
  	 <p>红包</p>
  	  </a>
  </li>
  <li class="vote_nav_list ">
    <a>
  	 <label class="vote_real"></label>
  	 <p>投票</p>
  	     </a>
  </li>
  <li class="vote_nav_list active">
  <a>
  <label class="vote_chou"></label>
  	 <p>抽奖</p>
  </a>  	 
  </li>
  <li class="vote_nav_list">
   <a>
    <label class="vote_message"></label>
  	 <p>留言</p>
   </a>
  	
  </li>
</ul>
    <script src="/js/common/jquery-1.11.3.min.js"></script>
       <script src="/js/common/jquery.qrcode.min.js"></script>
        <script src="/js/common/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/js/common/angular.min.js"></script>
   <script src="/js/common/mui.min.js"></script>
    <script src="/js/entity/entity_activity.js?v=10"></script>
        <script src="/js/mode/directive.js"></script>
    <script src="/js/service/service_activity.js?v=10"></script> 
    <script src="/js/view/sign_in/sign_vote_show.js"></script>
	</body>
</html>
    