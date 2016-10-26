$(document).ready(function(){
	
	
	var url = "/log/queryLogModule";
	$.getJSON(url, function(json) {
		console.info(json);
	    $('#module').combobox({
			data : json,
			valueField:'id',
			textField:'name'
		});
	});
	
	
	
	
	
	// datagrid
	$('#log_list_tab').datagrid({  
	    url:'/log/list',   
	    columns:[[ 
	        {field:'id',title:'编号',width:100,align:'center'},
	        {field:'time',title:'时间',width:200,align:'center',formatter:formatTime},
	        {field:'name',title:'用户名',width:200,align:'center'},
	        {field:'module',title:'模块',width:200,align:'center'},
	        {field:'opt',title:'动作',width:200,align:'center'},
	        {field:'result',title:'结果',width:200,align:'center'},
	        {field:'msg',title:'消息',width:200,align:'center'}
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    pagination:true,
	    border:false,
	    fit:true,
	    pagePosition:top
	});
	//page
    var p = $('#log_list_tab').datagrid('getPager');  
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
	function query() {
		$('#log_list_tab').datagrid('load',{
			start_time:$("#start_time").val().trim(),
		    end_time:$("#end_time").val().trim(),
		    user_name:$("#user_name").val().trim(),
		    ip:$("#ip").val().trim(),
		    module:$('#module').combobox('getValue')
		});
	}
    
	
	
	
	
	
	
	
	
	