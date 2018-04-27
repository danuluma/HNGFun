/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(e,t,r,n,a){e.__registerWidget("oj.dvtBaseGauge",t.oj.dvtBaseComponent,{_ProcessStyles:function(){this._super(),this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3],this.options._threshold1=null,this.options._threshold2=null,this.options._threshold3=null},_AfterCreate:function(){this._super();var e={_context:{writeback:!0,internalSet:!0,readOnly:!0}};this.option("rawValue",this.options.value,e)},_GetChildStyleClasses:function(){var e=this._super();return e["oj-gauge-metric-label"]={path:"metricLabel/style",property:"TEXT"},e["oj-gauge-tick-label"]={path:"tickLabel/style",property:"TEXT"},e["oj-gauge-threshold1"]={path:"_threshold1",property:"color"},e["oj-gauge-threshold2"]={path:"_threshold2",property:"color"},e["oj-gauge-threshold3"]={path:"_threshold3",property:"color"},e},_GetEventTypes:function(){return["input","optionChange"]},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtGaugeBundle.EMPTY_TEXT"]=e.labelNoData,t["DvtUtilBundle.GAUGE"]=e.componentName,t},_HandleEvent:function(e){if("valueChange"===e.type){var t=e.newValue;e.complete?this._UserOptionChange("value",t):(this._trigger("input",null,{value:t}),this._UserOptionChange("rawValue",t))}else this._super(e)},_setOption:function(t,r,n){if("rawValue"!==t){if("value"===t){var a={_context:{writeback:!0,internalSet:!0,readOnly:!0}};this.option("rawValue",r,a)}this._super(t,r,n)}else e.Logger.error("'rawValue' is a read-only option and cannot be set")},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-dialgauge-tooltip"!=t&&"oj-ledgauge-tooltip"!=t&&"oj-ratinggauge-tooltip"!=t&&"oj-statusmetergauge-tooltip"!=t||(t="tooltip"),"oj-ratinggauge-item"==t&&null!=e.index&&(t="item["+e.index+"]"),t}},!0),e.__registerWidget("oj.ojDialGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{rawValue:void 0},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.DialGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"==e&&(t.subId="oj-dialgauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-dialgauge"),e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._setImages(),this._super()},_setImages:function(){var t=this.options.background;null==t&&(t="circleAlta",this.options.background="circleAlta");var r=this.options.indicator;if(null==r&&(r="needleAlta",this.options.indicator="needleAlta"),"string"==typeof t){var n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),width:400,height:400}];"rectangleAlta"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),width:200,height:200},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),width:400,height:352}]:"circleLight"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),width:200,height:138},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===t?n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),width:400,height:307}]:"domeDark"===t&&(n=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]),this.options._backgroundImages=n}if("string"==typeof r){var a=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}];"needleAntique"===r?a=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,height:734}]:"needleDark"===r?a=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===r&&(a=[{src:e.Config.getResourceUrl("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=a}},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),e.__registerWidget("oj.ojLedGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{borderColor:"",color:"#393737",label:{style:{},text:""},metricLabel:{converter:null,rendered:"off",scaling:"auto",style:{},text:"",textType:"number"},max:100,min:0,rotation:0,size:1,svgClassName:"",svgStyle:{},thresholds:[],tooltip:{renderer:null},type:"circle",value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.LedGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"==e&&(t.subId="oj-ledgauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ledgauge"),e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),e.__registerWidget("oj.ojRatingGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{changed:!1,changedState:{borderColor:"",color:"#ED2C02",shape:"star",source:"",svgClassName:"",svgStyle:{}},hoverState:{borderColor:"",color:"#007CC8",shape:"star",source:"",svgClassName:"",svgStyle:{}},max:5,min:0,orientation:"horizontal",preserveAspectRatio:"meet",rawValue:null,readonly:!1,selectedState:{borderColor:"",color:"#F8C15A",shape:"star",source:"",svgClassName:"",svgStyle:{}},step:1,thresholds:[],tooltip:{renderer:null},unselectedState:{borderColor:"",color:"#C4CED7",shape:"star",source:"",svgClassName:"",svgStyle:{}},value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.RatingGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"==e?t.subId="oj-ratinggauge-tooltip":0==e.indexOf("item")&&(t.subId="oj-ratinggauge-item",t.index=this._GetFirstIndex(e)),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ratinggauge"),e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},_UserOptionChange:function(e,t){this._superApply(arguments),"value"==e&&this._UserOptionChange("changed",!0)}}),e.__registerWidget("oj.ojStatusMeterGauge",t.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{angleExtent:360,animationOnDataChange:"none",animationOnDisplay:"none",animationDuration:void 0,borderColor:"",borderRadius:"auto",center:{renderer:null},color:"#393737",indicatorSize:1,innerRadius:.7,label:{position:"auto",style:{},text:""},max:100,metricLabel:{converter:null,position:"auto",rendered:"auto",scaling:"auto",style:{},text:"",textType:"number"},min:0,orientation:"horizontal",plotArea:{borderColor:void 0,borderRadius:"auto",color:void 0,rendered:"auto",svgClassName:"",svgStyle:{}},rawValue:null,readonly:!1,referenceLines:[],startAngle:90,step:null,svgClassName:"",svgStyle:{},tooltip:{renderer:null},thresholdDisplay:"onIndicator",thresholds:[],value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),a.StatusMeterGauge.newInstance(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"==e&&(t.subId="oj-statusmetergauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-statusmetergauge"),e},_GetComponentRendererOptions:function(){return["tooltip/renderer","center/renderer"]},_ProcessOptions:function(){this._super();var e=this.options.center;e&&e._renderer&&(e.renderer=this._GetTemplateRenderer(e._renderer,"center"))},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-statusmetergauge"]={path:"animationDuration",property:"ANIM_DUR"},e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}}),e.CustomElementBridge.registerMetadata("dvtBaseGauge","dvtBaseComponent",{properties:{translations:{properties:{componentName:{type:"string"}}}},methods:{},extension:{_WIDGET_NAME:"dvtBaseGauge"}}),function(){e.CustomElementBridge.registerMetadata("oj-led-gauge","dvtBaseGauge",{properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},max:{type:"number"},metricLabel:{type:"object",properties:{converter:{type:"object"},rendered:{type:"string",enumValues:["on","off"]},scaling:{type:"string",enumValues:["auto","none","thousand","million","billion","trillion","quadrillion"]},style:{type:"object"},text:{type:"string"},textType:{type:"string",enumValues:["percent","number"]}}},min:{type:"number"},rotation:{type:"number",enumValues:["0","90","180","270"]},size:{type:"number"},svgStyle:{type:"object"},thresholds:{type:"Array<object>"},label:{type:"object",properties:{style:{type:"object"},text:{type:"string"}}},tooltip:{type:"object",properties:{renderer:{}}},type:{type:"string"},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]},translations:{type:"Object",properties:{componentName:{type:"string",value:"Gauge"},labelAndValue:{type:"string",value:"{0}: {1}"},labelClearSelection:{type:"string",value:"Clear Selection"},labelCountWithTotal:{type:"string",value:"{0} of {1}"},labelDataVisualization:{type:"string",value:"Data Visualization"},labelInvalidData:{type:"string",value:"Invalid data"},labelNoData:{type:"string",value:"No data to display"},stateCollapsed:{type:"string",value:"Collapsed"},stateDrillable:{type:"string",value:"Drillable"},stateExpanded:{type:"string",value:"Expanded"},stateHidden:{type:"string",value:"Hidden"},stateIsolated:{type:"string",value:"Isolated"},stateMaximized:{type:"string",value:"Maximized"},stateMinimized:{type:"string",value:"Minimized"},stateSelected:{type:"string",value:"Selected"},stateUnselected:{type:"string",value:"Unselected"},stateVisible:{type:"string",value:"Visible"}}}},methods:{getMetricLabel:{}},extension:{_WIDGET_NAME:"ojLedGauge"}});var t=e.CustomElementBridge.getMetadata("oj-led-gauge");e.CustomElementBridge.register("oj-led-gauge",{metadata:t,parseFunction:t.extension._DVT_PARSE_FUNC({type:!0},{arrow:!0,square:!0,rectangle:!0,circle:!0,diamond:!0,triangle:!0,human:!0,star:!0})})}(),function(){e.CustomElementBridge.registerMetadata("oj-rating-gauge","dvtBaseGauge",{properties:{changed:{type:"boolean",writeback:!0},changedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string"},source:{type:"string"},svgStyle:{type:"object"}}},hoverState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string"},source:{type:"string"},svgStyle:{type:"object"}}},max:{type:"number"},min:{type:"number"},orientation:{type:"string",orientation:["vertical","horizontal"]},preserveAspectRatio:{type:"string"},readonly:{type:"boolean"},selectedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string"},source:{type:"string"},svgStyle:{type:"object"}}},step:{type:"number",enumValues:["1",".5"]},transientValue:{type:"number",writeback:!0,readOnly:!0},thresholds:{type:"Array<object>"},tooltip:{type:"object",properties:{renderer:{}}},translations:{type:"Object",properties:{componentName:{type:"string",value:"Gauge"},labelAndValue:{type:"string",value:"{0}: {1}"},labelClearSelection:{type:"string",value:"Clear Selection"},labelCountWithTotal:{type:"string",value:"{0} of {1}"},labelDataVisualization:{type:"string",value:"Data Visualization"},labelInvalidData:{type:"string",value:"Invalid data"},labelNoData:{type:"string",value:"No data to display"},stateCollapsed:{type:"string",value:"Collapsed"},stateDrillable:{type:"string",value:"Drillable"},stateExpanded:{type:"string",value:"Expanded"},stateHidden:{type:"string",value:"Hidden"},stateIsolated:{type:"string",value:"Isolated"},stateMaximized:{type:"string",value:"Maximized"},stateMinimized:{type:"string",value:"Minimized"},stateSelected:{type:"string",value:"Selected"},stateUnselected:{type:"string",value:"Unselected"},stateVisible:{type:"string",value:"Visible"}}},unselectedState:{type:"object",properties:{borderColor:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},shape:{type:"string"},source:{type:"string"},svgStyle:{type:"object"}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{},extension:{_ALIASED_PROPS:{transientValue:"rawValue"},_WIDGET_NAME:"ojRatingGauge"}});var t=/\d/,r={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0},n={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0,dot:!0,none:!0},a={"changed-state.shape":!0,"hover-state.shape":!0,"selected-state.shape":!0,"unselected-state.shape":!0};e.CustomElementBridge.register("oj-rating-gauge",{metadata:e.CustomElementBridge.getMetadata("oj-rating-gauge"),parseFunction:function(e,i,s,o){if(a[i]||"unselected-state.shape"===i){if(t.test(e))return e;if(a[i]&&!r[i])throw"Found: "+e+". Expected: "+r.toString();if("unselected-state.shape"!==i||n[i])return e;throw"Found: "+e+". Expected: "+n.toString()}return o(e)}})}(),e.CustomElementBridge.registerMetadata("oj-status-meter-gauge","dvtBaseGauge",{properties:{angleExtent:{type:"number"},animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",enumValues:["auto","none"]},borderColor:{type:"string"},borderRadius:{type:"string"},center:{type:"object",properties:{renderer:{}}},svgClassName:{type:"string"},color:{type:"string"},indicatorSize:{type:"number"},innerRadius:{type:"number"},max:{type:"number"},metricLabel:{type:"object",properties:{converter:{type:"object"},position:{type:"string",enumValues:["auto","center","insideIndicatorEdge","outsideIndicatorEdge","outsidePlotArea","withTitle"]},rendered:{type:"string",enumValues:["auto","on","off"]},scaling:{type:"string",enumValues:["auto","none","thousand","million","billion","trillion","quadrillion"]},style:{type:"object"},text:{type:"string"},textType:{type:"string",enumValues:["percent","number"]}}},min:{type:"number"},orientation:{type:"string",enumValues:["circular","horizontal","vertical"]},plotArea:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string"},svgClassName:{type:"string"},color:{type:"string"},rendered:{type:"string",enumValues:["auto","on","off"]},svgStyle:{type:"object"}}},readonly:{type:"boolean"},referenceLines:{type:"Array<object>"},startAngle:{type:"number"},step:{type:"number"},svgStyle:{type:"object"},transientValue:{type:"number",writeback:!0,readOnly:!0},thresholdDisplay:{type:"string",enumValues:["currentOnly","all","onIndicator"]},thresholds:{type:"Array<object>"},translations:{type:"Object",properties:{componentName:{type:"string",value:"Gauge"},labelAndValue:{type:"string",value:"{0}: {1}"},labelClearSelection:{type:"string",value:"Clear Selection"},labelCountWithTotal:{type:"string",value:"{0} of {1}"},labelDataVisualization:{type:"string",value:"Data Visualization"},labelInvalidData:{type:"string",value:"Invalid data"},labelNoData:{type:"string",value:"No data to display"},stateCollapsed:{type:"string",value:"Collapsed"},stateDrillable:{type:"string",value:"Drillable"},stateExpanded:{type:"string",value:"Expanded"},stateHidden:{type:"string",value:"Hidden"},stateIsolated:{type:"string",value:"Isolated"},stateMaximized:{type:"string",value:"Maximized"},stateMinimized:{type:"string",value:"Minimized"},stateSelected:{type:"string",value:"Selected"},stateUnselected:{type:"string",value:"Unselected"},stateVisible:{type:"string",value:"Visible"}}},label:{type:"object",properties:{position:{type:"string",enumValues:["auto","center","start"]},style:{type:"object"},text:{type:"string"}}},tooltip:{type:"object",properties:{renderer:{}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["none","auto"]}},methods:{getMetricLabel:{}},extension:{_ALIASED_PROPS:{transientValue:"rawValue"},_WIDGET_NAME:"ojStatusMeterGauge"}}),e.CustomElementBridge.register("oj-status-meter-gauge",{metadata:e.CustomElementBridge.getMetadata("oj-status-meter-gauge")})});