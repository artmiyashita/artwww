/* ------------------------------------------------------------------
global 関数 */

var $mCnt = [],
  $blowBox,
  scrollPara, // スクロール時の現在スクロール量
  mSlideOffsetT = [], // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
  cursolPos, // cursolのオフセット値を取得
  busCnt_top_para = [],
  cmp_offset_para, // 会社案内のoffset取得（戻ってくる用）
  bus_offset_para, // 事業紹介のoffset取得（戻ってくる用）
  baseObj = {},
  busCnt_top,
  timer = null,

  basePara = {
    window_width: $(window).outerWidth(true),
    window_height: $(window).outerHeight(true),
    gnav_offset_top: '', // Globalnaviのオフセット値（ページ表示時にウィンドウ高さサイズよりも上であればpos:fixed）
    nav_position: '',
    window_scroll: '', // スクロール時の現在スクロール量
    gnav_height: '', // Globalnaviの高さを取得
    top_height: '',
    max_cnt_width: '', // 最大横幅
    mainSlide_offset_top: '', // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
    cursol_offset_left: '', // cursolのオフセット値を取得
    company_offset_top: '', // 会社案内のoffset取得（戻ってくる用）
    business_offset_top: '' // 事業紹介のoffset取得（戻ってくる用）
  };
/* ------------------------------------------------------------------
resizeイベントと初期CSS数値設定  */

function resizeSec(basePara, baseObj) {
  basePara.top_height = basePara.window_height - basePara.gnav_height;
  basePara.service_height = basePara.window_height - basePara.footer_height;
  basePara.service_wrap_topOffset = basePara.window_height - basePara.service_wrap_maxHeight - basePara.footer_height;

  // mainslide width+height set
  baseObj.main_cnt.css('width', basePara.window_width);
  baseObj.companySlide.css('left', 0);
  baseObj.mainSlide.css('left', basePara.window_width);
  baseObj.businessSlide.css('left', basePara.window_width * 2);
  baseObj.body.css('width', basePara.window_width);
  baseObj.container.css('left', -basePara.window_width);

  baseObj.mainSlide_top.css('height', basePara.top_height);

  baseObj.business_lead.css('height', basePara.window_height);
  basePara.gnav_offset_top = baseObj.gnav.offset().top;
  baseObj.mainSlide_service.css('height',basePara.service_height);
  baseObj.service_slide.css({'width': basePara.window_width,'height': basePara.service_height});
  baseObj.service_slideWrap.css({'height': basePara.service_wrap_maxHeight,'paddingTop': basePara.service_wrap_topOffset });
  return basePara;
}

// gnav position

function gnavPos(basePara) {
  if (basePara.window_scroll >= basePara.nav_position) {
    baseObj.gnav.addClass('fixed');
  } else if (basePara.window_scroll <= basePara.nav_position) {
    baseObj.gnav.removeClass('fixed');
  }
}

/* ------------------------------------------------------------------
enent 関連  */
// Event resize adjust
var resizeTimer = false;
$(window).on('resize', function() {
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(function() {
    basePara.window_width = $(window).outerWidth(true);
    basePara.window_height = $(window).height();
    resizeSec(basePara, baseObj);
    return basePara;
  }, 200);
});


// scroll event
$(window).on('scroll', function() {
  clearTimeout( timer );
  timer = setTimeout(function(){
   basePara.window_scroll = $(document).scrollTop();
   gnavPos(basePara);
 }, 200);
});


