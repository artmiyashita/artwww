/* ------------------------------------------------------------------
global 関数 */
var w_wdh = $(window).outerWidth(true),
  w_hgt = $(window).outerHeight(true),
  $page,$mCnt,$gnav,
  pos_para,                  // Globalnaviのオフセット値（ページ表示時にウィンドウ高さサイズよりも上であればpos:fixed）
  nav_pos,                   // ページ読み込み時に初期にresizeSecを一度実行。その実行後の数値を移し替えているだけ。pos_para=pos_paraでデータ上書きされるなら必要ないかも
  scrollPara,                // スクロール時の現在スクロール量
  gnav_hgt,                  // Globalnaviの高さを取得
  top_hgt,                   //
  max_cnt_wdh,               // 最大横幅
  mSlideOffsetT=[],          // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
  cursolPos,                 // cursolのオフセット値を取得
  busCnt_top_para = [],
  cmp_offset_para,          // 会社案内のoffset取得（戻ってくる用）
  bus_offset_para,          // 事業紹介のoffset取得（戻ってくる用）

  basePara = {
    window_w:$(window).outerWidth(true),
    window_h:$(window).outerHeight(true),
    pos_para:'',                // Globalnaviのオフセット値（ページ表示時にウィンドウ高さサイズよりも上であればpos:fixed）
    nav_pos:'',
    top_hight:'',
    window_scroll:'',           // スクロール時の現在スクロール量
    gnav_hight:'',              // Globalnaviの高さを取得
    max_cnt_width:'',           // 最大横幅
    mainSlide_offset_top:'',    // メインスライドのサービス紹介、会社情報、事業案内、お問い合わせそれぞれのオフセット値（グローバルのカーソルの移動用）
    cursol_offset_left:'',      // cursolのオフセット値を取得
    company_offset_top:'',      // 会社案内のoffset取得（戻ってくる用）
    business_offset_top:''      // 事業紹介のoffset取得（戻ってくる用）
    },



  // business Animation setting
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

console.log(basePara.window_h);

/* ------------------------------------------------------------------
resizeイベントと初期CSS数値設定  */
function resizeSec(w_hgt, w_wdh, $gnav) {

  gnav_hgt = $gnav.height();
  basePara. = w_hgt - gnav_hgt;
  // console.log(w_hgt,gnav_hgt,top_hgt);

  var $main_service = $('#mainService .sectionIn'),
      $main_top = $('#mainTopCnt > .sectionIn'),
      $business_lead = $('#businessCnt > .lead');

  //$($mCnt).css('width', w_wdh);
  jQuery.each($mCnt,function(){ $(this).css('width',w_wdh); });
  $($mCnt[1]).css('left',-w_wdh);
  $($mCnt[2]).css('left',w_wdh);
  $page.css('width',w_wdh);

  $main_service.css({'width':w_wdh,'height':w_hgt});
  $main_top.css('height',top_hgt);
  var i=$main_top.css('height');
  // console.log(i);
  $business_lead.css('height',w_hgt);
  pos_para = $gnav.offset().top;
  //console.log(pos_para);
  return w_wdh, pos_para, top_hgt;
}

// gnav position
function gnav_pos(nav_pos,scrollPara){
  if(scrollPara >= nav_pos) {
   $gnav.addClass('fixed');
  } else if (scrollPara <= nav_pos){
    $gnav.removeClass('fixed');
  }
}

/* ------------------------------------------------------------------
enent 関連  */
// Event resize adjust
$(window).on('resize', function(){
  w_wdh = $(window).outerWidth(true);
  w_hgt = $(window).outerHeight(true);
  resizeSec(w_hgt,w_wdh,$gnav);
  return w_wdh,w_hgt;
});

// scroll event
$(window).on('scroll',function () {
  scrollPara = $(document).scrollTop();
  gnav_pos(nav_pos,scrollPara);
});


