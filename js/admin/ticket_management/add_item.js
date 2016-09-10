//新增
function add_item(){  
	$('#add_item').window('open');  
}


//add_item配置
$('#add_item').window({
	title: '新增item',
    width:500,   
    height:600,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// add submit
function add_item_submit(){
	var wxid = $("#wxid").val();
	var ticketType = $("#ticketType").val();
	var TicketName  = $("#TicketName").val();
	
	var print_start_time = $("#print_start_time").val();
	var print_end_time = $("#print_end_time").val();
	var Count = $("#Count").val();
	var staffId = $("#staffId").val();
	var templateId = $("#templateId").val();
	var wxQRcode   = $("#wxQRcode").val();
	var QRcodeUrl  = $("#QRcodeUrl").val();
	var quantity = $("#quantity").val();
	var check_rule = $("#check_rule").val();
	var place = $("#place").val();
	var support = $("#support").val();
	var remark = $("#remark").val();
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdItem/addItem?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "ticketType":ticketType,
        	 "TicketName":TicketName,
        	 "print_start_time":print_start_time,
        	 "print_end_time":print_end_time,
        	 "Count":Count,
        	 "staffId":staffId,
        	 "templateId":templateId,
        	 "wxQRcode":wxQRcode,
        	 "QRcodeUrl":QRcodeUrl,
        	 "quantity":quantity,
        	 "check_rule":check_rule,
        	 "place":place,
        	 "support":support,
        	 "remark":remark
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','新增票劵项目成功!');
        		 add_item_cancel();
        		 $('#item_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','新增票劵项目失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function add_item_cancel(){
	$('#add_item').window('close');
}




