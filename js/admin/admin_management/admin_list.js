$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#admin_list_tab').datagrid({   
	    url:'/admin/adminListDate?time='+new Date(),   
	    columns:[[   
	        {field:'id',title:'管理员ID',width:100,align:'center'},
	        {field:'name',title:'管理员名称',width:200,align:'center'},   
	        {field:'position',title:'职位',width:200,align:'center',hidden:true},
	        {field:'login_name',title:'管理员账户',width:200,align:'center'},
	        {field:'count',title:'登入次数',width:200,align:'center'},
	        {field:'type',title:'状态',width:300,align:'center',formatter:function(value){
	        		if(value == "1"){
	        			return '启用';
	        		}else{
	        			return '禁用';
	        		}
	        	
	       		}
	    	},
	        {field:'last_time',title:'最后登录时间',width:300,align:'center',formatter:function(value){
	        		if(value != undefined){
	        			return dateForamtShow(value.time);
	        		}else{
	        			return '';
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
				$.messager.confirm('确认框','你确定要删除管理员数据,删除后无法恢复?',function(r){   
				    if (r){   
				    	deleteAdminClick(); 
				    }   
				}); 
        }},{text:'添加',iconCls:'icon-add',handler:function(){  
        	addClick();
        }},{text:'修改',iconCls:'icon-update',handler:function(){
        	updateClick();
        }},{text:'权限设置',iconCls:'icon-sum',handler:function(){
        	nodeSetClick();
        }}
		]
	});
	
});

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
$('#related_window').window({
	title: '权限设置窗口',
    width:800,   
    height:500,   
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

/** 管理员按名称模糊查询 **/
function queryAdminByName(){
	$('#admin_list_tab').datagrid('load',{name: $("#admin-name-query").val().trim()});
}

/** 权限设置触发 **/
function nodeSetClick(){
	var obj = $('#admin_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要设置的数据!');
	}else{
		$.ajax({
			type : 'POST',
			url : '/admin/adminRelatedNodeData',
			data : {'admin_id' : obj.id},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'html',
			success : function(data) {
				$('#related_window').empty().append(data);
				$('#related_window').window("open");
			}
		});
	}
}

/** 删除管理员触发 **/
function deleteAdminClick(){
	var obj = $('#admin_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}else{
		$.ajax({
			type : 'POST',
			url : '/admin/deleteAdmin',
			data : {'adminid' : obj.id},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$.messager.alert('消息框',data.msg);
				if(data.code == 0){
					$('#admin_list_tab').datagrid("reload");
				}
			}
		});
	}
}

/** 新增管理员触发 **/
function addClick(){
	$("#update_id").val('');
	$("#update_name").val('');
	$("#update_position").val('');
	$("#update_login_name").val('');
	$("#update_login_pwd").val('');
	$("#update_type").val(1);
	$('#update_window').window("open");
}

/** 更新管理员触发 **/
function updateClick(){
	var obj = $('#admin_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要更新的数据!');
	}else{
		$.ajax({
			type : 'POST',
			url : '/admin/adminDataOnly',
			data : {'admin_id' : obj.id},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$("#update_id").val(data.id);
				$("#update_name").val(data.name);
				$("#update_position").val(data.position);
				$("#update_login_name").val(data.login_name);
				$("#update_login_pwd").val(data.login_password);
				$("#update_type").val(data.type);
				$('#update_window').window("open");
			}
		});
	}
}

/** 数据更新提交绑定触发事件 **/
$("#update_submit").on("click",function(){
	var bl1 = $('#update_name').validatebox("isValid");
	var bl2 = $('#update_position').validatebox("isValid");
	var bl3 = $('#update_login_name').validatebox("isValid");
	var bl4 = $('#update_login_pwd').validatebox("isValid");
	if(bl1 && bl2 && bl3 && bl4){
		var id = $("#update_id").val();
		var name = $("#update_name").val().trim();
		var position = $("#update_position").val().trim();
		var login_name = $("#update_login_name").val().trim();
		var login_pwd = $("#update_login_pwd").val().trim();
		var type = $("#update_type").val();
		var l;
		if(id.length > 0){
			l = '/admin/updateAdmin';
		}else{
			id = null;
			l = '/admin/insertAdmin';
		}
		$.ajax({
			type : 'POST',
			url : l,
			data : {'id':id,'name':name,'position':position,'login_name':login_name,'login_password':login_pwd,'count':0,'type':type},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$.messager.alert('消息框',data.msg);
				if(data.code == 0){
					$('#admin_list_tab').datagrid("reload");
					$('#update_window').window("close");
				}
			}
		});
	}
	
})


