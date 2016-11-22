
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<!-- 判断下载二维码平台 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="misapplication-tap-highlight" content="no"/>
</head> 
<body>
    <script src="/js/common/mui.min.js"></script>
    <script>
    		if(mui.os.android){
    			window.location.href="http://resource.apptown.cn/app/echangjinghuodong.apk"
    		}else{
    		   window.location.href="https://itunes.apple.com/cn/app/e-chang-jing-huo-dong/id1110240836?mt=8&uo=4"
    		}
    		
    </script>   
</body>
</html>