//编辑
function edit_qrcode(){
	$('#edit_qrcode').window('open');  
}


//设置QRcode配置
$('#edit_qrcode').window({
	title: '设置QRcode',
    width:500,   
    height:700,   
    modal:true,
    closed:true,
    shadow:true,
    minimizable:false,
    maximizable:false
});

// qrcode_submit
function qrcode_submit(){
	var itemId = $("#itemId").val();
	var Main   = $("#Main").val();
	var url    = $("#url").val();
	var wxid   = $("#wxid").val();
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/thirdQRcode/setQRcode?time="+new Date(),
         data: {
        	 "wxid":wxid,
        	 "itemId":itemId,
        	 "Main":Main,
        	 "url":url
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==0){
        		 $.messager.alert('提示','设置成功!');
        		 qrcode_cancel();
        		 $('#qrcode_list_tab').datagrid("reload");
        	 }else{
        		 $.messager.alert('提示','设置失败!'); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	  });
	
}

/** 取消 **/
function qrcode_cancel(){
	$('#edit_qrcode').window('close');
}




