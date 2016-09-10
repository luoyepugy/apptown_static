<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>用户E币管理</title>
<%@include file="../common.jsp" %>
<script src="/js/admin/eb_manage/user_coin_list.js"></script>
</head>
<style>
	.change_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
		margin-top: 12px;
	}
</style>
<body style="padding:0;">
	<div class="easyui-panel" title="用户e币查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>账号ID:</label></span>
    		<input class="easyui-validatebox" type="text" id="user_id" />
    		<a id="searchById" onclick="searchByUserId()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	    <span id="coinSum">平台e币总量: ${amount}</span>
    	</p>  
	</div>
	<table id="user_ecoin_list_tab"></table>
	<div id="change_coin">
		<ul class="change_ul">
			<li>
				<span>用户ID:
				  <span id="userId"></span>
				</span>
			</li>
			<li>
			   <span>用户昵称:
			      <span id="userName"></span>
			   </span>
			</li>
			<li>
			    <span>充值金额:
				<input type="text" value="" id="money" placeholder="请输入1--1000之间的正整数"></input>
				
				</span> 
			</li>
			<li>
			<a id="change_ecoin" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="submit_change_coin()">提交</a>
		   </li>
		</ul>
	</div>
	
</body>
</html>