<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
  <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="activity_detail">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>报名支付</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
<style>
  body,.main,.mml_bottm {
   background:#fff
  }
  .main{
    border-top:1px solid #e0e0e0
  }
</style>
</head>
<body ng-controller="wechat_payController">
    
                
  <%@include file="/jsp/common/mml_nav.jsp"%>  
  <div class="first_step_pay">
    <div class="main pt20 yj4"> 
		<div class="w">
			<!-- order 订单信息 -->
			<div class="order">
				<div class="o-left">
					<h3 class="o-title">请您及时付款，以便订单尽快处理！ 订单号：<span id="order_number">${out_trade_no }</span></h3>
				</div>
				<div class="o-right"> 
					<div class="o-price">
						<em>应付金额</em><strong>${price }</strong><em>元</em>
					</div>
				</div>
				<div class="clr"></div>

				<div class="o-list j_orderList" id="listPayOrderInfo">
					<!-- 单笔订单 -->

					<div class="o-list-info">
						<span class="mr10" id="shdz"></span> <span class="mr10" id="shr"></span>
						<span id="mobile"></span>
					</div>
					<div class="o-list-info">
						<span id="spmc"></span>
					</div>

					<!-- 单笔订单 end -->

				</div>
			</div>
			<!-- order 订单信息 end -->
			<!-- order 订单信息 end -->

			<!-- payment 支付方式选择 -->
			<div class="payment">
				<!-- 微信支付 -->
				<div class="pay-weixin">
					<div class="p-w-hd">微信支付</div>
					<div class="p-w-bd">
						<div class="p-w-box">
							<div class="pw-box-hd wxqr" id="wxqr" ng-init="qcode('wxqr','${code_url }',294,265)"></div>
							<div class="pw-box-ft">
								<p>请使用微信扫一扫</p>
								<p>扫描二维码支付</p> 
							</div>
						</div>
						<div class="p-w-sidebar"></div>
					</div>
				</div>
				<!-- 微信支付 end -->
			</div>
			<!-- payment 支付方式选择 end -->
		</div>
	</div>
	
	
	<p style="margin-top:130px;"></p>
	
	</div>
	
	<div class="second_step">
	  <div class="wd bgff ">
	      	  <div class="form_lotuy_a">
	   
	  	 <div class="form_poiu_q_m form_poi_u act_po">
                      <img src="/img/newimg/img/find-pass-finishImg.jpg" class="fl">
                       <div class="ov pl20 pt10">
                            <span class="fz20">支付成功</span><br>
                            <p class="mt10"> 您的订单已支付成功</p>
                           <p class="mt20">
                            <c:if test="${type_p==1}">
                             <a class="btn btn-primary add_form_p next_button" ng-href="/user/to_user_center?v=2#/user_my_activities">进入管理中心</a></p>
                            </c:if>
                          
                          <c:if test="${type_p==2}">
                             <a class="btn btn-primary add_form_p next_button" ng-href="/user/to_user_center?sor=2#/hacer_mipad_rine">进入管理中心</a></p>
                            </c:if>
                       </div> 
                   </div>
                  </div>
                  <p class="qc"></p>
	  </div>

	</div>
	
	     <%@include file="/jsp/common/mml_bottom.jsp"%>
  	<script src="/js/view/activity_detail.js"></script>
</body>
</html>