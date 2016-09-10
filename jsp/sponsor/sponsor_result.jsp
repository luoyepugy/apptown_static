<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>主办方</title>
    <link href="/css/common/bootstrap.css" rel="stylesheet">
    <link href="/css/common/mml_base.css" rel="stylesheet">
     <link rel="stylesheet" type="text/css" href="/js/generalPage/page.css" />
     <link rel="SHORTCUT ICON" href="/img/downloadApp/icon.png"/>
    <script src="/js/common/jquery-1.11.3.min.js"></script>
  	<script src="/js/common/bootstrap.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <!-- Include all compiled plugins (below), or include individual files as needed -->
  </head>
  <style type="text/css">
.search-content-title{height:20px;font-size:20px;color:#575757;}
.bor-bottom{border-bottom:1px solid #e0e0e0;}
.search-content-title span{color:#ff6600}

/*搜索主办方添加的CSS--1月4*/   
.search-host{padding-top: 20px;}
.search-host li{width:746px;border:#e0e0e0 solid 1px;border-radius:2px;padding:10px;background: #FFFFFF;}
.search-host li:nth-of-type(n+2){margin-top:5px;}
.search-host li .search-host-ico{width:132px;height:131px;border-radius:2px;}
.search-host li .search-host-ico img{width:132px;height:131px;}
.search-host li .search-host-content{width:590px;}
.search-host li .search-host-content h1{margin:0;padding:0;font-size:16px;padding-left:10px;line-height:50px;color:#009ef6;}
.search-host li .search-host-content h2{margin:0;padding:0;font-size:14px;padding-left:10px;line-height:30px;color:#575757;}
.search-host li .search-host-content h3{margin:0;padding:0;font-size:16px;padding-left:10px;padding-top:5px;color:#575757;}
.search-host li .search-host-content h3 span{color:#009ef6;}
.search-host li .search-host-content h3 em{font-style:normal;color:#009ef6; }
.activityList_code{text-align: center;}
/*搜索主办方添加的CSS--1月4*/ 
  </style>
  <body>
  <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="index-box">
      <div class="hd-box">
	      <div class="search-content-title">
	        			e场景活动为你找到<span>${totalCount}</span>个	
	      </div>
	      <div class="clearfix">
		      <section class="search-host pull-left">
               <%@include file="/jsp/sponsor/search_sponsor_list.jsp"%>
		      </section>
		      <!--///////////huodong-listbox end!//////////////-->
		
		      <aside class="huodong-sidebar">
		        <div class="hd-sidebar-top">
		          <p class="h3 text-center "><strong>便捷的活动发布平台</strong></p>
		          <p class="text-center">轻松举办一场活动</p>
		          <button type="button" class="btn btn-primary btn-lg center-block activityList-FQ">我要发起</button>
		        </div>
		        <div class="hd-sidebar-wechat">
		          <p class="h4 text-center ">微信扫一扫</p>
		          <p class=" h4 text-center">分享至朋友圈</p>
		          <div class="activityList_code"></div>
		          <p class=" h4 text-center">扫一扫分享才精彩</p>
		        </div>
		        <%-- <div class="hd-sidebar-bot">
		          <h3 class="mtb-10">热门活动</h3>
		          <img src="/img/newimg/img/showTemp.jpg" alt="..." class="img-rounded" width="198" height="125">   
		              <c:forEach items="${activityScan}" var="activityS" varStatus="i">
			              <div class="media mt-5">
			                <div class="media-left">
			                   <div class="ul-list1">${i.index+1}</div> 
			                </div>
			                <div class="media-body">
			                  <p class="media-heading"><a href="/huodong/activityDetail?activity_id=${activityS.id}">${activityS.name}</a></p>
			                </div>
			              </div>
		              </c:forEach>
		         </div> --%>
		      </aside>
	      </div>
		</div>
	</div>
      <div class="partner">
        <h3 class="padding-lr5">合作伙伴<span class="fl-r"><!-- <span class="glyphicon glyphicon-menu-left glyphicon-lg"></span><span class="glyphicon glyphicon-menu-right glyphicon-lg"></span></span> --></h3>
      </div>
      <div class="partner-box">
      <div class="partner-img">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
        <img class="media-object" data-src="holder.js/64x64" alt="84x84" src=""style="width: 84px; height: 84px;">
      </div>
      </div>
  <%@include file="/jsp/common/mml_bottom.jsp"%>
  <script src="/js/common/base.js"></script>
  <script src=/js/common/mode.js></script>
  <script src="/js/common/jquery.qrcode.min.js"></script>
  <script type="text/javascript" src="/js/generalPage/MyPage.js"></script>
  <script>
  $('.activityList_code').qrcode({render:"canvas",width : 161,height : 161,text:"http://m.apptown.cn/activity/initActivityShow?activityTypeId=1"});   //生成二维码
  </script>
  </body>
</html>