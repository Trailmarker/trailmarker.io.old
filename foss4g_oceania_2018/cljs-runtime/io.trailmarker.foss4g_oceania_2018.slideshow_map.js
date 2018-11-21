goog.provide('io.trailmarker.foss4g_oceania_2018.slideshow_map');
goog.require('cljs.core');
var module$node_modules$leaflet$dist$leaflet=shadow.js.require("module$node_modules$leaflet$dist$leaflet", {});
var module$node_modules$$turf$random$main=shadow.js.require("module$node_modules$$turf$random$main", {});
goog.require('oops.core');
io.trailmarker.foss4g_oceania_2018.slideshow_map.create_maps = (function io$trailmarker$foss4g_oceania_2018$slideshow_map$create_maps(map_sel){
var containers = (io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.cljs$core$IFn$_invoke$arity$1 ? io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.cljs$core$IFn$_invoke$arity$1(map_sel) : io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers.call(null,map_sel));
var osm_url = "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
var target_obj_17069 = containers;
var _STAR_runtime_state_STAR__orig_val__17073 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17074 = oops.state.prepare_state(target_obj_17069,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17074;

try{var call_info_17071 = [target_obj_17069,(function (){var next_obj_17072 = ((oops.core.validate_object_access_dynamically(target_obj_17069,(0),"each",true,true,false))?(target_obj_17069["each"]):null);
return next_obj_17072;
})()];
var fn_17070 = (call_info_17071[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17070,oops.state.get_last_access_modifier())){
if((!((fn_17070 == null)))){
return fn_17070.call((call_info_17071[(0)]),(function (_,container){
var map = (new module$node_modules$leaflet$dist$leaflet.Map(container,({"zoomControl": false, "attributionControl": false})));
var random_polys = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (map){
return (function (){
var target_obj_17093 = module$node_modules$$turf$random$main;
var _STAR_runtime_state_STAR__orig_val__17097 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17098 = oops.state.prepare_state(target_obj_17093,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17098;

try{var call_info_17095 = [target_obj_17093,(function (){var next_obj_17096 = ((oops.core.validate_object_access_dynamically(target_obj_17093,(0),"randomPolygon",true,true,false))?(target_obj_17093["randomPolygon"]):null);
return next_obj_17096;
})()];
var fn_17094 = (call_info_17095[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17094,oops.state.get_last_access_modifier())){
if((!((fn_17094 == null)))){
return fn_17094.call((call_info_17095[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17097;
}});})(map))
);
var target_obj_17099_17115 = (function (){var target_obj_17103 = map;
var _STAR_runtime_state_STAR__orig_val__17107 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17108 = oops.state.prepare_state(target_obj_17103,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17108;

try{var call_info_17105 = [target_obj_17103,(function (){var next_obj_17106 = ((oops.core.validate_object_access_dynamically(target_obj_17103,(0),"setView",true,true,false))?(target_obj_17103["setView"]):null);
return next_obj_17106;
})()];
var fn_17104 = (call_info_17105[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17104,oops.state.get_last_access_modifier())){
if((!((fn_17104 == null)))){
return fn_17104.call((call_info_17105[(0)]),(new module$node_modules$leaflet$dist$leaflet.LatLng((0),(0))),(2));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17107;
}})();
var _STAR_runtime_state_STAR__orig_val__17109_17116 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17110_17117 = oops.state.prepare_state(target_obj_17099_17115,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17110_17117;

try{var call_info_17101_17118 = [target_obj_17099_17115,(function (){var next_obj_17102 = ((oops.core.validate_object_access_dynamically(target_obj_17099_17115,(0),"addLayer",true,true,false))?(target_obj_17099_17115["addLayer"]):null);
return next_obj_17102;
})()];
var fn_17100_17119 = (call_info_17101_17118[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17100_17119,oops.state.get_last_access_modifier())){
if((!((fn_17100_17119 == null)))){
fn_17100_17119.call((call_info_17101_17118[(0)]),(new module$node_modules$leaflet$dist$leaflet.TileLayer(osm_url,({"minZoom": (2), "maxZoom": (19)}))));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17109_17116;
}
var seq__17111 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2((100),random_polys));
var chunk__17112 = null;
var count__17113 = (0);
var i__17114 = (0);
while(true){
if((i__17114 < count__17113)){
var poly = chunk__17112.cljs$core$IIndexed$_nth$arity$2(null,i__17114);
module$node_modules$leaflet$dist$leaflet.geoJson(poly).addTo(map);


var G__17120 = seq__17111;
var G__17121 = chunk__17112;
var G__17122 = count__17113;
var G__17123 = (i__17114 + (1));
seq__17111 = G__17120;
chunk__17112 = G__17121;
count__17113 = G__17122;
i__17114 = G__17123;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17111);
if(temp__5457__auto__){
var seq__17111__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17111__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17111__$1);
var G__17124 = cljs.core.chunk_rest(seq__17111__$1);
var G__17125 = c__4461__auto__;
var G__17126 = cljs.core.count(c__4461__auto__);
var G__17127 = (0);
seq__17111 = G__17124;
chunk__17112 = G__17125;
count__17113 = G__17126;
i__17114 = G__17127;
continue;
} else {
var poly = cljs.core.first(seq__17111__$1);
module$node_modules$leaflet$dist$leaflet.geoJson(poly).addTo(map);


var G__17128 = cljs.core.next(seq__17111__$1);
var G__17129 = null;
var G__17130 = (0);
var G__17131 = (0);
seq__17111 = G__17128;
chunk__17112 = G__17129;
count__17113 = G__17130;
i__17114 = G__17131;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17073;
}});
io.trailmarker.foss4g_oceania_2018.slideshow_map.refresh_map_containers = (function io$trailmarker$foss4g_oceania_2018$slideshow_map$refresh_map_containers(map_sel){
var cont = (function (){var target_obj_17075 = $(map_sel);
var _STAR_runtime_state_STAR__orig_val__17079 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17080 = oops.state.prepare_state(target_obj_17075,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17080;

try{var call_info_17077 = [target_obj_17075,(function (){var next_obj_17078 = ((oops.core.validate_object_access_dynamically(target_obj_17075,(0),"find",true,true,false))?(target_obj_17075["find"]):null);
return next_obj_17078;
})()];
var fn_17076 = (call_info_17077[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17076,oops.state.get_last_access_modifier())){
if((!((fn_17076 == null)))){
return fn_17076.call((call_info_17077[(0)]),".leaflet-container");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17079;
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cont.length)){
var target_obj_17081_17132 = cont;
var _STAR_runtime_state_STAR__orig_val__17085_17133 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17086_17134 = oops.state.prepare_state(target_obj_17081_17132,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17086_17134;

try{var call_info_17083_17135 = [target_obj_17081_17132,(function (){var next_obj_17084 = ((oops.core.validate_object_access_dynamically(target_obj_17081_17132,(0),"remove",true,true,false))?(target_obj_17081_17132["remove"]):null);
return next_obj_17084;
})()];
var fn_17082_17136 = (call_info_17083_17135[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17082_17136,oops.state.get_last_access_modifier())){
if((!((fn_17082_17136 == null)))){
fn_17082_17136.call((call_info_17083_17135[(0)]));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17085_17133;
}} else {
}

var new_cont = $("<div class=\"leaflet-container\"></div>");
var target_obj_17087_17137 = $(map_sel);
var _STAR_runtime_state_STAR__orig_val__17091_17138 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17092_17139 = oops.state.prepare_state(target_obj_17087_17137,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17092_17139;

try{var call_info_17089_17140 = [target_obj_17087_17137,(function (){var next_obj_17090 = ((oops.core.validate_object_access_dynamically(target_obj_17087_17137,(0),"append",true,true,false))?(target_obj_17087_17137["append"]):null);
return next_obj_17090;
})()];
var fn_17088_17141 = (call_info_17089_17140[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_17088_17141,oops.state.get_last_access_modifier())){
if((!((fn_17088_17141 == null)))){
fn_17088_17141.call((call_info_17089_17140[(0)]),new_cont);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17091_17138;
}
return new_cont;
});

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.slideshow_map.js.map
