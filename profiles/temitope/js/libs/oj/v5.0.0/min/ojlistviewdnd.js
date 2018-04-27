/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojdnd","ojs/ojlistview"],function(t,e){t.ListViewDndContext=function(t){this.listview=t},t.Object.createSubclass(t.ListViewDndContext,t.Object,"oj.ListViewDndContext"),t.ListViewDndContext.C_KEY=67,t.ListViewDndContext.V_KEY=86,t.ListViewDndContext.X_KEY=88,t.ListViewDndContext.CUT_COMMAND="cut",t.ListViewDndContext.COPY_COMMAND="copy",t.ListViewDndContext.PASTE_COMMAND="paste",t.ListViewDndContext.PASTE_BEFORE_COMMAND="pasteBefore",t.ListViewDndContext.PASTE_AFTER_COMMAND="pasteAfter",t.ListViewDndContext.prototype.reset=function(){this._unsetSelectionDraggable(),this.m_itemsDragged=null,this.m_dragImage=null,this.m_currentDragItem=null,this.m_dragItems=null,this.m_contextMenuItem=null},t.ListViewDndContext.prototype._getDndOptions=function(t){var e=this.listview.GetOption("dnd");return null!=e&&e[t]?e[t].items:null},t.ListViewDndContext.prototype._getDragOptions=function(){return this._getDndOptions("drag")},t.ListViewDndContext.prototype._getDropOptions=function(){return this._getDndOptions("drop")},t.ListViewDndContext.prototype.IsItemReOrdering=function(){return"enabled"==this._getDndOptions("reorder")},t.ListViewDndContext.prototype.GetDragAffordanceClass=function(){return"oj-listview-drag-handle"},t.ListViewDndContext.prototype.GetDragImageClass=function(){return"oj-listview-drag-image"},t.ListViewDndContext.prototype.GetDragItemClass=function(){return"oj-listview-drag-item"},t.ListViewDndContext.prototype.GetCutStyleClass=function(){return"oj-listview-cut"},t.ListViewDndContext.prototype.GetCommandPrefix=function(){return"oj-listview-"},t.ListViewDndContext.prototype._findItem=function(t){return this.listview.FindItem(t)},t.ListViewDndContext.prototype._getSelectedItems=function(t){var i,n,s,r;if(i=[],this.listview._isSelectionEnabled())for(n=this.listview.GetOption("selection"),s=0;s<n.length;s++)null==(r=this.listview.FindElementByKey(n[s]))||this.listview.SkipFocus(e(r))||i.push(r);else null!=(r=this._getActiveItem())&&i.push(r);return!t&&null!=this.m_contextMenuItem&&this.m_contextMenuItem.length>0&&(this.listview.element.get(0).contains(this.m_contextMenuItem.get(0))?-1==i.indexOf(this.m_contextMenuItem.get(0))&&i.push(this.m_contextMenuItem.get(0)):this.m_contextMenuItem=null),i},t.ListViewDndContext.prototype._getActiveItem=function(){return null==this.listview.m_active?null:this.listview.m_active.elem[0]},t.ListViewDndContext.prototype._getKeyAndIndex=function(t){return{key:this.listview.GetKey(t.get(0)),index:this.listview._getItemsCache().index(t)}},t.ListViewDndContext.prototype.itemRenderComplete=function(t,i){var n,s;e(t).hasClass(this.listview.getItemStyleClass())||(t=t.firstElementChild),null!=(n=e(t).find("."+this.GetDragAffordanceClass()))&&n.length>0&&(null==(s=n.attr("aria-labelledby"))?n.attr("aria-labelledby",this.listview._createSubId("instr")):n.attr("aria-labelledby",s+" "+this.listview._createSubId("instr")),this.listview._isTouchSupport()&&n.attr("draggable","true"))},t.ListViewDndContext.prototype._unsetSelectionDraggable=function(){this.m_draggableSelection&&e.each(this.m_draggableSelection,function(t,i){e(i).removeClass("oj-draggable")})},t.ListViewDndContext.prototype.setSelectionDraggable=function(){var t,i,n,s=[];for(this._unsetSelectionDraggable(),t=this.listview.GetOption("selection"),i=0;i<t.length;i++)null==(n=this.listview.FindElementByKey(t[i]))||this.listview.SkipFocus(e(n))||(s.push(n),e(n).addClass("oj-draggable"));this.m_draggableSelection=s},t.ListViewDndContext.prototype._setItemDraggable=function(t){var e,i;return e=this.GetDragAffordanceClass(),null!=(i=t.find("."+e))&&i.length>0||(t.addClass("oj-draggable"),!1)},t.ListViewDndContext.prototype._unsetItemDraggable=function(t){t.removeClass("oj-draggable")},t.ListViewDndContext.prototype._setDraggable=function(t){var i,n,s,r;if(null!=this._getDragOptions()||this.IsItemReOrdering()){if(i=this.GetDragAffordanceClass(),t.hasClass(i))s=e(t);else if(n=this._findItem(t),this.shouldDragCurrentItem())s=n;else{if(null!=n&&this._setItemDraggable(n))return;(r=this._getSelectedItems(!0)).length>0&&(null!=n&&r.indexOf(n[0])>-1?s=n:e(r[0]).removeClass("oj-draggable"))}null!=s&&s.attr("draggable",!0)}},t.ListViewDndContext.prototype._unsetDraggable=function(t){var i,n;(null!=this._getDragOptions()||this.IsItemReOrdering())&&(i=this.GetDragAffordanceClass(),null!=(n=t.hasClass(i)?e(t):this._findItem(t))&&n.removeAttr("draggable"))},t.ListViewDndContext.prototype._invokeDndCallback=function(e,i,n,s){var r,o,a;if(r="drag"===e?this._getDragOptions():this._getDropOptions())if((o=r[i])&&"function"==typeof o)try{this.listview.ojContext._IsCustomElement()?(o(n.originalEvent,s),n.originalEvent.defaultPrevented&&n.preventDefault()):(n.dataTransfer=n.originalEvent.dataTransfer,a=o(n,s))}catch(e){t.Logger.error("Error: "+e)}else a=-1;else a=-1;return a},t.ListViewDndContext.prototype._setDragItemDataTransfer=function(t,e,i){var n,s,r=[];for(n=0;n<i.length;n++)(s=this.listview._getDataForItem(i[n]))&&(s.innerHTML&&s.tagName&&"LI"==s.tagName?r.push(s.innerHTML):r.push(s));return r.length>0?(this._setDragItemData(t.originalEvent,e,r),this.SetDragItemImage(t.originalEvent,i),{items:r}):null},t.ListViewDndContext.prototype._setDragItemData=function(t,e,i){var n,s,r;if(n=t.dataTransfer,s=JSON.stringify(i),"string"==typeof e)n.setData(e,s);else if(e)for(r=0;r<e.length;r++)n.setData(e[r],s);n.setData(this.GetDragSourceType(),this.listview.element.get(0).id)},t.ListViewDndContext.prototype.SetDragItemImage=function(t,i){var n,s,r,o,a,l,d=Number.MAX_VALUE,h=0,m=0;if(n=t.target,i.length>1){for((s=e(document.createElement("ul"))).get(0).className=this.listview.element.get(0).className,s.addClass(this.GetDragImageClass()).css({width:this.listview.element.css("width"),height:this.listview.element.css("height")}),r=0;r<i.length;r++)d=Math.min(d,i[r].offsetTop);for(r=0;r<i.length;r++)o=i[r].offsetTop-d,a=i[r].offsetWidth,(l=e(i[r].cloneNode(!0))).removeClass("oj-selected oj-focus oj-hover").css({position:"absolute",top:o,width:a}),s.append(l)}else e(n).hasClass(this.GetDragAffordanceClass())?(o=0,e.contains(i[0],n.offsetParent)&&(o=n.offsetTop),h=Math.max(0,n.offsetLeft-i[0].offsetLeft)+n.offsetWidth/2,m=o+n.offsetHeight/2):(h=Math.max(0,t.offsetX),m=Math.max(0,t.offsetY)),(l=e(i[0].cloneNode(!0))).removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"),(s=e(document.createElement("ul"))).get(0).className=this.listview.element.get(0).className,s.addClass(this.GetDragImageClass()).css({width:this.GetDragImageWidth(i[0]),height:2*i[0].offsetHeight}).append(l);this.listview.isCardLayout()&&s.addClass("oj-listview-card-layout"),e("body").append(s),this.m_dragImage=s,t.dataTransfer.setDragImage(s.get(0),h,m)},t.ListViewDndContext.prototype.GetDragImageWidth=function(t){return this.listview.element.css("width")},t.ListViewDndContext.prototype.GetDefaultDataType=function(){return"text/ojlistview-items-data"},t.ListViewDndContext.prototype._handleDragStart=function(t){var i,n,s,r,o;if((null!=(i=this._getDragOptions())||this.IsItemReOrdering())&&(n=null!=i?i.dataTypes:this.GetDefaultDataType(),e(t.target).hasClass(this.GetDragAffordanceClass())||this.shouldDragCurrentItem()?(s=[]).push(this._findItem(t.target)[0]):s=this._getSelectedItems(!0),s.length>0))return this.m_dragItems=s,this.m_currentDragItem=e(s[0]),!!(r=this._setDragItemDataTransfer(t,n,s))&&(-1===(o=this._invokeDndCallback("drag","dragStart",t,r))?void 0:o)},t.ListViewDndContext.prototype._handleDrag=function(t){return this._invokeDndCallback("drag","drag",t)},t.ListViewDndContext.prototype._destroyDragImage=function(){null!=this.m_dragImage&&(this.m_dragImage.remove(),this.m_dragImage=null)},t.ListViewDndContext.prototype._handleDragEnd=function(t){var i;if(null!=this.m_currentDragItem&&null!=this.m_dragItems)for(this.m_currentDragItem.find("."+this.GetDragAffordanceClass()).removeAttr("draggable"),this.m_currentDragItem.removeClass("oj-drag oj-draggable").removeAttr("draggable"),i=0;i<this.m_dragItems.length;i++)e(this.m_dragItems[i]).removeClass(this.GetDragItemClass()).css("display","");this._cleanupDropTarget(),this._destroyDragImage(),this._unsetSelectionDraggable(),this._invokeDndCallback("drag","dragEnd",t),this.m_itemsDragged=this.m_dragItems,this.m_dragImage=null,this.m_currentDragItem=null,this.m_dragItems=null,this.listview._doBlur()},t.ListViewDndContext.prototype._matchDragDataType=function(t){var e,i,n,s,r;if((i=this._getDropOptions())&&i.dataTypes)for(s="string"==typeof(n=i.dataTypes)?[n]:n,e=t.originalEvent.dataTransfer.types,r=0;r<e.length;r++)if(s.indexOf(e[r])>=0)return!0;return!1},t.ListViewDndContext.prototype._invokeDropCallback=function(t,e,i){var n=this._invokeDndCallback("drop",t,e,i);return void 0!==n&&-1!==n||this._matchDragDataType(e)&&e.preventDefault(),n},t.ListViewDndContext.prototype._createDropTarget=function(t){var i;return null==this.m_dropTarget&&((i=e(t.get(0).cloneNode(!1))).addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block",height:t.outerHeight(),width:t.outerWidth()}),this.m_dropTarget=i),this.m_dropTarget},t.ListViewDndContext.prototype._cleanupGroupItem=function(){null!=this.m_currentDropItem&&-1===this.m_dropTargetIndex&&this.m_currentDropItem.children("."+this.listview.getGroupItemStyleClass()).removeClass("oj-drop")},t.ListViewDndContext.prototype._cleanupEmptyList=function(){null!=this.m_currentDropItem&&this.m_currentDropItem.hasClass(this.listview.getEmptyTextStyleClass())&&(this.m_currentDropItem.removeClass("oj-drop"),this.m_currentDropItem.get(0).textContent=this.listview._getEmptyText())},t.ListViewDndContext.prototype._cleanupDropTarget=function(){null!=this.m_dropTarget&&(this.m_dropTarget.css("height","0"),this.m_dropTarget.remove(),this.m_dropTarget=null),this._cleanupEmptyList(),this._cleanupGroupItem()},t.ListViewDndContext.prototype._handleDragEnter=function(t){var e,i;if(e=this._findItem(t.target),-1!=(i=this._invokeDropCallback("dragEnter",t,{item:e.get(0)})))return i},t.ListViewDndContext.prototype._setCurrentDropItem=function(t){null!=this.m_currentDropItem&&this.m_currentDropItem.removeClass("oj-valid-drop oj-invalid-drop"),this.m_currentDropItem=t,this.m_currentDropItem.addClass("oj-valid-drop")},t.ListViewDndContext.prototype._setAccInfo=function(t,e){var i,n,s;null==(i=t.attr("aria-label"))&&(i=t.text()),n="accessibleReorder"+e.charAt(0).toUpperCase()+e.substr(1)+"Item",s=this.listview.ojContext.getTranslatedString(n,{item:i}),this.listview._setAccInfoText(s)},t.ListViewDndContext.prototype._adjustGroupItemStyle=function(){null==this.m_maxHeightAdjusted&&this.listview._isTouchSupport()&&(this.listview.element.find("ul."+this.listview.getGroupStyleClass()).each(function(t){e(this).attr("oldMaxHeight",e(this).css("maxHeight").toString()),e(this).css("maxHeight",1e4)}),this.m_maxHeightAdjusted="adjusted")},t.ListViewDndContext.prototype._restoreGroupItemStyle=function(){this.listview._isTouchSupport()&&this.listview.element.find("ul."+this.listview.getGroupStyleClass()).each(function(t){e(this).css("maxHeight",parseInt(e(this).attr("oldMaxHeight"),10)),e(this).removeAttr("oldMaxHeight")}),this.m_maxHeightAdjusted=null},t.ListViewDndContext.prototype._handleDragOver=function(t){var i,n,s,r,o,a;if(this._adjustGroupItemStyle(),null!=this.m_dragItems&&"none"!=e(this.m_dragItems[0]).css("display")){if(i=e(this.m_dragItems[0]),-1===(r=this._invokeDropCallback("dragOver",t,{item:i.get(0)}))&&this.IsItemReOrdering()||!1===r||t.isDefaultPrevented()){for(n=this._createDropTarget(i),s=0;s<this.m_dragItems.length;s++)e(this.m_dragItems[s]).addClass(this.GetDragItemClass()).css("display","none");n.insertBefore(i),this.m_dropTargetIndex=n.index()}}else null!=(i=this._findItem(t.target))&&i.length>0?-1===(r=this._invokeDropCallback("dragOver",t,{item:i.get(0)}))&&this.IsItemReOrdering()||!1===r||t.isDefaultPrevented()?(i.hasClass(this.listview.getItemStyleClass())?(this._cleanupGroupItem(),i.hasClass("oj-drop")||(n=this._createDropTarget(i),o=i.index(),null==this.m_dropTargetIndex||this.m_dropTargetIndex<o?(n.insertAfter(i),this.m_dropPosition="after"):(n.insertBefore(i),this.m_dropPosition="before"),this._setAccInfo(i,this.m_dropPosition),this._setCurrentDropItem(i),this.m_dropTargetIndex=n.index())):(this._cleanupDropTarget(),i.children("."+this.listview.getGroupItemStyleClass()).addClass("oj-drop"),this._setCurrentDropItem(i),this.m_dropTargetIndex=-1,this.m_dropPosition="inside",this._setAccInfo(i,this.m_dropPosition)),t.preventDefault()):e(t.target).hasClass(this.listview.getGroupStyleClass())||(i.addClass("oj-invalid-drop"),this._cleanupDropTarget()):null!=(a=this.listview.element.children("."+this.listview.getEmptyTextStyleClass()))&&a.length>0&&(a.addClass("oj-drop"),a.get(0).textContent="",this._setCurrentDropItem(a),t.preventDefault());return r},t.ListViewDndContext.prototype._isDndEventInElement=function(t,e){var i,n;return i=e.getBoundingClientRect(),(n=t.originalEvent).clientX>=i.left&&n.clientX<i.right&&n.clientY>=i.top&&n.clientY<i.bottom},t.ListViewDndContext.prototype._handleDragLeave=function(t){var e,i;if(null!=this.m_currentDropItem)return null!=(e=this._findItem(t.target))&&e.length>0?(e.removeClass("oj-valid-drop oj-invalid-drop"),i=this._invokeDropCallback("dragLeave",t,{item:e.get(0)}),!this._isDndEventInElement(t,t.currentTarget)&&e.hasClass("oj-drop")&&(this._cleanupDropTarget(),this._restoreGroupItemStyle())):this._isDndEventInElement(t,t.currentTarget)||this._cleanupEmptyList(),-1!=i?i:void 0},t.ListViewDndContext.prototype._handleDrop=function(t){var e,i,n;if(null!=this.m_currentDropItem)return e=t.originalEvent.dataTransfer.getData(this.GetDragSourceType()),i=this.m_currentDropItem.hasClass(this.listview.getEmptyTextStyleClass())?{}:{item:this.m_currentDropItem.get(0),position:this.m_dropPosition},this.IsItemReOrdering()&&e===this.listview.element.get(0).id?i.reorder=!0:i.reorder=!1,null!=this.m_currentDropItem&&this.m_currentDropItem.removeClass("oj-valid-drop"),this._cleanupDropTarget(),this._restoreGroupItemStyle(),this._destroyDragImage(),n=this._invokeDropCallback("drop",t,i),i.reorder&&(i.items=null==this.m_dragItems?this.m_itemsDragged:this.m_dragItems,this.listview.Trigger("reorder",t,this.CreateReorderPayload(i.items,i.position,i.item)),t.preventDefault()),this.m_currentDropItem=null,this.m_dropTargetIndex=-1,this.m_dropPosition=null,this.m_itemsDragged=null,-1===n?void 0:n},t.ListViewDndContext.prototype.CreateReorderPayload=function(t,e,i){return{items:t,position:e,reference:i}},t.ListViewDndContext.prototype.prepareContextMenu=function(t){var i,n,s=this;this.IsItemReOrdering()&&(i=e(t),this.m_contextMenu!=t&&(this.m_contextMenu=t,"OJ-MENU"===t.tagName?(t.addEventListener("ojBeforeOpen",this._handleContextMenuBeforeOpen.bind(this)),t.addEventListener("ojAction",this._handleContextMenuSelect.bind(this))):(i.on("ojbeforeopen",this._handleContextMenuBeforeOpen.bind(this)),i.on("ojselect",this._handleContextMenuSelect.bind(this)))),n=this._getCommands(t,function(t,i){var n=s._buildContextMenuItem(i,t.tagName);"OJ-OPTION"===t.tagName?(t.innerHTML=n.get(0).innerHTML,e(t).attr("data-oj-command",n.attr("data-oj-command"))):(n.get(0).className=e(t).get(0).className,e(t).replaceWith(n))}),this.m_menuItemsSet=n,n.length>0&&i.data("oj-ojMenu")&&("OJ-MENU"===t.tagName?t.refresh():e(t).ojMenu("refresh")))},t.ListViewDndContext.prototype._getDndContextMenuItemSelector=function(){var t=this,e="",i=["cut","copy","paste","paste-before","paste-after","pasteBefore","pasteAfter"];return this.m_dndMenuItemSelector||(i.forEach(function(n,s){e+="[data-oj-command="+t.GetCommandPrefix()+n+"],",e+="[data-oj-command="+n+"]",s<i.length-1&&(e+=",")}),this.m_dndMenuItemSelector=e),this.m_dndMenuItemSelector},t.ListViewDndContext.prototype._getCommands=function(i,n){var s,r;return r=this,s=[],e(i).find(this._getDndContextMenuItemSelector()).each(function(){var i;0===e(this).children("a").length?0==e(this).attr("data-oj-command").indexOf(r.GetCommandPrefix())&&(i=e(this).attr("data-oj-command").substring(r.GetCommandPrefix().length),n&&n(this,i)):(i=e(this).attr("data-oj-command"))==t.ListViewDndContext.PASTE_BEFORE_COMMAND?i="paste-before":i==t.ListViewDndContext.PASTE_AFTER_COMMAND&&(i="paste-after"),i&&s.push(i)}),s},t.ListViewDndContext.prototype._buildContextMenuItem=function(e,i){return"paste-before"===e?this._buildContextMenuListItem(t.ListViewDndContext.PASTE_BEFORE_COMMAND,i):"paste-after"===e?this._buildContextMenuListItem(t.ListViewDndContext.PASTE_AFTER_COMMAND,i):this._buildContextMenuListItem(e,i)},t.ListViewDndContext.prototype._buildContextMenuListItem=function(t,i){var n=e(document.createElement(i));return n.attr("data-oj-command",t),n.append(this._buildContextMenuLabel(t,"OJ-OPTION"===i)),n},t.ListViewDndContext.prototype._buildContextMenuLabel=function(t,i){var n="label"+t.charAt(0).toUpperCase()+t.slice(1),s=document.createTextNode(this.listview.ojContext.getTranslatedString(n));return i?s:e('<a href="#"></a>').append(s)},t.ListViewDndContext.prototype._handleCut=function(t){var i;null!=this.m_clipboard&&e(this.m_clipboard).removeClass(this.GetCutStyleClass()),i=this.GetCutItems(t),this.listview.ojContext.element.focus(),e(i).addClass(this.GetCutStyleClass()),this.m_clipboard=i,this.listview.Trigger("cut",t,{items:i})},t.ListViewDndContext.prototype.GetCutItems=function(t){return this._getSelectedItems()},t.ListViewDndContext.prototype._handleCopy=function(t){var i;null!=this.m_clipboard&&e(this.m_clipboard).removeClass(this.GetCutStyleClass()),i=this._getSelectedItems(),this.m_clipboard=i,this.listview.Trigger("copy",t,{items:i})},t.ListViewDndContext.prototype._handlePaste=function(t,i,n){this.listview.Trigger("paste",t,{item:i.get(0)}),e(this.m_clipboard).removeClass(this.GetCutStyleClass()),this.listview.Trigger("reorder",t,this.CreateReorderPayload(this.m_clipboard,n,i.get(0))),this.m_clipboard=null},t.ListViewDndContext.prototype._handleContextMenuSelect=function(i,n){if(null!=this.m_contextMenuItem)switch((n?n.item:e(i.target)).attr("data-oj-command")){case t.ListViewDndContext.CUT_COMMAND:this._handleCut(i);break;case t.ListViewDndContext.COPY_COMMAND:this._handleCopy(i);break;case t.ListViewDndContext.PASTE_COMMAND:var s=!0;case t.ListViewDndContext.PASTE_BEFORE_COMMAND:var r=!0;case t.ListViewDndContext.PASTE_AFTER_COMMAND:var o="after";s?o="inside":r&&(o="before"),this._handlePaste(i,this.m_contextMenuItem,o),this.m_contextMenuItem=null}},t.ListViewDndContext.prototype._appendToMenuContainer=function(e,i){null!=this.m_menuItemsSet&&("paste-before"==i?i=t.ListViewDndContext.PASTE_BEFORE_COMMAND:"paste-after"==i&&(i=t.ListViewDndContext.PASTE_AFTER_COMMAND),e.find("[data-oj-command='"+i+"']").removeClass("oj-disabled"))},t.ListViewDndContext.prototype._handleContextMenuBeforeOpen=function(t,i){var n,s;(n=e(t.target)).find(this._getDndContextMenuItemSelector()).addClass("oj-disabled"),null!=(s=i?i.openOptions.launcher:t.detail.openOptions.launcher)&&null!=this.m_menuItemsSet&&0!=this.m_menuItemsSet.length?(s.children().first().hasClass(this.listview.getGroupItemStyleClass())?null!=this.m_clipboard&&this._appendToMenuContainer(n,"paste"):(this._appendToMenuContainer(n,"cut"),this._appendToMenuContainer(n,"copy"),null!=this.m_clipboard&&(this._appendToMenuContainer(n,"paste-before"),this._appendToMenuContainer(n,"paste-after"))),"OJ-MENU"!=n.get(0).tagName&&n.ojMenu("refresh"),this.m_contextMenuItem=s):"OJ-MENU"!=n.get(0).tagName&&n.ojMenu("refresh")},t.ListViewDndContext.prototype.HandleKeyDown=function(i){var n,s,r,o,a;if((i.ctrlKey||i.metaKey)&&((n=i.keyCode)===t.ListViewDndContext.X_KEY||n===t.ListViewDndContext.C_KEY||t.ListViewDndContext.V_KEY)){if(!this.IsItemReOrdering())return!1;if(null==(s=this.listview.ojContext._GetContextMenu()))return!1;if(0==(r=this._getCommands(s)).length)return!1;if(n===t.ListViewDndContext.X_KEY&&r.indexOf("cut")>-1)return this._handleCut(i),!0;if(n===t.ListViewDndContext.C_KEY&&r.indexOf("copy")>-1)return this._handleCopy(i),!0;if(n===t.ListViewDndContext.V_KEY&&null!=this.m_clipboard&&((o=e(this._getActiveItem())).children().first().hasClass(this.listview.getGroupItemStyleClass())?r.indexOf("paste")>-1&&(a="inside"):r.indexOf("paste-before")>-1?a="before":r.indexOf("paste-after")>-1&&(a="after"),null!=a))return this._handlePaste(i,o,a),!0}return!1},t.ListViewDndContext.prototype.shouldDragCurrentItem=function(){return!1},t.ListViewDndContext.prototype.GetDragSourceType=function(){return"text/ojlistview-dragsource-id"}});