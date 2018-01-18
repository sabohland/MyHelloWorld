// Code goes here


var MainController = function($scope, $http){
  
  $scope.message = "Hi Stacy!";
  
  var person = {
    firstname: "Stacy",
    lastname: "Bohland",
    image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAAoIAAAAJDI5NmQ1NzY2LWMwODctNGVmOS1iZjM3LWRlZDQ3ZmMxZWI1YQ.jpg"
    
  };
  
  $scope.person = person;
  
  
};

angular.module('app', []).controller('MainController', MainController);