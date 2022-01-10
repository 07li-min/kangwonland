$(document).ready(function(){

  AOS.init({
    duration: 3000
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
    // $(this)closest(dep1).toggleClass('active').siblings().removeClass('active');
    $(this).closest(dep1).find(dep2Target).slideToggle();
    $(this).closest(dep1).siblings().find(dep2Target).slideUp();
  })

  $(dep2Target).on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active').siblings().removeClass('active');
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

  // 비지니스 슬라이드(이미지)
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
    $(this).toggleClass('active');
  });

  // popup
  $('.close_pop').click(function(){
    console.log('닫기', this);
    var tmpPop = $(this).closest('.popup');
    closePop(tmpPop);
  });

  function setCookie( name, value, expiredays ) {
    // console.log('setCookie', name);
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays ); 
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    // console.log('set Cookie', document.cookie);
  }

  function closePop(popElem) {
    if ( popElem.find('form input').is(':checked') ){
      setCookie( popElem[0].id , "done" , 1 );
    }
    popElem.removeClass('active');
  }

  cookiedata = document.cookie; 
  if ( cookiedata.indexOf("popup_1=done") < 0 ){     
    $('#popup_1').addClass('active');
  } else {
    $('#popup_1').removeClass('active');
  }



});