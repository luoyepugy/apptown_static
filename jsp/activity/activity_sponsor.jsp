<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
   <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="activity_sponsor">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="/libs/jcrop/jquery.Jcrop.min.css"> -->
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
        <link href="/js/rich_text/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
      <link href="/css/jquery.datetimepicker.css" type="text/css" rel="stylesheet">
      <link  rel="shorcut icon"  href="/img/LOGO.png" />

<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>e场景活动</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>

</head>
<body ng-controller="activity_sponsor_centerController" ng-init="select_click.hc_sess_a()">

  <%@include file="/jsp/common/mml_nav.jsp"%>
        
    <div class="act_title_list">
       <p class="wd">
            <a ng-href="/">首页</a> / 
             <a ng-href="#" class="zc">发起活动</a>
        </p>
    </div>
    <!-- 暂时屏蔽赞助白条 -->
    <!-- <div class="wd mt20 loan_wrap" >
    	<div class="loan_top clearfix" >
    		<a  class="loan_close" ng-click="closeLoan($event.target)"></a>
    		<img class="pull-left loan_top_img" src="/img/loan_img.png" width="420" height="240" />
    		<div class="pull-left loan_top_content loan_uncheck">
    			<p class="loan_1">
    				<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input class="loan_name" style="margin-left:4px;" type="text" placeholder="请输入姓名" />
    				<input id="sex_1" type="radio" name="sex" checked="checked"/>
    				<label style="display:inline-block"  for="sex_1">男</label>
    				<input id="sex_2" type="radio" name="sex"/ >
    				<label style="display:inline-block"  for="sex_2">女</label>
    				<span>手机号码：</span><input class="loan_tel" style="width:210px;" type="text" placeholder="请输入手机号码"/>	
    			</p>
    			<p class="loan_2">
    				<span class="">申请金额：</span>
    				<input type="text" class="loan_money" placeholder="请输入金额"/>
    				<span style="margin-left:55px;">还款期数:</span>
					<select id="pay_money_time" >
						<option value="1期">1期</option>
						<option value="3期">3期</option>
						<option value="6期">6期</option>
						<option value="12期">12期</option>
						<option value="24期">24期</option>
						<option value="36期">36期</option>
					</select>
    					
    			</p>
    			<p class="loan_3">
    				<span>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</span>
    				<textarea class="loan_remark" placeholder="申请理由" maxlength="60"></textarea>
    			</p>
    			<p class="loan_4 clearfix">
    				<a class="submiu_now pull-left" ng-click="checkLoanForm()">立刻申请</a>
    				<a class="loan_answer pull-right" ng-click="normalAnswer()">常见问题?</a>
    			</p>	
    		</div>
    		<div class="pull-left loan_top_content loan_check_success" style="display:none;">
    			<div style="margin-bottom:81px;padding-left:70px;padding-top: 51px;font-size:16px;">
    				申请成功！
    				<br />
                                                          工作人员近期会和您取的联系！
    			</div>
    			<p class="loan_4 clearfix">
    				<a class="submiu_now pull-left" >立刻申请</a>
    				<a class="loan_answer pull-right" ng-click="normalAnswer()">常见问题?</a>
    			</p>	
    		</div>
    		
    	</div>
      
    	<ul class=赞助设置"loan_tip clearfix" style="display: none;position:relative;">
    	<a class="loan_close" ng-click="closeLoan($event.target)"></a>
    		<li class="pull-left">
    			<p class="loan_tip_1st">
    				1、什么是活动白条？
    			</p>
    			<p class="loan_tip_2nd">
    				活动白条是深圳前海易居购商业保理和e场景活动平台联手打造的活动贷款
                                                              互联网平台。
    			</p>
    		</li>
    		<li class="pull-left">
    			<p class="loan_tip_1st">
    				3、能贷多少额度？
    			</p>
    			<p class="loan_tip_2nd">
    				根据用户的资质（信用记录、收入、住房情况等），以及活动规模及影响，立即计算出贷款额度。
    			</p>
    		</li>
    		<li class="pull-left">
    			<p class="loan_tip_1st">
    				2、为什么在网上做活动白条贷款？
    			</p>
    			<p class="loan_tip_2nd">
    				互联网为广大活动主办方提供了一个轻松便捷、活动资金借款的平台，用户可以根据自己的需求，任意选择金融机构以及不同的金融产品。
    			</p>
    		</li>
    		<li class="pull-left">
    			<p class="loan_tip_1st">
    				4、如何申请活动白条？
    			</p>
    			<p class="loan_tip_2nd">
    				您可以通过电脑www.apptown.cn/手机m.apptown.cn线上预约申请活动白条，申请后e场景平台公司人员会尽快联系您确认活动需求，协助您
                                                           提交审批资料，申请成功后即可打白条支付活动款。
    			</p>
    		</li>
    	<ul>
    </div> -->
    <!-- /暂时屏蔽赞助白条 -->

    
    <div class="wd mt20 bgff sponsor_div gji_poi">
         <p class="fz18 act_title_a">基本信息</p>
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
                             <input type="text" class="act_input_a  ipud map_poiu_a" placeholder="请输入详细地址" id="detailed_address">
                                <label class="f_i map_icon"></label>
                                <div class="xl_oiu BaiDuMap" id="BaiDuMap">
                                 
                              </div>
                         </div>
                     </div>
                  <p class="qc"></p>
             </li>
             
                <li class="zq mt20 mb30" style="z-index:9">
                     <label class="f_d title_poi fl mt20">活动类型 <span class="hs">*</span></label>
                     <div class="map_poou_car fl mt10">
                            <ul class="release_type_list">
                            	<input type="hidden" id="release_type_value" value="" />
                            	<li ng-repeat="z in ty_list_a" data-x="{{$index+1}}" ng-bind="z.name" ng-click="select_click.add_type_aa($index+1)"  class="fl release_type ml20"></li>
                            	<li class="qc"></li>
                            </ul>                            	                            
                     </div>
                    <p class="qc"></p>
             </li>
             <li class="zq mt20 mb30 activity_label_list" style="z-index:9">
                     <label class="f_d title_poi fl mt20">活动标签 </label>
                     <div class="map_poou_car fl release_type_wrap mt10 pr">
                            <div class="re_type_wrap fl" >
                            	<span class="re_type_plus">+</span>
                            </div>
                            <div class="re_type_show fl mt10">
                            	<ul>                          		
                            		<li class="re_type_show_list fl pr ml20" ng-repeat="op in labelArr">
                            			<span ng-bind="op.label_name"></span>
                            			<i class="fa fa-times-circle close_ty" ng-click="select_click.delete_label($index)" ></i>
                            		</li>
                            		
                            		<li class="qc"></li>
                            	</ul>
                            	
                            </div>
                            <div class="re_type_content">
                            	  <ul>
                            	  	
                            	    <div ng-repeat="x in ty_list_a">
                            	    	
                            	     	 <li ng-repeat="y in x.child_list"   class="re_type_list" ng-click="select_click.add_label(y,$index)"><p ng-bind="y.label_name"></p></li>
                            	    </div>
                            	  	 <li class="qc"></li>
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
                             <input type="text" class="act_input_a ipue" placeholder="请输入您的主办方单位" id="main_host" maxlength="20">
                            <span ng-if="showHostTip"><a target="_blank" ng-href="/user/to_user_center#/personal_center">认证活动号</a>将获得更多高级功能</span>
                         </div>
                        </div>
                     <p class="qc"></p>
             </li>
                <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">联系电话 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="请输入联系电话" id="contact_information">
                              
                         </div>
                        </div>
                     <p class="qc"></p>
             </li>

            <li class="zq mt20 the_editor" >

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
              <li class="zq mt20 pr modify_disable_par ">
                     <label class="f_d title_poi fl mt20">报名表单设置</label>
                     <div class="ov map_poou_car"   >
                          <div ng-repeat="fo in row_po_form">
                          	<p class="row_po_form" ng-if="$index<2">
                          	
                                <i class="f_i radio_p"></i>
                                <span class="mr10">必填</span> | <span  class="f_d  ml10 poiuyt_iu" ng-bind="fo.name"></span>
                                <input type="text" class="act_input_a ipue ml10 ipug" placeholder="报名用户的{{fo.name}}" readonly>
                          	 </p> 
                          	 
                         <p class="row_po_form row_po_form_zdy" ng-if="$index>1">
                             <i class="f_i  radio_p_xz gx_xzm" data-xz="0" ng-if="fo.necessary=='y'"></i>
                                  <i class="f_i  radio_p_xz" data-xz="1" ng-if="fo.necessary=='n'"></i>
                             <span >必填</span>  |  &nbsp; 
                             <input type="text" class="act_input_a ml10 ipuf" value="{{fo.name}}"> 
                             <input type="text" class="act_input_a ipue ml10 ipug" placeholder="提示信息写在这里" readonly>
                             <i class="f_i delect_icon modify_disa"  title="删除" ng-click="select_click.delect_fom_p($index)"></i>
                         </p>
                         
                         
                          </div>
                            
             
          
                         <p class="mt20 modify_disa">
                             <a class="btn btn-primary add_form_p add_form_p_fpr modify_disable" ng-click="select_click.add_fom_p()">+ 添加更多表单</a>
                         </p>
                     </div>
                     <div class="display_show" ></div>
                   
             </li>
             <li class="zq mt20 pr">
                     <label class="f_d title_poi fl mt10">匿名打赏</label>
                     <div class="ov map_poou_car">
                          <p class="row_po_form">
                              <i ng-hide="id>0&&reward.open==true&&status!=1" class="f_i radio_p_xz gx_xzm j-rewardOpen" data-xz="0"></i>
                              <i ng-if="id>0&&reward.open==true&&status!=1" class="f_i radio_p"></i>
                              <span class="mr10">支持匿名打赏功能</span><span class="red">提示：</span>勾选后收到用户的现金打赏哦！
                          </p>  
                          <p class="row_po_form mt10">
                             <span >打赏提示语</span> 
                             <input type="text" name="rewardRemark" class="act_input_a ipue ml10 ipug" ng-model="reward.remark" maxlength="20"  value="活动不易，打赏一下组织者吧！">
                         </p>
                     </div>
             </li>
        </ul>
       
    </div>
    
        <div class="wd mt20 bgff sponsor_div">
         <p class="fz24 j-accordionDown accordion-title">高级设置<i class="j-addSign">+</i><img style="margin-left: 35px;" src="/img/minus.png" class="none" /></p>
         <div class="j-accordionContent none">
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
                   <li class="zq mt20 pr modify_disable_par">
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
                            <a class="btn btn-primary add_form_p " ng-href="#ticket_set" data-toggle="modal">+  添加新的票种</a><span class="ml30 zc fz12">(免费活动时，无需设置票种。)</span>
                      </div>
                      <!-- <div class="display_show" ></div> -->
             </li>
             
             
             
              <!-- 暂时屏蔽赞助 -->
              <!-- <li class="zq mt20 ">
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
                                   <tr  ng-repeat="mlist in mySp_list" data-sr="{{mlist.status}}">
                                     <td class="cen" >
                                     <span title="选择赞助">
                                         <i class="f_i  choice" ng-click="ct_check(mlist.id,$event.target)" data-xz="0"></i>
                                                                            
                                     </span>
                                     <input type="radio" name="setting" ng-model="x"   >
                                     </span>
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
              </li> -->
              <!-- /暂时屏蔽赞助 -->
            </ul>
            <p class="slideUp j-accordionUp">收起选项<i class="iconfont icon-arrowup fz12" style="margin: 3px 0 0 5px;font-size: 14px;"></i></p>
         </div>

      </div>
      <div class="wd mt20 bgff sponsor_div">
      	<p class="fz24 j-accordionDown accordion-title">签到设置<i class="j-addSign">+</i><img style="margin-left: 35px;" src="/img/minus.png" class="none" /></p>
        <div class="j-accordionContent none">
          <ul class="nav nav-tabs user_poiy_er">
             <li class="active"><a ng-href="#lottery" data-toggle="tab" class="zc">抽奖设置</a></li>
             <li><a class="zc" ng-href="#ad" data-toggle="tab">广告设置</a></li>
             <li><a class="zc" ng-href="#vote" data-toggle="tab">投票设置</a></li>
             <li><a class="zc" ng-href="#follow" data-toggle="tab">关注设置</a></li>
          </ul>
            
          <div class="tab-content">
            <div class="tab-pane active" id="lottery" style="padding-left: 35px;">
                <p>
                    <span>参与抽奖用户</span>
                    <label style="display: inline;"><input ng-model="lotterySetting.datas.limit_type" style="margin: 0 5px 3px" type="radio" name="user" ng-value="2" checked="checked" />已签到用户</label>
                    <label style="display: inline;"><input ng-model="lotterySetting.datas.limit_type" style="margin: 0 5px 3px" type="radio" ng-value="1" name="user" />已报名用户</label>
                </p>
                <div class="mt15">
                    <span class="form-label">奖项设置</span>
                    <div class="vt" style="display: inline-block;">
                        <table class="table case_poiou_cb" ng-show="lotterySetting.datas.draw_detail_array.length>0">
                             <thead class="table_top_poiiu">
                                <tr>
                                     <td width="200">奖项名称</td>
                                     <td width="80">名额</td>
                                     <td width="80">奖品图</td>
                                      <td width="360">奖品说明</td>
                                     <td>操作</td>
                                 </tr>
                             </thead>
                             <tbody>
                                <tr ng-repeat="item in lotterySetting.datas.draw_detail_array track by $index">
                                     <td width="200"><p class="dian" style="width:200px;" ng-bind="item.draw_name">  </p></td>
                                     <td width="80" ng-bind="item.quota"></td>
                                     <td width="80" ><img style="width: 68px;height: 42px;" src="/img/activity/gift.png" ng-src="{{item.prize_image}}" alt="奖品图"></td>
                                    <td width="360"><p class="dian" style="width:360px;" ng-bind="item.prize_remark"></p></td>
                                     <td>
                                         <p class="bj_icon_a modify_disa">
                                           <span title="修改">  <i class="f_i bj_poi_p mr10" ng-click="lotterySetting.editItem($index)"></i></span> |
                                           <span title="删除">  <i class="f_i delect_icon" alt="删除" ng-click="lotterySetting.deleteItem($index)"></i></span>
                                         </p>
                                       
                                    </td>
                                 </tr>
                             </tbody>
                         </table>
                         <a class="btn btn-primary add_form_p mt20" ng-href="#lotteryModal" data-toggle="modal">+ 添加奖项</a>
                    </div>
                    
                </div>
                <p class="row_po_form mt10">
                    <span class="form-label">客服电话</span> 
                    <input type="text" nsame="service_tel" ng-model="lotterySetting.datas.service_tel" class="act_input_a ipua ml10" style="margin-left: 0;" />
                </p>
            </div>
            <div class="tab-pane" id="ad">
                <div class="sign-adSetting j-signAdSetting" style="padding-left: 35px;">
                    <ul class="list db j-list">
                      <li ng-repeat="item in adSetting.ad_urls_array">
                        <img class="icon216x128 j-img" ng-src="{{item}}" alt="">
                        <img src="/img/close.png" class="deleteBtn" ng-click="adSetting.deleteImg($index)" />
                      </li>
                      <div class="db addBtn icon216x128" ng-click="adSetting.uploadImg()" ng-if="adSetting.isShow">+</div>
                    </ul>
                    <p class="gray">提示：请上传至少<span style="color:#4ea45d;">1080*640</span>尺寸的图片, 最多上传6张。</p>
                </div>
            </div>
            <div class="tab-pane" id="vote">
                <div class="voite_poiu_a pr" style="padding-left: 30px;">
                 <ul class="form_poiu_q_m mt20 form_poiu_q_m_o pr form_poiu_q_m_o_poo"> 
                    <li class="zq mt10 ">
                     <label class="f_d title_poi fl mt20 title_poi_poi">投票名称<span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">  
                             <input type="text" class="act_input_a ipue" ng-model="voteSetting.datas.title" placeholder="请输入投票名称" id="vote_title" maxlength="20">
                         </div>
                        </div>
                     </li>
                     <li class="zq mt10 "> 
                        <label class="f_d title_poi fl mt20 title_poi_poi">截止时间<span class="hs">*</span></label>
                         <p class="ty_poi_q">
                                        <span class="pr time_poiu"><i class="f_i tri_icon"></i> 
                                        <input type="text" class="act_input_a ipub" id="stat_time_q" ng-model="voteSetting.datas.end_date"></span>
                                        <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label>
                                        <input type="text" class="act_input_a ipuc" id="stat_time_w" ng-model="voteSetting.datas.end_time2"></span>
                                      
                                      </p>
                                      <p class="qc"></p>
                     </li>
                     
                        <li class="zq  mt10"> 
                              
                                <label style="width:80px;" class="f_d title_poi fl  title_poi_poi title_poi_poi_pooi">投票选项<span class="hs">*</span></label>
                                 <div class="ov map_poou_car">
                                 <p class="zc">最多可添加20项</p>
                                  
                                </div>
                                   <p class="qc"></p>
                         </li>
                         
                         <li class="zq"   ng-repeat="List in voteSetting.datas.voteItemList track by $index">    
                      
                           <label class="f_d title_poi fl mt20 title_poi_poi">选项{{$index+1}}<span class="hs"></span></label>
                            <div class="ov map_poou_car act_input_a_voge_ws">
                               <div class="pr poiuy_poiu_q fl mt10 pr"> 
                                     <input type="hidden" value="{{List.id}}">
                                     <input type="text" class="act_input_a ipue act_input_a_voge" placeholder="请输入投票的标题（不大于30字）"  maxlength="20" value="{{List.item_name}}">
                                      <p class="pupu_oiuuy_icon">
                                         <img src="http://resource.apptown.cn/image/userIcon.jpg" ng-src="{{List.image_urls}}" class="browse_maps">|
                                         <i class="f_i piytr_a_b" title="点击上传图片" ng-click="voteSetting.uploadImg($event)"></i>| 
                                         <i class="f_i delect_icon_c" title="删除" ng-click="voteSetting.deleteOption($index)"></i>
                                      </p>
                                 </div>
                            </div>
                        </li>
                              
                             
                              <li class="zq  "> 
                                 <label class="f_d title_poi fl mt20 title_poi_poi">&nbsp;<span class="hs"></span></label>
                                  <div class="ov map_poou_car">
                                    <a class="btn btn-primary add_form_p " ng-click="voteSetting.addOption()">+  增加投票选项</a>
                                  </div>
                              </li>
                               
                              <li class="zq  mt20"> 
                              
                                <label class="f_d title_poi fl mt20 title_poi_poi">投票类型<span class="hs">*</span></label>
                             <div class="ov map_poou_car">
                                  <div class="pr poiuy_poiu_q fl">
                                        <select class="sp_pull_down" id="type_vote" ng-model="voteSetting.datas.type">
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
                                       <textarea class="ipue jiap_po_c" placeholder="请填写投票说明，不大于60字" maxlength="60" id="vote_detail" ng-model="voteSetting.datas.detail" ></textarea>
                                       <p class="qc"></p>
                        <p  class=" pup_icon_bottom poiuyt_ouy poiuyt_ouy_nmjh_a">
                            <a class="btn btn-primary sub_poiy_a mr20" ng-click="voteSetting.save()">保存</a>
                            <a class="btn btn-primary rese_button_a" style="width: 120px;" ng-click="voteSetting.clear()">清空</a>
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
            <div class="tab-pane" id="follow">
                <p class="atten_set">
                    <span style="float:left;margin-left: 45px;">关注设置</span>
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
            </div>
          <p class="slideUp j-accordionUp">收起选项<i class="iconfont icon-arrowup fz12" style="margin: 3px 0 0 5px;font-size: 14px;"></i></p>
          </div>
          
        </div>
      </div>
    
    <div class="wd mt20">
     <p class="wd  cen">
        <i class="f_i radio_p_xz gx_xzm" id="fuy_poi_a" data-xz="0"></i>
         <span>阅读并同意e场景活动的</span>
         <a ng-href="/jsp/common/e_active.jsp">《e场景平台服务协议》 </a>
     </p>
        <p class="mt50 cen bottom_button" ng-if="id==0"><!-- 创建的情况 -->
            <a class="btn btn-primary" ng-click="select_click.submit_data(0)"> 发布</a>
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(1)">保存</a>
        </p>
         <p class="mt50 cen bottom_button" ng-if="id>0&&status==0"> <!-- 已发布的情况 --> 
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(3)">修改</a>
        </p>
          <p class="mt50 cen bottom_button" ng-if="id>0&&status==1"><!-- 保存未发布的情况 --> 
      <a class="btn btn-primary" ng-click="select_click.submit_data(6)"> 发布</a>
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
       <div id="ticket_set" div class="modal fade hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
       
