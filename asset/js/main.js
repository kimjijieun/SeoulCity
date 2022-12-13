$(function () { //로드후 실행

    //페이지 오픈
    $('#btnLang').click(function () {
        link = $('#selectLang').val()
        //  console.log(link);
        window.open(link);
    })

    //  체크박스
    $('.chk-wrap label').click(function () {
        $(this).toggleClass('active')
    })
    // 닫기 사라지기
    $('.chk-wrap .btn-close').click(function () {
        $('.ad-box').hide();
    })


    // 컴온으로
    $('.sc-slide .slide-title').click(function (e) {
        e.preventDefault();
        $(this).parent('.slide-content').addClass('active').siblings('.slide-content').removeClass('active');

        if ($(this).parent().hasClass('slide1')) {
            slide2.autoplay.stop();//서로반대되는건 정지

            if ($(this).parent().find('.pause').hasClass('active')) { //현재 pause에 active가 들어가있냐
                slide1.autoplay.start(); 
            } else {
                slide1.autoplay.stop();
            }
            
        } else {
            slide1.autoplay.stop();//서로반대되는건 정지

            if ($(this).parent().find('.pause').hasClass('active')) {
                slide2.autoplay.start(); //시작할때 자동으로 스타트
            } else {
                slide2.autoplay.stop();
            }
        }
    })

// 1번 주요뉴스
    var slide1 = new Swiper(".slide1 .swiper", {
        loop: true,
        /* 무한반복 */
        navigation: {
            nextEl: ".slide1 .next",
            prevEl: ".slide1 .prev",
        },
        pagination: {
            el: ".slide1 .number",
            type: "fraction",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    $('.slide1 .btn-play').click(function(e){
        e.preventDefault();

        if( $(this).find('.pause').hasClass('active') ){
            slide1.autoplay.stop();
            $(this).find('.start').addClass('active').siblings().removeClass('active');
            //start를 선택해서 active주고 형제인 pause에서 active빼라
        }else{
            slide1.autoplay.start();
            $(this).find('.pause').addClass('active').siblings().removeClass('active');
            // pause에서 active를 넣고 형제를 빼라
        }

    })




// 2번 시민참여

    var slide2 = new Swiper(".slide2 .swiper", {
        loop: true,
        /* 무한반복 */
        navigation: {
            nextEl: ".slide2 .next",
            prevEl: ".slide2 .prev",
        },
        pagination: {
            el: ".slide2 .number",
            type: "fraction",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    slide2.autoplay.stop(); //1번돌아갈때 처음부터 멈춰있었어야하니까

    $('.slide2 .btn-play').click(function(e){
        e.preventDefault();

        if( $(this).find('.pause').hasClass('active') ){
            slide2.autoplay.stop();
            $(this).find('.start').addClass('active').siblings().removeClass('active');
        }else{
            slide2.autoplay.start();
            $(this).find('.pause').addClass('active').siblings().removeClass('active');
        }

    })


// 3 마지막 푸터 슬라이드
var slide3 = new Swiper(".sc-autoslide .swiper", {

    slidesPerView:3,
    spaceBetween:43,

    loop:true,
    navigation: {
        nextEl: ".sc-autoslide .next",
        prevEl: ".sc-autoslide .prev",
    },
    pagination: {
        el: ".sc-autoslide .number",
        type: "fraction",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});


$('.sc-autoslide .btn-play').click(function(e){
    e.preventDefault();
    if( $(this).find('.pause').hasClass('active') ){
        slide3.autoplay.stop();
        $(this).find('.start').addClass('active').siblings().removeClass('active');
    }else{
        slide3.autoplay.start();
        $(this).find('.pause').addClass('active').siblings().removeClass('active');
    }
})




/* hasClass 자체가 트루 펄스를 갖는애 */
// 첫번째 슬라이드 컨트롤
    $('.slide-content').hover(function(){
        if(!$(this).find('.start').hasClass('active')){ /* !가 들어가서 부정문 active가 없다면 멈춰라 */
            slide1.autoplay.stop();
        }
    },function(){
        if(!$(this).find('.start').hasClass('active')){
            slide1.autoplay.start();
        }
    })




    // var swiper = new Swiper(".slide2 .swiper", {
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });


    // 
    // $('.sc-tab .tab-title').click(function(){



    //     $('.sc-tab ul').removeClass('active');
    //     $('.sc-tab ul').stop().slideUp(); //모두 닫는거
    //     $(this).toggleClass('active');
    //     $(this).siblings('ul').stop().slideToggle();
        
    //     // $('.sc-tab ul').stop().slideUp(); //모두 닫는거
    //     // $(this).siblings('ul').stop().slideToggle();

    // })

    $('.sc-tab .tab-title').click(function(){
        //탭버튼을 누를경우
        if ($(this).hasClass('active')) {
        //탭버튼이 이미 액티브, 즉 열려있을때는
            $(this).removeClass('active');
        //탭배경을 지운다
            $(this).siblings('ul').slideUp();
        //슬라이드도 닫는다
        } else {
        //탭버튼에 액티브가 없다, 즉 안열려 있을경우는
            $('.sc-tab .tab-title').removeClass('active');
        //모든 탭배경을 지운다(다른 탭버튼이 이미 배경이 있을수 있으니까)
            $(this).addClass('active');
        //누른 탭만 배경을 추가한다
            $('.sc-tab ul').stop().slideUp();
        //모든 슬라이드를 닫는다(다른 탭버튼이 액티브가 되서 슬라이드가 열려있을수 있으니까)
            $(this).siblings('ul').slideDown();
        //누른 탭버튼의 슬라이드는 다운
        }
    });
//keyup은 누르고 뗄때 이벤트발생,연관검색어처럼 밑에 좌르륵 나올때
    $('.tab-area li:first-child a').keydown(function(e){
        var v_keyCode = e.keyCode || e.which;

        if(v_keyCode == 9 && e.shiftKey){
            $('.sc-tab ul').stop().slideUp();
            $('.sc-tab .tab-title').removeClass('active');
        }
    })

    $('.tab-area li:last-child a').keydown(function(e){
        var v_keyCode = e.keyCode || e.which;

        if(v_keyCode == 9 && !e.shiftKey){
            $('.sc-tab ul').stop().slideUp();
            $('.sc-tab .tab-title').removeClass('active');
        }
        // alert(153)
    })


    // 클릭시 맨위로 올라감
    $('.btn-top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })

}) //지우지 마세여