
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html ng-app="personal_host_main" >
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="UTF-8">
<title>e场景</title>
<meta name="baidu-site-verification" content="VoUwjzsjO4" />
<meta name="renderer" content="webkit" />
<meta name="viewport" content="width=device-width, initial-scale=0.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet"> 
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link  rel="shorcut icon"   href="http://www.apptown.cn/img/shortCut.ico" />    
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1472551681_3187165.css">
<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="http://apptown.cn/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn/index.html#/index");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="personal_host_main" style="background:f8f8f8;">
  <%@include file="/jsp/common/mml_nav.jsp"%>
    <div class="person_top_bg">
    	
    </div>
    <div class="wd  ov person_host_wrap">
	         <div class="person_code_wrap">
	                  <div class="fr">
	                    <div style="padding:10px;">
	                          <img class="person_code"   width="150" height="150"   ng-src="http://www.2d-code.cn/2dcode/api.php?key=c_e170d93zzNkfW4eEg0KMr0oYZvO8ZIkR47oRRwUkt4&text=http://m.apptown.cn/index.html%23/personal_host/{{perDeta.user_id}}&logo=http://resource.apptown.cn/share/share_activity.png">
	                    </div>
	                     
	                       		                    	                    
	             		<p class="cen cf mt5 fz16">
	             		   扫描关注主办方
	             		</p>
	                  </div>
	             		
	         </div>
	         <div class="person_detail">
		        <img class="fl person_host_ico" ng-src="{{perDeta.sponsor_icon}}" width="175" height="175" />
		        <div class="fl pdl10 pdt35" style="width:880px;">
		            <div class="person_detail_content pd10">
		            	<p class="cf d_inline fz28" ng-bind="perDeta.name">
		            	 
		            	</p>
		            	<p data-x="1" class="d_inline ml80 person_atttning attent_change yj4 fz24 pointer" ng-click="attentHost()">
		            	关注TA
		            	</p>
		            	<p class="cf d_inline mt100 fz24 ml218">
		            	活动&nbsp;<span ng-bind="perDeta.activitySize"></span>&nbsp;场
		            	</p>
		            	<p class="cf d_inline fz24  fr" style="line-height:38px;">
		            	参与&nbsp;<span ng-bind="perDeta.signSize"></span>&nbsp;人
		            	</p>		            	
		            </div>
		            <p class="person_signa fz16 mt40 dianer gray" ng-bind="perDeta.introduction">
		            	
		            </p>
		        </div>
		        <div class="qc">
		        </div>
   			 </div>
   			 
   			 <div class="person_tab_1 pr">
   			 	<p class="d_inline pb20 fz18  act point" ng-click="person_tab_act()">TA发起的（{{perDeta.activitySize}}）</p>
   			 	<p class="d_inline pb20 fz18 ml20 point" ng-click="person_tab_mes()">留言板（{{perDeta.comment_count}}）</p>
   			 	<p class="per_bar"></p>
   			 </div>
   			 <div class="person_de_con mt30">
   			 	 <div class="person_de_left fl">
   			 	     <div>
   			 	                   <!--主办办方发起的未结束的活动  -->
		   			 	     <ul class="person_activity_list">
		   			 	              	<li class="yj4 pr" ng-repeat="z in perList" >
						                               <div class="fl case_li_oiuuy">
						                                 <img style="cursor:pointer;" ng-src="{{z.activity_first_face}}" data-href="/activity/16889{{z.id}}16889.httl" data-open="1">
						                               </div> 
						                              <div class="ov pl20">
						                                 <p class="dian fz18" style="width:97%;cursor:pointer;" data-href="/activity/16889{{z.id}}16889.httl" data-open="1"><strong ng-bind="z.activity_title"></strong></p>
						                                  <p class="zc  mt20">
						                                     <label class="f_i time_icon"></label>
						                                      <span ng-bind="z.activity_time"></span>
						                                  </p>
						                                  
						                                    <p class="zc mt5">
						                                     <label class="f_i map_icon_list"></label>
						                                  <span ng-if="z.type==10" ng-bind="z.activity_address"></span>
						                                  <span ng-if="z.type!=10" ng-bind="z.city_name+z.activity_address"></span>
						                                  </p>
						                                  
						                                  
						                                  
						                                  <p class="zc  Organizer_po mt5">
						                                       <img ng-src="{{z.sponsor_image_url}}">
						                                
						                                         <span class="green_new mr5" ng-bind="z.sponsor_name"></span>主办
						                                          <span style="padding:2px 10px;" class="yj4  cf fr green_new" ng-if="z.is_free==0">免费</span>
						                                          <span style="padding:2px 10px;color:#fe4e58"  class="yj4 cf fr" ng-if="z.is_free!=0">￥{{z.activity_money}}&nbsp;起</span>
						                                  </p>
						                                 <p class="mt15">
						                                     <span class="green_new mr5" ng-bind="z.browse_count"></span>浏览
						                                     <span class="ml20 green_new mr5" ng-bind="z.person_count"></span>参与
						                                  </p>
						                                 <!-- 暂时屏蔽赞助 -->  
						                              <!-- <a class="btn btn-primary act_sub_poiu act_sub_poiu_o" data-href="/support/12282{{z.support_id}}12282.httl" ng-if="z.support_id!=null">我要赞助</a>
						                               <a style="background:#a9a9a9" class="btn btn-primary act_sub_poiu act_sub_poiu_o disable_href"    ng-if="z.support_id==null">我要赞助</a>-->
						                               <!-- 暂时屏蔽赞助 -->
						                              <a class="btn btn-primary act_sub_poiu" ng-href="/activity/12282{{z.id}}12282.httl">我要报名</a>
						                              
						                              </div>
						                              <p class="qc"></p>
						                               <!-- 暂时屏蔽赞助 -->
						                              <!--<div style="border-top: 1px solid #f1f1f1; margin-top: 10px;padding-top:5px;">
						                                 <p class="d_inline cen fz16" style="width:32%;line-height:30px;color:#a9a9a9">
						                                    目标金额 {{z.target_money}}
						                                 </p>
						                                 <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
						                                  已筹金额{{z.now_money}}
						                                 </p>
						                                 <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
						                                  项目进度 {{z.schedule}}
						                                 </p>
						                               </div>-->
						                                <!-- 暂时屏蔽赞助 -->
            								</li>
		   			 	        <!--  <li class="yj4   bgff ov pt10 pl5 mb10" style="border:1px #e0e0e0 solid;" ng-repeat="z in perList">
		   			 	           <div class="pr" style="border-bottom:1px #e0e0e0 solid; ">
		   			 	              <div class="fl case_li_oiuuy">
				                         <img style="cursor:pointer;" data-href="/activity/44853{{z.id}}44853.httl" ng-src="{{z.activity_first_face}}"  >
				                       </div> 
				                      <div class="ov pl20">
				                         <p class="dian ls fz18 dian" data-href="/activity/44853{{z.id}}44853.httl" style="width:83%;cursor:pointer;" ><strong  class="zq" ng-bind="z.activity_title"></strong></p>
				                          <p class="zc  mt30">
				                             <label class="f_i time_icon"></label>
				                              <span   ng-bind="z.activity_time"></span>
				                          </p>
				                          
				                            <p class="zc mt10">
				                             <label class="f_i map_icon_list"></label>
				                             <span ng-if="list.type!=10"  ng-bind="z.activity_address"></span>
				                          </p>
				                          
				                          
				                          
				                          <p class="zc  Organizer_po mt10">
				                               <img ng-src="{{z.sponsor_image_url}}">
				                        
				                                 <span class="green_new" ng-bind="z.sponsor_name"></span>主办
				                                    <span style="padding:5px 10px;" class="yj4  green_bg1_f cf" ng-if="z.is_free==0">免费</span>
                                                    <span style="padding:5px 10px;background:#fe4e58"  class="yj4 cf" ng-if="z.is_free!=0" ng-bind="z.activity_money+'元起'"></span>
				                                    
				                          </p>
				                         <p class="mt20">
				                             <span class="hs" ng-bind="z.browse_count"></span>浏览
				                             <span class="ml20 hs ng-binding" ng-bind="z.person_count"></span>参与
				                          </p>
				                          
		                                 <a style="background:#a9a9a9" class="btn btn-primary act_sub_poiu act_sub_poiu_o disable_href" ng-if="z.support_id==null">我要赞助</a>
		                                  <a class="btn btn-primary act_sub_poiu act_sub_poiu_o" data-href="/support/12282{{z.support_id}}12282.httl" ng-if="z.support_id!=null">我要赞助</a>
				                      <a class="btn btn-primary act_sub_poiu" data-href="/activity/45468{{z.id}}45468.httl">我要报名</a>
				                      </div>
		                      			<p class="qc"></p>
		   			 	           </div>
				                   <div>
				                     <p class="d_inline cen fz16" style="width:32%;line-height:30px;color:#a9a9a9">
				                   		  目标金额 {{z.target_money}}
				                     </p>
				                     <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
				                   		已筹金额{{z.now_money}}
				                     </p>
				                     <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
				                   		 进度 {{z.schedule}}
				                     </p>
				                   </div>
		                   		  </li> -->
   			 	     		</ul>
   			 	     		<div class="person_overdate" >
   			 	     		    <ul class="person_activity_list"  style="display:none">  			 	     		    	      
		                   		          <li class="yj4 pr" ng-repeat="d in perOver" >
						                               <div class="fl case_li_oiuuy">
						                                 <img style="cursor:pointer;" ng-src="{{d.activity_first_face}}" data-href="/activity/16889{{d.id}}16889.httl" data-open="1">
						                               </div> 
						                              <div class="ov pl20">
						                                 <p class="dian fz18" style="width:97%;cursor:pointer;" data-href="/activity/16889{{d.id}}16889.httl" data-open="1"><strong ng-bind="d.activity_title"></strong></p>
						                                  <p class="zc  mt20">
						                                     <label class="f_i time_icon"></label>
						                                      <span ng-bind="d.activity_time"></span>
						                                  </p>
						                                  
						                                    <p class="zc mt5">
						                                     <label class="f_i map_icon_list"></label>
						                                  <span ng-if="z.type==10" ng-bind="d.activity_address"></span>
						                                  <span ng-if="z.type!=10" ng-bind="d.city_name+d.activity_address"></span>
						                                  </p>
						                                  
						                                  
						                                  
						                                  <p class="zc  Organizer_po mt5">
						                                       <img ng-src="{{d.sponsor_image_url}}">
						                                
						                                         <span class="green_new mr5" ng-bind="d.sponsor_name"></span>主办
						                                          <span style="padding:2px 10px;" class="yj4  cf fr green_new" ng-if="d.is_free==0">免费</span>
						                                          <span style="padding:2px 10px;color:#fe4e58"  class="yj4 cf fr" ng-if="d.is_free!=0">￥{{d.activity_money}}&nbsp;起</span>
						                                  </p>
						                                 <p class="mt15">
						                                     <span class="green_new mr5" ng-bind="d.browse_count"></span>浏览
						                                     <span class="ml20 green_new mr5" ng-bind="d.person_count"></span>参与
						                                  </p>
						                                 <!-- 暂时屏蔽赞助 -->
						                              <!-- <a class="btn btn-primary act_sub_poiu act_sub_poiu_o" data-href="/support/12282{{d.support_id}}12282.httl" ng-if="d.support_id!=null">我要赞助</a>
						                               <a style="background:#a9a9a9" class="btn btn-primary act_sub_poiu act_sub_poiu_o disable_href"    ng-if="d.support_id==null">我要赞助</a>-->
						                               <!-- 暂时屏蔽赞助 -->
						                              <a class="btn btn-primary act_sub_poiu" ng-href="/activity/12282{{d.id}}12282.httl">我要报名</a>
						                              
						                              </div>
						                              <p class="qc"></p>
						                             <!-- <div style="border-top: 1px solid #f1f1f1; margin-top: 10px;padding-top:5px;">
						                                 <p class="d_inline cen fz16" style="width:32%;line-height:30px;color:#a9a9a9">
						                                    目标金额 {{d.target_money}}
						                                 </p>
						                                 <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
						                                  已筹金额{{d.now_money}}
						                                 </p>
						                                 <p class="d_inline cen fz16" style="width:33%;line-height:30px;color:#a9a9a9">
						                                  项目进度 {{d.schedule}}
						                                 </p>
						                               </div>-->
            								</li>
		                   		          
   			 	     		    </ul>
   			 	     			<p ng-if="Resulted>0" class="qc bgff pt10 pm10 cen paging_list mt10 check_overdate" ng-click="check_overdate()">
									<a class="ls clkh_po">
										查看过期活动
									</a>
								</p>
   			 	     		</div>
   			 	     
   			 	     </div>
		   			 	   
   			 	     <!--主办办方发起的活动  -->
   			 	     <!--留言 -->
   			 	       <div class="comment_po bgff yj4 person_host_message" style="display:none">
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
   			 	     <!--留言 -->
   			 	 		
   			 	 
   			 	 </div>
   			 	 <div class="fr person_de_right">
		   			 	 	                     <div class="act_list_p_right fr yj4 bgff gd">
               <div class="cen pd poiut_top_q">
                   <p class="fz18 zq mt10"><strong>便捷的活动发布平台</strong></p>
                   <p class="mt10">
                     轻松举办一场活动<br>
                       <a class="btn btn-primary  want_launch" ng-href="/activity/to_sponsor_activity">我要发起</a>
                   </p>
                </div>
                 <div class="cen pd poiut_top_q">
                 
                   <p class="mt20 zc fz16">
                     微信扫一扫<br>
                     分享至朋友圈 
                   </p>
                     
                    <img class="qc_icon_q pr" alt="分享二维码" src="http://www.2d-code.cn/2dcode/api.php?key=c_e170d93zzNkfW4eEg0KMr0oYZvO8ZIkR47oRRwUkt4&amp;text=http://apptown.cn&amp;logo=http://resource.apptown.cn/share/share_activity.png">
                     <p class="mt10 fz16">扫一扫分享才精彩</p>
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
    </div>
    
    
    
    
    
      <%@include file="/jsp/common/mml_bottom.jsp"%>
    <script src="/js/common/jquery.SuperSlide.2.1.1.js"></script>
    <script src="/js/view/index.js"></script>
    <script src="/js/view/personal_host_main.js"></script>
</body>
</html>