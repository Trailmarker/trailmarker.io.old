goog.provide('io.trailmarker.foss4g_oceania_2018.geojson_spec_test');
goog.require('cljs.core');
goog.require('io.trailmarker.foss4g_oceania_2018.geojson_spec');
goog.require('cljs.test');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
/**
 * Generate a sequence of GeoJSON polygons.
 */
io.trailmarker.foss4g_oceania_2018.geojson_spec_test.sample_polygons = (function io$trailmarker$foss4g_oceania_2018$geojson_spec_test$sample_polygons(){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("io.trailmarker.foss4g-oceania-2018.geojson-spec","polygon","io.trailmarker.foss4g-oceania-2018.geojson-spec/polygon",1757748357))], 0));
});
io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons = (function io$trailmarker$foss4g_oceania_2018$geojson_spec_test$validate_sample_polygons(){
return cljs.test.test_var(io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons.cljs$lang$var);
});
io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons.cljs$lang$test = (function (){
var polys = io.trailmarker.foss4g_oceania_2018.geojson_spec_test.sample_polygons();
try{var values__8930__auto__ = (new cljs.core.List(null,((function (polys){
return (function (p1__18249_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("io.trailmarker.foss4g-oceania-2018.geojson-spec","polygon","io.trailmarker.foss4g-oceania-2018.geojson-spec/polygon",1757748357),p1__18249_SHARP_);
});})(polys))
,(new cljs.core.List(null,polys,null,(1),null)),(2),null));
var result__8931__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,values__8930__auto__);
if(cljs.core.truth_(result__8931__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null)], null),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("io.trailmarker.foss4g-oceania-2018.geojson-spec","polygon","io.trailmarker.foss4g-oceania-2018.geojson-spec/polygon",1757748357),new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null))),new cljs.core.Symbol(null,"polys","polys",-1586975814,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.every_QMARK_,values__8930__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null)], null),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("io.trailmarker.foss4g-oceania-2018.geojson-spec","polygon","io.trailmarker.foss4g-oceania-2018.geojson-spec/polygon",1757748357),new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null))),new cljs.core.Symbol(null,"polys","polys",-1586975814,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"every?","every?",2083724064,null),values__8930__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8931__auto__;
}catch (e18250){var t__8961__auto__ = e18250;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null)], null),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("io.trailmarker.foss4g-oceania-2018.geojson-spec","polygon","io.trailmarker.foss4g-oceania-2018.geojson-spec/polygon",1757748357),new cljs.core.Symbol(null,"p1__18249#","p1__18249#",1749881879,null))),new cljs.core.Symbol(null,"polys","polys",-1586975814,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8961__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

var the_var__9160__auto___18251 = new cljs.core.Var(function(){return io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons;},new cljs.core.Symbol("io.trailmarker.foss4g-oceania-2018.geojson-spec-test","validate-sample-polygons","io.trailmarker.foss4g-oceania-2018.geojson-spec-test/validate-sample-polygons",923416509,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"io.trailmarker.foss4g-oceania-2018.geojson-spec-test","io.trailmarker.foss4g-oceania-2018.geojson-spec-test",542861874,null),new cljs.core.Symbol(null,"validate-sample-polygons","validate-sample-polygons",-899610778,null),"io/trailmarker/foss4g_oceania_2018/geojson_spec_test.cljs",34,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons)?io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons.cljs$lang$test:null)]));
io.trailmarker.foss4g_oceania_2018.geojson_spec_test.validate_sample_polygons.cljs$lang$var = the_var__9160__auto___18251;

shadow.test.env.register_test(new cljs.core.Symbol(null,"io.trailmarker.foss4g-oceania-2018.geojson-spec-test","io.trailmarker.foss4g-oceania-2018.geojson-spec-test",542861874,null),new cljs.core.Symbol(null,"validate-sample-polygons","validate-sample-polygons",-899610778,null),the_var__9160__auto___18251);

//# sourceMappingURL=io.trailmarker.foss4g_oceania_2018.geojson_spec_test.js.map
