// Animation setting
var animations = {
  // Selector
  '.elem.animation1': {
    // Run 'on' animation when the scrollTop is between 20 and 300
    // Run 'off' animation when the scrollTop is out of this range
    from: 20,
    to: 300,
    on: {
      // CSS for animate to
      css: {
        left: 100,
        top: 200,
        opacity: 1,
        width: 200,
        height: 300
      },
      // Optional settings
      setting: {
        // Animation time
        duration: 800,
        // Easing method, you can use jquery.easing plugin
        easing: 'easeOutBounce',
        // Callback function after the animation
        callback: function(){
          // console.log('on end.');
        }
      }
    },
    off: {
      css: {
        left: -100,
        top: 300,
        opacity: 0,
        width: 100,
        height: 100
      },
      setting: {
        duration: 200,
        easing: 'easeInBounce'
      }
    }
  },

  '.elem.animation2': {
    from: 200,
    to: 500,
    on: {
      css: {
        right: 100,
        top: 400,
        opacity: 1,
        width: 200,
        height: 300
      }
    },
    off: {
      css: {
        right: -100,
        top: 600,
        opacity: 0.1,
        width: 100,
        height: 100
      }
    }
  },

  '.elem.animation3': {
    from: 600,
    to: 900,
    on: {
      css: {
        left: 100,
        top: 800,
        opacity: 1,
        width: 200,
        height: 300
      }
    },
    off: {
      css: {
        left: 500,
        top: 800,
        opacity: 0.2,
        width: 100,
        height: 100
      }
    }
  },

  '.elem.animation4': {
    from: 900,
    to: 1200,
    on: {
      css: {
        left: 100,
        top: 1000,
        opacity: 1,
        width: 400,
        height: 200
      }
    },
    off: {
      css: {
        left: -200,
        top: 1300,
        opacity: 0,
        width: 100,
        height: 300
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
});