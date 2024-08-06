"use strict";(self.webpackChunknowarp_github_io=self.webpackChunknowarp_github_io||[]).push([[40],{9323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(4848),a=n(8453);const r={},i="Never-accessed Variables",o={id:"detectors/NeverAccessedVariables",title:"Never-accessed Variables",description:"A detector that identifies write-only or unused variables, fields and constants.",source:"@site/docs/detectors/NeverAccessedVariables.md",sourceDirName:"detectors",slug:"/detectors/NeverAccessedVariables",permalink:"/tools/misti/docs/detectors/NeverAccessedVariables",draft:!1,unlisted:!1,editUrl:"https://github.com/nowarp/nowarp.github.io/tree/master/docs/detectors/NeverAccessedVariables.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Divide before Multiply",permalink:"/tools/misti/docs/detectors/DivideBeforeMultiply"},next:{title:"Read-only Variables",permalink:"/tools/misti/docs/detectors/ReadOnlyVariables"}},c={},d=[{value:"Why is it bad?",id:"why-is-it-bad",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"never-accessed-variables",children:"Never-accessed Variables"}),"\n",(0,s.jsx)(t.p,{children:"A detector that identifies write-only or unused variables, fields and constants."}),"\n",(0,s.jsx)(t.h2,{id:"why-is-it-bad",children:"Why is it bad?"}),"\n",(0,s.jsx)(t.p,{children:"These variables are either assigned but never used in any meaningful computation,\nor they are declared and never used at all, which may indicate redundant code\nor an incomplete implementation of the intended logic."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tact",children:"// Error: the developer forgot to use the constant\nconst MAX_SUPPLY: Int = 1000;\n\nfun mint(to: Address, amount: Int) {\n  balances.set(to, balances.get(to)!! + amount);\n  totalSupply += amount;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use instead:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tact",children:'const MAX_SUPPLY: Int = 1000;\n\nfun mint(to: Address, amount: Int) {\n  // OK: Fixed after the linter highlighted this warning\n  require(totalSupply + amount <= MAX_SUPPLY, "Exceeds max supply");\n  balances.set(to, balances.get(to)!! + amount);\n  totalSupply += amount;\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);