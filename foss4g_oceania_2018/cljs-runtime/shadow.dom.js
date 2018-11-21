goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18684 = coll;
var G__18685 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18684,G__18685) : shadow.dom.lazy_native_coll_seq.call(null,G__18684,G__18685));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18721 = arguments.length;
switch (G__18721) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18726 = arguments.length;
switch (G__18726) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18735 = arguments.length;
switch (G__18735) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18741 = arguments.length;
switch (G__18741) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18751 = arguments.length;
switch (G__18751) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18754 = document;
var G__18755 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18754,G__18755);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18757 = shadow.dom.dom_node(parent);
var G__18758 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18757,G__18758);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18761 = shadow.dom.dom_node(el);
var G__18762 = cls;
return goog.dom.classlist.add(G__18761,G__18762);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18763 = shadow.dom.dom_node(el);
var G__18764 = cls;
return goog.dom.classlist.remove(G__18763,G__18764);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18767 = arguments.length;
switch (G__18767) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18768 = shadow.dom.dom_node(el);
var G__18769 = cls;
return goog.dom.classlist.toggle(G__18768,G__18769);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18773){if((e18773 instanceof Object)){
var e = e18773;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18773;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18781 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18782 = null;
var count__18783 = (0);
var i__18784 = (0);
while(true){
if((i__18784 < count__18783)){
var el = chunk__18782.cljs$core$IIndexed$_nth$arity$2(null,i__18784);
var handler_19249__$1 = ((function (seq__18781,chunk__18782,count__18783,i__18784,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18781,chunk__18782,count__18783,i__18784,el))
;
var G__18787_19251 = el;
var G__18788_19252 = cljs.core.name(ev);
var G__18789_19253 = handler_19249__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18787_19251,G__18788_19252,G__18789_19253) : shadow.dom.dom_listen.call(null,G__18787_19251,G__18788_19252,G__18789_19253));


var G__19254 = seq__18781;
var G__19255 = chunk__18782;
var G__19256 = count__18783;
var G__19257 = (i__18784 + (1));
seq__18781 = G__19254;
chunk__18782 = G__19255;
count__18783 = G__19256;
i__18784 = G__19257;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18781);
if(temp__5457__auto__){
var seq__18781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18781__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18781__$1);
var G__19258 = cljs.core.chunk_rest(seq__18781__$1);
var G__19259 = c__4461__auto__;
var G__19260 = cljs.core.count(c__4461__auto__);
var G__19261 = (0);
seq__18781 = G__19258;
chunk__18782 = G__19259;
count__18783 = G__19260;
i__18784 = G__19261;
continue;
} else {
var el = cljs.core.first(seq__18781__$1);
var handler_19263__$1 = ((function (seq__18781,chunk__18782,count__18783,i__18784,el,seq__18781__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18781,chunk__18782,count__18783,i__18784,el,seq__18781__$1,temp__5457__auto__))
;
var G__18794_19264 = el;
var G__18795_19265 = cljs.core.name(ev);
var G__18796_19266 = handler_19263__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18794_19264,G__18795_19265,G__18796_19266) : shadow.dom.dom_listen.call(null,G__18794_19264,G__18795_19265,G__18796_19266));


var G__19267 = cljs.core.next(seq__18781__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__18781 = G__19267;
chunk__18782 = G__19268;
count__18783 = G__19269;
i__18784 = G__19270;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18800 = arguments.length;
switch (G__18800) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18803 = shadow.dom.dom_node(el);
var G__18804 = cljs.core.name(ev);
var G__18805 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18803,G__18804,G__18805) : shadow.dom.dom_listen.call(null,G__18803,G__18804,G__18805));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18808 = shadow.dom.dom_node(el);
var G__18809 = cljs.core.name(ev);
var G__18810 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18808,G__18809,G__18810) : shadow.dom.dom_listen_remove.call(null,G__18808,G__18809,G__18810));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18813 = cljs.core.seq(events);
var chunk__18814 = null;
var count__18815 = (0);
var i__18816 = (0);
while(true){
if((i__18816 < count__18815)){
var vec__18818 = chunk__18814.cljs$core$IIndexed$_nth$arity$2(null,i__18816);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19280 = seq__18813;
var G__19281 = chunk__18814;
var G__19282 = count__18815;
var G__19283 = (i__18816 + (1));
seq__18813 = G__19280;
chunk__18814 = G__19281;
count__18815 = G__19282;
i__18816 = G__19283;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18813);
if(temp__5457__auto__){
var seq__18813__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18813__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18813__$1);
var G__19285 = cljs.core.chunk_rest(seq__18813__$1);
var G__19286 = c__4461__auto__;
var G__19287 = cljs.core.count(c__4461__auto__);
var G__19288 = (0);
seq__18813 = G__19285;
chunk__18814 = G__19286;
count__18815 = G__19287;
i__18816 = G__19288;
continue;
} else {
var vec__18824 = cljs.core.first(seq__18813__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18824,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19290 = cljs.core.next(seq__18813__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__18813 = G__19290;
chunk__18814 = G__19291;
count__18815 = G__19292;
i__18816 = G__19293;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18828 = cljs.core.seq(styles);
var chunk__18829 = null;
var count__18830 = (0);
var i__18831 = (0);
while(true){
if((i__18831 < count__18830)){
var vec__18833 = chunk__18829.cljs$core$IIndexed$_nth$arity$2(null,i__18831);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(1),null);
var G__18836_19296 = dom;
var G__18837_19297 = cljs.core.name(k);
var G__18838_19298 = (((v == null))?"":v);
goog.style.setStyle(G__18836_19296,G__18837_19297,G__18838_19298);


var G__19300 = seq__18828;
var G__19301 = chunk__18829;
var G__19302 = count__18830;
var G__19303 = (i__18831 + (1));
seq__18828 = G__19300;
chunk__18829 = G__19301;
count__18830 = G__19302;
i__18831 = G__19303;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18828);
if(temp__5457__auto__){
var seq__18828__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18828__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18828__$1);
var G__19306 = cljs.core.chunk_rest(seq__18828__$1);
var G__19307 = c__4461__auto__;
var G__19308 = cljs.core.count(c__4461__auto__);
var G__19309 = (0);
seq__18828 = G__19306;
chunk__18829 = G__19307;
count__18830 = G__19308;
i__18831 = G__19309;
continue;
} else {
var vec__18839 = cljs.core.first(seq__18828__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(1),null);
var G__18842_19311 = dom;
var G__18843_19312 = cljs.core.name(k);
var G__18844_19313 = (((v == null))?"":v);
goog.style.setStyle(G__18842_19311,G__18843_19312,G__18844_19313);


var G__19315 = cljs.core.next(seq__18828__$1);
var G__19316 = null;
var G__19317 = (0);
var G__19318 = (0);
seq__18828 = G__19315;
chunk__18829 = G__19316;
count__18830 = G__19317;
i__18831 = G__19318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18847_19320 = key;
var G__18847_19321__$1 = (((G__18847_19320 instanceof cljs.core.Keyword))?G__18847_19320.fqn:null);
switch (G__18847_19321__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19327 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_19327,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_19327,"aria-");
}
})())){
el.setAttribute(ks_19327,value);
} else {
(el[ks_19327] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18857 = shadow.dom.dom_node(el);
var G__18858 = cls;
return goog.dom.classlist.contains(G__18857,G__18858);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18867){
var map__18868 = p__18867;
var map__18868__$1 = (((((!((map__18868 == null))))?(((((map__18868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18868):map__18868);
var props = map__18868__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18870 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18873 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18873,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18873;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18875 = arguments.length;
switch (G__18875) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18876){
var vec__18877 = p__18876;
var seq__18878 = cljs.core.seq(vec__18877);
var first__18879 = cljs.core.first(seq__18878);
var seq__18878__$1 = cljs.core.next(seq__18878);
var nn = first__18879;
var first__18879__$1 = cljs.core.first(seq__18878__$1);
var seq__18878__$2 = cljs.core.next(seq__18878__$1);
var np = first__18879__$1;
var nc = seq__18878__$2;
var node = vec__18877;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18880 = nn;
var G__18881 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18880,G__18881) : create_fn.call(null,G__18880,G__18881));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18882 = nn;
var G__18883 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18882,G__18883) : create_fn.call(null,G__18882,G__18883));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18885 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18885,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18885,(1),null);
var seq__18888_19336 = cljs.core.seq(node_children);
var chunk__18889_19337 = null;
var count__18890_19338 = (0);
var i__18891_19339 = (0);
while(true){
if((i__18891_19339 < count__18890_19338)){
var child_struct_19340 = chunk__18889_19337.cljs$core$IIndexed$_nth$arity$2(null,i__18891_19339);
var children_19341 = shadow.dom.dom_node(child_struct_19340);
if(cljs.core.seq_QMARK_(children_19341)){
var seq__18893_19342 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19341));
var chunk__18895_19343 = null;
var count__18896_19344 = (0);
var i__18897_19345 = (0);
while(true){
if((i__18897_19345 < count__18896_19344)){
var child_19347 = chunk__18895_19343.cljs$core$IIndexed$_nth$arity$2(null,i__18897_19345);
if(cljs.core.truth_(child_19347)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19347);


var G__19348 = seq__18893_19342;
var G__19349 = chunk__18895_19343;
var G__19350 = count__18896_19344;
var G__19351 = (i__18897_19345 + (1));
seq__18893_19342 = G__19348;
chunk__18895_19343 = G__19349;
count__18896_19344 = G__19350;
i__18897_19345 = G__19351;
continue;
} else {
var G__19353 = seq__18893_19342;
var G__19354 = chunk__18895_19343;
var G__19355 = count__18896_19344;
var G__19356 = (i__18897_19345 + (1));
seq__18893_19342 = G__19353;
chunk__18895_19343 = G__19354;
count__18896_19344 = G__19355;
i__18897_19345 = G__19356;
continue;
}
} else {
var temp__5457__auto___19357 = cljs.core.seq(seq__18893_19342);
if(temp__5457__auto___19357){
var seq__18893_19359__$1 = temp__5457__auto___19357;
if(cljs.core.chunked_seq_QMARK_(seq__18893_19359__$1)){
var c__4461__auto___19361 = cljs.core.chunk_first(seq__18893_19359__$1);
var G__19362 = cljs.core.chunk_rest(seq__18893_19359__$1);
var G__19363 = c__4461__auto___19361;
var G__19364 = cljs.core.count(c__4461__auto___19361);
var G__19365 = (0);
seq__18893_19342 = G__19362;
chunk__18895_19343 = G__19363;
count__18896_19344 = G__19364;
i__18897_19345 = G__19365;
continue;
} else {
var child_19366 = cljs.core.first(seq__18893_19359__$1);
if(cljs.core.truth_(child_19366)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19366);


var G__19367 = cljs.core.next(seq__18893_19359__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__18893_19342 = G__19367;
chunk__18895_19343 = G__19368;
count__18896_19344 = G__19369;
i__18897_19345 = G__19370;
continue;
} else {
var G__19371 = cljs.core.next(seq__18893_19359__$1);
var G__19372 = null;
var G__19373 = (0);
var G__19374 = (0);
seq__18893_19342 = G__19371;
chunk__18895_19343 = G__19372;
count__18896_19344 = G__19373;
i__18897_19345 = G__19374;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19341);
}


var G__19376 = seq__18888_19336;
var G__19377 = chunk__18889_19337;
var G__19378 = count__18890_19338;
var G__19379 = (i__18891_19339 + (1));
seq__18888_19336 = G__19376;
chunk__18889_19337 = G__19377;
count__18890_19338 = G__19378;
i__18891_19339 = G__19379;
continue;
} else {
var temp__5457__auto___19380 = cljs.core.seq(seq__18888_19336);
if(temp__5457__auto___19380){
var seq__18888_19381__$1 = temp__5457__auto___19380;
if(cljs.core.chunked_seq_QMARK_(seq__18888_19381__$1)){
var c__4461__auto___19382 = cljs.core.chunk_first(seq__18888_19381__$1);
var G__19384 = cljs.core.chunk_rest(seq__18888_19381__$1);
var G__19385 = c__4461__auto___19382;
var G__19386 = cljs.core.count(c__4461__auto___19382);
var G__19387 = (0);
seq__18888_19336 = G__19384;
chunk__18889_19337 = G__19385;
count__18890_19338 = G__19386;
i__18891_19339 = G__19387;
continue;
} else {
var child_struct_19388 = cljs.core.first(seq__18888_19381__$1);
var children_19390 = shadow.dom.dom_node(child_struct_19388);
if(cljs.core.seq_QMARK_(children_19390)){
var seq__18904_19391 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19390));
var chunk__18906_19392 = null;
var count__18907_19393 = (0);
var i__18908_19394 = (0);
while(true){
if((i__18908_19394 < count__18907_19393)){
var child_19396 = chunk__18906_19392.cljs$core$IIndexed$_nth$arity$2(null,i__18908_19394);
if(cljs.core.truth_(child_19396)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19396);


var G__19398 = seq__18904_19391;
var G__19399 = chunk__18906_19392;
var G__19400 = count__18907_19393;
var G__19401 = (i__18908_19394 + (1));
seq__18904_19391 = G__19398;
chunk__18906_19392 = G__19399;
count__18907_19393 = G__19400;
i__18908_19394 = G__19401;
continue;
} else {
var G__19402 = seq__18904_19391;
var G__19403 = chunk__18906_19392;
var G__19404 = count__18907_19393;
var G__19405 = (i__18908_19394 + (1));
seq__18904_19391 = G__19402;
chunk__18906_19392 = G__19403;
count__18907_19393 = G__19404;
i__18908_19394 = G__19405;
continue;
}
} else {
var temp__5457__auto___19408__$1 = cljs.core.seq(seq__18904_19391);
if(temp__5457__auto___19408__$1){
var seq__18904_19409__$1 = temp__5457__auto___19408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18904_19409__$1)){
var c__4461__auto___19410 = cljs.core.chunk_first(seq__18904_19409__$1);
var G__19411 = cljs.core.chunk_rest(seq__18904_19409__$1);
var G__19412 = c__4461__auto___19410;
var G__19413 = cljs.core.count(c__4461__auto___19410);
var G__19414 = (0);
seq__18904_19391 = G__19411;
chunk__18906_19392 = G__19412;
count__18907_19393 = G__19413;
i__18908_19394 = G__19414;
continue;
} else {
var child_19415 = cljs.core.first(seq__18904_19409__$1);
if(cljs.core.truth_(child_19415)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19415);


var G__19417 = cljs.core.next(seq__18904_19409__$1);
var G__19418 = null;
var G__19419 = (0);
var G__19420 = (0);
seq__18904_19391 = G__19417;
chunk__18906_19392 = G__19418;
count__18907_19393 = G__19419;
i__18908_19394 = G__19420;
continue;
} else {
var G__19422 = cljs.core.next(seq__18904_19409__$1);
var G__19423 = null;
var G__19424 = (0);
var G__19425 = (0);
seq__18904_19391 = G__19422;
chunk__18906_19392 = G__19423;
count__18907_19393 = G__19424;
i__18908_19394 = G__19425;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19390);
}


var G__19429 = cljs.core.next(seq__18888_19381__$1);
var G__19430 = null;
var G__19431 = (0);
var G__19432 = (0);
seq__18888_19336 = G__19429;
chunk__18889_19337 = G__19430;
count__18890_19338 = G__19431;
i__18891_19339 = G__19432;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18921 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18921);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18925 = cljs.core.seq(node);
var chunk__18926 = null;
var count__18927 = (0);
var i__18928 = (0);
while(true){
if((i__18928 < count__18927)){
var n = chunk__18926.cljs$core$IIndexed$_nth$arity$2(null,i__18928);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19441 = seq__18925;
var G__19442 = chunk__18926;
var G__19443 = count__18927;
var G__19444 = (i__18928 + (1));
seq__18925 = G__19441;
chunk__18926 = G__19442;
count__18927 = G__19443;
i__18928 = G__19444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18925);
if(temp__5457__auto__){
var seq__18925__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18925__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18925__$1);
var G__19446 = cljs.core.chunk_rest(seq__18925__$1);
var G__19447 = c__4461__auto__;
var G__19448 = cljs.core.count(c__4461__auto__);
var G__19449 = (0);
seq__18925 = G__19446;
chunk__18926 = G__19447;
count__18927 = G__19448;
i__18928 = G__19449;
continue;
} else {
var n = cljs.core.first(seq__18925__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19450 = cljs.core.next(seq__18925__$1);
var G__19451 = null;
var G__19452 = (0);
var G__19453 = (0);
seq__18925 = G__19450;
chunk__18926 = G__19451;
count__18927 = G__19452;
i__18928 = G__19453;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18933 = shadow.dom.dom_node(new$);
var G__18934 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18933,G__18934);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18937 = arguments.length;
switch (G__18937) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18944 = arguments.length;
switch (G__18944) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18955 = arguments.length;
switch (G__18955) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19474 = arguments.length;
var i__4642__auto___19475 = (0);
while(true){
if((i__4642__auto___19475 < len__4641__auto___19474)){
args__4647__auto__.push((arguments[i__4642__auto___19475]));

var G__19477 = (i__4642__auto___19475 + (1));
i__4642__auto___19475 = G__19477;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18973_19482 = cljs.core.seq(nodes);
var chunk__18974_19483 = null;
var count__18975_19484 = (0);
var i__18976_19485 = (0);
while(true){
if((i__18976_19485 < count__18975_19484)){
var node_19486 = chunk__18974_19483.cljs$core$IIndexed$_nth$arity$2(null,i__18976_19485);
fragment.appendChild(shadow.dom._to_dom(node_19486));


var G__19488 = seq__18973_19482;
var G__19489 = chunk__18974_19483;
var G__19490 = count__18975_19484;
var G__19491 = (i__18976_19485 + (1));
seq__18973_19482 = G__19488;
chunk__18974_19483 = G__19489;
count__18975_19484 = G__19490;
i__18976_19485 = G__19491;
continue;
} else {
var temp__5457__auto___19492 = cljs.core.seq(seq__18973_19482);
if(temp__5457__auto___19492){
var seq__18973_19494__$1 = temp__5457__auto___19492;
if(cljs.core.chunked_seq_QMARK_(seq__18973_19494__$1)){
var c__4461__auto___19495 = cljs.core.chunk_first(seq__18973_19494__$1);
var G__19496 = cljs.core.chunk_rest(seq__18973_19494__$1);
var G__19497 = c__4461__auto___19495;
var G__19498 = cljs.core.count(c__4461__auto___19495);
var G__19499 = (0);
seq__18973_19482 = G__19496;
chunk__18974_19483 = G__19497;
count__18975_19484 = G__19498;
i__18976_19485 = G__19499;
continue;
} else {
var node_19500 = cljs.core.first(seq__18973_19494__$1);
fragment.appendChild(shadow.dom._to_dom(node_19500));


var G__19503 = cljs.core.next(seq__18973_19494__$1);
var G__19504 = null;
var G__19505 = (0);
var G__19506 = (0);
seq__18973_19482 = G__19503;
chunk__18974_19483 = G__19504;
count__18975_19484 = G__19505;
i__18976_19485 = G__19506;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18971){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18971));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18980_19509 = cljs.core.seq(scripts);
var chunk__18981_19510 = null;
var count__18982_19511 = (0);
var i__18983_19512 = (0);
while(true){
if((i__18983_19512 < count__18982_19511)){
var vec__18984_19516 = chunk__18981_19510.cljs$core$IIndexed$_nth$arity$2(null,i__18983_19512);
var script_tag_19518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18984_19516,(0),null);
var script_body_19519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18984_19516,(1),null);
eval(script_body_19519);


var G__19521 = seq__18980_19509;
var G__19522 = chunk__18981_19510;
var G__19523 = count__18982_19511;
var G__19524 = (i__18983_19512 + (1));
seq__18980_19509 = G__19521;
chunk__18981_19510 = G__19522;
count__18982_19511 = G__19523;
i__18983_19512 = G__19524;
continue;
} else {
var temp__5457__auto___19526 = cljs.core.seq(seq__18980_19509);
if(temp__5457__auto___19526){
var seq__18980_19527__$1 = temp__5457__auto___19526;
if(cljs.core.chunked_seq_QMARK_(seq__18980_19527__$1)){
var c__4461__auto___19529 = cljs.core.chunk_first(seq__18980_19527__$1);
var G__19530 = cljs.core.chunk_rest(seq__18980_19527__$1);
var G__19531 = c__4461__auto___19529;
var G__19532 = cljs.core.count(c__4461__auto___19529);
var G__19533 = (0);
seq__18980_19509 = G__19530;
chunk__18981_19510 = G__19531;
count__18982_19511 = G__19532;
i__18983_19512 = G__19533;
continue;
} else {
var vec__18987_19534 = cljs.core.first(seq__18980_19527__$1);
var script_tag_19535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18987_19534,(0),null);
var script_body_19536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18987_19534,(1),null);
eval(script_body_19536);


var G__19537 = cljs.core.next(seq__18980_19527__$1);
var G__19538 = null;
var G__19539 = (0);
var G__19540 = (0);
seq__18980_19509 = G__19537;
chunk__18981_19510 = G__19538;
count__18982_19511 = G__19539;
i__18983_19512 = G__19540;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18990){
var vec__18991 = p__18990;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18991,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18991,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18994 = shadow.dom.dom_node(el);
var G__18995 = cls;
return goog.dom.getAncestorByClass(G__18994,G__18995);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18999 = arguments.length;
switch (G__18999) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__19001 = shadow.dom.dom_node(el);
var G__19002 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__19001,G__19002);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__19004 = shadow.dom.dom_node(el);
var G__19006 = cljs.core.name(tag);
var G__19007 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__19004,G__19006,G__19007);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__19009 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__19009);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__19010 = shadow.dom.dom_node(dom);
var G__19011 = value;
return goog.dom.forms.setValue(G__19010,G__19011);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19012 = cljs.core.seq(style_keys);
var chunk__19013 = null;
var count__19014 = (0);
var i__19015 = (0);
while(true){
if((i__19015 < count__19014)){
var it = chunk__19013.cljs$core$IIndexed$_nth$arity$2(null,i__19015);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19551 = seq__19012;
var G__19552 = chunk__19013;
var G__19553 = count__19014;
var G__19554 = (i__19015 + (1));
seq__19012 = G__19551;
chunk__19013 = G__19552;
count__19014 = G__19553;
i__19015 = G__19554;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19012);
if(temp__5457__auto__){
var seq__19012__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19012__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19012__$1);
var G__19556 = cljs.core.chunk_rest(seq__19012__$1);
var G__19557 = c__4461__auto__;
var G__19558 = cljs.core.count(c__4461__auto__);
var G__19559 = (0);
seq__19012 = G__19556;
chunk__19013 = G__19557;
count__19014 = G__19558;
i__19015 = G__19559;
continue;
} else {
var it = cljs.core.first(seq__19012__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19563 = cljs.core.next(seq__19012__$1);
var G__19564 = null;
var G__19565 = (0);
var G__19566 = (0);
seq__19012 = G__19563;
chunk__19013 = G__19564;
count__19014 = G__19565;
i__19015 = G__19566;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19017,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19021 = k19017;
var G__19021__$1 = (((G__19021 instanceof cljs.core.Keyword))?G__19021.fqn:null);
switch (G__19021__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19017,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19022){
var vec__19023 = p__19022;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19023,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19023,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19016){
var self__ = this;
var G__19016__$1 = this;
return (new cljs.core.RecordIter((0),G__19016__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19028 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19028(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19018,other19019){
var self__ = this;
var this19018__$1 = this;
return (((!((other19019 == null)))) && ((this19018__$1.constructor === other19019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19018__$1.x,other19019.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19018__$1.y,other19019.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19018__$1.__extmap,other19019.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19016){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19036 = cljs.core.keyword_identical_QMARK_;
var expr__19037 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19040 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__19041 = expr__19037;
return (pred__19036.cljs$core$IFn$_invoke$arity$2 ? pred__19036.cljs$core$IFn$_invoke$arity$2(G__19040,G__19041) : pred__19036.call(null,G__19040,G__19041));
})())){
return (new shadow.dom.Coordinate(G__19016,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19042 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__19043 = expr__19037;
return (pred__19036.cljs$core$IFn$_invoke$arity$2 ? pred__19036.cljs$core$IFn$_invoke$arity$2(G__19042,G__19043) : pred__19036.call(null,G__19042,G__19043));
})())){
return (new shadow.dom.Coordinate(self__.x,G__19016,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19016),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19016){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19016,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19020){
var extmap__4340__auto__ = (function (){var G__19051 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19020,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19020)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19051);
} else {
return G__19051;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19020),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19020),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__19054 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__19054);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19057 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19057);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19060 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19060);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19063,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19072 = k19063;
var G__19072__$1 = (((G__19072 instanceof cljs.core.Keyword))?G__19072.fqn:null);
switch (G__19072__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19063,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19077){
var vec__19078 = p__19077;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19062){
var self__ = this;
var G__19062__$1 = this;
return (new cljs.core.RecordIter((0),G__19062__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19090 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19090(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19064,other19065){
var self__ = this;
var this19064__$1 = this;
return (((!((other19065 == null)))) && ((this19064__$1.constructor === other19065.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19064__$1.w,other19065.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19064__$1.h,other19065.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19064__$1.__extmap,other19065.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19062){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19094 = cljs.core.keyword_identical_QMARK_;
var expr__19095 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19097 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19098 = expr__19095;
return (pred__19094.cljs$core$IFn$_invoke$arity$2 ? pred__19094.cljs$core$IFn$_invoke$arity$2(G__19097,G__19098) : pred__19094.call(null,G__19097,G__19098));
})())){
return (new shadow.dom.Size(G__19062,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19100 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19101 = expr__19095;
return (pred__19094.cljs$core$IFn$_invoke$arity$2 ? pred__19094.cljs$core$IFn$_invoke$arity$2(G__19100,G__19101) : pred__19094.call(null,G__19100,G__19101));
})())){
return (new shadow.dom.Size(self__.w,G__19062,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19062),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19062){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19062,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19068){
var extmap__4340__auto__ = (function (){var G__19105 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19068,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19068)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19105);
} else {
return G__19105;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19068),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19068),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19106 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19106);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__19630 = (i + (1));
var G__19631 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19630;
ret = G__19631;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19108){
var vec__19109 = p__19108;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19113 = arguments.length;
switch (G__19113) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19115_19643 = new_node;
var G__19116_19644 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19115_19643,G__19116_19644);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19117_19647 = new_node;
var G__19118_19648 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19117_19647,G__19118_19648);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19650 = ps;
var G__19651 = (i + (1));
el__$1 = G__19650;
i = G__19651;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19119 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19119);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__19124 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19124);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19126 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19126);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19131 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19135_19655 = cljs.core.seq(props);
var chunk__19136_19656 = null;
var count__19137_19657 = (0);
var i__19138_19658 = (0);
while(true){
if((i__19138_19658 < count__19137_19657)){
var vec__19140_19659 = chunk__19136_19656.cljs$core$IIndexed$_nth$arity$2(null,i__19138_19658);
var k_19660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140_19659,(0),null);
var v_19661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140_19659,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19660);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19660),v_19661);


var G__19663 = seq__19135_19655;
var G__19664 = chunk__19136_19656;
var G__19665 = count__19137_19657;
var G__19666 = (i__19138_19658 + (1));
seq__19135_19655 = G__19663;
chunk__19136_19656 = G__19664;
count__19137_19657 = G__19665;
i__19138_19658 = G__19666;
continue;
} else {
var temp__5457__auto___19667 = cljs.core.seq(seq__19135_19655);
if(temp__5457__auto___19667){
var seq__19135_19668__$1 = temp__5457__auto___19667;
if(cljs.core.chunked_seq_QMARK_(seq__19135_19668__$1)){
var c__4461__auto___19669 = cljs.core.chunk_first(seq__19135_19668__$1);
var G__19670 = cljs.core.chunk_rest(seq__19135_19668__$1);
var G__19671 = c__4461__auto___19669;
var G__19672 = cljs.core.count(c__4461__auto___19669);
var G__19673 = (0);
seq__19135_19655 = G__19670;
chunk__19136_19656 = G__19671;
count__19137_19657 = G__19672;
i__19138_19658 = G__19673;
continue;
} else {
var vec__19145_19674 = cljs.core.first(seq__19135_19668__$1);
var k_19675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19145_19674,(0),null);
var v_19676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19145_19674,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19675);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19675),v_19676);


