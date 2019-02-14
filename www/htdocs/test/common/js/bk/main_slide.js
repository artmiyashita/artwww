// Animation setting
var animations = {
  // Selector
  '#leaf_left': {
    // Run 'on' animation when the scrollTop is between 20 and 300
    // Run 'off' animation when the scrollTop is out of this range
    from: 900,
    to: 2400,
    on: {
      // CSS for animate to
      css: {
        left: -164,
        top: 268,
        opacity: 1,
        width: 516,
        height: 651
      },
      // Optional settings
      setting: {
        // Animation time
        duration: 1500,
        // Easing method, you can use jquery.easing plugin
        easing: 'jswing',
        // Callback function after the animation
        callback: function(){
          // console.log('on end.');
        }
      }
    },
    off: {
      css: {
        left: -2500,
        top: 268,
        opacity: 0,
        width: 516,
        height: 651
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    }
  },
  '#leaf_right': {
    from: 900,
    to: 2400,
    on: {
      css: {
        right: -126,
        top: 387,
        opacity: 1,
        width: 152,
        height: 455
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    },
    off: {
      css: {
        right: -2500,
        top: 387,
        opacity: 0.1,
        width: 152,
        height: 455
      }
    },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
  },
  '#photo_rotting': {
    from: 1800,
    to: 3600,
    on: {
      css: {
        right: -55,
        top: 135,
        opacity: 1,
        width: 160,
        height: 437
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    },
    off: {
      css: {
        right: -2500,
        top: 135,
        opacity: 0.1,
        width: 160,
        height: 437
      }
    },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
  },
  '#photo_sharppen': {
    from: 1900,
    to: 3600,
    on: {
      css: {
        left: -160,
        top: 530,
        opacity: 1,
        width: 337,
        height: 402
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    },
    off: {
      css: {
        left: -2500,
        top: 530,
        opacity: 0.2,
        width: 337,
        height: 402
      }
    }
  },

  '#photo_headphone': {
    from: 3000,
    to: 4300,
    on: {
      css: {
        left: -507,
        top: 407,
        opacity: 1,
        width:847,
        height: 847
      },
      setting: {
        duration: 2000,
        easing: 'easeOutBack'
      }
    },
    off: {
      css: {
        left: -2500,
        top: 407,
        opacity: 1,
        width:847,
        height: 847
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    }
  },

  '#photo_rule': {
    from: 4200,
    to: 5600,
    on: {
      css: {
        right: -996,
        top: -300,
        opacity: 1,
        width:1077,
        height: 847
      },
      setting: {
        duration: 2000,
        easing: 'easeOutBack'
      }
    },
    off: {
      css: {
        right: -2500,
        top: -300,
        opacity: 1,
        width:1077,
        height: 847
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    }
  },

  '#photo_pencil': {
    from: 4400,
    to: 5600,
    on: {
      css: {
        left: -258,
        top: 688,
        opacity: 1,
        width:427,
        height: 261
      },
      setting: {
        duration: 2000,
        easing: 'easeOutBack'
      }
    },
    off: {
      css: {
        left: -2500,
        top: 688,
        opacity: 1,
        width:427,
        height: 261
      },
      setting: {
        duration: 2000,
        easing: 'jswing'
      }
    }
  }
};

// Core
$(function(){
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
        callback: function(){}
      };
    for(var selector in animations){
      var animation = animations[selector],
          elem = $(selector);

      // Trigger animation
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
        elem.stop(true).animate(css, setting.duration, setting.easing, setting.callback);
      }
    }
  }

  // Easingの追加
jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
 jQuery('div#home ul.btn_disc li a[href*=#],div#side_menu li a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = jQuery(this.hash);
            $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                jQuery('html,body').animate({ scrollTop: targetOffset }, 1500, 'jswing');
                return false;
            }
        }
    });

  $(window).scroll(function(){ //スクロールイベント
    var scroll_y = jQuery(this).scrollTop();
     $('#scroll').text("スクロール量：" + scroll_y); //追加

     var number = 0;

     function navi_active(number) {
      var gnavi = 'gnavi_0'+number;
       // remove
      $('nav ul li span a').removeClass('active');
      $('nav ul li ul.child_navi:not(nav ul li#'+gnavi+' ul.child_navi)').removeClass('active').removeClass('on').slideUp();
      // add
      $('nav ul li#'+gnavi+' span a').addClass('active');
      // child navi display yes?
      if($('nav ul li#'+gnavi+' ul.child_navi').css('display') === 'none') {
        $('nav ul li#'+gnavi+' ul.child_navi:not(.on)').addClass('active').addClass('on').slideDown();
      }
     }

     if(scroll_y >=0 && scroll_y <=1344) {
       navi_active(1);
     } else if (scroll_y >= 1345 && scroll_y <=2260) {
       navi_active(2);
     } else if (scroll_y >= 2261 && scroll_y <=3470) {
       navi_active(3);
     } else if (scroll_y >= 3471 && scroll_y <=4487) {
       navi_active(4);
     } else if (scroll_y >= 4488) {
       navi_active(5);
     }
  });
});








