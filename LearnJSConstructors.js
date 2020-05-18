var Person = function(name, dateOfBirth , job){
    this.dateOfBirth =dateOfBirth,
    this.job =job,
    this.name = name
}

Person.prototype.age = function(){
    console.log( new Date().getFullYear() - this.dateOfBirth)
}
  Sam = new Person('Sam', 1991, 'Software Developer')
Sam.age();
console.log(Sam);

//parsing function as argument in JavaScript
