"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9603],{"./public/app/features/admin/AdminSettings.tsx":(e,a,n)=>{n.r(a),n.d(a,{default:()=>p});var s,t=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),c=n("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),d=n("./packages/grafana-runtime/src/index.ts"),i=n("./public/app/core/selectors/navModel.ts"),l=n("./public/app/core/components/Page/Page.tsx"),o=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=(0,r.connect)((e=>({navModel:(0,i.h)(e.navIndex,"server-settings")})))((function(e){let{navModel:a}=e;const{loading:n,value:r}=(0,c.Z)((()=>(0,d.getBackendSrv)().get("/api/admin/settings")),[]);return(0,o.jsx)(l.Z,{navModel:a,children:(0,o.jsxs)(l.Z.Contents,{isLoading:n,children:[(0,o.jsx)("div",{className:"grafana-info-box span8",style:{margin:"20px 0 25px 0"},children:"These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart Grafana."}),r&&(0,o.jsx)("table",{className:"filter-table",children:(0,o.jsx)("tbody",{children:Object.entries(r).map(((e,a)=>{let[n,r]=e;return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"admin-settings-section",children:n}),s||(s=(0,o.jsx)("td",{}))]}),Object.entries(r).map(((e,a)=>{let[n,s]=e;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{paddingLeft:"25px"},children:n}),(0,o.jsx)("td",{style:{whiteSpace:"break-spaces"},children:s})]},`property-${a}`)}))]},`section-${a}`)}))})})]})})}))}}]);
//# sourceMappingURL=AdminSettings.109a2a405cf7c8a04a9d.js.map