/** Bai 1
 * K1 : Quản lí tuyển sinh

 * KV_A
 * KV_B
 * KV_C
 * DT_1
 * DT_2
 * DT_3
 * 
 * K2 :
 * Diểm tổng kết :
 * 1: DT = mon_A + mon_A + mon_A + KV + DT => Điểm tổng
 * mon_A == 0 || mon_B == 0 || mon_C == 0 = rớt do điểm 0
 * DT so sánh với DC => if (DT >= DC) => Đậu và ngược lại
 * 
 * K3:
 * DT
 * Đậu Or rớt or điểm rớt bằng 0
 */


var kv_0 = 0;
var kv_A = 2;
var kv_B = 1;
var kv_C = 0.5;
var dt_0 = 0;
var dt_1 = 2.5;
var dt_2 = 1.5;
var dt_3 = 1;




function tuyensinh() {
     var kv = document.getElementById("kv").value;
     var dt = document.getElementById("dt").value;
     var dc = Number(document.getElementById("dc").value);
     var mon_A = Number(document.getElementById("mon1").value);
     var mon_B = Number(document.getElementById("mon2").value);
     var mon_C = Number(document.getElementById("mon3").value);

     var diem_KV = ktKV(kv);
     var diem_DT = ktDT(dt);
     var diem_Tong = mon_A + mon_B + mon_C + diem_KV + diem_DT;

     if (mon_A == 0 || mon_B == 0 || mon_C == 0) {
          document.getElementById("diem").innerHTML = "Bạn đã rớt. Do có môn điểm bằng 0";
     } else if (diem_Tong >= dc) {
          document.getElementById("diem").innerHTML = "Bạn đã Đậu. Tổng điểm là: " + diem_Tong;
     } else {
          document.getElementById("diem").innerHTML = "Bạn đã rớt. Tổng điểm là: " + diem_Tong;

     }

}

function ktKV(kv) {
     switch (kv) {
          case "kv_0": return kv_0;
          case "kv_A": return kv_A;
          case "kv_B": return kv_B;
          case "kv_C": return kv_C;
     }
}
function ktDT(dt) {
     switch (dt) {
          case "dt_0": return dt_0;
          case "dt_1": return dt_1;
          case "dt_2": return dt_2;
          case "dt_3": return dt_3;
     }
}


// onclick
document.getElementById("btn_kq").onclick = tuyensinh;



/**
 * Bài 2: Tính tiền điện
 * K1 :
 * input: 
 * tenKH
 * soKW
 * 
 * K2 :
 * + Nếu soKW <= 50 => tienDien = soKW*giaTien1;
 * + Nếu 50 < soKW <= 100 => tienDien = 50*giaTien1 + (soKW - 50)*giaTien2;
 * + Nếu 100 < soKW <= 200 => tienDien = 50*giaTien1 + 50*giaTien2 + (soKW - 100)*giaTien3  ;
 * + Nếu 200 < soKW <= 350 => tienDien = 50*giaTien1 + 50*giaTien2  + 100*giaTien3 + (soKW - 200)giaTien4  ;
 * + Nếu 350 < soKW <= 100 => tienDien = 50*giaTien1 + 50*giaTien2  + 100*giaTien3 + 150*giaTien4 + (soKW - 350)*giaTien5  ;
 * K3 
 * output
 * tên KH và tiền điện
 * 
 */


var giaTien1 = 500;
var giaTien2 = 650;
var giaTien3 = 850;
var giaTien4 = 1100;
var giaTien5 = 1300;

function tinhTienDien() {
     var tenKH = document.getElementById("name").value;
     var soKW = Number(document.getElementById("soKW").value);

     var tienDien = 0;

     if (soKW <= 50) {
          tienDien = soKW * giaTien1;
     } else if (50 < soKW && soKW <= 100) {
          tienDien = 50 * giaTien1 + (soKW - 50) * giaTien2;
     } else if (100 < soKW && soKW <= 200) {
          tienDien = 50 * giaTien1 + 50 * giaTien2 + (soKW - 100) * giaTien3;
     } else if (200 < soKW && soKW <= 350) {
          tienDien = 50 * giaTien1 + 50 * giaTien2 + 100 * giaTien3 + (soKW - 200) * giaTien4;
     } else if (350 < soKW) {
          tienDien = 50 * giaTien1 + 50 * giaTien2 + 100 * giaTien3 + 150 * giaTien4 + (soKW - 350) * giaTien5;
     } else {
          alert("Bạn đang nhập số âm")
     }
     document.getElementById("tiendien").innerHTML = "Tên khách hàng: " + tenKH + "<br>" + " Số tiền điện: " + Intl.NumberFormat('de-DE').format(tienDien);
}
// onclick
document.getElementById("btn_tiendien").onclick = tinhTienDien;