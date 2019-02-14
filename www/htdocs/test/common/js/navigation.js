// navigation cursol
$(function() {
  var navSet = {
    cursol: $('span.cursol'),
    duration: 1500,
    easing: 'easeOutQuint',
    underCursol: '-180px',
    overCursol: 960,
    min_scroll: basePara.top_height / 2,
    para: 100
  };
  navSet.cursol.css({
    'left': navSet.underCursol,
    opacity: 0
  });

  // 各コンテンツのoffset取得
  var $cnt_top = $('.mSlideCnt');
  count = $cnt_top.length;
  for (var ni = 0; ni < count; ni++) {
    mSlideOffsetT[ni] = Math.round($($cnt_top[ni]).offset().top + 100);
  }

  $('ol#gnav li').on('click', function(e) {
    var navNum = $(this).index() + 1;
    $('html,body').animate({ 'scrollTop': mSlideOffsetT[navSet] }, { duration: navSet.duration, easing: navSet.easing });
    e.preventDefault();



  // ナビゲーションのoffset取得
  var nav_left_set = [],
    $nav_left_cnt,
    count_nav;

  $nav_left_cnt = $('li', baseObj.gnav);
  count_nav = $nav_left_cnt.length;
  var base = $('h1').offset().left;
  for (var w = 0; w < count_nav; w++) {
    nav_left_set[w] = Math.round($($nav_left_cnt[w]).offset().left) - base;
  }
  $(window).on('scroll', function() {
    if (basePara.window_scroll >= navSet.min_scroll && basePara.window_scroll <= mSlideOffsetT[1]) {
      navSet.cursol.stop().animate({left: nav_left_set[0] + 'px','opacity': 1}, navSet.duration, navSet.easing);
    } else if (basePara.window_scroll >= (mSlideOffsetT[0] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[2]) {
      navSet.cursol.stop().animate({left: nav_left_set[1] + 'px','opacity': 1}, navSet.duration, navSet.easing);
    } else if (basePara.window_scroll >= (mSlideOffsetT[1] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[3]) {
      navSet.cursol.stop().animate({left: nav_left_set[2] + 'px','opacity': 1}, navSet.duration, navSet.easing);
    } else if (basePara.window_scroll >= (mSlideOffsetT[2] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[4]) {
      navSet.cursol.stop().animate({left: navSet.overCursol + 'px','opacity': 0}, navSet.duration, navSet.easing);
    } else if (basePara.window_scroll < navSet.min_scroll) {
      navSet.cursol.stop().animate({left: navSet.underCursol + 'px','opacity': 0}, navSet.duration, navSet.easing);
    }
  });

  function cursolAnimate(cursolArea,setInt){
    if(cursolArea === 'inside'){
      navSet.cursol.stop().animate({left: nav_left_set[setInt] + 'px','opacity': 1}, navSet.duration, navSet.easing);
    } else {
      navSet.cursol.stop().animate({left: navSet.underCursol + 'px','opacity': 0}, navSet.duration, navSet.easing);
    }
  }
});

