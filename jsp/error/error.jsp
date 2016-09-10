<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>错误页面</title>
<link href="/css/common/bootstrap.css" rel="stylesheet">
<link href="/css/error/error.css" rel="stylesheet">
<link rel="SHORTCUT ICON" href="/img/downloadApp/icon.png"/>
<!--[if lt IE 9]>
  <script src="/js/common/html5.js"></script>
  <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
  
<script src="/js/common/jquery-1.11.3.min.js"></script>
<script src="/js/common/bootstrap.min.js"></script>
</head>
<body>
<%@include file="/jsp/common/mml_nav.jsp"%>
	<%
		String msg = "您可能输错了网址，或该网页已删除或不存在，点击这里!";
		Exception ex = (Exception) request.getAttribute("exception");
		if (ex != null&&ex.getMessage()!=null) {
			msg = ex.getMessage();
		}
	%>
<div class="error-wrap">
	<div class="error-content">
	  <p class="error-1st">页面<span class="text-danger">出错了</span>？！</p>
	  <p class="error-2nd"> <a href="/index"><span class="error-re"></span></a><a class="error-back" href="/index">回到首页</a></p>
	  <p class="error-3rd">提示：<%=msg%><a href="javascript:history.go(-1);">返回原页面</a></p>
	</div>
</div>
<%@include file="/jsp/common/mml_bottom.jsp"%>    
<script src="/js/common/base.js"></script>
<script src="/js/common/mode.js"></script>
</body>
</html>
