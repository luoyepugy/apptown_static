<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html ng-app="information_interface">
<head>
<meta charset="UTF-8">
<title>票券详情 </title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Cache-Control" content="no-transform "> 
<link href="/css/phone/mui.min.css" rel="stylesheet">
<link href="/css/phone/bass.css" rel="stylesheet">
<link href="/css/phone/style.css" rel="stylesheet">
</head>
<body ng-controller="information_Controller">
    <nav class="pt10 pm10 pd note_nav">
        <i class="f_i note_logo"></i>
       <!-- <a class="cf fr pt5 dd_poiuy fz16">更多<i class="f_i right_icon"></i></a>-->
    </nav>
    <section class="note_banner bfgg">
        <section class="pt10 pd">
            <section class="fl qc_icon_note bgff">
               <img src="/img/phone/note_qc.jpg" class="df_po_icon">
               <p class="green_new cen">更多精彩活动<br>关注TA</p>   
            </section>
           <section class="ov pl10 cf" ng-if="infomation.volume_details.price>=0">
                  <p class="cf fz16">票种：<span ng-bind="infomation.volume_details.ticket_name"></span></p>
                  <p class="cf fz16 mt10">票价：<span class="hs" ng-bind="infomation.volume_details.price+'元'"></span></p>
                  <p class="cf fz16 mt10">张数：<span ng-bind="infomation.volume_details.entrycode_array.length+'张'"></span></p>
                  <p class="cf fz16 mt10">合计：<span ng-bind="infomation.volume_details.entrycode_array.length*infomation.volume_details.price+'元'"></span></p>
                 
                  <p class="fz14 cf dian  pt5">请保存票号，凭此券参加活动！</p>
            </section>
            
           <section class="ov pl10 cf" ng-if="infomation.volume_details.price==undefined">
                <p class="cf fz16">票种：免费</p>
                  <p class="cf fz16 mt50" ng-bind="infomation.volume_details.khg"></p>
                
                    <p class="fz12 cf dian mt50 pt5">请保存票号，凭此券参加活动！</p>
            </section> 
        
          </section>
    </section>
    <section class="bgff pd pt20">
      <p class="dianer fz16 green_new" ng-bind="infomation.volume_details.activity_name"></p>
       
        <p class="fz12 mt10 pm5 brm">
            报名时间：<span ng-bind="infomation.volume_details.apply_time | date:'MM/dd EEE HH:mm'"></span>
        </p>
        
        <section class="pt10">
           <p class="fz16"> <strong ng-bind="infomation.volume_details.entrycode_array[0].user_name"></strong><br>
            <span ng-bind="infomation.volume_details.phone"></span>
            </p>
            
            <section class="exchange_shop mt10 brm"   > 
                <p class="fz12 green_bg cf pd ex_case yj4 ov pr" ng-repeat="arrp in infomation.volume_details.entrycode_array" >
                     <i class="f_b di_icon dia_left yj"></i>
                      <i class="f_b di_icon dia_right yj"></i>
                     <span class="pr10"> 票号</span>
                     <span class="pl10 br0" ng-bind="arrp.entry_code"></span>
                     <span class="hint_note br0" ng-if="arrp.use==2">
                   		   已使用
                    </span>
                </p>
                <p class="qc"></p>
            </section>
            
            <section class="pt10">
                <p>开始时间：<span ng-bind="infomation.volume_details.activity_start_time | date:'MM/dd EEE HH:mm'"></span></p>
                <p>结束时间：<span ng-bind="infomation.volume_details.activity_end_time | date:'MM/dd EEE HH:mm'"></span></p>
                <p class="dianer">
                地点：<span ng-bind="infomation.volume_details.activity_address"></span>
                </p>
                <section class="mt10">
                    <a ng-href="http://map.baidu.com/mobile/webapp/search/search/qt=s&wd={{infomation.volume_details.activity_address}}">
                        <i class="map_ico f_i fl"></i>
                        <p class="pt10 green_new">查看地图</p>
                    </a>
                    <p class="qc"></p>
                </section>
            </section>
        
        </section>
    </section>
    <section class="mt10 ">
      <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse mui-active bgff">
            <a class="mui-navigate-right" href="#">电子票使用说明</a>
            <section class="mui-collapse-content ">
                <p class="pm20">1、本次活动凭票参加，一人一票一次性，请勿复制或 转赠他人；<br>
                    2、请保存电子票到手机或打印携带，保持条码清晰完 整；<br>
                    3、本次活动有【e场景活动】提供票券服务；如有任何疑问，请拨打热线<a class="green_new" href="tel:400046-1388">400-046-1388</a></p>
            </section>
        </li>
       
    </ul>
    </section>
    <input type="hidden" id="order_id" value="${order_id}"/><%-- 
    <input type="hidden" id="user_id" value="${user_id}"/>
    <input type="hidden" id="ticket_id" value="${ticket_id}"/> --%>
    <script src="/js/common/jquery-1.11.3.min.js"></script>
    <script src="/js/common/angular.min.js"></script>
    <script src="/js/service/service_activity.js"></script>
    <script src="/js/service/service_activity.js"></script>
    <script src="/js/entity/entity_activity.js"></script>
    <script src="/js/phone/mui.min.js"></script>
    <script src="/js/phone/m_view/information_interface.js"></script>
    <script src="/js/mode/directive.js"></script>
</body>
</html>