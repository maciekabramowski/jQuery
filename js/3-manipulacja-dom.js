'use strict';

$( function() {

    
    //pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    //dodawanie HTML
    $('.paragrafnext').html("To jest <strong>paragraf</strong> z dodanym<br> HTML.");
    
    //dodawanie treści na końxcu selektora
    $('.paragrafnext').append("treść na końcu selektora");
    
    //dodawanie treści za selektorem
    $('.paragrafnext').after("treść za selektorem");
    
    //usuwanie elementu z zawartością
    $("strong").remove();
    
    //usuwanue TYLKO zawartośći elementu
    $('.paragraf').empty();
    
    //dodawanie CSS
    $('.paragrafnext').css({'font-size': '3em'});
    
    //dodawanie klasy
    $('h1').addClass('blue');
    
    //dodawanie atrybutu
    $('h1').attr("imie", "Marcin");
    
    
} ); 