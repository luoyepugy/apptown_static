$(document).ready(
	function() {
	// 点击登录
	$('.btn-primary').click(
		function() {
			if ($('#email').val() == '') {
				show_err_msg('用户名还没填呢！');
				$('#email').focus();
			} else if ($('#password').val() == '') {
				show_err_msg('密码还没填呢！');
				$('#password').focus();
			} else {
				var name = $('#email').val();
				var pwd = $('#password').val();
				var isRemember =$("#j_remember").prop('checked');
				$.ajax({
						type : 'POST',
						url : 'admin/doLogin?time='+new Date(),
						data : {
							"name" : name,
							"pwd" : pwd,
							"isRemember" : isRemember
						},
						contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
						dataType : 'json',
						success : function(data) {
							if(data.code==0){
								window.location.href = "admin/admin_menu";
							}else if(data.code==-1){
								alert(data.msg);
							}
						}
			  });
			}
		});
	
	 //选中记住密码
	if($('#password').val()){
		$("#j_remember").attr("checked",'true');//全选
	}
	
    // 重置按钮
	$('#btn-reset').click(function() {
		$('#email').val("");
		$('#password').val("");
	})

});
