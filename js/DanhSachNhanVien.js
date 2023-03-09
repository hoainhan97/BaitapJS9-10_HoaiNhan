function DanhSachNhanVien() {
    this.mangNV =[];

    //phương thức
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.findIndexNV = function(id){
        var indexFind = -1;

        indexFind = this.mangNV.findIndex(function (sv) {
            return nv.taiKhoan == id;
        })

        return indexFind;
    }
}