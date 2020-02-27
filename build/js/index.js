$(function()
{
  Index.init();
});

var Index =
{
  init:function()
  {

    $.get("https://ipinfo.io", function(response) {
      $('input[name=city]').val(response.city);
      $('input[name=region]').val(response.region + ', ' + response.country);
      $('input[name=country]').val(response.country);
    }, "jsonp");

    const observer = lozad();
    observer.observe();


    $('.toggleElement').on('click', function(){
      $(this).parent('.phoneBlock').toggleClass('active');
      if($('.phoneBlock').hasClass('active')){
        $('header').css('padding-bottom', 40);
      }
      else{
        if($(window).width() > 1201){
          $('header').css('padding-bottom', 15);
        }
        if($(window).width() < 1200 && $(window).width() > 766){
          $('header').css('padding-bottom', 12);
        }
        if($(window).width() < 765){
          $('header').css('padding-bottom', 10);
        }
      }
    })

    $('.accordionItem', '.section11').not(':first').find('.text').hide();

    $('input[name=phone]').mask('+38(099)999-99-99');




    Index.magnificPopUp();
    Index.fixedHeader();
    Index.tinyAnimation();
    // Index.mobileSliderInit();
    Index.showAccordionItems();
    Index.reviewSliderInit();
    Index.graphicsSliderInit();
  },
  graphicsSliderInit: function(){
    var slider = $('.sliderBlock','.section7');

    slider.slick({
      arrows: true,
      nextArrow: '<button class="next__arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004" xml:space="preserve"><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" fill="inherit"/></svg></button>',
      prevArrow: '<button class="prev__arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004" xml:space="preserve"><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" fill="inherit"/></svg></button>',
      dots: true,
      mobileFirst: true,
      customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<span>0' + (i + 1) + '</span>';
      },
      responsive:[{
        breakpoint: 992,
        settings: {
        }
      }]
    });
  },

  reviewSliderInit: function(){
    var slider = $('.sliderBlock','.section4'),
      countBlock = $('.countBlock','.section4'),
      arrowsHere = $('.arrowsHere','.section4'),
      textBlock = $('.sliderTextBlock','.section4'),
      textItem = $('.item',textBlock);

    $(textItem).not(':first-child').hide();

    slider.slick({
      arrows: true,
      nextArrow: '<button class="next__arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004" xml:space="preserve"><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" fill="inherit"/></svg></button>',
      prevArrow: '<button class="prev__arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004" xml:space="preserve"><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" fill="inherit"/></svg></button>',
      dots: false,
      appendArrows: arrowsHere,
      mobileFirst: true,
      responsive:[{
        breakpoint: 992,
        settings: {
        }
      }]
    });

    $(slider).on('afterChange',function(e, slick, currentSlide){
      var current = currentSlide + 1;
      $(countBlock).html("0" + current + "<span>/0" + slick.slideCount + "</span>" );

      $(textItem).hide();
      $(textItem).eq(currentSlide).show();

    });


  },



  showAccordionItems: function(){
    var block = $('.accordionBlock', '.section11'),
      item = $('.accordionItem', block),
      switcher = $('.switcher', item);

    $('.title', item).on('click', function(){
      $('.title', item).not(this).parent().removeClass('active').find('.text').slideUp('slow');
      $(this).parent().addClass('active').find('.text').slideDown('slow');
    });

    $('.switcher', item).on('click', function(){
      $('.switcher', item).not(this).parent().removeClass('active').find('.text').slideUp('slow');
      $(this).parent().addClass('active').find('.text').slideDown('slow');

    })
  },

  mobileSliderInit: function(){
    var slider = $('.innerWrapper', '.section11');

    if($(window).width() < 991){
      $(slider).slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        prevArrow: '<button class="prev__arrow"><svg xmlns="http://www.w3.org/2000/svg" id="right" viewBox="0 0 45 45"><path class="first" d="M40,45H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h35c2.8,0,5,2.2,5,5v35C45,42.8,42.8,45,40,45z" fill="url(#right_1)"/><path d="M24.9,22.4l-3.7-3.5c-0.1-0.1-0.2-0.1-0.2,0l-0.9,0.9c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l2.6,2.5L20.1,25c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l0.9,0.9c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l3.7-3.5c0,0,0-0.1,0-0.1C25,22.5,24.9,22.4,24.9,22.4z" fill="#FFFFFF"/></svg></button>',
        nextArrow: '<button class="next__arrow"><svg xmlns="http://www.w3.org/2000/svg" id="right" viewBox="0 0 45 45"><path class="first" d="M40,45H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h35c2.8,0,5,2.2,5,5v35C45,42.8,42.8,45,40,45z" fill="url(#right_1)"/><path d="M24.9,22.4l-3.7-3.5c-0.1-0.1-0.2-0.1-0.2,0l-0.9,0.9c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l2.6,2.5L20.1,25c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l0.9,0.9c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l3.7-3.5c0,0,0-0.1,0-0.1C25,22.5,24.9,22.4,24.9,22.4z" fill="#FFFFFF"/></svg></button>',
        mobileFirst: true,
      })
    }
    else{
      return;
    }




  },


  tinyAnimation: function(){
    $('.line', '.schedule').viewportChecker({
      classToAdd: 'run',
      offset: 200
    });
  },


  magnificPopUp: function(){

    $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      }
    });

    $('.popup-gallery').magnificPopup({
      type:'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,0] // Will preload 0 - before current, and 1 after the current image
      }
    });

    $('.openVideo').magnificPopup({
      tClose: 'Закрыть (Esc)',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg width="22px" height="22px"><path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M-0.000,10.000 L-0.000,12.000 L10.000,12.000 L10.000,22.000 L12.000,22.000 L12.000,12.000 L22.000,12.000 L22.000,10.000 L12.000,10.000 L12.000,-0.000 L10.000,-0.000 L10.000,10.000 L-0.000,10.000 Z"/></svg></button>',
      type: 'iframe',
      preloader: true,
      fixedContentPos: true,
      midClick: true,
      closeBtnInside: false,
      mainClass: 'mfp-zoom-in',
      verticalFit: true
    });
  },


  //Инициализация прокрутки
  go_to:function(fThis, e){
    if($(window).width() < 600){
      $('.closeMenu','#mobMenu').click();
    }

    e.preventDefault();
    var id = $(fThis).attr('href');
    if( $(id).length != 0)
    {
      $('html, body').animate({scrollTop: ($(id).offset().top - 40)}, 1500);
    }
  },

  sendInit: function (fThis){

    var warning_ico = '<svg version="1.1" class="warning_ico" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 292.805 292.805" xml:space="preserve"><path style="fill:#ff0000" d="M137.583,18.265L1.709,259.709c-4.933,8.767,1.402,19.601,11.462,19.599c57.413-0.01,208.901-0.037,266.469-0.047c10.059-0.002,16.388-10.833,11.454-19.598c-44.565-79.158-135.89-241.399-135.89-241.399C151.62,11.907,141.167,11.907,137.583,18.265z M145.761,248.714c-10.028,0-18.162-8.136-18.162-18.163c0-10.029,8.134-18.165,18.162-18.165c10.03,0,18.165,8.136,18.165,18.165C163.926,240.578,155.791,248.714,145.761,248.714zM160.925,98.708c0.023,0.487,0.02,0.992,0,1.471l-5.05,104.048c-3.149-1.214-6.539-1.948-10.114-1.948c-3.572,0-6.963,0.734-10.112,1.948l-5.05-104.048c-0.402-8.376,6.051-15.493,14.428-15.898C153.403,83.876,160.52,90.332,160.925,98.708z"/></svg>';
    var error_mess_1 = '<div class="allert">' + warning_ico + '</div>';
    var error_mess_2 = '<div class="allert"><span>Введите корректное имя</span>' + warning_ico + '</div>';
    var error_mess_3 = '<div class="allert"><span>Введите корректный e-mail</span>' + warning_ico + '</div>';
    var error_mess_4 = '<div class="allert"><span>Введите корректный номер телефона</span>' + warning_ico + '</div>';


    $('.inputWrapper').each(function(){
      $(this).removeClass('error');
    });
    $(':input.error').removeClass('error');
    $('.allert').remove();


    var sbmBtn = $(fThis).find('.btn'),
        ref = $(fThis).find('[required]'),
        formData = $(fThis).serializeArray(),
        error = 0;

    $(ref).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).closest('.inputWrapper').addClass('error').append(error_mess_1);
        error = 1;
        $(':input.error:first').focus();
        return;
      } else {
        if ($(this).attr('type') == 'text') {
          var thisValueL = $(this).val().length;
          if (thisValueL < 3) {
            var errorfield = $(this);
            $(this).closest('.inputWrapper').addClass('error').append(error_mess_2);
            error = 1;
            $(':input.error:first').focus();
          }
        }
        // if ($(this).attr('type') == 'tel') {
        //   if ($(this).hasClass('is-complete')) {
        //   } else {
        //     error = 1;
        //     $(':input.error:first').focus();
        //     $(this).closest('.inputWrapper').addClass('error').append(error_mess_4);
        //   }
        // }
        if($(this).attr('type') == 'email'){
          console.log($(this).val());
          var pattern =/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
          if(pattern.test($(this).val())){
          }
          else{
            error = 1;
            $(':input.error:first').focus();
            $(this).closest('.inputWrapper').addClass('error').append(error_mess_3);
          }
        }
      }
    });

    if(error == 0)
    {
      $(sbmBtn).attr('disabled','disabled');
      $(fThis).trigger('reset');
      $(location).attr('href', 'success.html')
      // setTimeout(function(){
      //   $(location).attr('href', 'success.html')
      // }, 5000);
      // $.ajax(
      //     {
      //       url: "db/registration.php",
      //       cache: false,
      //       type: "POST",
      //       data: formData,
      //       dataType: "json",
      //       success: function(data){
      //         if(data.status == 'ok'){
      //           $(location).attr('href', '/success.html');
      //         }
      //       },
      //       error: function(){
      //         console.log('ALARM ERROR');
      //       }
      //     }
      // );
    }
    else{
      console.log('error')
    }
  },

  fixedHeader:function(){
    $(window).scroll(function()
    {
      if ($(this).scrollTop() > 20)
      {
        $('header').addClass('fixed');
      }
      if ($(this).scrollTop() < 20)
      {
        $('header').removeClass('fixed');
      }
    });
  },

  openMenu:function(){
    $('#mobMenu').css('right', 0);
  },

  closeMenu:function(){
    $('#mobMenu').css('right', '-100%');
  },

  showFormSpec:function(fThis){
    var title = $(fThis).attr('data-title'),
        btnText = $(fThis).attr('data-btnName'),
        orderType = $(fThis).attr('data-orderType');


    $('#mainForm').find('.title').html(title);
    $('#mainForm').find('.btn').html(btnText);
    $('#mainForm').find('[name=order_type]').val(orderType);


    $.magnificPopup.open({
      items:{
        src: '#mainForm',
        type: 'inline'
      }
    })
  },

  callBackForm:function(){
    $.magnificPopup.open({
      items:{
        src: '#callBackForm',
        type: 'inline'
      }
    })
  },

  openModalText: function() {
    $.magnificPopup.open({
      items:{
        src: '#modalText',
        type: 'inline'
      }
    })
  },


  openYoutube:function(fThis){
    var e = "https://www.youtube.com/embed/" + fThis.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1";
    $(fThis).next('.playBtn').hide();
    $(fThis).data("params") && (e += "&" + $(fThis).data("params"));
    var a = $("<iframe/>", {class:"el", frameborder: "0", src: e, width: $(fThis).width(), height: $(fThis).height()});
    $(fThis).replaceWith(a)
  },

  showPolitics:function(int){
    event.preventDefault();
    if (int == 1) {
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics1',
          type: 'inline'
        }
      })
    }
    else if(int == 2){
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics2',
          type: 'inline'
        }
      })
    }
    else if(int == 3){
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics3',
          type: 'inline'
        }
      })
    }
  }

};