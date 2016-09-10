/** 用户菜单* */
$('.admin-name').hover(function() {
	$('.admin-updata').show();
}, function() {
	$('.admin-updata').hide();
})

$(function(){
    $(".st_tree").SimpleTree({
    	 click:function(a){
            if(!$(a).attr("hasChild"))
                alert($(a).attr("ref"));
        }
    });
});


$(".UpdatePwd").click(function(){
	$("#overall").hide();
	$("#update_admin").show();
}) 

/** 退出登录**/
function loginOut(){
	$.ajax({
		type : 'POST',
		url : 'loginOut',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 管员员列表* */
function admin_list() {
	$.ajax({
		type : 'POST',
		url : 'admin/adminList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 用户列表* */
function list_user() {
	$.ajax({
		type : 'POST',
		url : 'admin/userList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}
/** 编辑用户信息**/
function updateUserAll(){
	var id=$(".update_id").val();
	var name =$(".lgname").val();
	var pwd=$(".lgpwd").val();
	var user_radio = $('input[name="u_radio"]:checked').val();
	var use_type =$("#use_type").val();
	var user_name =$(".update_name").val();
	var id_card =$(".update_card").val();
	$.ajax({
		type : 'POST',
		url : 'admin/updateUserAll',
		data : {
			"id":id,
			"name":name,
			"pwd":pwd,
			/*"eb":eb,
			"score":score,*/
			"radio":user_radio,
			"type":use_type,
			"user_name":user_name,
			"card":id_card
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'text',
		success : function(data) {
			if(data==0){
				alert("编辑成功")
			}else{
				alert("编辑失败")
			}
		},
		error : function(res) {

		},
		complete : function() {
			list_user()
		}
	});
}



/**升级为设计师**/
function update(id){
	$.ajax({
		type : 'POST',
		url : 'admin/updateUser',
		data : {
			"id":id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'text',
		success : function(data) {
			
		},
		error : function(res) {

		},
		complete : function() {
			list_user();
		}
	});
}
/**删除用户**/
function delUser(id){
	if (window.confirm('你确定要删除吗？')) {
		$.ajax({
			type : 'POST',
			url : 'admin/deleteUser',
			data : {
				"userId" : id
			},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'text',
			success : function(data) {
				if (data == 0) {
					alert("删除成功");
				} else {
					alert("删除失败");
				}

			},
			error : function(res) {

			},
			complete : function() {
				list_user();
			}
		});
		return true;
	} else {

		return false;
	}
}
/**恢复用户**/
function restoreUser(id){
	if (window.confirm('你确定要恢复吗？')) {
		$.ajax({
			type : 'POST',
			url : 'admin/deleteUser',
			data : {
				"userId" : id
			},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'text',
			success : function(data) {
				if (data == 0) {
					alert("恢复成功");
				} else {
					alert("恢复失败");
				}

			},
			error : function(res) {

			},
			complete : function() {
				list_user();
			}
		});
		return true;
	} else {

		return false;
	}
}

/** 用户列表条件查询 * */
function queryUserList() {
	var name =$(".u_name").val();
	var type =$("#u_type").val();
	$.ajax({
		type : 'POST',
		url : 'admin/queryUserList',
		data : {
			"name":name,
			"type":type
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {
			
		}
	});
}
/** 场景列表* */
function list_scene() {
	var case_name = $(".case_name").val();
	var user_account = $(".user_account").val();
	var selec = $("#selec").val();
	$.ajax({
		type : 'POST',
		url : 'admin/caseList',
		data : {
			"case_name" : case_name,
			"user_account" : user_account,
			"selec" : selec
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 场景列表条件查询* */
function query() {
	var case_name = $(".case_name").val();
	var user_account = $(".user_account").val();
	var selec = $("#selec").val();
	$.ajax({
		type : 'POST',
		url : 'admin/queryCaseList',
		data : {
			"caseName" : case_name,
			"userName" : user_account,
			"selec" : selec
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

function res(ss) {
	var bb = ss;
	$('#case_id').val(bb);
}

/** 编辑案例* */
function updateCase() {
	var caseName = $("#case_name").val();
	var select = $("#select").val();
	var type = $('input[name="scenario"]:checked').val();
	var case_id = $('#case_id').val();
	$.ajax({
		type : 'POST',
		url : 'admin/updateCase',
		data : {
			"caseName" : caseName,
			"select" : select,
			"type" : type,
			"case_id" : case_id
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'text',
		success : function(data) {
			if (data == 0) {
				alert("案例编辑成功");
			}
			if (data == -1) {
				alert("案例编辑失败");
			}
		},
		error : function(res) {

		},
		complete : function() {
			list_scene();
		}
	});
}

/** 删除案例* */
function delcfm(id) {
	if (window.confirm('你确定要删除吗？')) {
		$.ajax({
			type : 'POST',
			url : 'admin/deleteCase',
			data : {
				"case_id" : id
			},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'text',
			success : function(data) {
				if (data == 0) {
					alert("删除成功");
				} else {
					alert("删除失败");
				}

			},
			error : function(res) {

			},
			complete : function() {
				list_scene();
			}
		});
		return true;
	} else {

		return false;
	}

}

/** 删除管理员* */
function deladmin(id) {
	if (window.confirm('你确定要删除吗？')) {
		$.ajax({
			type : 'POST',
			url : 'admin/deleteAdmin',
			data : {
				"adminid" : id
			},
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'text',
			success : function(data) {
				if (data == 0) {
					alert("删除成功");
				} else {
					alert("删除失败");
				}

			},
			error : function(res) {

			},
			complete : function() {

			}
		});
		return true;
	} else {

		return false;
	}

}

/** 活动列表* */
function list_activity() {
	$.ajax({
		type : 'POST',
		url : 'huodong/toActivityList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}


function queryimageList() {
	var name = $(".bgname").val();
	/*var type = $("#bgselec").val();*/
	$.ajax({
		type : 'POST',
		url : 'admin/queryimageList',
		data : {
			"name" : name/*,
			"type" : type,*/
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}
/** 上传图片* */
function saveImage() {
	$.ajax({
		type : 'POST',
		url : 'admin/imageUp',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			alert(data)
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 音乐库列表* */
function list_musicku() {
	$.ajax({
		type : 'POST',
		url : 'admin/musicList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 提现申请列表* */
function list_drawcashApply() {
	$.ajax({
		type : 'POST',
		url : 'drawcashApply/applyList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/** 招商管理列表* */
function list_cooperation() {
	$.ajax({
		type : 'POST',
		url : 'cooperation/cooperationList',
		data : {},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}


/**音乐上传 **/
function openUpload(){
	
}

/**音乐排序 查询**/
function queryMusicByName() {
	var name =$("#musicName").val();
	var type =$("#musicType").val();
	$.ajax({
		type : 'POST',
		url : 'admin/queryMusicByName',
		data : {
			"name":name,
			"type":type
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}

/**提现申请 查询**/
function selectDrawcashApply() {
	var user_id =$("#user_id").val();
	var status =$("#status").val();
	if($("#user_id").val()){
		if(user_id.length<=4){
			alert("账户id的长度要大于4个字符");
			return;
		}
	}
	$.ajax({
		type : 'POST',
		url : 'drawcashApply/applyList',
		data : {
			"user_id":user_id,
			"status":status
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}




/** 日志记录* */
function log_record() {
	$.ajax({
		type : 'POST',
		url : 'admin/adminLogList',
		data : {
		
		},
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType : 'html',
		success : function(data) {
			$(".right-center").html(data);
		},
		error : function(res) {

		},
		complete : function() {

		}
	});
}