app.controller("customersController", function($scope, customersFactory){

    $scope.customers = customersFactory.getCustomers();

    });