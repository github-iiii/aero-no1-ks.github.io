(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["globe"],{"1c90":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticStyle:{width:"100%",height:"100%"}})},s=[],r=i("313e"),a=i.n(r),n=(i("7cb2"),i("1d1c"),i("f711"),i("974d")),h={data:()=>({chart:null,airport:n["a"],ori:"",des:"",slider:2,color:["#EC407A","#AB47BC","#42A5F5","#4DB6AC","#66BB6A","#FFEE58","#FFA726","#A1887F","#BDBDBD"]}),computed:{route(){return _.find(chartData,t=>t.info.ori===this.ori&&t.info.des===this.des)},routeData(){return this.route?(m(_.filter([...this.route.data.major,...this.route.data.minor],t=>t.ratio>=this.slider/100)),_.filter([...this.route.data.major,...this.route.data.minor],t=>t.ratio>=this.slider/100)):[]},tau(){return this.route.info.tau}},methods:{drawChart(){const t=[];_.each(this.routeData,(e,i)=>{if(_.size(e.hub)){const o=`${this.ori}->${_.join(e.hub,"->")}->${this.des}`,s={name:o,type:"lines3D",coordinateSystem:"globe",blendMode:"souce-over",effect:{show:!0},lineStyle:{width:3,color:this.color[i],opacity:.3},data:_.map([...e.hub,this.des],(t,i)=>this.convertData3D(t,i?e.hub[i-1]:this.ori))};t.push(s)}else{const e=`${this.ori}->${this.des}`;t.push({name:e,type:"lines3D",coordinateSystem:"globe",blendMode:"source-over",effect:{show:!0},lineStyle:{width:3,color:this.$vuetify.theme.primary,opacity:.3},data:[{coords:[this.getCoords(this.ori),this.getCoords(this.des)],value:10}]})}}),this.chart.setOption({backgroundColor:"#000",globe:{baseTexture:"./assets/img/world.topo.bathy.200401.jpg",heightTexture:"./assets/img/world.topo.bathy.200401.jpg",displacementScale:.05,shading:"realistic",environment:"./assets/img/starfield.jpg",realisticMaterial:{roughness:.9},postEffect:{enable:!0},light:{main:{intensity:5,shadow:!0}},viewControl:{autoRotate:!1}},series:t})},getCoords(t){const e=_.find(this.airport,e=>e.code===t);return[e.lon,e.lat]},getFlTime(t,e){const[i,o]=[this.getCoords(t||this.ori),this.getCoords(e)];return Math.pow(Math.pow(i[0]-o[0],2)+Math.pow([1]-o[1],2),.5)/5},getTau(t){return _.find(this.routeData,e=>_.includes(e.hub,t)).tau},convertData3D(t,e){const i=e||this.ori,o=this.getCoords(i),s=this.getCoords(t);return{coords:[o,s],value:10}}},beforeMount(){this.$root.$emit("getODPair",t=>{this.ori=t.ori,this.des=t.des,this.slider=t.slider,m(1,t)})},mounted(){_.delay(()=>{this.chart=a.a.init(this.$refs.container),this.drawChart(),window.addEventListener("resize",debounce(this.chart.resize,200))},1)}},d=h,l=(i("6855"),i("2877")),u=Object(l["a"])(d,o,s,!1,null,null,null);u.options.__file="_Globe.vue";e["default"]=u.exports},3449:function(t,e,i){},6855:function(t,e,i){"use strict";var o=i("3449"),s=i.n(o);s.a}}]);