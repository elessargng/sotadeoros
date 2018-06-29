(function () {
	'use strict';

	angular
		.module('app')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$location', '$rootScope', 'AuthenticationService', 'FlashService'];
	function LoginController($location, $rootScope, AuthenticationService, FlashService) {
		var vm = this;

		vm.login = login;

		(function initController() {
			// reset login status
			AuthenticationService.ClearCredentials();
		})();

		function login_fail(response,msg){
			console.log(response);
			FlashService.Error(msg);
			$rootScope.userSignedIn = false;
			vm.dataLoading = false;
		}

		function authorize(response){
			var roles = ["ADMIN","REGISTRO"];
			var authorized = false;
			for ( var i =0 ; i < response.data.roles.length ; i++ )
			{
				if ( response.data.roles[i] !=null && roles.indexOf(response.data.roles[i].role) != -1 ){
					authorized = true;
				}
			}
			return authorized;
		}

		function login() {

			vm.dataLoading = true;
			AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.status === 200) {
									  if ( !authorize(response) ){
											login_fail(response,"No tienes los permisos necesarios para entrar.");
											return;
										}
										if ( response == null || response.data == null || response.data.roles == null ) {
											login_fail(response,"Usuario o contraseña incorrectos.");
											return;
										}

                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/batch-search');
                } else {
                    login_fail(response,"Usuario o contraseña incorrectos.");
                }
			});
		}
	}

})();
