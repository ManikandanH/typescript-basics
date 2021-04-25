class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
      return this.name;
    }
  }
  const c = new MyClass();
  // OK
  c.getName();
  
  // Error, would crash
  const g = c.getName;
//   console.log(g()); ===> wrong because this will execute in global context
  console.log(g.call(c));