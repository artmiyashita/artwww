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
    //console.log('resized');
    basePara.window_width = $(window).outerWidth(true);
    basePara.window_height = $(window).height();
    resizeSec(basePara, baseObj);
    return basePara;
  }, 200);
});


// scroll event
$(window).on('scroll', function() {
  basePara.window_scroll = $(document).scrollTop();
  gnavPos(basePara);
});


/* ------------------------------------------------------------------
Start set 関連  */
$(function() {
  $mCnt = $('.mCnt');
  var baseObj_ready = {
    body: $('body'),
    main_cnt: $('div.mCnt'),
    page: $('#page'),
    container: $('#container'),
    gnav: $('#navigation'),
    footer: $('footer'),
    mainSlide: $('#mainSlide'),
    mainSlide_top: $('section#mainTopCnt > .sectionIn'),

    // company
    companySlide: $('#companyCnt'),
    mainSlide_comapny: $('#mainCompany'),

    // bussineess
    businessSlide: $('#businessCnt'),
    mainSlide_business: $('#mainBusiness'),
    business_lead: $('section#businessCnt > .lead'),

    // service
    mainSlide_service: $('#mainService'),
    service_slide: $('section#mainService .slide'),
    service_slideWrap: $('section#mainService .wrapper')
  };
  $.extend(true, baseObj, baseObj_ready);
  var basePara_addPara = {
    gnav_height: baseObj.gnav.height(),
    footer_height: baseObj.footer.height(),
    window_width: $(window).outerWidth(true),
    window_height: $(window).height(),
    service_wrap_maxHeight: 554
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

  // 初期表示セット　メインスライド以外は非表示
  baseObj.main_cnt.toggleClass('noActive').first().toggleClass('noActive');

  // windows resize event start
  resizeSec(basePara, baseObj);

  // gnaviのポジションでclass変化させる
  basePara.nav_position = basePara.gnav_offset_top;
  gnavPos(basePara);


  /*
  var s = $(this).scrollTop(),
  w = 0;

  baseObj.mainSlide_top.bind('mousewheel',function(event, delta) {
    if ( !baseObj.mainSlide_top.is(":animated") ) {
      if (delta < 0) {
        i = basePara.top_height;
        w = 1;
        $('html,body').animate({ scrollTop: + i }, 'slow');
        //$("#output").html(i);
      }
      if (w > 0) {
        //$('#mainTopCnt').unbind();
      }
    }
  });
*/

  /* ------------------------------------------------------------------
service set */

  $btn_service = $('section#mainTopCnt p.btnScroll a');

  function serviceScroll(e) {
    $('html,body').stop().animate({'scrollTop': basePara.top_height}, {duration: 600,easing: 'easeOutQuint'});
    e.preventDefault();
  }

  $btn_service.on('click', function() {
    serviceScroll()
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
  //console.log(basePara.top_height);
  serviceObj.btnNavi.on('click',function(){
    $('html,body').stop().animate({'scrollTop': basePara.top_height}, {duration: 600,easing: 'easeOutQuint'});
  });

  /*
  // text表示関連 test
  $('div#serviceSlide03 div.box').hide();
  var target = $('div#serviceSlide03 div.box00');
  var pHandle = $('div#serviceSlide03 div.box00 p.handle');
  pHandle.on('click',function(){
   if ($(this).hasClass('open')) {
    target.find('div.box').hide();
    target.stop().animate({'width':'164px'},{duration: servicePara.duration,easing: servicePara.easing,complete:function(){
      target.animate({'top':'94px'},{duration: servicePara.duration,easing: servicePara.easing})
    }})
    $(this).toggleClass('open');
   } else {
    target.stop().animate({'top':'-100px'},{duration: servicePara.duration,easing: servicePara.easing,complete:function(){
      target.animate({'width':'100%'},{duration: servicePara.duration,easing: servicePara.easing,complete:function(){
        target.find('div.box').show();
        pHandle.toggleClass('open');
      }})
    }})
   }
  });
*/


   var $txt_box = $('div.box', baseObj.mainSlide_service),
       $sv_cnt_box = $('div.cntBox', baseObj.mainSlide_service),
       $currentBox = $('div.current', baseObj.mainSlide_service),
       handle = $('section#mainService p.handle');
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
    handle.on('click',function(){
      var hId = $(this).attr('id'),
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
              width: '175px'
          };
          $.extend(true, animePara, animeParaAdd);
          box_animeClose(idInt,animePara);

      // 展開時すでに他のが開いている場合の処理
      } else if(handle.hasClass('open')) {
          handle.removeClass('open');
          $(this).addClass('open');
          activeBoxId = $('div.current', baseObj.mainSlide_service).attr('id');
          actInt = activeBoxId.slice(-2) - 0;
          console.log(hId);
          var animeParaAdd = {
              topBase: topPara[actInt],
              leftBase: leftPara[actInt],
              widthBase: '175px',
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
        $('div#serviceCntbox' + idInt + ' div.box').hide();
        $('div#serviceCntbox' + idInt).removeClass('current').stop().animate({'width':animePara.width},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
            $('div#serviceCntbox' + idInt).stop().animate({'top':animePara.top, 'left': animePara.left},{duration:servicePara.duration, easing:servicePara.easing});
        }});
    }

    function box_animeOpen(idInt,animePara) {
        $('div#serviceCntbox' + idInt).addClass('current').stop().animate({'top': animePara.top, 'left': animePara.left}, {duration: servicePara.duration, easing: servicePara.easing, complete: function () {
            $('div#serviceCntbox' + idInt).stop().animate({'width': animePara.width}, {duration: servicePara.duration, easing: servicePara.easing, complete: function(){
                $('div#serviceCntbox' + idInt + ' div.box').show();
            }});
        }});
    }
    function box_animaOtherClose(idInt,activeBoxId,animePara){
        $('div#'+activeBoxId + ' div.box').hide();
        $('div#'+activeBoxId).removeClass('current').stop().animate({'width':animePara.widthBase},{duration:servicePara.duration, easing:servicePara.easing, complete: function(){
            $('div#'+activeBoxId).stop().animate({'top':animePara.topBase, 'left': animePara.leftBase},{duration:servicePara.duration, easing:servicePara.easing});
        }});
        box_animeOpen(idInt,animePara);
    }



  /*
  // text表示関連（開閉）
  var $txt_box = $('div.box', baseObj.mainSlide_service),
    $sv_cnt_box = $('div.cntBox', baseObj.mainSlide_service),
    box_count = $txt_box.length,
    d = 0;

  jQuery.each($txt_box, function() {
    $(this).stop().animate({'height': 'toggle'}, {duration: servicePara.duration,easing: servicePara.easing});
  });

  //box_anime
  var handle = $('p.handle', $sv_cnt_box);
  handle.on('click', function() {
    var hId = $(this).attr('id');
    if ($(this).hasClass('open')) {
      box_anime(hId);
      $sv_cnt_box.not('.current').animate({'opacity': 1}, {duration: servicePara.duration,easing: servicePara.easing});
    } else if (handle.hasClass('open')) {
      handle.filter('.open').prev('div.box').stop().animate({'height': 'toggle'}, {duration: servicePara.duration,easing: servicePara.easing});
      $sv_cnt_box.removeClass('current').animate({'opacity': 1}, {duration: servicePara.duration,easing: servicePara.easing});
      handle.removeClass('open');
      box_anime(hId);
      $sv_cnt_box.not('.current').animate({'opacity': 0.4}, {duration: servicePara.duration,easing: servicePara.easing});
    } else {
      box_anime(hId);
      $sv_cnt_box.not('.current').animate({'opacity': 0.4}, {duration: servicePara.duration,easing: servicePara.easing});
    }

    function box_anime(hId) {
      $('p#' + hId, baseObj.mainSlide_service).toggleClass('open').parent('div.cntBox').toggleClass('current');
      $('p#' + hId, baseObj.mainSlide_service).prev('div.box').stop().animate({'height': 'toggle'}, {duration: servicePara.duration,easing: servicePara.easing});
    }
  });
  */
});