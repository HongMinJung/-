//rooms swiper
var swiper = new Swiper('.rooms .swiper-container', {
    slidesPerView: 4,
    spaceBetween: '1.95%',
    loop: true,
    //roundLengths 텍스트나 이미지의 흐릿함을 잡아줌(너비 및 높이값을 반올림 해줌)!
    roundLengths: true,
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    }
});

//event swiper
var swiper = new Swiper('.event .swiper-container', {
    slidesPerView: 3,
    spaceBetween: '1%',
    loop: false,
    loopFillGroupWithBlank: true,
    roundLengths: true,
    navigation: {
        nextEl : '.event_next',
        prevEl : '.event_prev',
    }
});

//slide
var k = 0;
slidePlay();
var autoPlay = setInterval(slidePlay,8000);

function slidePlay() {  
    var playBtn = $('.title input[id="playbutton"]').prop('checked');
    if (playBtn == true){
        clearInterval(autoPlay);
    } else {
    
        if (k>=2){
            $('.title input[type="radio"]').eq(k).prop('checked',true);
            k=0;
        } else {
            $('.title input[type="radio"]').eq(k).prop('checked',true);
            k++
        };
    }
};

function slideStop(num) {
    var playBtn = $('.title input[id="playbutton"]').prop('checked');
    if(playBtn !== true){
        var autoPlay = setInterval(slidePlay,8000);
    };
};



//a link block
$('a[href="#"]').click(function(e){
    e.preventDefault();
    $('.alert').stop().fadeIn(700);

    setTimeout(function(){
        $('.alert').stop().fadeOut(700);
    },3000);
});