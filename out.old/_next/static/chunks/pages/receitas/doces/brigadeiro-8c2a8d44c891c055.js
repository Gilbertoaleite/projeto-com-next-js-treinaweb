(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{3075:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/receitas/doces/brigadeiro",function(){return n(85)}])},1561:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893);n(1664);function o(){return(0,t.jsxs)("footer",{className:"footer",children:["\xa9 TreinaCook - Desenvolvido por:"," ",(0,t.jsxs)("a",{title:"Meu Portf\xf3lio",href:"https://gilbertoaleite-portfolio.netlify.app/",children:["Gilberto A Leite"," "]})]})}},5137:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(5893),o=n(1664),a=n(9008);function i(e){return(0,t.jsxs)("header",{className:"header",children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("link",{rel:"stylesheet",href:"/styles/page.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"})]}),(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/logo.svg",alt:"Logo TreinaCook"})})})]})}},7872:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(5893),o=n(5137),a=n(1561);function i(e){return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Z,{title:"TreinaCook - ".concat(e.name)}),(0,t.jsx)("main",{children:(0,t.jsxs)("article",{className:"recipe-body",children:[(0,t.jsx)("h1",{className:"recipe-body-name",children:e.name}),(0,t.jsx)("img",{cclassName:"recipe-body-picture",alt:e.name,src:e.picture}),(0,t.jsxs)("div",{children:[(0,t.jsx)("i",{className:"fas fa-stopwatch fa-fw"})," Preparo: ",e.time," ",(0,t.jsx)("br",{}),(0,t.jsx)("i",{className:"fas fa-utensils fa-fw"})," Rendimento:"," ",e.servings]}),e.children]})}),(0,t.jsx)(a.Z,{})]})}},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),c=n(387),s=n(7190);var l={};function u(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=t(i.resolveHref(o,e.href,!0),2),n=r[0],a=r[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,m=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(r=a.default.Children.only(p))&&"object"===typeof r&&r.ref,g=t(s.useIntersection({rootMargin:"200px"}),2),b=g[0],w=g[1],E=a.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),r="undefined"!==typeof j?j:o&&o.locale,t=l[d+"%"+h+(r?"%"+r:"")];e&&!t&&u(o,d,h,{locale:r})}),[h,d,w,j,n,o]);var _={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:s,scroll:c}))}(e,o,d,h,v,m,x,j)},onMouseEnter:function(e){i.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof j?j:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(h,k,o&&o.locales,o&&o.domainLocales);_.href=C||i.addBasePath(i.addLocale(h,k,o&&o.defaultLocale))}return a.default.cloneElement(r,_)};r.default=f},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=t(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,i=t.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},85:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var t=n(5893),o=n(7872);function a(){return(0,t.jsx)("div",{children:(0,t.jsxs)(o.Z,{name:"Brigadeiro",picture:"https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg",time:"25 min",servings:"30 por\xe7\xf5es",children:[(0,t.jsx)("h2",{children:"Ingredientes"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"1 caixa de leite condensado"}),(0,t.jsx)("li",{children:"1 colher (sopa) de margarina sem sal"}),(0,t.jsx)("li",{children:"7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em p\xf3"}),(0,t.jsx)("li",{children:"chocolate granulado"})]}),(0,t.jsx)("h2",{children:"Modo de Preparo"}),(0,t.jsx)("h3",{children:"Cobertura"}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em p\xf3."}),(0,t.jsx)("li",{children:"Cozinhe em fogo m\xe9dio e mexa at\xe9 que o brigadeiro comece a desgrudar da panela."}),(0,t.jsx)("li",{children:"Deixe esfriar e fa\xe7a pequenas bolas com a m\xe3o passando a massa no chocolate granulado."})]})]})})}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=3075,e(e.s=r);var r}));var r=e.O();_N_E=r}]);