
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html ng-app="index_date" >
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
    <link  rel="shorcut icon"   href="/img/LOGO.png" />    
    
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="http://apptown.cn/js/common/uaredirect.js"></script>
<script>
uaredirect("http://m.apptown.cn/index.html#/index");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="indexController">
  <%@include file="/jsp/common/mml_nav.jsp"%>
  <div class="slider">
    <div class="bd">
        <ul class="dage_p">
            <li class="hero" ng-repeat="bn in banner_index"  finish  >
               <a ng-href="/activity/{{bn.id}}.httl" target="_blank">
                        <img class="thumb" ng-src="{{bn.banner_url[0]}}" />
                        </a>
                </li> 
        </ul>
    </div>
    <div class="hd">
        <ul></ul>
    </div>
    <div class="pnBtn prev">
        <span class="blackBg"></span>
        <a class="arrow" ></a>
    </div>
    <div class="pnBtn next">
        <span class="blackBg"></span>
        <a class="arrow"></a>
    </div>
</div>
    <div class="wd pr ov ">
      <!-- 暂时屏蔽赞助 -->
       <!-- <div  class="index_data">
        <ul>
	        <li class="index_data_text" >赞助金额</li>
	        <li class="index_data_number"><span class="datanum"  data-param="sponsor_sum"></span></li>
        </ul>
        <ul>
	        <li class="index_data_text">会员</li>
	        <li class="index_data_number"><span class="datanum" data-param="user_sum" ></span></li>
        </ul>
        <ul>
	        <li class="index_data_text">活动数</li>
	        <li class="index_data_number"><span class="datanum" data-param="activity_sum"></span></li>
        </ul>
       </div> -->
       <!-- /暂时屏蔽赞助 -->
       <div style="margin-top: 60px;"></div>
       <p class="fz20 zq mt30 pr pl20" style="margin-top: 20px"><span class="index_bar1"></span>推荐活动</p>
        <p class="cen logo_ad"><img src="/img/img_icon.gif"></p> 
       <div class="mt10 case_poi_oi_index recommend_ac"> 
                   
            <div class="case_stat bgff"  ng-repeat="hot in activity_hot"  >
               <p class="case_img_a" data-href="/activity/{{hot.j_id}}.httl" data-open="1"><img ng-src="{{hot.activity_first_face}}"></p>
                <div class="pd">
                        <p class=" fz14 dianer mt10 case_title" ng-bind="hot.activity_title" data-href="/activity/{{hot.j_id}}.httl" data-open="1"></p>
                        <p class="fz12 zc mt10">时间：<span ng-bind="hot.activity_time"></span></p>    
                        <p class="fz12 zc ">
                       	 	<span class="fl f_d dian uytr_sr" title="{{hot.activity_address}}" ng-bind="hot.activity_address"></span>
                          <span class="fr red">{{hot.browse_count}}<i style="margin-left: 5px;font-style:normal;color:#575757;">浏览</i></span> 
                        </p>  
                        <p class="qc"></p>
                        <p class="dian zc fz12 case_bottom mt10 qc">
                            <img ng-src="{{hot.sponsorImageUrl}}" class="case_user_icon mr5">
                            <span ng-bind="hot.sponsorName"></span>                         
                        </p>
                  <!-- 暂时屏蔽赞助 -->
                       <!-- <div class="sp_jd_case_a fg_index_case_act">
         		        <div class="green_new"><p >目标金额</p><p  ng-bind="hot.target_money | number : 0"></p></div>
         		        <div class="green_new"><p>已筹金额</p><span class="money_a" ng-bind="hot.now_money | number : 0 "></span></div>
         		        <div class="green_new" style="border:0"><p>项目进度</p><p class="sp_list_end"  ng-bind="hot.schedule"></p></div> 
         		     </div>  -->
                 <!-- /暂时屏蔽赞助 -->
                         
                </div>
                
              
           </div>
           
        </div>
        
        <!-- 暂时屏蔽白条 -->
        <!-- <p class="mt5 qc"><a ng-href="/jsp/white_bar.jsp"><img src="/img/index_white_bar.png"></a></p> -->
        <!-- /暂时屏蔽白条 -->
        
         <p class="fz20 zq mt30 pr pl20" style="margin-top: 20px"><span class="index_bar1"></span>热门活动</p>
         <div class="mt10 case_poi_oi_index recommend_ac">
                   
            <div class="case_stat bgff"  ng-repeat="hot in activity_list"  >
               <p class="case_img_a" data-href="/activity/{{hot.j_id}}.httl" data-open="1"><img ng-src="{{hot.activity_first_face}}"></p>
                <div class="pd">
                        <p class=" fz14 dianer mt10 case_title" data-href="/activity/{{hot.j_id}}.httl" data-open="1" ng-bind="hot.activity_title"></p>
                        <p class="fz12 zc mt10">时间：<span ng-bind="hot.activity_time"></span></p>    
                        <p class="fz12 zc ">
                       	 	 <span class="fl f_d dian uytr_sr" title="{{hot.activity_address}}"  ng-bind="hot.activity_address"></span>
                       		 <span class="fr red">{{hot.browse_count}}<i style="margin-left: 5px;font-style:normal;color:#575757;">浏览</i></span>
                        </p>  
                        <p class="qc"></p>
                         
                        <p class="dian zc fz12 case_bottom mt10 qc">
                             <img ng-src="{{hot.sponsorImageUrl}}" class=" case_user_icon mr5">
                             <span ng-bind="hot.sponsorName"></span>
                        </p>
                    <!-- 暂时屏蔽赞助 -->
                       <!-- <div class="sp_jd_case_a fg_index_case_act">
         		        <div class="green_new"><p >目标金额</p><p  ng-bind="hot.target_money | number : 0"></p></div>
         		        <div class="green_new"><p>已筹金额</p><span class="money_a" ng-bind="hot.now_money | number : 0 "></span></div>
         		        <div class="green_new" style="border:0"><p>项目进度</p><p class="sp_list_end"  ng-bind="hot.schedule"></p></div> 
         		     </div>  -->
                 <!-- /暂时屏蔽赞助 -->
                         
                </div>
                
              
           </div>
           
        </div>
        <p class="qc bgff pt10 pm10 cen paging_list mt10"  ng-click="Hot_load()" ng-if="load_l==true">
		<a class="ls clkh_po">
			查看更多...
		</a>
	</p>
	   <p class="qc"></p>
          <p class="fz20 zq mt20 pr pl20"><span class="index_bar1"></span>活跃主办方</p>
            <div class="mt10 case_poi_oi_index dynamic_pou"  >
        
                   <div  ng-repeat="uhot in user_hot" class="user_index {{$index==0?'user_index_d':''}}" data-x="{{uhot.user_id}}" data-href="/activity/to_host_list?sponsor_id={{uhot.user_id}}">
                   
                     <p class="fl pole_opo ">
                        <img ng-src="{{uhot.user_icon}}">
                    </p>
                    
                    <div class=" fz16 poiuuyt_sff_q">
                        <p class="dian zq" ng-bind="uhot.user_name"></p>
                        <p class="dianer fdg_poiuyt fz12" style="color:#878787;"  ng-bind="uhot.user_sign"></p>
                  
                        <p>
                            <span class="fl">活动 <span class="ls">{{uhot.activity_sum}}</span> 场</span> 
                            <span class="fr">参与 <span class="ls">{{uhot.attenton_sum}}</span> 人</span>
                        </p>
                        <p class="qc"> </p>
                    </div>
                    <p class="qc"></p>
                </div> 
                
             </div>
               
    </div>
    
    <div class="bgff mt20 partner_bottom">
      <p class="fz20 zq mt20 pr wd" style="margin-bottom: 5px;"><span class="index_bar1"></span><span class="ml20">合作伙伴</span></p>
        <div class="wd ov">
             <img src="/img/cooperator_a.gif" class="cooperator_img">
              <img src="/img/cooperator_b.gif" class="cooperator_img">
               <img src="/img/cooperator_c.gif" class="cooperator_img">
                <img src="/img/cooperator_d.gif" class="cooperator_img">
       </div>
    </div> 

      <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/common/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/js/view/index.js"></script>
</body>
</html>