// Format VND
var currentFormat = new Intl.NumberFormat('vn-VN');


// <!-- Bài tập 1 -->
/**
 * Đầu vào:
 * -Tạo biến: số ngày làm, lương 1 ngày, tổng lương
 * Xử lý:
 * -Tính lương nhân viên = số ngày làm * lương 1 ngày 
 * Đầu ra:
 * -Show kết quả
 */
var btnTinhLuong = document.getElementById('btnTinhLuong');
btnTinhLuong.onclick = function (){
    var luongNgay = document.getElementById('luongNgay').value*1;
    var soNgayLam = document.getElementById('soNgayLam').value*1;
    var tongLuong = luongNgay * soNgayLam;
    document.getElementById('luongNV').innerHTML = ('Lương lãnh được: ' + currentFormat.format(tongLuong));
};

// <!-- Bài tập 2 -->
/**
 * Đầu vào:
 * - Tạo ra 5 biến để nhập 5 giá trị
 * Xử lý:
 * - Lấy giá trị 5 biến + lại rồi chia cho 5
 * Đầu ra:
 * - Show giá trị TB
 */
var btnTB = document.getElementById('btnTB');
btnTB.onclick = function () {
    var st1 = document.getElementById('st1').value*1;
    var st2 = document.getElementById('st2').value*1;
    var st3 = document.getElementById('st3').value*1;
    var st4 = document.getElementById('st4').value*1;
    var st5 = document.getElementById('st5').value*1;
    var tb = (st1+st2+st3+st4+st5)/5;
    document.getElementById('gttb').innerHTML = ('Tổng giá trị TB là: ' + tb);
}
// <!-- Bài Tập 3 -->
const giaUSD = 23500;
var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function () {
    var soTien = document.getElementById('soTien').value*1;
    var quydoi = soTien * giaUSD;
    document.getElementById('doiTien').innerHTML = ('Tổng tiền đổi được: ' + currentFormat.format(quydoi) + ' VND');

}
// <!-- Bài Tập 4  -->
/**
 * Đầu vào:
 * - Tạo 2 biến để nhập giá trị chiều dài và rộng
 * Xử lý: 
 * - Tính diện tích = dài * rộng
 * Đầu ra:
 * - Show diện tích
 */
var btnTinhDT = document.getElementById('btnTinhDT');
btnTinhDT.onclick = function () {
    var length = document.getElementById('length').value*1;
    var width = document.getElementById('width').value*1;
    var acreage = length * width;
    document.getElementById('tongDT').innerHTML = ('Tổng diện tích là: ' + acreage + 'cm')
}
// <!-- Bài Tập 5 -->
/**
 * Đầu vào:
 * - Tạo 2 biến để xác định: số hàng chục và số hàng đơn vị
 * Xử lý: 
 * - Tính tổng 2 ký số = số hàng chục + số hàng đơn vị
 * Đầu ra:
 * - Show kết quả
 */
var total = document.getElementById('total');
total.onclick = function () {
    var so = document.getElementById('so').value*1;
    // var dvDonVi = so % 10;
    var dvChuc = so / 10;
console.log(dvChuc);
}

// var so = document.getElementById('so').value*1;
// var dvChuc = so % 10;
// console.log(dvChuc);



