<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

    <!DOCTYPE html>
<html ng-app="index_date">
	<head>
		<meta charset="UTF-8">
		<title></title>
   <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet">
      <link href="/css/common/font-awesome.css" rel="stylesheet">
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/css/page/white_bar.css" rel="stylesheet">
	</head>  
	<body>
	 <%@include file="/jsp/common/mml_nav.jsp"%>
	    <div class="wt_sbanner">
	        <div class="wd pt50">
             
	             <div class="form_ddf_a yj4 pd pt20 pm20 ">
	                 <div class="form_ooiu">
	                     <label class=" tr">
	                      姓名
	                         
	                     </label>
                        <p class="nkjh_a">
                               <input type="text" placeholder="请输入姓名" id="loan_name">
                        </p>
	                     
	                 </div>
	                 
	                   <div class="form_ooiu mt10">
	                     <label class=" tr">
	                      性别
	                         
	                     </label>
	                      <div class="nkjh_a fz20 zc">
                          <p class="pt10 sex_icon_a">
                                  <i class="fa fa-check-circle  zc mr10 ml20 " data-sex="1"></i>男
	                            <i class="fa fa-circle zc ml20 mr10 " data-sex="2"></i>女
                          </p>
	                      
                           </div>
                     </div>
                           <div class="form_ooiu">
	                     <label class=" tr">
	                      电话号码
	                         
	                     </label>
                        <p class="nkjh_a">
                               <input type="text" placeholder="请输入手机号码" id="loan_tel">
                        </p>
	                     
	                 </div>
                    
                    <div class="form_ooiu mt10">
	                     <label class=" tr">
	                      申请金额
	                         
	                     </label>
                        <p class="nkjh_a">
                               <input type="text" placeholder="请输入金额" id="loan_money">
                        </p>
	                     
	                 </div>
                    
                     <div class="form_ooiu mt10 ">
	                     <label class=" tr">
	                    		  还款期数
	                         
	                     </label>
                        <div class="nkjh_a pr nkjh_b">
                               <input type="text" placeholder="请输入还款期数" class="money_time">
                               <i class="fa fa-sort-down sort_down"></i>
                               <div class="select_input" id="select_input">
                                  <p>1期</p>  
                                  <p>6期</p>
                                  <p>12期</p>
                                  <p>24期</p>
                                  <p>36期</p>
                               </div>
                        </div>
	                     
	                 </div>
                     <div class="form_ooiu mt10">
	                     <label class=" tr">
	                      备注
	                         
	                     </label>
                        <p class="nkjh_a pou_teatr">
                              <textarea placeholder="申请理由" id="loan_remark"></textarea>
                        </p>
	                     
	                 </div>
                     
                         <div class="form_ooiu mt10">
	                     <label class=" tr">
	                     
	                         
	                     </label>
                        <p class="nkjh_a pt10">
                               <button class="btn submiuyt_sd" onclick="upssd()">提交审核</button>
                        </p>
	                     
	                 </div>
                    
                     <p class="qc"></p>
	                 
	             </div>
	            
	        </div>
	        
	    </div>
	    
	    <div class="bghs_poo">
	        <div class="wd">
	          <img src="/img/white_bar/white_a.jpg" class="w100">
	            
	        </div>
	         
	    </div>
	    
	       <div class="bghs_poo_s">
	        <div class="wd">
	          <img src="/img/white_bar/white_b.jpg" class="w100">
	            
	        </div>
	        
	    </div>
	    
	       <%@include file="/jsp/common/mml_bottom.jsp"%>
	          <script src="/js/view/index.js"></script>
	       <script src="/js/page/white_bar.js"></script>
	</body>
</html>
    