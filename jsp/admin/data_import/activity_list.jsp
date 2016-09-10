<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
</head>
<style>
	*{
	  padding:0;
	  margin:0;
	}
	.show_ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
	
	
</style>

<body style="padding:0;">
    <div class="easyui-panel" title="活动查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>活动名称:</span>
    		<input id="input-sel-data" type="text"/>
    		<a href="javascript:queryActivityByName()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>  
	</div>
	<table id="activity_list_tab"></table>
	
	<div id="upload_win">
		<ul class="show_ul">
			<li style="text-align: center;"><span>活动名称:</span>
			<span id="activity_name"></span>
			<span id="activity_id" style="display: none;"></span>
			</li>
			<li style="text-align: center;">
			  <button id="data_model_down">数据模板下载</button>
			</li>
		</ul>
		
	</div>
</body>
<script type="text/javascript" src="/js/admin/data_import/activity_list.js"></script>
<script type="text/javascript" src="/js/common/ajaxfileupload.js" ></script>
</html>