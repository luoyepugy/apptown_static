<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<!DOCTYPE html>
<html ng-app="change_password">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动-找回密码</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
    <style>
        .form_poiu_q_m{
            display: none;
        }
        .act_po{
            display: block !important;
        }
        .qc_neo_a{
            padding-bottom: 60px;
            height:450px;
            margin-bottom:50px;
        }
    </style>
</head>
<body ng-controller="change_passwordController">

      <%@include file="/jsp/common/mml_nav.jsp"%>
 <div class="wd bgff mt20 ">
           <div class="qc_neo_a yj4 ">
                <p  class="act_text_a" >
                    <span class="fz24">找回密码</span>
                  <a class="zc fz14 fr mt5" ng-href="/">返回首页</a>
               </p>
                
               <p class="mt20">
                 <img src="/img/newimg/img/find-pass-progress1.jpg" class="poiu_icon"> 
               </p>
               
               <div class="mt60 form_lotuy_a">
              	  <ul  class="form_poiu_q_m mt20 act_po">
                                   <li data-brackets-id="3172" class="zq mt10">
                                   <label  class="f_d title_poi fz18">手机号码：</label>
                                        <input id="user_phone_i" type="text" placeholder="手机号码" class="act_input_a  ipud" ng-blur="user_form.exist_phone()">
                                 
                                  </li>
                            
                                     <li  class="zq mt20">
                                  		 <label class="f_d title_poi fz18">验证码：</label>
                                      
                                         <input  type="text" placeholder="验证码" class="act_input_a  ipub" id="u_verification_code">
                                         <img src="/validateImageServlet" alt="58*33" id="code_icon_d" ng-click="user_form.auth_code()">
                                  </li>
                                    
                                  <li>
                                    <div  class=" form_lotuy_b zq  ">
                             <label class="f_d title_poi"></label>               
                                          <a class="btn btn-primary add_form_p "  ng-click=" user_form.next_button(1,$event.target)">下一步</a>
                                          <a class="btn btn-primary add_form_p ml20">取消</a>
                                        
                              </div>
                                  </li>
                                  
                              </ul>
                   
                   
                 <ul  class="form_poiu_q_m mt20">
                                 <li data-brackets-id="3172" class="zq mt10 fz18">
                                   <label  class="f_d title_poi fz18">昵称：</label>
                                        {{nickname}}
                                  </li>
                            
                                <li  class="zq mt20 fz18">
                                   <label class="f_d title_poi fz18">手机号码：</label>
                                      
                                       {{ipone_zh}}
                                  </li>
                                    
                                                              
                                     <li  class="zq mt40 fz18">
                                   <label class="f_d title_poi fz18">短信验证码：</label>
                                      
                                        <input id="authentication_code" type="text" placeholder="请输入短信验证码" class="act_input_a  ipub">
                                 <!--         <a class="btn btn-primary add_form_p add_form_p_op ">获取验证码</a> -->
                                  </li>
                       
                       
                           <li>
                                    <div  class=" form_lotuy_b zq ">
                             <label class="f_d title_poi"></label>               
                                          <a class="btn btn-primary add_form_p "  ng-click=" user_form.next_button(2,$event.target)">下一步</a>
                                          <a class="btn btn-primary add_form_p ml20">取消</a>
                                        
                              </div>
                                  </li>
                                   
                              </ul>
                 <ul  class="form_poiu_q_m mt20">
                                   <li data-brackets-id="3172" class="zq mt10">
                                   <label  class="f_d title_poi fz18">设置新密码：</label>
                                        <input  id="newpwd" type="password" placeholder="设置新密码" class="act_input_a  ipud">
                                  </li>
                            
                                     <li  class="zq mt20">
                                         <label class="f_d title_poi fz18">确认密码：</label>
                                      
                                        <input  id="qpwd" type="password" placeholder="确认密码" class="act_input_a  ipud">
                                     
                                  </li>
                                    
                                      <li>
                                    <div  class=" form_lotuy_b zq ">
                             <label class="f_d title_poi"></label>               
                                          <a class="btn btn-primary add_form_p "  ng-click=" user_form.next_button(3,$event.target)">下一步</a>
                                          <a class="btn btn-primary add_form_p ml20">取消</a>
                                        
                              </div>
                                  </li>
                                  
                              </ul>
                  
                   <div class="form_poiu_q_m form_poi_u">
                      <img src="/img/newimg/img/find-pass-finishImg.jpg" class="fl">
                       <div class="ov pl20 pt10">
                            <span class="fz20">密码已重置完成，请返回重新登录！</span><br>
                            <p class="mt10"> <span class="hs time_oiy_pa"></span><span>秒自动关闭该页面返回首页重新登录</span></p>
                           <p class="mt20">你可能需要：<a ng-href="/">返回首页</a></p>
                       </div>
                  
                    
                   
                   </div>
                   
                   
               </div>
               
               
           </div>
    </div>
    
      <%@include file="/jsp/common/mml_bottom.jsp"%>
        <script src="/js/view/change_password.js"></script>
</body>
</html>