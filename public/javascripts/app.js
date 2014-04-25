angular.module('bibliothek', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/bibliothek', { templateUrl: 'partials/list.html', controller: 'BibliothekListCtrl' }).
      when('/bibliothek/:pollId', { templateUrl: 'partials/item.html', controller: 'BibliothekItemCtrl' }).
      when('/new', { templateUrl: 'partials/new.html', controller: 'BibliothekNewCtrl' }).
      otherwise({ redirectTo: '/bibliothek' });
  }]);