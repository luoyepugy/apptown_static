/**
 * 活动页面数据接口
 */
angular.module('activity_servrt', []).
   service('activity_data', function($q,$http) {
	  /* 活动轮播图*/
	    this.banner_index = function(){
            var banner = $q.defer();
           $http.get('/activity/banner_activity').success(function(data){
        	   banner.resolve(data);
           }).error(function () {
        	   banner.reject();
           });
           return banner.promise;
         }
	    
	    /* 首页3条数据*/
	    this.activityIndex = function(){
            var atc_Index = $q.defer();
           $http.get('/activity/initActivityIndex').success(function(data){
        	   atc_Index.resolve(data);
           }).error(function () {
        	   atc_Index.reject();
           });
           return atc_Index.promise;
         }
	    
	    
	  /* 活动列表*/
	   this.query_activity_list = function(data){
           var activity_list = $q.defer();
          $http.get('/activity/query_activity_list',{params:data}).success(function(data){
        	  activity_list.resolve(data);
          }).error(function () {
        	  activity_list.reject();
          });
          return activity_list.promise;
        }
	   
	   
	   /* 票卷列表*/
	   this.queryTicketList = function(data){
           var TicketList = $q.defer();
          $http.get('/activity/queryTicketList',{params:data}).success(function(data){
        	  TicketList.resolve(data);
          }).error(function () {
        	  TicketList.reject();
          });
          return TicketList.promise;
        }
	   
	   /*热门活动*/
	    this.getActivityHot = function(){
           var activity_hot = $q.defer();
          $http.get('/activity/get_activity_hot').success(function(data){
       	   activity_hot.resolve(data);
          }).error(function () {
       	   activity_hot.reject();
          });
          return activity_hot.promise;
        }
	    
	    
	    /*赞助列表*/
	    this.support_list = function(data){
           var port_li = $q.defer();
          $http.get('/activity_support/support_list',{params:data}).success(function(data){
        	  port_li.resolve(data);
          }).error(function () {
        	  port_li.reject();
          });
          return port_li.promise;
        }
	    
	    /*登陆*/
	    this.userLogin = function(data){   

           var port_li = $q.defer();
          $http.post('/user/phone_login',data).success(function(data){
        	  port_li.resolve(data);
          }).error(function () {
        	  port_li.reject();
          });
          return port_li.promise;
        }
	    /*是否登陆*/
	    this.verifyUserLogin = function(account,password){
           var serLog = $q.defer();
          $http.get('/user/verifyUserLogin').success(function(data){
        	  serLog.resolve(data);
          }).error(function () {
        	  serLog.reject();
          });
          return serLog.promise;
        }
	     /*白条功能*/
	    this.loan_money=function(data){
           var port_li = $q.defer();
          $http.post('/baitiao/add_baitiao',data).success(function(data){
        	  port_li.resolve(data);
          }).error(function () {
        	  port_li.reject();
          });
          return port_li.promise;
        }
	    /*注册短息验证码*/
	    this.registerCode = function(phone,code){
           var terCode = $q.defer();
          $http.post('/user/registerCode?phone='+phone+"&code="+code).success(function(data){
        	  terCode.resolve(data);
          }).error(function () {
        	  terCode.reject();
          });
          return terCode.promise;
        }

	

	    
	    /*注册*/
	    this.doRegister = function(data){
           var Register = $q.defer();
          $http.post('/user/doRegister',data).success(function(data){
        	  Register.resolve(data);
          }).error(function () {
        	  Register.reject();
          });
          return Register.promise;
        }

	    /*获取用户信息*/
	    this.selectOne = function(data){
           var ectOne = $q.defer();
          $http.get('/userDetail/selectOne',{params:data}).success(function(data){
        	  ectOne.resolve(data);
          }).error(function () {
        	  ectOne.reject();
          });
          return ectOne.promise;
        }
	    /*退出登录*/
	    this.clear_cookie = function(data){
           var r_cooki = $q.defer();
          $http.get('/user/clear_cookie',{params:data}).success(function(data){
        	  r_cooki.resolve(data);
          }).error(function () {
        	  r_cooki.reject();
          });
          return r_cooki.promise;
        }
	    /*修改密码*/
	    this.updateUserInfo = function(data){
           var userInfo = $q.defer();
          $http.post('/user/update_pwd',data).success(function(data){
        	  userInfo.resolve(data);
          }).error(function () {
        	  userInfo.reject();
          });
          return userInfo.promise;
        }
	    /*修改资料*/
	    this.updateUserInfo_to = function(user_id,user_name,user_sex,industryId,user_sign){
           var Info_to =  $q.defer();
          $http.post('/user/update_user_info?user_id='+user_id+"&user_name="+user_name+"&user_sex="+user_sex+"&industryId="+industryId+"&user_sign="+user_sign).success(function(data){
        	  Info_to.resolve(data);
          }).error(function () {
        	  Info_to.reject();
          });
          return Info_to.promise;  
        }
	    
	    /*个人中心我 的活动*/
	    this.myTakePartInActivity = function(data){
           var PartInActivity = $q.defer();
          $http.get('/activity/my_join_activity',{params:data}).success(function(data){
        	  PartInActivity.resolve(data);
          }).error(function () {
        	  PartInActivity.reject();
          });
          return PartInActivity.promise;
        }
	    /*收藏我 的活动*/
	    this.myAtteActivityData = function(data){
           var ActivityData = $q.defer();
          $http.get('/activity/my_collect_activity',{params:data}).success(function(data){
        	  ActivityData.resolve(data);
          }).error(function () {
        	  ActivityData.reject();
          });
          return ActivityData.promise;
        }
	    /*发起的 的活动*/
	    this.myLaunchActivity = function(data){
           var chActivity = $q.defer();
          $http.get('/activity/query_activity_list_h5',{params:data}).success(function(data){
        	  chActivity.resolve(data);
          }).error(function () {
        	  chActivity.reject();
          });
          return chActivity.promise;
        }
	    
	    /*意见反馈*/
	    this.add_feedback = function(data){
           var eedback = $q.defer();
          $http.post('/feedback/add_feedback?content='+data).success(function(data){
        	  eedback.resolve(data);
          }).error(function () {
        	  eedback.reject();
          });
          return eedback.promise;
        }
	    
	    /*我发起的赞助*/
	    this.my_launch_support = function(data){
           var nch_support = $q.defer();
          $http.get('/activity_support/my_launch_support',{params:data}).success(function(data){
        	  nch_support.resolve(data);
          }).error(function () {
        	  nch_support.reject();
          });
          return nch_support.promise;
        }
	    /*我参与的赞助*/
	    this.my_takein_support = function(data){
           var support = $q.defer();
          $http.get('/activity_support/my_takein_support',{params:data}).success(function(data){
        	  support.resolve(data);
          }).error(function () {
        	  support.reject();
          });
          return support.promise;
        }
	    
	    /*我参与的赞助详情*/
	    this.takein_detail = function(data){
           var ein_detail  = $q.defer();
          $http.get('/activity_support/takein_detail',{params:data}).success(function(data){
        	  ein_detail .resolve(data);
          }).error(function () {
        	  ein_detail .reject();
          });
          return ein_detail.promise;
        }
	    /*我参与的支付详情*/
	    this.order_detaill = function(data){
           var detaill  = $q.defer();
          $http.get('/activity_support/order_detail?pay_id='+data).success(function(data){
        	  detaill .resolve(data);
          }).error(function () {
        	  detaill .reject();
          });
          return detaill.promise;
        }
	    /*活动详情*/
	    this.query_consumption_user_list = function(data){
           var on_user_list   = $q.defer();
          $http.get('/activity/query_consumption_user_list',{params:data}).success(function(data){
        	  on_user_list  .resolve(data);
          }).error(function () {
        	  on_user_list  .reject();
          });
          return on_user_list .promise;
        }
	    
	    
	    
	    /*个人中心我的白条*/
	    this.query_page_p = function(data){
           var query_page= $q.defer();
          $http.get('/baitiao/query_page',{params:data}).success(function(data){
        	  query_page.resolve(data);
          }).error(function () {
        	  query_page.reject();
          });
          return query_page.promise;
        }



        // 获取服务器数据
        this.getDatas = function (method, url, datas) {
            var deferred = $q.defer();
            $http({
                method: method || 'GET',
                url: url,
                data: datas
            })
            .success(function(response,status) {
                // if(response.code == 0 && response.msg != null) {
                //     mui.alert(response.msg,'E场景活动', function() {});
                // } else {
                    deferred.resolve(response);
                // }
            })
            .error(function(error, status){
                mui.alert('服务器请求失败','E场景活动', function() {});
            });
            return deferred.promise;     
        }

        /*个人中心投票详情*/
        this.query_vote_p = function(data){
           var query_page= $q.defer();
          $http.get('/vote/query_vote_detail',{params:data}).success(function(data){
              query_page.resolve(data);
          }).error(function () {
              query_page.reject();
          });
          return query_page.promise;
        }
        
        /*个人中心执行投票*/
        this.query_vote_do = function(data){
           var query_page= $q.defer();
          $http.get('/vote/execute_vote',{params:data}).success(function(data){
              query_page.resolve(data);
          }).error(function () {
              query_page.reject();
          });
          return query_page.promise;
        }
   })
   
   
   
   
   
   