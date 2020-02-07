(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),s=a.n(l),c=(a(72),a(73),a(6)),o=a(7),i=a(9),u=a(8),m=a(10),h=(a(74),a(24)),p=a(13),E=a(107),d=a(16),b=a.n(d),f=function(e,t,a){return b.a.post("/api/auth/signup",{username:e,password:t,email:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=function(e,t,a){return b.a.post("/api/auth/login",{username:e,password:t,email:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=a(12),y=function(e){return r.a.createElement(E.a,{className:"nav justify-content-end",bg:"primary"},e.user?r.a.createElement("div",null,r.a.createElement(p.b,{to:"/main"},"Welcome ",e.user.username),r.a.createElement(p.b,{to:"/userprofil"},"UserProfile ",r.a.createElement(v.a,{icon:"user"})),r.a.createElement(p.b,{to:"/game"},"Game ",r.a.createElement(v.a,{icon:"gamepad"})),r.a.createElement(p.b,{to:"/eventhistory"},"Event History ",r.a.createElement(v.a,{icon:"list-alt"})),r.a.createElement(p.b,{to:"/guestbook"},"Guestbook ",r.a.createElement(v.a,{icon:"address-book"})),r.a.createElement(p.b,{to:"/",onClick:function(){b.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout ",r.a.createElement(v.a,{icon:"sign-out-alt"}))):r.a.createElement("div",null,r.a.createElement(p.b,{to:"/signup"},"Signup ",r.a.createElement(v.a,{icon:"user-plus"})),r.a.createElement(p.b,{to:"/login"},"Login ",r.a.createElement(v.a,{icon:"sign-in-alt"}))))},j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"pLanComm"),r.a.createElement("p",null," wellcome to the private lan community !"))}}]),t}(r.a.Component),O=a(27),w=a(106),k=a(104),C=a(105),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),f(a.state.username,a.state.password,a.state.email).then((function(e){e.message?a.setState({error:e.message}):a.props.history.push("/login")}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h2",null,"Signup"),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(w.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(w.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"email"},"Email: "),r.a.createElement(w.a.Control,{type:"email",name:"email",id:"email",value:this.state.email,onChange:this.handleChange})),this.state.error&&r.a.createElement(k.a,{variant:"danger"},this.state.error),r.a.createElement(C.a,{type:"submit"},"Sign up ",r.a.createElement(v.a,{icon:"user-plus"}))))}}]),t}(n.Component),S=a(47);a(99).config();var x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),g(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/main"))}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"username"},"Username: "),r.a.createElement(w.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"password"},"Password: "),r.a.createElement(w.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(k.a,{variant:"danger"},this.state.error),r.a.createElement(C.a,{type:"submit"},"Log in ",r.a.createElement(v.a,{icon:"sign-in-alt"}))),r.a.createElement("div",{className:"SocialButtons"},r.a.createElement(S.GoogleLoginButton,{style:{width:"300px"},onClick:function(){return window.location.href="https://plancomm.herokuapp.com/api/auth/google"}}),r.a.createElement(S.GithubLoginButton,{style:{width:"300px"},onClick:function(){return window.location.href="https://plancomm.herokuapp.com/api/auth/github"}})))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Event \xdcbersicht"))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Playerdetails"))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={players:[]},a.getPlayers=function(){b.a.get("/api/players/all").then((function(e){a.setState({players:e.data})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getPlayers()}},{key:"render",value:function(){return console.log(this.state.players),r.a.createElement("div",null,r.a.createElement("h1",null,"Playerslist"),this.state.players.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(p.b,{to:"/playerdetail"},e.username))})))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to MainPage"),r.a.createElement(A,null),r.a.createElement(G,null))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:a.props.user.username,avatarUrl:a.props.user.avatarURL,email:a.props.user.email,usertype:a.props.user.userType},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"UserProfil"},r.a.createElement("img",{src:this.state.avatarUrl,alt:"userbild"}),r.a.createElement("h1",null,this.state.username),r.a.createElement("h1",null,this.state.email),r.a.createElement("h1",null,this.state.usertype))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Game Site"))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Event History"))}}]),t}(n.Component),D=a(30),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",entrie:"",show:!1},a.addEntrie=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.createEntrie=function(e){e.preventDefault(),b.a.post("/api/guestbook/create",{title:a.state.title,entrie:a.state.entrie,user:a.props.user._id}).then((function(e){a.setState({entrie:"",title:"",show:!1},a.props.showAll())}))},a.handleClose=function(){a.setState({show:!1,title:"",entrie:""})},a.handleShow=function(){a.setState({show:!0})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{variant:"primary",onClick:this.handleShow},"Add Guestbook Entry ",r.a.createElement(v.a,{icon:"address-card"})),r.a.createElement(D.a,{show:this.state.show,onHide:this.handleClose,animation:!1},r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,null,"New Guestbook Entry")),r.a.createElement(D.a.Body,null,r.a.createElement("form",{className:"guestbookForm"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Titel "),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.addEntrie}),r.a.createElement("label",{htmlFor:"entrie"},"Eintrag ")),r.a.createElement("div",null,r.a.createElement("textarea",{cols:"100",rows:"5",name:"entrie",value:this.state.entrie,onChange:this.addEntrie})))),r.a.createElement(D.a.Footer,null,r.a.createElement("button",{variant:"secondary",onClick:this.handleClose},r.a.createElement(v.a,{icon:"times-circle"})),r.a.createElement("button",{variant:"primary",onClick:this.createEntrie},r.a.createElement(v.a,{icon:"save"})))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).showAllEntries=function(){b.a.get("/api/guestbook").then((function(e){a.setState({guestbook:e.data})}))},a.state={guestbook:[],currentUser:a.props.user,showAnswer:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.showAllEntries()}},{key:"deleteEntrie",value:function(e){b.a.delete("/api/guestbook/delete/".concat(e)),this.showAllEntries()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"guestBook-Align"},r.a.createElement("h1",null,"Welcome to the Guestbook"),r.a.createElement(T,{showAll:this.showAllEntries,user:this.state.currentUser}),this.state.guestbook.map((function(t){var a=t.createdAt,n=new Date(a);return r.a.createElement("div",{key:t._id},r.a.createElement("div",{className:"guestbook"},r.a.createElement("div",{className:"guestBookUser"},r.a.createElement("img",{style:{width:"50px"},src:t.user.avatarURL,alt:"bild"}),r.a.createElement("p",null,t.user.username)),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.entrie),r.a.createElement("p",null,n.toLocaleDateString()," ",n.toLocaleTimeString()))),"admin"===e.state.currentUser.userType?r.a.createElement("button",{onClick:function(){return e.deleteEntrie(t._id)}},r.a.createElement(v.a,{icon:"trash-alt"})):null)})))}}]),t}(n.Component),H=a(31),_=a(65),J=a(66);H.b.add(_.a,J.a);var M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{user:this.state.user,setUser:this.setUser}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(U,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/userprofil",render:function(t){return r.a.createElement(F,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(x,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/game",render:function(t){return r.a.createElement(N,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/main",render:function(t){return r.a.createElement(B,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/eventhistory",render:function(t){return r.a.createElement(P,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/guestbook",render:function(t){return r.a.createElement(W,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{exact:!0,path:"/playerdetail",render:function(t){return r.a.createElement(L,Object.assign({},t,{setUser:e.setUser}))}})),r.a.createElement("footer",null,r.a.createElement(v.a,{icon:"copyright"}),r.a.createElement("i",null," by JAS")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;s.a.render(r.a.createElement(p.a,null,r.a.createElement(M,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a(102)},73:function(e,t,a){},74:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.f92f9741.chunk.js.map