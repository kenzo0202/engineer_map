$(function(){
var topBtn=$('#pageTop');
var head =$('#head');
var point_btn = $('#point-btn');
var ranking_btn = $('#ranking-btn');
var point_offset = $('#three_point').offset().top-60;
var ranking_offset =$("#ranking").offset().top-60;
topBtn.hide();
head.hide();
 
//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
    head.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
    head.fadeOut();
  } 
});
 
// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},1000);
  return false;
});
    
point_btn.click(function(){
    $('body,html').animate({
        scrollTop: point_offset
    },1000);
    return false;
});
ranking_btn.click(function(){
    $('body,html').animate({
        scrollTop: ranking_offset
    },1000);
    return false;
});

});