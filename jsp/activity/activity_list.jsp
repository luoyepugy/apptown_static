
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="activity_list">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="baidu-site-verification" content="VoUwjzsjO4" /> 
   <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动-活动列表</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

</head>
<body ng-controller="listController">
  <%@include file="/jsp/common/mml_nav.jsp"%>

    <div class="act_title_list">
       <p class="wd">
            <a class="zc" href="/">首页</a> / 
             <a href="#" class="green_new">活动</a>
        </p>
    </div>
    
    <div class="wd act_list_top mt30 yj4 pt20">
    
        <div class="zc fz16 category_p">
            <p class="list_oiuy list_oiuy_a">
                 <span class="zq" ng-bind="activity_cla[0].title+'：'"></span>
                 <a   ng-repeat="mk in activity_cla[0].maker_title" ng-bind="mk.name" class="yj4" ng-click="list_fun.sorting_query($event.target,mk.id)"> </a> 
            </p>
        </div>
        
        <div class="zc fz16 category_p">
  
      
            <p class="list_oiuy list_oiuy_b">
                  <span class="zq" ng-bind="activity_cla[1].title+'：'"></span>
                 <a   ng-repeat="mk in activity_cla[1].maker_title" ng-bind="mk.name" class="yj4" ng-click="list_fun.industry_query($event.target,mk.id)"></a> 
            </p>
        </div>
        
        
        <div class="zc fz16 category_p"> 
  
            
            <p class="list_oiuy list_oiuy_c"  >
            <span class="zq" ng-bind="activity_cla[2].title+'：'"></span>
                 <a   ng-repeat="mk in activity_cla[2].maker_title" ng-bind="mk.name" class="yj4" ng-click="list_fun.city_quer($event.target,mk.id)"> </a> 
            </p>
        </div>
    </div>
    <p class="qc"></p>
    
    <div class="wd mt10">
            <div class="btn-group btn_green_active" data-toggle="buttons-radio">
                 <button type="button" class="btn active" ng-click="list_fun.act_sort()">最新发布</button>
                <button type="button" class="btn" ng-click="list_fun.act_sort(2)">最多点击</button>
                <button type="button" class="btn" ng-click="list_fun.act_sort(3)">最多参与</button>
        </div>
        <label class="f_d ml20 fz12" >
           <!--  <input type="checkbox" ng-model="list_fun.act_check()">  -->
           <input  type="checkbox" ng-model="chk"  ng-change="list_fun.act_check(chk)"/>
            <span class="mfiuy_op">只看免费</span>
        </label>
    
        <div class="wd ov mt10 pr">
            <div class="act_list_p_lefy fl ">
               <p class="cen logo_ad"><img src="/img/img_icon.gif"></p>
               <p class="zhng_poi_a">找不到活动</p>
               <ul class="act_poiuy_case">
                  <li class="yj4 pr" ng-repeat="list in act_list" >
                       <div class="fl case_li_oiuuy">
                         <img style="cursor:pointer;" ng-src="{{list.activity_first_face}}" data-href="/activity/{{list.id}}.httl">
                       </div> 
                      <div class="ov pl20">
                         <p class="dian ls fz18 dian" style="width:83%;cursor:pointer;" data-href="/activity/{{list.id}}.httl"><strong ng-bind="list.activity_title"></strong></p>
                          <p class="zc  mt30">
                             <label class="f_i time_icon"></label>
                              <span ng-bind="list.activity_time"></span>
                          </p>
                          
                            <p class="zc mt10">
                             <label class="f_i map_icon_list"></label>
                          <span ng-if="list.type==10" ng-bind="list.activity_address"></span>
                          <span ng-if="list.type!=10" ng-bind="list.city_name+list.activity_address"></span>
                          </p>
                          
                          
                          
                          <p class="zc  Organizer_po mt10">
                               <img ng-src="{{list.sponsorImageUrl}}">
                        
                                 <span class="green_new" ng-bind="list.sponsorName"></span>主办
                                  <span class="yj4 bqi_pooiu_w green_bg1_f" ng-if="list.is_free==0">免费</span>
                                    <span class="yj4 bqi_pooiu_w" ng-if="list.is_free!=0" ng-bind="list.activity_money+'元起'"></span>
                          </p>
                         <p class="mt20">
                             <span class="hs" ng-bind="list.browseCount"></span>浏览
                             <span class="ml20 hs" ng-bind="list.activity_number">47</span>报名
                          </p>
                          
                       <a class="btn btn-primary act_sub_poiu act_sub_poiu_o" data-href="/support/12282{{list.support_id}}12282.httl" ng-if="list.support_id!=null">我要赞助</a>
                       <a style="background:#a9a9a9" class="btn btn-primary act_sub_poiu act_sub_poiu_o disable_href"    ng-if="list.support_id==null">我要赞助</a>
                      <a class="btn btn-primary act_sub_poiu" ng-href="/activity/{{list.id}}.httl">我要报名</a>
                      </div>
                      <p class="qc"></p>
                   </li>
                     
                  
                </ul>


				<div class="pagination pagination-centered pagination-large" ng-if="act_results>1">
					<ul class="act_fr_poi">
						<li  ng-click="list_fun.previous_page()"><span ng-href="#">&laquo;</span></li>
						
						<li    ng-repeat="if_p in page_row" ng-click="list_fun.act_assign(if_p)"><span ng-bind="if_p"></span></li>
						
						<li ng-click="list_fun.next_page()"><span>»</span></li>
					</ul>
				</div>




			</div>
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
        <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/view/activity_list.js"></script>
</body>
</html>