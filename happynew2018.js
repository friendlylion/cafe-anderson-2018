$(function(){
  /*функция показа модального окна*/
  function showPopup(icon, popup) {
      $(icon).on('click', function (e) {
          e.preventDefault();
          $(popup).addClass('is-visible');
          $('.mfp-bg').addClass('is-visible');
          $('html').css({
              'overflow':'hidden',
              'margin-right':'17px'
          });
          // $('html').addClass('body-popup');
      });
  }

  $(".popup-close").click(function (e) {
      e.preventDefault();
      $(this).parents('.mfp-wrap').removeClass('is-visible');
      $('.mfp-bg').removeClass('is-visible');
      $('html').css({
          'overflow':'auto',
          'margin-right':'0'
      });
  });


  showPopup(".card-event__box", '.popup-event');
});
