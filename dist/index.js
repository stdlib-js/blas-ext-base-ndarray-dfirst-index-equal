"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var c=l(function(E,o){
var m=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),g=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),x=require('@stdlib/ndarray-base-offset/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),p=require('@stdlib/ndarray-base-clip-index/dist'),y=require('@stdlib/blas-ext-base-dfirst-index-equal/dist').ndarray;function I(a){var r,e,u,n,s,d,i,t,v;return t=a[0],v=a[1],r=m(a[2]),i=g(t,0),r=p(r,i),r>=i?-1:(i-=r,u=q(t,0),s=x(t)+u*r,n=q(v,0),d=x(v)+n*r,e=y(i,f(t),u,s,f(v),n,d),e>=0&&(e+=r),e)}o.exports=I
});var D=c();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
