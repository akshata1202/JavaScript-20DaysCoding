const student = { 
    name: 'Aman',
    age: 20,
    hobbies: ['reading', 'dance', 'coding'],
};

// using for...in
for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value); 
} 
