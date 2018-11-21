goog.provide('io.trailmarker.foss4g_oceania_2018.script');
goog.require('cljs.core');
goog.require('io.trailmarker.foss4g_oceania_2018.geojson_spec');
goog.require('io.trailmarker.foss4g_oceania_2018.geojson_spec_test');
goog.require('io.trailmarker.foss4g_oceania_2018.slideshow_map');
goog.require('oops.core');
io.trailmarker.foss4g_oceania_2018.script.create_maps = (function io$trailmarker$foss4g_oceania_2018$script$create_maps(){
return io.trailmarker.foss4g_oceania_2018.slideshow_map.create_maps($(".slideshow-map"));
});
io.trailmarker.foss4g_oceania_2018.script.strangeloveize = (function io$trailmarker$foss4g_oceania_2018$script$strangeloveize(){
return null;
});
io.trailmarker.foss4g_oceania_2018.script.setup_show = (function io$trailmarker$foss4g_oceania_2018$script$setup_show(){
Reveal.initialize(({"center": false, "width": "100%", "height": "100%", "margin": (0)}));

Reveal.addEventListener("map-slide",io.trailmarker.foss4g_oceania_2018.script.create_maps);

return Reveal.addEventListener("title-slide",io.trailmarker.foss4g_oceania_2018.script.strangeloveize);
});
io.trailmarker.foss4g_oceania_2018.script.setup_show();

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.script.js.map
