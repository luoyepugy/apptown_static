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
<body ng-controller="immediately_p">
   <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="wd bgff mt20">
       <div class="yj4 pr xq_poiuy_a" >
                       <div class="fl case_li_oiuuy">
                         <img  ng-src="{{reward.images_po[0]}}">
                       </div> 
                      <div class="ov pl20">
                         <p class="dian ls fz18 dian mt10"><strong  ng-bind="reward.title"></strong></p>
                          <p class="zc  mt50">
                             <label class="f_i time_icon"></label>
                              <span ng-bind="reward.startDate"></span>
                          </p>
                          
                            <p class="zc mt10">
                             <label class="f_i map_icon_list"></label>
                          <span ng-bind="reward.address"></span>
                          </p>
                         <p class="mt10">
                            打赏总额<span class="hs"  ng-bind="reward.tip_num"></span>元
                            打赏人数<span class="ml20 hs"  ng-bind="reward.pay_total_amount"></span>人
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
                     <div><input type="checkbox" id="all_check_box" name="all_check_box" style="margin: auto;" ng-click="check_all()">选择当前页</div>    
                      <div style="height: 60px;width: 100%" align="center">
		                    <tm-pagination conf="paginationConf"></tm-pagination>
		              </div>
                 </div>  
                 
             </div>
             
			
            <input type="hidden" value="${activity.id}" id="activityId">
            <%@include file="/jsp/common/mml_bottom.jsp"%>
            <script src="/js/common/angular-ui-router.min.js?v=10"></script>
            <script src="/js/view/user_center.js"></script> 
</body>
</html>