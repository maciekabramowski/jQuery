'use strict';

$(function(){
   
    //wybieranie elementu z kolekcji za pomocą metody eq()
    $('body').find('p').eq(1).css({'color':'green'});
    
    //pętla each dodająca do paragrafów klasę z kolejnym numerem
    $('p').each(function(index){
        $(this).addClass('paragraf-' + index);
        console.log($(this));
    });
    
});