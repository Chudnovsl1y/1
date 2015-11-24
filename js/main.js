/*
$('button').click(function(){
    var $that = $(this).hide();
    $('#ok').fadeIn('fast').delay(5000).fadeOut(function(){
        $that.show();
    });
});


 $(document).ready(function(){
    $('#button').click(function(){
        $('#modal-1').show();
    }):
    $('#close').click(function(){
        $('#modal-1').hide();
    });
     setTimeout ("$('#popup2').fadeIn('fast');", 6000);
     setTimeout ("$('#popup2').fadeOut('slow');", 9000);
 });

$(document.body).on('click', '#submit', function(e) {
    $(this).closest('form').submit();
    return false;
});

 */

$(document).ready(function(){
        $('form').submit(function(e){
            $('.modal').show();
            $(this).closest('div').hide('fadeIn');
            $('.modal-backdrop').hide();
            $(this).trigger('reset');
            e.preventDefault();
        });
});
