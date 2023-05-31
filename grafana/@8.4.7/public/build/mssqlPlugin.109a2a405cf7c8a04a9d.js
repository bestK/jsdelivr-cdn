"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5032],{"./public/app/features/datasources/utils/passwordHandlers.ts":(e,t,a)=>{let r;a.d(t,{HX:()=>r,Xr:()=>s,wP:()=>n}),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(r||(r={}));const s=(e,t)=>a=>{a.preventDefault(),e.current[t]=void 0,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""},n=(e,t)=>a=>{e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=a.currentTarget.value}},"./public/app/plugins/datasource/mssql/module.ts":(e,t,a)=>{a.r(t),a.d(t,{plugin:()=>x});var r=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),s=a("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),n=a("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),i=a("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),o=a("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),l=a("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),u=a("./packages/grafana-runtime/src/index.ts");class c{transformMetricFindResponse(e){const t=(0,u.toDataQueryResponse)(e).data;if(!t||!t.length)return[];const a=t[0],r=[],s=a.fields.find((e=>"__text"===e.name)),n=a.fields.find((e=>"__value"===e.name));if(s&&n)for(let e=0;e<s.values.length;e++)r.push({text:""+s.values.get(e),value:""+n.values.get(e)});else r.push(...a.fields.flatMap((e=>e.values.toArray())).map((e=>({text:e}))));return Array.from(new Set(r.map((e=>e.text)))).map((e=>{var t;return{text:e,value:null===(t=r.find((t=>t.text===e)))||void 0===t?void 0:t.value}}))}async transformAnnotationResponse(e,t){const a=(0,u.toDataQueryResponse)({data:t}).data;if(!a||!a.length)return[];const r=a[0],s=r.fields.find((e=>"time"===e.name));if(!s)return Promise.reject({message:"Missing mandatory time column (with time column alias) in annotation query."});const n=r.fields.find((e=>"timeend"===e.name)),i=r.fields.find((e=>"text"===e.name)),o=r.fields.find((e=>"tags"===e.name)),l=[];for(let t=0;t<r.length;t++){const a=n&&n.values.get(t)?Math.floor(n.values.get(t)):void 0;l.push({annotation:e.annotation,time:Math.floor(s.values.get(t)),timeEnd:a,text:i&&i.values.get(t)?i.values.get(t):"",tags:o&&o.values.get(t)?o.values.get(t).trim().split(/\s*,\s*/):[]})}return l}}var d=a("./public/app/features/templating/template_srv.ts"),p=a("./packages/grafana-runtime/src/utils/queryResponse.ts");function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends u.DataSourceWithBackend{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,d.J)();super(e),h(this,"id",void 0),h(this,"name",void 0),h(this,"responseParser",void 0),h(this,"interval",void 0),this.templateSrv=t,this.name=e.name,this.id=e.id,this.responseParser=new c;const a=e.jsonData||{};this.interval=a.timeInterval||"1m"}interpolateVariable(e,t){if("string"==typeof e)return t.multi||t.includeAll?"'"+e.replace(/'/g,"''")+"'":e;if("number"==typeof e)return e;return(0,r.map)(e,(t=>"number"==typeof e?e:"'"+t.replace(/'/g,"''")+"'")).join(",")}interpolateVariablesInQueries(e,t){let a=e;return e&&e.length>0&&(a=e.map((e=>Object.assign({},e,{datasource:this.getRef(),rawSql:this.templateSrv.replace(e.rawSql,t,this.interpolateVariable),rawQuery:!0})))),a}applyTemplateVariables(e,t){return{refId:e.refId,datasource:this.getRef(),rawSql:this.templateSrv.replace(e.rawSql,t,this.interpolateVariable),format:e.format}}async annotationQuery(e){if(!e.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});const t={refId:e.annotation.name,datasource:this.getRef(),rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return(0,s.n)((0,u.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[t]},requestId:e.annotation.name}).pipe((0,i.U)((async t=>await this.responseParser.transformAnnotationResponse(e,t.data)))))}filterQuery(e){return!e.hide}metricFindQuery(e,t){var a,r,l,c;let d="tempvar";t&&t.variable&&t.variable.name&&(d=t.variable.name);const p=null==t?void 0:t.range,h={refId:d,datasource:this.getRef(),rawSql:this.templateSrv.replace(e,{},this.interpolateVariable),format:"table"};return(0,s.n)((0,u.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:null==p||null===(a=p.from)||void 0===a||null===(r=a.valueOf())||void 0===r?void 0:r.toString(),to:null==p||null===(l=p.to)||void 0===l||null===(c=l.valueOf())||void 0===c?void 0:c.toString(),queries:[h]},requestId:d}).pipe((0,i.U)((e=>this.responseParser.transformMetricFindResponse(e))),(0,o.K)((e=>(0,n.of)([])))))}testDatasource(){return(0,s.n)((0,u.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasource:this.getRef(),rawSql:"SELECT 1",format:"table"}]}}).pipe((0,l.h)({status:"success",message:"Database Connection OK"}),(0,o.K)((e=>(0,n.of)((0,p.Gw)(e))))))}targetContainsTemplate(e){const t=e.rawSql.replace("$__","");return this.templateSrv.variableExists(t)}}var f=a("./public/app/plugins/sdk.ts"),v=a("./packages/grafana-data/src/index.ts");function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class b extends f.QueryCtrl{constructor(e,t){super(e,t),g(this,"formats",void 0),g(this,"lastQueryMeta",void 0),g(this,"lastQueryError",void 0),g(this,"showHelp",!1),this.target.format=this.target.format||"time_series",this.target.alias="",this.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],this.target.rawSql||("table"===this.panelCtrl.panel.type?(this.target.format="table",this.target.rawSql="SELECT 1"):this.target.rawSql="SELECT\n  $__timeEpoch(<time_column>),\n  <value column> as value,\n  <series name column> as metric\nFROM\n  <table name>\nWHERE\n  $__timeFilter(time_column)\nORDER BY\n  <time_column> ASC"),this.panelCtrl.events.on(v.PanelEvents.dataReceived,this.onDataReceived.bind(this),e),this.panelCtrl.events.on(v.PanelEvents.dataError,this.onDataError.bind(this),e)}onDataReceived(e){var t;this.lastQueryError=void 0,this.lastQueryMeta=null===(t=e[0])||void 0===t?void 0:t.meta}onDataError(e){if(e.data&&e.data.results){const t=e.data.results[this.target.refId];t&&(this.lastQueryError=t.error)}}}b.$inject=["$scope","$injector"],g(b,"templateUrl","partials/query.editor.html");var y=a("./public/app/features/datasources/utils/passwordHandlers.ts");function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class j{constructor(e){w(this,"onPasswordReset",void 0),w(this,"onPasswordChange",void 0),w(this,"showUserCredentials",!1),w(this,"showTlsConfig",!1),w(this,"showCertificateConfig",!1),this.current=e.ctrl.current,this.current.jsonData.encrypt=this.current.jsonData.encrypt||"false",this.current.jsonData.sslRootCertFile=this.current.jsonData.sslRootCertFile||"",this.current.jsonData.tlsSkipVerify=this.current.jsonData.tlsSkipVerify||!1,this.current.jsonData.serverName=this.current.jsonData.serverName||"",this.current.jsonData.authenticationType=this.current.jsonData.authenticationType||"SQL Server Authentication",this.onPasswordReset=(0,y.Xr)(this,y.HX.Password),this.onPasswordChange=(0,y.wP)(this,y.HX.Password),this.onAuthenticationTypeChange(),this.onEncryptChange()}onAuthenticationTypeChange(){"Windows Authentication"===this.current.jsonData.authenticationType&&(this.current.user="",this.current.password=""),this.showUserCredentials="Windows Authentication"!==this.current.jsonData.authenticationType}onEncryptChange(){this.showTlsConfig="true"===this.current.jsonData.encrypt,this.showCertificateConfig=this.showTlsConfig&&!1===this.current.jsonData.tlsSkipVerify}}j.$inject=["$scope"],w(j,"templateUrl","partials/config.html");class S{constructor(e){this.annotation=e.ctrl.annotation,this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n    <time_column> as time,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC"}}var C,D,_;S.$inject=["$scope"],_="partials/annotations.editor.html",(D="templateUrl")in(C=S)?Object.defineProperty(C,D,{value:_,enumerable:!0,configurable:!0,writable:!0}):C[D]=_;const x=new v.DataSourcePlugin(m).setQueryCtrl(b).setConfigCtrl(j).setAnnotationQueryCtrl(S)}}]);
//# sourceMappingURL=mssqlPlugin.109a2a405cf7c8a04a9d.js.map