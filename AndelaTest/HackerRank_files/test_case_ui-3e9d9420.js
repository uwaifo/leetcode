(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{BZTV:function(e,t,n){},FDph:function(e,t,n){n("Z2Ku"),e.exports=n("g3g5").Array.includes},TP7S:function(e,t){e.exports=function(e){return void 0===e}},dvg7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=n("cDcd"),o=i(r),u=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handle=function(e){if("touchend"===e.type&&(n.isTouch=!0),"click"!==e.type||!n.isTouch){var t=n.props.onClickOutside,s=n.container;s&&!s.contains(e.target)&&t(e)}},n.getContainer=n.getContainer.bind(n),n.isTouch=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"getContainer",value:function(e){this.container=e}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onClickOutside,function(e,t){var n={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n}(e,["children","onClickOutside"]));return o.default.createElement("div",s({},n,{ref:this.getContainer}),t)}},{key:"componentDidMount",value:function(){document.addEventListener("touchend",this.handle,!0),document.addEventListener("click",this.handle,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchend",this.handle,!0),document.removeEventListener("click",this.handle,!0)}}]),t}();c.propTypes={onClickOutside:u.default.func.isRequired},t.default=c},mGWK:function(e,t,n){"use strict";var s=n("XKFU"),a=n("aCFj"),r=n("RYi7"),o=n("ne8i"),u=[].lastIndexOf,i=!!u&&1/[1].lastIndexOf(1,-0)<0;s(s.P+s.F*(i||!n("LyE8")(u)),"Array",{lastIndexOf:function(e){if(i)return u.apply(this,arguments)||0;var t=a(this),n=o(t.length),s=n-1;for(arguments.length>1&&(s=Math.min(s,r(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in t&&t[s]===e)return s||0;return-1}})},sOUn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return D});var s=n("pVnL"),a=n.n(s),r=(n("2Spj"),n("lwsE")),o=n.n(r),u=n("W8MJ"),i=n.n(u),c=n("a1gu"),l=n.n(c),p=n("Nsbk"),d=n.n(p),f=n("PJYZ"),m=n.n(f),h=n("7W2i"),v=n.n(h),y=n("lSNA"),g=n.n(y),b=n("MVZn"),T=n.n(b),C=(n("rGqo"),n("yt8O"),n("RW0V"),n("bWfx"),n("cDcd")),O=n.n(C),_=n("Wwog"),k=n("f0wr"),w=n("OEX3"),E=n("keBQ"),j=n("Ojj1"),x=n("bSd7");n("BZTV");function R(e){var t=e.message,n=e.type,s=e.children,a=e.isCustomTestcase,r=e.t,o=e.outputReceived,u=void 0===o||o,i="d-flex align-items-center test-run-status test-run-status--".concat(n),c="error"!==n&&!a&&u;return O.a.createElement("div",{className:i},O.a.createElement("h3",{"aria-live":"polite",className:"test-run-status__message"},c&&O.a.createElement("span",{className:"test-run-status__compile"}," ",r("live_status.successful_compile")," "),O.a.createElement("span",{className:"test-run-status__info"},t)),s)}function S(e){var t=e.compileCommand,n=e.compileMessage,s=e.t,a=e.questionType,r=Object(j.g)(e,a,s),o=r.status,u=r.type;return O.a.createElement(C.Fragment,null,O.a.createElement(R,{key:"status",type:u,message:o}),O.a.createElement("div",{key:"error",className:"d-flex flex-column test-error"},[{i18nKey:"live_status.compilation_command",error:t},{i18nKey:"live_status.compilation_message",error:n}].map(function(e){var t=e.i18nKey,n=e.error;return O.a.createElement("div",{key:t,className:"test-error__server-message"},O.a.createElement("p",{className:"test-error__label"},s("live_status.compilation_command")),O.a.createElement("pre",null,O.a.createElement("code",null,n)))})))}function U(e,t){return e?t&&Object.keys(t).length?e.testcases.map(function(e,n){var s=t["".concat(n)];if(!s)return e;var a=s.expectedOutput,r=s.expectedOutputUrl,o=s.inputUrl,u=s.stdIn,i=s.stdOut;return T()({},e,{purchased:!0,expectedOutputUrl:r,expectedOutput:a,inputUrl:o,stdIn:u,stdOut:i})}):e.testcases:[]}var D=function(e){function t(e){var n;return o()(this,t),n=l()(this,d()(t).call(this,e)),g()(m()(n),"toast",void 0),g()(m()(n),"getTestCases",void 0),g()(m()(n),"runAllTestCases",void 0),g()(m()(n),"handleDownload",function(e,t){var s=n.props.outputData,a=n.getTestCases(s,n.state);if(a[t]){var r,o=a[t];switch(e){case"stdin":r=o.inputUrl;break;case"expected-output":r=o.expectedOutputUrl;break;default:return}r&&window.open(r)}}),g()(m()(n),"handleUnlock",function(e){var t=n.props,s=t.t,a=t.questionId,r=t.attemptId,o=t.outputData,u=t.unlockTestCase;o&&u({attemptId:r,questionId:a,testCaseIndex:e,compileTestId:o.compileTestId}).then(function(t){n.setState(g()({},e,t))}).catch(function(){var e=s("testcase.reveal_error");n.toast?n.toast.update({message:e}):(n.toast=new k.a({message:e,type:"error_strong"}),n.toast.show())})}),g()(m()(n),"handleRunTestCase",function(e){var t=n.props.outputData,s=n.getTestCases(t,n.state);if(-1===e)n.props.handleRunTestCase();else{var a=s[e].stdIn;n.props.handleRunTestCase(a)}}),n.getTestCases=Object(_.a)(U),n.runAllTestCases=n.handleRunTestCase.bind(m()(n),-1),n}return v()(t,e),i()(t,[{key:"renderStatus",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.props,r=a.t,o=a.isCustomTestcase;return O.a.createElement(R,{key:"status",type:e,message:t,t:r,isCustomTestcase:o,outputReceived:s},!n&&o&&O.a.createElement(w.c,{className:"test-run-status__all","data-automation":"compile-field-label-run-test",onClick:this.runAllTestCases},r("actions.run_all_tests")))}},{key:"renderErrorComponent",value:function(){var e=this.props,t=e.t,n=e.questionType,s=e.outputData;return O.a.createElement(S,a()({t:t,questionType:n},s))}},{key:"render",value:function(){var e=this.props,t=e.outputData,n=e.questionType,s=e.liveStatus,r=e.isCustomTestcase,o=e.t,u=e.enableHiddenTestcaseReveal,i=e.companyName;if(!(s&&Object.keys(s).length||t)){var c=n===x.b.DATABASE?o("actions.run_query"):o("actions.run");return this.renderStatus("warning",o("empty_tab_state",{action:c}),!0,!1)}if(s&&1===Object.keys(s).length&&s.liveMessage)return this.renderStatus("error",s.liveMessage);var l=!1,p=!1,d=null;if(t){if(t.statusCode===x.i&&(l=!0,p="number"==typeof t.result&&t.result>0),p)return this.renderErrorComponent();if(l){var f=Object(j.g)(t,n,o),m=f.status,h=f.type;d=this.renderStatus(h,m)}}return O.a.createElement(C.Fragment,null,d,O.a.createElement(E.a,a()({key:"result",liveStatus:s,isCustomTestcase:r,shouldUnlockHiddenTestcase:u,unlockTestcaseMessage:o("testcase.hidden",{companyName:i}),unlockButtonText:o("testcase.reveal"),handleDownload:this.handleDownload,handleUnlock:this.handleUnlock},t,{testcases:this.getTestCases(t,this.state),showRunTestCaseButton:!0,handleRunTestCase:this.handleRunTestCase,showLineNumbers:!0})))}}]),t}(C.PureComponent)},sUjY:function(e,t,n){n("L9s1"),e.exports=n("g3g5").String.includes}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/test_case_ui-3e9d9420.js.map