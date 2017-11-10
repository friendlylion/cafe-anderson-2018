$(function(){

  $('#popup-event-tel').mask('+7(000)000-00-00');

var $content = $('.filter__datepiker span');
$('.datepicker-here').datepicker({
    minDate: new Date(),
    onSelect: function onSelect(fd, date) {

        var title = fd;
        $($content).html(title);
        closePopupAuto('.popup-date');
    }
})

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


function closePopup(btnClose){
  $(btnClose).click(function (e) {
      e.preventDefault();
      $(this).parents('.mfp-wrap').removeClass('is-visible');
      $('.mfp-bg').removeClass('is-visible');
      $('html').css({
          'overflow':'auto',
          'margin-right':'0'
      });
  });
}

function closePopupAuto(popupClose){
      $(popupClose).removeClass('is-visible');
      $('.mfp-bg').removeClass('is-visible');
      $('html').css({
          'overflow':'auto',
          'margin-right':'0'
      });
}

closePopup('.popup-close');
closePopup('.c-popup-list__item');

  showPopup(".card-event__box", '.popup-event');
  showPopup(".filter__city", '.popup-city');
  showPopup(".filter__metro", '.popup-station');
  showPopup(".filter__datepiker", '.popup-date');


// перестроение списка в две колонки при количестве пунктов более 5


  function getColumn(list){
    $(list).each(function(){
      var $allCount = $(list).find('li').length;
        if($allCount > 5){
          $(list).addClass('c-popup-list__column');
        }else{
          $(list).removeClass('c-popup-list__column');
        }
    });
  };

  getColumn('.popup-city .c-popup-list');
  getColumn('.popup-station .c-popup-list');

  // клик по списку закрывает попап



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
