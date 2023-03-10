function DanhSachNhanVien() {
    this.mangNV =[];

    //phương thức
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.findIndexNV = function(id){
        var indexFind = -1;

        indexFind = this.mangNV.findIndex(function (nv) {
            return nv.taiKhoan == id;
        })

        return indexFind;
    }

    this.xoaNV = function (id) {
        var index = this.findIndexNV(id);
        if (index != -1) {
            this.mangNV.splice(index,1)
        }
    }

    this.capNhatNV = function (nv) {
        var index = this.findIndexNV(nv.taiKhoan);
        if (index != -1) {
            this.mangNV[index] = nv;
        } 
    }
}


//Đổi chữ in hoa thành chữ thường
DanhSachNhanVien.prototype.searchName = function (keyword) {
    var mangKQ = []
    var keywordLowerCase = keyword.toLowerCase(); 
    keywordLowerCase = keywordLowerCase.replace(/\s/g,"");

    this.mangNV.map(function (nv) {
        var nameLowerCase = nv.tenNV.toLowerCase().replace(/\s/g,"");

        if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
            mangKQ.push(nv);
        }
    });

    return mangKQ;
}