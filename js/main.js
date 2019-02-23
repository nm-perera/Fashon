$(document).ready(function() {
  $("#slider").slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true
  });

  $(".products").slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".testimonials").slick();
});
