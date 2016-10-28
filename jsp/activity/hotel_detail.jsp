
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="activity_help">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="baidu-site-verification" content="VoUwjzsjO4" />
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="/img/LOGO.png" />
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动-活动助手</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

</head>
<body ng-controller="hotel_detailCtrl">
    <%@include file="/jsp/common/mml_nav.jsp"%>
	<div class="wd">
		<div>
			<h3>{{hotelDetail.name}}</h3>
			<div>
				<img style="width: 450px;height: 250px;margin-right: 20px" ng-src="{{hotelDetail.icon}}" src="/img/cj_banner.jpg" alt="酒店图片">
				<div class="dib fz16">
					<p style="margin-top: 50px;">场地地址：{{hotelDetail.address}}</p>
					<p class="mt20">联系人：{{hotelDetail.contacter}}</p>
					<p class="mt20">电话：{{hotelDetail.contacter_phone}}</p>
				</div>
			</div>
		</div>
		<div class="mt20">
			<p class="fz16">详细介绍：</p>
			<div ng-bind-html="hotelDetail.details | to_trusted:''"></div>
		</div>
	</div>
	<input type="hidden" value=${hotelId} id="hotelId">
    <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/view/activity_help.js"></script>
</body>
</html>