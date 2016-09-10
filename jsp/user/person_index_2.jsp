<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="user_center">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>活动-个人主页</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="user_centerController">
    
  <%@include file="/jsp/common/mml_nav.jsp"%>
 <div class="act_title_list">
       <p class="wd">
            <a href="/">首页</a> / 
            <a href="/">活动列表</a> / 
             <a href="#" class="zc">活动</a>
        </p>
    </div>
    
    <div class="mt20 wd clearfix">
    	<!--左侧边栏开始-->
       <div class="person_index_left pull-left">
            <p class="person_index_atten"> +关注</p>
       		<div class="person_index_ico bdt_1">
       		   <img class="img-rounded" alt="90x90" width="90" height="90" style="width:90px;height:90px;background:red;"/>         		       		   
       		</div>
       		<p class="person_index_title bdt_1">
       		活动主办方
       		</p>
       		<p class="person_index_sum bdt_1">
       		<span class="person_index_ac text-warning">70</span>&nbsp;&nbsp;活动&nbsp;&nbsp;<span class="person_index_at text-warning">11</span>&nbsp;&nbsp;关注
       		</p>
       		<p class="person_index_dt bdt_1">
       		   详细资料
       		</p>
       		<div class="person_index_call bdt_1">
       		  <p>姓名：<span>陆水清</span></p>
       		  <p>联系方式：<span>13715114926</span></p>
       		</div>
       		<div class="person_index_mark">
       		  <p class="person_index_mark_t1">标识</p>
       		  <p>
	            <img src="/img/newimg/img/images/mark1.jpg">
	            <img src="/img/newimg/img/images/mark2.jpg">
	            <img src="/img/newimg/img/images/mark3.jpg">
	          </p>
       		</div>
       </div>
       <!--左侧边栏结束-->
       <!--右边栏开始-->
       <div class="person_index_right pull-left">
		    <div class="md bgff">
		      <div class="ov poiuyt_loiyt_a pr">      
		        <ul class="nav nav-tabs user_poiy_er">
		                    <li class="active"><a  ng-href="#activity_ing" class="zc" data-toggle="tab">进行中的活动</a></li>
		                    <li><a class="zc" ng-href="#activity_done" data-toggle="tab">已结束的活动</a></li>
		                    <li><a class="zc" ng-href="#activity_collect" data-toggle="tab">已收藏的活动</a></li>
		                    <li><a class="zc" ng-href="#activity_atten" data-toggle="tab">关注的主办方</a></li>		                   
		        </ul>
		          <p class="qc"></p>
		          
		      </div>
		     <div class="tab-content">	
		     	<!--进行中的活动开始-->
		     	<div class="tab-pane active" id="activity_ing">
			     	<table class="table user_list_act" >	
					   <thead class="poiuyt_oiuy">
			             <tr class="zc">
			                  <td class="act_left">项目信息</td>
			                  <td>报名人数</td>
			                  <td>浏览人数</td>		
			                  <td></td>            
			              </tr>
			          </thead>	     
			          <tbody>
			              <tr class="act_left">
			                  <td>
			                   <img src="/img/Voting_ default.jpg" class="fl user_polit_a">
			                  <div class="ov pl20 act_left">
			                     <p class="fz16"><strong>进行中的活动</strong></p>
			                      
			                      <p class="mt10 mt10 zc">时间：2016-04-29 17:58</p>
			                        <p class="mt10  zc">地点：活动地点</p>
			                      <p class="mt10"><span class="bqi_pooiu_q ml0">课程</span></p>
			                      
			                  </div>
			                  
			                  <p class="qc"></p>
			                  
			                  </td>
			                  <td style="vertical-align: middle;">
			                     5人
			                  </td>
			                  <td style="vertical-align: middle;">
			                    5人
			                  </td>
			                  <td style="vertical-align: middle;">
			                      <p class="binhg_iiyt">		                     
			                          <a  class="btn btn-primary">我要报名</a>
			                      </p>
			                     
			                  </td>
			                
			              </tr>
			          </tbody>
			     	</table>
			     	<div class="pagination pagination-centered pagination-large">
					<ul class="act_fr_poi">
						<li ><span ng-href="#">&laquo;</span></li>
						
						<li ><span>1</span></li>
						
						<li><span>»</span></li>
					</ul>
				    </div>
		     	</div>
		      <!--进行中的活动开结束-->
		      <!--结束的活动开始-->
		     <div id="activity_done" class="tab-pane">
		     	<table class="table user_list_act" >	
					   <thead class="poiuyt_oiuy">
			             <tr class="zc">
			                  <td class="act_left">项目信息</td>
			                  <td>报名人数</td>
			                  <td>浏览人数</td>		
			                  <td></td>            
			              </tr>
			          </thead>	     
			          <tbody>
			              <tr class="act_left">
			                  <td>
			                   <img src="/img/Voting_ default.jpg" class="fl user_polit_a">
			                  <div class="ov pl20 act_left">
			                     <p class="fz16"><strong>已结束的活动</strong></p>
			                      
			                      <p class="mt10 mt10 zc">时间：2016-04-29 17:58</p>
			                        <p class="mt10  zc">地点：活动地点</p>
			                      <p class="mt10"><span class="bqi_pooiu_q ml0">课程</span></p>
			                      
			                  </div>
			                  
			                  <p class="qc"></p>
			                  
			                  </td>
			                  <td style="vertical-align: middle;">
			                     5人
			                  </td>
			                  <td style="vertical-align: middle;">
			                    5人
			                  </td>
			                  
			                
			              </tr>
			          </tbody>
			     	</table>
			     	<div class="pagination pagination-centered pagination-large">
					<ul class="act_fr_poi">
						<li ><span ng-href="#">&laquo;</span></li>
						
						<li ><span>1</span></li>
						
						<li><span>»</span></li>
					</ul>
				    </div>
		     </div>
		     <!--结束的活动开结束-->
		     <!--已收藏的活动开始-->
		     	<div class="tab-pane" id="activity_collect">
			     	<table class="table user_list_act" >	
					   <thead class="poiuyt_oiuy">
			             <tr class="zc">
			                  <td class="act_left">项目信息</td>
			                  <td>报名人数</td>
			                  <td>浏览人数</td>		
			                  <td></td>            
			              </tr>
			          </thead>	     
			          <tbody>
			              <tr class="act_left">
			                  <td>
			                   <img src="/img/Voting_ default.jpg" class="fl user_polit_a">
			                  <div class="ov pl20 act_left">
			                     <p class="fz16"><strong>进行中的活动</strong></p>
			                      
			                      <p class="mt10 mt10 zc">时间：2016-04-29 17:58</p>
			                        <p class="mt10  zc">地点：活动地点</p>
			                      <p class="mt10"><span class="bqi_pooiu_q ml0">课程</span></p>
			                      
			                  </div>
			                  
			                  <p class="qc"></p>
			                  
			                  </td>
			                  <td style="vertical-align: middle;">
			                     5人
			                  </td>
			                  <td style="vertical-align: middle;">
			                    5人
			                  </td>
			                  <td style="vertical-align: middle;">
			                      <p class="binhg_iiyt">		                     
			                          <a  class="btn btn-primary">我要报名</a>
			                      </p>
			                     
			                  </td>
			                
			              </tr>
			          </tbody>
			     	</table>
			     	<div class="pagination pagination-centered pagination-large">
					<ul class="act_fr_poi">
						<li ><span ng-href="#">&laquo;</span></li>
						
						<li ><span>1</span></li>
						
						<li><span>»</span></li>
					</ul>
				    </div>
		     	</div>
		      <!--已收藏的活动结束-->
		      <!--关注的主办方开始-->
		     	<div class="tab-pane clearfix activity_atten" id="activity_atten" style="overflow: hidden;">
		     	  <div class="clearfix">
			      	<div class="activity_atten_body pull-left">
			      		<img class="pull-left"  width="93" height="80" src="" style="width:93px;height:80px;background: red;"/>
			      		<div class="pull-left">
			      			<p class="activity_atten_t1">活动主办方</p>
			      			<div class="activity_atten_t2">
			      				<span class="activity_atten_sum1">70</span>个活动<span class="activity_atten_sum2">11</span>个粉丝
			      			</div>
			      		</div>
			     	</div> 
			     	<div class="activity_atten_body pull-left">
			      		<img class="pull-left"  width="93" height="80" src="" style="width:93px;height:80px;background: red;"/>
			      		<div class="pull-left">
			      			<p class="activity_atten_t1">活动主办方</p>
			      			<div class="activity_atten_t2">
			      				<span class="activity_atten_sum1">70</span>个活动<span class="activity_atten_sum2">11</span>个粉丝
			      			</div>
			      		</div>
			     	</div> 
			     	<div class="activity_atten_body pull-left">
			      		<img class="pull-left"  width="93" height="80" src="" style="width:93px;height:80px;background: red;"/>
			      		<div class="pull-left">
			      			<p class="activity_atten_t1">活动主办方</p>
			      			<div class="activity_atten_t2">
			      				<span class="activity_atten_sum1">70</span>个活动<span class="activity_atten_sum2">11</span>个粉丝
			      			</div>
			      		</div>
			     	</div> 
			     </div>	
			    <div class="pagination pagination-centered pagination-large">
					<ul class="act_fr_poi">
						<li ><span ng-href="#">&laquo;</span></li>
						
						<li ><span>1</span></li>
						
						<li><span>»</span></li>
					</ul>
				</div>
		     	</div>
		      <!--关注的主办方结束-->
		     </div> 
		  </div>
       </div>
       <!--右边栏结束-->
    
    </div>
      <%@include file="/jsp/common/mml_bottom.jsp"%>
       <script src="/js/common/angular-ui-router.min.js?v=10"></script>
       <script src="/js/view/user_center.js"></script> 
</body>
</html>