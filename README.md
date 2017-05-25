# Bonus Calculator App
Our client needs a Node Express server application (No Database) that automatically calculates employee bonus for a company. This is very similar, but not identical to the Bonus Calculator we did in week one.

## Objectives
- Practice creating objects with classes. 
- Practice some other ES6 Syntax (let, const, and other in hard mode)

# Base Mode
## Data Structure
On the server you should have two class modules. One that will represent the following objects/entities in our Bonus Calculator project.

### Employee Class
The Employee class will create instances of Employee objects. It will need the following attributes and procedures. 

- name
- employee start date (different from week one app)
- salary
- review rating
- a method to calculate the days they have been at the company. This is based on the current date and their start date.

### Company Class
The Company class will have a compositional relationship with employees i.e. a company will have employees. There is no inheritance in this application.

The Company class will create instances of Company objects. It will need the following attributes and procedures. 

- name
- employee list (the company *has* employees)
- a method to add employees
- a method to calculate all employee bonuses and return

## Calculate Bonus Logic
### Rating
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.

### Other adjustments
- If they have been at the company for more than 1 year they should receive an additional 5%. Use the start date and the days at the company calculator to determine this.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% or below 0% total.

## API/Server Routes
You should create an API to interact with the employees and the bonuses. For now the company can be created (hard coded) at server start up. Do this in an `employee.js` router module. The employee routes should: 

- create a new employee
- get the employee list
- get the employee bonuses - triggering the Company method to calculate the bonuses and return them to the caller. They do not need to be stored anywhere on the server.

## Front End
Given the objects to practice ES6 on the server, start with a minimal front end. You can test the API with post man and console logs in the browser. Once the server is working as expected, you can add a form to create new employees, display the employee list, and add a button to calculate the bonuses and display them.

# Hard Mode
Explore other syntax changes that were added in ES6. Some things to look into are:

- arrow functions

# Pro Mode
Add unit tests to your class modules and server APIs.