var G__19677 = cljs.core.next(seq__19135_19668__$1);
var G__19678 = null;
var G__19679 = (0);
var G__19680 = (0);
seq__19135_19655 = G__19677;
chunk__19136_19656 = G__19678;
count__19137_19657 = G__19679;
i__19138_19658 = G__19680;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19152 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152,(1),null);
var seq__19156_19688 = cljs.core.seq(node_children);
var chunk__19158_19689 = null;
var count__19159_19690 = (0);
var i__19160_19691 = (0);
while(true){
if((i__19160_19691 < count__19159_19690)){
var child_struct_19692 = chunk__19158_19689.cljs$core$IIndexed$_nth$arity$2(null,i__19160_19691);
if((!((child_struct_19692 == null)))){
if(typeof child_struct_19692 === 'string'){
var text_19693 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19693),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19692)].join(''));
} else {
var children_19694 = shadow.dom.svg_node(child_struct_19692);
if(cljs.core.seq_QMARK_(children_19694)){
var seq__19163_19695 = cljs.core.seq(children_19694);
var chunk__19165_19696 = null;
var count__19166_19697 = (0);
var i__19167_19698 = (0);
while(true){
if((i__19167_19698 < count__19166_19697)){
var child_19699 = chunk__19165_19696.cljs$core$IIndexed$_nth$arity$2(null,i__19167_19698);
if(cljs.core.truth_(child_19699)){
node.appendChild(child_19699);


var G__19700 = seq__19163_19695;
var G__19701 = chunk__19165_19696;
var G__19702 = count__19166_19697;
var G__19703 = (i__19167_19698 + (1));
seq__19163_19695 = G__19700;
chunk__19165_19696 = G__19701;
count__19166_19697 = G__19702;
i__19167_19698 = G__19703;
continue;
} else {
var G__19704 = seq__19163_19695;
var G__19705 = chunk__19165_19696;
var G__19706 = count__19166_19697;
var G__19707 = (i__19167_19698 + (1));
seq__19163_19695 = G__19704;
chunk__19165_19696 = G__19705;
count__19166_19697 = G__19706;
i__19167_19698 = G__19707;
continue;
}
} else {
var temp__5457__auto___19708 = cljs.core.seq(seq__19163_19695);
if(temp__5457__auto___19708){
var seq__19163_19709__$1 = temp__5457__auto___19708;
if(cljs.core.chunked_seq_QMARK_(seq__19163_19709__$1)){
var c__4461__auto___19710 = cljs.core.chunk_first(seq__19163_19709__$1);
var G__19711 = cljs.core.chunk_rest(seq__19163_19709__$1);
var G__19712 = c__4461__auto___19710;
var G__19713 = cljs.core.count(c__4461__auto___19710);
var G__19714 = (0);
seq__19163_19695 = G__19711;
chunk__19165_19696 = G__19712;
count__19166_19697 = G__19713;
i__19167_19698 = G__19714;
continue;
} else {
var child_19715 = cljs.core.first(seq__19163_19709__$1);
if(cljs.core.truth_(child_19715)){
node.appendChild(child_19715);


var G__19716 = cljs.core.next(seq__19163_19709__$1);
var G__19717 = null;
var G__19718 = (0);
var G__19719 = (0);
seq__19163_19695 = G__19716;
chunk__19165_19696 = G__19717;
count__19166_19697 = G__19718;
i__19167_19698 = G__19719;
continue;
} else {
var G__19720 = cljs.core.next(seq__19163_19709__$1);
var G__19721 = null;
var G__19722 = (0);
var G__19723 = (0);
seq__19163_19695 = G__19720;
chunk__19165_19696 = G__19721;
count__19166_19697 = G__19722;
i__19167_19698 = G__19723;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19694);
}
}


var G__19724 = seq__19156_19688;
var G__19725 = chunk__19158_19689;
var G__19726 = count__19159_19690;
var G__19727 = (i__19160_19691 + (1));
seq__19156_19688 = G__19724;
chunk__19158_19689 = G__19725;
count__19159_19690 = G__19726;
i__19160_19691 = G__19727;
continue;
} else {
var G__19728 = seq__19156_19688;
var G__19729 = chunk__19158_19689;
var G__19730 = count__19159_19690;
var G__19731 = (i__19160_19691 + (1));
seq__19156_19688 = G__19728;
chunk__19158_19689 = G__19729;
count__19159_19690 = G__19730;
i__19160_19691 = G__19731;
continue;
}
} else {
var temp__5457__auto___19732 = cljs.core.seq(seq__19156_19688);
if(temp__5457__auto___19732){
var seq__19156_19733__$1 = temp__5457__auto___19732;
if(cljs.core.chunked_seq_QMARK_(seq__19156_19733__$1)){
var c__4461__auto___19734 = cljs.core.chunk_first(seq__19156_19733__$1);
var G__19735 = cljs.core.chunk_rest(seq__19156_19733__$1);
var G__19736 = c__4461__auto___19734;
var G__19737 = cljs.core.count(c__4461__auto___19734);
var G__19738 = (0);
seq__19156_19688 = G__19735;
chunk__19158_19689 = G__19736;
count__19159_19690 = G__19737;
i__19160_19691 = G__19738;
continue;
} else {
var child_struct_19739 = cljs.core.first(seq__19156_19733__$1);
if((!((child_struct_19739 == null)))){
if(typeof child_struct_19739 === 'string'){
var text_19740 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19740),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19739)].join(''));
} else {
var children_19742 = shadow.dom.svg_node(child_struct_19739);
if(cljs.core.seq_QMARK_(children_19742)){
var seq__19173_19743 = cljs.core.seq(children_19742);
var chunk__19175_19744 = null;
var count__19176_19745 = (0);
var i__19177_19746 = (0);
while(true){
if((i__19177_19746 < count__19176_19745)){
var child_19747 = chunk__19175_19744.cljs$core$IIndexed$_nth$arity$2(null,i__19177_19746);
if(cljs.core.truth_(child_19747)){
node.appendChild(child_19747);


var G__19748 = seq__19173_19743;
var G__19749 = chunk__19175_19744;
var G__19750 = count__19176_19745;
var G__19751 = (i__19177_19746 + (1));
seq__19173_19743 = G__19748;
chunk__19175_19744 = G__19749;
count__19176_19745 = G__19750;
i__19177_19746 = G__19751;
continue;
} else {
var G__19752 = seq__19173_19743;
var G__19753 = chunk__19175_19744;
var G__19754 = count__19176_19745;
var G__19755 = (i__19177_19746 + (1));
seq__19173_19743 = G__19752;
chunk__19175_19744 = G__19753;
count__19176_19745 = G__19754;
i__19177_19746 = G__19755;
continue;
}
} else {
var temp__5457__auto___19756__$1 = cljs.core.seq(seq__19173_19743);
if(temp__5457__auto___19756__$1){
var seq__19173_19757__$1 = temp__5457__auto___19756__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19173_19757__$1)){
var c__4461__auto___19759 = cljs.core.chunk_first(seq__19173_19757__$1);
var G__19760 = cljs.core.chunk_rest(seq__19173_19757__$1);
var G__19761 = c__4461__auto___19759;
var G__19762 = cljs.core.count(c__4461__auto___19759);
var G__19763 = (0);
seq__19173_19743 = G__19760;
chunk__19175_19744 = G__19761;
count__19176_19745 = G__19762;
i__19177_19746 = G__19763;
continue;
} else {
var child_19764 = cljs.core.first(seq__19173_19757__$1);
if(cljs.core.truth_(child_19764)){
node.appendChild(child_19764);


var G__19765 = cljs.core.next(seq__19173_19757__$1);
var G__19766 = null;
var G__19767 = (0);
var G__19768 = (0);
seq__19173_19743 = G__19765;
chunk__19175_19744 = G__19766;
count__19176_19745 = G__19767;
i__19177_19746 = G__19768;
continue;
} else {
var G__19769 = cljs.core.next(seq__19173_19757__$1);
var G__19770 = null;
var G__19771 = (0);
var G__19772 = (0);
seq__19173_19743 = G__19769;
chunk__19175_19744 = G__19770;
count__19176_19745 = G__19771;
i__19177_19746 = G__19772;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19742);
}
}


var G__19773 = cljs.core.next(seq__19156_19733__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__19156_19688 = G__19773;
chunk__19158_19689 = G__19774;
count__19159_19690 = G__19775;
i__19160_19691 = G__19776;
continue;
} else {
var G__19777 = cljs.core.next(seq__19156_19733__$1);
var G__19778 = null;
var G__19779 = (0);
var G__19780 = (0);
seq__19156_19688 = G__19777;
chunk__19158_19689 = G__19778;
count__19159_19690 = G__19779;
i__19160_19691 = G__19780;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__19181_19781 = shadow.dom._to_svg;
var G__19182_19782 = "string";
var G__19183_19783 = ((function (G__19181_19781,G__19182_19782){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19181_19781,G__19182_19782))
;
goog.object.set(G__19181_19781,G__19182_19782,G__19183_19783);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__19185_19784 = shadow.dom._to_svg;
var G__19186_19785 = "null";
var G__19187_19786 = ((function (G__19185_19784,G__19186_19785){
return (function (_){
return null;
});})(G__19185_19784,G__19186_19785))
;
goog.object.set(G__19185_19784,G__19186_19785,G__19187_19786);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19787 = arguments.length;
var i__4642__auto___19788 = (0);
while(true){
if((i__4642__auto___19788 < len__4641__auto___19787)){
args__4647__auto__.push((arguments[i__4642__auto___19788]));

var G__19789 = (i__4642__auto___19788 + (1));
i__4642__auto___19788 = G__19789;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19190){
var G__19191 = cljs.core.first(seq19190);
var seq19190__$1 = cljs.core.next(seq19190);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19191,seq19190__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19197 = arguments.length;
switch (G__19197) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__19199_19791 = shadow.dom.dom_node(el);
var G__19200_19792 = cljs.core.name(event);
var G__19201_19793 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19199_19791,G__19200_19792,G__19201_19793) : shadow.dom.dom_listen.call(null,G__19199_19791,G__19200_19792,G__19201_19793));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__16191__auto___19794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19794,buf,chan,event_fn){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19794,buf,chan,event_fn){
return (function (state_19207){
var state_val_19208 = (state_19207[(1)]);
if((state_val_19208 === (1))){
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19207__$1,(2),once_or_cleanup);
} else {
if((state_val_19208 === (2))){
var inst_19204 = (state_19207[(2)]);
var inst_19205 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19207__$1 = (function (){var statearr_19210 = state_19207;
(statearr_19210[(7)] = inst_19204);

return statearr_19210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19207__$1,inst_19205);
} else {
return null;
}
}
});})(c__16191__auto___19794,buf,chan,event_fn))
;
return ((function (switch__15927__auto__,c__16191__auto___19794,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__15928__auto__ = null;
var shadow$dom$state_machine__15928__auto____0 = (function (){
var statearr_19211 = [null,null,null,null,null,null,null,null];
(statearr_19211[(0)] = shadow$dom$state_machine__15928__auto__);

(statearr_19211[(1)] = (1));

return statearr_19211;
});
var shadow$dom$state_machine__15928__auto____1 = (function (state_19207){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_19207);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e19212){if((e19212 instanceof Object)){
var ex__15931__auto__ = e19212;
var statearr_19213_19801 = state_19207;
(statearr_19213_19801[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19802 = state_19207;
state_19207 = G__19802;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
shadow$dom$state_machine__15928__auto__ = function(state_19207){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15928__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15928__auto____1.call(this,state_19207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15928__auto____0;
shadow$dom$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15928__auto____1;
return shadow$dom$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19794,buf,chan,event_fn))
})();
var state__16193__auto__ = (function (){var statearr_19214 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_19214[(6)] = c__16191__auto___19794);

return statearr_19214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19794,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
