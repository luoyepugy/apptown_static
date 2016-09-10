/** 跳转到签到展示页面 **/
$("#check_sign").on("click",function(){
	var entry_code = $("#entry_code").val();//票券号
	var activity_id = $("#activityId").val();
    window.location.href = "/scan/to_ticket_info?activity_id="+activity_id+"&entry_code="+entry_code ;	
})

/** 跳转到打印页面 **/
$("#button_print").on("click",function(){
	window.location.href = "/scan/to_print" ;
})


/**
 * 打印编码
 */
var count_down = 3, timer;
// 定时计时器
function print_time() {
	timer = setTimeout(function() {
		count_down--;
		print_time();
		$(".count_down").text(count_down);
	}, 1000)
	if (count_down == 0) {
		clearTimeout(timer);
		$(".timer").hide();
		$(".print_ok").show();
	}
}

$(function() {
	$(".bg_print,.print_prompt").css({
		"width" : screen.width,
		"height" : screen.height
	})

	/* 确认打印按钮触发事件 */
	$(".confirm_print").on("click", function() {
	     $(".print_prompt").show();
	     print_time();
	     var print_code = $("#print_code").val();
	     window.location.href = "/scan/printApiByPrintCode?printCode="+print_code ;
	})
    
	$(".print_ok button").on("click", function() {
		$(".print_prompt").hide();
		count_down=3;
		$(".count_down").text(count_down);
		print_time();
		$(".timer").show();
		$(".print_ok").hide();
	})
	try{
		if($("#qr_code_url").attr("data-src").length>20){
			var oImg=$("#qr_code_url").attr("data-src");
			$("#qr_code_url").attr("src",oImg);
		}
	}catch(e){}
	
})


/** 保存页面 * */
$("#button_save").on("click",function(){
	/** 传入参数 * */
	var title       = $("#title").html(); // 活动标题
	var sponsor     = $("#sponsor").html(); // 主办方
	var user_icon   = $("#user_icon").attr("src") ; // 用户头像url地址
	var name        = $("#name").html();  // 用户名称
	var tel        = $("#tel").html();  // 手机号码
	var entry_code  = $("#entry_code").html() // 票券
	var qr_code_url  = $("#qr_code_url").attr("src") ; // qr_code 链接地址
	var activity_id   = $("#activityId").val();  // activityId
	// 保存票券
	$.ajax({
		type : "POST",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		url : "/scan/create_ticket_image?time="+new Date(),
		data : {
			"title":title,
			"sponsor":sponsor,
			"user_icon":user_icon,
			"name":name,
			"tel":tel,
			"entry_code" : entry_code,
			"qr_code_url" :qr_code_url,
			"activity_id" :activity_id
		},
		dataType : 'json',
		success : function(result) {
			if (result.code == 0) {
				console.info(result.msg);
				window.location.href = "/scan/down_load_ticket_info?" +
						"urlString="+result.msg+"&fileName="+activity_id+"_"+entry_code+".png";
			} else {
				alert(result.msg);
			}
		},
		error : function(res) {
		},
		complete : function() {
		}
	  });
	
})

if($("#entry_code").attr("data-src")==0){
	$("#entry_code").attr("placeholder","请输入手机号码")
}

/** 点击立即报名  **/
$(".to_enroll").on("click",function(){
	mui('#apply').popover('show');
}) 

/** 关闭窗口 **/
$(".apply_close").on("click",function(){
	mui('#apply').popover('hide');
})

/** 确认签到 **/
$(".apply_confirm").on("click",function(){
	var name = $("#name").val();             // 姓名
	var tel  = $("#phone").val();            // 电话号码
	var activityId = $("#activityId").val(); //活动ID
	if(name==""){
		mui.alert("请输入姓名","","确认",function(){});
		return ;
	}
	if(tel==""){
		mui.alert("请输入手机号码","","确认",function(){});
		return ;
	}
	if(tel.length!=11){
		mui.alert("手机号码输入错误","","确认",function(){});
		return ;
	}
	console.info(name);
	console.info(tel);
	console.info(activityId);
	
	var param_data = {
			"name":name,
			"tel" : tel,
			"activityId" :activityId
		};
	// 处理报名并签到
	$.ajax({
		type : "post",
		contentType : 'application/json; charset=UTF-8',
		url : "/activity/add_sign_consumption",
		data : JSON.stringify(param_data),
		dataType : 'json',
		success : function(result) {
			console.info(result.code);
			if (result.code == 0) {
				mui.alert("签到成功","","进入活动现场",function(){window.location.href = "/scan/to_ticket_info?activity_id="
					+activityId
					+"&entry_code="
					+tel+"&time="+new Date()});	
            } else if(result.code ==-1){
				mui.alert("活动已结束","","活动已结束",function(){});
		    } else if(result.code ==-2){
				mui.alert("已签到","","进入活动现场",function(){
					window.location.href = "/scan/to_ticket_info?activity_id="
						+activityId
						+"&entry_code="
						+tel+"&time="+new Date()
				})
		    } else if(result.code == -3){
				mui.alert("名额已满","","名额已满",function(){});
			} else if(result.code==-4){
				mui.alert("签到失败","","签到失败",function(){});
			}
		},
		error : function(res) {
			alert("请求服务器失败")
		},
		complete : function() {
		}
	  });
	
	
	
})

/** 点击确认按钮 **/
$(".confirm_enroll").on("click",function() {
var entry_code = $("#entry_code").val();//票券号
var activity_id = $("#activityId").val();

 $(".sign_pup_dismiss").on("click",function(){
	mui('#sign_success').popover('hide');
})

if (entry_code == "") {
	mui.alert( "请输入票劵号","","确认",function(){})
	return;
}
 

 
 
// 处理签到
$.ajax({
	type : "post",
	contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	url : "/scan/process_sign?time=" + new Date(),
	data : {
		"entry_code" : entry_code,
		"activity_id" :activity_id
	},
	dataType : 'json',
	success : function(result) {
		if (result.code == 0) {
			mui.alert( "签到成功","","进入活动现场",function(){window.location.href = "/scan/to_ticket_info?activity_id="
				+activity_id
				+"&entry_code="
				+entry_code+"&time="+new Date()});
		} else if(result.code ==-1){
			mui.alert( "票号不存在","","重新输入",function(){$("#entry_code").val("")});
	    } else if(result.code ==-2){
			mui.alert( "已签到","","进入活动现场",function(){
				window.location.href = "/scan/to_ticket_info?activity_id="
					+activity_id
					+"&entry_code="
					+entry_code+"&time="+new Date()
			});
	          
		}
	},
	error : function(res) {
		alert("请求服务器失败")
	},
	complete : function() {
	}
  });
});

$(function(){
	if($("#is_vote").val()==0){
		$(".vote_nav_list:eq(2) a").removeAttr("href");
		$(".vote_nav_list:eq(2) a").on("click",function(){
			mui.alert("该主办方还没发起投票")
		})
	}
	
})