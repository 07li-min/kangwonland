$(document).ready(function(){
    // 윈도우 창 크기 변화 감지
    $( window ).resize(function(){
      var windowWidth = $( window ).width();
      console.log('크기변화 = ' + windowWidth + '입니다');
    });

  // pc메뉴 hover
  $('.main-hd .pc-hd .dep1').hover(function(){
    $('.main-hd').toggleClass('on')
    $('.top-hd').toggleClass('on')
  });


  // 모바일메뉴 : 아코디언
  var dep1 = '.m-dep1',
  dep1Target = '.m-dep1 .tit',  
  dep2Target = '.m-dep2 >li ', 
  dep3Target = '.m-dep3 > li';

  $(dep2Target).slideUp();
  $(dep3Target).slideUp();

  $(dep1Target).on('click', function(e){
    console.log('on')
    e.preventDefault();
    // css 상태만 변경
    $(this).closest(dep1).toggleClass('active').siblings().removeClass('active');
    // 움직임 효과
    $(this).closest(dep1).find(dep2Target).slideToggle();
    console.log('dep1')
    $(this).closest(dep1).siblings().find(dep2Target).slideUp();
  })

  $(dep2Target).on('click', function(e){
    e.preventDefault();
    // css 상태만 변경
    $(this).toggleClass('active').siblings().removeClass('active');
    // 움직임 효과
    $(this).find(dep3Target).slideToggle();
    $(this).closest(dep2Target).siblings().find(dep3Target).slideUp();
  });




  // 모바일메뉴_버튼
  $('.mob-btn').click(function(){
    $(this).toggleClass('active'); 
    $('.hd .mob-hd').toggleClass('on'); 
    $('html, body').toggleClass('hide-scroll');
  });


  // mob-banner
  var mobswiper = new Swiper(".mob-banner", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".mob-banner .swiper-button-next",
      prevEl: ".mob-banner .swiper-button-prev",
    },
  });

  // 비지니스슬라이드
  var businessswiper = new Swiper(".right", {
    slidesPerView: 1,
    autoHeight : true,
    speed: 1000,
    allowTouchMove: false,
    pagination: {
      el: ".reveal .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".reveal .swiper-button-next",
      prevEl: ".reveal .swiper-button-prev",
    },
    // breakpoints: { 
    //   640: { 
    //     640 이상일 경우
    //     width: 500,
    //   },
    //   768: {
    //     width: 650,
    //   },
    //   1024: {
    //     width: 750,
    //   },
    // }
  });

  // 비지니스 슬라이드(텍스트) 
  var arrowPrev = '.business .reveal .swiper-button-prev',
  arrowNext = '.business .reveal .swiper-button-next';

  $(arrowNext).on('click', function() {
    var currentActive = $('.business .left .box li.active'); 
    currentActive.removeClass('active'); 
  
    if (currentActive.is(':last-child')) {
      $('li').first().addClass('active'); 
    } else {
      currentActive.next('li').addClass('active');
    }
  });

  $(arrowPrev).on('click', function() {
    var currentActive = $('.business .left .box li.active'); 
    currentActive.removeClass('active'); 
  
    if (currentActive.is(':first-child')) {
      $('li').first().addClass('active'); 
    } else {
      currentActive.prev('li').addClass('active'); 
    }
  });

  // ft
  $('.family').click(function(){
    $(this).toggleClass('active')
  });

  //팝업
  //head 태그 안에 스크립트 선언
  
//head 태그 안에 스크립트 선언
function setCookie( name, value, expiredays ) {
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays ); 
  document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function closePop() {
  if ( document.pop_form.chkbox.checked ){
      setCookie( "maindiv", "done" , 1 );
  }
  document.all['layer_popup'].style.visibility = "hidden";
}
cookiedata = document.cookie;   
if ( cookiedata.indexOf("maindiv=done") < 0 ){     
    document.all['layer_popup'].style.visibility = "visible";
}
else {
    document.all['layer_popup'].style.visibility = "hidden";
}


  
});