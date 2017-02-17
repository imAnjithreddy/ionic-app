(function(angular){
  'use strict';
  
angular.module('app.store',[]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('storesCollectionName', {
        url: '/store/storesCollection/storeName/:storeName/:location/:slug?',
        templateUrl: 'app/store/views/storesNameCollection.html',
        controller: 'StoreNameCollectionController',
        controllerAs: 'sncc'
      }).state('storesCollectionCategory', {
        url: '/store/storesCollection/category/:category/:location/:slug?',
        templateUrl: 'app/store/views/storesCategoryCollection.html',
        controller: 'StoreCategoryCollectionController',
        controllerAs: 'sccc'
      }).state('storesCollectionLocation', {
        url: '/store/storesCollection/location/:location/:slug?',
        templateUrl: 'app/store/views/storesLocationCollection.html',
        controller: 'StoreLocationCollectionController',
        controllerAs: 'slcc'
      }).state('singleStorePage', {
        url: '/store/singleStore/:storeId',
        templateUrl: 'app/store/views/singleStore.html',
        controller: 'SingleStoreController',
        controllerAs: 'ssc'
      });
  }]);

})(window.angular);