/* ------------------------------------------------------------------
Start set 関連  */
$(function() {
  $mCnt = $('.mCnt');
  var baseObj_ready = {
    body: $('body'),
    main_cnt: $('.mCnt'),
    page: $('#page'),
    container: $('#container'),
    gnav: $('#navigation'),
    footer: $('footer'),
    mainSlide: $('#mainSlide'),
    mainSlide_top: $('#mainTopCnt > .sectionIn'),
    privacyCnt: $('#privacyWrap'),

    // company
    companySlide: $('#companyCnt'),
    mainSlide_comapny: $('#mainCompany'),

    // bussineess
    businessSlide: $('#businessCnt'),
    mainSlide_business: $('#mainBusiness'),
    business_lead: $('#businessCnt > .lead'),

    // service
    mainSlide_service: $('#mainService'),
    service_slide: $('#mainService .slide'),
    service_slideWrap: $('#mainService .wrapper')
  };
  $.extend(true, baseObj, baseObj_ready);
  var basePara_addPara = {
    gnav_height: baseObj.gnav.height(),
    footer_height: baseObj.footer.height(),
    window_width: $(window).outerWidth(true),
    window_height: $(window).height(),
    service_wrap_maxHeight: 520
  };
  $.extend(true, basePara, basePara_addPara);



  // 事業紹介のコンテンツの位置取得（非表示前）
  var $business_lead = $('.lead', baseObj.businessSlide),
    $bus_cnt = $('.busCnt', baseObj.businessSlide),
    bus_count = $bus_cnt.length;
  $business_lead.css('height', basePara.window_height);
  for (var bAoff = 0; bAoff < bus_count; bAoff++) {
    busCnt_top_para[bAoff] = $($bus_cnt[bAoff]).offset().top;
  }
  busCnt = {
    para00 : busCnt_top_para[0],
    para01 : busCnt_top_para[1],
    para02 : busCnt_top_para[2],
    para03 : busCnt_top_para[3],
    para04 : busCnt_top_para[4],
    para05 : busCnt_top_para[5]
  };
  $.extend(basePara,busCnt);

  // 初期表示セット　メインスライド以外は非表示
  baseObj.main_cnt.toggleClass('noActive').first().toggleClass('noActive');

  // windows resize event start
  resizeSec(basePara, baseObj);

  // gnaviのポジションでclass変化させる
  basePara.nav_position = basePara.gnav_offset_top;
  gnavPos(basePara);

  /* ------------------------------------------------------------------
service set */

  $btn_service = $('#mainTopCnt p.btnScroll a');
  $btn_service.on('click', function(event) {
    $('html,body').stop().animate({'scrollTop': basePara.top_height}, {duration: 600,easing: 'easeOutQuint'});
    event.preventDefault();
  });

  var $service_slide = $('.slide', baseObj.mainSlide_service),
    slide_max = $service_slide.length,
    serviceObj = {
      btn: $('li', baseObj.mainSlide_service),
      btnNavi: $('ul.slideNav li.btn')
    };

  var servicePara = {
    slide_max: $service_slide.length,
    currentNum: 0,
    nextNum: 0,
    duration: 1200,
    easing: 'easeInOutExpo'
  };
  serviceObj.btnNavi.on('click',function(){
    $('html,body').stop().animate({'scrollTop': basePara.top_height}, {duration: 600,easing: 'easeOutQuint'});
  });

    var $txt_box = $('div.box', baseObj.mainSlide_service),
        $sv_cnt_box = $('div.cntBox', baseObj.mainSlide_service),
        $currentBox = $('div.current', baseObj.mainSlide_service),
        $handle = $('#mainService p.handle');
    // d = 0;

    $txt_box.hide();

    // max box count
    servicePara.box_length = $txt_box.length;

    var topPara = [],
        leftPara = [],
        paraInt = 1,
        activeBoxId,
        animePara = {};

    jQuery.each($sv_cnt_box,function(){
        topPara[paraInt] = $(this).css('top');
        leftPara[paraInt] = $(this).css('left');
        paraInt++;
    });

    //　start
    $sv_cnt_box.on('click',function(){
        var hId = $(this).find('p.handle').attr('id'),
            idInt = hId.slice(-2),
            paraInt = idInt - 0,
            actInt,
            opacityInt;

        // 通常閉鎖処理
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            var animeParaAdd = {
                top: topPara[paraInt],
                left: leftPara[paraInt],
                width: '165px'
            };
            $.extend(true, animePara, animeParaAdd);
            box_animeClose(idInt,animePara);

            // 展開時すでに他のが開いている場合の処理
        } else if($sv_cnt_box.hasClass('open')) {
            $sv_cnt_box.removeClass('open');
            $(this).addClass('open');
            activeBoxId = $('div.current', baseObj.mainSlide_service).attr('id');
            actInt = activeBoxId.slice(-2) - 0;
            var animeParaAdd = {
                topBase: topPara[actInt],
                leftBase: leftPara[actInt],
                widthBase: '165px',
                top: '-100px',
                left: 0,
                width: '100%'
            };
            $.extend(true, animePara, animeParaAdd);
            box_animaOtherClose(idInt,activeBoxId,animePara);

            // 通常開閉処理
        } else {
            $(this).addClass('open');
            var animeParaAdd = {
                top: '-100px',
                left: 0,
                width: '100%'
            };
            $.extend(true, animePara, animeParaAdd);
            box_animeOpen(idInt,animePara);
        }

    });

    function otherCntBoxFade(opacityInt) {
        $sv_cnt_box.not('.current').animate({'opacity':opacity}, {duration: animePara.duration,easing: animePara.easing});
    }

    function box_animeClose(idInt,animePara) {
        $('#serviceCntbox' + idInt + ' div.box').hide();
        $('#serviceCntbox' + idInt).removeClass('current').stop().animate({'width':animePara.width},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
            $('#serviceCntbox' + idInt).stop().animate({'top':animePara.top, 'left': animePara.left},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
                $('#serviceCntbox' + idInt +' p.arrow').show();
            }});
        }});
    }

    function box_animeOpen(idInt,animePara) {
        $('#serviceCntbox' + idInt  +' p.arrow').hide();
        $('#serviceCntbox' + idInt).addClass('current').stop().animate({'top': animePara.top, 'left': animePara.left}, {duration: servicePara.duration, easing: servicePara.easing, complete: function () {
            $('#serviceCntbox' + idInt).stop().animate({'width': animePara.width}, {duration: servicePara.duration, easing: servicePara.easing, complete: function(){
                $('#serviceCntbox' + idInt + ' div.box').show();
            }});
        }});
    }
    function box_animaOtherClose(idInt,activeBoxId,animePara){
        $('#'+activeBoxId + ' div.box').hide();
        $('#'+activeBoxId).removeClass('current').stop().animate({'width':animePara.widthBase},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
            $('#'+activeBoxId).stop().animate({'top':animePara.topBase, 'left': animePara.leftBase},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
                $('#'+activeBoxId +' p.arrow').show();
            }});
        }});
        box_animeOpen(idInt,animePara);
    }



    /* ------------------------------------------------------------------
  companyに入った時  */
  var $btn_return_cmp = $('#companyCnt p.returnMainSlide');
  basePara.company_offset_top = $('#mainCompany').offset().top - 70;
  $('#mainCompany > p.btnSlide', baseObj.mainSlide).on('click', function(event) {
    $blowBox = $('.blowBox', baseObj.companySlide).css('height', basePara.company_offset_top);
    $('html,body').animate({'scrollTop': basePara.company_offset_top}, {duration: 0,easing: 'easeOutQuint',complete: function() {
        baseObj.companySlide.removeClass('noActive');
        baseObj.container.stop().animate({'left': 0}, {duration: 1500,easing: 'easeOutQuint',complete: function() {
            $btn_return_cmp.toggleClass('noActive');
            baseObj.mainSlide.toggleClass('noActive');
            $blowBox.hide();
            $('html,body').scrollTop(0);
          }
        });
      }
    });
    event.preventDefault();
  });



  /* ------------------------------------------------------------------
companyから戻る時  */
  $btn_return_cmp.on('click', function(event) {
    returnCompany();
    event.preventDefault();
  });

  function returnCompany(position){
    baseObj.mainSlide.toggleClass('noActive');
    $btn_return_cmp.toggleClass('noActive');
    $blowBox.show();
    $('html,body').scrollTop(basePara.company_offset_top);
    $('html,body').animate({ 'scrollTop': basePara.company_offset_top }, { duration: 0, easing: 'easeOutQuint', complete: function() {
        baseObj.container.stop().animate({ 'left': -basePara.window_width }, { duration: 1500, easing: 'easeOutQuint', complete: function() {
            baseObj.companySlide.toggleClass('noActive');
            $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
          }
        });
      }
    });
  }
  function returnCompanyPrivacy(position,targetDiv){
    baseObj.mainSlide.toggleClass('noActive');
    $btn_return_cmp.toggleClass('noActive');
    $blowBox.show();
    $('html,body').scrollTop(basePara.company_offset_top);
    $('html,body').animate({ 'scrollTop': basePara.company_offset_top }, { duration: 0, easing: 'easeOutQuint', complete: function() {
        baseObj.container.stop().animate({ 'left': -basePara.window_width }, { duration: 1500, easing: 'easeOutQuint', complete: function() {
            baseObj.companySlide.toggleClass('noActive');
            baseObj.businessSlide.addClass('noActive');
            baseObj.privacyCnt.show();
            baseObj.privacyCnt.find('section.cntWrap').hide();
            $(targetDiv).fadeToggle();
            $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
          }
        });
      }
    });
  }

  /* ------------------------------------------------------------------
businessに入った時  */
  var $btn_return_bus = $('#businessCnt p.returnMainSlide');
  basePara.business_offset_top = $('#mainBusiness').offset().top - 70;
  $('#mainBusiness > p.btnSlide', baseObj.mainSlide).on('click', function(e) {
    $blowBox = $('.blowBox', baseObj.businessSlide).css('height', basePara.business_offset_top);
    $('html,body').animate({'scrollTop': basePara.business_offset_top}, {duration: 0,easing: 'easeOutQuint',complete: function() {
        baseObj.businessSlide.removeClass('noActive');
        baseObj.container.stop().animate({'left': -basePara.window_width * 2}, {duration: 1500,easing: 'easeOutQuint',complete: function() {
            $btn_return_bus.toggleClass('noActive');
            $blowBox.hide();
            $('html,body').scrollTop(0);
            baseObj.mainSlide.toggleClass('noActive');
          }
        });
      }
    });
    e.preventDefault();
  });

  /* ------------------------------------------------------------------
businessから戻る時  */
  $btn_return_bus.on('click', function(event) {
    returnBusiness();
    event.preventDefault();
  });

  function returnBusiness(position){
    baseObj.mainSlide.toggleClass('noActive');
    $btn_return_bus.toggleClass('noActive');
    $blowBox.show();
    $('html,body').scrollTop(basePara.business_offset_top);
    $('html,body').animate({ 'scrollTop': basePara.business_offset_top }, { duration: 0, easing: 'easeOutQuint', complete: function() {
        baseObj.container.stop().animate({ 'left': -basePara.window_width }, { duration: 1500, easing: 'easeOutQuint', complete: function() {
            baseObj.businessSlide.addClass('noActive');
            $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
           }
        });
      }
    });
  }

  function returnBusinessPrivacy(position,targetDiv){
    baseObj.mainSlide.toggleClass('noActive');
    $btn_return_bus.toggleClass('noActive');
    $blowBox.show();
    $('html,body').scrollTop(basePara.business_offset_top);
    $('html,body').animate({ 'scrollTop': basePara.business_offset_top }, { duration: 0, easing: 'easeOutQuint', complete: function() {
        baseObj.container.stop().animate({ 'left': -basePara.window_width }, { duration: 1500, easing: 'easeOutQuint', complete: function() {
            baseObj.businessSlide.addClass('noActive');
            baseObj.privacyCnt.show();
            baseObj.privacyCnt.find('section.cntWrap').hide();
            $(targetDiv).fadeToggle();
            $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
           }
        });
      }
    });
  }


