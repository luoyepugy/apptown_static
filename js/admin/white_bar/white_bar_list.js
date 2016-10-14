
$(document).ready(function(){
	
	//datagrid
	$('#sponsor_apply_list_tab').datagrid({  
	    url:'/baitiao/query_page_baitiao?time='+new Date(),   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center'},
	        {field:'user_id',title:'用户ID',width:100,align:'center'},
	        {field:'name',title:'姓名',width:200,align:'center'},
	        {field:'sex',title:'性别',width:200,align:'center',formatter:sex},
	        {field:'phone',title:'手机号码',width:100,align:'center'},
	        {field:'apply_money',title:'申请金额(元)',width:100,align:'center'},
	        {field:'periods',title:'期数',width:100,align:'center'},
	        {field:'contact_status',title:'联系状态',width:200,align:'center',formatter:formatStatus}, 
	        {field:'user_remark',title:'用户备注',width:200,align:'center'},
	        {field:'remark',title:'审核备注',width:200,align:'center'},
	        {field:'create_time',title:'申请时间',width:200,align:'center',formatter:formatTime},
	        {field:'activity_name',title:'活动主办方',width:200,align:'center'},
	        {field:'sponsor',title:'活动名称',width:200,align:'center'}
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[
		{
        	 text:'查看',
        	 iconCls:'icon-edit',
        	 handler:detail
        },'-',{
       	 text:'审核',
    	 iconCls:'icon-edit',
    	 handler:shenhe_view
        },'-',{
			text:'删除',
			iconCls:'icon-remove',
			handler:function(){  
				$.messager.confirm('确认框','删除后无法恢复?',function(r){   
				    if (r){  
				    	var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");//获取表格选中行数据
				    	$.ajax({
							type : 'POST',
							url : '/baitiao/delete_baitiao',
							data : {
								'id' : obj.id
							},
							contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
							dataType : 'json',
							success : function(data) {
								if(data.code==0){
									$.messager.alert('消息框','删除成功');
									$('#sponsor_apply_list_tab').datagrid("reload");
								}else{
									$.messager.alert('消息框',data.msg);
								}
							}
						});
				    }   
				}); 
	    }
		},
    ]
	});
	
	//page
    var p = $('#sponsor_apply_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
    //状态格式化
    function formatStatus(value){
     	if(value == '1'){
     		return '审核中';
     	}else if(value == '2'){
     		return '审核成功';
     	}else if(value=='3'){
     		return '审核失败';
     	}else if(value=='4'){
     		return '已放款';
     	}
     }
    
    function sex(value){
    	if(value == '1'){
    		return '男';
    	}else if(value == '2'){
    		return '女';
    	}
    }
    
    //时间格式化
    function formatTime(value){
    	if(value != undefined){
 			return dateForamtShow(value);
 		}else{
 			return '';
 		}
     }
    
    //查看handler
    function show_view(){  
    	$('#show_win').window('open');  
    }
    
    //审核handler
    function shenhe_view(){ 
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
		$("#id").val(obj.id);
		$('#shenhe_win').window('open'); 
		
    }
    
    //编辑handler
    function detail(){
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	//debugger
    	$("#user_id").html(obj.user_id);
    	$("#name").html(obj.name);
    	$("#sex").html(sex(obj.sex));  
    	$("#phone_detail").html(obj.phone);
    	$("#apply_money").html(obj.apply_money);
    	$("#user_remark").html(obj.user_remark);
    	
		$('#detail').window('open');
    }  
	
	//shenhe_win配置
	$('#shenhe_win').window({
		title: '审核',
	    width:400,   
	    height:200,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
    //edit_win配置
	$('#detail').window({
		title: '详情',
	    width:400,   
	    height:400,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	//时间格式化 (公用)
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
	
   });

	//主办方申请查询
	function selectSponsorApply() {
		var _grid = $('#sponsor_apply_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.phone = $('#phone').val();
		queryParams.contact_status = $("#contact_status").combobox('getValue'); 
		queryParams.id=$("#id").val();
		_grid .datagrid('reload');
	}

	//编辑
	function edit() {
		
		var id = $('#id_edit').val();
		var user_id = $('#user_id_edit').val();
		var sponsor_icon =$('#sponsor_icon_edit').attr('src');
		var name = $('#name_edit').val().trim();
		var contacter = $('#contacter_edit').val().trim();
		var contacter_phone = $('#contacter_phone_edit').val().trim();
		var contacter_email = $('#contacter_email_edit').val().trim();
		var introduction = $('#introduction_edit').val().trim();
		var home_page= $('#home_page_edit').val().trim();
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/sponsor/edit_sponsor_apply",
	         data: {
	        	 "id":id,
	        	 "sponsor_icon":sponsor_icon,
	        	 "name":name,
	        	 "contacter":contacter,
	        	 "contacter_phone":contacter_phone,
	        	 "contacter_email":contacter_email,
	        	 "introduction":introduction,
	        	 "user_id":user_id,
	        	 "home_page":home_page
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==1){
	        		 $.messager.alert('提示','编辑成功!');
	        		 edit_cancel();
	        		 selectSponsorApply();
	        	 }else{
	        		 $.messager.alert('提示',result.msg); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	      }); 
	}
	
	//审核
	function shenhe() {

		var id = $('#id').val();
		var remark = $('#remark').val().trim();
		var contact_status = $('input:radio[name="contact_status"]:checked').val();
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/baitiao/upate_baitiao",
	         data: {
	        	 "id":id,
	        	 "remark":remark,
	        	 "contact_status":contact_status
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 $.messager.alert('提示','审核成功!');
	        		    shenhe_cancel();
	        		    selectSponsorApply();
	        	 }else{
	        		 $.messager.alert('提示',result.msg); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	      }); 
	}
	
	
	//取消审核
	function shenhe_cancel(){
    	$("#remark_shenhe").val("");
    	$("#id_shenhe").val("");
    	$("input[name='status']").eq(0).attr("checked","checked");
	    $('#shenhe_win').window('close');
	}
	function detail_close(){
		$('#detail').window('close');
	}
	
	 //取消编辑
	/*function edit_cancel(){
    	$("#id_edit").val("");
    	$("#sponsor_icon_edit").val("");
    	$("#name_edit").val("");
    	$("#contacter_edit").val("");
    	$("#contacter_phone_edit").val("");
    	$("#contacter_email_edit").val("");
    	$("#introduction_edit").val("");
    	$("#home_page_edit").val("");
    	$('#edit_win').window('close');
	}*/