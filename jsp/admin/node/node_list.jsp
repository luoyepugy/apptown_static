<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>权限节点列表</title>
<style type="text/css">
	#update_window li{
		list-style: none;
		line-height: 40px;
	}
	#update_window{
		text-align: center;
	}
</style>
<script type="text/javascript" src="/js/common/jquery-1.8.3.min.js"></script>
<%@include file="../common.jsp" %>
</head>
<body>
	<div class="easyui-panel" title="管理员查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>节点名称:</span>
    		<input id="node-name-query" type="text"/>
    		<a href="javascript:queryNodeByName()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>  
	</div>

	<table id="node_list_tab"></table>
	
	<div id="update_window">
		<ul>
			<li>名称:<input id="update_name" type="text" class="easyui-validatebox" data-options="required:true"></li>
			<li>功能链接:<input id="update_function_url" type="text"></li>
			<li>等级:<select id="update_grade" style="width: 100px;">
					<option value="1">一级</option>
					<option value="2">二级</option>
				</select></li>
			<li>父级:<select id="update_father_grade_id" style="width: 100px;">
				</select></li>
			<li>状态:<select id="update_status" style="width: 100px;">
					<option value="0">开发完成</option>
					<option value="1">开发中</option>
				</select>
			</li>
		</ul>
		<input id="update_id" type="hidden" value="">
		<input id="update_submit" type="button" value="提交">
		<input type="button" value="取消" onclick="javascript:$('#update_window').window('close')">
	</div>
	<script src="/js/admin/node/node_list.js"></script>
</body>

</html>