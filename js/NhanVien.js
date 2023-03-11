// thuộc tính
function NhanVien(taiKhoan, tenNV, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;

    this.tongLuong = 0;
    this.xepLoai = "";

    //phương thức 



    this.tinhLuong = function () {
        // var chucVu = document.querySelector("#chucvu").value;  
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCB * 3;

                break;

            case "Trưởng phòng":
                this.tongLuong = this.luongCB * 2;

                break;

            case "Nhân viên":
                this.tongLuong = this.luongCB * 1;

                break;

            default: 

        }
    }

    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = "Xuất Sắc"
        } else if (this.gioLam >= 176) {
            this.xepLoai = "Giỏi"
        } else if (this.gioLam >= 160) {
            this.xepLoai = "Khá"
        } else if (this.gioLam < 160) {
            this.xepLoai = "Trung Bình"
        }
    }
}

