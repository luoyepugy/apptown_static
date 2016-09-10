<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="sponsor_detail">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>赞助详情</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="sponsor_centerController" ng-cloak>
  

  <%@include file="/jsp/common/mml_nav.jsp"%> 
    <div class="act_title_list">
       <p class="wd">
            <a href="/" >首页</a> / 
            <a href="/">赞助列表</a> / 
             <a href="#" class="zc">赞助</a>
        </p>
    </div>
    
    <div class="wd bgff mt20 yj4">
        <div class="head_full_details yj4">
        	
        	
               <div class="act_de_lef fl  pr"> 
                     <div class="container-fluid act_banner_a">
	<div class="row-fluid ">
		<div class="span12">
			<div class="carousel slide" id="carousel-730492">
				
				<div class="carousel-inner">

				    <div class="item"  ng-repeat="img in detail.poster" finish>
						<img alt=""  ng-src="{{img|win_hao:''}}"/>
					</div> 
					
					
				</div> 
                <div class="switchover_poi carousel-indicators" ng-if="detail.poster.length>1">
                
                       <div class="fl " data-slide-to="{{$index}}" data-target="#carousel-730492" ng-repeat="img in detail.poster">
                           <div class="bg_adf"></div>
                           <img alt="" ng-src={{img|win_hao:''}} />
                        </div> 
                     
                      <div class="qc">
                    
                    
                    </div>
                  
                </div>
               
			</div>
		</div>
	</div>
