var app = angular.module('beerListApp', ['ui.bootstrap', 'ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainCtrl',
      templateUrl: '/templates/home.html'
    })
    .state('beer', {
      url: '/beers/:id',
      controller: 'beerCtrl',
      templateUrl: '/templates/beer.html',
      params: {
        beerParam: null
      }
    });

  $urlRouterProvider.otherwise('/home');
}]);
