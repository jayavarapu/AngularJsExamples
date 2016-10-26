/// <reference path="C:\vs2015\AngularJsExamples\AngularJsExamples\Scripts/angular.js" />

var app= angular.module('app', []);

app.controller('empController', ['$scope', function($scope){
    $scope.name = "this is basic Directive";
    $scope.firstname = "srikanth";
}]);

app.directive('myInfoMsg', function () {
    return {
        template: "<strong>{{name}}</strong>"
    };
})

app.directive('mySecondMsg', function () {
    return {
        templateUrl: "my-second-msg.html1"
    };
});