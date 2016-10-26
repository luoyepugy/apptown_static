
/**
 * 活动助手
 */

angular.module('activity_help', [ "directive_mml","activity_servrt", "common","request"])
	// ==================== 酒店列表 ============================
	.controller('hotel_listCtrl', function(httpService, $scope) {
		// 默认选项
		$scope.selectOption = 1;
		var index = 1;
		// 获取打赏列表数据
		var getHotelList = function(index) {
			httpService.getDatas('GET', '/hotel/list', {'pageIndex': index, 'pageSize':10}).then(function(data) {
				$scope.hotelList = data.rows;
				$(".tcdPageCode").createPage({
					pageCount:Math.ceil(data.total/10),
					current:index,
					backFn:function(p){	
					}
	    		});	
			});
		}
		getHotelList(1);
		$(".tcdPageCode").createPage({
			pageCount:10,
			current:index,
			backFn:function(p){	
				index=p
			   getHotelList(index);  
			}
	    });	
		// 查询服务
		$scope.searchService = function(val) {
			if(val == 1) {
				$('.j-hotelList').show().next().hide();
			} else {
				$('.j-hotelList').hide().next().show();
			}
		}
	})

	// ==================== 酒店详情 ============================
	.controller('hotel_detailCtrl', function($scope, httpService) {
		var hotelId = $('#hotelId').val();
		// $scope.hotelDetail = {
		// 	'name': 'adf',
		// 	'address': 'sdfafe',
		// 	'contacter': 'misszh',
		// 	'contacter_phone': '13005554152',
		// 	'icon': '/img/cj_banner.jpg',
		// 	'detail': 'dfswafoiefoewifoeodu'
		// }
		httpService.getDatas('GET', '/hotel/details', {'id': hotelId}).then(function(data) {
			$scope.hotelDetail = data.info[0];
		});
	})
