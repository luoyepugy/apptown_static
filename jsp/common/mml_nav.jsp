<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!--[if lt IE 9]>
  <div id="browserWrap">
    <div class="browser-happy">  
    </div>
    <div class="browser-happy-content">
      <p class="fz20">您的浏览器版本真的很低啊！<i class="iconfont icon-close gray" onclick="closeBrowserTip()"></i></p>
      <p class="mt20 gray">为了更好的用户体验，我们平台为你推荐了几个浏览器，请您下载以下版本的浏览器。</p>
      <p class="mt10"><span class="j-browserTip green fz18 pointer" onclick="closeBrowserTip()">继续访问&lt;&lt;&lt;</span></p>
      <div class="mt30">
        <a ng-href="http://www.google.cn/chrome/browser/desktop/index.html"><img class="icon100 mr20" src="/img/icon-chrome.png" alt="chrome"></a>
        <a ng-href="http://www.firefox.com.cn/download/"><img class="icon100" src="/img/icon-firefox.png" alt="firefox"></a>
      </div>
      <p class="gray mt5"><span class="mr20 tc db" style="width: 100px;">Chrome</span><span class="tc db" style="width: 100px;">火狐</span></p>
    </div>
  </div>
<![endif]-->
<script>
  var el = document.getElementsByClassName('j-browserTip');
  function closeBrowserTip() {
    document.getElementById('browserWrap').style.display = 'none';
  }
</script>

	<!-- 菜单栏 -->
