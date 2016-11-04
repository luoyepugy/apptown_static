<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script src="/js/admin/sponsor/sponsor_user_list.js"></script>
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
	
	#label_pannel ul li{list-style: none;}
	#label_pannel ul .repeat_labels {
		display: block;
		height: 35px;
		line-height: 35px;
		float: left;
	}
	.repeat_labels{
		border: 1px solid #cccccc;
	    border-radius: 4px;
	    cursor: pointer;
	    width: 60px;
	    padding-left: 10px;
	    margin-right: 5px;
	    margin-bottom: 5px;
	}
	#label_pannel ul .checked_labels {
		display: block;
		height: 35px;
		line-height: 35px;
		float: left;
	}
	 .checked_labels{
		border: 1px solid #cccccc;
		background:green;
		border-radius: 4px;
	    cursor: pointer;
	    width: 60px;
	    padding-left: 10px;
	    margin-right: 5px;
	    margin-bottom: 5px;
	} 
	
	#labelWindow dl dt{
		font-size: 14px;
		font-weight: bold;
		clear: both;
	}
	#labelWindow dl dd{
		border: 1px solid #cccccc;
	    border-radius: 4px;
	    cursor: pointer;
	    width: 60px;
	    padding-left: 10px;
	    margin-right: 5px;
	    margin-bottom: 5px;
	    float: left;
	}
	.checked_dd{background:green;}
</style>
<body style="padding:0;">

	<div class="easyui-panel" title="主办方申请"    
        style="width:100%;height:auto;padding:10px;background:#fafafa;"  
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
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApplyByType()">查询</a>
    	</p>  
    	<div style="height:10px;"></div>
    	<div id="label_pannel" >
    		<ul id="label_ul" >
    			<li class="left_tip"><h3>活动标签：</h3></li>
    		</ul>
    	</div>  
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
<script type="text/javascript">
function get_all_label(){
	$.ajax({
		type : 'GET',
		url : '/label/all',
		contentType : 'application/json; charset=UTF-8',
		dataType : 'json',
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				$("#label_ul").append("<li id='"+data[i].id+"' onclick='checklabel("+data[i].id+")' class='repeat_labels' >"+data[i].label_name+"</li>");
			}
		}
	});
}

function checklabel(id){
	var cla = $("#"+id).attr("class");
	if("repeat_labels"==cla){
		$("#"+id).attr("class","checked_labels");
	}else{
		$("#"+id).attr("class","repeat_labels");
	}
	var doms = $(".checked_labels");
	var labels="";
	for(var i=0 ;i<doms.length;i++){
		var label= doms[i].id;
		labels=labels+label+",";
	}
	
	$('#sponsor_apply_list_tab').datagrid('load',{
		user_id:$("#user_id").val(),
		type:$("#status").combobox('getValue'),
		label:labels
	});
}

function close_labelWindow(){
	$('#labelWindow').window('close');
	$("#activityids").val("");
	$("#label_ac_ids").val("");
	var doms = $(".checked_dd");
	for(var i=0;i<doms.length;i++){
		doms[i].className=null;
	}
}


window.onload=get_all_label;
</script>		
</body>
</html>