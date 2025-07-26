// Bài 1: tính tổng từ 1-100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1-100 là", sum);

// Bài 2: in bảng cửu chương từ 2 đến 9 
for (let i = 2; i <= 9; i++) { 
    console.log(`Bảng cửu chương ${i}`);
    for (let j = 1; j <= 10; j++) { //dòng phép tính
        console.log(`${i}*${j} = ${i * j}`);
    }
}

// Bài 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let arr = [];

for (let i = 1; i <= 99; i = i + 2) {
    arr.push(i);
}
console.log("Mảng chứa các số lẻ:", arr);

//Bài 4. In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng
const banGhi = [
    { month: 1, total: 50 },
    { month: 2, total: 100 },
    { month: 3, total: 200 },
    { month: 4, total: 300 },
    { month: 5, total: 400 },
    { month: 6, total: 500 },
    { month: 7, total: 600 },
    { month: 8, total: 700 },
    { month: 9, total: 800 },
    { month: 10, total: 900 },
    { month: 11, total: 1000 },
    { month: 12, total: 1100 }

];
let total = 0;

for (i = 0; i < banGhi.length; i++) {
    //lấy ra doanh tháng i
    let doanhThu = banGhi[i].total;
    //cộng vào biến tổng
    total = total + doanhThu;
}
console.log("Tổng doanh thu là:", total);