// start set
$(function(){
  $mCnt = $('.mCnt');
  w_wdh = $(window).outerWidth(true);
  w_hgt = $(window).outerHeight(true);

  // 事業紹介のコンテンツの位置取得（非表示前）
  var $business_lead = $('.lead',$mCnt[2]),
      $bus_cnt = $('.busCnt',$mCnt[2]),
      bus_count = $bus_cnt.length;
  $business_lead.css('height',w_hgt);
  for(var bAoff = 0; bAoff < bus_count; bAoff++){
    busCnt_top_para[bAoff] = $($bus_cnt[bAoff]).offset().top;
  }
  // console.log(busCnt_top_para);

  // 初期表示セット　メインスライド以外は非表示
  jQuery.each($mCnt,function(){
    $(this).toggleClass('noActive');
  });
  $($mCnt[0]).toggleClass('noActive');

  $page = $('#page');
  $gnav = $('#navigation');

  // windows resize event start
   resizeSec(w_hgt, w_wdh,$gnav);

   // gnaviのポジションでclass変化させる
    nav_pos = pos_para;
    scrollPara = $(document).scrollTop();
    gnav_pos(nav_pos,scrollPara);

/* ------------------------------------------------------------------
serviceに入った時  */
var $sv_cnt = $('#mainService'),
   $serviceCnt = $('.serviceCnt',$sv_cnt),
   cnt_count = $serviceCnt.length,
   duration = 500,
   easing = 'easeInOutCubic',
   left_move = parseInt(w_wdh -100),
   $btnToggle = [$('p#btnServiceIn',$sv_cnt),$('p.returnMainSlide',$sv_cnt),$('p#btnService01',$sv_cnt)],
   base_service_pos = $sv_cnt.offset().top,
   $main_service = $('div.sectionIn',$sv_cnt),
   $footer = $('footer',$page);


// slider btn on click
$btnToggle[0].on('click',function(){
  $($mCnt[0]).css('width','100%');
  top_hgt -= 15;
  jQuery.each($btnToggle,function(){$(this).toggleClass('noActive');});
  $main_service.css({'width':w_wdh,'height':top_hgt});
  $('section,p.btnScroll',$mCnt[0]).not($sv_cnt).hide();
  $gnav.toggleClass('fixedService').css({'width':w_wdh});
  $footer.hide();
  $serviceCnt.show();
  $footer.toggleClass('serviceIn');

  var cnt_wth = 1600,
      interval = 1000,
      max_cnt_wdh = Math.round(cnt_wth*3 + interval*3 + w_wdh);

  for(var s = 1; s < 4; s++){
    var cntPos,e;
    e = s - 1;
    cntPos = Math.round(w_wdh + (interval*s) + (cnt_wth*e) );
    $($serviceCnt[e]).css('left',cntPos + 'px');
  }
  $page.css({'width':max_cnt_wdh,'overflow':'visible','paddingTop':gnav_hgt});

/* ------------------------------------------------------------------
text表示関連（開閉）  */
var $txt_box = $('div.box',$serviceCnt),
    $sv_cnt_box = $('div.cntBox',$serviceCnt),
    box_count = $txt_box.length,
    d = 0;

    jQuery.each($txt_box,function(){
      $(this).stop().animate({'height':'toggle'},duration,easing);
    });

//box_anime
var btn = $('p.handle',$sv_cnt_box);
btn.on('click',function(){
  var hId = $(this).attr('id');
  if($(this).hasClass('open')){
    box_anime(hId);
    $sv_cnt_box.not('.current').animate({'opacity':1},duration,easing);
  } else if (btn.hasClass('open')){
    btn.filter('.open').prev('div.box').stop().animate({'height':'toggle'},duration,easing);
    $sv_cnt_box.removeClass('current').animate({'opacity':1},duration,easing);
    btn.removeClass('open');
    box_anime(hId);
    $sv_cnt_box.not('.current').animate({'opacity':0.4},duration,easing);
  } else {
    box_anime(hId);
    $sv_cnt_box.not('.current').animate({'opacity':0.4},duration,easing);
  }

  function box_anime(hId){
    $('p#' + hId ,$sv_cnt).toggleClass('open').parent('div.cntBox').toggleClass('current');
    $('p#' + hId ,$sv_cnt).prev('div.box').stop().animate({'height':'toggle'},duration,easing);
  }
});


/* ------------------------------------------------------------------
スライドボタン関連  */
var $btn_next_cnt = $('p.nextArrow a',$sv_cnt);

$btn_next_cnt.on('click',function(event){
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollLeft: $($anchor.attr('href')).offset().left -50
  }, 1500,'easeInOutExpo');
  event.preventDefault();
});



/* ------------------------------------------------------------------
スクロール関連時  */
var speed = 10;
//マウスホイールで横移動
$sv_cnt.on('mousewheel',function(event, mov) {
  //ie firefox
  $('html').scrollLeft($('html').scrollLeft() - mov * speed);
  $('body').scrollLeft($('body').scrollLeft() - mov * speed);
  return false;
  });
}); // end click in service cnt



