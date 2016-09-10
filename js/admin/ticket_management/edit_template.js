//编辑
function edit_template(){
	var obj = $('#template_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj==null){
	   $.messager.alert('消息框','请在表格中选中需要编辑的数据!');	
	}
	$("#edit_template_name").val(decodeURI(obj.name));
	$("#edit_template_image_url").val(obj.url);
	$("#edit_wxid").val(obj.wxid);
	$("#templateId").val(obj.id);
	var config = obj.configMap ;
	console.info(config);
	$.each(config,function(key,values){
		if(key=='repeat'){
			console.info(this.repeat);
    	  	$("#edit_repeat").val(config['repeat']);
    	}
		$(values).each(function(){
	        if(key=='head'){
	    		$("#edit_head_x").val(this.x);
	    		$("#edit_head_y").val(this.y);
	    		$("#edit_head_w").val(this.w);
	    		$("#edit_head_h").val(this.h);
	    	}else if(key=='QRcode'){
	    		$("#edit_QRcode_w").val(this.w);
	    		$("#edit_QRcode_h").val(this.h);
	    		$("#edit_QRcode_x").val(this.x);
	    		$("#edit_QRcode_y").val(this.y);
	    		$("#edit_QRcode_type").val(this.type);
	    	}else if(key=='title'){
	    		$("#edit_title_value").val(decodeURI(this.value));
	    		$("#edit_title_show").val(this.show);
	    		$("#edit_title_x").val(this.x);
	    		$("#edit_title_y").val(this.y);
	    		$("#edit_title_font").val(this.font);
	    		$("#edit_title_size").val(this.size);
	    		$("#edit_title_r").val(this.color.r);
	    		$("#edit_title_g").val(this.color.g);
	    		$("#edit_title_b").val(this.color.b);
	    	}else if(key=='subtitle'){
	    		$("#edit_subtitle_value").val(decodeURI(this.value));
	    		$("#edit_subtitle_show").val(this.show);
	    		$("#edit_subtitle_x").val(this.x);
	    		$("#edit_subtitle_font").val(this.font);
	    		$("#edit_subtitle_y").val(this.y);
	    		$("#edit_subtitle_size").val(this.size);
	    		$("#edit_subtitle_r").val(this.color.r);
	    		$("#edit_subtitle_g").val(this.color.g);
	    		$("#edit_subtitle_b").val(this.color.b);
	    	}else if(key=='nickname'){
	    		$("#edit_nickname_show").val(this.show);
	    		$("#edit_nickname_x").val(this.x);
	    		$("#edit_nickname_y").val(this.y);
	    		$("#edit_nickname_font").val(this.font);
	    		$("#edit_nickname_size").val(this.size);
	    		$("#edit_nickname_r").val(this.color.r);
	    		$("#edit_nickname_g").val(this.color.g);
	    		$("#edit_nickname_b").val(this.color.b);
	    	}else if(key=='duty'){
	    		$("#edit_duty_show").val(this.show);
	    		$("#edit_duty_x").val(this.x);
	    		$("#edit_duty_y").val(this.y);
	    		$("#edit_duty_font").val(this.font);
	    		$("#edit_duty_size").val(this.size);
	    		$("#edit_duty_r").val(this.color.r);
	    		$("#edit_duty_g").val(this.color.g);
	    		$("#edit_duty_b").val(this.color.b);
	    	}else if(key=='company'){
	    		$("#edit_company_show").val(this.show);
	    		$("#edit_company_x").val(this.x);
	    		$("#edit_company_y").val(this.y);
	    		$("#edit_company_font").val(this.font);
	    		$("#edit_company_size").val(this.size);
	    		$("#edit_company_r").val(this.color.r);
	    		$("#edit_company_g").val(this.color.g);
	    		$("#edit_company_b").val(this.color.b);
	    	}else if(key=='seat'){
	    		$("#edit_seat_show").val(this.show);
	    		$("#edit_seat_x").val(this.x);
	    		$("#edit_seat_y").val(this.y);
				$("#edit_seat_value").val(decodeURI(this.value));
	    		$("#edit_seat_font").val(this.font);
	    		$("#edit_seat_size").val(this.size);
	    		$("#edit_seat_r").val(this.color.r);
	    		$("#edit_seat_g").val(this.color.g);
	    		$("#edit_seat_b").val(this.color.b);
	    	}else if(key=='ticketId'){
	    		$("#edit_ticketId_show").val(this.show);
	    		$("#edit_ticketId_x").val(this.x);
	    		$("#edit_ticketId_y").val(this.y);
				$("#edit_ticketId_value").val(decodeURI(this.value));
	    		$("#edit_ticketId_font").val(this.font);
	    		$("#edit_ticketId_size").val(this.size);
	    		$("#edit_ticketId_r").val(this.color.r);
	    		$("#edit_ticketId_g").val(this.color.g);
	    		$("#edit_ticketId_b").val(this.color.b);
	    	}	
	     });
	});
	$('#edit_template').window('open');  
}