<!-- 奖项设置弹窗  -->
<div class="modal fade hide" id="lotteryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">奖项设置</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal j-lotteryForm" role="form">
          <div class="form-group">
            <label for="name" class="col-xs-2 control-label" style="width: 120px;">奖项名称</label>
            <div class="col-xs-10">
              <input name="draw_name" type="text" class="form-control ml20" style="width: 300px; margin-bottom: 15px;" id="name" maxLength="20" data-empty="请输入奖项名称" >
            </div>
          </div>
          <div class="form-group">
            <label for="num" class="col-xs-2 control-label" style="width: 120px;">名额</label>
            <div class="col-xs-10">
              <input name="quota" type="text" class="form-control ml20"  style="width: 300px; margin-bottom: 15px;" id="num" data-empty="请输入名额" format-number number >
            </div>
          </div>
          <div class="form-group">
            <label for="pic" class="col-xs-2 control-label" style="width: 120px;margin-right: 20px;">奖品图</label>
            <div class="col-xs-10">
              <div class="vt" style="margin-bottom: 20px;" ng-click="lotterySetting.uploadImg()">
                <img id="lotteryGift" style="width: 136px;height: 85px;border: 1px solid #ccc;" src="/img/activity/gift.png" alt="礼品默认图片">
                <input type="hidden" name="prize_image" value="" >
                <a class="btn btn-primary pr fz16">上传图片</a>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="summary" class="col-xs-2 control-label" style="width: 120px;">奖品说明</label>
            <div class="col-xs-10">
              <textarea name="prize_remark" rows="5" class="form-control ml20" style="width: 300px; margin-bottom: 15px;" maxlength="100" data-empty="请输入奖品说明"></textarea> 
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <p  class=" pup_icon_bottom poiuyt_ouy poiuyt_ouy_nmjh_a">
            <save-button style="height: 45px;" btn-class="btn btn-primary sub_poiy_a" form=".j-lotteryForm" callback="lotterySetting.addItem(arg1)" text="确认"></save-button>
            <a  class="btn btn-primary rese_button_a ml20" data-dismiss="modal">取消</a>
        </p>
      </div>
    </div>
  </div>
</div>
<!-- /奖项设置弹窗  -->
      
       <input type="hidden" value="${activityId }" id="act_id">
       <input type="hidden" value="${user_id }" id="user_id">
       <input type="file" name="uploadCode" id="uploadCode" style="display:none" capture="camera" accept="image/*">
      <%@include file="/jsp/common/mml_bottom.jsp"%>
      <!-- <script src="/libs/jcrop/jquery.Jcrop.min.js"></script> -->
      <script src="/js/rich_text/umeditor.config.js"></script>
      <script src="/js/rich_text/umeditor.min.js"></script>
      <script src="/js/common/jquery.datetimepicker.js"></script>
      <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=KIpwmISmRtIMMssrIQ4NF9ji"></script>
      <script src="/js/common/angular-ui-router.min.js"></script>
      <script src="/js/view/activity_sponsor.js?v=8"></script>

      
  
</body>
</html>