
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html ng-app="searchHostMain" >
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="UTF-8">
<title>e场景--首页</title>
<meta name="baidu-site-verification" content="VoUwjzsjO4" />
<meta name="renderer" content="webkit" />
<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet"> 
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />    
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1472551681_3187165.css">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="http://apptown.cn/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn/index.html#/index");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="searchHost">
  <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="wd ov">
        <p class="zc fz16 pt30 pb30">
        	e场景为您找到<span class="green" ng-bind="pResult"></span>个
        </p>
        <div class="search_host_wrap pt20">
        	<div class="search_host_left fl" ng-if="pResult>0">
        		<ul>
        			<li class="search_host_list bgff mb10" ng-repeat="x in person" data-x="{{x.user_id}}" data-href="/activity/to_host_list?sponsor_id={{x.user_id}}">
        				<img ng-src="{{x.sponsor_icon}}" class="fl search_host_icon" src="" width="127" height="127">
        				<div class="search_host_content fl pl10">
        					<p class="pt10 pb20 green dian fz18" ng-bind="x.name">
        						
        					</p>
        					<p class="dianer fz16" style="line-height:24px;" ng-bind="x.introduction">
        					
        					</p>
        					<div class="pt20 fz14">        						
        					  已发布<span class="green" ng-bind="x.act_sum"></span>个活动，已有<span class="green" ng-bind="x.sign_sum"></span>人参与
        					</div>
        					
        				</div>
        				<div class="qc">
        				</div>
        			</li>
        		</ul>
        		<div class="pagination pagination-centered pagination-large" ng-if="pResult>9">
					<ul class="act_fr_poi">
						<li  ng-click="searchList.previous_page()"><span ng-href="#">&laquo;</span></li>
						
						<li    ng-repeat="if_p in page_row" ng-click="searchList.act_assign(if_p)"><span ng-bind="if_p"></span></li>
						
						<li ng-click="searchList.next_page()"><span>»</span></li>
					</ul>
				</div>
        	</div>
        	<div class="search_host_left fl" ng-if="pResult==0">
        	     <p class="zhng_poi_a" style="display: block;">找不到主办方</p>
        	</div>
        	<div class="search_host_right fr">
		        		<div class="act_list_p_right fr yj4 bgff gd">
               <div class="cen pd poiut_top_q">
                   <p class="fz18 zq mt10"><strong>便捷的活动发布平台</strong></p>
                   <p class="mt10">
                     轻松举办一场活动<br>
                       <a class="btn btn-primary  want_launch" ng-href="/activity/to_sponsor_activity">我要发起</a>
                   </p>
                </div>
                 <div class="cen pd poiut_top_q">
                 
                   <p class="mt20 zc fz16">
                     微信扫一扫<br>
                     分享至朋友圈 
                   </p>
                     
                    <img class="qc_icon_q pr" alt="分享二维码" src="http://www.2d-code.cn/2dcode/api.php?key=c_e170d93zzNkfW4eEg0KMr0oYZvO8ZIkR47oRRwUkt4&amp;text=http://apptown.cn&amp;logo=http://resource.apptown.cn/share/share_activity.png">
                     <p class="mt10 fz16">扫一扫分享才精彩</p>
                </div>
                
               <div class="pd ov">
                  <p class="fz20 zq mt20">热门活动</p>
                    <p class="host_icon_a mt10" data-href="/activity/{{activity_hot[0].j_id}}.httl">
                      <img ng-src="{{activity_hot[0].activity_first_face}}" class="yj4">
                    </p>
                    <ul class="tujian_poiu">
   
                     <li class="pr mt10" ng-repeat="hot in activity_hot" data-href="/activity/{{hot.j_id}}.httl">
                    	 <span class="yj" ng-bind="$index+1"> </span>
                    	    <p class="dian fl" ng-bind="hot.activity_title"></p>
                        </li>
                               
                    </ul>
                </div> 
            
            </div>
        	</div>
        </div>     
    </div>
    
    
      <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/common/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/js/view/index.js"></script>
    <script src="/js/view/search_host.js"></script>
</body>
</html>