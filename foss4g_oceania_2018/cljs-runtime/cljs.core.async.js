goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16337 = arguments.length;
switch (G__16337) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16358 = (function (f,blockable,meta16359){
this.f = f;
this.blockable = blockable;
this.meta16359 = meta16359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16360,meta16359__$1){
var self__ = this;
var _16360__$1 = this;
return (new cljs.core.async.t_cljs$core$async16358(self__.f,self__.blockable,meta16359__$1));
});

cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16360){
var self__ = this;
var _16360__$1 = this;
return self__.meta16359;
});

cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16359","meta16359",-1705860644,null)], null);
});

cljs.core.async.t_cljs$core$async16358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16358";

cljs.core.async.t_cljs$core$async16358.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16358");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16358.
 */
cljs.core.async.__GT_t_cljs$core$async16358 = (function cljs$core$async$__GT_t_cljs$core$async16358(f__$1,blockable__$1,meta16359){
return (new cljs.core.async.t_cljs$core$async16358(f__$1,blockable__$1,meta16359));
});

}

return (new cljs.core.async.t_cljs$core$async16358(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16383 = arguments.length;
switch (G__16383) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16398 = arguments.length;
switch (G__16398) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18577 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18577) : fn1.call(null,val_18577));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18577,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18577) : fn1.call(null,val_18577));
});})(val_18577,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16423 = arguments.length;
switch (G__16423) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___18593 = n;
var x_18594 = (0);
while(true){
if((x_18594 < n__4518__auto___18593)){
(a[x_18594] = (0));

var G__18596 = (x_18594 + (1));
x_18594 = G__18596;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18600 = (i + (1));
i = G__18600;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16463 = (function (flag,meta16464){
this.flag = flag;
this.meta16464 = meta16464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16465,meta16464__$1){
var self__ = this;
var _16465__$1 = this;
return (new cljs.core.async.t_cljs$core$async16463(self__.flag,meta16464__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16465){
var self__ = this;
var _16465__$1 = this;
return self__.meta16464;
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16464","meta16464",1696319556,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16463";

cljs.core.async.t_cljs$core$async16463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16463");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16463.
 */
cljs.core.async.__GT_t_cljs$core$async16463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16463(flag__$1,meta16464){
return (new cljs.core.async.t_cljs$core$async16463(flag__$1,meta16464));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16463(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16481 = (function (flag,cb,meta16482){
this.flag = flag;
this.cb = cb;
this.meta16482 = meta16482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16483,meta16482__$1){
var self__ = this;
var _16483__$1 = this;
return (new cljs.core.async.t_cljs$core$async16481(self__.flag,self__.cb,meta16482__$1));
});

cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16483){
var self__ = this;
var _16483__$1 = this;
return self__.meta16482;
});

cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16482","meta16482",-1425763447,null)], null);
});

cljs.core.async.t_cljs$core$async16481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16481";

cljs.core.async.t_cljs$core$async16481.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16481");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16481.
 */
cljs.core.async.__GT_t_cljs$core$async16481 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16481(flag__$1,cb__$1,meta16482){
return (new cljs.core.async.t_cljs$core$async16481(flag__$1,cb__$1,meta16482));
});

}

return (new cljs.core.async.t_cljs$core$async16481(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16499_SHARP_){
var G__16516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16499_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16516) : fret.call(null,G__16516));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16500_SHARP_){
var G__16520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16500_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16520) : fret.call(null,G__16520));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18623 = (i + (1));
i = G__18623;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18628 = arguments.length;
var i__4642__auto___18629 = (0);
while(true){
if((i__4642__auto___18629 < len__4641__auto___18628)){
args__4647__auto__.push((arguments[i__4642__auto___18629]));

var G__18630 = (i__4642__auto___18629 + (1));
i__4642__auto___18629 = G__18630;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16546){
var map__16547 = p__16546;
var map__16547__$1 = (((((!((map__16547 == null))))?(((((map__16547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16547):map__16547);
var opts = map__16547__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16528){
var G__16529 = cljs.core.first(seq16528);
var seq16528__$1 = cljs.core.next(seq16528);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16529,seq16528__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16576 = arguments.length;
switch (G__16576) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16191__auto___18636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___18636){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___18636){
return (function (state_16617){
var state_val_16618 = (state_16617[(1)]);
if((state_val_16618 === (7))){
var inst_16612 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
var statearr_16624_18637 = state_16617__$1;
(statearr_16624_18637[(2)] = inst_16612);

(statearr_16624_18637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (1))){
var state_16617__$1 = state_16617;
var statearr_16625_18638 = state_16617__$1;
(statearr_16625_18638[(2)] = null);

(statearr_16625_18638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (4))){
var inst_16595 = (state_16617[(7)]);
var inst_16595__$1 = (state_16617[(2)]);
var inst_16596 = (inst_16595__$1 == null);
var state_16617__$1 = (function (){var statearr_16631 = state_16617;
(statearr_16631[(7)] = inst_16595__$1);

return statearr_16631;
})();
if(cljs.core.truth_(inst_16596)){
var statearr_16633_18649 = state_16617__$1;
(statearr_16633_18649[(1)] = (5));

} else {
var statearr_16634_18651 = state_16617__$1;
(statearr_16634_18651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (13))){
var state_16617__$1 = state_16617;
var statearr_16636_18652 = state_16617__$1;
(statearr_16636_18652[(2)] = null);

(statearr_16636_18652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (6))){
var inst_16595 = (state_16617[(7)]);
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16617__$1,(11),to,inst_16595);
} else {
if((state_val_16618 === (3))){
var inst_16615 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16617__$1,inst_16615);
} else {
if((state_val_16618 === (12))){
var state_16617__$1 = state_16617;
var statearr_16645_18656 = state_16617__$1;
(statearr_16645_18656[(2)] = null);

(statearr_16645_18656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (2))){
var state_16617__$1 = state_16617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16617__$1,(4),from);
} else {
if((state_val_16618 === (11))){
var inst_16605 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
if(cljs.core.truth_(inst_16605)){
var statearr_16652_18657 = state_16617__$1;
(statearr_16652_18657[(1)] = (12));

} else {
var statearr_16653_18659 = state_16617__$1;
(statearr_16653_18659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (9))){
var state_16617__$1 = state_16617;
var statearr_16654_18661 = state_16617__$1;
(statearr_16654_18661[(2)] = null);

(statearr_16654_18661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (5))){
var state_16617__$1 = state_16617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16656_18662 = state_16617__$1;
(statearr_16656_18662[(1)] = (8));

} else {
var statearr_16657_18665 = state_16617__$1;
(statearr_16657_18665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (14))){
var inst_16610 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
var statearr_16658_18666 = state_16617__$1;
(statearr_16658_18666[(2)] = inst_16610);

(statearr_16658_18666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (10))){
var inst_16602 = (state_16617[(2)]);
var state_16617__$1 = state_16617;
var statearr_16659_18667 = state_16617__$1;
(statearr_16659_18667[(2)] = inst_16602);

(statearr_16659_18667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16618 === (8))){
var inst_16599 = cljs.core.async.close_BANG_(to);
var state_16617__$1 = state_16617;
var statearr_16660_18668 = state_16617__$1;
(statearr_16660_18668[(2)] = inst_16599);

(statearr_16660_18668[(1)] = (10));


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
});})(c__16191__auto___18636))
;
return ((function (switch__15927__auto__,c__16191__auto___18636){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_16661 = [null,null,null,null,null,null,null,null];
(statearr_16661[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_16661[(1)] = (1));

return statearr_16661;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_16617){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16617);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16663){if((e16663 instanceof Object)){
var ex__15931__auto__ = e16663;
var statearr_16664_18669 = state_16617;
(statearr_16664_18669[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18671 = state_16617;
state_16617 = G__18671;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_16617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_16617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___18636))
})();
var state__16193__auto__ = (function (){var statearr_16666 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16666[(6)] = c__16191__auto___18636);

return statearr_16666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___18636))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16671){
var vec__16672 = p__16671;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16672,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16672,(1),null);
var job = vec__16672;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16191__auto___18677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results){
return (function (state_16682){
var state_val_16683 = (state_16682[(1)]);
if((state_val_16683 === (1))){
var state_16682__$1 = state_16682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16682__$1,(2),res,v);
} else {
if((state_val_16683 === (2))){
var inst_16679 = (state_16682[(2)]);
var inst_16680 = cljs.core.async.close_BANG_(res);
var state_16682__$1 = (function (){var statearr_16687 = state_16682;
(statearr_16687[(7)] = inst_16679);

return statearr_16687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16682__$1,inst_16680);
} else {
return null;
}
}
});})(c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results))
;
return ((function (switch__15927__auto__,c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_16692 = [null,null,null,null,null,null,null,null];
(statearr_16692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__);

(statearr_16692[(1)] = (1));

return statearr_16692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1 = (function (state_16682){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16682);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16696){if((e16696 instanceof Object)){
var ex__15931__auto__ = e16696;
var statearr_16697_18679 = state_16682;
(statearr_16697_18679[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18680 = state_16682;
state_16682 = G__18680;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = function(state_16682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1.call(this,state_16682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results))
})();
var state__16193__auto__ = (function (){var statearr_16698 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16698[(6)] = c__16191__auto___18677);

return statearr_16698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___18677,res,vec__16672,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16699){
var vec__16701 = p__16699;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(1),null);
var job = vec__16701;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___18686 = n;
var __18687 = (0);
while(true){
if((__18687 < n__4518__auto___18686)){
var G__16707_18688 = type;
var G__16707_18689__$1 = (((G__16707_18688 instanceof cljs.core.Keyword))?G__16707_18688.fqn:null);
switch (G__16707_18689__$1) {
case "compute":
var c__16191__auto___18691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18687,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (__18687,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function (state_16720){
var state_val_16721 = (state_16720[(1)]);
if((state_val_16721 === (1))){
var state_16720__$1 = state_16720;
var statearr_16722_18693 = state_16720__$1;
(statearr_16722_18693[(2)] = null);

(statearr_16722_18693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16721 === (2))){
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16720__$1,(4),jobs);
} else {
if((state_val_16721 === (3))){
var inst_16718 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16720__$1,inst_16718);
} else {
if((state_val_16721 === (4))){
var inst_16710 = (state_16720[(2)]);
var inst_16711 = process(inst_16710);
var state_16720__$1 = state_16720;
if(cljs.core.truth_(inst_16711)){
var statearr_16723_18694 = state_16720__$1;
(statearr_16723_18694[(1)] = (5));

} else {
var statearr_16724_18695 = state_16720__$1;
(statearr_16724_18695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16721 === (5))){
var state_16720__$1 = state_16720;
var statearr_16725_18696 = state_16720__$1;
(statearr_16725_18696[(2)] = null);

(statearr_16725_18696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16721 === (6))){
var state_16720__$1 = state_16720;
var statearr_16727_18697 = state_16720__$1;
(statearr_16727_18697[(2)] = null);

(statearr_16727_18697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16721 === (7))){
var inst_16716 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
var statearr_16728_18698 = state_16720__$1;
(statearr_16728_18698[(2)] = inst_16716);

(statearr_16728_18698[(1)] = (3));


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
});})(__18687,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
;
return ((function (__18687,switch__15927__auto__,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_16730 = [null,null,null,null,null,null,null];
(statearr_16730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__);

(statearr_16730[(1)] = (1));

return statearr_16730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1 = (function (state_16720){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16720);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16731){if((e16731 instanceof Object)){
var ex__15931__auto__ = e16731;
var statearr_16732_18702 = state_16720;
(statearr_16732_18702[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18703 = state_16720;
state_16720 = G__18703;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = function(state_16720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1.call(this,state_16720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__;
})()
;})(__18687,switch__15927__auto__,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
})();
var state__16193__auto__ = (function (){var statearr_16733 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16733[(6)] = c__16191__auto___18691);

return statearr_16733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(__18687,c__16191__auto___18691,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
);


break;
case "async":
var c__16191__auto___18704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18687,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (__18687,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function (state_16746){
var state_val_16747 = (state_16746[(1)]);
if((state_val_16747 === (1))){
var state_16746__$1 = state_16746;
var statearr_16750_18705 = state_16746__$1;
(statearr_16750_18705[(2)] = null);

(statearr_16750_18705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (2))){
var state_16746__$1 = state_16746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16746__$1,(4),jobs);
} else {
if((state_val_16747 === (3))){
var inst_16744 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16746__$1,inst_16744);
} else {
if((state_val_16747 === (4))){
var inst_16736 = (state_16746[(2)]);
var inst_16737 = async(inst_16736);
var state_16746__$1 = state_16746;
if(cljs.core.truth_(inst_16737)){
var statearr_16751_18706 = state_16746__$1;
(statearr_16751_18706[(1)] = (5));

} else {
var statearr_16752_18707 = state_16746__$1;
(statearr_16752_18707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (5))){
var state_16746__$1 = state_16746;
var statearr_16753_18708 = state_16746__$1;
(statearr_16753_18708[(2)] = null);

(statearr_16753_18708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (6))){
var state_16746__$1 = state_16746;
var statearr_16754_18709 = state_16746__$1;
(statearr_16754_18709[(2)] = null);

(statearr_16754_18709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16747 === (7))){
var inst_16742 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
var statearr_16756_18710 = state_16746__$1;
(statearr_16756_18710[(2)] = inst_16742);

(statearr_16756_18710[(1)] = (3));


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
});})(__18687,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
;
return ((function (__18687,switch__15927__auto__,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_16757 = [null,null,null,null,null,null,null];
(statearr_16757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__);

(statearr_16757[(1)] = (1));

return statearr_16757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1 = (function (state_16746){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16746);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16758){if((e16758 instanceof Object)){
var ex__15931__auto__ = e16758;
var statearr_16759_18711 = state_16746;
(statearr_16759_18711[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18712 = state_16746;
state_16746 = G__18712;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = function(state_16746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1.call(this,state_16746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__;
})()
;})(__18687,switch__15927__auto__,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
})();
var state__16193__auto__ = (function (){var statearr_16760 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16760[(6)] = c__16191__auto___18704);

return statearr_16760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(__18687,c__16191__auto___18704,G__16707_18688,G__16707_18689__$1,n__4518__auto___18686,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16707_18689__$1)].join('')));

}

var G__18713 = (__18687 + (1));
__18687 = G__18713;
continue;
} else {
}
break;
}

var c__16191__auto___18714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___18714,jobs,results,process,async){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___18714,jobs,results,process,async){
return (function (state_16790){
var state_val_16791 = (state_16790[(1)]);
if((state_val_16791 === (1))){
var state_16790__$1 = state_16790;
var statearr_16795_18716 = state_16790__$1;
(statearr_16795_18716[(2)] = null);

(statearr_16795_18716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16791 === (2))){
var state_16790__$1 = state_16790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16790__$1,(4),from);
} else {
if((state_val_16791 === (3))){
var inst_16788 = (state_16790[(2)]);
var state_16790__$1 = state_16790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16790__$1,inst_16788);
} else {
if((state_val_16791 === (4))){
var inst_16766 = (state_16790[(7)]);
var inst_16766__$1 = (state_16790[(2)]);
var inst_16767 = (inst_16766__$1 == null);
var state_16790__$1 = (function (){var statearr_16796 = state_16790;
(statearr_16796[(7)] = inst_16766__$1);

return statearr_16796;
})();
if(cljs.core.truth_(inst_16767)){
var statearr_16797_18717 = state_16790__$1;
(statearr_16797_18717[(1)] = (5));

} else {
var statearr_16798_18718 = state_16790__$1;
(statearr_16798_18718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16791 === (5))){
var inst_16770 = cljs.core.async.close_BANG_(jobs);
var state_16790__$1 = state_16790;
var statearr_16800_18720 = state_16790__$1;
(statearr_16800_18720[(2)] = inst_16770);

(statearr_16800_18720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16791 === (6))){
var inst_16772 = (state_16790[(8)]);
var inst_16766 = (state_16790[(7)]);
var inst_16772__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16777 = [inst_16766,inst_16772__$1];
var inst_16778 = (new cljs.core.PersistentVector(null,2,(5),inst_16775,inst_16777,null));
var state_16790__$1 = (function (){var statearr_16802 = state_16790;
(statearr_16802[(8)] = inst_16772__$1);

return statearr_16802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16790__$1,(8),jobs,inst_16778);
} else {
if((state_val_16791 === (7))){
var inst_16786 = (state_16790[(2)]);
var state_16790__$1 = state_16790;
var statearr_16803_18722 = state_16790__$1;
(statearr_16803_18722[(2)] = inst_16786);

(statearr_16803_18722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16791 === (8))){
var inst_16772 = (state_16790[(8)]);
var inst_16781 = (state_16790[(2)]);
var state_16790__$1 = (function (){var statearr_16804 = state_16790;
(statearr_16804[(9)] = inst_16781);

return statearr_16804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16790__$1,(9),results,inst_16772);
} else {
if((state_val_16791 === (9))){
var inst_16783 = (state_16790[(2)]);
var state_16790__$1 = (function (){var statearr_16805 = state_16790;
(statearr_16805[(10)] = inst_16783);

return statearr_16805;
})();
var statearr_16806_18723 = state_16790__$1;
(statearr_16806_18723[(2)] = null);

(statearr_16806_18723[(1)] = (2));


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
});})(c__16191__auto___18714,jobs,results,process,async))
;
return ((function (switch__15927__auto__,c__16191__auto___18714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_16807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__);

(statearr_16807[(1)] = (1));

return statearr_16807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1 = (function (state_16790){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16790);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16808){if((e16808 instanceof Object)){
var ex__15931__auto__ = e16808;
var statearr_16809_18725 = state_16790;
(statearr_16809_18725[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18727 = state_16790;
state_16790 = G__18727;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = function(state_16790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1.call(this,state_16790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___18714,jobs,results,process,async))
})();
var state__16193__auto__ = (function (){var statearr_16810 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16810[(6)] = c__16191__auto___18714);

return statearr_16810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___18714,jobs,results,process,async))
);


var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__,jobs,results,process,async){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__,jobs,results,process,async){
return (function (state_16850){
var state_val_16851 = (state_16850[(1)]);
if((state_val_16851 === (7))){
var inst_16846 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16856_18728 = state_16850__$1;
(statearr_16856_18728[(2)] = inst_16846);

(statearr_16856_18728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (20))){
var state_16850__$1 = state_16850;
var statearr_16857_18729 = state_16850__$1;
(statearr_16857_18729[(2)] = null);

(statearr_16857_18729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (1))){
var state_16850__$1 = state_16850;
var statearr_16858_18730 = state_16850__$1;
(statearr_16858_18730[(2)] = null);

(statearr_16858_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (4))){
var inst_16815 = (state_16850[(7)]);
var inst_16815__$1 = (state_16850[(2)]);
var inst_16816 = (inst_16815__$1 == null);
var state_16850__$1 = (function (){var statearr_16859 = state_16850;
(statearr_16859[(7)] = inst_16815__$1);

return statearr_16859;
})();
if(cljs.core.truth_(inst_16816)){
var statearr_16860_18731 = state_16850__$1;
(statearr_16860_18731[(1)] = (5));

} else {
var statearr_16862_18732 = state_16850__$1;
(statearr_16862_18732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (15))){
var inst_16828 = (state_16850[(8)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16850__$1,(18),to,inst_16828);
} else {
if((state_val_16851 === (21))){
var inst_16841 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16864_18734 = state_16850__$1;
(statearr_16864_18734[(2)] = inst_16841);

(statearr_16864_18734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (13))){
var inst_16843 = (state_16850[(2)]);
var state_16850__$1 = (function (){var statearr_16865 = state_16850;
(statearr_16865[(9)] = inst_16843);

return statearr_16865;
})();
var statearr_16866_18736 = state_16850__$1;
(statearr_16866_18736[(2)] = null);

(statearr_16866_18736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (6))){
var inst_16815 = (state_16850[(7)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16850__$1,(11),inst_16815);
} else {
if((state_val_16851 === (17))){
var inst_16836 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16836)){
var statearr_16867_18737 = state_16850__$1;
(statearr_16867_18737[(1)] = (19));

} else {
var statearr_16868_18738 = state_16850__$1;
(statearr_16868_18738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (3))){
var inst_16848 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16850__$1,inst_16848);
} else {
if((state_val_16851 === (12))){
var inst_16825 = (state_16850[(10)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16850__$1,(14),inst_16825);
} else {
if((state_val_16851 === (2))){
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16850__$1,(4),results);
} else {
if((state_val_16851 === (19))){
var state_16850__$1 = state_16850;
var statearr_16870_18739 = state_16850__$1;
(statearr_16870_18739[(2)] = null);

(statearr_16870_18739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (11))){
var inst_16825 = (state_16850[(2)]);
var state_16850__$1 = (function (){var statearr_16872 = state_16850;
(statearr_16872[(10)] = inst_16825);

return statearr_16872;
})();
var statearr_16873_18742 = state_16850__$1;
(statearr_16873_18742[(2)] = null);

(statearr_16873_18742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (9))){
var state_16850__$1 = state_16850;
var statearr_16874_18743 = state_16850__$1;
(statearr_16874_18743[(2)] = null);

(statearr_16874_18743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (5))){
var state_16850__$1 = state_16850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16875_18744 = state_16850__$1;
(statearr_16875_18744[(1)] = (8));

} else {
var statearr_16876_18745 = state_16850__$1;
(statearr_16876_18745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (14))){
var inst_16828 = (state_16850[(8)]);
var inst_16830 = (state_16850[(11)]);
var inst_16828__$1 = (state_16850[(2)]);
var inst_16829 = (inst_16828__$1 == null);
var inst_16830__$1 = cljs.core.not(inst_16829);
var state_16850__$1 = (function (){var statearr_16877 = state_16850;
(statearr_16877[(8)] = inst_16828__$1);

(statearr_16877[(11)] = inst_16830__$1);

return statearr_16877;
})();
if(inst_16830__$1){
var statearr_16878_18746 = state_16850__$1;
(statearr_16878_18746[(1)] = (15));

} else {
var statearr_16879_18747 = state_16850__$1;
(statearr_16879_18747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (16))){
var inst_16830 = (state_16850[(11)]);
var state_16850__$1 = state_16850;
var statearr_16880_18748 = state_16850__$1;
(statearr_16880_18748[(2)] = inst_16830);

(statearr_16880_18748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (10))){
var inst_16822 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16881_18750 = state_16850__$1;
(statearr_16881_18750[(2)] = inst_16822);

(statearr_16881_18750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (18))){
var inst_16833 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16883_18752 = state_16850__$1;
(statearr_16883_18752[(2)] = inst_16833);

(statearr_16883_18752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (8))){
var inst_16819 = cljs.core.async.close_BANG_(to);
var state_16850__$1 = state_16850;
var statearr_16884_18753 = state_16850__$1;
(statearr_16884_18753[(2)] = inst_16819);

(statearr_16884_18753[(1)] = (10));


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
}
}
}
}
});})(c__16191__auto__,jobs,results,process,async))
;
return ((function (switch__15927__auto__,c__16191__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_16885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__);

(statearr_16885[(1)] = (1));

return statearr_16885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1 = (function (state_16850){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16850);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16886){if((e16886 instanceof Object)){
var ex__15931__auto__ = e16886;
var statearr_16887_18756 = state_16850;
(statearr_16887_18756[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18759 = state_16850;
state_16850 = G__18759;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__ = function(state_16850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1.call(this,state_16850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__,jobs,results,process,async))
})();
var state__16193__auto__ = (function (){var statearr_16889 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16889[(6)] = c__16191__auto__);

return statearr_16889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__,jobs,results,process,async))
);

return c__16191__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16895 = arguments.length;
switch (G__16895) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16904 = arguments.length;
switch (G__16904) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16912 = arguments.length;
switch (G__16912) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16191__auto___18771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___18771,tc,fc){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___18771,tc,fc){
return (function (state_16939){
var state_val_16940 = (state_16939[(1)]);
if((state_val_16940 === (7))){
var inst_16935 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16945_18772 = state_16939__$1;
(statearr_16945_18772[(2)] = inst_16935);

(statearr_16945_18772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (1))){
var state_16939__$1 = state_16939;
var statearr_16947_18774 = state_16939__$1;
(statearr_16947_18774[(2)] = null);

(statearr_16947_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (4))){
var inst_16915 = (state_16939[(7)]);
var inst_16915__$1 = (state_16939[(2)]);
var inst_16916 = (inst_16915__$1 == null);
var state_16939__$1 = (function (){var statearr_16948 = state_16939;
(statearr_16948[(7)] = inst_16915__$1);

return statearr_16948;
})();
if(cljs.core.truth_(inst_16916)){
var statearr_16949_18775 = state_16939__$1;
(statearr_16949_18775[(1)] = (5));

} else {
var statearr_16950_18776 = state_16939__$1;
(statearr_16950_18776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (13))){
var state_16939__$1 = state_16939;
var statearr_16951_18777 = state_16939__$1;
(statearr_16951_18777[(2)] = null);

(statearr_16951_18777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (6))){
var inst_16915 = (state_16939[(7)]);
var inst_16921 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16915) : p.call(null,inst_16915));
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16921)){
var statearr_16953_18778 = state_16939__$1;
(statearr_16953_18778[(1)] = (9));

} else {
var statearr_16954_18779 = state_16939__$1;
(statearr_16954_18779[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (3))){
var inst_16937 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16939__$1,inst_16937);
} else {
if((state_val_16940 === (12))){
var state_16939__$1 = state_16939;
var statearr_16959_18780 = state_16939__$1;
(statearr_16959_18780[(2)] = null);

(statearr_16959_18780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (2))){
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16939__$1,(4),ch);
} else {
if((state_val_16940 === (11))){
var inst_16915 = (state_16939[(7)]);
var inst_16926 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16939__$1,(8),inst_16926,inst_16915);
} else {
if((state_val_16940 === (9))){
var state_16939__$1 = state_16939;
var statearr_16961_18785 = state_16939__$1;
(statearr_16961_18785[(2)] = tc);

(statearr_16961_18785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (5))){
var inst_16918 = cljs.core.async.close_BANG_(tc);
var inst_16919 = cljs.core.async.close_BANG_(fc);
var state_16939__$1 = (function (){var statearr_16962 = state_16939;
(statearr_16962[(8)] = inst_16918);

return statearr_16962;
})();
var statearr_16964_18786 = state_16939__$1;
(statearr_16964_18786[(2)] = inst_16919);

(statearr_16964_18786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (14))){
var inst_16933 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
var statearr_16967_18790 = state_16939__$1;
(statearr_16967_18790[(2)] = inst_16933);

(statearr_16967_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (10))){
var state_16939__$1 = state_16939;
var statearr_16969_18791 = state_16939__$1;
(statearr_16969_18791[(2)] = fc);

(statearr_16969_18791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16940 === (8))){
var inst_16928 = (state_16939[(2)]);
var state_16939__$1 = state_16939;
if(cljs.core.truth_(inst_16928)){
var statearr_16970_18792 = state_16939__$1;
(statearr_16970_18792[(1)] = (12));

} else {
var statearr_16971_18793 = state_16939__$1;
(statearr_16971_18793[(1)] = (13));

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
});})(c__16191__auto___18771,tc,fc))
;
return ((function (switch__15927__auto__,c__16191__auto___18771,tc,fc){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_16972 = [null,null,null,null,null,null,null,null,null];
(statearr_16972[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_16972[(1)] = (1));

return statearr_16972;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_16939){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16939);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e16973){if((e16973 instanceof Object)){
var ex__15931__auto__ = e16973;
var statearr_16974_18797 = state_16939;
(statearr_16974_18797[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18798 = state_16939;
state_16939 = G__18798;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_16939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_16939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___18771,tc,fc))
})();
var state__16193__auto__ = (function (){var statearr_16975 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_16975[(6)] = c__16191__auto___18771);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___18771,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__){
return (function (state_16998){
var state_val_16999 = (state_16998[(1)]);
if((state_val_16999 === (7))){
var inst_16994 = (state_16998[(2)]);
var state_16998__$1 = state_16998;
var statearr_17010_18801 = state_16998__$1;
(statearr_17010_18801[(2)] = inst_16994);

(statearr_17010_18801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (1))){
var inst_16978 = init;
var state_16998__$1 = (function (){var statearr_17011 = state_16998;
(statearr_17011[(7)] = inst_16978);

return statearr_17011;
})();
var statearr_17012_18802 = state_16998__$1;
(statearr_17012_18802[(2)] = null);

(statearr_17012_18802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (4))){
var inst_16981 = (state_16998[(8)]);
var inst_16981__$1 = (state_16998[(2)]);
var inst_16982 = (inst_16981__$1 == null);
var state_16998__$1 = (function (){var statearr_17016 = state_16998;
(statearr_17016[(8)] = inst_16981__$1);

return statearr_17016;
})();
if(cljs.core.truth_(inst_16982)){
var statearr_17017_18806 = state_16998__$1;
(statearr_17017_18806[(1)] = (5));

} else {
var statearr_17018_18807 = state_16998__$1;
(statearr_17018_18807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (6))){
var inst_16985 = (state_16998[(9)]);
var inst_16978 = (state_16998[(7)]);
var inst_16981 = (state_16998[(8)]);
var inst_16985__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16978,inst_16981) : f.call(null,inst_16978,inst_16981));
var inst_16986 = cljs.core.reduced_QMARK_(inst_16985__$1);
var state_16998__$1 = (function (){var statearr_17023 = state_16998;
(statearr_17023[(9)] = inst_16985__$1);

return statearr_17023;
})();
if(inst_16986){
var statearr_17028_18811 = state_16998__$1;
(statearr_17028_18811[(1)] = (8));

} else {
var statearr_17029_18812 = state_16998__$1;
(statearr_17029_18812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (3))){
var inst_16996 = (state_16998[(2)]);
var state_16998__$1 = state_16998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16998__$1,inst_16996);
} else {
if((state_val_16999 === (2))){
var state_16998__$1 = state_16998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16998__$1,(4),ch);
} else {
if((state_val_16999 === (9))){
var inst_16985 = (state_16998[(9)]);
var inst_16978 = inst_16985;
var state_16998__$1 = (function (){var statearr_17042 = state_16998;
(statearr_17042[(7)] = inst_16978);

return statearr_17042;
})();
var statearr_17043_18817 = state_16998__$1;
(statearr_17043_18817[(2)] = null);

(statearr_17043_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (5))){
var inst_16978 = (state_16998[(7)]);
var state_16998__$1 = state_16998;
var statearr_17048_18821 = state_16998__$1;
(statearr_17048_18821[(2)] = inst_16978);

(statearr_17048_18821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (10))){
var inst_16992 = (state_16998[(2)]);
var state_16998__$1 = state_16998;
var statearr_17051_18822 = state_16998__$1;
(statearr_17051_18822[(2)] = inst_16992);

(statearr_17051_18822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16999 === (8))){
var inst_16985 = (state_16998[(9)]);
var inst_16988 = cljs.core.deref(inst_16985);
var state_16998__$1 = state_16998;
var statearr_17054_18823 = state_16998__$1;
(statearr_17054_18823[(2)] = inst_16988);

(statearr_17054_18823[(1)] = (10));


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
});})(c__16191__auto__))
;
return ((function (switch__15927__auto__,c__16191__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15928__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$reduce_$_state_machine__15928__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$reduce_$_state_machine__15928__auto____1 = (function (state_16998){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_16998);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17062){if((e17062 instanceof Object)){
var ex__15931__auto__ = e17062;
var statearr_17063_18827 = state_16998;
(statearr_17063_18827[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18832 = state_16998;
state_16998 = G__18832;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15928__auto__ = function(state_16998){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15928__auto____1.call(this,state_16998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15928__auto____0;
cljs$core$async$reduce_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15928__auto____1;
return cljs$core$async$reduce_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__))
})();
var state__16193__auto__ = (function (){var statearr_17064 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17064[(6)] = c__16191__auto__);

return statearr_17064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__))
);

return c__16191__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__,f__$1){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__,f__$1){
return (function (state_17080){
var state_val_17081 = (state_17080[(1)]);
if((state_val_17081 === (1))){
var inst_17075 = cljs.core.async.reduce(f__$1,init,ch);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17080__$1,(2),inst_17075);
} else {
if((state_val_17081 === (2))){
var inst_17077 = (state_17080[(2)]);
var inst_17078 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17077) : f__$1.call(null,inst_17077));
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17080__$1,inst_17078);
} else {
return null;
}
}
});})(c__16191__auto__,f__$1))
;
return ((function (switch__15927__auto__,c__16191__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15928__auto____0 = (function (){
var statearr_17088 = [null,null,null,null,null,null,null];
(statearr_17088[(0)] = cljs$core$async$transduce_$_state_machine__15928__auto__);

(statearr_17088[(1)] = (1));

return statearr_17088;
});
var cljs$core$async$transduce_$_state_machine__15928__auto____1 = (function (state_17080){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_17080);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17089){if((e17089 instanceof Object)){
var ex__15931__auto__ = e17089;
var statearr_17090_18845 = state_17080;
(statearr_17090_18845[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18846 = state_17080;
state_17080 = G__18846;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15928__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15928__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15928__auto____0;
cljs$core$async$transduce_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15928__auto____1;
return cljs$core$async$transduce_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__,f__$1))
})();
var state__16193__auto__ = (function (){var statearr_17095 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17095[(6)] = c__16191__auto__);

return statearr_17095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__,f__$1))
);

return c__16191__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17101 = arguments.length;
switch (G__17101) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__){
return (function (state_17137){
var state_val_17139 = (state_17137[(1)]);
if((state_val_17139 === (7))){
var inst_17119 = (state_17137[(2)]);
var state_17137__$1 = state_17137;
var statearr_17142_18849 = state_17137__$1;
(statearr_17142_18849[(2)] = inst_17119);

(statearr_17142_18849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (1))){
var inst_17113 = cljs.core.seq(coll);
var inst_17114 = inst_17113;
var state_17137__$1 = (function (){var statearr_17144 = state_17137;
(statearr_17144[(7)] = inst_17114);

return statearr_17144;
})();
var statearr_17145_18850 = state_17137__$1;
(statearr_17145_18850[(2)] = null);

(statearr_17145_18850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (4))){
var inst_17114 = (state_17137[(7)]);
var inst_17117 = cljs.core.first(inst_17114);
var state_17137__$1 = state_17137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17137__$1,(7),ch,inst_17117);
} else {
if((state_val_17139 === (13))){
var inst_17131 = (state_17137[(2)]);
var state_17137__$1 = state_17137;
var statearr_17154_18851 = state_17137__$1;
(statearr_17154_18851[(2)] = inst_17131);

(statearr_17154_18851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (6))){
var inst_17122 = (state_17137[(2)]);
var state_17137__$1 = state_17137;
if(cljs.core.truth_(inst_17122)){
var statearr_17156_18852 = state_17137__$1;
(statearr_17156_18852[(1)] = (8));

} else {
var statearr_17158_18853 = state_17137__$1;
(statearr_17158_18853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (3))){
var inst_17135 = (state_17137[(2)]);
var state_17137__$1 = state_17137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17137__$1,inst_17135);
} else {
if((state_val_17139 === (12))){
var state_17137__$1 = state_17137;
var statearr_17165_18854 = state_17137__$1;
(statearr_17165_18854[(2)] = null);

(statearr_17165_18854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (2))){
var inst_17114 = (state_17137[(7)]);
var state_17137__$1 = state_17137;
if(cljs.core.truth_(inst_17114)){
var statearr_17167_18855 = state_17137__$1;
(statearr_17167_18855[(1)] = (4));

} else {
var statearr_17169_18856 = state_17137__$1;
(statearr_17169_18856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (11))){
var inst_17128 = cljs.core.async.close_BANG_(ch);
var state_17137__$1 = state_17137;
var statearr_17172_18859 = state_17137__$1;
(statearr_17172_18859[(2)] = inst_17128);

(statearr_17172_18859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (9))){
var state_17137__$1 = state_17137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17178_18860 = state_17137__$1;
(statearr_17178_18860[(1)] = (11));

} else {
var statearr_17185_18861 = state_17137__$1;
(statearr_17185_18861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (5))){
var inst_17114 = (state_17137[(7)]);
var state_17137__$1 = state_17137;
var statearr_17187_18862 = state_17137__$1;
(statearr_17187_18862[(2)] = inst_17114);

(statearr_17187_18862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (10))){
var inst_17133 = (state_17137[(2)]);
var state_17137__$1 = state_17137;
var statearr_17192_18863 = state_17137__$1;
(statearr_17192_18863[(2)] = inst_17133);

(statearr_17192_18863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17139 === (8))){
var inst_17114 = (state_17137[(7)]);
var inst_17124 = cljs.core.next(inst_17114);
var inst_17114__$1 = inst_17124;
var state_17137__$1 = (function (){var statearr_17194 = state_17137;
(statearr_17194[(7)] = inst_17114__$1);

return statearr_17194;
})();
var statearr_17197_18864 = state_17137__$1;
(statearr_17197_18864[(2)] = null);

(statearr_17197_18864[(1)] = (2));


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
});})(c__16191__auto__))
;
return ((function (switch__15927__auto__,c__16191__auto__){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_17202 = [null,null,null,null,null,null,null,null];
(statearr_17202[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_17202[(1)] = (1));

return statearr_17202;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_17137){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_17137);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17204){if((e17204 instanceof Object)){
var ex__15931__auto__ = e17204;
var statearr_17205_18865 = state_17137;
(statearr_17205_18865[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18866 = state_17137;
state_17137 = G__18866;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_17137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_17137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__))
})();
var state__16193__auto__ = (function (){var statearr_17212 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17212[(6)] = c__16191__auto__);

return statearr_17212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__))
);

return c__16191__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17253 = (function (ch,cs,meta17254){
this.ch = ch;
this.cs = cs;
this.meta17254 = meta17254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17255,meta17254__$1){
var self__ = this;
var _17255__$1 = this;
return (new cljs.core.async.t_cljs$core$async17253(self__.ch,self__.cs,meta17254__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17255){
var self__ = this;
var _17255__$1 = this;
return self__.meta17254;
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17254","meta17254",-880404769,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17253";

cljs.core.async.t_cljs$core$async17253.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17253");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17253.
 */
cljs.core.async.__GT_t_cljs$core$async17253 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17253(ch__$1,cs__$1,meta17254){
return (new cljs.core.async.t_cljs$core$async17253(ch__$1,cs__$1,meta17254));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17253(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16191__auto___18884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___18884,cs,m,dchan,dctr,done){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___18884,cs,m,dchan,dctr,done){
return (function (state_17435){
var state_val_17436 = (state_17435[(1)]);
if((state_val_17436 === (7))){
var inst_17425 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17443_18892 = state_17435__$1;
(statearr_17443_18892[(2)] = inst_17425);

(statearr_17443_18892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (20))){
var inst_17312 = (state_17435[(7)]);
var inst_17330 = cljs.core.first(inst_17312);
var inst_17331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(0),null);
var inst_17332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(1),null);
var state_17435__$1 = (function (){var statearr_17444 = state_17435;
(statearr_17444[(8)] = inst_17331);

return statearr_17444;
})();
if(cljs.core.truth_(inst_17332)){
var statearr_17449_18899 = state_17435__$1;
(statearr_17449_18899[(1)] = (22));

} else {
var statearr_17450_18900 = state_17435__$1;
(statearr_17450_18900[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (27))){
var inst_17371 = (state_17435[(9)]);
var inst_17363 = (state_17435[(10)]);
var inst_17281 = (state_17435[(11)]);
var inst_17365 = (state_17435[(12)]);
var inst_17371__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17363,inst_17365);
var inst_17373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17371__$1,inst_17281,done);
var state_17435__$1 = (function (){var statearr_17453 = state_17435;
(statearr_17453[(9)] = inst_17371__$1);

return statearr_17453;
})();
if(cljs.core.truth_(inst_17373)){
var statearr_17456_18901 = state_17435__$1;
(statearr_17456_18901[(1)] = (30));

} else {
var statearr_17457_18902 = state_17435__$1;
(statearr_17457_18902[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (1))){
var state_17435__$1 = state_17435;
var statearr_17460_18903 = state_17435__$1;
(statearr_17460_18903[(2)] = null);

(statearr_17460_18903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (24))){
var inst_17312 = (state_17435[(7)]);
var inst_17339 = (state_17435[(2)]);
var inst_17340 = cljs.core.next(inst_17312);
var inst_17290 = inst_17340;
var inst_17291 = null;
var inst_17292 = (0);
var inst_17293 = (0);
var state_17435__$1 = (function (){var statearr_17464 = state_17435;
(statearr_17464[(13)] = inst_17293);

(statearr_17464[(14)] = inst_17290);

(statearr_17464[(15)] = inst_17339);

(statearr_17464[(16)] = inst_17291);

(statearr_17464[(17)] = inst_17292);

return statearr_17464;
})();
var statearr_17465_18910 = state_17435__$1;
(statearr_17465_18910[(2)] = null);

(statearr_17465_18910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (39))){
var state_17435__$1 = state_17435;
var statearr_17479_18911 = state_17435__$1;
(statearr_17479_18911[(2)] = null);

(statearr_17479_18911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (4))){
var inst_17281 = (state_17435[(11)]);
var inst_17281__$1 = (state_17435[(2)]);
var inst_17282 = (inst_17281__$1 == null);
var state_17435__$1 = (function (){var statearr_17482 = state_17435;
(statearr_17482[(11)] = inst_17281__$1);

return statearr_17482;
})();
if(cljs.core.truth_(inst_17282)){
var statearr_17487_18912 = state_17435__$1;
(statearr_17487_18912[(1)] = (5));

} else {
var statearr_17488_18913 = state_17435__$1;
(statearr_17488_18913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (15))){
var inst_17293 = (state_17435[(13)]);
var inst_17290 = (state_17435[(14)]);
var inst_17291 = (state_17435[(16)]);
var inst_17292 = (state_17435[(17)]);
var inst_17308 = (state_17435[(2)]);
var inst_17309 = (inst_17293 + (1));
var tmp17469 = inst_17290;
var tmp17471 = inst_17291;
var tmp17472 = inst_17292;
var inst_17290__$1 = tmp17469;
var inst_17291__$1 = tmp17471;
var inst_17292__$1 = tmp17472;
var inst_17293__$1 = inst_17309;
var state_17435__$1 = (function (){var statearr_17489 = state_17435;
(statearr_17489[(13)] = inst_17293__$1);

(statearr_17489[(18)] = inst_17308);

(statearr_17489[(14)] = inst_17290__$1);

(statearr_17489[(16)] = inst_17291__$1);

(statearr_17489[(17)] = inst_17292__$1);

return statearr_17489;
})();
var statearr_17493_18914 = state_17435__$1;
(statearr_17493_18914[(2)] = null);

(statearr_17493_18914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (21))){
var inst_17343 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17501_18915 = state_17435__$1;
(statearr_17501_18915[(2)] = inst_17343);

(statearr_17501_18915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (31))){
var inst_17371 = (state_17435[(9)]);
var inst_17377 = done(null);
var inst_17378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17371);
var state_17435__$1 = (function (){var statearr_17502 = state_17435;
(statearr_17502[(19)] = inst_17377);

return statearr_17502;
})();
var statearr_17504_18916 = state_17435__$1;
(statearr_17504_18916[(2)] = inst_17378);

(statearr_17504_18916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (32))){
var inst_17363 = (state_17435[(10)]);
var inst_17362 = (state_17435[(20)]);
var inst_17364 = (state_17435[(21)]);
var inst_17365 = (state_17435[(12)]);
var inst_17380 = (state_17435[(2)]);
var inst_17381 = (inst_17365 + (1));
var tmp17494 = inst_17363;
var tmp17495 = inst_17362;
var tmp17496 = inst_17364;
var inst_17362__$1 = tmp17495;
var inst_17363__$1 = tmp17494;
var inst_17364__$1 = tmp17496;
var inst_17365__$1 = inst_17381;
var state_17435__$1 = (function (){var statearr_17509 = state_17435;
(statearr_17509[(10)] = inst_17363__$1);

(statearr_17509[(20)] = inst_17362__$1);

(statearr_17509[(21)] = inst_17364__$1);

(statearr_17509[(22)] = inst_17380);

(statearr_17509[(12)] = inst_17365__$1);

return statearr_17509;
})();
var statearr_17514_18917 = state_17435__$1;
(statearr_17514_18917[(2)] = null);

(statearr_17514_18917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (40))){
var inst_17397 = (state_17435[(23)]);
var inst_17401 = done(null);
var inst_17402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17397);
var state_17435__$1 = (function (){var statearr_17515 = state_17435;
(statearr_17515[(24)] = inst_17401);

return statearr_17515;
})();
var statearr_17518_18918 = state_17435__$1;
(statearr_17518_18918[(2)] = inst_17402);

(statearr_17518_18918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (33))){
var inst_17385 = (state_17435[(25)]);
var inst_17387 = cljs.core.chunked_seq_QMARK_(inst_17385);
var state_17435__$1 = state_17435;
if(inst_17387){
var statearr_17519_18919 = state_17435__$1;
(statearr_17519_18919[(1)] = (36));

} else {
var statearr_17521_18920 = state_17435__$1;
(statearr_17521_18920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (13))){
var inst_17302 = (state_17435[(26)]);
var inst_17305 = cljs.core.async.close_BANG_(inst_17302);
var state_17435__$1 = state_17435;
var statearr_17522_18922 = state_17435__$1;
(statearr_17522_18922[(2)] = inst_17305);

(statearr_17522_18922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (22))){
var inst_17331 = (state_17435[(8)]);
var inst_17336 = cljs.core.async.close_BANG_(inst_17331);
var state_17435__$1 = state_17435;
var statearr_17524_18923 = state_17435__$1;
(statearr_17524_18923[(2)] = inst_17336);

(statearr_17524_18923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (36))){
var inst_17385 = (state_17435[(25)]);
var inst_17390 = cljs.core.chunk_first(inst_17385);
var inst_17391 = cljs.core.chunk_rest(inst_17385);
var inst_17392 = cljs.core.count(inst_17390);
var inst_17362 = inst_17391;
var inst_17363 = inst_17390;
var inst_17364 = inst_17392;
var inst_17365 = (0);
var state_17435__$1 = (function (){var statearr_17529 = state_17435;
(statearr_17529[(10)] = inst_17363);

(statearr_17529[(20)] = inst_17362);

(statearr_17529[(21)] = inst_17364);

(statearr_17529[(12)] = inst_17365);

return statearr_17529;
})();
var statearr_17534_18929 = state_17435__$1;
(statearr_17534_18929[(2)] = null);

(statearr_17534_18929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (41))){
var inst_17385 = (state_17435[(25)]);
var inst_17404 = (state_17435[(2)]);
var inst_17405 = cljs.core.next(inst_17385);
var inst_17362 = inst_17405;
var inst_17363 = null;
var inst_17364 = (0);
var inst_17365 = (0);
var state_17435__$1 = (function (){var statearr_17537 = state_17435;
(statearr_17537[(27)] = inst_17404);

(statearr_17537[(10)] = inst_17363);

(statearr_17537[(20)] = inst_17362);

(statearr_17537[(21)] = inst_17364);

(statearr_17537[(12)] = inst_17365);

return statearr_17537;
})();
var statearr_17540_18930 = state_17435__$1;
(statearr_17540_18930[(2)] = null);

(statearr_17540_18930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (43))){
var state_17435__$1 = state_17435;
var statearr_17542_18931 = state_17435__$1;
(statearr_17542_18931[(2)] = null);

(statearr_17542_18931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (29))){
var inst_17413 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17544_18932 = state_17435__$1;
(statearr_17544_18932[(2)] = inst_17413);

(statearr_17544_18932[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (44))){
var inst_17422 = (state_17435[(2)]);
var state_17435__$1 = (function (){var statearr_17545 = state_17435;
(statearr_17545[(28)] = inst_17422);

return statearr_17545;
})();
var statearr_17546_18935 = state_17435__$1;
(statearr_17546_18935[(2)] = null);

(statearr_17546_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (6))){
var inst_17354 = (state_17435[(29)]);
var inst_17353 = cljs.core.deref(cs);
var inst_17354__$1 = cljs.core.keys(inst_17353);
var inst_17355 = cljs.core.count(inst_17354__$1);
var inst_17356 = cljs.core.reset_BANG_(dctr,inst_17355);
var inst_17361 = cljs.core.seq(inst_17354__$1);
var inst_17362 = inst_17361;
var inst_17363 = null;
var inst_17364 = (0);
var inst_17365 = (0);
var state_17435__$1 = (function (){var statearr_17549 = state_17435;
(statearr_17549[(10)] = inst_17363);

(statearr_17549[(20)] = inst_17362);

(statearr_17549[(21)] = inst_17364);

(statearr_17549[(29)] = inst_17354__$1);

(statearr_17549[(12)] = inst_17365);

(statearr_17549[(30)] = inst_17356);

return statearr_17549;
})();
var statearr_17550_18938 = state_17435__$1;
(statearr_17550_18938[(2)] = null);

(statearr_17550_18938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (28))){
var inst_17385 = (state_17435[(25)]);
var inst_17362 = (state_17435[(20)]);
var inst_17385__$1 = cljs.core.seq(inst_17362);
var state_17435__$1 = (function (){var statearr_17551 = state_17435;
(statearr_17551[(25)] = inst_17385__$1);

return statearr_17551;
})();
if(inst_17385__$1){
var statearr_17552_18939 = state_17435__$1;
(statearr_17552_18939[(1)] = (33));

} else {
var statearr_17554_18940 = state_17435__$1;
(statearr_17554_18940[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (25))){
var inst_17364 = (state_17435[(21)]);
var inst_17365 = (state_17435[(12)]);
var inst_17368 = (inst_17365 < inst_17364);
var inst_17369 = inst_17368;
var state_17435__$1 = state_17435;
if(cljs.core.truth_(inst_17369)){
var statearr_17556_18941 = state_17435__$1;
(statearr_17556_18941[(1)] = (27));

} else {
var statearr_17557_18943 = state_17435__$1;
(statearr_17557_18943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (34))){
var state_17435__$1 = state_17435;
var statearr_17558_18945 = state_17435__$1;
(statearr_17558_18945[(2)] = null);

(statearr_17558_18945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (17))){
var state_17435__$1 = state_17435;
var statearr_17559_18946 = state_17435__$1;
(statearr_17559_18946[(2)] = null);

(statearr_17559_18946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (3))){
var inst_17427 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17435__$1,inst_17427);
} else {
if((state_val_17436 === (12))){
var inst_17348 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17560_18947 = state_17435__$1;
(statearr_17560_18947[(2)] = inst_17348);

(statearr_17560_18947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (2))){
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(4),ch);
} else {
if((state_val_17436 === (23))){
var state_17435__$1 = state_17435;
var statearr_17564_18948 = state_17435__$1;
(statearr_17564_18948[(2)] = null);

(statearr_17564_18948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (35))){
var inst_17411 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17567_18949 = state_17435__$1;
(statearr_17567_18949[(2)] = inst_17411);

(statearr_17567_18949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (19))){
var inst_17312 = (state_17435[(7)]);
var inst_17321 = cljs.core.chunk_first(inst_17312);
var inst_17322 = cljs.core.chunk_rest(inst_17312);
var inst_17323 = cljs.core.count(inst_17321);
var inst_17290 = inst_17322;
var inst_17291 = inst_17321;
var inst_17292 = inst_17323;
var inst_17293 = (0);
var state_17435__$1 = (function (){var statearr_17569 = state_17435;
(statearr_17569[(13)] = inst_17293);

(statearr_17569[(14)] = inst_17290);

(statearr_17569[(16)] = inst_17291);

(statearr_17569[(17)] = inst_17292);

return statearr_17569;
})();
var statearr_17570_18950 = state_17435__$1;
(statearr_17570_18950[(2)] = null);

(statearr_17570_18950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (11))){
var inst_17312 = (state_17435[(7)]);
var inst_17290 = (state_17435[(14)]);
var inst_17312__$1 = cljs.core.seq(inst_17290);
var state_17435__$1 = (function (){var statearr_17572 = state_17435;
(statearr_17572[(7)] = inst_17312__$1);

return statearr_17572;
})();
if(inst_17312__$1){
var statearr_17573_18951 = state_17435__$1;
(statearr_17573_18951[(1)] = (16));

} else {
var statearr_17574_18952 = state_17435__$1;
(statearr_17574_18952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (9))){
var inst_17350 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17575_18953 = state_17435__$1;
(statearr_17575_18953[(2)] = inst_17350);

(statearr_17575_18953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (5))){
var inst_17288 = cljs.core.deref(cs);
var inst_17289 = cljs.core.seq(inst_17288);
var inst_17290 = inst_17289;
var inst_17291 = null;
var inst_17292 = (0);
var inst_17293 = (0);
var state_17435__$1 = (function (){var statearr_17576 = state_17435;
(statearr_17576[(13)] = inst_17293);

(statearr_17576[(14)] = inst_17290);

(statearr_17576[(16)] = inst_17291);

(statearr_17576[(17)] = inst_17292);

return statearr_17576;
})();
var statearr_17577_18956 = state_17435__$1;
(statearr_17577_18956[(2)] = null);

(statearr_17577_18956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (14))){
var state_17435__$1 = state_17435;
var statearr_17579_18957 = state_17435__$1;
(statearr_17579_18957[(2)] = null);

(statearr_17579_18957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (45))){
var inst_17419 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17580_18958 = state_17435__$1;
(statearr_17580_18958[(2)] = inst_17419);

(statearr_17580_18958[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (26))){
var inst_17354 = (state_17435[(29)]);
var inst_17415 = (state_17435[(2)]);
var inst_17416 = cljs.core.seq(inst_17354);
var state_17435__$1 = (function (){var statearr_17582 = state_17435;
(statearr_17582[(31)] = inst_17415);

return statearr_17582;
})();
if(inst_17416){
var statearr_17583_18959 = state_17435__$1;
(statearr_17583_18959[(1)] = (42));

} else {
var statearr_17584_18960 = state_17435__$1;
(statearr_17584_18960[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (16))){
var inst_17312 = (state_17435[(7)]);
var inst_17318 = cljs.core.chunked_seq_QMARK_(inst_17312);
var state_17435__$1 = state_17435;
if(inst_17318){
var statearr_17587_18961 = state_17435__$1;
(statearr_17587_18961[(1)] = (19));

} else {
var statearr_17589_18962 = state_17435__$1;
(statearr_17589_18962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (38))){
var inst_17408 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17590_18963 = state_17435__$1;
(statearr_17590_18963[(2)] = inst_17408);

(statearr_17590_18963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (30))){
var state_17435__$1 = state_17435;
var statearr_17591_18964 = state_17435__$1;
(statearr_17591_18964[(2)] = null);

(statearr_17591_18964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (10))){
var inst_17293 = (state_17435[(13)]);
var inst_17291 = (state_17435[(16)]);
var inst_17301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17291,inst_17293);
var inst_17302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17301,(0),null);
var inst_17303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17301,(1),null);
var state_17435__$1 = (function (){var statearr_17600 = state_17435;
(statearr_17600[(26)] = inst_17302);

return statearr_17600;
})();
if(cljs.core.truth_(inst_17303)){
var statearr_17601_18965 = state_17435__$1;
(statearr_17601_18965[(1)] = (13));

} else {
var statearr_17602_18966 = state_17435__$1;
(statearr_17602_18966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (18))){
var inst_17346 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17611_18967 = state_17435__$1;
(statearr_17611_18967[(2)] = inst_17346);

(statearr_17611_18967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (42))){
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(45),dchan);
} else {
if((state_val_17436 === (37))){
var inst_17397 = (state_17435[(23)]);
var inst_17385 = (state_17435[(25)]);
var inst_17281 = (state_17435[(11)]);
var inst_17397__$1 = cljs.core.first(inst_17385);
var inst_17398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17397__$1,inst_17281,done);
var state_17435__$1 = (function (){var statearr_17622 = state_17435;
(statearr_17622[(23)] = inst_17397__$1);

return statearr_17622;
})();
if(cljs.core.truth_(inst_17398)){
var statearr_17624_18968 = state_17435__$1;
(statearr_17624_18968[(1)] = (39));

} else {
var statearr_17626_18969 = state_17435__$1;
(statearr_17626_18969[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (8))){
var inst_17293 = (state_17435[(13)]);
var inst_17292 = (state_17435[(17)]);
var inst_17295 = (inst_17293 < inst_17292);
var inst_17296 = inst_17295;
var state_17435__$1 = state_17435;
if(cljs.core.truth_(inst_17296)){
var statearr_17635_18970 = state_17435__$1;
(statearr_17635_18970[(1)] = (10));

} else {
var statearr_17636_18972 = state_17435__$1;
(statearr_17636_18972[(1)] = (11));

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
});})(c__16191__auto___18884,cs,m,dchan,dctr,done))
;
return ((function (switch__15927__auto__,c__16191__auto___18884,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15928__auto__ = null;
var cljs$core$async$mult_$_state_machine__15928__auto____0 = (function (){
var statearr_17648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17648[(0)] = cljs$core$async$mult_$_state_machine__15928__auto__);

(statearr_17648[(1)] = (1));

return statearr_17648;
});
var cljs$core$async$mult_$_state_machine__15928__auto____1 = (function (state_17435){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_17435);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17654){if((e17654 instanceof Object)){
var ex__15931__auto__ = e17654;
var statearr_17657_18977 = state_17435;
(statearr_17657_18977[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18978 = state_17435;
state_17435 = G__18978;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15928__auto__ = function(state_17435){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15928__auto____1.call(this,state_17435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15928__auto____0;
cljs$core$async$mult_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15928__auto____1;
return cljs$core$async$mult_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___18884,cs,m,dchan,dctr,done))
})();
var state__16193__auto__ = (function (){var statearr_17668 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17668[(6)] = c__16191__auto___18884);

return statearr_17668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___18884,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17670 = arguments.length;
switch (G__17670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18997 = arguments.length;
var i__4642__auto___18998 = (0);
while(true){
if((i__4642__auto___18998 < len__4641__auto___18997)){
args__4647__auto__.push((arguments[i__4642__auto___18998]));

var G__19000 = (i__4642__auto___18998 + (1));
i__4642__auto___18998 = G__19000;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17691){
var map__17692 = p__17691;
var map__17692__$1 = (((((!((map__17692 == null))))?(((((map__17692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17692):map__17692);
var opts = map__17692__$1;
var statearr_17694_19003 = state;
(statearr_17694_19003[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17692,map__17692__$1,opts){
return (function (val){
var statearr_17696_19005 = state;
(statearr_17696_19005[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17692,map__17692__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17697_19008 = state;
(statearr_17697_19008[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17684){
var G__17685 = cljs.core.first(seq17684);
var seq17684__$1 = cljs.core.next(seq17684);
var G__17686 = cljs.core.first(seq17684__$1);
var seq17684__$2 = cljs.core.next(seq17684__$1);
var G__17687 = cljs.core.first(seq17684__$2);
var seq17684__$3 = cljs.core.next(seq17684__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17685,G__17686,G__17687,seq17684__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17703 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17704){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17704 = meta17704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17705,meta17704__$1){
var self__ = this;
var _17705__$1 = this;
return (new cljs.core.async.t_cljs$core$async17703(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17705){
var self__ = this;
var _17705__$1 = this;
return self__.meta17704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17704","meta17704",591821716,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17703";

cljs.core.async.t_cljs$core$async17703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17703.
 */
cljs.core.async.__GT_t_cljs$core$async17703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17703(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17704){
return (new cljs.core.async.t_cljs$core$async17703(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17703(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16191__auto___19026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17811){
var state_val_17812 = (state_17811[(1)]);
if((state_val_17812 === (7))){
var inst_17724 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17813_19027 = state_17811__$1;
(statearr_17813_19027[(2)] = inst_17724);

(statearr_17813_19027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (20))){
var inst_17736 = (state_17811[(7)]);
var state_17811__$1 = state_17811;
var statearr_17814_19029 = state_17811__$1;
(statearr_17814_19029[(2)] = inst_17736);

(statearr_17814_19029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (27))){
var state_17811__$1 = state_17811;
var statearr_17815_19030 = state_17811__$1;
(statearr_17815_19030[(2)] = null);

(statearr_17815_19030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (1))){
var inst_17711 = (state_17811[(8)]);
var inst_17711__$1 = calc_state();
var inst_17713 = (inst_17711__$1 == null);
var inst_17714 = cljs.core.not(inst_17713);
var state_17811__$1 = (function (){var statearr_17816 = state_17811;
(statearr_17816[(8)] = inst_17711__$1);

return statearr_17816;
})();
if(inst_17714){
var statearr_17817_19031 = state_17811__$1;
(statearr_17817_19031[(1)] = (2));

} else {
var statearr_17818_19032 = state_17811__$1;
(statearr_17818_19032[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (24))){
var inst_17769 = (state_17811[(9)]);
var inst_17760 = (state_17811[(10)]);
var inst_17784 = (state_17811[(11)]);
var inst_17784__$1 = (inst_17760.cljs$core$IFn$_invoke$arity$1 ? inst_17760.cljs$core$IFn$_invoke$arity$1(inst_17769) : inst_17760.call(null,inst_17769));
var state_17811__$1 = (function (){var statearr_17819 = state_17811;
(statearr_17819[(11)] = inst_17784__$1);

return statearr_17819;
})();
if(cljs.core.truth_(inst_17784__$1)){
var statearr_17820_19033 = state_17811__$1;
(statearr_17820_19033[(1)] = (29));

} else {
var statearr_17821_19034 = state_17811__$1;
(statearr_17821_19034[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (4))){
var inst_17727 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17727)){
var statearr_17822_19035 = state_17811__$1;
(statearr_17822_19035[(1)] = (8));

} else {
var statearr_17823_19039 = state_17811__$1;
(statearr_17823_19039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (15))){
var inst_17754 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17754)){
var statearr_17824_19044 = state_17811__$1;
(statearr_17824_19044[(1)] = (19));

} else {
var statearr_17825_19045 = state_17811__$1;
(statearr_17825_19045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (21))){
var inst_17759 = (state_17811[(12)]);
var inst_17759__$1 = (state_17811[(2)]);
var inst_17760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17759__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17759__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17759__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17811__$1 = (function (){var statearr_17826 = state_17811;
(statearr_17826[(13)] = inst_17761);

(statearr_17826[(10)] = inst_17760);

(statearr_17826[(12)] = inst_17759__$1);

return statearr_17826;
})();
return cljs.core.async.ioc_alts_BANG_(state_17811__$1,(22),inst_17762);
} else {
if((state_val_17812 === (31))){
var inst_17793 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17793)){
var statearr_17827_19046 = state_17811__$1;
(statearr_17827_19046[(1)] = (32));

} else {
var statearr_17828_19047 = state_17811__$1;
(statearr_17828_19047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (32))){
var inst_17768 = (state_17811[(14)]);
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17811__$1,(35),out,inst_17768);
} else {
if((state_val_17812 === (33))){
var inst_17759 = (state_17811[(12)]);
var inst_17736 = inst_17759;
var state_17811__$1 = (function (){var statearr_17829 = state_17811;
(statearr_17829[(7)] = inst_17736);

return statearr_17829;
})();
var statearr_17830_19048 = state_17811__$1;
(statearr_17830_19048[(2)] = null);

(statearr_17830_19048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (13))){
var inst_17736 = (state_17811[(7)]);
var inst_17743 = inst_17736.cljs$lang$protocol_mask$partition0$;
var inst_17744 = (inst_17743 & (64));
var inst_17745 = inst_17736.cljs$core$ISeq$;
var inst_17746 = (cljs.core.PROTOCOL_SENTINEL === inst_17745);
var inst_17747 = ((inst_17744) || (inst_17746));
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17747)){
var statearr_17831_19049 = state_17811__$1;
(statearr_17831_19049[(1)] = (16));

} else {
var statearr_17832_19050 = state_17811__$1;
(statearr_17832_19050[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (22))){
var inst_17768 = (state_17811[(14)]);
var inst_17769 = (state_17811[(9)]);
var inst_17767 = (state_17811[(2)]);
var inst_17768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17767,(0),null);
var inst_17769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17767,(1),null);
var inst_17770 = (inst_17768__$1 == null);
var inst_17771 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17769__$1,change);
var inst_17772 = ((inst_17770) || (inst_17771));
var state_17811__$1 = (function (){var statearr_17833 = state_17811;
(statearr_17833[(14)] = inst_17768__$1);

(statearr_17833[(9)] = inst_17769__$1);

return statearr_17833;
})();
if(cljs.core.truth_(inst_17772)){
var statearr_17834_19052 = state_17811__$1;
(statearr_17834_19052[(1)] = (23));

} else {
var statearr_17835_19053 = state_17811__$1;
(statearr_17835_19053[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (36))){
var inst_17759 = (state_17811[(12)]);
var inst_17736 = inst_17759;
var state_17811__$1 = (function (){var statearr_17836 = state_17811;
(statearr_17836[(7)] = inst_17736);

return statearr_17836;
})();
var statearr_17837_19055 = state_17811__$1;
(statearr_17837_19055[(2)] = null);

(statearr_17837_19055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (29))){
var inst_17784 = (state_17811[(11)]);
var state_17811__$1 = state_17811;
var statearr_17838_19056 = state_17811__$1;
(statearr_17838_19056[(2)] = inst_17784);

(statearr_17838_19056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (6))){
var state_17811__$1 = state_17811;
var statearr_17839_19058 = state_17811__$1;
(statearr_17839_19058[(2)] = false);

(statearr_17839_19058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (28))){
var inst_17780 = (state_17811[(2)]);
var inst_17781 = calc_state();
var inst_17736 = inst_17781;
var state_17811__$1 = (function (){var statearr_17840 = state_17811;
(statearr_17840[(15)] = inst_17780);

(statearr_17840[(7)] = inst_17736);

return statearr_17840;
})();
var statearr_17841_19059 = state_17811__$1;
(statearr_17841_19059[(2)] = null);

(statearr_17841_19059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (25))){
var inst_17807 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17842_19061 = state_17811__$1;
(statearr_17842_19061[(2)] = inst_17807);

(statearr_17842_19061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (34))){
var inst_17805 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17843_19066 = state_17811__$1;
(statearr_17843_19066[(2)] = inst_17805);

(statearr_17843_19066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (17))){
var state_17811__$1 = state_17811;
var statearr_17845_19067 = state_17811__$1;
(statearr_17845_19067[(2)] = false);

(statearr_17845_19067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (3))){
var state_17811__$1 = state_17811;
var statearr_17846_19069 = state_17811__$1;
(statearr_17846_19069[(2)] = false);

(statearr_17846_19069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (12))){
var inst_17809 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17811__$1,inst_17809);
} else {
if((state_val_17812 === (2))){
var inst_17711 = (state_17811[(8)]);
var inst_17716 = inst_17711.cljs$lang$protocol_mask$partition0$;
var inst_17717 = (inst_17716 & (64));
var inst_17718 = inst_17711.cljs$core$ISeq$;
var inst_17719 = (cljs.core.PROTOCOL_SENTINEL === inst_17718);
var inst_17720 = ((inst_17717) || (inst_17719));
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17720)){
var statearr_17847_19070 = state_17811__$1;
(statearr_17847_19070[(1)] = (5));

} else {
var statearr_17848_19071 = state_17811__$1;
(statearr_17848_19071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (23))){
var inst_17768 = (state_17811[(14)]);
var inst_17774 = (inst_17768 == null);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17774)){
var statearr_17849_19073 = state_17811__$1;
(statearr_17849_19073[(1)] = (26));

} else {
var statearr_17850_19074 = state_17811__$1;
(statearr_17850_19074[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (35))){
var inst_17796 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17796)){
var statearr_17851_19075 = state_17811__$1;
(statearr_17851_19075[(1)] = (36));

} else {
var statearr_17852_19076 = state_17811__$1;
(statearr_17852_19076[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (19))){
var inst_17736 = (state_17811[(7)]);
var inst_17756 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17736);
var state_17811__$1 = state_17811;
var statearr_17853_19081 = state_17811__$1;
(statearr_17853_19081[(2)] = inst_17756);

(statearr_17853_19081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (11))){
var inst_17736 = (state_17811[(7)]);
var inst_17740 = (inst_17736 == null);
var inst_17741 = cljs.core.not(inst_17740);
var state_17811__$1 = state_17811;
if(inst_17741){
var statearr_17854_19082 = state_17811__$1;
(statearr_17854_19082[(1)] = (13));

} else {
var statearr_17855_19083 = state_17811__$1;
(statearr_17855_19083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (9))){
var inst_17711 = (state_17811[(8)]);
var state_17811__$1 = state_17811;
var statearr_17856_19084 = state_17811__$1;
(statearr_17856_19084[(2)] = inst_17711);

(statearr_17856_19084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (5))){
var state_17811__$1 = state_17811;
var statearr_17857_19085 = state_17811__$1;
(statearr_17857_19085[(2)] = true);

(statearr_17857_19085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (14))){
var state_17811__$1 = state_17811;
var statearr_17858_19086 = state_17811__$1;
(statearr_17858_19086[(2)] = false);

(statearr_17858_19086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (26))){
var inst_17769 = (state_17811[(9)]);
var inst_17777 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17769);
var state_17811__$1 = state_17811;
var statearr_17859_19087 = state_17811__$1;
(statearr_17859_19087[(2)] = inst_17777);

(statearr_17859_19087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (16))){
var state_17811__$1 = state_17811;
var statearr_17860_19088 = state_17811__$1;
(statearr_17860_19088[(2)] = true);

(statearr_17860_19088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (38))){
var inst_17801 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17861_19089 = state_17811__$1;
(statearr_17861_19089[(2)] = inst_17801);

(statearr_17861_19089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (30))){
var inst_17761 = (state_17811[(13)]);
var inst_17769 = (state_17811[(9)]);
var inst_17760 = (state_17811[(10)]);
var inst_17787 = cljs.core.empty_QMARK_(inst_17760);
var inst_17788 = (inst_17761.cljs$core$IFn$_invoke$arity$1 ? inst_17761.cljs$core$IFn$_invoke$arity$1(inst_17769) : inst_17761.call(null,inst_17769));
var inst_17789 = cljs.core.not(inst_17788);
var inst_17790 = ((inst_17787) && (inst_17789));
var state_17811__$1 = state_17811;
var statearr_17862_19091 = state_17811__$1;
(statearr_17862_19091[(2)] = inst_17790);

(statearr_17862_19091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (10))){
var inst_17711 = (state_17811[(8)]);
var inst_17732 = (state_17811[(2)]);
var inst_17733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17732,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17732,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17732,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17736 = inst_17711;
var state_17811__$1 = (function (){var statearr_17863 = state_17811;
(statearr_17863[(16)] = inst_17734);

(statearr_17863[(7)] = inst_17736);

(statearr_17863[(17)] = inst_17733);

(statearr_17863[(18)] = inst_17735);

return statearr_17863;
})();
var statearr_17864_19092 = state_17811__$1;
(statearr_17864_19092[(2)] = null);

(statearr_17864_19092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (18))){
var inst_17751 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17865_19093 = state_17811__$1;
(statearr_17865_19093[(2)] = inst_17751);

(statearr_17865_19093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (37))){
var state_17811__$1 = state_17811;
var statearr_17866_19099 = state_17811__$1;
(statearr_17866_19099[(2)] = null);

(statearr_17866_19099[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (8))){
var inst_17711 = (state_17811[(8)]);
var inst_17729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17711);
var state_17811__$1 = state_17811;
var statearr_17867_19102 = state_17811__$1;
(statearr_17867_19102[(2)] = inst_17729);

(statearr_17867_19102[(1)] = (10));


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
}
}
}
}
});})(c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15927__auto__,c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15928__auto__ = null;
var cljs$core$async$mix_$_state_machine__15928__auto____0 = (function (){
var statearr_17868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17868[(0)] = cljs$core$async$mix_$_state_machine__15928__auto__);

(statearr_17868[(1)] = (1));

return statearr_17868;
});
var cljs$core$async$mix_$_state_machine__15928__auto____1 = (function (state_17811){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_17811);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17869){if((e17869 instanceof Object)){
var ex__15931__auto__ = e17869;
var statearr_17870_19103 = state_17811;
(statearr_17870_19103[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19104 = state_17811;
state_17811 = G__19104;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15928__auto__ = function(state_17811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15928__auto____1.call(this,state_17811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15928__auto____0;
cljs$core$async$mix_$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15928__auto____1;
return cljs$core$async$mix_$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16193__auto__ = (function (){var statearr_17871 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17871[(6)] = c__16191__auto___19026);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17873 = arguments.length;
switch (G__17873) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17876 = arguments.length;
switch (G__17876) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__17874_SHARP_){
if(cljs.core.truth_((p1__17874_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17874_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17874_SHARP_.call(null,topic)))){
return p1__17874_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17874_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17877 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17878){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17878 = meta17878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17879,meta17878__$1){
var self__ = this;
var _17879__$1 = this;
return (new cljs.core.async.t_cljs$core$async17877(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17878__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17879){
var self__ = this;
var _17879__$1 = this;
return self__.meta17878;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17878","meta17878",-1410131631,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17877";

cljs.core.async.t_cljs$core$async17877.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17877");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17877.
 */
cljs.core.async.__GT_t_cljs$core$async17877 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17878){
return (new cljs.core.async.t_cljs$core$async17877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17878));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17877(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16191__auto___19120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19120,mults,ensure_mult,p){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19120,mults,ensure_mult,p){
return (function (state_17951){
var state_val_17952 = (state_17951[(1)]);
if((state_val_17952 === (7))){
var inst_17947 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17953_19121 = state_17951__$1;
(statearr_17953_19121[(2)] = inst_17947);

(statearr_17953_19121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (20))){
var state_17951__$1 = state_17951;
var statearr_17954_19122 = state_17951__$1;
(statearr_17954_19122[(2)] = null);

(statearr_17954_19122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (1))){
var state_17951__$1 = state_17951;
var statearr_17955_19123 = state_17951__$1;
(statearr_17955_19123[(2)] = null);

(statearr_17955_19123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (24))){
var inst_17930 = (state_17951[(7)]);
var inst_17939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17930);
var state_17951__$1 = state_17951;
var statearr_17956_19125 = state_17951__$1;
(statearr_17956_19125[(2)] = inst_17939);

(statearr_17956_19125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (4))){
var inst_17882 = (state_17951[(8)]);
var inst_17882__$1 = (state_17951[(2)]);
var inst_17883 = (inst_17882__$1 == null);
var state_17951__$1 = (function (){var statearr_17957 = state_17951;
(statearr_17957[(8)] = inst_17882__$1);

return statearr_17957;
})();
if(cljs.core.truth_(inst_17883)){
var statearr_17958_19127 = state_17951__$1;
(statearr_17958_19127[(1)] = (5));

} else {
var statearr_17959_19128 = state_17951__$1;
(statearr_17959_19128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (15))){
var inst_17924 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17960_19129 = state_17951__$1;
(statearr_17960_19129[(2)] = inst_17924);

(statearr_17960_19129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (21))){
var inst_17944 = (state_17951[(2)]);
var state_17951__$1 = (function (){var statearr_17961 = state_17951;
(statearr_17961[(9)] = inst_17944);

return statearr_17961;
})();
var statearr_17962_19130 = state_17951__$1;
(statearr_17962_19130[(2)] = null);

(statearr_17962_19130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (13))){
var inst_17906 = (state_17951[(10)]);
var inst_17908 = cljs.core.chunked_seq_QMARK_(inst_17906);
var state_17951__$1 = state_17951;
if(inst_17908){
var statearr_17963_19134 = state_17951__$1;
(statearr_17963_19134[(1)] = (16));

} else {
var statearr_17964_19139 = state_17951__$1;
(statearr_17964_19139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (22))){
var inst_17936 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17936)){
var statearr_17965_19143 = state_17951__$1;
(statearr_17965_19143[(1)] = (23));

} else {
var statearr_17966_19144 = state_17951__$1;
(statearr_17966_19144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (6))){
var inst_17932 = (state_17951[(11)]);
var inst_17882 = (state_17951[(8)]);
var inst_17930 = (state_17951[(7)]);
var inst_17930__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17882) : topic_fn.call(null,inst_17882));
var inst_17931 = cljs.core.deref(mults);
var inst_17932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17931,inst_17930__$1);
var state_17951__$1 = (function (){var statearr_17967 = state_17951;
(statearr_17967[(11)] = inst_17932__$1);

(statearr_17967[(7)] = inst_17930__$1);

return statearr_17967;
})();
if(cljs.core.truth_(inst_17932__$1)){
var statearr_17968_19148 = state_17951__$1;
(statearr_17968_19148[(1)] = (19));

} else {
var statearr_17969_19149 = state_17951__$1;
(statearr_17969_19149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (25))){
var inst_17941 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17970_19151 = state_17951__$1;
(statearr_17970_19151[(2)] = inst_17941);

(statearr_17970_19151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (17))){
var inst_17906 = (state_17951[(10)]);
var inst_17915 = cljs.core.first(inst_17906);
var inst_17916 = cljs.core.async.muxch_STAR_(inst_17915);
var inst_17917 = cljs.core.async.close_BANG_(inst_17916);
var inst_17918 = cljs.core.next(inst_17906);
var inst_17892 = inst_17918;
var inst_17893 = null;
var inst_17894 = (0);
var inst_17895 = (0);
var state_17951__$1 = (function (){var statearr_17971 = state_17951;
(statearr_17971[(12)] = inst_17893);

(statearr_17971[(13)] = inst_17895);

(statearr_17971[(14)] = inst_17894);

(statearr_17971[(15)] = inst_17917);

(statearr_17971[(16)] = inst_17892);

return statearr_17971;
})();
var statearr_17972_19155 = state_17951__$1;
(statearr_17972_19155[(2)] = null);

(statearr_17972_19155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (3))){
var inst_17949 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17951__$1,inst_17949);
} else {
if((state_val_17952 === (12))){
var inst_17926 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17973_19162 = state_17951__$1;
(statearr_17973_19162[(2)] = inst_17926);

(statearr_17973_19162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (2))){
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17951__$1,(4),ch);
} else {
if((state_val_17952 === (23))){
var state_17951__$1 = state_17951;
var statearr_17974_19169 = state_17951__$1;
(statearr_17974_19169[(2)] = null);

(statearr_17974_19169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (19))){
var inst_17932 = (state_17951[(11)]);
var inst_17882 = (state_17951[(8)]);
var inst_17934 = cljs.core.async.muxch_STAR_(inst_17932);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(22),inst_17934,inst_17882);
} else {
if((state_val_17952 === (11))){
var inst_17906 = (state_17951[(10)]);
var inst_17892 = (state_17951[(16)]);
var inst_17906__$1 = cljs.core.seq(inst_17892);
var state_17951__$1 = (function (){var statearr_17975 = state_17951;
(statearr_17975[(10)] = inst_17906__$1);

return statearr_17975;
})();
if(inst_17906__$1){
var statearr_17976_19170 = state_17951__$1;
(statearr_17976_19170[(1)] = (13));

} else {
var statearr_17977_19171 = state_17951__$1;
(statearr_17977_19171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (9))){
var inst_17928 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17978_19172 = state_17951__$1;
(statearr_17978_19172[(2)] = inst_17928);

(statearr_17978_19172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (5))){
var inst_17889 = cljs.core.deref(mults);
var inst_17890 = cljs.core.vals(inst_17889);
var inst_17891 = cljs.core.seq(inst_17890);
var inst_17892 = inst_17891;
var inst_17893 = null;
var inst_17894 = (0);
var inst_17895 = (0);
var state_17951__$1 = (function (){var statearr_17979 = state_17951;
(statearr_17979[(12)] = inst_17893);

(statearr_17979[(13)] = inst_17895);

(statearr_17979[(14)] = inst_17894);

(statearr_17979[(16)] = inst_17892);

return statearr_17979;
})();
var statearr_17980_19179 = state_17951__$1;
(statearr_17980_19179[(2)] = null);

(statearr_17980_19179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (14))){
var state_17951__$1 = state_17951;
var statearr_17984_19180 = state_17951__$1;
(statearr_17984_19180[(2)] = null);

(statearr_17984_19180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (16))){
var inst_17906 = (state_17951[(10)]);
var inst_17910 = cljs.core.chunk_first(inst_17906);
var inst_17911 = cljs.core.chunk_rest(inst_17906);
var inst_17912 = cljs.core.count(inst_17910);
var inst_17892 = inst_17911;
var inst_17893 = inst_17910;
var inst_17894 = inst_17912;
var inst_17895 = (0);
var state_17951__$1 = (function (){var statearr_17985 = state_17951;
(statearr_17985[(12)] = inst_17893);

(statearr_17985[(13)] = inst_17895);

(statearr_17985[(14)] = inst_17894);

(statearr_17985[(16)] = inst_17892);

return statearr_17985;
})();
var statearr_17986_19184 = state_17951__$1;
(statearr_17986_19184[(2)] = null);

(statearr_17986_19184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (10))){
var inst_17893 = (state_17951[(12)]);
var inst_17895 = (state_17951[(13)]);
var inst_17894 = (state_17951[(14)]);
var inst_17892 = (state_17951[(16)]);
var inst_17900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17893,inst_17895);
var inst_17901 = cljs.core.async.muxch_STAR_(inst_17900);
var inst_17902 = cljs.core.async.close_BANG_(inst_17901);
var inst_17903 = (inst_17895 + (1));
var tmp17981 = inst_17893;
var tmp17982 = inst_17894;
var tmp17983 = inst_17892;
var inst_17892__$1 = tmp17983;
var inst_17893__$1 = tmp17981;
var inst_17894__$1 = tmp17982;
var inst_17895__$1 = inst_17903;
var state_17951__$1 = (function (){var statearr_17987 = state_17951;
(statearr_17987[(12)] = inst_17893__$1);

(statearr_17987[(17)] = inst_17902);

(statearr_17987[(13)] = inst_17895__$1);

(statearr_17987[(14)] = inst_17894__$1);

(statearr_17987[(16)] = inst_17892__$1);

return statearr_17987;
})();
var statearr_17988_19188 = state_17951__$1;
(statearr_17988_19188[(2)] = null);

(statearr_17988_19188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (18))){
var inst_17921 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17989_19189 = state_17951__$1;
(statearr_17989_19189[(2)] = inst_17921);

(statearr_17989_19189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (8))){
var inst_17895 = (state_17951[(13)]);
var inst_17894 = (state_17951[(14)]);
var inst_17897 = (inst_17895 < inst_17894);
var inst_17898 = inst_17897;
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17898)){
var statearr_17990_19192 = state_17951__$1;
(statearr_17990_19192[(1)] = (10));

} else {
var statearr_17991_19193 = state_17951__$1;
(statearr_17991_19193[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__16191__auto___19120,mults,ensure_mult,p))
;
return ((function (switch__15927__auto__,c__16191__auto___19120,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_17992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17992[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_17992[(1)] = (1));

return statearr_17992;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_17951){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_17951);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e17993){if((e17993 instanceof Object)){
var ex__15931__auto__ = e17993;
var statearr_17994_19194 = state_17951;
(statearr_17994_19194[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17993;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19195 = state_17951;
state_17951 = G__19195;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19120,mults,ensure_mult,p))
})();
var state__16193__auto__ = (function (){var statearr_17995 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_17995[(6)] = c__16191__auto___19120);

return statearr_17995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19120,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17997 = arguments.length;
switch (G__17997) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17999 = arguments.length;
switch (G__17999) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18001 = arguments.length;
switch (G__18001) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16191__auto___19215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18040){
var state_val_18041 = (state_18040[(1)]);
if((state_val_18041 === (7))){
var state_18040__$1 = state_18040;
var statearr_18042_19216 = state_18040__$1;
(statearr_18042_19216[(2)] = null);

(statearr_18042_19216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (1))){
var state_18040__$1 = state_18040;
var statearr_18043_19217 = state_18040__$1;
(statearr_18043_19217[(2)] = null);

(statearr_18043_19217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (4))){
var inst_18004 = (state_18040[(7)]);
var inst_18006 = (inst_18004 < cnt);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_18006)){
var statearr_18045_19218 = state_18040__$1;
(statearr_18045_19218[(1)] = (6));

} else {
var statearr_18046_19219 = state_18040__$1;
(statearr_18046_19219[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (15))){
var inst_18036 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18047_19220 = state_18040__$1;
(statearr_18047_19220[(2)] = inst_18036);

(statearr_18047_19220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (13))){
var inst_18029 = cljs.core.async.close_BANG_(out);
var state_18040__$1 = state_18040;
var statearr_18048_19221 = state_18040__$1;
(statearr_18048_19221[(2)] = inst_18029);

(statearr_18048_19221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (6))){
var state_18040__$1 = state_18040;
var statearr_18049_19222 = state_18040__$1;
(statearr_18049_19222[(2)] = null);

(statearr_18049_19222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (3))){
var inst_18038 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18040__$1,inst_18038);
} else {
if((state_val_18041 === (12))){
var inst_18026 = (state_18040[(8)]);
var inst_18026__$1 = (state_18040[(2)]);
var inst_18027 = cljs.core.some(cljs.core.nil_QMARK_,inst_18026__$1);
var state_18040__$1 = (function (){var statearr_18050 = state_18040;
(statearr_18050[(8)] = inst_18026__$1);

return statearr_18050;
})();
if(cljs.core.truth_(inst_18027)){
var statearr_18051_19223 = state_18040__$1;
(statearr_18051_19223[(1)] = (13));

} else {
var statearr_18052_19224 = state_18040__$1;
(statearr_18052_19224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (2))){
var inst_18003 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18004 = (0);
var state_18040__$1 = (function (){var statearr_18053 = state_18040;
(statearr_18053[(7)] = inst_18004);

(statearr_18053[(9)] = inst_18003);

return statearr_18053;
})();
var statearr_18054_19225 = state_18040__$1;
(statearr_18054_19225[(2)] = null);

(statearr_18054_19225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (11))){
var inst_18004 = (state_18040[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18040,(10),Object,null,(9));
var inst_18013 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18004) : chs__$1.call(null,inst_18004));
var inst_18014 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18004) : done.call(null,inst_18004));
var inst_18015 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18013,inst_18014);
var state_18040__$1 = state_18040;
var statearr_18056_19226 = state_18040__$1;
(statearr_18056_19226[(2)] = inst_18015);


cljs.core.async.impl.ioc_helpers.process_exception(state_18040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (9))){
var inst_18004 = (state_18040[(7)]);
var inst_18017 = (state_18040[(2)]);
var inst_18018 = (inst_18004 + (1));
var inst_18004__$1 = inst_18018;
var state_18040__$1 = (function (){var statearr_18057 = state_18040;
(statearr_18057[(10)] = inst_18017);

(statearr_18057[(7)] = inst_18004__$1);

return statearr_18057;
})();
var statearr_18058_19228 = state_18040__$1;
(statearr_18058_19228[(2)] = null);

(statearr_18058_19228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (5))){
var inst_18024 = (state_18040[(2)]);
var state_18040__$1 = (function (){var statearr_18059 = state_18040;
(statearr_18059[(11)] = inst_18024);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18040__$1,(12),dchan);
} else {
if((state_val_18041 === (14))){
var inst_18026 = (state_18040[(8)]);
var inst_18031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18026);
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18040__$1,(16),out,inst_18031);
} else {
if((state_val_18041 === (16))){
var inst_18033 = (state_18040[(2)]);
var state_18040__$1 = (function (){var statearr_18060 = state_18040;
(statearr_18060[(12)] = inst_18033);

return statearr_18060;
})();
var statearr_18061_19230 = state_18040__$1;
(statearr_18061_19230[(2)] = null);

(statearr_18061_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (10))){
var inst_18008 = (state_18040[(2)]);
var inst_18009 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18040__$1 = (function (){var statearr_18062 = state_18040;
(statearr_18062[(13)] = inst_18008);

return statearr_18062;
})();
var statearr_18063_19232 = state_18040__$1;
(statearr_18063_19232[(2)] = inst_18009);


cljs.core.async.impl.ioc_helpers.process_exception(state_18040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (8))){
var inst_18022 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18064_19233 = state_18040__$1;
(statearr_18064_19233[(2)] = inst_18022);

(statearr_18064_19233[(1)] = (5));


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
});})(c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15927__auto__,c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18068[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18068[(1)] = (1));

return statearr_18068;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18040){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18040);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18071){if((e18071 instanceof Object)){
var ex__15931__auto__ = e18071;
var statearr_18073_19235 = state_18040;
(statearr_18073_19235[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_18040;
state_18040 = G__19236;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16193__auto__ = (function (){var statearr_18074 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18074[(6)] = c__16191__auto___19215);

return statearr_18074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19215,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18079 = arguments.length;
switch (G__18079) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19239,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19239,out){
return (function (state_18120){
var state_val_18122 = (state_18120[(1)]);
if((state_val_18122 === (7))){
var inst_18090 = (state_18120[(7)]);
var inst_18091 = (state_18120[(8)]);
var inst_18090__$1 = (state_18120[(2)]);
var inst_18091__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18090__$1,(0),null);
var inst_18092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18090__$1,(1),null);
var inst_18093 = (inst_18091__$1 == null);
var state_18120__$1 = (function (){var statearr_18136 = state_18120;
(statearr_18136[(7)] = inst_18090__$1);

(statearr_18136[(8)] = inst_18091__$1);

(statearr_18136[(9)] = inst_18092);

return statearr_18136;
})();
if(cljs.core.truth_(inst_18093)){
var statearr_18137_19241 = state_18120__$1;
(statearr_18137_19241[(1)] = (8));

} else {
var statearr_18139_19242 = state_18120__$1;
(statearr_18139_19242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (1))){
var inst_18080 = cljs.core.vec(chs);
var inst_18081 = inst_18080;
var state_18120__$1 = (function (){var statearr_18144 = state_18120;
(statearr_18144[(10)] = inst_18081);

return statearr_18144;
})();
var statearr_18145_19243 = state_18120__$1;
(statearr_18145_19243[(2)] = null);

(statearr_18145_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (4))){
var inst_18081 = (state_18120[(10)]);
var state_18120__$1 = state_18120;
return cljs.core.async.ioc_alts_BANG_(state_18120__$1,(7),inst_18081);
} else {
if((state_val_18122 === (6))){
var inst_18116 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18146_19244 = state_18120__$1;
(statearr_18146_19244[(2)] = inst_18116);

(statearr_18146_19244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (3))){
var inst_18118 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18120__$1,inst_18118);
} else {
if((state_val_18122 === (2))){
var inst_18081 = (state_18120[(10)]);
var inst_18083 = cljs.core.count(inst_18081);
var inst_18084 = (inst_18083 > (0));
var state_18120__$1 = state_18120;
if(cljs.core.truth_(inst_18084)){
var statearr_18148_19245 = state_18120__$1;
(statearr_18148_19245[(1)] = (4));

} else {
var statearr_18149_19246 = state_18120__$1;
(statearr_18149_19246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (11))){
var inst_18081 = (state_18120[(10)]);
var inst_18109 = (state_18120[(2)]);
var tmp18147 = inst_18081;
var inst_18081__$1 = tmp18147;
var state_18120__$1 = (function (){var statearr_18150 = state_18120;
(statearr_18150[(10)] = inst_18081__$1);

(statearr_18150[(11)] = inst_18109);

return statearr_18150;
})();
var statearr_18151_19247 = state_18120__$1;
(statearr_18151_19247[(2)] = null);

(statearr_18151_19247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (9))){
var inst_18091 = (state_18120[(8)]);
var state_18120__$1 = state_18120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18120__$1,(11),out,inst_18091);
} else {
if((state_val_18122 === (5))){
var inst_18114 = cljs.core.async.close_BANG_(out);
var state_18120__$1 = state_18120;
var statearr_18155_19248 = state_18120__$1;
(statearr_18155_19248[(2)] = inst_18114);

(statearr_18155_19248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (10))){
var inst_18112 = (state_18120[(2)]);
var state_18120__$1 = state_18120;
var statearr_18156_19250 = state_18120__$1;
(statearr_18156_19250[(2)] = inst_18112);

(statearr_18156_19250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18122 === (8))){
var inst_18090 = (state_18120[(7)]);
var inst_18091 = (state_18120[(8)]);
var inst_18081 = (state_18120[(10)]);
var inst_18092 = (state_18120[(9)]);
var inst_18100 = (function (){var cs = inst_18081;
var vec__18086 = inst_18090;
var v = inst_18091;
var c = inst_18092;
return ((function (cs,vec__18086,v,c,inst_18090,inst_18091,inst_18081,inst_18092,state_val_18122,c__16191__auto___19239,out){
return (function (p1__18075_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18075_SHARP_);
});
;})(cs,vec__18086,v,c,inst_18090,inst_18091,inst_18081,inst_18092,state_val_18122,c__16191__auto___19239,out))
})();
var inst_18101 = cljs.core.filterv(inst_18100,inst_18081);
var inst_18081__$1 = inst_18101;
var state_18120__$1 = (function (){var statearr_18157 = state_18120;
(statearr_18157[(10)] = inst_18081__$1);

return statearr_18157;
})();
var statearr_18158_19262 = state_18120__$1;
(statearr_18158_19262[(2)] = null);

(statearr_18158_19262[(1)] = (2));


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
});})(c__16191__auto___19239,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19239,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18159[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18159[(1)] = (1));

return statearr_18159;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18120){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18120);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18160){if((e18160 instanceof Object)){
var ex__15931__auto__ = e18160;
var statearr_18162_19271 = state_18120;
(statearr_18162_19271[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19273 = state_18120;
state_18120 = G__19273;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19239,out))
})();
var state__16193__auto__ = (function (){var statearr_18163 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18163[(6)] = c__16191__auto___19239);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19239,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18165 = arguments.length;
switch (G__18165) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19277,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19277,out){
return (function (state_18189){
var state_val_18190 = (state_18189[(1)]);
if((state_val_18190 === (7))){
var inst_18171 = (state_18189[(7)]);
var inst_18171__$1 = (state_18189[(2)]);
var inst_18172 = (inst_18171__$1 == null);
var inst_18173 = cljs.core.not(inst_18172);
var state_18189__$1 = (function (){var statearr_18191 = state_18189;
(statearr_18191[(7)] = inst_18171__$1);

return statearr_18191;
})();
if(inst_18173){
var statearr_18192_19278 = state_18189__$1;
(statearr_18192_19278[(1)] = (8));

} else {
var statearr_18193_19279 = state_18189__$1;
(statearr_18193_19279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (1))){
var inst_18166 = (0);
var state_18189__$1 = (function (){var statearr_18194 = state_18189;
(statearr_18194[(8)] = inst_18166);

return statearr_18194;
})();
var statearr_18195_19284 = state_18189__$1;
(statearr_18195_19284[(2)] = null);

(statearr_18195_19284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (4))){
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18189__$1,(7),ch);
} else {
if((state_val_18190 === (6))){
var inst_18184 = (state_18189[(2)]);
var state_18189__$1 = state_18189;
var statearr_18196_19289 = state_18189__$1;
(statearr_18196_19289[(2)] = inst_18184);

(statearr_18196_19289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (3))){
var inst_18186 = (state_18189[(2)]);
var inst_18187 = cljs.core.async.close_BANG_(out);
var state_18189__$1 = (function (){var statearr_18197 = state_18189;
(statearr_18197[(9)] = inst_18186);

return statearr_18197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18189__$1,inst_18187);
} else {
if((state_val_18190 === (2))){
var inst_18166 = (state_18189[(8)]);
var inst_18168 = (inst_18166 < n);
var state_18189__$1 = state_18189;
if(cljs.core.truth_(inst_18168)){
var statearr_18198_19294 = state_18189__$1;
(statearr_18198_19294[(1)] = (4));

} else {
var statearr_18199_19295 = state_18189__$1;
(statearr_18199_19295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (11))){
var inst_18166 = (state_18189[(8)]);
var inst_18176 = (state_18189[(2)]);
var inst_18177 = (inst_18166 + (1));
var inst_18166__$1 = inst_18177;
var state_18189__$1 = (function (){var statearr_18200 = state_18189;
(statearr_18200[(10)] = inst_18176);

(statearr_18200[(8)] = inst_18166__$1);

return statearr_18200;
})();
var statearr_18201_19299 = state_18189__$1;
(statearr_18201_19299[(2)] = null);

(statearr_18201_19299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (9))){
var state_18189__$1 = state_18189;
var statearr_18202_19304 = state_18189__$1;
(statearr_18202_19304[(2)] = null);

(statearr_18202_19304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (5))){
var state_18189__$1 = state_18189;
var statearr_18203_19305 = state_18189__$1;
(statearr_18203_19305[(2)] = null);

(statearr_18203_19305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (10))){
var inst_18181 = (state_18189[(2)]);
var state_18189__$1 = state_18189;
var statearr_18204_19310 = state_18189__$1;
(statearr_18204_19310[(2)] = inst_18181);

(statearr_18204_19310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (8))){
var inst_18171 = (state_18189[(7)]);
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18189__$1,(11),out,inst_18171);
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
});})(c__16191__auto___19277,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19277,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18205[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18205[(1)] = (1));

return statearr_18205;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18189){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18189);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18206){if((e18206 instanceof Object)){
var ex__15931__auto__ = e18206;
var statearr_18207_19323 = state_18189;
(statearr_18207_19323[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19324 = state_18189;
state_18189 = G__19324;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19277,out))
})();
var state__16193__auto__ = (function (){var statearr_18208 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18208[(6)] = c__16191__auto___19277);

return statearr_18208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19277,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18210 = (function (f,ch,meta18211){
this.f = f;
this.ch = ch;
this.meta18211 = meta18211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18212,meta18211__$1){
var self__ = this;
var _18212__$1 = this;
return (new cljs.core.async.t_cljs$core$async18210(self__.f,self__.ch,meta18211__$1));
});

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18212){
var self__ = this;
var _18212__$1 = this;
return self__.meta18211;
});

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18213 = (function (f,ch,meta18211,_,fn1,meta18214){
this.f = f;
this.ch = ch;
this.meta18211 = meta18211;
this._ = _;
this.fn1 = fn1;
this.meta18214 = meta18214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18215,meta18214__$1){
var self__ = this;
var _18215__$1 = this;
return (new cljs.core.async.t_cljs$core$async18213(self__.f,self__.ch,self__.meta18211,self__._,self__.fn1,meta18214__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18215){
var self__ = this;
var _18215__$1 = this;
return self__.meta18214;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18209_SHARP_){
var G__18216 = (((p1__18209_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18209_SHARP_) : self__.f.call(null,p1__18209_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18216) : f1.call(null,G__18216));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18211","meta18211",-1170265559,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18210","cljs.core.async/t_cljs$core$async18210",-784926016,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18214","meta18214",1424845797,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18213";

cljs.core.async.t_cljs$core$async18213.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18213");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18213.
 */
cljs.core.async.__GT_t_cljs$core$async18213 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18213(f__$1,ch__$1,meta18211__$1,___$2,fn1__$1,meta18214){
return (new cljs.core.async.t_cljs$core$async18213(f__$1,ch__$1,meta18211__$1,___$2,fn1__$1,meta18214));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18213(self__.f,self__.ch,self__.meta18211,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18217 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18217) : self__.f.call(null,G__18217));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18211","meta18211",-1170265559,null)], null);
});

cljs.core.async.t_cljs$core$async18210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18210";

cljs.core.async.t_cljs$core$async18210.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18210");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18210.
 */
cljs.core.async.__GT_t_cljs$core$async18210 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18210(f__$1,ch__$1,meta18211){
return (new cljs.core.async.t_cljs$core$async18210(f__$1,ch__$1,meta18211));
});

}

return (new cljs.core.async.t_cljs$core$async18210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18218 = (function (f,ch,meta18219){
this.f = f;
this.ch = ch;
this.meta18219 = meta18219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18220,meta18219__$1){
var self__ = this;
var _18220__$1 = this;
return (new cljs.core.async.t_cljs$core$async18218(self__.f,self__.ch,meta18219__$1));
});

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18220){
var self__ = this;
var _18220__$1 = this;
return self__.meta18219;
});

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18219","meta18219",-1590610484,null)], null);
});

cljs.core.async.t_cljs$core$async18218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18218";

cljs.core.async.t_cljs$core$async18218.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18218");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18218.
 */
cljs.core.async.__GT_t_cljs$core$async18218 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18218(f__$1,ch__$1,meta18219){
return (new cljs.core.async.t_cljs$core$async18218(f__$1,ch__$1,meta18219));
});

}

return (new cljs.core.async.t_cljs$core$async18218(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18221 = (function (p,ch,meta18222){
this.p = p;
this.ch = ch;
this.meta18222 = meta18222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18223,meta18222__$1){
var self__ = this;
var _18223__$1 = this;
return (new cljs.core.async.t_cljs$core$async18221(self__.p,self__.ch,meta18222__$1));
});

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18223){
var self__ = this;
var _18223__$1 = this;
return self__.meta18222;
});

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18222","meta18222",924239549,null)], null);
});

cljs.core.async.t_cljs$core$async18221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18221";

cljs.core.async.t_cljs$core$async18221.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async18221");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18221.
 */
cljs.core.async.__GT_t_cljs$core$async18221 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18221(p__$1,ch__$1,meta18222){
return (new cljs.core.async.t_cljs$core$async18221(p__$1,ch__$1,meta18222));
});

}

return (new cljs.core.async.t_cljs$core$async18221(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18225 = arguments.length;
switch (G__18225) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19375,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19375,out){
return (function (state_18246){
var state_val_18247 = (state_18246[(1)]);
if((state_val_18247 === (7))){
var inst_18242 = (state_18246[(2)]);
var state_18246__$1 = state_18246;
var statearr_18248_19383 = state_18246__$1;
(statearr_18248_19383[(2)] = inst_18242);

(statearr_18248_19383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (1))){
var state_18246__$1 = state_18246;
var statearr_18249_19389 = state_18246__$1;
(statearr_18249_19389[(2)] = null);

(statearr_18249_19389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (4))){
var inst_18228 = (state_18246[(7)]);
var inst_18228__$1 = (state_18246[(2)]);
var inst_18229 = (inst_18228__$1 == null);
var state_18246__$1 = (function (){var statearr_18250 = state_18246;
(statearr_18250[(7)] = inst_18228__$1);

return statearr_18250;
})();
if(cljs.core.truth_(inst_18229)){
var statearr_18251_19395 = state_18246__$1;
(statearr_18251_19395[(1)] = (5));

} else {
var statearr_18252_19397 = state_18246__$1;
(statearr_18252_19397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (6))){
var inst_18228 = (state_18246[(7)]);
var inst_18233 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18228) : p.call(null,inst_18228));
var state_18246__$1 = state_18246;
if(cljs.core.truth_(inst_18233)){
var statearr_18253_19406 = state_18246__$1;
(statearr_18253_19406[(1)] = (8));

} else {
var statearr_18254_19407 = state_18246__$1;
(statearr_18254_19407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (3))){
var inst_18244 = (state_18246[(2)]);
var state_18246__$1 = state_18246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18246__$1,inst_18244);
} else {
if((state_val_18247 === (2))){
var state_18246__$1 = state_18246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18246__$1,(4),ch);
} else {
if((state_val_18247 === (11))){
var inst_18236 = (state_18246[(2)]);
var state_18246__$1 = state_18246;
var statearr_18255_19416 = state_18246__$1;
(statearr_18255_19416[(2)] = inst_18236);

(statearr_18255_19416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (9))){
var state_18246__$1 = state_18246;
var statearr_18256_19421 = state_18246__$1;
(statearr_18256_19421[(2)] = null);

(statearr_18256_19421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (5))){
var inst_18231 = cljs.core.async.close_BANG_(out);
var state_18246__$1 = state_18246;
var statearr_18257_19433 = state_18246__$1;
(statearr_18257_19433[(2)] = inst_18231);

(statearr_18257_19433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (10))){
var inst_18239 = (state_18246[(2)]);
var state_18246__$1 = (function (){var statearr_18258 = state_18246;
(statearr_18258[(8)] = inst_18239);

return statearr_18258;
})();
var statearr_18259_19434 = state_18246__$1;
(statearr_18259_19434[(2)] = null);

(statearr_18259_19434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (8))){
var inst_18228 = (state_18246[(7)]);
var state_18246__$1 = state_18246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18246__$1,(11),out,inst_18228);
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
});})(c__16191__auto___19375,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19375,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18260 = [null,null,null,null,null,null,null,null,null];
(statearr_18260[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18260[(1)] = (1));

return statearr_18260;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18246){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18246);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18261){if((e18261 instanceof Object)){
var ex__15931__auto__ = e18261;
var statearr_18262_19435 = state_18246;
(statearr_18262_19435[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19440 = state_18246;
state_18246 = G__19440;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19375,out))
})();
var state__16193__auto__ = (function (){var statearr_18263 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18263[(6)] = c__16191__auto___19375);

return statearr_18263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19375,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18265 = arguments.length;
switch (G__18265) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16191__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto__){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto__){
return (function (state_18327){
var state_val_18328 = (state_18327[(1)]);
if((state_val_18328 === (7))){
var inst_18323 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
var statearr_18329_19455 = state_18327__$1;
(statearr_18329_19455[(2)] = inst_18323);

(statearr_18329_19455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (20))){
var inst_18293 = (state_18327[(7)]);
var inst_18304 = (state_18327[(2)]);
var inst_18305 = cljs.core.next(inst_18293);
var inst_18279 = inst_18305;
var inst_18280 = null;
var inst_18281 = (0);
var inst_18282 = (0);
var state_18327__$1 = (function (){var statearr_18330 = state_18327;
(statearr_18330[(8)] = inst_18304);

(statearr_18330[(9)] = inst_18281);

(statearr_18330[(10)] = inst_18279);

(statearr_18330[(11)] = inst_18282);

(statearr_18330[(12)] = inst_18280);

return statearr_18330;
})();
var statearr_18331_19461 = state_18327__$1;
(statearr_18331_19461[(2)] = null);

(statearr_18331_19461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (1))){
var state_18327__$1 = state_18327;
var statearr_18332_19462 = state_18327__$1;
(statearr_18332_19462[(2)] = null);

(statearr_18332_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (4))){
var inst_18268 = (state_18327[(13)]);
var inst_18268__$1 = (state_18327[(2)]);
var inst_18269 = (inst_18268__$1 == null);
var state_18327__$1 = (function (){var statearr_18333 = state_18327;
(statearr_18333[(13)] = inst_18268__$1);

return statearr_18333;
})();
if(cljs.core.truth_(inst_18269)){
var statearr_18334_19463 = state_18327__$1;
(statearr_18334_19463[(1)] = (5));

} else {
var statearr_18335_19464 = state_18327__$1;
(statearr_18335_19464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (15))){
var state_18327__$1 = state_18327;
var statearr_18339_19465 = state_18327__$1;
(statearr_18339_19465[(2)] = null);

(statearr_18339_19465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (21))){
var state_18327__$1 = state_18327;
var statearr_18340_19466 = state_18327__$1;
(statearr_18340_19466[(2)] = null);

(statearr_18340_19466[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (13))){
var inst_18281 = (state_18327[(9)]);
var inst_18279 = (state_18327[(10)]);
var inst_18282 = (state_18327[(11)]);
var inst_18280 = (state_18327[(12)]);
var inst_18289 = (state_18327[(2)]);
var inst_18290 = (inst_18282 + (1));
var tmp18336 = inst_18281;
var tmp18337 = inst_18279;
var tmp18338 = inst_18280;
var inst_18279__$1 = tmp18337;
var inst_18280__$1 = tmp18338;
var inst_18281__$1 = tmp18336;
var inst_18282__$1 = inst_18290;
var state_18327__$1 = (function (){var statearr_18341 = state_18327;
(statearr_18341[(9)] = inst_18281__$1);

(statearr_18341[(10)] = inst_18279__$1);

(statearr_18341[(14)] = inst_18289);

(statearr_18341[(11)] = inst_18282__$1);

(statearr_18341[(12)] = inst_18280__$1);

return statearr_18341;
})();
var statearr_18342_19471 = state_18327__$1;
(statearr_18342_19471[(2)] = null);

(statearr_18342_19471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (22))){
var state_18327__$1 = state_18327;
var statearr_18343_19472 = state_18327__$1;
(statearr_18343_19472[(2)] = null);

(statearr_18343_19472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (6))){
var inst_18268 = (state_18327[(13)]);
var inst_18277 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18268) : f.call(null,inst_18268));
var inst_18278 = cljs.core.seq(inst_18277);
var inst_18279 = inst_18278;
var inst_18280 = null;
var inst_18281 = (0);
var inst_18282 = (0);
var state_18327__$1 = (function (){var statearr_18344 = state_18327;
(statearr_18344[(9)] = inst_18281);

(statearr_18344[(10)] = inst_18279);

(statearr_18344[(11)] = inst_18282);

(statearr_18344[(12)] = inst_18280);

return statearr_18344;
})();
var statearr_18345_19473 = state_18327__$1;
(statearr_18345_19473[(2)] = null);

(statearr_18345_19473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (17))){
var inst_18293 = (state_18327[(7)]);
var inst_18297 = cljs.core.chunk_first(inst_18293);
var inst_18298 = cljs.core.chunk_rest(inst_18293);
var inst_18299 = cljs.core.count(inst_18297);
var inst_18279 = inst_18298;
var inst_18280 = inst_18297;
var inst_18281 = inst_18299;
var inst_18282 = (0);
var state_18327__$1 = (function (){var statearr_18346 = state_18327;
(statearr_18346[(9)] = inst_18281);

(statearr_18346[(10)] = inst_18279);

(statearr_18346[(11)] = inst_18282);

(statearr_18346[(12)] = inst_18280);

return statearr_18346;
})();
var statearr_18347_19476 = state_18327__$1;
(statearr_18347_19476[(2)] = null);

(statearr_18347_19476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (3))){
var inst_18325 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18327__$1,inst_18325);
} else {
if((state_val_18328 === (12))){
var inst_18313 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
var statearr_18348_19481 = state_18327__$1;
(statearr_18348_19481[(2)] = inst_18313);

(statearr_18348_19481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (2))){
var state_18327__$1 = state_18327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18327__$1,(4),in$);
} else {
if((state_val_18328 === (23))){
var inst_18321 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
var statearr_18349_19487 = state_18327__$1;
(statearr_18349_19487[(2)] = inst_18321);

(statearr_18349_19487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (19))){
var inst_18308 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
var statearr_18350_19493 = state_18327__$1;
(statearr_18350_19493[(2)] = inst_18308);

(statearr_18350_19493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (11))){
var inst_18279 = (state_18327[(10)]);
var inst_18293 = (state_18327[(7)]);
var inst_18293__$1 = cljs.core.seq(inst_18279);
var state_18327__$1 = (function (){var statearr_18351 = state_18327;
(statearr_18351[(7)] = inst_18293__$1);

return statearr_18351;
})();
if(inst_18293__$1){
var statearr_18352_19501 = state_18327__$1;
(statearr_18352_19501[(1)] = (14));

} else {
var statearr_18353_19502 = state_18327__$1;
(statearr_18353_19502[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (9))){
var inst_18315 = (state_18327[(2)]);
var inst_18316 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18327__$1 = (function (){var statearr_18354 = state_18327;
(statearr_18354[(15)] = inst_18315);

return statearr_18354;
})();
if(cljs.core.truth_(inst_18316)){
var statearr_18355_19507 = state_18327__$1;
(statearr_18355_19507[(1)] = (21));

} else {
var statearr_18356_19508 = state_18327__$1;
(statearr_18356_19508[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (5))){
var inst_18271 = cljs.core.async.close_BANG_(out);
var state_18327__$1 = state_18327;
var statearr_18357_19513 = state_18327__$1;
(statearr_18357_19513[(2)] = inst_18271);

(statearr_18357_19513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (14))){
var inst_18293 = (state_18327[(7)]);
var inst_18295 = cljs.core.chunked_seq_QMARK_(inst_18293);
var state_18327__$1 = state_18327;
if(inst_18295){
var statearr_18358_19520 = state_18327__$1;
(statearr_18358_19520[(1)] = (17));

} else {
var statearr_18359_19525 = state_18327__$1;
(statearr_18359_19525[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (16))){
var inst_18311 = (state_18327[(2)]);
var state_18327__$1 = state_18327;
var statearr_18360_19528 = state_18327__$1;
(statearr_18360_19528[(2)] = inst_18311);

(statearr_18360_19528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18328 === (10))){
var inst_18282 = (state_18327[(11)]);
var inst_18280 = (state_18327[(12)]);
var inst_18287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18280,inst_18282);
var state_18327__$1 = state_18327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18327__$1,(13),out,inst_18287);
} else {
if((state_val_18328 === (18))){
var inst_18293 = (state_18327[(7)]);
var inst_18302 = cljs.core.first(inst_18293);
var state_18327__$1 = state_18327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18327__$1,(20),out,inst_18302);
} else {
if((state_val_18328 === (8))){
var inst_18281 = (state_18327[(9)]);
var inst_18282 = (state_18327[(11)]);
var inst_18284 = (inst_18282 < inst_18281);
var inst_18285 = inst_18284;
var state_18327__$1 = state_18327;
if(cljs.core.truth_(inst_18285)){
var statearr_18361_19541 = state_18327__$1;
(statearr_18361_19541[(1)] = (10));

} else {
var statearr_18362_19542 = state_18327__$1;
(statearr_18362_19542[(1)] = (11));

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
}
}
}
}
}
}
});})(c__16191__auto__))
;
return ((function (switch__15927__auto__,c__16191__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____1 = (function (state_18327){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18327);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__15931__auto__ = e18364;
var statearr_18365_19543 = state_18327;
(statearr_18365_19543[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19545 = state_18327;
state_18327 = G__19545;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__ = function(state_18327){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____1.call(this,state_18327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto__))
})();
var state__16193__auto__ = (function (){var statearr_18366 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18366[(6)] = c__16191__auto__);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto__))
);

return c__16191__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18368 = arguments.length;
switch (G__18368) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18370 = arguments.length;
switch (G__18370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18372 = arguments.length;
switch (G__18372) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19555,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19555,out){
return (function (state_18396){
var state_val_18397 = (state_18396[(1)]);
if((state_val_18397 === (7))){
var inst_18391 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18398_19561 = state_18396__$1;
(statearr_18398_19561[(2)] = inst_18391);

(statearr_18398_19561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (1))){
var inst_18373 = null;
var state_18396__$1 = (function (){var statearr_18399 = state_18396;
(statearr_18399[(7)] = inst_18373);

return statearr_18399;
})();
var statearr_18400_19567 = state_18396__$1;
(statearr_18400_19567[(2)] = null);

(statearr_18400_19567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (4))){
var inst_18376 = (state_18396[(8)]);
var inst_18376__$1 = (state_18396[(2)]);
var inst_18377 = (inst_18376__$1 == null);
var inst_18378 = cljs.core.not(inst_18377);
var state_18396__$1 = (function (){var statearr_18401 = state_18396;
(statearr_18401[(8)] = inst_18376__$1);

return statearr_18401;
})();
if(inst_18378){
var statearr_18402_19568 = state_18396__$1;
(statearr_18402_19568[(1)] = (5));

} else {
var statearr_18403_19569 = state_18396__$1;
(statearr_18403_19569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (6))){
var state_18396__$1 = state_18396;
var statearr_18404_19570 = state_18396__$1;
(statearr_18404_19570[(2)] = null);

(statearr_18404_19570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (3))){
var inst_18393 = (state_18396[(2)]);
var inst_18394 = cljs.core.async.close_BANG_(out);
var state_18396__$1 = (function (){var statearr_18405 = state_18396;
(statearr_18405[(9)] = inst_18393);

return statearr_18405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18396__$1,inst_18394);
} else {
if((state_val_18397 === (2))){
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18396__$1,(4),ch);
} else {
if((state_val_18397 === (11))){
var inst_18376 = (state_18396[(8)]);
var inst_18385 = (state_18396[(2)]);
var inst_18373 = inst_18376;
var state_18396__$1 = (function (){var statearr_18406 = state_18396;
(statearr_18406[(7)] = inst_18373);

(statearr_18406[(10)] = inst_18385);

return statearr_18406;
})();
var statearr_18407_19572 = state_18396__$1;
(statearr_18407_19572[(2)] = null);

(statearr_18407_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (9))){
var inst_18376 = (state_18396[(8)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18396__$1,(11),out,inst_18376);
} else {
if((state_val_18397 === (5))){
var inst_18376 = (state_18396[(8)]);
var inst_18373 = (state_18396[(7)]);
var inst_18380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18376,inst_18373);
var state_18396__$1 = state_18396;
if(inst_18380){
var statearr_18409_19580 = state_18396__$1;
(statearr_18409_19580[(1)] = (8));

} else {
var statearr_18410_19581 = state_18396__$1;
(statearr_18410_19581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (10))){
var inst_18388 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18411_19582 = state_18396__$1;
(statearr_18411_19582[(2)] = inst_18388);

(statearr_18411_19582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (8))){
var inst_18373 = (state_18396[(7)]);
var tmp18408 = inst_18373;
var inst_18373__$1 = tmp18408;
var state_18396__$1 = (function (){var statearr_18412 = state_18396;
(statearr_18412[(7)] = inst_18373__$1);

return statearr_18412;
})();
var statearr_18413_19583 = state_18396__$1;
(statearr_18413_19583[(2)] = null);

(statearr_18413_19583[(1)] = (2));


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
});})(c__16191__auto___19555,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19555,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18414[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18414[(1)] = (1));

return statearr_18414;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18396){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18396);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18415){if((e18415 instanceof Object)){
var ex__15931__auto__ = e18415;
var statearr_18416_19584 = state_18396;
(statearr_18416_19584[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19588 = state_18396;
state_18396 = G__19588;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19555,out))
})();
var state__16193__auto__ = (function (){var statearr_18417 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18417[(6)] = c__16191__auto___19555);

return statearr_18417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19555,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18419 = arguments.length;
switch (G__18419) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19590,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19590,out){
return (function (state_18457){
var state_val_18458 = (state_18457[(1)]);
if((state_val_18458 === (7))){
var inst_18453 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18459_19591 = state_18457__$1;
(statearr_18459_19591[(2)] = inst_18453);

(statearr_18459_19591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (1))){
var inst_18420 = (new Array(n));
var inst_18421 = inst_18420;
var inst_18422 = (0);
var state_18457__$1 = (function (){var statearr_18460 = state_18457;
(statearr_18460[(7)] = inst_18421);

(statearr_18460[(8)] = inst_18422);

return statearr_18460;
})();
var statearr_18461_19593 = state_18457__$1;
(statearr_18461_19593[(2)] = null);

(statearr_18461_19593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (4))){
var inst_18425 = (state_18457[(9)]);
var inst_18425__$1 = (state_18457[(2)]);
var inst_18426 = (inst_18425__$1 == null);
var inst_18427 = cljs.core.not(inst_18426);
var state_18457__$1 = (function (){var statearr_18462 = state_18457;
(statearr_18462[(9)] = inst_18425__$1);

return statearr_18462;
})();
if(inst_18427){
var statearr_18463_19597 = state_18457__$1;
(statearr_18463_19597[(1)] = (5));

} else {
var statearr_18464_19598 = state_18457__$1;
(statearr_18464_19598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (15))){
var inst_18447 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18465_19599 = state_18457__$1;
(statearr_18465_19599[(2)] = inst_18447);

(statearr_18465_19599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (13))){
var state_18457__$1 = state_18457;
var statearr_18466_19600 = state_18457__$1;
(statearr_18466_19600[(2)] = null);

(statearr_18466_19600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (6))){
var inst_18422 = (state_18457[(8)]);
var inst_18443 = (inst_18422 > (0));
var state_18457__$1 = state_18457;
if(cljs.core.truth_(inst_18443)){
var statearr_18467_19601 = state_18457__$1;
(statearr_18467_19601[(1)] = (12));

} else {
var statearr_18468_19602 = state_18457__$1;
(statearr_18468_19602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (3))){
var inst_18455 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18457__$1,inst_18455);
} else {
if((state_val_18458 === (12))){
var inst_18421 = (state_18457[(7)]);
var inst_18445 = cljs.core.vec(inst_18421);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18457__$1,(15),out,inst_18445);
} else {
if((state_val_18458 === (2))){
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18457__$1,(4),ch);
} else {
if((state_val_18458 === (11))){
var inst_18437 = (state_18457[(2)]);
var inst_18438 = (new Array(n));
var inst_18421 = inst_18438;
var inst_18422 = (0);
var state_18457__$1 = (function (){var statearr_18469 = state_18457;
(statearr_18469[(7)] = inst_18421);

(statearr_18469[(8)] = inst_18422);

(statearr_18469[(10)] = inst_18437);

return statearr_18469;
})();
var statearr_18470_19603 = state_18457__$1;
(statearr_18470_19603[(2)] = null);

(statearr_18470_19603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (9))){
var inst_18421 = (state_18457[(7)]);
var inst_18435 = cljs.core.vec(inst_18421);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18457__$1,(11),out,inst_18435);
} else {
if((state_val_18458 === (5))){
var inst_18425 = (state_18457[(9)]);
var inst_18430 = (state_18457[(11)]);
var inst_18421 = (state_18457[(7)]);
var inst_18422 = (state_18457[(8)]);
var inst_18429 = (inst_18421[inst_18422] = inst_18425);
var inst_18430__$1 = (inst_18422 + (1));
var inst_18431 = (inst_18430__$1 < n);
var state_18457__$1 = (function (){var statearr_18471 = state_18457;
(statearr_18471[(11)] = inst_18430__$1);

(statearr_18471[(12)] = inst_18429);

return statearr_18471;
})();
if(cljs.core.truth_(inst_18431)){
var statearr_18472_19605 = state_18457__$1;
(statearr_18472_19605[(1)] = (8));

} else {
var statearr_18473_19606 = state_18457__$1;
(statearr_18473_19606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (14))){
var inst_18450 = (state_18457[(2)]);
var inst_18451 = cljs.core.async.close_BANG_(out);
var state_18457__$1 = (function (){var statearr_18475 = state_18457;
(statearr_18475[(13)] = inst_18450);

return statearr_18475;
})();
var statearr_18476_19607 = state_18457__$1;
(statearr_18476_19607[(2)] = inst_18451);

(statearr_18476_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (10))){
var inst_18441 = (state_18457[(2)]);
var state_18457__$1 = state_18457;
var statearr_18477_19608 = state_18457__$1;
(statearr_18477_19608[(2)] = inst_18441);

(statearr_18477_19608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18458 === (8))){
var inst_18430 = (state_18457[(11)]);
var inst_18421 = (state_18457[(7)]);
var tmp18474 = inst_18421;
var inst_18421__$1 = tmp18474;
var inst_18422 = inst_18430;
var state_18457__$1 = (function (){var statearr_18478 = state_18457;
(statearr_18478[(7)] = inst_18421__$1);

(statearr_18478[(8)] = inst_18422);

return statearr_18478;
})();
var statearr_18479_19611 = state_18457__$1;
(statearr_18479_19611[(2)] = null);

(statearr_18479_19611[(1)] = (2));


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
});})(c__16191__auto___19590,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19590,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18480[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18480[(1)] = (1));

return statearr_18480;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18457){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18457);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18481){if((e18481 instanceof Object)){
var ex__15931__auto__ = e18481;
var statearr_18482_19612 = state_18457;
(statearr_18482_19612[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19613 = state_18457;
state_18457 = G__19613;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19590,out))
})();
var state__16193__auto__ = (function (){var statearr_18483 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18483[(6)] = c__16191__auto___19590);

return statearr_18483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18485 = arguments.length;
switch (G__18485) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16191__auto___19616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16191__auto___19616,out){
return (function (){
var f__16192__auto__ = (function (){var switch__15927__auto__ = ((function (c__16191__auto___19616,out){
return (function (state_18527){
var state_val_18528 = (state_18527[(1)]);
if((state_val_18528 === (7))){
var inst_18523 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18529_19617 = state_18527__$1;
(statearr_18529_19617[(2)] = inst_18523);

(statearr_18529_19617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (1))){
var inst_18486 = [];
var inst_18487 = inst_18486;
var inst_18488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18527__$1 = (function (){var statearr_18530 = state_18527;
(statearr_18530[(7)] = inst_18487);

(statearr_18530[(8)] = inst_18488);

return statearr_18530;
})();
var statearr_18531_19618 = state_18527__$1;
(statearr_18531_19618[(2)] = null);

(statearr_18531_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (4))){
var inst_18491 = (state_18527[(9)]);
var inst_18491__$1 = (state_18527[(2)]);
var inst_18492 = (inst_18491__$1 == null);
var inst_18493 = cljs.core.not(inst_18492);
var state_18527__$1 = (function (){var statearr_18532 = state_18527;
(statearr_18532[(9)] = inst_18491__$1);

return statearr_18532;
})();
if(inst_18493){
var statearr_18533_19619 = state_18527__$1;
(statearr_18533_19619[(1)] = (5));

} else {
var statearr_18534_19620 = state_18527__$1;
(statearr_18534_19620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (15))){
var inst_18517 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18535_19621 = state_18527__$1;
(statearr_18535_19621[(2)] = inst_18517);

(statearr_18535_19621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (13))){
var state_18527__$1 = state_18527;
var statearr_18536_19622 = state_18527__$1;
(statearr_18536_19622[(2)] = null);

(statearr_18536_19622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (6))){
var inst_18487 = (state_18527[(7)]);
var inst_18512 = inst_18487.length;
var inst_18513 = (inst_18512 > (0));
var state_18527__$1 = state_18527;
if(cljs.core.truth_(inst_18513)){
var statearr_18537_19624 = state_18527__$1;
(statearr_18537_19624[(1)] = (12));

} else {
var statearr_18538_19625 = state_18527__$1;
(statearr_18538_19625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (3))){
var inst_18525 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18527__$1,inst_18525);
} else {
if((state_val_18528 === (12))){
var inst_18487 = (state_18527[(7)]);
var inst_18515 = cljs.core.vec(inst_18487);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18527__$1,(15),out,inst_18515);
} else {
if((state_val_18528 === (2))){
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18527__$1,(4),ch);
} else {
if((state_val_18528 === (11))){
var inst_18491 = (state_18527[(9)]);
var inst_18495 = (state_18527[(10)]);
var inst_18505 = (state_18527[(2)]);
var inst_18506 = [];
var inst_18507 = inst_18506.push(inst_18491);
var inst_18487 = inst_18506;
var inst_18488 = inst_18495;
var state_18527__$1 = (function (){var statearr_18539 = state_18527;
(statearr_18539[(7)] = inst_18487);

(statearr_18539[(8)] = inst_18488);

(statearr_18539[(11)] = inst_18507);

(statearr_18539[(12)] = inst_18505);

return statearr_18539;
})();
var statearr_18540_19627 = state_18527__$1;
(statearr_18540_19627[(2)] = null);

(statearr_18540_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (9))){
var inst_18487 = (state_18527[(7)]);
var inst_18503 = cljs.core.vec(inst_18487);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18527__$1,(11),out,inst_18503);
} else {
if((state_val_18528 === (5))){
var inst_18491 = (state_18527[(9)]);
var inst_18488 = (state_18527[(8)]);
var inst_18495 = (state_18527[(10)]);
var inst_18495__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18491) : f.call(null,inst_18491));
var inst_18496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18495__$1,inst_18488);
var inst_18497 = cljs.core.keyword_identical_QMARK_(inst_18488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18498 = ((inst_18496) || (inst_18497));
var state_18527__$1 = (function (){var statearr_18541 = state_18527;
(statearr_18541[(10)] = inst_18495__$1);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18498)){
var statearr_18542_19629 = state_18527__$1;
(statearr_18542_19629[(1)] = (8));

} else {
var statearr_18543_19632 = state_18527__$1;
(statearr_18543_19632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (14))){
var inst_18520 = (state_18527[(2)]);
var inst_18521 = cljs.core.async.close_BANG_(out);
var state_18527__$1 = (function (){var statearr_18545 = state_18527;
(statearr_18545[(13)] = inst_18520);

return statearr_18545;
})();
var statearr_18546_19637 = state_18527__$1;
(statearr_18546_19637[(2)] = inst_18521);

(statearr_18546_19637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (10))){
var inst_18510 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18547_19638 = state_18527__$1;
(statearr_18547_19638[(2)] = inst_18510);

(statearr_18547_19638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (8))){
var inst_18487 = (state_18527[(7)]);
var inst_18491 = (state_18527[(9)]);
var inst_18495 = (state_18527[(10)]);
var inst_18500 = inst_18487.push(inst_18491);
var tmp18544 = inst_18487;
var inst_18487__$1 = tmp18544;
var inst_18488 = inst_18495;
var state_18527__$1 = (function (){var statearr_18548 = state_18527;
(statearr_18548[(7)] = inst_18487__$1);

(statearr_18548[(14)] = inst_18500);

(statearr_18548[(8)] = inst_18488);

return statearr_18548;
})();
var statearr_18549_19641 = state_18527__$1;
(statearr_18549_19641[(2)] = null);

(statearr_18549_19641[(1)] = (2));


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
});})(c__16191__auto___19616,out))
;
return ((function (switch__15927__auto__,c__16191__auto___19616,out){
return (function() {
var cljs$core$async$state_machine__15928__auto__ = null;
var cljs$core$async$state_machine__15928__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$state_machine__15928__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$state_machine__15928__auto____1 = (function (state_18527){
while(true){
var ret_value__15929__auto__ = (function (){try{while(true){
var result__15930__auto__ = switch__15927__auto__(state_18527);
if(cljs.core.keyword_identical_QMARK_(result__15930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15930__auto__;
}
break;
}
}catch (e18551){if((e18551 instanceof Object)){
var ex__15931__auto__ = e18551;
var statearr_18552_19642 = state_18527;
(statearr_18552_19642[(5)] = ex__15931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19646 = state_18527;
state_18527 = G__19646;
continue;
} else {
return ret_value__15929__auto__;
}
break;
}
});
cljs$core$async$state_machine__15928__auto__ = function(state_18527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15928__auto____1.call(this,state_18527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15928__auto____0;
cljs$core$async$state_machine__15928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15928__auto____1;
return cljs$core$async$state_machine__15928__auto__;
})()
;})(switch__15927__auto__,c__16191__auto___19616,out))
})();
var state__16193__auto__ = (function (){var statearr_18553 = (f__16192__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16192__auto__.cljs$core$IFn$_invoke$arity$0() : f__16192__auto__.call(null));
(statearr_18553[(6)] = c__16191__auto___19616);

return statearr_18553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16193__auto__);
});})(c__16191__auto___19616,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
