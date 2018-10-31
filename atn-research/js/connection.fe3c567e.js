(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["connection"],{"1ccb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"echartsMap",staticStyle:{width:"100%",height:"100%"}})},r=[],i=a("313e"),o=a.n(i),n=(a("7cb2"),a("1d1c")),l=a("f711"),c=a.n(l),d=a("974d");const u=["#EC407A","#AB47BC","#42A5F5","#4DB6AC","#66BB6A","#FFEE58","#FFA726","#A1887F","#BDBDBD"];var h={props:["ap","items","map","large","ix","selected","slider"],data:()=>({chart:""}),computed:{topItems(){return _.slice(this.items[this.ix],0,this.slider)},ori(){return this.ap.ori}},methods:{drawChart2d(t="usa"){const e="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",a=[{name:this.ori,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:this.$vuetify.theme.primary}},tooltip:{formatter:`{b} - ${this.ap.tau}`},data:[{name:this.ori,value:[...this.getCoords(this.ori),100]}]},..._.map(this.topItems,(t,e)=>({name:t.des,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize(t){return t[2]/4},itemStyle:{normal:{color:u[e]}},tooltip:{formatter:`{b} - ${t.tau}`},data:[{name:t.des,value:[...this.getCoords(t.des),_.max([30+t.tau.split(" ")[0]/this.ap.tau*100])]}]})),..._.map(this.topItems,(t,a)=>({name:t.des,type:"lines",symbol:["none","arrow"],symbolSize:10,effect:{show:!0,period:6,trailLength:0,symbol:e,symbolSize:15},lineStyle:{color:u[a],width:1+t.tau.split(" ")[0]/this.ap.tau*50,curveness:0,opacity:.5},data:this.convertData(t.des,this.ori,a,t)}))],s={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},backgroundColor:"#FEFEFE",tooltip:{trigger:"item"},legend:{orient:"horizontal",top:5,right:5,data:_.map(this.topItems,"des"),textStyle:{color:"#222",selectedMode:"single",fontSize:12}},geo:{map:t,label:{emphasis:{show:!1}},center:this.getCoords(this.ori),roam:!0,zoom:1.7,itemStyle:{normal:{areaColor:"#EEE",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series:a};this.chart.setOption(s,!0)},getCoords(t){const e=_.find(d["a"],e=>e.code===t);return[e.lon,e.lat]},convertData(t,e,a,s){const r=e||this.ori,i=this.getCoords(r),o=this.getCoords(t);return[{fromName:r,toName:t,coords:[i,o]}]},onOpen(t){window.open(t)}},watch:{topItems(t){this.drawChart2d()},large(t){_.delay(this.chart.resize,200)},map(t){this.drawChart2d(t?"world":"usa")}},created(){},beforeMount(){o.a.registerMap("usa",n["a"]),o.a.registerMap("world",c.a)},mounted(){_.delay(()=>{this.chart=o.a.init(this.$refs.echartsMap),this.drawChart2d(),window.addEventListener("resize",debounce(this.chart.resize,200))},1)}},p=h,m=(a("a1bf"),a("2877")),f=Object(m["a"])(p,s,r,!1,null,"476bad35",null);f.options.__file="MapPane.vue";e["a"]=f.exports},"30ad":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"pa-1",attrs:{row:""}},[a("v-flex",{staticClass:"pa-1",attrs:{xs7:""}},[a("v-card",{staticClass:"pa-1",attrs:{hover:""}},[t._v("\r\n      sdfsdf\r\n    ")])],1),a("v-flex",{staticClass:"pa-1",attrs:{xs5:""}},[a("v-card",{staticClass:"pa-1 text-xs-center title"},[a("div",{staticClass:"my-2 subheading"},[t._v("Top "+t._s(t.cut)+" Hubs departing from "+t._s(t.ap.ori))]),a("v-layout",{attrs:{row:""}},t._l(t.item,function(e,s){return a("v-flex",{key:s,staticClass:"pa-1"},[a("v-card",{attrs:{hover:""}},[a("v-data-table",{attrs:{headers:t.getHeaders(["Direct","Indirect","Total"][s]),items:e,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.des))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.tau))])]}}])})],1)],1)}))],1)],1)],1)},r=[],i=(a("1ccb"),{data:()=>({ix:0,cut:10,map:!1}),computed:{ap(){return hubAnalysisDataSet[this.ix]},item(){const t=hubAnalysisDataSet[this.ix];return[_.slice(_.map(t.stopx,e=>({des:e.des,tau:`${e.tau} (${_.round(e.tau/t.tau*100,2)}%)`})),0,this.cut),_.slice(_.map(t.stopy,e=>({des:e.des,tau:`${e.tau} (${_.round(e.tau/t.tau*100,2)}%)`})),0,this.cut),_.slice(_.map(t.total,e=>({des:e.des,tau:`${e.tau} (${_.round(e.tau/t.tau*100,2)}%)`})),0,this.cut)]}},methods:{getHeaders(t){return[{text:t,value:"des",sortable:!1,align:"center"},{text:"Demand (Ratio)",value:"tau",sortable:!1,align:"left"}]}},created(){m(this.item)}}),o=i,n=(a("9e94"),a("2877")),l=Object(n["a"])(o,s,r,!1,null,null,null);l.options.__file="_Connection.vue";e["default"]=l.exports},"9d86":function(t,e,a){},"9e94":function(t,e,a){"use strict";var s=a("9d86"),r=a.n(s);r.a},a1bf:function(t,e,a){"use strict";var s=a("d4bb"),r=a.n(s);r.a},d4bb:function(t,e,a){}}]);