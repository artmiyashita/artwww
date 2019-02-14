// Core
(function(){
  // Animation setting
animations_bus = {
  // Selector
  '.elemAime.elem00': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem01': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem02': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem03': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem04': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem05': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem06': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem07': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem08': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem09': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem10': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem11': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem12': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem13': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem14': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem15': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem16': {from: 0,to: 0,type: 'time'},
  '.elemAime.elem17': {from: 0,to: 0,type: 'time'}
  };

// Core
$(function(){

  var $elem_cnt = $('.elemAime',baseObj.businessSlide),
        count_elem = $elem_cnt.length;
  var busCnt_top_para = [];
  for(var count_para = 0; count_para < 6; count_para++){
    busCnt_top_para[count_para] = basePara['para0' + count_para];
  }

  var ani01L = 0,
      ani01T = 0,
      ani02L = 389,
      ani02R = 360,
      ani02T = 0,
      ani03L = 185,
      ani03T = 238,
      addPara = 200,
      startPara=0,
      $animateCnt=[],
      leftPara,topPara,addParaL,addParaR,addParaT;

  for(var bAi = 0; bAi < count_elem; bAi++){
    n=("0" +bAi).slice(-2);
      //$animateCnt = animations_bus['.elemAime.elem'+n];

      switch(bAi){
        case 1:case 3:case 7:case 9:case 13:case 16:
        leftPara=ani01L;
        topPara=ani01T;
        addParaL=50;
        addParaT=50;
        break;

        case 0:case 6:case 12:
        leftPara=ani02L;
        topPara=ani02T;
        addParaL=100;
        addParaT=-100;
        break;

        case 4:case 10:case 15:
        leftPara=ani02R;
        topPara=ani02T;
        addParaL=100;
        addParaT=-150;
        break;

        default:
        leftPara=ani03L;
        topPara=ani03T;
        addParaL=150;
        addParaT=-50;
        break;
      }

      $($elem_cnt[bAi]).css({'left':parseInt(leftPara+addParaL)+'px','top':parseInt(topPara+addParaT)+'px','opacity':0});

      if( bAi==0 && bAi < 3) {
        startPara=busCnt_top_para[0];
      } else if(3 == bAi && bAi < 6){
        startPara=busCnt_top_para[1];
      } else if(6 == bAi && bAi < 9){
        startPara=busCnt_top_para[2];
      } else if(9 == bAi && bAi < 12){
        startPara=busCnt_top_para[3];
      } else if(12 == bAi && bAi < 15){
        startPara=busCnt_top_para[4];
      } else if(15 == bAi && bAi < 18){
        startPara=busCnt_top_para[5];
      }
      var newSetting = {
        from: parseInt(startPara - basePara.window_height + 340),
        to: parseInt(startPara+200),
        on: {
          css: {
            left: parseInt(leftPara)+'px',
            top: parseInt(topPara)+'px',
            opacity:1
          },setting: {duration:900,easing:'easeOutQuint' }
        },
        off: {
          css: {
            left: parseInt(leftPara+addParaL)+"px",
            top: parseInt(topPara+addParaT)+"px",
            opacity:0
          },setting: {duration:900,easing:'easeOutQuint' }
        }
      };
    $.extend(animations_bus['.elemAime.elem'+n], newSetting);
  }
  // アニメーションの処理
  for(var selector in animations_bus){
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
    for(var selector in animations_bus){
      var animation = animations_bus[selector],
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