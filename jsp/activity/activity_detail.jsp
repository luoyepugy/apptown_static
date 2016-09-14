<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="activity_detail">
<head>
<meta charset="UTF-8">

    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn/index.html#/activity_detail/${activityId}");//手机打开跳转到手机页面
</script>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta name="renderer" content="webkit">
</head>
<body ng-controller="detail_centerController">

  <%@include file="/jsp/common/mml_nav.jsp"%> 
      <div class="pup_act_f">  
         <div class="pr ">
            <img src="/img/act_pup_top.jpg" class="top_icon_o">
            <div class="wd cen cf title_po">
            {{detail.title}}
            </div> 
            
            <img  src="/img/close_p.png" class="close_p">
            <div class="activity_live_url"   ng-bind-html="detail.live_url|to_trusted:''">
        
            	
            </div>
         </div>
         
         <div class="pr wd cen df_poiu_q">
             <img src="/img/qc_icon_b.png" class="qc_poiuy_a">
             <div class="qc_icon_p"  ng-init="qcode('qc_icon_p','http://www.apptown.cn/scan/scanActivityCode?activityId=${activityId}',402,372)">
             
             </div>
         </div>
  </div>
    
  <!--   <div class="act_title_list">
       <p class="wd">
            <a href="/">首页</a> / 
            <a href="/">活动列表</a> / 
             <a href="#" class="zc">活动</a>
        </p>
    </div> -->
    
    <div class="bgff btr pb20">
    <div class="wd bgff mt20 ">
     <p class="wd">
            <a href="/" class="zc">首页</a> &nbsp;> &nbsp;
            <a href="/" class="zc">活动列表</a> &nbsp;> &nbsp;
             <a href="#" class="zc">活动</a>
        </p>
        <div class="head_full_details mt20">
               <div class="act_de_lef fl  pr"> 
                     <div class="container-fluid act_banner_a">
	<div class="row-fluid ">
		<div class="span12">
			<div class="carousel slide" id="carousel-730492">
				
				<div class="carousel-inner">

				    <div class="item"  ng-repeat="img in detail.images_po" finish>
						<img alt=""  ng-src="{{img|win_hao:''}}"/>
					</div> 
					
					
				</div> 
                <div class="switchover_poi carousel-indicators" ng-if="detail.images_po.length>1">
                
                       <div class="fl " data-slide-to="{{$index}}" data-target="#carousel-730492" ng-repeat="img in detail.images_po">
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
                  <p class="fz20 date_p_titke " ng-bind="detail.title"></p>
            
                   <div class="mt20 act_de_right_list">
                   <p class="zc"><span class="zq">时间：</span> <span ng-bind="detail.startDate+'  -  '+detail.endDate"></span></p>
                   <p ng-if="detail.type!=10" class="zc"><span class="zq">地点：</span><span ng-bind="detail.city_name+detail.address"></span></p>
                   <p ng-if="detail.type==10" class="zc"><span class="zq">地点：</span><span ng-bind="detail.address"></span></p>
                  <!--  <p class="zc"><span class="zq">主&nbsp;&nbsp;&nbsp;&nbsp;办方：</span><span ng-bind="detail.sponsor_name"></span></p> -->
                   <p class="zc"><span class="zq">行业 :</span> <span ng-bind="classify[1].maker_title[detail.industry_id-1].name"></span></p>
                      <p class="zc  Organizer_po mt20"> 
                               <img ng-if="detail.sponsor_auth==0" ng-src="{{detail.sponsor_head}}">
                               <img class="pointer" data-href="/activity/to_host_list?sponsor_id={{detail.sponsor_user_id}}" ng-if="detail.sponsor_auth==1" ng-src="{{detail.sponsor_head}}">
                        
                            <span   ng-if="detail.sponsor_auth==0" ng-bind="detail.sponsor_name" ></span>
                             <span class="green_new pointer"   data-href="/activity/to_host_list?sponsor_id={{detail.sponsor_user_id}}"  ng-if="detail.sponsor_auth==1" ng-bind="detail.sponsor_name"></span>
                            
                          </p>
                          <div ng-if="detail.ticket_list.length>0">
                      <div class="zc tico_poiouty_a">
                            <span class="zq">票种 :</span>
                          
                           <p class="f_d ticket_type_p tl" ng-repeat="stl in detail.ticket_list" finish ng-click="act_detail.ticket_types(stl.remark,stl.price)" data-xz="1" data-num="{{stl.price}}" data-id="{{stl.id}}">
                           <span ng-bind="stl.name"></span><br>
                          	 余票：<span  class="hs" ng-bind="stl.sum_num-stl.use_num"></span>
                           
                           <i class="f_i gou_po"></i>
                           
                           </p>
                         <!--   <p class="f_d ticket_type_p act">人POPPING单项报名费<i class="f_i gou_po"></i></p> -->
                       </div>
                         <p class="zc mt10"><span class="zq">说明 ：</span> <span ng-bind="remark"> </span></p> 
                     
                   <p class="zc mt10"><span class="zq">票价 :</span> <span class="hs fz20" ng-bind="ticket_price"></span>元</p>
                       
                    <p class="zc mt10"><span class="zq">张数 :</span> <span > <a class="zc aser_a yj4" ng-click="act_detail.plus_sign(true)">-</a> <span ng-bind="p_num" class="dssd_po"></span><a class="zc aser_a yj4" ng-click="act_detail.plus_sign(false)">+</a> </span></p>
                     
                      </div> 
                   <p class="act_list_right_a mt10 act_list_right_p" ng-if="detail.status==0">
                
                         <a class="btn btn-primary apply_button " id="apply_button_poi" ng-click="act_detail.sign_up_p()" ng-if="active_state==1&&detail.is_applay!=true"> 我要报名 </a>
                         <a class="btn btn-primary apply_button " ng-if="active_state==2&&detail.is_applay!=true" style="background:#f4f4f4;color:#575757"> 活动已结束</a>
                   	 <a class="btn btn-primary apply_button " ng-if="detail.is_applay==true" style="background:#f4f4f4;color:#575757"> 活动已报名</a>
                   	
                   	  <!--   <a class="btn collect_po">我要收藏</a> -->
                         <a class="btn collect_po ml10" ng-click="act_detail.qd_sign_in(detail.live_url)">活动签到</a>
                   </p>
                    <p class="act_list_right_a mt10" ng-if="detail.status==1">
                   
                        <a class="btn apply_button"  class="btn btn-primary" ng-click="act_detail.release_po()">发布</a>
                         <a class="btn collect_po qd_poiuy" data-href="/activity/to_sponsor_activity?activityId=${activityId}">编辑</a>
                   </p>
                   
                   </div>
               </div>
            <p class="qc"></p>
        </div>

    </div>
   </div> 
    
        <div class="wd ov mt10">
            <div class="act_list_p_lefy fl  tabbable   ov act_list_p_lefy_q">
               <div class="liuy_tipye_top bgff ">
                      <p class="liuy_tipye_top_n fl act" data-hf="#activity_details">活动详情</p>
                      <p class="liuy_tipye_top_n fl" data-hf="#act_mentors" ng-if="detail.honored_guest.length>0">活动嘉宾 <span class="hs" ng-bind="'('+detail.honored_guest.length+'人)'"></span></p>
                      <p class="liuy_tipye_top_n fl" data-hf="#participants" ng-if="mess_cy.length>0">参与人数 <span class="hs" ng-bind="'('+mess_cy.length+'人)'"></span></p>
                      <p class="qc"></p>
                </div>  
                
                
                <div class="bgff  po_text_a" >
                    <div id="activity_details">
                        <p  class="act_text_a" > <span>活动详情</span></p>
                        <div class="act_data_a zc" ng-bind-html="detail.details|to_trusted:''">
                           
                       
                        </div>
                        
                   </div>
                    
                    
                    <div id="act_mentors" class="mt20" ng-if="detail.honored_guest.length>0">
                         <p  class="act_text_a" > <span>活动嘉宾</span></p>
                         <div >
                             
                             <div class="user_mentor fl" ng-repeat="gu in detail.honored_guest">
                                  <img ng-src={{gu.honored_guest_icon_b}} class="fl yj">
                                  <div class="ov pl20">
                                     <p class=" zq fz16" ng-bind="gu.honored_guest_name_b"></p>
                                      <p class="zc mt20 df_poiu_5" ng-bind="gu.honored_guest_position_b"></p>
                                 </div>
                             </div>
                               
                            
                               
                           
                             
                             <p class="qc"></p>
                          
                        
                        </div>
                    
                    </div>
                   <p class="qc"></p>
                    
                      <div id="participants" class="mt40" ng-if="mess_cy.length>0">
                         <p  class="act_text_a" > <span>参与人数</span></p>
                          <div class="mt10 ov">
                              <div class="case_poiu_q">
                                <div class="participants_num" ng-repeat="ms in mess_cy">
                                   <img ng-src="{{ms.user_icon}}" class="fl">
                                   <div class="ov pl20">
                                        <p class="dian fz18 zq" ng-bind="ms.nick_name"></p>
                                        <p class="fz12 mt10" ng-bind="ms.phone"></p>
                                        <p class="fz12 " ng-bind="ms.timestamp|getDateDiff:''"></p>
                                    </div>
                                </div>
                                  
                                   
                                    
                                  
                               
                                  
                                  
                                  
                                  
                                  <p class="qc"></p>
                                  
                           </div>
                          </div>
                                  
                    </div>
                    
                    
                    
                </div>
               
                <div class="mt10 comment_po bgff yj4">
                    <p class="fz20 zq mt20">您有任何问题，在这里提问！</p>
                     <textarea class="mt10" placeholder="有好多心里话，想对主办方说..." id="meeage_p" maxlength="200"></textarea>
                    <p class="tr">
                        
                       <button class="btn btn-primary" ng-click="act_detail.ti_message()">提问</button>    
                    </p>
                    
                    <p class="mt10 fz20 zq">
                       全部讨论...
                    </p>
                    <div class="mt10">
                    
                        <ul class="mess_poiou">
                        <li class="cen mt20 zc" style="padding-top:60px" ng-if="mess_oiu.length==0">还木有人评论，赶快抢个沙发！</li> 
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
                                     <textarea class="er_poou" maxlength="200">
                                
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
            
            <div class="act_list_p_right fr  bgff">
            <c:if test="${support_id<0||support_id==undefined}">  
            	<div class="cen pd poiut_top_q">
            	<div class="raise_right fl">
                          <p class="zc dian fz16 b" >￥0</p>
                          <p>目标金额</p>
                    </div>
                    <div class="raise_right fl">
                      <p class="zc dian fz16 b" >￥0</p>
                          <p>已筹金额</p>
                    </div>
                    <div class="raise_right fl mt10">
                      <p class="zc dian fz16 b" >0%</p>
                          <p>赞助进度</p>
                    </div>
                    <div class="raise_right fl mt10">
                      <p class="zc dian fz16 b" >0天</p>
                          <p>剩余时间</p>
                    </div>
                    
                     <!--<div class="raise_right fl mt10 raise_right_qc pr"  ng-init="qcode('raise_right_qc','http://m.apptown.cn/activity_support/support_detail?activity_support_id=${support_id}',97,100)" >
                       <img src="/img/share_activity.png" class="logo_p_act">
                    </div>
                    
                    <div class="raise_right fl mt10">
                        <p class="fz12 mt20">扫描左侧二维码</p>
                        <p>"<span class="fz20 hs">马上赞助</span>"</p>
                    </div>-->
                    <p class="qc"></p>
                    
                    <p class="mt10 cen">
                     <a class="btn   want_sponsor"   target="_blank">我要赞助</a> 
                   
                     
                    </p>
                   <!-- <p class="mt10">  <span class="hs b " ng-bind="detail_o.join_count"></span>已赞助</p>-->
               <!--<div class="cen pd poiut_top_q">
                   <p class="fz18 zq mt10"><strong>便捷的活动发布平台${support_id }</strong></p>
                   <p class="mt10">
                     轻松举办一场活动<br>
                       <a class="btn btn-primary  want_launch" ng-href="/activity/to_sponsor_activity">我要发起</a>
                   </p>
                </div> -->
               </div>
                </c:if>
                     <c:if test="${support_id>0&&status}">   
                <div class="cen pd poiut_top_q">
                    <div class="raise_right fl">
                          <p class="hs dian fz16 b" ng-bind="'￥'+detail_o.target_amount"></p>
                          <p>目标金额</p>
                    </div>
                    <div class="raise_right fl">
                      <p class="hs dian fz16 b" ng-bind="'￥'+detail_o.now_money"></p>
                          <p>已筹金额</p>
                    </div>
                    <div class="raise_right fl mt10">
                      <p class="hs dian fz16 b" ng-bind="detail_o.schedule"></p>
                          <p>赞助进度</p>
                    </div>
                    <div class="raise_right fl mt10">
                      <p class="hs dian fz16 b" ng-bind="detail_o.end_time|reduce_time:''"></p>
                          <p>剩余时间</p>
                    </div>
                    
                     <div class="raise_right fl mt10 raise_right_qc pr"  ng-init="qcode('raise_right_qc','http://m.apptown.cn/activity_support/support_detail?activity_support_id=${support_id}',97,100)" >
                       <img src="/img/share_activity.png" class="logo_p_act">
                    </div>
                    
                    <div class="raise_right fl mt10">
                        <p class="fz12 mt20">扫描左侧二维码</p>
                        <p>"<span class="fz20 hs">马上赞助</span>"</p>
                    </div>
                    <p class="qc"></p>
                    
                    <p class="mt10 cen">
                     <a class="btn btn-primary  want_launch" ng-href="/support/82864${support_id}82864.httl"  target="_blank">我要赞助</a> 
                   
                     
                    </p>
                    <p class="mt10">  <span class="hs b " ng-bind="detail_o.join_count"></span>已赞助</p>
                </div>
                </c:if>
                 <div class="cen pd poiut_top_q">
                 
                   <p class="mt20 zc fz16">
                     微信扫一扫<br>
                     分享至朋友圈 
                   </p>
                     <img class="qc_icon_q pr" alt="分享二维码" 
                     src="http://www.2d-code.cn/2dcode/api.php?key=c_e170d93zzNkfW4eEg0KMr0oYZvO8ZIkR47oRRwUkt4&text=http://m.apptown.cn/index.html%23/activity_detail/${activityId}&logo=http://resource.apptown.cn/share/share_activity.png">
                     <p class="mt30 fz16">扫一扫分享才精彩</p>
                </div>
                
                <div class="pd ov">
                  <p class="fz20 zq mt20">热门活动</p>
                    <p class="host_icon_a mt10" data-href="/activity/{{activity_hot[0].j_id}}.httl">
                      <img ng-src="{{activity_hot[0].activity_first_face}}" class="yj4">
                    </p>
                    <ul class="tujian_poiu">
   
                     <li class="pr mt10" ng-repeat="hot in activity_hot" data-href="/activity/{{hot.j_id}}.httl">
                    	 <span class="yj" ng-bind="$index+1"> </span>
                    	    <p class="dian fl" ng-bind="hot.activity_title"></p>
                        </li>
                               
                    </ul>
                </div> 
            
            </div>
        </div>
        
     <!--    表单 -->
       <div id="change_form_o" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="form_p_type form_p_type_ouy">
               <p class="form_title_a">完善报名信息   <button type="button" class="close" ng-click="act_detail.load_poi()">×</button></p>
               <div class="form_po mt20">
                   <div class="10" ng-repeat="co in detail.detail_config"> 
                   		<p class="fz16" ng-bind="co.name"></p>  
                  		<p class="mt10 input_form_m"> 
                  		    <input type="text" placeholder="请输入{{co.name}}" data-pl={{co.designation}} data-bt="{{co.necessary}}">
                  		 </p> 
                   </div>
                     <div class="10 cen">  
                        <a class="btn my_succse_a" ng-click="act_detail.want_sign_up(0)">我要报名</a>
                     </div>
               </div>
           </div> 
           
            <div class="form_p_type ion_poiu_a">
               <p class="form_title_a">选择付款方式   <button type="button" class="close" data-dismiss="modal">×</button></p>
               <div class="form_po mt20">
                   <div class="10"> 
                   	  <p class="fz16">支付金额：<span class="hs">{{ticket_price}}</span></p>
                   	  <p class="wx_icon_coin">
                   	     <label class="e_the_coin f_b">
                   	        <input type="radio" name="coin" data-ty="0" class="zf_poi" >
                   	        
                   	      
                   	        <i class="f_i eb_po"></i>
                   	     </label>
                   	      <label class="wx_the_coin f_b ml20" >
                   	        <input type="radio" name="coin" checked="checked"  data-ty="1" class="zf_poi">
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
                        <a class="btn my_succse_a" ng-click="act_detail.want_sign_up(1)">确认支付</a>
                     </div>
                    
               </div>
           </div>
       </div>
     
     <input type="hidden" value=${activityId} id="activityId">  
     <input type="hidden" value=${support_id} id="support_id"> 

     <%@include file="/jsp/common/mml_bottom.jsp"%>
   
    <script src="/js/view/activity_detail.js"></script>
</body>
</html>