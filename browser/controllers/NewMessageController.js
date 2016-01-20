app.controller('NewMessageController', function ($scope, MessagesFactory) {
	$scope.messages = [];
	$scope.submitMessage = function() {
		MessagesFactory.sendMessage($scope.currentMessage).then(function(data) {
			$scope.messages.push(data);
		});
	};
});
