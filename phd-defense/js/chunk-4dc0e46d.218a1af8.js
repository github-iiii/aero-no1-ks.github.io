(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dc0e46d"],{"269a":function(e,t){e.exports=function(e,t){var a="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var o in"function"===typeof e.exports&&(a.directives=e.exports.options.directives),a.directives=a.directives||{},t)a.directives[o]=a.directives[o]||t[o]}},dc22:function(e,t,a){"use strict";function o(e,t){const a=t.value,o=t.options||{passive:!0};window.addEventListener("resize",a,o),e._onResize={callback:a,options:o},t.modifiers&&t.modifiers.quiet||a()}function i(e){if(!e._onResize)return;const{callback:t,options:a}=e._onResize;window.removeEventListener("resize",t,a),delete e._onResize}const s={inserted:o,unbind:i};t["a"]=s},ef25:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],ref:"chart",staticClass:"chartFull"})},i=[];const s=[1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],n=[604,612,642,690,710,801,756,796,729,704,749,843,901,928,965,916,846,854,869,876,896,923,988,1084,1167,1240],r=[626,627,644,674,698,423,751,782,746,747,780,808,821,795,811,789,762,789,798,800,792,806,828,817,797,822],c=[45,38,37,35,35,231,41,38,34,36,35,33,30,27,29,29,30,31,31,36,33,31,31,29,28,27],l=[1,1,1,1,1,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=[99.88,99.92,99.93,99.92,99.94,99.41,99.95,99.95,99.97,99.98,99.98,99.98,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,99.99,100],h={backgroundColor:"white",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{y:0,x:65,data:["NON-STOP","ONE-STOP","TWO-STOP","MORE-THAN-TWO-STOP"]},grid:{containLabel:1,x:25,x2:10,y:25,y2:25},xAxis:[{type:"category",name:"YEAR",nameTextStyle:{fontSize:15,fontWeight:500},nameLocation:"center",nameGap:25,data:s,axisLabel:{show:!0,interval:0},axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:"VOLUME (*1000)",nameLocation:"center",nameGap:40,nameTextStyle:{fontSize:15,fontWeight:500}}],series:[{name:"NON-STOP",type:"bar",stack:1,label:{show:!0,textStyle:{color:"#DDDDDD"}},data:n,itemStyle:{shadowBlur:1,shadowColor:"rgba(0,0,0,0.2)"}},{name:"ONE-STOP",type:"bar",stack:1,label:{show:!0,textStyle:{color:"#444444"}},data:r,itemStyle:{shadowBlur:1,shadowColor:"rgba(0,0,0,0.2)"}},{name:"TWO-STOP",type:"bar",stack:1,label:{show:!0,textStyle:{color:"#444444"}},data:c,itemStyle:{shadowBlur:1,shadowColor:"rgba(0,0,0,0.2)"}},{name:"MORE-THAN-TWO-STOP",type:"bar",stack:1,label:{show:!1,textStyle:{color:"#444444"}},data:l,itemStyle:{barBorderRadius:[3,3,0,0],shadowBlur:1,shadowColor:"rgba(0,0,0,0.2)"}},{name:"percent",type:"bar",stack:1,label:{show:!0,formatter:({name:e})=>e,textStyle:{color:"#0000ff",fontWeight:600},position:[-5,-25]},data:d.map(e=>({name:`${e}%`,value:0}))}]};var p={data:()=>({chart:null}),methods:{onResize(){this.chart&&_.debounce(this.chart.resize,200)()}},mounted(){this.chart=echarts.init(this.$refs.chart,"shine"),this.chart.setOption(h)},beforeDestroy(){this.chart.dispose()}},u=p,f=a("2877"),m=a("269a"),b=a.n(m),w=a("dc22"),y=Object(f["a"])(u,o,i,!1,null,null,null);t["default"]=y.exports;b()(y,{Resize:w["a"]})}}]);