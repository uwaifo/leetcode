(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"1aeH":function(e,t,n){},"6w5V":function(e,t,n){},KLSP:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var i=n("MVZn"),a=n.n(i),o=(n("eM6i"),n("rGqo"),n("yt8O"),n("RW0V"),n("DNiP"),n("ZaSc")),r=n("7fp8"),s={QUESTION_LIST_VIEW:2,QUESTION_VIEW:3,FIRST_TYPE:5,BLUR:7,FOCUS:8,PASTE:9},c={questionId:"qid"};function l(e){var t=[],n=Object(r.b)("logActivity",{attemptId:e});function i(e,i,r){var s={eid:e,inserttime:r?new Date(Date.now()-r):new Date};if(i){var l=function(e){return Object.keys(e).reduce(function(t,n){return c[n]?(t[c[n]]=e[n],t):t},{})}(i);s=a()({},l,s)}Object(o.e)({url:n,data:s,error:function(){t.push(s)}})}return i.getFailedEvents=function(){return t},i}},PsKZ:function(e,t,n){},Td56:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return o});n("f3/d");function i(e,t){return t.sectional&&t.currentSection!==e}function a(e){var t=e.section,n=e.index,i=e.showName,a=e.defaultLabel,r=void 0===a?"Section":a;return!o(e.currentSection)||i?t.name:"".concat(r," ").concat(n+1)}function o(e){return-1!==e}},WfZi:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var i=n("cDcd"),a=Object(i.createContext)(),o=a.Provider,r=a.Consumer},XcW5:function(e,t,n){"use strict";n.r(t);var i=n("cDcd"),a=n.n(i),o=n("TSYQ"),r=n.n(o),s=n("/MKj"),c=n("eHHv"),l=n("EfbJ"),u=n("viIQ"),m=(n("rGqo"),n("yt8O"),n("RW0V"),n("f3/d"),n("pVnL")),d=n.n(m),h=n("lwsE"),f=n.n(h),p=n("W8MJ"),g=n.n(p),v=n("a1gu"),b=n.n(v),T=n("Nsbk"),w=n.n(T),y=n("PJYZ"),S=n.n(y),C=n("7W2i"),E=n.n(C),I=n("lSNA"),_=n.n(I),D=n("9kay"),O=n("OEX3"),L=n("dN1q"),k=n("WfZi"),j=n("57B8"),P=n("MGin"),x=n("LD1s"),N=n("2Ica"),q=n("hF3m"),W=n("ayy4"),A=n("QgMK"),F=n("AGYi"),R=n("kV2S");n("PsKZ");var M=Object(c.a)(Object(D.c)(["testview"]),l.a,Object(W.a)("UserInfo can only be used inside TestLifecycle scope",k.a,"lifeCycleContext"))(function(e){var t=e.fullName,n=e.appUtil.params,i=e.t,o=e.lifeCycleContext,r=o.endTest,s=o.pageEventCategory;return a.a.createElement("nav",{className:"d-flex userinfo","aria-label":i("user.account")},a.a.createElement(x.a,{className:"userinfo__dropdown",closeHandleSelector:".userinfo__link"},a.a.createElement(N.a,{className:"align-items-center justify-content-center userinfo__handle"},a.a.createElement(O.b,d()({className:"align-items-center userinfo__name"},Object(F.a)({category:s,action:R.a.Click,label:R.c.ProfileSettings})),a.a.createElement("i",{className:"ui-icon-user userinfo__icon"}),a.a.createElement("span",null,t),a.a.createElement("i",{className:"ui-icon-arrow-down-filled userinfo__icon"}))),a.a.createElement(q.a,{className:"userinfo__options"},a.a.createElement("div",{className:"dropdown-menu pull-right"},a.a.createElement("ul",{className:"userinfo__list","aria-label":i("user.account")},a.a.createElement("li",null,a.a.createElement(P.Link,d()({className:"d-flex userinfo__link",to:Object(A.b)("/".concat(n.testId,"/instructions"))},Object(F.a)({category:s,action:R.a.Click,label:R.c.InstructionsSettings})),i("instructions.label"))),a.a.createElement("li",null,a.a.createElement(O.b,d()({role:"link",to:"",className:"userinfo__logout-btn",onClick:r},Object(F.a)({category:s,action:R.a.Click,label:R.c.SubmitAndLogOutSettings})),i("submitTest"))))))))}),U=n("Td56"),Q=n("6454"),V=(n("1aeH"),function(e){function t(){var e,n;f()(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=b()(this,(e=w()(t)).call.apply(e,[this].concat(a))),_()(S()(n),"state",{showTimeInfo:!1}),_()(S()(n),"toggleTimer",function(){var e=n.props,t=e.attemptId;(0,e.toggleTimer)(t)}),n}return E()(t,e),g()(t,[{key:"componentDidMount",value:function(){this.setState({showTimeInfo:!0})}},{key:"renderTimer",value:function(){var e=this.props,t=e.t,n=e.test.showTimer,o=e.currentSection,r=e.countdownContext,s=r.currentTimeLeft,c=r.approxTimeString,l=r.bypassTimerHide,u="testend.done",m="remainingTime";return Object(U.c)(o)&&(m="remainingTimeInSection",u="testend.sectionDone"),s<=0?a.a.createElement("span",{className:"main-header__info-text"},t(u)):n||l?a.a.createElement(i.Fragment,null,t(m)," ",a.a.createElement("strong",{className:"main-header__timer"},c)):null}},{key:"renderRemainingTime",value:function(){var e=this.props,t=e.test,n=e.t,i=e.countdownContext,o=i.fullTimeString,r=i.bypassTimerHide,s=e.lifeCycleContext.pageEventCategory;return a.a.createElement("div",{className:"main-header__test-time","data-balloon":o,"data-balloon-pos":"down"},this.renderTimer(),!r&&a.a.createElement(O.b,d()({className:"main-header__toggle-timer","aria-label":t.showTimer?n("timer.hideFull"):n("timer.showFull"),onClick:this.toggleTimer},Object(F.a)({category:s,action:R.a.Click,label:t.showTimer?R.c.HideRemainingTime:R.c.ShowRemainingTime})),t.showTimer?n("timer.hide"):n("timer.show"),a.a.createElement("i",{className:"ui-icon-timer-visibility"})))}},{key:"render",value:function(){var e=this.state.showTimeInfo,t=this.props,n=t.test,i=t.user,o=t.t,r=t.totalSubmissions,s=t.totalQuestions,c=Object(A.b)("/".concat(n.uniqueId,"/questions"));return a.a.createElement("header",{className:"d-flex flex-column main-header"},a.a.createElement("nav",{className:"d-flex align-items-center main-header__nav"},a.a.createElement("div",{className:"justify-content-center"},a.a.createElement("a",{href:c},a.a.createElement(j.a,{className:"d-flex main-header__logo",logoUrl:n.logo,alt:n.name}))),a.a.createElement("div",{className:"d-flex align-items-center main-header__test"},a.a.createElement("h1",{className:"main-header__title"},n.name),a.a.createElement("div",{className:"d-flex align-items-center main-header__test-info"},e&&this.renderRemainingTime(),a.a.createElement("div",{className:"main-header__test-attempts"},o("questions.attempted")," ",a.a.createElement("strong",{className:"main-header__info-text"},r," / ",s)))),a.a.createElement(M,{email:i.email,fullName:i.fullName})))}}]),t}(i.PureComponent));_()(V,"defaultProps",{showTimer:!0});var H=Object(c.a)(Object(s.connect)(function(e){var t=e.test,n=e.user,i=e.candidate,a=i.attempt,o=i.sections,r=i.questions;return{test:t,user:n,totalQuestions:r.ids.length,totalSubmissions:Object.keys(r.submissions).length,currentSection:o.currentSection,attemptId:a.id}},function(e){return{toggleTimer:function(t){return e(Object(Q.toggleTimer)(t))}}}),Object(D.c)(["testview"]),Object(W.a)("Header can only be used inside TestCountdown scope",L.a,"countdownContext"),Object(W.a)("Header can only be used inside TestLifecycle scope",k.a,"lifeCycleContext"))(V),B=(n("bWfx"),n("DNiP"),n("GEYT")),G=n.n(B),K=(n("6w5V"),function(e){function t(e){var n;return f()(this,t),n=b()(this,w()(t).call(this,e)),_()(S()(n),"questionRefs",void 0),_()(S()(n),"state",{hovered:!1,showTimeInfo:!1}),_()(S()(n),"toggleTimer",function(){var e=n.props,t=e.countdownContext.bypassTimerHide,i=e.attemptId,a=e.toggleTimer;t||(n.setState({hovered:!1}),a(i))}),_()(S()(n),"onTimerMouseOver",function(){n.state.hovered||n.setState({hovered:!0})}),_()(S()(n),"onTimerMouseOut",function(){n.setState({hovered:!1})}),n.questionRefs=e.questions.ids.reduce(function(e,t){return e[t]=a.a.createRef(),e},{}),n}return E()(t,e),g()(t,[{key:"componentDidMount",value:function(){this.setState({showTimeInfo:!0}),this.scrollQuestionInView()}},{key:"componentDidUpdate",value:function(e){var t=e.appUtil.params.questionId;this.props.appUtil.params.questionId!==t&&this.scrollQuestionInView()}},{key:"scrollQuestionInView",value:function(){var e=this.props.appUtil.params.questionId,t=this.questionRefs[e];t&&t.current&&G.a(t.current,{time:0,align:{top:.5}})}},{key:"renderTabItem",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.props,o=i.testId,s=i.t,c=i.questions,l=c.ids,u=c.submissions,m=c.disabledQuestionMap,d=this.questionRefs;return l.slice(e,t).map(function(t,i){var c=!!u[t],l=n||m[t],h=r()("d-block question-tab__list-item",{"question-tab__list-item--answered":c,"question-tab__list-item--disabled":l}),f=e+i+1,p=s(c?"questions.modifySubmissionAria":"questions.solveQuestionAria",{index:f});return l?a.a.createElement("li",{key:t,ref:d[t],className:h},f):a.a.createElement("li",{key:t,ref:d[t]},a.a.createElement(P.Link,{className:h,activeClassName:"question-tab__list-item--active",to:Object(A.b)("/".concat(o,"/questions/").concat(t)),"aria-label":p},f))})}},{key:"renderSectionTabItems",value:function(){var e=this,t=this.props.sections,n=0;return t.items.map(function(o,r){var s=o.questions,c=n,l=n+s,u=e.renderTabItem(c,l,Object(U.b)(r+1,t));return n+=s,a.a.createElement(i.Fragment,{key:r},u,a.a.createElement("li",{className:"question-tab__separator"}))})}},{key:"renderQuestionTabItems",value:function(){var e=this.props.questions;return this.renderTabItem(0,e.ids.length)}},{key:"renderTabItems",value:function(){return this.props.sections.items.length?this.renderSectionTabItems():this.renderQuestionTabItems()}},{key:"renderTimer",value:function(){var e=this.state,t=e.hovered;if(!e.showTimeInfo)return null;var n,i=this.props,o=i.sections.currentSection,r=i.countdownContext,s=r.currentTimeLeft,c=r.shorterTimeString,l=r.bypassTimerHide,u=i.t,m=i.showTimer,d=Object(U.c)(o);return n=s<=0?u(d?"testend.sectionDone":"testend.done"):l?u("timer.withLabel",{timeLeft:c}):m?t?u("timer.hideTimer"):u("timer.withLabel",{timeLeft:c}):u("timer.show"),a.a.createElement(O.b,{className:"question-tab__timer-toggle-btn",onClick:this.toggleTimer,onMouseOver:this.onTimerMouseOver,onMouseOut:this.onTimerMouseOut,onFocus:this.onTimerMouseOver,onBlur:this.onTimerMouseOut},n)}},{key:"render",value:function(){var e=this.props,t=e.testId,n=e.showTimerTab,i=e.t,o=e.countdownContext.fullTimeString;return a.a.createElement("div",{className:"d-flex question-tab"},a.a.createElement("ul",{className:"question-tab__list"},n&&a.a.createElement("li",{className:"d-flex flex-column align-items-center justify-content-center question-tab__timer","data-balloon":i("timer.withLabel",{timeLeft:o}),"data-balloon-pos":"right"},this.renderTimer()),a.a.createElement("li",null,a.a.createElement(P.Link,{className:"d-block question-tab__list-item",activeClassName:"question-tab__list-item--active",onlyActiveOnIndex:!0,to:Object(A.b)("/".concat(t,"/questions")),title:i("questions.listLabel")},i("common:label.all"))),a.a.createElement("li",null,a.a.createElement(P.Link,{className:"d-block question-tab__list-item",activeClassName:"question-tab__list-item--active",to:Object(A.b)("/".concat(t,"/instructions")),"aria-label":i("common:instructions.view")},a.a.createElement("i",{className:"ui-icon-info question-tab__list-item-icon"}))),a.a.createElement("li",{className:"question-tab__separator"})),a.a.createElement("ul",{className:"question-tab__list question-tab__list--scrollable"},this.renderTabItems()))}}]),t}(i.PureComponent)),Z=Object(s.connect)(function(e){var t=e.candidate,n=t.sections,i=t.questions,a=t.attempt,o=e.test;return{sections:n,questions:i,testId:o.uniqueId,showTimer:o.showTimer,attemptId:a.id}},function(e){return{toggleTimer:function(t){return e(Object(Q.toggleTimer)(t))}}}),J=Object(c.a)(Z,Object(D.c)(["testview","common"]),l.a,Object(W.a)("Question Tab can only be used inside TestCountdown scope",L.a,"countdownContext"))(K),z=n("5FRD"),Y=n("SiKo"),X=n("f4Vd"),$=n("MVZn"),ee=n.n($),te=n("oRS0"),ne=n("cSN9"),ie=n("g2mX"),ae=n("t50E"),oe=n("MrcO"),re=n("JoEb"),se=n("tX8B"),ce=n("sSFG"),le=n("ADy/"),ue=n("oaCn"),me=(n("tHjC"),function(e){function t(e){var n;f()(this,t),n=b()(this,w()(t).call(this,e)),_()(S()(n),"counter",void 0),_()(S()(n),"getReadableTime",void 0),_()(S()(n),"getReadableShortTime",void 0),_()(S()(n),"webcamRef",Object(i.createRef)()),_()(S()(n),"lastSnapSignature",""),_()(S()(n),"cameraAttachTimeout",void 0),_()(S()(n),"showModal",function(){n.props.webcamContext.webcamStatus===ue.b.CHECKING&&n.setState({showWebcamDialog:!0,noCamFeed:!1})}),_()(S()(n),"reattachCamera",function(){n.setState({showWebcamDialog:!1,noCamFeed:!1})}),_()(S()(n),"timerTickListener",function(e){var t=Object(ie.a)(e),i=n.getReadableTime(t),a={fullTimeString:i,approxTimeString:i,bypassTimerHide:!0,currentTimeLeft:e,shorterTimeString:""},o=!0;e>ce.m&&(a.bypassTimerHide=!1,a.approxTimeString=n.getReadableTime(t,!0),o=!1),a.shorterTimeString=n.getReadableShortTime(t,o),n.setState(a),(e+ce.q)%ce.h==0&&n.snapImageAndSave()});var a=e.t;return n.state={bypassTimerHide:!1,approxTimeString:"",shorterTimeString:"",fullTimeString:"",currentTimeLeft:n.getTimeLeft(),showWebcamDialog:!1,noCamFeed:!1},n.getReadableTime=Object(se.b)(a),n.getReadableShortTime=Object(se.a)(a),n}return E()(t,e),g()(t,[{key:"componentDidMount",value:function(){this.setInitialTimeLeft(),this.adjustTimerVisibility(),this.createCounter()}},{key:"componentDidUpdate",value:function(e,t){var n=e.sections,i=e.attempt,a=e.webcamContext,o=t.showWebcamDialog,r=this.props,s=r.sections,c=r.attempt;this.attachWebcam(a,o),s.currentSection===n.currentSection&&i.timeLeft===c.timeLeft||(this.counter.dispose(),this.setInitialTimeLeft(),this.createCounter())}},{key:"componentWillUnmount",value:function(){var e=this.props.webcamContext.webcamLib;e&&e.reset(),this.counter.dispose(),this.counter=null,clearTimeout(this.cameraAttachTimeout)}},{key:"attachWebcam",value:function(e,t){var n=this.props,i=n.appUtil.assetPath,a=n.webcamContext,o=n.enableProctoring,r=a.webcamLib,s=a.webcamStatus,c=a.loadStatus;if(o){if(a!==e){var l=this.state.showWebcamDialog;s!==e.webcamStatus&&s===ue.b.FOUND&&l?this.setState({showWebcamDialog:!1,noCamFeed:!1}):l||s!==ue.b.UNAVAILABLE&&s!==ue.b.DENIED?(c!==e.loadStatus||!l&&t)&&r&&this.webcamRef.current&&(r.set(ee()({},ue.a,{swfURL:i("webcam.swf")})),r.attach(this.webcamRef.current),this.cameraAttachTimeout=setTimeout(this.showModal,1e3*ce.a)):this.setState({showWebcamDialog:!0,noCamFeed:!1})}}else r&&r.reset()}},{key:"createCounter",value:function(){this.counter=new ae.a(this.getTimeLeft()),this.counter.addListener(this.timerTickListener)}},{key:"setInitialTimeLeft",value:function(){var e=this.getTimeLeft(),t=Object(ie.a)(e),n=e<ce.m,i=this.getReadableTime(t),a=n?i:this.getReadableTime(t,!0),o=this.getReadableShortTime(t,n);this.setState({bypassTimerHide:n,fullTimeString:i,approxTimeString:a,currentTimeLeft:e,shorterTimeString:o})}},{key:"snapImageAndSave",value:function(){var e=this,t=this.state.noCamFeed,n=this.props,i=n.enableProctoring,a=n.webcamContext,o=a.loadStatus,r=a.webcamLib,s=a.webcamStatus,c=n.saveWebcamSnap,l=n.attempt;i&&!t&&o===le.a.LOADED&&s===ue.b.FOUND&&r&&r.snap(function(t){var n=t.length>=1600?"".concat(t.length,"-").concat(t[800],"-").concat(t[1200],"-").concat(t[1500],"-").concat(t[1600]):"signature";n!==e.lastSnapSignature?(e.lastSnapSignature=n,c(l.id,t)):e.setState({showWebcamDialog:!0,noCamFeed:!0})})}},{key:"adjustTimerVisibility",value:function(){var e=this.props,t=e.attempt,n=e.setTimerVisibility,i=oe.a.get(Object(re.g)(t.id));n("boolean"!=typeof i||i)}},{key:"getTimeLeft",value:function(){return this.props.sections.currentSectionTimeLeft}},{key:"renderCamPermissionDialog",value:function(){var e=this.state,t=e.showWebcamDialog,n=e.noCamFeed;if(!t)return null;var i=this.props.webcamContext;return a.a.createElement(ne.a,{webcamContext:i,onCameraFound:this.reattachCamera,noCamFeed:n})}},{key:"renderWebcamNode",value:function(){return this.props.enableProctoring?a.a.createElement(i.Fragment,null,a.a.createElement("div",{className:"webcam-node",ref:this.webcamRef}),this.renderCamPermissionDialog()):null}},{key:"render",value:function(){return a.a.createElement(L.b,{value:this.state},this.renderWebcamNode(),this.props.children)}}]),t}(a.a.PureComponent)),de=Object(c.a)(Object(s.connect)(function(e){var t=e.candidate;return{attempt:t.attempt,sections:t.sections}},function(e){return{setTimerVisibility:function(t){return e(Object(Q.setTimerVisibility)(t))},saveWebcamSnap:function(t,n){return e(Object(Q.saveWebcamSnap)(t,n))}}}),Object(D.c)(["common"]),Object(W.a)("TestCoundown should be used inside WebcamWrapper",te.a,"webcamContext"),l.a)(me),he=(n("pIFo"),n("rvZc"),n("2Spj"),n("Wwog")),fe=n("f0wr"),pe=n("ovno"),ge=n("g+WX"),ve=n("QILm"),be=n.n(ve),Te=n("vN+2"),we=n.n(Te),ye=function(e){function t(){var e,n;f()(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=b()(this,(e=w()(t)).call.apply(e,[this].concat(a))),_()(S()(n),"state",{show:!0}),_()(S()(n),"timeoutID",null),_()(S()(n),"onTimeout",function(){n.setState({show:!1}),n.props.onTimeout()}),n}return E()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this.props.timeout;this.timeoutID=setTimeout(this.onTimeout,1e3*e)}},{key:"componentWillUnmount",value:function(){this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=null)}},{key:"render",value:function(){if(!this.state.show)return null;var e=this.props,t=(e.timeout,e.onTimeout),n=e.children,i=be()(e,["timeout","onTimeout","children"]);return a.a.createElement(pe.a,d()({},i,{onConfirm:t}),n)}}]),t}(i.PureComponent);_()(ye,"defaultProps",{onTimeout:we.a});var Se=n("KLSP"),Ce=n("QfwD"),Ee=n("214P"),Ie=function(e){function t(){var e,n;f()(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=b()(this,(e=w()(t)).call.apply(e,[this].concat(a))),_()(S()(n),"saveAnswerErrorToast",void 0),_()(S()(n),"state",{saveLastChanges:!1,savingCurrentQuestion:!1,showSectionCloseDialog:!1,showLogoutConfirmationDialog:!1,showStateChangeDialog:!1,logoutInProgress:!1,showTestEndDialog:!1}),_()(S()(n),"firstLoad",!0),_()(S()(n),"isWindowBlurred",!1),_()(S()(n),"informOnFocus",!1),_()(S()(n),"fastPingStarted",!1),_()(S()(n),"currentQuestionData",null),_()(S()(n),"pingIntervalID",null),_()(S()(n),"blurTimeoutID",null),_()(S()(n),"focusTimoutID",null),_()(S()(n),"activityLogger",void 0),_()(S()(n),"getContextValueMemoized",Object(he.a)(n.getContextValue.bind(S()(n)))),_()(S()(n),"updateSavingState",function(e){var t=n.props,i=t.t,a=t.attemptId;if(e.model&&e.model.id!==a){var o={type:"error_strong",message:i("questionview:save_answer_error"),duration:0,closable:!1};n.saveAnswerErrorToast?n.saveAnswerErrorToast.update():(n.saveAnswerErrorToast=new fe.a(o),n.saveAnswerErrorToast.show())}n.state.savingCurrentQuestion&&n.setState({savingCurrentQuestion:!1})}),_()(S()(n),"onWindowBlur",function(){n.isWindowBlurred=!0,n.props.monitorWindowActivity&&(n.blurTimeoutID=n.startActivityTimer(Se.a.BLUR))}),_()(S()(n),"onWindowFocus",function(){n.isWindowBlurred=!1,n.informOnFocus&&n.setState({showStateChangeDialog:!0}),n.informOnFocus=!1,n.props.monitorWindowActivity&&(n.focusTimoutID=n.startActivityTimer(Se.a.FOCUS))}),_()(S()(n),"confirmAndEndTest",n.updateDialog.bind(S()(n),"showLogoutConfirmationDialog",!0)),_()(S()(n),"handleForcedLogout",n.logoutFromTest.bind(S()(n),!0)),_()(S()(n),"handleLogoutCancel",n.updateDialog.bind(S()(n),"showLogoutConfirmationDialog",!1)),_()(S()(n),"handleLogoutConfirm",n.logoutFromTest.bind(S()(n),!1)),_()(S()(n),"handleTestStateUpdate",n.refreshTestState.bind(S()(n))),_()(S()(n),"handleSectionCloseConfirm",function(){n.informOnFocus=!1,n.setState({showSectionCloseDialog:!1,showStateChangeDialog:!1}),n.clearPingInterval(),n.redirectToQuestionListing()}),_()(S()(n),"handleLastChangeCheck",function(e){n.setState({saveLastChanges:e.target.checked})}),_()(S()(n),"cancelLogger",function(e){switch(e){case Ee.f:n.focusTimoutID&&(clearTimeout(n.focusTimoutID),n.focusTimoutID=null);break;case Ee.i:n.blurTimeoutID&&(clearTimeout(n.blurTimeoutID),n.blurTimeoutID=null)}}),_()(S()(n),"setCurrentQuestionData",function(e){n.currentQuestionData=e}),n}return E()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.attemptId,n=e.appUtil;this.activityLogger=Object(Se.b)(t),this.handleRouteChange(n),window.addEventListener("blur",this.onWindowBlur),window.addEventListener("focus",this.onWindowFocus)}},{key:"componentDidUpdate",value:function(e,t){var n=e.countdownContext.currentTimeLeft,i=e.currentSection,a=e.appUtil,o=this.props,r=o.attemptTimeLeft,s=o.sectionTimeLeft,c=o.attemptDone,l=o.countdownContext.currentTimeLeft,u=o.currentSection,m=o.appUtil,d=t.logoutInProgress,h=this.state,f=h.showSectionCloseDialog,p=h.showTestEndDialog,g=h.logoutInProgress;this.handleRouteChange(m,a),g||d||f||p||(this.checkWindowActivity(this.props,e),Object(Ce.g)(c,r)?this.updateDialog("showTestEndDialog",!0):u===i||l?0!==l||n===l?(s===r&&l<=ce.m&&n>ce.m&&this.showReminderToast(),this.startPing(l)):this.refreshAttemptState():this.updateDialog("showSectionCloseDialog",!0))}},{key:"componentWillUnmount",value:function(){this.clearPingInterval(),clearTimeout(this.blurTimeoutID),clearTimeout(this.focusTimoutID),window.removeEventListener(Ee.f,this.onWindowBlur),window.removeEventListener(Ee.i,this.onWindowFocus)}},{key:"handleRouteChange",value:function(e,t){var n,i,a=e.params,o=e.location.pathname;t&&(n=t.params.questionId,i=t.location.pathname);var r=a.questionId,s=a.testId;if(r&&r!==n)this.activityLogger(Se.a.QUESTION_VIEW,{questionId:r});else if(o!==i&&o.endsWith("".concat(s,"/questions"))){var c=this.props.loadTest;this.activityLogger(Se.a.QUESTION_LIST_VIEW),t&&c(a.testId)}}},{key:"checkWindowActivity",value:function(e,t){var n=e.attemptDone,i=e.currentSection,a=t.attemptDone,o=t.currentSection;!this.isWindowBlurred||n===a&&i===o||(this.informOnFocus=!0)}},{key:"refreshAttemptState",value:function(){var e=this.props,t=e.loadTest,n=e.appUtil.params.testId;this.fastPingStarted=!1,this.clearPingInterval(),t(n)}},{key:"showReminderToast",value:function(){var e=this.props.t;new fe.a({message:e("fiveMinuteReminder"),duration:10}).show()}},{key:"startPing",value:function(e){if(e<ce.e&&!this.fastPingStarted)this.startFastPing();else if(!this.pingIntervalID){var t=this.props.longPingInterval;this.startPingWith(t)}}},{key:"startPingWith",value:function(e){var t=this;this.pingIntervalID=setInterval(function(){t.saveAttemptState()},1e3*e)}},{key:"startFastPing",value:function(){this.fastPingStarted=!0,this.clearPingInterval(),this.startPingWith(ce.j)}},{key:"updateDialog",value:function(e,t){this.setState(_()({},e,t))}},{key:"saveAttemptState",value:function(){var e=this.props,t=e.attemptId,n=e.candidateFrontendMessage,i=e.saveAttemptState,a=e.appUtil.params.questionId,o=window.localStorage.jStorage,r=_()({pong:!0,storageSize:o?o.length:0},"clear-candidate-message",!1);if(a&&(r.to_save_code=this.currentQuestionData,r.qid=a,this.setState({savingCurrentQuestion:!0})),this.firstLoad&&n){var s="c-msg-".concat(n);!!oe.a.get(s)&&(r["clear-candidate-message"]=!0,oe.a.set(s,void 0))}return this.firstLoad=!1,i(t,r).then(this.updateSavingState,this.updateSavingState)}},{key:"redirectToQuestionListing",value:function(){var e=this.props.appUtil,t=e.router,n=e.params;this.updateDialog("showSectionCloseDialog",!1);var i="/".concat(n.testId,"/questions");t.replace(Object(A.b)(i))}},{key:"logoutFromTest",value:function(e){var t=this.state.saveLastChanges,n=this.props,i=n.endTest,a=n.appUtil,o=a.params,r=o.questionId,s=o.testId,c=a.router,l=n.t;this.setState({logoutInProgress:!0});var u={};u.how=e?"forced":"userclick",r&&(u.currentQuestion=r),t&&(u.submit_last=t),i(s,u).then(function(){var e="/".concat(s,"/feedback");c.replace(Object(A.b)(e))}).catch(function(){new fe.a({type:"error_strong",message:l("testdone.logoutError"),duration:10,onClose:function(){return window.location.reload()}}).show()})}},{key:"refreshTestState",value:function(){var e=this.props,t=e.appUtil.params.testId,n=e.loadTest;this.updateDialog("showStateChangeDialog",!1),n(t)}},{key:"clearPingInterval",value:function(){this.pingIntervalID&&(clearInterval(this.pingIntervalID),this.pingIntervalID=null)}},{key:"startActivityTimer",value:function(e){var n=this;return setTimeout(function(){n.activityLogger(e,void 0,t.LOG_DELAY_TIME)},t.LOG_DELAY_TIME)}},{key:"getContextValue",value:function(e,t,n){return{endTest:this.confirmAndEndTest,setQuestionData:this.setCurrentQuestionData,cancelLogger:this.cancelLogger,pageEventCategory:n?R.b.QuestionDetailsPage:R.b.QuestionListingPage,savingCurrentQuestion:e,activityLogger:t}}},{key:"renderSectionCloseDialog",value:function(){var e=this.props.t;return a.a.createElement(ye,{open:!0,size:"small",title:e("sections.closedTitle"),cancelText:"",confirmText:e("ok"),timeout:ce.p,onTimeout:this.handleSectionCloseConfirm},a.a.createElement("div",{role:"document"},e("sections.closedMessage")))}},{key:"renderStateChangeDialog",value:function(){var e=this.state,t=e.showTestEndDialog,n=e.showStateChangeDialog,i=e.showSectionCloseDialog;if(t||i||!n)return null;var o=this.props.t;return a.a.createElement(ye,{open:!0,size:"small",title:o("teststate.title"),cancelText:"",confirmText:o("ok"),timeout:ce.p,onTimeout:this.handleTestStateUpdate},a.a.createElement("div",{role:"document"},o("teststate.message")))}},{key:"renderLogoutConfirmationDialog",value:function(){var e=this.props.t,t=this.state.logoutInProgress;return a.a.createElement(pe.a,{title:e("testdone.confirm.title"),open:!0,size:"small",cancelText:e("testdone.confirm.cancelText"),confirmText:e("testdone.confirm.confirmText"),cancelBtnProps:Ee.a,confirmBtnProps:Ee.d,onClose:this.handleLogoutCancel,onCancel:this.handleLogoutCancel,onConfirm:this.handleLogoutConfirm,inProgress:t},a.a.createElement("div",{role:"document"},e("testdone.confirm.message")))}},{key:"renderTestEndDialog",value:function(){var e=this.state,t=e.logoutInProgress,n=e.saveLastChanges,i=this.props,o=i.t,r=i.submittable;return a.a.createElement(ye,{open:!0,size:"small",title:o("testend.title"),cancelText:"",confirmText:o("proceed"),timeout:ce.n,inProgress:t,onTimeout:this.handleForcedLogout},a.a.createElement("div",{role:"document"},o("testend.message"),r&&a.a.createElement("p",null,o("testend.submittableMessage"),a.a.createElement(ge.a,{label:o("testend.submittableConfirmMessage"),checked:n,onChange:this.handleLastChangeCheck}))))}},{key:"render",value:function(){var e=this.state,t=e.showSectionCloseDialog,n=e.showLogoutConfirmationDialog,o=e.showTestEndDialog,r=e.savingCurrentQuestion,s=this.props.appUtil.params.questionId;return a.a.createElement(k.b,{value:this.getContextValueMemoized(r,this.activityLogger,s)},a.a.createElement(i.Fragment,null,this.props.children,t&&this.renderSectionCloseDialog(),n&&this.renderLogoutConfirmationDialog(),this.renderStateChangeDialog(),o&&this.renderTestEndDialog()))}}]),t}(i.PureComponent);_()(Ie,"LOG_DELAY_TIME",2e3);var _e=Object(c.a)(Object(s.connect)(function(e){var t=e.candidate,n=t.attempt,i=t.sections,a=e.test,o=a.longPingInterval,r=a.monitorWindowActivity;return{attemptId:n.id,attemptDone:n.done,currentSection:i.currentSection,attemptTimeLeft:n.timeLeft,sectionTimeLeft:i.currentSectionTimeLeft,submittable:n.submittable,longPingInterval:o,monitorWindowActivity:r}},function(e){return{saveAttemptState:function(t,n){return e(Object(Q.saveAttemptState)(t,n))},endTest:function(t,n){return e(Object(Q.endTest)(t,n))},loadTest:function(t){return e(Object(Q.loadTest)(t))}}}),Object(D.c)(["testview","questionview"]),l.a,Object(W.a)("TestLifeCycle should be used inside TestCountdownConsumer",L.a,"countdownContext"))(Ie);n("biKL");function De(e){var t=e.loadOfflineJS,n=e.children,o=e.enableProctoring,s=e.appUtil.params.questionId,c=e.questionsData,l=Object(u.m)(c,s);return a.a.createElement(Y.a,null,a.a.createElement(z.a,{loadOfflineJS:t},a.a.createElement(X.a,{enableProctoring:o},a.a.createElement(de,{enableProctoring:o},a.a.createElement(_e,null,a.a.createElement(i.Fragment,null,l&&a.a.createElement(H,null),a.a.createElement("div",{className:r()("d-flex flex-row test-container",{"test-container--fullscreen":!l})},a.a.createElement(J,{showTimerTab:!l}),a.a.createElement("div",{className:"d-flex flex-column test-container__content"},n))))))))}n.d(t,"PureBaseComponent",function(){return De}),n.d(t,"mapStateToProps",function(){return Oe});var Oe=function(e){var t=e.test;return{loadOfflineJS:!t.disableOfflineCheck,enableProctoring:t.enableProctoring,questionsData:e.candidate.questions.dataMap}};t.default=Object(c.a)(Object(s.connect)(Oe),l.a)(De)},biKL:function(e,t,n){},dN1q:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var i=n("cDcd"),a=Object(i.createContext)(),o=a.Provider,r=a.Consumer},dvg7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n("cDcd"),r=c(o),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handle=function(e){if("touchend"===e.type&&(n.isTouch=!0),"click"!==e.type||!n.isTouch){var t=n.props.onClickOutside,i=n.container;i&&!i.contains(e.target)&&t(e)}},n.getContainer=n.getContainer.bind(n),n.isTouch=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"getContainer",value:function(e){this.container=e}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onClickOutside,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","onClickOutside"]));return r.default.createElement("div",i({},n,{ref:this.getContainer}),t)}},{key:"componentDidMount",value:function(){document.addEventListener("touchend",this.handle,!0),document.addEventListener("click",this.handle,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchend",this.handle,!0),document.removeEventListener("click",this.handle,!0)}}]),t}();l.propTypes={onClickOutside:s.default.func.isRequired},t.default=l},tHjC:function(e,t,n){},tX8B:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c});n("pIFo"),n("Tze0");var i=n("MVZn"),a=n.n(i),o=n("g2mX");function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=a()({},e);return n&&0!==e.seconds||delete i.seconds,i.days&&delete i.minutes,0===i.hours&&delete i.hours,t(i,!1)}function s(e){var t=Object(o.b)({days:{normal:e("common:time.day"),plural:e("common:time.day_plural")},hours:{normal:e("common:time.hour"),plural:e("common:time.hour_plural")},minutes:{normal:e("common:time.minute"),plural:e("common:time.minute_plural")},seconds:{normal:e("common:time.second"),plural:e("common:time.second_plural")}});return function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?r(e,t):t(e,n)}}function c(e){var t=Object(o.b)({days:{normal:e("common:time.day_short"),plural:e("common:time.day_short")},hours:{normal:e("common:time.hour_short"),plural:e("common:time.hour_short")},minutes:{normal:e("common:time.minute_short"),plural:e("common:time.minute_short")},seconds:{normal:e("common:time.second_short"),plural:e("common:time.second_short")}});return function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r(e,t,n).replace(/0([0-9])/gm,"$1").replace(/([0-9])\s/gm,"$1").trim()}}}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/testbase-ca3a28f6.js.map