goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16361){
var vec__16362 = p__16361;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16362,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__16365 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16375 = arguments.length;
switch (G__16375) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16388_16496 = clojure.data.equality_partition;
var G__16389_16497 = "null";
var G__16390_16498 = ((function (G__16388_16496,G__16389_16497){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16388_16496,G__16389_16497))
;
goog.object.set(G__16388_16496,G__16389_16497,G__16390_16498);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16394_16501 = clojure.data.equality_partition;
var G__16395_16502 = "string";
var G__16396_16503 = ((function (G__16394_16501,G__16395_16502){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16394_16501,G__16395_16502))
;
goog.object.set(G__16394_16501,G__16395_16502,G__16396_16503);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16399_16504 = clojure.data.equality_partition;
var G__16400_16505 = "number";
var G__16401_16506 = ((function (G__16399_16504,G__16400_16505){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16399_16504,G__16400_16505))
;
goog.object.set(G__16399_16504,G__16400_16505,G__16401_16506);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16402_16507 = clojure.data.equality_partition;
var G__16403_16508 = "array";
var G__16404_16509 = ((function (G__16402_16507,G__16403_16508){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__16402_16507,G__16403_16508))
;
goog.object.set(G__16402_16507,G__16403_16508,G__16404_16509);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16406_16510 = clojure.data.equality_partition;
var G__16407_16511 = "function";
var G__16408_16512 = ((function (G__16406_16510,G__16407_16511){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16406_16510,G__16407_16511))
;
goog.object.set(G__16406_16510,G__16407_16511,G__16408_16512);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16410_16513 = clojure.data.equality_partition;
var G__16411_16514 = "boolean";
var G__16412_16515 = ((function (G__16410_16513,G__16411_16514){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16410_16513,G__16411_16514))
;
goog.object.set(G__16410_16513,G__16411_16514,G__16412_16515);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16413_16517 = clojure.data.equality_partition;
var G__16414_16518 = "_";
var G__16415_16519 = ((function (G__16413_16517,G__16414_16518){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__16413_16517,G__16414_16518))
;
goog.object.set(G__16413_16517,G__16414_16518,G__16415_16519);
goog.object.set(clojure.data.Diff,"null",true);

var G__16424_16522 = clojure.data.diff_similar;
var G__16425_16523 = "null";
var G__16426_16524 = ((function (G__16424_16522,G__16425_16523){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16424_16522,G__16425_16523))
;
goog.object.set(G__16424_16522,G__16425_16523,G__16426_16524);

goog.object.set(clojure.data.Diff,"string",true);

var G__16429_16525 = clojure.data.diff_similar;
var G__16430_16526 = "string";
var G__16431_16527 = ((function (G__16429_16525,G__16430_16526){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16429_16525,G__16430_16526))
;
goog.object.set(G__16429_16525,G__16430_16526,G__16431_16527);

goog.object.set(clojure.data.Diff,"number",true);

var G__16432_16530 = clojure.data.diff_similar;
var G__16433_16531 = "number";
var G__16434_16532 = ((function (G__16432_16530,G__16433_16531){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16432_16530,G__16433_16531))
;
goog.object.set(G__16432_16530,G__16433_16531,G__16434_16532);

goog.object.set(clojure.data.Diff,"array",true);

var G__16435_16533 = clojure.data.diff_similar;
var G__16436_16534 = "array";
var G__16437_16535 = ((function (G__16435_16533,G__16436_16534){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16435_16533,G__16436_16534))
;
goog.object.set(G__16435_16533,G__16436_16534,G__16437_16535);

goog.object.set(clojure.data.Diff,"function",true);

var G__16444_16538 = clojure.data.diff_similar;
var G__16445_16539 = "function";
var G__16446_16540 = ((function (G__16444_16538,G__16445_16539){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16444_16538,G__16445_16539))
;
goog.object.set(G__16444_16538,G__16445_16539,G__16446_16540);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16449_16541 = clojure.data.diff_similar;
var G__16450_16542 = "boolean";
var G__16451_16543 = ((function (G__16449_16541,G__16450_16542){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16449_16541,G__16450_16542))
;
goog.object.set(G__16449_16541,G__16450_16542,G__16451_16543);

goog.object.set(clojure.data.Diff,"_",true);

var G__16455_16549 = clojure.data.diff_similar;
var G__16456_16550 = "_";
var G__16457_16551 = ((function (G__16455_16549,G__16456_16550){
return (function (a,b){
var fexpr__16459 = (function (){var G__16468 = clojure.data.equality_partition(a);
var G__16468__$1 = (((G__16468 instanceof cljs.core.Keyword))?G__16468.fqn:null);
switch (G__16468__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16468__$1)].join('')));

}
})();
return (fexpr__16459.cljs$core$IFn$_invoke$arity$2 ? fexpr__16459.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16459.call(null,a,b));
});})(G__16455_16549,G__16456_16550))
;
goog.object.set(G__16455_16549,G__16456_16550,G__16457_16551);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
