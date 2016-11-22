<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script src="/js/admin/user_manage/image_list.js"></script>
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

	<div class="easyui-panel" title="活动海报"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>查看类型:</span>
			<select  style="width: 160px;" id="select_type" panelHeight="100" >
				<option value="">全部</option>
				<option value="0">根节点</option>
				<option value="1">根节点图片</option>
			</select>
    		<span> <label>节点名称:</label></span>
    		<input class="easyui-validatebox" type="text" id="name" />
    		<!-- <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApply()">查询</a>  -->    		
    		<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;" onclick="selectSponsorApplyByType()">查询</a>
    	</p>  
	</div>
	
	<table id="sponsor_apply_list_tab"></table>
	
	<div id="edit_win">
		<form id="edit_win_form">
		     <input id='id_edit' type=hidden>
		     <input id='type_id_edit' type=hidden>
			<ul class="shenhe_ul">
				<li><span>上传图片:</span>
				 <img src="" id="sponsor_icon_edit" style="height: 50px;width: 50px;margin: auto;" />
				 <input id="uploadfile" name="iconFile" type="file" value="上传图片" onchange="javascript:uploadImage();" style="display:none"/>
				</li>
				<li>
					<span>修改节点:</span>
					<select  style="width: 160px;" id="type_edit" panelHeight="100" >
					</select>
				</li>
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="edit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="edit_cancel()">取消</a>
				</li>
			</ul>
		</form>
  </div>
  
  <div id="edit_win2">
		<form id="edit_win_form2">
			<ul class="shenhe_ul">
				<li><span>修改节点名称:</span><input id="value_edit" name="value_edit" type="text" /></li>
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="edit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="edit_cancel()">取消</a>
				</li>
			</ul>
		</form>
  </div>
  
  <div id="save_win">
		<form id="save_win_form">
			<ul class="shenhe_ul">
				<li><span>新增节点名称:</span><input id="save_value" name="value_edit" type="text" /></li>
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="save()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="edit_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="edit_cancel()">取消</a>
				</li>
			</ul>
		</form>
  </div>
  
  <div id="save_win2">
		<form id="save_win_form2">
			<ul class="shenhe_ul">
				<li><span>上传图片:</span>
				 <img src="" id="sponsor_icon_edit2" style="height: 50px;width: 50px;margin: auto;" />
				 <input id="uploadfile2" name="iconFile" type="file" value="上传图片" onchange="javascript:uploadImage2();" style="display:none"/>
				</li>
				<li>
					<a id="edit_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="save()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
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
	   url:'/sponsor/sponsor_icon_upload_byuser',
       secureuri:true,
       fileElementId:'uploadfile',
       dataType:'json',
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
function uploadImage2(){
	 $.ajaxFileUpload({
	   url:'/sponsor/sponsor_icon_upload_byuser',
      secureuri:true,
      fileElementId:'uploadfile2',
      dataType:'json',
      success: function (data,status){
          if(data.code == 0){
           $("#sponsor_icon_edit2").attr("src",data.msg);   
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
});
$("#sponsor_icon_edit2").on("click",function(){
	$("#uploadfile2").click()
});

</script>
</html>