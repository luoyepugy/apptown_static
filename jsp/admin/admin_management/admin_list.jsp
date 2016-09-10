<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理员列表</title>
<link rel="stylesheet" type="text/css" href="/css/admin/admin_list.css">
<script type="text/javascript" src="/js/common/jquery-1.8.3.min.js"></script>
<%@include file="../common.jsp" %>
</head>
<body>
	<div class="easyui-panel" title="管理员查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>管理员名称:</span>
    		<input id="admin-name-query" type="text"/>
    		<a href="javascript:queryAdminByName()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>  
	</div>

	<table id="admin_list_tab"></table>
	
	<div id="update_window">
		<ul>
			<li>名称:<input id="update_name" type="text" class="easyui-validatebox" data-options="required:true"></li>
			<li>职位:<input id="update_position" type="text" class="easyui-validatebox" data-options="required:true"></li>
			<li>账号:<input id="update_login_name" type="text" class="easyui-validatebox" data-options="required:true"></li>
			<li>密码:<input id="update_login_pwd" type="password" class="easyui-validatebox" data-options="required:true"></li>
			<li>状态:<select id="update_type">
					<option selected="selected" value="1" >启用</option>
					<option value="2">禁用</option>
				</select>
			</li>
		</ul>
		<input id="update_id" type="hidden" value="">
		<input id="update_submit" type="button" value="提交">
		<input type="button" value="取消" onclick="javascript:$('#update_window').window('close')">
	</div>
	<div id="related_window"></div>
	<script src="/js/admin/admin_management/admin_list.js"></script>
</body>

</html>