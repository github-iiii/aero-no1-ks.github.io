(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({kevin:"kevin"}[t]||t)+"."+{kevin:"0c9ee102"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,a[1](s)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/asdl-kendeda/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f4b":function(t,e,a){t.exports=a.p+"img/LBC1.8fcaa9f8.png"},4046:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container-fluid",{staticClass:"ma-0 pa-0"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg8:"",md12:"",xs12:""}},[r("v-card",{ref:"imageCard",staticClass:"pa-2 ma-2",staticStyle:{position:"relative",top:"0px"},attrs:{id:"imageCard"}},[r("div",{staticStyle:{position:"relative"},style:t.weatherColors[t.weatherOption],attrs:{"display-inline-block":""}},[r("v-img",{staticStyle:{position:"relative",top:"0px",left:"0px",opacity:".8"},attrs:{id:"LBC1ID",src:a("1f4b"),"max-height":"auto","max-width":"100%"},on:{click:function(t){}}}),r("div",{ref:"waterEcharts",staticStyle:{position:"absolute",top:"72.6%",left:"52.8%",height:"13%",width:"12%"}}),r("div",{ref:"sunEcharts",staticStyle:{position:"absolute",top:"0%",left:"0%",height:"100%",width:"100%"}}),r("div",{ref:"weatherEcharts",staticStyle:{position:"absolute",top:"0%",left:"0%",height:"100%",width:"100%"}})],1)])],1),r("v-flex",{attrs:{lg4:"",md6:"",xs12:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{"xs-12":""}},[r("v-card",{staticClass:"ma-2"},[r("v-icon",{staticClass:"py-0",attrs:{"my-0":""}},[t._v("fas fa-lock")]),r("v-card-title",{staticClass:"headline my-0 py-0"},[t._v("Water Status")]),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"py-0 my-0 subheading"},[t._v("\n                  Level\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(t.waterLevelPerc)+"%\n                ")])],1)],1),r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"py-0 my-0 subheading"},[t._v("\n                  No Rain Duration\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(t.waterLevelPerc/2)+" days\n                ")])],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"py-0 my-0 subheading"},[t._v("\n                  Collection\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(t.waterCollectionRate)+" GPM\n                ")])],1)],1),r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"py-0 my-0 subheading"},[t._v("\n                  Consumption\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(t.waterConsumptionRate)+" GPM\n                ")])],1)],1)],1)],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"ma-2"},[r("v-icon",{staticClass:"py-0",attrs:{"my-0":""}},[t._v("fa-tint")]),r("v-card-title",{staticClass:"headline my-0 py-0"},[t._v("Energy Status")]),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"my-0 py-0 subheading"},[t._v("\n                  Collection\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(12*t.solarPower)+" kW\n                ")])],1)],1),r("v-flex",{staticClass:"pa-2",attrs:{lg6:""}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"py-0 my-0 subheading"},[t._v("\n                  Consumption\n                ")]),r("v-card-text",{staticClass:"py-0 my-0 headline text-xs-center"},[t._v("\n                  "+t._s(t.elecConsumptionRate)+" kW\n                ")])],1)],1)],1)],1)],1)],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-card",{staticClass:"ma-2 pa-2",attrs:{hover:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm10:""}},[r("v-slider",{staticClass:"mr-3",attrs:{label:"Water Level",id:"waterLevelInput",type:"number"},on:{change:function(e){return t.refreshWaterChart()}},model:{value:t.waterLevelPerc,callback:function(e){t.waterLevelPerc=e},expression:"waterLevelPerc"}})],1),r("v-flex",{attrs:{sm1:""}},[r("v-text-field",{staticClass:"mr-0 pr-0",attrs:{"single-line":"",label:"%",type:"number"},model:{value:t.waterLevelPerc,callback:function(e){t.waterLevelPerc=e},expression:"waterLevelPerc"}})],1),r("v-flex",{attrs:{sm1:""}},[r("v-text-field",{attrs:{readonly:"true",value:"%"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-slider",{attrs:{label:"Solar Power",id:"solarPowerInput",type:"number",max:9},on:{change:function(e){return t.refreshSunChart()}},model:{value:t.solarPower,callback:function(e){t.solarPower=e},expression:"solarPower"}})],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs1:""}}),r("v-flex",{attrs:{xs11:""}},[r("v-radio-group",{staticClass:"mt-0 pt-0",attrs:{column:"false",row:"true"},on:{change:function(e){return t.refreshSunChart()}},model:{value:t.solarTrajectoryOption,callback:function(e){t.solarTrajectoryOption=e},expression:"solarTrajectoryOption"}},[r("v-radio",{key:1,attrs:{label:"Uniform",value:1}}),r("v-radio",{key:2,attrs:{label:"Radial",value:2}})],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-radio-group",{attrs:{column:"false",row:"true"},on:{change:function(e){return t.refreshWeatherChart()}},model:{value:t.weatherOption,callback:function(e){t.weatherOption=e},expression:"weatherOption"}},[r("v-radio",{attrs:{label:"Sunny",value:0}}),r("v-radio",{attrs:{label:"Cloudy",value:1}}),r("v-radio",{attrs:{label:"Rainy",value:2}})],1)],1)],1)],1)],1)},n=[],i=a("313e"),s=a.n(i),o={data:function(){return{waterCollectionRate:0,waterConsumptionRate:5,elecConsumptionRate:90,imageHeight:100,LBCImage1:null,loading:!1,search:null,select:null,waterChart:null,sunChart:null,weatherChart:null,weatherChartOption:null,waterLevelPerc:50,solarPower:8,starPath:"path://m 77.107143,118.59523 0.75595,-32.883922 18.520837,26.080362 24.56845,-23.812504 -4.53572,32.505944 31.08854,-3.21279 -24.47395,20.97767 24.75744,24.94643 -34.01786,-4.15774 0.37798,34.39584 -21.166668,-27.21429 -24.568454,22.3006 5.669644,-31.37202 -30.238095,2.64583 23.434524,-21.16667 -22.67857,-24.19047 z",solarTrajectoryOption:1,solarTrajectory:[[{coords:[[3,10],[4,8.2]]},{coords:[[4,10],[5,8.2]]},{coords:[[5,10],[6,8.2]]},{coords:[[6,10],[7,8.2]]},{coords:[[7,10],[8,8.2]]},{coords:[[8,10],[9,8.2]]},{coords:[[9,10],[10,8.2]]}],[{coords:[[5,10],[4,8.2]]},{coords:[[5,10],[5,8.2]]},{coords:[[5,10],[6,8.2]]},{coords:[[5,10],[7,8.2]]},{coords:[[5,10],[8,8.2]]},{coords:[[5,10],[9,8.2]]},{coords:[[5,10],[10,8.2]]}]],weatherOption:0,weatherColors:["background-color:rgba(255,185,0,0.9)","background-color:rgba(20,20,155,1)","background-color:rgba(20,20,155,1)"],rainTrajectory1a:[],rainTrajectory1b:[],rainTrajectory2a:[],rainTrajectory2b:[],rainTrajectory3a:[],rainTrajectory3b:[]}},methods:{navigate:function(t,e){console.log("navigating..."),console.log(router.currentRoute),router.push({name:t})},onClick:function(){},refreshWaterChart:function(){var t={color:"blue",grid:{bottom:0,left:0,top:0,right:0},xAxis:{data:["Water"],show:!1},yAxis:{show:!1,min:0,max:100},series:[{type:"bar",data:[this.waterLevelPerc]}]};this.waterChart.setOption(t,!0)},refreshSunChart:function(){var t={grid:{top:5},xAxis:{type:"value",show:!1,min:0,max:10},yAxis:{min:0,max:10,show:!1},series:[{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,period:10-this.solarPower,trailLength:.8,color:"#ffa022",symbolSize:3},lineStyle:{normal:{color:"#ffa022",width:0,curveness:.05}},data:this.solarTrajectory[this.solarTrajectoryOption-1]},{name:"sun",type:"lines",coordinateSystem:"cartesian2d",zlevel:2,symbolSize:25,effect:{show:!0,period:10-this.solarPower,trailLength:0,symbol:this.starPath,symbolSize:15},lineStyle:{normal:{color:"#ffa022",width:0,opacity:.6,curveness:.05}},data:this.solarTrajectory[this.solarTrajectoryOption-1]}]};this.sunChart.setOption(t,!0)},getRainData:function(){for(var t=[],e=0;e<30;e++){var a=1.3*Math.random();t.push({coords:[[a,10],[a+.2,0]]})}this.rainTrajectory1a=t.splice(0,t.length/2),this.rainTrajectory1b=t.splice(t.length/2,t.length),t=[];for(var r=0;r<50;r++){var n=2.5*Math.random()+1.3;t.push({coords:[[n,10],[n+.2,5]]})}this.rainTrajectory2a=t.splice(0,t.length/2),this.rainTrajectory2b=t.splice(t.length/2,t.length),t=[];for(var i=0;i<90;i++){var s=6.5*Math.random()+3.8;t.push({coords:[[s,10],[s+.2,8.2]]})}this.rainTrajectory3a=t.splice(0,t.length/2),this.rainTrajectory3b=t.splice(t.length/2,t.length)},refreshWeatherChart:function(){0==this.weatherOption?(this.waterCollectionRate=0,this.solarPower=8,this.weatherChartOption.series=[],this.weatherChart.setOption(this.weatherChartOption,!1)):1==this.weatherOption?(this.waterCollectionRate=0,this.solarPower=4,this.weatherChartOption.series=[],this.weatherChart.setOption(this.weatherChartOption,!1)):2==this.weatherOption&&(this.waterCollectionRate=10,this.solarPower=1,this.weatherChartOption={grid:{top:0,left:0},xAxis:{type:"value",show:!1,min:0,max:10},yAxis:{min:0,max:10,show:!1},series:[{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:40,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory1a},{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:60,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory1b},{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:40,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory2a},{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:60,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory2b},{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:40,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory3a},{name:"tail",type:"lines",coordinateSystem:"cartesian2d",zlevel:1,effect:{show:!0,constantSpeed:60,trailLength:.3,color:"blue",symbolSize:1},lineStyle:{normal:{color:"blue",width:0,curveness:0}},data:this.rainTrajectory3b}]},this.weatherChart.setOption(this.weatherChartOption,!1)),this.refreshSunChart()}},created:function(){},mounted:function(){this.$nextTick(function(){this.imageHeight=this.$refs.imageCard.clientHeight,this.waterChart=s.a.init(this.$refs.waterEcharts),window.addEventListener("resize",this.waterChart.resize),this.refreshWaterChart(),this.sunChart=s.a.init(this.$refs.sunEcharts),window.addEventListener("resize",this.sunChart.resize),this.refreshSunChart(),this.weatherChart=s.a.init(this.$refs.weatherEcharts),window.addEventListener("resize",this.weatherChart.resize),this.getRainData(),this.refreshWeatherChart()})}},l=o,c=a("2877"),u=a("6544"),h=a.n(u),d=a("b0af"),v=a("99d9"),p=a("12b2"),m=a("0e8f"),f=a("132d"),y=a("adda"),w=a("a722"),g=a("67b6"),b=a("43a6"),x=a("ba0d"),C=a("2677"),_=Object(c["a"])(l,r,n,!1,null,null,null);e["default"]=_.exports;h()(_,{VCard:d["a"],VCardText:v["a"],VCardTitle:p["a"],VFlex:m["a"],VIcon:f["a"],VImg:y["a"],VLayout:w["a"],VRadio:g["a"],VRadioGroup:b["a"],VSlider:x["a"],VTextField:C["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",fixed:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{color:""}},[t._l(t.items,function(e,r){return[e.group?a("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"x.active"}},t._l(e.subItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.to}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1),a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.action))])],1)],1)}),1):a("v-list-tile",{key:e.to,attrs:{to:e.to}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)]})],2)],1),a("AppToolbar",{on:{onDrawer:function(e){t.drawer=!t.drawer}}}),a("v-content",[a("v-slide-x-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":"",color:"primary",dark:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("v-toolbar-side-icon",{on:{click:t.onDrawer}}),a("span",[t._v("Kendeda Building Project")]),a("span",{staticClass:"ml-2 subheading font-weight-light"},[t._v("by ASDL")])],1),a("v-spacer")],1)],1)},l=[],c={methods:{onDrawer:function(){this.$emit("onDrawer")}}},u=c,h=a("2877"),d=a("6544"),v=a.n(d),p=a("9910"),m=a("71d9"),f=a("706c"),y=a("2a7f"),w=Object(h["a"])(u,o,l,!1,null,null,null),g=w.exports;v()(w,{VSpacer:p["a"],VToolbar:m["a"],VToolbarSideIcon:f["a"],VToolbarTitle:y["a"]});var b={data:function(){return{drawer:!0,items:[{title:"Main",to:"/"},{title:"submenu",group:!0,active:!1,action:"thumb",subItems:[{title:"Jack",to:"/jack"},{title:"Matt",to:"/matt"},{title:"Xiaoshu",to:"/xiaoshu"},{title:"Water",to:"/water"},{title:"Energy",to:"/energy"}]}],items2:[{picture:28,text:"Joseph"},{picture:38,text:"Apple"},{picture:48,text:"Xbox Ahoy"},{picture:58,text:"Nokia"},{picture:78,text:"MKBHD"}]}},methods:{onRoute:function(t){this.$router.push(t)}},created:function(){this.$vuetify.theme.primary="#3F51B5"},beforeMount:function(){},mounted:function(){},components:{AppToolbar:g}},x=b,C=a("7496"),_=a("549c"),S=a("132d"),k=a("8860"),T=a("56b0"),j=a("ba95"),L=a("40fe"),V=a("5d23"),O=a("f774"),P=a("0789"),z=Object(h["a"])(x,i,s,!1,null,null,null),E=z.exports;v()(z,{VApp:C["a"],VContent:_["a"],VIcon:S["a"],VList:k["a"],VListGroup:T["a"],VListTile:j["a"],VListTileAction:L["a"],VListTileContent:V["a"],VListTileTitle:V["b"],VNavigationDrawer:O["a"],VSlideXTransition:P["d"]});var A=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("AppJack")],1),a("v-flex",{attrs:{xs12:""}},[a("v-divider")],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("AppMatt")],1),a("v-flex",{attrs:{xs12:""}},[a("v-divider")],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pa-3",attrs:{xs12:""}},[a("v-card",[a("AppXiaoshu")],1)],1)],1)],1)},R=[],D=a("970c"),$=a("4046"),F=a("68ad"),B={components:{AppJack:D["default"],AppMatt:$["default"],AppXiaoshu:F["default"]}},W=B,I=a("b0af"),N=a("ce7e"),J=a("0e8f"),H=a("a722"),X=Object(h["a"])(W,M,R,!1,null,null,null),G=X.exports;v()(X,{VCard:I["a"],VDivider:N["a"],VFlex:J["a"],VLayout:H["a"]}),r["a"].use(A["a"]);var U=new A["a"]({base:"/asdl-kendeda/",routes:[{path:"/",name:"main",component:G},{path:"/water",name:"water",component:function(){return a.e("kevin").then(a.bind(null,"008e"))}},{path:"/energy",name:"energy",component:function(){return a.e("kevin").then(a.bind(null,"a2d9"))}},{path:"/jack",name:"jack",component:function(){return Promise.resolve().then(a.bind(null,"970c"))}},{path:"/matt",name:"matt",component:function(){return Promise.resolve().then(a.bind(null,"4046"))}},{path:"/xiaoshu",name:"xiaoshu",component:function(){return Promise.resolve().then(a.bind(null,"68ad"))}}]}),K=a("2f62");r["a"].use(K["a"]);var q=new K["a"].Store({state:{},mutations:{},actions:{}});a("2ef0");r["a"].config.productionTip=!1,new r["a"]({router:U,store:q,render:function(t){return t(E)}}).$mount("#app")},"68ad":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-subheading",[t._v("Choose Event Size")]),a("v-menu",[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("\n        Events\n      ")]),a("v-list",t._l(t.eventName,function(e,r){return a("v-list-tile",{key:r,attrs:{items:t.eventName},on:{click:function(){return t.switchData(e.title)}}},[a("v-list-tile-body-2",[t._v(t._s(e.title))])],1)}),1)],1)],1),a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-subheading",[t._v("Choose Energy Intensity")]),a("v-menu",[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("\n        Energy Intensity\n      ")]),a("v-list",t._l(t.intensity,function(e,r){return a("v-list-tile",{key:r,attrs:{items:t.intensity},on:{click:function(t){}}},[a("v-list-tile-body-2",[t._v(t._s(e.title))])],1)}),1)],1)],1),a("v-data-table",{attrs:{headers:t.headers,items:t.events,expand:t.expand,"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",[a("td",[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.demand))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lighting))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.plug))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.vertical))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mechanical))])])]}}])})],1)},n=[],i={data:function(){return{eventName:[{title:"Small"},{title:"Medium"},{title:"Large"}],intensity:[{title:"Low"},{title:"Moderate"},{title:"High"}],expand:!1,headers:[{text:"Floor",align:"left",sortable:!1,value:"name"},{text:"Total Demand (kwh)",value:"demand"},{text:"Lighting (kwh)",value:"lighting"},{text:"Plug Loads (kwh)",value:"plug"},{text:"Vertical Transportation (kwh)",value:"vertical"},{text:"Mechanical (kwh)",value:"mechanical"}],events:[{name:"Basement",demand:50,lighting:10,plug:20,vertical:10,mechanical:10},{name:"1st Floor",demand:80,lighting:20,plug:10,vertical:30,mechanical:20},{name:"2nd Floor",demand:100,lighting:20,plug:30,vertical:30,mechanical:20}]}},methods:{switchData:function(t){"Small"==t?this.events=[{name:"Basement",demand:50,lighting:10,plug:20,vertical:10,mechanical:10},{name:"1st Floor",demand:80,lighting:20,plug:10,vertical:30,mechanical:20},{name:"2nd Floor",demand:100,lighting:20,plug:30,vertical:30,mechanical:20}]:"Medium"==t?this.events=[{name:"Basement",demand:500,lighting:100,plug:200,vertical:100,mechanical:100},{name:"1st Floor",demand:800,lighting:200,plug:100,vertical:300,mechanical:200},{name:"2nd Floor",demand:1e3,lighting:200,plug:300,vertical:300,mechanical:200}]:"Large"==t&&(this.events=[{name:"Basement",demand:5e3,lighting:1e3,plug:2e3,vertical:1e3,mechanical:1e3},{name:"1st Floor",demand:8e3,lighting:2e3,plug:1e3,vertical:3e3,mechanical:2e3},{name:"2nd Floor",demand:1e4,lighting:2e3,plug:3e3,vertical:3e3,mechanical:2e3}])}}},s=i,o=a("2877"),l=a("6544"),c=a.n(l),u=a("8336"),h=a("8fea"),d=a("8860"),v=a("ba95"),p=a("e449"),m=a("71d9"),f=Object(o["a"])(s,r,n,!1,null,null,null);e["default"]=f.exports;c()(f,{VBtn:u["a"],VDataTable:h["a"],VList:d["a"],VListTile:v["a"],VMenu:p["a"],VToolbar:m["a"]})},"970c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:"","pa-2":"","justify-center":""}},t._l(t.datalist,function(e){return a("v-flex",{key:e.name,staticClass:"pa-2",attrs:{xs12:"",lg3:""}},[a("v-card",{staticClass:"mx-auto text-xs-center",attrs:{color:"#003057",dark:"","max-width":"600",height:"250",hover:""}},[a("v-card-text",[a("v-sheet",{attrs:{color:"white"}},[a("v-sparkline",{attrs:{value:e.value,labels:e.datelabels,color:"#B3A369",height:"80",padding:"3","stroke-linecap":"round",smooth:"",fill:!0,"line-width":"2","show-labels":!0},scopedSlots:t._u([{key:"label",fn:function(t){}}],null,!0)})],1)],1),a("v-card-text",[a("div",{staticClass:"headline font-weight-thin",attrs:{textcolor:"#B3A369"}},[t._v(t._s(e.name))])]),a("v-divider")],1)],1)}),1)],1)},n=[],i=a("75fc"),s={data:function(){return{datalist:[{value:[423,446,675,510,590,610,760],name:"Solar Power",datelabels:["-24hrs","-20hrs","-16hrs","-12hrs","-8hrs","-4hrs","Now"]},{value:[825,100,800,400,300,900,1500],name:"Water Usage",datelabels:["-24hrs","-20hrs","-16hrs","-12hrs","-8hrs","-4hrs","Now"]},{value:[825,100,800,400,300,900,1500],name:"Power Usage",datelabels:["-24hrs","-20hrs","-16hrs","-12hrs","-8hrs","-4hrs","Now"]},{value:[825,100,800,400,300,900,1500],name:"Occupancy",datelabels:["-24hrs","-20hrs","-16hrs","-12hrs","-8hrs","-4hrs","Now"]}]}},created:function(){var t=this,e=function e(){_.each(t.datalist,function(e,a){return t.datalist[a].value=[].concat(Object(i["a"])(_.slice(e.value,1)),[_.random(1500)])}),_.delay(e,5e3)};e()}},o=s,l=a("2877"),c=a("6544"),u=a.n(c),h=a("b0af"),d=a("99d9"),v=a("ce7e"),p=a("0e8f"),m=a("a722"),f=a("8dd9"),y=a("7f2e"),w=Object(l["a"])(o,r,n,!1,null,null,null);e["default"]=w.exports;u()(w,{VCard:h["a"],VCardText:d["a"],VDivider:v["a"],VFlex:p["a"],VLayout:m["a"],VSheet:f["a"],VSparkline:y["a"]})}});
//# sourceMappingURL=app.3c36793a.js.map