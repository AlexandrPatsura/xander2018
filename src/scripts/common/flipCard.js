export const flipCard = function() {
  
  $('.auth-btn').on('click', function () {
    $('.hero').addClass('flipped');
    $('.auth-btn').animate({
      'cursor': 'hide',
      'opacity': '0'
    }, 1000);
  });
  
  $('.hero__back .menu__item:first-child').on('click', function () {
    $('.hero').removeClass('flipped');
    $('.auth-btn').animate({
      'cursor': 'show',
      'opacity': '1'
    }, 1000);
  });
  
};