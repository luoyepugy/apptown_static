<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script type="text/javascript" src="/js/admin/activity_support/support_list.js"></script>
</head>
<style>
	*{
	  padding:0;
	  margin:0;
	}
	.show_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
		margin-top: 12px;
	}
</style>


<body style="padding:0;">
	<div class="easyui-panel" title="赞助查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>赞助ID:</span>
    		<input id="support_id" type="text"/>
    		<span>赞助名称:</span>
    		<input id="input-sel-data" type="text"/>
    		<span>状态:</span>
    		<select id="select-zc-status">
    		  <option value="-1">所有</option>
    		  <option value="0">保存</option>
    		  <option value="1">审核通过</option>
    		  <option value="2">审核驳回</option>
    		  <option value="3">待审核</option>
    		  <option value="4">预热中</option>
    		  <option value="5">赞助中</option>
    		  <option value="6">赞助成功</option>
    		  <option value="7">赞助失败</option>
    		</select>
    		<a href="javascript:querySupportByParam()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>  
	</div>

	<table id="support_list_tab"></table>
	
	<div id="apply_activity_support">
		<ul class="show_ul">
			<li>
				<span>活动赞助名称:</span>
				<span id="activity_support_name"></span>
				<span id="activity_support_id" style="display: none;"></span>
				<input name="status" type="radio" value="N" checked="checked"/>拒绝 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="Y" />通过
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark"></textarea>
			</li>
			<li>
				<a id="approval" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="submit_approval()">提交</a>
			</li>
		</ul>
	</div>
	
</body>
</html>