
$(document).ready(function(){
	
	//datagrid
	$('#feedback_list_tab').datagrid({  
	    url:'/feedback/feedbackList',   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center'},
	        {field:'user_account',title:'用户帐号',width:100,align:'center'},
	        {field:'user_name',title:'用户名',width:200,align:'center'},  
	        {field:'content',title:'内容',width:200,align:'center'},
            {field:'create_date',title:'创建时间',width:300,align:'center',formatter:formatTime},
            {field:'reply_content',title:'回复内容',width:200,align:'center'}
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
            text:'回复',
            iconCls:'icon-edit',
            handler:reply_view
         }
    ]
	});
	
	//page
    var p = $('#feedback_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
    //时间格式化
    function formatTime(value){
 		if(value != undefined){
 			return dateForamtShow(value.time);
 		}else{
 			return '';
 		}
       }
    
    //回复handler
    function reply_view(){
		var obj = $('#feedback_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	if(obj.reply_content!=""){
    		$.messager.alert('提示','这条已经处理过!');
    		return;
    	}
    	$("#id").val(obj.id);
    	$("#user_name").text(obj.user_name);
    	$("#content").text(obj.content);
		$('#reply_win').window('open');
    }  
	
    //reply_win配置
	$('#reply_win').window({
		title: '回复',
	    width:400,   
	    height:500,   
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

	//关键字搜索查询
	function selectFeedback() {
		console.log("1");
		var _grid = $('#feedback_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.type = $("#reply_type").combobox('getValue'); 
		_grid .datagrid('reload');
	}

	//回复
	function reply_one() {
		var id = $('#id').val();
		var reply_content = $('#reply_content').val().trim();
		if(reply_content.length==0){
			 $.messager.alert('提示',"请填写回复!");
			 return;
		}
		console.log("3");
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/feedback/editOne",
	         data: {
	        	 "id":id,
	        	 "reply_content":reply_content
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==1){
	        		 $.messager.alert('提示',result.msg);
	        	    	$("#id").val("");
	        	    	$("#reply_content").val("");
	        		    $('#reply_win').window('close');
	        		   selectFeedback();
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
	
	 //取消回复
	function reply_one_cancel(){
    	$("#id").val("");
    	$("#reply_content").val("");
	    $('#reply_win').window('close');
	}