/* ------------------------------------------------------------------
global 関数 */
var w_wdh = $(window).outerWidth(true),
  w_hgt = $(window).outerHeight(true),
  $page,$mCnt,$gnav,
  nav_pos,
  pos_para,
  scrollPara,
  gnav_hgt,
  top_hgt,
  max_cnt_wdh;

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
  console.log(i)
  $business_lead.css('height',w_hgt);
  pos_para = $gnav.offset().top;
  console.log(pos_para);
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



/* ------------------------------------------------------------------
 serviceに入った時  */
$(function(){
 var $cnt = $('#mainService'),
     $serviceCnt = $('.serviceCnt',$cnt);

 // slider btn on click
 $('p.btnSlide',$cnt).on('click',function(){
    $page.css({width:'auto',overflow:'auto'});
    $('section,p.btnScroll',$mCnt[0]).not($cnt).hide();
    $('footer',$page).hide();
    top_hgt -= 15;
    $('div.sectionIn',$cnt).css({width:'100%',height:top_hgt});
    $serviceCnt.show();
    $('footer').css('marginTop',0);

    max_cnt_wdh=0;

    /* postion set */
    var cnt_count = $serviceCnt.length;
    for(var i=0;i<cnt_count;i++){
      var base_para,pos,
          end_wdh = parseInt($($serviceCnt[2]).css('width'));
      if(i===0) {
        base_para = 0;
      } else {
        base_para = parseInt($($serviceCnt[i]).css('left'));
      }
      pos = parseInt(w_wdh + base_para);
      $($serviceCnt[i]).css('left',pos);
      max_cnt_wdh += $($serviceCnt[i]).width();
      if(i===2){
        max_cnt_wdh += end_wdh;
      }
    }
    $page.css({width:max_cnt_wdh,overflow:'auto'});
    var duration = 2000,
        easing = 'easeInOutCubic',
        left_move = parseInt(w_wdh -100);
    $cnt.stop().animate({'left':-left_move},duration,easing);

    var $txt_box = $('div.box',$serviceCnt),
        box_count = $txt_box.length,
        interval = 1000,
        count = 0;

        function box_anime(){
          for(var n=0;n<box_count;n++){
            $($txt_box[count]).stop().animate({'height':'toggle'},duration,easing);
            count++;
            // console.log(count);
          }
        }
        //setInterval(box_anime,interval);

    var speed = 50;
    //マウスホイールで横移動
    $cnt.on('mousewheel',function(event, mov) {
    //ie firefox
    $('html').scrollLeft($('html').scrollLeft() - mov * speed);
    $('body').scrollLeft($('body').scrollLeft() - mov * speed);
    return false;
    });
  }); // end click in service cnt
});



// start set
$(function(){
  //$mCnt = $('.mCnt');
  w_wdh = $(window).outerWidth(true)-15,
  w_hgt = $(window).outerHeight(true),
  $mCnt = ['#mainSlide','#companyCnt','#businessCnt'];
  $($mCnt[0]).show();

  console.log(w_hgt);

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