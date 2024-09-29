"use strict";(self.webpackChunkatp_knowledge=self.webpackChunkatp_knowledge||[]).push([[5792],{2963:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(4848),c=n(8453);const r={sidebar_position:2},d="Compose",i={id:"docker/docker_compose",title:"Compose",description:"Commands",source:"@site/docs/docker/docker_compose.md",sourceDirName:"docker",slug:"/docker/docker_compose",permalink:"/atp-knowledge/docs/docker/docker_compose",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker/docker_compose.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/atp-knowledge/docs/docker/docker_main"},next:{title:"Git",permalink:"/atp-knowledge/docs/git"}},t={},l=[{value:"Commands",id:"commands",level:2},{value:"Restart policy",id:"restart-policy",level:2},{value:"Volumes",id:"volumes",level:2},{value:"Logging",id:"logging",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"compose",children:"Compose"})}),"\n",(0,s.jsx)(o.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose up --build"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose up -d"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose down"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose -f docker-compose.yml up --build"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose -f docker-compose.yml up -d --build"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"docker compose -f docker-compose.yml down"})}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"restart-policy",children:"Restart policy"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"services:\n  my-service:\n    restart: always | unless-stopped | on-failure[:max-retries] | no\n"})}),"\n",(0,s.jsx)(o.h2,{id:"volumes",children:"Volumes"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'volumes:\n  tmpfs:\n    driver: local\n    driver_opts:\n      o: "size=100m,uid=1000"\n      device: tmpfs\n      type: tmpfs\n'})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"docker volume create --driver local \\\n--opt type=tmpfs \\\n--opt device=tmpfs \\\n--opt o=size=100m,uid=1000 \\\nfoo\n"})}),"\n",(0,s.jsx)(o.h2,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(o.p,{children:["Docker logs are stored in ",(0,s.jsx)(o.code,{children:"/var/lib/docker/containers/CONTAINER_ID/CONTAINER_ID-json.log"}),". You can just delete these logs.\nSettings (docker-compose):"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'logging:\n    driver: "json-file"\n    options:\n        max-file: "5"   # number of files or file count\n        max-size: "10m" # file size\n'})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://docs.docker.com/config/containers/logging/json-file/",children:"https://docs.docker.com/config/containers/logging/json-file/"})})]})}function p(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>i});var s=n(6540);const c={},r=s.createContext(c);function d(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);