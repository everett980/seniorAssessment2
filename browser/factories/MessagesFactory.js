app.factory('MessagesFactory', function ($http) {
	var factory = {};
	factory.getMessagesFrom = function(userId) {
		return $http.get('/messages/from/'+userId).then(function(res) {
			return res.data;
		});
	}	   
	factory.sendMessage = function(messageDataToSend) {
		return $http.post('/messages', messageDataToSend);
	}
	return factory;
});
