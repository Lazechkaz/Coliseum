$(document).ready(function(){
  $('.img-slider').slick({
  	arrows: true,
	  dots: false,
	  easing: 'ease',
	  autoplay: true,
	  autoplaySpeed: 5000,
	  draggable:true,
	  waitForAnimate: true,
	  prevArrow: '<button class="prev-img arrow-slider"></button>',
   nextArrow: '<button class="next-img arrow-slider"></button>',
  });
  $('.rooms-slider').slick({
    arrows: true,
    dots: false,
    easing: 'ease',
    draggable:true,
    waitForAnimate: true,
    prevArrow: '<button class="prev-img arrow-slider"></button>',
   nextArrow: '<button class="next-img arrow-slider"></button>',
  });
});

$(document).ready(function(){
  jQuery(window).scroll(function(){
        var $sections = $('section');
  $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');
        }
    })
 });


});

$(document).ready(function(){
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
  });
});

$(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
  });

$(document).ready(function(){
  $('.reviews-slider').slick({
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<button class="prev arrow-slider"></button>',
    nextArrow: '<button class="next arrow-slider"></button>',
  });
  $('.features-slider').slick({
  arrows: true,
	 infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '<button class="prev arrow-slider"></button>',
  nextArrow: '<button class="next arrow-slider"></button>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за заказ! В ближайшее время с вами свяжется администратор!");
     setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
   });
    return false;
  });

});