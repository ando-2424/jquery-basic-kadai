$(function(){
  $('#change-color').on('click', function (){
    // 文字色を赤にするために、colorクラスを追加する
    $('#target').addClass('change-color');
  });
  $('#change-text').on('click', function (){
    // 文字を変更する
    $('#target').text('Hello!');
  });
  $('#fade-out').on('click', function(){
    // 文字をフェードアウトさせる
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function(){
    // 文字をフェードアウトさせる
    $('#target').fadeIn();
  });
});