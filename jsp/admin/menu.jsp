<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>活动小精灵后台管理</title>
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
<!--     		<div title="退出登录" data-options="iconCls:'icon-uesr'">  
			        <ul >
			        	<li class="li_menu" data-url="/admin/login_out" data-title="退出登录">退出登录</li>
			        </ul>
		    </div> --> 
		    <!--<div title="用户管理" data-options="iconCls:'icon-uesr'">  
		        <ul >
		        	<li class="li_menu" data-url="/userManage" data-title="用户列表">用户列表</li>
		        	<li class="li_menu" data-url="/letter/letterManage" data-title="系统消息">系统消息</li>
		        	<li class="li_menu" data-url="/userDetail/userDetailManage" data-title="用户身份列表">用户身份列表</li>
		        	<li class="li_menu" data-url="/sponsor/sponsorApplyManage" data-title="主办方申请列表">主办方申请列表</li>
		        </ul>
		    </div> 
		    <div title="内容管理" data-options="iconCls:'icon-content'" style="overflow:auto;">  
		        <ul >
		        	<li class="li_menu" data-url="/huodong/activityManageSkip" data-title="活动列表">活动列表</li>
		        	<li class="li_menu" data-url="/region/regionShowSkip" data-title="专区列表">专区列表</li>
		        	<li class="li_menu" data-url="/crowdfund/crowdfundShow" data-title="众筹列表">众筹列表</li>
		        	<li class="li_menu" data-url="/support/adminSupportList" data-title="赞助列表">活动赞助</li>
		        	<li class="li_menu" data-url="" data-title="活动设计户列表">活动设计列表</li>
		        	<li class="li_menu" data-url="/hotKeyword/hotKeywordManage" data-title="热门搜索设置">热门搜索设置</li>
		        	<li class="li_menu" data-url="/feedback/feedbackManage" data-title="意见反馈">意见反馈</li>
		        </ul>   
		    </div>
			<div title="素材管理" data-options="iconCls:'icon-material'" style="overflow:auto;">  
		        <ul >
		        	<li class="li_menu" data-url="" data-title="背景库列表">背景库列表</li>
		        	<li class="li_menu" data-url="/admin/musicList" data-title="音乐库列表">音乐库列表</li>
		        </ul>   
		    </div>
		    <div title="E币管理" data-options="iconCls:'icon-e'" style="overflow:auto;">  
		        <ul>
		        	<li class="li_menu" data-url="/drawcashApply/drawcashApplyManage" data-title="E币提现">E币提现</li>
		        	<li class="li_menu" data-url="/eCoin/toUserCoin" data-title="用户E币">用户E币</li>
		        </ul>   
		    </div>
		    <div title="积分商城管理" data-options="iconCls:'icon-e'" style="overflow:auto;">  
		        <ul>
		        	<li class="li_menu" data-url="/scoreGoods/scoreGoodsManage" data-title="积分商城">商品管理</li>
		        </ul>   
		    </div>
		    <div title="招商推广" data-options="iconCls:'icon-cooper'" style="overflow:auto;">  
		        <ul >
		        	<li class="li_menu" data-url="/cooperation/cooperationManage" data-title="加盟/合作">招商加盟/渠道合作</li>
		        </ul>   
		    </div>
		    <div title="系统管理" data-options="iconCls:'icon-sys'" style="overflow:auto;">  
		        <ul >
		        	<li class="li_menu" data-url="/admin/adminListSkip" data-title="管理员设置">管理员设置</li>
		        	<li class="li_menu" data-url="/node/nodeListSkip" data-title="权限节点设置">权限节点设置</li>
		        	<li class="li_menu" data-url="/admin/login_out" data-title="退出登录">退出登录</li>
		        </ul>   
		    </div>-->
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