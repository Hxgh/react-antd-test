(this["webpackJsonpreact-fission"]=this["webpackJsonpreact-fission"]||[]).push([[0],{109:function(e,t,n){},113:function(e,t,n){},118:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){e.exports=n(234)},134:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(4),u=n(5),s=n(7),l=n(6),p=n(8),h=(n(134),n(35)),m=n(26),b=n(109),j=n.n(b),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:j.a.login},"login page")}}]),t}(a.Component),f=(n(135),n(128)),d=(n(45),n(15)),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(h.b,{to:{pathname:"/",state:{NoMatchBack:!0}}},r.a.createElement(d.a,{type:"primary"}," \u56de\u5230\u9996\u9875"))})}}]),t}(a.Component),v=n(113),y=n.n(v),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:y.a.home},"home page")}}]),t}(a.Component),C=(n(166),n(127)),g=n(25),T=n(61),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={num:1},n.handleClick=n.handleClick.bind(Object(g.a)(n)),n.handleChange=n.handleChange.bind(Object(g.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){(0,this.props.setClick)(this.state.num)}},{key:"handleChange",value:function(e){this.setState({num:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.num;return r.a.createElement("div",null,r.a.createElement("div",null,"input.state.num\uff1a",this.state.num),r.a.createElement("div",null,"num\uff1a",t),r.a.createElement(C.a,{onChange:function(t){return e.handleChange(t)}}),r.a.createElement(d.a,{onClick:this.handleClick},"Increase"))}}]),t}(a.Component);var x=Object(T.b)((function(e){return{num:e.counter.count}}),(function(e){return{setClick:function(t){return e(function(e){return{type:"SET_NUM",num:e}}(t))}}}))(w),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"LifeCycle")}}]),t}(a.Component),R=n(118),S=n.n(R),q=(n(180),n(84)),U=n(119),L=n.n(U),_=n(43),A=n.n(_),B=(n(198),n(63)),M=n.n(B);A.a.configure({showSpinner:!1});var K=L.a.create({baseURL:"http://localhost",timeout:5e3,withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer "+M.a.get("USER_TOKEN")}});K.interceptors.request.use((function(e){return A.a.start(),e}),(function(e){Promise.reject(e)})),K.interceptors.response.use((function(e){A.a.done();var t=e.data;return 200!==t.code?(M.a.remove("USER_TOKEN"),q.a.warning(t.message),Promise.reject(new Error(t.message||"Error"))):e.data}),(function(e){return A.a.done(),q.a.warning(e.message),Promise.reject(e)}));var P=K,W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={to:!1},n.openRouterTo=n.openRouterTo.bind(Object(g.a)(n)),n.requestTo=n.requestTo.bind(Object(g.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"openRouterTo",value:function(){this.props.history.push({pathname:"/app/ReduxTest",state:{test:12121}})}},{key:"requestTo",value:function(){P.request({url:"/api/login",method:"post"})}},{key:"setToken",value:function(){var e;e="dadas",M.a.set("USER_TOKEN",e,{expires:1})}},{key:"render",value:function(){return r.a.createElement("div",{className:S.a.test},r.a.createElement(d.a,{onClick:this.openRouterTo},"\u6d4b\u8bd5\u8def\u7531\u4f20\u53c2"),r.a.createElement(d.a,{onClick:this.requestTo},"\u6d4b\u8bd5login\u63a5\u53e3"),r.a.createElement(d.a,{onClick:this.setToken},"setToken"))}}]),t}(a.Component),I=n(123),J=n.n(I),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:J.a.layout},this.props.children)}}]),t}(a.Component),D=n(124),F=n.n(D),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.d,null,this.props.children,this.props.routers.map((function(e,t){return r.a.createElement(m.b,{exact:!(e.routers&&e.routers.length>0),path:e.path,key:t,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routers:e.routers||null}))}})})),r.a.createElement(m.a,{to:"/404"}))}}]),t}(a.Component),G=[{path:"/app",component:function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:F.a.appLayout},r.a.createElement($,{routers:this.props.routers},r.a.createElement(m.b,{exact:!0,path:"/app",component:function(){return r.a.createElement(m.a,{to:"/app/home"})}})))}}]),t}(a.Component),routers:[{title:"\u4e3b\u9875",path:"/app/home",component:k},{title:"ReduxTest",path:"/app/ReduxTest",component:x},{title:"LifeCycle",path:"/app/LifeCycle",component:N},{title:"Test",path:"/app/test",component:W}]}],H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:function(){return r.a.createElement(m.a,{to:"/app"})}}),r.a.createElement(m.b,{exact:!0,path:"/login",component:O}),r.a.createElement(m.b,{exact:!0,path:"/404",component:E}),r.a.createElement(z,null,r.a.createElement($,{routers:G}))))}}]),t}(a.Component),Q=n(20),V=Object(Q.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NUM":return{count:t.num};default:return e}}}),X=n(125),Y=n(126),Z=Object(Y.composeWithDevTools)({}),ee=Object(Q.createStore)(V,Z(Object(Q.applyMiddleware)(X.a))),te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{store:ee},this.props.children)}}]),t}(a.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(te,null,r.a.createElement(H,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.ef1a735f.chunk.js.map