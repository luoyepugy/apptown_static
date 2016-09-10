<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="user_center">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>帮助中心</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="user_centerController">
    
  <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="act_title_list">
       <p class="wd">       
            <a ng-href="/help/menu?tab=2">帮助</a> / 
            <a ng-href="/help/menu?tab=0" class="zc">关于慢慢来</a>
        </p>
    </div>
    
    <div class="mt20 wd clearfix">
    	<!--左侧边栏开始-->
    	<div class="help_left pull-left">
    		<div id="myTabs_let" class="list-group"  role="tablist">
	          <a role="tab" ng-href="#tab1" id="tab1-tab" data-toggle="tab" aria-controls="tab1" class="list-group-item">关于慢慢来</a>
	          <a role="tab" ng-href="#tab2" id="tab2-tab" data-toggle="tab" aria-controls="tab2" class="list-group-item">e币是什么</a>
	          <a role="tab" ng-href="#tab3" id="tab3-tab" data-toggle="tab" aria-controls="tab3" class="list-group-item">帮助/常见问题</a>
	          <a role="tab" ng-href="#tab11" id="tab11-tab" data-toggle="tab" aria-controls="tab11" class="list-group-item">怎么添加视频</a>
	          <a role="tab" ng-href="#tab4" id="tab4-tab" data-toggle="tab" aria-controls="tab4" class="list-group-item">积分说明</a>
	          <a role="tab" ng-href="#tab5" id="tab5-tab" data-toggle="tab" aria-controls="tab5" class="list-group-item">产品应用/特点</a>
	          <a role="tab" ng-href="#tab6" id="tab6-tab" data-toggle="tab" aria-controls="tab6" class="list-group-item">慢慢来团队</a>
	          <a role="tab" ng-href="#tab7" id="tab7-tab" data-toggle="tab" aria-controls="tab7" class="list-group-item">加入我们</a>
	          <a role="tab" ng-href="#tab8" id="tab8-tab" data-toggle="tab" aria-controls="tab8" class="list-group-item">联系我们</a>
            </div>
    	</div>
    	<!--左侧边栏结束-->
        <!--右侧边栏开始-->
        <div class="help_right">
        	 <div id="myTabContent" class="tab-content">
        	 	<!-- 帮助-关于慢慢来布局开始 -->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade active in" id="tab1"  style="margin-left:30px;" >
		            <li class="regerds">
		              <h3><strong>关于慢慢来</strong></h3> 
		              <hr>
		              <img src="/img/newimg/img/gy.jpg" width="680">
		              <p style="margin-top: 50px">
		                <span style="color: #009ef6;">慢慢来</span>（深圳市慢慢来电子商务有限公司）
		              </p>
		
		              <p style="text-indent: 1cm;">
		                <span style="color: #009ef6;">慢慢来电子商务</span>专注于移动互联网，是中国最大的移动场景应用服务商。通过符合移动互联网
		                用户思维习惯的产品设计和极致的用户体验;为企业提供基于云端智能技术的低成本的移动化解决方案;为企业打造最具信任力的移动互联网精准营销服务。
		              </p>
		              <p style="text-indent: 1cm;">
		                <span style="color: #009ef6;">e场景</span>（应用）是一款基于HTML5且针对移动互联网营销的网页DIY制作工具，用户可以编辑页面，分享
		                至社交网络;同时，用户可根据e场景提供的数据统计和信息搜集的功能，随时了解传播效果；从而可进行营销;策略的优化和重心的调整。用户通过e场景进行自媒体营销，可以积累用户，为价值转化做好数据基础。
		              </p>
		              <p>
		                <b>一、公司文化</b>
		              </p>
		              <p
		                style="text-indent: 1cm; margin-left: -2px;">公司核心团队来自华为、互联网和金融投资界，专注于移动互联网已经有十年时间，具有多年移动互联网</p>
		              <p>专业化运营服务经验和系统化的实战能力。</p>
		              <p>
		                <span style="color: #009ef6;">慢慢来公司理念</span>：给您一个不一样的商业世界和生活世界。
		              </p>
		              <p>
		                <span style="color: #009ef6;">慢慢来公司氛围</span>：与坚持梦想者和信念者同行。
		              </p>
		              <p>
		                <span style="color: #009ef6;">慢慢来公司愿景</span>：绿色科技，共创美好生活。
		              </p>
		              <p>
		                <span style="color: #009ef6;">生活理念</span>：慢生活，慢时尚，慢健康！
		              </p>
		
		              <p>1、慢慢来六大管理原则：</p>
		              <p>
		                <span style="color: #009ef6;">诚信、</span><span
		                  style="color: #009ef6;">责任、</span><span style="color: #009ef6;">创新、</span><span
		                  style="color: #009ef6;">超越、</span><span style="color: #009ef6;">执行、</span><span
		                  style="color: #009ef6;">规范</span>
		              </p>
		              <p>2、慢慢来方向管理四大起点：</p>
		              <p>
		                <span style="color: #009ef6;">印象、</span><span
		                  style="color: #009ef6;">顺势、</span><span style="color: #009ef6;">机制、</span><span
		                  style="color: #009ef6;">纲领</span>
		              </p>
		              <p>慢慢来管理核心要素：</p>
		              <p>
		                <span style="color: #009ef6;">a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;深化产品线</span>
		              </p>
		              <p>
		                <span style="color: #009ef6;">b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;细化服务流程</span>
		              </p>
		              <p>
		                <span style="color: #009ef6;">c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加强团队管理</span>
		              </p>
		              <p>
		                <span style="color: #009ef6;">d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重视企业印象</span>
		              </p>
		            </li>
		          </ul>
		        <!-- 帮助-关于慢慢来布局结束 -->  
		         <!-- 帮助-e币说明 布局开始-->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab2" style="margin-left:30px;">
		            <li class="regerds ebi" >
		              <h3><strong>e币是什么</strong></h3> 
		              <hr>
		              <p>
		                <b>e币是慢慢来公司针对个人用户在互联网上消费交易而推出的唯一虚拟货币。</b>
		              </p>
		              <p style="text-indent: 1cm;">e币是用户在e场景商店（www.apptown.cn）购买应用时用来结算的虚拟货币。1e币=1元RMB;您可使用第三方支付（如支付宝、财付通等），银行卡或汇款相应的金额来换取等价e币。</p>
		
		              <p style="margin-top: 30px" id="e_coin_pay">
		                <b>e币使用说明？ </b>
		              </p>
		              <p style="text-indent: 1cm;">您可用e币在e场景商店购买所有商品，即购买e场景应用时用户可以选择【e币支付】方式使用e币;充抵相应数额的商品款。使用e币支付，您的网上购物将更加方便、快捷、安全。</p>
		
		              <p style="margin-top: 30px" id="use">
		                <b>使用e币的好处？</b>
		              </p>
		              <p style="text-indent: 1cm;">e场景账户管理为您提供了充值e币的服务，只要您的帐户里有e币，在e场景应用购买中;无需进入银行支付页面就可以实现购买，且剩余的e币可以在下次购买时使用。使用e币支付;您的网上购物将更加方便、快捷、安全，实惠。</p>
		
		              <p style="margin-top: 30px">
		                <b>好处</b>
		              </p>
		              <p style="text-indent: 1cm; margin-left: 0px;">1.只要您的帐户里有e币，在e场景应用购买中，就无需再进入银行支付页面就可以实现购买，</p>
		              <p>且剩余的e币可以在下次购物时使用。</p>
		
		              <p style="text-indent: 1cm; margin-left: 0px;">2.使用e币购买应用时，每消费1e币即可获得1个积分，相应的积分可兑换成e币，</p>
		              <p>积分也可购买积分类应用。</p>
		
		              <p style="margin-top: 30px" id="gainE">
		                <b>如何获得e币？</b>
		              </p>
		              <p style="text-indent: 1cm; margin-left: 0px;">1.进入e场景官网（apptown.cn）后台个人中心直接充值，通过支付宝等第三方支付。</p>
		
		              <p style="text-indent: 1cm; margin-left: 0px;">2.通过银行转帐、汇款进行换取，电话咨询400-046-1388。
		              </p>
		
		              <p style="text-indent: 1cm; margin-left: 0px;">3.通过参加e场景举办的各类活动获赠。</p>
		
		              <p style="margin-top: 30px">
		                <b>e币与积分关系？</b>
		              </p>
		              <p style="text-indent: 1cm; margin-left: 0px;">1.消费e币可得到积分。（如消费
		                1e币可获得1积分）</p>
		
		              <p style="text-indent: 1cm; margin-left: 0px;">2.积分能转换成e币。
		                （如100积分可换取10e币）</p>
		
		              <p style="text-indent: 1cm; margin-left: 0px;">
		                如遇到账户安全问题，可及时联系我们，客服电话：<span style="color: #009ef6">400-046-1388</span>。
		              </p>
		            </li>
		          </ul>
               <!-- 帮助-e币说明 布局结束-->
               <!-- 帮助-使用帮助与常见问题布局开始 -->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab3" style="margin-left:30px;">
		            <li class="regerds jy-reds">
		              <h3><strong>使用帮助/常见问题</strong></h3> 
		              <hr>
		              <p  style="position: relative; right: 40px; ">
		                <span style="line-height: 52px; position: relative; left: 40px">
		                  Hi,如果这里没有找到你的问题，请通过“<span style="color: #0085cc;">在线提交问题/建议</span>”给我们留言。
		                </span>
		              </p>
		               <hr>
		
		              <p style="font-size: 18px; margin-top: 30px" id="register">
		                <b>一、账号注册</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingOne">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="collapsed">
		                        1、如何登录e场景？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>登录地址是：www.apptown.cn，登录方式有以下两种：</p>
		                      <p>（1）微信登录 进入e场景官网，点击右上角“登录”按钮，在弹出的登录框选择“微信一键登录”，扫描二维码即可登录。</p>
		                      <p>（2）e场景账号 进入e场景官网，点击右上角“登录”按钮，输入正确的用户名（手机号码或邮箱账号）和密码即可登录。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingtwo">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo" class="collapsed">
		                        2、如何注册e场景？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapsetwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingtwo" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>点击右上角“注册”按钮打开注册页面，填写正确的手机号码、验证码和密码即可完成注册。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingthree">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsethree" aria-expanded="false" aria-controls="collapsethree" class="collapsed">
		                        3、注册e场景时，提示手机号已注册了怎么办？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapsethree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingthree" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）通过找回密码的方式找回密码；（2）选择其他手机号重新注册； （3）尝试使用已注册的帐号登录。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingfour">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="false" aria-controls="collapsefour" class="collapsed">
		                        4、如何找回密码？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapsefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）进入登录页面；</p>
		                      <p>（2）点击登录框右下方的“忘记密码”按钮，提交您需要找回的手机号码，系统将发送验证到您的手机，返回页面重设密码即可。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingfive">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefive" aria-expanded="false" aria-controls="collapsefive" class="collapsed">
		                      5、为什么要chrome、firefox登录网站？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapsefive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfive" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>为了获得更好的体验，建议您使用谷歌浏览器chrome和火狐浏览器firefox。</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		
		
		              <p style="font-size: 18px; margin-top: 30px" id="manage">
		                <b>二、信息管理</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne" aria-expanded="false" aria-controls="collapseeOne" class="collapsed">
		                        1、如何修改个人信息？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入我的e场景，点击右上方头像进入个人中心修改个人信息，如头像、昵称、签名、手机号、QQ、微信等资料。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo" aria-expanded="false" aria-controls="collapseetwo" class="collapsed">
		                        2、如何管理个人账户？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入个人中心，点击“账户余额”按钮，随时随地管理自己的钱包。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree" aria-expanded="false" aria-controls="collapseethree" class="collapsed">
		                        3、如何兑换积分？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>点击“积分”选项卡，查看积分总额及兑换积分。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefour">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefour" aria-expanded="false" aria-controls="collapseefour" class="collapsed">
		                       4、如何修改密码？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefour" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入【我的e场景-个人中心-修改密码】即可修改密码。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefive">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefive" aria-expanded="false" aria-controls="collapseefive" class="collapsed">
		                      5、e场景有哪些认证类型？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefive" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>设计师认证；企业机构认证；创客商标贷认证。</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		
		
		              <p style="font-size: 18px; margin-top: 30px">
		                <b>三、设计师认证</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-deg">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-deg" aria-expanded="false" aria-controls="collapseeOne-deg" class="collapsed">
		                        1、如何进行设计师认证？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-deg" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-deg" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>点击“设计师认证”选项卡，进入设计师申请页面，提交真实姓名、身份证号、手机号码等信息后，系统将在1个工作日内完成审核。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-deg">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-deg" aria-expanded="false" aria-controls="collapseetwo-deg" class="collapsed">
		                        2、设计师认证有什么要求？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-deg" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-deg" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）申请人需为具备一定的设计水准，且能持续创作优质作品的设计师或设计机构；</p>
		                      <p>（2）e场景会员账号下至少有两个已发布的原创作品。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree-deg">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree-deg" aria-expanded="false" aria-controls="collapseethree-deg" class="collapsed">
		                       3、如何知道设计师认证是否已通过，有什么提示？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree-deg" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree-deg" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>设计师认证时间为3个工作日，认证成功后我们会在“个人中心”以信息提醒的方式通知您。</p>
		                    </div>
		                  </div>
		                </div>
		               </div>
		
		              <p style="font-size: 18px; margin-top: 30px" id="renz">
		                <b>四、企业机构认证</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-check">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-check" aria-expanded="false" aria-controls="collapseeOne-check" class="collapsed">
		                        1、如何进行企业认证？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-check" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-check" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入个人中心，点击“企业机构认证”选项卡，填写相关信息即可认证。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-check">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-check" aria-expanded="false" aria-controls="collapseetwo-check" class="collapsed">
		                        2、企业认证需要提供什么文档？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-check" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-check" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>提供电子档营业执照副本的扫描件。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree-check">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree-check" aria-expanded="false" aria-controls="collapseethree-check" class="collapsed">
		                        3、企业资料填写错误如何修改？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree-check" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree-check" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>已提交的资料如需修改，请联系客服：4000-046-138。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefour-check">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefour-check" aria-expanded="false" aria-controls="collapseefour-check" class="collapsed">
		                       4、企业认证有哪些注意事项？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefour-check" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefour-check" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）由大陆工商局颁发的证书，并在有效期内且年检章齐全(当年成立的工商可无年检章)的证件扫描件；</p>
		                      <p>（2）请提供清晰，完整的彩色原件扫描件或数码照；</p>
		                      <p>（3）仅支持.jpg.bmp.png.gif的图片格式，图片大小不超过3M。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefive-check">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefive-check" aria-expanded="false" aria-controls="collapseefive-check" class="collapsed">
		                      5、怎么知道企业认证是否已经通过？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefive-check" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefive-check" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>企业机构认证时间为3个工作日，认证成功后我们会在“个人中心”以信息提醒的方式通知您。</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		
		              <p style="font-size: 18px; margin-top: 30px">
		                <b>五、创客商标贷资格认证</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-ck">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-ck" aria-expanded="false" aria-controls="collapseeOne-ck" class="collapsed">
		                        1、如何进行创客商标贷资格认证？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-ck" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-ck" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入个人中心，点击“创客商标贷资格认证”填写相应资料进行认证。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-ck">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-ck" aria-expanded="false" aria-controls="collapseetwo-ck" class="collapsed">
		                        2、创客商标贷资格认证需要哪些文档？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-ck" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-ck" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）营业执照副本扫描件；（2）商标代理申请书；（3）其它相关资料。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree-ck">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree-ck" aria-expanded="false" aria-controls="collapseethree-ck" class="collapsed">
		                       3、如何知道创客商标贷认证已经通过？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree-ck" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree-ck" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>创客商标贷认证时间为3个工作日，认证成功后我们会在“个人中心”以信息提醒的方式通知您。</p>
		                    </div>
		                  </div>
		                </div>
		
		               </div>
		
		
		              <p style="font-size: 18px; margin-top: 30px">
		                <b>六、创作制作场景</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-creat" aria-expanded="false" aria-controls="collapseeOne-creat" class="collapsed">
		                        1、e场景的内容谁来制作？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）任何用户都可以自主创建e场景；</p>
		                      <p>（2）e场景平台设有设计师帮手，提供场景内容创作服务，如果您希望有专业设计师帮您制作e场景，可以提交相关的活动需求。如有疑问请拨打我们的客服电话4000-046-1388进行咨询。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-creat" aria-expanded="false" aria-controls="collapseetwo-creat" class="collapsed">
		                       2、如何创建场景？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>直接进入【我的e场景】页面，点击“自主创建”图标可以开始个人创作。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree-creat" aria-expanded="false" aria-controls="collapseethree-creat" class="collapsed">
		                        3、如何查看优秀经典案例？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）进入e场景页面，点击右侧“新建场景”按钮进入经典案例查页面；</p>
		                      <p>（2）您可以通过热门标签进行选择，您可以通过关键词搜索相关的应用场景，例如：产品推广、企业宣传、线下聚会、电子杂志、活动众筹等。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefour-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefour-creat" aria-expanded="false" aria-controls="collapseefour-creat" class="collapsed">
		                       4、如何删除已添加的场景案例？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefour-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefour-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>进入我的场景，点击右下角设置按钮，点击删除后确认即可。模板删除后不可恢复，请谨慎删除。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefive-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefive-creat" aria-expanded="false" aria-controls="collapseefive-creat" class="collapsed">
		                      5、可以不使用案例模板进行创作吗？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefive-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefive-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>可以，您在新增案例时直接选择空白页面即可。</p>
		                    </div>
		                  </div>
		                </div>
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingesix-creat">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseesix-creat" aria-expanded="false" aria-controls="collapseesix-creat" class="collapsed">
		                      6、e场景操作步骤是什么？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseesix-creat" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingesix-creat" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      
		                    <p><b>创作</b></p>
		                    <p>1、创作界面，左侧预览区，右侧编辑区；</p>
		                    <p>2、鼠标移向预览区，触发当前组件的“操作层”，可对当前组件进行【编辑】【删除】等操作；</p>
		                    <p>3、点击上方编辑区域图标进行操作；</p>
		                    <p>4、编辑结束，点击【保存】完成编辑。</p>
		                    <p>5、添加图片有什么要求？</p>
		                    <p>建议上传与选择的图片大小不超过100kb，后台可支持预览和修改，当图片过大时，建议您使用png图片压缩专业网址：www.tinypng.org压缩图片。</p>
		                    <p>6、添加背景图有什么要求？</p>
		                    <p>图片最佳视觉效果尺寸640*1008像素大小不能超过300kb，支持jpg、png、jpeg格式。</p>
		                    <p>7、音乐大小有什么要求？</p>
		                    <p>音乐支持MP3音乐格式，控制在3M以内，推荐使用【格式工厂】进行压缩。</p>
		                    <p>8、文字编辑有什么要求？</p>
		                    <p>点击“文字”按钮，页面出会现一个文本编辑框，点击鼠标右健选择“编辑”进行个人创作。</p>
		                    <p>9、添加视频什么要求？</p>
		                    <p>您只需要将现有的通用代码粘贴到文本框即可，视频播放支持优酷和土豆。</p>
		
		                    <p><b>编辑</b></p>
		                    <p>1、场景应用的动态效果怎么做？</p>
		                    <p>进入页面编辑区域，文字、图片、按钮都设有动态效果，可根据需要选择合适的动态效果。</p>
		                    <p>2、如何修改标题？</p>
		                    <p>进入【我的e场景-我的场景-场景管理页面】，点击编辑页面上方“标题”按钮，可以修改标题、封面、e场景主题及e场景内容等。</p>
		                    <p><b>预览</b></p>
		                    <p>1、点击上方【二维码】，使用微信扫描二维码即可在手机中预览。</p>
		                    <p>2、直接点击创作页面上方【预览】可在电脑预览。</p>
		                    <p><b>发布</b></p>
		                    <p>1、如何发布e场景？</p>
		                    <p>场景编辑完成后，保存后进入我的e场景，点击编辑页面右上角【未发布】按钮确认发布即可。</p>
		                    <p>2、发布之后在手机上看到的内容还是旧的是怎么回事？</p>
		                    <p>您完成创作或修改保存后，系统可能需要5­10分钟来完成全球数据同步更新，在此之前您在手机浏览。</p>
		                    <p>3、修改了场景，但还不想发布出去怎么办？</p>
		                    <p>在编辑页面点击上方保存按钮，不点击发布即可。</p>
		                      
		                    </div>
		                  </div>
		                </div>
		              </div>
		
		
		              <p style="font-size: 18px; margin-top: 30px">
		                <b>七、内容审核</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-concheck">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-concheck" aria-expanded="false" aria-controls="collapseeOne-concheck" class="collapsed">
		                        1、为什么e场景需要进行内容审核？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-concheck" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-concheck" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>让e场景正常有效的传播，e场景平台将加强内容审核，严格限制传递诱导分享类违规内容，如发现违规内容将直接处理。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-concheck">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-concheck" aria-expanded="false" aria-controls="collapseetwo-concheck" class="collapsed">
		                        2、内容审核的标准是什么？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-concheck" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-concheck" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>场景应用内不可包含以下内容：</p>
		                      <p>（1）反党反政府、贩卖毒品枪支、涉黑涉暴、非法博彩、诈骗及侵犯他人姓名/名称权、名誉/商誉权、肖像权、隐私权、知识产权等违反法律法规的内容不能分享；</p>
		                      <p>（2）色情、有伤社会风化的文字、音视频内容，包括一些电影的删节片段宗教、迷信 、胁迫等其他国家法律法规禁止推广的产品和服务。</p>
		                    </div>
		                  </div>
		                </div>
		 
		
		               </div>
		
		
		              <p style="font-size: 18px; margin-top: 30px" id="generalize">
		                <b>八、推广场景</b>
		              </p>
		
		              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingeOne-spread">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseeOne-spread" aria-expanded="false" aria-controls="collapseeOne-spread" class="collapsed">
		                        1、如何推广我的e场景？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseeOne-spread" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingeOne-spread" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）e场景是基于移动H5新媒体创作营销平台，可以在微信公众平台及朋友圈进行推广；</p>
		                      <p>（2）二维码可以结合线下印刷品推广，比如户外广告，报纸，杂志，宣传单等。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingetwo-spread">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseetwo-spread" aria-expanded="false" aria-controls="collapseetwo-spread" class="collapsed">
		                        2、如何在微信公众号上推广我的场景应用？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseetwo-spread" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingetwo-spread" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）把链接复制到微信公众账号图文消息的“阅读全文”；</p>
		                      <p>（2）把链接复制到微信公众账号“自定义菜单”。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingethree-spread">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseethree-spread" aria-expanded="false" aria-controls="collapseethree-spread" class="collapsed">
		                        3、我的应用传播出去打不开是怎么回事？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseethree-spread" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingethree-spread" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）场景内容是不符合法律规定，审核不通过，修改违规内容后即可发布；</p>
		                      <p>（2）链接设置错误，请仔细检查你的链接是否设置正确。</p>
		                    </div>
		                  </div>
		                </div>
		 
		                <div class="panel panel-default">
		                  <div class="panel-heading" role="tab" id="headingefour-spread">
		                    <h4 class="panel-title">
		                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseefour-spread" aria-expanded="false" aria-controls="collapseefour-spread" class="collapsed">
		                       4、如何提高推广效果？
		                      </a>
		                    </h4>
		                  </div>
		                  <div id="collapseefour-spread" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingefour-spread" aria-expanded="false" style="height: 0px;">
		                    <div class="panel-body">
		                      <p>（1）为了高效地传播e场景，内容上可以选用热点话题、节日活动、热门语录做素材；</p>
		                      <p>（2）有针对性进行内容投放，提高转化率；</p>
		                      <p>（3）针对目标群体选择合适的时间段进行内容；</p>
		                      <p>（4）多渠道同时推广，提高传播效果。</p>
		                    </div>
		                  </div>
		                </div>
		              </div>
		
		              <p style="font-size: 18px; margin-top: 30px">
		                <b>九、e场景套餐价目表</b>
		              </p>
		
		              <p><img alt="e场景套餐价目表" src="/img/newimg/img/package_price.png" style="height:437px;"></p>
		            </li>
		          </ul>
		          <!-- 帮助-使用帮助与常见问题布局开始 -->
		          <!-- 帮助-积分说明布局开始-->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab4" style="margin-left:30px;">
		            <h3 role="tablist" id="myTabs">
		              <a role="tab" ng-href="#tab9" id="tab9-tab" data-toggle="tab" aria-controls="tab9" class="text-muted" style="margin-right:70px; cursor:pointer;"><b>关于积分说明</b></a>
		              <a role="tab" ng-href="#tab10" id="tab10-tab" data-toggle="tab" aria-controls="tab10" class="text-muted" style="cursor:pointer;"><b>积分详情说明</b></a>
		            </h3>
		            <hr>
		
		        <div id="myTabContent1" class="tab-content">
		
		            <li role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade active in" id="tab9">
		              <p>
		                <b>一、 积分是什么？</b>
		              </p>
		              <p>积分是e场景平台为鼓励广大用户参与我们的活动制定的激励制度。</p>
		              <p>
		                <b>二、 积分有什么用？</b>
		              </p>
		              <p>1、 凡持有积分的用户都可以通过换成e币的方式转换成人民币</p>
		              <p>2、积分、e币、人民币三者之者的转换</p>
		              <p>100积分=1e币=1元人民币（注：每次兑换1000积分起）</p>
		              <p>
		                <b>三、 哪些情况下可获得积分？</b>
		              </p>
		              <p>1、 用户制作e场景</p>
		              <p>2、 用户发起活动</p>
		              <p>3、 用户参与活动</p>
		              <p>4、 用户使用表单支付功能</p>
		              <p>5、 认证成e场景平台设计师</p>
		              <p id="exchange">
		                <b>四、 如何兑换积分？</b>
		              </p>
		              <p>（1）用户可以提交e币的提现申请，但是必须已绑定银行卡。</p>
		              <p>（2）申请提交后，由客服人工审核和处理提现操作。</p>
		              <p id="gainJ">
		                <b>五、 如何获取积分？</b>
		              </p>
		              <table border="1" style="margin-right: 40px;">
		                <tr>
		                  <td
		                    style="width: 167px; height: 67px; font-size: 16px; text-align: center;"><b>对象</b><span
		                    style="width: 120px;">\</span><b>积分项</b></td>
		                  <td
		                    style="width: 144px; height: 67px; font-size: 16px; text-align: center;"><b>类型</b></td>
		                  <td
		                    style="width: 256px; height: 67px; font-size: 16px; text-align: center;"><b>详细说明</b></td>
		                  <td
		                    style="width: 163px; height: 67px; font-size: 16px; text-align: center;"><b>获得积分数量</b></td>
		                  <td
		                    style="width: 330px; height: 67px; font-size: 16px; text-align: center;"><b>备注</b></td>
		                </tr>
		                <tr>
		                  <td rowspan="8" style="text-align: center;">所有用户</td>
		                  <td rowspan="2" style="text-align: center;">制作e场景</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; margin-left: 5px; padding-left: 10px;">用户每制作并发布一个e场景。</td>
		                  <td style="text-align: center;">100</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">用户取消发布或删除e场景，积分将扣除。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">用户制作的e场景，按人气（浏览量）给积分。</td>
		                  <td style="text-align: center;">1个人气=5积分</td>
		                  <td style="text-align: left;"></td>
		                </tr>
		                <tr>
		                  <td rowspan="3" style="text-align: center;">发起活动<br>需求
		                  </td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">用户每发起一个活动需求。</td>
		                  <td style="text-align: center;">200</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">设计需求被删除，积分将扣除。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">发布该活动需求的e场景。</td>
		                  <td style="text-align: center;">2000</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">如果该活动存在多个设计师制作的e场景，用户可以发布多次，但是同一个活动需求，该项积分只获得1次。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">如果发布的活动e场景包含支付金额不为0的支付表单。</td>
		                  <td style="text-align: center;">1000</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">如果该活动存在多个设计师制作的e场景，用户可以发布多次，但是同一个活动需求，该项积分只获得1次。</td>
		                </tr>
		                <tr>
		                  <td rowspan="3" style="text-align: center;">参加活动</td>
		                  <td
		                    style="text-align: center; letter-spacing: 1.5px; padding-left: 10px;">用户每关注<br>一个活动。
		                  </td>
		                  <td style="text-align: center;">20</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">如果用户在关注后的一周内取消关注，积分将被扣除。如果再次关注该活动，仍可获得积分。
		                    如果用户在关注后的一周之后取消关注，积分不会被扣除。但是再次关注该活动时无法再次获得积分。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">用户每报名参与一个活动。</td>
		                  <td style="text-align: center;">200</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">如以假数据报名参加活动，积分将扣除。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">活动参与者在活动在e场景支付成功。</td>
		                  <td style="text-align: center;">1元=1积分</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">积分不能为小数，因此小数点后的积分无条件舍去。</td>
		                </tr>
		                <tr>
		                  <td rowspan="2" style="text-align: center;">设计师</td>
		                  <td rowspan="2" style="text-align: center;">设计师<br>专属积分
		                  </td>
		                  <td style="text-align: center; letter-spacing: 1.5px">用户认证成<br>平台设计师。
		                  </td>
		                  <td style="text-align: center;">2000</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">用户失去设计师资格，积分将被扣除。</td>
		                </tr>
		                <tr>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">平台设计师为活动制作的e场景被活动发起者选为优秀作品。</td>
		                  <td style="text-align: center;">5000</td>
		                  <td
		                    style="text-align: left; letter-spacing: 1.5px; padding-left: 10px;">若作品被活动发起人通过客服取消优秀作品标记（例如发起人手滑选错了），积分将被扣除。</td>
		                </tr>
		              </table>
		            </li>
		
		            <li role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade " id="tab10">
		              <p style="font-size: 18px;">
		                <b>A 用户制作e场景</b>
		              </p>
		              <p>1、 用户每制作并发布一个e场景，获得100个积分； （注：未发布的e场景没有积分） （1） 已发布的E</p>
		              <p>场景被取消发布或删除后，积分还存在吗？ a 已发布的e场景被取消发布或删除后，相应积分将被扣除；</p>
		              <p>b 取消发布后的e场景再次发布时，仍可获得积分。</p>
		              <p>2、 用户制作的e场景，按浏览量给积分（1个浏览量=5积分）； 下图，用户A共有2个e场景，一个61人</p>
		              <p>气一个55人气，则该用户在【e场景数量】这一项上获得200积分，在【e场景人气】这一项上获得5*</p>
		              <p>(61+55)=580积分，总共780积分。</p>
		              <p>
		                <img alt="" src="img/help/integral_case.png">
		              </p>
		              <p style="font-size: 18px;">
		                <b>B 用户发起活动需求</b>
		              </p>
		              <p>1、 用户在活动页面每发起一个活动需求，将获得200积分；</p>
		              <p>2、 平台设计师会给活动需求制作e场景，活动发起者可以选定几个（最多3个）觉得合造的e场景设置为</p>
		              <p>优秀作品,活动发起者可获得2000积分； 注： （1）活动发起者选择多个e场景，有几次获得2000积分的</p>
		              <p>机会？ 只有一次获得2000积分的机会(2)同一个活动被平台设计师可以被几个平台设计师选中制作成E场</p>
		              <p>景？</p>
		              <p>3个（注：非中选作品因为不是发布状态，因此分享了也无法被观看） (4)如果是用户自己制作的e场景，</p>
		              <p>能不能享受积分制？ 如果是用户自已制作的e场景，不在此列。</p>
		              <p>3、如果该活动包含支付金额不为0的支付表单，活动发起者将获得1000积分。</p>
		              <p style="font-size: 18px;">
		                <b>C 用户参与活动</b>
		              </p>
		              <p>1、 用户每关注一个活动，获得20积分； 注： (1)如果用户在一周内取消关</p>
		              <p>注，积分将被扣除，重新关注，积分将恢复 (2)如果用户在一周后取消关注，积分不会扣除，但再次关注活动不会重复获得积分</p>
		              <p>2、用户每报名参与一个活动，获得200积分</p>
		              <p>3、活动参与者在活动在e场景支付成功 ，将获得同倍数的积分 范例 用户B在报名参加某活动时，在该活</p>
		              <p>动的e场景里支付了报名费20.5元，获得20积分。 （注：积分不能为小数，因此积分后的小数点无条件去</p>
		              <p>掉）</p>
		              <p style="font-size: 18px;">
		                <b>E 设计师特有的积分规则</b>
		              </p>
		              <p>1、 用户认证成设计师后，获得2000积分 （注：取消失去设计师资格，积分将被扣除） (1) 怎么认证成设计师？
		                提交相关的资料（个人信息+个人作品），经后台审核成功，用户认证成</p>
		              <p>设计师</p>
		              <p>2、 设计师为活动制作的e场景被活动发起者选为优秀作品，获得5000积分 注：设计师无法为自己本人发</p>
		              <p>起的活动制作e场景。</p>
		              <p style="font-size: 18px;">
		                <b>六、 积分取消规则</b>
		              </p>
		              <p>1、 用户制作e场景 （1）已发布的e场景被取消发布或删除后，积分取消； （2）若以刷积分为目的，随</p>
		              <p>意在e场景平台上发布e场景（e场景严重不符合标准要求） 积分取消。</p>
		              <p>2、 用户发起活动需求 （1） 用户发起的活动需求被删除，积分取消； （2） 若以刷积分为目的，发布虚</p>
		              <p>假的活动需求，积分取消。</p>
		              <p>3、 用户参与活动 （1）如果用户在关注后的一周内取消关注，积分将被扣除。如果再次关注该活动，仍</p>
		              <p>可获得积分。 （注：如果用户在关注后的一周之后取消关注，积分不会被扣除。但是再次关注该活动时</p>
		              <p>无法再次获得积分。） （2）提供假数据报名参加活动的，一经查实，积分取消; (注：用户想取消已报名</p>
		              <p>参与的活动，可联系官方客服电话：400-046-1388)</p>
		              <p>4、 设计师特有的积分项 若设计师失去设计师资格，积分将扣除； （1） 哪些情况下设计师会失去设计</p>
		              <p>师资格？ a 发布不良信息（涉及犯罪、侵权方面的信息）被用户举报，将失去平台设计师资格； b 若作</p>
		              <p>品被活动发起人通过客服取消中选标记（例如发起人选错了），积分将被扣除。</p>
		              <p>（注：点击【提现】后将跳转到【提现】选项卡。</p>
		            </li>
		           </div>
		          </ul>
		         <!-- 帮助-积分说明布局结束-->
		         <!--怎么添加视频布局开始-->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab11" >
		            <li class="regerds kzp-re">
		             <img src="/img/newimg/img/add_video.gif">
		            </li>
		          </ul>
		         <!--怎么添加视频布局结束 -->
		         <!-- 帮助-产品应用/特点布局开始 -->
		          <ul  role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab5" style="margin-left:30px;">
		            <li class="regerds">
		              <h3><strong>产品应用/特点</strong></h3> 
		              <hr>
		              <img src="/img/newimg/img/gy.jpg" width="680">
		              <p class="fot14" style="margin-top: 10px">
		                <span style="color: #0085cc;">慢慢来</span>（深圳市慢慢来电子商务有限公司）
		              </p>
		
		              <p class="margtop fot14" style="text-indent: 1cm;">
		                <span style="color: #0085cc;">慢慢来电子商务</span>专注于移动互联网，是中国最大的移动场景应用服务商;通过符合移动互联网用户思维习惯的产品设计和极致的用户体验;为企业提供基于云端智能技术的低成本的移动化解决方案;为企业打造最具信任力的移动互联网精准营销服务。
		              </p>
		              <p class="margtop fot14" style="text-indent: 1cm;">
		                <span style="color: #0085cc;">e场景</span>（应用）是一款基于HTML5且针对移动互联网营销的网页DIY制作工具，用户可以编辑页面;分享至社交网络。同时，用户可根据e场景提供的数据统计和信息搜集的功能，随时了解传播效果;从而可进行营销策略的优化和重心的调整。用户通过e场景进行自媒体营销，可以积累用户;为价值转化做好数据基础。
		              </p>
		              <p class="margtop">
		                <b>二、产品特点</b>
		              </p>
		              <p class="fot14" style="margin-top: 20px">1.
		                简单易操作：让e场景用户可快速上手制作出微信场景应用。</p>
		              <p class="fot14">2. 传递便捷：无需下载，智能分发给每一个客户，增加应用的使用率。</p>
		              <p class="fot14">3. 功能丰富：可以融入图片、文字、音乐、视频、导航、报名表单等常用功能。</p>
		              <p class="fot14">4. 互动性强：提供涂抹、优惠券、红包等特效功能引爆用户，增加参与感。</p>
		
		              <p class="margtop">
		                <b>三、产品应用</b>
		              </p>
		
		              <p class="fot14" style="margin-top: 20px">产品应用范围：新年祝福、展会、签约、企业形象、开业、团购、周年庆、节日活动、新品发布、调查报告等，</p>
		              <p>适用于企业宣传、产品介绍、活动促销、预约报名、会议组织、搜集反馈、微信增粉、网站导流、婚礼邀请等。</p>
		              <p class="fot14">
		                产品案例和模板中心：为用户提供了大量的场景案例和模板，让用户根据模板，换图片和文字等简单操作就可以</p>
		              <p>制作出一个精美的微信e场景。</p>
		              <p class="fot14">同时，客户可以用手机端进行场景的管理和编辑，随时把控场景的传播数据，实行移动化商务体验。</p>
		              <p>还引入了大量专业设计师制作和分享精彩案例，方便用户找到属于自己的场景灵感。</p>		
		            </li>
		          </ul>
		          <!-- 帮助-产品应用/特点布局结束-->
		           <!-- 帮助-团队信息布局开始 -->
		          <ul  role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab6" style="margin-left:30px;">
				
		            <div class="firstpage">
		
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/jl.jpg"  width="182">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>陈金兰</b></h4>
		                  <h4 class="media-heading"><b>总经理</b></h4>
		                  <hr>
		                  <p>深圳市慢慢来投资有限公司建设者，电子商务法人代表。金融开拓第一人，搭建了公司整个金融市场发展体系，并取得了飞跃性的成果。曾供职于大型国有企业及民营企业 ，历任市场总监、企业项目经理、客户经理，具备多年金融行业经验，拥有优质的人脉资源。</p>
		                  
		                </div>
		               </div>
		
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/pqq.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>彭前庆</b></h4>
		                  <h4 class="media-heading"><b>技术总监</b></h4>
		                  <hr>
		                  <p>武汉理工大学计科系，11年软件开发以及互联网研发团队管理经验，曾在华为业软，平安科技、金蝶友商网、步步高等大型IT公司从事软件开发，项目经理、软件架构师等职，在电信智能网、金融保险、B2C电子商务、在线教育等方面有较为丰富的行业经验。</p>
		                  
		                </div>
		               </div>
		
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/gjq.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>郭嘉琪</b></h4>
		                  <h4 class="media-heading"><b>设计总监</b></h4>
		                  <hr>
		                  <p>西安科技大学艺术系本科，多年的品牌与动画传媒经验，不断追求品牌国际化的视觉与动态视频创作，丰富的项目创意经验，主要参与的项目《房子的秘密》、《企鹅、企鹅》、《108工作室宣传片》。服务的客户：万科、JS、SOSO餐饮等。</p>
		                  
		                </div>
		               </div>
		
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/czm.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>陈智敏</b></h4>
		                  <h4 class="media-heading"><b>业务总监</b></h4>
		                  <hr>
		                  <p>12年国内市场营销管理实战经验，多年知识产权保护国内业务经验。服务的客户：BBC（英国BBC广播公司），NEW EVA（国际最大帽子生产商）等。销售渠道：沃尔玛，华润万家，吉之岛，山姆会员店等。</p>
		                  
		                </div>
		               </div>
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/lp.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>赖汉臻</b></h4>
		                  <h4 class="media-heading"><b>法律顾问</b></h4>
		                  <hr>
		                  <p>现任中国福建省三家不同矿业公司之董事及西伯利亚矿业集团有限公司独立非执行董事。 二零零四年及二零零七年在中国政法大学及澳门科技大学取得法律硕士学位，并于二零一二年取得澳门科技大学法律博士学位。</p>
		                  
		                </div>
		               </div>
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/yxz.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>叶学忠</b></h4>
		                  <h4 class="media-heading"><b>管理顾问</b></h4>
		                  <hr>
		                  <p>和君创业咨询集团副总裁 、深圳市高新技术企业金融服务促进 战略顾问 、华中科技大学深圳校友会副会长。</p>
		                  
		                </div>
		               </div>
		              <div class="media" style="background:#f8f8f8; border-radius:4px; margin:20px auto;">
		                <div class="media-left" style="float:left;padding-right: 10px;">
		                    <img src="/img/newimg/img/help/cwx.jpg" height="180">
		                </div>
		                <div class="media-body">
		                  <h4 class="media-heading" style="padding-top: 10px;"><b>陈伟雄</b></h4>
		                  <h4 class="media-heading"><b>顾问</b></h4>
		                  <hr>
		                  <p>广东广播电视发展中心--节目总监、 香港飞天礼仪集团公司--董事长 广东省企业家投融资商会--秘书长。</p>
		                  
		                </div>
		               </div>
		
		            </div>
		          </ul>
		          <!-- 帮助-团队信息布局结束 -->
		          <!-- 帮助-招聘信息布局开始 -->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab7" style="margin-left:30px;">
		            <li class="regerds zp-re">
		             <h3><strong>慢慢来招聘(简历请发邮箱hr@apptown.cn)</strong></h3> 
		              <hr>
		
		              <p style="font-size: 16px; margin-top: 30px">
		                <b>前端架构师:</b>
		              </p>
		
		              <p style="margin-top: 20px">岗位职责：</p>
		              <p>1、负责网站的前端整体架构设计，持续的优化前端体验和页面响应速度；</p>
		              <p>2、负责梳理和优化前端开发流程，提高前端开发质量和效率；</p>
		              <p>3、和后台工程师深度交流合作，一起研讨技术实现方案；</p>
		              <p>4、负责复杂业务的前端方案设计和技术选型，推动前端架构和框架在各业务线落地实施；</p>
		              <p>5、熟练掌握HTML5\CSS3\JAVASCRIPT等前端相关技术。</p>
		
		              <p style="margin-top: 30px">任职资格：</p>
		              <p>1、精通HTTP协议，熟悉TCP/IP协议；</p>
		              <p>2、精通HTML、CSS、JavaScript等相关web知识，熟悉各种大型网站常用的前端框架；</p>
		              <p>3、在前端自动化测试、单元测试，持续集成方面有一定经验或者独到见解；</p>
		              <p>4、对前后端的协作模式、产品和项目流程有深入理解；</p>
		              <p>5、具有大型复杂Web项目研发与维护经验；</p>
		              <p>6、有移动端相关开发经验。</p>
		
		              <hr>
		              <p style="font-size: 16px; margin-top: 40px" id="official">
		                <b>文案策划:</b>
		              </p>
		
		              <p style="margin-top: 20px">岗位职责：</p>
		              <p>1、公司新媒体平台（微博、微信等）的整体运营和推广；</p>
		              <p>2、各新媒体平台的内容选取、文案编辑、发布和推广；</p>
		              <p>3、各新媒体平台粉丝招募和维护，维护良好的互动氛围；</p>
		              <p>4、微博/微信活动策划与执行；</p>
		              <p>5、各新媒体平台推广效果的跟踪、数据分析、反馈及优化调整等工作；</p>
		              <p>6、新媒体产品挖掘与合作洽谈，能够掌握新媒体动向，进行实时的网络营销推广；</p>
		              <p>7、完成领导交给的其他工作。</p>
		
		              <p style="margin-top: 30px">任职资格：</p>
		              <p>1、一年左右微信、微博运营相关工作经验；</p>
		              <p>2、随时关注互联网、移动互联网市场动态，熟悉网络语言；</p>
		              <p>3、热爱新媒体营销相关工作，精通新媒体营销基本方法；</p>
		              <p>4、熟悉社会化媒体运作方式，具有策划营销能力和执行能力；</p>
		              <p>5、具有良好的沟通能力、语言表达能力及较强的文字编辑能力；</p>
		              <p>6、有良好的学习创新能力，工作积极主动，能够承受一定的工作压力；</p>
		              <p>7、熟练运用Excel及PowerPoint等办公软件。</p>
		              <hr>
		              <p style="font-size: 16px; margin-top: 40px"id="product">
		                <b> 产品经理（移动互联网）:</b>
		              </p>
		              <p style="margin-top: 20px">岗位职责：</p>
		              <p>1、负责手机端产品规划、设计和项目执行，以及持续的改进完善等工作；</p>
		              <p>2、协助运营整理和分析运营数据，对产品发展和运营做出规划；</p>
		              <p>3、协助市场制订并落实推广政策、推广方式和推广物料，并负责跟进高质量完成；</p>
		              <p>4、根据公司业务发展状况，收集和分析用户及市场需求，完成公司手机端产品规划和设计；</p>
		              <p>5、了解用户需求，分析竞争对手动态和市场动态，执行产品路线图，提出产品需求和改良意见，</p>
		              <p>形成原型图和需求策划文案等工作；</p>
		              <p>6、推动并管理产品从开发、测试、改进、直到上线发布的整个项目；</p>
		              <p>7、分析产品运营数据、跟进用户反馈，确定迭代改进需求，不断完善和优化产品，</p>
		              <p>提升产品的用户体验。</p>
		
		              <p style="margin-top: 30px">任职资格：</p>
		              <p>1、三年以上移动终端产品规划设计相关工作经验，其中至少一年以上产品相关岗位管理经验；</p>
		              <p>2、熟练操作windows
		                office、visio、MinManager、axure等基本产品工具；熟悉B2B、B2C、C2C等</p>
		              <p>移动端电子商务平台业务流程的优先；</p>
		              <p>3、强烈好奇心、内驱力和思考力，对国内外互联网产品与技术发展有敏锐的观察力和求知欲，</p>
		              <p>对移动互联网产品设计工作有浓厚兴趣。</p>
		
		            </li>
		          </ul>
		          <!-- 帮助-招聘信息布局结束 -->
		          <!-- 帮助-联系信息布局开始 -->
		          <ul role="tabpanel"  class="list-unstyled col-md-11 tab-pane fade" id="tab8" style="margin-left:30px;">
		            <li class="regerds kzp-re">
		              <h3><strong>联系我们</strong></h3> 
		              <hr>
		              <div id="allmap"></div>
		              <div>
		                <p style="margin-top: 30px">公司地址：深圳市龙岗区龙城大道99号正中时代广场B座12楼1206</p>
		                <p>邮编：518116</p>
		                <p>公司传真：0755-89892242</p>
		                <hr>
		                <p>商务合作&企业服务</p>
		                <p>全国服务热线：400-046-1388</p>
		                <p>微信公众号：manmanlai35</p>
		                <p>
		                  <img src="/img/newimg/img/help/bzerw.jpg" width="150">
		                </p>
		
		                <p style="margin-top: 40px">公司座机：0755-89892157</p>
		                <p>Email：info@apptown.cn</p>
		                <p>联系人：陆水清</p>
		                <p>手机：13715114926</p>
		
		                <hr>
		
		                <p>站内求助 & 投诉举报</p>
		                <p>Email：kf@apptown.cn</p>
		              </div> <!--  <p> <a>在线提交留言 >></a></p>
		             <p> 欢迎向我们提交任何网站的问题和意见建议</p> -->
		
		            </li>
		          </ul>
		          <!-- 帮助-联系信息布局结束-->
        	 </div>
        </div>
        <!--右侧边栏结束-->
    
    </div>
    <input type="hidden" value="${tabnub }" id="tabnub">
      <%@include file="/jsp/common/mml_bottom.jsp"%>
      <script src="/js/common/angular-ui-router.min.js?v=10"></script>
       <script src="/js/view/user_center.js"></script> 
</body>
</html>