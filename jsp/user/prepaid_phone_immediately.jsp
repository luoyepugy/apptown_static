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
<title>e场景活动--报名详情</title>
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
                         <img  ng-src="{{act_xq.images_po[0]}}">
                       </div> 
                      <div class="ov pl20">
                         <p class="dian ls fz18 dian mt10"><strong  ng-bind="act_xq.title"></strong></p>
                          <p class="zc  mt50">
                             <label class="f_i time_icon"></label>
                              <span ng-bind="act_xq.startDate"></span>
                          </p>
                          
                            <p class="zc mt10">
                             <label class="f_i map_icon_list"></label>
                          <span ng-bind="act_xq.address"></span>
                          </p>
                         <p class="mt10">
                            <span class="ls"  ng-bind="act_xq.browse_count"></span>浏览
                             <span class="ml20 hs"  ng-bind="act_xq.consumption_count" id="consumption_count"></span>报名
                             <span class="ml20 hs"  ng-bind="act_xq.sign_count"></span>已签到
                             <span class="ml20 hs"  ng-bind="act_xq.unsign_count"></span>未签到
                         </p>
                    </div>
                      <p class="qc"></p>
                   </div>
             </div>
             <div class="mt10 wd  yj4 bgff">
                  <div class="xq_poiuy_b">
                      <span class="fl fz20 zc">报名表单信息</span>
                      <div  class="report_detail" >
                          <input class="report_orderId" type="text" placeholder="姓名或者手机号码" id="param_text">
                          <input  class="report_check"  type="checkbox"  id="param_check"><label class="report_sign">已签到</label>
                          <button type="button" ng-click="queryData()" class="btn btn-default report_query ">查询</button>
                          <a class="report_import" ng-href="/dataImport/exportExcelData?activityId=${activity.id}">导出Excel名单</a>
                          <a class="report_import" ng-href="/dataImport/exportData?activityId=${activity.id}" class="ml20">下载Excel模板</a>
                          <button type="button" class="btn btn-default report_query" style="margin-left:50px;" ng-click="importData(${activity.id})" class="ml20">导入报名名单</button> 
                          <button type="button" class="btn btn-default report_query" style="margin-left:20px;" ng-click="sendMassSms()" >批量短信提醒</button>
                      </div>
                 </div>
                 <p class="qc"></p>
                 <div class="mt20 form_data_cen">
                      <table class="table  table-bordered table-hover">
                          <thead>
                              <tr>
                                 <td>选择</td>
                                 <td>报名时间</td>
                                 <td>姓名</td>
                                 <td>订单号</td>
                                 <td>类型</td>
                                 <td>票价</td>
                                 <td>票号</td>
                                 <td>状态</td> 
                                 <td>手机号码</td>
                                 <td style="width: 10%">操作</td>
                              </tr>
                           </thead>
                          <tbody>
                             <tr ng-repeat="ms in mess_cy">
                                 <td><input type="checkbox"  name="ms_check" id={{ms.consumptionId}}></td>
                                 <td ng-bind="ms.timestamp|date:'yyyy-MM-dd HH:mm'"></td>
                                 <td ng-repeat="_param in ms.from_array | filter:'姓名' ">
                                     {{_param.val}}
                                 </td>
                                 <td ng-bind="ms.order_num"></td>
                                 <td ng-bind="ms.ticket_name"></td>
                                 <td ng-bind="ms.price|currency:'￥'"></td>
                                 <td ng-bind="ms.entry_code"></td>
                                 <td ng-if="ms.sign_status=='已签到'">
                                    <p style="color: red">{{ms.sign_status}}</p>
                                 </td>
                                 <td ng-if="ms.sign_status=='未签到'">
                                    <p>{{ms.sign_status}}</p>
                                 </td>
                                 <td ng-bind="ms.phone"></td>
                                 <td>
                                 <a ng-click="show(ms)">查看</a>
                                 <a ng-click="sms(ms)">短信</a>
                                 <label ng-show="ms.is_remind==0" style="background:url('/img/mark.png');
	                                 float: right;margin: 0 0 0px 0px;width: 16px;height: 16px;">
	                             </label>
                                 </td>
                              </tr>
                          </tbody>
                     
                     </table>
                     <div><input type="checkbox" id="all_check_box" name="all_check_box" style="margin: auto;" ng-click="check_all()">选择当前页</div>    
                      <div style="height: 60px;width: 100%" align="center">
		                    <tm-pagination conf="paginationConf"></tm-pagination>
		              </div>
                 </div>  
                 
             </div>
             
             <div id="show_win" class="modal hide fade in" style="display: none; ">
				<div class="modal-header">
				<a class="close" data-dismiss="modal">×</a>
				<h4>报名详情</h4>
				</div>
				<div class="modal-body">
					<span>订单号:{{showData.order_num}}</span><span style="padding-left: 60px">报名时间: {{showData.timestamp|date:'yyyy-MM-dd HH:mm'}}</span>
				<br>
				<hr class="hr_show">
					<span>类型:{{showData.ticket_name}}</span><span style="padding-left: 60px"> 价格: {{showData.price|currency:'￥'}}</span>
				<br>
				<hr class="hr_show">
					<span>票号:{{showData.entry_code}}</span><span style="padding-left: 60px;color: red;">{{showData.sign_status}}</span>
				<br>
				<hr class="hr_show">
				 <label for="" ng-repeat="info in showData.from_array">{{info.key}} : {{info.val}}</label>
				</div>
			</div>
			
			<!-- 短信提醒 -->
			<div id="sms_win" class="modal hide fade in" style="display: none; ">
				<div class="modal-header" style="text-align: center;">
				<a class="close" data-dismiss="modal">×</a>
				<h4>短信提醒</h4>
				<p style="color: red;text-align: left;">短信预览</p>
				</div>
				<div class="modal-body">
					<p style="background: #E8E8E8;white-space:pre-wrap;">亲，您已获得"${activity.name}"门票，将<fmt:formatDate value="${activity.start_time}" pattern="yyyy-MM-dd HH:mm"/>开始签到（票号：{{showData.entry_code}}）。地址：${activity.address}。点击获取门票链接：http://m.apptown.cn/activity/ticketSkip?orderId={{showData.order_num}} 。${activity.sponsor}期待您的参与！【E场景活动】</p>
				<br>
				<hr class="hr_show" style="text-align: center;">
				   <div ng-if="showData.is_remind!=0">
				      <a style="margin-left: 240px;" ng-click="sendsms(showData.consumptionId)">发送</a>
				   </div>
				   <div ng-if="showData.is_remind==0">
				       <a style="margin-left: 240px;color: gray;">已发送</a>
				   </div>
				</div>
			</div>
			
			
			<!-- 批量发送短信提醒 -->
			<div id="mass_send_win" class="modal hide fade in" style="display: none; ">
				<div class="modal-header" style="text-align: center;">
				<a class="close" data-dismiss="modal">×</a>
				<h4>批量短信提醒</h4>
				<p style="color: red;text-align: left;">报名用户</p>
				</div>
				<div class="modal-body">
					<table class="table  table-bordered table-hover">
                          <thead>
                              <tr>
                                 <td>昵称</td>
                                 <td>手机号码</td>
                                 <td>状态</td> 
                              </tr>
                           </thead>
                          <tbody>
                             <tr ng-repeat="ms in mass_sms">
                                 <td ng-bind="ms.nick_name"></td>
                                 <td ng-bind="ms.phone"></td>
                                 <td ng-bind="ms.sign_status"></td>
                             </tr>
                          </tbody>
                          
                     </table>
				<hr class="hr_show">
				   <a style="margin-left: 240px;" ng-click="send_mass_sms(mass_sms)">批量发送</a>
				</div>
			</div>
             
           <!-- 导入报名数据 -->
           <div id="import_win" class="modal hide fade in" style="display: none; ">
				<div class="modal-header" style="text-align: center;">
				<a class="close" data-dismiss="modal">×</a>
				<h4>导入报名数据(<font color="red">每次导入行数限制在500行内</font>)</h4>
				<hr>
				<p style="text-align:center;">活动名称:${activity.name}</p>
				</div>
				 <div class="modal-body">
				    <div ng-if="ticket.length!=0">
				        <div ng-repeat="data in ticket">
				            <div style="margin-top: 10px">
					      <span>票种名称:{{data.name}}</span>
					      <input style="display: none;" id="excelFile{{data.id}}" name="excelFile{{data.id}}"  type="file"/>
								<div class="input-append">
								   <input id="excel_data_{{data.id}}" class="input-large" style="margin-left: 20px;" type="text">
								   <a class="btn" ng-click="queryFile(data)">浏览</a>
								   <a style="margin-left:30px" class="btn" ng-click="submitTicket(data)">提交</a>
							    </div>
						    </div>
					    </div>
				    </div>
				    <div ng-if="ticket.length==0">
				        <div>
					        <input style="display: none;" id="excelFile" name="excelFile" type="file" />
							<div class="input-append">
							   <input id="excel_data" class="input-large" type="text">
							   <a class="btn" ng-click="queryTicketFile(data)">浏览</a>
							   <a style="margin-left:30px" class="btn" ng-click="submitNoTicket()">提交</a>
						    </div>
					    </div>       
				    </div>
				</div> 
			</div>
			
			<div id="import_result" class="modal hide fade in" style="display: none; ">
				<div class="modal-header" style="text-align: center;">
				<a class="close" data-dismiss="modal">×</a>
				<h4>Excel名单导入结果</h4>
				</div>
				<div class="modal-body">
					<span style="background:#E8E8E8;">
					 <font style="color: green">导入成功</font>:<span id="success_size" style="color: red;margin-left: 20px;"></span>
					</span>
					<div id="success_div"></div>
					<br>
					<span style="background: #E8E8E8;">
					 导入重复:<span id="repeat_size" style="color: red;margin-left: 20px;"></span>
					 </span>
					<span id="import_repeat_msg"></span>
					<div id="repeat_div"></div>
					<br>
					<span style="background: #E8E8E8;">
					 导入失败:<span id="fail_size" style="color: red;margin-left: 20px;"></span>
					</span>
				    <span id="import_fail_msg"></span>
					<div id="fail_div"></div>
				<br>
				</div>
			</div>
			
			
            <input type="hidden" value="${activity.id}" id="activityId">
            <%@include file="/jsp/common/mml_bottom.jsp"%>
            <script src="/js/common/angular-ui-router.min.js?v=10"></script>
            <script src="/js/view/user_center.js"></script> 
</body>
</html>