var sampleApp = angular.module('NewApp', ['ui.router'])

/* route start*/
sampleApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /index
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
     // templateUrl: "templates/home.html",
      controller: "rChartsCtrl"
    });
}]);

/* route end*/


/* Controller start*/

sampleApp.controller('rChartsCtrl', [
'$scope',
'$location',
'$http',
'$state',
'$stateParams',
function($scope, $location, $http, $state, $stateParams){



 var chartParams = {  
         "dom":"chart",
         "scope":"usa",
         "fills":{  
            "A":"#FFFFB2",
            "B":"#FECC5C",
            "C":"#FD8D3C",
            "D":"#F03B20",
            "E":"#BD0026",
            "defaultFill":"white"
         },
       "legend":true,
         "labels":true,
         "bodyattrs":"ng-app ng-controller='rChartsCtrl'"
      }


    $http.get('/getstateusercount').success(function(data){
        chartParams.data = data;
        chartParams.element = document.getElementById('chart')
        var mapchart = new Datamap(chartParams);



        // draw a bubble map if specified
        if (chartParams.bubbles) {
        var bubbles = chartParams.bubbles
        mapchart.bubbles(bubbles)
        }

        if (chartParams.labels){
        mapchart.labels()
        }
    //  console.log(data);

    });



}]);

/* Controller start*/




