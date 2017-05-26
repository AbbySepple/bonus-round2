//REQUIRES
const Company = require("../modules/company");
const express = require ('express');
const Router = express.Router();


class Employee {
  constructor(name, startDate, salary, reviewRating){
      this.name = name;
      this.startDate = startDate;
      this.salary = salary;
      this.reviewRating = reviewRating;
  }//end constructor
  howLong(){
    var today = new Date();
    var diff = Math.abs(today - new Date(this.startDate));
    return Math.floor(diff / 31536000000);
  }//end howLong
}//end class

var BigCompany = new Company("Big Company");

Router.post('/addEmployee', function(req,res){
  var newEmployee = new Employee (req.body.name, req.body.startDate, req.body.salary, req.body.reviewRating);
  BigCompany.addEmployee(newEmployee);
  res.send('foobarfoo');
});

module.exports=Router;

// for testing in Node
// var emp = new Employee("meep", "2015/07/30 08:00:00",2345, 3);
// console.log("test: ", emp.howLong());
// var emp2 = new Employee("boop", "2016/07/30 08:00:00",28593, 4);
// console.log("test2: ", emp2.howLong());
// var emp3 = new Employee("klop", "2012/06/30 08:00:00",35593, 2);
// console.log("test3: ", emp3.howLong());
// var comp = new Company("Big Company");
// comp.addEmployee(emp);
// comp.addEmployee(emp2);
// comp.addEmployee(emp3);
// console.log('BonusArray:', comp.calcBonus());
// console.log("testing Comp: ", comp);
