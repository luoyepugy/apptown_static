/**
 * 活动实体类
 */

/*首页轮播图*/
function indexbanner(id,banner_url){
	this.id=id;//活动首页轮播图的ID
	this.banner_url=banner_url;//活动首页轮播图的地址
}
/*首页热门活动*/
function preferential(getActivityHot){
	this.id=getActivityHot.activity_id;//活动ID
	this.activity_title=getActivityHot.activity_title;//活动标题
	this.activity_time=getActivityHot.activity_time;//活动时间开始时间
	this.activity_number=getActivityHot.activity_number;//报名人数
	this.activity_first_face=getActivityHot.activity_first_face;//活动第一张封面
	this.activity_address="地点："+(getActivityHot.city_name==null?"":getActivityHot.city_name)+ getActivityHot.activity_address;//活动地址
	if(getActivityHot.type==10){
		if(getActivityHot.activity_address.indexOf("地点")>=0){
			this.activity_address=getActivityHot.activity_address
		}else{
			this.activity_address="地点："+getActivityHot.activity_address//活动地址  
		}  
	
	} 
	this.sponsorImageUrl=getActivityHot.sponsor_image_url;//主办方名头像
	this.sponsorName=getActivityHot.sponsor_name;//主办方名称target_amount
	this.browse_count=getActivityHot.browse_count;
	 
	this.support_id=getActivityHot.support_id==null?0:getActivityHot.support_id     //关联赞助ID
	this.target_money=getActivityHot.target_money==null?0:getActivityHot.target_money  //目标金额
	this.now_money=getActivityHot.now_money==null?0:getActivityHot.now_money     //已筹金额
	this.schedule=getActivityHot.schedule==null?"0%":getActivityHot.schedule         // 进度
		
	/*随机id*/
	var rand_a= Math.floor(Math.random()*100000);
	 if(rand_a<10000){
	        rand_a+=10000;
	 }
	rand_a=rand_a+""+getActivityHot.id+""+rand_a;
	this.j_id=rand_a; 
}

/*首页活动统计数据*/
function getStatisticsData(StatisticsData){
	this.activity_sum = StatisticsData.activity_sum ;
	this.user_sum     = StatisticsData.user_sum ;
	this.sponsor_sum  = StatisticsData.sponsor_sum+5000000 ;
}


/*活跃主办方*/
function getUserHot(UserHot){
	this.user_id=UserHot.user_id;//活动id
	this.user_icon=UserHot.user_icon;//主办方头像
	this.user_name=UserHot.user_name;//主办方名称
	this.user_sign=UserHot.user_sign;//主办方简介
	this.activity_sum=UserHot.activity_sum;//主办方发布活动总数
	this.attenton_sum=UserHot.attenton_sum;//主办方被关注次数
}

/*活动列表*/
function query_activity_list(list_data){
	var rand_a= Math.floor(Math.random()*100000)
	 if(rand_a<10000){
	        rand_a+=10000
	 }
	
	this.id=list_data.id;//活动ID
	this.id_p=list_data.id;//活动ID
	this.id=rand_a+""+this.id+""+rand_a
	this.activity_first_face=list_data.activity_first_face;//活动第一张封面
	this.activity_title=list_data.activity_title;//活动标题 
	this.activity_address=list_data.activity_address;//活动地址
	this.activity_time=list_data.activity_time;//活动时间
	this.activity_number=list_data.activity_number;//报名人数
	this.is_free=list_data.is_free;//是否有票种
	this.activity_money=list_data.activity_money;//票种价格
	this.browseCount=list_data.browse_count;//活动浏览次数（PC端的）
	this.sponsorImageUrl=list_data.sponsor_image_url;//主办方头像（PC端的）
	this.sponsorName=list_data.sponsor_name;//主办方名字（PC端的）
	this.type=list_data.type;//活动类型
	this.start_time=list_data.start_time;//活动开始时间
	this.end_time=list_data.end_time;//活动结束时间   
	this.status=list_data.status;//发布状态
   this.support_id=list_data.support_id;
   this.order_id=list_data.order_id;
   this.city_name=list_data.city_name;//城市
   this.type=list_data.type;
   this.now_money=list_data.now_money;//已筹金额
   this.target_money=list_data.target_money;//目标金额
   this.schedule=list_data.schedule;//赞助进度
}


