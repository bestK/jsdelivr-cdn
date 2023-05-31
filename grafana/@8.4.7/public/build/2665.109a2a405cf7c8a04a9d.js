"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2665],{"./public/app/core/components/Signup/VerifyEmailPage.tsx":(e,i,a)=>{a.r(i),a.d(i,{VerifyEmailPage:()=>v,default:()=>j});var n,r,s,t,l=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=a("./public/app/core/components/Login/LoginLayout.tsx"),o=a("./packages/grafana-ui/src/index.ts"),d=a("./public/app/core/config.ts"),p=a("./packages/grafana-runtime/src/index.ts"),u=a("./public/app/core/app_events.ts"),m=a("./packages/grafana-data/src/index.ts"),g=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const h=()=>{const[e,i]=(0,l.useState)(!1);return e?(0,g.jsxs)("div",{children:[n||(n=(0,g.jsx)("p",{children:"An email with a verification link has been sent to the email address. You should receive it shortly."})),r||(r=(0,g.jsx)(o.Container,{margin:"md"})),(0,g.jsx)(o.LinkButton,{variant:"primary",href:(0,d.iE)().appSubUrl+"/signup",children:"Complete Signup"})]}):(0,g.jsx)(o.Form,{onSubmit:e=>{(0,p.getBackendSrv)().post("/api/user/signup",e).then((()=>{i(!0)})).catch((e=>{var i;const a=(null===(i=e.data)||void 0===i?void 0:i.message)||e;u.Z.emit(m.AppEvents.alertWarning,[a])}))},children:e=>{var i;let{register:a,errors:n}=e;return(0,g.jsxs)(g.Fragment,{children:[s||(s=(0,g.jsx)(o.Legend,{children:"Verify Email"})),(0,g.jsx)(o.Field,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!n.email,error:null===(i=n.email)||void 0===i?void 0:i.message,children:(0,g.jsx)(o.Input,Object.assign({id:"email"},a("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}}),{placeholder:"Email"}))}),(0,g.jsxs)(o.HorizontalGroup,{children:[t||(t=(0,g.jsx)(o.Button,{children:"Send verification email"})),(0,g.jsx)(o.LinkButton,{fill:"text",href:(0,d.iE)().appSubUrl+"/login",children:"Back to login"})]})]})}})};var x;const v=()=>x||(x=(0,g.jsx)(c.dd,{children:(0,g.jsx)(c.$s,{children:(0,g.jsx)(h,{})})})),j=v}}]);
//# sourceMappingURL=2665.109a2a405cf7c8a04a9d.js.map