/**
 * 发起活动
 */
angular.module('activity_sponsor', [ "directive_mml","activity_servrt"])
.controller('activity_sponsor_centerController',["$scope","activity_data",function($scope,activity_data) {
    $scope.province=[];//省份
    $scope.id=$("#act_id").val().trim();//获取活动ID
    $scope.id==""?$scope.id=0: $("#act_id").val() 
    $scope.user_id=$("#user_id").val();//用户的id    
    $scope.caty_a=[];//城市 
    $scope.status=0;//发布状态
    $scope.guest_data=[];//嘉宾
    $scope.ticket_array=[];//票卷 
    $scope.img_icon=[];//活动封面
    $scope.img_src="";//弹出层选中的地址
    $scope.row_po_form=[{"name":"姓名","necessary":"y","designation":"name","random":new Date().getTime()},{"name":"手机号码","necessary":"y","designation":"tel","random":new Date().getTime()}];//表单
    $scope.activities_data={};//活动详细数据
    $scope.sp_id=-1;
    $scope.pj_id=-1;
    $scope.reward = {'remark': '活动不易，打赏一下组织者吧！'};

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

    var tyt_poiu=false,lj_it=false
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
    },"vote_date":[],//投票表单数据
    "voteItemList":[{"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"},{"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"}],
     "polling_data":function(tyepe){//添加更多投票选项  
       var oiu={"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"}
       if(tyepe==1){
         $scope.select_click.voteItemList.push(oiu)
       }else{
         $scope.select_click.date_pou[0].voteItemList.push(oiu)
       }
      
     },"voteIte_w":function(x){
       $scope.select_click.voteItemList.splice(x,1)
     },"voteIte_p":function(x,id){//投票删除按钮
       if(!confirm("您真的要删除该投票吗？(删除无法恢复)")){
         return
       }
      
       if(tyt_poiu){
        var data={}
        data.id=id
        activity_data.deltet_voteitem(data).then(
            function success(data) {
              if(data.code!=0){
                return
              }
            }, function error() {
              console.log("投票删除失败")
        });
       }
       $scope.select_click.date_pou[0].voteItemList.splice(x,1)
       
       
     },"vote_initialization":function(){//初始化弹出来 的投票表单
       tyt_poiu=false
       lj_it=true;
          $('#ticket_set_vode').modal('toggle');
        $("#ticket_set_vode input").val("") 
        $scope.select_click.voteItemList=[{"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"},{"item_name":"","image_urls":"http://resource.apptown.cn/image/userIcon.jpg"}]
     },"delete_poll":function(id){//删除投票
       if(!confirm("您真的要删除该投票吗？(删除无法恢复)")){
         return
       }
       if(tyt_poiu){
          var data={}
          data.id=id
          activity_data.vote_delete_p(data).then(
              function success(data) {
                if(data.code!=0){
                  return
                }
              }, function error() {
                console.log("投票删除失败")
          });
       }
       $scope.select_click.date_pou=[]
       
       
       
       
     },"update_vote":function(data){//修改投票信息
       activity_data.update_vote(data).then(
          function success(data) {
            if(data.code!=0){
              return
            }
          }, function error() {
            console.log("投票删除失败")
      });
     },"voted_add":function(type){
        var data_po={}
        if(type==1){
          data_po.title=$("#vote_title").val()
            data_po.stat_time_q=$("#stat_time_q").val()
            data_po.stat_time_w=$("#stat_time_w").val()
            data_po.vote_detail=$("#vote_detail").val()
            data_po.type_vote=$("#type_vote").val()
            
        }else if(type==2){
          data_po.title=$("#vote_title_mf").val()
            data_po.stat_time_q=$("#stat_time_q_mf").val()
            data_po.stat_time_w=$("#stat_time_w_mf").val()
            data_po.vote_detail=$("#vote_detail_mf").val()
            data_po.type_vote=$("#type_vote_mf").val()
        }
        $scope.select_click.pup_vote_a(data_po,type)
       
     },"pup_vote_a":function(data,type){//投票完成按钮触发
      
        var vote_title=data.title,//投票标题
        stat_time_q=data.stat_time_q,//投票截止时间
        stat_time_w=data.stat_time_w,//投票截止时间
        vote_detail=data.vote_detail,//活动介绍
        type_vote=data.type_vote,//投票类型
        voytr_ou=[],
        date_p_a={},
        startDate=stat_time_q+" "+stat_time_w;//开始时间
        startDate=new Date(startDate).getTime()
        if(!form_mm.isnull(vote_title)){
            $scope.mml.err_pup("投票标题不能为空");
            $("#vote_title").focus();
            return;
           }
        if(!form_mm.isnull(stat_time_q)){
          $scope.mml.err_pup("请选择投票截止时间");
          $("#stat_time_q").focus();
          return;
         }
        if(!form_mm.isnull(stat_time_w)){
          $scope.mml.err_pup("请选择投票截止时间");
          $("#stat_time_w").focus();
          return;
         }
        if(type==1){
          for(var i=0;i<$(".act_input_a_voge").length;i++){
              if(!form_mm.isnull($(".act_input_a_voge").eq(i).val())){
                $scope.mml.err_pup("请输入投票选项");
                return
              }
            }
            $(".act_input_a_voge_ws input").map(function(){
              var url_po=$(this).parents(".map_poou_car").find(".browse_maps").attr("src");
              voytr_ou.push({"item_name":$(this).val(),"image_urls":url_po})
            })
        }else if(type==2&&!tyt_poiu){
          for(var i=0;i<$(".act_input_a_voge_pooi").length;i++){
              if(!form_mm.isnull($(".act_input_a_voge_pooi").eq(i).val())){
                $scope.mml.err_pup("请输入投票选项");
                return
              }
            }
            $(".act_input_a_voge_ws_s input").map(function(){
              var url_po=$(this).parents(".map_poou_car").find(".browse_maps").attr("src");
              voytr_ou.push({"item_name":$(this).val(),"image_urls":url_po})
            })
        }

        if(!form_mm.isnull(vote_detail)){
            $scope.mml.err_pup("投票说明不能为空");
            $("#vote_detail").focus();
            return;
           }
        if(!tyt_poiu){
          date_p_a.title=vote_title
            date_p_a.end_time=startDate
            date_p_a.type=type_vote 
            date_p_a.voteItemList=voytr_ou
            date_p_a.detail=vote_detail
            $scope.select_click.date_pou[0]=date_p_a
            if(lj_it){
              $scope.select_click.date_pou[0].activity_id=$scope.id
              $scope.select_click.update_vote($scope.select_click.date_pou[0])
            }
        }else{
          $scope.select_click.date_pou[0].title=vote_title
          $scope.select_click.date_pou[0].end_time=startDate
          $scope.select_click.date_pou[0].type=type_vote
          $scope.select_click.date_pou[0].detail=vote_detail
          for(var i=0;i<$scope.select_click.date_pou[0].voteItemList.length;i++){
                $scope.select_click.date_pou[0].voteItemList[i].item_name=$(".act_input_a_voge_pooi").eq(i).val()
                $scope.select_click.date_pou[0].voteItemList[i].image_urls=$(".browse_maps_poii").eq(i).attr("src")
          }
          $scope.select_click.update_vote($scope.select_click.date_pou[0])
        }
    
        if(type==1){
            $('#ticket_set_vode').modal('toggle');
        }else  if(type==2){
        
          $('#modification_vode').modal('toggle');
        }
       
        
     },"date_pou":[],
     "editors_vote":function(de){//编辑投票
        $scope.select_click.date_pou[0]=de
        $('#modification_vode').modal('toggle');
     },
     "up_icon_b":function(x){//投票弹出层图片上传
      $("#iconFile").click();
    updata_icon("/activity/upload_activity_cover",function(url){
      $(x).parent().find(".browse_maps").attr("src",url)
    })
    },"add_fom_p":function(){//添加表单按钮
        if($scope.id>0&&$scope.status==0){
          return
        }
     $($scope.row_po_form).map(function(x){
        if(this.length==0){
          $scope.row_po_form.splice(x,1)
        }
      })
       $scope.row_po_form.push({"name":"","necessary":"y","designation":"","random":new Date().getTime()}) 
       console.log( $scope.row_po_form)
    },"delect_fom_p":function(idex){//删除表单按钮
     $($scope.row_po_form).map(function(x){
        if(this.length==0){
          $scope.row_po_form.splice(x,1)
        }
      })
      $scope.row_po_form.splice(idex,1)
      
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
        var activity_type=$("#activity_type").val();//活动类型
        var m_industry=$("#m_industry").val();//行业
        
        var form_yz=false; 
        $scope.activities_data.activity={};
        $scope.activities_data.activity.name=$("#name_event").val().trim();//活动名称    11
        $scope.activities_data.activity.start_date= new Date(startDate).getTime();//活动时间开始的时间戳3
        $scope.activities_data.activity.end_date= new Date(endDate).getTime();//活动时间开始的时间戳4
        $scope.activities_data.activity.city=$("#city_p").attr("data-id");//城市id5
        $scope.activities_data.activity.address=$("#detailed_address").val().trim();//获取详细地址6
        $scope.activities_data.activity.type=$("#activity_type").attr("data-id");//活动类型id7
        $scope.activities_data.activity.industry_id= $("#m_industry").attr("data-id").trim();//行业id8
        $scope.activities_data.activity.contact_way=$("#contact_information").val().trim();//联系方式9
        $scope.activities_data.activity.details=$("#myEditor").html().trim();//富文本编辑器10       
        $scope.activities_data.activity.person_limit=$("#number_online").val().trim();//人数上线11
        $scope.activities_data.ticket_array=$scope.ticket_array//票卷
        $scope.activities_data.activity.support_id=$scope.sponsored_id;//赞助id
        $scope.activities_data.activity.sponsor=$("#main_host").val();//主办方单位
        $scope.activities_data.activity.sponsor_url=$("#upLoadImg").attr("src");//签到设置上传二维码
        $scope.activities_data.activity.live_url=$(".video_text").val()//视频直播地址
        $scope.activities_data.vote=$scope.select_click.date_pou[0];

        $(".row_po_form_zdy").map(function(x){   
           var xz=$(this).find(".radio_p_xz").attr("data-xz");//获取是否选中
           var form_map=$(this).find(".ipuf").val();   
           xz==0?(xz="y"):(xz="n") 
           $scope.row_po_form[x+2].name=form_map  
           $scope.row_po_form[x+2].necessary=xz
           $scope.row_po_form[x+2].designation=form_map
           if(!form_mm.isnull(form_map)){
            form_yz=true;
               }
        })
        
         $($scope.row_po_form).map(function(x){
          if(this.length==0){
            $scope.row_po_form.splice(x,1)
          }
        })
        if(form_yz){
          $scope.mml.err_pup("自定义表单不能为空");
             return;
          
        }

        /*
        * 张晗
        * 签到设置—广告设置
        * ad_urls_array(广告数组参数)
        */
        $scope.activities_data.activity.ad_urls_array = $scope.adSetting.ad_urls_array;
        // 活动打赏提示数据
        var rewardOpen = ($('.j-rewardOpen').attr('data-xz') == 0) ? true : false; 
        $scope.activities_data.activity.tip = {open: rewardOpen, remark: $scope.reward.remark};


        $scope.activities_data.form_config=$scope.row_po_form;//表单
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
     if($scope.reward.remark.length > 20){
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
       $scope.mml.err_pup("请输入联系方式");
            $("#contact_information").focus();
            return;
     }
   
       if($("#fuy_poi_a").attr("data-xz")!=0){
         $scope.mml.err_pup("请勾选e场景平台服务协议！ ");
         return;
       }  
       if(status==3||status==4){
       var sty=status==3?1:0;
       $scope.activities_data.activity.status=1
       var data_p;

       if(status==3){
              data_p={"activity":{"id":$scope.id,
              "status":0,
              "address":$("#detailed_address").val(),
              "details":$("#myEditor").html().trim(),
              "name":$("#name_event").val().trim(),
              "poster":usr_oc,
              "start_date":new Date(startDate).getTime(),
              "end_date":new Date(endDate).getTime(),
              "city":$("#city_p").attr("data-id"),
              "type":$("#activity_type").attr("data-id"),
              "industry_id":$("#m_industry").attr("data-id").trim(),
              "contact_way":$("#contact_information").val().trim(),
              "person_limit":$("#number_online").val().trim(),
              "sponsor":$("#main_host").val(), 
              "sponsor_url":$("#upLoadImg").attr("src"),
              "live_url":$(".video_text").val(),
              "support_id":$scope.sponsored_id, 
              "ad_urls_array": $scope.adSetting.ad_urls_array,
              "tip": JSON.stringify($scope.activities_data.activity.tip),
              },"honored_guest":$scope.guest_data
            
          } 
      }

       
       if(status==4){
        $scope.activities_data.activity.id=$scope.id
        data_p=$scope.activities_data
       }
       data_p=angular.fromJson(data_p)

       // console.log($scope.activities_data);
       // return false;

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
       
         return
      }

      activity_data.create_activity($scope.activities_data).then(
        function success(data) {
          if(data.code!=0){
             $scope.mml.err_pup(data.msg)
            return
          }
          var rand_a= Math.floor(Math.random()*100000)
           if(rand_a<10000){
                  rand_a+=10000
           }
          var id_p=rand_a+data.msg+rand_a
          sessionStorage.a_name="";//初始化缓存
          sessionStorage.removeItem("a_name");
          window.location.href='/activity/'+id_p+'.httl'
        }, function error() {
          console.log("发起活动失败")
    });
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
         activities_data.type=$("#activity_type").attr("data-id");//活动类型id
         activities_data.type_text=$("#activity_type").val();//活动类型
         activities_data.industry_id= $("#m_industry").attr("data-id");//行业id
         activities_data.industry_text= $("#m_industry").val();//行业
         activities_data.contact_way=$("#contact_information").val();//联系方式
         activities_data.details=$("#myEditor").html();//富文本编辑器
         activities_data.person_limit=$("#number_online").val();//人数上线
         activities_data.ticket_array=$scope.ticket_array//票卷
         activities_data.form_config=$scope.row_po_form;//表单
         activities_data.honored_guest=$scope.guest_data;//嘉宾
         activities_data.main_host=$("#main_host").val();//主办方单位
         activities_data.live_url=$(".video_text").val();//视频直播地址

         activities_data.vote_oiu=$scope.select_click.date_pou[0];

         activities_data.sponsor_url=$("#upLoadImg").attr("src");//二维码地址
         sessionStorage.a_name=JSON.stringify(activities_data);
         
         
    }
     if($scope.id>0){
           activity_data.activity_detail($scope.id).then(
              function success(data) {
                 if(data.code!=0){
                   alert(data.msg)
                   return
                 }
                 tyt_poiu=true
                 $(".display_show").show()
                 km=new activity_detail(data.info);
                  // 活动打赏数据
                  $scope.reward.remark = data.info.tip.remark;

                 

                 if(data.info.tip.open) {
                   $('.j-rewardOpen').addClass('gx_xzm').attr('data-xz', 0);
                 } else {
                   $('.j-rewardOpen').removeClass('gx_xzm').attr('data-xz', 1);
                 }

                 $scope.status=km.status
                 if($scope.status==0){ 
                  $(".modify_disable").attr("disabled","disabled").addClass("prohibit").removeAttr("data-toggle").css("background","#cbcbcb")
                      
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
                     if(km.type==null){
                          km.type=1
                     }
                     $("#activity_type").attr("data-id",km.type);//活动类型id
                       $("#activity_type").val($scope.classify[0].maker_title[(km.type-1)].name);
                         $("#m_industry").attr("data-id",km.industry_id);//活动类型id
                         $("#m_industry").val($scope.classify[1].maker_title[(km.industry_id-1)].name);
                         $("#myEditor").html(km.details);
                         $("#contact_information").val(km.contact_way);
                         $("#main_host").val(km.sponsor_name);
                          $(".video_text").val(km.live_url);
                          $("#upLoadImg").attr("src",km.sponsor_url);
                         $("#number_online").val(km.person_limit);
                         $scope.ticket_array=km.ticket_list==null?[]:km.ticket_list;//票卷
                         $scope.row_po_form= km.detail_config==null?[]:km.detail_config;//表单
                         $scope.guest_data= km.honored_guest==null?[]:km.honored_guest;//嘉宾 
                         $scope.select_click.date_pou[0]=km.vote
                        var pattern = /upload_code/; //二维码关注设置进来传值      
                    if(!pattern.test(km.sponsor_url)){ //二维码关注设置进来传值   
                      $(".atten_set input").removeAttr("checked");
                      $("#atten_set_on").click();
                      $(".upload_deminmnection").css("display","block")
                    }   
                         $($scope.row_po_form).map(function(x){
                        
                       if(this.name==""){
                         $scope.row_po_form.splice(x,1) 
                       }
                       })
                    
                        console.log( $scope.row_po_form)
              }, function error() {
                console.log("获取活动详情失败")
              });
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
                  $("#activity_type").val(km.type_text)
                  $("#m_industry").attr("data-id", km.industry_id);//行业id
                  $("#m_industry").val(km.industry_text);
                  $("#contact_information").val(km.contact_way);//联系方式
                  $("#main_host").val(km.main_host);//主办方单位
                  $(".video_text").val(km.live_url);//视频直播地址
                  $("#upLoadImg").attr("src",km.sponsor_url);//主办方二维码
                  $("#myEditor").html( km.details);//富文本编辑器
                  $("#number_online").val(km.person_limit);//人数上线
                  $scope.ticket_array=km.ticket_array//票卷
                  $scope.row_po_form= km.form_config;//表单
                  $scope.guest_data= km.honored_guest;//嘉宾
                  $scope.select_click.date_pou[0]=km.vote_oiu
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
    
}])

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
            $("body").on("mouseout",".browse_maps",function(){ 
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
  
    
})
$('.j-navCity').addClass('none').prev('a').removeClass('none');