goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13428){
var map__13429 = p__13428;
var map__13429__$1 = (((((!((map__13429 == null))))?(((((map__13429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13429):map__13429);
var m = map__13429__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13429__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13434_13501 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13435_13502 = null;
var count__13436_13503 = (0);
var i__13437_13504 = (0);
while(true){
if((i__13437_13504 < count__13436_13503)){
var f_13507 = chunk__13435_13502.cljs$core$IIndexed$_nth$arity$2(null,i__13437_13504);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13507], 0));


var G__13511 = seq__13434_13501;
var G__13512 = chunk__13435_13502;
var G__13513 = count__13436_13503;
var G__13514 = (i__13437_13504 + (1));
seq__13434_13501 = G__13511;
chunk__13435_13502 = G__13512;
count__13436_13503 = G__13513;
i__13437_13504 = G__13514;
continue;
} else {
var temp__5457__auto___13515 = cljs.core.seq(seq__13434_13501);
if(temp__5457__auto___13515){
var seq__13434_13516__$1 = temp__5457__auto___13515;
if(cljs.core.chunked_seq_QMARK_(seq__13434_13516__$1)){
var c__4461__auto___13517 = cljs.core.chunk_first(seq__13434_13516__$1);
var G__13518 = cljs.core.chunk_rest(seq__13434_13516__$1);
var G__13519 = c__4461__auto___13517;
var G__13520 = cljs.core.count(c__4461__auto___13517);
var G__13521 = (0);
seq__13434_13501 = G__13518;
chunk__13435_13502 = G__13519;
count__13436_13503 = G__13520;
i__13437_13504 = G__13521;
continue;
} else {
var f_13522 = cljs.core.first(seq__13434_13516__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13522], 0));


var G__13523 = cljs.core.next(seq__13434_13516__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13434_13501 = G__13523;
chunk__13435_13502 = G__13524;
count__13436_13503 = G__13525;
i__13437_13504 = G__13526;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13530 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_13530], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_13530)))?cljs.core.second(arglists_13530):arglists_13530)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13447_13531 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13448_13532 = null;
var count__13449_13533 = (0);
var i__13450_13534 = (0);
while(true){
if((i__13450_13534 < count__13449_13533)){
var vec__13457_13535 = chunk__13448_13532.cljs$core$IIndexed$_nth$arity$2(null,i__13450_13534);
var name_13536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13457_13535,(0),null);
var map__13460_13537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13457_13535,(1),null);
var map__13460_13538__$1 = (((((!((map__13460_13537 == null))))?(((((map__13460_13537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13460_13537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13460_13537):map__13460_13537);
var doc_13539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460_13538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460_13538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13540], 0));

if(cljs.core.truth_(doc_13539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13539], 0));
} else {
}


var G__13547 = seq__13447_13531;
var G__13548 = chunk__13448_13532;
var G__13549 = count__13449_13533;
var G__13550 = (i__13450_13534 + (1));
seq__13447_13531 = G__13547;
chunk__13448_13532 = G__13548;
count__13449_13533 = G__13549;
i__13450_13534 = G__13550;
continue;
} else {
var temp__5457__auto___13551 = cljs.core.seq(seq__13447_13531);
if(temp__5457__auto___13551){
var seq__13447_13552__$1 = temp__5457__auto___13551;
if(cljs.core.chunked_seq_QMARK_(seq__13447_13552__$1)){
var c__4461__auto___13553 = cljs.core.chunk_first(seq__13447_13552__$1);
var G__13554 = cljs.core.chunk_rest(seq__13447_13552__$1);
var G__13555 = c__4461__auto___13553;
var G__13556 = cljs.core.count(c__4461__auto___13553);
var G__13557 = (0);
seq__13447_13531 = G__13554;
chunk__13448_13532 = G__13555;
count__13449_13533 = G__13556;
i__13450_13534 = G__13557;
continue;
} else {
var vec__13466_13558 = cljs.core.first(seq__13447_13552__$1);
var name_13559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13466_13558,(0),null);
var map__13469_13560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13466_13558,(1),null);
var map__13469_13561__$1 = (((((!((map__13469_13560 == null))))?(((((map__13469_13560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13469_13560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13469_13560):map__13469_13560);
var doc_13562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13469_13561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13469_13561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13559], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13563], 0));

if(cljs.core.truth_(doc_13562)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13562], 0));
} else {
}


var G__13564 = cljs.core.next(seq__13447_13552__$1);
var G__13565 = null;
var G__13566 = (0);
var G__13567 = (0);
seq__13447_13531 = G__13564;
chunk__13448_13532 = G__13565;
count__13449_13533 = G__13566;
i__13450_13534 = G__13567;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__13475 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13476 = null;
var count__13477 = (0);
var i__13478 = (0);
while(true){
if((i__13478 < count__13477)){
var role = chunk__13476.cljs$core$IIndexed$_nth$arity$2(null,i__13478);
var temp__5457__auto___13568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13568__$1)){
var spec_13569 = temp__5457__auto___13568__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_13569)], 0));
} else {
}


var G__13570 = seq__13475;
var G__13571 = chunk__13476;
var G__13572 = count__13477;
var G__13573 = (i__13478 + (1));
seq__13475 = G__13570;
chunk__13476 = G__13571;
count__13477 = G__13572;
i__13478 = G__13573;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__13475);
if(temp__5457__auto____$1){
var seq__13475__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13475__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__13475__$1);
var G__13578 = cljs.core.chunk_rest(seq__13475__$1);
var G__13579 = c__4461__auto__;
var G__13580 = cljs.core.count(c__4461__auto__);
var G__13581 = (0);
seq__13475 = G__13578;
chunk__13476 = G__13579;
count__13477 = G__13580;
i__13478 = G__13581;
continue;
} else {
var role = cljs.core.first(seq__13475__$1);
var temp__5457__auto___13586__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13586__$2)){
var spec_13587 = temp__5457__auto___13586__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_13587)], 0));
} else {
}


var G__13588 = cljs.core.next(seq__13475__$1);
var G__13589 = null;
var G__13590 = (0);
var G__13591 = (0);
seq__13475 = G__13588;
chunk__13476 = G__13589;
count__13477 = G__13590;
i__13478 = G__13591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
