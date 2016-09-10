$(document).ready(function(){
	
	//datagrid
	$('#draw_cash_apply_list_tab').datagrid({  
	    url:'/drawCashApply/apply_list?time='+new Date(),   
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top,
	    columns:[[ 
	              {field:'apply_id',title:'apply_id',width:100,align:'center',hidden:true},
	              {field:'trade_id',title:'trade_id',width:100,align:'center',hidden:true},
	              {field:'all_e',title:'e币余额_',width:100,align:'center',hidden:true},
	              {field:'identity_id',title:'identity_id',width:100,align:'center',hidden:true},
	              {field:'bank_account',title:'bank_account',width:100,align:'center',hidden:true},
	              {field:'bank_name',title:'bank_name',width:100,align:'center',hidden:true},
	              {field:'user_id',title:'账号ID',width:100,align:'center'},
	  	          {field:'real_name',title:'真实姓名',width:100,align:'center'},
	  	          {field:'contact_info',title:'手机号码',width:200,align:'center'},   
	  	          {field:'amount',title:'提现金额',width:100,align:'center'},
	  	          {field:'all_e_',title:'e币余额',width:200,align:'center',formatter:formatAmount},  
	  	          {field:'status',title:'状态',width:100,align:'center',formatter:formatStatus},
	  	          {field:'remark',title:'备注',width:200,align:'center'},
	  	          {field:'create_date',title:'创建时间',width:300,align:'center',formatter:formatTime}
	  	    ]],
		toolbar:[{  
            text:'查看',
            iconCls:'icon-ok',
            handler:showDetail
        },'-',{
        	text:'审核',
        	iconCls:'icon-edit',
        	handler:approval
        }
    ]
	});
	
	//分页
    var p = $('#draw_cash_apply_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10,20],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
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
    
    //e币余额计算
	function formatAmount(val,row,index){  
	    return  row.all_e*1+row.amount*1;
	}
	
    //审核handler
	function approval(){
		var obj = $('#draw_cash_apply_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
		$("#apply_id").val(obj.apply_id);
		$("#trade_id").val(obj.trade_id);
		$("#all_e_tmp").val(obj.all_e);
		$("#amount_tmp").val(obj.amount);
		$("#user_id_tmp").val(obj.user_id);
		if(obj.status == '3'){
			$('#shenhe_win').window('open'); 
		}else{
			$.messager.alert('提示','这条已经审核过!');   
		}
    }  
	
	 //查看handler
	function showDetail(){  
    	var obj = $('#draw_cash_apply_list_tab').datagrid("getSelected");
    	
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	console.info(obj.user_id);
    	$("#_user_id").text(obj.user_id);
    	$("#all_e_").text(obj.all_e*1+obj.amount*1);
    	$("#amount").text(obj.amount);
    	$("#amount_").text(obj.amount);
    	$("#all_e").text(obj.all_e);
    	
    	$("#real_name").text(obj.real_name);
    	$("#identity_id").text(obj.identity_id);
    	$("#contact_info").text(obj.contact_info);
    	
    	$("#holder").text(obj.real_name);
    	$("#bank_account").text(obj.bank_account);
    	$("#bank_name").text(obj.bank_name);
    	$("#remark").text(obj.remark);
    	
    	if(obj.status == '3'){
    		$("#status_tmp").text("待审核")
    	}else if(obj.status == '1'){
    		$("#status_tmp").text("通过")
    	}else if(obj.status == '2'){
    		$("#status_tmp").text("拒绝")
    	}
    	
    	$('#show_win').window('open');  
    }  
	
	//show_win配置
	$('#show_win').window({
		title: '查看',
	    width:400,   
	    height:550,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
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
	
	
	//时间格式化(公用)
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

	//提现查询
	function selectDrawcashApply() {
		$('#draw_cash_apply_list_tab').datagrid('load',{
			user_id: $('#user_id').val().trim(),
		    status:  $("#status").combobox('getValue')
		});
	}


	//提现审核提交
	function submit_approval() {
		
		var trade_id = $('#trade_id').val();
		var amount = $('#amount_tmp').val();
		var user_id = $('#user_id_tmp').val();
		console.info(user_id);
		var all_e = $('#all_e_tmp').val();
		var apply_id = $('#apply_id').val();
		var remark = $('#remark_tmp').val().trim();
		var status = $('input:radio[name="status"]:checked').val();
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/drawCashApply/approval", 
	         data: {
	        	 "trade_id":trade_id,
	        	 "amount":amount,
	        	 "user_id":user_id,
	        	 "apply_id":apply_id,
	        	 "remark":remark,
	        	 "status":status,
	        	 "all_e":all_e
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		$.messager.alert('提示','提交成功!'); 
	        		$('#shenhe_win').window('close');
	        		selectDrawcashApply();//返回查询页面
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
