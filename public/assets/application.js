// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function(e){e(function(){function o(){var e,r=t.scrollTop();r>=i&&!s?(s=1,n.addClass("subnav-fixed")):r<=i&&s&&(s=0,n.removeClass("subnav-fixed"))}var t=e(window),n=e(".subnav"),r=e(".navbar").first().height(),i=e(".subnav").length&&e(".subnav").offset().top-r,s=0;o(),t.on("scroll",o)})}(window.jQuery);