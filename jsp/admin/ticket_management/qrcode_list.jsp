<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>设置主副微信二维码</title>
<%@include file="../common.jsp" %>
</head>
<style>
	*{
	  padding:0;
	  margin:0;
	}
	.show_ul li span{
	   display: block;
	   line-height: 35px;
	}
	
	
	
</style>

<body style="padding:0;">
    <table id="qrcode_list_tab"></table>
    <%@include file="edit_qrcode.jsp" %>
</body>
<script type="text/javascript" src="/js/admin/ticket_management/edit_qrcode.js"></script>
<script type="text/javascript" src="/js/admin/ticket_management/qrcode_list.js"></script>
</html>