<link href="/css/common/font-awesome.css" rel="stylesheet"> 
<link rel="stylesheet" href="//at.alicdn.com/t/font_1473314198_3888736.css">
<div ng-controller="navigation_mml">
 <div class="men_nav">
         <div class="wd">
               <ul class="nav_ul_index" >
                      <li class="nav_logo"><a ng-href="/" class="pd0">
                      <img src="/img/newimg/img/mml_LOGO-4.png"></a></li>
                      <li class="nav_li">
                        <a ng-href="/" class="interlinkage none"  >首页</a>
                        <div class="j-navCity">
                          <a class="interlinkage"><span class="city_name">深圳</span><span class="caret city_caret"></span></a>
                          <ul class="dropdown-menu act_nav_a_a padding_none city_list_a" >
                            <li data-id=""><a>全国</a></li>
                            <li data-id="1"><a>北京</a></li>
                            <li data-id="3"><a>上海</a></li>
                            <li data-id="449"><a>广州</a></li>
                            <li data-id="450"><a>深圳</a></li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav_li">
                          <a ng-href="/activity/to_activity_page" class="interlinkage" >找活动</a>
                               <ul class="dropdown-menu act_nav_a_a padding_none" >
                                     <!-- <li class="sj_fh_a"></li>  -->
                                    <li ><a class="bor_t_6" ng-href="/activity/launch_index">发起活动</a></li> 
                                    <li ng-if="prefsession_a==true"><a ng-href="/user/to_user_center?v=1#/user_my_activities">我发起的活动</a></li> 
                                    <li ng-if="prefsession_a==true"><a class="bor_b_6" ng-href="/user/to_user_center?v=2#/user_my_activities">我参与的活动</a></li>
                                </ul>
                   </li>
                      <li class="nav_li"><a ng-href="/support/supporList"  class="interlinkage">去赞助</a>
                   
                     <ul class="dropdown-menu padding_none act_nav_a_a"  >
                                    <!-- <li class="sj_fh_a"></li> -->
                                    <li><a class="bor_t_6" ng-href="/activity/launch_index">发起赞助</a></li>
                                    
                                    <li ng-if="prefsession_a==true"><a ng-href="/user/to_user_center?sor=1#/hacer_mipad_rine" >我发起的赞助</a></li> 
                                    <li ng-if="prefsession_a==true"><a class="bor_b_6" ng-href="/user/to_user_center?sor=2#/hacer_mipad_rine">我参与的赞助</a></li>
                                </ul>
                   </li>
                      <li class="nav_li"><a ng-href="/activity/launch_index"  class="interlinkage">+发起</a></li>
                 
       
                      <li class="fl">
                     <div class="input-prepend input-append poiut_idex_q mt18">
                            <div class="btn-group">
                                <button class="btn dropdown-toggle btn dropdown_toggle_o" data-toggle="dropdown">
                                    活动
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-pou padding_none" >
                                   <!--  <li><a ng-href="#">主办方</a></li> -->
                                    <li><a class="bor_t_6">活动</a></li> 
                                    <li><a class="bor_b_6">赞助</a></li>
                                    <li><a class="bor_b_6">主办方</a></li>
                                </ul>
                            </div>
                             <input class="span2"  type="text" placeholder="输入搜索内容" id="suosuo_p">
                              <p class="btn pd0 poiuytr_q" data-type="0">
                                  <img src="/img/search-btn-1.png" class="search">
                                </p>
                          </div>
                      </li>
                    <li class="nav_li"><a class="interlinkage" ng-href="/jsp/appdownload.jsp">App下载</a></li>
                    
                    <li class="fr user_logo  fz16 user_logo_a">
                      
                    <a   ng-click="nav_mml.loging()" pupshow="log_in">登录</a> / 
                    <a  class="reset_set" ng-click="nav_mml.reset_set()" pupshow="log_in">注册</a>
            
                     
                   </li>
                
                   <li class="fr user_logo user_logo_b" finish >
                            <img ng-src="{{user_con.user_icon}}" class="user_icon_index yj fl" data-user={{user_con.user_id}}>
                       <p class="fr"  data-href="/user/to_user_center">个人中心 <span data-brackets-id="3633" class="caret city_caret"></span></p>
          
                           <ul class="dropdown-menu act_nav_a_a padding_none"  >
                                    <li class="sj_fh_a"></li>
                                     <li><a class="bor_t_6" ng-href="/user/to_user_center#/personal_center">个人中心</a></li>
                                    <li><a ng-href="/user/to_user_center#/my_purse" >我的钱包</a></li> 
                                    <li><a ng-href="/help/menu">帮助中心</a></li>
                                    <li  ng-click="user_lo.login_out()"><a class="bor_b_6">退出</a></li>
                            </ul>
                     
                   </li>
                   
                     
             </ul>
         <p class="qc"></p>
         </div>
   </div>

  <!--  登录-->
      <div id="log_in" class="modal hide fade tabbable tabbable_nav " tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         <p class="log_in_title nav nav-tabs" data-toggle="buttons-radio">
                 <a class="pup_title_a act_p" data-toggle="tab" ng-click="nav_mml.pup_login($event.target)">登录</a>
                 <a class="pup_title_a" data-toggle="tab" ng-click="nav_mml.pup_request($event.target)">注册</a>
                 <button type="button" class="close close_poiu" data-dismiss="modal" style="margin-right:10px;" >×</button>
          </p>
          <div class="form_log_in">
                <div class="form_log_left fl tab-content">
                    <!--登录-->
                    <div class="tab-pane yuuyt_poi active" id="logo_poi_q">
                         <p><input type="text" placeholder="手机号码" id="user_phone"></p>  
                         <p><input type="password" placeholder="密码" id="user_password"></p>  
                         <p style="line-height:16px;">
                           <span  class="fa fa-check-square green_new jq_rem_password" data-x="1" style="font-size:20px;cursor:pointer;" ng-click="check_remenber($event.target)"></span>
                            <span>记住密码</span>  
                         </p>
                        <p class="mt10 submit_button">
                        <button class="green_bg1 login_css" ng-click="user_lo.phone_login()">登录</button>
                        <span class="zc ml20">没有账号？</span>
                        <a class="green_new" ng-click="nav_mml.pup_request($event.target)">马上注册</a>  
                        </p>                     
                    </div>
                     <!--注册-->
                       <div class="tab-pane  yuuyt_poi" id="request_poi_q">
                         <p><input type="text" placeholder="手机号码" id="phone_user"></p>  
                         <p class="verification_q_code">
                             <input type="text" placeholder="图形验证码" id="get_code">
                             <img src="/validateImageServlet" alt="58*33" id="code_icon">
                             <a class="btn f_d" ng-click="user_lo.get_code()" id="test_get_code">获取验证码</a>
                           </p>  
                         <p><input type="text" placeholder="短信验证码" id="identification"></p>  
                         <p><input type="password" placeholder="密码" id="pwd_user"></p>  
                         <p><input type="password" placeholder="确认密码" id="pwd_q_user"></p>  
                         <div class="submit_button">
                             <p class="gx_radio_a">
                                 <label class="f_i gx_icon "  ng-click="nav_mml.gx_radio_a($event.target)"></label>已阅读并同意《e场景用户注册协议》
                             </p>
                             <p class="qc"></p>
                              <button class="btn-primary register_now" ng-click="user_lo.user_logoing()">立即注册</button>
                        </div>
                      
                    </div>
                    
                   
                </div>
                <div class="form_log_right fl">
                    <p class="zc">用第三方帐号直接登录</p>
                    <div class="log_party_landed mt10">
                       <p><a ng-href="/user/wechat_login_page"><label class="f_i wx_cion"></label></a></p> 
                   
                       <p><a ng-href="/QQConnect/login"><label class="f_i qq_cion"></label></a></p> 
                       <!-- <p><a><label class="f_i wb_cion"></label></a></p>  -->
                      <p class="tr"><a class="green_new" ng-href="/user/to_forget_password">忘记密码?</a></p>
                    </div>
                      
                </div>
               
          
              <p class="qc"></p>
          </div>
             <p class=" zc pl10 pm10">为了获得更好的体验，建议您使用<span class="green_new">谷歌浏览器（Chrome）</span>和 <span class="green_new">火狐浏览器（Firefox）</span></p>
    </div>
    
  <!--  补充资料-->
       <div id="register" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
             <p class="c57 bm poiuy_index_q">来自微信登录的<span class="cfe">吾之荣耀</span>您好！您可以使用微信或电话号码登录</p>
             <div class="bm mt30">
                   <p class="form_input_a"><label><span>手机号码：</span><input type="text" placeholder="请输入手机"></label></p>
                     <p class="form_input_a"><label><span>验证码：</span><input type="text" placeholder="短信验证码"></label>
                 <button class="btn-primary verification_code">获取验证码</button>
                 </p>
                     <p class="form_input_a"><label><span>密码：</span><input type="password" placeholder="密码"></label></p>
                       <p class="form_input_a"><label><span>确认密码：</span><input type="password" placeholder="确认密码"></label></p>
             </div>
           
           <p class="button_submit">
               <a class="btn btn-primary" type="button" data-dismiss="modal">绑定并注册</a>
           </p>
        </div>
    </div>