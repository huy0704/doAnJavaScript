$(document).on('click', '#success',function(e) {
    swal(
        'Thành công',
        'Bạn thanh toán <b style="color:green;">thành công</b>!',
        'success'
    )
});

function thongbaopopup(){
    document.getElementById("tbpopup-1").classList.toggle("active");
    };
