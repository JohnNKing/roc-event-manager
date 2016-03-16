'use strict';

angular.module('rocEventManagerApp')
	.controller('SessionProposeCtrl', function ($scope, $http) {
		$scope.session = {};
	
		$scope.tinymceOptions = {
			menubar: false,
			statusbar: true,
			setup: function(editor) {
				editor.on("init", function() {
					this.getDoc().body.style.fontSize = '14px';
					this.getDoc().body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
				});
			}
		};
		
		$scope.save = () => {
            $http.put('/api/sessions/' + $scope.session._id, $scope.session);
		};
		
		return $http.get('/api/sessions').then(response => {
			$scope.session = response.data[0];
		});
	});
