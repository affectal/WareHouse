$('.menu-item.home').on('click', function() {
    $('.image-room').hide();
    $('.drop-down__inner.favourites').hide();
    $('.drop-down__inner.search').hide();
    $('.drop-down__inner.warehouse').show();
});

$('.menu-item.favourites').on('click', function() {
    $('.image-room').hide();
    $('.drop-down__inner.warehouse').hide();
    $('.drop-down__inner.search').hide();
    $('.drop-down__inner.favourites').show();
});

$('.menu-item.search').on('click', function() {
    $('.image-room').hide();
    $('.drop-down__inner.warehouse').hide();
    $('.drop-down__inner.favourites').hide();
    $('.drop-down__inner.search').show();
});

$('.image-cross').on('click', function() {
    $('.drop-down__inner.warehouse').hide();
    $('.drop-down__inner.favourites').hide();
    $('.drop-down__inner.search').hide();
    $('.image-room').show();
});

$('.slider').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    arrows: true
});