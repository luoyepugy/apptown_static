<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="content_wrap">
    	<div class="content_header">
        	昨日关键指标
        </div>
        <ul class="content">
       <c:forEach items="${support_list}" var="support">
        	<li>
        	    <c:if test="${support.type==1}">
                <p class="content_1">新增赞助数</p>
                </c:if>
                <c:if test="${support.type==2}">
                <p class="content_1">赞助发布用户数</p>
                </c:if>
                <c:if test="${support.type==3}">
                <p class="content_1">赞助报名数</p>
                </c:if>
                <c:if test="${support.type==4}">
                <p class="content_1">赞助评论数</p>
                </c:if>
                <p class="content_2">${support.day_sum}</p>
                <p class="content_3">日 ${support.day_sum}</p>
                <p class="content_4">周 ${support.week_sum}</p>
                <p class="content_5">月 ${support.month_sum}</p>
            </li>
	   </c:forEach>
	   <c:forEach items="${support_list}" var="support">
        	<li>
        	    <c:if test="${support.type==1}">
                <p class="content_1">赞助总数</p>
                </c:if>
                <c:if test="${support.type==2}">
                <p class="content_1">赞助发布用户总数</p>
                </c:if>
                <c:if test="${support.type==3}">
                <p class="content_1">赞助报名总数</p>
                </c:if>
                <c:if test="${support.type==4}">
                <p class="content_1">赞助评论总数</p>
                </c:if>
                <p class="content_2">${support.all_num}</p>
                <p class="content_3">日 ${support.day_sum_per}%</p>
                <p class="content_4">周 ${support.week_sum_per}%</p>
                <p class="content_5">月 ${support.month_sum_per}%</p>
            </li>
	   </c:forEach>
	    </ul>
    </div>

