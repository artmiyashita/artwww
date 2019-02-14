/* ------------------------------------------------------------------
global 関数 */

var $mCnt =[],
  $blowBox,
  scrollPara,                // スクロール時の現在スクロール量
  mSlideOffsetT=[],          // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
  cursolPos,                 // cursolのオフセット値を取得
  busCnt_top_para = [],
  cmp_offset_para,          // 会社案内のoffset取得（戻ってくる用）
  bus_offset_para,          // 事業紹介のoffset取得（戻ってくる用）
  baseObj = {},

  basePara = {
    window_width:$(window).outerWidth(true),
    window_height:$(window).outerHeight(true),
    gnav_offset_top:'',                // Globalnaviのオフセット値（ページ表示時にウィンドウ高さサイズよりも上であればpos:fixed）
    nav_position:'',
    window_scroll:'',           // スクロール時の現在スクロール量
    gnav_height:'',              // Globalnaviの高さを取得
    top_height:'',
    max_cnt_width:'',           // 最大横幅
    mainSlide_offset_top:'',    // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
    cursol_offset_left:'',      // cursolのオフセット値を取得
    company_offset_top:'',      // 会社案内のoffset取得（戻ってくる用）
    business_offset_top:''      // 事業紹介のoffset取得（戻ってくる用）
    };
/* ------------------------------------------------------------------
resizeイベントと初期CSS数値設定  */
function resizeSec(basePara, baseObj) {
  basePara.top_height = basePara.window_height - basePara.gnav_height;
  basePara.service_wrap_topOffset = basePara.top_height - basePara.service_wrap_topOffset;

  //jQuery.each($mCnt,function(){ $(this).css('width',basePara.window_width); });
  baseObj.main_cnt.css('width',basePara.window_width);
  baseObj.companySlide.css('left',-basePara.window_width);
  baseObj.businessSlide.css('left',basePara.window_width);
  baseObj.page.css('width',basePara.window_width);

  baseObj.mainSlide_top.css('height',basePara.top_height);

  baseObj.business_lead.css('height',basePara.window_height);
  basePara.gnav_offset_top = baseObj.gnav.offset().top;
  baseObj.mainSlide_service.css({'height':basePara.top_height});
  baseObj.service_slide.css({'width':basePara.window_width,'height':basePara.top_height});
  baseObj.service_slideWrap.css({'height':basePara.top_height - basePara.service_wrap_topOffset,'paddingTop':basePara.service_wrap_topOffset});

  return basePara;
}

// gnav position
function gnavPos(basePara){
  if(basePara.window_scroll >= basePara.nav_position) {
   baseObj.gnav.addClass('fixed');
  } else if (basePara.window_scroll <= basePara.nav_position){
    baseObj.gnav.removeClass('fixed');
  }
}

/* ------------------------------------------------------------------
enent 関連  */
// Event resize adjust
$(window).on('resize', function(){
  basePara.window_width = $(window).outerWidth(true);
  basePara.window_height = $(window).outerHeight(true);
  resizeSec(basePara, baseObj);
  return basePara;
});


// scroll event
$(window).on('scroll',function () {
  basePara.window_scroll = $(document).scrollTop();
  gnavPos(basePara);
});


/* ------------------------------------------------------------------
Start set 関連  */
$(function(){
  $mCnt = $('.mCnt');
  var baseObj_ready = {
    main_cnt: $('.mCnt'),
    page: $('#page'),
    gnav: $('#navigation'),
    footer: $('footer'),
    mainSlide:$('#mainSlide'),
    mainSlide_service: $('#mainService'),
    mainSlide_top: $('#mainTopCnt > .sectionIn'),

    // company
    companySlide: $('#companyCnt'),

    // bussineess
    businessSlide: $('#businessCnt'),
    business_lead: $('#businessCnt > .lead'),

    // service
    service_slide: $('.slide',baseObj.mainSlide_service),
    service_slideWrap: $('.wrapper',baseObj.mainSlide_service)
  };
  $.extend(true, baseObj, baseObj_ready);
  var basePara_addPara = {
    gnav_height: baseObj.gnav.height(),
    window_width: $(window).outerWidth(true),
    window_height: $(window).outerHeight(true),

    service_wrap_topOffset:554
  };
  $.extend(true, basePara, basePara_addPara);




  // 事業紹介のコンテンツの位置取得（非表示前）
  var $business_lead = $('.lead',baseObj.businessSlide),
      $bus_cnt = $('.busCnt',baseObj.businessSlide),
      bus_count = $bus_cnt.length;
  $business_lead.css('height',basePara.window_height);
  for(var bAoff = 0; bAoff < bus_count; bAoff++){
    busCnt_top_para[bAoff] = $($bus_cnt[bAoff]).offset().top;
  }

  // 初期表示セット　メインスライド以外は非表示
  /*
  jQuery.each($mCnt,function(){
    $(this).toggleClass('noActive');
  });

  $($mCnt).toggleClass('noActive').first().toggleClass('noActive');
  */
  baseObj.main_cnt.toggleClass('noActive').first().toggleClass('noActive');

  // windows resize event start
   resizeSec(basePara,baseObj);

   // gnaviのポジションでclass変化させる
    basePara.nav_position = basePara.gnav_offset_top;
    gnavPos(basePara);



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
        $('#mainTopCnt').unbind();
      }
    }
  });


