/* ------------------------------------------------------------------
 serviceに入った時  */
$(function(){
console.log($page);
 var $cnt = $('#mainService'),
     $serviceCnt = $('.serviceCnt',$cnt),
     cnt_count = $serviceCnt.length;


  var duration = 500,
        easing = 'easeInOutCubic',
        left_move = parseInt(w_wdh -100);
    //$cnt.stop().animate({'left':-left_move},duration,easing);




 // slider btn on click
 $('p.btnSlide',$cnt).on('click',function(){
    console.log('serviceに入りました');
    top_hgt -= 15;
    $('div.sectionIn',$cnt).css({'width':w_wdh,'height':top_hgt});
    $('section,p.btnScroll',$mCnt[0]).not($cnt).hide();
    $gnav.toggleClass('fixedService').css({'width':w_wdh});
    $('footer',$page).hide();
    $serviceCnt.show();
    $('footer').css('marginTop',0);

    var cnt_wth = 1600,
        interval = 1000,
        max_cnt_wdh = Math.round(cnt_wth*3 + interval*3 + w_wdh);

    for(var s = 1; s < 4; s++){
      var cntPos,e;
      e = s - 1;
      cntPos = Math.round(w_wdh + (interval*s) + (cnt_wth*e) )
      $($serviceCnt[e]).css('left',cntPos + 'px');
    }
    $page.css({'width':max_cnt_wdh,'overflow':'auto','paddingTop':gnav_hgt});

    // テキスト部分
    var $txt_box = $('div.box',$serviceCnt),
        box_count = $txt_box.length,
        interval = 500,
        d = 0;
    // for(var x = 0; x < box_count; x++){}
    //setInterval(function(){ box_anime(); },100);

    function box_anime(){
      d++;
      console.log(d+'回目のアニメーション')
        $($txt_box[d]).stop().animate({'height':'toggle'},duration,easing);
    };
    // setInterval(box_anime(),10000);

    /* postion set */
    /*
    var cnt_count = $serviceCnt.length;
    for(var v=0;v<cnt_count;v++){
      var base_para,pos,
          end_wdh = parseInt($($serviceCnt[2]).css('width'));
      if(v===0) {
        base_para = 0;
      } else {
        base_para = parseInt($($serviceCnt[v]).css('left'));
      }
      pos = parseInt(w_wdh + base_para);
      $($serviceCnt[v]).css('left',pos);
      max_cnt_wdh += $($serviceCnt[v]).width();
      if(v===2){
        max_cnt_wdh += end_wdh;
      }
    }
    */

        //setInterval(box_anime,interval);

    var speed = 10;
    //マウスホイールで横移動
    $cnt.on('mousewheel',function(event, mov) {
    //ie firefox
    $('html').scrollLeft($('html').scrollLeft() - mov * speed);
    $('body').scrollLeft($('body').scrollLeft() - mov * speed);
    return false;
    });
  }); // end click in service cnt
});
