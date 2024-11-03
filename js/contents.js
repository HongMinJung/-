$(document).ready(function(){
    // 객실 이미지 박스슬라이더
    $('.slider').bxSlider({
        // auto: true,
        pager: true,
        touchEnabled : false,
    });

    // 객실 둘러보기 박스 슬라이더
    $('.room_slider').bxSlider({
        pager: true,
        touchEnabled : false,
    });

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    if(month<10){
        month = '0' + month 
    }
    var day = today.getDate();
    var nowDate = year + '-' + month + '-' + day;
    var tomorrow = year + '-' + month + '-' + (day+1);
    console.log(nowDate);
    
    $('.arrival input[type="date"]').val(nowDate);
    $('.deperture input[type="date"]').val(tomorrow);
});