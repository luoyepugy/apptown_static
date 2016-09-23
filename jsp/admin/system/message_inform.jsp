<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@include file="../common.jsp" %>
</head>

<body >
<table>
	 <tr>
	 	<td>手机号码：</td>
	 	<td>
	 		<textarea id="phones" rows="8" cols="100"></textarea>
	 		<p>提示：请输入要发送的手机号码，并用英文“;”隔开，如：13612345678；13812345678</p>
	 	 </td>
	 </tr>
	 <tr>
	 	<td>内容：</td>
	 	<td>
	 		<textarea id="send_content" rows="8" cols="100"></textarea>
	 		<p>提示：请输入要发送的内容,限150字以内</p>
	 	 </td>
	 </tr>
	 <tr>
	 	<td></td>
	 	<td><input id="send" style="width: 120px;"  type="button" value="发送"  /></td>
	 </tr>
</table>
<script type="text/javascript">
	$("#send").click(function(){
		var phones=$("#phones").val();
		var send_content=$("#send_content").val();
		var data= {"phones":phones,"send_content":send_content};
		$.ajax({ 
			type : "post",
			url: "/system/send_message_inform", 
			contentType : 'application/json; charset=UTF-8',
			data: JSON.stringify(data), 
			success: function(data){
	        	alert(data.code);
	     	}
		});
	});
</script>
</body>


</html>