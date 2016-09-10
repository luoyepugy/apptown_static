<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Cache-Control" content="no-transform "> 
<meta charset="UTF-8">
<link href="/css/common/mui.min.css" rel="stylesheet">  
   <link href="/css/common/base.css" rel="stylesheet"> 
    <link href="/css/common/style.css" rel="stylesheet">
</head>
<body>
        <header class="header_mml pr pt10 pm10 cf cen">
           <i class="f_i retreat_icon"></i>
                                     赞助支付
        </header>
        
        <section class="pd">
           <p class="cen mt30 pm20 muiuyt_a">
              <span class="fz30">${price}</span>元
            </p>
            
            <p class="mt20">
            
              <span class="fl">收款方</span>
                <span class="fr">e场景活动</span>
            </p>
            <p class="qc"></p>
            
            
            
            <p class="qc"></p>
            <p class="mt20 fz14 zc">
              <i class="f_i check_icon_e yj4 check_icon_act"></i>
                我已阅读并同意<a>《e场景支付协议》</a>
            </p>
            
            <p class="mt20 paiements_andPublicit">
            <button onclick="pay()">确定支付</button>
            </p>
            
        </section>
        
  <script>
  var charobx = true;
	$(".i-checkbox").click(
	function() {
		if (charobx) {
			charobx = false;
			$(this).css({
						"background" : "url(/img/icon_editor.png) -196px -228px"
						})
		} else {
			charobx = true;
			$(this).css({
						"background" : "url(/img/icon_editor.png) -145px -228px"
						})
		}
	})

	$(".my-money").html($(".pay-money").val());

	function pay() {
		if (charobx) {
          WeixinJSBridge.invoke(
			'getBrandWCPayRequest',
			{
				"appId" : '${appId}',
				"timeStamp" : '${timeStamp}',
				"nonceStr" : '${nonceStr}',
				"package" : '${packages}',
				"signType" : 'MD5',
				"paySign" : '${paySign}'
			},
			function(res) {
				WeixinJSBridge.log(res.err_msg);
				var flag = null;
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					flag = 'success';
				} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
					alert("用户取消支付!");
				} else {
					flag = "error"
					alert("支付失败!");
				}
				if (flag == null) {
					return;
				}

				$.ajax({
					type : 'POST',
					url : 'weixin/applyPayNotify',
					data : {
						'flag' : flag,
						'consumptionId' : '${consumptionId}',
						'phone':'${phone}',
						'userId':'${userId}',
						'payMoney':'${payMoney}'
					},
				contentType : 'application/x-www-form-urlencoded; charset=utf-8',
				success : function(data) {
				},
				error : function(res) {

				},
				complete : function() {

				}
			});

			})
		} else {

			alert("请阅读并同意e场景支付协议")
		}

	}

	$(".zhifuxiianyi-aa").click(function() {
		open("/html/phone/protocol.html")
	});
  </script>      
 
   <script src="/js/common/jweixin-1.0.0.js"></script>
   <script src="/js/common/jquery-1.11.3.min.js"></script>
   <script src="/js/common/angular.min.js"></script>
   <script src="/js/common/angular-ui-router.min.js"></script>
   <script src="/js/common/mui.min.js"></script>      
</body>
</html>