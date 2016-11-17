<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="ticket_volume_list">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Cache-Control" content="no-transform "> 
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
     <link href="/css/common/mui.min.css" rel="stylesheet">
<!--[if IE]>    <link href="/style/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="/js/common/uaredirect.js"></script>

</head>
  <body class="activity_body" ng-controller="activity_show_ticket">
 <section class="about_vote_wrap">
 	<img class="about_vote_bg" src="/img/about_vote_bg.jpg">
 	<p class="about_vote_title">
 		<span ng-bind="vote_detail.title"></span ><span ng-if="vote_detail.type==1">（单选）</span><span ng-if="vote_detail.type==2">（多选）</span>
 	</p>
 	<p class="about_vote_into"> 		
 		投票介绍：<span ng-bind="vote_detail.detail"></span>
 	</p>
 </section> 
 <section class="about_vote_content">
   <section class="about_vote_list fl" ng-repeat="x in vote_detail.voteItemList"> 
  	    <span class="vote_me" ng-bind="x.vote_count+'票'" data-tk="{{x.vote_count}}">
  	    	
  	    </span>
   	    <img ng-src="{{x.image_urls}}">
   	    <ul class="about_vote_p">
   	        <label class="about_vote_right" data-i=1 data-id="{{x.id}}"></label>
   	    	<p class="about_vote_p1"><span ng-bind="x.id"></span> <span ng-bind="x.item_name"></span></p>
   	    </ul>
   </section>
  
    
   
   
<p class="qc"></p>
 </section>
 <a class="vote_comfirm">确定</a>
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
  <li class="vote_nav_list active">
    <a>
  	 <label class="vote_real"></label>
  	 <p>投票</p>
  	     </a>
  </li>
  <li class="vote_nav_list">
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
     <span class="about_vote_tip">投票成功!</span>
  
   

  <input id="type_p" type="hidden" value="{{type_p}}"/>
  <input id="is_vote" type="hidden" value="{{is_vote}}"/>
  <input id="vote_id" type="hidden" value="${vote_id}"/>
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