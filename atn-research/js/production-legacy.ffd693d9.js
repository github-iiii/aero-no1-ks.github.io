(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["production"],{"780a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"pa-1",attrs:{row:"",wrap:""}},[t._l(t.items,function(e,i){return[a("v-flex",{key:i,staticClass:"pa-1",attrs:{xs8:!t.large[i],xs12:t.large[i],"d-flex":""}},[a("v-card",{staticStyle:{position:"relative"},attrs:{dark:""}},[a("v-layout",{staticClass:"subheading pa-2",attrs:{row:""}},[a("v-flex",{staticStyle:{"max-width":"350px"}},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[t._v("public")]),a("span",{staticClass:"bold"},[t._v(t._s(t.flight[i])+" Departure from "+t._s(t.ap.ap))])],1),a("v-flex",{staticStyle:{"max-width":"100px"}},[a("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"primary","hide-details":"",label:"Hide"},model:{value:t.hide[i],callback:function(e){t.$set(t.hide,i,e)},expression:"hide[i]"}})],1),a("v-flex",[a("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"primary","hide-details":"",label:"Enlarge"},model:{value:t.large[i],callback:function(e){t.$set(t.large,i,e)},expression:"large[i]"}})],1)],1),a("v-divider"),a("v-slide-y-transition",[a("app-map-pane-departure",{directives:[{name:"show",rawName:"v-show",value:!t.hide[i],expression:"!hide[i]"}],style:t.largeStyle(i),attrs:{ap:t.ap,item:e,map:t.map,large:t.large[i],slider:t.slider[i]}})],1),a("v-slide-y-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hide[i],expression:"!hide[i]"}],staticStyle:{position:"absolute",bottom:"5px",left:"10px"}},[a("v-slider",{staticStyle:{"margin-top":"0px"},attrs:{label:"Max. # of APs: "+t.slider[i],"thumb-size":25,"always-dirty":"",max:t.cut,min:"1","hide-details":""},model:{value:t.slider[i],callback:function(e){t.$set(t.slider,i,e)},expression:"slider[i]"}})],1)])],1)],1),t.large[i]?t._e():a("v-flex",{staticClass:"pa-1",attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"text-xs-center",attrs:{dark:""}},[a("div",{staticClass:"subheading pa-2"},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[t._v("navigation")]),a("span",{staticClass:"bold"},[t._v("Top "+t._s(t.cut)+" Dest. 'FROM' "+t._s(t.ap.ap)+" ("+t._s(t.flight[i])+")")])],1),a("v-divider"),a("v-slide-y-transition",[a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!t.hide[i],expression:"!hide[i]"}],attrs:{headers:t.getHeaders(t.flight[i]),items:e,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center",staticStyle:{cursor:"pointer"},style:t.selectedStyle(e),on:{click:function(a){t.onClick(e,i)}}},[t._v(t._s(e.item.ap))]),a("td",{staticClass:"text-xs-center",staticStyle:{cursor:"pointer"},style:t.selectedStyle(e),on:{click:function(a){t.onClick(e,i)}}},[t._v(t._s(e.item.tau))]),a("td",{staticClass:"text-xs-center",staticStyle:{cursor:"pointer"},style:t.selectedStyle(e),on:{click:function(a){t.onClick(e,i)}}},[t._v(t._s(e.item.ratio))])]}}])})],1)],1)],1),a("v-slide-y-transition",[t.showHub[i]?a("v-layout",[a("v-flex",{staticClass:"pa-1",attrs:{xs8:!t.largeHub[i],xs12:t.largeHub[i],"d-flex":""}},[a("v-card",{staticStyle:{position:"relative"},attrs:{dark:""}},[a("v-layout",{staticClass:"subheading pa-2",attrs:{row:""}},[a("v-flex",{staticStyle:{"max-width":"350px"}},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[t._v("public")]),a("span",{staticClass:"bold"},[t._v("Top 10 Destinations of "+t._s(t.hub.ap))])],1),a("v-flex",[a("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"primary","hide-details":"",label:"Enlarge"},model:{value:t.largeHub[i],callback:function(e){t.$set(t.largeHub,i,e)},expression:"largeHub[i]"}})],1)],1),a("v-divider"),a("app-map-pane-intermediate",{staticStyle:{width:"100%"},style:t.largeStyleHub(i),attrs:{ap:t.ap,hub:t.hub,map:t.map,large:t.largeHub[i],slider:t.sliderHub[i]}}),a("div",{staticStyle:{position:"absolute",bottom:"5px",left:"10px"}},[a("v-slider",{staticStyle:{"margin-top":"0px"},attrs:{label:"Max. # of APs: "+t.sliderHub[i],"thumb-size":25,"always-dirty":"",max:t.cut,min:"1","hide-details":""},model:{value:t.sliderHub[i],callback:function(e){t.$set(t.sliderHub,i,e)},expression:"sliderHub[i]"}})],1)],1)],1),t.largeHub[i]?t._e():a("v-flex",{staticClass:"pa-1",attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"text-xs-center",attrs:{dark:""}},[a("div",{staticClass:"subheading pa-2"},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[t._v("navigation")]),a("span",{staticClass:"bold"},[t._v("Top "+t._s(t.cut)+" Departures 'FROM' "+t._s(t.hub.ap))])],1),a("v-divider"),a("v-data-table",{attrs:{headers:t.getHeaders("Total"),items:t.hubItem,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.ap))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.tau))]),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.ratio))])]}}])})],1)],1)],1):t._e()],1)]})],2)},s=[],r=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"echartsMapPaneDeparture",staticStyle:{width:"100%",height:"100%"}})},l=[],n=a("313e"),c=a.n(n),p=(a("7cb2"),a("1d1c")),h=a("f711"),d=a.n(h),u={props:["ap","item","map","large","slider"],data:()=>({chart:""}),computed:{...Object(r["c"])(["airport","color"]),items(){return _.slice(this.item,0,this.slider)},center(){return this.ap.ap}},methods:{drawChart2d(t="usa"){const e="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",a=[{name:this.center,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.$vuetify.theme.primary}},tooltip:{formatter:`{b} - ${this.ap.tau}`},data:[{name:this.center,value:[...this.getCoords(this.center),100]}]},..._.map(this.items,(t,e)=>({name:t.ap,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.color[e]}},tooltip:{formatter:`{b} - ${t.tau}`},data:[{name:t.ap,value:[...this.getCoords(t.ap),_.max([30,t.tau/this.ap.tau*100])]}]})),..._.map(this.items,(t,a)=>({name:t.ap,type:"lines",symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:e,symbolSize:15},lineStyle:{color:this.color[a],width:1+t.tau/this.ap.tau*50,curveness:0,opacity:.5},data:this.convertData(t.ap,this.center,a,t)}))],i={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},tooltip:{trigger:"item"},legend:{orient:"horizontal",top:5,right:5,data:_.map(this.items,"ap"),textStyle:{color:"#FFFFFF",selectedMode:"single",fontSize:12}},geo:{map:t,label:{emphasis:{show:!1}},center:this.getCoords(this.center),roam:!0,zoom:1.4,itemStyle:{normal:{areaColor:"#4F4658",borderColor:"#5D5D5D"},emphasis:{areaColor:this.$vuetify.theme.primary}}},series:a};this.chart.setOption(i,!0)},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return[e.lon,e.lat]},convertData(t,e,a,i){const s=e||this.center,r=this.getCoords(s),o=this.getCoords(t);return[{fromName:s,toName:t,coords:[r,o]}]},onOpen(t){window.open(t)}},watch:{items(t){this.drawChart2d()},large(t){_.delay(this.chart.resize,200)},map(t){this.drawChart2d(t?"world":"usa")}},created(){},beforeMount(){c.a.registerMap("usa",p["a"]),c.a.registerMap("world",d.a)},mounted(){_.delay(()=>{this.chart=c.a.init(this.$refs.echartsMapPaneDeparture),this.drawChart2d(),window.addEventListener("resize",debounce(this.chart.resize,200))},1)}},m=u,b=a("2877"),f=Object(b["a"])(m,o,l,!1,null,null,null);f.options.__file="MapPaneDeparture.vue";var v=f.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"echartsMapPaneIntermediate",staticStyle:{width:"100%",height:"100%"}})},g=[],x={props:["ap","hub","map","large","slider"],data:()=>({chart:""}),computed:{...Object(r["c"])(["airport","color"]),items(){return _.slice(this.hubData,0,this.slider)},center(){return this.hub.ap},ref(){return`echartsMapPaneIntermediate${this.ix}`},hubData(){const t=_.find(hubDataSetDeparture,t=>t.ap===this.hub.ap);return _.slice(_.map(t.total,e=>({ap:e.ap,tau:e.tau,ratio:_.round(e.tau/t.tau*100,2)})),0,10)}},methods:{drawChart2d(t="usa"){const e="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",a=[{name:this.ap.ap,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.$vuetify.theme.primary}},tooltip:{formatter:`{b} - ${this.ap.tau}`},data:[{name:this.ap.ap,value:[...this.getCoords(this.ap.ap),100]}]},{name:this.center,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.$vuetify.theme.primary}},tooltip:{formatter:`{b} - ${this.hub.tau}`},data:[{name:this.center,value:[...this.getCoords(this.center),100]}]},..._.compact(_.map(this.items,(t,e)=>{return t.ap===this.ap.ap?null:{name:t.ap,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.color[e]}},tooltip:{formatter:`{b} - ${t.tau}`},data:[{name:t.ap,value:[...this.getCoords(t.ap),_.min([_.max([30,t.ratio]),100])]}]}})),{name:`${this.ap.ap} -> ${this.center}`,type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:this.$vuetify.theme.primary,width:0,curveness:0}},data:this.convertData(this.center,this.ap.ap)},{name:`${this.ap.ap} -> ${this.center}`,type:"lines",symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:e,symbolSize:15},lineStyle:{color:this.$vuetify.theme.primary,width:3,curveness:0,opacity:.8},data:this.convertData(this.center,this.ap.ap)},..._.compact(_.map(this.items,(t,a)=>{return t.ap===this.ap.ap?null:{name:t.ap,type:"lines",symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:e,symbolSize:15},lineStyle:{color:this.color[a],width:1,curveness:.2,opacity:.5},data:this.convertData(t.ap,this.center)}}))],i={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},backgroundColor:"#666666",tooltip:{trigger:"item"},legend:{orient:"horizontal",top:5,right:5,data:_.map(this.items,"ap"),textStyle:{color:"#222",selectedMode:"single",fontSize:12}},geo:{map:t,label:{emphasis:{show:!1}},center:this.getCoords(this.center),roam:!0,zoom:1.4,itemStyle:{normal:{areaColor:"#4F4658",borderColor:"#5D5D5D"},emphasis:{areaColor:this.$vuetify.theme.primary}}},series:a};this.chart.setOption(i,!0)},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return[e.lon,e.lat]},convertData(t,e){const a=e||this.center,i=this.getCoords(a),s=this.getCoords(t);return[{fromName:a,toName:t,coords:[i,s]}]},onOpen(t){window.open(t)}},watch:{items(t){this.drawChart2d()},large(t){_.delay(this.chart.resize,200)},map(t){this.drawChart2d(t?"world":"usa")}},created(){},beforeMount(){c.a.registerMap("usa",p["a"]),c.a.registerMap("world",d.a)},mounted(){_.delay(()=>{this.chart=c.a.init(this.$refs.echartsMapPaneIntermediate),this.drawChart2d(),window.addEventListener("resize",debounce(this.chart.resize,200))},1)}},w=x,S=(a("dc3f"),Object(b["a"])(w,y,g,!1,null,"6e503a28",null));S.options.__file="MapPaneDepartureIntermediate.vue";var C=S.exports,D={data:()=>({apIx:0,ix:0,cut:10,map:!1,center:"",sw:!1,selected:-1,hide:[!1,!1,!1],large:[!1,!1,!1],slider:[10,10,10],flight:["Direct","Indirect","Total"],hub:{ap:"",tau:0},showHub:[!1,!1,!1],largeHub:[!1,!1,!1],sliderHub:[10,10,10]}),computed:{...Object(r["c"])(["ori"]),ap(){return hubDataSetDeparture[this.apIx]},items(){const t=hubDataSetDeparture[this.apIx];return[_.slice(_.map(t.stopx,e=>({ap:e.ap,tau:e.tau,ratio:`${_.round(e.tau/t.tau*100,2)}%`})),0,this.cut),_.slice(_.map(t.stopy,e=>({ap:e.ap,tau:e.tau,ratio:`${_.round(e.tau/t.tau*100,2)}%`})),0,this.cut),_.slice(_.map(t.total,e=>({ap:e.ap,tau:e.tau,ratio:`${_.round(e.tau/t.tau*100,2)}%`})),0,this.cut)]},hubItem(){if(""===this.hub.ap)return[];const t=_.find(hubDataSetDeparture,t=>t.ap===this.hub.ap);return _.slice(_.compact(_.map(t.total,e=>{return e.ap===this.ap.ap?null:{ap:e.ap,tau:e.tau,ratio:`${_.round(e.tau/t.tau*100,2)}%`}})),0,this.cut)}},methods:{onHide(t){this.hide.splice(t,1,!this.hide[t])},largeStyle(t){return{height:this.large[t]?"calc(100vh - 66px - 56px)":this.hide[t]?0:"calc(50vh - 33px - 28px - 24px)"}},largeStyleHub(t){return{height:this.largeHub[t]?"calc(100vh - 66px - 56px)":"calc(50vh - 33px - 28px - 24px)"}},getHeaders(t){return[{text:t,value:"ap",sortable:!1,align:"center"},{text:"Volume",value:"tau",sortable:!1,align:"center"},{text:"Ratio",value:"ratio",sortable:!1,align:"center"}]},onClick(t,e){if(this.hub.ap===t.item.ap)return this.showHub.splice(e,1,!1),_.delay(()=>this.hub={ap:"",tau:0},300);this.hub={ap:t.item.ap,tau:t.item.tau},this.showHub.splice(e,1,!0)},selectedStyle(t){return this.hub.ap!==t.item.ap?{}:{background:this.$vuetify.theme.primary}},updateIx(t){const e=_.findIndex(hubDataSetDeparture,e=>e.ap===t);e>=0&&(this.apIx=e)}},watch:{ori(t){this.updateIx(t)}},created(){this.updateIx(this.ori)},components:{"app-map-pane-departure":v,"app-map-pane-intermediate":C}},$=D,z=(a("f7ae"),Object(b["a"])($,i,s,!1,null,null,null));z.options.__file="_Production.vue";e["default"]=z.exports},"807f":function(t,e,a){},9005:function(t,e,a){},dc3f:function(t,e,a){"use strict";var i=a("807f"),s=a.n(i);s.a},f7ae:function(t,e,a){"use strict";var i=a("9005"),s=a.n(i);s.a}}]);