// navigation cursol
  var navSet = {
    cursol: $('span.cursol'),
    duration: 1500,
    easing: 'easeOutQuint',
    underCursol: -145,
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

  var navPara = {
    service_pos : $('#mainService').offset().top,
    company_pos : $('#mainCompany').offset().top -70,
    business_pos : $('#mainBusiness').offset().top -70,
    works_pos : $('#mainWorks').offset().top -70
  };
  baseObj.gnav.find('a[href^=#]').on('click',function(){

    var speed = 400,
    href= $(this).attr("href"),
    target = $(href === "#" || href === "" ? 'html' : href),
    position;

    switch(href){
      case '#top':
      position = 0;
      break;
      case '#mainService':
      position = navPara.service_pos;
      break;
      case '#mainCompany':
      position = navPara.company_pos;
      break;
      case '#mainBusiness':
      position = navPara.business_pos;
      break;
      case '#mainWorks':
      position = navPara.works_pos;
      break;
      default:
      break;
    }
    // 会社情報が表示されている時にナビゲーション側から閉じる動作を行う
    if(baseObj.companySlide.is(':visible')){
      returnCompany(position);
    // 事業紹介が表示されている時にナビゲーション側から閉じる動作を行う
    } else if (baseObj.businessSlide.is(':visible')){
      returnBusiness(position);
    } else if (baseObj.privacyCnt.is(':visible')){
      baseObj.privacyCnt.slideToggle();
      $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
    } else {
    // サービス等はそのままスクロールアニメーション
      $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
    }
    return false;
  });

    // ナビゲーションのoffset取得
  var nav_left_set = [],
    $nav_left_cnt,
    count_nav,
    cursolArea,
    setInt;

  $nav_left_cnt = $('li', baseObj.gnav);
  count_nav = $nav_left_cnt.length;
  var base = $('h1').offset().left;
  for (var w = 0; w < count_nav; w++) {
    nav_left_set[w] = Math.round($($nav_left_cnt[w]).offset().left) - base;
  }
    $(window).on('scroll', function() {
    if(baseObj.mainSlide.is(':visible')){
      if (basePara.window_scroll >= navSet.min_scroll && basePara.window_scroll <= mSlideOffsetT[1]) {
        cursolArea = 'inside';
        setInt = 0;
        cursolAnimate(cursolArea,setInt);
      } else if (basePara.window_scroll >= (mSlideOffsetT[1] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[2]) {
        cursolArea = 'inside';
        setInt = 1;
        cursolAnimate(cursolArea,setInt);
      } else if (basePara.window_scroll >= (mSlideOffsetT[1] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[3]) {
        cursolArea = 'inside';
        setInt = 2;
        cursolAnimate(cursolArea,setInt);
      } else if (basePara.window_scroll >= (mSlideOffsetT[2] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[4]) {
        cursolArea = 'inside';
        setInt = 3;
        cursolAnimate(cursolArea,setInt);
      } else if (basePara.window_scroll >= (mSlideOffsetT[3] + navSet.para) && basePara.window_scroll <= mSlideOffsetT[5]) {
        cursolArea = 'outside';
        setInt = 4;
        cursolAnimate(cursolArea,setInt);
      } else if (basePara.window_scroll < navSet.min_scroll) {
        cursolArea = 'outside';
        setInt = 5;
        cursolAnimate(cursolArea,setInt);
      }
    // 会社情報スライドに居る時のグローバルのカーソル位置固定
    } else if(baseObj.companySlide.is(':visible')) {
        cursolArea = 'inside';
        setInt = 1;
        cursolAnimate(cursolArea,setInt);
    // 部門紹介スライドに居る時のグローバルのカーソル位置固定
    } else if(baseObj.businessSlide.is(':visible')) {
      cursolArea = 'inside';
      setInt = 2;
      cursolAnimate(cursolArea,setInt);
    }
  });

    function cursolAnimate(cursolArea,setInt){
      if(cursolArea === 'inside'){
        navSet.cursol.stop().animate({left: nav_left_set[setInt] + 'px','opacity': 1}, navSet.duration, navSet.easing);
      } else if(setInt === 4) {
        // WORKSより下にある時にカーソルを右側にフェードアウト
        navSet.cursol.stop().animate({left: navSet.overCursol + 'px','opacity': 0}, navSet.duration, navSet.easing);
      } else if(setInt === 5) {
        // サービスより上にある時にカーソルを左側にフェードアウト
        navSet.cursol.stop().animate({left: navSet.underCursol + 'px','opacity': 0}, navSet.duration, navSet.easing);
      }
    }

  // footer privacy tab
  var privacySlidePara = $('#mainContact').offset().top + 525 + 40 + 70;
  $('#subNavi').find('a[href^=#]').on('click', function() {
    position = privacySlidePara;
    var targetDiv = $(this).attr("href");
    if(baseObj.companySlide.is(':visible')){
      returnCompanyPrivacy(position,targetDiv);
    } else if (baseObj.businessSlide.is(':visible')){
      returnBusinessPrivacy(position,targetDiv);
    } else {
      baseObj.businessSlide.addClass('noActive');
      baseObj.privacyCnt.show();
      baseObj.privacyCnt.find('section.cntWrap').hide();
      $(targetDiv).fadeToggle();
      $('body,html').animate({scrollTop:position}, 1000, 'easeOutQuint');
    }
  });

  return basePara;
});

// service slider
$(function(){
  $('.bxslider').bxSlider( {
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: false,
    nextSelector: '.btnNext',
    prevSelector: '.btnPrev',
    nextText: '<img src="./img/btn_service_next.png" alt="">',
    prevText: '<img src="./img/btn_service_prev.png" alt="">'
  });
})


// modal works
$(function(){
  var images = $("img");
  for(var i=0; i < images.size(); i++) {
      if(images.eq(i).attr("src").match("_off.")) {
          $("img").eq(i).hover(function() {
              $(this).attr('src', $(this).attr("src").replace("_off.", "_on."));
          }, function() {
              $(this).attr('src', $(this).attr("src").replace("_on.", "_off."));
          });
      }
  }

  $('a.modal').fancybox({
    titleFormat: function(title){ return title.replace(/\n/g,'<br />'); },
    'padding':20,
    'speedIn':1500,
    'easingIn':'easeOutQuint',
    'overlayColor': '#fff',
    'overlayOpacity': '0.75',
    'centerOnScroll': true,
    'titlePosition': 'inside',
    'cyclic': true
  });
});
