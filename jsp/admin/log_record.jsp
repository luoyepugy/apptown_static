<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>日志记录</title>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<link rel="stylesheet" href="/css/admin/admin_list.css" />

</head>
<body>
	<div class="log-list">
		<table class="gv" cellspacing="0" rules="all" border="1"
				id="ctl00_ContentPlaceHolder1_gvPager_Grid"
				style="width: 100%; border-collapse: collapse;">
				<tr align="left" valign="middle">
					<th align="left" scope="col">操作时间</th>
					<th align="left" scope="col">操作人员</th>
					<th align="left" scope="col">操作内容</th>
				</tr>
				<c:forEach items="${logList }" var="log">
					<tr>
						<td><fmt:formatDate pattern="yyyy.MM.dd   mm:hh" value="${log.create_time}"/></td>
						<td>${log.login_name}</td>
						<td>${log.content}</td>
					</tr>
				</c:forEach>
			</table>
	</div>
</body>
</html>