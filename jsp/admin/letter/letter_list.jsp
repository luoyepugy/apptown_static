<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/admin/letter/letter_list.js"></script>
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

	<div class="easyui-panel" title="系统消息"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>内容:</label></span>
    		<input class="easyui-validatebox" type="text" id="content" />
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectLetter()">查询</a>
    	</p> 
	</div>
	
	<table id="letter_list_tab"></table>
  
   <div id="add_win">
		<form id="add_win_form">
			<ul class="shenhe_ul">
			<li>
				<span>内容:</span>
				<textarea id="content_tmp"></textarea>
			</li>
			<li>
				<a id="add_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="add_one()">发送 </a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a id="add_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="add_one_cancel()">取消</a>
			</li>
			</ul>
		</form>
  </div>
</body>
</html>