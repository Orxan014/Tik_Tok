window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/quanticalabs.com\/wp_themes\/carservice\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.0.4"}};
			!function(a,b,c){function d(a,b){
                var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),
                l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();
                l.clearRect(0,0,k.width,k.height),
                l.fillText(c.apply(this,b),0,0);
                var e=k.toDataURL();
                return d===e}
                function e(a){var b;if(!l||!l.fillText)
                    return!1;switch(l.textBaseline="top",
                    l.font="600 32px Arial",a){
                        case"flag":
                        return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],
                            [55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}
                            return!1
                        }
                        function f(a){
                            var c=b.createElement("script");
                            c.src=a,c.defer=c.type="text/javascript",
                            b.getElementsByTagName("head")[0].appendChild(c)
                        }
                        var g,h,i,j,k=b.createElement("canvas"),
                        l=k.getContext&&k.getContext("2d");
                        for(j=Array("flag","emoji"),
                        c.supports={everything:!0,everythingExceptFlag:!0
                        },
                        i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),
                        c.supports.everything=c.supports.everything&&c.supports[j[i]],
                        "flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);
                        c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},
                        c.supports.everything||(h=function(){c.readyCallback()},
                        b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),
                        a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),
                        b.attachEvent("onreadystatechange",function(){
                            "complete"===b.readyState&&c.readyCallback()})),
                            g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),
                            f(g.wpemoji)))}(window,document,window._wpemojiSettings);

var wc_add_to_cart_params = {"ajax_url":"\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp_themes\/carservice\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"http:\/\/quanticalabs.com\/wp_themes\/carservice\/cart\/","is_cart":"","cart_redirect_after_add":"no"};

function setREVStartSize(e){									
    try{ e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
        if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})					
    }catch(d){console.log("Failure at Presize of Slider:"+d)}						
};

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }
if (setREVStartSize!==undefined) setREVStartSize(
    {c: '#rev_slider_1_1', gridwidth: [1170], gridheight: [600], sliderLayout: 'auto'});

    var revapi1,
	tpj;	
(function() {			
	if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();	
	function onLoad() {				
		if (tpj===undefined) { tpj = jQuery; if("on" == "on") tpj.noConflict();}
	if(tpj("#rev_slider_1_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1_1");
	}else{
		revapi1 = tpj("#rev_slider_1_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//quanticalabs.com/wp_themes/carservice/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:10000,
			navigation: {
				keyboardNavigation:"on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"on",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"hephaistos",
					enable:true,
					hide_onmobile:true,
					hide_under:479,
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:479,
					style:"persephone",
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:20,
					space:10,
					tmp:''
				}
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:1170,
			gridheight:600,
			lazyType:"none",
			shadow:0,
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"on",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:true,
			}
		});
	};
	
 }; 
}()); 



var htmlDivCss = unescape(".hephaistos.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%7D%0A.hephaistos.tparrows%3Ahover%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A.hephaistos.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A18px%3B%0A%09color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hephaistos.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82c%22%3B%0A%20%20%20%20margin-left%3A-2px%3B%0A%20%20%0A%7D%0A.hephaistos.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82d%22%3B%0A%20%20%20%20margin-right%3A-2px%3B%0A%7D%0A%0A%0A.persephone%20.tp-bullet%20%7B%0A%09width%3A12px%3B%0A%09height%3A12px%3B%0A%09position%3Aabsolute%3B%0A%09background%3Argba%28170%2C%20170%2C%20170%2C%201%29%3B%0A%09border%3A1px%20solid%20rgba%28229%2C%20229%2C%20229%2C%201%29%3B%09%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A.persephone%20.tp-bullet%3Ahover%2C%0A.persephone%20.tp-bullet.selected%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if(htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else{
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}

var c = document.body.className;
		c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
        document.body.className = c;

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
        jQuery(sliderID).show().html(errorMessage);
}var woocommerce_params = {"ajax_url":"\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp_themes\/carservice\/?wc-ajax=%%endpoint%%"};

var woocommerce_params = {"ajax_url":"\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp_themes\/carservice\/?wc-ajax=%%endpoint%%"};
var wc_cart_fragments_params = {"ajax_url":"\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp_themes\/carservice\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_b13eaaf224d1bdc8467e429cfc9830ee","fragment_name":"wc_fragments_b13eaaf224d1bdc8467e429cfc9830ee"};
var wc_cart_fragments_params = {"ajax_url":"\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wp_themes\/carservice\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_b13eaaf224d1bdc8467e429cfc9830ee","fragment_name":"wc_fragments_b13eaaf224d1bdc8467e429cfc9830ee"};
jQuery(document).ready(function(jQuery){jQuery.datepicker.setDefaults({"closeText":"Close","currentText":"Today","monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Previous","dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"dateFormat":"MM d, yy","firstDay":1,"isRTL":false});});
var config = [];
config = {"ajaxurl":"http:\/\/quanticalabs.com\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","themename":"carservice","home_url":"http:\/\/quanticalabs.com\/wp_themes\/carservice","is_rtl":0};;
var cost_calculator_config = [];
cost_calculator_config = {"ajaxurl":"http:\/\/quanticalabs.com\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","is_rtl":0};;
// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides (n) {
//     showSlides(slideIndex += n)
// }

// function currentSlide(n) {
//     var i;
//     var slides = document.getElementsByClassName("var cost_calculator_config = [];
cost_calculator_config = {"ajaxurl":"http:\/\/quanticalabs.com\/wp_themes\/carservice\/wp-admin\/admin-ajax.php","is_rtl":0};;
//     var dots = document.getElementsByClassName("dot")

//     if (n > slides.length) {
//         slideIndex = 1
//     }

//     if (n < 1) {
//         slideIndex = slides.length
//     }

//     for (i=0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
    
//     for (i=0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active","");
//     }

//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += "active";
// }


$(window).load(function() {
	$('.flexslider').flexslider({
	  animation: "slide",
	  animationLoop: false,
	  itemWidth: 210,
	  itemMargin: 5
	});
  });



  jQuery(document).ready(function ($) {
	var options = {
		$AutoPlay: 1,                                      
		$AutoPlaySteps: 1,                                  
		$Idle: 4000,                                        
		$PauseOnHover: 1,                                   

		$ArrowKeyNavigation: 1,   			                
		$SlideEasing: $Jease$.$OutQuint,                   
		$SlideDuration: 1200,                               
		$MinDragOffsetToSlide: 40,                           
		//$SlideWidth: 600,                                  
		//$SlideHeight: 300,                                
		$SlideSpacing: 0, 					                
		$UISearchMode: 1,                                   
		$PlayOrientation: 1,                                 
		$DragOrientation: 1,                                

		$ArrowNavigatorOptions: {                           
			$Class: $JssorArrowNavigator$,                  
			$ChanceToShow: 2,                           
			$Steps: 1                                       
		},

		$BulletNavigatorOptions: {                          
			$Class: $JssorBulletNavigator$,                 
			$ChanceToShow: 2,                               
			$Steps: 1,                                      
			$SpacingX: 12,                                 
			$Orientation: 1                                 
		}
	};

	var jssor_slider1 = new $JssorSlider$("slider1_container", options);

	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizing
	function ScaleSlider() {
		var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
		if (parentWidth) {
			jssor_slider1.$ScaleWidth(parentWidth - 30);
		}
		else
			window.setTimeout(ScaleSlider, 30);
	}
	ScaleSlider();

	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	//responsive code end
});