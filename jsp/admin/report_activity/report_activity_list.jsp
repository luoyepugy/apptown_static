<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
<script src="/js/common/ajaxfileupload.js?data=20151022"></script>
<!-- <script src="/js/admin/sponsor/sponsor_apply_list.js"></script> -->
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
	<table id="report_activity_list_tab"></table>
	
	<div id="shenhe_win">
		<input type="hidden" id="id_report"  />
		<ul class="show_ul">
			<li>
				<span>活动赞助名称:</span>
				<span id="activity_support_name"></span>
				<span id="activity_support_id" style="display: none;"></span>
				<input name="status" type="radio" value="2" />拒绝 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="1" checked="checked" />通过
			</li>
			<li>
				<a id="approval" style="margin-left: 200px;" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="submit_audit()">提交</a>
			</li>
		</ul>
	</div>
</body>
<script type="text/javascript">
//datagrid
$('#report_activity_list_tab').datagrid({  
    url:'/report/query_list?',   
    columns:[[ 
		{field:'id',title:'id',width:100,align:'center',hidden:true},      
        {field:'activity_id',title:'活动id',width:100,align:'center'},
        {field:'user_id',title:'用户id',width:100,align:'center'},
        {field:'report_time',title:'创建时间',width:300,align:'center',formatter:function(value){
    		if(value != undefined){
    			return dateForamtShow(value);
    		}else{
    			return '';
    		}
   		}},
        //主办单位名称 改为  嘉宾名称/媒体名称/主办方名称
        {field:'report_reason',title:'举报理由',width:200,align:'center'},
        //联系人 改为 姓名
        {field:'user_phone',title:'举报人手机号码',width:100,align:'center'},
        //联系人手机 改为 手机号码
        {field:'status',title:'审核状态',width:100,align:'center',formatter:function(value){
    		if(value == 0){
    			return '审核中';
    		}else if(value == 1){
    			return '核实已通过';
    		}else if(value == 2){
    			return '拒绝';
    		}
   		}}
    ]],
    loadMsg:"数据加载中请稍后!",
    fitColumns:true,
    striped:true,
    singleSelect:true,
    pagination:true,
    border:false,
    fit:true,
    pagePosition:top,
	toolbar:[{
   	 text:'审核',
	 iconCls:'icon-edit',
	 handler:shenhe_view 
}
]
});

//审核handler
function shenhe_view(){ 
	var obj = $('#report_activity_list_tab').datagrid("getSelected");
	if(obj== null){
        $.messager.alert('提示', '请选择一条记录!', 'warning');
        ret_report   }
	$("#id_report").val(obj.id);
	if(obj.status == '0'){
		$('#shenhe_win').window('open'); 
	}else{
		$.messager.alert('提示','这条已经审核过!');   
	}
}
function submit_audit(){
	var status = $('input:radio[name="status"]:checked').val();
	var id=$("#id_report").val();
	var reportActivity={id:id,status:status};
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/report/execute_audit", 
         data: reportActivity, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','提交成功!'); 
        		$('#shenhe_win').window('close');
        		$('#report_activity_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示',result.msg); 
        	 }
         },
         error: function(res){
         }, 
         complete:function(){
		} 
      }); 
}

//apply_activity_support配置
$('#shenhe_win').window({
	title: '审核',
    width:400,   
    height:150,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});
/** 时间格式化 **/
function dateForamtShow(x){
    var time=new Date();
    time.setTime(x);
    var   year=time.getFullYear();
    var   month=time.getMonth()+1;
    month<10?month="0"+month:month
    var   date=time.getDate();
    date<10?date="0"+date:date
    var   hour=time.getHours();
    hour<10?hour="0"+hour:hour
    var   minute=time.getMinutes();
    minute<10?minute="0"+minute:minute
    return   year+"/"+month+"/"+date+" "+hour+":"+minute;
}
</script>
</html>