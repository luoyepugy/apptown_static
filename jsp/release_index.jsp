<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>发起-首页</title>
    <link href="/css/common/bootstrap.css" rel="stylesheet">
    <link href="/css/common/mml_base.css" rel="stylesheet">
    <link rel="SHORTCUT ICON" href="/img/downloadApp/icon.png"/>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/common/bootstrap.min.js"></script>
  </head>
  <body>
	<%@include file="/jsp/common/mml_nav.jsp"%>
    <section class="faqi-box">
      <div class="faqi-con">
        <dl class="fl-l border-right1">
          <dt><img src="/img/newimg/img/faqi-icon1.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">项目 路演 分享 交流</h2></dd>
          <dd><h4 style="color:#fff;">轻松举办一场活动</h4></dd>
          <dd><a href="javascript:void(0)" data-url="/huodong/activityRedactSkip?type=1" data-ty="1" class="btn btn-default btn-lg bdr-20 issue-activity">发起活动</a></dd>
        </dl>
        <dl class="fl-l border-right1">
          <dt><img src="/img/newimg/img/faqi-icon2.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">研究 测试 征集 选秀</h2></dd>
          <dd><h4 style="color:#fff;">谁才能力压全雄</h4></dd>
          <dd><a href="javascript:void(0)" data-url="/huodong/activityRedactSkip?type=3" data-ty="2" class="btn btn-default btn-lg bdr-20 issue-activity">发起投票</a></dd>
        </dl>
        <dl class="fl-l border-right1">
          <dt><img src="/img/newimg/img/faqi-icon3.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">咨询 感悟 故事 评论</h2></dd>
          <dd><h4 style="color:#fff;">优秀文章不缺读者</h4></dd>
          <dd><a href="javascript:void(0)" data-url="/huodong/activityRedactSkip?type=8" data-ty="3" class="btn btn-default btn-lg bdr-20 issue-activity">发起文章</a></dd>
        </dl>
        <dl class="fl-l">
          <dt><img src="/img/newimg/img/faqi-icon4.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">项目 融资 产品 公益</h2></dd>
          <dd><h4 style="color:#fff;">赞助别人帮助自己</h4></dd>
          <dd><a href="javascript:void(0)" data-url="/support/updateSkip" data-ty="4" class="btn btn-default btn-lg bdr-20 issue-activity">申请赞助</a></dd>
        </dl>
        
        
      </div>
    </section>
	<%@include file="/jsp/common/mml_bottom.jsp"%>
	<script src="/js/common/base.js"></script>
    <script src="/js/common/mode.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
    	$('.mml-nav-top').removeClass('active').eq("4").addClass('active');
    	$('.fq-plus span').css("color","#009ef6");
    })
    //发起活动触发
   	$(".issue-activity").map(function(){
   		$(this).click(function(){
   			 window.location.href = '/huodong/release#'+$(this).attr("data-ty");
    		 if(verifyUserLogin() == 'true'){//用户登入验证
    			 var url = $(this).attr("data-url");
    		 	 if(url.length == 0){
    		 		 alert("开发中");
    		 	 }else{
    		 		window.location.href = url;
    		 	 }
    		 }else{
    			 $('#login').modal('show');
    		 } 
   		})
   	})
    </script>
  </body>
</html>