/*活动详情*/
  function activity_detail(info){
	  this.images_po=info.cover_url;//活动详情轮播图
	  this.title=info.name;//活动详情轮标题
	  this.browse_count=info.scan;//活动详情浏览次数
	  this.join_count=info.join_count;//活动详情参与人数
	  this.industry_id=info.industry_id;//活动详情行情ID
	  this.address=info.address;//活动详情地址
	  this.startDate=info.start_time_fm;//活动开始时间
	  this.endDate=info.end_time_fm;//活动结束时间 
	  this.sDate_time=info.start_time;//活动开始时间
	  this.eDate=info.end_time;//活动结束时间
	  this.person_limit=info.person_limit;//活动活动席位（人数上限）
	  this.sponsor_head=info.sponsor_head;//活动主办方头像
	  this.sponsor_name=info.sponsor_name;//主办方姓名
	  this.sponsor_user_id=info.sponsor_user_id;//主办方id
	  this.honored_guest=info.honored_guest;//活动嘉宾数据
	  this.details=info.details;//活动详情
	  this.consumption_count=info.consumption_count;//活动报名人数
	  this.comment_count=info.comment_count;//活动评论总数量
	  this.ticket_list=info.ticket_list;//活动票种数据
	  this.detail_config=info.form_config;//活动表单
	  this.status=info.status;//活动发布状态  0=发布 1保存
	  this.province_name=info.province_name;//省份
	  this.city_name=info.city_name;//城市
	  this.city=info.city;//城市id
	  this.type=info.type;//活动类型
	  this.contact_way=info.contact_way;//联系方式
	  this.is_applay=info.is_applay;//活动是否报名
	  this.sign_count = info.sign_count ; // 签到总人数
	  this.unsign_count = info.unsign_count ; // 未签到总人数
	  this.live_url=info.live_url; // 视频直播地址
	  this.sponsor_url=info.sponsor_url; // 二维码
	  this.vote=info.vote;//投票
	  var consumption_list=[];//自己购买的票卷
	  $(info.consumption_list).map(function(){
		  var consump_info_name={}
		  consump_info_name.order_id=this.order_id //订单号 
		  this.code_use==1?consump_info_name.code_use="未使用":consump_info_name.code_use="已使用"
		 /* consump_info_name.code_use=this.code_use //是否使用
*/		  consump_info_name.entry_code=this.entry_code //票号
		  consump_info_name.ticket_id=this.ticket_id  //票ID
		  consump_info_name.ticket_name=this.ticket_name //票名称
		  consump_info_name.ticket_price=this.ticket_price //票价格
		  consump_info_name.consump_info_name=this.consump_info_name //报名人姓名
		  consump_info_name.consump_info_tel=this.consump_info_tel//报名人手机
		  consump_info_name.consump_info_time=this.consump_info_time;//购买时间
		  consumption_list.push(consump_info_name);
	  })
       this.consumption_list=consumption_list;
	  this.support_id=info.support_id//赞助关联ID
	  this.type=info.type;
	  this.sponsor_auth=info.sponsor_auth;//是否关注主办方，0为未关注，1为已关注
	  
	  
	  
  }
  
  /*个人中心获取基本信息*/
  function personUserDetail(UserDetail){
  	this.user_id=UserDetail.user_id;//用户ID
  	this.user_account=UserDetail.user_account;//用户账号
  	this.user_name=UserDetail.user_name;//用户名
  	this.user_password=UserDetail.user_password;//用户密码
  	this.user_pwd=UserDetail.user_pwd;//用户明文密码
  	this.user_type=UserDetail.user_type;//用户类型
  	this.user_sex=UserDetail.user_sex;//用户性别
  	this.user_icon=UserDetail.user_icon;//用户头像
  	this.user_sign=UserDetail.user_sign;//用户签名
  	this.user_qq=UserDetail.user_qq;//用户qq
  	this.user_wechat=UserDetail.user_wechat;//用户微信
  	this.user_activeCode=UserDetail.user_activeCode;//激活码
  	this.user_email=UserDetail.user_email;//用户邮箱
  	this.user_phone=UserDetail.user_phone;//用户电话
  	this.user_introduce=UserDetail.user_introduce;//个人简介
  	this.login_time=UserDetail.login_time;//登录时间
  	this.user_status=UserDetail.user_status;//用户状态
  	this.create_time=UserDetail.create_time;//创建时间
  	this.openId=UserDetail.openId;//微信登录openid
  	this.unionId=UserDetail.unionId;//微信登录unionId
  	this.industryId=UserDetail.industryId;//感兴趣行业
  	this.pc_openId=UserDetail.pc_openId;//pc端登录Id
  	this.h5_openId=UserDetail.h5_openId;//h5端登录Id
  	this.weibo_Id=UserDetail.weibo_Id;//新浪微博Id
  	this.day_sum=UserDetail.day_sum;//日注册数量
  	this.week_sum=UserDetail.week_sum;//周注册数量
  	this.month_sum=UserDetail.month_sum;//月注册数量
  	this.all_num=UserDetail.all_num;//注册总数
  	this.day_sum_per=UserDetail.day_sum_per;//日注册数量百分比
  	this.week_sum_per=UserDetail.week_sum_per;//周注册数量百分比
  	this.month_sum_per=UserDetail.month_sum_per;//月注册数量百分比
	this.day_all_sum=UserDetail.day_all_sum;//日累计注册人数
	this.date_statis=UserDetail.date_statis;//统计日期
	this.date_start=UserDetail.date_start;//开始日期
	this.date_end=UserDetail.date_end;//结束日期
	this.startIndex=UserDetail.startIndex;//开始索引
	this.pageSize=UserDetail.pageSize;//页码
  }
  /*个人中心获取实名认证信息*/
  function getUserRealDetail(der){
	  if(der!=null){
		  this.user_detail_id=der.user_detail_id;//用户详细信息编号
		  this.user_id=der.user_id;//用户ID
		  this.identity_id=der.identity_id;//用户身份证号
		  this.real_name=der.real_name;//真实姓名
		  this.age=der.age;//用户年龄
		  this.birthday=der.birthday;//用户生日
		  this.address=der.address;//用户地址
		  this.contact_info=der.contact_info;//用户联系方式
		  this.creator=der.creator;//用户创建者
		  this.create_date=der.create_date;//用户创建时间
		  this.updater=der.updater;//编辑人
		  this.update_date=der.update_date;//编辑时间
		  this.status=der.status;//状态（3:待审核、1:通过、2:拒绝）
		  this.is_stock_fund=der.is_stock_fund;//是否开通股权众筹（1:开通,2:不开通）
		  this.email=der.email;//邮箱
		  this.remark=der.remark;//备注	
	  }
	}

