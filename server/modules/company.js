class Company {
  constructor(name) {
    this.name = name;
    this.employeeList = [];
  } //end constructor
  addEmployee(employee) {
    this.employeeList.push(employee);
  }
  getEmployeeList(){
    return this.employeeList;
  }
  calcBonus() {
    var bonusArray = [];
    //ES6 for of loop:
    for(var employee of this.employeeList){
      //ES5 code equivalent:
    // for (var i = 0; i < this.employeeList.length; i++) {
      // var employee = this.employeeList[i];

      var bonus = 0;
      if (employee.howLong() >= 1) {
        bonus += 0.05;
      }
      switch (parseInt(employee.reviewRating)) {
        case 1:
        case 2:
          bonus = 0;
          break;
        case 3:
          bonus += 0.04;
          break;
        case 4:
          bonus += 0.06;
          break;
        case 5:
          bonus += 0.1;
          break;
      }
      if (parseFloat(employee.salary) > 65000) {
        bonus -= 0.01;
      }
      if (bonus > 0.13) {
        bonus = 0.13;
      }
      if (bonus < 0) {
        bonus = 0;
      } //end ifs
      var employeeBonus = {
        name: employee.name,
        bonus: bonus
      }; //end employeeBonus
      bonusArray.push(employeeBonus);
    } //end for loop
    return bonusArray;
  } //end calcBonus
} //end Company

module.exports = Company;
