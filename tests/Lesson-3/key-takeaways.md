# Git
## Undo Action
- git commit - amend: dùng để thay đổi commit massage 
- git commit - amend -m "message": dùng để thay đổi commit message mà không cần phải mở hộp thoại
- git restore -- staged <file> dùng để đưa file từ vùng staging về working directory (file là relative path)
- git reset HEAD~1: dùng để đưa file commit từ repository về working directory (HEAD~1: là số commit muốn undo)
## Branching Model
- branch dùng để tạo một vùng làm việc mới, không ảnh hưởng đến vùng làm việc chung
- Lệnh tạo branch: 
1. git branch <ten_branch>
git checkout <ten_branch> -> chuyển sang nhánh vừa tạo

2. git checkout -b <ten_branch> -> vừa tạo nhánh và checkout luôn sang nhánh vừa tạo
## .gitignore
- là file dùng để bỏ qua các file không cần git theo dõi
- Ignore file: <file_name> -> copy relative path file
- Ignore folder: <file_folder> -> tương tự file
# Java Script Basic
## Quy tắc đặt tên trong code (Convention)
- snake_case: chưa dùng (VD: hinh_chu_nhat)
- kebab-case: tên file/folder
- camelCase: tên biến (VD: hinhChuNhat)
- PascalCase: tên class (HingChuNhat)
## Fomat console.log
-> lệnh: console.log(`${variable_name}`);
VD: let student = "Huyen"
console.log(`My name is${student}, có thể ghi thêm phía sau`);
## Object
-> dùng để lưu trữ các tập hợp các gtri vào cùng 1 biến or hằng số
- Khai báo: 
let/const <ten_object> = {
    <thuoc_tinh> : <gia_tri>,
}
- Ví dụ: 
let student = {
    name : "Huyen",
    age : 23,
    role : "QA",
    address : {
        number : 10,
        street: "Pham Van Dong"
    },
    class : "K16"
};
 - Truy xuất thuộc tính đối tượng
 console.log(`Student name: ${student.name}`);
 console.log(`Street name: ${student.address.street}`); -> đối tượng lồng nhau 
 hoặc: console.log(`Student name: ${student.["name"]}`);
- Thêm mới hoặc thay đổi 1 thuộc tính: 
student.class = "K16"; ->  console.log(`Student name: ${student.class}`);
## Toán tử logic 
- && cả 2 vế của mệnh đề đều đúng
- || một trong 2 vế đúng
- ! đảo ngược lại giá trị của mệnh đề 
## Array: Mảng
- Có thể chứa các kiểu dữ liệu: string, number, ... object
- giá trị của mảng chạy từ 0 đến n-1 (n là số phần tử của mảng)
- Tìm giá trị của 1 phần tử: console.log(studentArr[0]);
- Tìm vị trí của 1 phần tử: console.log(studentArr.indexOf("tên")); 
- Khi dùng indexOf, với 1 phần tử không xuất hiện trong mảng sẽ in ra vị trí: -1 
## Function: Hàm 
- là đoạn code viết ra để thực hiện 1 nhiệm vụ nhất định & có thể tái sử dụng
- cú pháp: 
function helloWorld() {
    console.log ("Hello world!")
}; 
hellWorld(); 
-> hàm được in ra

