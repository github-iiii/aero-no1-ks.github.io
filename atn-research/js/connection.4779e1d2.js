(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["connection"],{"1ccb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],ref:"echartsInstance",staticStyle:{width:"100%",height:"100%"}})},r=[],s=a("2f62"),o={props:["isArrival","center","items","map","large","slider","xycor"],data:()=>({chart:null,series:null,option:null,effect:{show:!0,trailLength:0,symbol:"box",symbolSize:3.5,constantSpeed:13}}),computed:{...Object(s["c"])(["airport","color","areaColor","effectLines","effectTrail"])},methods:{drawChart2d(t=!1,e=!1,a="usa"){this.series&&!t||(this.series=[{type:"bar",data:_.map(this.items,(t,e)=>({name:t.ap,value:t.tau})),itemStyle:{normal:{barBorderRadius:[5,0,0,5],color:this.$vuetify.theme.primary}}},{name:this.center.ap,type:"effectScatter",zLevel:10,coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize:10,tooltip:{formatter:`{b} - ${this.center.tau.toLocaleString()}`},data:[{name:this.center.ap,value:[...this.getCoords(this.center.ap),100]}]},..._.map(this.items,(t,e)=>({name:t.ap,type:"scatter",coordinateSystem:"geo",label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize:6,tooltip:{formatter:`{b} - ${t.tau.toLocaleString()} (${t.ratio}%)`},data:[{name:t.ap,value:[...this.getCoords(t.ap),_.min([_.max([20,t.ratio]),80])]}]})),..._.map(this.items,(t,e)=>({name:t.ap,type:"lines",symbol:["none","none"],symbolSize:10,effect:{...this.effect},zlevel:3,large:!0,tooltip:{formatter:`{a}{b}{c} - ${t.tau.toLocaleString()} (${t.ratio}%)`},lineStyle:{color:this.$vuetify.theme.primary,width:2.5,curveness:0,opacity:.9},data:[{fromName:this.center.ap,toName:t.ap,coords:[this.getCoords(this.center.ap),this.getRatioCoords(this.center.ap,t.ap,.3)]}]})),..._.map(this.items,(t,e)=>({name:t.ap,type:"lines",symbol:["none","none"],symbolSize:10,effect:{...this.effect},zlevel:2,large:!0,silent:!0,lineStyle:{color:"rgb(255, 237, 0)",width:1.5,curveness:0,opacity:.4,type:"dotted"},data:this.isArrival?[{fromName:t.ap,toName:this.center.ap,coords:[this.getCoords(t.ap),this.getCoords(this.center.ap)]}]:[{fromName:this.center.ap,toName:t.ap,coords:[this.getCoords(this.center.ap),this.getCoords(t.ap)]}]}))]),this.option&&!t||(this.option={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},title:{text:`${this.center.ap} (total: ${this.center.tau.toLocaleString()})`,bottom:5,left:5,fontSize:12,textStyle:{color:"#FFFFFF"}},tooltip:{trigger:"item"},grid:{right:40,top:10,bottom:10,width:"15%",containLable:!0},geo:{map:a,label:{emphasis:{show:!1}},silent:!0,center:this.xycor,roam:!0,zoom:1.4,itemStyle:{normal:{areaColor:this.areaColor,borderColor:"#989898"},emphasis:{areaColor:this.$vuetify.theme.primary}}},yAxis:{type:"category",data:_.map(this.items,"ap"),position:"right",inverse:!0,axisLabel:{textStyle:{color:"#FFFFFF"}}},xAxis:{type:"value",inverse:!0,axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1}},series:this.series}),this.chart.setOption(this.option,e),this.chart.resize()},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return[e.lon,e.lat]},convertData(t,e){const a=e||this.center.ap,i=this.getCoords(a),r=this.getCoords(t);return[{fromName:a,toName:t,coords:[i,r]}]},getRatioCoords(t,e,a=.3){const i=this.getCoords(t),r=this.getCoords(e);return[(1-a)*i[0]+a*r[0],(1-a)*i[1]+a*r[1]]},onResize(){this.chart&&debounce(this.chart.resize,200)()}},watch:{xycor(t){this.drawChart2d(!0,!0)},large(t){this.onResize()},map(t){this.drawChart2d(!1,!1,t?"world":"usa")}},mounted(){_.delay(()=>{this.chart=echarts.init(this.$refs.echartsInstance,"chalk",{renderer:"canvas"}),this.drawChart2d(!1,!0)},1)}},n=o,l=a("2877"),h=Object(l["a"])(n,i,r,!1,null,null,null);e["a"]=h.exports},"30ad":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"pa-1",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"px-1",attrs:{xs12:""}},[a("v-btn-toggle",{staticClass:"ma-0 pa-0",attrs:{mandatory:""},model:{value:t.isArrival,callback:function(e){t.isArrival=e},expression:"isArrival"}},t._l(t.tooltipItems,function(e,i){return a("v-tooltip",{key:i,attrs:{bottom:"",color:"primary"}},[a("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[a("v-icon",[t._v(t._s(e.icon))])],1),a("span",[t._v(t._s(e.title))])],1)}),1),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{staticClass:"mx-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("\n        Enlarge\n      ")]),a("v-list",t._l(["Shrink"].concat(t.hubArrFull),function(e,i){return a("v-list-tile",{key:i,on:{click:function(e){t.large=i-1}}},[a("v-list-tile-title",[t._v(t._s(e))])],1)}),1)],1),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{staticClass:"mx-0",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("\n        Top "+t._s(t.slider)+" segments\n      ")]),a("v-list",t._l(t.cut,function(e){return a("v-list-tile",{key:e,on:{click:function(a){t.slider=e}}},[a("v-list-tile-title",[t._v(t._s(e))])],1)}),1)],1),a("v-btn",{staticClass:"mx-2",attrs:{color:"primary",dark:""},on:{click:t.onSeeAltogether}},[t._v("\n      toggle integrated view\n    ")])],1),a("v-flex",{attrs:{xs8:""}},[a("v-slide-y-transition",[t.showAltogether?a("v-layout",[a("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[a("v-card",{staticStyle:{height:"calc(100vh - 66px - 56px - 6px)"},attrs:{dark:""}},[a("AppMapPaneIntegrated",{attrs:{isArrival:t.isArrival,centers:t.centers,items:t.items,map:t.map}})],1)],1)],1):t._e()],1),a("v-slide-y-transition",[a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.items,function(e,i){return[a("v-flex",{key:i,staticClass:"pa-1",style:t.setShow(i),attrs:{xs6:!t.isLarge(i),xs12:t.isLarge(i)}},[a("v-card",{attrs:{dark:""}},[a("AppMapPane",{style:t.largeStyle(i),attrs:{isArrival:t.isArrival,center:t.centers[i],items:e,map:t.map,large:t.large,slider:t.slider,xycor:t.xycor}})],1)],1)]})],2)],1)],1),a("v-flex",{staticClass:"pa-1",attrs:{xs4:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticStyle:{position:"relative",height:"calc(50vh - 66px - 2px)"}},[a("AppMapPaneConnectionScatter",{attrs:{isArrival:t.isArrival,items:t.items,isRelative:t.isRelative}}),a("div",{staticStyle:{position:"absolute",left:"100px",top:"0px","font-size":"10px"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"primary",label:"Relative"},model:{value:t.isRelative,callback:function(e){t.isRelative=e},expression:"isRelative"}})],1)],1)],1)],1),a("v-layout",{staticClass:"py-1",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"py-1",attrs:{xs12:""}},[a("v-card",{staticStyle:{height:"calc(50vh - 66px - 1px)"}},[a("AppMapPaneConnectionDistribution",{attrs:{isArrival:t.isArrival,items:t.items}})],1)],1)],1)],1)],1)},r=[],s=a("2f62"),o=a("1ccb"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],ref:"echartsMapPaneIntegrated",staticStyle:{width:"100%",height:"100%"}})},l=[],h={props:["isArrival","centers","items","map"],data:()=>({chart:null,series:null,option:null}),computed:{...Object(s["c"])(["airport","color","areaColor","effectLines"]),xyCor(){const t=_.map(_.flatten(this.items),t=>this.getCoords(t.ap)),e=_.map(t,_.head),a=_.map(t,_.last);return[(_.max(e)+_.min(e))/2,(_.max(a)+_.min(a))/2]}},methods:{drawChart2d(t=!1,e=!1,a="usa"){this.series&&!t||(this.series=[..._.map(this.centers,(t,e)=>({name:t.ap,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize:10,tooltip:{formatter:`{b} - ${t.tau}`},data:[{name:t.ap,value:this.getCoords(t.ap)}]})),..._.flatten(_.map(this.items,(t,e)=>_.map(t,(t,a)=>({name:this.centers[e].ap,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize:5,tooltip:{formatter:`{b} - ${t.tau}`},data:[{name:t.ap,value:this.getCoords(t.ap)}]})))),..._.flatten(_.map(this.items,(t,e)=>_.map(t,(t,a)=>({name:this.centers[e].ap,type:"lines",zlevel:3,symbol:["none","arrow"],symbolSize:6,effect:{...this.effectLines,constantSpeed:15},large:!0,largeThreshold:50,tooltip:{formatter:`{a}{b}{c} - ${t.tau}`},lineStyle:{width:1.5,curveness:0,opacity:.7},data:this.isArrival?this.convertData(this.centers[e].ap,t.ap):this.convertData(t.ap,this.centers[e].ap)}))))]),this.option&&!t||(this.option={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},tooltip:{trigger:"item"},legend:{orient:"horizontal",top:5,right:5,data:_.map(this.centers,"ap"),textStyle:{color:"#FFFFFF",selectedMode:"single",fontSize:12}},geo:{map:a,label:{emphasis:{show:!1}},center:this.xyCor,roam:!0,zoom:1.6,itemStyle:{normal:{areaColor:this.areaColor,borderColor:"#989898"},emphasis:{areaColor:this.$vuetify.theme.primary}}},series:this.series}),this.chart.setOption(this.option,e)},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return[e.lon,e.lat]},convertData(t,e){const a=e,i=this.getCoords(a),r=this.getCoords(t);return[{fromName:a,toName:t,coords:[i,r]}]},onResize(){this.chart&&debounce(this.chart.resize,200)()}},watch:{items(t){this.drawChart2d(!0,!0)},large(t){this.onResize()},map(t){this.drawChart2d(!1,!1,t?"world":"usa")}},mounted(){_.delay(()=>{this.chart=echarts.init(this.$refs.echartsMapPaneIntegrated,"chalk"),this.drawChart2d(!1,!0)},1)}},c=h,p=a("2877"),m=Object(p["a"])(c,n,l,!1,null,null,null),d=m.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],ref:"echartsMapPaneConnectionScatter",staticStyle:{width:"100%",height:"100%"}})},f=[],v={props:["isArrival","items","isRelative"],data:()=>({chart:null,series:null,option:null}),computed:{...Object(s["c"])(["airport","color","hubArr"]),itemsRelative(){return _.map(this.items,t=>{const[e,a]=[_.maxBy(t,"tau").tau,_.minBy(t,"tau").tau],i=e-a;return _.map(t,t=>({ap:t.ap,tau:_.round((t.tau-a)/i*100,2)}))})},itemsFiltered(){return this.isRelative?this.itemsRelative:this.items}},methods:{drawChart(t=!1){if(this.series&&!t||(this.series=_.map(this.itemsFiltered,(t,e)=>({name:this.hubArr[e],type:"scatter",itemStyle:{borderWidth:1,borderColor:"#fff"},data:_.map(t,t=>({name:`${this.hubArr[e]}->${t.ap}`,value:[this.distance(this.hubArr[e],t.ap),t.tau],symbolSize:12}))}))),!this.option||t){const t=this;this.option={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:"bold",color:"#FFFFFF"},xAxis:[{name:"Distance (mile)",nameLocation:"center",type:"value",scale:!0,nameGap:25,splitLine:{show:!1}}],yAxis:[{name:this.isRelative?"Volume (%)":"Volume (*1000)",nameGap:10,type:"value",scale:!0,splitLine:{show:!1},axisLabel:{formatter(e){return t.isRelative?e:_.round(e/1e3)}}}],grid:[{top:35,left:45,right:20,bottom:45}],tooltip:{trigger:"item",axisPointer:{type:"cross",label:{color:"#FFFFFF",backgroundColor:this.$vuetify.theme.primary,shadowBlur:0},crossStyle:{type:"dotted"}}},legend:{orient:"vertical",top:0,right:2,data:this.hubArr,itemGap:3,textStyle:{color:"#FFFFFF",selectedMode:"single",fontSize:12}},series:this.series}}this.chart.setOption(this.option,!0)},distance(t,e){if(t===e)return null;const a=_.find(this.airport,e=>e.code===t),i=_.find(this.airport,t=>t.code===e);return _.round(3958.76*x(b(a.lat)*b(i.lat)+g(a.lat)*g(i.lat)*g(a.lon-i.lon)),2)},onResize(){this.chart&&debounce(this.chart.resize,200)()}},watch:{itemsFiltered(t){this.drawChart(!0)},large(t){this.onResize()}},mounted(){_.delay(()=>{this.chart=echarts.init(this.$refs.echartsMapPaneConnectionScatter,"chalk"),this.drawChart()},1)}};function y(t){return t*Math.PI/180}function b(t){return Math.sin(y(t))}function g(t){return Math.cos(y(t))}function x(t){return Math.acos(t)}var w=v,C=Object(p["a"])(w,u,f,!1,null,null,null),S=C.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],ref:"echartsPaneConnectionDistribution",staticStyle:{width:"100%",height:"100%"}})},F=[],z={props:["isArrival","items"],data:()=>({chart:null,series:null,option:null}),computed:{...Object(s["c"])(["airport","color","hubArr"])},methods:{drawChart(t=!1){if(this.series&&!t||(this.series=_.map(this.items,(t,e)=>({name:this.hubArr[e],type:"line",symbolSize:8,lineStyle:{width:3,opacity:.6},data:_.map(t,(t,a)=>({name:this.isArrival?`${this.hubArr[e]}<-${t.ap}`:`${this.hubArr[e]}->${t.ap}`,value:t.tau}))}))),!this.option||t){const t=this;this.option={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:11,fontWeight:"bold",color:"#FFFFFF"},xAxis:[{type:"category",scale:!0,splitLine:{show:!1},data:_.map(this.items[0],(t,e)=>e+1)}],yAxis:[{name:"Volume (*1000)",nameGap:10,type:"value",scale:!0,splitLine:{show:!1},axisLabel:{formatter(t){return _.round(t/1e3)}}}],grid:[{top:25,left:45,right:20,bottom:25}],tooltip:{trigger:"axis",formatter(e){let a=`Rank ${e[0].dataIndex+1}<br>`;return _.each(e,(e,i)=>{const r=e.marker.replace(e.color,t.color[i]);a+=`${r} ${e.name}: ${e.value}<br>`}),a.slice(0,-4)},axisPointer:{type:"shadow",label:{color:"#000000"}}},legend:{orient:"horizontal",width:250,top:0,right:5,data:this.hubArr,itemGap:3,itemWidth:15,textStyle:{color:"#FFFFFF",selectedMode:"single",fontSize:12}},series:this.series}}this.chart.setOption(this.option,!0)},distance(t,e){if(t===e)return null;const a=_.find(this.airport,e=>e.code===t),i=_.find(this.airport,t=>t.code===e);return _.round(3958.76*L(R(a.lat)*R(i.lat)+k(a.lat)*k(i.lat)*k(a.lon-i.lon)),2)},onResize(){this.chart&&debounce(this.chart.resize,200)()}},watch:{items(t){this.drawChart(!0)}},mounted(){_.delay(()=>{this.chart=echarts.init(this.$refs.echartsPaneConnectionDistribution,"chalk"),this.drawChart()},1)}};function $(t){return t*Math.PI/180}function R(t){return Math.sin($(t))}function k(t){return Math.cos($(t))}function L(t){return Math.acos(t)}var M=z,P=Object(p["a"])(M,A,F,!1,null,null,null),O=P.exports,I={data:()=>({isArrival:0,flight:["Departure","Arrival"],cut:10,map:!1,isRelative:!1,large:-1,slider:10,tooltipItems:[{title:"Out-bound",icon:"flight_takeoff"},{title:"In-bound",icon:"flight_land"}],showAltogether:!1}),computed:{...Object(s["c"])(["hubArr","dataHub","airport"]),...Object(s["b"])(["hubArrFull"]),index(){return this.isArrival?"bndIn":"bndOt"},center(){const t=_.map(this.hubArr,t=>_.find(this.dataHub,e=>t===e.ap));return _.map(t,t=>({ap:t.ap,tau:10*t.tau,bndIn:_.map(_.slice(t.bndIn,0,this.slider),e=>({ap:e.ap,tau:10*e.tau,ratio:_.round(e.tau/t.tau*100,2)})),bndOt:_.map(_.slice(t.bndOt,0,this.slider),e=>({ap:e.ap,tau:10*e.tau,ratio:_.round(e.tau/t.tau*100,2)}))}))},centers(){return _.map(this.center,this.getCenter)},itemData(){return[_.map(this.center,"bndOt"),_.map(this.center,"bndIn")]},items(){return this.itemData[this.isArrival]},aps(){return _.uniq([...this.hubArr,..._.map(_.flattenDeep(this.items),"ap")])},xycor(){const t=_.map(this.aps,this.getCoords),e=_.size(t);return[_.sumBy(t,"lon")/e,_.sumBy(t,"lat")/e]}},methods:{isLarge(t){return this.large===t},largeStyle(t){return{height:this.isLarge(t)?"calc(100vh - 66px - 56px - 6px)":"calc(50vh - 66px - 2px)"}},setShow(t){return{display:-1===this.large||this.isLarge(t)?"":"none"}},getCenter(t){return{ap:t.ap,tau:t.tau}},onSeeAltogether(){this.showAltogether=!this.showAltogether},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return{lon:e.lon,lat:e.lat}}},created(){},mounted(){},components:{AppMapPane:o["a"],AppMapPaneIntegrated:d,AppMapPaneConnectionScatter:S,AppMapPaneConnectionDistribution:O}},N=I,D=Object(p["a"])(N,i,r,!1,null,null,null);e["default"]=D.exports}}]);