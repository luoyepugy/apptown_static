/**
 * 发起活动
 */
angular.module('activity_sponsor', ["directive_mml","activity_servrt","common","form","request"])
.controller('activity_sponsor_centerController', function($scope,activity_data, httpService, messageService) {
    $scope.province=[];//省份
    $scope.id=$("#act_id").val().trim();//获取活动ID
    $scope.id==""?$scope.id=0: $("#act_id").val();
    $scope.user_id=$("#user_id").val();//用户的id    
    $scope.caty_a=[];//城市 
    $scope.status=0;//发布状态
    $scope.guest_data=[];//嘉宾
    $scope.ticket_array=[];//票卷 
    $scope.img_icon=[];//活动封面
    $scope.img_src="";//弹出层选中的地址
    $scope.activities_data={};//活动详细数据
    $scope.sp_id=-1;
    $scope.pj_id=-1;
    $scope.reward = {'remark': '活动不易，打赏一下组织者吧！'};
    $scope.labelArr=[];//活动标签数据
    $scope.republish = $('#republish').val();

    var submitNumber = 0;
    activity_data.getDatas('GET', '/sponsor/get_sponsorapply')//如果是认证主办方，自动填充主办方和联系方式表单
    .then(function(data) {
    	if(data.code==0&&data.info.status==1){
    		$("#contact_information").val(data.info.contacter_phone)
    		$("#main_host").val(data.info.name)
    	}
        // 认证活动号提示是否显示
        if(data.code == 0 && data.info) {
            if(data.info.status == 1 || data.info.status == 3) {
                $scope.showHostTip = false;
            } else {
                $scope.showHostTip = true;
            }
        }
    });
     activity_data.getDatas('GET', '/label/group')//获取活动标签
    .then(function(data) {
    	$scope.ty_list_a=data;
    });
    $scope.upLoadImg=function(){//上传图片
    $("#iconFile").click();
    updata_icon("/activity/upload_activity_cover",function(url){
       $("#upLoadImg").attr("src",url)
    })
  }
     $scope.closeLoan=function(tar){//关闭白条功能
    $(tar).parent().css("display","none")
  }
    $scope.normalAnswer=function(){//常见问题显示
    $(".loan_tip ").css("display","block")
  }
     $scope.checkLoanForm=function(){ //白条立刻申请检查表单
      var periods=parseInt($("#pay_money_time").find("option:selected").text());
      var loan_name=$(".loan_name").val().trim(); //姓名
      var loan_tel=$(".loan_tel").val().trim();//手机号码
      var loan_money=parseFloat($(".loan_money").val().trim());//申请金额
      var loan_remark=$(".loan_remark").val().trim();//备注
      var user_id=$("#user_id").val();//用户ID
      var user_sex=$("#sex_1").is(":checked")?1:2;
      $scope.loan_data={
         "user_id":user_id,
        "name":loan_name,
        "sex":user_sex,
        "phone":loan_tel,
        "apply_money":loan_money,
        "user_remark":loan_remark,
        "contact_status":1,
        "periods":periods
      }
      if(!form_mm.isnull(loan_name)){
           $scope.mml.err_pup("申请白条填写姓名不能为空");
          $(".loan_name").focus();
          return;
        }
      if(!form_mm.tel(loan_tel)){
           $scope.mml.err_pup("申请白条填写手机号码格式错误");
          $(".loan_tel").focus();
          return;
        }
      if(!form_mm.isnumber(loan_money)){
           $scope.mml.err_pup("申请白条填写金额格式错误");
          $(".loan_money").focus();
          return;
       }
      activity_data.loan_money($scope.loan_data).then(
        function success(data) {          
          if(data.code!=0){
             $scope.mml.err_pup(data.msg)
            return
          }   
          $(".loan_uncheck ").css("display","none")
            $(".loan_check_success ").css("display","block")
            $(".submiu_now").text("待审核").css("background","#575757")
        }, function error() {
          console.log("白条提交失败")
    });
      
     }
/*     $scope.vedioCorrect=function(){
      var dod='<div class="clearfix video_wrap">'+
'           <div class="vedio_right pull-left ">'+
'             <div class="vedio_e">'+
'               '+
'             </div>  '+
'             '+
'           </div>'+
'           <div class="pull-left">'+
'               <a data-target="#video_online" data-toggle="modal">编辑</a>'+
'               <br>'+
'               <a class="remove_video">删除</a>'+
'           </div>'+
'         </div>';
$(".vedio_online").append(dod)
      $(".add_video").css("display","none")
      $().append("")
      var str=$(".video_text").val()
      $(".vedio_right ").attr("data-src",str)
      $(".vedio_e").append(str)
      
     }*/



$(document).on("click",".remove_video",function(){
  $(".video_wrap").remove()
  $(".add_video").css("display","block")
})
    $("body").on("click",".case_icon",function(){
       $scope.img_src=$(this).find(".case_poiu_a").attr("src")
        $(".gx_icon_a").hide()
        $(this).find(".gx_icon_a").show()
  })  

    var tyt_poiu=false,lj_it=false;

    $scope.select_click={
        "default_cover":[
                          {"id":"1","name":"创客活动","img":"http://resource.apptown.cn/poster/3-3.jpg"},
                          {"id":"2","name":"活动赞助","img":"http://resource.apptown.cn/poster/1-1.jpg"},
                          {"id":"3","name":"户外交友","img":"http://resource.apptown.cn/poster/2-2.jpg"},
                          {"id":"4","name":"活动赞助","img":"http://resource.apptown.cn/poster/4-4.jpg"},
                          {"id":"5","name":"创客活动","img":"http://resource.apptown.cn/poster/5-5.jpg"},
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
         if($(".case_poiuy_i .case_icon").length>3){
           $scope.mml.err_pup("活动封面最多上次4张!");
               return;
           }
        $("#iconFile").click();
      
        updata_icon("/activity/upload_activity_cover",function(url){
           $(".case_poiuy_i").append(' <p class="pr fl case_icon">  <img src="'+url+'" class="case_poiu_a">    <img src="/img/close.png" class="icon_close_a"  data-dismiss="alert">   </p>')
        })
    },"jia_p_add_icon":function(){//嘉宾图片上传
      /*$(".jia_p_add_icon").attr("src","/img/img_icon.gif"); */
      $("#iconFile").click();
      
    updata_icon("/activity/upload_activity_cover",function(url){
      $(".jia_p_add_icon").attr("src",url)
             
    })
    },"honored_guest":function(idex){//嘉宾弹出层  
      var guert_p={}
      var honored_guest_name_b=$("#honored_guest_name").val().trim();//弹出框的嘉宾姓名
      var honored_guest_position_b=$("#guest_profile").val().trim();//弹出框的嘉的简介
      var honored_guest_icon_b=$(".jia_p_add_icon").attr("src");//获取嘉宾的头像
      if(idex>=0){
        $scope.guest_data[idex].honored_guest_name_b=honored_guest_name_b;
        $scope.guest_data[idex].honored_guest_position_b=honored_guest_position_b;
        $scope.guest_data[idex].honored_guest_icon_b=honored_guest_icon_b;
        $('#honored_guest').modal('toggle');
        $scope.sp_id=-1
        return;
      }
        if(!form_mm.isnull(honored_guest_name_b)){
           $scope.mml.err_pup("嘉宾姓名不能为空");
          $("#honored_guest_name").focus();
          return;
        }
        if(!form_mm.isnull(honored_guest_position_b)){
           $scope.mml.err_pup("嘉宾简介不能为空");
          $("#guest_profile").focus();
          return;
        }
        if(honored_guest_icon_b=="/img/Video_loading.jpg"){
           $scope.mml.err_pup("请上传嘉宾的头像");
          return;
        }
        guert_p.honored_guest_name_b=honored_guest_name_b;
        guert_p.honored_guest_position_b=honored_guest_position_b;
        guert_p.honored_guest_icon_b=honored_guest_icon_b;
      $scope.guest_data.push(guert_p);
      $('#honored_guest').modal('toggle');
      $scope.sp_id=-1
    },"honored_guest_delect":function(index){//删除嘉宾
       $scope.guest_data.splice(index-1,1);
 
       
    },"honored_guest_modify":function(index){//活动修改
      var da_data=$scope.guest_data[index];
      $("#honored_guest_name").val(da_data.honored_guest_name_b);//弹出框的嘉宾姓名
      $("#guest_profile").val(da_data.honored_guest_position_b);//弹出框的嘉的简介
      $(".jia_p_add_icon").attr("src",da_data.honored_guest_icon_b);//获取嘉宾的头像
      $scope.sp_id=index
        $('#honored_guest').modal('toggle');
    },"ticket_array":function(index){//票卷
      $scope.pj_id=index;
      var tic={};
      var name=$("#kind_name").val().trim()//票种名称
      var price=$("#ticket_amount").val().trim()//票的价格
      var sum_num=$("#ticket_number").val().trim()//票种总张数
      var remark=$("#that_ticket_types").val().trim()//票种说明
      if($scope.pj_id>=0){
        
         $scope.ticket_array[index].name=name;
         $scope.ticket_array[index].price=price;
         $scope.ticket_array[index].sum_num=sum_num;
         $scope.ticket_array[index].remark=remark;
           $("#ticket_set").modal('toggle')
           $scope.pj_id=-1
         return
       }
       if(!form_mm.isnull(name)){
         $scope.mml.err_pup("票种名称不能为空");
            $("#kind_name").focus();
          return;
         }
       if(!form_mm.isnull(price)){
         $scope.mml.err_pup("票种价格不能为空");
            $("#ticket_amount").focus();
            return;
          }
       if(!form_mm.isnull(sum_num)){
         $scope.mml.err_pup("票种张数不能为空");
            $("#ticket_number").focus();
            return;
          }
       if(!form_mm.isnull(remark)){
         $scope.mml.err_pup("票种说明不能为空");
            $("#that_ticket_types").focus();
            return;
          }
       tic.name=name;
       tic.price=price;
       tic.sum_num=sum_num;
       tic.remark=remark;
       $("#ticket_set").modal('toggle')
       $scope.ticket_array.push(tic); 
       $scope.pj_id=-1;
    },"volume_change":function(index){//票卷修改
      $scope.pj_id=index;
      var da_data=$scope.ticket_array[index];
      $("#kind_name").val(da_data.name);
      $("#ticket_amount").val(da_data.price);
      $("#ticket_number").val(da_data.sum_num);
      $("#that_ticket_types").val(da_data.remark);
      $('#ticket_set').modal('toggle');
    },"delec_volume":function(idx){
       var idx_a=idx-1
      $scope.ticket_array.splice(idx_a,1);
    },"add_label":function(sai,uuu){//添加标签    	
    	for(var i=0;i<$scope.labelArr.length;i++){
    		if(sai.id==$scope.labelArr[i].id){
    			return
    		}
    	}
    	if($scope.labelArr.length<5){
    		 $scope.labelArr.push(sai)
    	}else{
    		 $scope.mml.err_pup("活动标签最多只能选择5个");
    	}
             
    },"delete_label":function(id){
      $scope.labelArr.splice(id,1) 
    },"add_type_aa":function(ssss){
      $(".release_type").removeClass("active")
      $(".release_type").eq(ssss-1).addClass("active")
      $("#release_type_value").val(ssss)
      
    },"submit_data":function(status){//发布活动
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
        var activity_type=parseInt($("#release_type_value").val())//活动标签
        var activity_label="";
        if($scope.labelArr.length>0){
        	for(var i=0;i<$scope.labelArr.length;i++){
        	activity_label=activity_label+$scope.labelArr[i].id+","
        	}
         activity_label=activity_label.substring(0,activity_label.length-1);
        }
       
        
        var form_yz=false; 
        $scope.activities_data.activity={};
        $scope.activities_data.activity.name=$("#name_event").val().trim();//活动名称    11
        $scope.activities_data.activity.start_date= new Date(startDate).getTime();//活动时间开始的时间戳3
        $scope.activities_data.activity.end_date= new Date(endDate).getTime();//活动时间开始的时间戳4
        $scope.activities_data.activity.city=$("#city_p").attr("data-id");//城市id5
        $scope.activities_data.activity.address=$("#detailed_address").val().trim();//获取详细地址6
        $scope.activities_data.activity.type=activity_type;//活动类型id7
        $scope.activities_data.activity.label=activity_label;//活动标签
        $scope.activities_data.activity.industry_id= $("#m_industry").attr("data-id").trim();//行业id8
        $scope.activities_data.activity.contact_way=$("#contact_information").val().trim();//联系方式9
        $scope.activities_data.activity.details=$("#myEditor").html().trim();//富文本编辑器10       
        $scope.activities_data.activity.person_limit=$("#number_online").val().trim();//人数上线11
        $scope.activities_data.ticket_array=$scope.ticket_array//票卷
        $scope.activities_data.activity.support_id=$scope.sponsored_id;//赞助id
        $scope.activities_data.activity.sponsor=$("#main_host").val();//主办方单位
        if($("#upLoadImg").attr("src")=="/img/upload_code.png"){
        	$scope.activities_data.activity.sponsor_url="";
        }else{
        	$scope.activities_data.activity.sponsor_url=$("#upLoadImg").attr("src");//签到设置上传二维码
        }
        
        $scope.activities_data.activity.live_url=$(".video_text").val()//视频直播地址
        // $scope.activities_data.vote=$scope.voteSetting.datas;
        
        $scope.enrollSetting.select = [];
        $('.enrollSetting li.on').each(function() {
          $scope.enrollSetting.select.push($(this).data('enroll'));
        });


        /*
        * 张晗
        * 签到设置—广告设置
        * ad_urls_array(广告数组参数)
        */
        $scope.activities_data.activity.ad_urls_array = $scope.adSetting.ad_urls_array;
        // 活动打赏提示数据
        var rewardOpen = ($('.j-rewardOpen').attr('data-xz') == 0) ? true : false; 
        var tip_remark="";
        if(!($scope.reward==null||$scope.reward==""||$scope.reward.remark=="")){
        	tip_remark=$scope.reward.remark;
        }
        $scope.activities_data.activity.tip = JSON.stringify({open: rewardOpen, remark: tip_remark});
        
        // 私密活动
        $scope.privacy = ($('.j-privacy').attr('data-xz') == 0) ? 0 : null; 
        $scope.activities_data.activity.privacy = $scope.privacy;



        $scope.activities_data.form_config=$scope.enrollSetting.select;//表单
        $scope.activities_data.honored_guest=$scope.guest_data;//嘉宾
        $scope.activities_data.activity.status=status;//0：发布，1：保存  
        $(".case_poiuy_i .case_poiu_a").map(function(){
          usr_oc+=$(this).attr("src")+"*"
        })
        $scope.activities_data.activity.poster=usr_oc;
        if(!form_mm.isnull(  $scope.activities_data.activity.name)){
          $scope.mml.err_pup("活动名称不能为空");
                $("#name_event").focus();
                 return;
         }
        if($scope.activities_data.activity.poster==""){
          $scope.mml.err_pup("请上传图片");
          
              window.location.href="#the_editor";
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

     // 打赏提示语
     if(tip_remark.length > 20){
          $scope.mml.err_pup("打赏提示语不能超过20个字符");
            $('input[name="rewardRemark"]').focus();
            return;
     }  
     
       
      var stat_date= new Date(startDate).getTime()
      var end_date= new Date(endDate).getTime()
      if(end_date<=stat_date){
        $scope.mml.err_pup("活动结束时间不能小余活动开始时间");
        $("#end_time_b").focus();
        return; 
      }
      
      if(!form_mm.isnull(provinces_p)){
          $scope.mml.err_pup("请选择省份");
            $("#provinces_p").focus();
            return;
     } 
      if(!form_mm.isnull(city_p)){
          $scope.mml.err_pup("请选择城市");
            $("#provinces_p").focus();
            return;
     }
      
      if(!form_mm.isnull($scope.activities_data.activity.address)){
          $scope.mml.err_pup("请输入详情地址");
            $("#provinces_p").focus();
            return;
     }
       if(!form_mm.isnull(activity_type)){
          $scope.mml.err_pup("请选择活动类型");           
            return;
     }
        
      if(!form_mm.isnull($scope.activities_data.activity.sponsor)){
          $scope.mml.err_pup("请输入主办方单位");
            $("#main_host").focus();
            return;
     }
      
      if(!form_mm.isnull($("#myEditor").text().trim())){
         $scope.mml.err_pup("请输入活动详情");
            window.location.href="#myEditor"
            return;
     }
      if(!form_mm.isnull($scope.activities_data.activity.contact_way)){
       $scope.mml.err_pup("请输入手机号码");
            $("#contact_information").focus();
            return;
     }
      if(!form_mm.tel($scope.activities_data.activity.contact_way)){
          $scope.mml.err_pup("手机号码格式错误");
               $("#contact_information").focus();
               return;
        }
   
       if($("#fuy_poi_a").attr("data-xz")!=0){
         $scope.mml.err_pup("请勾选e场景平台服务协议！ ");
         return;
       } 

        var data_p = {};
       if(status==3||status==4||status==6){//修改的情况
           var sty=status==3?1:0;
           $scope.activities_data.activity.status=1
        
            if(status==3){//已发布的修改情况
              data_p={"activity":{"id":$scope.id,
              "status":0,
              "address":$("#detailed_address").val(),
              "details":$("#myEditor").html().trim(),
              "name":$("#name_event").val().trim(),
              "poster":usr_oc,
              "start_date":new Date(startDate).getTime(),
              "end_date":new Date(endDate).getTime(),
              "city":$("#city_p").attr("data-id"),
              "type":parseInt($("#release_type_value").val().trim()),
             "industry_id":$("#m_industry").attr("data-id").trim(),
              "contact_way":$("#contact_information").val().trim(),
              "person_limit":$("#number_online").val().trim(),
              "sponsor":$("#main_host").val(), 
              "sponsor_url":$("#upLoadImg").attr("src"),
              "live_url":$(".video_text").val(),
              "support_id":$scope.sponsored_id, 
              "ad_urls_array": $scope.adSetting.ad_urls_array,
              "tip": $scope.activities_data.activity.tip,
              "privacy": $scope.privacy,
              "label":activity_label
              },"honored_guest":$scope.guest_data
          } 
        }

           if(status==4){//未发布修改
            $scope.activities_data.activity.id=$scope.id;
            data_p=$scope.activities_data;
           }
           if(status==6){//未发布的情况下发布
        	   $scope.activities_data.activity.id=$scope.id;
        	   $scope.activities_data.activity.status=0;
               data_p=$scope.activities_data;
           }

       data_p=angular.fromJson(data_p);
        // 抽奖和投票数据提交
       if($scope.lotterySetting.datas.draw_detail_array.length == 0) {
            data_p.draw = null;
       } else {
            data_p.draw = $scope.lotterySetting.datas;
       }
       if($scope.voteSetting.datas.voteItemList.length == 0) {
            data_p.vote = null;
       } else {
            data_p.vote = $scope.voteSetting.datas;
       }
        
        // 发布活动提交次数限定
        if(submitNumber > 0) {
            return false;
        }
        activity_data.update_activity(data_p).then(
            function success(data) {
                if(data.code!=0){
                  alert(data.msg)
                  return;
                }
                var rand_a= Math.floor(Math.random()*100000)
                 if(rand_a<10000){
                        rand_a+=10000
                 }
                window.location.href='/activity/'+(rand_a+""+$scope.id+""+rand_a)+'.httl'
              
            }, function error() {
              console.log("活动发布失败")
            });

        submitNumber++;
        return
    }

    // 抽奖和投票数据提交
   if($scope.lotterySetting.datas.draw_detail_array.length == 0) {
        $scope.activities_data.draw = null;
   } else {
        $scope.activities_data.draw = $scope.lotterySetting.datas;
   }
   if($scope.voteSetting.datas.voteItemList.length == 0) {
        $scope.activities_data.vote = null;
   } else {
        $scope.activities_data.vote = $scope.voteSetting.datas;
   }
    
    // 发布活动提交次数限定
    if(submitNumber > 0) {
        return false;
    }
    activity_data.create_activity($scope.activities_data).then(
        function success(data) {
          if(data.code!=0){
             $scope.mml.err_pup(data.msg);
            return;
          }
          var rand_a= Math.floor(Math.random()*100000)
           if(rand_a<10000){
                  rand_a+=10000;
           } 

          if(status==0){
              window.location.href='/activity/release_success?actId='+data.msg+"&title="+$("#name_event").val()+"&details="+$("#myEditor").text().trim().substring(0,50)
              return;
          } 
          
          
          var id_p=rand_a+data.msg+rand_a
          sessionStorage.a_name="";//初始化缓存
          sessionStorage.removeItem("a_name");
          window.location.href='/activity/'+id_p+'.httl';
        }, function error() {
          console.log("发起活动失败")
    });
    submitNumber++;

    },"hc_sess_a":function(){
      /*  缓存
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
         activities_data.type_text=$("#release_type_value").val();//活动类型
         activities_data.label_arr=JSON.stringify($scope.labelArr);//活动标签
         activities_data.industry_id= $("#m_industry").attr("data-id");//行业id
         activities_data.industry_text= $("#m_industry").val();//行业
         activities_data.contact_way=$("#contact_information").val();//联系方式
         activities_data.details=$("#myEditor").html();//富文本编辑器
         activities_data.person_limit=$("#number_online").val();//人数上线
         activities_data.ticket_array=$scope.ticket_array//票卷
         activities_data.form_config=$scope.enrollSetting.select;//表单
         activities_data.honored_guest=$scope.guest_data;//嘉宾
         activities_data.main_host=$("#main_host").val();//主办方单位
         activities_data.live_url=$(".video_text").val();//视频直播地址

         activities_data.sponsor_url=$("#upLoadImg").attr("src");//二维码地址
         sessionStorage.a_name=JSON.stringify(activities_data);
         
    }
     if($scope.id>0){
           // activity_data.activity_detail($scope.id).then(
           var republish = ($scope.republish == 0) ? null : 1;
           httpService.getDatas('GET', '/activity/activity_detail', {activity_id: $scope.id , republish: republish}).then(function(data) {
              // function success(data) {
                 if(data.code!=0){
                   alert(data.msg)
                   return
                 }
                 tyt_poiu=true
                 console.log(data.info);
                 
                 km=new activity_detail(data.info);
                 
                  // 活动打赏数据
                  $scope.reward = data.info.tip==null?"":data.info.tip;
                  // 打赏功能开启和禁用
                  if(data.info.tip==null||!data.info.tip.open) {
                	  $('.j-rewardOpen').removeClass('gx_xzm').attr('data-xz', 1);
                  } else {
                	  $('.j-rewardOpen').addClass('gx_xzm').attr('data-xz', 0);
                  }
                  // 私密活动
                  if(data.info.privacy==0) {
                    $('.j-privacy').addClass('gx_xzm').attr('data-xz', 0);
                  } else {
                    $('.j-privacy').removeClass('gx_xzm').attr('data-xz', 1);
                  }


                // 投票数据
                $scope.voteSetting.datas = km.vote;
                // 截止时间处理
                if($scope.voteSetting.datas) {
                    var time = new Date($scope.voteSetting.datas.end_time);
                    if(!km.vote.end_time) {
                        $scope.voteSetting.datas.end_time2 = '';
                        $scope.voteSetting.datas.end_date = '';
                    } else {
                        $scope.voteSetting.datas.end_date = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate();
                        var end_minute = (time.getMinutes() <=9) ? ('0'+ time.getMinutes()) : time.getMinutes();
                        $scope.voteSetting.datas.end_time2 = time.getHours() + ':' + end_minute;
                    }
                }
                

                 $scope.status=km.status
                 if($scope.status==0){
                 // 修改和保存后编辑状态报名表单和票务设置不能够修改
                   $(".display_show").show()
                   $('.modify_disable_par').addClass('modify_disable_none')	
                   $(".modify_disable").attr("disabled","disabled").addClass("prohibit").removeAttr("data-toggle").css("background","#cbcbcb")
                      
                 }
                 $("#name_event").val(km.title);//活动名称
                 $scope.img_icon=km.images_po;
                 var stdate=new Date(km.sDate_time);//开始时间
                 var end_date=new Date(km.eDate);//结束时间
                 $("#stat_time_a").val(stdate.getFullYear()+"/"+(stdate.getMonth()+1)+"/"+stdate.getDate())
                 var a_min; //活动修改时分钟为个数的时候后面加一个0
                 if(stdate.getMinutes()<9){
                 	a_min="0"+stdate.getMinutes()
                 }else{
                 	a_min=stdate.getMinutes()
                 }
                 $("#stat_time_b").val(stdate.getHours()+":"+a_min);//开始时间的您时分 
                 $("#end_time_a").val(end_date.getFullYear()+"/"+(end_date.getMonth()+1)+"/"+end_date.getDate());//结束时间的您月日
                  var b_min; //活动修改时分钟为个数的时候后面加一个0
                 if(end_date.getMinutes()<9){
                 	b_min=end_date.getMinutes()+"0"
                 }else{
                 	b_min=end_date.getMinutes()
                 }
                     $("#end_time_b").val(end_date.getHours()+":"+b_min);//结束时间的您时分
                     $("#detailed_address").val(km.address);//获取详细地址
                     $("#city_p").attr("data-id",km.city);//城市id
                     $("#provinces_p").val(km.province_name);//省份
                     $("#city_p").val(km.city_name);//城市 
                     if(km.type==null){
                          km.type=1
                     }
                     $("#activity_type").attr("data-id",km.type);//活动类型id
                       $("#activity_type").val($scope.classify[0].maker_title[(km.type-1)].name);
                         $("#m_industry").attr("data-id",km.industry_id);//活动类型id
                          $("#release_type_value").val(km.type);//活动类型
                         setTimeout(function(){$(".release_type").eq(km.type-1).addClass("active")},100)
                       $scope.labelArr=km.label;//活动标签
                         $("#m_industry").val($scope.classify[1].maker_title[(km.industry_id-1)].name);
                         $("#myEditor").html(km.details);
                         $("#contact_information").val(km.contact_way);
                         $("#main_host").val(km.sponsor_name);
                          $(".video_text").val(km.live_url);
                          $("#upLoadImg").attr("src",km.sponsor_url);
                         $("#number_online").val(km.person_limit);
                         $scope.ticket_array=km.ticket_list==null?[]:km.ticket_list;//票卷
                         $scope.enrollSetting.select= km.detail_config==null?[]:km.detail_config;//表单
                         $scope.guest_data= km.honored_guest==null?[]:km.honored_guest;//嘉宾 
                         // $scope.select_click.date_pou[0]=km.vote
                        var pattern = /upload_code/; //二维码关注设置进来传值      
                    if(!pattern.test(km.sponsor_url)){ //二维码关注设置进来传值   
                      $(".atten_set input").removeAttr("checked");
                      $("#atten_set_on").click();
                      $(".upload_deminmnection").css("display","block")
                    }   

                    $scope.enrollSetting.init();

        });
       //        }, function error() {
       //          console.log("获取活动详情失败")
       //        });
       }
    if(sessionStorage.p){  
      $scope.img_icon
      var km={}
      
             if($scope.id>0){
                
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
                  $("#activity_type").attr("data-id",km.type);//活动类型id
                  $("#release_type_value").val(km.type_text);//活动类型
                  $scope.labelArr=JSON.parse(km.label_arr)//活动标签		
                  setTimeout(function(){$(".release_type").eq(km.type_text-1).addClass("active")},100)
                  $("#m_industry").attr("data-id", km.industry_id);//行业id
                  $("#m_industry").val(km.industry_text);
                  $("#contact_information").val(km.contact_way);//联系方式
                  $("#main_host").val(km.main_host);//主办方单位
                  $(".video_text").val(km.live_url);//视频直播地址
                  $("#upLoadImg").attr("src",km.sponsor_url);//主办方二维码
                  $("#myEditor").html( km.details);//富文本编辑器
                  $("#number_online").val(km.person_limit);//人数上线
                  $scope.ticket_array=km.ticket_array//票卷
                  $scope.guest_data= km.honored_guest;//嘉宾
                  
             }
    
  
       
    }
     
  
    },"inputval":function(km){//初始化输入框的值
       
    }
 
 
    
    
    
    }
  
    $scope.ct_check=function(x,target){
      if($(target).attr("data-xz")==1){
        $scope.sponsored_id=""
        
      }else{
        $scope.sponsored_id=x;  
      }
    }
    activity_data.query_person_my_sponsor(1,$scope.user_id,"","","","100").then(
        function success(data) {
            if(data.code!=0){
        alert(data.msg);
        return;
      }         
            $scope.mySp_list=[]
           
            for(var i=0;i<data.rows.length;i++){
               if(data.rows[i].status==7||data.rows[i].status==6){
            	   continue
               } 
              var spon=new personMySponsor(data.rows[i]);
              $scope.mySp_list.push(spon);
            }
    
            $scope.mySp_list.push({})
            $scope.sponsored_id=$scope.mySp_list.pop().id
      }, function error() {
        console.log("获取赞助设置失败")
    });
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

    /*
     * 张晗
     * 报名表单设置
     *
     */
    $scope.enrollSetting = {
      select: [],
      list: [
        {"name":"姓名","necessary":"y","designation":"name"},
        {"name":"手机号码","necessary":"y","designation":"tel"},
        {"name":"微信","necessary":"y",'sign':2},
        {"name":"QQ","necessary":"y",'sign':2},
        {"name":"公司","necessary":"y",'sign':2},
        {"name":"职位","necessary":"y",'sign':2},
        {"name":"邮箱","necessary":"y",'sign':2},
        {"name":"地址","necessary":"y",'sign':2}
      ],
      init: function() {
        $.each($scope.enrollSetting.select, function(i,v) {
          switch(v.sign) {
            case 3: $scope.enrollSetting.list.push(v); break;
            default: $('.enrollSetting li').each(function() {
              if(v.name == $(this).find('span').text()) {
                $(this).addClass('on');
              }
            });
          }
        });
      },
      add: function() {
        if($scope.id>0&&$scope.status==0){
          return
        }
        $('.j-addEnroll').removeClass('none');
      },
      delete: function(index) {
        this.list.splice(index, 1);
      },
      confirm: function() {
        var val = $.trim($('.j-addEnroll').find('input').val());
        if(val) {
          this.list.push({"name": val,"necessary":"y",'sign':3});
          $('.j-addEnroll').addClass('none');
        } else {
          $scope.mml.err_pup("表单信息内容不能为空");
        }
      }
    };
    // 选择表单选项
    $('body').on('click', '.j-selectEnroll', function() {
      $(this).toggleClass('on');
    });
    

    




    /*
     * 张晗
     * 投票设置
     *
     */
    $scope.voteSetting = {
        defaultOption: {"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"},
        addOption: function() {
            this.datas.voteItemList.push(this.defaultOption);
        },
        init: function() {
            this.datas = {'type': '1','voteItemList': []};
        },
        deleteOption: function(i) {
            this.datas.voteItemList.splice(i, 1);
        },uploadImg: function($event) {
        	
            $("#iconFile").click();
            updata_icon("/activity/upload_activity_cover",function(url){
              $($event.target).parent().find(".browse_maps").attr("src",url) 
            });
        },
        clear: function() {
            httpService.getDatas('GET', '/vote/delete', {id: this.datas.id}).then(function(data) {
                $scope.voteSetting.init();
            });
        },
        save: function() {
            this.datas.end_date = $('#stat_time_q').val();
            this.datas.end_time2 = $('#stat_time_w').val();
            this.datas.end_time = this.datas.end_date + ' ' + this.datas.end_time2;
            this.datas.end_time =new Date(this.datas.end_time).getTime();
            if(!form_mm.isnull(this.datas.title)){
                $scope.mml.err_pup("投票标题不能为空");
                $("#vote_title").focus();
                return;
               }
            if(!form_mm.isnull(this.datas.end_date)){
              $scope.mml.err_pup("请选择投票截止时间");
              $("#stat_time_q").focus();
              return;
             }
            if(!form_mm.isnull(this.datas.end_time2)){
              $scope.mml.err_pup("请选择投票截止时间");
              $("#stat_time_w").focus();
              return;
             }
            if(this.datas.voteItemList.length < 1) {
                $scope.mml.err_pup("请输入投票选项");
                return
            }
            if(!form_mm.isnull(this.datas.detail)){
                $scope.mml.err_pup("投票说明不能为空");
                $("#vote_detail").focus();
                return;
            }
     
/*            $(".act_input_a_voge_ws input[type='text']").map(function(i){
                var img_url =$(this).parents(".map_poou_car").find(".browse_maps").attr("src"); 
                $scope.voteSetting.datas.voteItemList[i]= img_url;
                $scope.voteSetting.datas.voteItemList[i]["fuck"]= $(this).val();
            });*/
            var hhgf=[]
            $(".act_input_a_voge_ws input[type='text']").map(function(i){
            	hhgf.push({})
                var img_url =$(this).parents(".map_poou_car").find(".browse_maps").attr("src"); 
                hhgf[i]["image_urls"]= img_url;
                hhgf[i]["item_name"]= $(this).val();
            });
            $scope.voteSetting.datas.voteItemList=hhgf 
            alert('投票设置保存成功');
            console.log( $scope.voteSetting.datas.voteItemList);
        } 
    }
    $scope.voteSetting.init();



    /*
     * 张晗
     * 抽奖设置
     *
     */
    $scope.lotterySetting = {
        draw_detail_array: [],
        itemIndex: 0,
        status: 'add',
        datas: {'limit_type': 2, 'draw_detail_array': []},
        addItem: function(data) {
            $('#lotteryModal').modal('hide');
            var list = this.datas.draw_detail_array;
            if(this.status == "save") {
                var index = this.itemIndex;
                $scope.$apply(function() {
                    list[index] = data;
                });
                this.status = 'add';
            } else {
                list = (list == null) ? [] : list;
                $scope.$apply(function() {
                    list.push(data);
                });
                console.log(list);
            }
        },
        'deleteItem': function(index) {
            this.datas.draw_detail_array.splice(index,1);
        },
        'editItem': function(index) {
            this.itemIndex = index;
            this.status = 'save';
            $('#lotteryModal').modal('show');
            $.each(this.datas.draw_detail_array[index], function(k, v) {
                $('.j-lotteryForm').find('input[name='+k+'],textarea[name='+k+']').val(v);
            });
        },
        'uploadImg': function() {
            $("#iconFile").click();
            updata_icon("/sponsor/sponsor_icon_upload_byuser",function(url){
                $('#lotteryGift').attr('src', url).next('input[type="hidden"]').val(url);
            });
        }
    }
    // 获取抽奖设置数据
    httpService.getDatas('GET', '/activity/query_draw_by_activity_id/' + $scope.id).then(function(data) {
        if(data.info) $scope.lotterySetting.datas = data.info;
    });


    /*
     * 张晗
     * 广告设置
     */
    $scope.adSetting = {
      'ad_urls_array': [],
      'isShow': true,
      // 上传广告图片
      'uploadImg': function() {
        $("#iconFile").click();
        updata_icon("/sponsor/sponsor_icon_upload_byuser",function(url){
          // 判断图片尺寸
          var img = new Image();
          img.src = url;
          // img.src = '/img/bg_admin_imge.jpg';
          // img.src = '/img/close2.png';
          img.onload = function() {
            if(this.width < 1080 || this.height < 640) {
              $scope.mml.err_pup("请上传至少1080*640的图片");
            } else {
              $scope.$apply(function() {
                $scope.adSetting.ad_urls_array.push(url);
                $scope.adSetting.isMaxNum();
              });
            }
          }
        });
      },
      'deleteImg': function(index) {
        $scope.adSetting.ad_urls_array.splice(index,1);
        $scope.adSetting.isMaxNum();
      },
      'isMaxNum': function() {
        if(($scope.adSetting.ad_urls_array).length >= 6) {
            $scope.adSetting.isShow = false;
        } else {
            $scope.adSetting.isShow = true;
        }
      }
    }
    // 获取广告图
    activity_data.getDatas('GET', '/activity/get_activity_ad_urls/'+ $scope.id)
    .then(function(data) {
      if(data.code == 0 && data.info.ad_urls) {
        $scope.adSetting.ad_urls_array = data.info.ad_urls;
        if(data.info.length >= 6) {
            $scope.adSetting.isShow = false;
        }
      }
    });


    /*
     * 张晗
     * 发起活动
     * 收起展开选项
     */
    $('.j-accordionDown').click(function() {
      $(this).next('.j-accordionContent').slideToggle();
      $(this).find('.j-addSign').toggleClass('none').next('img').toggleClass('none');
    });
    $('.j-accordionUp').click(function() {
      $(this).closest('.j-accordionContent').slideUp();
      $(this).closest('.j-accordionContent').prev('.j-accordionDown').find('.j-addSign').removeClass('none').next('img').addClass('none');
    });
    
})

       $(function(){
           var um = UM.getEditor('myEditor');
             var url_icon_src;//获取弹出框的图片路径

            
       
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
            
            $('#stat_time_q').datetimepicker({
              format:'Y/m/d',
             timepicker:false
            })
            
           $('#stat_time_w').datetimepicker({
           datepicker:false,
           format:'H:i',
           step:30
          });
            
            $('#stat_time_q_mf').datetimepicker({
              format:'Y/m/d',
             timepicker:false
            })
            
           $('#stat_time_w_mf').datetimepicker({
           datepicker:false,
           format:'H:i',
           step:30
          });
            
            
            
            $("body").on("mouseenter",".browse_maps",function(){ 
              var url_p=$(this).attr("src");
              $(".amplification img").attr("src",url_p) 
              $(".amplification").addClass("ampl")
            
            })
             $("body").on("mouseenter",".amplification",function(){ 
            	   $(".amplification").addClass("ampl")
             })
            $("body").on("mouseout",".browse_maps,.amplification",function(){ 
              $(".amplification").removeClass("ampl")
            })
        
            $("body").on("click",".radio_p_xz",function(){
                $(this).toggleClass("gx_xzm");
                if($(this).hasClass("gx_xzm")){
                  $(this).attr("data-xz",0);
                }else{
                  $(this).attr("data-xz",1);
                }  
                
            })
            
            $("body").on("click",".choice",function(){
                if($(this).attr("data-xz")==1){
                    $(this).toggleClass("gx_xzm").attr("data-xz",0);
                }else if($(this).attr("data-xz")==0){
                   $(".choice").removeClass("gx_xzm").attr("data-xz",0);
                       $(this).toggleClass("gx_xzm").attr("data-xz",1);
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
             $("#provinces_p").on("blur",function(){
                    $("#city_p").val("")//省份失去焦点的时候清空城市val
                                
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
      
$(function(){//签到设置页面显示隐藏
  if($('#atten_set_on').is(':checked')) {
       $(".upload_deminmnection").css("display","block")
        }else if($('#atten_set_off').is(':checked')){
          $(".upload_deminmnection").css("display","none")
        }
  $(".atten_set").on("click",function(){
    if($('#atten_set_on').is(':checked')) {
       $(".upload_deminmnection").css("display","block")
        }else if($('#atten_set_off').is(':checked')){
          $(".upload_deminmnection").css("display","none")
        }
  })
  
  $("body").on("mouseover",".close_ty",function(){//活动标签关闭按钮旋转
  	$(this).addClass("close_ty_duration")
  })
  $("body").on("mouseout",".close_ty",function(){//活动标签关闭按钮旋转
  	$(this).removeClass("close_ty_duration")
  })
  
  $("body").on("click",function(){
  	$(".re_type_content").css("display","none");
  	$(".activity_label_list").css("z-index","9")
  	
  })
  $(".re_type_wrap,.re_type_content").on("click",function(e){
  	 e.stopPropagation()//如果夫级用了点击事件，子节点也有点击事件用此方法可以阻止夫节点的点击方法
  	$(".re_type_content").css("display","block")
  	$(".activity_label_list").css("z-index","9999")
  })
    
})
$('.j-navCity').addClass('none').prev('a').removeClass('none');