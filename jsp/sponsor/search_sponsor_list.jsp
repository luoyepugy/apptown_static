<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div>
<input id="name" type="hidden" value="${name}"/>
<c:choose>
	<c:when test="${!empty sponsor_list}">
			<c:forEach items="${sponsor_list}" var="sponsor">
              	 <ul>
			            <li class="clearfix">
			                <div class="search-host-ico pull-left">
			                   <a href="/user_center/activity_user_home?user_id=${sponsor.user_id}"><img alt="" src=" ${sponsor.sponsor_icon ==null?sponsor.user_icon:sponsor.sponsor_icon}"> </a>  
			                </div>
			                <div class="search-host-content pull-left">
			                    <h1>${sponsor.name ==null?sponsor.user_name:sponsor.name}</h1>
			                    <h2>${sponsor.introduction ==null?sponsor.user_sign:sponsor.introduction}</h2>
			                    <h3>已发布<span>${sponsor.act_sum ==null?0:sponsor.act_sum}</span>个活动，已有<em>${sponsor.fans_sum ==null?0:sponsor.fans_sum}</em>人关注</h3>
			                </div>
			            </li>
			        </ul>
            </c:forEach>
	</c:when>
	<c:when test="${empty sponsor_list}">
		<P class="text-null">无数据.....</P>
	</c:when>
</c:choose>
<div style="height: 80px; width: 750px;z-index:9999; text-align: center;">
	<div id="search_sponsor" class="page"></div>
</div>
</div>
<script>
/* 全局变量不可分离 */
var pageNum = '${pageNum}';
var totalCount = '${totalCount}';
var pageSize = '${pageSize}';	
var totalPage = '${totalPage}'; 
</script>
<script type="text/javascript" src="/js/sponsor/search_sponsor_list.js"></script>
