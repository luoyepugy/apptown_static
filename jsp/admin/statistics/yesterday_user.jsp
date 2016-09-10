<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="content_wrap">
    	<div class="content_header">
        	昨日关键指标
        </div>
        <ul class="content">
        	<li>
                <p class="content_1">新注册人数</p>
                <p class="content_2">${user.day_sum}</p>
                <p class="content_3">日 ${user.day_sum}</p>
                <p class="content_4">周 ${user.week_sum}</p>
                <p class="content_5">月 ${user.month_sum}</p>
            </li>
        	<li>
                <p class="content_1">累计总注册人数</p>
                <p class="content_2">${user.all_num}</p>
                <p class="content_3">日 ${user.day_sum_per}%</p>
                <p class="content_4">周 ${user.week_sum_per}%</p>
                <p class="content_5">月 ${user.month_sum_per}%</p>
            </li>
	    </ul>
    </div>

