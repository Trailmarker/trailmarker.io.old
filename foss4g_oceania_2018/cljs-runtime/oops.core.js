goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__13189 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__13189)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__13189)){
var G__13191 = (console["error"]);
var G__13192 = msg;
var G__13193 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__13190 = oops.state.get_console_reporter();
return (fexpr__13190.cljs$core$IFn$_invoke$arity$3 ? fexpr__13190.cljs$core$IFn$_invoke$arity$3(G__13191,G__13192,G__13193) : fexpr__13190.call(null,G__13191,G__13192,G__13193));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__13189)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13189)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__13194 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__13194)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__13194)){
var G__13196 = (console["warn"]);
var G__13197 = msg;
var G__13198 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__13195 = oops.state.get_console_reporter();
return (fexpr__13195.cljs$core$IFn$_invoke$arity$3 ? fexpr__13195.cljs$core$IFn$_invoke$arity$3(G__13196,G__13197,G__13198) : fexpr__13195.call(null,G__13196,G__13197,G__13198));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__13194)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13194)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4647__auto__ = [];
var len__4641__auto___13271 = arguments.length;
var i__4642__auto___13272 = (0);
while(true){
if((i__4642__auto___13272 < len__4641__auto___13271)){
args__4647__auto__.push((arguments[i__4642__auto___13272]));

var G__13273 = (i__4642__auto___13272 + (1));
i__4642__auto___13272 = G__13273;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__13201){
var vec__13202 = p__13201;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13202,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__13205_13274 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__13205_13274)){
(oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_warning_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_warning_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__13205_13274)){
(oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_error_dynamically.cljs$core$IFn$_invoke$arity$2((oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info) : oops.core.report_error_dynamically.call(null,(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2 ? oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info) : oops.messages.runtime_message.call(null,msg_id,info)),info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__13205_13274)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13205_13274)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13205_13274)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq13199){
var G__13200 = cljs.core.first(seq13199);
var seq13199__$1 = cljs.core.next(seq13199);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13200,seq13199__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4036__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__4036__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_13206 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_13206);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_13207 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_13207,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_13207,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__4036__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_13209 = oops.config.get_child_factory();
var child_factory_13209__$1 = (function (){var G__13210 = child_factory_13209;
var G__13210__$1 = (((G__13210 instanceof cljs.core.Keyword))?G__13210.fqn:null);
switch (G__13210__$1) {
case "js-obj":
return ((function (G__13210,G__13210__$1,child_factory_13209){
return (function (){
return {};
});
;})(G__13210,G__13210__$1,child_factory_13209))

break;
case "js-array":
return ((function (G__13210,G__13210__$1,child_factory_13209){
return (function (){
return [];
});
;})(G__13210,G__13210__$1,child_factory_13209))

break;
default:
return child_factory_13209;

}
})();

var child_obj_13208 = (child_factory_13209__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_13209__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_13209__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_13208);
} else {
}

return child_obj_13208;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_13213 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_13213);

return selector_path_13213;
} else {
var selector_path_13214 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_13214);

