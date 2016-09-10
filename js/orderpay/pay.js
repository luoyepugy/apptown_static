// 标签页面的切换
var category = $('#j-payCategory');
var list = $('#j-payLists');

category.children('li').on(
		'click',
		function() {
			var index = $(this).index();
			if (index == 2) {
				var amount = $('#amount').val();
				var price = $('#price').val();
				if (amount < price) {
					var btn = $(".u-btn01");
					btn.removeClass("u-btn01");
					btn.addClass("u-btn0-666");
					$('#submitButton').unbind("click");// 去掉a标签中的onclick事件
				}
			} else {
				var btn = $(".u-btn0-666");
				btn.removeClass("u-btn0-666");
				btn.addClass("u-btn01");
				$('#submitButton').bind("click", function() {
					// 0 -- 支付宝支付
					if (category.children('li.on').index() == 0) {
						$("#payForm").attr("action", "payOrder");
						$("#payForm").submit();
					}

					// 1 -- 微信支付
					if (category.children('li.on').index() == 1) {
						$("#payForm").attr("action", "weixi/wxOrder");
						$("#payForm").submit();
					}

					// 2-- e币支付
					if (category.children('li.on').index() == 2) {
						$("#payForm").attr("action", "eCoin/pay");
						$("#payForm").submit();
					}
				}

				);// a标签中的onclick事件
			}
			category.children('li').removeClass('on');
			$(this).addClass('on');
			list.find('input[name="bank_type"]').attr("checked", '');
			list.children('li').eq(index).find('input[name="bank_type"]').eq(0)
					.attr('checked', 'checked');
			list.children('li').addClass('f-hide');
			list.children('li').eq(index).removeClass('f-hide');
		});
// 默认选择
list.children('li').eq(category.children('li.on').index()).find(
		'input[name="bank_type"]').eq(0).attr('checked', 'checked');

/** 选择支付方式 */
$('#submitButton').click(function() {
	// 0 -- 支付宝支付
	if (category.children('li.on').index() == 0) {
		$("#payForm").attr("action", "payOrder");
		$("#payForm").submit();
	}

	// 1 -- 微信支付
	if (category.children('li.on').index() == 1) {
		$("#payForm").attr("action", "weixi/wxOrder");
		$("#payForm").submit();
	}

	// 2-- e币支付
	if (category.children('li.on').index() == 2) {
		$("#payForm").attr("action", "eCoin/pay");
		$("#payForm").submit();
	}
});
