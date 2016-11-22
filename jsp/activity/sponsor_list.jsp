
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="sponsor_list">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="/img/LOGO.png"/>
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>赞助列表</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="sponsorController">
  <%@include file="/jsp/common/mml_nav.jsp"%>

    <div class="act_title_list">
       <p class="wd">
            <a class="zc" href="/">首页</a> / 
             <a class="green_new" href="#" >赞助</a>
        </p>
    </div>
    
    <div class="wd act_list_top sponsor_list_top  mt30 yj4 pt20">
    
        <div class="zc fz16 category_p">
  
       
            <p class="list_oiuy list_oiuy_a">
                 <span class="zq" ng-bind="classification.title+'：'"></span>
                 <a   ng-repeat="mk in classification.maker_title" ng-bind="mk.name" class="yj4" ng-click="list_fun.industy_search(mk.id)"> </a> 
            </p>
        </div>
   
    </div>
    <p class="qc"></p>
    
   <div class="wd mt10">
   		<div class="btn-group  btn_green_active" data-toggle="buttons-radio">
                 <button type="button" class="btn active" ng-click="list_fun.newest_sort(1)">最新发布</button>
                <button type="button" class="btn" ng-click="list_fun.hotest_sort(2)">最热赞助</button>                
        </div>
         <div class="wd ov mt10 pr clearfix">
         	<div class="act_list_p_lefy fl ">
         		<ul class="clearfix act_list_p_wrap">
         		  <li class="pull-left spons_list"  ng-repeat="x in spon_list" data-href="/support/{{x.id_p}}.httl" data-open="1">
         		     <img ng-src="{{x.covers[0]}}"  width="260" height="132" style="width:260px;height:146px;"/>
         		     <h1 class="spo_list_ti" ng-bind="x.title"></h1>
         		     <p class="spon_list_m" style="padding-left: 10px;">
         		      <span>已筹金额: <span class="sponsor_mo"  ng-if="x.now_money!=null">{{x.now_money}}元</span><span class="sponsor_mo"  ng-if="x.now_money==null" ng-bind="0+'元'"></span></span>
         		      <a class="sonspor_stu" ng-bind="arrStatus[x.status]" ng-if="x.status!=7" >赞助中</a>
         		      <a class="sonspor_stu_fail" ng-bind="arrStatus[x.status]" ng-if="x.status==7" >赞助失败</a>
         		     </p>
         		     <p class="sp_jd_a"><span style="width:{{x.schedule}};"></span></p>
         		     <div class="sp_jd_case_a">
         		        <div><p>赞助进度</p><p ng-bind="x.schedule"></p></div>
         		        <div><p>目标金额</p><span class="money_a" ng-bind="x.target_amount+'元'"></span></div>
         		        <div  style="border:0"><p>剩余时间</p><p class="sp_list_end"  ng-bind='x.end_time|reduce_time:""'></p></div>
         		     </div>
         		  </li>        		
         		</ul>
         		<!--分页开始-->
         		<div class="tcdPageCode">
					
				</div>
				<!--分页结束-->
         	</div>
         	<div class="act_list_p_right fr yj4 bgff gd">
               <div class="cen pd poiut_top_q">
                   <p class="fz18 zq mt10"><strong>便捷的活动发布平台</strong></p>
                   <p class="mt10">
                     轻松举办一场活动<br>
                       <a class="btn btn-primary  want_launch"  data-href="/activity/launch_index">我要发起</a>
                   </p>
                </div>
                 <div class="cen pd poiut_top_q">
                 
                   <p class="mt20 zc fz16">
                     微信扫一扫<br>
                     分享至朋友圈 
                   </p>
                     
          <img class="qc_icon_q pr" alt="分享二维码" src="http://www.apptown.cn/qrcode.jsp?content=http://apptown.cn">
                   
                     <p class="mt10 fz16">扫一扫分享才精彩</p>
                </div>
                
                <div class="pd ov">
                  <p class="fz20 zq mt20">热门活动</p>
                    <p class="host_icon_a mt10">
                      <img src="/img/newimg/img/showTemp.jpg" class="yj4">
                    </p>
                    <ul class="tujian_poiu">
   
                 <li class="pr mt10" ng-repeat="hot in activity_hot">
                    	 <span class="yj" ng-bind="$index+1"> </span>
                    	    <p class="dian fl" ng-bind="hot.activity_title"></p>
                        </li>
                          
                               
                    </ul>
                </div> 
            
            </div>
         </div>
    </div>
    
    
    <input type="hidden" id="sponsor_title" value="${sponsor_title }">
    <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/view/sponsor_list.js"></script> 
    </body>
    </html>