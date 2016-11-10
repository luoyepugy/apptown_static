<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
   <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="activity_sponsor">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/libs/jcrop/jquery.Jcrop.min.css">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
        <link href="/js/rich_text/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
      <link href="/css/jquery.datetimepicker.css" type="text/css" rel="stylesheet">

<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>

</head>
<body ng-controller="activity_sponsor_centerController" ng-init="select_click.hc_sess_a()">

    <div class="wd mt20 bgff sponsor_div gji_poi">
         <p class="fz24 act_title_a">基本信息</p>
         <ul class="form_poiu_q_m mt20 form_poiu_q_m_o">
             <li class="zq">
                     <label class="f_d title_poi fl mt20">酒店名称 <span class="hs">*</span></label>
                     <input type="text" placeholder="酒店名称" class="act_input_a ipue" id="name_event" maxlength="50">
                 <p class="qc"></p>
              </li>
             
             <li class="zq mt20 " id="the_editor">
                     <label class="f_d title_poi fl mt10">酒店主图 <span class="hs">*</span></label>
                     <div class="ov ">
	                     <a class="btn btn-primary pr up_icon_po fz16" ng-click="select_click.up_icon_a()"><label class="f_i up_icon"></label>本地上传</a>
	                     <span class="zc">&nbsp;&nbsp;&nbsp;&nbsp;提示:尺寸不小于640*360px，16:9，不大于3M,最多一张</span>
	                     <div class="case_poiuy_i"> 
	                        <p class="qc"></p>
	                        <!--
	                        <p class="pr fl case_icon"  ng-repeat="img in img_icon">
	                            <img ng-src="{{img_icon}}" class="pr fl case_icon case_poiu_a">  
	                            <img src="/img/close.png" class="icon_close_a" ng-click="select_click.delect_icon($index)" >  
	                        </p>
	                        -->
	                        
	                        <p class="pr fl case_icon"  ng-repeat="img in img_icon">  
	                            <img ng-src="{{img}}" class="case_poiu_a">  
	                            <img src="/img/close.png" class="icon_close_a" ng-click="select_click.delect_icon($index)" >  
                        	 </p>
	                     </div>
                     </div>
             </li>
             
             <li class="zq mt20 " style="z-index:8">
                     <label class="f_d title_poi fl mt20">酒店星级 <span class="hs">*</span></label>
                     <div class=" map_poou_car">
                         <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="" value="{{star[0].maker_title[0].name}}" id="m_industry" data-id="1" readonly>
                              <label class="f_i xjt_icon"></label>
                                  <ul class="xl_oiu">
                                <li ng-repeat="pe in star[0].maker_title" ng-bind="pe.name" data-id="{{pe.id}}"></li>
                              </ul>
                         </div>
                     </div>
                  <p class="qc"></p>
             </li>
             
             <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">联系人 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                         <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="请输入联系人" id="main_host">                              
                         </div>
                        </div>
                     <p class="qc"></p>
             </li>
                <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">联系方式 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="手机/电话/邮箱" id="contact_information">                              
                         </div>
                     </div>
                     <p class="qc"></p>
             </li>
			 <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">酒店地址 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                         <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipua" placeholder="请输入酒店地址" id="address">
                              
                         </div>
                     </div>
                     <p class="qc"></p>
             </li>
            <li class="zq mt20 the_editor" style="z-index:999999;position:relative;" >

                     <label class="f_d title_poi fl">酒店详情 <span class="hs">*</span></label>
                     <div class="ov map_poou_car rich_text">
                          <div id="myEditor" > </div>

                      </div>
                <p class="qc"></p>
             </li>
            
        </ul>
       
    </div>
    
    
    <div class="wd mt20">
        <p class="mt50 cen bottom_button" ng-if="id==0">
            <a class="btn btn-primary" ng-click="select_click.submit_data(0)"> 发布</a>            
        </p>
        <p class="mt50 cen bottom_button" ng-if="id>0">
        	<a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(0)">修改</a>
        </p>
         <p class="mt50 cen bottom_button" ng-if="id>0&&status==0">  
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(3)">修改</a>
        </p>
          <p class="mt50 cen bottom_button" ng-if="id>0&&status==1">
      <a class="btn btn-primary" ng-click="select_click.submit_data(0)"> 发布</a>
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(4)">修改</a>
        </p> 
    </div>
    
    
   <!--   默认活动封面图片-->
       <div id="upde_p_icon_pup" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="pup_te_p ov">
                 <div class="ptp_icon_n">
                     <div class="fl case_icon" ng-repeat="sdcove in select_click.default_cover" >
                        <p class="pr">
                            <img ng-src="{{sdcove.img}}" class="case_poiu_a">
                            <img src="/img/pitch_on.png" class="gx_icon_a">
                         </p>
                         <p class="zc fz20 mt10" ng-bind="sdcove.name"></p>
                     </div>
                     
                     <p class="qc"></p>
                     
                     
                </div>
                
                <p class="pup_icon_bottom cen">
                    <a class="btn btn-primary sub_poiy_a sub_poiy_a_icon" ng-click="select_click.img_selected()">确认</a>
                    <a class="btn btn-primary rese_button_a ml20"  data-dismiss="modal">取消</a>
                </p>
           </div>
           
        </div>
    
       
       
       
     
       <input type="hidden" value="${hotel_id}" id="id">
       <input type="file" name="uploadCode" id="uploadCode" style="display:none" capture="camera" accept="image/*">
      <%@include file="/jsp/common/mml_bottom.jsp"%>
      <script src="/libs/jcrop/jquery.Jcrop.min.js"></script>
      <script src="/js/rich_text/umeditor.config.js"></script>
      <script src="/js/rich_text/umeditor.min.js"></script>
      <script src="/js/common/jquery.datetimepicker.js"></script>
      <script src="/js/view/hotel_edit.js?v=1"></script>
      <script >
      $(function(){
    	  $(".mml_bottm").css("display","none")
      })
      </script>
  
</body>
</html>