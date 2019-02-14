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
  cursolPos;                 // cursolのオフセット値を取得


/* ------------------------------------------------------------------
resizeイベントと初期CSS数値設定  */
function resizeSec(w_hgt,w_wdh,$gnav) {

  gnav_hgt = $gnav.height();
  top_hgt = w_hgt - gnav_hgt;
  console.log(w_hgt,gnav_hgt,top_hgt)

  // console.log(top_hgt);

  var $main_service = $('#mainService .sectionIn'),
      $main_top = $('#mainTopCnt > .sectionIn'),
      $business_lead = $('#businessCnt > .lead');

  //console.log(w_hgt);
  $($mCnt).css('width', w_wdh);
  $($mCnt[1]).css('left',-w_wdh);
  $($mCnt[2]).css('left',w_wdh);
  $page.css('width',w_wdh);

  $main_service.css('height',w_hgt);
  $main_top.css('height',top_hgt);
  var i=$main_top.css('height');
  // console.log(i);
  $business_lead.css('height',w_hgt);
  pos_para = $gnav.offset().top;
  //console.log(pos_para);
  return w_wdh,pos_para,top_hgt;
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
  // $('#intervalValue').val(scrollPara);
});



// start set
$(function(){
  //$mCnt = $('.mCnt');
  w_wdh = $(window).outerWidth(true)-15,
  w_hgt = $(window).outerHeight(true),
  $mCnt = ['#mainSlide','#companyCnt','#businessCnt'];
  $($mCnt[0]).show();

  //console.log(w_hgt);

  $page = $('#page');
  $gnav = $('#navigation');
  //$('#mainTopCnt div.fukidashi').hide().delay(500).fadeIn(4000);
  //$('p.iconScroll').hide().delay(1800).fadeIn(2000);
  //$('.navIn').hide().delay(2500).fadeIn(1500);

  // windows resize event start
   resizeSec(w_hgt, w_wdh,$gnav);

   // gnaviのポジションでclass変化させる
    nav_pos = pos_para;
    scrollPara = $(document).scrollTop();
    gnav_pos(nav_pos,scrollPara);


  /* ------------------------------------------------------------------
  companyに入った時  */
  $('#mainCompany > p.btnSlide',$mCnt[0]).on('click',function(e){
    var duration=2000,
        easing='easeInOutCubic';
    $($mCnt[1]).show().css('opacity',0).stop().animate({'left':0},duration,easing);
    $($mCnt[0]).stop().animate({'left':w_wdh},{'duration':duration,'easing':easing,'complete':function(){
      $($mCnt[1]).css('top',0).animate({'opacity':1},duration*4,easing);
      $($mCnt[0]).hide();
      $('html, body').animate({scrollTop:0},{'duration':duration});
      }
    });
    e.preventDefault();
  });

    /* ------------------------------------------------------------------
  businessに入った時  */
  $('#mainBusiness > p.btnSlide',$mCnt[0]).on('click',function(e){
    var duration=2000,
        easing='easeInOutCubic';
    $($mCnt[2]).show().css('opacity',0).stop().animate({'left':0},duration,easing);
    $($mCnt[0]).stop().animate({'left':-w_wdh},{'duration':duration,'easing':easing,'complete':function(){
      $($mCnt[2]).css('top',0).animate({'opacity':1},duration*4,easing);
      $($mCnt[0]).hide();
      $('html, body').animate({scrollTop:0},{'duration':duration});
      }
    });
    e.preventDefault();
  });
  return nav_pos,$page,$gnav;
});


// navigation cursol
$(function(){
  var cursol = $('span.cursol'),
      duration=1500,
      easing='easeOutQuint',
      underCursol=-180,
      overCursol=960,
      min_scroll=top_hgt/2,
      para=160;
  cursol.css({'left':underCursol+'px',opacity:0});


  // 各コンテンツのoffset取得
  var $cnt_top=[];
  $cnt_top=$('.cntTop',$mCnt[0]);
  count=$cnt_top.length;
  for(var i=0;i<count;i++){
    mSlideOffsetT[i] =Math.round($($cnt_top[i]).offset().top);
  }
  //console.log(count,$cnt_top,mSlideOffsetT);

  // ナビゲーションのoffset取得
  var nav_left_set=[],
      $nav_left_cnt,
      count_nav;

  $nav_left_cnt=$('li',$($gnav));
  count_nav=$nav_left_cnt.length;
  var base=$('h1').offset().left;
  for(var i=0;i<count_nav;i++){
    nav_left_set[i] =Math.round($($nav_left_cnt[i]).offset().left)-base;
  }
  //console.log(nav_left_set,$nav_left_cnt);

  $(window).on('scroll',function() {
    if(scrollPara >= min_scroll && scrollPara <= mSlideOffsetT[0]){
      cursol.stop().animate({left:nav_left_set[0]+'px','opacity':1},duration,easing);
      // cursolPos=nav_left_set[0];
      // opacity=1;
      naviCursol(cursolPos,opacity);
    } else if(scrollPara >= (mSlideOffsetT[0]+para) && scrollPara <= mSlideOffsetT[1]) {
      // cursolPos=nav_left_set[1];
      // opacity=1;
      // naviCursol(cursolPos,opacity);
      cursol.stop().animate({left:nav_left_set[1]+'px','opacity':1},duration,easing);
    } else if(scrollPara >= (mSlideOffsetT[1]+para)  && scrollPara <= mSlideOffsetT[2]) {
      // cursolPos=nav_left_set[2];
      // opacity=1;
      // naviCursol(cursolPos,opacity);
      cursol.stop().animate({left:nav_left_set[2]+'px','opacity':1},duration,easing);
    } else if(scrollPara >= (mSlideOffsetT[2]+para)  && scrollPara <= mSlideOffsetT[3]) {
      // cursolPos=overCursol;
      // opacity=0;
      // naviCursol(cursolPos,opacity);
      cursol.stop().animate({left:overCursol+'px','opacity':0},duration,easing);
    } else if (scrollPara < min_scroll){
      // cursolPos=underCursol;
      // opacity=0;
      // naviCursol(cursolPos,opacity);
      cursol.stop().animate({left:underCursol+'px','opacity':0},duration,easing);
    }
  });
});