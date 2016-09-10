

/*　张晗　*/
;(function() {
    'use strict';

angular.module('app', [])
    .controller('sponsor_authCtrl', sponsor_authCtrl);

 	/* @ngInject */
    function sponsor_authCtrl($scope,activity_data,$stateParams) {
        var vm = $scope;
        vm.sponsor = {};
        // 认证状态
        vm.status = {
            'editForm': false,
            'success': false,
            'fail': false,
            'waiting': false
        };
        // var data = {
        //  code: 0,
        //  msg: '错误',
        //  info: {
        //  "name":"小猫公司",
        //  "contacter":"喵先生",
        //  "contacter_phone":"18307673909",
        //  "introduction":"主办方是一个庞大的养喵的组织",
        //  "status": 2
        //  }
        // };
        activity_data.getDatas('GET', '/sponsor/get_sponsorapply')
        .then(function(data) {
            if(data.info == null) {
                vm.status.editForm = true;
                return false;
            }
            if(data.code==0 && data.info.status){
                switch(Number(data.info.status)) {
                    case 1:  vm.status.success = true;vm.sponsor = data.info; break;
                    case 2:  vm.status.fail = true;vm.sponsor.failInfo = data.msg; break;
                    case 3:  vm.status.waiting = true; break;
                }
            }
        });

        $scope.sponsorAuthForm = function() {
            if(!form_mm.isnull(vm.sponsor.name)){
                 mui.alert('请输入主办方单位名称', 'E场景活动', function() {
              
                 });
                 return;
            }
            if(!form_mm.isnull(vm.sponsor.contacter)){
                 mui.alert('请输入主办方联系人', 'E场景活动', function() {
              
                 });
                 return;
            }
            if(!form_mm.isnull(vm.sponsor.contacter_phone)){
                 mui.alert('请输入主办方联系方式', 'E场景活动', function() {
              
                 });
                 return;
            }
            if(!form_mm.tel(vm.sponsor.contacter_phone)){
                 mui.alert('主办方联系方式格式错误', 'E场景活动', function() {
              
                 });
                 return;
            }
            if(!form_mm.isnull(vm.sponsor.introduction)){
                 mui.alert('请输入主办方简介', 'E场景活动', function() {
              
                 });
                 return;
            }
            if((vm.sponsor.introduction).length > 150){
                 mui.alert('主办方简介不能超过150字', 'E场景活动', function() {
              
                 });
                 return;
            }
            activity_data.getDatas('POST', '/sponsor/add_or_update_apply_sponsor', vm.sponsor)
            .then(function(data) {
                if(data.code == 0){
                    vm.status.editForm = false;
                    vm.status.waiting = true;
                } else {
                    mui.alert(data.msg,'E场景活动', function() {});
                }
            });
        }
        // 重新认证，显示主办方认证表单
        $scope.reSponsorAuth = function () {
            vm.status.editForm = true;
            vm.status.fail = false;
        }
                
    }

})();