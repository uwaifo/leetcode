(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EjUH:function(e,t,a){},z5MK:function(e,t,a){"use strict";a("bWfx");var n=a("lwsE"),r=a.n(n),i=a("W8MJ"),o=a.n(i),l=a("a1gu"),s=a.n(l),c=a("Nsbk"),u=a.n(c),b=a("PJYZ"),d=a.n(b),p=a("7W2i"),m=a.n(p),h=a("QILm"),v=a.n(h),T=a("pVnL"),y=a.n(T),f=a("lSNA"),C=a.n(f),w=a("cDcd"),N=a.n(w),k=a("TSYQ"),x=a.n(k),A=a("eHHv"),E=a("LD1s"),I=a("2Ica"),g=a("hF3m"),L=a("eOGF"),P=(a("EjUH"),Object(w.createContext)()),W=P.Provider,j=P.Consumer,D=Object(A.b)(j,function(e){if(!e)throw new Error("Tab.Content and Tab.List can be only used inside Tab scope.");return{tabContext:e}}),H=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),C()(d()(a),"renderTabItem",function(e){var t=a.props,n=t.renderItem,r=t.activeTab,i=t.onTabClick,o=t.tabContext.enableA11y,l=e.idx,s=e.tab,c=l===r,u={};return o&&(u={role:"tab","aria-selected":c}),N.a.createElement("li",y()({key:l,id:s.title,className:x()("tab-item",{active:c}),onClick:function(){return i(l,s)}},u),n(s,l))}),a}return m()(t,e),o()(t,[{key:"getTabsWithIndex",value:function(){return this.props.tabList.map(function(e,t){return{idx:t,tab:e}})}},{key:"getTabA11yAttr",value:function(){return this.props.tabContext.enableA11y?{role:"tablist"}:{}}},{key:"renderTabs",value:function(){var e=this.props,t=e.visibleTabCount,a=e.activeTab,n=e.tabContext.layout,r=this.getTabsWithIndex();if("vertical"===n)return r.map(this.renderTabItem);var i=r.slice(0,t);return a>=t&&(i[i.length-1]=r[a]),i.map(this.renderTabItem)}},{key:"renderTabDropdown",value:function(){var e=this.props,t=e.dropdownTitle,a=e.tabList,n=e.visibleTabCount;if(!(a.length<=n)){var r=this.getTabsWithIndex();return N.a.createElement(E.a,{className:"dropdown dropdown-auth tab-item"},N.a.createElement(I.a,{className:"dropdown-title"},t,N.a.createElement("i",{className:"ui-icon-chevron-down"})),N.a.createElement(g.a,{className:"drop-list pull-right"},N.a.createElement("ul",y()({className:"dropdown-ul"},this.getTabA11yAttr()),r.map(this.renderTabItem))))}}},{key:"render",value:function(){var e=this.props,t=e.visibleTabCount,a=e.className,n=e.tabContext,r=(e.tabList,e.renderItem,e.activeTab,e.tabProps,e.onTabClick,e.dropdownTitle,v()(e,["visibleTabCount","className","tabContext","tabList","renderItem","activeTab","tabProps","onTabClick","dropdownTitle"])),i="horizontal"===n.layout&&t;return N.a.createElement("div",y()({className:x()("render-list clearfix",a)},r),N.a.createElement("ul",y()({className:"tab-header"},this.getTabA11yAttr()),this.renderTabs()),i&&this.renderTabDropdown())}}]),t}(w.PureComponent);C()(H,"defaultProps",{activeTab:0,dropdownTitle:"More",onTabClick:L.m,renderItem:function(e){return e}});var J=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.tabContext,r=v()(e,["children","className","tabContext"]),i=n.enableA11y;return N.a.createElement("div",y()({className:x()("tab-list-content",a),role:i?"tabpanel":void 0},r),t)}}]),t}(w.PureComponent),z=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.layout,r=e.enableA11y,i=v()(e,["children","className","layout","enableA11y"]);return N.a.createElement(W,{value:{layout:n,enableA11y:r}},N.a.createElement("div",y()({className:x()("ui-tabs-wrap",a,{"vertical-layout":"vertical"===n})},i),t))}}]),t}(w.PureComponent);C()(z,"List",D(H)),C()(z,"Content",D(J)),C()(z,"defaultProps",{layout:"horizontal",enableA11y:!1}),t.a=z}}]);
//# sourceMappingURL=https://preview-hrw.hackerrank.com/test/candidate-assets/sourcemaps/hackerrank_r_modules~frontend_question_view~test_case_ui-98981c8b.js.map