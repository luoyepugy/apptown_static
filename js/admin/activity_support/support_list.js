$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#support_list_tab').datagrid({   
	    url:'/support/queryActivitySupport?time='+new Date(),   
	    columns:[[   
	        {field:'id',title:'赞助ID',width:100,align:'center'},
	        {field:'name',title:'赞助名称',width:200,align:'center'},   
	        {field:'user_id',title:'用户ID',width:200,align:'center',hidden:true},
	        {field:'user_name',title:'用户名称',width:200,align:'center'},
	        {field:'create_time',title:'创建时间',width:300,align:'center',formatter:function(value){
	        		if(value != undefined){
	        			return dateForamtShow(value.time);
	        		}else{
	        			return '';
	        		}
	        	
	       		}
        	},
        	{field:'start_time',title:'赞助开始时间',width:300,align:'center',formatter:function(value){
        		if(value != undefined){
        			return dateForamtShow(value.time);
        		}else{
        			return '';
        		}
        	
       		  }
    	    },
    	    {field:'end_time',title:'赞助截止时间',width:300,align:'center',formatter:function(value){
        		if(value != undefined){
        			return dateForamtShow(value.time);
        		}else{
        			return '';
        		}
        	
       		  }
    	    },
	        {field:'industry_id',title:'行业类别',width:100,align:'center',formatter:function(value){
	        	var industry_name = '' ;
	        	switch (value)
	        	{
			        case "1": industry_name = '孵化器';  break ;
			    	case "2": industry_name = '房产' ;  break ;
			    	case "3": industry_name = '互联网';  break ;
			    	case "4": industry_name = '公益';   break ;
			    	case "5": industry_name = '培训'; break ;
			    	case "6": industry_name = '汽车';break ;
			    	case "7": industry_name = '旅游';break ;
			    	case "8": industry_name = '酒店';break ;
			    	case "9": industry_name = '家装';break ;
			    	case "10":industry_name = '卖场';break ;
			    	case "11":industry_name = '明星';break ;
			    	case "12":industry_name = '商会';break ;
			    	case "13":industry_name = '社区';break ;
			    	case "14":industry_name = '展会';break ;
			    	case "15":industry_name = '大健康';break ;
			    	case "16":industry_name = '校园';break ;
			    	case "17":industry_name = '媒体';break ;
			    	case "18":industry_name = '趣味';break ;
			    	case "19":industry_name = '金融';break ;
			    	case "20":industry_name = '其他' ;  break ;
	        	}
	        	return industry_name ;
	          }
	          
            },
            {field:'status',title:'状态',width:100,align:'center',formatter:function(value){
            	var status = '' ;
	        	switch (value)
	        	{
			        case "0": status = '保存';  break ;
			    	case "1": status = '审核通过' ;  break ;
			    	case "2": status = '审核驳回';  break ;
			    	case "3": status = '待审核';   break ;
			    	case "4": status = '预热中'; break ;
			    	case "5": status = '赞助中';break ;
			    	case "6": status = '赞助成功';break ;
			    	case "7": status = '赞助失败';break ;
			    }
	        	return status ;
	          }
	        },
	        {field:'flag',title:'上下架状态',width:100,align:'center',formatter:function(value){
            	var flag = '' ;
	        	switch (value)
	        	{
			        case "0": flag = '上架';  break ;
			    	case "1": flag = '下架' ;  break ;
			    }
	        	return flag ;
	          }
	        },
            {field:'telephone',title:'联系方式',width:200,align:'center'} 
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
				$.messager.confirm('确认框','你确定要删除该活动赞助数据,删除后无法恢复?',function(r){   
				    if (r){   
				    	deteleActivitySupport(); 
				    }   
				}); 
        }},'-',{text:'上架',iconCls:'icon-up',handler:function(){  
			$.messager.confirm('确认框','你确定要上架该活动赞助?',function(r){   
			    if (r){   
			    	activitySupportHandle(0); 
			    }   
			}); 
       }},'-',{text:'下架',iconCls:'icon-down',handler:function(){  
			$.messager.confirm('确认框','你确定要下架该活动赞助?',function(r){   
			    if (r){   
			    	activitySupportHandle(1);
			    }   
			}); 
       }},'-',{
            text:'审核',iconCls:'icon-edit',handler:apply  
        },'-',{
            text:'查看',iconCls:'icon-view',handler:showActivitySupport  
        }
		]
	});
	
	//apply_activity_support配置
    $('#apply_activity_support').window({
		title: '审核',
	    width:400,   
	    height:300,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
});



/** 查看赞助详情 **/
function showActivitySupport(){
	var obj = $('#support_list_tab').datagrid("getSelected");
	if(obj==null){
        $.messager.alert('提示', '请选择一条记录!', 'warning');
        return;
    }else{
    	window.open("/support/91181"+obj.id+"91181.httl", "", "height='100%', width='100%', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
    }
}


/**
 * 审核赞助活动
 */
function apply(){
	var obj = $('#support_list_tab').datagrid("getSelected");
	if(obj== null){
        $.messager.alert('提示', '请选择一条记录!', 'warning');
        return;
    }
	$("#activity_support_id").val(obj.id);
	$("#activity_support_name").val(obj.name);
	if(obj.status == '3'){
		$('#apply_activity_support').window('open'); 
	}else{
		$.messager.alert('提示','请选择状态为待审核的记录');   
	}
	
}

/** 赞助上下架操作 **/
function activitySupportHandle(flag){
	var obj = $('#support_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}
	else{
		if(flag == obj.flag){
			$.messager.alert('消息框','操作错误!'); 
		}else{
				$.ajax({
				type : 'POST',
				url : '/support/update_support_flag?time='+new Date(),
				data : {
					'support_id' : obj.id,
					'flag':flag
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data.code==0){
						$.messager.alert('消息框','操作成功');
						$('#support_list_tab').datagrid("reload");
					}else{
						$.messager.alert('消息框',data.msg);
					}
				}
			});
		}
	}
	
}


/** 删除活动赞助 **/
function deteleActivitySupport(){
	var obj = $('#support_list_tab').datagrid("getSelected");//获取表格选中行数据
	if(obj == null){
		$.messager.alert('消息框','请在表格中选中需要删除的数据!');
	}else{
		$.ajax({
			type : 'POST',
			url : '/support/delete_support?time='+new Date(),
			data : {
				'support_id' : obj.id
			},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				if(data.code==0){
					$.messager.alert('消息框','删除成功');
					$('#support_list_tab').datagrid("reload");
				}else{
					$.messager.alert('消息框',data.msg);
				}
			}
		});
	}
	
}


/**
 * 提交审核
 */
function submit_approval() {
	var id = $('#activity_support_id').val();
	var remark = $('#remark').val().trim();
	var status = $('input:radio[name="status"]:checked').val();
	if(remark==''){
		$.messager.alert('提示', '必须填写备注信息!', 'warning');
        return;
	}
	$.ajax({ 
        type: "POST", 
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
         url:  "/support/approval?time="+new Date(), 
         data: {
        	 "id":id,
        	 "remark":remark,
        	 "status":status
         }, 
         dataType: 'json', 
         success: function(result) {
        	 if(result.code==1){
        		 $.messager.alert('提示','提交成功!'); 
        		$('#apply_activity_support').window('close');
        		$('#support_list_tab').datagrid("reload");
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



/** 时间格式化 **/
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




/** 查询方法 **/
function querySupportByParam(){
	$('#support_list_tab').datagrid('load',{
		id:$("#support_id").val().trim(),
		name: $("#input-sel-data").val().trim(),
		status:$("#select-zc-status").val()
	});
}
