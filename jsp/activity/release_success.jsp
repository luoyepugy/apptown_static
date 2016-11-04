<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>恭喜您，活动发布成功</title>
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/common/font-awesome.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/css/page/release_success.css" rel="stylesheet">
	</head>
	<body>
	  <%@include file="/jsp/common/mml_nav.jsp"%>
	  <div class="wd bgff  pm40">
	      <p class="pt10 pm10 cen " style="border-bottom: 1px solid #e0e0e0">
	          <i class="f_q success_qs"></i>
	          <span class="ls fz24 title_poioisd">恭喜您，活动发布成功！</span>
	      </p>
	      <div class="release_center mt20">
	          <div class="release_left">
	              <div class="shoukuuyty_w">
	                  <p class="ls fz18 cen hyy_btn">
	                      <i class="f_q shuaxing_a"></i>
	                      换一页
	                  </p>
	                  <div class="mt10 phone_bg">
	                      
	                  </div>
	                  <p class="cen">
	                      <a class="btn success_btn">保存邀请函分享朋友圈</a>
	                      
	                  </p>
	              </div>
	          </div>
	          <div class="ov pt30 pr30">
                   <div class="cen fz16">
	                   <img src="${imgicon }" id="qc_down_er"><br>
	                   微信扫描，分享朋友圈
	                   <a class="f_q down_icon_w" href="${imgicon }" download="${imgicon }"></a>
	              </div>
	              <div class="bghs mt20 pd pt10 pm10">
	                  <p class="fz16 zc">快速分享到：</p>
	                  <div class="fengxiang_i mt20 cen">
	                     <p onclick="grt_fx.qq()">
	                         <i class="f_q wx_icon_a"></i><br>
	                         QQ好友
	                     </p>
	                      <p class="pr">
	                         <i class="f_q wx_icon_a wx_icon_b"></i><br>微信好友
	                         <img src="${imgicon }" class="werouy_swr">
	                     </p>
	                      <p class="pr">
	                         <i class="f_q wx_icon_a wx_icon_c"></i><br>
	                         朋友圈   <img src="${imgicon }" class="werouy_swr">
	                     </p>
	                      <p onclick="grt_fx.weibo()">
	                         <i class="f_q wx_icon_a wx_icon_d"></i><br>
	                         新浪微博
	                     </p>
	                      
	                  </div>
	                  <p class="qc"></p>
	                  <p class="mt20 fz16">
	                    直接复制活动链接，分享给朋友：
	                  </p>
	                  <p class="mt20 jhgh_inf_a">
	                      <input type="text" value="http://apptown.cn/activity/86100${actId}86100.httl" readonly class="fl copylink_rt">
	                      <a class="yj4 wwer_ert  copylink">
	                          复制链接
	                      </a>
	                  </p>
	                  
	                  <p class="qc"></p>
	                  
	                  <p class="mt10 fz16">
	                   官方推广合作：
	                  </p>
	                  <div class="mt10 cen">
	                       <div class="fl pr ggtgh"> 
	                          <i class="f_q tuoguang_q"></i><br>
	                       	   官方推广
	                       	   <div class="lx_tel_a bgff pd pt10 pm10 tl">
	                       	       <p class="zd">联系：章先生</p>
	                       	       <p class="zd">电话：17727516501</p>
	                       	       <p class="zd">关注公众号-官方推广</p>
	                       	       <img src="/img/QR-code.png" class="w100 mt5">
	                       	   </div>
	                       </div>
	                       
	                       <p class="fr mt30">
	                          <a class="yj4 wwer_ert ml20 dfdf_bhggfr" href="/activity/69871${actId}69871.httl">查看活动界面</a>
	                           <a class="yj4 wwer_ert" href="/activity/to_sponsor_activity?activityId=${actId}&republish=0">返回修改活动</a>
	                       </p>
	                  </div>
	                  <p class="qc"></p>
	              </div>
	          </div>
	          
	          
	          <p class="qc"></p>
	          
	      </div>
	      
	  </div>
	
	   <p class="poiu_pup_p">
	 	<span class="yj4"> 复制成功</span> 
	   </p>
	 
	     <%@include file="/jsp/common/mml_bottom.jsp"%>
	     <script src="/js/mode/methods_jq.js"></script>
	     <script src="/js/common/jquery.zclip.min.js"></script>
	     <script>
	     $(".copylink").zclip({ 
	         path: "/js/ZeroClipboard.swf",
	         copy: function(){
	        	 return $(".copylink_rt").val();
	         },
	         afterCopy:function(){/* 复制成功后的操作 */
	           $(".poiu_pup_p").addClass("show")
	           setTimeout(function(){
	        	   $(".poiu_pup_p").removeClass("show")
	           },4000)
	         }
	     });
	     var act_id=${actId};
	     var title="${title}"
	     var details="${details}"
	     var grt_fx=new share_p(act_id,title,details)
	     function img_oi(type){
	    	 $.ajax({
	             type : 'get',
	             url : '/shareImage/get_pc_share_image_url',
	             data : {"activityId":act_id,"type":type},
	             dataType : 'json',
	             success : function(data) {
	            	 $(".phone_bg").empty().append('<img class="yqh_img_q" src="'+data.msg+'">');
	            	 $(".success_btn").attr("href",data.msg).attr("download",data.msg);
	             },
	             error : function(res) { 

	             },
	             complete : function() {

	             }
	         });
	     }
	     
	     img_oi(1)
	     var rum_plk=1
	     $(".hyy_btn").on("click",function(){
	    	 rum_plk++
	    	 img_oi(rum_plk)
	    	 if(rum_plk>3){
	    		 rum_plk=0
	    	 }
	    	 
	     })
           
	     </script>
	     
	</body>
</html>