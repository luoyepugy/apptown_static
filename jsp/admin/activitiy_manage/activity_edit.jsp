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
                     <label class="f_d title_poi fl mt20">填写名称 <span class="hs">*</span></label>
                     <input type="text" placeholder="活动标题(不大于50个字)" class="act_input_a ipua" id="name_event" maxlength="50">
                 <p class="qc"></p>
              </li>
             
               <li class="zq mt20 " id="the_editor">
                     <label class="f_d title_poi fl mt10">活动主图 <span class="hs">*</span></label>
                     <div class="ov ">
                         <a class="btn btn-primary pr up_icon_po fz16" ng-click="select_click.up_icon_a()"><label class="f_i up_icon"></label>本地上传</a>
                    
                     <a ng-href="#upde_p_icon_pup" class="ml30"  data-toggle="modal">没有准备封面?</a>
                    <span class="zc">提示:尺寸不小于640*360px，不大于3M,最多四张</span>
                    <div class="case_poiuy_i"> 
                        <p class="qc"></p>
                        
                        <p class="pr fl case_icon"  ng-repeat="img in img_icon">  
                            <img ng-src="{{img}}" class="case_poiu_a">  
                            <img src="/img/close.png" class="icon_close_a" ng-click="select_click.delect_icon($index)" >  
                         </p>
                         
                         
                        
                           
                    </div>
                         
                         
                        </div>
             </li>
             
             
            
             
             <li class="zq mt20 ">
                     <label class="f_d title_poi fl">活动时间 <span class="hs">*</span></label>
                     <div class="ov">
                          <div class="forem_neo_p fl">
                             <p class="pm10">开始时间：</p>
                              <p class="ty_poi_q">
                                <span class="pr time_poiu"><i class="f_i tri_icon"></i> <input type="text" class="act_input_a ipub" id="stat_time_a" readonly></span>
                                <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label><input type="text" class="act_input_a ipuc" id="stat_time_b" readonly></span>
                              
                              <label class="f_i next_icon"></label>
                              </p>
                          </div>
                          <div class="forem_neo_p fl">
                             <p class="pm10">结束时间：</p>
                               <p class="ty_poi_q">
                             <span class="pr time_poiu"><i class="f_i tri_icon"></i> <input type="text" class="act_input_a ipub" id="end_time_a" readonly></span>
                              <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label><input type="text" class="act_input_a ipuc" id="end_time_b" readonly></span>
                              </p>
                          </div>
                     </div>
                 
                 
                 <p class="qc"></p>
                      
              </li>
              <li class="zq mt20 site_poy_a" style="z-index:10">
                     <label class="f_d title_poi fl mt20">活动地点 <span class="hs">*</span></label>
                     <div class="map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                              <input type="text" class="act_input_a act_input_a_pty" placeholder="省份 / 直辖市" id="provinces_p" readonly>
                              <label class="f_i xjt_icon"></label>
                              <ul class="xl_oiu">
                                   <li ng-repeat="pe in province"  ng-bind="pe.province_name" data-id="{{pe.id}}" ng-click="select_click.pre_p(pe.id)"></li>
                              </ul>
                              
                         </div> 
                           <div class="pr poiuy_poiu_q fl ml10">
                             <input type="text" class="act_input_a act_input_a_cty" placeholder="请先选择省份/直辖市" id="city_p" readonly>
                                 <label class="f_i xjt_icon"></label>
                                  <ul class="xl_oiu">
                                   <li ng-repeat="pe in caty_a"  ng-bind="pe.city_name" data-id="{{pe.id}}"></li>
                              </ul>
                         </div>
                          <div class="pr poiuy_poiu_q fl ml10">
                             <input type="text" class="act_input_a  ipud map_poiu_a" placeholder="例如：北京市海淀区中关村南大街" id="detailed_address">
                                <label class="f_i map_icon"></label>
                                <div class="xl_oiu BaiDuMap" id="BaiDuMap">
                                 
                              </div>
                         </div>
                     </div>
                  <p class="qc"></p>
             </li>
             
                <li class="zq mt20 " style="z-index:9">
                     <label class="f_d title_poi fl mt20">活动类型 <span class="hs">*</span></label>
                     <div class=" map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue"  placeholder="" value="{{classify[0].maker_title[0].name}}" id="activity_type" data-id="1" readonly>
                              <label class="f_i xjt_icon"></label>
                                  <ul class="xl_oiu">
                                   <li ng-repeat="pe in classify[0].maker_title" ng-bind="pe.name" data-id="{{pe.id}}"></li>
                                  
                              </ul>
                         </div>
                        </div>
                    <p class="qc"></p>
             </li>
             <li class="zq mt20 " style="z-index:8">
                     <label class="f_d title_poi fl mt20">请选择行业 <span class="hs">*</span></label>
                     <div class=" map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="" value="{{classify[1].maker_title[0].name}}" id="m_industry" data-id="1" readonly>
                              <label class="f_i xjt_icon"></label>
                                  <ul class="xl_oiu">
                                <li ng-repeat="pe in classify[1].maker_title" ng-bind="pe.name" data-id="{{pe.id}}"></li>
                              </ul>
                         </div>
                        </div>
                  <p class="qc"></p>
             </li>
             <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">主办方单位 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="请输入您的主办方单位" id="main_host">
                              
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

            <li class="zq mt20 the_editor" style="z-index:999999;position:relative;" >

                     <label class="f_d title_poi fl">活动详情 <span class="hs">*</span></label>
                     <div class="ov map_poou_car rich_text">
                          <div id="myEditor" > </div>

                      </div>
                <p class="qc"></p>
             </li>
            
              <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20">人数上限</label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue num" placeholder="默认为无限" id="number_online" maxlength="10">
                              
                         </div>
                        </div>
             </li>
              <li class="zq mt20 pr">
                     <label class="f_d title_poi fl mt20">报名表单设置</label>
                     <div class="ov map_poou_car"   >
                          <div ng-repeat="fo in row_po_form">
                          	<p class="row_po_form" ng-if="$index<2">
                          	
                                <i class="f_i radio_p"></i>
                                <span class="mr10">必填</span> | <span  class="f_d  ml10 poiuyt_iu" ng-bind="fo.name"></span>
                                <input type="text" class="act_input_a ipue ml10 ipug" placeholder="报名用户的{{fo.name}}">
                          	 </p> 
                          	 
                         <p class="row_po_form row_po_form_zdy" ng-if="$index>1">
                             <i class="f_i  radio_p_xz gx_xzm" data-xz="0" ng-if="fo.necessary=='y'"></i>
                                  <i class="f_i  radio_p_xz" data-xz="1" ng-if="fo.necessary=='n'"></i>
                             <span >必填</span>  |  &nbsp; 
                             <input type="text" class="act_input_a ml10 ipuf" value="{{fo.name}}"> 
                             <input type="text" class="act_input_a ipue ml10 ipug" placeholder="提示信息写在这里" >
                             <i class="f_i delect_icon"  title="删除" ng-click="select_click.delect_fom_p($index)"></i>
                         </p>
                         
                         
                          </div>
                            
             
          
                         <p class="mt20">
                             <a class="btn btn-primary add_form_p add_form_p_fpr" ng-click="select_click.add_fom_p()">+ 添加更多表单</a>
                         </p>
                     </div>
                     
             </li>
        </ul>
       
    </div>
    
        <div class="wd mt20 bgff sponsor_div gji_poi">
         <p class="fz24 act_title_a">高级设置</p>
              <ul class="form_poiu_q_m mt20 form_poiu_q_m_o">
              <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt10">活动嘉宾</label>
                     <div class="ov map_poou_car map_poou_car_poi">
                            <div class="pwu_table_q">
                         <table class="table" ng-if="guest_data.length>0">
                             <thead class="table_top_poiiu">
                                <tr>
                                     <td width="100">头像</td>
                                     <td width="180">姓名</td>
                                     <td width="400">简介</td>
                                     <td>操作</td>
                                 </tr>
                             </thead>
                         </table>
               
                             <table class="table case_poiou_ca" ng-repeat="gh in guest_data">
                             <tbody>
                                <tr>
                                     <td width="100"><img class="guest_icon yj4" ng-src="{{gh.honored_guest_icon_b}}" ></td>
                                     <td width="180" ng-bind="gh.honored_guest_name_b"></td>
                                     <td width="400"><p style="width:390px;" class="dian" ng-bind="gh.honored_guest_position_b"></p></td>
                                     <td>
                                         <p class="bj_icon_a">
                                          <span title="修改"> <i class="f_i bj_poi_p mr10" ng-click="select_click.honored_guest_modify($index)"></i> </span>|
                                           <span title="删除"> <i class="f_i delect_icon pr"  alt="删除" ng-click="select_click.honored_guest_delect($index+1)">
                                           
                                           </i></span>
                                         </p>
                                       
                                    </td>
                                 </tr>
                             </tbody>
                         </table>
                         
                         </div>
                         <p class="qc"></p>
                            <a class="btn btn-primary add_form_p" ng-href="#honored_guest" data-toggle="modal">+ 添加活动嘉宾</a>
                      </div>
             </li>
                   <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt10">票务设置</label>
                     <div class="ov map_poou_car map_poou_car_poi">
                         <div class="pwu_table">
                          <table class="table" ng-if="ticket_array.length>0">
                             <thead class="table_top_poiiu">
                                <tr>
                                     <td width="200">票种名称</td>
                                     <td width="80">单张价格</td>
                                     <td width="80">票种张数</td>
                                      <td width="360">票种说明</td>
                                     <td>操作</td>
                                 </tr>
                             </thead>
                         </table>
                                   
                      <div class="pr">
                     
                      
                             <table class="table case_poiou_cb" ng-repeat="ty in ticket_array">
                             <tbody>
                                <tr>
                                     <td width="200"><p class="dian" style="width:200px;" ng-bind="ty.name">  </p></td>
                                     <td width="80" ng-bind="ty.price+'元'"></td>
                                     <td width="80" ng-bind="ty.sum_num+'张'"></td>
                                    <td width="360"><p class="dian" style="width:360px;" ng-bind="ty.remark">  </p></td>
                                     <td>
                                         <p class="bj_icon_a">
                                           <span title="修改">  <i class="f_i bj_poi_p mr10" ng-click="select_click.volume_change($index)"></i></span> |
                                           <span title="删除">  <i class="f_i delect_icon" alt="删除" ng-click="select_click.delec_volume($index+1)"></i></span>
                                         </p>
                                       
                                    </td>
                                 </tr>
                             </tbody>
                         </table>
                      </div>
                         </div>
                           
                         
                         <p class="qc"></p>
                            <a class="btn btn-primary add_form_p" ng-href="#ticket_set" data-toggle="modal">+  添加新的票种</a><span class="ml30 zc fz12">(免费活动时，无需设置票种。)</span>
                      </div>
             </li>
             
             
             
                            <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt10">设置投票</label>
                     <div class="ov map_poou_car map_poou_car_poi">
                         <div class="pwu_table">
                                      <table class="table" ng-if="select_click.date_pou[0].end_time>0">
                             <thead class="table_top_poiiu">
                                <tr>
                                     <td width="500" >投票名称</td>
                                     <td width="180">创建时间</td>
                                     <td>操作</td>
                                 </tr>
                             </thead>
                         </table>
                         
                      <table class="table case_poiou_cb ng-scope" ng-if="select_click.date_pou[0].end_time>0">
                             <tbody>
                                <tr  ng-repeat="te_date in select_click.date_pou">
                                     <td width="500"><p class="dian" ng-bind="te_date.title"></p></td>
                                     <td width="180"  ng-bind="te_date.end_time|date:'MM月dd日  EEE  HH:mm'"></td>
                                     <td>
                                         <p class="bj_icon_a">
                                           <span title="修改">  <i class="f_i bj_poi_p mr10" ng-click="select_click.editors_vote(te_date)"></i></span>
                                      |  <i class="f_i delect_icon" title="删除" ng-click="select_click.delete_poll(te_date.id)"></i>
                                         </p>
                                       
                                    </td>
                                 </tr>
                             </tbody>
                         </table>
                         
                         </div>
                           
                         
                         <p class="qc"></p>
                         
                            <a class="btn btn-primary vote_padd"   ng-click="select_click.vote_initialization()" ng-if="select_click.date_pou[0].end_time==null">+  添加投票</a>
                      </div>
             </li>
             
             
          
              <li class="zq mt20 ">
                  <label class="f_d title_poi fl mt10">赞助设置</label>
                     <div class="ov map_poou_car map_poou_car_poi">
                         <div class="pwu_table">
                              <table class="table table-bordered sponsored_setting" ng-if="mySp_list.length>0">
                             <thead class="table_top_poiiu " >
                                <tr>
                                  <td style="width:60px;">
                                  选择
                                  </td>
                                  <td>赞助项目名称</td>
                                  <td>创建时间</td>
                                </tr>
                                </thead>
                                <tbody>
                                   <tr  ng-repeat="mlist in mySp_list">
                                     <td class="cen" >
                                     <span title="选择赞助">
                                         <i class="f_i  choice" ng-click="ct_check(mlist.id,$event.target)" data-xz="0"></i>
                                                                            
                                     </span>
                                   <!--   <input type="radio" name="setting" ng-model="x"   >
                                     </span> -->
                                     </td>
                                     <td ng-bind="mlist.title"></td>
                                     <td ng-bind="mlist.create_date|date:'yyyy-MM-dd EEE  HH:mm:ss'"></td>
                                   </tr>
                                    
                                   <tr>
                                 
                                   </tr>
                                </tbody>
                                
                                </table>
                                
                                
                         </div>
                          <p class="setting_msg fz12 tl"> 
                         		 赞助设置是可以帮助您寻找到活动赞助商，在这里需要介绍活动项目的优势、背景、以及价值；以及赞助的回报详情；
                         		 就可以通过平台向公众集资，让商家能够找到好活动为自己的广告宣传带来价值，也
                         		 让好的活动也能筹到更多的资金来举办好的活动！发起的赞助项目需要通过平台审核哦
                         	 </p>
                        <p class="fz16 mt10"><span class="hs">发起赞助项目：{{mySp_list.length}}个</span><a class="ml20" ng-href="/jsp/activity/launch_sponsor.jsp"  target="_blank">立即发起</a></p> 
                      </div>
              </li>
     
            </ul>
      </div>
      <div class="wd mt20 bgff sponsor_div gji_poi">
      	<p class="fz24 act_title_a">签到设置</p>
      	<p class="atten_set">
      		<span style="float:left">二维码关注设置</span>
      		<input style="float:left;margin-left: 20px;"  id="atten_set_off" checked="checked"  type="radio"  name="onOff" /><label style="float:left" for="atten_set_off">关闭</label>	
      	    <input style="float:left;margin-left: 20px;"   id="atten_set_on" type="radio"  name="onOff" /><label style="float:left" for="atten_set_on">显示</label>	
      	    <span style="float:left;margin-left: 40px;">提示：扫码签到的时候关注的微信公众号</span>   	    
      	</p>
      	<div class="upload_deminmnection clearfix" >
      		<img class="pull-left" id="upLoadImg" width="113" height="113" src="/img/upload_code.png"  />
      		<div class="pull-left" style="margin-left: 15px;">
      			<a class="btn btn-primary" ng-click="upLoadImg()">上传图片</a>
      			<p>
      				二维码图片<br />
                                          请上传jpg、png格式的图片
      			</p>
      		</div>
      		
      	</div>
      	 <div class="zq mt20 " style="height:40px;">
                     <label class="f_d title_poi fl mt20">视频直播 </label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="url" class="act_input_a ipua video_text" placeholder="请输入视频直播链接地址" >
                              
                         </div>
                        </div>
                     <p class="qc"></p>
          </div>

          <div class="sign-adSetting j-signAdSetting">
            <div class="left">广告设置</div>
            <div class="right">
              <ul class="list db j-list">
                <li ng-repeat="item in adSetting.ad_urls_array">
                  <img class="icon216x128 j-img" ng-src="{{item}}" alt="">
                  <img src="/img/close.png" class="deleteBtn" ng-click="adSetting.deleteImg($index)" />
                  <!-- <img class="icon216x128" ng-src="{{item}}" alt=""> -->
                </li>
                
                <div class="db addBtn icon216x128" ng-click="adSetting.uploadImg()" ng-if="adSetting.isShow">+</div>
              </ul>
              <p class="gray">提示：请上传至少<b class="red">1080*640</b>尺寸的图片</p>
            </div>
          </div>
          
      </div>
    
    <div class="wd mt20">
     <p class="wd  cen">
        <i class="f_i radio_p_xz gx_xzm" id="fuy_poi_a" data-xz="0"></i>
         <span>阅读并同意e场景活动的</span>
         <a ng-href="/jsp/common/e_active.jsp">《e场景平台服务协议》 </a>
     </p>
        <p class="mt50 cen bottom_button" ng-if="id==0">
            <a class="btn btn-primary" ng-click="select_click.submit_data(0)"> 发布</a>
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(1)">保存</a>
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
    
    <!--活动嘉宾-->
       <div id="honored_guest" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <p class="form_title_a cen pt10">活动嘉宾   <button type="button" class="close clase_pup_s" data-dismiss="modal">×</button></p>
           
                 <ul class="form_poiu_q_m mt20 form_poiu_q_m_o">
                                   <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">姓名 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="请填写嘉宾姓名" id="honored_guest_name" maxlength="10">
                              
                         </div>
                        </div>
             </li>
            <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">活动嘉宾 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                              <textarea class="ipue jiap_po_c" placeholder="请填写嘉宾的简介，不大于60字" maxlength="60" id="guest_profile"></textarea>
                         </div>
                        </div>
             </li>
                     
            <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">头像 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                                <img src="/img/Video_loading.jpg" class="jia_p_add_icon fl" ng-click="select_click.jia_p_add_icon()">
                                <p class="fz12 zc ov pl30 pr20"> 提示：请上传嘉宾头像，尽量保证图片美观性。图 片不小于86*86px。</p>
                         </div>
                         <p class="qc"></p>
             <p  class="mt20 pup_icon_bottom poiuyt_ouy">
                    <a class="btn btn-primary sub_poiy_a" ng-click="select_click.honored_guest(sp_id)">确认</a>
                    <a  class="btn btn-primary rese_button_a ml20" data-dismiss="modal">取消</a>
                </p>
                      </div>
             </li>
                     
                     
              </ul>
       </div>
    
        <!--票务设置-->
       <div id="ticket_set" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <p class="form_title_a cen pt10">票务设置   <button type="button" class="close clase_pup_s" data-dismiss="modal">×</button></p>
           
                 <ul class="form_poiu_q_m mt20 form_poiu_q_m_o">
                                   <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">票种名称 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="请输入票种名称" id="kind_name" maxlength="20">
                              
                         </div>
                        </div>
             </li>
                                <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">单张金额 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue num" placeholder="请输入单张金额" id="ticket_amount" maxlength="6">
                              
                         </div>
                        </div>
             </li>
                                <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">票种张数 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue num" placeholder="请输入票种张数" id="ticket_number" maxlength="6">
                              
                         </div>
                        </div>
             </li>
                                <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">票种说明 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <textarea class="ipue jiap_po_c" placeholder="请填写嘉宾票种说明，不大于60字" maxlength="60" id="that_ticket_types"></textarea>
                               <p class="qc"></p>
             <p  class=" pup_icon_bottom poiuyt_ouy poiuyt_ouy_nmjh_a">
                    <a class="btn btn-primary sub_poiy_a" ng-click="select_click.ticket_array(pj_id)">确认</a>
                    <a  class="btn btn-primary rese_button_a ml20" data-dismiss="modal">取消</a>
                </p>
                         </div>
                        </div>
             </li>
           
                 
              </ul>
       </div>
       
       
       
