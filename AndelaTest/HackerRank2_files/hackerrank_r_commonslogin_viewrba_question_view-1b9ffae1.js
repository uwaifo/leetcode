(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EOcb:function(t,e,n){"use strict";n.d(e,"i",function(){return c}),n.d(e,"n",function(){return i}),n.d(e,"o",function(){return d}),n.d(e,"q",function(){return a}),n.d(e,"p",function(){return f}),n.d(e,"l",function(){return s}),n.d(e,"m",function(){return b}),n.d(e,"k",function(){return I}),n.d(e,"j",function(){return O}),n.d(e,"g",function(){return p}),n.d(e,"h",function(){return l}),n.d(e,"f",function(){return E}),n.d(e,"a",function(){return j}),n.d(e,"d",function(){return m}),n.d(e,"e",function(){return _}),n.d(e,"c",function(){return T}),n.d(e,"r",function(){return g}),n.d(e,"b",function(){return k});var r,u=n("lSNA"),o=n.n(u),c=(n("DW2E"),Object.freeze({BOOTING:"booting",BOOTED:"booted",FAILED:"failed"})),i=Object.freeze({TAB_TEST_OUTPUT:"tab_test_output",TAB_TEST_HELP:"tab_test_help",TAB_NONE:"tab_none",BUTTON_SWITCH_ONLINE_IDE:"button_switch_online_ide",BUTTON_SWITCH_OFFLINE_IDE:"button_switch_offline_ide"}),d=Object.freeze({tab_test_output:"tab-test-output",tab_test_help:"tab-test-help",button_switch_online_ide:"button-switch-online-ide",button_switch_offline_ide:"button-switch-offline-ide"}),a=Object.freeze({QUESTION:"question",TEST:"test_result"}),f=Object.freeze({NO_CHOICE:"no-choice",OFFLINE:"offline",ONLINE:"online"}),s=Object.freeze({REBOOT_IDE:"showRebootIDEDialog",RESET_PROJECT:"showResetProjectDialog"}),b="keyCloakUserMap",I=Object.freeze({CHE6:"che6",CHE7:"che7"}),O="Che7",p={ALL_FAILED:-1,NONE:0,PROVISIONING:1,IMPORTING:2,READY:3},l=(r={},o()(r,p.PROVISIONING,{label:"provisioning.label",error:"provisioning.error"}),o()(r,p.IMPORTING,{label:"importing.label",error:"importing.error"}),o()(r,p.READY,{label:"ready.label",error:"ready.error"}),r),E={ERROR:{IMPORTING:3,PROVISIONING:3},STARTED:0,IN_PROGRESS:1,SUCCESS:2,FAILURE:3},j={SAVE_CODE:"Auto save changes",RUN_TESTS:"Auto save changes before Run Tests",SUBMIT_CODE:"Auto save changes before Submit"},m=20,_=2,T=5e3,g="0",k=18e4/T},Pg3g:function(t,e,n){"use strict";n.d(e,"g",function(){return d}),n.d(e,"i",function(){return a}),n.d(e,"j",function(){return f}),n.d(e,"h",function(){return s}),n.d(e,"f",function(){return b}),n.d(e,"e",function(){return I}),n.d(e,"k",function(){return O}),n.d(e,"a",function(){return p}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return E}),n.d(e,"b",function(){return j});n("LK8F"),n("KKXr"),n("Z2Ku"),n("L9s1");var r=n("qPyV"),u=n.n(r),o=n("bSd7"),c=n("EOcb"),i=n("JoEb");function d(t){return t===o.c.DATASCIENCE}function a(t){return t===c.p.OFFLINE}function f(t){return t===c.p.ONLINE}function s(t){return t===c.p.NO_CHOICE}function b(t){return t===c.k.CHE7}function I(t,e){var n=Object(i.e)(t,e),r=sessionStorage.getItem(n);return[c.p.OFFLINE,c.p.ONLINE].includes(r)?r:c.p.NO_CHOICE}function O(t,e,n){var r=Object(i.e)(t,e);sessionStorage.setItem(r,n)}function p(){return".".concat(window.location.hostname.split(".").slice(-2).join("."),";")}function l(t,e){return u()((t||[]).concat(e),"time")}function E(t){if(!Array.isArray(t))return"";var e=t.length-1;return e>=0?t[e].time:""}function j(t,e){var n=t.dockerInfo,r=void 0===n?{}:n;return e?r[e]:r||{}}},bqtk:function(t,e,n){"use strict";n.d(e,"f",function(){return a}),n.d(e,"l",function(){return f}),n.d(e,"b",function(){return s}),n.d(e,"i",function(){return b}),n.d(e,"h",function(){return I}),n.d(e,"n",function(){return O}),n.d(e,"k",function(){return p}),n.d(e,"g",function(){return l}),n.d(e,"j",function(){return E}),n.d(e,"c",function(){return j}),n.d(e,"m",function(){return T}),n.d(e,"e",function(){return g}),n.d(e,"d",function(){return k}),n.d(e,"a",function(){return S});n("eM6i"),n("KKXr"),n("bWfx"),n("VRzm");var r=n("ZaSc"),u=n("7fp8"),o=n("Pg3g"),c=n("AJT6"),i=n("EOcb");function d(t,e){return Object(o.f)(t)?"".concat(e).concat(i.j):e}function a(t,e){return function(n){return Object(r.e)({url:Object(u.b)("makeAttempt",{testId:t}),ajaxServerConf:e,success:function(t){t.success&&n({type:c.a.TEST.MAKE_ATTEMPT})}})}}function f(t,e,n){return Object(r.e)({url:Object(u.b)("retryPrelogin",{testId:t}),data:e,ajaxServerConf:n})}function s(t){return Object(r.b)({noCsrf:!0,url:Object(u.b)("gitLog",{url:t})})}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit_message:i.a.SAVE_CODE};return Object(r.d)({url:Object(u.b)("gitPush",{attemptId:t,workspaceUniqueId:e}),data:n})}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit_message:i.a.SAVE_CODE};return Object(r.d)({url:Object(u.b)("gitPull",{attemptId:t,workspaceUniqueId:e}),data:n})}function O(t,e,n){return Object(r.f)({url:Object(u.b)("offlineStatus",{attemptId:t,dockerId:e}),data:{offline:n?"true":"false"}})}function p(t,e){return Object(r.d)({url:Object(u.b)("resetUrl",{attemptId:t,workspaceUniqueId:e})})}function l(t){var e=t.attemptId,n=t.questionId,c=t.workspaceUniqueId,i=t.backend,a={attemptId:e,questionId:n};return Object(o.f)(i)&&(a={workspaceUniqueId:c}),Object(r.d)({url:Object(u.b)(d(i,"bootPrepare"),a)})}function E(t){var e=t.attemptId,n=t.questionId,c=t.workspaceUniqueId,i=t.backend,a={attemptId:e,questionId:n},f=t.data;return Object(o.f)(i)&&(a={workspaceUniqueId:c,questionId:n},f={}),Object(r.d)({url:Object(u.b)(d(i,"reboot"),a),data:f})}function j(t){var e=t.attemptId,n=t.questionId,c=t.workspaceUniqueId,i=t.backend,a={attemptId:e,questionId:n};return Object(o.f)(i)&&(a={workspaceUniqueId:c,questionId:n}),Object(r.b)({url:Object(u.b)(d(i,"bootStatus"),a)})}function m(t,e,n){return Object(r.d)({url:Object(u.b)("runTest",{attemptId:t,dockerId:e}),query:{type:"test"},data:{agent_endpoint:n}})}function _(t){return Object(r.d)({url:Object(u.b)("runTestChe7",{workspaceUniqueId:t}),data:{type:"test"}}).then(function(t){return{pid:t.pid,commandLine:t.command}})}function T(t){var e=t.attemptId,n=t.workspaceUniqueId,r=t.dockerId,u=t.backend,c=void 0===u?i.k.CHE6:u,d=t.agentEndpoint,a=t.data,f=void 0===a?{commit_message:i.a.RUN_TESTS}:a;return N.pushCodeToServer(e,n,f).then(function(t){return t.exitCode===i.r?Object(o.f)(c)?_(n):m(e,r,d):Promise.reject({message:JSON.stringify({stderr:t.log})})})}function g(t){var e=t.attemptId,n=t.workspaceUniqueId,c=t.processId,a=t.backend,f=void 0===a?i.k.CHE6:a,s={agent_endpoint:t.agentEndpoint},b={attemptId:e,workspaceUniqueId:n,processId:c};return Object(o.f)(f)&&(s={pid:c},b={workspaceUniqueId:n}),Object(r.b)({url:Object(u.b)(d(f,"runTestPid"),b),data:s})}function k(t){var e=t.attemptId,n=t.workspaceUniqueId,c=t.processId,i=t.backend,a={agent_endpoint:t.agentEndpoint,from:t.fromTimestamp},f={attemptId:e,workspaceUniqueId:n,processId:c};return Object(o.f)(i)&&(a={pid:c},f={workspaceUniqueId:n}),Object(r.b)({url:Object(u.b)(d(i,"runTestLogs"),f),data:a,headers:Object(o.f)(i)?{Accept:"text/html"}:{}}).then(function(t){return Object(o.f)(i)?t.split("\n").map(function(t,e){return{kind:0,time:Date.now()+e,text:t}}):t})}function S(t,e,n){return Object(r.a)({url:Object(u.b)("clearKeyCloak",{attemptId:t,username:n,context:e}),noCsrf:!0})}var N={pushCodeToServer:b,runTestChe6:m,runTestChe7:_,getEndpointForBackend:d}}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_commons~login_view~rba_question_view-1b9ffae1.js.map