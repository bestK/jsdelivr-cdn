"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2721],{"./public/app/features/admin/AdminEditOrgPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var r,t,n,i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=a("./public/app/core/components/Page/Page.tsx"),c=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=a("./public/app/types/index.ts"),d=a("./public/app/core/selectors/navModel.ts"),u=a("./public/app/features/users/UsersTable.tsx"),p=a("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js"),m=a("./packages/grafana-runtime/src/index.ts"),h=a("./packages/grafana-ui/src/index.ts"),g=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),x=a("./public/app/core/core.ts"),b=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function j(e){let{match:s}=e;const a=(0,c.useSelector)((e=>e.navIndex)),j=(0,d.h)(a,"global-orgs"),f=parseInt(s.params.id,10),v=x.Vt.hasPermission(o.bW.OrgsWrite),y=x.Vt.hasPermission(o.bW.OrgUsersRead),[R,_]=(0,i.useState)([]),[I,N]=(0,p.Z)((()=>(async e=>await(0,m.getBackendSrv)().get("/api/orgs/"+e))(f)),[]),[,w]=(0,p.Z)((()=>(async e=>x.Vt.hasPermission(o.bW.OrgUsersRead)?await(0,m.getBackendSrv)().get(`/api/orgs/${e}/users`):[])(f)),[]);(0,i.useEffect)((()=>{N(),w().then((e=>_(e)))}),[N,w]);return(0,b.jsx)(l.Z,{navModel:j,children:(0,b.jsx)(l.Z.Contents,{children:(0,b.jsxs)(b.Fragment,{children:[t||(t=(0,b.jsx)(h.Legend,{children:"Edit organization"})),I.value&&(0,b.jsx)(h.Form,{defaultValues:{orgName:I.value.name},onSubmit:async e=>await(async e=>await(0,m.getBackendSrv)().put("/api/orgs/"+f,Object.assign({},I.value,{name:e})))(e.orgName),children:e=>{let{register:s,errors:a}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Field,{label:"Name",invalid:!!a.orgName,error:"Name is required",disabled:!v,children:(0,b.jsx)(h.Input,Object.assign({},s("orgName",{required:!0}),{id:"org-name-input"}))}),(0,b.jsx)(h.Button,{disabled:!v,children:"Update"})]})}}),(0,b.jsxs)("div",{className:g.css`
              margin-top: 20px;
            `,children:[n||(n=(0,b.jsx)(h.Legend,{children:"Organization users"})),!y&&(r||(r=(0,b.jsx)(h.Alert,{severity:"info",title:"Access denied",children:"You do not have permission to see users in this organization. To update this organization, contact your server administrator."}))),y&&!!R.length&&(0,b.jsx)(u.Z,{users:R,orgId:f,onRoleChange:(e,s)=>{(async(e,s)=>{await(0,m.getBackendSrv)().patch("/api/orgs/"+s+"/users/"+e.userId,e)})(Object.assign({},s,{role:e}),f),_(R.map((a=>s.userId===a.userId?Object.assign({},s,{role:e}):a))),w()},onRemoveUser:e=>{(async(e,s)=>{await(0,m.getBackendSrv)().delete("/api/orgs/"+s+"/users/"+e.userId)})(e,f),_(R.filter((s=>e.userId!==s.userId))),w()}})]})]})})})}},"./public/app/features/users/UsersTable.tsx":(e,s,a)=>{a.d(s,{Z:()=>b});var r,t,n,i,l,c,o=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),d=a("./public/app/types/index.ts"),u=a("./public/app/features/admin/OrgRolePicker.tsx"),p=a("./packages/grafana-ui/src/index.ts"),m=a("./public/app/core/core.ts"),h=a("./public/app/core/components/RolePicker/api.ts"),g=a("./public/app/core/components/RolePicker/UserRolePicker.tsx"),x=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const b=e=>{const{users:s,orgId:a,onRoleChange:b,onRemoveUser:j}=e,[f,v]=(0,o.useState)(null),[y,R]=(0,o.useState)([]),[_,I]=(0,o.useState)({});return(0,o.useEffect)((()=>{m.Vt.licensedAccessControlEnabled()&&async function(){try{if(m.Vt.hasPermission(d.bW.ActionRolesList)){let e=await(0,h.ul)(a);R(e)}if(m.Vt.hasPermission(d.bW.ActionBuiltinRolesList)){const e=await(0,h.fh)(a);I(e)}}catch(e){console.error("Error loading options")}}()}),[a]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("table",{className:"filter-table form-inline",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[r||(r=(0,x.jsx)("th",{})),t||(t=(0,x.jsx)("th",{children:"Login"})),n||(n=(0,x.jsx)("th",{children:"Email"})),i||(i=(0,x.jsx)("th",{children:"Name"})),l||(l=(0,x.jsx)("th",{children:"Seen"})),c||(c=(0,x.jsx)("th",{children:"Role"})),(0,x.jsx)("th",{style:{width:"34px"}})]})}),(0,x.jsx)("tbody",{children:s.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"width-2 text-center",children:(0,x.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"User avatar"})}),(0,x.jsx)("td",{className:"max-width-6",children:(0,x.jsx)("span",{className:"ellipsis",title:e.login,children:e.login})}),(0,x.jsx)("td",{className:"max-width-5",children:(0,x.jsx)("span",{className:"ellipsis",title:e.email,children:e.email})}),(0,x.jsx)("td",{className:"max-width-5",children:(0,x.jsx)("span",{className:"ellipsis",title:e.name,children:e.name})}),(0,x.jsx)("td",{className:"width-1",children:e.lastSeenAtAge}),(0,x.jsx)("td",{className:"width-8",children:m.Vt.licensedAccessControlEnabled()?(0,x.jsx)(g.R,{userId:e.userId,orgId:a,builtInRole:e.role,onBuiltinRoleChange:s=>b(s,e),roleOptions:y,builtInRoles:_,disabled:!m.Vt.hasPermissionInMetadata(d.bW.OrgUsersRoleUpdate,e)}):(0,x.jsx)(u.A,{"aria-label":"Role",value:e.role,disabled:!m.Vt.hasPermissionInMetadata(d.bW.OrgUsersRoleUpdate,e),onChange:s=>b(s,e)})}),m.Vt.hasPermissionInMetadata(d.bW.OrgUsersRemove,e)&&(0,x.jsx)("td",{children:(0,x.jsx)(p.Button,{size:"sm",variant:"destructive",onClick:()=>{v(e)},icon:"times","aria-label":"Delete user"})})]},`${e.userId}-${s}`)))})]}),Boolean(f)&&(0,x.jsx)(p.ConfirmModal,{body:`Are you sure you want to delete user ${null==f?void 0:f.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{v(null)},isOpen:!0,onConfirm:()=>{f&&(j(f),v(null))}})]})}}}]);
//# sourceMappingURL=AdminEditOrgPage.109a2a405cf7c8a04a9d.js.map