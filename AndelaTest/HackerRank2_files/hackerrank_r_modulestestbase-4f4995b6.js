(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"g+WX":function(e,t,i){"use strict";var n=i("lwsE"),s=i.n(n),a=i("W8MJ"),r=i.n(a),c=i("a1gu"),o=i.n(c),u=i("Nsbk"),h=i.n(u),l=i("PJYZ"),d=i.n(l),v=i("7W2i"),f=i.n(v),m=i("pVnL"),p=i.n(m),k=i("QILm"),T=i.n(k),b=i("lSNA"),I=i.n(b),g=i("cDcd"),y=i.n(g),D=i("TSYQ"),E=i.n(D);i("vjD1");var L=function(e){function t(e){var i;return s()(this,t),i=o()(this,h()(t).call(this,e)),I()(d()(i),"toggleCheckbox",function(e){e.persist(),i.setState({checked:!i.state.checked},function(){i.props.onChange(e)})}),i.state={checked:!!e.checked},i}return f()(t,e),r()(t,[{key:"componentWillReceiveProps",value:function(e){e.checked!==this.state.checked&&this.setState({checked:e.checked})}},{key:"render",value:function(){var e=this.props,t=e.className,i=e.indeterminate,n=e.label,s=e.theme,a=T()(e,["className","indeterminate","label","theme"]),r=this.state.checked;delete a.checked;var c=y.a.createElement("div",{className:"checkbox-wrap"},y.a.createElement("input",p()({type:"checkbox",className:"checkbox-input",checked:r},a,{onChange:this.toggleCheckbox})),y.a.createElement("span",{className:"custom-holder"}));return y.a.createElement("div",{className:E()("ui-checkbox",s,{indeterminate:!!i,checked:r},t)},n?y.a.createElement("label",{className:"label-wrap"},c,y.a.createElement("div",{className:"label"},n)):c)}}]),t}(g.Component);I()(L,"defaultProps",{indeterminate:!1,onChange:function(){},theme:"theme-old"}),t.a=L},g2mX:function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"a",function(){return r});i("pIFo"),i("rGqo"),i("yt8O"),i("RW0V"),i("Oyvg"),i("Tze0");var n=i("eOGF"),s=["days","hours","minutes","seconds"];function a(e){return function(t){for(var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="",r=!1,c=0;c<s.length;c++){var o=s[c],u=t[o];if(void 0!==u&&(r||u)){var h=u>1?e[o].plural:e[o].normal;if(a+="".concat(Object(n.f)(u)," ").concat(h," "),r=!0,i)break}}return a.trim()}}function r(e){var t=Math.floor(e/60),i=Math.floor(t/60);return{days:Math.floor(i/24),hours:i%24,minutes:t%60,seconds:e%60}}},t50E:function(e,t,i){"use strict";i.d(t,"a",function(){return h});i("0l/t"),i("yt8O"),i("RW0V"),i("rGqo"),i("8+KV");var n=i("lwsE"),s=i.n(n),a=i("W8MJ"),r=i.n(a),c=i("lSNA"),o=i.n(c),u=i("eOGF"),h=function(){function e(t){var i=this;s()(this,e),o()(this,"isPaused",void 0),o()(this,"counter",void 0),o()(this,"initialTimeLeft",void 0),o()(this,"intervalID",void 0),o()(this,"pauseTimeoutID",void 0),o()(this,"listeners",void 0),o()(this,"handleInterval",function(){i.isPaused||(i.counter++,i.fireListeners())}),o()(this,"restartTimer",function(){i.isPaused=!1}),this.isPaused=!1,this.initialTimeLeft=t,this.counter=0,this.listeners={},this.start()}return r()(e,[{key:"start",value:function(){Object(u.l)()||(this.intervalID=setInterval(this.handleInterval,e.DEFAULT_INTERVAL))}},{key:"getSecondsLeft",value:function(){return this.initialTimeLeft-this.counter}},{key:"fireListeners",value:function(){var e=this,t=this.initialTimeLeft-this.counter;Object.keys(this.listeners).forEach(function(i){var n=e.listeners[i],s=parseInt(i,10);t%s==0&&n.forEach(function(e){return e(t)})}),t<=0&&this.dispose()}},{key:"addListener",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)}},{key:"removeListener",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.listeners[t]=this.listeners[t].filter(function(t){return e!==t})}},{key:"pause",value:function(e){this.isPaused&&this.pauseTimeoutID&&clearTimeout(this.pauseTimeoutID),this.isPaused=!0,this.pauseTimeoutID=setTimeout(this.restartTimer,1e3*e)}},{key:"dispose",value:function(){this.intervalID&&clearInterval(this.intervalID),this.pauseTimeoutID&&clearTimeout(this.pauseTimeoutID),this.listeners={}}}]),e}();o()(h,"DEFAULT_INTERVAL",1e3)},vjD1:function(e,t,i){}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_modules~testbase-4f4995b6.js.map