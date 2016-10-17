<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>关键字过滤</title>
<%@include file="../common.jsp" %>
<script src="/js/admin/keywords_manage/keywords_list.js"></script>
</head>
<style>
	.keywords_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: auto;
		width: 200px;
		line-height: 35px;
		margin-top: 12px;
		clear:both;
	}
	.keywords_ul li span{
	  float:left;
	}
	.keywords_ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
</style>
<body style="padding:0;">
	<div class="easyui-panel" title="关键字过滤"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    	    <label>关键字:</label><input type="text" id="search_word">
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="query()">查询</a>
    	</p>  
	</div>
	
	<table id="keywords_list_tab"></table>
	
	<div id="add_win">
		<form id="add_win_form">
			<ul class="keywords_ul">
				<li><span>关键字:</span><input type="text" id="word"/></li> 
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="keywords_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="keywords_cancel()">取消</a>
				</li>
			</ul>
		</form>
    </div>
    
    <div id="edit_win">
		<form id="edit_win_form">
			<input type="hidden" id="id" name="id"/>
			<ul class="keywords_ul">
				<li><span>关键字:</span><input type="text" id="edit_word"/></li> 
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="keywords_edit_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="keywords_edit_cancel()">取消</a>
				</li>
			</ul>
		</form>
    </div>
    
</body>
</html>