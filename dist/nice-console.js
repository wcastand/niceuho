var o=require("chalk"),r=require("util"),n={log:"white",info:"blue",warn:"yellow",error:"red"},l=function(n){for(var l=[],e=arguments.length-1;e-- >0;)l[e]=arguments[e+1];var c=r.format.apply(r,l);return Array.isArray(n)?n.reduce(function(o,r){return o[r]},o)(c):o[n](c)};function e(o){console.log=function(){for(var r=arguments.length,n=Array(r);r--;)n[r]=arguments[r];console.old_log(l.apply(void 0,[o.log].concat(n)))},console.info=function(){for(var r=arguments.length,n=Array(r);r--;)n[r]=arguments[r];console.old_info(l.apply(void 0,[o.info].concat(n)))},console.warn=function(){for(var r=arguments.length,n=Array(r);r--;)n[r]=arguments[r];console.old_warn(l.apply(void 0,[o.warn].concat(n)))},console.error=function(){for(var r=arguments.length,n=Array(r);r--;)n[r]=arguments[r];console.old_error(l.apply(void 0,[o.error].concat(n)))}}console.old_log=console.log,console.old_info=console.info,console.old_warn=console.warn,console.old_error=console.error,e(n),module.exports=function(o){return e(Object.assign(n,o))};
//# sourceMappingURL=nice-console.js.map
