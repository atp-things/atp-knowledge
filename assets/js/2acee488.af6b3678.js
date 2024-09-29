"use strict";(self.webpackChunkatp_knowledge=self.webpackChunkatp_knowledge||[]).push([[9955],{8670:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var d=r(4848),c=r(8453);const o={sidebar_position:1},s="General",i={id:"docker/docker_main",title:"General",description:"Commands",source:"@site/docs/docker/docker_main.md",sourceDirName:"docker",slug:"/docker/docker_main",permalink:"/atp-knowledge/docs/docker/docker_main",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker/docker_main.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/atp-knowledge/docs/category/docker"},next:{title:"Compose",permalink:"/atp-knowledge/docs/docker/docker_compose"}},l={},t=[{value:"Commands",id:"commands",level:2},{value:"Buildx",id:"buildx",level:3},{value:"Restart docker policy",id:"restart-docker-policy",level:3},{value:"Tags",id:"tags",level:2},{value:"Volumes",id:"volumes",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"general",children:"General"})}),"\n",(0,d.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker ps"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker ps -a"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker build -t <container> ."})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker build -f Dockerfile.prod -t <container> ."})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker rm --force <id>"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"docker run --publish 8001:8080 --detach --name api-1 <container>"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"systemctl restart docker"})}),"\n",(0,d.jsxs)(n.li,{children:["Get current output of container ",(0,d.jsx)(n.code,{children:"docker attach [OPTIONS] CONTAINER"})]}),"\n",(0,d.jsxs)(n.li,{children:["Kill container ",(0,d.jsx)(n.code,{children:"docker kill <container>"})," or ",(0,d.jsx)(n.code,{children:"docker exec -it <container> kill 1"})]}),"\n",(0,d.jsxs)(n.li,{children:["Go to container bash ",(0,d.jsx)(n.code,{children:"sudo docker exec -it CONTAINER /bin/bash"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"buildx",children:"Buildx"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Build and push to dockerhub ",(0,d.jsx)(n.code,{children:"docker buildx build -f Dockerfile --platform=linux/amd64,linux/arm64 -t <username>/<container> --push ."})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"restart-docker-policy",children:"Restart docker policy"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Set restart always ",(0,d.jsx)(n.code,{children:"docker run -d --restart always <docker-image>"})]}),"\n",(0,d.jsxs)(n.li,{children:["Update restart ",(0,d.jsx)(n.code,{children:"docker update --restart unless-stopped  <docker-container>"})]}),"\n",(0,d.jsxs)(n.li,{children:["Update all restarts ",(0,d.jsx)(n.code,{children:"docker update --restart unless-stopped $(docker ps -q)"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"tags",children:"Tags"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Run in background ",(0,d.jsx)(n.code,{children:"-d"})]}),"\n",(0,d.jsxs)(n.li,{children:["Tag ",(0,d.jsx)(n.code,{children:"-t"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"volumes",children:"Volumes"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["List: ",(0,d.jsx)(n.code,{children:"docker volume ls"})]}),"\n",(0,d.jsxs)(n.li,{children:["Create: ",(0,d.jsx)(n.code,{children:"docker volume create -d flocker -o size=20GB my-named-volume"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var d=r(6540);const c={},o=d.createContext(c);function s(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);