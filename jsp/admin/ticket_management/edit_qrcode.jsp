<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="edit_qrcode">
	<form id="edit_qrcode_form">
		<ul class="show_ul">
			<li>
				<p style="color: red;">设置主副微信二维码</p>
				<span>wxid:<input id="wxid" type="type" name="wxid"></span> 
				<span>Main:<input id="Main" type="type" name="Main"></span>
				<span>itemId:<input id="itemId" type="type" name="itemId"></span> 
				<span>url:<input id="url" type="type" name="url"></span>
			</li>
			<li style="text-align: center;"><a id="qrcode_submit" href="#"
				class="easyui-linkbutton" data-options="iconCls:'icon-ok'"
				onclick="qrcode_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; <a
				id="qrcode_cancel" href="#" class="easyui-linkbutton"
				data-options="iconCls:'icon-cancel'" onclick="qrcode_cancel()">取消</a></li>
		</ul>
	</form>
</div>
