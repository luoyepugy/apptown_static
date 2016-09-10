<%@page import="java.net.URLDecoder"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>E场景后台</title>
<link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css" >
<link rel="stylesheet" href="/css/admin/admin_login.css" />
<script type="text/javascript" src="/js/common/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="/js/admin/admin.login.js"></script>
<%@include file="/jsp/common/mml_path.jsp"%>
<base href="<%=basePath%>">
</head>
<body>
	<div class="page-container">
		<div class="main_box">
			<div class="login_box">
				<div class="login_logo">
				</div>
				<div class="login_form">
					<div class="form-group">
						<label for="j_username" class="t">用户名：</label> <input id="email"
							value="${account}" name="username" type="text"
							class="form-control x319 in" autocomplete="off">
					</div>
					<div class="form-group">
						<label for="j_password" class="t">密 码：</label> <input
							id="password" value="${password}" name="password" type="password"
							class="password form-control x319 in">
					</div>
					<div class="form-group">
						<label class="t"></label> <label for="j_remember" class="m">
							<input id="j_remember" type="checkbox" value="true"
							style="position: relative; top: -3px;">&nbsp;记住登录账号!
						</label>
					</div>
					<div class="form-group space">
						<label class="t"></label>
						<button type="button" id="submit_btn"
							class="btn btn-primary btn-large" style="margin-left: 20px;">&nbsp;登&nbsp;录&nbsp;
						</button>
						<input type="reset" value="&nbsp;重&nbsp;置&nbsp;" id="btn-reset"
							class="btn btn-default btn-large" style="margin-left: 60px;">
					</div>
				</div>
			</div>
			<div class="bottom">
				Copyright &copy; 2015 - 2018 <a href="http://www.apptown.cn">www.apptown.cn</a>
			</div>
		</div>
	</div>
</body>
</html>