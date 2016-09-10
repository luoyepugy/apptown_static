$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#template_list_tab').datagrid({   
	    url:'/thirdTicket/getTemplateList?time='+new Date(),   
	    columns:[[   
	        {field:'id',title:'id',width:50,align:'center'},
	        {field:'name',title:'name',width:100,align:'center',formatter:function(value){
	        	return decodeURI(value);
	           }
	        },   
	        {field:'config',title:'config',width:200,align:'center'},
	        {field:'configMap',title:'configMap',width:0,align:'center',hidden:true},
	        {field:'wxid',title:'wxid',width:0,align:'center',hidden:true},
	        {field:'url',title:'url',width:150,align:'center'},
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    nowrap:false,
	    border:false,
	    fit:true,
		toolbar:[{
			       text:'新增',iconCls:'icon-add',handler:add_template 
		         },'-',
		         {text:'编辑',iconCls:'icon-edit',handler:edit_template  
				   
                 },'-',
                 {text:'编辑url',iconCls:'icon-edit',handler:edit_template_image  
  				   
                 },'-',
                 {text:'删除',iconCls:'icon-cancel',handler:del_template  
				   
                }
		]
	});
});

//del template
function del_template(){
	var obj = $('#template_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}else{
		$.messager.confirm('确认框','是否确认删除?',function(r){   
		    if (r){   
		    	$.ajax({
					type : 'POST',
					url : '/thirdTicket/delTemplate?time='+new Date(),  
					data : {
						'templateId' : obj.id,
						'wxid':'7692'
					},
					contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
					dataType : 'json',
					success : function(data) {
						if(data.code==0){
							$.messager.alert('消息框','删除成功');
							$('#template_list_tab').datagrid("reload");
						}else{
							$.messager.alert('消息框','删除失败!');
						}
					}
				});
		    }   
		});
	}
	
}


