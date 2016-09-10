<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html>
	<head lang="en">
		<title>e场景活动APP下载-e场景活动是全球最大中文活动平台！</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Pragma" content="no-cache" />
		<meta name="viewport" content="width=960, initial-scale=1.0" />
		<meta name="distribution" content="global" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />
		<meta name="author" content="e场景活动" />
		<meta property='og:description'  content='e场景一便捷的活动,众筹发布平台,帮助主办方免费提供活动发布｜报名管理和推广｜购票验票|众筹支付｜活动名单和数据管理CRM,动画相片微场景制作等线上工具；发布包括创客创业,艺术表演,论坛讲座,研讨会,社团活动,公益活动,展会沙龙等线下活动的内容资讯。同时参加用户能快速关注和报名活动方便建立彼此间社交关系，增加票券销售量。通过E场景您还可以轻松在微信朋友圈、聊天群里组织企业及个人的各类活动。' />
		<meta name="keywords" content="创客活动网站,聚会活动,投票系统,线上售票,活动名单,创新创业,论坛讲座,课程,户外运动,促销展会沙龙,同城社交,展会沙龙,公益活动,创客融资平台" />
		<meta name="description" content="e场景一便捷的活动,众筹发布平台,帮助主办方免费提供活动发布｜报名管理和推广｜购票验票|众筹支付｜活动名单和数据管理CRM,动画相片微场景制作等线上工具；发布包括创客创业,艺术表演,论坛讲座,研讨会,社团活动,公益活动,展会沙龙等线下活动的内容资讯。同时参加用户能快速关注和报名活动方便建立彼此间社交关系，增加票券销售量。通过E场景您还可以轻松在微信朋友圈、聊天群里组织企业及个人的各类活动" />
		<style>
			*{
            margin: 0;
            padding: 0;
        }
        body{
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 12px;
            line-height: 1.42857143;
        }
        .container{
            width: 1000px;margin: 0 auto;position: relative;
        }
        .step {
            max-width: 1920px;
            font-family: "Microsoft Yahei";
            background-position: 50% 0;text-align: center;
        }

        .text-hide{
            font: ~"0/0" a;
            color: transparent;
            text-shadow: none;
            background: url(about:blank)\9;

            border: 0;
            line-height: 0;
        }
        @media screen and (min-width:0\0) {
            .text-hide{
                background: url(about:blank);
            }
        }
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0 0 0 0);
            border: 0;
        }
        .step-content{
            display: inline-block;
            *display: inline;*zoom: 1;
        }
        .step h2{
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: normal;
            margin-top: 0;
        }
        .step h3{
            font-size: 24px;font-weight: normal;
        }
        .step1{
            background: #009ef6;;
            height: 420px;text-align: left;
        }
        .step1 .step-content{
            background-image: url(/img/downloadApp/mml_dow1.jpg);
            width: 312px;
            height: 341px;
            margin-top: 54px;
        }
        .step1 label{
       	    display: inline-block;
		    width: 88px;
  		    height: 88px;
		    background: #fff;
		    position: relative;
		    float: right;
		    top: 220px;
		    padding:5px;
        }
        .icon-lg-phone{
            background-image: url(/img/downloadApp/mml_dow1_2.jpg);
            position: absolute;
            right: 0;
            top: 56px;
            width: 421px;
            height: 474px;
        }
        .ios,.android{
            position: absolute;
            left: 1px;
            width: 170px;
            height: 50px;
            border-radius: 8px;
        }
        .ios{
            top: 274px;
        }
        .ios:hover,.ios:focus{
            background-image: url(/img/downloadApp/ios-hover.jpg);
        }
        .android{
            top: 334px;
        }
        .android:hover{
            background-image: url(/img/downloadApp/android-hover.jpg);
        }
        .step2{
            background: #ffffff;
            height: 350px;
        }
        .step2 .step-content{
            background-image: url(/img/downloadApp/mml_dow2.jpg);
            width: 956px;
            height: 193px;
            margin-top: 158px;
            margin-left: -10px;
        }
        .step3{
            color: #fff;
            background-image: url(/img/downloadApp/mml_dow3.jpg);
            height: 400px;
        }
        .step3 h2{
            padding-top: 165px;
        }
        .step4{
            background: #fff;
            color: #009ef6;
            height: 450px;
        }
        .step4 .step-content{
            background-image: url(/img/downloadApp/mml_dow4.jpg);
            width: 710px;
            height: 147px;
            margin-top: 92px;
            margin-bottom: 60px;
        }
        .step5{
            color: #fff;
            background-image: url(/img/downloadApp/mml_dow5.jpg);
            height: 450px;
        }
        .step5 h2{
            padding-top: 266px;
        }
        .step5 h3{
            text-shadow: 1px 1px 5px rgba(0,0,0,.5);
        }
        .step6{
            color: #009ef6;
            height: 450px;
            background-image: url(/img/downloadApp/mml_dow6.jpg);
        }
        .step6 h2{
            padding-top: 175px;

        }
        .step7 .step-content{
            background-image: url(/img/downloadApp/mml_dow7.png);
            width: 686px;
            height: 156px;
            margin-top: 72px;
        }
        .step7{
            color: #009ef6;
            height: 450px;
        }
        .step7 h2{
            padding-top: 45px;
        }
        .footer{
        	font-size: 18px;
            color: #aaa;
            display: block;
            margin-top: 50px;
            text-align: center;
            padding-bottom:20px;
        }
		</style>
	</head>
	<body>
		<div class="step step1">
		    <div class="container">
		        <div class="step-content"><label><img src="/img/apk_down_android.png" width="90" height="90"/></label></div>
		        <a href="https://itunes.apple.com/cn/app/e-chang-jing-huo-dong/id1110240836?mt=8&uo=4" class="ios text-hide">App Store下载</a>
		        <a href="http://resource.apptown.cn/app/app.apk" class="android text-hide">Android 下载</a>
		        <div class="icon-lg-phone"></div>
		    </div>
		</div>
		<div class="step step2">
		    <div class="container">
		        <div class="step-content"></div>
		        <ul class="sr-only">
		            <li>美食聚会</li>
		            <li>运动旅行</li>
		            <li>交友狂欢</li>
		            <li>干货分享</li>
		        </ul>
		    </div>
		</div>
		<div class="step step3">
		    <div class="container">
		        <h2>精彩实用的主题推荐</h2>
		        <h3>没有耐心的时代，复杂就是一个笑话</h3>
		    </div>
		</div>
		<div class="step step4">
		    <div class="container">
		        <div class="step-content"></div>
		        <h2>附近的、热门的、最新的</h2>
		        <h3>不随便浪费你的时间，也是一种美德</h3>
		    </div>
		</div>
		<div class="step step5">
		    <h2>筛选过滤，随心所欲</h2>
		    <h3>独自选择，才最有资格获得惊喜</h3>
		</div>
		<div class="step step6">
		    <h2>推广赚钱，邀请注册</h2>
		    <h3>0投资月入过万，根本不再话下</h3>
		</div>
		<div class="step step7">
		    <div class="step-content"></div>
		    <h2>活动票券主办方，一手掌握</h2>
		    <h3>“此时”“此地”“此事”不再无所依傍</h3>
		</div>
        <div class="footer">慢慢来 版权所有 2013-2015 apptown.cn All Rights Reserved 粤ICP备</div>
            <script src="/js/common/jquery-1.11.3.min.js"></script>
		<script src="/js/common/jquery.qrcode.min.js"></script>		
	</body>
</html>
