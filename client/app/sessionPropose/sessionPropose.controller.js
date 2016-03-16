'use strict';

angular.module('rocEventManagerApp')
	.controller('SessionProposeCtrl', function ($scope) {
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

	});
