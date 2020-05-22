$(document).ready(function() { 
    console.log('fuck'); 
    $('.card').flip();
    $('.card').click(function() {
        $(this).flip();
    });
    $('.song-link-span').click(function(e) {
        e.stopPropagation();
    });
    $('.song-link').click(function(e) {
        
        let id = $(this).attr('id');
        playSong(id);
    });

    /*$('.card').click(function(e) {
        
        if ($(e.target).is('.back p') == false) {
            //$(this).parent().flip();
            console.log($(this).parent());
            $(this).parent().flip();
        }
    });*/
});