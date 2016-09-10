<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
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
	.update_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
		margin-top: 12px;
	}
	.update_ul li span{
		
	}
	.check_ul li{
		width: 100%;
		list-style: none;
		display: block;
		line-height: 35px;
		padding-left: 20px;
	}
	.check_ul li span{
		width: 30%;
		display: block;
		text-align: left;
		float: left;
	}
</style>

<body style="padding:0;">
	<div class="easyui-panel" title="用户查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>用户昵称:</span>
    		<input id="input-sel-data" type="text"/>
    		<span>登录账号:</span>
    		<input id="input-sel-account" type="text"/>
    		<span>用户手机号:</span>
    		<input id="input-sel-phone" type="text"/>
    		<a href="javascript:queryUserByParam()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	    <a onclick="queryUserHot()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">热门主办方查询</a>
    	</p>  
	</div>
	
	<table id="user_list_tab"></table>
	
	<div id="update_win">
		<form id="user_update_form">
			<input type="hidden" id="user_id" name="user_id"/>
			<ul class="update_ul">
				<li><span>用户名:</span><input id="user_name" name="user_name" type="text" placeholder="请输入用户名" class="easyui-validatebox" data-options="required:true"/></li>
				<li><span>新密码:</span><input id="user_pwd" name="user_pwd" type="password" placeholder="请输入新密码"/></li>
				<li>
					<span>状&nbsp;态:</span>
					<input name="user_status" type="radio" value="1"/>启用&nbsp;&nbsp;&nbsp;&nbsp;
					<input name="user_status" type="radio" value="2"/>禁用
				</li>
				<li>
					<a id="user_update_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="user_update_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</li>
			</ul>
		</form>
	</div>
	
	<div id="check_win">
		<ul class="check_ul">
			
		</ul>
	</div>
</body>
<script type="text/javascript" src="/js/admin/user_manage/user_list.js"></script>
</html>