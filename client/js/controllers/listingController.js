angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
    
    $scope.listings.push($scope.newListing);
    $scope.newListing = {};
     Listings.create($scope.newListing).then(function() {

     }, function(err) {
       console.log(err);
     })
    };

    $scope.deleteListing = function(index) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful,
		navigate back to 'listing.list'. Otherwise, display the error.
       */
       var id = $scope.listings[index]._id;
       Listings.delete(id).then(function(res) {
         $scope.listings.splice(index, 1);
       }, function (error){
         console.log('Error:', error);
          //  this.timeout(3000);
            Listings.getAll().then(function (response) {
                $scope.listings = response.data;
            }, function (error) {
                console.log('Unable to retrieve listings:', error);
            });
        });

    };


    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
