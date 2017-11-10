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


  /*функция счета больше/меньше*/
  function catalogItemCounter(field) {
      var fieldCount = function (el) {
          var
              // Мин. значение
              min = el.data('min') || false,
              // Макс. значение
              max = el.data('max') || false,
              // Кнопка уменьшения кол-ва
              dec = el.prev('.dec'),
              // Кнопка увеличения кол-ва
              inc = el.next('.inc');
          function init(el) {
              if (!el.attr('disabled')) {
                  dec.on('click', decrement);
                  inc.on('click', increment);
              }
              // Уменьшим значение
              function decrement() {
                  var value = parseInt(el[0].value);
                  value--;

                  if (!min || value >= min) {
                      el[0].value = value;
                  }
              };
              // Увеличим значение
              function increment() {
                  var value = parseInt(el[0].value);

                  value++;

                  if (!max || value <= max) {
                      el[0].value = value++;
                  }
              };
          }
          el.each(function () {
              init($(this));
          });
      };
      $(field).each(function () {
          fieldCount($(this));
      });
  }
  catalogItemCounter('.fieldCount');

});
