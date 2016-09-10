$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#node_list_tab').datagrid({   
	    url:'/node/queryNodeListData?time='+new Date(),   
	    columns:[[   
	        {field:'id',title:'节点ID',width:100,align:'center'},
	        {field:'name',title:'节点名称',width:200,align:'center'},   
	        {field:'function_url',title:'功能链接',width:200,align:'center',hidden:true},
	        {field:'grade',title:'等级',width:200,align:'center',formatter:function(value){
        		if(value == "1"){
        			return '一级';
        		}else if(value == "2"){
        			return '二级';
        		}
        	
       		}},
	        {field:'father_grade_name',title:'父级名称',width:200,align:'center'},
	        {field:'status',title:'状态',width:300,align:'center',formatter:function(value){
	        		if(value == "0"){
	        			return '开发完成';
	        		}else if(value == "1"){
	        			return '开发中';
	        		}
	        	
	       		}
	    	},
	        {field:'create_time',title:'创建时间',width:300,align:'center',formatter:function(value){
	        		if(value != undefined){
	        			return dateForamtShow(value.time);
	        		}else{
	        			return '';
	        		}
	        	
	       		}
        	}
	     ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{text:'删除',iconCls:'icon-remove',handler:function(){  
				$.messager.confirm('确认框','你确定要删除节点数据,删除后无法恢复?',function(r){   
				    if (r){   
				    	deleteClick(); 
				    }   
				}); 
        }},{text:'添加',iconCls:'icon-add',handler:function(){  
        	addClick();
        }},{text:'修改',iconCls:'icon-update',handler:function(){
        	updateClick();
        }}
		]
	});
	
	/** 节点等级选择事件 **/
	$("#update_grade").on("change",function(){
		var grade = $(this).val();
		if(grade == '1'){
			$("#update_function_url").val('');
			$("#update_function_url").attr("readonly","readonly");
			$("#update_father_grade_id").val('');
			$("#update_father_grade_id").empty();
		}else if(grade == '2'){
			loadfatherGradeData();
			$("#update_function_url").removeAttr("readonly");
		}
	})
	
});

/** 管理员按名称模糊查询 **/
function queryNodeByName(){
	$('#node_list_tab').datagrid('load',{name: $("#node-name-query").val().trim()});
}

/** 加载节点父级选项 **/
function loadfatherGradeData(){
	$.ajax({
		type : 'POST',
		url : '/node/getLevelOneNodeBy',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'json',
		async: false,
		success : function(data) {
			$("#update_father_grade_id").empty();
			for(var i=0 ; i<data.length ; i++){
				$("#update_father_grade_id").append('<option value="'+data[i].id+'">'+data[i].name+'</option>');
			}
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

$('#update_window').window({
	title: '数据编辑窗口',
    width:400,   
    height:300,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

/** 删除管理员触发 **/
function deleteClick(){
	var obj = $('#node_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}else{
		$.ajax({
			type : 'POST',
			url : '/node/deleteNode',
			data : {'node_id' : obj.id},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$.messager.alert('消息框',data.msg);
				if(data.code == 0){
					$('#node_list_tab').datagrid("reload");
				}
			}
		});
	}
}

/** 新增管理员触发 **/
function addClick(){
	$("#update_id").val('');
	$("#update_name").val('');
	$("#update_function_url").val('');
	$("#update_function_url").attr("readonly","readonly");
	$("#update_grade").val(1);
	$("#update_father_grade_id").val('');
	$("#update_status").val(0);
	$('#update_window').window("open");
}

/** 更新管理员触发 **/
function updateClick(){
	var obj = $('#node_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要更新的数据!');
	}else{
		loadfatherGradeData();//加载节点父级选项
		$.ajax({
			type : 'POST',
			url : '/node/queryNodeById',
			data : {'node_id' : obj.id},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$("#update_id").val(data.id);
				$("#update_name").val(data.name);
				$("#update_function_url").val(data.function_url);
				$("#update_grade").val(data.grade);
				$("#update_father_grade_id").val(data.father_grade_id);
				$("#update_status").val(data.status);
				$('#update_window').window("open");
			}
		});
	}
}

/** 数据更新提交绑定触发事件 **/
$("#update_submit").on("click",function(){
	var id = $("#update_id").val();
	var name = $("#update_name").val().trim();
	var function_url = $("#update_function_url").val().trim();
	var grade = $("#update_grade").val();
	var father_grade_id = $("#update_father_grade_id").val();
	var status = $("#update_status").val();
	var l;
	if(id.length > 0){
		l = '/node/updateNode';
	}else{
		id = null;
		l = '/node/insertNode';
	}
	$.ajax({
		type : 'POST',
		url : l,
		data : {'id':id,'name':name,'function_url':function_url,'grade':grade,'father_grade_id':father_grade_id,'status':status},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'json',
		success : function(data) {
			$.messager.alert('消息框',data.msg);
			if(data.code == 0){
				$('#node_list_tab').datagrid("reload");
				$('#update_window').window("close");
			}
		}
	});
})
