(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abc7d"],{1778:function(e,a,i){"use strict";i.r(a);var s=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],ref:"chart",staticClass:"chartFull"})},t=[],o=(i("7cb2"),i("f75f"),i("b27f"));const r=o["c"],n=100,l=1,c=1e4,h=r.slice(0,n).map((e,a)=>e.slice(0,n).map((e,i)=>{return{value:[a+1,i+1,e*l]}})).flat(1),u={backgroundColor:"white",xAxis3D:{type:"value",axisLabel:{show:!1},name:"",max:n+1,axisLine:{lineStyle:{color:"#444444"}}},yAxis3D:{type:"value",name:"",max:n+1,axisLabel:{show:!1},axisLine:{lineStyle:{color:"#444444"}}},zAxis3D:{axisLabel:{show:!1},name:"",axisTick:{},axisLine:{lineStyle:{color:"#444444"}}},grid3D:{boxHeight:100*l,axisTick:{show:!1},axisLine:{lineStyle:{color:"rgba(0,0,0,0)",opacity:0,width:0}},axisPointer:{show:!1,lineStyle:{color:"#fff",opacity:0}},viewControl:{projection:"orthographic",alpha:20,beta:135},light:{main:{shadow:!1,intensity:1}}},visualMap:{max:c},series:[{type:"bar3D",data:h,barSize:90/n,shading:"realistic",label:{show:!1}}]};var p={data:()=>({chart:null}),methods:{onResize(){this.chart&&_.debounce(this.chart.resize,200)()}},mounted(){this.chart=echarts.init(this.$refs.chart,"macarons2"),this.chart.setOption(u)},beforeDestroy(){this.chart.dispose()}},x=p,d=i("2877"),b=i("269a"),w=i.n(b),m=i("dc22"),f=Object(d["a"])(x,s,t,!1,null,null,null);a["default"]=f.exports;w()(f,{Resize:m["a"]})}}]);