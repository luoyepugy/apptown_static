$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#user_list_tab').datagrid({   
	    url:'/user_manage/user_data_list',  
	    columns:[[   
	        {field:'user_id',title:'账号ID',width:100,align:'center'},
	        {field:'user_account',title:'登入账号',width:200,align:'center'},   
	        {field:'user_name',title:'用户名',width:200,align:'center'},
	        {field:'user_phone',title:'用户号码',width:200,align:'center'},
	        {field:'user_status',title:'用户状态',width:100,align:'center',formatter:function(value){
		        	if(value == '0'){
		        		return '未激活';
		        	}else if(value == '1'){
		        		return '已激活';
		        	}else if(value == '2'){
		        		return '禁用';
		        	}
		        }
	        },{field:'create_time',title:'注册时间',width:300,align:'center',formatter:function(value){
	        		if(value != undefined){
	        			return dateForamtShow(value);
	        		}else{
	        			return '';
	        		}
		        	
		        }
	        },
	        {field:'show',title:'热门主办方',width:200,align:'center',formatter:function(value,rowData,rowIndex){
	        	var str = "";
	        	if(value == 1){
	        		str = 'checked="checked"';
	        	}
	        	return '<input class="banner_crowdfund" '+str+' name="play" type="checkbox" data-type="5" data-id="'+rowData.user_id+'" onclick="onLoadDataGid(this)" />';
	        }}
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
            text:'编辑',iconCls:'icon-edit',handler:function(){  
            	updateUserData();
            }  
        },{
        	text:'查看活动',iconCls:'icon-ok',handler:function(){  
        		userActivityData();
            } 
        }]
	});
	
	/** 初始化用户修改窗口 **/
	$('#update_win').window({ 
		title:"用户修改窗口",
	    width:600,   
	    height:400,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	/** 初始化活动查看窗口 **/
	$('#check_win').window({ 
		title:"活动查看窗口",
	    width:800,   
	    height:400,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	/** 点击活动查看时触发的方法 **/
	function userActivityData(){
		var obj = $('#user_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要修改的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/user_manage/query_user_activity?time='+new Date(),
				data : {
					'user_id' : obj.user_id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					$(".check_ul").empty();
					for(var i=0;i<data.length;i++){
						$(".check_ul").append('<li><span>活动ID:'+data[i].id+'</span><span>活动名称:'+limit(data[i].name)+'</span><span>发布时间:'+dateForamtShow(data[i].create_time)+'</span></li>')
					}
					$('#check_win').window("open");
				}
			})
		}
	}
	
	/**
	 * 文字截断 超过10个汉字
	 */
	function limit(x){
		var objLength = x.length ;
		var objString = x ;
		if(objLength>10){
			objString = x.substring(0,10)+"...." ;
		}
		return objString ;
	}
	
	
	
	/** 点击编辑按钮时触发的方法 **/
	function updateUserData(){
		var obj = $('#user_list_tab').datagrid("getSelected");//获取表格选中行数据
		if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要修改的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/user_manage/get_user_data?time='+new Date(),
				data : {
					'user_id' : obj.user_id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					$("#user_id").val(data.info.user_id);
					$("#user_name").val(data.info.user_name);
					$("#user_pwd").val(""); // 清空pwd控件
					var status_radio = $("input[name='user_status']");
					for(var i=0 ; i<status_radio.length ; i++){
						if(status_radio.get(i).value == data.info.user_status){
							status_radio.get(i).checked=true;
						}
					}
				}
			});
			$('#update_win').window('open');
		}
		
	}
	
	/** 用户修改提交按钮触发操作 **/
	$("#user_update_submit").click(function(){
		var user_name =  $('#user_name').val();
		var user_pwd  =  $('#user_pwd').val();
		
		if(user_name==''||user_pwd==''){
			$.messager.alert('提示','请完善资料后更新!');   
		}else{
			$.ajax({
				type : 'POST',
				url : '/user_manage/update_user?time='+new Date(),
				data : $("#user_update_form").serializeArray(),
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data.code==0){
						$.messager.alert('消息框','更新成功!');
						$("#user_update_form input").map(function(){
							if(this.name == "user_status"){
								this.checked=false;
							}else{
								this.value="";
							}
						});  
						$('#user_list_tab').datagrid("reload");
					}else{
						$.messager.alert('消息框','更新失败!');
					}
					
				}
			});
			$('#update_win').window('close');
		}
	})
	
	/** 修改用户取消操作 **/
	$("#user_update_cancel").click(function(){
		$("#user_update_form input").map(function(){
			if(this.name == "user_status"){
				this.checked=false;
			}else{
				this.value="";
			}
		});  
		
		$('#update_win').window('close');
	})
	
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

/** 用户最热绑定 **/
function onLoadDataGid(x){
	var hotId = $(x).attr("data-id");
	var typeId = $(x).attr("data-type");
	if(x.checked){	
    	// 添加热门活动
		$.ajax({
			type : "POST",
			url : "/user_manage/user_add_hot?time="+new Date(),
			data : {"hotId":hotId,"typeId":typeId,"num":5},
			dataType : 'json',
			success : function(result) {
					$.messager.alert('消息框',result.msg);
					if(result.code!=0){
						x.checked = false;
					}
            }
       });
	}else{
		// 移除热门活动
		$.ajax({
			type : "POST",
			url : "/user_manage/user_remove_hot?time="+new Date(),
			data :  {"hotId":hotId,"typeId":typeId},
			dataType : 'json',
			success : function(result) {
				$.messager.alert('消息框',result.msg);
				if(result.code!=0){
					x.checked = true;
				}
            }
       });
	}
}

/** 查询方法 **/
function queryUserByParam(){
	$('#user_list_tab').datagrid('load',{
		name: $("#input-sel-data").val().trim(),
		account:$("#input-sel-account").val().trim(),
		phone:$("#input-sel-phone").val().trim()	
	});
}

function queryUserHot(){
	$('#user_list_tab').datagrid('load',{
		isUserHot: true,
	});
}
