<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
	<title>e场景活动-签到</title>
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/common/mui.min.css" rel="stylesheet">
    <link href="/css/activity/sign_in/sign_ticket.css?v=12" rel="stylesheet">
    </head>
<input type="hidden" value="${activity.id}" id="activityId" >
<body >
    <section class="nav_sign_w">
      <section class="nav_sign_n">
          <section class="sign_in tl pd">
               <p class="fz16 cf tl dianer mt20" ><strong style="color:#ff0">${activity.name}</strong><br>
               <p class="fz14 cf sign_info"  >主办方:${activity.sponsor}</p><br>
               <p class="fz14 cf sign_time_info"   >时间:<fmt:formatDate value="${activity.start_time}" pattern="yyyy年MM月dd日 E HH:mm"/></p>
               <p class="fz14 cf sign_time_info" >地点:${activity.address}</p>
          </section>
       </section>
    </section>    
    <p class="mt20"></p>
    <ul class="mui-table-view f-color-878787 sine_font">
         <li class="mui-table-view-cell br0">
                <input type="text" data-src="${ticket_count}"   placeholder="输入6位数字的票券号码" class="entry_code" id="entry_code">
         </li>
         <li>

    	 </li>    
    </ul>
    
    <section id="apply" class="mui-popover mui-popover-bottom mui-popover-action sign_pup apply_win">
       	 <p class="mt20 cen fz18 zd">报名签到</p>
     		<p class="apply_close">x</p>
     		<section class="bgff pm20">
     		       <input type="text" placeholder="姓名"     id="name"   class="apply_input" >
      	  <input type="number" placeholder="手机号码"  id="phone"  class="apply_input" >
    	 	<button id="apply_confirm" class="apply_confirm">签到</button>
     		
     		</section>
 
    	 	
     </section>
    <c:set var="nowDate" value="<%=System.currentTimeMillis()%>"></c:set>
    
    	
    <c:if test="${activity.end_time.time-nowDate>=0}">
           <c:if test="${isFree==1}"> <!-- 收费活动没有立即报名  -->
               <p class="tip_baoming mt30">提示：如果您还没报名？<a class="to_enroll">立刻报名</a></p>
           </c:if>
           <p class="pd"><button class="confirm_enroll">确认签到</button></p>
    </c:if>	
    <c:if test="${activity.end_time.time-nowDate<0}">
           <p class="pd"><button class="activity_over">确认签到</button></p>
    </c:if> 
    
    
    <section id="sign_success" class="mui-popover mui-popover-bottom mui-popover-action sign_pup" 
        style="background:#fff;height:30%;z-index:999">
     	<p class="sign_pup_dismiss">x</p>
     	<p class="sign_pup_suceess">
     		<label></label>
     		<span>签到成功</span>
     	</p>
     	<button id="check_sign" class="check_sign">查看签到卡</button>
     </section> 
     
     
     

    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/common/zepto.min.js"></script>
    <script src="/js/common/mui.min.js"></script>
    <script src="/js/activity/sign_in/sign_ticket.js?v=4.0"></script>
</body>
</html>