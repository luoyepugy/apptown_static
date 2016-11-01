
$(document).ready(function(){
	
	//datagrid
	$('#hotel_list_tab').datagrid({  
	    url:'/hotel/listByAdmin?time='+new Date(),   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center',hidden:true},
	        {field:'name',title:'酒店名称',width:200,align:'center'},
	        {field:'address',title:'酒店地址',width:200,align:'center'},
	        {field:'contacter',title:'联系人',width:200,align:'center'},
	        {field:'contacter_phone',title:'联系电话',width:200,align:'center'},
	        {field:'details',title:'酒店详情',width:200,align:'center',hidden:true},
	        {field:'icon',title:'图片',width:200,align:'center',hidden:true},
            {field:'star',title:'酒店星级',width:100,align:'center',formatter:formatType}
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{text:'删除',iconCls:'icon-cancel',handler:function(){  
			$.messager.confirm('确认框','你确定要删除活动吗?',function(r){   
			    if (r){   
			    	deteleHotel(); 
			    }   
			});
       }},'-',{
       	 text:'添加',
    	 iconCls:'icon-edit',
    	 handler:save_view
		},'-',{
        	 text:'编辑',
        	 iconCls:'icon-edit',
        	 handler:update_view
        },'-',{
            text:'查看详情',iconCls:'icon-view',handler:viewHotel
        },'-',]
	});
	
	/** 查看酒店详情 **/
	function viewHotel(){
		var objs = $('#hotel_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要查看的活动!');
		}else{
			if(objs.length>1){
				$.messager.alert('提示','一次只能查看一条！');
				return;
			}
			window.open("/activity/hotel_detail?hotelId="+objs[0].id, "", "height='100%', width='100%', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
		}
	}
	
	//page
    var p = $('#hotel_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
    //类型格式化
    function formatType(value){
    	 if (value=='1') {  
             return  '一星级';  
         }else if(value=='2'){
         	return '二星级';
         }else if(value=='3'){
         	return '三星级';
         }else if(value=='4'){
         	return '四星级';
         }else if(value=='5'){
         	return '五星级';
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
    
    //update
	function update_view(){
		var obj = $('#hotel_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要查看的酒店!');
		}else{
			window.open('/hotel/hotel_edit?id='+obj.id)
		}
	}
	
	/** 删除活动 **/
	function deteleHotel(){
		var obj = $('#hotel_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要删除的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/hotel/delete',
				data : {
					'id' : obj.id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data){
						$.messager.alert('消息框','删除成功');
						$('#hotel_list_tab').datagrid("reload");
					}
				}
			});
		}
		
	}
	
	 //save
	function save_view(){
		window.open('/hotel/hotel_edit');
	}
    
    //编辑handler
    function edit_view(){
		var obj = $('#hotel_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	
    	$("#id_edit").val(obj.id);
    	$("#name_edit").val(obj.name);
    	$("#icon_edit").attr("src",obj.icon);  
    	$("#address_edit").val(obj.address);
    	$("#contacter_edit").val(obj.contacter);
    	$("#phone_edit").val(obj.contacter_phone);
    	$("#details_edit").val(obj.details);
    	$("#star_edit option").eq(obj.star).attr("selected",true);
    	    	
		$('#edit_win').window('open');
    }  
	
    
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

	//查询
	function selectHotel() {
		var _grid = $('#hotel_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.name = $('#name').val();
		queryParams.address = $("#address").val(); 
		queryParams.star = $("#star").combobox('getValue'); 
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
	        	 if(result.code==0){
	        		 shenhe_cancel();
	        		 selectSponsorApply();
	        		 $.messager.alert('提示','编辑成功!');
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
		var id = $('#id_shenhe').val();
		var remark = $('#remark_shenhe').val().trim();
		var status = $('input:radio[name="status"]:checked').val();
		console.log("3");
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/sponsor/approval",
	         data: {
	        	 "id":id,
	        	 "remark":remark,
	        	 "status":status
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 selectSponsorApply();
	        		 shenhe_cancel();
	        		 $.messager.alert('提示','审核成功!');
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
	
	 //取消编辑
	function edit_cancel(){
		$("#id_edit").val("");
    	$("#name_edit").val("");
    	$("#icon_edit").val("");
    	$("#address_edit").val("");
    	$("#contacter_edit").val("");
    	$("#phone_edit").val("");
    	$("#details_edit").val("");
    	$("#star_edit option").eq(0).attr("selected",true);
    	$('#edit_win').window('close');
	}