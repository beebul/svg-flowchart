/*
 jQuery.scrollTo
 Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 Licensed under MIT
 http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 @author Ariel Flesler
 @version 2.1.2
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"undefined"!==typeof module&&module.exports?module.exports=c(require("jquery")):c(jQuery)})(function(c){function n(a){return!a.nodeName||-1!==c.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return c.isFunction(a)||c.isPlainObject(a)?a:{top:a,left:a}}var p=c.scrollTo=function(a,d,b){return c(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};c.fn.scrollTo=function(a,d,b){"object"===
typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=c.extend({},p.defaults,b);d=d||b.duration;var t=b.queue&&1<b.axis.length;t&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=c.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=c(q),e=a,f={};switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e=
h(e);break}e=l?c(e):c(e,q);case "object":if(0===e.length)return;if(e.is||e.style)var u=(e=c(e)).offset()}var v=c.isFunction(b.offset)&&b.offset(q,e)||b.offset;c.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);u?(f[g]=u[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&&
"%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:t&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-c(a)[b.toLowerCase()]();b="client"+b;var k=a.ownerDocument||a.document,l=k.documentElement;k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};c.Tween.propHooks.scrollLeft=c.Tween.propHooks.scrollTop={get:function(a){return c(a.elem)[a.prop]()},
set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return c(a.elem).stop();var b=Math.round(a.now);d!==b&&(c(a.elem)[a.prop](b),a._last=this.get(a))}};return p});