<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<html>
<head>
<meta name="viewport" content="width=device-width,user-scalable=0">
</head>
<body>
	<script type="text/javascript">
		var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={0}&redirect_uri={1}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
		url = url.replace('{0}', '${appid}').replace('{1}', '${redirect_uri}');
		window.location.href = url;
	</script>
</body>
</html>