/* ------------------------------------------------------------------
service 戻る関連関連  */
$btnToggle[1].on('click',function(){
  $('html, body').stop().animate({scrollLeft:0},{duration:'3000', easing: 'easeInQuad', complete: function(){
    $('section,p.btnScroll',$mCnt[0]).not($sv_cnt).show();
    $($mCnt[0]).css('width',w_wdh);
    $footer.show();
    $serviceCnt.hide();
    $footer.toggleClass('serviceIn');
    $page.css({'width':w_wdh,'paddingTop':0});
    $('html, body').scrollTop(base_service_pos);
  }});
  $main_service.css({'width':w_wdh,'height':top_hgt});
  $gnav.toggleClass('fixedService').css({'width':'100%'});
  jQuery.each($btnToggle,function(){$(this).toggleClass('noActive');});

  var speed = 5;
  $sv_cnt.on('mousewheel',function(event, mov) {
    //ie firefox
    $('html').scrollTop($('html').scrollTop() - mov * speed);
    $('body').scrollTop($('body').scrollTop() - mov * speed);
    return false;
    });
  });







/* company,business 開閉用のfunction */
function slide_mCnt (mCntNum,state,$btn,scrollSetPara,movePara) {
  console.log(mCntNum,state,$btn);
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
  };
  $btn.toggleClass('noActive');
  $($mCnt[mCntNum_a]).toggleClass('noActive').stop().animate({'left':0},duration,easing);
  if(state === 'close'){
      $blowBox.toggle();
      $('html, body').scrollTop(scrollSetPara);
    }
  $($mCnt[mCntNum_b]).stop().animate({'left':movePara},{'duration':duration,'easing':easing,'complete':function(){
    //$($mCnt[mCntNum_a]).css('opacity',1);
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
var $btn_return_cmp = $('p.returnMainSlide',$mCnt[1]);
$('#mainCompany > p.btnSlide',$mCnt[0]).on('click',function(e){
  cmp_offset_para = $('#mainCompany').offset().top -70;
  $blowBox = $('.blowBox',$mCnt[1]).css('height',cmp_offset_para);
  var mCntNum = 1,
      state = 'open',
      scrollSetPara = 0,
      movePara = w_wdh;

  slide_mCnt(mCntNum,state,$btn_return_cmp,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  return cmp_offset_para;
  });


/* ------------------------------------------------------------------
companyから戻る時  */

$btn_return_cmp.on('click',function(e){
  $blowBox = $('.blowBox',$mCnt[1]);
  var mCntNum = 1,
      state = 'close',
      scrollSetPara = cmp_offset_para,
      movePara = -w_wdh;
  slide_mCnt(mCntNum,state,$btn_return_cmp,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  });

/* ------------------------------------------------------------------
businessに入った時  */
var $btn_return_bus = $('p.returnMainSlide',$mCnt[2]);
  $('#mainBusiness > p.btnSlide',$mCnt[0]).on('click',function(e){
    bus_offset_para = $('#mainBusiness').offset().top -70;
    $blowBox = $('.blowBox',$mCnt[2]).css('height',scrollPara);
    var mCntNum = 2,
      state = 'open',
      scrollSetPara = 0,
      movePara = -w_wdh;
    slide_mCnt(mCntNum,state,$btn_return_bus,scrollSetPara,movePara,$blowBox);
    e.preventDefault();
    business_animate(busCnt_top_para);
    return bus_offset_para;
  });


/* ------------------------------------------------------------------
businessから戻る時  */
$btn_return_bus.on('click',function(e){
  $blowBox = $('.blowBox',$mCnt[2]);
  var mCntNum = 2,
      state = 'close',
      scrollSetPara = bus_offset_para,
      movePara = w_wdh;
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
      min_scroll = top_hgt / 2,
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

  $nav_left_cnt=$('li',$($gnav));
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





