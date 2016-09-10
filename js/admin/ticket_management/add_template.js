//新增
function add_template(){  
	$('#add_template').window('open');  
}


//add_template配置
$('#add_template').window({
	title: '新增template',
    width:500,   
    height:700,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// add submit
function add_submit(){
	var wxid = $("#wxid").val();
	var name = $("#template_name").val();
	var url  = $("#template_image_url").val();
	
	var repeat = $("#repeat").val();
	var head_x = $("#head_x").val();
	var head_y = $("#head_y").val();
	var head_w = $("#head_w").val();
	var head_h = $("#head_h").val();
	
	var QRcode_type = $("#QRcode_type").val();
	var QRcode_x = $("#QRcode_x").val();
	var QRcode_y = $("#QRcode_y").val();
	var QRcode_w = $("#QRcode_w").val();
	var QRcode_h = $("#QRcode_h").val();
	
	
	var title_show = $("#title_show").val();
	var title_value = $("#title_value").val();
	var title_font = $("#title_font").val();
	var title_size = $("#title_size").val();
	var title_r = $("#title_r").val();
	var title_g = $("#title_g").val();
	var title_b = $("#title_b").val();
	var title_x = $("#title_x").val();
	var title_y = $("#title_y").val();
	
	var subtitle_show = $("#subtitle_show").val();
	var subtitle_value = $("#subtitle_value").val();
	var subtitle_font = $("#subtitle_font").val();
	var subtitle_size = $("#subtitle_size").val();
	var subtitle_r = $("#subtitle_r").val();
	var subtitle_g = $("#subtitle_g").val();
	var subtitle_b = $("#subtitle_b").val();
	var subtitle_x = $("#subtitle_x").val();
	var subtitle_y = $("#subtitle_y").val();
	
	
	var nickname_show = $("#nickname_show").val();
	var nickname_font = $("#nickname_font").val();
	var nickname_size = $("#nickname_size").val();
	var nickname_r = $("#nickname_r").val();
	var nickname_g = $("#nickname_g").val();
	var nickname_b = $("#nickname_b").val();
	var nickname_x = $("#nickname_x").val();
	var nickname_y = $("#nickname_y").val();
	
	var duty_show = $("#duty_show").val();
    var duty_font = $("#duty_font").val();
	var duty_size = $("#duty_size").val();
	var duty_r = $("#duty_r").val();
	var duty_g = $("#duty_g").val();
	var duty_b = $("#duty_b").val();
	var duty_x = $("#duty_x").val();
	var duty_y = $("#duty_y").val();
	
	var company_show = $("#company_show").val();
    var company_font = $("#company_font").val();
	var company_size = $("#company_size").val();
	var company_r = $("#company_r").val();
	var company_g = $("#company_g").val();
	var company_b = $("#company_b").val();
	var company_x = $("#company_x").val();
	var company_y = $("#company_y").val();
	
	var seat_show = $("#seat_show").val();
	var seat_value = $("#seat_value").val();
	var seat_font = $("#seat_font").val();
	var seat_size = $("#seat_size").val();
	var seat_r = $("#seat_r").val();
	var seat_g = $("#seat_g").val();
	var seat_b = $("#seat_b").val();
	var seat_x = $("#seat_x").val();
	var seat_y = $("#seat_y").val();
	
	var ticketId_show  = $("#ticketId_show").val();
	var ticketId_value = $("#ticketId_value").val();
	var ticketId_font = $("#ticketId_font").val();
	var ticketId_size = $("#ticketId_size").val();
	var ticketId_r = $("#ticketId_r").val();
	var ticketId_g = $("#ticketId_g").val();
	var ticketId_b = $("#ticketId_b").val();
	var ticketId_x = $("#ticketId_x").val();
	var ticketId_y = $("#ticketId_y").val();
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdTicket/addTicketTemplate?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "name":name,
        	 "url":url,
        	 "repeat":repeat,
        	 "head_x":head_x,
        	 "head_y":head_y,
        	 "head_w":head_w,
        	 "head_h":head_h,
        	 "QRcode_type":QRcode_type,
        	 "QRcode_x":QRcode_x,
        	 "QRcode_y":QRcode_y,
        	 "QRcode_w":QRcode_w,
        	 "QRcode_h":QRcode_h,
        	 "title_show":title_show,
        	 "title_value":title_value,
        	 "title_font":title_font,
        	 "title_size":title_size,
        	 "title_r":title_r,
        	 "title_g":title_g,
        	 "title_b":title_b,
        	 "title_x":title_x,
        	 "title_y":title_y,
        	 "subtitle_show":subtitle_show,
        	 "subtitle_value":subtitle_value,
        	 "subtitle_font":subtitle_font,
        	 "subtitle_size":subtitle_size,
        	 "subtitle_r":subtitle_r,
        	 "subtitle_g":subtitle_g,
        	 "subtitle_b":subtitle_b,
        	 "subtitle_x":subtitle_x,
        	 "subtitle_y":subtitle_y,
        	 "nickname_show":nickname_show,
        	 "nickname_font":nickname_font,
        	 "nickname_size":nickname_size,
        	 "nickname_r":nickname_r,
        	 "nickname_g":nickname_g,
        	 "nickname_b":nickname_b,
        	 "nickname_x":nickname_x,
        	 "nickname_y":nickname_y,
        	 "duty_show":duty_show,
        	 "duty_font":duty_font,
        	 "duty_size":duty_size,
        	 "duty_r":duty_r,
        	 "duty_g":duty_g,
        	 "duty_b":duty_b,
        	 "duty_x":duty_x,
        	 "duty_y":duty_y,
        	 "company_show":company_show,
        	 "company_font":company_font,
        	 "company_size":company_size,
        	 "company_r":company_r,
        	 "company_g":company_g,
        	 "company_b":company_b,
        	 "company_x":company_x,
        	 "company_y":company_y,
        	 "seat_show":seat_show,
        	 "seat_font":seat_font,
        	 "seat_value":seat_value,
        	 "seat_size":seat_size,
        	 "seat_r":seat_r,
        	 "seat_g":seat_g,
        	 "seat_b":seat_b,
        	 "seat_x":seat_x,
        	 "seat_y":seat_y,
        	 "ticketId_show":ticketId_show,
        	 "ticketId_font":ticketId_font,
        	 "ticketId_value":ticketId_value,
        	 "ticketId_size":ticketId_size,
        	 "ticketId_r":ticketId_r,
        	 "ticketId_g":ticketId_g,
        	 "ticketId_b":ticketId_b,
        	 "ticketId_x":ticketId_x,
        	 "ticketId_y":ticketId_y
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','新增票劵模板成功!');
        		 add_cancel();
        		 $('#template_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','新增票劵模板失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function add_cancel(){
	$('#add_template').window('close');
}




