<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="user_center">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
          <link href="/css/jquery.datetimepicker.css" type="text/css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"    href="/img/LOGO.png"/>
    
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->


<title>e场景活动</title>

<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="user_centerController">
    
  <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="mt20 wd" >
        <div class="user_left_a fl">
             <div class="user_icon_a bgff">
                 <p class="cen pt20 pm20"><img  class="yj4 user_icon_left" ng-src="{{user_con.user_icon}}"><!-- {{user_detail.user_icon}} -->
                   <br>
                     <span class="zq fz18" ng-bind="user_con.user_name"></span>
                 </p>  
            </div>
            
            <div class="mt10 yj4 bgff dfd_poiuy ">
                <ul class="user_list_left">
                    <li ui-sref="personal_center">
                       <p class="zq fz16 pr title_user_a" >个人中心 <img src="/img/rightnav.png" class="right_icon_a"></p>   
                    </li>
  
                    <li  ui-sref="user_my_activities">
                       <p class="zq fz16 pr title_user_a">我的活动 <img src="/img/rightnav.png" class="right_icon_a"></p>
     
                    </li>
                    <!-- 暂时屏蔽赞助 -->
                    <!-- <li ui-sref="hacer_mipad_rine">
                       <p class="zq fz16 pr title_user_a" >我的赞助 <img src="/img/rightnav.png" class="right_icon_a"></p>
       
                     
                    </li> -->
                    <!-- /暂时屏蔽赞助 -->
                    <li ui-sref="my_purse">
                       <p class="zq fz16 pr title_user_a">我的钱包 <img src="/img/rightnav.png" class="right_icon_a"></p>
            
                     
                    </li>
                    <li ui-sref="bank_card">
                       <p class="zq fz16 pr title_user_a">银行卡 <img src="/img/rightnav.png" class="right_icon_a"></p>
            
                     
                    </li>
                    <!-- <li ui-sref="activities_collection">
                       <p class="zq fz16 pr title_user_a" >收藏夹 <img src="/img/rightnav.png" class="right_icon_a"></p>
            
                     
                    </li> -->
                    
                    
                
                </ul>
            
            </div>
        
        </div>
        <div class="user_right_a fr bgff" data-ui-view>
        
        
        </div>
        
        <p class="qc"></p>
    
    </div>
    <input type="hidden" id="person_user_id" value="{{user_con.user_id}}">
      <%@include file="/jsp/common/mml_bottom.jsp"%>
       <script src="/js/common/angular-ui-router.min.js?v=10"></script>
            <script src="/js/common/jquery.datetimepicker.js"></script>
       <script src="/js/view/user_center.js"></script> 
</body>
</html>