/*活动详情留言*/
  function comment_list_f(rows){
	 this.id= rows.id;  //评论编号
	 this.source_id= rows.source_id;  //来源编号
	 this.childsComment= rows.childsComment;  //二级留言
	 this.comment_type= rows.comment_type;  //【0:案例,1:活动,2:众筹,3:设计师】
	 this.user_id= rows.user_id;  //评论者
	 this.comment_content= rows.comment_content; //评论内容
	 this.create_time= rows.create_time; // 创建时间 
	 this.status= rows.status;   //【0:审核中,1:审核通过,2:审核未通过】
	 this.superior=rows.superior;  //上级
	 this.user_name=rows.user_name;  //用户名
	 this.user_icon=rows.user_icon;  //用户头像
  }
/*  
  参与人数*/
  function activity_id_by_consumption_list(rows){
	  this.consumptionId=rows.consumptionId;// consumptionId
	  this.user_icon=rows.user_icon ;//用户头像
	  this.nick_name=rows.nick_name ; //昵称
	  this.phone=rows.phone ;//电话
	  this.timestamp=rows.timestamp ;//报名时间戳
	  this.entry_code=rows.entry_code ; //票券号
	  this.price = rows.price ; // 票价
	  this.order_num = rows.order_num; //订单号
	  this.ticket_name = rows.ticket_name ; // 票券名	
	  this.sign_status = rows.sign_status ; // 票券状态
	  this.from_array=[];  // 报名具体数据  
	  for (var key in  rows.from_info )
	  {  
		  var _from={};
		  _from.key=key;
		  _from.val=rows.from_info[key];
		  this.from_array.push(_from);
	  }
	  this.is_remind = rows.is_remind ; // 是否发送短信 0--已发短信 1--未发短信
  }
  
  /** ticket 票券 **/
  function ticket(rows){
	 
	  this.id=rows.id;                   // id
	  this.activity_id=rows.activity_id ;//activity_id
	  this.name=rows.name ;              //名称
	  this.price=rows.price ;            //价格
	  this.sum_num=rows.sum_num ;        //总数量 
	  this.use_num=rows.use_num ;        //购买数量
	  this.remark = rows.remark ;        //备注
	  this.create_time = rows.create_time; // 创建时间 
	 
  }
  
  
  /*发起活动*/
  function promotional_activities_data(data){
	 this.name= data.name;//活动名称
	 this.poster=data.poster;//活动封面
	 this.startDate=data.startDate;//开始时间戳
	 this.endDate=data.endDate;//结束时间戳
	 this.city=data.city;//活动城市
	 this.address=data.address;//详细地址
	 this.type=data.type;//活动类型
	 this.industry_id=data.industry_id;//行业
	 this.contact_way=data.contact_way;//联系方式
	 this.details= data.details;//详情 
	 this.person_limit= data.person_limit;//人数限制
	 this.ticket_array= data.ticket_array;//票卷
	 this.form_config=data.form_config;//表单
	 this.honored_gues= data.honored_gues;//活动嘉宾
  }
   /*赞助列表*/
  function sponsorList(data){
  	var rand_a= Math.floor(Math.random()*100000)
	 if(rand_a<10000){
	        rand_a+=10000
	 }
	this.id_p=rand_a+""+data.id+""+rand_a	 
  	this.id=data.id;//赞助ID
  	this.covers=data.covers;//赞助封面
  	this.title=data.title;//赞助标题
  	this.target_amount=data.target_amount;//赞助目标金额
  	if(this.target_amount>10000){
  		this.target_amount=(this.target_amount/10000).toFixed(1)+"万"
  		
  	}
  	this.now_money=data.now_money;//赞助已筹金额
  	this.status=data.status;//赞助状态
  	this.schedule=data.schedule;//赞助进度
  	this.end_time=data.end_time;//赞助结束时间    
  	this.timeStatus1=data.timeStatus1;//赞助时间状态  
  }
  /*赞助详情*/
   function sponsorDetail(data){
  	this.poster=data.poster;//赞助封面（数组形式返回）
  	this.name=data.name;//赞助标题
  	this.browse_count=data.browse_count;//赞助浏览量
  	this.join_count=data.join_count;//赞助参加人数
  	this.target_amount=data.target_amount.toFixed(2);//赞助目标金额
  	this.status=data.status;//赞助状态
  	this.schedule=data.schedule;//赞助进度
  	this.now_money=data.now_money;//赞助已筹金额
  	this.industry_id=data.industry_id;//赞助行业ID
  	this.sponsor_head=data.sponsor_head;//赞助主办方头像
  	this.sponsor_name=data.sponsor_name;//赞助主办方名称
  	this.sponsor_user_id=data.sponsor_user_id;//主办方用户ID
  	this.start_time=data.start_time;//赞助开始时间
  	this.end_time=data.end_time;//赞助结束时间  
  	this.content_details=data.content_details;//赞助内容详情   
  	this.support_repay_array=data.support_repay_array;//赞助回报（数组形式返回）
  	this.end_time_fm=data.end_time_fm;//赞助开始时间  
  	this.start_time_fm=data.start_time_fm;//赞助结束时间
  }
   
   /*赞助详情获取赞助用户列表*/
  function sponsorUser(data){
  	this.user_icon=data.user_icon;//用户头像
  	this.nick_name=data.nick_name;//用户名字
  	this.phone=data.phone;//用户电话
  	this.timestamp=data.timestamp;//用户支付时间
  	this.amount=data.amount;//用户支付金额
  }
  
  /*赞助详情获取回报数据*/
 function sponsorRepay(){
 	
 }
 /* 个人中心历史记录*/
  function history(data){
	  this.trade_id=data.trade_id;// 交易ID
	  this.trade_time=data.trade_time ;//交易时间
	  this.user_id=data.user_id;// 用户ID
	  this.trade_balance=data.trade_balance;// 交易金额（负数表示支出） 
	  this.trade_amount= data.trade_amount;//  余额
	  this.trade_type= data.trade_type;// 0--充值  1--支出
	  if( this.trade_type==0){
		  this.trade_balance= "+"+this.trade_balance
	  }else   if( this.trade_type==1){
		  this.trade_balance= "-"+this.trade_balance
	  }
	  var re_poi="";
	  switch(data.re_way){
	     case 0:re_poi='e币';break;
	     case 1:re_poi='支付宝';break;
	     case 2:re_poi='微信';break;
	     case 3:re_poi='银联';break;
	  }
	  this.re_way=re_poi// 交易方式 （如果为空，，则前端需要显示为"E币"）  1--支付宝 2--微信 3--银联 
	  this.re_remark=data.re_remark  //  交易备注
	  this.order_id=data.order_id
	  if(this.re_remark==""){
		  this.re_remark="--"
	  }
  }
  
