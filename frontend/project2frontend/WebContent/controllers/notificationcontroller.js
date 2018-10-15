/**
 * 
 */

app.controller('NotificationCtrl',function(NotificationService,$scope,$location,$routeParams,$rootScope){
	var id =$routeParams.id
	NotificationService.getNotification(id).then(function(response){
		$scope.notification=response.data
		
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	NotificationService.updateNotification(id).then(function(response){
		
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	function getNotificationNotViewed(){
	NotificationService.getNotificationNotViewed(id).then(function(response){
		$rootScope.notifications=response.data
		$rootScope.notificationCount=$rootScope.notifications.length
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
}
	
	
})