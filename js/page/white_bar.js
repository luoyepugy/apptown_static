
/*=============================================活动白条cgq=========================================================================*/
$(function(){
	$("body").append('<div class="pup_er_a cen" style="display:none"> <span class="alert alert-error "> <i class="f_i error_icon"></i><span class="poiu_a"></span> </span> </div>')

	$(".sex_icon_a i").on("click",function(){
		$(".sex_icon_a i").removeClass("fa-check-circle").addClass("fa-circle");
		$(this).addClass("fa-check-circle").removeClass("fa-circle");
		sex=$(this).attr("data-sex");
		
	})
	$(".money_time").on("focus",function(){ 
		$(".select_input").show();
	})
	$("#select_input p").on("click ",function(e){
		$(".select_input").hide();
		$(".money_time").val($(this).text());
	})
	$("input").on("keyup",function(){
		$(".pup_er_a").hide();
	})
	$(".nkjh_b").hover(function(){
		$(".select_input").show();
	},function(){
		$(".select_input").hide();
	})
	$("input").on("blur",function(){
		$(".pup_er_a").hide();
	})
})
var sex=1;//性别
$('.j-navCity').addClass('none').prev('a').removeClass('none');
function upssd(){
	var loan_name=$("#loan_name").val(),//获取姓名
	loan_tel=$("#loan_tel").val(),//电话号码
	loan_money=$("#loan_money").val(),//申请金额
	money_time=$(".money_time").val(),//申请期数
	loan_remark=$("#loan_remark").val();//申请理由
	if(!form_mm.isnull(loan_name)){
		pup("请输入姓名","#loan_name");
		return; 
	}
	if(!form_mm.isnull(loan_tel)){
		pup("请输入电话号码","#loan_tel");
		return; 
	}
	if(!form_mm.format(loan_tel)){
		pup("电话号码格式错误","#loan_tel") ;
		return; 
	}
	if(!form_mm.isnull(loan_tel)){
		pup("请输入申请金额","#loan_tel") ;
		return; 
	}
	if(!form_mm.isnull(money_time)){
		pup("请输入申请期数","#money_time");
		return; 
	}
	if(!form_mm.isnull(loan_remark)){
		pup("请输入申请理由","#loan_remark");
		return; 
	}
	
	
	 var loan_data={};
     loan_data.apply_money=loan_money;//申请金额
     loan_data.contact_status=1;
     loan_data.name=loan_name;//申请人姓名
     loan_data.periods=money_time.split("期")[0];//申请期数
     loan_data.phone=loan_tel;//申请人电话
     loan_data.sex=sex;//性别
     loan_data.user_remark=loan_remark;//申请理由
     loan_data=JSON.stringify(loan_data) 
	 $.ajax({ 
          type : 'POST',
          url : '/baitiao/add_baitiao',
          data : loan_data,
          contentType : 'application/json;charset=UTF-8',
          dataType : 'json',
          success : function(data) {
        	  if(data.code!=0){
        		  $(".pup_er_a").show().find(".poiu_a").text(data.msg);
        		  return;
        	  }
              alert("申请成功！ 工作人员近期会和您取的联系！")
          },
          error : function(res) {
        	  $(".pup_er_a").show().find(".poiu_a").text('连接数据库失败！');
        	  setTimeout(function(){
        		   $(".pup_er_a").hide();
       	      },5000)
          }
      });
	
}

function pup(x,y){
	$(".pup_er_a").show().find(".poiu_a").text(x);
	$(y).focus(); 
}
/*==================================活动白条end=====================================================*/