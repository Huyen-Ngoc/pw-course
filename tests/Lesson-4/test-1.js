// 1. Khởi động Tàu Vũ trụ K16
let departurePlanet = "Trái đất";
let mission = "Khám phá vụ trụ K16";
let crew = {
    name: ["Huyền", "Linh", "Hà", "Đức Anh", "Tú"]
};
function launchShip(name, mission) {
    const launchShip = [];
    return launchShip;
}
console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.name} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
let speed = 1000;
let time = 24;

let distance = calculateDistance(speed, time);

console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}
let decimalTime = 120;
let hexadecimalTime = convertTimeToHex(decimalTime);

console.log(`Thời gian trên hành tinh bí ẩn là: ${hexadecimalTime}`);

// 4. Khám phá kho báu
function decryptCode(code) {
    return code.toLowerCase();
}
function decryptCode(code) {
    return code.toUpperCase();
}
let code = "K16 Challenge";
let lowercaseCode = decryptCode(code);
let uppercaseCode = decryptCode(code);

console.log(`Mã code in thường là: ${lowercaseCode}`);
console.log(`Mã code in hoa là: ${uppercaseCode}`);

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái đất!")
};
returnToEarth();


