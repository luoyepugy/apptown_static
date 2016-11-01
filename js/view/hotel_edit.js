/**
 * 酒店管理
 * by 吴伟标
 * 2016年10月28日 15:19:57
 * 待优化
 */
angular.module('activity_sponsor', [ "directive_mml","activity_servrt"])
.controller('activity_sponsor_centerController',["$scope","activity_data",function($scope,activity_data) {
    $scope.province=[];//省份
    $scope.id=$("#id").val();//获取活动ID
    $scope.id==""?$scope.id=0: $("#id").val()   
    $scope.img_icon;//活动封面
    $scope.img_src="";//弹出层选中的地址
    $scope.row_po_form=[{"name":"姓名","necessary":"y","designation":"name","random":new Date().getTime()},{"name":"手机号码","necessary":"y","designation":"tel","random":new Date().getTime()}];//表单
    $scope.activities_data={};//活动详细数据
    $scope.sp_id=-1;
    $scope.pj_id=-1; 
    $scope.upLoadImg=function(){//上传图片
    $("#iconFile").click();
    updata_icon("/activity/upload_activity_cover",function(url){
       $("#upLoadImg").attr("src",url)
    })
  }
    
    $scope.star=[{"title":"星级","maker_title":[{"id":"1","name":"一星级"},{"id":"2","name":"二星级"},{"id":"3","name":"三星级"},{"id":"4","name":"四星级"},{"id":"5","name":"五星级"}]}];
    

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
       if($(".case_poiuy_i .case_icon").length>0){
         alert("图片最多上传1张");
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
         if($(".case_poiuy_i .case_icon").length>0){
           $scope.mml.err_pup("活动封面最多上传1张!");
               return;
           }
        $("#iconFile").click();
      
        updata_icon("/activity/upload_activity_cover",function(url){
           $(".case_poiuy_i").append(' <p class="pr fl case_icon">  <img src="'+url+'" class="case_poiu_a">    <img src="/img/close.png" class="icon_close_a"  data-dismiss="alert">   </p>')
        })
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
        $scope.activities_data={};
        $scope.activities_data.id=$("#id").val();//活id
        $scope.activities_data.name=$("#name_event").val();//名称
        $scope.activities_data.star= $("#m_industry").attr("data-id");//星级
        $scope.activities_data.contacter_phone=$("#contact_information").val();//联系方式9
        $scope.activities_data.details=$("#myEditor").html();//富文本编辑器10         
        $scope.activities_data.address=$("#address").val();//地址
        $scope.activities_data.contacter=$("#main_host").val();//联系人
        //$scope.activities_data.sponsor_url=$("#upLoadImg").attr("src");//签到设置上传二维码
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
        
        $(".case_poiuy_i .case_poiu_a").map(function(){
          usr_oc+=$(this).attr("src");
        })
        $scope.activities_data.icon=usr_oc;//联系人
        if(!form_mm.isnull(  $scope.activities_data.name)){
          $scope.mml.err_pup("酒店名称不能为空");
                $("#name_event").focus();
                 return;
         }
        if($scope.activities_data.icon==""){
          $scope.mml.err_pup("请上传图片");
          
              window.location.href="#the_editor";
               return;
       }
      
      if(!form_mm.isnull($scope.activities_data.contacter)){
          $scope.mml.err_pup("请输入联系人");
            $("#main_host").focus();
            return;
     }
      
      if(!form_mm.isnull($scope.activities_data.address)){
          $scope.mml.err_pup("请输入地址");
            $("#address").focus();
            return;
     }
      
      if(!form_mm.isnull($("#myEditor").text())){
         $scope.mml.err_pup("请输入酒店详情");
            window.location.href="#myEditor"
            return;
     }
      if(!form_mm.isnull($scope.activities_data.contacter_phone)){
       $scope.mml.err_pup("请输入联系方式");
            $("#contact_information").focus();
            return;
     }

      activity_data.save_or_update_hotel($scope.activities_data).then(
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
          alert("发起成功");
          console.log(data.info);
          window.location.href='/activity/hotel_detail?hotelId='+data.info;
          //跳转页面
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
                  
            activities_data.cover_url=[]
          $(".case_poiuy_i .case_poiu_a").map(function(){
            activities_data.cover_url.push($(this).attr("src"))
            })
         activities_data.star= $("#m_industry").attr("data-id");//行业id
         activities_data.contact_way=$("#contact_information").val();//联系方式
         activities_data.details=$("#myEditor").html();//富文本编辑器
         activities_data.main_host=$("#main_host").val();//主办方单位

         sessionStorage.a_name=JSON.stringify(activities_data);
         
         
    }
    
     if($scope.id>0){
    	 //酒店详情
           activity_data.hotel_detail($scope.id).then(
              function success(data) {
                 if(data.code!=0){
                   alert(data.msg)
                   return
                 }
                 tyt_poiu=true
                 $(".display_show").show()
                 km=new activity_detail(data.info);
                 $scope.status=km.status
                 if($scope.status==0){ 
                  $(".modify_disable").attr("disabled","disabled").addClass("prohibit").removeAttr("data-toggle").css("background","#cbcbcb")
                      
                 }
                 $("#name_event").val(data.info.name);//酒店名称
                 $scope.img_icon=data.info.icons; //酒店封面
                 $("#m_industry").attr("data-id",data.info.star);//活动类型id
                 $("#m_industry").val($scope.star[0].maker_title[(data.info.star-1)].name);
                 $("#myEditor").html(data.info.details);
                 $("#contact_information").val(data.info.contacter_phone);
                 $("#main_host").val(data.info.contacter);
                 $("#address").val(data.info.address);
                 
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