<!--        投票设置 -->
       
              <div id="ticket_set_vode" class="modal hide fade pd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <p class="form_title_a cen pt10">投票设置  <button type="button" class="close clase_pup_s" data-dismiss="modal">×</button></p>
             <div class="voite_poiu_a pr">
                 <ul class="form_poiu_q_m mt20 form_poiu_q_m_o pr form_poiu_q_m_o_poo"> 
                                   <li class="zq mt10 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">投票名称<span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">  
                             <input type="text" class="act_input_a ipue" placeholder="请输入投票名称" id="vote_title" maxlength="20" value="{{select_click.date_pou.title}}">
                              
                         </div>
                        </div>
             </li>
             <li class="zq mt10 "> 
                <label class="f_d title_poi fl mt20 title_poi_poi">截止时间<span class="hs">*</span></label>
            		 <p class="ty_poi_q">
                                <span class="pr time_poiu"><i class="f_i tri_icon"></i> 
                                <input type="text" class="act_input_a ipub" id="stat_time_q" ></span>
                                <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label>
                                <input type="text" class="act_input_a ipuc" id="stat_time_w" ></span>
                              
                              </p>
                              <p class="qc"></p>
             </li>
             
                <li class="zq  mt10"> 
                      
                        <label class="f_d title_poi fl  title_poi_poi title_poi_poi_pooi">投票类型<span class="hs">*</span></label>
                         <div class="ov map_poou_car">
                         <p class="zc">最多可添加20项</p>
                          
                        </div>
                           <p class="qc"></p>
                 </li>
                 
                 <li class="zq"   ng-repeat="List in select_click.voteItemList">    
              
               		 <label class="f_d title_poi fl mt20 title_poi_poi">选项{{$index+1}}<span class="hs"></span></label>
               		  <div class="ov map_poou_car act_input_a_voge_ws">
               		     <div class="pr poiuy_poiu_q fl mt10 pr"> 
                             <input type="text" class="act_input_a ipue act_input_a_voge" placeholder="请输入投票的标题（不大于30字）"  maxlength="20" value="{{List.item_name}}">
                              <p class="pupu_oiuuy_icon">
                              	 <img ng-src="{{List.image_urls}}" class="browse_maps">|
                              	 <i class="f_i piytr_a_b" title="点击上传图片" ng-click="select_click.up_icon_b($event.target)"></i>|
                               	 <i class="f_i delect_icon_c" title="删除" ng-click="select_click.voteIte_w($index)"></i>
                              </p>
                         </div>
               		  </div>
                </li>
                      
                     
                      <li class="zq  "> 
                         <label class="f_d title_poi fl mt20 title_poi_poi">&nbsp;<span class="hs"></span></label>
                          <div class="ov map_poou_car">
                            <a class="btn btn-primary add_form_p " ng-click="select_click.polling_data(1)">+  增加投票选项</a>
                          </div>
                      </li>
                       
                      <li class="zq  mt20"> 
                      
                        <label class="f_d title_poi fl mt20 title_poi_poi">投票类型<span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                                <select class="sp_pull_down" id="type_vote">
             		    		  <option value="1">单选</option>
             		            <option value="2">多选</option> 
             		   </select>
                         </div>
                        </div>
                
                </li>           
              <li class="zq mt10 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">  投票介绍<span class="hs">*</span></label>
                     <div class="ov map_poou_car"> 
                          <div class="pr poiuy_poiu_q fl">
                             	 <textarea class="ipue jiap_po_c" placeholder="请填写投票说明，不大于60字" maxlength="60" id="vote_detail" ></textarea>
                               <p class="qc"></p>
             <p  class=" pup_icon_bottom poiuyt_ouy poiuyt_ouy_nmjh_a">
                    <a class="btn btn-primary sub_poiy_a" ng-click="select_click.voted_add(1)">确认</a>
                    <a  class="btn btn-primary rese_button_a ml20" data-dismiss="modal">取消</a>
                </p>
                         </div>
                    </div>
             </li>
   
                
              </ul>
            <div class="amplification gd">
           	 <img src="" class="gd">
           </div>
             </div>
       </div>
       
       
       
       
        <div id="modification_vode" class="modal hide fade pd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <p class="form_title_a cen pt10">投票设置  <button type="button" class="close clase_pup_s" data-dismiss="modal">×</button></p>
             <div class="voite_poiu_a pr">
                 <ul class="form_poiu_q_m mt20 form_poiu_q_m_o pr form_poiu_q_m_o_poo"> 
                                   <li class="zq mt10 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">投票名称<span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">  
                             <input type="text" class="act_input_a ipue" placeholder="请输入投票名称" id="vote_title_mf" maxlength="20" value="{{select_click.date_pou[0].title}}">
                              
                         </div>
                        </div>
             </li>
             <li class="zq mt10 "> 
                <label class="f_d title_poi fl mt20 title_poi_poi">截止时间<span class="hs">*</span></label>
            		 <p class="ty_poi_q">
                                <span class="pr time_poiu"><i class="f_i tri_icon"></i> 
                                <input type="text" class="act_input_a ipub" id="stat_time_q_mf" value="{{select_click.date_pou[0].end_time|date:'yyyy/MM/dd'}}"></span>
                                <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label>
                                <input type="text" class="act_input_a ipuc" id="stat_time_w_mf" value="{{select_click.date_pou[0].end_time|date:'HH:mm'}}"></span>
                              
                              </p>
                              <p class="qc"></p>
             </li>
             
                <li class="zq  mt10"> 
                      
                        <label class="f_d title_poi fl  title_poi_poi title_poi_poi_pooi">投票类型<span class="hs">*</span></label>
                         <div class="ov map_poou_car">
                         <p class="zc">最多可添加20项</p>
                          
                        </div>
                           <p class="qc"></p>
                 </li>
                 <li class="zq"   ng-repeat="List in select_click.date_pou[0].voteItemList">    
              
               		 <label class="f_d title_poi fl mt20 title_poi_poi">选项{{$index+1}}<span class="hs"></span></label>
               		  <div class="ov map_poou_car act_input_a_voge_ws_s">
               		     <div class="pr poiuy_poiu_q fl mt10 pr"> 
                             <input type="text" class="act_input_a ipue act_input_a_voge_pooi" placeholder="请输入投票的标题（不大于30字）"  maxlength="20" value="{{List.item_name}}">
                              <p class="pupu_oiuuy_icon">
                              	<img ng-src="{{List.image_urls}}" class="browse_maps browse_maps_poii">|
                              	 <i class="f_i piytr_a_b" title="点击上传图片" ng-click="select_click.up_icon_b($event.target)"></i>|
                               	 <i class="f_i delect_icon_c" title="删除" ng-click="select_click.voteIte_p($index,List.id)"></i>
                              </p>
                         </div>
               		  </div>
                </li>
                      
                     
                      <li class="zq  "> 
                         <label class="f_d title_poi fl mt20 title_poi_poi">&nbsp;<span class="hs"></span></label>
                          <div class="ov map_poou_car">
                            <a class="btn btn-primary add_form_p " ng-click="select_click.polling_data(2)">+  增加投票选项</a>
                          </div>
                      </li>
                       
                      <li class="zq  mt20"> 
                      
                        <label class="f_d title_poi fl mt20 title_poi_poi">投票类型<span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                                <select class="sp_pull_down" id="type_vote_mf">
             		    		  <option value="1">单选</option>
             		              <option value="2">多选</option> 
             		   </select>
                         </div>
                        </div>
                
                </li>           
              <li class="zq mt10 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">  投票介绍<span class="hs">*</span></label>
                     <div class="ov map_poou_car"> 
                          <div class="pr poiuy_poiu_q fl">
                             	 <textarea class="ipue jiap_po_c" placeholder="请填写投票说明，不大于60字" maxlength="60" id="vote_detail_mf">{{select_click.date_pou[0].detail}}</textarea>
                               <p class="qc"></p>
             <p  class=" pup_icon_bottom poiuyt_ouy poiuyt_ouy_nmjh_a">
                    <a class="btn btn-primary sub_poiy_a" ng-click="select_click.voted_add(2)">确认</a>
                    <a  class="btn btn-primary rese_button_a ml20" data-dismiss="modal">取消</a>
                </p>
                         </div>
                    </div>
             </li>
   
                
              </ul>
            <div class="amplification gd">
           	 <img src="" class="gd">
           </div>
             </div>
       </div>
       
       
     
       <input type="hidden" value="${activityId }" id="act_id">
       <input type="hidden" value="${user_id }" id="user_id">
       <input type="file" name="uploadCode" id="uploadCode" style="display:none" capture="camera" accept="image/*">
      <%@include file="/jsp/common/mml_bottom.jsp"%>
      <script src="/libs/jcrop/jquery.Jcrop.min.js"></script>
      <script src="/js/rich_text/umeditor.config.js"></script>
      <script src="/js/rich_text/umeditor.min.js"></script>
      <script src="/js/common/jquery.datetimepicker.js"></script>
      <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=KIpwmISmRtIMMssrIQ4NF9ji"></script>
      <script src="/js/view/activity_edit.js?v=8"></script>
      <script >
      $(function(){
    	  $(".mml_bottm").css("display","none")
      })
      </script>
  
</body>
</html>