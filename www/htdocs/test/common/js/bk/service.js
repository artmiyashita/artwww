/* ------------------------------------------------------------------
global 関数 */
var w_wdh = $(window).outerWidth(true),
  w_hgt = $(window).outerHeight(true),
  $page,$mCnt,$gnav,$footer,
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

  baseObj = {
    page:'',
    gnav:'',
    footer:''
  },



  basePara = {
    window_width:$(window).outerWidth(true),
    window_height:$(window).outerHeight(true),
    gnav_offset_top:'',                // Globalnaviのオフセット値（ページ表示時にウィンドウ高さサイズよりも上であればpos:fixed）
    nav_position:'',
    window_scroll:'',           // スクロール時の現在スクロール量
    gnav_hight:'',              // Globalnaviの高さを取得
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

  // gnav_hgt = baseObk['gnav'].height();
  // top_hgt = w_hgt - gnav_hgt;
  basePara.gnav_hight = baseObj['gnav'].height();
  basePara.top_height = basePara.window_height - basePara.gnav_hight;
  // console.log(w_hgt,gnav_hgt,top_hgt);
  console.log(basePara.gnav_height);
  var $main_service = $('#mainService .sectionIn'),
      $main_top = $('#mainTopCnt > .sectionIn'),
      $business_lead = $('#businessCnt > .lead');
      $serviceCnt = $('#mainService');

  //$($mCnt).css('width', w_wdh);
  // jQuery.each($mCnt,function(){ $(this).css('width',w_wdh); });
  // $($mCnt[1]).css('left',-w_wdh);
  // $($mCnt[2]).css('left',w_wdh);
  // $page.css('width',w_wdh);

  jQuery.each($mCnt,function(){ $(this).css('width',basePara.window_width); });
  $($mCnt[1]).css('left',-basePara.window_width);
  $($mCnt[2]).css('left',basePara.window_width);
  baseObj['page'].css('width',basePara.window_width);

  // $main_service.css({'width':w_wdh,'height':w_hgt});
  // $main_top.css('height',top_hgt);
  $main_service.css({'width':basePara.window_width,'height':basePara.top_height});
  $main_top.css('height',basePara.top_height);
  // $service_top.css('height',basePara.top_height);
  $serviceCnt.css('height',basePara.top_height);

  // var i=$main_top.css('height');
  // console.log(i);
  $business_lead.css('height',w_hgt);
  basePara.gnav_offset_top = baseObj['gnav'].offset().top;
  //console.log(pos_para);
  return basePara;
}

// gnav position
function gnavPos(basePara){
  if(basePara.window_scroll >= basePara.nav_position) {
   baseObj['gnav'].addClass('fixed');
  } else if (basePara.window_scroll <= basePara.nav_position){
    baseObj['gnav'].removeClass('fixed');
  }
}

/* ------------------------------------------------------------------
enent 関連  */
// Event resize adjust
$(window).on('resize', function(){
  basePara.window_width = $(window).outerWidth(true);
  basePara.window_height = $(window).outerHeight(true);
  resizeSec(basePara,baseObj['gnav']);
  return basePara;
});


// scroll event
$(window).on('scroll',function () {
  basePara.window_scroll = $(document).scrollTop();
  gnavPos(basePara);
  return basePara;
});

