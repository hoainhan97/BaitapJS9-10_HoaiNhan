function Validation() {
    this.checkEmpty = function (valueInput, spanID, message) {
        if (valueInput == "") {
            //ko hợp lệ 
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }
        //hợp lệ
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.checkTK = function (valueInput, spanID, message, mangNV) {
        var isExist = false;
        isExist = mangNV.some(function (nv) {
            return valueInput === nv.taiKhoan
        });
        if (isExist) {
            //tài khoản trùng => không hợp lệ
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }else {
            //tài khoản ko trùng => hợp lệ 
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }
    }

    this.checkName = function (valueInput, spanID, message) {
        var pattern = /^[A-Z a-z]+$/

        if (pattern.test(valueInput)) {
            //hợp lệ
           

            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        }
        else {
            //ko hợp lệ  

            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

}
this.checkEmail = function (valueInput, spanID, message) {
    var patternString =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (patternString.test(valueInput)) {
        //hợp lệ
        

        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }
    else {
      

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }

}
this.checkPass = function (valueInput, spanID, message) {
   
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/
    if (pattern.test(valueInput)) {
        //hợp lệ
    
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true
    }
    else {
       //ko hợp lệ  

        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false
    }
               
}
this.checkSelect = function (selectID,spanID,message) {
    var indexOption = document.getElementById(selectID).selectedIndex;
    if (indexOption !== 0) {
         //hợp lệ
    
         document.getElementById(spanID).style.display = "none";
         document.getElementById(spanID).innerHTML = "";
         return true
     }
     else {
        
 
         document.getElementById(spanID).style.display = "block";
         document.getElementById(spanID).innerHTML = message;
         return false
     }
        
    }

    this.checkSalary = function (valueInput, spanID, message) {
        // cái pattern ni thì dk thế nào dậy? là sao a
        // cái đoạn pattern dưới nek, e lấy trên file qlsv hôm bữa học đó a,ý nghiax của đoạn ni không biết  mah đem sài hỏw,hôm bữa học c Nguyên bảo là chỉ dc gõ số, nhập chữ báo lỗi
        // cái doạn này chỉ cho nhap so chri 2 chữ số hoy nên khi nhập nhìu nó báo lỗi đúng ròi
        // var pattern = /^(\d{1,2}(\.\d{1,2})?)$/
        // var test = pattern.test(valueInput)
        // console.log(test)
        // vì đổi type về number nên ng dùng chỉ nhập được số hoy
        //! lưu ý: bất kể input là gì thì value lấy về là kiểu string !
        
        if (valueInput >=1000000 && valueInput<=2000000) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        } else {
       

            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

    }

    this.checkTime = function (valueInput, spanID, message) {
        

        if ( valueInput >=80 && valueInput <= 200) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = "";
            return true
        } else {
       

            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false
        }

    }


}