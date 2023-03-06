$(function(){
    $('.header__current').on('click', function(){
        $(this).toggleClass('active')
    })

    $('.music__dropdown').on('click', function(){
        $(this).toggleClass('active')
    })

    $('.filter-btn').on('click', function(){
        $('.modal').addClass('active')
    })

    $('.modal__close').on('click', function(){
        $('.modal').removeClass('active')
    })
});