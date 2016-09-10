//编辑
function edit_template_image(){
	var obj = $('#template_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj==null){
	   $.messager.alert('消息框','请在表格中选中需要编辑的数据!');	
	}
	$("#edit_image_template_image_url").val(obj.url);
	$("#edit_image_wxid").val(obj.wxid);
	$("#edit_image_templateId").val(obj.id);
	$('#edit_image_template').window('open');  
}


//edit_image_template配置
$('#edit_image_template').window({
	title: '编辑template_image',
    width:500,   
    height:500,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// edit_image_submit
function edit_image_submit(){
	var wxid = $("#edit_image_wxid").val();
	var url  = $("#edit_image_template_image_url").val();
	var templateId = $("#edit_image_templateId").val();
	
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdTicket/editTicketTemplateImage?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "url":url,
        	 "templateId":templateId
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','修改票劵模板图片成功!');
        		 edit_image_cancel();
        		 $('#template_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','修改票劵模板图片失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function edit_image_cancel(){
	$('#edit_image_template').window('close');
}




