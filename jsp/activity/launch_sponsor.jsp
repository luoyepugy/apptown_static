<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
   <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="launch_sponsor">
<head>
<meta charset="UTF-8">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
        <link href="/js/rich_text/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
      <link href="/css/jquery.datetimepicker.css" type="text/css" rel="stylesheet">
      <link  rel="shorcut icon"   href="/img/LOGO.png" />

<!--[if IE]>    <link href="/css/ie.css" rel="stylesheet"><![endif]-->
<title>赞助编辑</title>
<script src="/js/common/uaredirect.js"></script>
<script>
	uaredirect("http://m.apptown.cn");//手机打开跳转到手机页面
</script>
</head>
<body ng-controller="launch_sponsor_centerController" ng-init="select_click.hc_sess_a()">

  <%@include file="/jsp/common/mml_nav.jsp"%>
        
    <div class="act_title_list">
       <p class="wd">
            <a ng-href="/">首页</a> / 
             <a ng-href="#" class="zc">发起赞助</a>
        </p>
    </div>
    
    <div class="wd mt20 bgff sponsor_div gji_poi">
         <p class="fz24 act_title_a">发起赞助</p>
         <ul class="form_poiu_q_m mt20 form_poiu_q_m_o">
               <li class="zq">
                     <label class="f_d title_poi fl mt20">项目名称 <span class="hs">*</span></label>
                     <input type="text" placeholder="赞助标题(不大于50个字)" class="act_input_a ipua" id="name_event" maxlength="50">
                 <p class="qc"></p>
              </li>
             
               <li class="zq mt20 ">
                     <label class="f_d title_poi fl mt10">项目海报 <span class="hs">*</span></label>
                     <div class="ov ">
                         <a class="btn btn-primary pr up_icon_po fz16" ng-click="select_click.up_icon_a()"><label class="f_i up_icon"></label>本地上传</a>
                    
                     <a ng-href="#upde_p_icon_pup" class="ml30"  data-toggle="modal">没有准备封面?</a>
                    <span class="zc">提示:尺寸不小于640*360px，不大于3M,最多四张</span>
                    <div class="case_poiuy_i"> 
                        <p class="qc"></p>
                        
                        <p class="pr fl case_icon"  ng-repeat="img in img_icon">  
                            <img ng-src="{{img}}" class="case_poiu_a">  
                            <img src="/img/close.png" class="icon_close_a" ng-click="select_click.delect_icon($index)">  
                         </p>
                         
                         
                        
                           
                    </div>
                         
                         
                        </div>
             </li>
             
             <li class="zq mt20">
                     <label class="f_d title_poi fl mt20">项目简介 <span class="hs">*</span></label>
                     <input type="text" placeholder="请简单填写赞助的简介/规模/资源优势 (不大于50字)" class="act_input_a ipua" id="sponsor_instroducton" maxlength="50">
                 <p class="qc"></p>
              </li>
             
             
            
             
             <li class="zq mt20 ">
                     <label class="f_d title_poi fl">时间设置 <span class="hs">*</span></label>
                     <div class="ov">
                          <div class="forem_neo_p fl">
                             <p class="pm10">开始时间：</p>
                              <p class="ty_poi_q">
                                <span class="pr time_poiu"><i class="f_i tri_icon"></i> <input type="text" class="act_input_a ipub" id="stat_time_a" readonly="readonly"></span>
                                <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label><input type="text" class="act_input_a ipuc" id="stat_time_b" readonly="readonly"></span>
                              
                              <label class="f_i next_icon"></label>
                              </p>
                          </div>
                          <div class="forem_neo_p fl">
                             <p class="pm10">结束时间：</p>
                               <p class="ty_poi_q">
                             <span class="pr time_poiu"><i class="f_i tri_icon"></i> <input type="text" class="act_input_a ipub" id="end_time_a" readonly="readonly"></span>
                              <span class="pr ml10 time_poiu"><label class="f_i data_icon_a"></label><input type="text" class="act_input_a ipuc" id="end_time_b" readonly="readonly"></span>
                              </p>
                          </div>
                     </div>
                 
                 
                 <p class="qc"></p>
                      
              </li>
              
             
              
             <li class="zq mt20 " style="z-index:8">
                     <label class="f_d title_poi fl mt20">选择行业 <span class="hs">*</span></label>
                     <div class=" map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue" placeholder="" value="{{classification[1].maker_title[0].name}}" id="m_industry" data-id="1" readonly="readonly">
                              <label class="f_i xjt_icon"></label>
                                  <ul class="xl_oiu">
                                <li ng-repeat="pe in classify[1].maker_title" ng-bind="pe.name" data-id="{{pe.id}}"></li>
                              </ul>
                         </div>
                        </div>
                  <p class="qc"></p>
             </li>
                <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">联系电话 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" maxlength="11" class="act_input_a ipue" placeholder="请输入手机号码" id="contact_information">
                              
                         </div>
                        </div>
                     <p class="qc"></p>
             </li>
             <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">目标金额 <span class="hs">*</span></label>
                     <div class="ov map_poou_car">
                          <div class="pr poiuy_poiu_q fl">
                             <input type="text" class="act_input_a ipue num" placeholder="请填写招商赞助的目标金额" id="target_amount">
                              
                         </div>
                        </div>
                     <p class="qc"></p>
             </li>
             
            <li class="zq mt20 "  style="z-index:100">
                     <label class="f_d title_poi fl">项目详情 <span class="hs">*</span></label>
                     <div class="ov map_poou_car rich_text">
                          <div id="myEditor" > </div>

                      </div>
                <p class="qc"></p>
            </li> 
            
            <li class="zq mt20 " >
                     <label class="f_d title_poi fl mt20">回报设置 <span class="hs">*</span></label>
                     <div class="form-input-repay j-sponsorRepayList" id="form_config">
	                     <!-- <div class="sponsor-repay-div">
	                     	<p>
	                     		<b>赞助</b><span><a class="support-amount-div hs"> 43534元</a></span><span class="sponsor-repay-edit-div"><label class="sponsor-repay-del-div"></label></span>
	                     	</p>
	                     	<p class="repay_title">4354</p>
	                     	<p class="repay_content fz14">45435</p>
	                     	<p class="fz14">人数限制：<span class="person_limit">43543</span><span style="margin-left:100px;">回报截止时间：<a class="repay_time">2016/07/13 21:27</a></span></p>
	                     </div> -->
	                     <a  id="add_form_repay" class="btn btn-primary" style="margin-top:15px;padding: 8px 24px;">+ 添加赞助回报</a>
	                 </div>
                    
                     <p class="qc"></p>
             </li>
            
            
        </ul>
       
    </div>
    

    
        
    
    <div class="wd mt20">
     <p class="wd  cen">
        <span class="fa green_new fa-check-square radio_p_xz" style="font-size:20px;cursor:pointer;border: 0;position:relative;top:3px;"></span>
        <!-- <i class="f_i radio_p_xz gx_xzm"></i> -->
         <span>阅读并同意e场景活动的</span>
         <a ng-href="/jsp/common/e_active.jsp">《e场景平台服务协议》 </a>
     </p>
        <p class="mt50 cen bottom_button" ng-if="id==0">
            <a class="btn btn-primary" ng-click="select_click.submit_data(3)"> 发布</a>
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(0)">保存</a>
        </p>
         <p class="mt50 cen bottom_button" ng-if="id>0&&status==0">  
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(3)">修改</a>
        </p>
          <p class="mt50 cen bottom_button" ng-if="id>0&&status==1">
      <a class="btn btn-primary" ng-click="select_click.submit_data(0)"> 发布</a>
             <a class="btn btn-primary ml60 baocun_button" ng-click="select_click.submit_data(1)">修改</a>
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
  
        <!-- 赞助审核中弹窗 -->
        <div class="modal fade" id="reviewModal" role="dialog" style="padding: 30px 15px;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body tc">
                <div class="fz20"><img class="mr10" src="/img/waiting.png" alt="等待">审核中...</div>
                <p class="gray mt20">你的赞助项目审核目标已经成功提交，工作人员将会在7个工作日之内完成审核，并且通知审核结果，请耐心等待...</p>
                <p class="mt20"><button class="btn btn-primary j-reviewSponsor" style="padding: 10px 30px;">预览项目</button></p>
              </div>
            </div>
          </div>
        </div>
        <!-- /赞助审核中弹窗 -->
    
        <!--赞助回报弹框-->
        <div class="modal fade" id="repay_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style="display:none;">
			<div class="modal-dialog">
				<div class="modal-content tabbable" style="height:auto; width: 610px; overflow-y:auto;padding-bottom:20px;">
				

  
  
					<div class="modal-header  nav nav-tabs">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title" id="reply_title">
							<b class="act_ooi"><a ng-href="#money_p" data-toggle="tab">赞助回报</a></b>
							<!-- <b><a ng-href="#form_p_a" data-toggle="tab">表单设置</a></b> -->
						</h4>
					</div>
					
					
					
					
					
					<div style="clear: both"></div>
					
					<div class="tab-content">
    						<div class="tab-pane active" id="money_p">
     				<!-- 赞助金额 -->
					<div class="form-repay-group clearfix">
						<label class="form-repay-label">赞助金额<em>*</em></label>
						<input type="text" class="form-repay-amount num" id="target_repay_amount" placeholder="请设置赞助金额" maxlength="5">
					</div>
					
					<!-- 回报标题  -->	
					<div class="form-repay-group">
						<label class="form-repay-label">回报方式<em>*</em></label>
            <ul class="repay-options j-repayOption">
              <li><span>冠名</span></li>
              <li><span>广告位</span></li>
              <li><span>媒体</span></li>
              <li><span>现场</span></li>
              <li><span>实物</span></li>
              <li><span>指定物品</span></li>
              <li class="last">
                <span class="j-other">其他（限10个字）</span>
                <label class="none"><input type="text" name="" value="" maxlength="10"><em class="confirmBtn j-repayTitleConfirm">确定</em></label>
              </li>
            </ul>
					</div>
					
					<!-- 回报内容 -->
					<div class="form-repay-group">
					    <label class="form-repay-label">回报详情<em>*</em></label>
					 	<textarea class="form-repay-content" maxlength="200" id="target_repay_content" placeholder="请慎重填写内容的详情，以免回报兑换不了，风险将由自己承担"></textarea>
					</div>
					
					<!-- 人数限制 -->
					<div class="form-repay-group">
						<label class="form-repay-label">名额限制</label>
						<input type="text" class="form-repay-limit num" id="target_repay_limit" placeholder="默认为无人数限制" maxlength="50">
					</div>
					
					
					<!-- 回报时间 -->
					<div class="form-repay-group">
						<label class="form-repay-label">兑现时间<em>*</em></label>
						<input type="text" class="form-input-time" placeholder="请填写回报兑现时间" id="repayTime" maxlength="20" />
					</div>
						<div class="form-repay-setting-button" style="margin-top:20px;">
					    <label class="form-label form-label-button"></label>
					       <div>
                     <a class="btn repay_button_submit_a none j-editRepayBtn" ng-click="select_click.repay_form('edit')"  data-toggle="tab" >保存</a>
					           <a class="btn repay_button_submit_a" ng-click="select_click.repay_form('add')"  data-toggle="tab" >确认</a>
					           <button class="repay_button_reset_a" data-dismiss="modal">取消</button>
					       </div>
					</div>  
					
    						</div>
    						
    						
    				<!-- <div class="tab-pane" id="form_p_a"> -->
    							<!-- 表单设置  -->
					<!-- <div class="form-repay-group" >
					<label class="form-repay-label" style="text-align:left">报名表单设置</label> -->
					<!-- 表单内容 -->
					<!-- <div class="form-repay-setting" id="form_repay_setting"> -->
					  <!-- 表单填写姓名 -->
					  <!-- <div class="form-repay-setting-div">
						  <label class="form-repay-select" data-lx="0"></label>
						  <span class="form-repay-select-title">必填</span>|
						  <input class="form-repay-select-label" value="姓名" data-jz="1" data-dm="name" disabled="disabled">
						  <input type="text" class="form-repay-select-text" placeholder="报名用户的姓名" disabled="disabled">
					  </div> -->
					  
					  <!-- 表单填写手机号码 -->
					  <!-- <div class="form-repay-setting-div">
						  <label class="form-repay-select" data-lx="0"></label>
						  <span class="form-repay-select-title">必填</span>|
						  <input class="form-repay-select-label" value="手机号码" data-jz="1" data-dm="tel" disabled="disabled">
						  <input type="text" class="form-repay-select-text" placeholder="报名用户的手机号码" disabled="disabled">
					  </div> -->
					  
					  
					  <!-- 表单填写电子邮箱 -->
					  <!-- <div class="form-repay-setting-div">
						  <label class="form-repay-select" data-lx="2"></label>
						  <span class="form-repay-select-title">必填</span>|
						  <input class="form-repay-select-label" value="电子邮箱" data-jz="1" data-dm="email"  >
						  <input type="text" class="form-repay-select-text" placeholder="报名用户的电子邮箱"  >
						  <label class="del-repay-select"></label>
					  </div>
					  <a class="add-repay-form btn btn-primary" id="add_repay_form">+ 增加更多表单</a>
					
					</div> -->
					
					<!-- <div class="form-repay-setting-button" style="margin-top:20px;">
					    <label class="form-label form-label-button"></label>
					       <div>
					           <a class="btn repay_button_submit_a" ng-click="select_click.repay_form()"  data-toggle="tab" data-dismiss="modal" >确认</a>
					           <button class="repay_button_reset_a" data-dismiss="modal">取消</button>
					       </div>
					</div>
					<div style="clear: both;"></div>
				</div>
    						
    						</div> -->
    						
    						
    						
    						
    					</div>
					
					
					
				
					
				
			</div>
		</div>
     </div>
    
       <input type="hidden" value="${activityId }" id="act_id">
            <%@include file="/jsp/common/mml_bottom.jsp"%>
      <script src="/js/rich_text/umeditor.config.js"></script>
      <script src="/js/rich_text/umeditor.min.js"></script>
      <script src="/js/common/jquery.datetimepicker.js"></script>
      <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=KIpwmISmRtIMMssrIQ4NF9ji"></script>
      <script src="/js/view/launch_sponsor.js?v=7"></script>
      <script>
      $("#add_form_repay").on("click",function(){
      $("#repay_modal").modal("toggle");//赞助回报弹出框
      $("#target_repay_time").datetimepicker()//时间控件
      
      /**  勾选框触发事件 **/
		$("body").on("click",".form-repay-select",function(){
		if($(this).attr("data-lx")=="1"){
		    $(this).attr("data-lx","2");
		}else if($(this).attr("data-lx")=="2"){
		    $(this).attr("data-lx","1");
		    }
		})
		
		$("#reply_title b").on("click",function(){//赞助回报标题字体颜色切换
		   $("#reply_title b").removeClass("act_ooi");
		   $(this).addClass("act_ooi")
		})
		
		$("#add_repay_form").on("click",function(){//增加更多表单
		   var str='<div class="form-repay-setting-div">'+
'						  <label class="form-repay-select" data-lx="2"></label>'+
'						  <span class="form-repay-select-title">必填</span>|'+
'						  <input class="form-repay-select-label" value="" data-jz="1" data-dm="email">'+
'						  <input type="text" class="form-repay-select-text" placeholder="提示信息">'+
'						  <label class="del-repay-select"></label>'+
'</div>';
			$("#form_repay_setting").children().eq(-2).after(str)
		})
      })
      
      $(document).on('click','.del-repay-select',function(){
         $(this).parent().remove()
      })
      


      // 删除回报列表
      $('.j-sponsorRepayList').on('click','.j-sponsorDelBtn',function(){
       $(this).closest(".j-sponsorRepay").remove();
      });
      // 编辑回报列表
      var editRepayIndex = 0;
      $('.j-sponsorRepayList').on('click','.j-sponsorEditBtn',function(){
        var wrap = $(this).closest('.j-sponsorRepay');
        editRepayIndex = wrap.index();
        $('#repay_modal').modal('show');
        // 赞助回报弹窗保存按钮切换
        $('.j-editRepayBtn').removeClass('none').next().addClass('none');
        $('.j-repayOption li span').removeClass('on');
        $('.j-repayOption li:last').find('span').text('其他（限10个字）');
        switch (wrap.find('.j-title').text()) {
          case '冠名':$('.j-repayOption li').eq(0).find('span').addClass('on'); break;
          case '广告位':$('.j-repayOption li').eq(1).find('span').addClass('on');break;
          case '媒体':$('.j-repayOption li').eq(2).find('span').addClass('on');break;
          case '现场':$('.j-repayOption li').eq(3).find('span').addClass('on');break;
          case '实物':$('.j-repayOption li').eq(4).find('span').addClass('on');break;
          case '指定物品':$('.j-repayOption li').eq(5).find('span').addClass('on');break;
          default: $('.j-repayOption li').eq(6).find('span').addClass('on').text(wrap.find('.j-title').text());
        };
        $('#target_repay_amount').val(wrap.find('.j-amount').text());
        $('#target_repay_content').val(wrap.find('.j-content').text());
        var limit = wrap.find('.j-limit').text();
        limit = (limit == '不限制') ? '' : limit;
        $('#target_repay_limit').val(limit);
        $('#repayTime').val(wrap.find('.j-time').text());
      });
      
      </script>

</body>
</html>