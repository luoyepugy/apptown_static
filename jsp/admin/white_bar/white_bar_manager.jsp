<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script src="/js/admin/white_bar/white_bar_list.js"></script>
</head>
<style>
	.shenhe_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
		margin-top: 12px;
	}
	.show_ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
</style>
<body style="padding:0;">

	<div class="easyui-panel" title="白条管理"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>白条流水号:</label></span>
    		<input class="easyui-validatebox" type="text" id="id" />
    		<span> <label>电话号码:</label></span>
    		<input class="easyui-validatebox" type="text" id="phone" />
    		<select  class="easyui-combobox" style="width: 160px;" id="contact_status" panelHeight="100" >
				<option value="">全部</option>
				<option value="1">待联系</option>
				<option value="2">已联系</option>
			</select>
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApply()">查询</a>
    	</p>  
	</div>
	
	<table id="sponsor_apply_list_tab"></table>
	<!-- 审核 -->
	<div id="shenhe_win">
		<ul class="shenhe_ul">
			<li>
				<span>状态:
				<input id='id' type=hidden>
				</span>
				<input name="contact_status" type="radio" value="2"/>审核成功 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="contact_status" type="radio" value="3" checked="checked" />审核失败&nbsp;&nbsp;&nbsp;&nbsp;
				<input name="contact_status" type="radio" value="4" checked="checked" />已放款&nbsp;&nbsp;&nbsp;&nbsp;
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark"></textarea>
			</li>
			<li>
			<a id="shenhe_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="shenhe()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a id="shenhe_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="shenhe_cancel()">取消</a>
		   </li>
		</ul>
	</div>
	<div id="detail">
	 <ul class="shenhe_ul">
			<li>
				<span>用户ID:</span>
				<span id="user_id"></span>
			</li>
			<li>
				<span>用户姓名:</span>
				<span id="name"></span>
			</li>
			<li>
				<span>性别:</span>
				<span id="sex"></span>
			</li>
			<li>
				<span>手机号码:</span>
				<span id="phone_detail"></span>
			</li>
			<li>
				<span>申请金额:</span>
				<span id="apply_money"></span>
			</li>
			<li>
				<span>备注:</span>
				<span id="user_remark"></span>
			</li>
			<li>
			<a id="shenhe_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="detail_close()">关闭</a>
		   </li>
		</ul>
	</div>
</body>
</html>