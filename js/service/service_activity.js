/**
 * 活动页面数据接口
 */
angular.module('activity_servrt', []).
   service('activity_data', function($q,$http) {
	    this.banner_index = function(){
            var banner = $q.defer();
           $http.get('/activity/banner_activity').success(function(data){
        	   banner.resolve(data);
           }).error(function () {
        	   banner.reject();
           });
           return banner.promise;
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
	    /*首页统计数据*/
	    this.getStatisticsData = function(){
	    	var statistics_data = $q.defer();
	    	$http.get('/activity/query_index_data').success(function(data){
	    		  statistics_data.resolve(data);
	           }).error(function () {
	        	   statistics_data.reject();
	           });
	        return statistics_data.promise;
	    }
	    /*活跃主办方*/
	    this.get_userHot = function(){
            var hotuse = $q.defer();
           $http.get('/user/get_hot_sponsor').success(function(data){
        	   hotuse.resolve(data);
           }).error(function () {
        	   hotuse.reject();
           });
           return hotuse.promise;
         } 
	    
	    
	    
	    /*活动列表*/
        /**
         * 页码pageIndex 
         * 行pageSize
         * 活动类型  activity_type
         * 行业(industry_id)
         * 开始时间戳 startDate  
         * 结束时间戳 endDate
         * 是否收费is_free 
         * 标题  name
         * 城市 city
         * 按最新发布按钮筛选（PC端的）sort=1	
         * 最多点击筛选（PC端的）sort=2
         * 最多参与筛选（PC端的）sort=3
         */
	    this.query_activity_list = function(pageIndex,pageSize,activity_type,industry_id,startDate,endDate,is_free,name,city,sort,user_id,time_status){
            var y_list = $q.defer();
           $http.get('/activity/query_activity_list',{params:{"pageIndex":pageIndex,"pageSize":pageSize,"type":activity_type,"industry_id":industry_id,"startDate":startDate,"endDate":endDate,"freeType":is_free,"name":name,"city":city,"sort":sort,"user_id": user_id,"time_status":time_status,"status":0}}).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }
	    
	    
	    
	   /* 活动详情*/
	    this.activity_detail = function(activity_id){
            var detail = $q.defer();
           $http.get('/activity/activity_detail',{params:{"activity_id":activity_id}}).success(function(data){
        	   detail.resolve(data);
           }).error(function () {
        	   detail.reject();
           })
           return detail.promise;
         }
	    
        /*   免费活动报名*/
	    this.add_consumption = function(activity_id,form_data){
            var consumption = $q.defer();
           $http.post('/activity/add_consumption',{"activity_id":activity_id,"conDetail":form_data}).success(function(data){
        	   consumption.resolve(data);
           }).error(function () {
        	   consumption.reject();
           });
           return consumption.promise;
         }
	    

        /*   收费活动报名--微信*/
	    this.charge_consumption = function(data){
            var charge_consumption = $q.defer();
            $http.post('/consumption/wechat_charge_consumption',data).success(function(data){
        	   charge_consumption.resolve(data);
           }).error(function () {
        	   charge_consumption.reject();
           });
           return charge_consumption.promise;
         }
	   
	    /*   收费活动报名--e币*/
	    this.pay_consumption = function(data){
            var pay_consumption = $q.defer();
            $http.post('/consumption/e_pay_consumption',data).success(function(data){
            	pay_consumption.resolve(data);
           }).error(function () {
        	   pay_consumption.reject();
           });
           return pay_consumption.promise;
         }
	    
	    
	    
	    

	   /* 用户登录*/
	    this.phone_login = function(user_data){
            var login = $q.defer();
            $http.post('/user/phone_login',user_data).success(function(data){
        	   login.resolve(data);
            }).error(function () {
        	   login.reject();
            });
            return login.promise;
         }
	    
	    /* 退出登录*/
	    this.login_out = function(){
            var in_out = $q.defer();
            $http.get('/user/login_out').success(function(data){
            	in_out.resolve(data);
            }).error(function () {
            	in_out.reject();
            });
            return in_out.promise;
         }
	    
	    
         
          /* 验证手机号码*/
	    this.get_sms_code = function(code,user_phone){
            var sms_code = $q.defer();
            $http.post('/user/get_sms_code',{"code":code,"user_phone":user_phone}).success(function(data){
            	sms_code.resolve(data);
            }).error(function () {
            	sms_code.reject();
            });
            return sms_code.promise;
         }   
	    
	     /* 验证找回手机号码*/
	    this.get_sms_code_zhmm = function(code,user_phone){
            var sms_code = $q.defer();
            $http.post('/user/get_sms_code_zhmm',{"code":code,"user_phone":user_phone}).success(function(data){
            	sms_code.resolve(data);
            }).error(function () {
            	sms_code.reject();
            });
            return sms_code.promise;
         }
	    
	    
	    /* 用户注册*/
	    /**
	     * user_phone  电话
	     * user_password 加密密码
	     * sms_code 验证码
	     */
	    this.do_register = function(user_phone,user_password,sms_code,isRemember){
            var register = $q.defer();
            $http.post('/user/do_register',{"user_phone":user_phone,"user_password":user_password,"sms_code":sms_code}).success(function(data){
            	register.resolve(data);
            }).error(function () {
            	register.reject();
            });
            return register.promise;
         }
	    
	    /*个人中心获取基本信息*/
	    this.person_userDetail = function(){
            var userDe = $q.defer();
           $http.post('/user/get_user_info').success(function(data){
        	   userDe.resolve(data);
           }).error(function () {
        	   userDe.reject();
           });
           return userDe.promise;
         }
	    
	      /*个人中心修改基本信息*/
	    this.person_userDetailEdit = function(user_detail_edit){
            var userDeEd = $q.defer();
           $http.post('/user/update_user_info',user_detail_edit).success(function(data){
        	   userDeEd.resolve(data);
           }).error(function () {
        	   userDeEd.reject();
           });
           return userDeEd.promise;
         }
	    /*个人中心获取实名认证信息*/
	    this.person_getRealDetail = function(){
            var userReal = $q.defer();
           $http.post('/userDetail/get_user_detail').success(function(data){
        	   userReal.resolve(data);
           }).error(function () {
        	   userReal.reject();
           });
           return userReal.promise;
         }
	    /*个人中心修改实名认证信息*/
	    this.person_upDateRealDetail = function(user_real_edit){
            var userReal = $q.defer();
           $http.post('/userDetail/update_user_detail',user_real_edit).success(function(data){
        	   userReal.resolve(data);
           }).error(function () {
        	   userReal.reject();
           });
           return userReal.promise;
         }


	    /*活动留言查询*/
	    this.comment_list = function(source_id,pageIndex){
            var comment_l = $q.defer();
           $http.get('/comment/comment_list',{params:{"source_id":source_id,"pageIndex":pageIndex,"pageSize":100}}).success(function(data){
        	   comment_l.resolve(data);
           }).error(function () {
        	   comment_l.reject();
           });
           return comment_l.promise;
         }
	    /*插入留言*/
	    this.add_comment_data = function(source_id,comment_type,comment_content,superior,childsComment){
            var comment_data = $q.defer();
           $http.post('/comment/add_comment_data',{"source_id":source_id,"comment_type":comment_type,"comment_content":comment_content,"superior":superior,"childsComment":childsComment}).success(function(data){
        	   comment_data.resolve(data);
           }).error(function () {
        	   comment_data.reject();
           });
           return comment_data.promise;
         }
	    
	    /*参与*/
	    this.activity_id_by_consumption_list = function(activity_id,pageIndex,pageSize,text,check,order_id){
           var consumption_list = $q.defer();
           var code_use ;
           if(check){
        	  code_use = 2 ; // 已签到
           } 
           console.info(code_use);
           $http.get('/consumption/activity_id_by_consumption_list',
        		   {params:{"activity_id":activity_id,"status":"1","pageIndex":pageIndex,"pageSize":pageSize,"content_detail":text,"code_use":code_use,"order_id":order_id}
        		   }).success(function(data){
        	   console.info(data);
        	   consumption_list.resolve(data);
           }).error(function () {
        	   consumption_list.reject();
           });
           return consumption_list.promise;
         }
	    
	    
	    /*获取省份*/
	    this.provinceAll = function(){
            var province = $q.defer();
           $http.get('/addr/provinceAll').success(function(data){
        	   province.resolve(data);
           }).error(function () {
        	   province.reject();
           });
           return province.promise;
         }
	    /*获取城市*/
	    this.cityByProvince = function(province_id){
            var ince = $q.defer();
           $http.get('/addr/cityByProvince',{params:{"province_id":province_id}}).success(function(data){
        	   ince.resolve(data);
           }).error(function () {
        	   ince.reject();
           });
           return ince.promise;
         }	    
	    /*赞助列表*/
        /** 页码intpageIndex 
	     * 行（默认十条）intpageSize
	     * 行业(intindustry_id)
	     * 按最新发布按钮筛选（PC端的）sort=1
	     * 最热赞助筛选（PC端的）sort=2*/ 
	    this.query_sponsor_list = function(pageIndex,sort,industry_id,name){
            var y_list = $q.defer();
           $http.get('/support/support_list?pageIndex='+pageIndex+"&sort="+sort+"&industry_id="+industry_id+"&name="+name+"&pageSize=12").success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }
	   /* 发起活动*/
	   this.create_activity = function(data){
           var te_a = $q.defer();
          $http.post('/activity/create_activity',data).success(function(data){
        	  te_a.resolve(data);
          }).error(function () {
        	  te_a.reject();
          });
          return te_a.promise;
        }
		 /*  参与的活动*/
	   
	    this.join_activity = function(data){
           var join_activity = $q.defer();
          $http.get('/activity/my_join_activity',{params:data}).success(function(data){
       	   join_activity.resolve(data);
          }).error(function () {
       	   join_activity.reject();
          })
          return join_activity.promise;
        }
	 /*  我的活动*/
	   
	    this.my_activity_list = function(data){
            var my_activity = $q.defer();
           $http.get('/activity/query_activity_list',{params:data}).success(function(data){
        	   my_activity.resolve(data);
           }).error(function () {
        	   my_activity.reject();
           })
           return my_activity.promise;
         }
	    
	     /*赞助详情*/
        /** 
	     * supportid  赞助活动ID
	     * */
	    this.query_sponsor_detail = function(supportid){
            var y_list = $q.defer();
           $http.post('/support/support_detail?supportid='+supportid).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }
	    
	    /*赞助详情回报*/
	   this.query_sponsor_repay = function(repayjson){
            var y_list = $q.defer();
           $http.post("/support/pay_support",repayjson).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }
         
         /*赞助详情获取赞助用户列表*/
       
	    this.query_sponsor_user = function(pageIndex,pageSize,activity_support_id){
            var y_list = $q.defer();
           $http.post('/support/support_user_list?pageIndex='+pageIndex+'&pageSize='+pageSize+'&activity_support_id='+activity_support_id).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }
	    
	     /*赞助一级留言查询*/
	    this.comment_sponsor = function(source_id,comment_type,pageIndex){
            var comment_l = $q.defer();
           $http.get('/comment/comment_list?source_id='+source_id+'&comment_type='+comment_type+'&pageIndex='+pageIndex).success(function(data){
        	   comment_l.resolve(data);
           }).error(function () {
        	   comment_l.reject();
           });
           return comment_l.promise;
         }
	    
	 	    
	      
	    
	  /*  获取e币余额*/
	    this.user_ecoin = function(){
            var ecoin = $q.defer(); 
           $http.post('/eCoin/get_user_ecoin').success(function(data){
        	   ecoin.resolve(data);
           }).error(function () {
        	   ecoin.reject();
           })
           return ecoin.promise;
         }
		  /*  历史记录*/
	    this.trade_record = function(data){
            var e_record = $q.defer(); 
           $http.get('/eCoin/query_user_trade_record',{params:data}).success(function(data){
        	   e_record.resolve(data);
           }).error(function () {
        	   e_record.reject();
           })
           return e_record.promise;
         }
	    
		  /*  添加银行卡*/
	    this.bank_account = function(data){
            var k_account = $q.defer(); 
           $http.post('/bankAccount/add',data).success(function(data){
        	   k_account.resolve(data);
           }).error(function () {
        	   k_account.reject();
           })
           return k_account.promise;
         }
		  /*  查询银行卡*/
	    this.bank_query = function(){
            var k_query = $q.defer(); 
           $http.post('/bankAccount/query ').success(function(data){
        	   k_query.resolve(data);
           }).error(function () {
        	   k_query.reject();
           })
           return k_query.promise;
         }
		  /*  删除银行卡*/
	    this.bank_delete = function(account_id){
            var k_delete = $q.defer(); 
           $http.post('/bankAccount/delete',{"account_id":account_id}).success(function(data){
        	   k_delete.resolve(data);
           }).error(function () {
        	   k_delete.reject();
           })
           return k_delete.promise;
         }
	    
	    
	    
	    
		  /*  提现*/
	    this.cash_apply = function(data){
            var sh_apply = $q.defer(); 
           $http.post('/drawCashApply/apply',data).success(function(data){
        	   sh_apply.resolve(data);
           }).error(function () {
        	   sh_apply.reject();
           })
           return sh_apply.promise;
         }       
	    /*个人中心我发起的赞助*/
        /**int  pageIndex  页码
	     * int  pageSize行（默认十条）
	     * int  user_id   发起用户ID
         * int  status    0:保存、1:通过、2:拒绝、3:待审核、4:预热中、5:赞助中、6:赞助成功、7:赞助失败
         * int  timeStatus  1：未开始 2:进行中 3：已结束
         * 
	     */   
	    this.query_person_my_sponsor = function(pageIndex,user_id,status,timeStatus,name,pageSize){ 
	    	pageSize=pageSize==undefined?"":pageSize
            var y_list = $q.defer();
           $http.get('/support/support_list?pageIndex='+pageIndex+"&user_id="+user_id+"&status="+status+"&timeStatus="+timeStatus+"&pageSize="+pageSize).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }	
         
         
         /*个人中心我参与的赞助*/
        /**int  pageIndex   页码
         * int  filter      赞助状态（6已成功，7已失败）
         * int  timeStatus  时间状态（预热中(1) , 赞助中(2)）
	     */ 
	    this.query_person_my_attentsponsor = function(pageIndex,filter,timeStatus){
            var y_list = $q.defer();
           $http.get('/support/my_join_support?pageIndex='+pageIndex+"&filter="+filter+"&timeStatus="+timeStatus).success(function(data){
        	   y_list.resolve(data);
           }).error(function () {
        	   y_list.reject();
           })
           return y_list.promise;
         }	    
         
         	 /* 活动修改*/
	    this.update_activity = function(data){
            var update_activity = $q.defer(); 
           $http.post('/activity/update_activity',data).success(function(data){
        	   update_activity.resolve(data);
           }).error(function () {
        	   update_activity.reject();
           })
           return update_activity.promise;
         }   

	    
	    /*  e币充值*/
	    this.wxpay_topup = function(data){
            var topup = $q.defer(); 
           $http.post('/eCoin/wxpay_topup?channel=2&price='+data).success(function(data){
        	   topup.resolve(data);
           }).error(function () {
        	   topup.reject();
           })
           return topup.promise;
         }   
	    /*  票券详情*/
	    this.buy_ticket_info = function(data){
            var ket_info  = $q.defer(); 
           $http.get('/consumption/get_buy_ticket_info',{params:data}).success(function(data){
        	   ket_info .resolve(data);
           }).error(function () {
        	   ket_info .reject();
           })
           return ket_info.promise;
         } 
           	   
	    /* 	微信订单查询*/
	    this.by_orderid = function(data){
            var status_by  = $q.defer(); 
           $http.get('/wechat/query_pay_status_by_orderid',{params:data}).success(function(data){
        	   status_by .resolve(data);
           }).error(function () {
        	   status_by .reject();
           })
           return status_by.promise;
         } 
	    
	    
	    /* 	查询手机号是否注册*/
	    this.exist_phone = function(phone){
            var st_phone  = $q.defer(); 
           $http.get('/user/exist_phone',{params:{"phone":phone}}).success(function(data){
        	   st_phone .resolve(data);
           }).error(function () {
        	   st_phone .reject();
           })
           return st_phone.promise;
         } 
	    
          /* 发起赞助*/
	   this.create_support = function(data){
           var te_a = $q.defer();
          $http.post('/support/create_support',data).success(function(data){
        	  te_a.resolve(data);
          }).error(function () {
        	  te_a.reject();
          });
          return te_a.promise;
        }
	   
	   /*找回密码  验证短息码*/
	    this.verificationSmsCode = function(data){
           var nSmsCode  = $q.defer(); 
          $http.get('/user/verificationSmsCode',{params:data}).success(function(data){
        	  nSmsCode .resolve(data);
          }).error(function () {
        	  nSmsCode .reject();
          })
          return nSmsCode.promise;
        } 
	   
        /* 修改密码*/
	   this.sms_update_pwd = function(data){
           var update_pwd = $q.defer();
          $http.post('/user/sms_update_pwd',data).success(function(data){
        	  update_pwd.resolve(data);
          }).error(function () {
        	  update_pwd.reject();
          });
          return update_pwd.promise;
        }
       
	   /** 发送短信提醒 **/ 
	   this.send_sms = function(consumptionId){
		   console.info(consumptionId);
		var sendsms = $q.defer();
          $http.post('/activity/send_sms',consumptionId).success(function(data){
        	  sendsms.resolve(data);
          }).error(function () {
        	  sendsms.reject();
          });
          return sendsms.promise;
       }
	   

	   /** 群发短信提醒 **/ 
	   this.send_mass_sms = function(consumptionIds){
		   console.info(consumptionIds);
		var sendMassSms = $q.defer();
          $http.post('/activity/send_mass_sms',consumptionIds).success(function(data){
        	  sendMassSms.resolve(data);
          }).error(function () {
        	  sendMassSms.reject();
          });
          return sendMassSms.promise;
       }
	   
	   /** 个人中心导入数据   **/
	   this.import_data = function(activityId){
		   console.info(activityId);
		   var importData = $q.defer();
		   $http.post('/dataImport/reportDataView?activityId='+activityId).success(function(data){
			      importData.resolve(data);
	          }).error(function () {
	        	  importData.reject();
	          });
            return importData.promise;
	   }
	   
	   

		   
	   /** 发起活动白条功能 **/
	   this.loan_money = function(data){
           var update_pwd = $q.defer();
          $http.post('/baitiao/add_baitiao',data).success(function(data){
        	  update_pwd.resolve(data);
          }).error(function () {
        	  update_pwd.reject();
          });
          return update_pwd.promise;
        }
		   
	   /*签到墙*/
	    this.consumption_list_p = function(data){
          var ption_list  = $q.defer(); 
         $http.get('/consumption/activity_id_by_consumption_list',{params:data}).success(function(data){
        	 ption_list .resolve(data);
         }).error(function () {
        	 ption_list.reject();
         })
         return ption_list.promise;
       } 
	   
	    
	    
	    /*删除投票*/
	    this.vote_delete_p = function(data){
          var vote_delete  = $q.defer(); 
         $http.get('/vote/delete',{params:data}).success(function(data){
        	 vote_delete.resolve(data);
         }).error(function () {
        	 vote_delete.reject();
         })
         return vote_delete.promise;
       } 
	    /*删除单个投票*/
	    this.deltet_voteitem = function(data){
          var et_voteitem  = $q.defer(); 
         $http.get('/vote/deltet_voteitem',{params:data}).success(function(data){
        	 et_voteitem.resolve(data);
         }).error(function () {
        	 et_voteitem.reject();
         })
         return et_voteitem.promise;
       } 
	    /*修改投票*/
	    this.update_vote = function(data){
          var te_vote  = $q.defer(); 
         $http.post('/vote/update_vote',data).success(function(data){
        	 te_vote .resolve(data);
         }).error(function () {
        	 te_vote.reject();
         })
         return te_vote.promise;
       } 
	    
	    /*投票详情*/
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
	    
	    
	    /*
	     * 张晗
	     * 获取服务器数据
	     */
        this.getDatas = function (method, url, datas) {
            var deferred = $q.defer();
            $http({
                method: method || 'GET',
                url: url,
                data: datas
            })
            .success(function(response,status) {
                deferred.resolve(response);
            })
            .error(function(error, status){
                alert('服务器请求失败');
            });
            return deferred.promise;     
        }

        
        /* 活动后台修改*/
	    this.update_activity_a = function(data){
            var update_activity = $q.defer(); 
           $http.post('/activity_manage/update_activity',data).success(function(data){
        	   update_activity.resolve(data);
           }).error(function () {
        	   update_activity.reject();
           })
           return update_activity.promise;
         }  
	    
	    /* 主办方搜索*/
	    this.searchHo = function(data){
	           var query_page= $q.defer();
	          $http.get('/sponsor/sponsor_search_page',{params:data}).success(function(data){
	        	  query_page.resolve(data);
	          }).error(function () {
	        	  query_page.reject();
	          });
	          return query_page.promise;
	        }  
	    
	    /*主办方发起的活动*/
        this.person_li = function(data){
           var authorize= $q.defer();
          $http.get('/sponsor/sponsor_activity',{params:data}).success(function(data){
        	  authorize.resolve(data);
          }).error(function () {
        	  authorize.reject();
          });
          return authorize.promise;
        }
        
        /*主办方详情*/
        this.person_detail_info = function(data){
           var authorize= $q.defer();
          $http.get('/sponsor/sponsorapply_info',{params:data}).success(function(data){
        	  authorize.resolve(data);
          }).error(function () {
        	  authorize.reject();
          });
          return authorize.promise;
        }
        
        /*关注主办方*/
        this.exec_attention = function(data){
           var authorize= $q.defer();
          $http.get('/activity/exec_attention',{params:data}).success(function(data){
        	  authorize.resolve(data);
          }).error(function () {
        	  authorize.reject();
          });
          return authorize.promise;
        }
        
        /*取消关注主办方*/
        this.cancel_attention = function(data){
           var authorize= $q.defer();
          $http.get('/activity/cancel_attention',{params:data}).success(function(data){
        	  authorize.resolve(data);
          }).error(function () {
        	  authorize.reject();
          });
          return authorize.promise;
        }
	
	  
 })