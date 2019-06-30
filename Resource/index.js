$(document).ready(function(){
    $('div.themes div.row>div').hover(function(){
        $(this).find('.box .view').css({'display':'inline-flex','opacity':'1'});
    }, function(){
        $(this).find('.box .view').css({'display':'none','opacity':'0'});
    });

    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
})