(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{ZY3w:function(e,t,n){},"g+WX":function(e,t,n){"use strict";var i=n("lwsE"),s=n.n(i),a=n("W8MJ"),r=n.n(a),c=n("a1gu"),o=n.n(c),l=n("Nsbk"),u=n.n(l),h=n("PJYZ"),m=n.n(h),d=n("7W2i"),f=n.n(d),v=n("pVnL"),p=n.n(v),k=n("QILm"),T=n.n(k),b=n("lSNA"),g=n.n(b),E=n("cDcd"),I=n.n(E),y=n("TSYQ"),P=n.n(y);n("vjD1");var L=function(e){function t(e){var n;return s()(this,t),n=o()(this,u()(t).call(this,e)),g()(m()(n),"toggleCheckbox",function(e){e.persist(),n.setState({checked:!n.state.checked},function(){n.props.onChange(e)})}),n.state={checked:!!e.checked},n}return f()(t,e),r()(t,[{key:"componentWillReceiveProps",value:function(e){e.checked!==this.state.checked&&this.setState({checked:e.checked})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.indeterminate,i=e.label,s=e.theme,a=T()(e,["className","indeterminate","label","theme"]),r=this.state.checked;delete a.checked;var c=I.a.createElement("div",{className:"checkbox-wrap"},I.a.createElement("input",p()({type:"checkbox",className:"checkbox-input",checked:r},a,{onChange:this.toggleCheckbox})),I.a.createElement("span",{className:"custom-holder"}));return I.a.createElement("div",{className:P()("ui-checkbox",s,{indeterminate:!!n,checked:r},t)},i?I.a.createElement("label",{className:"label-wrap"},c,I.a.createElement("div",{className:"label"},i)):c)}}]),t}(E.Component);g()(L,"defaultProps",{indeterminate:!1,onChange:function(){},theme:"theme-old"}),t.a=L},g2mX:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n("pIFo"),n("rGqo"),n("yt8O"),n("RW0V"),n("Oyvg"),n("Tze0");var i=n("eOGF"),s=["days","hours","minutes","seconds"];function a(e){return function(t){for(var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="",r=!1,c=0;c<s.length;c++){var o=s[c],l=t[o];if(void 0!==l&&(r||l)){var u=l>1?e[o].plural:e[o].normal;if(a+="".concat(Object(i.f)(l)," ").concat(u," "),r=!0,n)break}}return a.trim()}}function r(e){var t=Math.floor(e/60),n=Math.floor(t/60);return{days:Math.floor(n/24),hours:n%24,minutes:t%60,seconds:e%60}}},ovno:function(e,t,n){"use strict";var i=n("pVnL"),s=n.n(i),a=n("QILm"),r=n.n(a),c=n("cDcd"),o=n("TSYQ"),l=n.n(o),u=n("O766"),h=n("OEX3");n("ZY3w");function m(e){var t=e.confirmText,n=e.cancelText,i=e.onConfirm,a=e.onCancel,o=e.inProgress,m=e.children,d=e.cancelBtnProps,f=e.confirmBtnProps,v=r()(e,["confirmText","cancelText","onConfirm","onCancel","inProgress","children","cancelBtnProps","confirmBtnProps"]),p="theme-m"===v.theme?"ui-btn-secondary":"ui-btn-default";return c.createElement(u.a,s()({modalClass:"confirm-dialog"},v),m,c.createElement("div",{className:"confirm-button-group"},n&&c.createElement(h.f,s()({className:l()("cancel-button",p),disabled:!!o,loading:"cancel"===o,onClick:a},d),n),t&&c.createElement(h.f,s()({className:"ui-btn-primary confirm-button",disabled:!!o,loading:!0===o||"confirm"===o},f,{onClick:i}),t)))}m.defaultProps={theme:"theme-m",confirmText:"Yes",cancelText:"No",cancelBtnProps:{},confirmBtnProps:{}},t.a=m},t50E:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n("0l/t"),n("yt8O"),n("RW0V"),n("rGqo"),n("8+KV");var i=n("lwsE"),s=n.n(i),a=n("W8MJ"),r=n.n(a),c=n("lSNA"),o=n.n(c),l=n("eOGF"),u=function(){function e(t){var n=this;s()(this,e),o()(this,"isPaused",void 0),o()(this,"counter",void 0),o()(this,"initialTimeLeft",void 0),o()(this,"intervalID",void 0),o()(this,"pauseTimeoutID",void 0),o()(this,"listeners",void 0),o()(this,"handleInterval",function(){n.isPaused||(n.counter++,n.fireListeners())}),o()(this,"restartTimer",function(){n.isPaused=!1}),this.isPaused=!1,this.initialTimeLeft=t,this.counter=0,this.listeners={},this.start()}return r()(e,[{key:"start",value:function(){Object(l.l)()||(this.intervalID=setInterval(this.handleInterval,e.DEFAULT_INTERVAL))}},{key:"getSecondsLeft",value:function(){return this.initialTimeLeft-this.counter}},{key:"fireListeners",value:function(){var e=this,t=this.initialTimeLeft-this.counter;Object.keys(this.listeners).forEach(function(n){var i=e.listeners[n],s=parseInt(n,10);t%s==0&&i.forEach(function(e){return e(t)})}),t<=0&&this.dispose()}},{key:"addListener",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)}},{key:"removeListener",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.listeners[t]=this.listeners[t].filter(function(t){return e!==t})}},{key:"pause",value:function(e){this.isPaused&&this.pauseTimeoutID&&clearTimeout(this.pauseTimeoutID),this.isPaused=!0,this.pauseTimeoutID=setTimeout(this.restartTimer,1e3*e)}},{key:"dispose",value:function(){this.intervalID&&clearInterval(this.intervalID),this.pauseTimeoutID&&clearTimeout(this.pauseTimeoutID),this.listeners={}}}]),e}();o()(u,"DEFAULT_INTERVAL",1e3)},vjD1:function(e,t,n){}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_modules~testbase-4097a527.js.map