/* ------------------------------------------------------------------
service set
*/

var $service_slide = $('.slide',baseObj.mainSlide_service),
    slide_max = $service_slide.length,
    serviceObj = {
      //btn_prev: $('li.btnPrev',baseObj.mainSlide_service),
      //btn_next: $('li.btnNext',baseObj.mainSlide_service),
      //btn_endPrev: $('li.btnEndPrev',baseObj.mainSlide_service),
      //btn_endNext: $('li.btnEndNext',baseObj.mainSlide_service),
      btn: $('li',baseObj.mainSlide_service)
    };

    // ボタンの初期表示設定
    //serviceObj.btn.addClass('hide');
    //serviceObj.btn_next.toggleClass('hide');
    //serviceObj.btn_prev.toggleClass('hide');
    //$service_slide.addClass('hide').css('left',basePara.window_width);
    //$service_slide.first().toggleClass('hide').css('left',0);
    //console.log($service_slide);

    var servicePara = {
      slide_max:$service_slide.length,
      currentNum:0,
      nextNum:0,
      duration:1200,
      easing:'easeInOutExpo'
      //easing:'linear'
    };

    // text表示関連（開閉）
    var $txt_box = $('div.box',baseObj.mainSlide_service),
        $sv_cnt_box = $('div.cntBox',baseObj.mainSlide_service),
        box_count = $txt_box.length,
        d = 0;

        jQuery.each($txt_box,function(){
          $(this).stop().animate({'height':'toggle'},{duration:servicePara.duration,easing:servicePara.easing});
        });

        //box_anime
        var handle = $('p.handle',$sv_cnt_box);
        handle.on('click',function(){
          var hId = $(this).attr('id');
          if($(this).hasClass('open')){
            box_anime(hId);
            $sv_cnt_box.not('.current').animate({'opacity':1},{duration:servicePara.duration,easing:servicePara.easing});
          } else if (handle.hasClass('open')){
            handle.filter('.open').prev('div.box').stop().animate({'height':'toggle'},{duration:servicePara.duration,easing:servicePara.easing});
            $sv_cnt_box.removeClass('current').animate({'opacity':1},{duration:servicePara.duration,easing:servicePara.easing});
            handle.removeClass('open');
            box_anime(hId);
            $sv_cnt_box.not('.current').animate({'opacity':0.4},{duration:servicePara.duration,easing:servicePara.easing});
          } else {
            box_anime(hId);
            $sv_cnt_box.not('.current').animate({'opacity':0.4},{duration:servicePara.duration,easing:servicePara.easing});
          }
          function box_anime(hId){
            $('p#' + hId ,baseObj.mainSlide_service).toggleClass('open').parent('div.cntBox').toggleClass('current');
            $('p#' + hId ,baseObj.mainSlide_service).prev('div.box').stop().animate({'height':'toggle'},{duration:servicePara.duration,easing:servicePara.easing});
          }
        });






/* company,business 開閉用のfunction */
function slide_mCnt (mCntNum,state,$btn,scrollSetPara,movePara) {
  var mCntNum_a,
      mCntNum_b,
      duration=1200,
      easing='easeInOutExpo';

  if(state === 'open'){
    mCntNum_a = mCntNum,
    mCntNum_b = 0;
  } else {
    mCntNum_a = 0,
    mCntNum_b = mCntNum;
  }
  $btn.toggleClass('noActive');
  $($mCnt[mCntNum_a]).toggleClass('noActive').stop().animate({'left':0},duration,easing);
  if(state === 'close'){
      $blowBox.toggle();
      $('html, body').scrollTop(scrollSetPara);
    }
  $($mCnt[mCntNum_b]).stop().animate({'left':movePara},{'duration':duration,'easing':easing,'complete':function(){
    $($mCnt[mCntNum_b]).toggleClass('noActive');
    if(state === 'open'){
      $blowBox.toggle();
      $('html, body').scrollTop(scrollSetPara);
    }
    }
  });
}




