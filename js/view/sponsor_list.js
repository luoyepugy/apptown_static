/**
 * 赞助列表
 */
angular.module('sponsor_list', [ "directive_mml","activity_servrt"])
.controller('sponsorController',["$scope","activity_data",function($scope,activity_data) {
	 $scope.spon_list=[];//赞助列表数据
     $scope.spon_results;//活动总数
     $scope.page_row=[];//活动总数
     $scope.arrStatus={"4":"预热中","5":"赞助中","6":"赞助成功","7":"赞助失败"}
     var name_til=$("#sponsor_title").val();//获取搜素的标题
     $("#seach_type").attr("data-type",1);
     for(var i=1;i<10;i++){
    	 $scope.page_row.push(i);
     }
      /** 页码intpageIndex 
     * 行（默认十条）intpageSize
     * 行业(intindustry_id)
     * 按最新发布按钮筛选（PC端的）sort=1
     * 最热赞助筛选（PC端的）sort=2*/  
     var oIndex=1  //初始化页码为第一页
     var oSort=1;  //初始化排序筛选为空  
     var gloabl_industy="";
     var seach_url=window.location.search;//获取问号后面的值

     var param = seach_url.split("?")[1];

     if(param!=null&&param!=""){param=param.split("=")[1]}
     var global_name="";
     if(param!=undefined){
    	 global_name=decodeURI(param);
     }
     
      $scope.list_fun={
	      	"demand":function(pageIndex,sort,industy,name){	
	      		$scope.spon_list=[];
	      		gloabl_industy=industy;
	      		global_name=name;
	      		 activity_data.query_sponsor_list(pageIndex,sort,industy,name).then(
			     	function success(data) {
			     		$(".tcdPageCode").createPage({
							pageCount:Math.ceil(data.results/12),//总页数
							current:pageIndex,//当前页数
							backFn:function(p){	//回调,p为当前页数
						     }
    					});	
			     		$scope.spon_results=data.results;
			     		$(data.rows).map(function(){
			     			var bandata= new sponsorList(this)
							$scope.spon_list.push(bandata)
			     		})
			   				
			   				}, function error() {
			   					console.log("获取列表失败")
			   				}
	             );
	      	},"fengye":function(){ //分页
	      		 $(".tcdPageCode").createPage({
						pageCount:10,
						current:oIndex,
						backFn:function(p){	
							oIndex=p
						    $scope.list_fun.demand(oIndex,oSort,gloabl_industy,global_name);  
						}
    				});		           
	            }
             ,
	      	"next_page":function(){//下一页
	      		$scope.spon_list=[];
	      		if(oIndex<$scope.spon_results/8){
	      			oIndex++;	
	      		}
	      		//industy="";
	      		$scope.list_fun.demand(oIndex,oSort,gloabl_industy,global_name);	 
	      	},
	      	"previous_page":function(){//上一页
	      		$scope.spon_list=[];
	      		if(oIndex>1){
	      			oIndex--;	
	      		}
	      		//industy="";
	      		$scope.list_fun.demand(oIndex,oSort,gloabl_industy,global_name);	
	      	},
	      	"newest_sort":function(){//最新赞助排序
	      		$scope.spon_list=[];
	      		//industy="";
	      		oIndex=1;
	      		oSort=1;
	      		$scope.list_fun.demand(oIndex,oSort,gloabl_industy,global_name);
	      	},
	      	"hotest_sort":function(){//最热赞助排序
	      		$scope.spon_list=[];
	      		//industy="";
	      		oIndex=1;
	      		oSort=2;
	      		$scope.list_fun.demand(oIndex,oSort,gloabl_industy,global_name);
	      	},
	      	"industy_search":function(industy){
	      		$scope.spon_list=[];
	      		oIndex=1;
	      		gloabl_industy=industy;
	      		if(industy==0){
	      			 $scope.list_fun.newest_sort();
	      		}else{
	      			$scope.list_fun.demand(oIndex,oSort,industy,global_name);
	      		}
				
	      	}
      	
      } 
      $scope.list_fun.newest_sort(1,1,"","");
       $scope.list_fun.fengye()
}])

$(function(){
	$(".nav_li").eq(2).addClass("act");
	$('.j-navCity').addClass('none').prev('a').removeClass('none');
	
	$(".list_oiuy_a a").on('click',function(){
		$(".list_oiuy_a a").removeClass('act');
		$(this).addClass('act');
	})
	 $(".list_oiuy_a a").eq(0).addClass("act")//默认分类筛选选中全部按钮
})