// start set
$(function(){
  $mCnt = $('.mCnt');
  basePara.window_width = $(window).outerWidth(true) - 15;
  basePara.window_height = $(window).outerHeight(true);
  baseObj = {
    page:$('#page'),
    gnav:$('#navigation'),
    footer:$('footer')
  }


  // 事業紹介のコンテンツの位置取得（非表示前）
  var $business_lead = $('.lead',$mCnt[2]),
      $bus_cnt = $('.busCnt',$mCnt[2]),
      bus_count = $bus_cnt.length;
  $business_lead.css('height',basePara.window_width);
  for(var bAoff = 0; bAoff < bus_count; bAoff++){
    busCnt_top_para[bAoff] = $($bus_cnt[bAoff]).offset().top;
  }

  // 初期表示セット　メインスライド以外は非表示
  jQuery.each($mCnt,function(){
    $(this).toggleClass('noActive');
  });
  $($mCnt[0]).toggleClass('noActive');

  // windows resize event start
   resizeSec(basePara,baseObj);
   console.log(basePara.window_scroll);

   // gnaviのポジションでclass変化させる
    //nav_pos = pos_para;
    basePara.nav_position = basePara.gnav_offset_top;
    gnavPos(basePara);


  var serviceObj = {
    mainSlide_top_cnt:$('#mainTopCnt'),
    mainSlide_service_cnt:$('#mainService > .sectionIn')
  },
  servicePara = {

  };

  /*
  mainTopCnt = $("#mainTopCnt"),
  winht = $(window).height();
  s = $(this).scrollTop();
  w = 0;
  */

  var flag = 0,
      flag2 = 0;
  //console.log(basePara.top_height,basePara.window_height);

  serviceObj['mainSlide_top_cnt'].on('mousewheel',function(event, flag){
    if ( !$(this).is(':animated') ) {
      $(this).toggleClass('scrolling');
        $('html,body').animate({ scrollTop: + basePara.top_height},{duration:1200, easing:'easeInOutExpo','complete': function(){
          serviceObj['mainSlide_top_cnt'].toggleClass('scrolling');
        }});
      } else {
        if ( $(this).hasClass('scrolling') ) {
          $(this).toggleClass('scrolling');
      };
    };
  });
  serviceObj['mainSlide_service_cnt'].on('mousewheel',function(event, flag2){
    if ( !$(this).is(':animated') ) {
      if ( $(this).hasClass('scrolling') ) {
        $(this).toggleClass('scrolling');
        $('html,body').animate({ scrollTop:0},{duration:1200, easing:'easeInOutExpo' , 'complete': function(){
          serviceObj['mainSlide_service_cnt'].toggleClass('scrolling');
        }});
      }
    };
  });

  /*
  $('#mainTopCnt').bind('mousewheel',function(event, delta) {
    if ( !mainTopCnt.is(":animated") ) {
      if (delta < 0) {
        i = winht;
        w = 1;
        $('html,body').animate({ scrollTop: + i }, 'slow');
        //$("#output").html(i);
      }
      if (w > 0) {
        $('#mainTopCnt').unbind();
      }
    }
  });
*/



/* ------------------------------------------------------------------
serviceに入った時  */
var $sv_cnt = $('#mainService'),
   $serviceCnt = $('.serviceCnt',$sv_cnt),
   cnt_count = $serviceCnt.length,
   duration = 500,
   easing = 'easeInOutCubic',
   left_move = parseInt(basePara.window_width -100),
   $btnToggle = [$('p#btnServiceIn',$sv_cnt),$('p.returnMainSlide',$sv_cnt),$('p#btnService01',$sv_cnt)],
   base_service_pos = $sv_cnt.offset().top,
   $main_service = $('div.sectionIn',$sv_cnt);


// slider btn on click
$btnToggle[0].on('click',function(){
  $($mCnt[0]).css('width','100%');
  basePara.top_height -= 15;
  jQuery.each($btnToggle,function(){$(this).toggleClass('noActive');});
  $main_service.css({'width':basePara.window_width,'height':basePara.top_height});
  $('section,p.btnScroll',$mCnt[0]).not($sv_cnt).hide();
  baseObk['gnav'].toggleClass('fixedService').css({'width':basePara.window_width});
  baseObj['footer'].hide();
  $serviceCnt.show();
  baseObj['footer'].toggleClass('serviceIn');

  var cnt_width = 1600,
      interval = 1000;
      basePara.max_cnt_width = Math.round(cnt_width*3 + interval*3 + basePara.window_width);

  for(var s = 1; s < 4; s++){
    var cnt_position,e;
    e = s - 1;
    cntPos = Math.round(basePara.window_width + (interval*s) + (cnt_width*e) );
    $($serviceCnt[e]).css('left',cnt_position + 'px');
  }
  $page.css({'width':max_cnt_width,'overflow':'visible','paddingTop':basePara.gnav_offset_top});

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
    baseObj['footer'].show();
    $serviceCnt.hide();
    baseObj['footer'].toggleClass('serviceIn');
    $page.css({'width':w_wdh,'paddingTop':0});
    $('html, body').scrollTop(base_service_pos);
  }});
  $main_service.css({'width':w_wdh,'height':top_hgt});
  baseObk['gnav'].toggleClass('fixedService').css({'width':'100%'});
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
  basePara.company_offset_top = $('#mainCompany').offset().top -70;
  $blowBox = $('.blowBox',$mCnt[1]).css('height',basePara.company_offset_top);
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
  $blowBox = $('.blowBox',$mCnt[1]);
  var mCntNum = 1,
      state = 'close',
      scrollSetPara = cmp_offset_para,
      movePara = -basePara.window_width;
  slide_mCnt(mCntNum,state,$btn_return_cmp,scrollSetPara,movePara,$blowBox);
  e.preventDefault();
  });

/* ------------------------------------------------------------------
businessに入った時  */
var $btn_return_bus = $('p.returnMainSlide',$mCnt[2]);
  $('#mainBusiness > p.btnSlide',$mCnt[0]).on('click',function(e){
    // bus_offset_para = $('#mainBusiness').offset().top -70;
    basePara.business_offset_top = $('#mainBusiness').offset().top -70;
    $blowBox = $('.blowBox',$mCnt[2]).css('height',basePara.window_scroll);
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
  $blowBox = $('.blowBox',$mCnt[2]);
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





