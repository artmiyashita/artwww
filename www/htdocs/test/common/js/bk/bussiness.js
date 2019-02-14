
 /*------------------------------------------------------------------
global 関数 */
var w_wdh = $(window).outerWidth(true) -15,
  w_hgt = $(window).outerHeight(true),
  $page,$mCnt,$gnav,
  nav_pos,
  pos_para,
  scrollPara,
  gnav_hgt,
  top_hgt,
  max_cnt_wdh,
  busCnt_top_para = [],

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

  $mCnt = ['#mainSlide','#companyCnt','#businessCnt'];
  $($mCnt[2]).show();
  $page = $('#page');
  $gnav = $('#navigation');
  gnav_hgt = $gnav.height();
  top_hgt = w_hgt - gnav_hgt;
  var $business_lead = $('#businessCnt > .lead');
  $($mCnt).css('width', w_wdh);
  $($mCnt[2]).css('left',0);

  $page.css('width',w_wdh);
  $business_lead.css('height',w_hgt);
  var $bus_cnt = $('.busCnt',$($mCnt[2])),
        count = $bus_cnt.length;
        for(var i=0;i<count;i++){
          busCnt_top_para[i] = $($bus_cnt[i]).offset().top;
        };
        console.log(busCnt_top_para);

    var $elem_cnt = $('.elemAime',$($mCnt[2])),
        count_elem = $elem_cnt.length;
        //console.log(count_elem);


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


  for(var i=0;i<count_elem;i++){
    n=("0" +i).slice(-2);
      $animateCnt = animations_bus['.elemAime.elem'+n];
      // console.log(count_elem,$animateCnt,busCnt_top_para[n]);

      switch(i){
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

      $($elem_cnt[i]).css({'left':parseInt(leftPara+addParaL)+'px','top':parseInt(topPara+addParaT)+'px','opacity':0});

      if( i==0 && i < 3) {
        startPara=busCnt_top_para[0];
      } else if(3 == i && i < 6){
        startPara=busCnt_top_para[1];
      } else if(6 == i && i < 9){
        startPara=busCnt_top_para[2];
      } else if(9 == i && i < 12){
        startPara=busCnt_top_para[3];
      } else if(12 == i && i < 15){
        startPara=busCnt_top_para[4];
      } else if(15 == i && i < 18){
        startPara=busCnt_top_para[5];
      }

      var newSetting = {
        from: parseInt(startPara-w_hgt+200),
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
    $.extend($animateCnt, newSetting);
    // console.log($elem_cnt[i], $animateCnt);
    console.log(n,'off:',animations_bus['.elemAime.elem' +n].off.css.left,'on:',animations_bus['.elemAime.elem' +n].on.css.left);
  }
});


// Core
// $(window).on('load',function(){
$(function(){
   // アニメーションの処理
  for(var selector in animations_bus){
    $(selector).addClass('animation-off');
  }
  $(window).scroll(function() {
    var scrollTop_bus = $(document).scrollTop();
    scrolling_bus(scrollTop_bus);
  });
  function scrolling_bus(scrollTop_bus){
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
            scrollTop_bus >= animation.from &&
            scrollTop_bus <= animation.to
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
            scrollTop_bus < animation.from ||
            scrollTop_bus > animation.to
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
          current = scrollTop_bus - animation.from,
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