/* ------------------------------------------------------------------
companyに入った時  */
var $btn_return_cmp = $('p.returnMainSlide',baseObj.companySlide);
$('#mainCompany > p.btnSlide',baseObj.mainSlide).on('click',function(e){
  basePara.company_offset_top = $('#mainCompany').offset().top -70;
  $blowBox = $('.blowBox',baseObj.companySlide).css('height',basePara.company_offset_top);
  var mCntNum = 1,
      state = 'open',
      scrollSetPara = 0,
      movePara = basePara.window_width;

  slide_mCnt(mCntNum,state,$btn_return_cmp,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  return basePara;
  });



/* ------------------------------------------------------------------
companyから戻る時  */

$btn_return_cmp.on('click',function(e){
  $blowBox = $('.blowBox',baseObj.companySlide);
  var mCntNum = 1,
      state = 'close',
      scrollSetPara = cmp_offset_para,
      movePara = -basePara.window_width;
  slide_mCnt(mCntNum,state,$btn_return_cmp,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  });

/* ------------------------------------------------------------------
businessに入った時  */
var $btn_return_bus = $('p.returnMainSlide',baseObj.businessSlide);
  $('#mainBusiness > p.btnSlide',baseObj.mainSlide).on('click',function(e){
    basePara.business_offset_top = $('#mainBusiness').offset().top -70;
    $blowBox = $('.blowBox',baseObj.businessSlide).css('height',basePara.window_scroll);
    var mCntNum = 2,
      state = 'open',
      scrollSetPara = 0,
      movePara = -basePara.window_width;
    slide_mCnt(mCntNum,state,$btn_return_bus,scrollSetPara,movePara,$blowBox);
    e.preventDefault();
    business_animate(busCnt_top_para);
    return basePara;
  });


/* ------------------------------------------------------------------
businessから戻る時  */
$btn_return_bus.on('click',function(e){
  $blowBox = $('.blowBox',baseObj.businessSlide);
  var mCntNum = 2,
      state = 'close',
      scrollSetPara = bus_offset_para,
      movePara = basePara.window_width;
  slide_mCnt(mCntNum,state,$btn_return_bus,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  });
});

// navigation cursol
$(function(){
  var cursol = $('span.cursol'),
      nav_duration = 1500,
      nav_easing = 'easeOutQuint',
      underCursol =- 180,
      overCursol = 960,
      min_scroll = basePara.top_height / 2,
      para = 160;
      cursol.css({'left':underCursol+'px',opacity:0});

  // 各コンテンツのoffset取得
  var $cnt_top = [];
  $cnt_top = $('.cntTop',$mCnt[0]);
  count = $cnt_top.length;
  for(var ni = 0; ni < count; ni++){
    mSlideOffsetT[ni] =Math.round($($cnt_top[ni]).offset().top);
  }

  // ナビゲーションのoffset取得
  var nav_left_set=[],
      $nav_left_cnt,
      count_nav;

  $nav_left_cnt=$('li',baseObj.gnav);
  count_nav=$nav_left_cnt.length;
  var base=$('h1').offset().left;
  for(var w=0;w<count_nav;w++){
    nav_left_set[w] =Math.round($($nav_left_cnt[w]).offset().left)-base;
  }

  $(window).on('scroll',function() {
    if(scrollPara >= min_scroll && scrollPara <= mSlideOffsetT[0]) {
      cursol.stop().animate({left:nav_left_set[0]+'px','opacity':1},nav_duration,nav_easing);
      naviCursol(cursolPos,opacity);
    } else if(scrollPara >= (mSlideOffsetT[0] + para) && scrollPara <= mSlideOffsetT[1]) {
      cursol.stop().animate({left:nav_left_set[1] + 'px','opacity':1},nav_duration,nav_easing);
    } else if(scrollPara >= (mSlideOffsetT[1] + para)  && scrollPara <= mSlideOffsetT[2]) {
      cursol.stop().animate({left:nav_left_set[2] + 'px','opacity':1},nav_duration,nav_easing);
    } else if(scrollPara >= (mSlideOffsetT[2] + para)  && scrollPara <= mSlideOffsetT[3]) {
      cursol.stop().animate({left:overCursol + 'px','opacity':0},nav_duration,nav_easing);
    } else if (scrollPara < min_scroll) {
      cursol.stop().animate({left:underCursol + 'px','opacity':0},nav_duration,nav_easing);
    }
  });
});





