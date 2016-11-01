<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script src="/js/admin/hotel/hotel_list.js"></script>
      	
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

	<div class="easyui-panel" title="酒店管理"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span> <label>酒店名称:</label></span>
    		<input class="easyui-validatebox" type="text" id="name" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    		<span> <label>酒店地址:</label></span>
    		<input class="easyui-validatebox" type="text" id="address" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    		
    		<span> <label>酒店星级:</label></span>
    		<select  class="easyui-combobox" style="width: 160px;" id="star" panelHeight="100" >
				<option value="">全部</option>
				<option value="1">一星级</option>
				<option value="2">二星级</option>
				<option value="3">三星级</option>
				<option value="4">四星级</option>
				<option value="5">五星级</option>
			</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectHotel()">查询</a>
    	</p>  
	</div>
	
	<table id="hotel_list_tab"></table>
	
	<div id="edit_win">
		<form id="edit_win_form">
		     <input id="id_edit" type="hidden">
			<ul class="shenhe_ul">			
				<li><span>酒店名称:</span><input id="name_edit" name="name_edit" type="text" /></li>
				<li><span>酒店星级:</span>
					<select  style="width: 160px;" id="star_edit" panelHeight="100" >
						<option value="">全部</option>
						<option value="1">一星级</option>
						<option value="2">二星级</option>
						<option value="3">三星级</option>
						<option value="4">四星级</option>
						<option value="5">五星级</option>
					</select>
				</li>
				<li>
					 <span>酒店图片</span>
					 <img src="" id="icon_edit" style="height: 50px;width: 50px;margin: auto;" />
					 <input id="uploadfile" name="iconFile" type="file" value="上传图片" onchange="javascript:uploadImage();" style="display:none"/>
				</li>
				<li><span>酒店地址:</span><input id="address_edit" name="contacter_phone_edit" type="text" /></li>
				<li><span>联系人:</span><input id="contacter_edit" name="contacter_email_edit" type="text" /></li>
				<li><span>联系电话:</span><textarea id="phone_edit" name="introduction_edit"></textarea></li>
				<li><span>详情介绍:</span><input id="details_edit" name="home_page_edit" type="text" /></li>
				<li class="zq mt20 the_editor" >

                     <label class="f_d title_poi fl">活动详情 <span class="hs">*</span></label>
                     <div class="ov map_poou_car rich_text">
                          <div id="myEditor" > </div>

                      </div>
                <p class="qc"></p>
           		</li>
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