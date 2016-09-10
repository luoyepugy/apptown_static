<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="download_qr_code">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动-下载二维码</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="qr_codeController">
      <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="wd bgff mt20 ">
           <div class="qc_neo_a yj4">
             
               
             
             <div class="qc_left">
                <div class="qc_n_l">
                   <img src="/img/activity_cover/4-4.jpg" class="qc_case_m">
               
                   <p class="mt20 pd fz18 dianer zq fg_title_a"><strong>活动名称活动名称活动名称活动名称活动名称活动名称</strong></p>
                   
                   <div class="qc_poiu_icon" ng-init="qcode('qc_poiu_icon','http://www.apptown.cn',170,170)"></div>
                   
                   <p class="cen fz18 mt20">微信扫二维码签到</p>
                    </div>
                  <p class="cen fz18 mt20">签到机签到模板</p>
                 
               </div>
               
               <div class="qc_right ov mt30">
                    <div class="qc_poiu_1 mt20">
                           <div class="qc_poiu_1_q fl" ng-init="qcode('qc_poiu_1_q','http://www.apptown.cn',170,170)"></div>
                          <div class="ov pl30">
                             <p class="fz18 mt30">二维码尺寸：1024*1024px</p>
                              <a class="cf btn btn-primary mt20 upda_oiu fz16">下载二维码</a>
                        </div>
                    </div>
                   <p class="qc"></p>
                   
                   <div class="qc_poiu_1 mt60">
                           <div class="qc_poiu_1_q fl"></div>
                          <div class="ov pl30">
                             <p class="fz18 mt30">二维码尺寸：640*640px</p>
                              <a class="cf btn btn-primary mt20 upda_oiu fz16">下载二维码</a>
                        </div>
                    </div>
                   
                   <p class="qc"></p>
                   <ul class="mt40 fz16 dfdf_poi">
                     <li>下载的二维码可以上传手机或者易拉宝</li>
                     <li>参加活动的人可以通过扫描二维码活动签到</li>
                 </ul>
                   
               </div>
               
                  <p class="qc "></p>
               
               
               
               
          </div>
    </div>
    
      <%@include file="/jsp/common/mml_bottom.jsp"%>
      <script src="/js/view/download_qr_code.js"></script>
</body>
</html>