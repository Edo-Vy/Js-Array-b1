// Array : là kiểu dữ liệu lưu trữ nhiều giá trị có cùng kiểu dữ liệu và cách nhau bởi dấu ,

//Read : Truy xuất 1 phần tử trong mảng tenMang[index]

//--gobal variable : là biến input cho tất cả bài toán bên dưới
var arrNumber = [4, 5, 9, 7, 8, 10, 12];

/**
 * Ví dụ 1: Cho phép người dùng thêm 1 phần tử vào mảng
 */
document.getElementById('btnThem').onclick = function () {

    //input: :Number - số người dùng nhập vào
    var iSo1 = Number(document.getElementById('iSo1').value);

    //output
    var output = '';
    // Thêm 1 phân tử vào mảng
    arrNumber.push(iSo1); // push thêm 1 phần tử vào cuối mảng
    output = '[' + arrNumber + ']';

    // Hiển thị mảng ra giao diện sau khi thêm

    document.getElementById('arr').innerHTML = output;
}

/**
 *  Ví dụ 2: Cho phép người dùng nhập vào 1 giá trị, xóa giá trị đó ra khỏi
        mảng, nếu trong mảng đó không có giá trị thì hiển thị không có giá trị
        đó
 */
//=== Cách 1
document.getElementById('btnXoa').onclick = function () {

    //input : Number : số người dùng nhập vào

    var giaTri = Number(document.getElementById('iSo2').value);

    //output : index vị trí phần xóa
    var index = -1; // mảng bắt đầu từ 0 -- lính canh
    // Tìm kiếm, xóa, lấy ra thay đổi.....phải duyệt mảng ( chạy index qua các phần tử của mảng)
    for (var i = 0; i < arrNumber.length; i++) { //  i<= arrNumber.length -1

        var ele = arrNumber[i]; // ele : phần tử

        if (giaTri === ele) {

            index = i; // Nếu giá trị nhập vào trùng với giá trị trong mảng thì lấy ra giá trị i ( index tại đó)
            break;
        }
    }
    if (index !== -1) {
        // Xóa dữ liệu của mảng tại vị trí tìm thấy

        arrNumber.splice(index, 1);
        // Cập nhật lại giao diện
        document.getElementById('arr').innerHTML = '[' + arrNumber + ']';
    } else {
        alert('Không tìm thấy phần tử ' + giaTri + 'trong mảng');
    }

}

//====== Cách 2 -- duyệt mảng ngược chạy từ cuối mảng -> đầu
// document.getElementById('btnXoa').onclick = function () {

//     //input : Number : số người dùng nhập vào

//     var giaTri = Number(document.getElementById('iSo2').value);

//     //output : index vị trí phần xóa
//     var index = -1; // mảng bắt đầu từ 0 -- lính canh
//     // Tìm kiếm, xóa, lấy ra thay đổi.....phải duyệt mảng ( chạy index qua các phần tử của mảng)
//     for (var i = arrNumber.length - 1; i >= 0; i--) { //  i<= arrNumber.length -1

//         var ele = arrNumber[i]; // ele : phần tử

//         if (giaTri === ele) {

//             index = i; // Nếu giá trị nhập vào trùng với giá trị trong mảng thì lấy ra giá trị i ( index tại đó)
//             arrNumber.splice(index, 1);

//         }

//     }
            // if (index !== -1) {
                
            //     // Cập nhật lại giao diện
            //     document.getElementById('arr').innerHTML = '[' + arrNumber + ']';
            // } else {
            //     alert('Không tìm thấy phần tử ' + giaTri + 'trong mảng');
            // }
//     document.getElementById('arr').innerHTML = '[' + arrNumber + ']';

// }


/**
 * Ví dụ: Lấy thông tin dữ liệu thông qua tagname
 */

var arrTagName = document.getElementsByTagName('section');

/**
 * Bài tập: In ra vị trí số lớn nhất và vị trí số lớn nhấ trong mảng
 * 
 */
var soLon = document.querySelector('.btnInSo');

soLon.onclick = function(){

    // input : arrNumber : Number

    //output : indexMax --- maxNumber
    var indexMax = 0;
    var max = arrNumber[0];
    for ( var index = 0; index < arrNumber.length; index ++){
        // Mỗi lần duyệt lấy ra một số
        var num = arrNumber[index];
        if ( num > max){

            max = num; // lưu giá trị
            indexMax = index; // lưu vị trí
        }
    }
    document.querySelector('#ketQua1').innerHTML = 'Số lớn nhất là '+ max + ' - Vị trí số lớn nhất là '+ indexMax ;
}

/**
 * Bài tập : In tất cả số lẻ
 */
document.querySelector('.btn-InLe').onclick = function(){

    var soLe = 2;
    var output = [];
    // output: arr[số lẻ]
    for (var index = 0; index < arrNumber.length; index++){

        //Mỗi lần duyệt lẩy ra 1 số
        var num = arrNumber[index];
        if(num % soLe !== 0){
            //Nếu là số lẻ thì add vảo mảng số lẻ
            output.push(num);
        }
    }

    document.querySelector('#ketQua2').innerHTML = 'Mảng số lẻ [' + output + ' ]';
}