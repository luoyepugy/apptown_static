
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
<style>
	.hotelList {

	}
	.hotelList .left {
		width: 270px;
		height: 170px;
	}
	.hotelList .right {
		width: 450px;
		height: 170px;
		margin-left: 20px;
	}
</style>
</head>
<body ng-controller="hotel_listCtrl">
    <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="tc searchHotel">
		<button class="btn btn-default">服务项</button>
		<select ng-model="selectOption" class="mt10">
			<option value="1">场地服务</option>
			<option value="2">活动设计图片、标题、描述</option>
			<option value="3">策划过程</option>
		</select>
		<button class="btn btn-default" ng-click="searchService(selectOption)">查询</button>
	</div>
	<div class="wd">	
		<div class="bgff" style="padding-top:20px;min-height: 600px;">
			<div class="j-hotelList">
				<ul class="hotelList dib">
					<!-- <li class="mb15">
						<div class="left dib"><img src="/img/cj_banner.jpg" alt="酒店图片"></div>
						<div class="right dib">
							<p class="mt25 mb10">名称</p>
							<p class="mt10 mb10">星级</p>
							<p class="mt10 mb10">地址</p>
							<p class="mt10 mb10"><a target="_blank" ng-href="/activity/hotel_detail?hotelId=1">详细介绍&gt;&gt;&gt;</a></p>
						</div>
					</li> -->
					<li class="mb15" ng-repeat="item in hotelList">
						<div class="left dib"><img src="/img/cj_banner.jpg" ng-src="{{item.icon}}" alt="酒店图片"></div>
						<div class="right dib">
							<p class="mt25 mb10">{{item.name}}</p>
							<p class="mt10 mb10">{{item.star}}</p>
							<p class="mt10 mb10">{{item.address}}</p>
							<p class="mt10 mb10"><a target="_blank" ng-href="/activity/hotel_detail/?hotelId={{item.id}}">详细介绍&gt;&gt;&gt;</a></p>
						</div>
					</li>
				</ul>
				<div class="dib"><img style="width: 270px;height: 170px;" src="/img/cj_banner.jpg" alt="酒店图片"></div>
				<div class="tcdPageCode"></div>
			</div>
			<div class="j-card" style="display: none;"><img src="/img/cj_banner.jpg" alt="酒店图片"></div>
		</div>
	</div>
	
    <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/view/activity_help.js"></script>
</body>
</html>