"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{"./public/app/features/plugins/admin/components/Badges/index.ts":(e,a,s)=>{s.d(a,{SX:()=>i,IF:()=>p,oZ:()=>c,xh:()=>g});s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("./packages/grafana-data/src/index.ts"),n=s("./packages/grafana-ui/src/index.ts"),t=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function i(e){let{error:a}=e;const s=function(e){switch(e){case r.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case r.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case r.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(a);return(0,t.jsx)(n.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:s})}var o=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const l=e=>o.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,n.useStyles2)(l);return(0,t.jsx)(n.Badge,{text:"Installed",color:"orange",className:e})}var d,u=s("./packages/grafana-runtime/src/index.ts");function p(e){let{plugin:a}=e;const s=(0,n.useStyles2)(l);return(0,u.featureEnabled)("enterprise.plugins")?d||(d=(0,t.jsx)(n.Badge,{text:"Enterprise",color:"blue"})):(0,t.jsxs)(n.HorizontalGroup,{children:[(0,t.jsx)(n.PluginSignatureBadge,{status:a.signature}),(0,t.jsx)(n.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:s}),(0,t.jsx)(n.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${a.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g(e){let{plugin:a}=e;const s=(0,n.useStyles2)(m);return a.hasUpdate&&!a.isCore&&a.type!==r.PluginType.renderer?(0,t.jsx)("p",{className:s.hasUpdate,children:"Update available!"}):null}const m=e=>({hasUpdate:o.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Page.tsx":(e,a,s)=>{s.d(a,{T:()=>i});s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=s("./packages/grafana-ui/src/index.ts"),t=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{children:a}=e;const s=(0,n.useStyles2)(o);return(0,t.jsx)("div",{className:"page-container",children:(0,t.jsx)("div",{className:s,children:a})})},o=e=>r.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,a,s)=>{s.d(a,{E:()=>n});s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function n(e){let{alt:a,className:s,src:n,height:t}=e;return(0,r.jsx)("img",{src:n,className:s,alt:a,loading:"lazy",height:t})}},"./public/app/features/plugins/admin/pages/Browse.tsx":(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var r,n=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),o=s("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),l=s("./packages/grafana-runtime/src/index.ts"),c=s("./public/app/features/plugins/admin/types.ts"),d=s("./public/app/features/plugins/admin/components/Badges/index.ts"),u=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function p(e){var a,s;let{plugin:n}=e;return n.isEnterprise?(0,u.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[a||(a=(0,u.jsx)(d.IF,{plugin:n})),n.isDisabled&&(0,u.jsx)(d.SX,{error:n.error}),s||(s=(0,u.jsx)(d.xh,{plugin:n}))]}):(0,u.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[(0,u.jsx)(i.PluginSignatureBadge,{status:n.signature}),n.isDisabled&&(0,u.jsx)(d.SX,{error:n.error}),n.isInstalled&&(r||(r=(0,u.jsx)(d.oZ,{}))),(0,u.jsx)(d.xh,{plugin:n})]})}var g=s("./public/app/features/plugins/admin/components/PluginLogo.tsx");const m="48px";function h(e){let{plugin:a,pathName:s,displayMode:r=c.lL.Grid}=e;const n=(0,i.useStyles2)(x),o=r===c.lL.List;return(0,u.jsxs)("a",{href:`${s}/${a.id}`,className:(0,t.cx)(n.container,{[n.list]:o}),children:[(0,u.jsx)(g.E,{src:a.info.logos.small,className:n.pluginLogo,height:m,alt:""}),(0,u.jsx)("h2",{className:(0,t.cx)(n.name,"plugin-name"),children:a.name}),(0,u.jsxs)("div",{className:(0,t.cx)(n.content,"plugin-content"),children:[(0,u.jsxs)("p",{children:["By ",a.orgName]}),(0,u.jsx)(p,{plugin:a})]}),(0,u.jsx)("div",{className:n.pluginType,children:a.type&&(0,u.jsx)(i.Icon,{name:c.Co[a.type],title:`${a.type} plugin`})})]})}const x=e=>({container:t.css`
      display: grid;
      grid-template-columns: ${m} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:t.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:t.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:t.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:t.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:t.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),y=e=>{let{plugins:a,displayMode:s}=e;const r=s===c.lL.List,n=(0,i.useStyles2)(f),l=(0,o.TH)();return(0,u.jsx)("div",{className:(0,t.cx)(n.container,{[n.list]:r}),"data-testid":"plugin-list",children:a.map((e=>(0,u.jsx)(h,{plugin:e,pathName:l.pathname,displayMode:s},e.id)))})},f=e=>({container:t.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${e.spacing(3)};
    `,list:t.css`
      grid-template-columns: 1fr;
    `});var b=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");const v=e=>{let{value:a,onSearch:s}=e;const[r,t]=(0,n.useState)(a);return function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const r=(0,n.useRef)(!0),t=[...s,r];(0,b.Z)((()=>{if(!r.current)return e();r.current=!1}),a,t)}((()=>s(null!=r?r:"")),500,[r]),(0,u.jsx)(i.FilterInput,{value:r,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||s(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{t(e)},width:46})};var j=s("./public/app/features/plugins/admin/components/Page.tsx");const S=e=>{let{children:a,wrap:s,className:r}=e;const n=(0,i.useTheme2)(),o=_(n,s);return(0,u.jsx)("div",{className:(0,t.cx)(o.container,r),children:a})},_=(e,a)=>({container:t.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${a?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var P=s("./public/app/core/components/Page/Page.tsx"),B=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),w=s("./public/app/core/selectors/navModel.ts"),z=s("./public/app/features/plugins/admin/state/hooks.ts"),N=s("./public/app/features/plugins/admin/helpers.ts");function $(e){let{route:a}=e;const s=(0,o.TH)(),r=(0,l.locationSearchToObject)(s.search),n=D(a.routeName),d=(0,B.useSelector)((e=>(0,w.h)(e.navIndex,n))),{displayMode:p,setDisplayMode:g}=(0,z.iY)(),m=(0,i.useStyles2)(k),h={push:e=>{let{query:a}=e;l.locationService.partial(a)}},x=(0,z.y9)(),f=r.q||"",b=r.filterBy||"installed",_=r.filterByType||"all",$=r.sortBy||N.Nh.nameAsc,{isLoading:L,error:C,plugins:T}=(0,z.GE)({query:f,filterBy:b,filterByType:_,sortBy:$}),E=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],A=e=>{h.push({query:{filterBy:e}})};return C?(console.error(C.message),null):(0,u.jsx)(P.T,{navModel:d,children:(0,u.jsx)(P.T.Contents,{children:(0,u.jsxs)(j.T,{children:[(0,u.jsxs)(S,{wrap:!0,children:[(0,u.jsx)(v,{value:f,onSearch:e=>{h.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),(0,u.jsxs)(S,{wrap:!0,className:m.actionBar,children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{value:_,onChange:e=>{h.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),x?(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{value:b,onChange:A,options:E})}):(0,u.jsx)(i.Tooltip,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{disabled:!0,value:b,onChange:A,options:E})})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.Select,{menuShouldPortal:!0,"aria-label":"Sort Plugins List",width:24,value:$,onChange:e=>{h.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{className:m.displayAs,value:p,onChange:g,options:[{value:c.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:c.lL.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,u.jsx)("div",{className:m.listWrap,children:L?(0,u.jsx)(i.LoadingPlaceholder,{className:t.css`
                  margin-bottom: 0;
                `,text:"Loading results"}):(0,u.jsx)(y,{plugins:T,displayMode:p})})]})})})}const k=e=>({actionBar:t.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:t.css`
    margin-top: ${e.spacing(2)};
  `,displayAs:t.css`
    svg {
      margin-right: 0;
    }
  `}),D=e=>e===c.cd.HomeAdmin||e===c.cd.BrowseAdmin?"admin-plugins":"plugins"},"./public/app/features/plugins/admin/state/hooks.ts":(e,a,s)=>{s.d(a,{iY:()=>C,bt:()=>N,ZV:()=>z,GE:()=>j,UQ:()=>_,bJ:()=>S,x3:()=>P,IS:()=>$,y9:()=>w,S1:()=>B,wq:()=>k});var r=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),t=s("./public/app/features/plugins/admin/state/reducer.ts"),i=s("./public/app/features/plugins/admin/state/actions.ts"),o=s("../../opt/drone/yarncache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js"),l=s("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,d=(0,o.P1)(c,(e=>{let{items:a}=e;return a})),u=(0,o.P1)(c,(e=>{let{settings:a}=e;return a.displayMode})),{selectAll:p,selectById:g}=t.CD.getSelectors(d),m=(e,a)=>(0,o.P1)((e=>(0,o.P1)(p,(a=>a.filter((a=>"installed"===e?a.isInstalled:!a.isCore)))))(e),(e=>e.filter((e=>"all"===a||e.type===a)))),h=(e,a,s)=>(0,o.P1)(m(a,s),(e=>(0,o.P1)(p,(a=>""===e?[]:a.filter((a=>{const s=[];return a.name&&s.push(a.name.toLowerCase()),a.orgName&&s.push(a.orgName.toLowerCase()),s.some((a=>a.includes(e.toLowerCase())))})))))(e),((a,s)=>""===e?a:s)),x=(0,o.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),y=e=>(0,o.P1)(c,(a=>{let{requests:s={}}=a;return s[e]})),f=e=>(0,o.P1)(y(e),(e=>(null==e?void 0:e.status)===l.eE.Pending)),b=e=>(0,o.P1)(y(e),(e=>(null==e?void 0:e.status)===l.eE.Rejected?null==e?void 0:e.error:null));var v=s("./public/app/features/plugins/admin/helpers.ts");const j=e=>{let{query:a="",filterBy:s="installed",filterByType:r="all",sortBy:t=v.Nh.nameAsc}=e;D();const i=(0,n.useSelector)(h(a,s,r)),{isLoading:o,error:l}=z();return{isLoading:o,error:l,plugins:(0,v.AA)(i,t)}},S=e=>(D(),L(e),(0,n.useSelector)((a=>g(a,e)))),_=()=>(D(),(0,n.useSelector)(x)),P=()=>{const e=(0,n.useDispatch)();return(a,s,r)=>e((0,i.N9)({id:a,version:s,isUpdating:r}))},B=()=>{const e=(0,n.useDispatch)();return a=>e((0,i.Tz)(a))},w=()=>null===(0,n.useSelector)(b(i.tQ.typePrefix)),z=()=>({isLoading:(0,n.useSelector)(f(i.Qd.typePrefix)),error:(0,n.useSelector)(b(i.Qd.typePrefix))}),N=()=>({isLoading:(0,n.useSelector)(f(i.DD.typePrefix)),error:(0,n.useSelector)(b(i.DD.typePrefix))}),$=()=>({isInstalling:(0,n.useSelector)(f(i.N9.typePrefix)),error:(0,n.useSelector)(b(i.N9.typePrefix))}),k=()=>({isUninstalling:(0,n.useSelector)(f(i.Tz.typePrefix)),error:(0,n.useSelector)(b(i.Tz.typePrefix))}),D=()=>{const e=(0,n.useDispatch)(),a=(0,n.useSelector)((s=i.Qd.typePrefix,(0,o.P1)(y(s),(e=>void 0===e))));var s;(0,r.useEffect)((()=>{a&&e((0,i.Qd)())}),[])},L=e=>{const a=(0,n.useDispatch)(),s=(0,n.useSelector)((a=>g(a,e))),t=!(0,n.useSelector)(f(i.DD.typePrefix))&&s&&!s.details;(0,r.useEffect)((()=>{t&&a((0,i.DD)(e))}),[s])},C=()=>{const e=(0,n.useDispatch)();return{displayMode:(0,n.useSelector)(u),setDisplayMode:a=>e((0,t.UC)(a))}}}}]);
//# sourceMappingURL=PluginListPage.109a2a405cf7c8a04a9d.js.map