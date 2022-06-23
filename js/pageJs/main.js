$(document).ready(function(){
  $('.slider__customers').slick({
  	dots: false,
  	slidesToShow: 5,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.open__modal').fancybox({touch: false});

  $('.i_phone').mask('+7 (999) 999-99-99');


  $("header nav .pull").on('click', function(e) {
    e.preventDefault();
    $("header nav ul.flex").toggle("slide", {direction: "right" }, 250);
  });


  var nav = $('header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      nav.addClass("f-nav");
    } else {
      nav.removeClass("f-nav");
    }
  });

  $(".fancybox-close-small").on('click', function(e) {
    e.preventDefault();
    $.fancybox.close(true);
  });


  $('1a[href^="#"]').click(function(){
      var el = $(this).attr('href');
      $('html,body').animate({
          scrollTop: $(el).offset().top}, 1000);
      return false;
  });
});


function closeModal(){
    $.fancybox.close(true);
}


function sendForm(form_id,res_div) {
    var msg = $('#'+form_id).serialize();


    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
      success: function(data){

        $.fancybox.close(true);
        $('#thanks').fancybox().trigger('click');
        setTimeout(closeModal, 5000);

        $(".fancybox-close-small").on('click', function(e) {
          e.preventDefault();
          $.fancybox.close(true);
        });

        jQuery("#"+form_id).trigger("reset");
      },
      error:  function(xhr, str){

        $.fancybox.close(true);
        $('#thanks').fancybox().trigger('click');
        setTimeout(closeModal, 5000);

        $(".fancybox-close-small").on('click', function(e) {
          e.preventDefault();
          $.fancybox.close(true);
        });

        jQuery("#"+form_id).trigger("reset");
      }
    });
}