return selector_path_13214;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_13215 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_13215);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_13224 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13224,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13224,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_13217 = (function (){var path_13216 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_13216,(0));

return path_13216;
})();
var len_13218 = path_13217.length;
var i_13219 = (0);
var obj_13220 = obj;
while(true){
if((i_13219 < len_13218)){
var mode_13221 = (path_13217[i_13219]);
var key_13222 = (path_13217[(i_13219 + (1))]);
var next_obj_13223 = oops.core.get_key_dynamically(obj_13220,key_13222,mode_13221);
var G__13225 = mode_13221;
switch (G__13225) {
case (0):
var G__13288 = (i_13219 + (2));
var G__13289 = next_obj_13223;
i_13219 = G__13288;
obj_13220 = G__13289;
continue;

break;
case (1):
if((!((next_obj_13223 == null)))){
var G__13290 = (i_13219 + (2));
var G__13291 = next_obj_13223;
i_13219 = G__13290;
obj_13220 = G__13291;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_13223 == null)))){
var G__13292 = (i_13219 + (2));
var G__13293 = next_obj_13223;
i_13219 = G__13292;
obj_13220 = G__13293;
continue;
} else {
var G__13294 = (i_13219 + (2));
var G__13295 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_13220,key_13222) : oops.core.punch_key_dynamically_BANG_.call(null,obj_13220,key_13222));
i_13219 = G__13294;
obj_13220 = G__13295;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13225)].join('')));

}
} else {
return obj_13220;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_13251 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13251,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13251,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_13227 = (function (){var path_13226 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_13226,(0));

return path_13226;
})();
var len_13228 = path_13227.length;
if((len_13228 < (4))){
return [obj,(function (){var path_13230 = path_13227;
var len_13231 = path_13230.length;
var i_13232 = (0);
var obj_13233 = obj;
while(true){
if((i_13232 < len_13231)){
var mode_13234 = (path_13230[i_13232]);
var key_13235 = (path_13230[(i_13232 + (1))]);
var next_obj_13236 = oops.core.get_key_dynamically(obj_13233,key_13235,mode_13234);
var G__13252 = mode_13234;
switch (G__13252) {
case (0):
var G__13298 = (i_13232 + (2));
var G__13299 = next_obj_13236;
i_13232 = G__13298;
obj_13233 = G__13299;
continue;

break;
case (1):
if((!((next_obj_13236 == null)))){
var G__13300 = (i_13232 + (2));
var G__13301 = next_obj_13236;
i_13232 = G__13300;
obj_13233 = G__13301;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_13236 == null)))){
var G__13302 = (i_13232 + (2));
var G__13303 = next_obj_13236;
i_13232 = G__13302;
obj_13233 = G__13303;
continue;
} else {
var G__13304 = (i_13232 + (2));
var G__13305 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_13233,key_13235) : oops.core.punch_key_dynamically_BANG_.call(null,obj_13233,key_13235));
i_13232 = G__13304;
obj_13233 = G__13305;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13252)].join('')));

}
} else {
return obj_13233;
}
break;
}
})()];
} else {
var target_obj_13229 = (function (){var path_13237 = path_13227.slice((0),(len_13228 - (2)));
var len_13238 = path_13237.length;
var i_13239 = (0);
var obj_13240 = obj;
while(true){
if((i_13239 < len_13238)){
var mode_13241 = (path_13237[i_13239]);
var key_13242 = (path_13237[(i_13239 + (1))]);
var next_obj_13243 = oops.core.get_key_dynamically(obj_13240,key_13242,mode_13241);
var G__13253 = mode_13241;
switch (G__13253) {
case (0):
var G__13307 = (i_13239 + (2));
var G__13308 = next_obj_13243;
i_13239 = G__13307;
obj_13240 = G__13308;
continue;

break;
case (1):
if((!((next_obj_13243 == null)))){
var G__13309 = (i_13239 + (2));
var G__13310 = next_obj_13243;
i_13239 = G__13309;
obj_13240 = G__13310;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_13243 == null)))){
var G__13311 = (i_13239 + (2));
var G__13312 = next_obj_13243;
i_13239 = G__13311;
obj_13240 = G__13312;
continue;
} else {
var G__13313 = (i_13239 + (2));
var G__13314 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_13240,key_13242) : oops.core.punch_key_dynamically_BANG_.call(null,obj_13240,key_13242));
i_13239 = G__13313;
obj_13240 = G__13314;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13253)].join('')));

}
} else {
return obj_13240;
}
break;
}
})();
return [target_obj_13229,(function (){var path_13244 = [(path_13227[(len_13228 - (2))]),(path_13227[(len_13228 - (1))])];
var len_13245 = path_13244.length;
var i_13246 = (0);
var obj_13247 = target_obj_13229;
while(true){
if((i_13246 < len_13245)){
var mode_13248 = (path_13244[i_13246]);
var key_13249 = (path_13244[(i_13246 + (1))]);
var next_obj_13250 = oops.core.get_key_dynamically(obj_13247,key_13249,mode_13248);
var G__13254 = mode_13248;
switch (G__13254) {
case (0):
var G__13316 = (i_13246 + (2));
var G__13317 = next_obj_13250;
i_13246 = G__13316;
obj_13247 = G__13317;
continue;

break;
case (1):
if((!((next_obj_13250 == null)))){
var G__13318 = (i_13246 + (2));
var G__13319 = next_obj_13250;
i_13246 = G__13318;
obj_13247 = G__13319;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_13250 == null)))){
var G__13320 = (i_13246 + (2));
var G__13321 = next_obj_13250;
i_13246 = G__13320;
obj_13247 = G__13321;
continue;
} else {
var G__13322 = (i_13246 + (2));
var G__13323 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_13247,key_13249) : oops.core.punch_key_dynamically_BANG_.call(null,obj_13247,key_13249));
i_13246 = G__13322;
obj_13247 = G__13323;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13254)].join('')));

}
} else {
return obj_13247;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_13269 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13269,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)) : oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_13269,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)));
})():true))){
var path_13256 = (function (){var path_13255 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_13255,(1));

return path_13255;
})();
var len_13259 = path_13256.length;
var parent_obj_path_13260 = path_13256.slice((0),(len_13259 - (2)));
var key_13257 = (path_13256[(len_13259 - (1))]);
var mode_13258 = (path_13256[(len_13259 - (2))]);
var parent_obj_13261 = (function (){var path_13262 = parent_obj_path_13260;
var len_13263 = path_13262.length;
var i_13264 = (0);
var obj_13265 = obj;
while(true){
if((i_13264 < len_13263)){
var mode_13266 = (path_13262[i_13264]);
var key_13267 = (path_13262[(i_13264 + (1))]);
var next_obj_13268 = oops.core.get_key_dynamically(obj_13265,key_13267,mode_13266);
var G__13270 = mode_13266;
switch (G__13270) {
case (0):
var G__13326 = (i_13264 + (2));
var G__13327 = next_obj_13268;
i_13264 = G__13326;
obj_13265 = G__13327;
continue;

break;
case (1):
if((!((next_obj_13268 == null)))){
var G__13328 = (i_13264 + (2));
var G__13329 = next_obj_13268;
i_13264 = G__13328;
obj_13265 = G__13329;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_13268 == null)))){
var G__13330 = (i_13264 + (2));
var G__13331 = next_obj_13268;
i_13264 = G__13330;
obj_13265 = G__13331;
continue;
} else {
var G__13332 = (i_13264 + (2));
var G__13333 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_13265,key_13267) : oops.core.punch_key_dynamically_BANG_.call(null,obj_13265,key_13267));
i_13264 = G__13332;
obj_13265 = G__13333;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13270)].join('')));

}
} else {
return obj_13265;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_13261,key_13257,val,mode_13258);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
