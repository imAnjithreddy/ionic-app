(function(angular) {
    'use strict';
    angular.module('app.user', []).config(['$stateProvider',
        function($stateProvider) {
            $stateProvider.
            state('userPage', {
                url:'/user/:userId',
                templateUrl: 'app/user/views/userProfilePage.html',
                controller: 'UserPageController',
                controllerAs: 'upc'
            }).
            state('userProfileSettings', {
                url: '/userProfileSettings',
                templateUrl: 'app/user/views/userProfileSettingsPage.html',
                resolve: {
                    redirectIfNotUserAuthenticated: ['$q', '$auth', 'changeBrowserURL',redirectIfNotUserAuthenticated]
                }
            }).
            state('userAccountSettings', {
                url: '/userAccountSettings',
                templateUrl: 'app/user/views/userAccountSettingsPage.html',
                resolve: {
                    redirectIfNotUserAuthenticated: ['$q', '$auth', 'changeBrowserURL',redirectIfNotUserAuthenticated]
                }
            }).
            state('userMobileFeed', {
                url: '/userMobileFeed',
                templateUrl: 'app/user/views/userMobileFeed.html',
                controller: 'UserMobileFeedController',
                controllerAs: 'umfc'
            }).
            state('userMePage', {
                url: '/userMePage',
                templateUrl: 'app/user/views/userMePage.html',
                controller: 'UserMePageController',
                controllerAs: 'umpc',
                resolve: {
                    redirectIfNotUserAuthenticated: ['$q', '$auth', 'changeBrowserURL',redirectIfNotUserAuthenticated]
                }
            });
        }
    ]);



    function redirectIfNotUserAuthenticated($q, $auth, changeBrowserURL) {
        var defer = $q.defer();

        if ($auth.isAuthenticated()) {
            defer.resolve();

        } else {
            defer.reject();
            changeBrowserURL.changeBrowserURLMethod('/home');
        }
        return defer.promise;
    }

})(window.angular);
