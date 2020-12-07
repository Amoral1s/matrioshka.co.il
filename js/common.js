$(document).ready(function ($) {
  $('.banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true
  });
  $('.actions-wrap .woocommerce .products').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slideToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
  // Плавный переход по якорям
  $(".up").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 110;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    return false;
  });
  //Действие при кролле
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 520) {
      $('.up').fadeIn(300);
    } else {
      $('.up').fadeOut(300);
    }
  });
  $('.burger').on('click', function() { 
    $('.overlay').fadeIn(200);
    $('.mobile').slideDown(200);
  });
  //close
  $('.overlay').on('click', function() { 
    $('.overlay').fadeOut(200);
    $('.mobile').slideUp(200);
  });
  $('.close').on('click', function() { 
    $('.overlay').fadeOut(200);
    $('.mobile').slideUp(200);
  });















  const indexShopMenu = document.querySelectorAll('.i-shop__menu ul li a'),
        indexShopCatalog = document.querySelectorAll('.i-shop-wrap');

  if (indexShopMenu) {
    indexShopMenu.forEach((elem,i) => {
      elem.addEventListener('click', (e) => {
        indexShopMenu.forEach((elem) => {
          elem.parentElement.classList.remove('active');
        });
        elem.parentElement.classList.add('active');
        e.preventDefault();
        indexShopCatalog.forEach((elems) => {
          elems.style.display = 'none';
        });
        myFadeIn(indexShopCatalog[i]);
      });
    });
  }


  //FADE JS
  function myFadeOut(el) {
    var opacity = 1;
    var timer = setInterval(function() {
      if(opacity <= 0.1) {
        clearInterval(timer);
        el.style.display = "none";
      }
      el.style.opacity = opacity;
      opacity -= opacity * 0.1;
    }, 10);
  }

  function myFadeIn(el) {
    var opacity = 0.01;
    el.style.display = "block";
    var timer = setInterval(function() {
      if(opacity >= 1) {
        clearInterval(timer);
      }
      el.style.opacity = opacity;
      opacity += opacity * 0.1;
    }, 10);
  }
  //cf7
  $(".wpcf7").on('wpcf7mailsent', function(event){
    //alert('GOOD');
    $('#thx').fadeIn(200);
    //Скрытие поп окна автоматически, через 5,5 секнд
    $('.overlay').fadeIn(300);

    setTimeout(function(){
      $('.overlay').fadeOut(300);
      $('.popup').fadeOut(300);
      $('#thx').fadeOut(200);
    },2500);  //3500 = 3,5 секунды
    
    setTimeout(function(){$('.popup').fadeOut(300);},2700); 
    setTimeout(function(){$('#calc').fadeOut(300);},2700); 
    
    setTimeout(function(){$('.overlay').fadeOut(300);},2700);
  });

  $(".wpcf7").on('wpcf7invalid', function(event){
    alert('Заполните поля правильно и повторите попытку!');
  });
  $(".wpcf7").on('wpcf7mailfailed', function(event){
    alert('Ошибка при отправке! Попробуйте отправить заявку еще раз!');
  });



});