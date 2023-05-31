"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5982],{"./public/app/features/profile/ChangePasswordPage.tsx":(e,a,s)=>{s.r(a),s.d(a,{ChangePasswordPage:()=>v,default:()=>b});s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n,r,o=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js"),t=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=s("./public/app/core/selectors/navModel.ts"),c=s("./public/app/core/components/Page/Page.tsx"),d=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=s("./packages/grafana-ui/src/index.ts"),l=s("./public/app/core/config.ts"),p=s("./public/app/core/components/PasswordField/PasswordField.tsx"),w=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const g=e=>{var a,s;let{user:o,onChangePassword:t,isSaving:i}=e;const{ldapEnabled:c,authProxyEnabled:g,disableLoginForm:f}=l.ZP,h=(null===(a=o.authLabels)||void 0===a?void 0:a.length)&&o.authLabels[0];return c||g?n||(n=(0,w.jsx)("p",{children:"You cannot change password when LDAP or auth proxy authentication is enabled."})):h&&f?r||(r=(0,w.jsx)("p",{children:"Password cannot be changed here."})):(0,w.jsx)("div",{className:d.css`
        max-width: 400px;
      `,children:(0,w.jsx)(u.Form,{onSubmit:t,children:e=>{var a,n,r;let{register:o,errors:t,getValues:c}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Field,{label:"Old password",invalid:!!t.oldPassword,error:null==t||null===(a=t.oldPassword)||void 0===a?void 0:a.message,children:(0,w.jsx)(p.Z,Object.assign({id:"current-password",autoComplete:"current-password"},o("oldPassword",{required:"Old password is required"})))}),(0,w.jsx)(u.Field,{label:"New password",invalid:!!t.newPassword,error:null==t||null===(n=t.newPassword)||void 0===n?void 0:n.message,children:(0,w.jsx)(p.Z,Object.assign({id:"new-password",autoComplete:"new-password"},o("newPassword",{required:"New password is required",validate:{confirm:e=>e===c().confirmNew||"Passwords must match",old:e=>e!==c().oldPassword||"New password can't be the same as the old one."}})))}),(0,w.jsx)(u.Field,{label:"Confirm password",invalid:!!t.confirmNew,error:null==t||null===(r=t.confirmNew)||void 0===r?void 0:r.message,children:(0,w.jsx)(p.Z,Object.assign({id:"confirm-new-password",autoComplete:"new-password"},o("confirmNew",{required:"New password confirmation is required",validate:e=>e===c().newPassword||"Passwords must match"})))}),(0,w.jsxs)(u.HorizontalGroup,{children:[s||(s=(0,w.jsx)(u.Button,{variant:"primary",disabled:i,children:"Change Password"})),(0,w.jsx)(u.LinkButton,{variant:"secondary",href:`${l.ZP.appSubUrl}/profile`,fill:"outline",children:"Cancel"})]})]})}})})};var f,h=s("./public/app/features/profile/state/actions.ts");const m={loadUser:h.II,changePassword:h.Cp};function v(e){let{navModel:a,loadUser:s,isUpdating:n,user:r,changePassword:t}=e;return(0,o.Z)((()=>s())),(0,w.jsx)(c.Z,{navModel:a,children:(0,w.jsx)(c.Z.Contents,{isLoading:!Boolean(r),children:r?(0,w.jsxs)(w.Fragment,{children:[f||(f=(0,w.jsx)("h3",{className:"page-heading",children:"Change Your Password"})),(0,w.jsx)(g,{user:r,onChangePassword:t,isSaving:n})]}):null})})}const b=(0,t.connect)((function(e){const a=e.user,{isUpdating:s,user:n}=a;return{navModel:(0,i.h)(e.navIndex,"change-password"),isUpdating:s,user:n}}),m)(v)},"./public/app/features/profile/state/actions.ts":(e,a,s)=>{s.d(a,{Cp:()=>t,hz:()=>u,PA:()=>i,II:()=>c,cc:()=>d,Lj:()=>l});var n=s("./packages/grafana-runtime/src/index.ts"),r=s("./public/app/features/profile/state/reducers.ts");const o={changePassword:async function(e){try{await(0,n.getBackendSrv)().put("/api/user/password",e)}catch(e){console.error(e)}},revokeUserSession:async function(e){await(0,n.getBackendSrv)().post("/api/user/revoke-auth-token",{authTokenId:e})},loadUser:function(){return(0,n.getBackendSrv)().get("/api/user")},loadSessions:function(){return(0,n.getBackendSrv)().get("/api/user/auth-tokens")},loadOrgs:function(){return(0,n.getBackendSrv)().get("/api/user/orgs")},loadTeams:function(){return(0,n.getBackendSrv)().get("/api/user/teams")},setUserOrg:async function(e){await(0,n.getBackendSrv)().post("/api/user/using/"+e.orgId,{})},updateUserProfile:async function(e){try{await(0,n.getBackendSrv)().put("/api/user",e)}catch(e){console.error(e)}}};function t(e){return async function(a){a((0,r.zc)({updating:!0})),await o.changePassword(e),a((0,r.zc)({updating:!1}))}}function i(){return async function(e){await e(c()),e((async function(e){e((0,r.qD)());const a=await o.loadTeams();e((0,r.PL)({teams:a}))})),e((async function(e){e((0,r.$S)());const a=await o.loadOrgs();e((0,r.Ns)({orgs:a}))})),e((async function(e){e((0,r.Uk)());const a=await o.loadSessions();e((0,r.z0)({sessions:a}))}))}}function c(){return async function(e){const a=await o.loadUser();e((0,r.aw)({user:a}))}}function d(e){return async function(a){a((0,r.zc)({updating:!0})),await o.revokeUserSession(e),a((0,r.p$)({tokenId:e}))}}function u(e){return async function(a){a((0,r.zc)({updating:!0})),await o.setUserOrg(e),window.location.href=n.config.appSubUrl+"/profile"}}function l(e){return async function(a){a((0,r.zc)({updating:!0})),await o.updateUserProfile(e),await a(c()),a((0,r.zc)({updating:!1}))}}},"./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":(e,a,s)=>{s.d(a,{Z:()=>r});var n=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");const r=function(e){(0,n.Z)((function(){e()}))}}}]);
//# sourceMappingURL=5982.109a2a405cf7c8a04a9d.js.map