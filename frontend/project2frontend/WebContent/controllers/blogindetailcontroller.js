/**
 * BlogInDetailCtrl
 * #/getblog/id
 */
app.controller('BlogInDetailCtrl',function($scope,$location,BlogPostService,$routeParams,$sce,$http){
	var id=$routeParams.id
	$scope.isRejected=false
	//statement //select * from blogpost where id=?
	BlogPostService.getBlog(id).then(function(response){
		$scope.blogPost=response.data//BlogPost object
		$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent)
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	$scope.approveBlogPost=function(blogPost){
		alert('in approve')
		BlogPostService.approveBlogPost(blogPost).then(function(response){
			$location.path('/blogswaitingforapproval')
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
    
	$scope.rejectBlogPost=function(blogPost){
		console.log(blogPost)
	
		BlogPostService.rejectBlogPost(blogPost,$scope.rejectionReason).then(function(response){
			$location.path('/blogswaitingforapproval')
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.showTextArea=function(){
		$scope.isRejected=!$scope.isRejected
	}
	
	$scope.incLike=function(id){
		/*alert('inside controller'  +id)*/
		
		$http.put('http://localhost:8080/project2middleware/incrementLikes/'+id).then(function(response){
		
			var id=$routeParams.id
			BlogPostService.getBlog(id).then(function(response){
				/*alert('inside controller'  +id)*/
				$scope.blogPost=response.data//BlogPost object
				$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent)
			})
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	
	$scope.incDisLike=function(id){
		/*alert('inside controller'  +id)*/
		
		$http.put('http://localhost:8080/project2middleware/incrementDisLikes/'+id).then(function(response){
		
			var id=$routeParams.id
			BlogPostService.getBlog(id).then(function(response){
				/*alert('inside controller'  +id)*/
				$scope.blogPost=response.data//BlogPost object
				$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent)
			})
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.addComment=function(blog,commentTxt){
		alert('controller')
			alert('commentTxt' +commentTxt)
		if(commentTxt==undefined || commentTxt=="")
			$scope.error='please enter some comments.. '
			else 
		BlogPostService.addBlogComment(blog,commentTxt).then(function(response){
			$scope.commentTxt=""
			$scope.error=""
			$scope.blogComment=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$scope.getBlogComments=function(blogPostId){
		BlogPostService.getBlogComments(blogPostId).then(
				function(response){
					$scope.blogComments=response.data//result of query[select * from blogcomment where blogpost_id=?]
				},function(response){
					if(response.status==401)
						$location.path('/login')
				})
	}
	
	
})