</div>
 </div>
            
               <div class="act_de_right ov pl20">
                  <p class="fz18 zq mt10 dian "><strong class="sponsor_1st"  ng-bind="detail.name"></strong></p>
                   <div class="mt20 act_de_right_list">
                   <p class="zc"><span>已筹金额：</span> <span class="hs fz18" ng-bind="'￥'+detail.now_money"></span></p>
		           <div class="progress sponsor_bar">
		              <div class="bar" style="width:{{detail.schedule}}"> 		                  
		              </div>		              
		           </div>
                   <p class="zc fz16">赞助进度：<span ng-bind="detail.schedule"></span>&nbsp;&nbsp;&nbsp;&nbsp;剩余天数：<span class="" ng-bind="detail.end_time|reduce_time:''"></span>&nbsp;&nbsp;&nbsp;&nbsp;目标金额<span class="" ng-bind="'￥'+detail.target_amount"></span></p>
                    <p class="zc">开始时间：<span ng-bind="detail.start_time_fm"></span></p>  
                    <p class="zc">结束时间：<span ng-bind="detail.end_time_fm"></span></p> 
                    <p class="zc">行业：<span ng-bind="classification.maker_title[detail.industry_id].name"></span></p>
                    <div class="zc clearfix">
                    	<img class="pull-left" ng-src="{{detail.sponsor_head}}" width="30" height="30" style="width:30px;height:30px;" />
                    	<p class="ls sp_host" ng-bind="detail.sponsor_name"></p> 
                    </div>
                </div>
               </div>
            <p class="qc"></p>
        </div>

    </div>
    
    
        <div class="wd ov mt10">
            <div class="act_list_p_lefy fl  tabbable   ov act_list_p_lefy_q">
               <div class="liuy_tipye_top bgff yj4">
                      <p class="liuy_tipye_top_n fl act" data-hf="#sponsor_details">赞助详情</p>
                      <p class="liuy_tipye_top_n fl" data-hf="#participants" >赞助人数 <span class="hs" ng-if="userSum>=0"  ng-bind="'('+userSum+')'"></span></p>
                      <p class="qc"></p>
                </div> 
                
                
                <div class="mt10 bgff yj4 po_text_a">
                    <div id="sponsor_details">
                        <p  class="act_text_a" > <span>赞助详情</span></p>
                        <div class="act_data_a zc" ng-bind-html="detail.content_details|to_trusted:''">
                           
                       
                        </div>
                        
                   </div>
                                                                         
                    
                      <div id="participants" class="mt40" >
                         <p  class="act_text_a" > <span>赞助人数</span></p>
                          <div class="mt10 ov">
                              <div class="case_poiu_q clearfix">
                                <div class="participants_num" ng-repeat="x in user">
                                   <div class="ov pl20">
                                         <p ng-bind="x.nick_name"></p>
		                                  <p>赞助<span class="hs" ng-bind="x.amount+'元'"></span></p>
		                                  <p ng-bind="x.timestamp|date:'yyyy-MM-dd hh:mm'"></p>
                                    </div>
                                </div> 
                                
                                  <p class="qc"></p>
                                  
                           </div>
                           <p class="addmore" ng-click="add_more()" >更多</p>
                          </div>
                                  
                    </div>
                    
                    
                    
                </div>
               
                <div class="mt10 comment_po bgff yj4">
                    <p class="fz20 zq mt20">您有任何问题，在这里提问！</p>
                     <textarea class="mt10" placeholder="有好多心里话，想对主办方说..." id="meeage_p"></textarea>
                    <p class="tr">
                        
                       <button class="btn btn-primary" ng-click="act_detail.ti_message()">提问</button>    
                    </p>
                    
                    <p class="mt10 fz20 zq">
                       全部讨论...
                    </p>
                    <div class="mt10">
                    
                        <ul class="mess_poiou">
                        <li class="cen mt20" style="padding-top:60px" ng-if="mess_oiu.length==0">还木有人评论，赶快抢个沙发！</li> 
                           <li  ng-repeat="ms in mess_oiu">
                               <div>
                               <img ng-src="{{ms.user_icon}}" class="user_icon_q fl">
                                 <div class="ov pl20">
                                   <div class="fz16">
                                       <span class="fl zq"><a href="#" ng-bind="ms.user_name" class="user_name_o_i"> </a></span> 
                                       <span class="fr zc" ng-bind="ms.create_time|getDateDiff:''"></span>
                                       <p class="qc"></p>
                                   </div>
                                   <p class="zc dianer mt10 poiu_poou" ng-bind="ms.comment_content">
                                   </p>
                                   
                                   <p class="tr"><a class="hui_pou_a">回复</a></p>
                               
                               </div>
                               </div> 
                             
                              <div class="secondary_message" >
                               <div class="er_poiu_qd mt10">
                                         <textarea class="er_poou">
                                
                                </textarea>
                                   <p class="tr"> <button class="btn btn-primary" ng-click="act_detail.ti_er_message($event.target,ms.id)">确认</button> </p>
                               </div>
                         
                                   
                                   
                                   <div ng-repeat="co in ms.childsComment" class="mt10">
                               <img ng-src="{{co.user_icon}}" class="user_icon_q fl">
                                 <div class="ov pl20">
                                   <div class="fz16">
                                       <span class="fl zq"><a href="#" ng-bind="co.user_name"> </a></span> 
                                       <span class="fr zc" ng-bind="co.create_time|getDateDiff:''"></span>
                                       <p class="qc"></p>
                                   </div>
                                   <p class="zc dian mt10 poiu_poou" ng-bind="co.comment_content">
                                   </p>
                                   
                                  </div>
                               
                               </div>
                               </div> 
                            </li>
                      
                        
                        </ul>
                    
                    </div>
                    
                </div>
                
                
                
                
                
                
                
                
            </div>
            <div class="act_list_p_right fr yj4 bgff">
		           <div class="activitySponsor-share">
		              <div class="activitySponsor-btn">		             
		                <button class="btn btn-primary issue-skip" type="button" style="margin-left: 30px;">我要发起</button>		
		              </div>
		              <div class="shareContent">
		                <div class="pull-left" style="line-height:20px;margin-top:5px;">分享</div>
		                <div class="bdsharebuttonbox bdshare-button-style1-16 pull-left" data-bd-bind="1452580212156" style="margin-left:15px;"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
		                </div>
		              </div>
		          </div>
		          <ul class="activitySponsor-list list-unstyled sponsor-repay-list">
		            <li ng-repeat="sp in detail.support_repay_array" style="position:relative;">
		              <h1>
		              	<span>赞助：<em class="text-danger" style="font-style: normal" ng-bind="'￥'+sp.support_amount+'元'"></em></span>
		              	<a ng-if="sp.surplus_num>0||sp.person_limit==0" class="btn btn-danger go_sponsor"  style="position:absolute;right:0;top:5px;"  ng-click="pup_spoason(sp.support_amount,sp.repay_content,sp.repay_time,sp.id,sp.surplus_num)">去赞助</a>
		              	<a ng-if="sp.surplus_num<=0&&sp.person_limit!=0" onclick="alert('赞助分数不足')" class="btn btn-danger go_sponsor"  style="position:absolute;right:0;top:5px;">去赞助</a>
		              </h1>
		              <h2 ng-bind="'回报类型：'+sp.repay_title"></h2>
		              <h3 ng-bind="'回报内容：'+sp.repay_content"></h3>
		              <h4 ng-bind="sp.repay_time+'之前实现'"></h4> 
		              <h5 ng-if="sp.person_limit!=0">剩余<span class="text-primary" ng-bind="sp.surplus_num" ></span>份（总共<span ng-bind="sp.person_limit" ></span></span>份）</h5>
		              <h5 ng-if="sp.person_limit==0">赞助份数无限制</h5>
		            </li>
		             
		          </ul>		            
            </div>
        </div>
        
     <!--    表单 -->
       <div id="change_form" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="form_p_type form_p_type_ouy">
               <p class="form_title_a">完善报名信息   <button type="button" class="close" data-dismiss="modal">×</button></p>
               <div class="form_po mt20">
                   <div class="10" ng-repeat="co in detail.detail_config"> 
                   		<p class="fz16" ng-bind="co.name"></p>  
                  		<p class="mt10 input_form_m"> 
                  		    <input type="text" placeholder="请输入{{co.name}}" data-pl={{co.designation}}>
                  		 </p> 
                   </div>
                     <div class="10 cen">  
                        <a class="btn my_succse_a" ng-click="act_detail.want_sign_up()">我要报名</a>
                     </div>
               </div>
           </div> 
           
            <div class="form_p_type ion_poiu_a">
               <p class="form_title_a">选择付款方式   <button type="button" class="close" data-dismiss="modal">×</button></p>
               <div class="form_po mt20">
                   <div class="10"> 
                   	  <p class="fz16">支付金额：<span class="hs">200</span></p>
                   	  <p class="wx_icon_coin">
                   	     <label class="e_the_coin f_b">
                   	        <input type="radio" name="coin">
                   	        <i class="f_i eb_po"></i>
                   	     </label>
                   	      <label class="wx_the_coin f_b ml20">
                   	        <input type="radio" name="coin" checked="checked">
                   	        <i class="f_i wx_coin_icon"></i>
                   	     </label>
                   	  </p>
                   	  
                   	  <p class="fz16 zq mt10">
                   	       付款说明
                   	  </p>
                   	  <p class="zc mt20">
                   	  1.付款完成后您将收到【活动小精灵】的电子票号及二维码链接，参加活动时请出示二维码凭证（手机开启或打印）或者短信<br>
                   	  2.付款完成后如果没有收到电子票短信，您可以进入我的活动行查询并打印，或者联系活动行客服
                   	  </p>
                   </div>
                    <div class="20 cen">  
                        <a class="btn my_succse_a" ng-click="act_detail.want_sign_up()">确认支付</a>
                     </div>
                    
               </div>
           </div>
       </div>
       
       <!--赞助信息弹框开始 -->
       <div class="modal fade" id="modal-sponsor" style="display:none" data-repayId="{{o_repayId}}">
			    
			
			<div class="modal-dialog">
			        <div class="modal-content">
			            <div class="modal-header">
							<button id="mo_close" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title">订单详情</h4>
						</div>
						<div class="modal-body" style="overflow:visible;max-height:none;">
							<div class="media">
									<p class="pull-left fz16" ng-bind="sponsor_1st" style="margin-top:15px;"></p>
									<div class="pull-left" style="position:relative;padding-top:10px;">
										<p class="pull-left">
											<button type="button" class="btn btn-default btn-md btn-dn repay-num-exec"  data-tag="c">-</button>
											<span id="submit_repay_num">1</span>
											<button type="button" class="btn btn-default btn-md btn-up repay-num-exec"  data-tag="a">+</button>
										</p>
										<p class="pull-left" style="line-height: 30px;padding-left: 10px;">支付金额：¥<span id="repay_money" class="text-danger" ng-bind="num_m"></span>元</p>
									</div>
								
							</div>
							<form id="repay_form">								
									<div class="form-group" style="padding-top: 15px;">										
										姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：<input id="repay_form_name" class="form-control" type="text" style="width:400px" placeholder="请填入姓名">
									</div>	
									<div class="form-group">										
										手机号码：<input id="repay_form_phone" class="form-control" type="text" style="width:400px" placeholder="请填入手机号码">
									</div>	
									<div class="form-group">										
										公司地址：<input id="repay_form_address" class="form-control" type="text" style="width:400px" placeholder="请填入公司地址"> 
									</div>	
							</form>
							<p>回报介绍：<span ng-bind="o_induction"></p>
							<p></p>
							<p>
							回报时间：<span ng-bind="o_repaytime|date:'yyyy-MM-dd hh:mm'"></span>
							</p>
							<p>
							发起人：<span ng-bind="detail.sponsor_name"></span>
							</p>
							<p>
							联系电话：
							</p>
							<p class="post_xy_a clearfix"> 
					         <label class="pull-left toggleBackground" data-in=true  ng-click="toggleCorrect()" style="width: 30px; height: 30px; background:url(/img/pc_icon.png) -280px -18px"></label> 
					          <span class="pull-left">阅读并同意e场景活动的<a href="/jsp/common/e_protocol.jsp" target="_blank">《e场景活动平台赞助服务协议》</a></span>
					        </p>
						</div>
						<div class="modal-footer"  style="text-align: center;">
							<a ng-click="modalPay()" type="button" class="btn btn-danger btn-md">我要赞助</a>
							<input id="submit_repay_id" type="hidden" value="${supportRepay.id}">
						</div>
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
         </div>
       <!--弹框结束-->
       <!--微信弹框开始-->
       						<div class="modal fade" id="wechatPay" style="display:none">
			    <div class="modal-dialog">
			        <div class="modal-content">
			        	<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title h4">选择付款方式</h4>
						</div>
						<div class="modal-body">
							<p class="paymoney">支付金额：<span id="repay_money_show" class="text-danger" ng-bind="sumP"></span>元</p>
							<div>
								<input type="radio" checked="checked">
								<img src="/img/newimg/img/images/wechat-pay.png" width="125" height="45">
							</div>
							<p class="pay-t1">风险说明</p>
							<p class="pay-l1">1.e场景活动只提供平台服务，e场景活动只作为居间方，并不是发起人和支持者中的任何一方，使用e场景平台产生的法律后果由发起人与支持者自行承担。</p>
							<p class="pay-l2">2.由于发起人能力和经验不足、市场经验、法律风险等各种因素，赞助可能失败。如果赞助失败，你支持的款项将会全部原路退还给你。</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger btn-lg" data-dismiss="modal" ng-click="wechar_pay_sponsor()">确认支付</button>
							
						</div>
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
			</div><!-- /.modal -->
       <!--微信弹框结束-->
       <input id="data_sum" type="hidden" data-sum=""/>
          <input type="hidden" value=${supportId} id="supportId">   
     <%@include file="/jsp/common/mml_bottom.jsp"%>
   
    <script src="/js/view/sponsor_detail.js"></script>
      <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
<script>

</script>
</body>
</html>