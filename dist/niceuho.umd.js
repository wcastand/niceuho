!function(o,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){var o=require("chalk"),n=require("util"),r={log:"white",info:"blue",warn:"yellow",error:"red"},e=function(r){for(var e=[],l=arguments.length-1;l-- >0;)e[l]=arguments[l+1];var c=n.format.apply(n,e);return Array.isArray(r)?r.reduce(function(o,n){return o[n]},o)(c):o[r](c)};function l(o){console.log=function(){for(var n=arguments.length,r=Array(n);n--;)r[n]=arguments[n];console.old_log(e.apply(void 0,[o.log].concat(r)))},console.info=function(){for(var n=arguments.length,r=Array(n);n--;)r[n]=arguments[n];console.old_info(e.apply(void 0,[o.info].concat(r)))},console.warn=function(){for(var n=arguments.length,r=Array(n);n--;)r[n]=arguments[n];console.old_warn(e.apply(void 0,[o.warn].concat(r)))},console.error=function(){for(var n=arguments.length,r=Array(n);n--;)r[n]=arguments[n];console.old_error(e.apply(void 0,[o.error].concat(r)))}}console.old_log=console.log,console.old_info=console.info,console.old_warn=console.warn,console.old_error=console.error,l(r),module.exports=function(o){return l(Object.assign(r,o))}});
//# sourceMappingURL=niceuho.umd.js.map
