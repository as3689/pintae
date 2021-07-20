let id = $('#id');
let pw = $('#pw');
let btn = $('#btn');

$(btn).on('click', function() {
    if($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(pw).val()=="") {
        $(pw).next('label').addClass('warning');
    }
    

})


function check(form) {
 if(form.id.value=="admin"&&form.pw.value=="1234") {
    
    // location.replace("main.html")
    window.open("main.html")
 }
 else {
     alert("사용자의 ID와 Password를 다시 확인 후 시도해 주세요.\n ID : admin \n PW : 1234")
 }
}