
$(document).ready(function(){
	
	//datagrid
	$('#sponsor_apply_list_tab').datagrid({  
	    url:'/picture/get_image_list?time='+new Date(),   
	    columns:[[ 
	        {field:'id',title:'id 编号',width:100,align:'center',hidden:false},
	        {field:'type_id',title:'节点类型',width:100,align:'center',hidden:true},
	        {field:'fatherName',title:'类型',width:200,align:'center'},
	        {field:'value',title:'类型名称/地址',width:100,align:'center'}
	        //{field:'user_sex',title:'性别',width:200,align:'center',formatter:formatSex}
	    ]],
	    onLoadSuccess: function () {  //当数据载入完成后执行  
            var rows = $(this).datagrid('getRows'); //获得当前页！当前页！当前页！的所有行  
            $.each(rows, function (index, data) { //开始循环行数据  
                var fatherName = data.fatherName; //获得需要进行判断的数据（到达时间 列 下的数据）  
                if (fatherName=='根节点') { //当存在数据执行
                        var $_tr = $('.datagrid-btable').find("tr[datagrid-row-index='" + index + "']"); //这段代码中所有的属性名，属性值都是通过查看页面元素得到。是固有规律。  
                        $($_tr).find("td[field='fatherName']").each(function(i){
                            //$(this).css('background-color', '#FF0000'); //改变颜色
                         });
                }  
            })  
        },
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{
	       	 text:'添加节点',
	    	 iconCls:'icon-edit',
	    	 handler:save_view
			},'-',{
	       	 text:'添加图片',
	    	 iconCls:'icon-edit',
	    	 handler:save_view2
			},'-',{text:'删除',iconCls:'icon-cancel',handler:deleteAlert
			},'-',{
        	 text:'编辑',
        	 iconCls:'icon-edit',
        	 handler:edit_view
        },'-',{
            text:'查看图片',iconCls:'icon-view',handler:showView
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
    
    //性别格式化
    function formatSex(value){
    	 if (value=='1') {  
             return  '男';  
         }else if(value=='2'){
         	return '女';
         }
     }
    //deleteAlert
    function deleteAlert(){
    	var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	var msg;
    	if(obj.type_id==0){
    		msg = "你确定要删除该节点吗？删除后该节点下的所有图片都会被删除！";
    	}else{
    		msg = "你确定要删除该图片吗？";
    	}
		$.messager.confirm('确认框',msg,function(r){   
		    if (r){
		    	detele(); 
		    }   
		});
   }
    
    //查看图片
	function showView(){
		var objs = $('#sponsor_apply_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要查看的图片!');
		}else{
			if(objs.length>1){
				$.messager.alert('提示','一次只能查看一条！');
				return;
			}
			if(objs[0].type_id==0){
				$.messager.alert('提示','请选择图片节点！');
				return;
			}
			window.open(objs[0].value, "", "height='100%', width='100%', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
		}
	}
    
    //查看handler
    function show_view(){  
    	$('#show_win').window('open');  
    }
    
    //编辑handler
    function edit_view(){
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	
    	$("#id_edit").val(obj.id);
    	$("#type_id_edit").val(obj.type_id);
    	if(obj.type_id==0){
    		$("#value_edit").val(obj.value);
    		$('#edit_win2').window('open');
    	}else{
    		//获取所有根节点
    		$.ajax({
				type : 'GET',
				url : '/picture/all?filter=0',
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					var indexOption;
					 $.each(data, function(n, object) {
						 if(object.id == obj.type_id){
							 indexOption = "<option value='"+object.id+"'>"+object.value+"</option>";
							 return true;
						 }
						 $("#type_edit").append("<option value='"+object.id+"'>"+object.value+"</option>");
					 });
					 $("#type_edit").prepend(indexOption);
					 $("#type_edit").get(0).selectedIndex = 0;
				}
			});
    		$("#sponsor_icon_edit").attr("src",obj.value);
    		$('#edit_win').window('open');
    	}
    }
    
    //删除
	function detele(){
		var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要删除的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/picture/delete',
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
    
    //edit_win配置,修改图片
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
	
	 //edit_win配置,修改节点名称
	$('#edit_win2').window({
		title: '编辑',
	    width:400,   
	    height:700,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	 //save_win配置,新增节点
	$('#save_win').window({
		title: '编辑',
	    width:400,   
	    height:700,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	 //save_win配置,新增图片
	$('#save_win2').window({
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
		queryParams.type=$("#select_type").val();
		_grid .datagrid('reload');
	}


	//编辑提交
	function edit() {
		
		var id = $('#id_edit').val();
		var type_id = $('#type_id_edit').val();
		var select_type_id = $('#type_edit').val();
		var sponsor_icon =$('#sponsor_icon_edit').attr('src');
		var value = $('#value_edit').val().trim();
		if(type_id==0){
			if(!value){
				$.messager.alert('提示','请填写节点名称');
				return;
			}
		}else{
			if(!sponsor_icon){
				$.messager.alert('提示','请上传图片');
				return;
			}
			type_id = select_type_id;
		}
		
		if(!value){
			value = sponsor_icon;
		}
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/picture/save_or_update",
	         data: {
	        	 "id":id,
	        	 //"sponsor_icon":sponsor_icon,
	        	 "type_id":type_id,
	        	 "value":value
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 //shenhe_cancel();
	        		 selectSponsorApplyByType();
	        		 $.messager.alert('提示','编辑成功!');
	        		 $('#edit_win').window('close');
	        		 $('#edit_win2').window('close');
	        	 }else{
	        		 $.messager.alert('提示',result.msg); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	      });
		edit_cancel();
	}
	
	 //save_view新增节点
    function save_view(){
    	edit_cancel();
		$('#save_win').window('open');
    }
    
    //save_view 给节点新增图片
    function save_view2(){
    	edit_cancel();
    	var obj = $('#sponsor_apply_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj.type_id!=0){
			$.messager.alert('提示', '请选择根节点添加图片!', 'warning');
			return;
		}
		$("#id_edit").val(obj.id);
		$("#type_id_edit").val(obj.type_id);
		$('#save_win2').window('open');
    }
	
	//新增提交
	function save() {
		var id = $('#id_edit').val();
		var sponsor_icon =$('#sponsor_icon_edit2').attr('src');
		var type_id = $('#type_id_edit').val();
		var value = $('#save_value').val().trim();
		if(!id){
			if(!value && !type_id){
				$.messager.alert('提示','请填写节点名称');
				return;
			}
		}else{
			if(!sponsor_icon){
				$.messager.alert('提示','请上传图片');
				return;
			}
			type_id = id;
		}
		if(!value){
			value = sponsor_icon;
		}

		console.log("type_id = "+type_id + " value = "+value);
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/picture/save_or_update",
	         data: {
	        	 //"sponsor_icon":sponsor_icon,
	        	 "type_id":type_id,
	        	 "value":value
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 //shenhe_cancel();
	        		 selectSponsorApplyByType();
	        		 $.messager.alert('提示','编辑成功!');
	        		 $('#save_win').window('close');
	        		 $('#save_win2').window('close');
	        	 }else{
	        		 $.messager.alert('提示',result.msg); 
	        	 }
	         },
	         error: function(res){
	         }, 
	         complete:function(){
			} 
	      });
		edit_cancel();
	}
	
	 //取消编辑
	function edit_cancel(){
    	$("#id_edit").val("");
    	$('#type_id_edit').val("");
    	$("#sponsor_icon_edit").attr('src',"");
    	$("#sponsor_icon_edit2").attr('src',"");
    	$("#value_edit").val("");
    	$("#save_value").val("");
    	$("#type_edit").empty();
    	$('#edit_win').window('close');
    	$('#edit_win2').window('close');
    	$('#save_win').window('close');
    	$('#save_win2').window('close');
	}