<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>e场景活动后台管理</title>
<%@ include file="common.jsp" %>
</head>
<style>
	*{
	  padding:0;
	  margin:0;
	}
	.li_menu{
		list-style: none;
		display: block;
		height: 35px;
		line-height: 35px;
		padding-left:10%;
		font-size: 12px;
		color: #141414;
	}
	.li_menu:hover{
		background-color: #e0e0e0;
	}
</style>
<script>
$(document).ready(function(){
	
	/** 菜单选择改变背景颜色 **/
	$(".li_menu").map(function(){
		$(this).click(function(){
			
			$(".li_menu").map(function(){
				 $(this).css({"background":""}); 
			})
			$(this).css({"background":"#e0e0e0"});
		})
	})
	
	function adas(){
      return {region:'center',title:"操作区<a href='javascript:void(0)'>退出登录</a>"}
     };
	
	/** 菜单选择打开操作 **/
	 $(".li_menu").click(function(){
		var url = $(this).attr("data-url");
		var title = $(this).attr("data-title");
		var tab = $("#operation_show").tabs('getTab',title);
		if(url.indexOf('login_out')!=-1){
			window.location.href = url;
		}else{
			if(tab !=null){
				$("#operation_show").tabs('select',title);
			}else{
				var open_url = '<iframe scrolling="no" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>'
				$("#operation_show").tabs('add',{  
				        title:title,  
				        closable:true,  
				        content:open_url,  
				        iconCls:'icon-tip'  
				});
			}
		}
	}) 
})
</script>
<body class="easyui-layout">  
    <!-- 左边菜单栏 -->
    <div   data-options="region:'west',title:'菜单栏',split:true" style="width:250px;height: 300px;">
    	<div  class="easyui-accordion" >
    		<c:forEach items="${adminNode}" var="entity">
    			<div title="${entity.node_o.name}" data-options="iconCls:'icon-uesr'">  
			        <ul >
			        	<c:forEach items="${entity.node_t}" var="node">
			        		<li class="li_menu" data-url="${node.function_url}" data-title="${node.name}">${node.name}</li>
			        	</c:forEach>
			        </ul>
		    	</div>
    		</c:forEach>
            <div title="" selected style="padding:0px;"></div>  
		</div>
    </div> 
     
     <!-- 右边操作框 -->
    <div data-options="region:'center',title:'操作区    <a href=\'/admin/login_out\'>退出登录</a>'" style="background:#eee;">
    	<div id="operation_show" class="easyui-tabs" fit="true" style="margin:0px; padding:0px;">  
		</div> 
    </div>  
</body>
</html>