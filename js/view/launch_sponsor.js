/**
 * 发起活动
 */
angular.module('launch_sponsor', [ "directive_mml","activity_servrt"])
.controller('launch_sponsor_centerController',["$scope","activity_data",function($scope,activity_data) {
    $scope.province=[];//省份
    $scope.id=$("#act_id").val().trim();//获取活动ID
    $scope.id==""?$scope.id=0: $("#act_id").val()	  
    $scope.caty_a=[];//城市 
    $scope.status=0;//发布状态
    $scope.guest_data=[];//嘉宾
    $scope.ticket_array=[];//票卷 
    $scope.img_icon=[];//活动封面
    $scope.img_src="";//弹出层选中的地址
    $scope.row_po_form=[{"name":"姓名","necessary":"y","designation":"name","random":new Date().getTime()},{"name":"手机号码","necessary":"y","designation":"tel","random":new Date().getTime()}];//表单
    $scope.activities_data={};//活动详细数据
    $scope.sp_id=-1
    $scope.pj_id=-1 
    $scope.endDate; 
    var support_end_date=new Date($('#end_time_a').val()+'/'+$('#end_time_b').val()).getTime();//赞助开始的时间戳
    $("#add_form_repay").on("click",function(){
    	$scope.endDate=Date.parse($('#end_time_a').val()+'/'+$('#end_time_b').val());
      // 赞助回报弹窗保存按钮切换
      $('.j-editRepayBtn').addClass('none').next().removeClass('none');
    })
    $("body").on("click",".case_icon",function(){
    	$scope.img_src=$(this).find(".case_poiu_a").attr("src")
        $(".gx_icon_a").hide()
        $(this).find(".gx_icon_a").show();
  });

    /* 
     * 张晗
     * 赞助回报弹窗
     * 回报标题
     */
    $('.j-repayOption span').click(function() {
      $(this).addClass('on').parent('li').siblings().find('span').removeClass('on');
      $('.j-repayOption .j-other').removeClass('none').next().addClass('none');
    });

    $('.j-repayOption .j-other').click(function() {
      $(this).addClass('none').next().removeClass('none');
    });

    $('.j-repayTitleConfirm').click(function() {
      var val = $(this).parent().find('input').val();
      if(!form_mm.isnull(val)) {
        $scope.mml.err_pup("请输入回报标题");
      } else if(val.length > 10) {
        $scope.mml.err_pup("回报标题长度最大为10");
      } else {
        $(this).parent().addClass('none').prev().removeClass('none').text(val);
      }
    });


    $scope.select_click={     
    		"default_cover":[
    		                  {"id":"1","name":"路演场馆","img":"http://resource.apptown.cn/poster/3-3.jpg"},
    		                  {"id":"2","name":"活动赞助","img":"http://resource.apptown.cn/poster/1-1.jpg"},
    		                  {"id":"3","name":"户外交友","img":"http://resource.apptown.cn/poster/2-2.jpg"},
    		                  {"id":"4","name":"活动赞助","img":"http://resource.apptown.cn/poster/4-4.jpg"},
    		                  {"id":"5","name":"路演场馆","img":"http://resource.apptown.cn/poster/5-5.jpg"},
    		                  {"id":"6","name":"户外交友","img":"http://resource.apptown.cn/poster/6-6.jpg"},
    		                  {"id":"7","name":"活动课程","img":"http://resource.apptown.cn/poster/7-7.jpg"},
    		                  {"id":"8","name":"活动课程","img":"http://resource.apptown.cn/poster/8-8.jpg"},
    		                  {"id":"9","name":"活动投票","img":"http://resource.apptown.cn/poster/9-9.jpg"},
    		                  {"id":"10","name":"场馆票务","img":"http://resource.apptown.cn/poster/10-10.jpg"},
    		                  {"id":"11","name":"户外交友","img":"http://resource.apptown.cn/poster/11-11.jpg"},
    		                  {"id":"12","name":"户外交友","img":"http://resource.apptown.cn/poster/12-12.jpg"},
    		                  {"id":"13","name":"活动聚会","img":"http://resource.apptown.cn/poster/13-13.jpg"},
    		                  {"id":"14","name":"活动聚会","img":"http://resource.apptown.cn/poster/14-14.jpg"},
    		                  {"id":"15","name":"科技创客","img":"http://resource.apptown.cn/poster/15-15.jpg"}, 
    		                  {"id":"16","name":"票务场馆","img":"http://resource.apptown.cn/poster/16-16.jpg"},
    		                  {"id":"17","name":"活动投票","img":"http://resource.apptown.cn/poster/17-17.jpg"},
    		                  {"id":"18","name":"活动赞助","img":"http://resource.apptown.cn/poster/18-18.jpg"}
    		                ]//默认封面
    ,"img_selected":function(){ //弹出层确认按钮触发
    	 if($(".case_poiuy_i .case_icon").length>3){
    		 alert("图片最多上次4张");
    		 $('#upde_p_icon_pup').modal('toggle')
    		 return;
    	 }
    	 $('#upde_p_icon_pup').modal('toggle')
    	 $scope.img_icon.push( $scope.img_src+'?v='+new Date().getTime())
    },"delect_icon":function(index){//删除封面触发
    	$scope.img_icon.splice(index,1);
    },"pre_p":function(id){//获取城市  
    	   $scope.caty_a=[];
    	$(".act_input_a_cty").focus()
    	/*获取城市*/
        activity_data.cityByProvince(id).then(
            function success(data) { 		
        		$(data).map(function(){
        			var prov={}
        			prov.id=this.id;//获取省份ID
        			prov.city_name=this.city_name;//获取省份的名字
        			$scope.caty_a.push(prov)
        		})
        		
    		}, function error() {
    			console.log("获取城市失败")
    	});
    },"up_icon_a":function(){//活动封面图片上传
    	  if($scope.id>0&&$scope.status==0){
    		  return
    	  }
    	   if($(".case_poiuy_i .case_icon").length>3){
    		   $scope.mml.err_pup("活动封面最多上次4张!");
               return;
           }
    	    var id_p=Math.floor(Math.random()*1000+1)
    	    $(".case_poiuy_i").append(' <p class="pr fl case_icon">  <img src="/img/img_icon.gif?v='+id_p+'" class="case_poiu_a" id="'+id_p+'">    <img src="/img/close.png" class="icon_close_a"  data-dismiss="alert">   </p>')
    		$("#iconFile").click();
    		updata_icon("/activity/upload_activity_cover",function(url){
    			$("#"+id_p).attr("src",url)
    	           
    		})
    },"submit_data":function(support_status, $window){//发布活动

    	  var usr_oc="";//图片地址
    	  var stat_time_a=$("#stat_time_a").val();//开始时间的您月日
          var stat_time_b=$("#stat_time_b").val();//开始时间的您时分
    	  var end_time_a=$("#end_time_a").val();//结束时间的您月日
    	  var end_time_b=$("#end_time_b").val();//结束时间的您时分
    	  var startDate=stat_time_a+" "+stat_time_b;//开始时间
    	  var endDate=end_time_a+" "+end_time_b;//开始时间
    	  var provinces_p=$("#provinces_p").val();//获取省份
    	  var city_p=$("#city_p").val();//获取城市
    	  var m_industry=$("#m_industry").val();//行业
    	  var m_sponsor_instroducton=$("#sponsor_instroducton").val();//赞助简介
    	  var m_targer_amount=$("#target_amount").val();//目标金额
    	  var m_myEditor=$("#myEditor").html().trim();//赞助详情
    	  var m_target_repay_amount=$('#target_repay_amount').val()//赞助回报金额
    	  var form_yz=false; 
    	  $scope.activities_data.activity={};
    	  $scope.activities_data.activity.name=$("#name_event").val();//活动名称    11
    	  $scope.activities_data.activity.start_date= new Date(startDate).getTime();//活动时间开始的时间戳3
    	  $scope.activities_data.activity.end_date= new Date(endDate).getTime();//活动时间开始的时间戳4
    	  $scope.activities_data.activity.city=$("#city_p").attr("data-id");//城市id5
    	  $scope.activities_data.activity.address=$("#detailed_address").val();//获取详细地址6
    	  $scope.activities_data.activity.industry_id= $("#m_industry").attr("data-id");//行业id8
     	  $scope.activities_data.activity.contact_way=$("#contact_information").val();//联系方式9
     	  $scope.activities_data.activity.details=$("#myEditor").html();//富文本编辑器10   	  
     	  $scope.activities_data.activity.person_limit=$("#number_online").val();//人数上线11
     	  $scope.activities_data.ticket_array=$scope.ticket_array//票卷
     	  
     	  
     	  	var support_start_date=new Date($('#stat_time_a').val()+'/'+$('#stat_time_b').val()).getTime();//赞助开始的时间戳
     	  	var support_end_date=new Date($('#end_time_a').val()+'/'+$('#end_time_b').val()).getTime();//赞助开始的时间戳
     	  	var support_industry=$('#m_industry').attr("data-id");//赞助状态
     	  	var support_title=$('#name_event').val();//赞助标题
     	  	var support_img="";
     	  	var support_instroducton=$('#sponsor_instroducton').val()//赞助简介
     	  	var support_contact=$('#contact_information').val();//赞助联系电话
     	  	var support_amout=$('#target_amount').val();//赞助目标金额
     	  	var support_content=$('#myEditor').html().trim()//赞助内容
     	  	var support_repay_arr=[];
     	  	
              $('.case_poiuy_i .case_poiu_a').map(function(){
              	support_img=support_img+$(this).attr('src')+'*';
              })
              var str_support_img=support_img.substring(0,support_img.length-1);
     	  $('.sponsor-repay-div').map(function(){
     	  	var support_repay_amount=parseFloat($(this).find('.support-amount-div').text());//赞助回报金额
     	  	var support_repay_title=$(this).find('.repay_title').text();//赞助标题
     	  	var support_repay_content=$(this).find('.repay_content').text();//赞助内容
          var limit = $(this).find('.person_limit').text();
          var support_repay_limit= (limit == '不限制') ? 0 : parseFloat(limit);//赞助人数限制
          var support_repay_time=$(this).find('.repay_time').text(); //赞助回报时间
     	  	// var support_repay_time=new Date($(this).find('.repay_time').text()).getTime();//赞助回报时间戳
     	  	var b={
            "support_amount": support_repay_amount,
            "repay_title": support_repay_title,
            "repay_content": support_repay_content,
            "form_details_array": [
                {
                    "name": "姓名",
                    "necessary": "y",
                    "designation": "name"
                },
                {
                    "name": "手机号码",
                    "necessary": "y",
                    "designation": "tel"
                }
            ],
            "person_limit": support_repay_limit,
            "repay_time": support_repay_time
             }
     	  	support_repay_arr.push(b)
     	  })
     	 
    	  if(!form_mm.isnull(  $scope.activities_data.activity.name)){
    		  $scope.mml.err_pup("项目名称不能为空");
    	          $("#name_event").focus();
    	           return;
    	   }
    	  if(str_support_img==""){
    		  $scope.mml.err_pup("请上传图片");
 	           $scope.select_click.up_icon_a()
 	        
 	           return;
 	     }
    	  if(!form_mm.isnull(m_sponsor_instroducton)){
    		  $scope.mml.err_pup("项目简介不能为空");
    	          $("#sponsor_instroducton").focus();
    	           return;
    	   }

    	  if(!form_mm.isnull(stat_time_a)){
    		  $scope.mml.err_pup("请选择活动开始时间");
 	          $("#stat_time_a").focus();
 	          return;
 	       }
    	 
    	if(!form_mm.isnull(stat_time_b)){
    		  $scope.mml.err_pup("请选择活动开始时间");
 	          $("#stat_time_b").focus();
 	          return;
 	   }
    	if(!form_mm.isnull(end_time_a)){
    		  $scope.mml.err_pup("请选择活动结束时间");
	          $("#end_time_a").focus();
	          return;
	   }
    	if(!form_mm.isnull(end_time_b)){
    		  $scope.mml.err_pup("请选择活动结束时间");
	          $("#end_time_b").focus();
	          return;
	   }  
    	 
  	  var stat_date= new Date(support_start_date).getTime()
  	  var end_date= new Date(support_end_date).getTime()
  	  if(end_date<=stat_date){
  		  $scope.mml.err_pup("活动结束时间不能小余活动开始时间");
        $("#end_time_b").focus();
        return; 
  	  }
  	  
    	
    	
    	if(!form_mm.isnull($scope.activities_data.activity.contact_way)){
    		 $scope.mml.err_pup("请输入联系电话");
	          $("#contact_information").focus();
	            
	          return;	       	        
	   }
    	
    	
    	if(!form_mm.isnull($scope.activities_data.activity.details)){
    		 $scope.mml.err_pup("请输入项目详情");
	          $("#myEditor").focus();
	          return;
	   }
    	if(!form_mm.isnull(m_targer_amount)){
    		 $scope.mml.err_pup("请输入目标金额");
	          $("#target_amount").focus();
	          return;
	   }
    	if(!form_mm.isnull(m_myEditor)){
    		 $scope.mml.err_pup("请输入项目详情");
	          $("#myEditor").focus();
	          return;
	   }
    	
    	if(!form_mm.isnull(m_target_repay_amount)){
    		 $scope.mml.err_pup("请填写赞助回报");
	          $("#target_repay_amount").focus();
	          return;
	   }
    	
 	
        $scope.support_data={
        "start_time": support_start_date,
        "end_time": support_end_date,
        "activitySupport": {
            "status": support_status,
            "name": support_title,
            "cover": str_support_img,
            "introduction": support_instroducton,
            "industry_id": support_industry,
            "telephone": support_contact,
            "target_amount": support_amout,
            "content_details": support_content
        },
        "supportRepay": support_repay_arr
}
      
      var id_p;
    	 /* console.log(JSON.stringify($scope.activities_data))*/
   	  activity_data.create_support($scope.support_data).then(
				function success(data) {
					 if(data.code!=0){
        				alert(data.msg)
        				return;
        			 }
					var rand_a= Math.floor(Math.random()*100000)
					 if(rand_a<10000){
					        rand_a+=10000
					 }
          if(data.code == 0) {
            id_p=rand_a+data.info+rand_a;
            $('#reviewModal').modal({
                backdrop: 'static',
                keyboard: false
            });
          }
				}, function error() {
					console.log("发起活动失败")
		});


    // 发起赞助弹窗预览项目按钮
    $('.j-reviewSponsor').click(function() {
      window.location.href='/support/'+id_p+'.httl';
    });




    },"repay_form":function(type){
      var title;
      if($('.j-repayOption').find('span.on').text() == '其他（限10个字）') {
        title == '';
      } else {
        title = $('.j-repayOption span.on').text();
      }
    	var a_target_repay_amount=$("#target_repay_amount").val();//赞助金额
    	var a_target_repay_title= title;//赞助标题
    	var a_target_repay_content=$("#target_repay_content").val();//赞助内容
    	var a_target_repay_limit=$("#target_repay_limit").val();//赞助人数限制
    	if(a_target_repay_limit==""){a_target_repay_limit='不限制'};
    	var a_target_repay_time=$("#repayTime").val();//赞助回报时间
    	var a_target_repay_time_chuo=Date.parse(a_target_repay_time)//赞助回报时间戳


    	if(!form_mm.isnull(a_target_repay_amount)){
    		 $scope.mml.err_pup("请输入赞助金额");
	          $("#target_repay_amount").focus();
	          return;
	    }
         if(!form_mm.isnull(a_target_repay_title)){
    		 $scope.mml.err_pup("请输入回报方式");
	          $("#target_repay_title").focus();
	          return;
	    }
         if(!form_mm.isnull(a_target_repay_content)){
    		 $scope.mml.err_pup("请输入回报详情");
	          $("#target_repay_content").focus();
	          return;
	    }
         if(!form_mm.isnull(a_target_repay_time)){
    		 $scope.mml.err_pup("请输入兑现时间");
	          $("#repayTime").focus();
	          return;
	    }
      if(a_target_repay_time.length > 20){
         $scope.mml.err_pup("赞助时间长度最大为20");
         $("#repayTime").focus();
         return;
      }
         $('.close').click()
    	var str='<div class="sponsor-repay-div j-sponsorRepay">'+
'	                     	<p>'+
'                    		<b>赞助</b><span class="bj_icon_a"><a class="support-amount-div hs j-amount">' +a_target_repay_amount+'</a>元</span><span class="sponsor-repay-edit-div"><i class="f_i bj_poi_p mr10 j-sponsorEditBtn" title="修改 "></i>|<i class="f_i delect_icon pr j-sponsorDelBtn" alt="删除" title="删除"></i></span>'+
'	                     	</p>'+
'	                     	<p class="repay_title j-title">'+a_target_repay_title+'</p>'+
'	                     	<p class="repay_content fz14 j-content">'+a_target_repay_content+'</p>'+
'	                     	<p class="fz14">人数限制：<span class="person_limit j-limit">'+a_target_repay_limit+'</span>人<span style="margin-left:100px;">回报截止时间：<a class="repay_time j-time">'+a_target_repay_time+'</a></span></p>'+
'	                     </div>';
      
      // 编辑和添加
      if(type == 'add') {
        $('.form-input-repay').children().eq(-1).before(str)
      } else if(type == 'edit') {
        // console.log(editRepayIndex);
        var wrap = $('.j-sponsorRepay').eq(editRepayIndex);
        wrap.find('.j-amount').text($('#target_repay_amount').val());
        wrap.find('.j-title').text($('.j-repayOption').find('span.on').text());
        wrap.find('.j-content').text($('#target_repay_content').val());
        var limit = $('#target_repay_limit').val();
        limit = (limit == '') ? '不限制': limit;
        wrap.find('.j-limit').text(limit);
        wrap.find('.j-time').text($('#repayTime').val());
      }
    	
    	
    },"hc_sess_a":function(){
    	/*	缓存
		页面离开执行 缓存赋值*/
    
		window.onunload = function(){
			   var  activities_data={}
			   sessionStorage.p=true;
			   activities_data.title=$("#name_event").val();//活动名称
			   activities_data.stat_time_a=$("#stat_time_a").val();//开始时间的您月日
			   activities_data.stat_time_b=$("#stat_time_b").val();//开始时间的您时分
			   activities_data.end_time_a=$("#end_time_a").val();//结束时间的您月日
			   activities_data.end_time_b=$("#end_time_b").val();//结束时间的您时分
			   activities_data.city=$("#city_p").attr("data-id");//城市id
			   activities_data.provinces_p=$("#provinces_p").val();//省份
			   
			      activities_data.cover_url=[]
				  $(".case_poiuy_i .case_poiu_a").map(function(){
					  activities_data.cover_url.push($(this).attr("src"))
		    	  })
			   activities_data.city_p=$("#city_p").val();//城市
			   activities_data.address=$("#detailed_address").val();//获取详细地址
			   activities_data.industry_id= $("#m_industry").attr("data-id");//行业id
			   activities_data.industry_text= $("#m_industry").val();//行业
			   activities_data.contact_way=$("#contact_information").val();//联系方式
			   activities_data.details=$("#myEditor").html();//富文本编辑器
			   activities_data.person_limit=$("#number_online").val();//人数上线
			   activities_data.ticket_array=$scope.ticket_array//票卷
			   activities_data.form_config=$scope.row_po_form;//表单
			   activities_data.honored_guest=$scope.guest_data;//嘉宾
			   sessionStorage.a_name=JSON.stringify(activities_data);
			   
		}
		if(sessionStorage.p){  
			
			
			$scope.img_icon
			var km={}
			
             if($scope.id>0){
            	   activity_data.activity_detail($scope.id).then(
            				function success(data) {
            					 if(data.code!=0){
            						 alert(data.msg)
            						 return
            					 }
            				
            				
            					 
            					 km=new activity_detail(data.info)
            					 $scope.status=km.status
             					  if($scope.status==0){
             							 $("input,a").attr("disabled","disabled")
                     					 $(".site_poy_a .map_poiu_a").removeAttr("disabled")
                     					 $("a").removeAttr("href")
             					  }
            					 $("#name_event").val(km.title);//活动名称
            					 $scope.img_icon=km.images_po;
            					 var stdate=new Date(km.sDate_time);//开始时间
            					 var end_date=new Date(km.eDate);//结束时间
            					 $("#stat_time_a").val(stdate.getFullYear()+"/"+(stdate.getMonth()+1)+"/"+stdate.getDate())
            					 $("#stat_time_b").val(stdate.getHours()+":"+stdate.getMinutes());//开始时间的您时分 
            					 $("#end_time_a").val(end_date.getFullYear()+"/"+(end_date.getMonth()+1)+"/"+end_date.getDate());//结束时间的您月日
                       		     $("#end_time_b").val(end_date.getHours()+":"+end_date.getMinutes());//结束时间的您时分
                       		     $("#detailed_address").val(km.address);//获取详细地址
                       		     $("#city_p").attr("data-id",km.city);//城市id
                       		     $("#provinces_p").val(km.province_name);//省份
                       		     $("#city_p").val(km.city_name);//城市 
                       		     $("#m_industry").attr("data-id",km.industry_id);//活动类型id
                       		     $("#m_industry").val($scope.classify[1].maker_title[(km.industry_id-1)].name);
                       		     $("#myEditor").html(km.details);
                       		     $("#contact_information").val(km.contact_way);
                       		     $("#number_online").val(km.consumption_count==0?"":km.consumption_count);
                       		     $scope.ticket_array=km.ticket_list==null?[]:km.ticket_list;//票卷
                       		     $scope.row_po_form= km.detail_config==null?[]:km.detail_config;//表单
                       		     $scope.guest_data= km.honored_guest==null?[]:km.honored_guest;//嘉宾 
                       		     $($scope.row_po_form).map(function(x){
                       		    
                    			   if(this.name==""){
                    				   $scope.row_po_form.splice(x,1)
                    			   }
                    		     })
                    		  
                       		    console.log( $scope.row_po_form)
            				}, function error() {
            					console.log("获取活动详情失败")
            				});
             }else{
            		 km=$.parseJSON(sessionStorage.a_name);
            		  $scope.img_icon=km.cover_url
            		  $("#name_event").val(km.title);//活动名称
            		  $("#stat_time_a").val(km.stat_time_a);//开始时间的您月日
            		  $("#stat_time_b").val(km.stat_time_b);//开始时间的您时分
            		  $("#end_time_a").val(km.end_time_a);//结束时间的您月日
            		  $("#end_time_b").val(km.end_time_b);//结束时间的您时分
            	   	  $("#city_p").attr("data-id",km.city);//城市id
            		  $("#detailed_address").val(km.address);//获取详细地址
            		  $("#provinces_p").val(km.provinces_p);//省份
            		  $("#city_p").val(km.city_p);//城市
            		  $("#m_industry").attr("data-id", km.industry_id);//行业id
            		  $("#m_industry").val(km.industry_text);
            		  $("#contact_information").val(km.contact_way);//联系方式
            		  $("#myEditor").html( km.details);//富文本编辑器
            		  $("#number_online").val( km.person_limit==0?"":km.person_limit);//人数上线
            		  $scope.ticket_array=km.ticket_array//票卷
            		  $scope.row_po_form= km.form_config;//表单
            		  $scope.guest_data= km.honored_guest;//嘉宾
            		  $($scope.row_po_form).map(function(x){
            			  if(this.name==""){
            				  $scope.row_po_form.splice(x,1)
            			  }
            		  })
            		    console.log($scope.row_po_form)
             }
		
	
			 
		}
		 
	
    },"inputval":function(km){//初始化输入框的值
    	 
    }
    
    
    
    
    
    }
	/*获取省份*/
    activity_data.provinceAll().then(
        function success(data) { 		
    		$(data).map(function(){
    			var prov={}
    			prov.id=this.id;//获取省份ID
    			prov.province_name=this.province_name;//获取省份的名字
    			$scope.province.push(prov)
    		})
    		
		}, function error() {
			console.log("获取省份失败")
	});
	
}])

       $(function(){
           var um = UM.getEditor('myEditor');
             var url_icon_src;//获取弹出框的图片路径
          /*  $(".case_icon").on("click",function(){
                  url_icon_src=$(this).find(".case_poiu_a").attr("src")
                  $(".gx_icon_a").hide()
                  $(this).find(".gx_icon_a").show()
            })*/
            /*图片弹出层确认按钮触发事件*/
            $(".sub_poiy_a_icon").on("click",function(){
             /*   if(url_icon_src==""){
                	 $scope.mml.err_pup("请选择一张封面图");
                    return;
                }
               if($(".case_poiuy_i .case_icon").length>3){
            	  alert("活动封面最多上次4张!");
            	  $('#upde_p_icon_pup').modal('toggle')
                   return;
               }
                  $('#upde_p_icon_pup').modal('toggle')*/
                  
                 /* $(".case_poiuy_i").append(' <p class="pr fl case_icon">  <img src="'+url_icon_src+'?v='+new Date().getTime()+'" class="case_poiu_a">    <img src="/img/close.png" class="icon_close_a" data-dismiss="alert">   </p>')
           */
       /*          $scope.img_icon.push(url_icon_src+'?v='+new Date().getTime())*/
            })
            
       
            $('#stat_time_a').datetimepicker({
	            format:'Y/m/d',
	           timepicker:false
            })
            
           $('#stat_time_b').datetimepicker({
	         datepicker:false,
	         format:'H:i',
	         step:5
          });
            
     
            $('#end_time_a').datetimepicker({
	            format:'Y/m/d',
	           timepicker:false
            })
            
           $('#end_time_b').datetimepicker({
	         datepicker:false,
	         format:'H:i',
	         step:30
          });
            

            /*添加表单按钮触发事件*/
        /*    $(".add_form_p_fpr").on("click",function(){
                   $(this).parent().before('<p class="row_po_form row_po_form_zdy"><i class="f_i  radio_p_xz gx_xzm" data-xz="0"></i><span class="mr10">必填</span>  |  &nbsp;<input type="text" class="act_input_a ml10 ipuf"> <input type="text" class="act_input_a ipue ml10 ipug" placeholder="提示信息写在这里"> <i class="f_i delect_icon" data-dismiss="alert"></i></p>')
          
            })*/
            
            
            $("body").on("click",".radio_p_xz",function(){
                $(this).toggleClass("fa-square-o fa-check-square");
                if($(this).hasClass("fa-check-square")){
                	$(this).attr("data-xz",0)
                }else{
                	$(this).attr("data-xz",1)
                }  
                
            })
            
            
           
            $(".map_poiu_a").on("keyup",function(){
            	 var pty=$(".act_input_a_pty").val();//获取省份;
                 var cty_q=$(".act_input_a_cty").val();//获取城市
                 var address_o=pty+cty_q+$(this).val()
                 map_p(address_o)
            })
          
     
            
             $(".poiuy_poiu_q input").on("focus",function(){
               $(this).parents("li").css({"z-index":"101"})
            	$(this).parent().find(".xl_oiu").show()
             })
             $(".poiuy_poiu_q input").on("blur",function(){
            	 var kl=$(this)
            	  setTimeout(function(){
            		    $(kl).parent().find(".xl_oiu").hide()
            		    $(kl).parents("li").css({"z-index":"1"})
            	  },300)
            		
             })
                /*输入框只能输入数字*/
    $("body").on("keyup",".num",function(){
        $(this).val($(this).val().replace(/[^\d]/g,''))
    })
            $("body").on("click",".poiuy_poiu_q .xl_oiu li",function(){
            	 $(this).parents(".poiuy_poiu_q").find(".act_input_a ").val($(this).text())
            	  $(this).parents(".poiuy_poiu_q").find(".act_input_a ").attr("data-id",$(this).attr("data-id"))
            })
            
        })
        
         // 百度地图API功能
      /**
       *
       * @param x ==位置    如白石洲
       */
      function map_p(x){
          var map = new BMap.Map("BaiDuMap");            // 创建Map实例
          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
          var local = new BMap.LocalSearch(map, {
              renderOptions: {map: map, panel: "haha"}
          });
          local.search(x);
      }