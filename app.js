const user = { email: "jdoe@gmail.com" };

try {
  // produce a ReferenceError
  //   myFunction();
  // produce a TypeError - cant call something from null so it creates the error
  //   null.myFunction();
  // WILL PRODUCE SyntaxError
  //   eval("Whats up world");
  // WILL PRODUCE A URIError
  //   decodeURIComponent("%");

  if (!user.name) {
    // throw "user has no name";
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(`User Error: ${e.message}`); // create your own error
  //   console.log(`${e.name} its null you big dummy`);
  //   console.log(e);
  //   console.log(e.message); // removes the error
  //   console.log(e.name); // gives the name of type of error
  //   console.log(e instanceof ReferenceError);
  //   console.log(e instanceof TypeError);
} finally {
  console.log("finally runs regardless of the result...");
}

// Can handle errors without stopping the entire script

console.log("program continues");
