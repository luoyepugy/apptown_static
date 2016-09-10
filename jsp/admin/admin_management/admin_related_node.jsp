<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<c:forEach items="${showData}" var="nodeMap">
<p class="node_title">${nodeMap.node_o.name}</p>
<ul class="node_show_list">
	<c:forEach items="${nodeMap.node_t}" var="node">
		<c:if test="${node.tag == 0}">
		<li>${node.name}<input class="node_sel" type="checkbox" checked="checked" value="${node.id}"></li>
		</c:if>
		<c:if test="${node.tag == 1}">
		<li>${node.name}<input class="node_sel" type="checkbox" value="${node.id}"></li>
		</c:if>
	</c:forEach>
</ul>
</c:forEach>
<p class="node_but">
	<input id="related_submit" type="button" value="提交">&nbsp;&nbsp;&nbsp;&nbsp;
	<input type="button" value="取消" onclick="javascript:$('#related_window').window('close')">
</p>
<input id="related_admin" type="hidden" value="${admin_id}">
<script>
	$("#related_submit").on("click",function(){
		var str = '';
		var node_sel = $(".node_sel");
		for(var i=0 ; i<node_sel.length ; i++){
			if(node_sel[i].checked){
				str += node_sel[i].value+'#';
			}
		}
		if(str.length>0){
			str = str.substring(0,(str.length - 1));
		}
		$.ajax({
			type : 'POST',
			url : '/admin/updateRelated',
			data : {'admin_id' : $("#related_admin").val(),'str':str},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			success : function(data) {
				$.messager.alert('消息框',data.msg);
				if(data.code == 0){
					$('#related_window').window("close");
				}
			}
		});
	})
</script>