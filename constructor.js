class Person {
    constructor(jenny) {
      this.name = jenny;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const otto = new Person("Otto");
  
  otto.introduce(); 



  function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }
  