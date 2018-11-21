goog.provide('io.trailmarker.foss4g_oceania_2018.slideshow_map');
goog.require('cljs.core');
var module$node_modules$leaflet$dist$leaflet=shadow.js.require("module$node_modules$leaflet$dist$leaflet", {});
goog.require('oops.core');
io.trailmarker.foss4g_oceania_2018.slideshow_map.create_maps = (function io$trailmarker$foss4g_oceania_2018$slideshow_map$create_maps(map_sel){
var containers = (io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.cljs$core$IFn$_invoke$arity$1 ? io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.cljs$core$IFn$_invoke$arity$1(map_sel) : io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.call(null,map_sel));
var osm_url = "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
var target_obj_16859 = containers;
var _STAR_runtime_state_STAR__orig_val__16863 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16864 = oops.state.prepare_state(target_obj_16859,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16864;

try{var call_info_16861 = [target_obj_16859,(function (){var next_obj_16862 = ((oops.core.validate_object_access_dynamically(target_obj_16859,(0),"each",true,true,false))?(target_obj_16859["each"]):null);
return next_obj_16862;
})()];
var fn_16860 = (call_info_16861[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16860,oops.state.get_last_access_modifier())){
if((!((fn_16860 == null)))){
return fn_16860.call((call_info_16861[(0)]),(function (_,container){
var target_obj_16883 = (function (){var target_obj_16887 = (new module$node_modules$leaflet$dist$leaflet.Map(container,({"zoomControl": false, "attributionControl": false})));
var _STAR_runtime_state_STAR__orig_val__16891 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16892 = oops.state.prepare_state(target_obj_16887,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16892;

try{var call_info_16889 = [target_obj_16887,(function (){var next_obj_16890 = ((oops.core.validate_object_access_dynamically(target_obj_16887,(0),"setView",true,true,false))?(target_obj_16887["setView"]):null);
return next_obj_16890;
})()];
var fn_16888 = (call_info_16889[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16888,oops.state.get_last_access_modifier())){
if((!((fn_16888 == null)))){
return fn_16888.call((call_info_16889[(0)]),(new module$node_modules$leaflet$dist$leaflet.LatLng((0),(0))),(2));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16891;
}})();
var _STAR_runtime_state_STAR__orig_val__16893 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16894 = oops.state.prepare_state(target_obj_16883,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16894;

try{var call_info_16885 = [target_obj_16883,(function (){var next_obj_16886 = ((oops.core.validate_object_access_dynamically(target_obj_16883,(0),"addLayer",true,true,false))?(target_obj_16883["addLayer"]):null);
return next_obj_16886;
})()];
var fn_16884 = (call_info_16885[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16884,oops.state.get_last_access_modifier())){
if((!((fn_16884 == null)))){
return fn_16884.call((call_info_16885[(0)]),(new module$node_modules$leaflet$dist$leaflet.TileLayer(osm_url,({"minZoom": (2), "maxZoom": (19)}))));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16893;
}}));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16863;
}});
io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers = (function io$trailmarker$foss4g_oceania_2018$slideshow_map$refresh_map_containers(map_sel){
var cont = (function (){var target_obj_16865 = $(map_sel);
var _STAR_runtime_state_STAR__orig_val__16869 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16870 = oops.state.prepare_state(target_obj_16865,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16870;

try{var call_info_16867 = [target_obj_16865,(function (){var next_obj_16868 = ((oops.core.validate_object_access_dynamically(target_obj_16865,(0),"find",true,true,false))?(target_obj_16865["find"]):null);
return next_obj_16868;
})()];
var fn_16866 = (call_info_16867[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16866,oops.state.get_last_access_modifier())){
if((!((fn_16866 == null)))){
return fn_16866.call((call_info_16867[(0)]),".leaflet-container");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16869;
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cont.length)){
var target_obj_16871_16895 = cont;
var _STAR_runtime_state_STAR__orig_val__16875_16896 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16876_16897 = oops.state.prepare_state(target_obj_16871_16895,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16876_16897;

try{var call_info_16873_16898 = [target_obj_16871_16895,(function (){var next_obj_16874 = ((oops.core.validate_object_access_dynamically(target_obj_16871_16895,(0),"remove",true,true,false))?(target_obj_16871_16895["remove"]):null);
return next_obj_16874;
})()];
var fn_16872_16899 = (call_info_16873_16898[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16872_16899,oops.state.get_last_access_modifier())){
if((!((fn_16872_16899 == null)))){
fn_16872_16899.call((call_info_16873_16898[(0)]));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16875_16896;
}} else {
}

var new_cont = $("<div class=\"leaflet-container\"></div>");
var target_obj_16877_16900 = $(map_sel);
var _STAR_runtime_state_STAR__orig_val__16881_16901 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16882_16902 = oops.state.prepare_state(target_obj_16877_16900,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16882_16902;

try{var call_info_16879_16903 = [target_obj_16877_16900,(function (){var next_obj_16880 = ((oops.core.validate_object_access_dynamically(target_obj_16877_16900,(0),"append",true,true,false))?(target_obj_16877_16900["append"]):null);
return next_obj_16880;
})()];
var fn_16878_16904 = (call_info_16879_16903[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16878_16904,oops.state.get_last_access_modifier())){
if((!((fn_16878_16904 == null)))){
fn_16878_16904.call((call_info_16879_16903[(0)]),new_cont);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16881_16901;
}
return new_cont;
});

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.slideshow_map.js.map
