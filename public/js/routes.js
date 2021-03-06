(function(){
  var router = angular.module('statsRouter', []);
    router.config([
      '$routeProvider',
      function($routeProvider){
      $routeProvider.
      when("/", {
        templateUrl: 'views/players/index.html',
        controller: 'statsController',
        controllerAs: 'statsCtrl'
      }).
      when("/players/:id", {
        templateUrl: 'views/players/show.html'
      });
    }
  ]);
})();
