<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script src="/js/admin/sponsor/sponsor_apply_list.js"></script>
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

	<div class="easyui-panel" title="主办方申请"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>账号ID:</label></span>
    		<input class="easyui-validatebox" type="text" id="user_id" />
    		<span> <label>审核状态:</label></span>
    		<select  class="easyui-combobox" style="width: 160px;" id="status" panelHeight="100" >
				<option value="">全部</option>
				<option value="3">待审核</option>
				<option value="1">通过</option>
				<option value="2">拒绝</option>
			</select>
    		<!-- <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApply()">查询</a>  -->
    		<span> <label>申请类型:</label></span>
    		<select  class="easyui-combobox" style="width: 160px;" id="type" panelHeight="100" >
				<option value="">全部</option>
				<option value="0">活动号</option>
				<option value="1">嘉宾号</option>
				<option value="2">媒体号</option>
			</select>
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApplyByType()">查询</a>
    	</p>  
	</div>
	
	<table id="sponsor_apply_list_tab"></table>
	
	<div id="edit_win">
		<form id="edit_win_form">
		     <input id='id_edit' type=hidden>
		     <input id='user_id_edit' type=hidden>
			<ul class="shenhe_ul">
				<li><span>主办方图标:</span>
				 <img src="" id="sponsor_icon_edit" style="height: 50px;width: 50px;margin: auto;" />
				 <input id="uploadfile" name="iconFile" type="file" value="上传图片" onchange="javascript:uploadImage();" style="display:none"/>
				</li>
				<li><span>主办单位名称:</span><input id="name_edit" name="name_edit" type="text" /></li>
				<li><span>联系人:</span><input id="contacter_edit" name="contacter_edit" type="text" /></li>
				<li><span>联系人手机:</span><input id="contacter_phone_edit" name="contacter_phone_edit" type="text" /></li>
				<li><span>联系人邮箱:</span><input id="contacter_email_edit" name="contacter_email_edit" type="text" /></li>
				<li><span>主办方简介:</span><textarea id="introduction_edit" name="introduction_edit"></textarea></li>
				<li><span>官方主页链接:</span><input id="home_page_edit" name="home_page_edit" type="text" /></li>
				
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="edit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="edit_cancel()">取消</a>
				</li>
			</ul>
		</form>
  </div>
  
	<div id="shenhe_win">
		<ul class="shenhe_ul">
			<li>
				<span>状态:
				<input id='id_shenhe' type='hidden'/>
				<input id='type_id' type='hidden'/>
				</span>
				<input name="status" type="radio" value="N" checked="checked"/>拒绝 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="Y" />通过
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark_shenhe"></textarea>
			</li>
			<li>
			<a id="shenhe_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="shenhe()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a id="shenhe_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="shenhe_cancel()">取消</a>
		   </li>
		</ul>
	</div>
</body>
<script type="text/javascript">
function uploadImage(){
	 $.ajaxFileUpload({
	   url:'/sponsor/sponsor_icon_upload',
       secureuri:true,
       fileElementId:'uploadfile',
       dataType:'json',
       data:{id:$("#id_edit").val()},
       success: function (data,status){
           if(data.code == 0){
            $("#sponsor_icon_edit").attr("src",data.msg);   
           }else{
               alert("文件上传过程中出错!请重试!");
           }
       },
       error: function (data,status,e){
           alert("服务中断或连接超时导致通信失败！");
       }
	});
}    
$("#sponsor_icon_edit").on("click",function(){
	$("#uploadfile").click()
})

</script>
</html>