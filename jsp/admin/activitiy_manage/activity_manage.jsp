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
<link href="/css/style.css" rel="stylesheet">	
<body style="padding:0;">
	<div class="easyui-panel" title="活动查询"    
        style="width:100%;height:auto ;padding:10px;background:#fafafa;"  
        data-options="iconCls:'icon-search',collapsible:true,border:false">  
    	<p style="display: block; line-height: 20px; height: 20px; text-align:left;">
    		<span>活动ID:</span>
    		<input id="activity_id" type="text"/>
    		&nbsp;&nbsp;&nbsp;&nbsp;
    		<span>活动名称:</span>
    		<input id="input-sel-data" type="text"/>
    		&nbsp;&nbsp;&nbsp;&nbsp;
    		<span>活动状态:</span>
    		<select id="select-hd-status">
    		  <option value="-1">所有</option>
    		  <option value="0">活动轮播</option>
    		  <option value="1">精选活动</option>
    		  <option value="2">推荐活动</option>
    		  <option value="3">热门活动</option>
    		</select>
    		&nbsp;&nbsp;&nbsp;&nbsp;
    		<span>时间状态:</span>
    		<select id="timeStatus">
    			<option value="">不限<option>
    			<option value="3">已过期<option>
    			<option value="2">正在进行<option>
    		</select>
    		&nbsp;&nbsp;&nbsp;&nbsp;
    		<span>活动类型:</span>
    		<select id="type">
    			<option value="">不限<option>
    			<option value="1">商会场馆<option>
    			<option value="2">创业投资<option>
    			<option value="3">亲子教育<option>
    			<option value="4">金融财经<option>
    			<option value="5">精品课程<option>
    			<option value="6">休闲户外<option>
    			<option value="7">娱乐艺术<option>
    		</select>
    		&nbsp;&nbsp;&nbsp;&nbsp;
    		<a href="javascript:queryActivityByName()" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="position: relative;bottom: 3px;">查询</a>
    	</p>
    	<div style="height:10px;"></div>
    	<div id="label_pannel" >
    		<ul id="label_ul" >
    			<li class="left_tip"><h3>活动标签：</h3></li>
    		</ul>
    	</div>  
	</div>

	<table id="activity_list_tab"  ></table>
	
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
	
	<div id="labelWindow" >
		<div id="label_list" ></div>
		<div style="height: 100px;" ><input id="activityids" type="hidden"  /> <input id="label_ac_ids" type="hidden"  /></div>
		<div style="margin-left: 200px;"> <a onclick="add_label_activity()" class="easyui-linkbutton" data-options="toggle:true,group:'g2',plain:true">提交</a></div>
	</div>
</body>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<script type="text/javascript" src="/js/admin/activity_manage/activity_manage.js"></script>
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
	
	$('#activity_list_tab').datagrid('load',{
		id:$("#activity_id").val().trim(),
		name: $("#input-sel-data").val().trim(),
		typeId:$("#select-hd-status").val(),
		timeStatus:$("#timeStatus").val(),
		type:$("#type").val(),
		label:labels
	});
}
/**选择打入活动的标签**/
function selected_label(dom){
	if("checked_dd"==dom.className){
		dom.className=null;
	}else{
		dom.className="checked_dd";
	}
	var doms = $(".checked_dd");
	if(doms.length>5){
		$.messager.alert('提示','最多只能选择5个标签!');
		dom.className=null;
	}
}
//添加标签到活动
function add_label_activity(){
	var activityids=$("#activityids").val();
	var labels = "";
	var doms = $(".checked_dd");
	for(var i=0;i<doms.length;i++){
		labels+=doms[i].getAttribute("id")+",";
	}
	var tips="确定添加这些标签吗！";
	if($("#label_ac_ids").val()!=null&&$("#label_ac_ids").val()!=""){
		tips="所勾选的活动中，活动ID"+$("#label_ac_ids").val()+"为已添加过标签的活动，您确认要全部覆盖修改标签吗？";
	}
		 $.messager.confirm('警告', tips, function(r){
			if (r){
				 $.ajax({
						type : 'POST',
						url : '/label/label_to_activity',
						data : {'activityids' : activityids,'labels':labels},
						contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
						dataType : 'json',
						success : function(data) {
							if(data.code==0){
								$.messager.alert('提示','标签打入成功!');
								close_labelWindow();
								$('#activity_list_tab').datagrid("reload");
							}else{
								$.messager.alert('提示','标签打入失败!');
							}
						}
					});
			}
			
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


<!--上传图片-->

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