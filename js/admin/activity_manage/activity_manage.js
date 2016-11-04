$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#activity_list_tab').datagrid({   
	    url:'/activity_manage/activity_data?time='+new Date(),   
	    columns:[[   
	        {field:'ck',checkbox:true},      
	        {field:'id',title:'活动ID',width:100,align:'center'},
	        {field:'activity_title',title:'活动名称',width:200,align:'center'},   
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
		        		return '商会场馆';
		        	}else if(value == '2'){
		        		return '创业投资';
		        	}else if(value == '3'){
		        		return '亲子教育';
		        	}else if(value == '4'){
		        		return '金融财经';
		        	}else if(value == '5'){
		        		return '精品课程';
		        	}else if(value == '6'){
		        		return '休闲户外';
		        	}else if(value == '7'){
		        		return '娱乐艺术';
		        }
	          }
	        },
	        {field:'industry_id',title:'活动行业',width:100,align:'center',formatter:function(value){
	        	var industry_name = '' ;
	        	switch (value)
	        	{
			        case 1: industry_name = '孵化器';  break ;
			    	case 2: industry_name = '房产' ;  break ;
			    	case 3: industry_name = '互联网';  break ;
			    	case 4: industry_name = '公益';   break ;
			    	case 5: industry_name = '培训'; break ;
			    	case 6: industry_name = '汽车';break ;
			    	case 7: industry_name = '旅游';break ;
			    	case 8: industry_name = '酒店';break ;
			    	case 9: industry_name = '家装';break ;
			    	case 10:industry_name = '卖场';break ;
			    	case 11:industry_name = '明星';break ;
			    	case 12:industry_name = '商会';break ;
			    	case 13:industry_name = '社区';break ;
			    	case 14:industry_name = '展会';break ;
			    	case 15:industry_name = '大健康';break ;
			    	case 16:industry_name = '校园';break ;
			    	case 17:industry_name = '媒体';break ;
			    	case 18:industry_name = '趣味';break ;
			    	case 19:industry_name = '金融';break ;
			    	case 20:industry_name = '其他' ;  break ;
	        	}
	        	return industry_name ;
	          }
	          
            },
	        {field:'city_name',title:'所在城市',width:200,align:'center'},
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
	        {field:'activity_number',title:'报名人数',width:120,align:'center',formatter:function(value,rowData,rowIndex){
	        	return '<a name="exportData"  data-id="'+rowData.id+'" onclick="exportData(this)">'+value+"</a>";
	          }
	        },
	        {field:'browse_count',title:'浏览量',width:120,align:'center',formatter:function(value,rowData,rowIndex){
	        	return '<a name="exportData"  data-id="'+rowData.id+'" onclick="exportData(this)">'+value+"</a>";
	          }
	        },
	        {field:'hot_banner',title:'活动轮播',width:150,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value){
	        		str = 'checked="checked"';
	        	}
	        	return '<input class="banner_activity" '+str+' name="play" type="checkbox" value="2" data-type="0" data-id="'+rowData.id+'" onclick="onLoadDataGid(this)" />';
	        }},
	        {field:'hot_reco',title:'精选活动',width:150,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value){
	        		str = 'checked="checked"';
	        	}
	        	return '<input class="banner_activity" '+str+' name="reco" type="checkbox" value="2" data-type="1" data-id="'+rowData.id+'" onclick="onLoadDataGid(this)" />';
	        }},
	        {field:'hot_detail',title:'推荐活动',width:150,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value){
	        		str = 'checked="checked"';
	        	}
	        	return '<input class="banner_activity" '+str+' name="remm" type="checkbox" value="2" data-type="2" data-id="'+rowData.id+'" onclick="onLoadDataGid(this)" />';
	        }},
	        {field:'hot_activity',title:'热门活动',width:150,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value){
	        		str = 'checked="checked"';
	        	}
	        	return '<input class="banner_activity" '+str+' name="hot" type="checkbox" value="2" data-type="3" data-id="'+rowData.id+'" onclick="onLoadDataGid(this)" />';
	        }},
	        {field:'down_shelf',title:'是否下架',width:150,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value==0){
	        		str = 'checked="checked"';
	        	}
	        	return '<input type="checkbox" class="banner_activity" '+str+'  id="'+rowData.id+'" onclick="down_self(this)" />';
	        }},
	        {field:'labels',title:'活动标签',align:'center',hidden:true},
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:false,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
		toolbar:[{text:'删除',iconCls:'icon-cancel',handler:function(){  
					$.messager.confirm('确认框','你确定要删除活动吗?',function(r){   
					    if (r){   
					    	deteleActivity(); 
					    }   
					});
               }},'-',{
                text:'上传活动轮播图片',iconCls:'icon-up',handler:uploadImageDiv  
				},'-',/*{
                text:'关联itemId',iconCls:'icon-up',handler:setItem
                },'-',*/{
                text:'修改活动',iconCls:'icon-edit',handler:editActivity
                },'-',{
                text:'查看活动',iconCls:'icon-view',handler:viewActivity
                },'-',{
                text:'标签设置',iconCls:'icon-edit',handler:setlabelWindow
                }
		]
	});
	
	function setlabelWindow(){
		var rows = $('#activity_list_tab').datagrid("getSelections");
		if(rows==null||rows.length==0){
			$.messager.alert('提示','请选择需要打标签的活动!');
			return;
		}
		
		$.ajax({
			type : 'GET',
			url : '/label/group',
			contentType : 'application/json; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				var group_labels="";
				for (var i = 0; i < data.length; i++) {
					var dl_dt="<dl style='padding: 5px 10px' >"+
						"<dt>"+data[i].name+"</dt>";
					group_labels+=dl_dt;
					var dd="";
					for (var j = 0; j < data[i].child_list.length; j++) {
						dd+="<dd id='"+data[i].child_list[j].id+"' onclick='selected_label(this)'  >"+data[i].child_list[j].label_name+"</dd>"
					}
					group_labels+=dd;
					group_labels+="</dl>";
				}
				$("#label_list").append(group_labels);
			}
		});
		
		var activityids="";//要打标签的活动id
		var label_ac_ids="";//以有标签的活动id
		for (var i = 0; i < rows.length; i++) {
			activityids+=rows[i].id+",";
			if(rows[i].labels!=null&&""!=rows[i].labels){
				label_ac_ids+=rows[i].id+",";
			}
		}
		$("#activityids").val(activityids);
		$("#label_ac_ids").val(label_ac_ids);
		$("#labelWindow").window("open");
		
		
		var doms = $(".checked_dd");
		for(var i=0;i<doms.length;i++){
			doms[i].className=null;
		}
	}
	
	
	/** 修改活动 **/
	function editActivity(){
		var objs = $('#activity_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要查看的活动!');
		}else{
			
			if(objs.length>1){
				$.messager.alert('提示','不能同时同时关联多条!');
				return;
			}
			window.open('/activity_manage/activity_edit?activity_id='+objs[0].id)
		}
	}
	
	/** 查看活动详情 **/
	function viewActivity(){
		var objs = $('#activity_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要查看的活动!');
		}else{
			if(objs.length>1){
				$.messager.alert('提示','一次只能查看一条！');
				return;
			}
			window.open("/activity/91181"+objs[0].id+"91181.httl", "", "height='100%', width='100%', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
		}
	}
	
	
	
	/** 关联item **/
	function setItem(){
		var objs = $('#activity_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要关联item的活动!');
		}else{
			if(objs.length>1){
				$.messager.alert('提示','不能同时同时关联多条!');
				return;
			}
			
			$.ajax({
				type : 'POST',
				url : '/activity_manage/queryActivityItem?time='+new Date(),
				data : {'activityId' : objs[0].id},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					$("#setItem_win ul").empty();
					if(data.code==0){
					   $("#itemId").val(data.msg);	
					}else{
					   $("#itemId").val('');		
					}
					$('#activityId').val(objs[0].id);
					$('#setItem_win').window('open');
				}
			});
		}
	}
	
	/** setItem **/
	$("#setItem").on('click',function(){
		var itemId = $("#itemId").val();
		var activityId = $("#activityId").val();
		if(itemId==''){
			alert('请输入 itemId');
			return ;
		}
		$.ajax({
			type : 'POST',
			url : '/activity_manage/addActivityItem?time='+new Date(),
			data : {'activityId' : activityId,'itemId':itemId},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$("#setItem_win ul").empty();
				if(data.code==0){
				   alert(data.msg);
				   
				}else{
				   alert(data.msg);		
				}
			   $('#setItem_win').window('close');
			}
		});
	})
	
	
	/** delItem **/
	$("#delItem").on('click',function(){
		var activityId = $("#activityId").val();
		$.ajax({
			type : 'POST',
			url : '/activity_manage/delActivityItem?time='+new Date(),
			data : {'activityId' : activityId},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$("#setItem_win ul").empty();
				$('#setItem_win').window('close');
			}
		});
	})
	
	
	/** 关闭item  **/
	$("#closeItem").on('click',function(){
		$('#setItem_win').window('close');
	})
	
	/** 上传活动轮播图片 **/
	function uploadImageDiv(){
		var objs = $('#activity_list_tab').datagrid("getSelections");//获取表格选中行数据
		if(objs.length>1){
			$.messager.alert('消息框','只能选择一条!');
			return ;
		}
		if(objs==null||objs.length<1){
			$.messager.alert('消息框','请在表格中选中需要上传banner图片的数据!');
			return ;
		}else if(!objs[0].hot_banner){
			$.messager.alert('消息框','请在表格中选中已经设置活动轮播的数据!');
			return ;
		}else{
			
			/*if(objs.length>1){
				$.messager.alert('提示','一次只能删除一行！');
				return;
			}*/
			
			
			$("#activity_name").text(objs[0].activity_title);
			$("#activity_id").text(objs[0].id);
			$.ajax({
				type:'POST',
				url:'/activity_manage/queryActivityBanner',
				data:{
					'activityId':objs[0].id
			    },
			    dataType : 'json',
			    success : function(data) {
					$("#app_bannerImage").attr("src",data.h5_url);
					$("#pc_bannerImage").attr("src",data.pc_url); 
				}
			});
			$('#upload_image').window('open'); 
		}
	}
	
	
	
	
	//upload_image配置
	$('#upload_image').window({
		title: '上传banner图片',
	    width:800,   
	    height:800,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	/** 初始化设置item窗口 **/
	$('#setItem_win').window({ 
		title:"关联item窗口",
	    width:300,   
	    height:250,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	$('#labelWindow').window({ 
		title:"标签选择窗口",
	    width:500,   
	    height:500,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	
	
	
	/** 删除活动 **/
	function deteleActivity(){
		//var obj = $('#activity_list_tab').datagrid("getSelected");//获取表格选中行数据
		var objs = $('#activity_list_tab').datagrid("getSelections");
		
		if(objs == null){
			$.messager.alert('消息框','请在表格中选中需要删除的数据!');
		}else{
			if(objs.length>1){
				$.messager.alert('提示','一次只能删除一行！');
				return;
			}
			$.ajax({
				type : 'POST',
				url : '/activity_manage/delActivity',
				data : {
					'activityId' : objs[0].id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data){
						$.messager.alert('消息框','删除成功');
						$('#activity_list_tab').datagrid("reload");
					}
				}
			});
		}
		
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
});
/**上架下架**/
function down_self(obj){
	$.ajax({
		type : 'POST',
		url : '/activity_manage/down_self',
		data : {
			'activity_id' : obj.id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'json',
		success : function(data) {
			if(data.code==0){
				$.messager.alert('消息框',data.msg);
			}else{
				$.messager.alert('消息框',data.msg);
			}
			$('#activity_list_tab').datagrid("reload");
		}
	});
}

/** 活动轮播和推荐 **/
function onLoadDataGid(x){
	var activityId = $(x).attr("data-id");
	var typeId = $(x).attr("data-type");
	
	if(x.checked){	
    	// 添加热门活动
		$.ajax({
			type : "post",
			url : "/activity_manage/insertHotActivity",
			data : {"activityId":activityId,"typeId":typeId},
			dataType : 'json',
			success : function(result) {
					$.messager.alert('消息框',result.msg);
					if(result.code!=0){
						x.checked = false;
					}
					if(result.code==0){
						$('#activity_list_tab').datagrid("reload");
					}
            }
       });
	}else{
		// 移除热门活动
		$.ajax({
			type : "POST",
			url : "/activity_manage/removeHotActivity",
			data : {"activityId":activityId,"typeId":typeId},
			dataType : 'json',
			success : function(result) {
				if(result.code==0){
					$('#activity_list_tab').datagrid("reload");
					$.messager.alert('消息框',result.msg);
				}
            }
       });
	}
}

/** 查询方法 **/
function queryActivityByName(){
	$('#activity_list_tab').datagrid('load',{
		id:$("#activity_id").val().trim(),
		name: $("#input-sel-data").val().trim(),
		typeId:$("#select-hd-status").val(),
		timeStatus:$("#timeStatus").val(),
		type:$("#type").val()
	});
}

/** 导出报名表单 **/
function exportData(x){
	var activityId = $(x).attr("data-id");
	window.open("/activity_manage/exportData?activityId="+activityId+"&time="+new Date());  
}


	
	
