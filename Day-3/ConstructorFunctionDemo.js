/* Constructor Functions */
function Employee(id,firstName,salary){
  var _id = id,
      _firstName = firstName,
      _salary = salary;
   if (this.constructor.name !== "Employee")
   		return new Employee(id,firstName,salary);
   	
  this.id = function(){
     if (arguments.length === 0) return _id;
     /* do the validation */
     _id = arguments[0];
  };
  this.firstName = function(){
     if (arguments.length === 0) return _firstName;
     /* do the validation */
     _firstName = arguments[0];
  };
  this.salary = function(){
     if (arguments.length === 0) return _salary;
     /* do the validation */
     _salary = arguments[0];
  };
}