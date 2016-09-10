<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
   
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="e场景（应用）是基于HTML5且针对移动互联网营销的网页DIY制作工具，用户可以编辑页面分享至社交网络进行自媒体营销，积累目标客户，为价值转化做好数据基础。根据e场景提供的数据统计和信息搜集的功能了解传播效果，从而进行营销策略的优化和重新的调整。 e场景为企业提供最新创意，缔造专属品牌形象，做真正有价值的移动场景应用。" />
    <meta name="keywords" content="e场景--慢慢来电子商务|活动小精灵|H5页面|h5页面制作|微场景|微信场景|微场景制作|移动互联网品牌推广专家" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=no,minimal-ui" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="applicable-device" content="mobile">
    <meta content="no-cache" http-equiv="Pragma">
    <meta content="no-cache" http-equiv="Cache-Control">
    <meta content="0" http-equiv="Expires"> 
<title>e场景活动</title>
     <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/activity/sign_in/sign_ticket.css?v=13"/>
    <link href="/css/common/mui.min.css" rel="stylesheet">
</head>
<body style="background:#462365;">
     <input type="hidden" value="${activityId}" id="activityId">
     <section class="bgf_5">
          <h1 class="ticket_title" id="title">${title}</h1>
	   	  <p class="ticket_horner">
	   	  	主办方：<span id="sponsor">${sponsor}</span>
	   	  </p>
	   	  
	   	  	<img class="ticket_middle_left" src="${user_icon}" id="user_icon" width="104" height="107">
	   	  		<p class="ticket_middle_right_t1" style="margin-top:6%"><span id="name">${name}</span></p>
	   	  		<%-- <p class="ticket_middle_right_t2 fff_i">手机：<span id="tel">${tel}</span></p> --%>
	   	  		<p class="ticket_middle_right_t2 ">票号：<span id="entry_code">${entry_code}</span></p>
	
	   	  
	   	  <section class="wechat_ico">
	   	  	<img id="qr_code_url" data-src="${sponsor_url}" src="http://resource.apptown.cn/imageModel/activity_qrcode.jpg" width="133" height="132"/>
	   	  </section>
     </section>
	     

   	  	<a class="vote_comfirm bottom_print" id="button_print">打印签到卡</a>
   	  	<ul class="vote_nav">
  <li class="vote_nav_list  active"> 
  <a >
  	 <label class="vote_index"></label>
  	 <p>首页</p>
  	 </a>
  </li>
  <li class="vote_nav_list">   
  	 <label class="vote_red"></label>
  	 <p>红包</p>
  </li>
  <li class="vote_nav_list">
   <a href="/vote/${activityId}?entry_code=${entry_code}&activityId=${activityId}">
      <label class="vote_real" ></label>
  	 <p style="color:#fff;">投票</p>
    </a>  	 
  </li>
  <li class="vote_nav_list">
  	 <label class="vote_chou"></label>
  	 <p>抽奖</p>
  </li>
  <li class="vote_nav_list">
  	 <label class="vote_message"></label>
  	 <p>留言</p>
  </li>
</ul>
   	  <input type="hidden" value="${entry_code}" id="entry_code">
   	  <input type="hidden" value="${is_vote}" id="is_vote">
 </body>
 <script>

 </script>
    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/activity/sign_in/sign_ticket.js?v=2.0"></script>
     <script src="/js/common/mui.min.js"></script>
</html>