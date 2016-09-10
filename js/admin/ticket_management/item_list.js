$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#item_list_tab').datagrid({   
	    url:'/thirdItem/getItemList?time='+new Date(),   
	    columns:[[   
	        {field:'itemId',title:'itemId',width:50,align:'center'},
	        {field:'ticketType',title:'ticketType',width:50,align:'center'},
	        {field:'TicketName',title:'TicketName',width:200,align:'center'},
	        {field:'wxQRcode',title:'wxQRcode',width:200,align:'center'},
	        {field:'templateId',title:'templateId',width:50,align:'center'},
	        {field:'publish',title:'publish',width:50,align:'center'},
	        {field:'wxid',title:'wxid',width:0,align:'center',hidden:true},
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    nowrap:false,
	    border:false,
	    fit:true,
		toolbar:[{
			       text:'新增',iconCls:'icon-add',handler:add_item
		         },'-',
		         {text:'编辑',iconCls:'icon-edit',handler:edit_item
				 },'-',
                 {text:'删除',iconCls:'icon-cancel',handler:del_item
				 },'-',
				 {text:'发布',iconCls:'icon-ok',handler:function(){
					 //发布 
					 pub_item("1"); 
				   }
				 },'-',
				 {text:'取消发布',iconCls:'icon-remove',handler:function(){
					 // 取消发布
					 pub_item("2"); 
				  }
				 }
		]
	});
});

// 发布item
function pub_item(flag){
	
	var obj = $('#item_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要发布的数据!');
	}	
	$.ajax({
		type : 'POST',
		url : '/thirdItem/pubItem?time='+new Date(),  
		data : {
			'itemId' : obj.itemId,
			'wxid':'7692',
			'flag':flag
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'json',
		success : function(data) {
			if(data.code==0){
				if(flag=='1'){
					$.messager.alert('消息框','发布成功');
				}else{
					$.messager.alert('消息框','取消发布成功');
				}
				$('#item_list_tab').datagrid("reload");
			}else{
				if(flag=='1'){
					$.messager.alert('消息框','发布失败!');
				}else{
					$.messager.alert('消息框','取消发布失败');
				}
				
			}
		}
	});
}




//del item
function del_item(){
	var obj = $('#item_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}else{
		$.messager.confirm('确认框','是否确认删除?',function(r){   
		    if (r){   
		    	$.ajax({
					type : 'POST',
					url : '/thirdItem/delItem?time='+new Date(),  
					data : {
						'itemId' : obj.itemId,
						'wxid':'7692'
					},
					contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
					dataType : 'json',
					success : function(data) {
						if(data.code==0){
							$.messager.alert('消息框','删除成功');
							$('#item_list_tab').datagrid("reload");
						}else{
							$.messager.alert('消息框','删除失败!');
						}
					}
				});
		    }   
		});
	}
	
}


