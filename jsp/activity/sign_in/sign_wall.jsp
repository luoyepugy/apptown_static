<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="sign_ticket">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
        <link href="/css/common/font-awesome.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/style/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
	var title_p="${activity_title }", 
		vote_id="${vote_id}"
</script>
</head>
<body ng-controller="signAdCtrl">

     <div class="sign_background">
  <!--   <button class="qb_p">dfg</button>-->
         
         <div class="wpo mt60 pr sign_wall_p">
            <p class="title_a  dian fl mt5 pt10">
                <span class="fz28 yellow title_poiu">${activity_title }</span><br><br>
                <span class="cf fz20 ml20">主办方：${sponsor } </span>
          
             </p> 
              
             <p class="ov cf cen pt10">
                 <span class="fz30 yuyt_poiu" ></span><br><br>
                 <span class="fz30 yuyt_poiu_a">人签到</span>
                 
             </p>
             <p class="qc"></p>
              
             <div class="mt80">
        <div class="txtScroll-top">
    <div class="bd ov" data-ui-view>
        
        <p class="qc"> </p>
    </div>
</div>
             </div>
             
             
             <div class="button_bottom mt30" >
                <span class="cf fz20 fl cen full_screen ml20" data-lx="1">
                   <i class="f_i poiuy_po_a"></i><br>
                    全屏
                 </span>
                 
                 
                 
                   <span class="cf fz20 fl ml80 cen"  ui-sref="streaming({act_id:activityId})"> 
                   <i class="f_i poiuy_po_b"></i><br> 
                    视频
                 </span>
                 
                   <span class="cf fz20 fl ml80 cen" ui-sref="sign_wall">
                   <i class="f_i poiuy_po_c"></i><br>
                	    签到墙
                 </span>
                 
                 
                  <span class="cf fz20 fl ml80 cen" ng-click="stau()">
                   <i class="f_i poiuy_po_d"></i><br> 
                	  投票
                 </span>

                 <span class="cf fz20 fl ml80 cen" ng-click="adCarousel.show()">
                   <img src="/img/icon-ad.png" alt="广告屏图标">
                   <p class="mt5">广告屏</p>
                 </span>
                 
                 
                <span class="cf fz20 fl ml80 cen"  ui-sref="lotteryraffle({act_id:activityId})"> 
                   <i class="f_i poiuy_po_e"></i><br> 
                    抽奖
                 </span>

                 <span class="cf fz20 fl ml80 cen" ui-sref="comment({activityId: activityId})"> 
                   <i class="f_i poiuy_po_f"></i><br> 
                    留言
                 </span>
                 
             <p class="qc"></p>
             
      <!--       左侧签到二维码-->
             <div class="sign_code">
                 <p class="cf cen fz30">活动签到</p>
                 
   
                <img class="sig_qc mt30" alt="分享二维码" src="http://www.apptown.cn/qrcode.jsp?content=http://apptown.cn/scan/scanActivityCode?activityId=${activityId }">
                 <p class="cen cf fz20 mt30">扫一扫 马上签到</p>
             </div>
             
             
         </div>
    </div>    
   <!-- 语音提示-->
    

   <!-- 广告屏轮播图 -->
   <div id="adCarousel" class="adCarousel j-adCarousel" ng-show="adCarousel.wrap">
      <div class="close" ng-click="adCarousel.close()"><img src="/img/close2.png" alt="关闭图标"></div>
      <div class="carousel slide" id="myCarousel" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div class="item" ng-class="{'active': $index == 0}" ng-repeat="value in adCarousel.list track by $index">
            <img ng-src="{{value}}" alt="轮播图">
          </div>
        </div>
      </div>
  </div>
  <!-- /广告屏轮播图 -->

 <audio controls="controls" style="width:1px;height:1px;display:none" id="player_p" >
  <source src="http://resource.apptown.cn/share/success.mp3" type="audio/mp3" />
</audio>
 <audio controls="controls" style="width:1px;height:1px;display:none" id="player_q" >
  <source src="http://172.16.2.250/sound/activity_welcome.mp3" type="audio/mp3" />
</audio>
    <input type="hidden" value="${activityId }" id="activityId">
  
    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/common/bootstrap.min.js"></script>
    <script src="https://hammerjs.github.io/dist/hammer.js"></script>
    <script src="/js/common/jquery.qrcode.min.js"></script>
    <script src="/js/common/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/js/common/angular.min.js"></script> 
    <script src="/js/common/angular-websocket.min.js"></script> 
    <script src="/js/common/angular-ui-router.min.js"></script>
    <script src="/js/common/prism-min.js"></script>
    <script src="/js/entity/entity_activity.js?v=10"></script>
    <script src="/js/mode/directive.js"></script>
    <script src="/js/common/modules-pc.js"></script>
    <script src="/js/service/service_activity.js?v=10"></script> 
    <script src="/js/view/sign_in/sign_ticket.js"></script>

</body>
</html>