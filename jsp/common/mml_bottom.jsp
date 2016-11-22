
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!-- 底部 -->
<div ng-controller="bottom_mml" class="mml_bottm">

    <div class="lk_poiu pt20 pm20">
    <div class="wd mt10 ov ">
        <div class="case_poi_oi_index">
             <ul class="bottom_ul">
                 <li><a class="cf fz16" ng-href="/help/menu?tab=0">关于我们</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=0">慢慢来电子商务</a></li>
                  <li><a class="zc" ng-href="/help/menu?tab=0">e场景活动</a></li>
                 <li><a class="zc" ng-href="/jsp/appdownload.jsp" target="_blank">e场景App</a></li>
            </ul>
            
            
           <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="/help/menu?tab=1">e币说明</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=1#e_coin_pay">e币用途</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=1">获取e币</a></li>
            </ul>
            
            
             <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="/help/menu?tab=3">积分说明</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=3">积分兑换</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=3">获取职分</a></li>
            </ul>
            
            
            
                  <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="/help/menu?tab=2">使用帮助</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=2">帐号注册</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=2">信息管理</a></li>
                      
                    <li><a class="zc" ng-href="/help/menu?tab=2">企业认证</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=2">招商推广</a></li>
            </ul>
            
            
            
            <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="http://v.qq.com/vplus/40c8b577a20a680e7ca329be3aecc704">媒体报道</a></li>
                <!-- <li><a class="zc">优酷视频</a></li>
                  <li ><a class="zc">土豆视频</a></li>-->
                    <li><a class="zc" ng-href="http://v.qq.com/vplus/40c8b577a20a680e7ca329be3aecc704">腾讯视频</a></li>
            </ul>
            
            
               <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="/help/menu?tab=7">加入我们</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=7">前端构架师</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=7">文案策划</a></li>
                    <li><a class="zc" ng-href="/help/menu?tab=7">产品经理</a></li>
            </ul>
            
               <ul class="bottom_ul">
                 <li ><a class="cf fz16"  ng-href="/help/menu?tab=8">联系我们</a></li>
                 <li><a class="zc" ng-href="/help/menu?tab=8">公司地址</a></li>
                  <li ><a class="zc" ng-href="/help/menu?tab=8">公司传真</a></li>
                    <li><a class="zc" ng-href="/help/menu?tab=8">联系电话</a></li>
                     <li><a class="zc" ng-href="/help/menu?tab=8">公司邮箱</a></li>
            </ul>
            
            <div class="fl qc_bottom_a">
                <p class="cf fz12">e场景活动APP</p>
                <img src="http://www.apptown.cn/qrcode.jsp?content=http://apptown.cn/downloadAndroidApp" class="qc_icon_a">
                <p class="cen fz12 cf ">扫描下载</p>
            </div>
            <p class="qc"></p>
        </div>
    </div>
    </div>
    
    <p class="cen bottm_text cf ">
             慢慢来 版权所有 2013-2016 apptown.cn All Rights Reserved 粤ICP备
   <!-- <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1260232769'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1260232769%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script>-->             
    </p>
    
    </div>
    <div class="pup_er_a cen">
        <span class="alert alert-error df_oiuy">
          
        </span>
    </div>
    
    <input type="file" name="iconFile" id="iconFile" style="display:none" capture="camera" accept="image/*">
    <script src="/js/common/jquery-1.11.3.min.js"></script>
       <!--[if IE]> <script src="/js/common/json2.js"></script><![endif]--> 
    <script src="/js/common/ajaxfileupload.js"></script>
    <script src="/js/common/jquery.qrcode.min.js"></script>
    <script src="/js/common/bootstrap.min.js?v=7"></script>
    <script src="/js/common/angular.min.js"></script>
    <script src="/js/common/tm.pagination.js"></script>
    <script src="/js/common/pagination.js"></script>
    <script src="/js/common/is_from.js"></script>
    <script src="/js/common/aes-min.js"></script>
    <script src="/js/common/pad-iso10126-min.js"></script>
    <script src="/js/common/toastr/toastr.js"></script>
    <script src="/js/common/modules-pc.js"></script>
    <script src="/js/mode/directive.js"></script>
    <!--[if IE]><script src="/js/ie.js"></script><![endif]--> 
    <script src="/js/entity/entity_activity.js?v=10"></script>
    <script src="/js/service/service_activity.js?v=10"></script> 
    <script src="/js/common/jquery_page.js"></script>

    



