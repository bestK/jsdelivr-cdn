"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4076],{"./public/app/plugins/datasource/tempo/graphTransform.ts":(e,t,n)=>{n.d(t,{M7:()=>o,Yt:()=>s,yf:()=>u,NZ:()=>c,t3:()=>l,BC:()=>d});var r=n("./packages/grafana-data/src/index.ts"),a=n("./public/app/core/utils/tracing.ts");function o(e){const{nodes:t,edges:n}=function(e){const t=[],n=[],o=new r.DataFrameView(e),i=function(e){let t=0,n=1/0;for(let r=0;r<e.length;r++){const a=e.get(r);a.startTime<n&&(n=a.startTime),a.startTime+a.duration>t&&(t=a.startTime+a.duration)}return t-n}(o),s=(0,a.nO)((t=>{if(t>=e.length)return;const n=o.get(t);return{span:Object.assign({},n),id:n.spanID,parentIds:n.parentSpanID?[n.parentSpanID]:[]}}));for(let e=0;e<o.length;e++){var u;const c=o.get(e),l=s[c.spanID].children.map((e=>{const t=s[e].span;return[t.startTime,t.startTime+t.duration]})),d=(0,a.et)(l),p=c.duration-d,f=(0,a.fy)(c.duration,i,p);t.push({[r.NodeGraphDataFrameFieldNames.id]:c.spanID,[r.NodeGraphDataFrameFieldNames.title]:null!==(u=c.serviceName)&&void 0!==u?u:"",[r.NodeGraphDataFrameFieldNames.subTitle]:c.operationName,[r.NodeGraphDataFrameFieldNames.mainStat]:f.main,[r.NodeGraphDataFrameFieldNames.secondaryStat]:f.secondary,[r.NodeGraphDataFrameFieldNames.color]:p/i}),c.parentSpanID&&s[c.parentSpanID].span&&n.push({[r.NodeGraphDataFrameFieldNames.id]:c.parentSpanID+"--"+c.spanID,[r.NodeGraphDataFrameFieldNames.target]:c.spanID,[r.NodeGraphDataFrameFieldNames.source]:c.parentSpanID})}return{nodes:t,edges:n}}(e),[o,i]=(0,a.np)();for(const e of t)o.add(e);for(const e of n)i.add(e);return[o,i]}const i="traces_service_graph_request_server_seconds_sum",s="traces_service_graph_request_total",u="traces_service_graph_request_failed_total",c="traces_service_graph_request_server_seconds_bucket",l=[i,s,u,c];function d(e,t){const n=function(e){return e[0].data.reduce(((e,t)=>(e[t.refId]=new r.DataFrameView(t),e)),{})}(e),a={},o={};return p(n[s],"total",s,a,o),p(n[i],"seconds",i,a,o),p(n[u],"failed",u,a,o),function(e,t,n){const a=n.to.valueOf()-n.from.valueOf(),[o,i]=function(){function e(e,t){return new r.MutableDataFrame({name:e,fields:t,meta:{preferredVisualisationType:"nodeGraph"}})}const t=e("Nodes",[{name:r.NodeGraphDataFrameFieldNames.id},{name:r.NodeGraphDataFrameFieldNames.title,config:{displayName:"Service name"}},{name:r.NodeGraphDataFrameFieldNames.mainStat,config:{unit:"ms/r",displayName:"Average response time"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,config:{unit:"r/sec",displayName:"Requests per second"}},{name:r.NodeGraphDataFrameFieldNames.arc+"success",config:{displayName:"Success",color:{fixedColor:"green",mode:r.FieldColorModeId.Fixed}}},{name:r.NodeGraphDataFrameFieldNames.arc+"failed",config:{displayName:"Failed",color:{fixedColor:"red",mode:r.FieldColorModeId.Fixed}}}]),n=e("Edges",[{name:r.NodeGraphDataFrameFieldNames.id},{name:r.NodeGraphDataFrameFieldNames.source},{name:r.NodeGraphDataFrameFieldNames.target},{name:r.NodeGraphDataFrameFieldNames.mainStat,config:{unit:"r",displayName:"Requests"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,config:{unit:"ms/r",displayName:"Average response time"}}]);return[t,n]}();for(const t of Object.keys(e)){const n=e[t];o.add({[r.NodeGraphDataFrameFieldNames.id]:t,[r.NodeGraphDataFrameFieldNames.title]:t,[r.NodeGraphDataFrameFieldNames.mainStat]:n.total?n.seconds/n.total*1e3:Number.NaN,[r.NodeGraphDataFrameFieldNames.secondaryStat]:n.total?Math.round(n.total/(a/1e3)*100)/100:Number.NaN,[r.NodeGraphDataFrameFieldNames.arc+"success"]:n.total?(n.total-(n.failed||0))/n.total:1,[r.NodeGraphDataFrameFieldNames.arc+"failed"]:n.total?(n.failed||0)/n.total:0})}for(const e of Object.keys(t)){const n=t[e];i.add({[r.NodeGraphDataFrameFieldNames.id]:e,[r.NodeGraphDataFrameFieldNames.source]:n.source,[r.NodeGraphDataFrameFieldNames.target]:n.target,[r.NodeGraphDataFrameFieldNames.mainStat]:n.total,[r.NodeGraphDataFrameFieldNames.secondaryStat]:n.total?n.seconds/n.total*1e3:Number.NaN})}return{nodes:o,edges:i}}(a,o,t)}function p(e,t,n,r,a){if(!e)return;const o=`Value #${n}`;for(let n=0;n<e.length;n++){const i=e.get(n),s=`${i.client}_${i.server}`;a[s]?a[s][t]=(a[s][t]||0)+i[o]:a[s]={target:i.server,source:i.client,[t]:i[o]},r[i.server]?r[i.server][t]=(r[i.server][t]||0)+i[o]:r[i.server]={[t]:i[o]},r[i.client]||(r[i.client]={[t]:0})}}},"./public/app/plugins/datasource/tempo/resultTransformer.ts":(e,t,n)=>{n.d(t,{n4:()=>Be,IM:()=>Me,g9:()=>Ae,Jk:()=>Ue,RY:()=>Ie});var r=n("./packages/grafana-data/src/index.ts"),a="object"==typeof globalThis?globalThis:"object"==typeof self?self:"object"==typeof window?window:"object"==typeof n.g?n.g:{},o="1.1.0",i=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;var s=function(e){var t=new Set([e]),n=new Set,r=e.match(i);if(!r)return function(){return!1};var a=+r[1],o=+r[2],s=+r[3];if(null!=r[4])return function(t){return t===e};function u(e){return n.add(e),!1}function c(e){return t.add(e),!0}return function(e){if(t.has(e))return!0;if(n.has(e))return!1;var r=e.match(i);if(!r)return u(e);var l=+r[1],d=+r[2],p=+r[3];return null!=r[4]||a!==l?u(e):0===a?o===d&&s<=p?c(e):u(e):o<=d?c(e):u(e)}}(o),u=o.split(".")[0],c=Symbol.for("opentelemetry.js.api."+u),l=a;function d(e,t,n,r){var a;void 0===r&&(r=!1);var i=l[c]=null!==(a=l[c])&&void 0!==a?a:{version:o};if(!r&&i[e]){var s=new Error("@opentelemetry/api: Attempted duplicate registration of API: "+e);return n.error(s.stack||s.message),!1}if(i.version!==o){s=new Error("@opentelemetry/api: All API registration versions must match");return n.error(s.stack||s.message),!1}return i[e]=t,n.debug("@opentelemetry/api: Registered a global for "+e+" v"+"1.1.0."),!0}function p(e){var t,n,r=null===(t=l[c])||void 0===t?void 0:t.version;if(r&&s(r))return null===(n=l[c])||void 0===n?void 0:n[e]}function f(e,t){t.debug("@opentelemetry/api: Unregistering a global for "+e+" v"+"1.1.0.");var n=l[c];n&&delete n[e]}var m,g=function(){function e(e){this._namespace=e.namespace||"DiagComponentLogger"}return e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v("debug",this._namespace,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v("error",this._namespace,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v("info",this._namespace,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v("warn",this._namespace,e)},e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v("verbose",this._namespace,e)},e}();function v(e,t,n){var r=p("diag");if(r)return n.unshift(t),r[e].apply(r,n)}!function(e){e[e.NONE=0]="NONE",e[e.ERROR=30]="ERROR",e[e.WARN=50]="WARN",e[e.INFO=60]="INFO",e[e.DEBUG=70]="DEBUG",e[e.VERBOSE=80]="VERBOSE",e[e.ALL=9999]="ALL"}(m||(m={}));var h=function(){function e(){function e(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=p("diag");if(r)return r[e].apply(r,t)}}var t=this;t.setLogger=function(e,n){var r,a;if(void 0===n&&(n=m.INFO),e===t){var o=new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return t.error(null!==(r=o.stack)&&void 0!==r?r:o.message),!1}var i=p("diag"),s=function(e,t){function n(n,r){var a=t[n];return"function"==typeof a&&e>=r?a.bind(t):function(){}}return e<m.NONE?e=m.NONE:e>m.ALL&&(e=m.ALL),t=t||{},{error:n("error",m.ERROR),warn:n("warn",m.WARN),info:n("info",m.INFO),debug:n("debug",m.DEBUG),verbose:n("verbose",m.VERBOSE)}}(n,e);if(i){var u=null!==(a=(new Error).stack)&&void 0!==a?a:"<failed to generate stacktrace>";i.warn("Current logger will be overwritten from "+u),s.warn("Current logger will overwrite one already registered from "+u)}return d("diag",s,t,!0)},t.disable=function(){f("diag",t)},t.createComponentLogger=function(e){return new g(e)},t.verbose=e("verbose"),t.debug=e("debug"),t.info=e("info"),t.warn=e("warn"),t.error=e("error")}return e.instance=function(){return this._instance||(this._instance=new e),this._instance},e}(),y=function(){function e(e){this._entries=e?new Map(e):new Map}return e.prototype.getEntry=function(e){var t=this._entries.get(e);if(t)return Object.assign({},t)},e.prototype.getAllEntries=function(){return Array.from(this._entries.entries()).map((function(e){return[e[0],e[1]]}))},e.prototype.setEntry=function(t,n){var r=new e(this._entries);return r._entries.set(t,n),r},e.prototype.removeEntry=function(t){var n=new e(this._entries);return n._entries.delete(t),n},e.prototype.removeEntries=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=new e(this._entries),a=0,o=t;a<o.length;a++){var i=o[a];r._entries.delete(i)}return r},e.prototype.clear=function(){return new e},e}();Symbol("BaggageEntryMetadata"),h.instance();function N(e){return void 0===e&&(e={}),new y(new Map(Object.entries(e)))}var b={get:function(e,t){if(null!=e)return e[t]},keys:function(e){return null==e?[]:Object.keys(e)}},_={set:function(e,t,n){null!=e&&(e[t]=n)}};function D(e){return Symbol.for(e)}var F,S=function e(t){var n=this;n._currentContext=t?new Map(t):new Map,n.getValue=function(e){return n._currentContext.get(e)},n.setValue=function(t,r){var a=new e(n._currentContext);return a._currentContext.set(t,r),a},n.deleteValue=function(t){var r=new e(n._currentContext);return r._currentContext.delete(t),r}},T=new S,w=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},I=function(){function e(){}return e.prototype.active=function(){return T},e.prototype.with=function(e,t,n){for(var r=[],a=3;a<arguments.length;a++)r[a-3]=arguments[a];return t.call.apply(t,w([n],r))},e.prototype.bind=function(e,t){return t},e.prototype.enable=function(){return this},e.prototype.disable=function(){return this},e}(),E=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},x="context",R=new I,k=function(){function e(){}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalContextManager=function(e){return d(x,e,h.instance())},e.prototype.active=function(){return this._getContextManager().active()},e.prototype.with=function(e,t,n){for(var r,a=[],o=3;o<arguments.length;o++)a[o-3]=arguments[o];return(r=this._getContextManager()).with.apply(r,E([e,t,n],a))},e.prototype.bind=function(e,t){return this._getContextManager().bind(e,t)},e.prototype._getContextManager=function(){return p(x)||R},e.prototype.disable=function(){this._getContextManager().disable(),f(x,h.instance())},e}();!function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(F||(F={}));var C="0000000000000000",O="00000000000000000000000000000000",M={traceId:O,spanId:C,traceFlags:F.NONE},A=function(){function e(e){void 0===e&&(e=M),this._spanContext=e}return e.prototype.spanContext=function(){return this._spanContext},e.prototype.setAttribute=function(e,t){return this},e.prototype.setAttributes=function(e){return this},e.prototype.addEvent=function(e,t){return this},e.prototype.setStatus=function(e){return this},e.prototype.updateName=function(e){return this},e.prototype.end=function(e){},e.prototype.isRecording=function(){return!1},e.prototype.recordException=function(e,t){},e}(),G=D("OpenTelemetry Context Key SPAN");function V(e){return e.getValue(G)||void 0}function L(e,t){return e.setValue(G,t)}function P(e){return e.deleteValue(G)}function j(e,t){return L(e,new A(t))}function U(e){var t;return null===(t=V(e))||void 0===t?void 0:t.spanContext()}var z=/^([0-9a-f]{32})$/i,B=/^[0-9a-f]{16}$/i;function q(e){return n=e.traceId,z.test(n)&&n!==O&&(t=e.spanId,B.test(t)&&t!==C);var t,n}function Z(e){return new A(e)}var $=k.getInstance(),X=function(){function e(){}return e.prototype.startSpan=function(e,t,n){if(Boolean(null==t?void 0:t.root))return new A;var r,a=n&&U(n);return"object"==typeof(r=a)&&"string"==typeof r.spanId&&"string"==typeof r.traceId&&"number"==typeof r.traceFlags&&q(a)?new A(a):new A},e.prototype.startActiveSpan=function(e,t,n,r){var a,o,i;if(!(arguments.length<2)){2===arguments.length?i=t:3===arguments.length?(a=t,i=n):(a=t,o=n,i=r);var s=null!=o?o:$.active(),u=this.startSpan(e,a,s),c=L(s,u);return $.with(c,i,void 0,u)}},e}();var K,Y,H,J=new X,W=function(){function e(e,t,n,r){this._provider=e,this.name=t,this.version=n,this.options=r}return e.prototype.startSpan=function(e,t,n){return this._getTracer().startSpan(e,t,n)},e.prototype.startActiveSpan=function(e,t,n,r){var a=this._getTracer();return Reflect.apply(a.startActiveSpan,a,arguments)},e.prototype._getTracer=function(){if(this._delegate)return this._delegate;var e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):J},e}(),Q=new(function(){function e(){}return e.prototype.getTracer=function(e,t,n){return new X},e}()),ee=function(){function e(){}return e.prototype.getTracer=function(e,t,n){var r;return null!==(r=this.getDelegateTracer(e,t,n))&&void 0!==r?r:new W(this,e,t,n)},e.prototype.getDelegate=function(){var e;return null!==(e=this._delegate)&&void 0!==e?e:Q},e.prototype.setDelegate=function(e){this._delegate=e},e.prototype.getDelegateTracer=function(e,t,n){var r;return null===(r=this._delegate)||void 0===r?void 0:r.getTracer(e,t,n)},e}();!function(e){e[e.NOT_RECORD=0]="NOT_RECORD",e[e.RECORD=1]="RECORD",e[e.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"}(K||(K={})),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(Y||(Y={})),function(e){e[e.UNSET=0]="UNSET",e[e.OK=1]="OK",e[e.ERROR=2]="ERROR"}(H||(H={}));var te=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),ne=/^[ -~]{0,255}[!-~]$/,re=/,|=/;!function(){function e(e){this._internalState=new Map,e&&this._parse(e)}e.prototype.set=function(e,t){var n=this._clone();return n._internalState.has(e)&&n._internalState.delete(e),n._internalState.set(e,t),n},e.prototype.unset=function(e){var t=this._clone();return t._internalState.delete(e),t},e.prototype.get=function(e){return this._internalState.get(e)},e.prototype.serialize=function(){var e=this;return this._keys().reduce((function(t,n){return t.push(n+"="+e.get(n)),t}),[]).join(",")},e.prototype._parse=function(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((function(e,t){var n=t.trim(),r=n.indexOf("=");if(-1!==r){var a=n.slice(0,r),o=n.slice(r+1,t.length);(function(e){return te.test(e)})(a)&&function(e){return ne.test(e)&&!re.test(e)}(o)&&e.set(a,o)}return e}),new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))},e.prototype._keys=function(){return Array.from(this._internalState.keys()).reverse()},e.prototype._clone=function(){var t=new e;return t._internalState=new Map(this._internalState),t}}();var ae="trace",oe=function(){function e(){this._proxyTracerProvider=new ee,this.wrapSpanContext=Z,this.isSpanContextValid=q,this.deleteSpan=P,this.getSpan=V,this.getSpanContext=U,this.setSpan=L,this.setSpanContext=j}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalTracerProvider=function(e){var t=d(ae,this._proxyTracerProvider,h.instance());return t&&this._proxyTracerProvider.setDelegate(e),t},e.prototype.getTracerProvider=function(){return p(ae)||this._proxyTracerProvider},e.prototype.getTracer=function(e,t){return this.getTracerProvider().getTracer(e,t)},e.prototype.disable=function(){f(ae,h.instance()),this._proxyTracerProvider=new ee},e}(),ie=function(){function e(){}return e.prototype.inject=function(e,t){},e.prototype.extract=function(e,t){return e},e.prototype.fields=function(){return[]},e}(),se=D("OpenTelemetry Baggage Key");function ue(e){return e.getValue(se)||void 0}function ce(e,t){return e.setValue(se,t)}function le(e){return e.deleteValue(se)}var de="propagation",pe=new ie,fe=function(){function e(){this.createBaggage=N,this.getBaggage=ue,this.setBaggage=ce,this.deleteBaggage=le}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalPropagator=function(e){return d(de,e,h.instance())},e.prototype.inject=function(e,t,n){return void 0===n&&(n=_),this._getGlobalPropagator().inject(e,t,n)},e.prototype.extract=function(e,t,n){return void 0===n&&(n=b),this._getGlobalPropagator().extract(e,t,n)},e.prototype.fields=function(){return this._getGlobalPropagator().fields()},e.prototype.disable=function(){f(de,h.instance())},e.prototype._getGlobalPropagator=function(){return p(de)||pe},e}();k.getInstance();oe.getInstance(),fe.getInstance(),h.instance();var me=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js"),ge=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js"),ve=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js"),he=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js"),ye=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");function Ne(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var be=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),_e=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js"),De=1440,Fe=43200;var Se=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js"),Te="service.name",we=n("./public/app/plugins/datasource/tempo/graphTransform.ts");function Ie(e,t,n,a){return e.data.forEach(((o,i)=>{const s=function(e,t,n,a){const o=new r.MutableDataFrame({fields:[{name:"Time",type:r.FieldType.time,config:{custom:{width:150}}},{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",custom:{width:300},links:[{title:"Click to open trace ${__value.raw}",url:"",internal:{datasourceUid:t,datasourceName:n,query:{query:"${__value.raw}"}}}]}},{name:"Message",type:r.FieldType.string}],meta:{preferredVisualisationType:"table"}});if(!e||0===a.length)return o;const i=e.fields.find((e=>e.type===r.FieldType.time));for(let t of e.fields){let e=!1;if(t.type===r.FieldType.string){const n=t.values.toArray();for(let t=0;t<n.length;t++){const r=n[t];if(r)for(let n of a){const a=r.match(n);if(a){const n=a[1],s=i?i.values.get(t):null;o.fields[0].values.add(s),o.fields[1].values.add(n),o.fields[2].values.add(r),e=!0}}}}if(e)break}return o}(o,t,n,a);e.data[i]=s})),e}function Ee(e){const t=atob(e);let n="";for(let e=0;e<t.length;e++){const r=t.charCodeAt(e).toString(16);n+=2===r.length?r:"0"+r}return n.length>16?n.slice(16):n}function xe(e){const t=e.match(/\w{2}/g)||[];return btoa(t.map((function(e){return String.fromCharCode(parseInt(e,16))})).join(""))}function Re(e){if(e.stringValue)return e.stringValue;if(void 0!==e.boolValue)return Boolean(e.boolValue);if(void 0!==e.intValue)return Number.parseInt(e.intValue,10);if(e.doubleValue)return Number.parseFloat(e.doubleValue);if(e.arrayValue){const t=[];for(const n of e.arrayValue.values)t.push(Re(n));return t}return""}function ke(e){const t=[];let n="OTLPResourceNoServiceName";if(!e)return{serviceName:n,serviceTags:t};for(const r of e.attributes)r.key===Te&&(n=r.value.stringValue||n),t.push({key:r.key,value:Re(r.value)});return{serviceName:n,serviceTags:t}}function Ce(e,t){const n=[];if(t&&(t.name&&n.push({key:"otel.library.name",value:t.name}),t.version&&n.push({key:"otel.library.version",value:t.version})),e.attributes)for(const t of e.attributes)n.push({key:t.key,value:Re(t.value)});if(e.status&&(e.status.code&&e.status.code!==H.UNSET&&(n.push({key:"otel.status_code",value:H[e.status.code]}),e.status.message&&n.push({key:"otel.status_description",value:e.status.message})),e.status.code===H.ERROR&&n.push({key:"error",value:!0})),void 0!==e.kind){const t=e.kind.toString().toLowerCase().split("_");n.push({key:"span.kind",value:t.length?t[t.length-1]:e.kind.toString()})}return n}function Oe(e){const t=[];if(e.events)for(const n of e.events){const e=[];if(n.attributes)for(const t of n.attributes)e.push({key:t.key,value:Re(t.value)});t.push({fields:e,timestamp:n.timeUnixNano/1e6})}return t}function Me(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string},{name:"spanID",type:r.FieldType.string},{name:"parentSpanID",type:r.FieldType.string},{name:"operationName",type:r.FieldType.string},{name:"serviceName",type:r.FieldType.string},{name:"serviceTags",type:r.FieldType.other},{name:"startTime",type:r.FieldType.number},{name:"duration",type:r.FieldType.number},{name:"logs",type:r.FieldType.other},{name:"tags",type:r.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"otlp"}}});try{for(const t of e){const{serviceName:e,serviceTags:r}=ke(t.resource);for(const a of t.instrumentationLibrarySpans)for(const t of a.spans)n.add({traceID:Ee(t.traceId),spanID:Ee(t.spanId),parentSpanID:Ee(t.parentSpanId||""),operationName:t.name||"",serviceName:e,serviceTags:r,startTime:t.startTimeUnixNano/1e6,duration:(t.endTimeUnixNano-t.startTimeUnixNano)/1e6,tags:Ce(t,a.instrumentationLibrary),logs:Oe(t)})}}catch(e){return console.error(e),{error:{message:"JSON is not valid OpenTelemetry format: "+e},data:[]}}let a=[n];return t&&a.push(...(0,we.M7)(n)),{data:a}}function Ae(e){let t={batches:[]},n={};for(let o=0;o<e.length;o++){const i=e.get(o);n[i.serviceName]||(n[i.serviceName]=t.batches.length,t.batches.push({resource:{attributes:[],droppedAttributesCount:0},instrumentationLibrarySpans:[{spans:[]}]}));let s=n[i.serviceName];if(0===t.batches[s].resource.attributes.length&&(t.batches[s].resource.attributes=Ve(i.serviceTags)),!t.batches[s].instrumentationLibrarySpans[0].instrumentationLibrary){var r;let e=null===(r=i.tags.find((e=>"otel.library.name"===e.key)))||void 0===r?void 0:r.value;var a;if(e)t.batches[s].instrumentationLibrarySpans[0].instrumentationLibrary={name:e,version:null===(a=i.tags.find((e=>"otel.library.version"===e.key)))||void 0===a?void 0:a.value}}t.batches[s].instrumentationLibrarySpans[0].spans.push({traceId:xe(i.traceID.padStart(32,"0")),spanId:xe(i.spanID),traceState:"",parentSpanId:xe(i.parentSpanID||""),name:i.operationName,kind:Ge(i.tags),startTimeUnixNano:1e6*i.startTime,endTimeUnixNano:1e6*(i.startTime+i.duration),attributes:Ve(i.tags),droppedAttributesCount:0,droppedEventsCount:0,droppedLinksCount:0,status:Pe(i.tags),events:je(i.logs)})}return t}function Ge(e){var t;let n;switch(null===(t=e.find((e=>"span.kind"===e.key)))||void 0===t?void 0:t.value){case"server":n="SPAN_KIND_SERVER";break;case"client":n="SPAN_KIND_CLIENT";break;case"producer":n="SPAN_KIND_PRODUCER";break;case"consumer":n="SPAN_KIND_CONSUMER"}return n}function Ve(e){return e.filter((e=>!["span.kind","otel.library.name","otel.libary.version","otel.status_description","otel.status_code"].includes(e.key))).reduce(((e,t)=>[...e,{key:t.key,value:Le(t)}]),[])}function Le(e){if("string"==typeof e.value)return{stringValue:e.value};if("boolean"==typeof e.value)return{boolValue:e.value};if("number"==typeof e.value)return e.value%1==0?{intValue:e.value}:{doubleValue:e.value};if("object"==typeof e.value&&Array.isArray(e.value)){const t=[];for(const n of e.value)t.push(Le(n));return{arrayValue:{values:t}}}return{stringValue:e.value}}function Pe(e){let t;const n=e.find((e=>"otel.status_code"===e.key));var r;n&&(t={code:n.value,message:null===(r=e.find((e=>"otel_status_description"===e.key)))||void 0===r?void 0:r.value});return t}function je(e){if(!e||!e.length)return;let t=[];for(const n of e){let e={timeUnixNano:1e6*n.timestamp,attributes:[],droppedAttributesCount:0,name:""};for(const t of n.fields)e.attributes.push({key:t.key,value:Le(t)});t.push(e)}return t}function Ue(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=e.data[0];if(!n)return Ze;try{ze(n)}catch(e){return console.error(e),{error:{message:"Unable to parse trace response: "+e},data:[]}}let r=[...e.data];return t&&r.push(...(0,we.M7)(n)),Object.assign({},e,{data:r})}function ze(e){for(const t of["serviceTags","logs","tags"]){const n=e.fields.find((e=>e.name===t));if(n){const t=e.fields.indexOf(n),a=new r.ArrayVector,o=Object.assign({},n,{values:a,type:r.FieldType.other});for(let e=0;e<n.values.length;e++){const t=n.values.get(e);a.set(e,""===t?void 0:JSON.parse(t))}e.fields[t]=o}}}function Be(e,t){const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}",queryType:"traceId"}}}]}},{name:"traceName",type:r.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:r.FieldType.string,config:{displayNameFromDS:"Start time"}},{name:"duration",type:r.FieldType.number,config:{displayNameFromDS:"Duration",unit:"ms"}}],meta:{preferredVisualisationType:"table"}});if(null==e||!e.length)return n;const a=e.sort(((e,t)=>parseInt(null==t?void 0:t.startTimeUnixNano,10)/1e6-parseInt(null==e?void 0:e.startTimeUnixNano,10)/1e6)).map(qe);for(const e of a)n.add(e);return n}function qe(e){let t="";e.rootServiceName&&(t+=e.rootServiceName+" "),e.rootTraceName&&(t+=e.rootTraceName);const n=parseInt(e.startTimeUnixNano,10)/1e6;let a=(0,r.dateTimeFormat)(n);return Math.abs((0,Se.Z)(new Date(n),Date.now()))<=1&&(a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,_e.Z)(2,arguments);var r=n.locale||he.Z;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=(0,me.Z)(e,t);if(isNaN(a))throw new RangeError("Invalid time value");var o,i,s=Ne(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=a,a>0?(o=(0,ye.Z)(t),i=(0,ye.Z)(e)):(o=(0,ye.Z)(e),i=(0,ye.Z)(t));var u,c=(0,ve.Z)(i,o),l=((0,be.Z)(i)-(0,be.Z)(o))/1e3,d=Math.round((c-l)/60);if(d<2)return n.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,s):c<10?r.formatDistance("lessThanXSeconds",10,s):c<20?r.formatDistance("lessThanXSeconds",20,s):c<40?r.formatDistance("halfAMinute",null,s):c<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):0===d?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",d,s);if(d<45)return r.formatDistance("xMinutes",d,s);if(d<90)return r.formatDistance("aboutXHours",1,s);if(d<De){var p=Math.round(d/60);return r.formatDistance("aboutXHours",p,s)}if(d<2520)return r.formatDistance("xDays",1,s);if(d<Fe){var f=Math.round(d/De);return r.formatDistance("xDays",f,s)}if(d<86400)return u=Math.round(d/Fe),r.formatDistance("aboutXMonths",u,s);if((u=(0,ge.Z)(i,o))<12){var m=Math.round(d/Fe);return r.formatDistance("xMonths",m,s)}var g=u%12,v=Math.floor(u/12);return g<3?r.formatDistance("aboutXYears",v,s):g<9?r.formatDistance("overXYears",v,s):r.formatDistance("almostXYears",v+1,s)}(new Date(n),Date.now(),{addSuffix:!0,includeSeconds:!0})),{traceID:e.traceID,startTime:a,duration:e.durationMs,traceName:t}}const Ze={data:[new r.MutableDataFrame({fields:[{name:"trace",type:r.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"otlp"}}})]}}}]);
//# sourceMappingURL=4076.109a2a405cf7c8a04a9d.js.map