//edit_template配置
$('#edit_template').window({
	title: '编辑template',
    width:500,   
    height:700,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// edit_submit
function edit_submit(){
	var wxid = $("#edit_wxid").val();
	var name = $("#edit_template_name").val();
	var url  = $("#edit_template_image_url").val();
	var templateId = $("#templateId").val();
	var repeat = $("#edit_repeat").val();
	var head_x = $("#edit_head_x").val();
	var head_y = $("#edit_head_y").val();
	var head_w = $("#edit_head_w").val();
	var head_h = $("#edit_head_h").val();
	
	var QRcode_type = $("#edit_QRcode_type").val();
	var QRcode_x = $("#edit_QRcode_x").val();
	var QRcode_y = $("#edit_QRcode_y").val();
	var QRcode_w = $("#edit_QRcode_w").val();
	var QRcode_h = $("#edit_QRcode_h").val();
	
	
	var title_show = $("#edit_title_show").val();
	var title_value = $("#edit_title_value").val();
	var title_font = $("#edit_title_font").val();
	var title_size = $("#edit_title_size").val();
	var title_r = $("#edit_title_r").val();
	var title_g = $("#edit_title_g").val();
	var title_b = $("#edit_title_b").val();
	var title_x = $("#edit_title_x").val();
	var title_y = $("#edit_title_y").val();
	
	var subtitle_show = $("#edit_subtitle_show").val();
	var subtitle_value = $("#edit_subtitle_value").val();
	var subtitle_font = $("#edit_subtitle_font").val();
	var subtitle_size = $("#edit_subtitle_size").val();
	var subtitle_r = $("#edit_subtitle_r").val();
	var subtitle_g = $("#edit_subtitle_g").val();
	var subtitle_b = $("#edit_subtitle_b").val();
	var subtitle_x = $("#edit_subtitle_x").val();
	var subtitle_y = $("#edit_subtitle_y").val();
	
	
	var nickname_show = $("#edit_nickname_show").val();
	var nickname_font = $("#edit_nickname_font").val();
	var nickname_size = $("#edit_nickname_size").val();
	var nickname_r = $("#edit_nickname_r").val();
	var nickname_g = $("#edit_nickname_g").val();
	var nickname_b = $("#edit_nickname_b").val();
	var nickname_x = $("#edit_nickname_x").val();
	var nickname_y = $("#edit_nickname_y").val();
	
	var duty_show = $("#edit_duty_show").val();
    var duty_font = $("#edit_duty_font").val();
	var duty_size = $("#edit_duty_size").val();
	var duty_r = $("#edit_duty_r").val();
	var duty_g = $("#edit_duty_g").val();
	var duty_b = $("#edit_duty_b").val();
	var duty_x = $("#edit_duty_x").val();
	var duty_y = $("#edit_duty_y").val();
	
	var company_show = $("#edit_company_show").val();
    var company_font = $("#edit_company_font").val();
	var company_size = $("#edit_company_size").val();
	var company_r = $("#edit_company_r").val();
	var company_g = $("#edit_company_g").val();
	var company_b = $("#edit_company_b").val();
	var company_x = $("#edit_company_x").val();
	var company_y = $("#edit_company_y").val();
	
	var seat_show = $("#edit_seat_show").val();
	var seat_value = $("#edit_seat_value").val();
	var seat_font = $("#edit_seat_font").val();
	var seat_size = $("#edit_seat_size").val();
	var seat_r = $("#edit_seat_r").val();
	var seat_g = $("#edit_seat_g").val();
	var seat_b = $("#edit_seat_b").val();
	var seat_x = $("#edit_seat_x").val();
	var seat_y = $("#edit_seat_y").val();
	
	var ticketId_show = $("#edit_ticketId_show").val();
	var ticketId_value = $("#edit_ticketId_value").val();
	var ticketId_font = $("#edit_ticketId_font").val();
	var ticketId_size = $("#edit_ticketId_size").val();
	var ticketId_r = $("#edit_ticketId_r").val();
	var ticketId_g = $("#edit_ticketId_g").val();
	var ticketId_b = $("#edit_ticketId_b").val();
	var ticketId_x = $("#edit_ticketId_x").val();
	var ticketId_y = $("#edit_ticketId_y").val();
	
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdTicket/editTicketTemplate?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "name":name,
        	 "url":url,
        	 "templateId":templateId,
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
        		 $.messager.alert('提示','修改票劵模板成功!');
        		 edit_cancel();
        		 $('#template_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','修改票劵模板失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function edit_cancel(){
	$('#edit_template').window('close');
}




