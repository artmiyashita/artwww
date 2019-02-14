(function(){
// Animation setting
var animations = {
  // Selector
  '.animePos.anime00': {from: 0,to: 0,type: 'time'},
  '.animePos.anime01': {from: 0,to: 0,type: 'time'},
  '.animePos.anime02': {from: 0,to: 0,type: 'time'},
  '.animePos.anime03': {from: 0,to: 0,type: 'time'},
  '.animePos.anime04': {from: 0,to: 0,type: 'time'},
  '.animePos.anime05': {from: 0,to: 0,type: 'time'},
  '.animePos.anime06': {from: 0,to: 0,type: 'time'},
  '.animePos.anime00': {from: 0,to: 0,type: 'time'},
  '.animePos.anime07': {from: 0,to: 0,type: 'time'},
  '.animePos.anime08': {from: 0,to: 0,type: 'time'},
  '.animePos.anime09': {from: 0,to: 0,type: 'time'},
  '.animePos.anime10': {from: 0,to: 0,type: 'time'},
  '.animePos.anime11': {from: 0,to: 0,type: 'time'},
  '.animePos.anime12': {from: 0,to: 0,type: 'time'},
  '.animePos.anime13': {from: 0,to: 0,type: 'time'}
};


$(function(){
  $(window).on('load',function () {
    var ScrTop = $(document).scrollTop();
    $('#intervalValue').val(ScrTop);
  });
});

// Core
$(function(){

// 各アニメーションの位置取得
var $anime = $('section#mainSlide .animePos'),
  count=$anime.length,
  animePos=[], // アニメする各要素の開始位置を指定する変数箱
  addPara=300, // 各要素の移動距離の共通化変数
  paraTop;

for(var mAi = 0; mAi < count; mAi++){
  // 整数にして要素の位置を格納

  // インターバル画像とアイコンの位置を分岐して変数に入れる
  switch(mAi){
    case 1:case 5:case 9:
    paraTop = 73;　
    break;

    case 2:case 6:case 10:
    paraTop = 256;
    break;

    default:
    paraTop = 0;
  }

  // ページロード時の画像位置を下げる
  $($anime[mAi]).css('top',parseInt(paraTop+addPara)+'px');

  // 各アニメーション要素のオフセット位置を変数箱に入れる。
  animePos[mAi] =Math.round($($anime[mAi]).offset().top);
var newSetting = {
  from: parseInt(animePos[mAi] - (basePara.top_height + 100)),
  to: parseInt(animePos[mAi] -(basePara.top_height -1200) ),
  on: {
    css: {
      top: paraTop+'px',
      opacity: 1
    },setting: {duration:400,easing:'easeOutQuint'
      }
    },
  off: {
    css: {
      top: parseInt(paraTop+addPara)+'px',
      opacity: 0
    },setting: {duration:900,easing:'easeOutQuint'
    }
  }
};
  // 2桁化
  mAi=("0" +mAi).slice(-2);
  // extendで値を挿入。
  $.extend(animations['.animePos.anime'+mAi], newSetting);
  // console.log(i,animations['.animePos.anime'+i])
}
//console.log($anime[0]);


  // アニメーションの処理
  for(var selector in animations){
    $(selector).addClass('animation-off');
  }
  $(window).scroll(function() {
    var scrollTop = $(document).scrollTop();
    scrolling(scrollTop);
  });
  function scrolling(scrollTop){
    var defaultSetting = {
        duration: 300,
        easing: 'linear',
        beforeCallback: function(){},
        callback: function(){}
      };
    for(var selector in animations){
      var animation = animations[selector],
          elem = $(selector),
          animationType = animation.type || 'time';

      // Trigger animation
      if(animationType === 'time'){
        if(
          (
            scrollTop >= animation.from &&
            scrollTop <= animation.to
          ) && !elem.hasClass('animation-on')
        ){
          elem.addClass('animation-on');
          elem.removeClass('animation-off');
          var css = animation.on.css || {},
            setting = $.extend(defaultSetting, animation.on.setting);
          setting.beforeCallback();
          elem.stop(true).animate(css, setting.duration, setting.easing, setting.callback);
        }else if(
          (
            scrollTop < animation.from ||
            scrollTop > animation.to
          ) && !elem.hasClass('animation-off')
        ){
          elem.removeClass('animation-on');
          elem.addClass('animation-off');
          var css = animation.off.css || {},
            setting = $.extend(defaultSetting, animation.off.setting);
          setting.beforeCallback();
          elem.stop(true).animate(css, setting.duration, setting.easing, setting.callback);
        }
      } else {
        var onCss = animation.on.css || {},
          offCss = animation.off.css || {},
          range = animation.to - animation.from,
          current = scrollTop - animation.from,
          ratio = current / range;

        if(ratio <= 0) {
          elem.css(offCss);
        }else if(ratio >= 1) {
          elem.css(onCss);
        }else{
          var mixedOnCss = $.extend({}, offCss, onCss),
            mixedOffCss = $.extend({}, onCss, offCss),
            newCss = {};

          for (var key in mixedOnCss) {
            if (!isNaN(mixedOnCss[key])) {
              newCss[key] = mixedOnCss[key] * ratio + mixedOffCss[key] * (1-ratio);
            } else {
              newCss[key] = mixedOnCss[key];
            }
          }
          elem.css(newCss);
        }
      }
    }
  }
});
})(jQuery);