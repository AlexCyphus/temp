(this["webpackJsonpwebview-starter"]=this["webpackJsonpwebview-starter"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),i=n.n(c),l=n(13),a=n.n(l),s=(n(24),n(14)),o=n(15),d=n(3),h=n(18),j=n(17);n(25);function u(e){var t=e.text,n=e.actionHandler,c=e.specClass,i=(e.size,e.color),l=e.close;e.closeHandler;return i="pink"===i?"pink-background":"blue-background",[Object(r.jsxs)("div",{className:c,children:[Object(r.jsx)("div",{className:"action-button-container undecorated-link",onClick:function(){return console.log("y")},children:Object(r.jsx)("div",{className:"action-button-inner "+i,children:Object(r.jsx)("p",{className:"action-button-inner-text",children:t.toUpperCase()})})}),!0===l?Object(r.jsx)("div",{className:"close-button text-center undecorated-link",onClick:n,children:Object(r.jsx)("p",{children:"Close"})}):null]},t+String(n))]}function b(e){var t=e.title,n=e.image,c=e.rowClickHandler,i=e.children,l=e.roundImage,a=e.localImage;return void 0!==a&&a&&(n="/sample-data"+n),Object(r.jsxs)("div",{className:"row-container",onClick:c,children:[Object(r.jsx)("div",{className:"row-image-container",children:Object(r.jsx)("img",{src:n,className:"row-image "+(l?"round-image":null)})}),Object(r.jsxs)("div",{className:"row-text-container",children:[Object(r.jsx)("p",{className:"row-title",children:t}),i]})]})}function p(e){var t=e.sliderScreen,n=e.title1,c=e.title2,i=e.handleSliderChange;return Object(r.jsxs)("div",{className:"slider d-flex",children:[Object(r.jsx)("div",{className:"slider-title-container "+(0==t?"slider-title-container-blue":null),onClick:function(){return i(0)},children:Object(r.jsx)("p",{className:"slider-title-text",children:n})}),Object(r.jsx)("div",{className:"slider-title-container "+(1==t?"slider-title-container-blue":null),onClick:function(){return i(1)},children:Object(r.jsx)("p",{className:"slider-title-text",children:c})})]})}function O(e){var t=e.title,n=e.description,c=e.children,i=e.overlayHandler,l=e.placeholder,a=e.buttonText;return console.log(n),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"overlay-black",onClick:i}),Object(r.jsxs)("div",{className:"popup-container",children:[Object(r.jsx)("p",{className:"popup-title",children:t}),Object(r.jsx)("div",{className:"popup-description-holder",children:n?Object(r.jsx)("p",{className:"popup-description",children:n}):c}),Object(r.jsx)("div",{className:"popup-input-container",children:Object(r.jsx)("input",{placeholder:l})}),Object(r.jsx)(u,{text:a,color:"pink",close:!0})]})]})}function x(e){var t=e.title,n=e.children,c=e.buttonAction,i=e.closeAction,l=e.buttonText,a=e.handleOverlay;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"overlay-black",onClick:a}),Object(r.jsxs)("div",{className:"infocard-container",children:[Object(r.jsx)("div",{className:"infocard-close-x",onClick:i,children:"x"}),Object(r.jsx)("div",{className:"infocard-title-container",children:Object(r.jsx)("p",{className:"infocard-title",children:t})}),Object(r.jsx)("div",{className:"infocard-main-content",children:n}),Object(r.jsx)(u,{text:l,specClass:"button-fixed-bottom",onClick:c})]})]})}function m(e){var t=e.title,n=e.backHandler;return Object(r.jsx)("div",{className:"header-title-container",children:Object(r.jsxs)("div",{className:"header-title-inner",children:[Object(r.jsx)("div",{className:"back-arrow",onClick:n,children:Object(r.jsx)("img",{className:"back-arrow-img",src:"/arrow.png"})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"header-title",children:t})})]})})}function v(e){var t=e.image,n=e.buttonHandler;return Object(r.jsx)("div",{className:"circular-button-outer",onClick:n,children:Object(r.jsx)("div",{className:"circular-button-inner",children:Object(r.jsx)("img",{src:"/sample-data"+t})})})}n(26);var g=function(e){var t=e.children;return Object(r.jsx)("div",{className:"bigDarkMode",children:t})},w=(n(16),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={sliderScreen:0,popup:!1,infocard:!1,dark:!1,currency:!1,partners:!1,profile:!1},r.handleSliderChange=r.handleSliderChange.bind(Object(d.a)(r)),r}return Object(o.a)(n,[{key:"handleSliderChange",value:function(e){this.setState({sliderScreen:e})}},{key:"componentWillMount",value:function(){var e=this;window.NativeApp?this.setState({partners:JSON.parse(window.NativeApp.getPartners()),profile:JSON.parse(window.NativeApp.getMyProfile()),currency:window.NativeApp.getCurrency()}):window.webkit&&(window.setMyProfile=function(t){return e.setState({profile:JSON.parse(t)})},window.setMyPartners=function(t){return e.setState({partners:JSON.parse(t)})},window.setCurrency=function(t){return e.setState({currency:t})},window.webkit.messageHandlers.getMyProfile.postMessage({}),window.webkit.messageHandlers.getMyPartners.postMessage({}),window.webkit.messageHandlers.getMyCurrency.postMessage({}),window.webkit.messageHandlers.getDarkModeEnabled.postMessage({}))}},{key:"tp",value:function(e){return(t="testwebview",function(e){var n,r,c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return window.NativeApp?(r="Exp_"+c(t)+"_"+c(e),n=window.NativeApp):window.webkit?(r=c(t)+"_"+c(e),n={sendTrackingPoint:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return window.webkit.messageHandlers.sendTrackingPoint.postMessage({name:e,value:t})}}):(r="Exp_"+c(t)+"_"+c(e),n={sendTrackingPoint:function(e){console.log(e)}}),void 0==e?null:r.split(" ").length>1?console.error("Spaces aren't allowed in tracking points"):n.sendTrackingPoint(r)})(e);var t}},{key:"render",value:function(){var e=this,t=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),Object(r.jsx)("button",{onClick:function(){return e.tp("testbtn2")},children:" testbtn1 "}),Object(r.jsx)("button",{onClick:function(){return e.tp("testbtn2")},children:" testbtn2 "}),Object(r.jsx)("p",{style:{overflowWrap:"anywhere"},children:JSON.stringify(e.state)}),Object(r.jsx)(m,{title:"I am category"}),Object(r.jsx)(p,{title1:"Hello",title2:"World",sliderScreen:e.state.sliderScreen,handleSliderChange:e.handleSliderChange}),Object(r.jsx)(b,{title:e.state.partners[0]&&e.state.partners[0].firstName,image:e.state.partners[0]&&e.state.partners[0].photo,roundImage:!0,children:Object(r.jsx)("p",{children:"Now I can put anything I want in here"})}),Object(r.jsx)(b,{title:"Computer McComputerface",image:"/users/chelsea.jpg",localImage:!0,children:Object(r.jsx)("p",{children:"Now I can put anything I want in here here here here here here here here here here here here here here here here here here here here here here here here here here hello here here here here here here here here here here here here here here here here here here"})}),Object(r.jsx)(u,{text:"hello world",color:"blue",close:!0},1),e.state.popup?Object(r.jsxs)(O,{buttonText:"I am button",text:"i am description",placeholder:"i am placeholder",title:"poppy",children:[Object(r.jsx)("p",{children:"hello"}),Object(r.jsx)("p",{children:"hello hello hello v hello vvhellohellohello hello hello hello hello hello hello hello hello v"}),Object(r.jsx)("p",{children:"hello"}),Object(r.jsx)("p",{children:"hello"}),Object(r.jsx)("p",{children:"hello"})]}):null,e.state.infocard?Object(r.jsx)(x,{buttonText:"I am button",title:"I am infocard",children:Object(r.jsx)("p",{children:"HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD"})}):null,Object(r.jsx)(v,{image:"/flags/canada.png"})]})};return this.state.dark?Object(r.jsx)(g,{children:Object(r.jsx)(t,{})}):Object(r.jsx)(t,{})}}]),n}(i.a.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),i(e),l(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.fd6a1813.chunk.js.map