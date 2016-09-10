<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <meta name="description" content="e场景（应用）是基于HTML5且针对移动互联网营销的网页DIY制作工具，用户可以编辑页面分享至社交网络进行自媒体营销，积累目标客户，为价值转化做好数据基础。根据e场景提供的数据统计和信息搜集的功能了解传播效果，从而进行营销策略的优化和重新的调整。 e场景为企业提供最新创意，缔造专属品牌形象，做真正有价值的移动场景应用。" />
  <meta name="keywords" content="e场景--慢慢来电子商务|活动小精灵|H5页面|h5页面制作|微场景|微信场景|微场景制作|移动互联网品牌推广专家" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=no,minimal-ui" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="applicable-device" content="mobile">
  <meta content="no-cache" http-equiv="Pragma">
  <meta content="no-cache" http-equiv="Cache-Control">
  <meta content="0" http-equiv="Expires"> 
  <title>打印票券</title>
  <link href="/css/common/base.css?v=4.0" rel="stylesheet">
  <link href="/css/common/mui.min.css" rel="stylesheet">
  <link href="/css/activity/sign_in/sign_ticket.css" rel="stylesheet">
</head>
<body>
<section class="bg_print"></section>
    <section class="confirm_input">
        <p class="cf  fz14">请输入机器的编码，或者询问活动工作人员</p>
        <p><input type="text" placeholder="请输入打印码" id="print_code" value=""></p>
        <p class="confirm_p">
           <button class="confirm_print" >确认打印</button>
        </p>
    </section>
    
    <section class="print_prompt">
         <section class="print_section">
             <section class="timer">
                 <p class="print_info">正在打印，请等待<span class="count_down">3</span>秒时间</p>
                 <img src="/img/the_circle.png" class="xz360">
             </section>
             
             <section class="print_ok">
                 <p>打印完成，请取票</p>
             <p class="mt30">
               <button  class="print_success">完成</button>
             </p>
             </section>
         </section>
    </section>
    
    <script src="/js/common/zepto.min.js"></script>
    <script src="/js/activity/sign_in/sign_ticket.js"></script>
</body>
</html>