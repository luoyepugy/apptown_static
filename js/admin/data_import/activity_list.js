$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#activity_list_tab').datagrid({   
	    url:'/dataImport/activityList?time='+new Date(),   
	    columns:[[   
	        {field:'id',title:'活动ID',width:100,align:'center'},
	        {field:'name',title:'活动名称',width:200,align:'center'},   
	        {field:'user_id',title:'用户ID',width:200,align:'center',hidden:true},
	        {field:'user_name',title:'用户名称',width:200,align:'center'},
	        {field:'create_time',title:'创建时间',width:300,align:'center',formatter:function(value){
	        		if(value != undefined){
	        			return dateForamtShow(value);
	        		}else{
	        			return '';
	        		}
	        	
	       		}
        	},
        	{field:'start_time',title:'活动开始时间',width:300,align:'center',formatter:function(value){
        		if(value != undefined){
        			return dateForamtShow(value);
        		}else{
        			return '';
        		}
        	
       		  }
    	    },
    	    {field:'end_time',title:'活动截止时间',width:300,align:'center',formatter:function(value){
        		if(value != undefined){
        			return dateForamtShow(value);
        		}else{
        			return '';
        		}
        	
       		  }
    	    },
	        {field:'type',title:'活动类别',width:100,align:'center',formatter:function(value){
	        	if(value == '1'){
	        		return '路演场馆';
	        	}else if(value == '2'){
	        		return '置业装修';
	        	}else if(value == '3'){
	        		return '汽车活动';
	        	}else if(value == '5'){
	        		return '商家促销';
	        	}else if(value == '6'){
	        		return '精品课程';
	        	}else if(value == '7'){
	        		return '户外运动';
	        	}else if(value == '9'){
	        		return '保险投资';
	            }
	          }
	        },
	        {field:'industry_id',title:'活动行业',width:100,align:'center',formatter:function(value){
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
	        {field:'city_came',title:'所在城市',width:200,align:'center'},
	        {field:'contact_way',title:'联系方式',width:200,align:'center'},
	        {field:'activity_status',title:'活动状态',width:200,align:'center',formatter:function(value,rowData,rowIndex){
	        	   // 0--未开始   1--已过期   2--正在进行中  
	        	   if(value==0){
	        		   return "未开始" ;
	        	   }else if(value==1){
	        		   return "已过期" ;
	        	   }else if(value==2){
	        		   return "正在进行";
	        	   }
	          }
	        },
	        {field:'numbers',title:'报名人数',width:200,align:'center',formatter:function(value,rowData,rowIndex){
	        	return '<a name="exportData"  data-id="'+rowData.id+'" onclick="exportData(this)">'+value+"</a>";
	          }
	        },
	        {field:'scan',title:'浏览量',width:200,align:'center',formatter:function(value,rowData,rowIndex){
	        	return '<a name="exportData"  data-id="'+rowData.id+'" onclick="exportData(this)">'+value+"</a>";
	          }
	        },
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{text:'编辑',iconCls:'icon-edit',handler:function(){  
				    upload_data();
               }}
		]
	});

	
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
	
	
	
	/** 上传报名用户数据  **/
	function upload_data(){
		$(".upload-del-win").remove();
		var obj = $('#activity_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要上传报名数据的活动!');
		}else{
			$("#activity_name").text(obj.name);
			$("#activity_id").text(obj.id);
			$.ajax({
				type : 'post',
				url : '/dataImport/reportDataView?time='+new Date(),
				data : {'activityId' : obj.id},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					for(var i=0 ; i<data.ticketList.length ; i++){
					   var _activityId = data.ticketList[i].activity_id ;
					   var _ticketId   = data.ticketList[i].id ;
					   $("#upload_win ul").append('<li class="upload-del-win" style="margin-left:20px;margin-top:30px" id='+data.ticketList[i].id+'>票种名称:'+data.ticketList[i].name+''+
					   '<input id="excelFile'+i+'" name="excelFile'+i+'" type="file"/>'+
					   '<input type="button" value="提交" onclick="submitExcel(\''+_activityId+'\',\''+_ticketId+'\',\''+i+'\')"/>'+
					   '</li>');
					}
					
					// 无票种的情况
					if(data.ticketList.length==0){
						var activityId = $("#activity_id").html();
						$("#upload_win ul").append('<li class="upload-del-win" style="margin-left:20px;margin-top:30px;text-align:center;">'+
						'<input style="margin-left:20px;margin-top:30px;" id="excelFile" name="excelFile" type="file"/>'+
						'<input type="button" style="width:70px;margin-top:10px;" value="提交" onclick="submitNoExcel('+activityId+')"/>'+
						'</li>');
					}
					
				   $('#upload_win').window('open');
				}
			});
		}
	}
	
	
	//upload_win配置
	$('#upload_win').window({
		title: '上传报名数据',
	    width:500,   
	    height:500,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
});



/** 上传无票种的Excel  **/
function submitNoExcel(activityId){
	var excelFile = $("#excelFile").val();
    if(excelFile==''){
    	alert("请选择需上传的文件!");
    	return false;
    }
    if(excelFile.indexOf('.xls')==-1){
    	alert("文件格式不正确，请选择正确的Excel文件(后缀名.xls)！");
    	return false;
    }
    ajaxNoFileUpload(activityId);
}

/** 上传无票种Excel  **/
function ajaxNoFileUpload(activityId) {
	$.ajaxFileUpload({
		url : '/dataImport/importNoExcelData?activityId='+activityId , //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'excelFile', //文件上传域的ID
		dataType : 'json', //返回值类型 一般设置为json
		success : function(data,status) //服务器成功响应处理函数
		{
			if (data.code == 0) {
				alert(data.msg);
			}else{
				alert(data.msg);
			}
		},
		error : function(data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	})
	return false;
}


/** 上传Excel **/
function submitExcel(activityId,ticketId,i){
	var excelFile = $("#excelFile"+i).val();
    if(excelFile==''){
    	alert("请选择需上传的文件!");
    	return false;
    }
    if(excelFile.indexOf('.xls')==-1){
    	alert("文件格式不正确，请选择正确的Excel文件(后缀名.xls)！");
    	return false;
    }
    ajaxFileUpload(activityId,ticketId,i);
}


function ajaxFileUpload(activityId,ticketId,i) {
	$.ajaxFileUpload({
		url : '/dataImport/importExcelData?activityId='+activityId+'&ticketId='+ticketId+"&i="+i, //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'excelFile'+i, //文件上传域的ID
		dataType : 'json', //返回值类型 一般设置为json
		success : function(data,status) //服务器成功响应处理函数
		{
			if (data.code == 0) {
				alert(data.msg);
			}else{
				alert(data.msg);
			}
		},
		error : function(data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	})
	return false;
}

/** 导出Excel模板 **/
$("#data_model_down").on("click",function(){
	var obj = $('#activity_list_tab').datagrid("getSelected");//获取表格选中行数据
	window.open("/dataImport/exportData?activityId="+obj.id+"&time="+new Date());
});


/** 查询方法 **/
function queryActivityByName(){
	$('#activity_list_tab').datagrid('load',{
		name: $("#input-sel-data").val().trim(),
	});
}



	
	
