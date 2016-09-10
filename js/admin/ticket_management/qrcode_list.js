$(document).ready(function(){
	/** easyui 表格设置 **/
	$('#qrcode_list_tab').datagrid({   
	    url:'/thirdQRcode/getQRcodeList?time='+new Date(),   
	    columns:[[   
	        {field:'wxid',title:'wxid',width:50,align:'center'},
	        {field:'main',title:'main',width:50,align:'center'},
	        {field:'itemId',title:'itemId',width:50,align:'center'},
	        {field:'url',title:'url',width:200,align:'center'},
	    ]],
	    loadMsg:"数据加载中请稍后!",
	    fitColumns:true,
	    striped:true,
	    singleSelect:true,
	    nowrap:false,
	    border:false,
	    fit:true,
		toolbar:[
				 {text:'设置',iconCls:'icon-edit',handler:edit_qrcode
				 }
		]
	});
});




