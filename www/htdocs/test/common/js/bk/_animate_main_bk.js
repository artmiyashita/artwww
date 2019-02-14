// Animation setting
var animations = {
  // Selector
  '#anime01 .img01': {
    // Run 'on' animation when the scrollTop is between 20 and 300
    // Run 'off' animation when the scrollTop is out of this range
    from: 915,
    to: 2550,
    on: {
      // CSS for animate to
      css: {
        top: 0,
        opacity: 1,
        width: 178,
        height: 178
      },
      // Optional settings
      setting: {
        // Animation time
        duration:500,
        // Easing method, you can use jquery.easing plugin
        easing: 'easeOutQuart',
        // Callback function after the animation
        callback: function(){
          // console.log('on end.');
        }
      }
    },
    off: {
      css: {
        top: 178,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeOutQuart'
      }
    }
  },

  '#anime01 .img02': {
    from: 955,
    to: 2550,
    on: {
      css: {
        top: 0,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeOutQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 178,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeOutQuart'
      }
    }
  },
  '#anime01 .img03': {
    from: 1000,
    to: 2550,
    on: {
      css: {
        top: 0,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeOutQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 178,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img04': {
    from: 1050,
    to: 2550,
    on: {
      css: {
        top: 0,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 178,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img05': {
    from: 1060,
    to: 2550,
    on: {
      css: {
        top: 0,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 178,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img06': {
    from: 1150,
    to: 2550,
    on: {
      css: {
        top: 188,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 388,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img07': {
    from: 1200,
    to: 2550,
    on: {
      css: {
        top: 188,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 388,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img08': {
    from: 1250,
    to: 2550,
    on: {
      css: {
        top: 188,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 388,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img09': {
    from: 1300,
    to: 2550,
    on: {
      css: {
        top: 188,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 388,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  },
  '#anime01 .img10': {
    from: 1350,
    to: 2550,
    on: {
      css: {
        top: 188,
        opacity: 1,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart',
        callback: function(){
        }
      }
    },
    off: {
      css: {
        top: 388,
        opacity: 0,
        width: 178,
        height: 178
      },
      setting: {
        duration:500,
        easing: 'easeInQuart'
      }
    }
  }
};

$(function(){
  $(window).scroll(function () {
    var ScrTop = $(document).scrollTop();
    $('#intervalValue').val(ScrTop)
  });
})

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
        easing: 'easeInQuart',
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
});

