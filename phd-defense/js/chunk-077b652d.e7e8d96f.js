(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-077b652d"],{"269a":function(e,t){e.exports=function(e,t){var r="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var o in"function"===typeof e.exports&&(r.directives=e.exports.options.directives),r.directives=r.directives||{},t)r.directives[o]=r.directives[o]||t[o]}},dc22:function(e,t,r){"use strict";function o(e,t){const r=t.value,o=t.options||{passive:!0};window.addEventListener("resize",r,o),e._onResize={callback:r,options:o},t.modifiers&&t.modifiers.quiet||r()}function i(e){if(!e._onResize)return;const{callback:t,options:r}=e._onResize;window.removeEventListener("resize",t,r),delete e._onResize}const s={inserted:o,unbind:i};t["a"]=s},fe38:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],ref:"chart",staticClass:"chartFull"})},i=[],s=r("f75f"),a={data:()=>({chart:null,year:1910}),computed:{arrAP(){return _.map(_.filter(s["a"],({year:e})=>Number(e)<this.year),({lon:e,lat:t})=>[Number(e),Number(t)])},arrAPNew(){return _.map(_.filter(s["a"],({year:e},t)=>Number(e)<this.year+10&&Number(e)>=this.year),({lon:e,lat:t})=>[Number(e),Number(t)])},option(){return{geo:{map:"usa",label:{show:!1,fontFamily:"Inconsolata",fontWeight:"bold"},zoom:1.15,silent:!0,itemStyle:{normal:{borderColor:"rgba(100, 100, 100, 0.5)",areaColor:"rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 0)"}},roam:!0},series:[{symbolSize:7,type:"scatter",coordinateSystem:"geo",data:this.arrAP,itemStyle:{borderWidth:.5,borderColor:"black",color:"rgba(52, 169, 219, 0.7)"}},{symbolSize:10,type:"scatter",coordinateSystem:"geo",data:this.arrAPNew,itemStyle:{borderWidth:1,borderColor:"black",color:"rgba(255, 230, 0, 0.7)"}}]}}},methods:{onResize(){this.chart&&_.debounce(this.chart.resize,200)()}},mounted(){this.chart=echarts.init(this.$refs.chart),this.chart.setOption(this.option);const e=()=>{this.year=this.year+10>2010?1910:this.year+10,_.delay(()=>{this.chart.setOption(this.option,!0),e()},1e3)};_.delay(e,1e3)},beforeDestroy(){this.chart.dispose()}},n=a,c=r("2877"),l=r("269a"),d=r.n(l),u=r("dc22"),h=Object(c["a"])(n,o,i,!1,null,null,null);t["default"]=h.exports;d()(h,{Resize:u["a"]})}}]);