/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojpagingtabledatasource"],function(a){a.Rg=function(a,c){this.wz=a;this.Et=c};o_("PagingHeaderSet",a.Rg,a);a.Rg.prototype.getData=function(a,c){return this.wz.getData(a+this.Et,c)};a.f.j("PagingHeaderSet.prototype.getData",{getData:a.Rg.prototype.getData});a.Rg.prototype.getMetadata=function(a,c){return this.wz.getMetadata(a+this.Et,c)};a.f.j("PagingHeaderSet.prototype.getMetadata",{getMetadata:a.Rg.prototype.getMetadata});a.Rg.prototype.getCount=function(){return this.wz.getCount()};
a.f.j("PagingHeaderSet.prototype.getCount",{getCount:a.Rg.prototype.getCount});a.Rg.prototype.getLevelCount=function(){return this.wz.getLevelCount()};a.f.j("PagingHeaderSet.prototype.getLevelCount",{getLevelCount:a.Rg.prototype.getLevelCount});a.Rg.prototype.getExtent=function(a,c){return this.wz.getExtent(a+this.Et,c)};a.f.j("PagingHeaderSet.prototype.getExtent",{getExtent:a.Rg.prototype.getExtent});a.Rg.prototype.getDepth=function(a,c){return this.wz.getDepth(a+this.Et,c)};a.f.j("PagingHeaderSet.prototype.getDepth",
{getDepth:a.Rg.prototype.getDepth});a.Rg.prototype.Ena=function(){return this.wz};a.f.j("PagingHeaderSet.prototype.getHeaderSet",{Ena:a.Rg.prototype.Ena});a.Rg.prototype.WI=function(){return this.Et};a.f.j("PagingHeaderSet.prototype.getStartIndex",{WI:a.Rg.prototype.WI});a.Ab=function(g){if(!(g instanceof a.Ut))throw new a.ta("Not a datagridatasource","Not a datagridatasource",a.ta.rd.ERROR);this.Ud=g;this.Aa=0;this.Init()};o_("PagingDataGridDataSource",a.Ab,a);a.f.xa(a.Ab,a.Ut,"oj.PagingDataGridDataSource");
a.Ab.prototype.Init=function(){a.Ab.N.Init.call(this);this.EH()};a.f.j("PagingDataGridDataSource.prototype.Init",{Init:a.Ab.prototype.Init});a.Ab.prototype.EH=function(){this.Ud.on("change",this.KEa.bind(this))};a.Ab.prototype.getPage=function(){return this.Le};a.f.j("PagingDataGridDataSource.prototype.getPage",{getPage:a.Ab.prototype.getPage});a.Ab.prototype.setPage=function(g,c){c=c||{};g=parseInt(g,10);try{a.Ab.N.handleEvent.call(this,a.Ad.Y.BEFOREPAGE,{page:g,previousPage:this.Le})}catch(b){return Promise.reject(null)}this.Cb=
null!=c.pageSize?c.pageSize:this.Cb;c.startIndex=g*this.Cb;var d=this.Le;this.Le=g;this.Aa=c.startIndex;var e=this;return new Promise(function(a,b){e.Bh(c).then(function(){a(null)},function(){e.Le=d;e.Aa=e.Le*e.Cb;b(null)})})};a.f.j("PagingDataGridDataSource.prototype.setPage",{setPage:a.Ab.prototype.setPage});a.Ab.prototype.Bh=function(a){this.Fs=!0;this.Aa=a.startIndex;var c=this;return new Promise(function(a){c.handleEvent("change",{operation:"sync",pageSize:c.Cb});a(void 0)})};a.Ab.prototype.fetch=
function(a){this.Cb=a.pageSize+a.startIndex;a.startIndex=0;return this.Bh(a)};a.f.j("PagingDataGridDataSource.prototype.fetch",{fetch:a.Ab.prototype.fetch});a.Ab.prototype.getStartItemIndex=function(){return this.Aa};a.f.j("PagingDataGridDataSource.prototype.getStartItemIndex",{getStartItemIndex:a.Ab.prototype.getStartItemIndex});a.Ab.prototype.getEndItemIndex=function(){return this.dm};a.f.j("PagingDataGridDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Ab.prototype.getEndItemIndex});a.Ab.prototype.getPageCount=
function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.Cb)};a.f.j("PagingDataGridDataSource.prototype.getPageCount",{getPageCount:a.Ab.prototype.getPageCount});a.Ab.prototype.KEa=function(g){switch(g.operation){case "refresh":this.Le=this.Aa=0;this.handleEvent("change",{operation:"sync",pageSize:this.Cb});this.handleEvent(a.Ma.Y.REFRESH,null);break;case "reset":this.handleEvent(a.Ma.Y.RESET,null);break;case "insert":this.handleEvent(a.Ma.Y.ADD,{index:g.indexes.row});break;case "delete":this.handleEvent(a.Ma.Y.REMOVE,
null);break;case "update":g.indexes.row=0<=g.indexes.row-this.Aa?g.indexes.row-this.Aa:-1;this.handleEvent("change",g);break;default:this.handleEvent("change",g),this.handleEvent(a.Ma.Y.SYNC,null)}};a.Ab.prototype.getCount=function(a){var c=this.Ud.getCount(a);return"row"===a&&0<=c?this.Aa+this.Cb<c?this.Cb:c-this.Aa:c};a.f.j("PagingDataGridDataSource.prototype.getCount",{getCount:a.Ab.prototype.getCount});a.Ab.prototype.getCountPrecision=function(a){return this.Ud.getCountPrecision(a)};a.f.j("PagingDataGridDataSource.prototype.getCountPrecision",
{getCountPrecision:a.Ab.prototype.getCountPrecision});a.Ab.prototype.fetchHeaders=function(a,c,b){null==this.Fs?null!=c&&c.success&&c.success.call(b.success,null,a,null):"row"===a.axis?(a.start+=this.Aa,a.start+a.count>this.Aa+this.Cb&&(a.count=this.Cb-a.start),this.zy={headerRange:a,callbacks:c,callbackObjects:b},this.Ud.fetchHeaders(a,{success:this.HZ.bind(this),error:this.pGa.bind(this)},b)):this.Ud.fetchHeaders(a,c,b)};a.f.j("PagingDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.Ab.prototype.fetchHeaders});
a.Ab.prototype.HZ=function(g,c,b){var d,e;this.zy.headerRange==c&&(c.start-=this.Aa,c.count+=1,null!=g&&(d=new a.Rg(g,this.Aa)),null!=b&&(e=new a.Rg(b,this.Aa)),g=this.zy.callbacks.success,b=this.zy.callbackObjects.success,this.zy=null,g.call(b,d,c,e))};a.Ab.prototype.pGa=function(a){var c,b;c=this.zy.callbacks.error;b=this.zy.callbackObjects.error;this.zy=null;c.call(b,a)};a.Ab.prototype.fetchCells=function(a,c,b){var d;if(null==this.Fs)d={getData:function(){return null},getMetaData:function(){return null},
getStart:function(){return 0},getCount:function(){return 0},getLevelCount:function(){return 0},getExtent:function(){return 0},getDepth:function(){return 1}},null!=c&&c.success&&c.success.call(b.success,d,a);else{for(d=0;d<a.length;d+=1)"row"===a[d].axis&&(a[d].start+=this.Aa,a[d].start+a[d].count>this.Aa+this.Cb&&(a[d].count=this.Cb-a[d].start));this.xy={cellRanges:a,callbacks:c,callbackObjects:b};this.Ud.fetchCells(a,{success:this.JEa.bind(this),error:this.IEa.bind(this)},b)}};a.f.j("PagingDataGridDataSource.prototype.fetchCells",
{fetchCells:a.Ab.prototype.fetchCells});a.Ab.prototype.JEa=function(g,c){var b,d,e;if(!this.xy.cellRanges!=c){for(b=0;b<c.length;b+=1)"row"===c[b].axis&&(c[b].start-=this.Aa,c[b].count+=1);b=new a.Om(g,this.Aa);d=this.xy.callbacks.success;e=this.xy.callbackObjects.success;this.xy=null;this.dm=this.Aa+g.getCount("row")-1;this.handleEvent("sync",{data:Array(g.getCount("row")),startIndex:this.Aa});d.call(e,b,c)}};a.Ab.prototype.IEa=function(a){var c,b;c=this.xy.callbacks.error;b=this.xy.callbackObjects.error;
this.xy=null;c.call(b,a)};a.Ab.prototype.keys=function(a){return this.Ud.keys({column:a.column,row:a.row+this.Aa})};a.f.j("PagingDataGridDataSource.prototype.keys",{keys:a.Ab.prototype.keys});a.Ab.prototype.indexes=function(a){a=this.Ud.indexes(a);-1!=a.row&&(a.row-=this.Aa);return a};a.f.j("PagingDataGridDataSource.prototype.indexes",{indexes:a.Ab.prototype.indexes});a.Ab.prototype.getCapability=function(a){return this.Ud.getCapability(a)};a.f.j("PagingDataGridDataSource.prototype.getCapability",
{getCapability:a.Ab.prototype.getCapability});a.Ab.prototype.size=function(){var a;if(null==this.Fs)return-1;a=this.Ud.getCount("row");return this.Ud.getCount("row")>this.Cb?this.Cb:a};a.f.j("PagingDataGridDataSource.prototype.size",{size:a.Ab.prototype.size});a.Ab.prototype.sort=function(a,c,b){this.Ud.sort(a,c,b)};a.f.j("PagingDataGridDataSource.prototype.sort",{sort:a.Ab.prototype.sort});a.Ab.prototype.totalSize=function(){return null==this.Fs?-1:this.Ud.getCount("row")};a.f.j("PagingDataGridDataSource.prototype.totalSize",
{totalSize:a.Ab.prototype.totalSize});a.Ab.prototype.totalSizeConfidence=function(){return"actual"};a.f.j("PagingDataGridDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Ab.prototype.totalSizeConfidence});a.Ab.prototype.moveOK=function(a,c,b){return this.Ud.moveOK(a,c,b)};a.f.j("PagingDataGridDataSource.prototype.moveOK",{moveOK:a.Ab.prototype.moveOK});a.Ab.prototype.move=function(a,c,b,d,e){this.Ud.move(a,c,b,d,e)};a.f.j("PagingDataGridDataSource.prototype.move",{move:a.Ab.prototype.move});
a.Om=function(a,c){this.yR=a;this.Et=c};o_("PagingCellSet",a.Om,a);a.Om.prototype.getData=function(a){return this.yR.getData({column:a.column,row:a.row+this.Et})};a.f.j("PagingCellSet.prototype.getData",{getData:a.Om.prototype.getData});a.Om.prototype.getMetadata=function(a){return this.yR.getMetadata({column:a.column,row:a.row+this.Et})};a.f.j("PagingCellSet.prototype.getMetadata",{getMetadata:a.Om.prototype.getMetadata});a.Om.prototype.getCount=function(a){return this.yR.getCount(a)};a.f.j("PagingCellSet.prototype.getCount",
{getCount:a.Om.prototype.getCount});a.Om.prototype.mna=function(){return this.yR};a.f.j("PagingCellSet.prototype.getCellSet",{mna:a.Om.prototype.mna});a.Om.prototype.WI=function(){return this.Et};a.f.j("PagingCellSet.prototype.getStartIndex",{WI:a.Om.prototype.WI})});