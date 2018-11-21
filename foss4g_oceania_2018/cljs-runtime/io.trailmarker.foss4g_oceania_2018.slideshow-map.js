goog.provide('io.trailmarker.foss4g_oceania_2018.slideshow_map');
goog.require('cljs.core');
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
goog.require('oops.core');
io.trailmarker.foss4g_oceania_2018.slideshow_map.create_map = (function io$trailmarker$foss4g_oceania_2018$slideshow_map$create_map(map_el){
var osm_url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osm_attrib = "Map data \u00A9 OpenStreetMap contributors";
var target_obj_16822 = (function (){var target_obj_16826 = (new module$node_modules$leaflet$dist$leaflet_src.Map(map_el));
var _STAR_runtime_state_STAR__orig_val__16830 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16831 = oops.state.prepare_state(target_obj_16826,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16831;

try{var call_info_16828 = [target_obj_16826,(function (){var next_obj_16829 = ((oops.core.validate_object_access_dynamically(target_obj_16826,(0),"setView",true,true,false))?(target_obj_16826["setView"]):null);
return next_obj_16829;
})()];
var fn_16827 = (call_info_16828[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16827,oops.state.get_last_access_modifier())){
if((!((fn_16827 == null)))){
return fn_16827.call((call_info_16828[(0)]),(new module$node_modules$leaflet$dist$leaflet_src.LatLng((0),(0))),(1));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16830;
}})();
var _STAR_runtime_state_STAR__orig_val__16832 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16833 = oops.state.prepare_state(target_obj_16822,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16833;

try{var call_info_16824 = [target_obj_16822,(function (){var next_obj_16825 = ((oops.core.validate_object_access_dynamically(target_obj_16822,(0),"addLayer",true,true,false))?(target_obj_16822["addLayer"]):null);
return next_obj_16825;
})()];
var fn_16823 = (call_info_16824[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_16823,oops.state.get_last_access_modifier())){
if((!((fn_16823 == null)))){
return fn_16823.call((call_info_16824[(0)]),(new module$node_modules$leaflet$dist$leaflet_src.TileLayer(osm_url,({"minZOom": (1), "maxZoom": (19), "attribution": osm_attrib}))));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16832;
}});

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.slideshow-map.js.map
