/**
 * 活动列表
 */
angular.module('activity_list', [ "directive_mml","activity_servrt"])
.controller('listController',["$scope","activity_data",function($scope,activity_data) {
	
	$scope.activity_cla=[{"title":"分类","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"商会场馆"},{"id":"2","name":"创业投资"},{"id":"3","name":"亲子教育"},{"id":"4","name":"金融财经"},{"id":"5","name":"精品课程"},{"id":"6","name":"休闲户外"},{"id":"7","name":"娱乐艺术"}]},{"title":"行业","maker_title":[{"id":"0","name":"全部"},{"id":"1","name":"孵化器"},{"id":"2","name":"房产"},{"id":"3","name":"互联网"},{"id":"4","name":"公益"},{"id":"5","name":"培训"},{"id":"6","name":"汽车"},{"id":"7","name":"旅游"},{"id":"8","name":"酒店"},{"id":"9","name":"家装"},{"id":"10","name":"卖场"},{"id":"11","name":"明星"},{"id":"12","name":"商会"},{"id":"13","name":"社区"},{"id":"14","name":"展会"},{"id":"15","name":"大健康"},{"id":"16","name":"校园"},{"id":"17","name":"媒体"},{"id":"18","name":"趣味"},{"id":"19","name":"金融"},{"id":"20","name":"其他"}]},{"title":"城市","maker_title":[{"id":"0","name":"全部 "},{"id":"1","name":"北京 "},{"id":"2","name":"天津 "},{"id":"3","name":"上海 "},{"id":"4","name":"重庆 "},{"id":"51","name":"大连 "},{"id":"86","name":"南京 "},{"id":"99","name":"杭州 "},{"id":"128","name":"厦门 "},{"id":"418","name":"武汉 "},{"id":"435","name":"长沙 "},{"id":"449","name":"广州 "},{"id":"450","name":"深圳 "},{"id":"556","name":"西安 "},{"id":"627","name":"香港特别行政区"}]}];
    
	 $scope.act_list=[];//活动列表数据
     $scope.activity_hot=[];//推荐活动 
     $scope.act_results;//活动总数
     $scope.page_row=[];
     $("#seach_type").attr("data-type",0);
     for(var i=1;i<10;i++){
    	 $scope.page_row.push(i);
     }
  /*   * 页码pageIndex 
     * 行pageSize
     * 活动类型  activity_type
     * 行业(industry_id)
     * 开始时间戳 startDate  
     * 结束时间戳 endDate
     * 是否收费is_free 
     * 标题  name
     * 按最新发布按钮筛选（PC端的）sort=1
     * 最多点击筛选（PC端的）sort=2
     * 最多参与筛选（PC端的）sort=3*/
     $scope.act_list_sarg={"pageIndex":1,"pageSize":8,"activity_type":"","industry_id":"","startDate":"","endDate":"","is_free":"","name":"","city":"","sort":""}
     $scope.list_fun={"previous_page":function(){//上一页
    	   if($scope.act_list_sarg.pageIndex>1){
  	    	   $scope.act_list_sarg.pageIndex-=1
  	       }
    	   $scope.list_fun.demand($scope.act_list_sarg);
     },"fengye":function(){ //分页
            $(".tcdPageCode").createPage({
						pageCount:10,
						current:$scope.act_list_sarg.pageIndex,
						backFn:function(p){	
							$scope.act_list_sarg.pageIndex=p
						    $scope.list_fun.demand($scope.act_list_sarg);  
						}
    				});	
            }
        ,"next_page":function(){//下一页
    	    if( $scope.act_list_sarg.pageIndex<$scope.act_results){
    		    $scope.act_list_sarg.pageIndex+=1
    		}
            $scope.list_fun.demand($scope.act_list_sarg);
       },"act_assign":function(page_number){//跳转指定的页面
    	   $scope.act_list_sarg.pageIndex=page_number;
    	   $scope.list_fun.demand($scope.act_list_sarg);
      },"sorting_query":function(evem,id){//分类查询
      	if(id==0){
      		id=""
      	}
      	$scope.act_list_sarg.pageIndex=1;//初始化页码
    	  $(".list_oiuy_a a").removeClass("act")
    	  $(evem).addClass("act");
    	  $scope.act_list_sarg.activity_type=id;//类型
    	  $scope.list_fun.demand($scope.act_list_sarg);
      },"industry_query":function(evem,id){//行业查询
      	if(id==0){
      		id=""
      	}
    	  $scope.act_list_sarg.pageIndex=1;//初始化页码
    	  $(".list_oiuy_b a").removeClass("act");
    	  $(evem).addClass("act");
    	  $scope.act_list_sarg.industry_id=id;//行业
    	  $scope.list_fun.demand($scope.act_list_sarg);
      },"city_quer":function(evem,id){//城市查询
      	if(id==0){
      		id=""
      	}
    	  $scope.act_list_sarg.pageIndex=1;//初始化页码
    	  $(".list_oiuy_c a").removeClass("act");
    	  $(evem).addClass("act");
    	  $scope.act_list_sarg.city=id;//行业
    	  $scope.list_fun.demand($scope.act_list_sarg);
      },"act_sort":function(sort){/*筛选    1按最新发布按钮筛选  2 最多点击 3 最多参与筛选    */
    	  $scope.act_list_sarg.pageIndex=1;//初始化页码
    	  $scope.act_list_sarg.sort=sort;//筛选
    	  $scope.list_fun.demand($scope.act_list_sarg);
      },"act_check":function(chk){/*是否免费    1.免费  2收费*/ 
    	  var is_po=1;
    	  chk? is_po=1:is_po="";
    	  $scope.act_list_sarg.pageIndex=1;//初始化页码
    	  $scope.act_list_sarg.is_free=is_po;//是否免费
    	  $scope.list_fun.demand($scope.act_list_sarg);
    	  
      },"demand":function(sarg){
    	/* 查询活动列表控制器*/  
    	  
    	  try{
    	    	 var act_s=window.location.search;//获取问号后面的值
    	         var mpv_a=act_s.split("?")[1].split("=")[0],text_ac=act_s.split("?")[1].split("=")[1];
    	         if(text_ac!=""){
    	        	   text_ac=decodeURI(text_ac);//处理乱码 
    	        	   $scope.act_list_sarg.name=text_ac;
    	        	   $("#suosuo_p").val($scope.act_list_sarg.name);
    	         }
    	     }catch(e){
    	    	 
    	     }
    	     
    	 activity_data.query_activity_list(sarg.pageIndex, sarg.pageSize, sarg.activity_type, sarg.industry_id, sarg.startDate,sarg.endDate,sarg.is_free, sarg.name,sarg.city,sarg.sort ).then(
   				function success(data) {  
   					
   					if(data.code!=0){
   						console.log(data.msg)
   						return;
   					}
   					$(".tcdPageCode").createPage({
						pageCount:Math.ceil(data.results/8),//总页数
						current:$scope.act_list_sarg.pageIndex,//当前页数
						backFn:function(p){	//回调,p为当前页数												      
						}
    				});	  					
   					$scope.act_results=data.results/8;
   				    $scope.act_list=[];
   				    $("html,body").animate({scrollTop:0},200);
   		    	
   				    $scope.page_row=[];
			    	for(var i=sarg.pageIndex;i<(sarg.pageIndex+9);i++){
			    		$scope.page_row.push(i);
			    	}
			    	
   				
   					$(data.rows).map(function(){
   						 var act_data=new query_activity_list(this)
   						 $scope.act_list.push(act_data);
   					})
   					if($scope.act_list.length==0){
   						$(".zhng_poi_a").show();
   						$('.tcdPageCode').hide()
   					}else{
   						$(".zhng_poi_a").hide();
   						$('.tcdPageCode').show()
   					}
   					
   					$(".act_poiuy_case").show();
   					$(".act_list_p_lefy .logo_ad").remove();
   					
   					$(".act_fr_poi li").removeClass("active")
   		    	    $(".act_fr_poi li span:contains("+sarg.pageIndex+")").parent().addClass("active")
   		    	    $scope.act_list_sarg.name=""
   				}, function error() {
   					console.log("获取列表失败")
   				});
     }}
 
     try{
    	 var act_s=window.location.search;//获取问号后面的值
         var mpv_a=act_s.split("?")[1].split("=")[0],text_ac=act_s.split("?")[1].split("=")[1];
         if(text_ac!=""){
        	   text_ac=decodeURI(text_ac);//处理乱码 
        	   $scope.act_list_sarg.name=text_ac;
        	   $("#suosuo_p").val($scope.act_list_sarg.name);
         }
     }catch(e){
    	
     }
    
	
     $scope.list_fun.demand($scope.act_list_sarg);
     $scope.list_fun.fengye()
   
     $scope.actlist=function(){
    	  activity_data.query_activity_list(1,10).then(
  				function success(data) {
  					if(data.code!=0){
  						console.log(data.msg)
  						return;
  					}
  					$(".act_poiuy_case").show();
  					$(".act_list_p_lefy .logo_ad").remove();
  					$scope.act_results=data.results/10;
  					$(data.rows).map(function(){
  						 var act_data=new query_activity_list(this)
  						 $scope.act_list.push(act_data)
  					})
  				}, function error() {
  					console.log("获取列表失败")
  				});
     }
	
       activity_data.getActivityHot().then(
				function success(data) {
					if(data.code!=0){
						console.log(data.msg)
						return;
					}
					$(data.info).map(function(){
						var hoti=new preferential(this)
						 $scope.activity_hot.push(hoti)
					})
			}, function error() {
				console.log("获取热门活动失败")
		});
     
     
	 
}]);

$(function(){
	/*导航选中状态*/
	$(".nav_li").eq(1).addClass("act");
  $('.j-navCity').addClass('none').prev('a').removeClass('none');
  
	var top_s=$(".act_list_p_right").offset().top;

	 $(window).scroll( function() {
		 var top_po_l=$(this).scrollTop()-top_s;
		 var  max_top=$(".act_list_p_lefy").height()-$(".act_list_p_right").height()//最多滚动的距离
		 if($(this).scrollTop()>top_s){
			 if(top_po_l<max_top){
					
				 $(".act_list_p_right").css({ "margin-top": top_po_l})
			 }
		 }else{
			 $(".act_list_p_right").css({ "margin-top": 0})
		 }
	 })
	 
	 $(".list_oiuy_a a").eq(0).addClass("act")//默认分类筛选选中全部按钮
	 $(".list_oiuy_b a").eq(0).addClass("act")//默认行业筛选选中全部按钮
	 $(".list_oiuy_c a").eq(0).addClass("act")//默认筛选筛选选中全部按钮
})
