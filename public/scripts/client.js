const myApp = angular.module('myApp',[]);

myApp.controller('EmployeeController', ['$http',function($http){
  var vm = this;

  vm.getEmployees = function(){
    $http({
      method:'GET',
      url:'/employee/employeeList'
    }).then(function success(res){
      console.log(res);
      vm.employeeList = res.data;
    },function error(res){
      console.log(res);
    });
  };

  vm.getEmployees();

  vm.addEmployee = function(){
    var objectToSend={
      name: vm.nameIn,
      startDate: vm.startDateIn,
      salary: vm.salaryIn,
      reviewRating: vm.reviewRatingIn
    };

    $http({
      method:'POST',
      url: '/employee/addEmployee',
      data: objectToSend
    }).then(function success(res){
      console.log(res);
      vm.getEmployees();
    },function error(res){
      console.log(res);
    });
  };

  vm.calculateBonus = function(){
    $http({
      method:'GET',
      url: '/employee/getBonuses'
    }).then(function success(res){
      console.log(res);
      vm.bonusArray = res.data;
    },function err(res){
      console.log(res);
    });
  };
}]);
