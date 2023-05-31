"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8595],{"./public/app/features/query/components/QueryEditorRows.tsx":(e,r,t)=>{t.d(r,{l:()=>d});var a=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=t("./public/app/features/query/components/QueryEditorRow.tsx"),s=t("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/3/opt/drone/yarncache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),o=t("./packages/grafana-runtime/src/index.ts"),i=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class d extends a.PureComponent{constructor(){super(...arguments),u(this,"onRemoveQuery",(e=>{this.props.onQueriesChange(this.props.queries.filter((r=>r!==e)))})),u(this,"onDragStart",(e=>{const{queries:r,dsSettings:t}=this.props;(0,o.reportInteraction)("query_row_reorder_started",{startIndex:e.source.index,numberOfQueries:r.length,datasourceType:t.type})})),u(this,"onDragEnd",(e=>{const{queries:r,onQueriesChange:t,dsSettings:a}=this.props;if(!e||!e.destination)return;const n=e.source.index,s=e.destination.index;if(n===s)return void(0,o.reportInteraction)("query_row_reorder_canceled",{startIndex:n,endIndex:s,numberOfQueries:r.length,datasourceType:a.type});const i=Array.from(r),[u]=i.splice(n,1);i.splice(s,0,u),t(i),(0,o.reportInteraction)("query_row_reorder_ended",{startIndex:n,endIndex:s,numberOfQueries:r.length,datasourceType:a.type})}))}onChangeQuery(e,r){const{queries:t,onQueriesChange:a}=this.props;a(t.map(((t,a)=>a===r?e:t)))}onDataSourceChange(e,r){const{queries:t,onQueriesChange:a}=this.props;a(t.map(((t,a)=>{if(a!==r)return t;if(t.datasource){const r=(0,o.getDataSourceSrv)().getInstanceSettings(t.datasource);if((null==r?void 0:r.type)===e.type)return Object.assign({},t,{datasource:{uid:e.uid}})}return{refId:t.refId,hide:t.hide,datasource:{uid:e.uid}}})))}render(){const{dsSettings:e,data:r,queries:t,app:a,history:o,eventBus:u}=this.props;return(0,i.jsx)(s.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:(0,i.jsx)(s.bK,{droppableId:"transformations-list",direction:"vertical",children:s=>(0,i.jsxs)("div",Object.assign({ref:s.innerRef},s.droppableProps,{children:[t.map(((s,d)=>{const p=c(s,e),l=e.meta.mixed?e=>this.onDataSourceChange(e,d):void 0;return(0,i.jsx)(n.x,{id:s.refId,index:d,data:r,query:s,dataSource:p,onChangeDataSource:l,onChange:e=>this.onChangeQuery(e,d),onRemoveQuery:this.onRemoveQuery,onAddQuery:this.props.onAddQuery,onRunQuery:this.props.onRunQueries,queries:t,app:a,history:o,eventBus:u},s.refId)})),s.placeholder]}))})})}}const c=(e,r)=>{if(!e.datasource)return r;return(0,o.getDataSourceSrv)().getInstanceSettings(e.datasource)||r}},"./public/app/features/sandbox/TestStuffPage.tsx":(e,r,t)=>{t.r(r),t.d(r,{TestStuffPage:()=>b,getDefaultState:()=>m,default:()=>f});var a=t("./packages/grafana-data/src/index.ts"),n=t("./packages/grafana-ui/src/index.ts"),s=t("./public/app/core/config.ts"),o=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js"),u=t("./public/app/features/query/components/QueryGroup.tsx"),d=t("./public/app/features/query/state/PanelQueryRunner.ts"),c=t("./public/app/core/components/Page/Page.tsx"),p=t("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/3/opt/drone/yarncache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),l=t("./public/app/features/panel/components/PanelRenderer.tsx"),h=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const b=()=>{const[e,r]=(0,o.useState)(m()),{queryOptions:t,queryRunner:s}=e,d=(0,o.useMemo)((()=>s.getData({withFieldConfig:!0,withTransforms:!0})),[s]),b=(0,i.Z)(d),f={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"};return(0,h.jsx)(c.Z,{navModel:{node:f,main:f},children:(0,h.jsxs)(c.Z.Contents,{children:[b&&(0,h.jsx)(p.Z,{style:{width:"100%",height:"600px"},children:e=>{let{width:r}=e;return(0,h.jsxs)("div",{children:[(0,h.jsx)(l.$,{title:"Hello",pluginId:"timeseries",width:r,height:300,data:b,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),(0,h.jsx)(n.Table,{data:b.series[0],width:r,height:300})]})}}),(0,h.jsx)("div",{style:{marginTop:"16px",height:"45%"},children:(0,h.jsx)(u.D,{options:t,queryRunner:s,onRunQueries:()=>{var e;const r={from:"now-1h",to:"now"};s.run({queries:t.queries,datasource:t.dataSource,timezone:"browser",timeRange:{from:a.dateMath.parse(r.from),to:a.dateMath.parse(r.to),raw:r},maxDataPoints:null!==(e=t.maxDataPoints)&&void 0!==e?e:100,minInterval:t.minInterval})},onOptionsChange:t=>{r(Object.assign({},e,{queryOptions:t}))}})})]})})};function m(){const e={fieldConfig:{defaults:{color:{mode:a.FieldColorModeId.PaletteClassic}},overrides:[]},replaceVariables:e=>e,theme:s.vc.theme2},r={getTransformations:()=>[],getFieldOverrideOptions:()=>e,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new d.o(r),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}const f=b},"./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":(e,r,t)=>{t.d(r,{Z:()=>s});var a=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");const s=function(e,r){var t=(0,a.useState)(r),s=t[0],o=t[1];return(0,n.Z)((function(){var r=e.subscribe(o);return function(){return r.unsubscribe()}}),[e]),s}}}]);
//# sourceMappingURL=TestStuffPage.109a2a405cf7c8a04a9d.js.map