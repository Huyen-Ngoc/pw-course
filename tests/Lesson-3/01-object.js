// Bài 1
let car = {
    make : "Toyota",
    model : "Corolla",
    year : 2021
};
console.log(`Năm sản xuất: ${car.year}`);

// Bài 2
let person = {
    name : "Huyen",
    address : {
        street : "Pham Van Dong",
        city : "Ha Noi",
        country : "Viet Nam"
    }
}; 
console.log (`Street: ${person.address.street}`);

// Bài 3
let student = {
    name : "",
    grades : {
        math : 10,
        english: 9
    }
};
console.log (`Điểm môn toán: ${student["grades"]["math"]}`);

// Bài 4
let settings = {
    volume : "",
    brightness : ""
};

settings.volume = "max"
console.log (settings);

// Bài 5
let bike = {

};
bike.color = "pink"
console.log (bike);

// Bài 6
let employee = {
    name : "Huyen",
    age : 23
};
delete employee.age;
console.log (employee);

// Bài 7 
let school = {
    classA : ["An", "Bình", "Châu"],
    classB : ["Đào", "Hương", "Giang"],
};
console.log (school);
