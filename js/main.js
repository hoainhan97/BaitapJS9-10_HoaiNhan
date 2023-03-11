const dsnv = new DanhSachNhanVien();
const validation = new Validation();


function getELE(id) {
    return document.getElementById(id);
}

//Hiển thị thông tin lên table
function hienThiTable(mang) {
    var content = "";

    mang.map(function (nv, index) {

        var trELE = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td>
        <button onclick="xemChiTiet('${nv.taiKhoan}')" class="btn btn-success">Xem</button>    
        <button onclick="xoaNhanVien('${nv.taiKhoan}')" class="btn btn-danger">Xóa</button>
        </td>
    
        </tr>`
        content += trELE;

    })

    getELE("tableDanhSach").innerHTML = content;
}


function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang))
}

function getLocalStoeStorage() {
    var arr = []
    if (localStorage.getItem("DSNV") != null) {
        arr = JSON.parse(localStorage.getItem("DSNV"));
        console.log(arr)
        hienThiTable(arr);
    }
}


function themNhanVien() {

    var taiKhoan = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = Number(getELE("gioLam").value);
    console.log(taiKhoan, tenNV, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    var nv = new NhanVien( taiKhoan, tenNV, email, matKhau, ngayLam, luongCB, chucVu, gioLam )
    nv.tinhLuong()
    nv.xepLoai()
    console.log(nv)
    dsnv.themNV(nv)
    
    setLocalStorage(dsnv.mangNV)
    getLocalStoeStorage()


    //TODO VALIDATION:
    var isValid = true;
    //taiKhoan
    isValid &= validation.checkEmpty(taiKhoan,"tbTKNV","Tài khoản không được để trống") && validation.checkTK(taiKhoan,"tbTKNV","Tài khoản không được trùng", dsnv.mangNV);
    
    //tenNV
    isValid &= validation.checkEmpty(tenNV,"tbTen","Tên nhân viên không được để trống!") && validation.checkName(tenNV,"tbTen","Tên nhân viên chưa đúng định dạng");

    //email
    isValid &= validation.checkEmpty(email,"tbEmail","Email ko được để trống!") && validation.checkEmail(email,"tbEmail","Email chưa đúng định dạng");

    //pass
    isValid &= validation.checkEmpty(matKhau,"tbMatKhau","Mật khẩu ko được để trống!") && validation.checkPass(matKhau,"tbMatKhau","Mật khẩu chưa đúng định dạng");

    //chức vụ
    isValid &= validation.checkSelect("chucvu","tbChucVu", "Chức vụ chưa hợp lệ!");

    // lương: số, 1000000 => 20000000
    isValid &= validation.checkEmpty(luongCB,"tbLuongCB","Lương ko được để trống!") && validation.checkSalary(luongCB,"tbLuongCB", "Lương không hợp lệ!");

    //giờ làm
    isValid &= validation.checkEmpty(gioLam,"tbGiolam","Giờ làm ko được để trống!") && validation.checkTime(gioLam,"tbGiolam", "Giờ làm không hợp lệ!");


    if (isValid) {
        var nv = new NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, Number(luongCB), chucVu, Number(gioLam));


        dsnv.themNV(nv);
        console.log(dsnv.mangNV)
        hienThiTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }




}


getLocalStoeStorage();



function xoaNhanVien(id) {
    console.log(id)
    dsnv.xoaNV(id);
    setLocalStorage(dsnv.mangNV);
    getLocalStoeStorage();
}


function xemChiTiet(id) {
    var index = dsnv.findIndexNV(id);
    if (index != -1) {
        console.log(dsnv.mangNV[index]);
        getELE("tknv").value = dsnv.mangNV[index].taiKhoan
        getELE("name").value = dsnv.mangNV[index].tenNV;
        getELE("email").value = dsnv.mangNV[index].email;
        getELE("password").value = dsnv.mangNV[index].matKhau;
        getELE("datepicker").value = dsnv.mangNV[index].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[index].luongCB;
        getELE("chucvu").value = dsnv.mangNV[index].chucVu;
        getELE("gioLam").value = dsnv.mangNV[index].gioLam;
    }
}

function capNhat() {
    var taiKhoan = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = Number(getELE("luongCB").value);
    var chucVu = getELE("chucvu").value;
    var gioLam = Number(getELE("gioLam").value);

    var nv = new NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, Number(luongCB), chucVu, Number(gioLam));
    nv.tongLuong();
    nv.xepLoai();


    dsnv.capNhatNV(nv);
    setLocalStorage(dsnv.mangNV)
    getLocalStoeStorage();
}


function search() {
    var keyword = getELE("searchName").value;
    
    var mangKQ = dsnv.searchName(keyword);

    hienThiTable(mangKQ);
}

getELE("btnTimNV").onclick = search;

getELE("searchName").onkeyup = function () {
    var keyword =  getELE("searchName").value;
    var mangKQ = dsnv.searchName(keyword);
    hienThiTable(mangKQ);

}