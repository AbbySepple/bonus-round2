


class Company {
  constructor(name){
    this.name = name;
    this.employeeList = [];
  }//end constructor
  addEmployee(employee){
    this.employeeList.push(employee);
  }
  calcBonus(){
    bonusArray = [];
    for (var i = 0; i < employeelist.length; i++) {
    var employee = employeelist[i];
    var bonus = 0;
    if (employee.howLong()>=1){
      bonus += 0.05;
    }
      switch (employee.reviewRating){
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
      if(parseFloat(employee.salary) > 65000) {
        bonus -= 0.01;
      }
      if (bonus > 0.13){
        bonus = 0.13;
      }
      if (bonus < 0){
        bonus = 0;
      }//end ifs
      var employeeBonus = {
        name: employee.name,
        bonus: bonus
      };//end employeeBonus
      bonusArray.push(employeeBonus);
    }//end for loop
    return bonusArray;
  }//end calcBonus
}//end Company

module.exports=Company;
