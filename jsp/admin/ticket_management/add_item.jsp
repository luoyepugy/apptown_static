<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="add_item">
	<form id="add_item_form">
		<ul class="show_ul">
			<li>
				<p style="color: red;">票劵项目参数</p> 
				<span>wxid:<input id="wxid" type="type" name="wxid"></span> 
				<span>ticketType:<input id="ticketType" type="type" name="ticketType"></span> 
				<span>TicketName:<input id="TicketName" type="type" name="TicketName"></span>
				<span>print_start_time:<input id="print_start_time" type="type" name="print_start_time"></span>
				<span>print_end_time:<input id="print_end_time" type="type" name="print_end_time"></span>
				<span>Count:<input id="Count" type="type" name="Count"></span>
				<span>wxQRcode:<input id="wxQRcode" type="type" name="wxQRcode"></span>
				<span>QRcodeUrl:<input id="QRcodeUrl" type="type" name="QRcodeUrl"></span>
				<span>staffId:<input id="staffId" type="type" name="staffId"></span>
				<span>templateId:<input id="templateId" type="type" name="templateId"></span>
				<span>check_rule:<input id="check_rule" type="type" name="check_rule"></span>
				<span>quantity:<input id="quantity" type="type" name="quantity"></span>
				<span>place:<input id="place" type="type" name="place"></span>
				<span>support:<input id="support" type="type" name="support"></span>
				<span>remark:<input id="remark" type="type" name="remark"></span>
			</li>
			<li style="text-align: center;"><a id="edit_submit" href="#"
				class="easyui-linkbutton" data-options="iconCls:'icon-ok'"
				onclick="add_item_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; <a
				id="edit_cancel" href="#" class="easyui-linkbutton"
				data-options="iconCls:'icon-cancel'" onclick="add_item_cancel()">取消</a></li>
		</ul>
	</form>
</div>
