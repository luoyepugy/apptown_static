angular.module('searchHostMain',["directive_mml","activity_servrt"])
.controller('searchHost',["$scope","activity_data",function($scope,activity_data) {//主办方搜索
	$('.j-navCity').addClass('none').prev('a').removeClass('none');
	 $(".dropdown_toggle_o").html('活动号'+' <span class="caret"></span>')
	var form_json={};//传过去的json
	form_json.pageIndex=1;//初始化页码
	form_json.name=decodeURI(window.location.search.split("host_title=")[1]);//搜索的关键词
	 $("#suosuo_p").val(form_json.name);
	form_json.pageSize=12;//行数
	var user_P=[];
	$scope.person;
	$scope.activity_hot=[];//推荐活动 
	$scope.page_row=[];
	$("#seach_type").attr("data-type",1);
    for(var i=1;i<10;i++){
   	 $scope.page_row.push(i);
    }
    
    $scope.searchList={
    		"base":function(form_json){
    			$scope.page_row=[];
    			user_P=[];
		    	for(var i=form_json.pageIndex;i<(form_json.pageIndex+9);i++){
		    		$scope.page_row.push(i);
		    	}
    			activity_data.searchHo(form_json).then(//搜索主办方
    					function success(data) {
    						$(data.rows).map(function(){
    							var ar= new search_host(this);
    							user_P.push(ar)
    						})
    						$(".tcdPageCode").createPage({
								pageCount:Math.ceil(data.results/12),//总页数
								current:form_json.pageIndex,//当前页数
								backFn:function(p){	//回调,p为当前页数												      
								}
    						});	 
    						if(user_P.length>0){
    							$('.tcdPageCode').show();
    						}else{
    							$('.tcdPageCode').hide();
    						}
    						$scope.person=user_P;
    						$scope.pResult=data.results;
    					}, function error() {
    						console.log("获取用户基本信息失败")
    			});
    		},
    		"act_assign":function(page_number){
    			 form_json.pageIndex=page_number;
    	    	   $scope.searchList.base(form_json);
    		},"fengye":function(){ //分页
                $(".tcdPageCode").createPage({
					pageCount:10,
					current:form_json.pageIndex,
					backFn:function(p){	
						form_json.pageIndex=p
						$scope.searchList.base(form_json) 
					}
				});	
        }
            ,
    		"next_page":function(){
    			form_json.pageIndex+=1
	    	   $scope.searchList.base(form_json);
		      },
		      "previous_page":function(){
		    	  form_json.pageIndex-=1
	  	    	   $scope.searchList.base(form_json);
	  		   }
    }
    $scope.searchList.base(form_json)
     $scope.searchList.fengye()
	
	 activity_data.getActivityHot().then(//推荐活动
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

}])

