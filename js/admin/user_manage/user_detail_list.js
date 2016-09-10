
$(document).ready(function(){
	
	//datagrid
	$('#userdetail_list_tab').datagrid({  
	    url:'/userDetail/userDetailList',   
	    columns:[[ 
	        {field:'user_detail_id',title:'编号',width:100,align:'center',hidden:true},
	        {field:'user_id',title:'用户编号',width:100,align:'center'},
	        {field:'identity_id',title:'身份证号',width:200,align:'center'},  
	        {field:'real_name',title:'真实姓名',width:200,align:'center'},
	        {field:'contact_info',title:'电话',width:200,align:'center'},
	        {field:'email',title:'邮箱',width:200,align:'center'},
	        {field:'status',title:'状态',width:100,align:'center',formatter:formatStatus},
	        {field:'remark',title:'备注',width:100,align:'center'},
            {field:'create_date',title:'创建时间',width:300,align:'center',formatter:formatTime}
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
            text:'审核',
            iconCls:'icon-edit',
            handler:shenhe_view
         }
    ]
	});
	
	//page
    var p = $('#userdetail_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10],//可以设置每页记录条数的列表  
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
 			return dateForamtShow(value.time);
 		}else{
 			return '';
 		}
       }
    
    
    //审核handler
    function shenhe_view(){
		var obj = $('#userdetail_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	
    	$("#user_detail_id").val(obj.user_detail_id);
		if(obj.status == '3'){
			$('#shenhe_win').window('open'); 
		}else{
			$.messager.alert('提示','这条已经审核过!');   
		}
    }  
	
    //shenhe_win配置
	$('#shenhe_win').window({
		title: '审核',
	    width:400,   
	    height:300,   
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
	
	//模糊时间显示(公用)
	function dateLikeShow(dateTimeStamp){
   	 var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if(diffValue < 0){
            //若日期不符则弹出窗口告之
            //alert("结束日期不能小于开始日期！");
        }
        var monthC =diffValue/month;
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(monthC>=1){
            result=parseInt(monthC) + "个月前";
        }
        else if(weekC>=1){
            result=parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
            result=parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
            result=parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
            result=parseInt(minC) +"分钟前";
        }else
            result="刚刚发表";
        return result;
   }
	
  });

	//身份信息查询
	function selectUserDetail() {
		console.log("1");
		var _grid = $('#userdetail_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.user_id = $('#user_id').val();
		queryParams.status = $("#status").combobox('getValue'); 
		_grid .datagrid('reload');
	}

	//审核
	function shenhe_one() {
		var user_detail_id = $('#user_detail_id').val();
		var status = $('input:radio[name="status"]:checked').val();
		var remark = $('#remark').val().trim();
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/userDetail/approval",
	         data: {
	        	 "user_detail_id":user_detail_id,
	        	 "status":status,
	        	 "remark":remark
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==1){
	        		 $.messager.alert('提示','审核成功!');
	        	    	$("#user_detail_id").val("");
	        	    	$("input[name='status']").eq(0).attr("checked","checked");
	        	    	$("#remark").val("");
	        		$('#shenhe_win').window('close');
	        		selectUserDetail();
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
	function shenhe_one_cancel(){
    	$("#user_detail_id").val("");
    	$("input[name='status']").eq(0).attr("checked","checked");
    	$("#remark").val("");
	    $('#shenhe_win').window('close');
	}