/*  银行卡信息*/
  function query_bn(data){
	  this.account_id=data.account_id;//账户ID
	  this.user_id=data.user_id;//用户ID
	  this.bank_account=data.bank_account;//卡号
	  this.bank_name=data.bank_name;//银行名称
	  this.holder=data.holder;//持卡分姓名
	  this.create_date=data.create_date;//创建时间
	  this.creator=data.creator;//创建者
  }
  
  /*个人中心我发起的的赞助*/
    function personMySponsor(data){
    var rand_a= Math.floor(Math.random()*100000)
	 if(rand_a<10000){
	        rand_a+=10000
	 }
	this.id_p=rand_a+""+data.id+""+rand_a	
  	this.id=data.id;//赞助ID
  	this.covers=data.covers;//赞助封面
  	this.title=data.title;//赞助标题
  	this.target_amount=data.target_amount;//赞助目标金额
  	this.now_money=data.now_money;//赞助已筹金额
  	this.status=data.status;//赞助状态
  	this.schedule=data.schedule;//赞助进度
  	this.end_time=data.end_time;//赞助结束时间    
  	this.timeStatus1=data.timeStatus1;//赞助时间状态  
  	this.images=data.images;//赞助时间状态  
  	this.pay_time=data.pay_time;//支付时间
   	this.my_pay_money=data.my_pay_money;//支付金额
   	this.order_id=data.order_id;//订单号码
   	this.num=data.num;//订单数量
   	this.repay_content=data.repay_content;//回报内容
   	this.repay_time=data.repay_time;//回报时间
   	this.create_support_user_name=data.create_support_user_name;//赞助发起人名字
   	this.create_support_phone=data.create_support_phone;//赞助发起人手机号码	
   	this.create_date=data.create_date;//创建时间        
  }   
    /*个人中心我参与的的赞助*/
   function personMyAttentSponsor(data){
   	var rand_a= Math.floor(Math.random()*100000)
	 if(rand_a<10000){
	        rand_a+=10000
	 }
	this.id_p=rand_a+""+data.id+""+rand_a
	this.id=data.id;//赞助ID
   	this.covers=data.covers;//赞助封面
   	this.title=data.title;//赞助标题
   	this.now_money=data.now_money;//赞助已筹金额
   	this.total_money=data.total_money;//赞助目标金额
   	this.start_time_fm=data.start_time_fm;//赞助开始时间
   	this.start_time=data.start_time;//赞助开始时间戳
   	this.end_time_fm=data.end_time_fm;///赞助结束时间    
   	this.end_time=data.end_time;//赞助结束时间戳
   	this.schedule=data.schedule;//赞助进度
   	this.status=data.status;//赞助状态
   	this.pay_time=data.pay_time;//支付时间
   	this.my_pay_money=data.my_pay_money;//支付金额
   	this.order_id=data.order_id;//订单号码
   	this.num=data.num;//订单数量
   	this.repay_content=data.repay_content;//回报内容
   	this.repay_time=data.repay_time;//回报时间
   	this.pri_pay_money=this.my_pay_money/this.num
   	this.create_support_user_name=data.create_support_user_name;//赞助发起人名字
   	this.create_support_phone=data.create_support_phone;//赞助发起人手机号码
   	this.content_detail=data.content_detail;//赞助发起人手机号码
   	this.repay_title=data.repay_title;//赞助回报标题
   }
      
   /* 票务详情*/
    function buy_ticket_info(data){
    	
    	this.activity_name=data.activity_name;//活动标题
    	this.price=data.price;//价格
    	this.activity_address=data.activity_address//活动地址
    	this.activity_start_time=data.activity_start_time;//活动开始时间
    	this.activity_end_time=data.activity_end_time//活动结束时间
    	this.entrycode_array=data.entrycode_array;//票卷码
    	this.apply_time=this.entrycode_array[0].apply_time;//报名时间
    	this.user_name=data.user_name;//用户名
    	this.phone=data.phone;//电话
    	this.ticket_name=data.ticket_name;//票种名称
    	var khg="有效票券";
    	if(this.activity_end_time<new Date().getTime()){
    		khg="无效票券";
    	}
   
    	this.khg=khg
    	
    }
    /*签到墙*/
    function consumption_list(data){
    	 this.user_icon=data.icon;//用户头像
    	 this.name=data.name;
    }

  
  
 
    /*投票详情*/
	function query_vote(data){
		this.id=data.id;//投票id
		this.activity_id=data.activity_id;//活动id
		this.user_id=data.user_id;//用户ID
		this.title=data.title;//投票标题
		this.detail=data.detail;//投票简介
		this.type=data.type;//1为单选，2为多选
		this.end_time=data.end_time;//投票结束时间
		this.create_time=data.create_time;//投票创建事件
		this.voteItemList=data.voteItemList;//投票详情数组	
		this.is_vote=data.is_vote;//0未投票 1已投票
		this.total_vote=data.total_vote;//总投票
	}
