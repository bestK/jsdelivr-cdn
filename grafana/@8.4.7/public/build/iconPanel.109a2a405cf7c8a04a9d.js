"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[53],{"./public/app/plugins/panel/icon/module.tsx":(e,t,i)=>{i.r(t),i.d(t,{plugin:()=>u});var s=i("./packages/grafana-data/src/index.ts"),n=i("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a=i("./public/app/features/canvas/runtime/element.tsx"),o=i("./public/app/features/canvas/elements/icon.tsx"),p=i("./public/app/features/dimensions/index.ts"),d=i("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class l extends n.Component{constructor(e){super(e),r(this,"element",void 0),r(this,"initElement",(e=>(this.element=new a.f(o.e,e.options.root),this.updateSize(e),this.element.updateData(this.dims),this.element))),r(this,"updateSize",(e=>{const{width:t,height:i}=e;this.element.anchor={top:!0,left:!0},this.element.placement={left:0,top:0,width:t,height:i},this.element.updateSize(t,i)})),r(this,"dims",{getColor:e=>(0,p.FP)(this.props.data,e),getScale:e=>(0,p.pb)(this.props.data,e),getScalar:e=>(0,p.z2)(this.props.data,e),getText:e=>(0,p.WO)(this.props.data,e),getResource:e=>(0,p.Qz)(this.props.data,e)}),this.element=this.initElement(e)}shouldComponentUpdate(e){var t,i;const{width:s,height:n,data:a}=this.props;let o=!1;return s===e.width&&n===e.height||(this.updateSize(e),o=!0),a!==e.data&&(this.element.updateData(this.dims),o=!0),(null===(t=this.props.options)||void 0===t?void 0:t.root)!==(null===(i=e.options)||void 0===i?void 0:i.root)&&(this.initElement(e),o=!0),o}render(){const{width:e,height:t}=this.props;return(0,d.jsx)("div",{style:{width:e,height:t,overflow:"hidden",position:"relative"},children:this.element.render()})}}const h={root:{config:{path:{mode:p.Q8.Fixed,fixed:"img/icons/unicons/analysis.svg"}}}};var c=i("./public/app/plugins/panel/canvas/editor/options.ts");const u=new s.PanelPlugin(l).setNoPadding().useFieldConfig().setPanelOptions((e=>{e.addNestedOptions({category:["Icon"],path:"root",build:(e,t)=>{o.e.registerOptionsUI(e,t),c.I.addBackground(e,t),c.I.addBorder(e,t)},defaultValue:h.root})}))}}]);
//# sourceMappingURL=iconPanel.109a2a405cf7c8a04a9d.js.map