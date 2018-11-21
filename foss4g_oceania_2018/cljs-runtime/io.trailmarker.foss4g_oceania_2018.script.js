goog.provide('io.trailmarker.foss4g_oceania_2018.script');
goog.require('cljs.core');
goog.require('io.trailmarker.foss4g_oceania_2018.geojson_spec');
goog.require('io.trailmarker.foss4g_oceania_2018.geojson_spec_test');
goog.require('io.trailmarker.foss4g_oceania_2018.slideshow_map');
goog.require('oops.core');
io.trailmarker.foss4g_oceania_2018.script.warn_on_narrow_screen = (function io$trailmarker$foss4g_oceania_2018$script$warn_on_narrow_screen(){
var width = (function (){var target_obj_13121 = $(window);
var _STAR_runtime_state_STAR__orig_val__13125 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__13126 = oops.state.prepare_state(target_obj_13121,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__13126;

try{var call_info_13123 = [target_obj_13121,(function (){var next_obj_13124 = ((oops.core.validate_object_access_dynamically(target_obj_13121,(0),"width",true,true,false))?(target_obj_13121["width"]):null);
return next_obj_13124;
})()];
var fn_13122 = (call_info_13123[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_13122,oops.state.get_last_access_modifier())){
if((!((fn_13122 == null)))){
return fn_13122.call((call_info_13123[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__13125;
}})();
if((width < (1000))){
var target_obj_13127_13145 = $(".width-warning");
var _STAR_runtime_state_STAR__orig_val__13131_13146 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__13132_13147 = oops.state.prepare_state(target_obj_13127_13145,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__13132_13147;

try{var call_info_13129_13148 = [target_obj_13127_13145,(function (){var next_obj_13130 = ((oops.core.validate_object_access_dynamically(target_obj_13127_13145,(0),"removeClass",true,true,false))?(target_obj_13127_13145["removeClass"]):null);
return next_obj_13130;
})()];
var fn_13128_13149 = (call_info_13129_13148[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_13128_13149,oops.state.get_last_access_modifier())){
if((!((fn_13128_13149 == null)))){
fn_13128_13149.call((call_info_13129_13148[(0)]),"hidden");
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__13131_13146;
}
return console.log("Showed width warning");
} else {
if((width >= (1000))){
var target_obj_13133_13150 = $(".width-warning");
var _STAR_runtime_state_STAR__orig_val__13137_13151 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__13138_13152 = oops.state.prepare_state(target_obj_13133_13150,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__13138_13152;

try{var call_info_13135_13153 = [target_obj_13133_13150,(function (){var next_obj_13136 = ((oops.core.validate_object_access_dynamically(target_obj_13133_13150,(0),"addClass",true,true,false))?(target_obj_13133_13150["addClass"]):null);
return next_obj_13136;
})()];
var fn_13134_13154 = (call_info_13135_13153[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_13134_13154,oops.state.get_last_access_modifier())){
if((!((fn_13134_13154 == null)))){
fn_13134_13154.call((call_info_13135_13153[(0)]),"hidden");
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__13137_13151;
}
return console.log("Hid width warning");
} else {
return null;
}
}
});
io.trailmarker.foss4g_oceania_2018.script.create_maps = (function io$trailmarker$foss4g_oceania_2018$script$create_maps(){
return io.trailmarker.foss4g_oceania_2018.slideshow_map.create_maps($(".slideshow-map"));
});
io.trailmarker.foss4g_oceania_2018.script.strangeloveize = (function io$trailmarker$foss4g_oceania_2018$script$strangeloveize(){
return null;
});
io.trailmarker.foss4g_oceania_2018.script.setup_show = (function io$trailmarker$foss4g_oceania_2018$script$setup_show(){
Reveal.initialize(({"center": false, "width": "100%", "height": "100%", "margin": (0)}));

Reveal.addEventListener("map-slide",io.trailmarker.foss4g_oceania_2018.script.create_maps);

Reveal.addEventListener("title-slide",io.trailmarker.foss4g_oceania_2018.script.strangeloveize);

var target_obj_13139 = $(window);
var _STAR_runtime_state_STAR__orig_val__13143 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__13144 = oops.state.prepare_state(target_obj_13139,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__13144;

try{var call_info_13141 = [target_obj_13139,(function (){var next_obj_13142 = ((oops.core.validate_object_access_dynamically(target_obj_13139,(0),"on",true,true,false))?(target_obj_13139["on"]):null);
return next_obj_13142;
})()];
var fn_13140 = (call_info_13141[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_13140,oops.state.get_last_access_modifier())){
if((!((fn_13140 == null)))){
return fn_13140.call((call_info_13141[(0)]),"resize",io.trailmarker.foss4g_oceania_2018.script.warn_on_narrow_screen);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__13143;
}});
io.trailmarker.foss4g_oceania_2018.script.setup_show();

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.script.js.map
