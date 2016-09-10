//编辑
function edit_item(){
	var obj = $('#item_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj==null){
	   $.messager.alert('消息框','请在表格中选中需要编辑的数据!');	
	}
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdItem/getItemList?time="+new Date(),
         data: {
        	 "wxid":7692,
        	 "flag":"true",
        	 "itemId":obj.itemId
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result!=null){
        		    console.info(result);
        		    $("#edit_itemId").val(result[0].itemId);
        		    $("#edit_wxid").val(7692);
        			$("#edit_ticketType").val(result[0].ticketType);
        			$("#edit_TicketName").val(result[0].TicketName);
        			$("#edit_wxQRcode").val(result[0].wxQRcode);
        			$("#edit_QRcodeUrl").val(result[0].QRcodeUrl);
        			$("#edit_print_start_time").val(result[0].print_start_time);
        			$("#edit_print_end_time").val(result[0].print_end_time);
        			$("#edit_Count").val(result[0].Count);
        			$("#edit_staffId").val(result[0].staffId);
        			$("#edit_templateId").val(result[0].templateId);
        			$("#edit_quantity").val(result[0].quantity);
        			$("#edit_check_rule").val(result[0].rule);
        			$("#edit_place").val(decodeURI(decodeURI(result[0].place)));
        			$("#edit_support").val(result[0].support);
        			$("#edit_remark").val(decodeURI(decodeURI(result[0].remark)));
        	}else{
        		 $.messager.alert('提示','获取票券项目失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	$('#edit_item').window('open');  
}


//edit_item配置
$('#edit_item').window({
	title: '编辑item',
    width:500,   
    height:700,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// edit_item_submit
function edit_item_submit(){
	var itemId = $("#edit_itemId").val();
	var wxid = $("#edit_wxid").val();
	var ticketType = $("#edit_ticketType").val();
	var TicketName  = $("#edit_TicketName").val();
	var print_start_time = $("#edit_print_start_time").val();
	var print_end_time = $("#edit_print_end_time").val();
	var Count = $("#edit_Count").val();
	var staffId = $("#edit_staffId").val();
	var templateId = $("#edit_templateId").val();
	var wxQRcode   = $("#edit_wxQRcode").val();
	var QRcodeUrl  = $("#edit_QRcodeUrl").val();
	var quantity = $("#edit_quantity").val();
	var check_rule = $("#edit_check_rule").val();
	var place = $("#edit_place").val();
	var support = $("#edit_support").val();
	var remark = $("#edit_remark").val();
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdItem/editItem?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "itemId":itemId,
        	 "ticketType":ticketType,
        	 "TicketName":TicketName,
        	 "print_start_time":print_start_time,
        	 "print_end_time":print_end_time,
        	 "Count":Count,
        	 "staffId":staffId,
        	 "wxQRcode":wxQRcode,
        	 "QRcodeUrl":QRcodeUrl,
        	 "templateId":templateId,
        	 "quantity":quantity,
        	 "check_rule":check_rule,
        	 "place":place,
        	 "support":support,
        	 "remark":remark
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','修改票劵项目成功!');
        		 edit_item_cancel();
        		 $('#item_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','修改票劵项目失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function edit_item_cancel(){
	$('#edit_item').window('close');
}




