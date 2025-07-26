// 1. Viết hàm multiply
function calculate(a, b) {
    const multiply = a * b;
    return multiply
}
const multiply = calculate(3, 4);
console.log(multiply);

//2. Viết hàm findMin
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log("số nhỏ nhất là:", findMin(100, 4, 90));
console.log("số nhỏ nhất là:", findMin(1, 0.5, 40));


// 3. Viết hàm getTopStudents
//students có dạng [{name : "Huyền", score: 70}]
// threshold = 70
function getTopStudents(students, threshold) {
    const studentNames = [];
    // lặp mảng qua student
    for (let i = 0; i < students.length; i++) {
        if (students[i].score > threshold) { // nếu students[i].core lớn hơn threshold -> đưa vào mảng studentNames
            studentNames.push(students[i].name);
        }
    }
    return studentNames;
}
// Gọi hàm với ví dụ thực tế
const students = [
    { name: "Huyền", score: 90 },
    { name: "Ngọc", score: 80 },
    { name: "Linh", score: 60 }
];
const ketQua = getTopStudents(students, 50);
console.log("Học sinh Top là:", ketQua);


// 4. Viết hàm calculateInterest
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}
const total = calculateInterest(1000000, 2, 3);
console.log(`tổng tiền sau 3 năm là:`, total);