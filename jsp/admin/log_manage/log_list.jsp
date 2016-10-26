<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/admin/log_manage/log_list.js"></script>
</head>
<body style="padding:0;">
	<div class="easyui-panel" title="日志系统"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    	    <label>时间范围:</label><input type="text" id="start_time">--<input type="text" id="end_time">
    	    <label>用户名:</label><input type="text" id="user_name">
    	    <label>IP:</label><input type="text" id="ip">
    	    <label>模块:</label><input class="easyui-combobox" id="module" name="module" style="width:150px" data-options="valueField:'id', textField:'name', panelHeight:'auto'" >  
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="query()">查询</a>
    	</p>  
	</div>
	
	<table id="log_list_tab"></table>
	
	
</body>
</html>