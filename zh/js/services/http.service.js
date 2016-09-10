

/*　张晗　*/
(function() {
    'use strict';

angular.module('app', [])
    .factory('httpService', httpService);
    
 	/* @ngInject */
    function httpService($q, $http) {

        return {
            'getDatas': getDatas
        };
    	
        function getDatas(method, url, datas) {
        	console.log('e=e');
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
                mui.alert('服务器请求失败','E场景活动', function() {});
            });
            return deferred.promise;     
        }
    };

})();