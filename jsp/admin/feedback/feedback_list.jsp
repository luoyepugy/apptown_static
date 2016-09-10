<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/admin/feedback/feedback_list.js"></script>
</head>
<style>
	.shenhe_ul li{
		text-align:center;
		list-style: none;
		display: block;
		height: auto;
		width: 200px;
		line-height: 35px;
		margin-top: 12px;
		clear:both;
	}
	.shenhe_ul li span{
	  float:left;
	}
	.show_ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
</style>
<body style="padding:0;">
	<div class="easyui-panel" title="意见反馈"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<select  class="easyui-combobox" style="width: 160px;" id="reply_type" panelHeight="75" >
				<option value="">全部</option>
				<option value="1">已回复</option>
				<option value="2">未回复</option>
			</select>
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectFeedback()">查询</a>
    	</p>  
	</div>
	
	<table id="feedback_list_tab"></table>
	
	<div id="reply_win">
		<form id="reply_win_form">
			<input type="hidden" id="id" name="id"/>
			<ul class="shenhe_ul">
				<li><span>用户名:</span><span id="user_name"></span></li> 
				<li><span>意见:</span><span id="content"></span></li> 
				<li><span>回复:</span><textarea id="reply_content" class="easyui-validatebox" required="true"></textarea></li> 
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="reply_one()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="reply_one_cancel()">取消</a>
				</li>
			</ul>
		</form>
   </div>
</body>
</html>