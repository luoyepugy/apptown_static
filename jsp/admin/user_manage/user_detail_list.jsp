<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/admin/user_management/user_detail_list.js"></script>
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

	<div class="easyui-panel" title="用户身份列表"    
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
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectUserDetail()">查询</a>
    	</p>  
	</div>
	
	<table id="userdetail_list_tab"></table>
    
    <div id="shenhe_win">
		<ul class="shenhe_ul">
			<li>
				<span>状态:<input id='user_detail_id' type=hidden>
				          </span>
				<input name="status" type="radio" value="N" checked="checked"/>拒绝 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="Y" />通过
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark"></textarea>
			</li>
			<li>
					<a id="add_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="shenhe_one()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="add_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="shenhe_one_cancel()">取消</a>
			</li>
		</ul>
	</div>
	
</body>
</html>