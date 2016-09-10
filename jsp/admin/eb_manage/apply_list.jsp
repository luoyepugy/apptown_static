<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>E币管理</title>
<%@include file="../common.jsp" %>
<script src="/js/admin/eb_manage/apply_list.js"></script>
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
	<div class="easyui-panel" title="提现查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>账号ID:</label></span>
    		<input class="easyui-validatebox" type="text" id="user_id" />
    		<select  class="easyui-combobox" style="width: 160px;" id="status" panelHeight="100" >
				<option value="">全部</option>
				<option value="3">待审核</option>
				<option value="1">通过</option>
				<option value="2">拒绝</option>
			</select>
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectDrawcashApply()">查询</a>
    	</p>  
	</div>
	<table id="draw_cash_apply_list_tab"></table>
	
	<div id="show_win">
		<ul class="show_ul">
			<li><span>账号ID:</span ><span id="_user_id"></span></li>
			<li><span>e币总数:</span><span id="all_e_"></span></li>
			<li><span>提现金额:</span><span id="amount"></span></li>
			<li><span>消耗e币:</span><span id="amount_"></span></li>
			<li><span>剩余e币:</span><span id="all_e"></span></li>
			
			<li><span>姓名:</span><span id="real_name"></span></li>
			<li><span>身份证:</span><span id="identity_id"></span></li>
			<li><span>手机号:</span><span id="contact_info"></span></li>
			
			<li><span>开户名:</span><span id="holder"></span></li>
			<li><span>银行卡号:</span><span id="bank_account"></span></li>
			<li><span>开户银行:</span><span id="bank_name"></span></li>
			<li><span>备注:</span> <span id="remark"></span></li>
			<li><span>提现状态:</span><span id="status_tmp"></span></li>
		</ul>
	 </div>
	
	<div id="shenhe_win">
		<ul class="shenhe_ul">
			<li>
				<span>状态:
				<input id='apply_id' type=hidden>
				<input id='trade_id' type=hidden>
				<input id='all_e_tmp' type=hidden>
				<input id='amount_tmp' type=hidden>
				<input id='user_id_tmp'  type=hidden>
				</span>
				<input name="status" type="radio" value="N" checked="checked"/>拒绝 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="Y" />通过
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark_tmp"></textarea>
			</li>
			<li>
			<a id="approval" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="submit_approval()">提交</a>
		   </li>
		</ul>
	</div>
</body>
</html>