const dsnv = new DanhSachNhanVien();

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
        <button class="btn btn-success">Xem</button>    
        <button class="btn btn-danger">Xóa</button>
        </td>
    
        </tr>`
        content += trELE;

    })

    getELE("tableDanhSach").innerHTML = content;
}


function setLocalStorage(mang) {
    localStorage.setItem("DSNV",JSON.stringify(mang))
}

function getLocalStoeStorage() {
    var arr=[]
    if (localStorage.getItem("DSNV") != null) {
        arr= JSON.parse(localStorage.getItem("DSNV"));
        console.log(arr)
        hienThiTable(arr);
    }
}
//* can than cho này de loi neu trong localstorage chưa có dữ liệu
// phia trong hamf co xu lys dk roif nen chac ko sao
//daj anh no chua hien 2 nut button xem va xoa, anh coi giup e
//! thuwr them 1 nv anh xem, da de em sua lai id


function themNhanVien() {
    
    var taiKhoan = getELE("tknv").value; 
    var tenNV = getELE("name").value; 
    var email = getELE("email").value; 
    var matKhau = getELE("password").value; 
    var ngayLam = getELE("datepicker").value; 
    var luongCB = getELE("luongCB").value; 
    var chucVu = getELE("chucvu").value; 
    var gioLam = getELE("gioLam").value; 
    console.log(taiKhoan,tenNV,email,matKhau,ngayLam,luongCB,chucVu,gioLam);
    dsnv.themNV({taiKhoan,tenNV,email,matKhau,ngayLam,luongCB,chucVu,gioLam})
    setLocalStorage(dsnv.mangNV)
    getLocalStoeStorage()

}


// thêm sưk kiện butôn bắt kiện sau khi nguoi dùng nhập thông tin
//

getLocalStoeStorage()