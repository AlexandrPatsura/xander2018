export const flipCard = function() {
  
  $('.authorization__btn').on('click', function () {
    $('.hero__block').addClass('flipped');
    $('.authorization__btn').animate({
      'cursor': 'hide',
      'opacity': '0'
    }, 1000);
  });
  
  $('.back__block .menu__item:first-child').on('click', function () {
    $('.hero__block').removeClass('flipped');
    $('.authorization__btn').animate({
      'cursor': 'show',
      'opacity': '1'
    }, 1000);
  });
  
};