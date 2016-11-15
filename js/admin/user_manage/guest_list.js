
$(document).ready(function(){
	
	//datagrid
	$('#sponsor_apply_list_tab').datagrid({  
	    url:'/sponsor/get_guest_list?time='+new Date(),   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center',hidden:true},
	        {field:'user_id',title:'账户id',width:100,align:'center'},
	        {field:'user_account',title:'登入帐号',width:100,align:'center'},
	        {field:'name',title:'嘉宾名称',width:200,align:'center'},
	        {field:'user_sex',title:'性别',width:200,align:'center',formatter:formatSex},
	        {field:'contacter_phone',title:'联系手机',width:100,align:'center'},
	        {field:'sign_sum',title:'参与活动数',width:100,align:'center'},
	        {field:'introduction',title:'简介',width:200,align:'center',hidden:true},
	        {field:'home_page',title:'官方主页链接',width:100,align:'center',hidden:true},
	        {field:'sponsor_icon',title:'嘉宾头像',width:100,align:'center',hidden:true},
	        
            {field:'create_date',title:'创建时间',width:300,align:'center',hidden:true,formatter:formatTime},
            {field:'type_id',title:'申请类型',width:100,align:'center',hidden:true,formatter:formatType},
	        {field:'status',title:'状态',width:200,align:'center',hidden:true,formatter:formatStatus},  
	        {field:'remark',title:'备注',width:200,align:'center',hidden:true}
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{
	       	 text:'添加',
	    	 iconCls:'icon-edit',
	    	 handler:save_view
			},'-',{text:'删除',iconCls:'icon-cancel',handler:function(){  
			$.messager.confirm('确认框','你确定要删除该嘉宾吗?',function(r){   
			    if (r){   
			    	deteleGuest(); 
			    }   
			});
       }},'-',{
        	 text:'编辑',
        	 iconCls:'icon-edit',
        	 handler:edit_view
        }
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
    
    //类型格式化
    function formatType(value){
    	 if (value=='0') {  
             return  '活动号';  
         }else if(value=='1'){
         	return '嘉宾号';
         }else if(value=='2'){
         	return '媒体号';
         }
     }
    
    //性别格式化
    function formatSex(value){
    	 if (value=='1') {  
             return  '男';  
         }else if(value=='2'){
         	return '女';
         }
     }
    
    //状态格式化
    function formatStatus(value){
     	if(value == '3'){
     		return '待审核';
     	}else if(value == '1'){
     		return '通过';
     	}else if(value == '2'){
     		return '拒绝';
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
//    function shenhe_view(){ 
//		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
//    	if(obj== null){
//            $.messager.alert('提示', '请选择一条记录!', 'warning');
//            return;
//        }
//		$("#id_shenhe").val(obj.id);
//		if(obj.status == '3'){
//			$('#shenhe_win').window('open'); 
//		}else{
//			$.messager.alert('提示','这条已经审核过!');   
//		}
//    }
    
    //save_view
    function save_view(){
    	edit_cancel();
		$('#edit_win').window('open');
    }  
    
    //编辑handler
    function edit_view(){
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	
    	$("#id_edit").val(obj.id);
    	$("#user_id_edit").val(obj.user_id);
    	$("#sponsor_icon_edit").attr("src",obj.sponsor_icon);  
    	$("#name_edit").val(obj.name);
    	$("#contacter_edit").val(obj.contacter);
    	$("#contacter_phone_edit").val(obj.contacter_phone);
    	//$("#contacter_email_edit").val(obj.contacter_email);
    	$("#introduction_edit").val(obj.introduction);
    	//$("#home_page_edit").val(obj.home_page);
    	$("#sex_edit").get(0).selectedIndex = obj.user_sex-1;
    	
		$('#edit_win').window('open');
    }
    
    //删除嘉宾
	function deteleGuest(){
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要删除的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/sponsor/admin_delete_guest',
				data : {
					'id' : obj.id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data){
						$.messager.alert('消息框','删除成功');
						$('#sponsor_apply_list_tab').datagrid("reload");
					}
				}
			});
		}
		
	}
	
	//shenhe_win配置
//	$('#shenhe_win').window({
//		title: '审核',
//	    width:400,   
//	    height:200,   
//	    modal:true,
//	    closed:true,
//	    shadow:true,
//	    minimizable:false,
//	    maximizable:false
//	});
    
    //edit_win配置
	$('#edit_win').window({
		title: '编辑',
	    width:400,   
	    height:700,   
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

	//根据申请类型查询
	function selectSponsorApplyByType() {
		var _grid = $('#sponsor_apply_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		//queryParams.user_id = $('#user_id').val();
		//queryParams.status = $("#status").combobox('getValue'); 
		//queryParams.type = $("#type").combobox('getValue'); 
		queryParams.name=$("#name").val();
		_grid .datagrid('reload');
	}


	//编辑
	function edit(flag) {
		
		var id = $('#id_edit').val();
		var user_id = $('#user_id_edit').val();
		var sponsor_icon =$('#sponsor_icon_edit').attr('src');
		var name = $('#name_edit').val().trim();
		var contacter = $('#contacter_edit').val().trim();
		var contacter_phone = $('#contacter_phone_edit').val().trim();
		var sex = $('#sex_edit').val();
		var introduction = $('#introduction_edit').val().trim();
		//var home_page= $('#home_page_edit').val().trim();
		//var contacter_email = $('#contacter_email_edit').val().trim();
		
		if(!sponsor_icon){
			$.messager.alert('提示','请上传嘉宾头像');
			return;
		}
		if(!name){
			$.messager.alert('提示','请填写嘉宾姓名');
			return;
		}
		if(!contacter){
			$.messager.alert('提示','请填写职务岗位/行业');
			return;
		}
		if(!contacter_phone){
			$.messager.alert('提示','请填写联系电话');
			return;
		}
		if(!introduction){
			$.messager.alert('提示','请填写主办方简介');
			return;
		}
		
		var url;
		if(id){
			url = "/sponsor/edit_sponsor_apply";
		}else{
			url = "/sponsor/admin_add_guest";
		}
		if(flag){
			user_id = flag;
		}
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  url,
	         data: {
	        	 "id":id,
	        	 "sponsor_icon":sponsor_icon,
	        	 "name":name,
	        	 "sex":sex,
	        	 "contacter":contacter,
	        	 "contacter_phone":contacter_phone,
	        	 //"contacter_email":contacter_email,
	        	 "introduction":introduction,
	        	 "user_id":user_id
	        	 //"home_page":home_page
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 //shenhe_cancel();
	        		 selectSponsorApplyByType();
	        		 $.messager.alert('提示','编辑成功!');
	        		 $('#edit_win').window('close');
	        	 }else if(result.code==-2){
	        		 $.messager.confirm("确认",result.msg, function (r) {  
	        		        if (r) {
	        		        	edit(result.info);
	        		        }  
	        		 });  
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
//	function shenhe() {
//		var id = $('#id_shenhe').val();
//		var remark = $('#remark_shenhe').val().trim();
//		var status = $('input:radio[name="status"]:checked').val();
//		console.log("3");
//		$.ajax({ 
//	        type: "POST", 
//	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
//	         url:  "/sponsor/approval",
//	         data: {
//	        	 "id":id,
//	        	 "remark":remark,
//	        	 "status":status
//	         }, 
//	         dataType: 'json', 
//	         success: function(result) {
//	        	 if(result.code==0){
//	        		 selectSponsorApply();
//	        		 shenhe_cancel();
//	        		 $.messager.alert('提示','审核成功!');
//	        	 }else{
//	        		 $.messager.alert('提示',result.msg); 
//	        	 }
//	         },
//	         error: function(res){
//	         }, 
//	         complete:function(){
//			} 
//	      }); 
//	}
	
	//取消审核
//	function shenhe_cancel(){
//    	$("#remark_shenhe").val("");
//    	$("#id_shenhe").val("");
//    	$("input[name='status']").eq(0).attr("checked","checked");
//	    $('#shenhe_win').window('close');
//	}
	
	 //取消编辑
	function edit_cancel(){
    	$("#id_edit").val("");
    	$('#user_id_edit').val("");
    	$("#sponsor_icon_edit").attr('src',""); 
    	$("#name_edit").val("");
    	$("#contacter_edit").val("");
    	$("#contacter_phone_edit").val("");
    	$("#contacter_email_edit").val("");
    	$("#introduction_edit").val("");
    	$("#home_page_edit").val("");
    	$("#sex_edit").get(0).selectedIndex = 0;
    	$('#edit_win').window('close');
	}