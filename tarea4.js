function sum(grades) {
    return grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5];
}

function average() {
    let grades = [6,8,9,2,5,10];
    return sum(grades)/grades.length;
}

console.log(average());