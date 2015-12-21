// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var monkeyVpn = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

monkeyVpn.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

monkeyVpn.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "partials/mainPages/main.html",
            controller: 'AppCtrl'
        })
        .state('app.homenotconnected', {
            url: "/homenotconnected",
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/homeNotConnected.html",
                    controller: 'HomeNotConnectedCtrl'
                }
            }
        })
        .state('app.homepageconnected', {
            url: "/homepageconnected",
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/homePageConnected.html",
                    controller: 'HomePageConnectedCtrl'
                }
            }
        })
        .state('app.moreTraffic', {
            url: "/moretraffic",
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/moreTraffic.html",
                    controller: 'MoreTrafficCtrl'
                }
            }
        })
        .state('app.help', {
            url: "/help",
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/help.html",
                    controller: 'HelpCtrl'
                }
            }
        })
        .state('app.login', {
            url: "/login",
            authenticate: false,
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/login.html",
                    controller: 'LoginCtrl'
                }
            }
        })
        .state('app.signup', {
            url: "/signup",
            authenticate: false,
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/signup.html",
                    controller: 'SignupCtrl'
                }
            }
        })
        .state('app.home', {
            url: "/home",
            authenticate: true,
            views: {
                'menuContent': {
                    templateUrl: "partials/mainPages/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/signup');
});

monkeyVpn.run(['$rootScope', '$state', 'AuthService', function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (Object.keys(AuthService.isLoggedIn()).length === 0 && toState.authenticate) {
            event.preventDefault();
            $state.go('app.signup');
        }
    });
}]);