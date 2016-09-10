<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div id="edit_image_template">
	<form id="edit_image_template_form">
		<ul class="show_ul">
			<li>
				<p style="color: red;">模板参数</p> <span>wxid:<input id="edit_image_wxid"
					type="type" name="edit_image_wxid"></span>  <span>模板图片url:<input
					id="edit_image_template_image_url" type="type" name="edit_image_template_image_url">
					<input type="hidden" id="edit_image_templateId">
					</span>
			</li>
			<li style="text-align: center;"><a id="edit_image_submit" href="#"
				class="easyui-linkbutton" data-options="iconCls:'icon-ok'"
				onclick="edit_image_submit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp; <a
				id="edit_image_cancel" href="#" class="easyui-linkbutton"
				data-options="iconCls:'icon-cancel'" onclick="edit_image_cancel()">取消</a></li>
		</ul>
	</form>
</div>
