/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","ojs/ojmodel"],function(a,g){a.xb=function(){};o_("KnockoutUtils",a.xb,a);a.xb.g4="oj._internalObj";a.xb.wl="oj._underUpdate";a.xb.PC="oj.collectionUpdating";a.xb.H5="oj.collectionSubscription";a.xb.P5="oj.collectionUpdatingFunc";a.xb.map=function(c,b,d){function e(b){return function(d){f[a.xb.wl]||c.set(b,d)}}var f,h,k,l;if(c instanceof a.t){h=Array(c.gg());f=d?g.observableArray(h):h;a.xb.Qka(f,c);if(d)for(h=0;h<c.Dd.length;h++)k=c.Dd[h],f()[k]=a.xb.map(c.gs(k,null,
!0,!1),b);else for(h=0;h<c.Dd.length;h++)k=c.Dd[h],f[k]=a.xb.map(c.gs(k,null,!0,!1),b);h=function(b){var d;try{if(!f[a.xb.wl]){f[a.xb.PC]=!0;for(d=0;d<b.length;d++){var e=b[d].index,g=a.xb.md(b[d].value),h=b[d].status;"added"===h?e>=c.length-1?c.add(g):c.add(g,{at:e}):"deleted"===h&&c.Hy(g,e)}c.comparator&&(f[a.xb.wl]=!0,f.sort(function(b,d){return a.xb.qaa(b,d,c.comparator,c,this)}),f[a.xb.wl]=!1)}}catch(k){throw k;}finally{f[a.xb.PC]=!1}};d&&f.subscribe&&(f[a.xb.P5]=h,f[a.xb.H5]=f.subscribe(h,null,
"arrayChange"));d=function(b,c,d){var e;try{!f[a.xb.PC]&&c instanceof a.t&&(f[a.xb.wl]=!0,e=d.index,f.splice(e,1))}catch(g){throw g;}finally{f[a.xb.wl]=!1}};h=function(c,d,e){var g,h;try{if(!f[a.xb.PC]&&d instanceof a.t&&(f[a.xb.wl]=!0,g=d.PIa(c),void 0!==g&&-1<g))if(h=a.xb.map(c,b),e.fillIn){for(var k=Array.isArray(f)?f.length:f().length;k<g;k++)f.splice(k,0,a.xb.map(d.gs(k,null,!0,!1),b));f.splice(g,1,h)}else f.splice(g,0,h)}catch(l){throw l;}finally{f[a.xb.wl]=!1}};k=function(b){try{!f[a.xb.PC]&&
b instanceof a.t&&(f[a.xb.wl]=!0,g.isObservable(f)?(f[a.xb.H5]&&f[a.xb.H5].dispose(),f.removeAll(),f[a.xb.P5]&&f.subscribe(f[a.xb.P5],null,"arrayChange")):f=[])}catch(c){throw c;}finally{f[a.xb.wl]=!1}};l=function(b){try{!f[a.xb.PC]&&b instanceof a.t&&(f[a.xb.wl]=!0,f.sort(function(d,e){return a.xb.qaa(d,e,c.comparator,b,this)}))}catch(d){throw d;}finally{f[a.xb.wl]=!1}};c.Jr(a.sa.Y.ADD,h,void 0,void 0,!0);c.Jr(a.sa.Y.REMOVE,d,void 0,void 0,!0);c.Jr(a.sa.Y.RESET,k,void 0,void 0,!0);c.Jr(a.sa.Y.SORT,
l,void 0,void 0,!0)}else{if(void 0===c)return;f={};d=c.attributes;h=null;for(h in d)d.hasOwnProperty(h)&&(k=g.observable(c.get(h)),f[h]=k,l=e(h),l.$Wa=h,k.subscribe&&k.subscribe(l));d=function(b){var c,d;try{for(d in f[a.xb.wl]=!0,c=b.Q2(),c)if(c.hasOwnProperty(d))f[d](b.get(d))}catch(e){throw e;}finally{f[a.xb.wl]=!1}};c.Jr(a.sa.Y.CHANGE,d,void 0,void 0,!0);a.xb.Qka(f,c);b&&b(f)}return f};o_("KnockoutUtils.map",a.xb.map,a);a.xb.md=function(c){return c instanceof a.T?c:c.hasOwnProperty(a.xb.g4)?c[a.xb.g4]:
c};a.xb.qaa=function(c,b,d,e,f){return a.t.r7(a.xb.md(c),a.xb.md(b),d,e,f)};a.xb.Qka=function(c,b){Object.defineProperty(c,a.xb.g4,{value:b,enumerable:!1})}});