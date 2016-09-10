<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
</head>
<style>
	*{
	  padding:0;
	  margin:0;
	}
	.show_ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
	#region_win{
		text-align: center;
	}
	#region_win ul li{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
	}
	
	
	
	
</style>

<body style="padding:0;">
	<div class="easyui-panel" title="活动查询"    
        style="width:100%;height:100px;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align: center;">
    		<span>活动ID:</span>
    		<input id="activity_id" type="text"/>
    		<span>活动名称:</span>
    		<input id="input-sel-data" type="text"/>
    		<span>活动状态:</span>
    		<select id="select-hd-status">
    		  <option value="-1">所有</option>
    		  <option value="0">活动轮播</option>
    		  <option value="1">精选活动</option>
    		  <option value="2">推荐活动</option>
    		  <option value="3">热门活动</option>
    		</select>
    		<a href="javascript:queryActivityByName()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>  
	</div>

	<table id="activity_list_tab"></table>
	
	<div id="upload_image">
		<ul class="show_ul">
			<li style="text-align: center;"><span>活动名称:</span>
			<span id="activity_name"></span>
			<span id="activity_id" style="display: none;"></span>
			</li>
			<li id="app_banner" style="margin-left: 50px">
			  <p>手机端：</p>
			  <img src="" id="app_bannerImage" data-type="1"  style="height: 240px;width: 640px;margin: auto;" />
			</li>
			<li id="pc_banner" style="margin-left: 50px;margin-top:260px;">
			  <p>电脑端：</p>
			  <img src="" id="pc_bannerImage" data-type="3" style="height: 240px;width: 640px;margin: auto;" />
			</li>
			<li style="margin-top:300px;margin-left:260px;">
			  <input id="uploadfile" name="banner_image" type="file" value="上传图片" style="display: none;" onchange="javascript:uploadImage();"/>
			</li>
		</ul>
	</div>
	
	<div id="setItem_win" class="setItem_win">
	    <span>itemId:
			  <input name="itemId" type="text" id="itemId" size="12"/>
		</span>
		</br>
		<span>
			<input id="setItem" type="button" value="确定"  />
			<input id="delItem" type="button" value="解除关联" />
			<input id="closeItem" type="button" value="关闭" />
			<input id="activityId" type="hidden">
		</span>
	</div> 
	
</body>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script type="text/javascript" src="/js/admin/activity_manage/activity_manage.js"></script>
<script type="text/javascript">

var img_obj;//图片编辑对象

//图片选取绑定 
$("#app_bannerImage,#pc_bannerImage").click(function(){
	img_obj = $(this);
	$("#uploadfile").click();
})

function uploadImage(){
	
	 var typeId= img_obj.attr("data-type");
	 var activityId = $("#activity_id").text();
	 $.ajaxFileUpload({
		 url:'/activity_manage/uploadfile?activityId='+activityId+"&typeId="+typeId+"&time="+new Date(),//用于文件上传的服务器端请求地址
       secureuri:true,//是否启用安全提交，一般设置为false
       fileElementId:'uploadfile',//文件上传控件的id
       dataType:'json',//服务器返回的数据类型
       success: function (data,status){
           if(data.code == 0){
        	   img_obj.attr("src",data.msg);
           }else{
               alert("文件上传过程中出错!请重试!");
           }
       },
       error: function (data,status,e){
           alert("服务中断或连接超时导致通信失败！");
       }
	});
}    


</script>
</html>