(function() {
    'use strict';

var value = {
	'host': 'http://172.168.2.78:80'
}

var app = angular.module("app", [])
	.constant('config', value);

})();