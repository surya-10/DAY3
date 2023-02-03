let student = {
    name: "suryaprakash",
    age: 24,
    experience: 2,
    isMarried: false,
    emailId: "suryaprakash@test.com",
    gender: "male",
    city: "salem",
    state: "TamilNadu"
}
function display(value){
    console.log(value);
}
//----------------- iterating using for loop -----------------------//
display("----------------- iterating using for loop -----------------------");
studentKey = Object.keys(student);
studentValue = Object.values(student);
for(var i=0; i<studentKey.length; i++){
    console.log(studentKey[i], ": ", student[studentKey[i]]);
}

// ----------------iterating using forEach loop -------------------//
display("----------------- iterating using forEach loop -----------------------");

//for each loop is best for arrays
studentKey.forEach((value, index, obj)=>{
    console.log(value, ": ", student[value]);
});

// -----------------iterating using for in loop -------------------//
display("----------------- iterating using for in loop -----------------------");


for(obj in student){
    console.log(obj, ": ", student[obj]);
}

// -----------------iterating using for of loop -------------------//
display("-------------------iterating using for of loop ---------------------");

for(obj1 of studentKey){
    console.log(obj1, ": ", student[obj1]);
}

