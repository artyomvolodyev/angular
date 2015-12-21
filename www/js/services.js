/**
 * Created by Kevin on 27/03/2015.
 */

angular.module('starter.services', [])
    .factory('databaseService', function ($http, $q) {
    /**
     * function for logging in user, validates if user and password matches
     * @param userdata - containing the username and password of user
     */

    var sendRequest = function(method, urlPath, params) {
        var deferred = $q.defer();
        //var completeUrl;
        if(params){
            params = $.param(params)
        }
        console.log(method, urlPath, params);
        $http({method: method, url: urlPath, data: params,  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }}).success(function (data, status, headers) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config, statusText) {
            alert('Failed!'); //todo
            deferred.reject({data: data, status: status});
        });
        return deferred.promise;
    }

    /**
     * Retrieves list of servers use for the connect drop down after login.
     */
    function fetchServers() {
        return sendRequest('GET', '../server/serversb.php')
    }

    /**
     * Function for login validation
     * @param username
     * @param password
     */
    function validateUser(email, password) {
        var userData = {email: email, password: password};
        return sendRequest('POST', '../server/login.php', userData)
    }
	
    return {
        validateUser: validateUser,
        fetchServers: fetchServers
    }

}).factory('vpnService', function () {

    /**
     * Creates a vpn on the device and connects
     */
    function connectVPN(){
        window.plugins.VPNManager.enable(
		    function(result){
                console.log("result ", result);
				alert('connected');
            },
            function(error){
				console.log("error ", error);
                alert(error);
            },
            {
                "vpnPassword": "vpntest",
                "vpnUsername": "tester",
                "vpnHost": "hk.monkeyvpn.com",
                "certificate": "client1",
                "certificatePassword": "test"
            }
        );
    }

    return {
        connectVPN: connectVPN
    }
})
    .factory('AuthService', function(){
        return{
            user: {},
            setUser : function(aUser, callback){
                angular.copy(aUser, this.user);
                //return this.isLoggedIn();
                callback(this.user);
            },
            isLoggedIn : function(){
                return(this.user)? this.user : false;
            }
        }
    });