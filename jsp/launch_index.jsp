<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="activity_detail">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>发起</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="launch_indexController">
    
    <%@include file="/jsp/common/mml_nav.jsp"%>
      <section class="faqi-box">
      <div class="faqi-con">
        <dl class="fl border-right1">
          <dt><img src="/img/newimg/img/faqi-icon1.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">项目 路演 分享 交流</h2></dd>
          <dd><h4 style="color:#fff;">轻松举办一场活动</h4></dd>
          <dd><a  class="btn btn-default btn-lg bdr-20 issue-activity" ng-click="act_index.promotional_activities(1)">发起活动</a></dd>
        </dl>
        <dl class="fl border-right1">
          <dt><img src="/img/newimg/img/faqi-icon2.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">研究 测试 征集 选秀</h2></dd>
          <dd><h4 style="color:#fff;">谁才能力压全雄</h4></dd>
          <dd><a  data-ty="2" class="btn btn-default btn-lg bdr-20 issue-activity" >发起投票</a></dd>
        </dl>
        <!--<dl class="fl border-right1"> 
          <dt><img src="/img/newimg/img/faqi-icon3.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">咨询 感悟 故事 评论</h2></dd>
          <dd><h4 style="color:#fff;">优秀文章不缺读者</h4></dd>
          <dd><a href="javascript:void(0)" data-url="/huodong/activityRedactSkip?type=8" data-ty="3" class="btn btn-default btn-lg bdr-20 issue-activity">发起文章</a></dd>
        </dl>-->
        <dl class="fl">
          <dt><img src="/img/newimg/img/faqi-icon4.png" width="108" height="108"></dt>
          <dd><h2 class="faqi-type" style="color:#fff;">项目 融资 产品 公益</h2></dd>
          <dd><h4 style="color:#fff;">赞助别人帮助自己</h4></dd>
          <dd><a   data-ty="4" class="btn btn-default btn-lg bdr-20 issue-activity" ng-click="act_index.promotional_activities(2)">申请赞助</a></dd>
        </dl>
      </div>
    </section>
    
   
    <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script  src="/js/view/activity_detail.js"></script>

</body>
</html>