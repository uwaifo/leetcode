(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ZY3w:function(e,t,n){},ovno:function(e,t,n){"use strict";var a=n("pVnL"),i=n.n(a),r=n("QILm"),o=n.n(r),c=n("cDcd"),l=n("TSYQ"),s=n.n(l),d=n("O766"),m=n("OEX3");n("ZY3w");function h(e){var t=e.confirmText,n=e.cancelText,a=e.onConfirm,r=e.onCancel,l=e.inProgress,h=e.children,u=e.cancelBtnProps,f=e.confirmBtnProps,p=o()(e,["confirmText","cancelText","onConfirm","onCancel","inProgress","children","cancelBtnProps","confirmBtnProps"]),g="theme-m"===p.theme?"ui-btn-secondary":"ui-btn-default";return c.createElement(d.a,i()({modalClass:"confirm-dialog"},p),h,c.createElement("div",{className:"confirm-button-group"},n&&c.createElement(m.f,i()({className:s()("cancel-button",g),disabled:!!l,loading:"cancel"===l,onClick:r},u),n),t&&c.createElement(m.f,i()({className:"ui-btn-primary confirm-button",disabled:!!l,loading:!0===l||"confirm"===l},f,{onClick:a}),t)))}h.defaultProps={theme:"theme-m",confirmText:"Yes",cancelText:"No",cancelBtnProps:{},confirmBtnProps:{}},t.a=h},xNbf:function(e,t,n){"use strict";n("rGqo"),n("8+KV");var a=n("lwsE"),i=n.n(a),r=n("W8MJ"),o=n.n(r),c=n("a1gu"),l=n.n(c),s=n("Nsbk"),d=n.n(s),m=n("PJYZ"),h=n.n(m),u=n("7W2i"),f=n.n(u),p=n("pVnL"),g=n.n(p),v=n("QILm"),E=n.n(v),C=n("lSNA"),k=n.n(C),x=n("cDcd"),w=n.n(x),M=function(e){function t(){var e;return i()(this,t),e=l()(this,d()(t).call(this)),k()(h()(e),"state",void 0),e.state={},e}return f()(t,e),o()(t,[{key:"showChild",value:function(){this.setState({showChild:!0})}},{key:"componentDidMount",value:function(){this.showChild()}},{key:"render",value:function(){return this.state.showChild?this.props.children:null}}]),t}(w.a.Component),T=function(e){function t(e){var n;i()(this,t),n=l()(this,d()(t).call(this,e)),k()(h()(n),"loaderId",void 0),k()(h()(n),"animationDuration",void 0),k()(h()(n),"totalParts",void 0);var a=e.id;return n.loaderId="hr-loader-".concat(a||Math.ceil(1e7*Math.random())),n.animationDuration=1,n.totalParts=9,n}return f()(t,e),o()(t,[{key:"renderAnimationTag",value:function(e){var t=this.props,n=t.color,a=t.loadingColor,i=this.animationDuration,r=this.loaderId,o=this.totalParts,c=i/3,l="".concat(r,"-").concat(e),s=i/o*(o-e);return w.a.createElement("animate",{attributeName:"fill",from:a,to:n,id:l,dur:"".concat(c,"s"),begin:"".concat(s,"s;").concat(l,".end+").concat(.6666*i,"s")})}},{key:"renderSvg",value:function(){var e=this.props,t=e.diameter,n=e.color,a=E()(e,["diameter","color"]);return["loadingColor","loadOnClientSide","id"].forEach(function(e){delete a[e]}),w.a.createElement("svg",g()({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 1100 1100"},a),w.a.createElement("g",null,w.a.createElement("path",{d:"M382.662,164.463c-10.904,0-114.259,98.957-106.185,107.011c8.012,8.033,202.659,8.033,210.629,0 C495.151,263.42,393.593,164.463,382.662,164.463z",fill:n}),w.a.createElement("path",{d:"M724.819,929.33c-11.007,0-114.606-99.256-106.562-107.328c8.042-8.072,203.238-8.072,211.297,0 C837.683,830.074,735.786,929.33,724.819,929.33z",fill:n}),w.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"431.362",y1:"548.118",x2:"696.214",y2:"548.467"}),w.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"723.914",y1:"332.673",x2:"723.914",y2:"842.504"}),w.a.createElement("line",{fill:"none",stroke:n,strokeWidth:"140",strokeMiterlimit:"8",x1:"381.794",y1:"239.607",x2:"381.794",y2:"761.195"})),w.a.createElement("path",{d:"M1013.021,546.036c0.001,0.287,0.001,0.573,0.001,0.861c-0.002,45.46-6.576,89.267-18.808,130.652 c-12.233,41.379-30.134,80.332-52.821,115.977l67.489,42.957c26.628-41.836,47.67-87.611,62.05-136.254 c14.381-48.639,22.092-100.145,22.09-153.332c0-0.336,0-0.672-0.001-1.008L1013.021,546.036z",fill:n},this.renderAnimationTag(1)),w.a.createElement("path",{d:"M904.944,250.653c27.515,32.649,50.56,69.167,68.201,108.6c17.642,39.436,29.885,81.781,35.81,126.175l79.297-10.58 c-6.953-52.12-21.353-101.935-42.082-148.265c-20.729-46.334-47.781-89.19-80.051-127.483L904.944,250.653z",fill:n},this.renderAnimationTag(2)),w.a.createElement("path",{d:"M632.321,93.7c43.962,7.635,85.753,21.502,124.488,40.676c38.731,19.173,74.4,43.658,106.037,72.503l53.9-59.116 c-37.103-33.828-78.947-62.559-124.446-85.083c-45.495-22.523-94.65-38.834-146.292-47.801L632.321,93.7z",fill:n},this.renderAnimationTag(3)),w.a.createElement("path",{d:"M322.559,148.697c33.884-19.656,70.484-35.1,109.11-45.635c38.628-10.533,79.281-16.164,121.353-16.166 c6.342,0,12.65,0.128,18.926,0.382l3.229-79.935c-7.351-0.297-14.736-0.447-22.155-0.447c-49.221-0.001-97.003,6.601-142.403,18.985 c-45.402,12.382-88.423,30.539-128.204,53.617L322.559,148.697z",fill:n},this.renderAnimationTag(4)),w.a.createElement("path",{d:"M120.489,389.924c30.023-82.728,83.202-154.506,151.696-207.38l-48.888-63.325C142.968,181.24,80.603,265.367,45.29,362.627 L120.489,389.924z",fill:n},this.renderAnimationTag(5)),w.a.createElement("path",{d:"M120.751,704.592c-17.934-49.16-27.726-102.199-27.729-157.695c0-33.914,3.661-66.905,10.596-98.658l-78.157-17.073 c-8.151,37.312-12.44,76.054-12.439,115.731c-0.004,64.933,11.492,127.349,32.577,185.119L120.751,704.592z",fill:n},this.renderAnimationTag(6)),w.a.createElement("path",{d:"M323.241,945.492c-75.442-43.586-137.431-108.066-177.952-185.41l-70.86,37.131 c47.609,90.838,120.217,166.359,208.787,217.545L323.241,945.492z",fill:n},this.renderAnimationTag(7)),w.a.createElement("path",{d:"M633.137,999.951c-25.995,4.563-52.754,6.945-80.115,6.945c-62.193-0.006-121.31-12.299-175.322-34.578l-30.513,73.951 c63.456,26.189,133.062,40.633,205.835,40.627c32.01,0,63.412-2.791,93.945-8.15L633.137,999.951z",fill:n},this.renderAnimationTag(8)),w.a.createElement("path",{d:"M905.481,842.504c-27.755,33.055-60.081,62.156-95.98,86.316c-35.9,24.16-75.367,43.377-117.443,56.701l24.151,76.268 c98.934-31.334,185.438-90.313,250.539-167.844L905.481,842.504L905.481,842.504z",fill:n},this.renderAnimationTag(9)))}},{key:"render",value:function(){var e=this.props.loadOnClientSide,t=this.renderSvg();return e&&(t=w.a.createElement(M,null,t)),t}}]),t}(x.PureComponent);k()(T,"defaultProps",{diameter:64,color:"#eeeeee",loadingColor:"#666666",loadOnClientSide:!0});t.a=T}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_modules~login_view~testbase-ad4c2f8e.js.map