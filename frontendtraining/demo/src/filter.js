const marks = [30,50,78,55,85,98,100];

const grade = marks.map(function(e) {
    //console.log(e);
    let result= e >=50 ? "pass" : "fail";
    return result;
});

console.log(grade);
console.log(marks);

//Filter 
