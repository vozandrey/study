$(document).ready(function () {

$('#show-popup-rules').on('click', function(){
    $('#popup').show();
    $('body').css({'overflow' : 'hidden'});    
});

$('#close-popup').on('click', function(){
    $('#popup').hide();
    $('body').css({'overflow' : ''}); 
});

$(document).mouseup(function(e){
    let popup = $('#popup');
    if (popup.has(e.target).length === 0) {
        $('#popup').hide();
        $('body').css({'overflow' : ''}); 
    } 
});

});