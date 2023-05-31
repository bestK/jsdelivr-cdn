"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4023],{"./public/app/core/components/NodeGraphSettings.tsx":(e,a,t)=>{t.d(a,{n:()=>l});t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n,s=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("./packages/grafana-data/src/index.ts"),i=t("./packages/grafana-ui/src/index.ts"),r=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function l(e){var a;let{options:t,onOptionsChange:s}=e;const l=(0,i.useStyles)(d);return(0,r.jsxs)("div",{className:l.container,children:[n||(n=(0,r.jsx)("h3",{className:"page-heading",children:"Node Graph"})),(0,r.jsx)(i.InlineFieldRow,{className:l.row,children:(0,r.jsx)(i.InlineField,{tooltip:"Enables the Node Graph visualization in the trace viewer.",label:"Enable Node Graph",labelWidth:26,children:(0,r.jsx)(i.InlineSwitch,{id:"enableNodeGraph",value:null===(a=t.jsonData.nodeGraph)||void 0===a?void 0:a.enabled,onChange:e=>(0,o.updateDatasourcePluginJsonDataOption)({onOptionsChange:s,options:t},"nodeGraph",Object.assign({},t.jsonData.nodeGraph,{enabled:e.currentTarget.checked}))})})})]})}const d=e=>({container:s.css`
    label: container;
    width: 100%;
  `,row:s.css`
    label: row;
    align-items: baseline;
  `})},"./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":(e,a,t)=>{t.d(a,{Z:()=>g});var n,s,o,i=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=t("./packages/grafana-data/src/index.ts"),l=t("./packages/grafana-runtime/src/index.ts"),d=t("./packages/grafana-ui/src/index.ts"),c=(t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"));const p=e=>{let{values:a,onChange:t,id:i,keyPlaceholder:r="Key",valuePlaceholder:l="Value (optional)"}=e;const p=(0,d.useStyles)(u);return(0,c.jsx)("div",{className:p.wrapper,children:a.length?a.map(((e,o)=>(0,c.jsxs)("div",{className:p.pair,children:[(0,c.jsx)(d.SegmentInput,{id:`${i}-key-${o}`,placeholder:r,value:e.key,onChange:e=>{t(a.map(((a,t)=>(t===o&&(a.key=String(e)),a))))}}),(0,c.jsx)(d.InlineLabel,{"aria-label":"equals",className:p.operator,width:3,children:"="}),(0,c.jsx)(d.SegmentInput,{id:`${i}-value-${o}`,placeholder:l,value:e.value,onChange:e=>{t(a.map(((a,t)=>(t===o&&(a.value=String(e)),a))))}}),(0,c.jsx)("button",{onClick:()=>t([...a.slice(0,o),...a.slice(o+1)]),className:"gf-form-label query-part","aria-label":"Remove tag",children:n||(n=(0,c.jsx)(d.Icon,{name:"times"}))}),o===a.length-1?(0,c.jsx)("button",{onClick:()=>t([...a,{key:"",value:""}]),className:"gf-form-label query-part","aria-label":"Add tag",children:s||(s=(0,c.jsx)(d.Icon,{name:"plus"}))}):null]},o))):(0,c.jsx)("button",{onClick:()=>t([...a,{key:"",value:""}]),className:"gf-form-label query-part","aria-label":"Add tag",children:o||(o=(0,c.jsx)(d.Icon,{name:"plus"}))})})},u=e=>({wrapper:i.css`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing.xs} 0;
  `,pair:i.css`
    display: flex;
    justify-content: start;
    align-items: center;
  `,operator:i.css`
    color: ${e.palette.orange};
  `});var m;function g(e){var a,t,n,s,o,u,g,v,f,y,b,j,T,x,D;let{options:F,onOptionsChange:k}=e;const N=(0,d.useStyles)(h);return(0,c.jsxs)("div",{className:(0,i.css)({width:"100%"}),children:[m||(m=(0,c.jsx)("h3",{className:"page-heading",children:"Trace to logs"})),(0,c.jsx)("div",{className:N.infoText,children:"Trace to logs lets you navigate from a trace span to the selected data source's log."}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{tooltip:"The data source the trace is going to navigate to",label:"Data source",labelWidth:26,children:(0,c.jsx)(l.DataSourcePicker,{inputId:"trace-to-logs-data-source-picker",pluginId:"loki",current:null===(a=F.jsonData.tracesToLogs)||void 0===a?void 0:a.datasourceUid,noDefault:!0,width:40,onChange:e=>{var a;return(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",{datasourceUid:e.uid,tags:null===(a=F.jsonData.tracesToLogs)||void 0===a?void 0:a.tags})}})})}),null!==(t=F.jsonData.tracesToLogs)&&void 0!==t&&t.mapTagNamesEnabled?(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",label:"Tags",labelWidth:26,children:(0,c.jsx)(p,{keyPlaceholder:"Tag",values:null!==(n=null!==(s=null===(o=F.jsonData.tracesToLogs)||void 0===o?void 0:o.mappedTags)&&void 0!==s?s:null===(u=F.jsonData.tracesToLogs)||void 0===u||null===(g=u.tags)||void 0===g?void 0:g.map((e=>({key:e}))))&&void 0!==n?n:[],onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{mappedTags:e}))})})}):(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",label:"Tags",labelWidth:26,children:(0,c.jsx)(d.TagsInput,{tags:null===(v=F.jsonData.tracesToLogs)||void 0===v?void 0:v.tags,width:40,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{tags:e}))})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Map tag names",labelWidth:26,grow:!0,tooltip:"Map trace tag names to log label names. Ex: k8s.pod.name -> pod",children:(0,c.jsx)(d.InlineSwitch,{id:"mapTagNames",value:null!==(f=null===(y=F.jsonData.tracesToLogs)||void 0===y?void 0:y.mapTagNamesEnabled)&&void 0!==f&&f,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{mapTagNamesEnabled:e.currentTarget.checked}))})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Span start time shift",labelWidth:26,grow:!0,tooltip:"Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",children:(0,c.jsx)(d.Input,{type:"text",placeholder:"1h",width:40,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{spanStartTimeShift:e.currentTarget.value})),value:(null===(b=F.jsonData.tracesToLogs)||void 0===b?void 0:b.spanStartTimeShift)||""})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Span end time shift",labelWidth:26,grow:!0,tooltip:"Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",children:(0,c.jsx)(d.Input,{type:"text",placeholder:"1h",width:40,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{spanEndTimeShift:e.currentTarget.value})),value:(null===(j=F.jsonData.tracesToLogs)||void 0===j?void 0:j.spanEndTimeShift)||""})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Filter by Trace ID",labelWidth:26,grow:!0,tooltip:"Filters logs by Trace ID. Appends '|=<trace id>' to the query.",children:(0,c.jsx)(d.InlineSwitch,{id:"filterByTraceID",value:null===(T=F.jsonData.tracesToLogs)||void 0===T?void 0:T.filterByTraceID,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{filterByTraceID:e.currentTarget.checked}))})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Filter by Span ID",labelWidth:26,grow:!0,tooltip:"Filters logs by Span ID. Appends '|=<span id>' to the query.",children:(0,c.jsx)(d.InlineSwitch,{id:"filterBySpanID",value:null===(x=F.jsonData.tracesToLogs)||void 0===x?void 0:x.filterBySpanID,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{filterBySpanID:e.currentTarget.checked}))})})}),(0,c.jsx)(d.InlineFieldRow,{children:(0,c.jsx)(d.InlineField,{label:"Loki Search",labelWidth:26,grow:!0,tooltip:"Use this logs data source to search for traces.",children:(0,c.jsx)(d.InlineSwitch,{id:"lokiSearch",defaultChecked:!0,value:null===(D=F.jsonData.tracesToLogs)||void 0===D?void 0:D.lokiSearch,onChange:e=>(0,r.updateDatasourcePluginJsonDataOption)({onOptionsChange:k,options:F},"tracesToLogs",Object.assign({},F.jsonData.tracesToLogs,{lokiSearch:e.currentTarget.checked}))})})})]})}const h=e=>({infoText:i.css`
    padding-bottom: ${e.spacing.md};
    color: ${e.colors.textSemiWeak};
  `})},"./public/app/core/utils/tracing.ts":(e,a,t)=>{t.d(a,{et:()=>s,nO:()=>o,fy:()=>i,np:()=>l});var n=t("./packages/grafana-data/src/index.ts");function s(e){e.sort(((e,a)=>e[0]-a[0]));return e.reduce(((e,a)=>{if(!e.length)return[a];const t=e.slice(-1)[0],[n,s]=t,[o,i]=a;return i<s?e:o>s?[...e,a]:[...e.slice(0,-1),[n,i]]}),[]).reduce(((e,a)=>e+(a[1]-a[0])),0)}function o(e){const a={};let t;for(let n=0;t=e(n),t;n++){a[t.id]?a[t.id].span=t.span:a[t.id]={span:t.span,children:[]};for(const e of t.parentIds)e&&(a[e]?a[e].children.push(t.id):a[e]={span:void 0,children:[t.id]})}return a}function i(e,a,t){return{main:`${r(e)}ms (${r(e/a*100)}%)`,secondary:`${r(t)}ms (${r(t/e*100)}%)`}}function r(e){return parseFloat(e.toFixed(2))}function l(){return[new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.title,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.subTitle,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:n.NodeGraphDataFrameFieldNames.color,type:n.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.target,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.source,type:n.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},"./public/app/plugins/datasource/zipkin/module.ts":(e,a,t)=>{t.r(a),t.d(a,{plugin:()=>C});var n=t("./packages/grafana-data/src/index.ts"),s=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),o=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),i=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),r=t("./packages/grafana-runtime/src/index.ts"),l=t("./public/app/core/utils/fetch.ts");var d=t("./public/app/core/utils/tracing.ts");function c(e){const{nodes:a,edges:t}=function(e){const a=[],t=[],s=function(e){let a=0,t=1/0;for(const n of e)n.timestamp<t&&(t=n.timestamp),n.timestamp+n.duration>a&&(a=n.timestamp+n.duration);return a-t}(e),o=(0,d.nO)((a=>{if(!(a>=e.length))return{span:e[a],id:e[a].id,parentIds:e[a].parentId?[e[a].parentId]:[]}}));for(const l of e){var i,r;const e=o[l.id].children.map((e=>{const a=o[e].span;return[a.timestamp,a.timestamp+a.duration]})),c=(0,d.et)(e),p=l.duration-c,u=(0,d.fy)(l.duration/1e3,s/1e3,p/1e3);a.push({[n.NodeGraphDataFrameFieldNames.id]:l.id,[n.NodeGraphDataFrameFieldNames.title]:(null===(i=l.localEndpoint)||void 0===i?void 0:i.serviceName)||(null===(r=l.remoteEndpoint)||void 0===r?void 0:r.serviceName)||"unknown",[n.NodeGraphDataFrameFieldNames.subTitle]:l.name,[n.NodeGraphDataFrameFieldNames.mainStat]:u.main,[n.NodeGraphDataFrameFieldNames.secondaryStat]:u.secondary,[n.NodeGraphDataFrameFieldNames.color]:p/s}),l.parentId&&o[l.parentId].span&&t.push({[n.NodeGraphDataFrameFieldNames.id]:l.parentId+"--"+l.id,[n.NodeGraphDataFrameFieldNames.target]:l.id,[n.NodeGraphDataFrameFieldNames.source]:l.parentId})}return{nodes:a,edges:t}}(e),[s,o]=(0,d.np)();for(const e of a)s.add(e);for(const e of t)o.add(e);return[s,o]}var p=t("./public/app/plugins/datasource/zipkin/utils/transforms.ts");function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class m extends n.DataSourceApi{constructor(e){super(e),u(this,"uploadedJson",null),u(this,"nodeGraph",void 0),this.instanceSettings=e,this.nodeGraph=e.jsonData.nodeGraph}query(e){const a=e.targets[0];if("upload"===a.queryType){if(!this.uploadedJson)return(0,s.of)({data:[]});try{var t;const e=JSON.parse(this.uploadedJson);return(0,s.of)(g({data:e},null===(t=this.nodeGraph)||void 0===t?void 0:t.enabled))}catch(e){return(0,s.of)({error:{message:"JSON is not valid Zipkin format"},data:[]})}}return a.query?this.request(`/api/v2/trace/${encodeURIComponent(a.query)}`).pipe((0,i.U)((e=>{var a;return g(e,null===(a=this.nodeGraph)||void 0===a?void 0:a.enabled)}))):(0,s.of)(h)}async metadataRequest(e,a){return(await(0,o.n)(this.request(e,a,{hideFromInspector:!0}))).data}async testDatasource(){return await this.metadataRequest("/api/v2/services"),{status:"success",message:"Data source is working"}}getQueryDisplayText(e){return e.query}request(e,a,t){const n=a?(0,l.tW)(a):"",s=`${this.instanceSettings.url}${e}${n.length?`?${n}`:""}`,o=Object.assign({},t,{url:s});return(0,r.getBackendSrv)().fetch(o)}}function g(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=null!=e&&e.data?[(0,p.m)(null==e?void 0:e.data)]:[];return a&&t.push(...c(null==e?void 0:e.data)),{data:t}}const h={data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}})]};var v=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),f=t("./packages/grafana-ui/src/index.ts"),y=t("./public/app/core/actions/index.ts"),b=t("./public/app/core/copy/appNotification.ts"),j=t("./public/app/store/store.ts"),T=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),x=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),D=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js"),F=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js"),k=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js"),N=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const I=e=>({tracesCascader:(0,v.css)({label:"tracesCascader",marginRight:e.spacing(1)})});const w=[{label:"No traces found",value:"no_traces",isLeaf:!0}],O={"[No traces in time range]":"__NO_TRACES__"};var S=t("./public/app/core/components/NodeGraphSettings.tsx"),_=t("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");const C=new n.DataSourcePlugin(m).setQueryEditor((e=>{let{query:a,onChange:t,onRunQuery:n,datasource:s}=e;const o=function(e){const a="/api/v2/services",[t,n]=(0,D.Z)((async()=>{try{const t=await e.metadataRequest(a);return t?t.sort().map((e=>({label:e,value:e,isLeaf:!1}))):[]}catch(e){throw(0,j.WI)((0,y.$l)((0,b.t_)("Failed to load services from Zipkin",e))),e}}),[e]);return(0,F.Z)((()=>{n()})),t}(s),i=(0,f.useTheme2)(),r=(0,f.useStyles2)(I),{onLoadOptions:l,allOptions:d}=function(e){const a=(0,k.Z)(),[t,n]=(0,x.useState)({}),[,s]=(0,D.Z)((async function(t){const s="/api/v2/spans";try{const o=await e.metadataRequest(s,{serviceName:t});a()&&n((e=>{const a=(0,T.fromPairs)(o.map((e=>[e,void 0])));return Object.assign({},e,{[t]:a})}))}catch(e){throw(0,j.WI)((0,y.$l)((0,b.t_)("Failed to load spans from Zipkin",e))),e}}),[e,t]),[,o]=(0,D.Z)((async function(t,s){const o="/api/v2/traces",i={serviceName:t,spanName:s};try{const r=await e.metadataRequest(o,i);if(a()){const e=r.length?(0,T.fromPairs)(r.map((e=>{const a=e.find((e=>!e.parentId));return[`${a.name} [${Math.floor(a.duration/1e3)} ms]`,a.traceId]}))):O;n((a=>{const n=a[t];return Object.assign({},a,{[t]:Object.assign({},n,{[s]:e})})}))}}catch(e){throw(0,j.WI)((0,y.$l)((0,b.t_)("Failed to load spans from Zipkin",e))),e}}),[e]);return{onLoadOptions:(0,x.useCallback)((e=>{const a=e[0].value;if(1===e.length)s(a);else if(2===e.length){const t=e[1].value;o(a,t)}}),[s,o]),allOptions:t}}(s),c=(0,x.useCallback)(((e,s)=>{if(3===s.length){const e=s[2].value;t(Object.assign({},a,{query:e})),n()}}),[t,n,a]);let p=function(e,a){return(0,x.useMemo)((()=>{let t=[];return e.value&&e.value.length?t=e.value.map((e=>Object.assign({},e,{children:a[e.value]&&Object.keys(a[e.value]).map((t=>({label:t,value:t,isLeaf:!1,children:a[e.value][t]&&Object.keys(a[e.value][t]).map((n=>({label:n,value:a[e.value][t][n]})))})))}))):e.value&&!e.value.length&&(t=w),t}),[e,a])}(o,d);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(f.InlineFieldRow,{children:(0,N.jsx)(f.InlineField,{label:"Query type",children:(0,N.jsx)(f.RadioButtonGroup,{options:[{value:"traceID",label:"TraceID"},{value:"upload",label:"JSON file"}],value:a.queryType||"traceID",onChange:e=>t(Object.assign({},a,{queryType:e})),size:"md"})})}),"upload"===a.queryType?(0,N.jsx)("div",{className:(0,v.css)({padding:i.spacing(2)}),children:(0,N.jsx)(f.FileDropzone,{options:{multiple:!1},onLoad:e=>{s.uploadedJson=e,n()}})}):(0,N.jsxs)(f.InlineFieldRow,{children:[(0,N.jsx)(f.ButtonCascader,{options:p,onChange:c,loadData:l,variant:"secondary",buttonProps:{className:r.tracesCascader},children:"Traces"}),(0,N.jsx)("div",{className:"gf-form gf-form--grow flex-shrink-1 min-width-15",children:(0,N.jsx)(f.QueryField,{query:a.query,onChange:e=>{const n=Object.assign({},a,{query:e});t(n)},onRunQuery:n,placeholder:"Insert Trace ID (run with Shift+Enter)",portalOrigin:"zipkin"})})]})]})})).setConfigEditor((e=>{let{options:a,onOptionsChange:t}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(f.DataSourceHttpSettings,{defaultUrl:"http://localhost:9411",dataSourceConfig:a,showAccessOptions:!1,onChange:t}),(0,N.jsx)("div",{className:"gf-form-group",children:(0,N.jsx)(_.Z,{options:a,onOptionsChange:t})}),(0,N.jsx)("div",{className:"gf-form-group",children:(0,N.jsx)(S.n,{options:a,onOptionsChange:t})})]})}))},"./public/app/plugins/datasource/zipkin/utils/transforms.ts":(e,a,t)=>{t.d(a,{m:()=>o,H:()=>c});var n=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),s=t("./packages/grafana-data/src/index.ts");function o(e){const a=e.map(i),t=new s.MutableDataFrame({fields:[{name:"traceID",type:s.FieldType.string},{name:"spanID",type:s.FieldType.string},{name:"parentSpanID",type:s.FieldType.string},{name:"operationName",type:s.FieldType.string},{name:"serviceName",type:s.FieldType.string},{name:"serviceTags",type:s.FieldType.other},{name:"startTime",type:s.FieldType.number},{name:"duration",type:s.FieldType.number},{name:"logs",type:s.FieldType.other},{name:"tags",type:s.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}});for(const e of a)t.add(e);return t}function i(e){var a,t,n,s;const o={traceID:e.traceId,spanID:e.id,parentSpanID:e.parentId,operationName:e.name,serviceName:(null===(a=e.localEndpoint)||void 0===a?void 0:a.serviceName)||(null===(t=e.remoteEndpoint)||void 0===t?void 0:t.serviceName)||"unknown",serviceTags:l(e),startTime:e.timestamp/1e3,duration:e.duration/1e3,logs:null!==(n=null===(s=e.annotations)||void 0===s?void 0:s.map(r))&&void 0!==n?n:[],tags:Object.keys(e.tags||{}).reduce(((a,t)=>"error"===t?(a.push({key:"error",value:!0}),a.push({key:"errorValue",value:e.tags.error}),a):(a.push({key:t,value:e.tags[t]}),a)),[])};var i,d;e.kind&&(o.tags=[{key:"kind",value:e.kind},...null!==(i=o.tags)&&void 0!==i?i:[]]);e.shared&&(o.tags=[{key:"shared",value:e.shared},...null!==(d=o.tags)&&void 0!==d?d:[]]);return o}function r(e){return{timestamp:e.timestamp,fields:[{key:"annotation",value:e.value}]}}function l(e){const a=e.localEndpoint||e.remoteEndpoint;return a?[d("ipv4",a.ipv4),d("ipv6",a.ipv6),d("port",a.port),d("endpointType",e.localEndpoint?"local":"remote")].filter(n.identity):[]}function d(e,a){if(a)return{key:e,value:a}}const c=e=>{let a=[];for(let s=0;s<e.length;s++){var t,n;const o=e.get(s);a.push(Object.assign({traceId:o.traceID,parentId:o.parentSpanID,name:o.operationName,id:o.spanID,timestamp:1e3*o.startTime,duration:1e3*o.duration},p(o),{annotations:o.logs.length?o.logs.map((e=>({timestamp:e.timestamp,value:e.fields[0].value}))):void 0,tags:o.tags.length?o.tags.filter((e=>"kind"!==e.key&&"endpointType"!==e.key&&"shared"!==e.key)).reduce(((e,a)=>"error"===a.key?Object.assign({},e,{[a.key]:o.tags.find((e=>"errorValue"===e.key)).value||""}):Object.assign({},e,{[a.key]:a.value})),{}):void 0,kind:null===(t=o.tags.find((e=>"kind"===e.key)))||void 0===t?void 0:t.value,shared:null===(n=o.tags.find((e=>"shared"===e.key)))||void 0===n?void 0:n.value}))}return a},p=e=>{var a,t,n,s;const o="local"===(null===(a=e.serviceTags.find((e=>"endpointType"===e.key)))||void 0===a?void 0:a.value)?"localEndpoint":"remoteEndpoint";return"unknown"!==e.serviceName?{[o]:{serviceName:e.serviceName,ipv4:null===(t=e.serviceTags.find((e=>"ipv4"===e.key)))||void 0===t?void 0:t.value,ipv6:null===(n=e.serviceTags.find((e=>"ipv6"===e.key)))||void 0===n?void 0:n.value,port:null===(s=e.serviceTags.find((e=>"port"===e.key)))||void 0===s?void 0:s.value}}:void 0}},"./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":(e,a,t)=>{t.d(a,{Z:()=>s});var n=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");const s=function(e){(0,n.Z)((function(){e()}))}}}]);
//# sourceMappingURL=zipkinPlugin.109a2a405cf7c8a04a9d.js.map