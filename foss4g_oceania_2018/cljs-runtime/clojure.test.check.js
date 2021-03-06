goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial(property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__4036__auto__ = value;
if(cljs.core.truth_(and__4036__auto__)){
return (!(clojure.test.check.impl.exception_like_QMARK_(value)));
} else {
return and__4036__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11350 = arguments.length;
var i__4642__auto___11351 = (0);
while(true){
if((i__4642__auto___11351 < len__4641__auto___11350)){
args__4647__auto__.push((arguments[i__4642__auto___11351]));

var G__11352 = (i__4642__auto___11351 + (1));
i__4642__auto___11351 = G__11352;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__11332){
var map__11333 = p__11332;
var map__11333__$1 = (((((!((map__11333 == null))))?(((((map__11333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11333):map__11333);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11333__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11333__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var vec__11335 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11335,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11335,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed);
} else {
var vec__11338 = size_seq__$1;
var seq__11339 = cljs.core.seq(vec__11338);
var first__11340 = cljs.core.first(seq__11339);
var seq__11339__$1 = cljs.core.next(seq__11339);
var size = first__11340;
var rest_size_seq = seq__11339__$1;
var vec__11341 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
clojure.test.check.clojure_test.report_trial(property,so_far,num_tests);

var G__11364 = (so_far + (1));
var G__11365 = rest_size_seq;
var G__11366 = r2;
so_far = G__11364;
size_seq__$1 = G__11365;
rstate = G__11366;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5(property,result_map_rose,so_far,size,created_seed) : clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed));
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq11329){
var G__11330 = cljs.core.first(seq11329);
var seq11329__$1 = cljs.core.next(seq11329);
var G__11331 = cljs.core.first(seq11329__$1);
var seq11329__$2 = cljs.core.next(seq11329__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11330,G__11331,seq11329__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(smallest),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest);
} else {
var vec__11347 = nodes;
var seq__11348 = cljs.core.seq(vec__11347);
var first__11349 = cljs.core.first(seq__11348);
var seq__11348__$1 = cljs.core.next(seq__11348);
var head = first__11349;
var tail = seq__11348__$1;
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
var G__11372 = tail;
var G__11373 = current_smallest;
var G__11374 = (total_nodes_visited + (1));
var G__11375 = depth;
nodes = G__11372;
current_smallest = G__11373;
total_nodes_visited = G__11374;
depth = G__11375;
continue;
} else {
var temp__5455__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5455__auto__){
var children = temp__5455__auto__;
var G__11376 = children;
var G__11377 = clojure.test.check.rose_tree.root(head);
var G__11378 = (total_nodes_visited + (1));
var G__11379 = (depth + (1));
nodes = G__11376;
current_smallest = G__11377;
total_nodes_visited = G__11378;
depth = G__11379;
continue;
} else {
var G__11380 = tail;
var G__11381 = clojure.test.check.rose_tree.root(head);
var G__11382 = (total_nodes_visited + (1));
var G__11383 = depth;
nodes = G__11380;
current_smallest = G__11381;
total_nodes_visited = G__11382;
depth = G__11383;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure(property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),size,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(trial_number + (1)),new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.vec(failing_args),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),clojure.test.check.shrink_loop(failing_rose_tree)], null);
});

//# sourceMappingURL=clojure.test.check.js.map
