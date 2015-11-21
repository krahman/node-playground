function greet(callback) {
   console.log('Hello!');

   // Add a data
   var data = {
      name: 'John Doe'
   };

   callback(data);
}

greet(function(data) {
   console.log('The callback was invoked!');
   console.log(data);
});

greet(function(data) {
   console.log('A different callback was invoked!');
   console.log(data.name);
});


