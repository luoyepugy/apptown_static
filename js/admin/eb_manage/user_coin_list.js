$(document).ready(function(){
	//datagrid
	$('#user_ecoin_list_tab').datagrid({  
	    url:'/ecoin_manage/user_coin_list?time='+new Date(),   
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
	    columns:[[ 
	              {field:'user_id',title:'用户ID',width:100,align:'center'},
	              {field:'user_name',title:'用户昵称',width:100,align:'center'},
	              {field:'trade_amount',title:'e币余额',width:200,align:'center'}, 
	  	    ]],
		 toolbar:[{  
		        text:'充值e币',
		        iconCls:'icon-edit',
		        handler:changeCoin
		 }
		 ]
	});
	
	//充值e币页面
	function changeCoin(){  
    	var obj = $('#user_ecoin_list_tab').datagrid("getSelected");
    	if(obj==null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	$("#userId").text('');
    	$("#userName").text('');
    	$("#money").val('');
    	$("#userId").text(obj.user_id);
    	$("#userName").text(obj.user_name);
    	$('#change_coin').window('open');  
    }  
	
	//e币充值页面
	$('#change_coin').window({
		title: 'e币充值',
	    width:400,   
	    height:550,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	
	//分页
    var p = $('#user_ecoin_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10,20],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
});

/** 搜索 **/
function searchByUserId(){
	$('#user_ecoin_list_tab').datagrid('load',{
		userId: $("#user_id").val().trim()
	});
}

/** 管理员提交充值金额   **/
function submit_change_coin(){
	var userId = $('#userId').text();
	var money = $('#money').val().trim();
	var reg = /^(\+?[1-9]\d{0,2}|\+?1000)$/; // 包含上边界 1--1000的正整数
	if(money.match(reg)==null){
		alert('请输入1--1000以内的正整数!');
		return false ;
	}
	$.ajax({
		type:'POST',
		url:'/ecoin_manage/admin_recharge?time='+new Date(),
		data:{
			'userId':userId,
			'money':money
	    },
	    dataType : 'json',
	    success : function(data) {
			if(data.code==-1){
			    alert("用户或者充值金额不能为空!");
			}else if(data.code==0){
				alert("充值成功!");
				$('#change_coin').window('close'); 
				searchByUserId($("#user_id").val(userId));
			}
		}
	});
	
	
}


	
