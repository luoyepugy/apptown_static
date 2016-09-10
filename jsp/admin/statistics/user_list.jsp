<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/admin/statistics/user_list.js"></script>
</head>
<style>
.content_wrap {
	width:680px;
	margin: 10px auto 0;
	}
.content_wrap .content_header {
	height:40px;
	background:#f7f7f9;
	line-height:40px;
	text-indent:22px;
	border-bottom:1px solid #e9e9eb;
	}
.content_wrap .content li {
	list-style:none;
	margin-top:10px;
	border-right:2px solid #eff0f0;
	float:left;
	padding-right:15px;
	padding-left:15px;
	}
.content_wrap .content li	.content_2 {
	font-size:26px;
	}
</style>
<body style="padding:0;">

	<div class="easyui-panel" title="用户分析"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
                            开始时间：<input id="start" type="text" class="easyui-datebox" required="required">
                            结束时间：<input id="end" type="text" class="easyui-datebox" required="required">
    	<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectUserList()">查询</a>
    	</p>  
	</div>
	
	<table id="user_list_tab"></table>
   <div id="show_win">
  </div>
</body>
</html>