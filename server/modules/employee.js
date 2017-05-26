const Company = require("../modules/company");


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
var emp = new Employee("meep", "2015/07/30 08:00:00",2345, 3);
console.log("test: ", emp.howLong());

var emp2 = new Employee("boop", "2016/07/30 08:00:00",28593, 4);
console.log("test2: ", emp2.howLong());

var comp = new Company("Big Company");
comp.addEmployee(emp);
console.log("testing Comp: ", comp);

module.exports=Employee;
