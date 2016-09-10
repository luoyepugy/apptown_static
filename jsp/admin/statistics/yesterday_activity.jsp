<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="content_wrap">
    	<div class="content_header">
        	昨日关键指标
        </div>
        <ul class="content">
       <c:forEach items="${activity_list}" var="activity">
        	<li>
        	    <c:if test="${activity.type==1}">
                <p class="content_1">新增活动数</p>
                </c:if>
                <c:if test="${activity.type==2}">
                <p class="content_1">活动发布用户数</p>
                </c:if>
                <c:if test="${activity.type==3}">
                <p class="content_1">活动报名数</p>
                </c:if>
                <c:if test="${activity.type==4}">
                <p class="content_1">活动评论数</p>
                </c:if>
                <p class="content_2">${activity.day_sum}</p>
                <p class="content_3">日 ${activity.day_sum}</p>
                <p class="content_4">周 ${activity.week_sum}</p>
                <p class="content_5">月 ${activity.month_sum}</p>
            </li>
	   </c:forEach>
	   <c:forEach items="${activity_list}" var="activity">
        	<li>
        	    <c:if test="${activity.type==1}">
                <p class="content_1">活动总数</p>
                </c:if>
                <c:if test="${activity.type==2}">
                <p class="content_1">活动发布用户总数</p>
                </c:if>
                <c:if test="${activity.type==3}">
                <p class="content_1">活动报名总数</p>
                </c:if>
                <c:if test="${activity.type==4}">
                <p class="content_1">活动评论总数</p>
                </c:if>
                <p class="content_2">${activity.all_num}</p>
                <p class="content_3">日 ${activity.day_sum_per}%</p>
                <p class="content_4">周 ${activity.week_sum_per}%</p>
                <p class="content_5">月 ${activity.month_sum_per}%</p>
            </li>
	   </c:forEach>
	    </ul>
    </div>

