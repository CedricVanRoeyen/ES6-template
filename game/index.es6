class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

var cedric = new Person("cedric");
cedric.sayName();
