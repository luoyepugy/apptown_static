$(document).ready(function(){
	// datagrid
	$('#keywords_list_tab').datagrid({  
	    url:'/keywords/list',   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center'},
	        {field:'word',title:'关键词',width:100,align:'center'},
	        {field:'time',title:'时间',width:200,align:'center',formatter:formatTime}
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
            text:'新增',
            iconCls:'icon-add',
            handler:add_view
         },'-',{
        	text:'修改',
        	iconCls:'icon-edit',
        	handler:edit_view
        },'-',{
        	text:'删除',
        	iconCls:'icon-cancel',
        	handler:function(){  
				$.messager.confirm('确认框','你确定要删除吗?',function(r){   
				    if (r){   
				    	del(); 
				    }   
				});
           }
        }]
	});
	//page
    var p = $('#keywords_list_tab').datagrid('getPager');  
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
    
    //新增 add_view 
    function add_view(){
		$('#add_win').window('open');
    } 
    
    //修改 edit_view 
    function edit_view(){
    	var obj = $('#keywords_list_tab').datagrid("getSelected");
    	if(obj== null){
            $.messager.alert('提示', '请选择一条记录!', 'warning');
            return;
        }
    	$("#id").val(obj.id);
    	$("#edit_word").val(obj.word);
		$('#edit_win').window('open');
    } 
    
    //删除 del 
    function del(){
    	var obj = $('#keywords_list_tab').datagrid("getSelected");
    	if(obj == null){
			$.messager.alert('消息框','请在表格中选中需要删除的数据!');
		}else{
			$.ajax({
				type : 'POST',
				url : '/keywords/delKeywords',
				data : {
					'id' : obj.id
				},
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : 'json',
				success : function(data) {
					if(data.code==0){
						$.messager.alert('消息框','删除成功!');
						$('#keywords_list_tab').datagrid("reload");
					}else{
						$.messager.alert('提示','删除失败!'); 
					}
				}
			});
		}
    } 
    
     //add_win配置
	$('#add_win').window({
		title: '新增关键字',
	    width:400,   
	    height:200,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    minimizable:false,
	    maximizable:false
	});
	
	 //add_win配置
	$('#edit_win').window({
		title: '修改关键字',
	    width:400,   
	    height:200,   
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
        return   year+"/"+month+"/"+date ;
    }
   });

	//关键字搜索查询
	function search() {
		$('#keywords_list_tab').datagrid('load',{
			word:$("#search_word").val().trim()
		});
	}
    
	
	function query(){
		$('#keywords_list_tab').datagrid('load',{
			word:$("#search_word").val().trim()
		});
	}
	
	//关键字提交
	function keywords_submit() {
		var id = $('#id').val();
		var word = $('#word').val().trim();
		if(word.length==0){
			 $.messager.alert('提示',"请填写关键字!");
			 return;
		}
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/keywords/insertKeywords",
	         data: {
	        	 "word":word
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 $.messager.alert('提示',result.msg);
	        	    	$("#word").val("");
	        		    $('#add_win').window('close');
	        		    search();
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
	
	//关键字提交
	function keywords_edit_submit() {
		var id = $('#id').val();
		var word = $('#edit_word').val().trim();
		if(word.length==0){
			 $.messager.alert('提示',"请填写关键字!");
			 return;
		}
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/keywords/updateKeywords",
	         data: {
	        	 "id":id,
	        	 "word":word
	         }, 
	         dataType: 'json', 
	         success: function(result) {
	        	 if(result.code==0){
	        		 $.messager.alert('提示',result.msg);
	        		    $("#id").val("");
	        	    	$("#edit_word").val("");
	        		    $('#edit_win').window('close');
	        		    search();
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
	
	//取消--keywords_cancel
	function keywords_cancel(){
    	$("#word").val("");
	    $('#add_win').window('close');
	}
	
	//取消--keywords_edit_cancel
	function keywords_edit_cancel(){
    	$("#edit_word").val("");
	    $('#edit_win').window('close');
	}
	