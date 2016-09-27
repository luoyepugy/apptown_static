<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>签到机管理</title>
<%@include file="../common.jsp" %>
<style type="text/css">
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
</head>
<body>
	 <div class="demo-info">
	     <div class="demo-tip icon-tip"></div>
	      <div>签到机申请审核管理.</div>
	 </div>
	<table id="machine_manager" >
	</table>
	
	<!-- 审核 -->
	<div id="audit_win">
		<ul class="shenhe_ul">
			<li>
				<span>状态:
				<input id='id' type=hidden>
				</span>
				<input name="status" type="radio" value="1"/>审核通过 &nbsp;&nbsp;&nbsp;&nbsp;
				<input name="status" type="radio" value="2" checked="checked" />审核拒绝&nbsp;&nbsp;&nbsp;&nbsp;
			</li>
			<li>
				<span>备注:</span>
				<textarea id="remark"></textarea>
			</li>
			<li>
			<a id="shenhe_submit" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" onclick="execute_audit()">提交</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a id="shenhe_cancel" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" onclick="shenhe_cancel()">取消</a>
		   </li>
		</ul>
	</div>
	
<script type="text/javascript">
$('#machine_manager').datagrid({   
    url:'/Machine/query_list',   
    columns:[[   
        {field:'user_id',title:'用户ID',width:100,align:'center'},
        {field:'user_name',title:'姓名',width:200,align:'center'},   
        {field:'user_phone',title:'手机',width:200,align:'center',hidden:true},
        {field:'team_name',title:'企业/组织名称',width:200,align:'center'},
        {field:'apply_time',title:'申请时间',width:300,align:'center',formatter:function(value){
        		if(value != undefined){
        			return dateForamtShow(value);
        		}else{
        			return '';
        		}
        	}
    	},
    	{field:'status',title:'状态',width:200,align:'center',formatter:function(value){
    		var result = null;
    		switch (value)
    		{
    			case 0:
    				result="待审核";
    				break;
    			case 1:
    				result="通过";
    				break;
    			case 2:
    				result="拒绝";
    				break;
    		}
    		return result;	
    	}},
    	{field:'remark',title:'备注',width:200,align:'center'},
    ]],
    loadMsg:"数据加载中请稍后!",
    fitColumns:true,
    striped:true,
    singleSelect:true,
    pagination:true,
    border:false,
    fit:true,
    pagePosition:top,
    toolbar:[{text:'审核',iconCls:'icon-edit',handler:audit}]
});

function audit(){
    var obj = $('#machine_manager').datagrid("getSelected");
    if(obj.status!=0){
    	$.messager.alert('消息框','这条记录已经审核过了!');
    	return;
    }
    $("#id").val(obj.id);
    $('#audit_win').window('open');
}
function execute_audit(){
	var id=$("#id").val();
	var status = $('input:radio[name="status"]:checked').val();
	var remark = $("#remark").val();
	if(status==2&&(remark==null||remark=="")){
		$.messager.alert('提示','拒绝时需填写原因!');
		return;
	}
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/Machine/execute_audit",
         data: {
        	 "id":id,
        	 "status":status,
        	 "remark":remark
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','审核成功!');
        		 shenhe_cancel()
        		 reload();
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

//shenhe_win配置
$('#audit_win').window({
	title: '审核',
    width:400,   
    height:200,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});
//取消审核
function shenhe_cancel(){
	$("#remark").val(null);
	$("#id").val(null);
    $('#audit_win').window('close');
}
//主办方申请查询
function reload() {
	var _grid = $('#machine_manager');
	_grid .datagrid('reload');
}
</script>	
</body>
</html>