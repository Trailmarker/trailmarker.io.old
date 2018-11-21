goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20647 = arguments.length;
var i__4642__auto___20648 = (0);
while(true){
if((i__4642__auto___20648 < len__4641__auto___20647)){
args__4647__auto__.push((arguments[i__4642__auto___20648]));

var G__20649 = (i__4642__auto___20648 + (1));
i__4642__auto___20648 = G__20649;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20533){
var G__20534 = cljs.core.first(seq20533);
var seq20533__$1 = cljs.core.next(seq20533);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20534,seq20533__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__20537){
var map__20538 = p__20537;
var map__20538__$1 = (((((!((map__20538 == null))))?(((((map__20538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20538):map__20538);
var src = map__20538__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20538__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20538__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20542 = cljs.core.seq(sources);
var chunk__20543 = null;
var count__20544 = (0);
var i__20545 = (0);
while(true){
if((i__20545 < count__20544)){
var map__20546 = chunk__20543.cljs$core$IIndexed$_nth$arity$2(null,i__20545);
var map__20546__$1 = (((((!((map__20546 == null))))?(((((map__20546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20546):map__20546);
var src = map__20546__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20546__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20650 = seq__20542;
var G__20651 = chunk__20543;
var G__20652 = count__20544;
var G__20653 = (i__20545 + (1));
seq__20542 = G__20650;
chunk__20543 = G__20651;
count__20544 = G__20652;
i__20545 = G__20653;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20542);
if(temp__5457__auto__){
var seq__20542__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20542__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20542__$1);
var G__20654 = cljs.core.chunk_rest(seq__20542__$1);
var G__20655 = c__4461__auto__;
var G__20656 = cljs.core.count(c__4461__auto__);
var G__20657 = (0);
seq__20542 = G__20654;
chunk__20543 = G__20655;
count__20544 = G__20656;
i__20545 = G__20657;
continue;
} else {
var map__20548 = cljs.core.first(seq__20542__$1);
var map__20548__$1 = (((((!((map__20548 == null))))?(((((map__20548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20548):map__20548);
var src = map__20548__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20548__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20548__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20548__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20548__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20658 = cljs.core.next(seq__20542__$1);
var G__20659 = null;
var G__20660 = (0);
var G__20661 = (0);
seq__20542 = G__20658;
chunk__20543 = G__20659;
count__20544 = G__20660;
i__20545 = G__20661;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20550 = cljs.core.seq(js_requires);
var chunk__20551 = null;
var count__20552 = (0);
var i__20553 = (0);
while(true){
if((i__20553 < count__20552)){
var js_ns = chunk__20551.cljs$core$IIndexed$_nth$arity$2(null,i__20553);
var require_str_20662 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20662);


var G__20663 = seq__20550;
var G__20664 = chunk__20551;
var G__20665 = count__20552;
var G__20666 = (i__20553 + (1));
seq__20550 = G__20663;
chunk__20551 = G__20664;
count__20552 = G__20665;
i__20553 = G__20666;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20550);
if(temp__5457__auto__){
var seq__20550__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20550__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20550__$1);
var G__20667 = cljs.core.chunk_rest(seq__20550__$1);
var G__20668 = c__4461__auto__;
var G__20669 = cljs.core.count(c__4461__auto__);
var G__20670 = (0);
seq__20550 = G__20667;
chunk__20551 = G__20668;
count__20552 = G__20669;
i__20553 = G__20670;
continue;
} else {
var js_ns = cljs.core.first(seq__20550__$1);
var require_str_20671 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20671);


var G__20672 = cljs.core.next(seq__20550__$1);
var G__20673 = null;
var G__20674 = (0);
var G__20675 = (0);
seq__20550 = G__20672;
chunk__20551 = G__20673;
count__20552 = G__20674;
i__20553 = G__20675;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__20554 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20554) : callback.call(null,G__20554));
} else {
var G__20555 = shadow.cljs.devtools.client.env.files_url();
var G__20556 = ((function (G__20555){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__20555))
;
var G__20557 = "POST";
var G__20558 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__20559 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20555,G__20556,G__20557,G__20558,G__20559);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__20563){
var map__20564 = p__20563;
var map__20564__$1 = (((((!((map__20564 == null))))?(((((map__20564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20564):map__20564);
var msg = map__20564__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20564__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20564__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__20566 = info;
var map__20566__$1 = (((((!((map__20566 == null))))?(((((map__20566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20566):map__20566);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20566__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20568(s__20569){
return (new cljs.core.LazySeq(null,((function (map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info){
return (function (){
var s__20569__$1 = s__20569;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20569__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20574 = cljs.core.first(xs__6012__auto__);
var map__20574__$1 = (((((!((map__20574 == null))))?(((((map__20574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20574):map__20574);
var src = map__20574__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__20569__$1,map__20574,map__20574__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20568_$_iter__20570(s__20571){
return (new cljs.core.LazySeq(null,((function (s__20569__$1,map__20574,map__20574__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info){
return (function (){
var s__20571__$1 = s__20571;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20571__$1);
if(temp__5457__auto____$1){
var s__20571__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20571__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__20571__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__20573 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__20572 = (0);
while(true){
if((i__20572 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__20572);
cljs.core.chunk_append(b__20573,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20676 = (i__20572 + (1));
i__20572 = G__20676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20573),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20568_$_iter__20570(cljs.core.chunk_rest(s__20571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20573),null);
}
} else {
var warning = cljs.core.first(s__20571__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20568_$_iter__20570(cljs.core.rest(s__20571__$2)));
}
} else {
return null;
}
break;
}
});})(s__20569__$1,map__20574,map__20574__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info))
,null,null));
});})(s__20569__$1,map__20574,map__20574__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20568(cljs.core.rest(s__20569__$1)));
} else {
var G__20677 = cljs.core.rest(s__20569__$1);
s__20569__$1 = G__20677;
continue;
}
} else {
var G__20678 = cljs.core.rest(s__20569__$1);
s__20569__$1 = G__20678;
continue;
}
} else {
return null;
}
break;
}
});})(map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info))
,null,null));
});})(map__20566,map__20566__$1,sources,compiled,map__20564,map__20564__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__20576_20679 = cljs.core.seq(warnings);
var chunk__20577_20680 = null;
var count__20578_20681 = (0);
var i__20579_20682 = (0);
while(true){
if((i__20579_20682 < count__20578_20681)){
var map__20580_20683 = chunk__20577_20680.cljs$core$IIndexed$_nth$arity$2(null,i__20579_20682);
var map__20580_20684__$1 = (((((!((map__20580_20683 == null))))?(((((map__20580_20683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20580_20683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20580_20683):map__20580_20683);
var w_20685 = map__20580_20684__$1;
var msg_20686__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580_20684__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580_20684__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580_20684__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580_20684__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20689)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20687),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20688),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20686__$1)].join(''));


var G__20690 = seq__20576_20679;
var G__20691 = chunk__20577_20680;
var G__20692 = count__20578_20681;
var G__20693 = (i__20579_20682 + (1));
seq__20576_20679 = G__20690;
chunk__20577_20680 = G__20691;
count__20578_20681 = G__20692;
i__20579_20682 = G__20693;
continue;
} else {
var temp__5457__auto___20694 = cljs.core.seq(seq__20576_20679);
if(temp__5457__auto___20694){
var seq__20576_20695__$1 = temp__5457__auto___20694;
if(cljs.core.chunked_seq_QMARK_(seq__20576_20695__$1)){
var c__4461__auto___20696 = cljs.core.chunk_first(seq__20576_20695__$1);
var G__20697 = cljs.core.chunk_rest(seq__20576_20695__$1);
var G__20698 = c__4461__auto___20696;
var G__20699 = cljs.core.count(c__4461__auto___20696);
var G__20700 = (0);
seq__20576_20679 = G__20697;
chunk__20577_20680 = G__20698;
count__20578_20681 = G__20699;
i__20579_20682 = G__20700;
continue;
} else {
var map__20582_20701 = cljs.core.first(seq__20576_20695__$1);
var map__20582_20702__$1 = (((((!((map__20582_20701 == null))))?(((((map__20582_20701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20582_20701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20582_20701):map__20582_20701);
var w_20703 = map__20582_20702__$1;
var msg_20704__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20702__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20702__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20702__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582_20702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20707)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20705),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20706),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20704__$1)].join(''));


var G__20708 = cljs.core.next(seq__20576_20695__$1);
var G__20709 = null;
var G__20710 = (0);
var G__20711 = (0);
seq__20576_20679 = G__20708;
chunk__20577_20680 = G__20709;
count__20578_20681 = G__20710;
i__20579_20682 = G__20711;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info){
return (function (p__20584){
var map__20585 = p__20584;
var map__20585__$1 = (((((!((map__20585 == null))))?(((((map__20585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20585):map__20585);
var src = map__20585__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info){
return (function (p__20587){
var map__20588 = p__20587;
var map__20588__$1 = (((((!((map__20588 == null))))?(((((map__20588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20588):map__20588);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info){
return (function (p__20590){
var map__20591 = p__20590;
var map__20591__$1 = (((((!((map__20591 == null))))?(((((map__20591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20591):map__20591);
var rc = map__20591__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20591__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info){
return (function (p1__20561_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20561_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__20566,map__20566__$1,sources,compiled,warnings,map__20564,map__20564__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__20593){
var map__20594 = p__20593;
var map__20594__$1 = (((((!((map__20594 == null))))?(((((map__20594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20594):map__20594);
var msg = map__20594__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20594__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__20596 = cljs.core.seq(updates);
var chunk__20598 = null;
var count__20599 = (0);
var i__20600 = (0);
while(true){
if((i__20600 < count__20599)){
var path = chunk__20598.cljs$core$IIndexed$_nth$arity$2(null,i__20600);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20602_20712 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20605_20713 = null;
var count__20606_20714 = (0);
var i__20607_20715 = (0);
while(true){
if((i__20607_20715 < count__20606_20714)){
var node_20716 = chunk__20605_20713.cljs$core$IIndexed$_nth$arity$2(null,i__20607_20715);
var path_match_20717 = shadow.cljs.devtools.client.browser.match_paths(node_20716.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20717)){
var new_link_20718 = (function (){var G__20610 = node_20716.cloneNode(true);
G__20610.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20717),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20610;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20717], 0));

goog.dom.insertSiblingAfter(new_link_20718,node_20716);

goog.dom.removeNode(node_20716);


var G__20719 = seq__20602_20712;
var G__20720 = chunk__20605_20713;
var G__20721 = count__20606_20714;
var G__20722 = (i__20607_20715 + (1));
seq__20602_20712 = G__20719;
chunk__20605_20713 = G__20720;
count__20606_20714 = G__20721;
i__20607_20715 = G__20722;
continue;
} else {
var G__20723 = seq__20602_20712;
var G__20724 = chunk__20605_20713;
var G__20725 = count__20606_20714;
var G__20726 = (i__20607_20715 + (1));
seq__20602_20712 = G__20723;
chunk__20605_20713 = G__20724;
count__20606_20714 = G__20725;
i__20607_20715 = G__20726;
continue;
}
} else {
var temp__5457__auto___20727 = cljs.core.seq(seq__20602_20712);
if(temp__5457__auto___20727){
var seq__20602_20728__$1 = temp__5457__auto___20727;
if(cljs.core.chunked_seq_QMARK_(seq__20602_20728__$1)){
var c__4461__auto___20729 = cljs.core.chunk_first(seq__20602_20728__$1);
var G__20730 = cljs.core.chunk_rest(seq__20602_20728__$1);
var G__20731 = c__4461__auto___20729;
var G__20732 = cljs.core.count(c__4461__auto___20729);
var G__20733 = (0);
seq__20602_20712 = G__20730;
chunk__20605_20713 = G__20731;
count__20606_20714 = G__20732;
i__20607_20715 = G__20733;
continue;
} else {
var node_20734 = cljs.core.first(seq__20602_20728__$1);
var path_match_20735 = shadow.cljs.devtools.client.browser.match_paths(node_20734.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20735)){
var new_link_20736 = (function (){var G__20611 = node_20734.cloneNode(true);
G__20611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20735),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20611;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20735], 0));

goog.dom.insertSiblingAfter(new_link_20736,node_20734);

goog.dom.removeNode(node_20734);


var G__20737 = cljs.core.next(seq__20602_20728__$1);
var G__20738 = null;
var G__20739 = (0);
var G__20740 = (0);
seq__20602_20712 = G__20737;
chunk__20605_20713 = G__20738;
count__20606_20714 = G__20739;
i__20607_20715 = G__20740;
continue;
} else {
var G__20741 = cljs.core.next(seq__20602_20728__$1);
var G__20742 = null;
var G__20743 = (0);
var G__20744 = (0);
seq__20602_20712 = G__20741;
chunk__20605_20713 = G__20742;
count__20606_20714 = G__20743;
i__20607_20715 = G__20744;
continue;
}
}
} else {
}
}
break;
}


var G__20745 = seq__20596;
var G__20746 = chunk__20598;
var G__20747 = count__20599;
var G__20748 = (i__20600 + (1));
seq__20596 = G__20745;
chunk__20598 = G__20746;
count__20599 = G__20747;
i__20600 = G__20748;
continue;
} else {
var G__20749 = seq__20596;
var G__20750 = chunk__20598;
var G__20751 = count__20599;
var G__20752 = (i__20600 + (1));
seq__20596 = G__20749;
chunk__20598 = G__20750;
count__20599 = G__20751;
i__20600 = G__20752;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20596);
if(temp__5457__auto__){
var seq__20596__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20596__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20596__$1);
var G__20753 = cljs.core.chunk_rest(seq__20596__$1);
var G__20754 = c__4461__auto__;
var G__20755 = cljs.core.count(c__4461__auto__);
var G__20756 = (0);
seq__20596 = G__20753;
chunk__20598 = G__20754;
count__20599 = G__20755;
i__20600 = G__20756;
continue;
} else {
var path = cljs.core.first(seq__20596__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20612_20757 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20615_20758 = null;
var count__20616_20759 = (0);
var i__20617_20760 = (0);
while(true){
if((i__20617_20760 < count__20616_20759)){
var node_20761 = chunk__20615_20758.cljs$core$IIndexed$_nth$arity$2(null,i__20617_20760);
var path_match_20762 = shadow.cljs.devtools.client.browser.match_paths(node_20761.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20762)){
var new_link_20763 = (function (){var G__20620 = node_20761.cloneNode(true);
G__20620.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20762),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20620;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20762], 0));

goog.dom.insertSiblingAfter(new_link_20763,node_20761);

goog.dom.removeNode(node_20761);


var G__20764 = seq__20612_20757;
var G__20765 = chunk__20615_20758;
var G__20766 = count__20616_20759;
var G__20767 = (i__20617_20760 + (1));
seq__20612_20757 = G__20764;
chunk__20615_20758 = G__20765;
count__20616_20759 = G__20766;
i__20617_20760 = G__20767;
continue;
} else {
var G__20768 = seq__20612_20757;
var G__20769 = chunk__20615_20758;
var G__20770 = count__20616_20759;
var G__20771 = (i__20617_20760 + (1));
seq__20612_20757 = G__20768;
chunk__20615_20758 = G__20769;
count__20616_20759 = G__20770;
i__20617_20760 = G__20771;
continue;
}
} else {
var temp__5457__auto___20772__$1 = cljs.core.seq(seq__20612_20757);
if(temp__5457__auto___20772__$1){
var seq__20612_20773__$1 = temp__5457__auto___20772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20612_20773__$1)){
var c__4461__auto___20774 = cljs.core.chunk_first(seq__20612_20773__$1);
var G__20775 = cljs.core.chunk_rest(seq__20612_20773__$1);
var G__20776 = c__4461__auto___20774;
var G__20777 = cljs.core.count(c__4461__auto___20774);
var G__20778 = (0);
seq__20612_20757 = G__20775;
chunk__20615_20758 = G__20776;
count__20616_20759 = G__20777;
i__20617_20760 = G__20778;
continue;
} else {
var node_20779 = cljs.core.first(seq__20612_20773__$1);
var path_match_20780 = shadow.cljs.devtools.client.browser.match_paths(node_20779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20780)){
var new_link_20781 = (function (){var G__20621 = node_20779.cloneNode(true);
G__20621.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20780),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20621;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20780], 0));

goog.dom.insertSiblingAfter(new_link_20781,node_20779);

goog.dom.removeNode(node_20779);


var G__20782 = cljs.core.next(seq__20612_20773__$1);
var G__20783 = null;
var G__20784 = (0);
var G__20785 = (0);
seq__20612_20757 = G__20782;
chunk__20615_20758 = G__20783;
count__20616_20759 = G__20784;
i__20617_20760 = G__20785;
continue;
} else {
var G__20786 = cljs.core.next(seq__20612_20773__$1);
var G__20787 = null;
var G__20788 = (0);
var G__20789 = (0);
seq__20612_20757 = G__20786;
chunk__20615_20758 = G__20787;
count__20616_20759 = G__20788;
i__20617_20760 = G__20789;
continue;
}
}
} else {
}
}
break;
}


var G__20790 = cljs.core.next(seq__20596__$1);
var G__20791 = null;
var G__20792 = (0);
var G__20793 = (0);
seq__20596 = G__20790;
chunk__20598 = G__20791;
count__20599 = G__20792;
i__20600 = G__20793;
continue;
} else {
var G__20794 = cljs.core.next(seq__20596__$1);
var G__20795 = null;
var G__20796 = (0);
var G__20797 = (0);
seq__20596 = G__20794;
chunk__20598 = G__20795;
count__20599 = G__20796;
i__20600 = G__20797;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__20622){
var map__20623 = p__20622;
var map__20623__$1 = (((((!((map__20623 == null))))?(((((map__20623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20623):map__20623);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__20623,map__20623__$1,id,js){
return (function (){
return eval(js);
});})(map__20623,map__20623__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__20625){
var map__20626 = p__20625;
var map__20626__$1 = (((((!((map__20626 == null))))?(((((map__20626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20626):map__20626);
var msg = map__20626__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20626,map__20626__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__20628){
var map__20629 = p__20628;
var map__20629__$1 = (((((!((map__20629 == null))))?(((((map__20629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20629):map__20629);
var src = map__20629__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__20626,map__20626__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__20626,map__20626__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__20626,map__20626__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__20631){
var map__20632 = p__20631;
var map__20632__$1 = (((((!((map__20632 == null))))?(((((map__20632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20632):map__20632);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20632__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20632__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__20632,map__20632__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__20632,map__20632__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__20634){
var map__20635 = p__20634;
var map__20635__$1 = (((((!((map__20635 == null))))?(((((map__20635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20635):map__20635);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20635__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20635__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__20637){
var map__20638 = p__20637;
var map__20638__$1 = (((((!((map__20638 == null))))?(((((map__20638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20638):map__20638);
var msg = map__20638__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__20640 = type;
var G__20640__$1 = (((G__20640 instanceof cljs.core.Keyword))?G__20640.fqn:null);
switch (G__20640__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__20641 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__20642 = ((function (G__20641){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__20641))
;
var G__20643 = "POST";
var G__20644 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__20645 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20641,G__20642,G__20643,G__20644,G__20645);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e20646){var e = e20646;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___20799 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___20799)){
var s_20800 = temp__5457__auto___20799;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_20800.onclose = ((function (s_20800,temp__5457__auto___20799){
return (function (e){
return null;
});})(s_20800,temp__5457__auto___20799))
;

s_20800.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
