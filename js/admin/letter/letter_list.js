
$(document).ready(function(){
	
	//datagrid
	$('#letter_list_tab').datagrid({  
	    url:'/letter/letterList',   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center'},
	        {field:'content',title:'内容',width:200,align:'center'},  
            {field:'create_time',title:'发送时间',width:300,align:'center',formatter:formatTime}
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
            text:'添加',
            iconCls:'icon-add',
            handler:add_view
         }
    ]
	});
	
	//page
    var p = $('#letter_list_tab').datagrid('getPager');  
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
    
    //添加handler
    function add_view(){  
    	$('#add_win').window('open');  
    }
    
    //add_win配置
	$('#add_win').window({
		title: '添加',
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
});

	//系统消息搜索查询
	function selectLetter() {
		var _grid = $('#letter_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.content = $('#content').val().trim();
		_grid .datagrid('reload');
	}
	//添加
	function add_one() {
		var content = $('#content_tmp').val().trim();
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/letter/addLetter",
	         data: {
	        	 "content":content
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==1){
	        		 $.messager.alert('提示','添加成功!');
	        	    	add_one_cancel();
	        	    	 selectLetter();
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
	
	//取消添加
	function add_one_cancel(){
		$("#content_tmp").val("");
		$('#add_win').window('close');
	}
