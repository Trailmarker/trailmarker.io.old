goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__,req){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__,req){
return (function (state_20380){
var state_val_20381 = (state_20380[(1)]);
if((state_val_20381 === (7))){
var state_20380__$1 = state_20380;
var statearr_20382_20508 = state_20380__$1;
(statearr_20382_20508[(2)] = false);

(statearr_20382_20508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (1))){
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20380__$1,(2),req);
} else {
if((state_val_20381 === (4))){
var inst_20344 = (state_20380[(7)]);
var inst_20350 = (inst_20344 == null);
var inst_20351 = cljs.core.not(inst_20350);
var state_20380__$1 = state_20380;
if(inst_20351){
var statearr_20383_20509 = state_20380__$1;
(statearr_20383_20509[(1)] = (6));

} else {
var statearr_20384_20510 = state_20380__$1;
(statearr_20384_20510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (15))){
var state_20380__$1 = state_20380;
var statearr_20389_20511 = state_20380__$1;
(statearr_20389_20511[(2)] = null);

(statearr_20389_20511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (13))){
var inst_20344 = (state_20380[(7)]);
var state_20380__$1 = state_20380;
var statearr_20390_20512 = state_20380__$1;
(statearr_20390_20512[(2)] = inst_20344);

(statearr_20390_20512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (6))){
var inst_20344 = (state_20380[(7)]);
var inst_20353 = inst_20344.cljs$lang$protocol_mask$partition0$;
var inst_20354 = (inst_20353 & (64));
var inst_20355 = inst_20344.cljs$core$ISeq$;
var inst_20356 = (cljs.core.PROTOCOL_SENTINEL === inst_20355);
var inst_20357 = ((inst_20354) || (inst_20356));
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20357)){
var statearr_20392_20513 = state_20380__$1;
(statearr_20392_20513[(1)] = (9));

} else {
var statearr_20398_20514 = state_20380__$1;
(statearr_20398_20514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (17))){
var inst_20376 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20399_20515 = state_20380__$1;
(statearr_20399_20515[(2)] = inst_20376);

(statearr_20399_20515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (3))){
var state_20380__$1 = state_20380;
var statearr_20401_20516 = state_20380__$1;
(statearr_20401_20516[(2)] = null);

(statearr_20401_20516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (12))){
var inst_20344 = (state_20380[(7)]);
var inst_20366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20344);
var state_20380__$1 = state_20380;
var statearr_20406_20517 = state_20380__$1;
(statearr_20406_20517[(2)] = inst_20366);

(statearr_20406_20517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (2))){
var inst_20344 = (state_20380[(7)]);
var inst_20344__$1 = (state_20380[(2)]);
var inst_20345 = (inst_20344__$1 == null);
var state_20380__$1 = (function (){var statearr_20407 = state_20380;
(statearr_20407[(7)] = inst_20344__$1);

return statearr_20407;
})();
if(cljs.core.truth_(inst_20345)){
var statearr_20408_20518 = state_20380__$1;
(statearr_20408_20518[(1)] = (3));

} else {
var statearr_20410_20519 = state_20380__$1;
(statearr_20410_20519[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (11))){
var inst_20361 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20411_20520 = state_20380__$1;
(statearr_20411_20520[(2)] = inst_20361);

(statearr_20411_20520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (9))){
var state_20380__$1 = state_20380;
var statearr_20412_20521 = state_20380__$1;
(statearr_20412_20521[(2)] = true);

(statearr_20412_20521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (5))){
var inst_20378 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20380__$1,inst_20378);
} else {
if((state_val_20381 === (14))){
var inst_20369 = (state_20380[(8)]);
var inst_20369__$1 = (state_20380[(2)]);
var inst_20370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20369__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_20371 = (inst_20370 === (0));
var state_20380__$1 = (function (){var statearr_20413 = state_20380;
(statearr_20413[(8)] = inst_20369__$1);

return statearr_20413;
})();
if(cljs.core.truth_(inst_20371)){
var statearr_20414_20522 = state_20380__$1;
(statearr_20414_20522[(1)] = (15));

} else {
var statearr_20416_20523 = state_20380__$1;
(statearr_20416_20523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (16))){
var inst_20369 = (state_20380[(8)]);
var inst_20374 = console.warn("file open failed",inst_20369);
var state_20380__$1 = state_20380;
var statearr_20417_20524 = state_20380__$1;
(statearr_20417_20524[(2)] = inst_20374);

(statearr_20417_20524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (10))){
var state_20380__$1 = state_20380;
var statearr_20418_20525 = state_20380__$1;
(statearr_20418_20525[(2)] = false);

(statearr_20418_20525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (8))){
var inst_20364 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20364)){
var statearr_20419_20526 = state_20380__$1;
(statearr_20419_20526[(1)] = (12));

} else {
var statearr_20420_20527 = state_20380__$1;
(statearr_20420_20527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16191__auto__,req))
;
return ((function (switch__15927__auto__,c__16191__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____0 = (function (){
var statearr_20421 = [null,null,null,null,null,null,null,null,null];
(statearr_20421[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__);

(statearr_20421[(1)] = (1));

return statearr_20421;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____1 = (function (state_20380){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_20380);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e20422){if((e20422 instanceof Object)){
var ex__15931__auto__ = e20422;
var statearr_20423_20528 = state_20380;
(statearr_20423_20528[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20529 = state_20380;
state_20380 = G__20529;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__ = function(state_20380){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____1.call(this,state_20380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__,req))
})();
var state__16193__auto__ = (function (){var statearr_20424 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_20424[(6)] = c__16191__auto__);

return statearr_20424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__,req))
);

return c__16191__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__20426 = arguments.length;
switch (G__20426) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___20531 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___20531 == null)){
} else {
var x_20532 = temp__5461__auto___20531;
shadow.dom.remove(x_20532);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__,el,container_el,temp__5461__auto__){
return (function (state_20441){
var state_val_20442 = (state_20441[(1)]);
if((state_val_20442 === (1))){
var inst_20428 = cljs.core.async.timeout((250));
var state_20441__$1 = state_20441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20441__$1,(2),inst_20428);
} else {
if((state_val_20442 === (2))){
var inst_20430 = (state_20441[(2)]);
var inst_20431 = [el];
var inst_20432 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_20433 = [inst_20432];
var inst_20434 = cljs.core.PersistentHashMap.fromArrays(inst_20431,inst_20433);
var inst_20435 = shadow.animate.start((250),inst_20434);
var state_20441__$1 = (function (){var statearr_20445 = state_20441;
(statearr_20445[(7)] = inst_20430);

return statearr_20445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20441__$1,(3),inst_20435);
} else {
if((state_val_20442 === (3))){
var inst_20438 = (state_20441[(2)]);
var inst_20439 = shadow.dom.remove(container_el);
var state_20441__$1 = (function (){var statearr_20446 = state_20441;
(statearr_20446[(8)] = inst_20438);

return statearr_20446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20441__$1,inst_20439);
} else {
return null;
}
}
}
});})(c__16191__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__15927__auto__,c__16191__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____0 = (function (){
var statearr_20447 = [null,null,null,null,null,null,null,null,null];
(statearr_20447[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__);

(statearr_20447[(1)] = (1));

return statearr_20447;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____1 = (function (state_20441){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_20441);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e20448){if((e20448 instanceof Object)){
var ex__15931__auto__ = e20448;
var statearr_20449_20535 = state_20441;
(statearr_20449_20535[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20536 = state_20441;
state_20441 = G__20536;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__ = function(state_20441){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____1.call(this,state_20441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__,el,container_el,temp__5461__auto__))
})();
var state__16193__auto__ = (function (){var statearr_20450 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_20450[(6)] = c__16191__auto__);

return statearr_20450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__,el,container_el,temp__5461__auto__))
);

return c__16191__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4434__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__20451(s__20452){
return (new cljs.core.LazySeq(null,(function (){
var s__20452__$1 = s__20452;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20452__$1);
if(temp__5457__auto__){
var s__20452__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20452__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__20452__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__20454 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__20453 = (0);
while(true){
if((i__20453 < size__4433__auto__)){
var vec__20455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__20453);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(1),null);
cljs.core.chunk_append(b__20454,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__20459 = "%4d | %s";
var G__20460 = (((1) + idx) + start_idx);
var G__20461 = text;
return goog.string.format(G__20459,G__20460,G__20461);
})()], null));

var G__20540 = (i__20453 + (1));
i__20453 = G__20540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20454),shadow$cljs$devtools$client$hud$source_line_html_$_iter__20451(cljs.core.chunk_rest(s__20452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20454),null);
}
} else {
var vec__20462 = cljs.core.first(s__20452__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__20465 = "%4d | %s";
var G__20466 = (((1) + idx) + start_idx);
var G__20467 = text;
return goog.string.format(G__20465,G__20466,G__20467);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__20451(cljs.core.rest(s__20452__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__20469 = arguments.length;
switch (G__20469) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__20470){
var map__20471 = p__20470;
var map__20471__$1 = (((((!((map__20471 == null))))?(((((map__20471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20471):map__20471);
var warning = map__20471__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20471__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__20471,map__20471__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__20471,map__20471__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__20482){
var map__20483 = p__20482;
var map__20483__$1 = (((((!((map__20483 == null))))?(((((map__20483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20483):map__20483);
var warning = map__20483__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__20485 = source_excerpt;
var map__20485__$1 = (((((!((map__20485 == null))))?(((((map__20485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20485):map__20485);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20485__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4047__auto__ = column;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__20488){
var map__20489 = p__20488;
var map__20489__$1 = (((((!((map__20489 == null))))?(((((map__20489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20489):map__20489);
var msg = map__20489__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20489__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__20491 = info;
var map__20491__$1 = (((((!((map__20491 == null))))?(((((map__20491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20491):map__20491);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20491__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20491,map__20491__$1,sources,map__20489,map__20489__$1,msg,type,info){
return (function (p1__20487_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__20487_SHARP_));
});})(map__20491,map__20491__$1,sources,map__20489,map__20489__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4434__auto__ = ((function (map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__20494(s__20495){
return (new cljs.core.LazySeq(null,((function (map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info){
return (function (){
var s__20495__$1 = s__20495;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20495__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20501 = cljs.core.first(xs__6012__auto__);
var map__20501__$1 = (((((!((map__20501 == null))))?(((((map__20501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20501):map__20501);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20501__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4430__auto__ = ((function (s__20495__$1,map__20501,map__20501__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__20494_$_iter__20496(s__20497){
return (new cljs.core.LazySeq(null,((function (s__20495__$1,map__20501,map__20501__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info){
return (function (){
var s__20497__$1 = s__20497;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20497__$1);
if(temp__5457__auto____$1){
var s__20497__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20497__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__20497__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__20499 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__20498 = (0);
while(true){
if((i__20498 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__20498);
cljs.core.chunk_append(b__20499,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__20560 = (i__20498 + (1));
i__20498 = G__20560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20499),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__20494_$_iter__20496(cljs.core.chunk_rest(s__20497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20499),null);
}
} else {
var warning = cljs.core.first(s__20497__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__20494_$_iter__20496(cljs.core.rest(s__20497__$2)));
}
} else {
return null;
}
break;
}
});})(s__20495__$1,map__20501,map__20501__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info))
,null,null));
});})(s__20495__$1,map__20501,map__20501__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__20494(cljs.core.rest(s__20495__$1)));
} else {
var G__20562 = cljs.core.rest(s__20495__$1);
s__20495__$1 = G__20562;
continue;
}
} else {
return null;
}
break;
}
});})(map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info))
,null,null));
});})(map__20491,map__20491__$1,sources,sources_with_warnings,map__20489,map__20489__$1,msg,type,info))
;
return iter__4434__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__20504){
var map__20505 = p__20504;
var map__20505__$1 = (((((!((map__20505 == null))))?(((((map__20505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20505):map__20505);
var msg = map__20505__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20505__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
