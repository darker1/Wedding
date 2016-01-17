'use strict';

angular.module('weddingApp')
    .controller('NavbarCtrl', [ '$scope', '$location', 'emailService', function($scope, $location, emailService) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }, {
            'title': 'Wedding',
            'link': '/wedding'
        }, {
            'title': 'Parties',
            'link': '/parties'
        }];
        $scope.email = '';
        $scope.name = '';
        
        $scope.welcomeText = '';
        
        $scope.pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        $scope.saveEmail = function(){
            emailService.saveEmail({name: $scope.name, email:$scope.email});
            $scope.welcomeText = 'We got ya covered, ' + $scope.name + '!';
        };
        $scope.isActive = function(route) {
            return route === $location.path();
        };
        $scope.showWelcomeText = function(){
            return $scope.welcomeText !== '';  
        };
    }]);