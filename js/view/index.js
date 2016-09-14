/**
 * 首页视图   zst999520
 */
angular.module('index_date', [ "directive_mml","activity_servrt"])
.controller('indexController',["$scope","activity_data",function($scope,activity_data) {
	        var gh=true;
	        $scope.banner_index=[];//banner图
	        $scope.activity_hot=[];//推荐活动 
	        $scope.user_hot=[];//活跃主办方  user_hot
	        $scope.indexData=[];
	        /*轮播图*/
	        activity_data.banner_index().then(
					function success(data) {
						if(data.code!=0){
							console.log(data.msg)
							return;
						}
						$(data.info).map(function(){
							var rand_a= Math.floor(Math.random()*100000)
							 if(rand_a<10000){
							        rand_a+=10000
							 }
							rand_a=rand_a+""+this.activity_id+""+rand_a
							if(this.activity_banner_url==null){
								return
							}
							var bandata= new indexbanner(rand_a,this.activity_banner_url)
							$scope.banner_index.push(bandata)
						})
					}, function error() {
						console.log("获取轮播图失败")
			});
	        /*首页数据统计*/
	        activity_data.getStatisticsData().then(
	        		function success(data){
	        			if(data.code!=0){
	        				console.log(data.msg);
							return;
	        			}else{
	        				   $scope.indexData = new getStatisticsData(data.info);
	        				   console.info($scope.indexData);
	        				   $('.datanum').each(function(i,e){
	        					var o = $(this);
	        		            var t = 10;
	        		            var changenum = "" ;
	        		            if(o.attr('data-param')=='sponsor_sum'){
	        		            	changenum = $scope.indexData.sponsor_sum+"" ;
	        		            }
	        		            if(o.attr('data-param')=='user_sum'){
	        		            	changenum = $scope.indexData.user_sum+"" ;
	        		            }
	        		            if(o.attr('data-param')=='activity_sum'){
	        		            	changenum = $scope.indexData.activity_sum+"" ;
	        		            }
	        		            console.info(changenum);
	        		            var val = parseInt(changenum.replace(/,/g,""))/t;
	        		            console.info("val="+val);
	        		            var setIntervalId = window.setInterval(function(){
	        		              if(t--){
	        		                var v = parseInt(val*(10-t)).toString();
	        		                var varr = v.split("");
	        		                for (var i = varr.length-4; i >= 0; i -= 3) varr[i] += ",";
	        		                o.text(varr.join(""));
	        		              }
	        		              else{clearInterval(setIntervalId);}
	        		            },50);
	        		           });
	        				}
	        		}, function error() {
						console.log("获取首页数据统计失败");
	        });
	        
	        
	        
	        /*热门活动*/
	        activity_data.getActivityHot().then(
					function success(data) {
						$(".recommend_ac").show()
						$(".logo_ad").hide()
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
	        /*热门活动*/
	        var cty_date={}
	        cty_date.city=localStorage.caty_id==undefined?'450':localStorage.caty_id;
	        cty_date.pageIndex=1;
	        cty_date.pageSize=12;
	        cty_date.sort=2;
	        cty_date.status=0;
	        cty_date.isend=0;
	        
	        $(".city_name").text(localStorage.caty_name==undefined?"深圳":localStorage.caty_name)
	        
	        $scope.activity_list=[];
	        $scope.load_l=false;//判断热门活动是否还有数据
	        $scope.query_activity=function(data){
	        	 activity_data.my_activity_list(data).then( 
	     	    		function success(data){
	     	    			if(data.code!=0){
	     	    				alert(data.msg);
	     	    				return 
	     	    			}
	     	    			$(data.rows).map(function(){
	     	    				 var hoti=new preferential(this)
	     						 $scope.activity_list.push(hoti);
	     	    			})
	     	    	
	     	    			if(data.rows.length>=10){
	     	    				 $scope.load_l=true;//判断热门活动是否还有数据
	     	    			}else{
	     	    				 $scope.load_l=false;//判断热门活动是否还有数据
	     	    			}
	     	    			$(".sys-loading").removeClass("show_a")
	     	    		}, function error() {
	     					console.log("获取活动列表数据失败");
	     	    });
	        }
	        $scope.Hot_load=function(){//热门活动分页
	        	  if(!$scope.load_l){
	        		  $(".clkh_po").text("没有数据了...").removeClass("ls").addClass("zc")
	        		  return;
	        	  }
	        	  cty_date.pageIndex++;
	        	  $scope.query_activity(cty_date);//添加热门活动
	        }
	        $scope.query_activity(cty_date);//添加热门活动
		      /*活跃主办方*/
	        activity_data.get_userHot().then(
					function success(data) {
						$(".logo_ad").hide()
						if(data.code!=0){
							console.log(data.msg)
							return;
						}
						$(".dynamic_pou").show()
						$(data.info).map(function(){
							var  uhot=new getUserHot(this)
							$scope.user_hot.push(uhot)
						})
						
				}, function error() {
					console.log("活动主办获取失败")
			});
	        
	        /*轮播图遍历完之后执行*/
			$scope.$on('ngfinish', function(ngfinishEvent) {
                jQuery(".slider .bd li").first().before( jQuery(".slider .bd li").last() );
				jQuery(".slider").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".arrow").fadeOut(300) });
				jQuery(".slider").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, vis:3, autoPage:true, trigger:"click"});
				
			})
		}])
/*导航选中状态*/
$(".nav_li").eq(0).addClass("act");

$(".city_list_a li").on("click",function(){
	var caty_id=$(this).attr("data-id"),//获取城市ID
	 	caty_name=$(this).text();//获取城市ID
	localStorage.caty_id=caty_id
	localStorage.caty_name=caty_name
	location.reload();
})
	