// bai tập 1 tính lương ngày
document.querySelector('.btn-success').onclick = function () {
    var luongNgay = document.getElementById('luongNgay').value*1;
    var soNgayLam = document.getElementById('soNgayLam').value*1;
    var ketQua = luongNgay * soNgayLam;
     document.getElementById('ketQua').innerHTML = 'Kết quả: ' + ketQua + ' VNĐ';
};
// bai tập 2
document.querySelector('.btn-danger').onclick = function() {
    var so1 = parseFloat(document.getElementById('So1').value);
    var so2 = parseFloat(document.getElementById('So2').value);
    var so3 = parseFloat(document.getElementById('So3').value);
    var so4 = parseFloat(document.getElementById('So4').value);
    var so5 = parseFloat(document.getElementById('So5').value);
    var ketQua2 = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById('ketQua2').innerHTML = `Kết quả: ${ketQua2.toFixed(2)}` ;
};
// bài tập 3
document.querySelector('.btn-primary').onclick = function(){
    var tienQuyDoi = document.getElementById('soTien').value;
    var tyGiaUSDToVND = 23500;
    var soTienVND = tienQuyDoi * tyGiaUSDToVND;
    var formatTien = new Intl.NumberFormat('vn-VN', {
        style: 'currency',
        currency: 'VND'
    });
    var soTienVNDFormatted = formatTien.format(soTienVND);
  document.getElementById('ketQua3').innerHTML = ` số tiền quy đổi: ${soTienVNDFormatted} VND `; 
}

// bài tập 4
document.querySelector('.btn-Tinh').onclick = function() {
    var chieuDai = parseFloat(document.getElementById('chieuDai').value);
    var chieuRong = parseFloat(document.getElementById('chieuRong').value);
    var DienTich = chieuDai * chieuRong;
    var ChuVi = (chieuDai + chieuRong) * 2;
  document.getElementById('ketQua4').innerHTML = `Diện tích: ${DienTich}, Chu Vi: ${ChuVi}`;
}
//bài tập 5
document.querySelector('.btn-sum').onclick = function() {
   var sonhap = document.getElementById('sonhap').value*1;
   var so_hang_dv = sonhap % 10;
   var so_hang_chuc = Math.floor(sonhap / 10);
   var sum = so_hang_chuc + so_hang_dv;
    document.getElementById('ketQua5').innerHTML = `Tổng: ` + sum;
}
