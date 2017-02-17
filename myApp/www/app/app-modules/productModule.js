(function(angular){
  'use strict';
angular.module('app.product',[]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
      state('productsCollectionName', {
        url: '/productsCollectionName/:productName/:location/:slug?',
        templateUrl: 'app/product/views/productsNameCollection.html',
        controller: 'ProductNameCollectionController',
        controllerAs: 'pncc'
      }).state('productsCollectionCategory', {
        url: '/productsCollectionCategory/:category/:location/:slug?',
        templateUrl: 'app/product/views/productsCategoryCollection.html',
        controller: 'ProductCategoryCollectionController',
        controllerAs: 'pccc'
      }).state('productsCollectionSubCategory', {
        url: '/productsCollectionSubCategory/:subCategory/:location/:slug?',
        templateUrl: 'app/product/views/productsSubCategoryCollection.html',
        controller: 'ProductSubCategoryCollectionController',
        controllerAs: 'pscc'
      }).state('singleProductPage', {
        url: '/product/singleProduct/:productId/:slug?',
        templateUrl: 'app/product/views/singleProduct.html',
        controller: 'SingleProductController',
        controllerAs: 'spc'
      }).state('productsCollectionLocation', {
        url: '/productsCollectionLocation/:location/:slug?',
        templateUrl: 'app/product/views/productsLocationCollection.html',
        controller: 'ProductsLocationController',
        controllerAs: 'plc'
      });
  }]);

})(window.angular);
//productsCollection/";
//productsCollectionCategory/";
//productsCollectionSubCategory/";
//product/singleProductName/necklace12/hyderabad/necklace12-products-in-hyderabad