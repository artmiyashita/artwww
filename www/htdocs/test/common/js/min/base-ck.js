function resizeSec(e,i){return e.top_height=e.window_height-e.gnav_height,e.service_height=e.window_height-e.footer_height,e.service_wrap_topOffset=e.window_height-e.service_wrap_maxHeight-e.footer_height,i.main_cnt.css("width",e.window_width),i.companySlide.css("left",0),i.mainSlide.css("left",e.window_width),i.businessSlide.css("left",2*e.window_width),i.body.css("width",e.window_width),i.container.css("left",-e.window_width),i.mainSlide_top.css("height",e.top_height),i.business_lead.css("height",e.window_height),e.gnav_offset_top=i.gnav.offset().top,i.mainSlide_service.css("height",e.service_height),i.service_slide.css({width:e.window_width,height:e.service_height}),i.service_slideWrap.css({height:e.service_wrap_maxHeight,paddingTop:e.service_wrap_topOffset}),e}function gnavPos(e){e.window_scroll>=e.nav_position?baseObj.gnav.addClass("fixed"):e.window_scroll<=e.nav_position&&baseObj.gnav.removeClass("fixed")}var $mCnt=[],$blowBox,scrollPara,mSlideOffsetT=[],cursolPos,busCnt_top_para=[],cmp_offset_para,bus_offset_para,baseObj={},busCnt_top,basePara={window_width:$(window).outerWidth(!0),window_height:$(window).outerHeight(!0),gnav_offset_top:"",nav_position:"",window_scroll:"",gnav_height:"",top_height:"",max_cnt_width:"",mainSlide_offset_top:"",cursol_offset_left:"",company_offset_top:"",business_offset_top:""},resizeTimer=!1;$(window).on("resize",function(){resizeTimer!==!1&&clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){return basePara.window_width=$(window).outerWidth(!0),basePara.window_height=$(window).height(),resizeSec(basePara,baseObj),basePara},200)}),$(window).on("scroll",function(){basePara.window_scroll=$(document).scrollTop(),gnavPos(basePara)}),$(function(){function e(e){w.not(".current").animate({opacity:opacity},{duration:P.duration,easing:P.easing})}function i(e,i){$("#serviceCntbox"+e+" div.box").hide(),$("#serviceCntbox"+e).removeClass("current").stop().animate({width:i.width},{duration:g.duration,easing:g.easing,complete:function(){$("#serviceCntbox"+e).stop().animate({top:i.top,left:i.left},{duration:g.duration,easing:g.easing,complete:function(){$("#serviceCntbox"+e+" p.arrow").show()}})}})}function a(e,i){$("#serviceCntbox"+e+" p.arrow").hide(),$("#serviceCntbox"+e).addClass("current").stop().animate({top:i.top,left:i.left},{duration:g.duration,easing:g.easing,complete:function(){$("#serviceCntbox"+e).stop().animate({width:i.width},{duration:g.duration,easing:g.easing,complete:function(){$("#serviceCntbox"+e+" div.box").show()}})}})}function t(e,i,t){$("#"+i+" div.box").hide(),$("#"+i).removeClass("current").stop().animate({width:t.widthBase},{duration:g.duration,easing:g.easing,complete:function(){$("#"+i).stop().animate({top:t.topBase,left:t.leftBase},{duration:g.duration,easing:g.easing,complete:function(){$("#"+i+" p.arrow").show()}})}}),a(e,t)}function s(e){baseObj.mainSlide.toggleClass("noActive"),T.toggleClass("noActive"),$blowBox.show(),$("html,body").scrollTop(basePara.company_offset_top),$("html,body").animate({scrollTop:basePara.company_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.container.stop().animate({left:-basePara.window_width},{duration:1500,easing:"easeOutQuint",complete:function(){baseObj.companySlide.toggleClass("noActive"),$("body,html").animate({scrollTop:e},1e3,"easeOutQuint")}})}})}function n(e,i){baseObj.mainSlide.toggleClass("noActive"),T.toggleClass("noActive"),$blowBox.show(),$("html,body").scrollTop(basePara.company_offset_top),$("html,body").animate({scrollTop:basePara.company_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.container.stop().animate({left:-basePara.window_width},{duration:1500,easing:"easeOutQuint",complete:function(){baseObj.companySlide.toggleClass("noActive"),baseObj.businessSlide.addClass("noActive"),baseObj.privacyCnt.show(),baseObj.privacyCnt.find("section.cntWrap").hide(),$(i).fadeToggle(),$("body,html").animate({scrollTop:e},1e3,"easeOutQuint")}})}})}function o(e){baseObj.mainSlide.toggleClass("noActive"),Q.toggleClass("noActive"),$blowBox.show(),$("html,body").scrollTop(basePara.business_offset_top),$("html,body").animate({scrollTop:basePara.business_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.container.stop().animate({left:-basePara.window_width},{duration:1500,easing:"easeOutQuint",complete:function(){baseObj.businessSlide.addClass("noActive"),$("body,html").animate({scrollTop:e},1e3,"easeOutQuint")}})}})}function r(e,i){baseObj.mainSlide.toggleClass("noActive"),Q.toggleClass("noActive"),$blowBox.show(),$("html,body").scrollTop(basePara.business_offset_top),$("html,body").animate({scrollTop:basePara.business_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.container.stop().animate({left:-basePara.window_width},{duration:1500,easing:"easeOutQuint",complete:function(){baseObj.businessSlide.addClass("noActive"),baseObj.privacyCnt.show(),baseObj.privacyCnt.find("section.cntWrap").hide(),$(i).fadeToggle(),$("body,html").animate({scrollTop:e},1e3,"easeOutQuint")}})}})}function l(e,i){"inside"===e?B.cursol.stop().animate({left:W[i]+"px",opacity:1},B.duration,B.easing):4===i?B.cursol.stop().animate({left:B.overCursol+"px",opacity:0},B.duration,B.easing):5===i&&B.cursol.stop().animate({left:B.underCursol+"px",opacity:0},B.duration,B.easing)}$mCnt=$(".mCnt");var c={body:$("body"),main_cnt:$(".mCnt"),page:$("#page"),container:$("#container"),gnav:$("#navigation"),footer:$("footer"),mainSlide:$("#mainSlide"),mainSlide_top:$("#mainTopCnt > .sectionIn"),privacyCnt:$("#privacyWrap"),companySlide:$("#companyCnt"),mainSlide_comapny:$("#mainCompany"),businessSlide:$("#businessCnt"),mainSlide_business:$("#mainBusiness"),business_lead:$("#businessCnt > .lead"),mainSlide_service:$("#mainService"),service_slide:$("#mainService .slide"),service_slideWrap:$("#mainService .wrapper")};$.extend(!0,baseObj,c);var d={gnav_height:baseObj.gnav.height(),footer_height:baseObj.footer.height(),window_width:$(window).outerWidth(!0),window_height:$(window).height(),service_wrap_maxHeight:520};$.extend(!0,basePara,d);var b=$(".lead",baseObj.businessSlide),p=$(".busCnt",baseObj.businessSlide),u=p.length;b.css("height",basePara.window_height);for(var f=0;u>f;f++)busCnt_top_para[f]=$(p[f]).offset().top;busCnt={para00:busCnt_top_para[0],para01:busCnt_top_para[1],para02:busCnt_top_para[2],para03:busCnt_top_para[3],para04:busCnt_top_para[4],para05:busCnt_top_para[5]},$.extend(basePara,busCnt),baseObj.main_cnt.toggleClass("noActive").first().toggleClass("noActive"),resizeSec(basePara,baseObj),basePara.nav_position=basePara.gnav_offset_top,gnavPos(basePara),$btn_service=$("#mainTopCnt p.btnScroll a"),$btn_service.on("click",function(e){$("html,body").stop().animate({scrollTop:basePara.top_height},{duration:600,easing:"easeOutQuint"}),e.preventDefault()});var m=$(".slide",baseObj.mainSlide_service),h=m.length,_={btn:$("li",baseObj.mainSlide_service),btnNavi:$("ul.slideNav li.btn")},g={slide_max:m.length,currentNum:0,nextNum:0,duration:1200,easing:"easeInOutExpo"};_.btnNavi.on("click",function(){$("html,body").stop().animate({scrollTop:basePara.top_height},{duration:600,easing:"easeOutQuint"})});var v=$("div.box",baseObj.mainSlide_service),w=$("div.cntBox",baseObj.mainSlide_service),O=$("div.current",baseObj.mainSlide_service),C=$("#mainService p.handle");v.hide(),g.box_length=v.length;var S=[],y=[],j=1,x,P={};jQuery.each(w,function(){S[j]=$(this).css("top"),y[j]=$(this).css("left"),j++}),w.on("click",function(){var e=$(this).find("p.handle").attr("id"),s=e.slice(-2),n=s-0,o,r;if($(this).hasClass("open")){$(this).removeClass("open");var l={top:S[n],left:y[n],width:"165px"};$.extend(!0,P,l),i(s,P)}else if(w.hasClass("open")){w.removeClass("open"),$(this).addClass("open"),x=$("div.current",baseObj.mainSlide_service).attr("id"),o=x.slice(-2)-0;var l={topBase:S[o],leftBase:y[o],widthBase:"165px",top:"-100px",left:0,width:"100%"};$.extend(!0,P,l),t(s,x,P)}else{$(this).addClass("open");var l={top:"-100px",left:0,width:"100%"};$.extend(!0,P,l),a(s,P)}});var T=$("#companyCnt p.returnMainSlide");basePara.company_offset_top=$("#mainCompany").offset().top-70,$("#mainCompany > p.btnSlide",baseObj.mainSlide).on("click",function(e){$blowBox=$(".blowBox",baseObj.companySlide).css("height",basePara.company_offset_top),$("html,body").animate({scrollTop:basePara.company_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.companySlide.removeClass("noActive"),baseObj.container.stop().animate({left:0},{duration:1500,easing:"easeOutQuint",complete:function(){T.toggleClass("noActive"),$blowBox.hide(),$("html,body").scrollTop(0),baseObj.mainSlide.toggleClass("noActive"),google.maps.event.trigger(map01,"resize"),map.setCenter(mapOptions01.center),google.maps.event.trigger(map02,"resize"),map.setCenter(mapOptions02.center),google.maps.event.trigger(map03,"resize"),map.setCenter(mapOptions03.center)}})}}),e.preventDefault()}),T.on("click",function(e){s(),e.preventDefault()});var Q=$("#businessCnt p.returnMainSlide");basePara.business_offset_top=$("#mainBusiness").offset().top-70,$("#mainBusiness > p.btnSlide",baseObj.mainSlide).on("click",function(e){$blowBox=$(".blowBox",baseObj.businessSlide).css("height",basePara.business_offset_top),$("html,body").animate({scrollTop:basePara.business_offset_top},{duration:0,easing:"easeOutQuint",complete:function(){baseObj.businessSlide.removeClass("noActive"),baseObj.container.stop().animate({left:2*-basePara.window_width},{duration:1500,easing:"easeOutQuint",complete:function(){Q.toggleClass("noActive"),$blowBox.hide(),$("html,body").scrollTop(0),baseObj.mainSlide.toggleClass("noActive")}})}}),e.preventDefault()}),Q.on("click",function(e){o(),e.preventDefault()});var B={cursol:$("span.cursol"),duration:1500,easing:"easeOutQuint",underCursol:-145,overCursol:960,min_scroll:basePara.top_height/2,para:100};B.cursol.css({left:B.underCursol,opacity:0});var A=$(".mSlideCnt");count=A.length;for(var k=0;count>k;k++)mSlideOffsetT[k]=Math.round($(A[k]).offset().top+100);var z={service_pos:$("#mainService").offset().top,company_pos:$("#mainCompany").offset().top-70,business_pos:$("#mainBusiness").offset().top-70,works_pos:$("#mainWorks").offset().top-70};baseObj.gnav.find("a[href^=#]").on("click",function(){var e=400,i=$(this).attr("href"),a=$("#"===i||""===i?"html":i),t;switch(i){case"#top":t=0;break;case"#mainService":t=z.service_pos;break;case"#mainCompany":t=z.company_pos;break;case"#mainBusiness":t=z.business_pos;break;case"#mainWorks":t=z.works_pos}return baseObj.companySlide.is(":visible")?s(t):baseObj.businessSlide.is(":visible")?o(t):baseObj.privacyCnt.is(":visible")?(baseObj.privacyCnt.slideToggle(),$("body,html").animate({scrollTop:t},1e3,"easeOutQuint")):$("body,html").animate({scrollTop:t},1e3,"easeOutQuint"),!1});var W=[],N,D,H,I;N=$("li",baseObj.gnav),D=N.length;for(var M=$("h1").offset().left,q=0;D>q;q++)W[q]=Math.round($(N[q]).offset().left)-M;$(window).on("scroll",function(){baseObj.mainSlide.is(":visible")?basePara.window_scroll>=B.min_scroll&&basePara.window_scroll<=mSlideOffsetT[1]?(H="inside",I=0,l(H,I)):basePara.window_scroll>=mSlideOffsetT[1]+B.para&&basePara.window_scroll<=mSlideOffsetT[2]?(H="inside",I=1,l(H,I)):basePara.window_scroll>=mSlideOffsetT[1]+B.para&&basePara.window_scroll<=mSlideOffsetT[3]?(H="inside",I=2,l(H,I)):basePara.window_scroll>=mSlideOffsetT[2]+B.para&&basePara.window_scroll<=mSlideOffsetT[4]?(H="inside",I=3,l(H,I)):basePara.window_scroll>=mSlideOffsetT[3]+B.para&&basePara.window_scroll<=mSlideOffsetT[5]?(H="outside",I=4,l(H,I)):basePara.window_scroll<B.min_scroll&&(H="outside",I=5,l(H,I)):baseObj.companySlide.is(":visible")?(H="inside",I=1,l(H,I)):baseObj.businessSlide.is(":visible")&&(H="inside",I=2,l(H,I))});var E=$("#mainContact").offset().top+525+40+70;return $("#subNavi").find("a[href^=#]").on("click",function(){position=E;var e=$(this).attr("href");baseObj.companySlide.is(":visible")?n(position,e):baseObj.businessSlide.is(":visible")?r(position,e):(baseObj.businessSlide.addClass("noActive"),baseObj.privacyCnt.show(),baseObj.privacyCnt.find("section.cntWrap").hide(),$(e).fadeToggle(),$("body,html").animate({scrollTop:position},1e3,"easeOutQuint"))}),basePara}),$(function(){$(".bxslider").bxSlider({infiniteLoop:!1,hideControlOnEnd:!0,pager:!1,nextSelector:".btnNext",prevSelector:".btnPrev",nextText:'<img src="./img/btn_service_next.png" alt="">',prevText:'<img src="./img/btn_service_prev.png" alt="">'})}),$(function(){for(var e=$("img"),i=0;i<e.size();i++)e.eq(i).attr("src").match("_off.")&&$("img").eq(i).hover(function(){$(this).attr("src",$(this).attr("src").replace("_off.","_on."))},function(){$(this).attr("src",$(this).attr("src").replace("_on.","_off."))});$("a.modal").fancybox({titleFormat:function(e){return e.replace(/\n/g,"<br />")},padding:20,speedIn:1500,easingIn:"easeOutQuint",overlayColor:"#fff",overlayOpacity:"0.75",centerOnScroll:!0,titlePosition:"inside",cyclic:!0})});