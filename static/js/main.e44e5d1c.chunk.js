(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=(a(29),a(3)),s=a(9);function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link ","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about"},"About"))),l.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:function(){e.togglemode("null")},type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",{className:"mb-4"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},id:"textbox",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to UpperCase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to LowerCase!","success")}},"Convert to LowerCase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-danger mx-1 my-1",onClick:function(){c(""),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-warning mx-1 my-1",onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Copied to ClipBoard!","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-info mx-1 my-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Removed Extra Spaces!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",r.length," characters "),l.a.createElement("p",null,.008*r.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing to preview!")))}i.defaultProps={title:"set title here",aboutText:"About Us"};a(30);var u=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg))};function d(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104":"white"};return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"}},"ABOUT US "),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header"},l.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Tap Here:-")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"Analyze Your Text:-"),l.a.createElement("br",null),"TextUtilis gives you a way to analyze your text quickly and efficiently.Be it word count,character count or ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Free to Use:-"),l.a.createElement("br",null),"TextUtilis is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtilis reports the number of words and chracters .Thus it is suitable for writing text with word/charcter limits. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Browser Compatible"),l.a.createElement("br",null),"This word counter software works in any web browsers such as chrome, firefox, Internet Explorer , Safari ,Opera.It suits to count chracters in facebook, blog ,books, excel document, pdf document ,essays,etc.")))))}var b=a(2);var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),h=Object(o.a)(c,2),p=h[0],E=h[1],g=function(e,t){E({msg:e,type:t}),setTimeout((function(){E(null)}),1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(i,{title:"TextUtilis",mode:a,togglemode:function(e){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",g("Dark Mode has been Enabled","success")):(r("light"),document.body.style.backgroundColor="white",g("Light Mode has been Enabled","success"))}}),l.a.createElement(u,{alert:p}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/about",element:l.a.createElement(d,{mode:a})}),l.a.createElement(b.a,{exact:!0,path:"/",element:l.a.createElement(m,{showAlert:g,heading:" Try TextUtilis - Word Counter, Character counter ,Remove Extra Spaces",mode:a})})))))},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.e44e5d1c.chunk.js.map