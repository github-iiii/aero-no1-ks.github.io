(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["t-100"],{"0361":function(e,t,a){"use strict";var s=a("63b1"),i=a.n(s);i.a},"63b1":function(e,t,a){},b3c5:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{staticClass:"pa-1",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pa-1",attrs:{xs12:e.large,xs7:""}},[a("v-card",[a("v-layout",{staticClass:"subheading pa-2 grey darken-1",attrs:{row:""}},[a("v-flex",{staticStyle:{"max-width":"415px"}},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[e._v("public")]),a("span",{staticClass:"bold"},[e._v("T-100D Top "+e._s(e.num)+" Segments (selected: "+e._s(e.name||"N/A")+")")])],1),a("v-flex",[a("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"primary","hide-details":"",label:"Enlarge"},model:{value:e.large,callback:function(t){e.large=t},expression:"large"}})],1)],1),a("v-divider"),a("T100Graph",{style:e.largeStyle,attrs:{items:e.items,refresh:e.large,apList:e.apList,apName:e.apName,uniqAP:e.uniqAP},on:{onSetIndex:e.onSetIndex}})],1)],1),a("v-slide-y-transition",[a("v-flex",{directives:[{name:"show",rawName:"v-show",value:!e.large,expression:"!large"}],staticClass:"pa-1",attrs:{xs5:""}},[a("T100Table",{attrs:{items:e.items,index:e.index,name:e.name,apList:e.apList,apName:e.apName,uniqAP:e.uniqAP}})],1)],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],ref:"echartsMapPaneT100D",staticStyle:{width:"100%",height:"100%"}})},r=[],o=a("2f62"),l={props:["items","refresh","apList","apName","uniqAP"],data:()=>({chart:null,index:0,name:"LAX<->SFO"}),computed:{...Object(o["c"])(["airportWorld","color","areaColor","effectTrail","effectLines"]),center(){const[e,t]=[_.map(this.uniqAP,e=>this.getCoords(e)[0]),_.map(this.uniqAP,e=>this.getCoords(e)[1])];return[_.sum(e)/_.size(e),_.sum(t)/_.size(t)]}},methods:{drawChart(e="usa"){const t=[..._.map(this.uniqAP,(e,t)=>({name:e,type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",distance:10}},symbolSize:5,data:[{name:e,value:[this.getCoords(e)[0],this.getCoords(e)[1],20]}]})),..._.map(this.items,(e,t)=>({name:this.apName[t],type:"lines",symbol:["none","none"],symbolSize:10,effect:this.effectLines,lineStyle:{width:this.index===t?8:1.5,opacity:this.index===t?1:.5,shadowBlur:this.index===t?10:0,shadowColor:this.index===t?"white":"rgba(0, 0, 0, 0)",curveness:0},data:this.convertData(e)})),{type:"bar",data:_.map(this.items,(e,t)=>({name:this.apName[t],value:e.enp,itemStyle:{normal:{color:this.index===t?"#F7F494":this.$vuetify.theme.primary}}})),itemStyle:{normal:{barBorderRadius:[3,3,0,0]},emphasis:{color:"#F7F494",shadowBlur:10,shadowColor:"rgba(205, 205, 205, 0.6)"}}}],a={textStyle:{fontFamily:"Poppins, sans-serif",fontSize:14,fontWeight:"bold"},backgroundColor:"#424242",tooltip:{trigger:"item"},legend:{show:!1},geo:{map:e,label:{emphasis:{show:!1}},height:"66%",roam:!0,zoom:1.25,itemStyle:{normal:{areaColor:this.areaColor,borderColor:"#5D5D5D"},emphasis:{areaColor:this.$vuetify.theme.primary}}},grid:{left:10,top:"70%",right:10,bottom:60,containLable:!0},xAxis:{type:"category",data:this.apName,axisLabel:{textStyle:{color:"#FFFFFF"},rotate:45}},yAxis:{type:"value",axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1}},series:t};this.chart.setOption(a,!0)},getCoords(e){const{lon:t,lat:a}=_.find(this.airportWorld,t=>t.code===e);return[t,a]},convertData(e){return[{fromName:e.ap[0],toName:e.ap[1],coords:[this.getCoords(e.ap[0]),this.getCoords(e.ap[1])]}]},onResize(){this.chart&&this.chart.resize()}},watch:{items(e){this.drawChart()},refresh(e){this.onResize()}},created(){},mounted(){_.delay(()=>{this.chart=echarts.init(this.$refs.echartsMapPaneT100D,"chalk"),this.drawChart(),this.chart.on("click",e=>{this.$emit("onSetIndex",e.data.name,e.dataIndex),this.index=e.dataIndex,this.name=e.data.name,this.drawChart(),m(1,this.index,this.name)})},1)}},h=l,c=a("2877"),d=Object(c["a"])(h,n,r,!1,null,null,null);d.options.__file="T100Graph.vue";var u=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"scrollPane"}},[a("vue-perfect-scrollbar",{staticClass:"breakdown--scroll",attrs:{settings:e.scrollSettings}},[a("v-layout",{staticClass:"subheading",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pr-1",attrs:{xs12:""}},[a("v-card",[a("v-layout",{staticClass:"grey darken-1",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[a("v-icon",{staticClass:"subheading bold vertical-middle mr-1"},[e._v("flight")]),a("span",{staticClass:"bold"},[e._v("Operation Breakdown (daily)")])],1),a("v-flex",{attrs:{xs12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.item.data,"hide-actions":"",pagination:e.pagination,"hide-details":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"pointer text-xs-center ma-1 py-0 px-1",on:{click:e.onMouseEnter}},[e._v(e._s(t.item.al))]),a("td",{staticClass:"pointer text-xs-left ma-1 pa-0",on:{click:e.onMouseEnter}},[e._v(e._s(e.getACName(t.item.acT)))]),a("td",{staticClass:"pointer text-xs-center ma-1 py-0 px-1",on:{click:e.onMouseEnter}},[e._v(e._s(e.round(t.item.ops,1)))]),a("td",{staticClass:"pointer text-xs-center ma-1 py-0 px-1",on:{click:e.onMouseEnter}},[e._v(e._s(e.round(t.item.enp,1)))]),a("td",{staticClass:"pointer text-xs-center ma-0 py-0 px-1",on:{click:e.onMouseEnter}},[e._v(e._s(t.item.lf))])]}}])},[a("template",{slot:"no-data"},[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n                    Sorry, nothing to display here :(\n                  ")])],1)],2)],1)],1)],1)],1)],1)],1)],1)},f=[],x=a("9d63"),v=a.n(x),b={props:["items","index","name","apList","apName","uniqAP"],data:()=>({scrollSettings:{maxScrollbarLength:400},aircraftArr:[{name:"Airbus Industrie A320-100/200",src:"http://upload.wikimedia.org/wikipedia/commons/6/6a/British_Airways_A320-100_G-BUSB.jpg"},{name:"Embraer ERJ-175",src:"https://worldairlinenews.files.wordpress.com/2014/03/united-express-skywest-erj-175-pr-eed-co-91grd-sjk-embraerlr.jpg"},{name:"Boeing 737-700/700LR/Max 7",src:"http://www.flugzeuginfo.net/acimages/7377bbj_kp.jpg"}],headers:[{text:"Airline",sortable:!1,value:"al"},{text:"Aircraft",sortable:!1,value:"acT"},{text:"Operaton",sortable:!0,value:"ops"},{text:"Volume",sortable:!0,value:"enp"},{text:"Avg. LF",sortable:!0,value:"lf"}],pagination:{descending:!0,rowsPerPage:10,sortBy:"enp"}}),computed:{...Object(o["c"])(["aircraft","airline"]),names(){return this.name?this.name.split("<->"):["LAX","SFO"]},item(){return this.items[this.index]},paxInfo(){if(!_.size(this.names))return[];const e=[];let t=0;const a=_.filter(chartData,e=>_.includes([e.info.ori,e.info.des],this.names[0])&&_.includes([e.info.ori,e.info.des],this.names[1]));_.each(a,e=>{const a=_.filter(e.data.major,e=>!_.size(e.hub)),s=_.filter(e.data.minor,e=>!_.size(e.hub));t+=_.max([_.sumBy(a,"tau"),0])+_.max([_.sumBy(s,"tau"),0])}),e.push({type:"direct",enp:10*t});let s=0;const i=_.filter(chartData,e=>!_.includes([e.info.ori,e.info.des],this.names[0])&&!_.includes([e.info.ori,e.info.des],this.names[1]));_.each(i,e=>{const t=_.filter(e.data.major,e=>e.hub==this.names||e.hub==_.reverse(this.names));_.filter(e.data.minor,e=>e.hub==this.names||e.hub==_.reverse(this.names));s+=_.max([_.sumBy(t,"tau"),0])+_.max([_.sumBy(t,"tau"),0])}),e.push({type:"not-od",enp:10*s});let n=0;const r=_.filter(chartData,e=>!_.includes([e.info.ori,e.info.des],this.names[0])&&_.includes([e.info.ori,e.info.des],this.names[1])||_.includes([e.info.ori,e.info.des],this.names[1])&&!_.includes([e.info.ori,e.info.des],this.names[0]));return _.each(r,e=>{n+=_.max([_.sumBy(_.filter(e.data.major,t=>e.info.ori===this.names[0]&&t.hub[0]===this.names[1]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.major,t=>e.info.ori===this.names[1]&&t.hub[0]===this.names[0]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.major,t=>e.info.des===this.names[0]&&t.hub[0]===this.names[1]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.major,t=>e.info.des===this.names[1]&&t.hub[0]===this.names[0]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.minor,t=>e.info.ori===this.names[0]&&t.hub[0]===this.names[1]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.minor,t=>e.info.ori===this.names[1]&&t.hub[0]===this.names[0]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.minor,t=>e.info.des===this.names[0]&&t.hub[0]===this.names[1]),"tau"),0])+_.max([_.sumBy(_.filter(e.data.minor,t=>e.info.des===this.names[1]&&t.hub[0]===this.names[0]),"tau"),0])}),e.push({type:"indirect",enp:10*n}),e}},methods:{getALName(e){return _.find(this.airline,t=>t.code===e).name},getACName(e){return _.find(this.aircraft,t=>t.type===e).name},round(e,t){return _.round(e/365,t)},onMouseEnter(){m(1111)}},watch:{item(e){m(111,e)}},created(){},mounted(){},components:{VuePerfectScrollbar:v.a}},g=b,y=(a("0361"),Object(c["a"])(g,p,f,!1,null,null,null));y.options.__file="T100Table.vue";var w=y.exports,C={data:()=>({ii:null,jj:null,large:!1,name:"LAX<->SFO",index:0,num:75}),computed:{items(){return _.slice(T100D,0,this.num)},apList(){return _.map(this.items,"ap")},apName(){return _.map(this.apList,e=>_.join(e,"<->"))},uniqAP(){const e=[];return _.each(this.apList,t=>{_.each(_.flatten(t),t=>{_.includes(e,t)||e.push(t)})}),e},largeStyle(){return{height:"calc(100vh - 64px - 56px)"}}},methods:{onSetIndex(e,t){this.name=e,this.index=t}},created(){},mounted(){this.$root.$on("onT100ScopeChanged",e=>{m(e)})},components:{T100Graph:u,T100Table:w}},S=C,A=Object(c["a"])(S,s,i,!1,null,null,null);A.options.__file="_T-100.vue";t["default"]=A.exports}}]);