/*投票显示*/
	function voteItemList(data){
		this.id=data.id;//投票ID
		this.image_urls=data.image_urls//投票图片
		this.item_name=data.item_name;//姓名
		this.schedule=data.schedule;//进度
		this.vote_count=data.vote_count;//投票数
		this.vote_id=data.vote_id;//投票ID
		var progress_of=""
		var sche=parseInt(this.schedule)
		if(sche<=20){
			progress_of="#34bec0"
		}else if(sche<=40){
			progress_of="#3455c0";
		}else if(sche<=60){
			progress_of="#f8bdb5";
		}else if(sche<=80){
			progress_of="#ea557f";
		}else if(sche<=100){
			progress_of="#f7db21";
		}
		
		this.jdbg=progress_of
		         
	}
	
	/*主办方查询*/
	function secrchH(data){
		this.name=data.name;//主办方名字
		this.introduction=data.introduction;//主办方简介
		this.sponsor_icon=data.sponsor_icon;//主办头像
		this.act_sum=data.act_sum;//发布活动总数
		this.fans_sum=data.fans_sum;//主办方关注人数
		this.id=data.id;//主办方ID
		this.sign_sum=data.sign_sum;//主办方总参与人数
		this.signSize=data.sponsoractivitycountAndjoincount.signSize==null?0:data.sponsoractivitycountAndjoincount.signSize;
		this.activitySize=data.sponsoractivitycountAndjoincount.activitySize==null?0:data.sponsoractivitycountAndjoincount.activitySize;
		this.attention_sponsor=data.attention_sponsor//主办方是否关注，0位未关注，1为已关注	
		this.comment_count=data.comment_count//评论总人数
		this.user_id=data.user_id//用户ID
	}
	/*搜索主办方*/
	function search_host(data){
		this.name=data.name;//主办方名字
		this.introduction=data.introduction;//主办方简介
		this.sponsor_icon=data.sponsor_icon;//主办头像
		this.act_sum=data.act_sum;//发布活动总数
		this.fans_sum=data.fans_sum;//主办方关注人数
		this.sign_sum=data.sign_sum;//主办方总参与人数
		this.user_id=data.user_id;//主办方ID
	}
	
	/*主办方发起的活动列表*/
	function person_list(data){
		this.id=data.id;//活动id
		this.activity_first_face=data.activity_first_face;// 活动封面
		this.activity_title=data.activity_title;//活动标题
		this.activity_address=data.activity_address;//活动地址
		this.activity_time=data.activity_time;//活动时间
		this.person_limit=data.person_limit;//活动人数限制，0位不限额 
		this.target_money=data.target_money==null?0:data.target_money;//目标金额
		this.now_money=data.now_money==null?0:data.now_money;//已筹金额
		this.schedule=data.schedule==null?'0%':data.schedule;//赞助进度
		if(this.target_money>0||this.now_money>0){
			this.skjhg_s="hs";
		}
		this.is_free=data.is_free;//是否免费：0为免费，1为收费
		this.sponsor_name=data.sponsor_name;//主办方名字
		this.browse_count=data.browse_count;//活动浏览量
		this.person_count=data.person_count==null?0:data.person_count;//参与人数
		this.support_id=data.support_id;//赞助iD
		this.sponsor_image_url=data.sponsor_image_url;//主办方头像	
		this.is_free=data.is_free;//是否免费 
		this.activity_money=data.activity_money==null?0:data.activity_money;//活动金额
	}

	