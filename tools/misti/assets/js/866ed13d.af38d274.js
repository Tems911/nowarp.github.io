"use strict";(self.webpackChunknowarp_github_io=self.webpackChunknowarp_github_io||[]).push([[974],{9515:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(4848),r=s(8453);const o={},d="Zero Address",i={id:"detectors/ZeroAddress",title:"Zero Address",description:"A detector that identifies uses of the zero address.",source:"@site/docs/detectors/ZeroAddress.md",sourceDirName:"detectors",slug:"/detectors/ZeroAddress",permalink:"/tools/misti/docs/detectors/ZeroAddress",draft:!1,unlisted:!1,editUrl:"https://github.com/nowarp/nowarp.github.io/tree/master/docs/detectors/ZeroAddress.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Unbound Loops",permalink:"/tools/misti/docs/detectors/UnboundLoops"},next:{title:"Contributing",permalink:"/tools/misti/docs/hacking/contributing"}},a={},c=[{value:"Why is it bad?",id:"why-is-it-bad",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"zero-address",children:"Zero Address"}),"\n",(0,n.jsx)(t.p,{children:"A detector that identifies uses of the zero address."}),"\n",(0,n.jsx)(t.h2,{id:"why-is-it-bad",children:"Why is it bad?"}),"\n",(0,n.jsx)(t.p,{children:"Using the zero address in smart contracts is typically problematic because it can be\nexploited as a default or uninitialized address, leading to unintended transfers and\nsecurity vulnerabilities. Additionally, operations involving the zero address can\nresult in loss of funds or tokens, as there is no private key to access this address."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tact",children:"contract Proxy {\n  to: Address;\n  init() {\n    // Warning: Insecure usage of zero address as default value\n    self.to = newAddress(0, 0);\n  }\n  fun setAddress(to: Address) {\n    self.to = to\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Use instead:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tact",children:"contract Proxy {\n  to: Address;\n  init(to: Address) {\n    // Fixed: Using the input value on initializaiton.\n    self.to = to;\n  }\n  fun setAddress(to: Address) {\n    self.to = to\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);