'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/coreCompetencies', {templateUrl: 'partials/coreCompetencies.html', controller: CompetenciesCtrl});
    $routeProvider.when('/experience', {templateUrl: 'partials/experience.html', controller: ExperienceCtrl});
    $routeProvider.when('/education', {templateUrl: 'partials/education.html', controller: EducationCtrl});
    $routeProvider.when('/otherInterests', {templateUrl: 'partials/otherInterests.html', controller: OtherCtrl});
    $routeProvider.otherwise({redirectTo: '/coreCompetencies'});
}]).
    config(['$locationProvider', function($location) {
	$location.hashPrefix('!');
    }]);

app.run(function($rootScope,$locale) {
    if(navigator.language)
    {
        $rootScope.locale=navigator.language.substr(0,2);
    } else {
        $rootScope.locale = $locale.id;
    }
    $rootScope.locales = [
        {name:"English",value:"en"},
        {name:"Français",value:"fr"}
    ];
});
