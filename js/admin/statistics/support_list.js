
$(document).ready(function(){
	
	//datagrid
	$('#support_list_tab').datagrid({  
	    url:'/statistics/supportList',   
	    columns:[[ 
	        {field:'date_statis',title:'时间',width:100,align:'center'},
	        {field:'day_support_sum',title:'赞助数',width:200,align:'center'},
	        {field:'day_pub_user_sum',title:'发布用户数',width:200,align:'center'}, 
	        {field:'day_enr_user_sum',title:'报名数',width:200,align:'center'}, 
	        {field:'day_comment_sum',title:'评论数',width:200,align:'center'}, 
	        {field:'all_day_support_sum',title:'赞助总数',width:200,align:'center'},
	        {field:'all_day_pub_user_sum',title:'发布用户总数',width:200,align:'center'},
	        {field:'all_day_enr_user_sum',title:'报名总数',width:200,align:'center'},
	        {field:'all_day_comment_sum',title:'评论总数',width:200,align:'center'}
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
            text:'昨日关键指标',
            iconCls:'icon-ok',
            handler:show_view
         }
//		,'-',{
//        	 text:'下载表格',
//        	 iconCls:'icon-add',
//        	 handler:edit_view}
    ]
	});
	
	//page
    var p = $('#support_list_tab').datagrid('getPager');  
    $(p).pagination({  
    pageSize:10,//每页显示的记录条数，默认为10  
    pageList: [5, 10],//可以设置每页记录条数的列表  
    beforePageText: '第',//页数文本框前显示的汉字  
    afterPageText: '页    共 {pages} 页',  
    displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
    });
    
    
    //昨日关键指标handler
    function show_view(){ 
		$.ajax({ 
	        type: "POST", 
	        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	         url:  "/statistics/get_support_statistics",
	         data: {}, 
	         dataType: 'text', 
	         success: function(data) {
	        	 $("#show_win").empty().html(data);
	        	 $('#show_win').window('open');
	         },
	         error: function(res){
	        	 $.messager.alert('提示',"有错误发生！");
	         }, 
	         complete:function(){
	         } 
	      }); 
    }

    //show_win配置
	$('#show_win').window({
		title: '昨日关键指标',
	    width:800,   
	    height:600,   
	    modal:true,
	    closed:true,
	    shadow:true,
	    collapsible:false,
	    minimizable:false,
	    maximizable:false
	});
	
  });

	//查询
	function selectUserList() {
		var _grid = $('#support_list_tab');
		var queryParams = _grid .datagrid('options').queryParams;
		queryParams.date_start = $("#start").datebox("getValue");
		queryParams.date_end = $("#end").datebox("getValue");
		_grid .datagrid('reload');
	}

