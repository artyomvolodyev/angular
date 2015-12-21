angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope) {

    })
    .controller('HomeNotConnectedCtrl', function($scope, $state, databaseService, vpnService) {
        /**
         * Connects user and redirect to homepageconnected
         */
        $scope.connect = function(){
            $state.transitionTo("app.homepageconnected");
        }
		
        /**
         * Connects user to the vpn
         */
        $scope.connectVpn = function() {
            vpnService.connectVPN().then(function (result){

            });
        }

        /**
         * Retrieves hotspots to be use for the options
         */
        databaseService.fetchServers().then(function (hotspots) {
            $scope.hotspots = hotspots;
            $scope.selectedHotspot = $scope.hotspots[0];
        });
    })
    .controller('HomePageConnectedCtrl', function($scope, $state) {
        /**
         * Disconnects the user and returns to homenotconnected page.
         */
        $scope.disconnect = function(){
            $state.transitionTo("app.homenotconnected");
        };

        /**
         * Redirects user to more Traffic Page
         */
        $scope.getTraffic = function(){
            $state.transitionTo("app.moreTraffic");
        }
    })
    .controller('MoreTrafficCtrl', function($scope, $state) {
        //console.log('MoreTrafficCtrl');
    })
    .controller('HelpCtrl', function($scope, $state) {
        //console.log('HelpCtrl');
    }).controller('LoginCtrl', function($scope, $state, $timeout, databaseService, AuthService) {

        //todo plugin test of vpn connection
        $timeout(function () {
            window.plugins.VPNManager.enable(
                function(result){
					console.log("result ",result);
                    alert(result);
                },
                function(error){
				console.log("error     ",error);
                    alert(error);
                },
                {
                    "vpnPassword": "test",
                    "vpnUsername": "tester",
                    "vpnHost": "tt.monkeyvpn.com",
                 
                
        "certificate": "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",
                
                    "certificatePassword": "testit"
                }
            );
            //todo will create a mock later for this
            /*
            window.plugins.VPNManager.isVpnCapable(
                function(result){
                    alert('Is Device VPN capable: ' + result);
                },
                function(error){
                    alert(error);
                },{}
            );
            */
        }, 3000);

        $scope.credentials = {};
        /**
         * checks if the user & pass is valid, if yes it will redirect to homepage
         */
        $scope.login = function(data) {
            if(Object.keys(data).length === 0){
                alert('Invalid Fields');
            }else{

                //databaseService.validateUser(data.email, data.password).then(function(user){
                //    if(user){
                //        $state.transitionTo("app.homenotconnected");
                //    }else{
                //        alert('Invalid User');
                //    }
                //});

                AuthService.setUser(data, function(response) {
                    console.log(AuthService.isLoggedIn());
                    $state.transitionTo("app.home");

                });

            }
			// for dev skip login and proceed
			// $state.transitionTo("app.homenotconnected");
        };

        /**
         * Redirects to signup Page
         */
        $scope.goToSignup = function() {
            $state.transitionTo("app.signup");
        }
    })
    .controller('SignupCtrl', function($scope, $state) {
        /**
         * Redirects to signup Page
         */
        $scope.goToLogin = function() {
            $state.transitionTo("app.login");
        }
    })
    .controller('HomeCtrl', function($scope, AuthService) {
        $scope.user = AuthService.isLoggedIn()
    });