<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<link href="/css/activity/scan.css?v=2.0" rel="stylesheet">

<div class="scan_body_a">
   <div class="sign_in_icon_top">
      <img src="/img/sign_in_icon_top.jpg">
      <p class="title_pou">${activity.name}</p>
   </div>

   
    
    <section class="code" data-href="http://m.apptown.cn/scan/getWxCode?activityId=${activity.id}"></section>
     
     <p class="cen qc_poiuy_a">扫二维码签到</p>
    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/common/jquery.qrcode.min.js"></script>
         <script>
        var url=$(".code").attr("data-href")
        if(screen.width>1000){
            $(".code").qrcode({render: "canvas",width : 500,height : 500,text:url});
        }else{
            $(".code").qrcode({render: "canvas",width : 220,height : 200,text:url});
        }
  
    </script>
   </div>
