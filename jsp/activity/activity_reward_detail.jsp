<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html >
<html ng-app="user_center">
<head>
<meta charset="UTF-8">
   <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
   <link href="/css/base.css" rel="stylesheet">
   <link href="/css/style.css" rel="stylesheet">
  <!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动--打赏详情</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="activity_reward_detailCtrl">
   <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="wd bgff mt20">
       <div class="yj4 pr xq_poiuy_a" >
                       <div class="fl case_li_oiuuy">
                         <img  ng-src="{{reward.cover_url[0]}}">
                       </div> 
                      <div class="ov pl20">
                         <p class="dian ls fz18 dian mt10"><strong  ng-bind="reward.name"></strong></p>
                          <p class="zc  mt50">
                             <label class="f_i time_icon"></label>
                              <span ng-bind="reward.start_time_fm"></span>
                          </p>
                          
                            <p class="zc mt10">
                             <label class="f_i map_icon_list"></label>
                          <span ng-bind="reward.address"></span>
                          </p>
                         <p class="mt10">
                            <span class="mr10">打赏总额&nbsp;<b class="hs" ng-bind="rewardTotal.pay_total_amount" style="font-weight:normal;"></b>&nbsp;元</span>
                            <span>打赏人数&nbsp;<b class="hs" ng-bind="rewardTotal.tip_num" style="font-weight:normal;"></b>&nbsp;人</span>
                         </p>
                    </div>
                      <p class="qc"></p>
                   </div>
             </div>
             <div class="mt10 wd  yj4 bgff">
                  <div class="xq_poiuy_b">
                      <span class="fl fz20 zc">打赏表单信息</span>
                 </div>
                 <p class="qc"></p>
                 <div class="mt20 form_data_cen">
                      <table class="table  table-bordered table-hover">
                          <thead>
                              <tr>
                                 <td>时间</td>
                                 <td>昵称</td>
                                 <td>打赏金额</td>
                                 <td>留言</td>
                              </tr>
                           </thead>
                          <tbody>
                             <tr ng-repeat="item in rewardList">
                                 <td ng-bind="item.pay_time|date:'yyyy-MM-dd HH:mm'"></td>
                                 <td ng-bind="item.user_name"></td>
                                 <td ng-bind="item.pay_num|currency:'￥'"></td>
                                 <td ng-bind="item.pay_info"></td>
                              </tr>
                          </tbody>
                     
                     </table>
		                  <pagination conf="conf"></pagination>
		              </div>
                 </div>  
                 
             </div>
             
			
            <input type="hidden" value="${activityId}" id="activityId">
            <%@include file="/jsp/common/mml_bottom.jsp"%>
            <script src="/js/common/angular-ui-router.min.js?v=10"></script>
            <script src="/js/view/user_center.js"></script> 
</body>
</html>