// JavaScript Document




var WindowHeight = $(window).height(); //WindowHeightは変数のため任意の名前をつける
$(function(){
if(WindowHeight > 320){ //開いた画面が320px以上なら実行
//body要素に高さを書き込む
$('').css('height',WindowHeight+'px');
}
});

$(window).resize(function(){
var WindowHeight = $(window).height(); //WindowHeightは変数のため任意の名前をつける
$(function(){
if(WindowHeight > 320){ //開いた画面が320px以上なら実行
//body要素に高さを書き込む
$('.flexslider').css('height',WindowHeight+'px');
}
});
});
