/**
 * 修改密码
 */
angular.module('change_password', [ "directive_mml","activity_servrt"])
.controller('change_passwordController',["$scope","activity_data",function($scope,activity_data) {
	  var nex_p=1;//进度
	  var message_identification=false;//验证手机是否正确
      var icon_href=["/img/newimg/img/find-pass-progress1.jpg","/img/newimg/img/find-pass-progress2.jpg","/img/newimg/img/find-pass-progress3.jpg","/img/newimg/img/find-pass-progress4.jpg"];//进度图片
      var bubbling=true ;//阻止点击事件冒泡
	  $scope.user_form={"next_button":function(num,evt){//下一步按钮触发事件
		   nex_p=num
		
	      var user_phone,//手机号码
		      newpwd,//密码
		      qpwd;//确认密码
		
		  switch(nex_p){
          case 1:
        	  user_phone=$("#user_phone_i").val();//手机号码
     		  var get_code=$("#u_verification_code").val()
        	  if(!form_mm.isnull(user_phone)){
        		  $scope.mml.err_pup("请输入手机号码");
        		  $("#user_phone_i").focus()
        		  return;
        	  }
        	  if(!form_mm.format(user_phone)){
        		  $scope.mml.err_pup("手机号码号码格式输入错误");
        		  $("#user_phone_i").focus()
        		  return;
        	  }
        	  if(!form_mm.isnull(get_code)){
        		  $scope.mml.err_pup("验证码不能为空");
        		  $("#u_verification_code").focus()
        		  return;
        	  }
        	  if(!message_identification){
        		  return
        	  }  
        	  if(bubbling){
        	
        		  activity_data.get_sms_code_zhmm(get_code,user_phone).then(
      					function success(data) {
      					  if(data.code!=0){
      						  bubbling=true;
      						 $scope.mml.err_pup(data.msg)
      						 $("#code_icon_d").attr("src","/validateImageServlet?v="+Math.floor(Math.random()*1000))
      						  return;
      					  }
      					
      					  $(evt).text("加载中").attr("disabled","disabled")
      					   $scope.nickname=data.info;//获取用户的昵称
      					  $scope.ipone_zh=$("#user_phone_i").val();//获取用户输入的手机号码 
      					  $(".form_poiu_q_m").removeClass("act_po")
      					  $(".form_poiu_q_m").eq(1).addClass("act_po")
      					  $(".poiu_icon").attr("src","/img/newimg/img/find-pass-progress2.jpg")
      				}, function error() {
      					console.log("验证失败")
      					 bubbling=true;
      			});
        		  bubbling=false;
        	  }
        	 
        	
        	 
        		
        	 
        		
        	
        	  break;    
          case 2:
        	  var authentication_code=$("#authentication_code").val();//获取短息验证码输入框
        	  if(!form_mm.isnull(authentication_code)){
        		  $scope.mml.err_pup("短息验证码不能为空");
        		  $("#authentication_code").focus()
        		  return;
        	  }
        	 
        	  var retrieve_password={"phone":$("#user_phone_i").val(),"smsCode":authentication_code}
        	  activity_data.verificationSmsCode(retrieve_password).then(
    					function success(data) {
    					  if(data.code!=0){
    						  $scope.mml.err_pup(data.msg);
    						  return;
    					  }
    					  $(evt).text("加载中").attr("disabled","disabled")
    					  $(".form_poiu_q_m").removeClass("act_po")
        					  $(".form_poiu_q_m").eq(2).addClass("act_po")
        					  		  $(".poiu_icon").attr("src","/img/newimg/img/find-pass-progress3.jpg")
    				}, function error() {
    					console.log("短息验证失败")
    			});
        	  
        	  
        	  ;break;  
          case 3:
        	  newpwd=$("#newpwd").val();
        	  qpwd=$("#qpwd").val();
        	  if(!form_mm.isnull(newpwd)){
        		  $scope.mml.err_pup("请输入密码");
        		  $("#newpwd").focus();
        		  return;
        	  }
        	  if(!form_mm.isnull(qpwd)){
        		  $scope.mml.err_pup("确认密码不能为空");
        		  $("#qpwd").focus();
        		  return;
        	  }
        	  
        	  if(newpwd!=qpwd){
        		  $scope.mml.err_pup("两次密码输入不一样");
        		  $("#newpwd").focus();
        		  return;
        	  }
        	  var newPwd=$scope.decrypt_p.aesEncrypt(newpwd,$scope.decrypt_p.aesKey,$scope.decrypt_p.ivStr)
        	  var update_pwd={"phone":$("#user_phone_i").val(),"newPwd":newPwd}
        	  activity_data.sms_update_pwd(update_pwd).then(
    					function success(data) {
    					  if(data.code!=0){
    						  $scope.mml.err_pup(data.msg);
    						 return;
    					  }
    					  $(".form_poiu_q_m").removeClass("act_po")
    					  $(".form_poiu_q_m").eq(3).addClass("act_po")
    					  		  $(".poiu_icon").attr("src","/img/newimg/img/find-pass-progress4.jpg")
    					  $(evt).text("加载中").attr("disabled","disabled")
    					  var hpo_o=10
    					  setInterval(function(){
    						  $(".time_oiy_pa").text(hpo_o--)	
    						  if(hpo_o==0){
    							  window.location.href="/"
    						  }
    					
    						  
    					  },1000)
    				      $(".form_lotuy_b").hide();
    				}, function error() {
    					console.log("短息验证失败")
    			});
        	  
        	  
        	  
        	  
        	 
        	  break;  
      }
		  

		  
		  
		  
		 
		
	  },"auth_code":function(){//点击更换验证码
		  $("#code_icon_d").attr("src","/validateImageServlet?v="+new Date().getTime())
	  },"exist_phone":function(){
		  var user_phone=$("#user_phone_i").val();//手机号码
    	  if(!form_mm.isnull(user_phone)){
    		  $scope.mml.err_pup("请输入手机号码");
    		  $("#user_phone_i").focus()
    		  return;
    	  }
    	  if(!form_mm.tel(user_phone)){
    		  $scope.mml.err_pup("电话号码格式输入错误 ");
    		  $("#user_phone_i").focus()
    		  return;
    	  }

		  	activity_data.exist_phone(user_phone).then(
					function success(data) {
						if(data.code!=0){
							$scope.mml.err_pup(data.msg)
							return;
						}
						 message_identification=true
					}, function error() {
						console.log("查询手机注册信息失败")
					});  
	  }
	  
	  
	  
	  
	  }
	  
	
	
}])
