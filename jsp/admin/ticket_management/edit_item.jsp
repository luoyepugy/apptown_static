<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="edit_item">
	<form id="edit_item_form">
		<ul class="show_ul">
			<li>
				<p style="color: red;">票劵项目参数</p>
				<input type="hidden" id="edit_itemId"> 
				<span>wxid:<input id="edit_wxid" type="type" name="edit_wxid"></span> 
				<span>ticketType:<input id="edit_ticketType" type="type" name="edit_ticketType"></span> 
				<span>TicketName:<input id="edit_TicketName" type="type" name="edit_TicketName"></span>
				<span>print_start_time:<input id="edit_print_start_time" type="type" name="edit_print_start_time"></span>
				<span>print_end_time:<input id="edit_print_end_time" type="type" name="edit_print_end_time"></span>
				<span>Count:<input id="edit_Count" type="type" name="edit_Count"></span>
				<span>wxQRcode:<input id="edit_wxQRcode" type="type" name="edit_wxQRcode"></span>
				<span>QRcodeUrl:<input id="edit_QRcodeUrl" type="type" name="edit_QRcodeUrl"></span>
				<span>staffId:<input id="edit_staffId" type="type" name="edit_staffId"></span>
				<span>templateId:<input id="edit_templateId" type="type" name="edit_templateId"></span>
				<span>check_rule:<input id="edit_check_rule" type="type" name="edit_check_rule"></span>
				<span>quantity:<input id="edit_quantity" type="type" name="edit_quantity"></span>
				<span>place:<input id="edit_place" type="type" name="edit_place"></span>
				<span>support:<input id="edit_support" type="type" name="edit_support"></span>
				<span>remark:<input id="edit_remark" type="type" name="edit_remark"></span>
			</li>
			<li style="text-align: center;"><a id="edit_submit" href="#"
				class="easyui-linkbutton" data-options="iconCls:'icon-ok'"
				onclick="edit_item_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; <a
				id="edit_cancel" href="#" class="easyui-linkbutton"
				data-options="iconCls:'icon-cancel'" onclick="edit_item_cancel()">取消</a></li>
		</ul>
	</form>
</div>
