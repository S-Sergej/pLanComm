(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),s=a.n(l),o=(a(76),a(77),a(7)),c=a(8),i=a(10),u=a(9),m=a(11),h=(a(78),a(26)),p=a(15),d=a(124),E=a(12),f=a.n(E),v=function(e,t,a){return f.a.post("/api/auth/signup",{username:e,password:t,email:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},b=function(e,t,a){return f.a.post("/api/auth/login",{username:e,password:t,email:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=a(6),y=function(e){return r.a.createElement(d.a,{className:"nav justify-content-end"},e.user?r.a.createElement("div",null,r.a.createElement(p.b,{to:"/main"},"Welcome ",e.user.username),r.a.createElement(p.b,{to:"/userprofil"},"UserProfile ",r.a.createElement(g.a,{className:"FontAwesome",icon:"user"})),r.a.createElement(p.b,{to:"/game"},"Game ",r.a.createElement(g.a,{className:"FontAwesome",icon:"gamepad"})),r.a.createElement(p.b,{to:"/eventhistory"},"Event History ",r.a.createElement(g.a,{className:"FontAwesome",icon:"list-alt"})),r.a.createElement(p.b,{to:"/guestbook"},"Guestbook ",r.a.createElement(g.a,{className:"FontAwesome",icon:"address-book"})),r.a.createElement(p.b,{to:"/",onClick:function(){f.a.delete("/api/auth/logout"),e.setUser(null)}},"Logout ",r.a.createElement(g.a,{className:"FontAwesome",icon:"sign-out-alt"}))):r.a.createElement("div",null,r.a.createElement(p.b,{to:"/signup"},"Signup ",r.a.createElement(g.a,{className:"FontAwesome",icon:"user-plus"})),r.a.createElement(p.b,{to:"/login"},"Login ",r.a.createElement(g.a,{className:"FontAwesome",icon:"sign-in-alt"}))))},w=a(31),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"welcomPage"},r.a.createElement(w.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:5e3}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement("h1",{style:{textShadow:"0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 55px #0ff, 0 0 75px #0ff",color:"#FFFFFF",fontSize:"200px",fontWeight:"bolder"}},"pLanComm"))})),r.a.createElement(w.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:3e3,duration:2e3}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement("p",null," Welcome to the private Lan Community !"))})))}}]),t}(r.a.Component),O=a(25),k=a(123),C=a(121),S=a(122),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),v(a.state.username,a.state.password,a.state.email).then((function(e){e.message?a.setState({error:e.message}):a.props.history.push("/login")}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"formSignup"},r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange,placeholder:"username"})),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange,placeholder:"password"})),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Control,{type:"email",name:"email",id:"email",value:this.state.email,onChange:this.handleChange,placeholder:"email"})),this.state.error&&r.a.createElement(C.a,{variant:"danger"},this.state.error),r.a.createElement(S.a,{type:"submit"},"Sign up ",r.a.createElement(g.a,{icon:"user-plus"}))))}}]),t}(n.Component),A=a(49);a(115).config();var F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),b(a.state.username,a.state.password).then((function(e){e.message?a.setState({error:e.message}):(a.props.setUser(e),a.props.history.push("/main"))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"formSignup"},r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,{style:{color:"white"},htmlFor:"username"},"Username: "),r.a.createElement(k.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,{style:{color:"white"},htmlFor:"password"},"Password: "),r.a.createElement(k.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&r.a.createElement(C.a,{variant:"danger"},this.state.error),r.a.createElement(S.a,{type:"submit"},"Log in ",r.a.createElement(g.a,{icon:"sign-in-alt"}))),r.a.createElement("div",{className:"SocialButtons"},r.a.createElement(A.GoogleLoginButton,{style:{width:"300px"},onClick:function(){return window.location.href="https://plancomm.herokuapp.com/api/auth/google"}}),r.a.createElement(A.GithubLoginButton,{style:{width:"300px"},onClick:function(){return window.location.href="https://plancomm.herokuapp.com/api/auth/github"}})))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Event \xdcbersicht"))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",createdAt:"",avatarURL:""},a.getPlayer=function(){f.a.get("/api/guestbook/player/".concat(a.props.playerId)).then((function(e){a.setState({username:e.data.username,createdAt:e.data.createdAt,avatarURL:e.data.avatarURL})}))},a.componentDidMount=function(){a.getPlayer()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new Date(this.state.createdAt).toLocaleDateString();return console.log(this.state),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"black"}},"Player ",this.state.username),r.a.createElement("h1",{style:{color:"black"}},"Mitglied seit ",e))}}]),t}(n.Component),N=a(14),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={players:[],playerId:"",showPlayer:!1,show:!1},a.getPlayers=function(){f.a.get("/api/players/all").then((function(e){a.setState({players:e.data})})).catch((function(e){return console.log(e)}))},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getPlayers()}},{key:"showPlayerDetails",value:function(e){this.setState({showPlayer:!this.state.showPlayer,playerId:e,show:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"alignUsers"},this.state.players.map((function(t){return r.a.createElement("div",{className:"playerCard",key:t._id,onClick:function(){return e.showPlayerDetails(t._id)}},r.a.createElement("img",{style:{width:"60px"},src:t.avatarURL,alt:t.username}),r.a.createElement("p",{style:{color:"black"}},t.username))}))),r.a.createElement(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Player Details")),r.a.createElement(N.a.Body,null,r.a.createElement(L,{playerId:this.state.playerId})),r.a.createElement(N.a.Footer,null,r.a.createElement("button",{variant:"secondary",onClick:this.handleClose},r.a.createElement(g.a,{icon:"times-circle"})))))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDiv:!0,buttonText:!1},a.showDiv=function(){a.setState({showDiv:!a.state.showDiv,buttonText:!a.state.buttonText})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",{className:"alignPlayerShow"},this.state.buttonText?r.a.createElement("button",{className:"userButton",onClick:this.showDiv},"Show",r.a.createElement(g.a,{icon:"users"})):r.a.createElement("button",{onClick:this.showDiv},"Hide ",r.a.createElement(g.a,{icon:"users"})),r.a.createElement(w.Transition,{native:!0,items:this.state.showDiv,from:{marginLeft:-200},enter:{marginLeft:0},config:{delay:100,duration:600},leave:{marginLeft:-200}},(function(e){return e&&function(e){return r.a.createElement(w.animated.div,{style:e},r.a.createElement(D,null))}}))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getUserProfile=function(){f.a.get("/api/usereditor/".concat(a.props.user._id)).then((function(e){console.log(e.data.avatarURL),a.setState({avatarURL:e.data.avatarURL})}))},a.state={username:a.props.user.username,avatarUrl:a.props.user.avatarURL,email:a.props.user.email,usertype:a.props.user.userType,createdAt:new Date(a.props.user.createdAt).toLocaleDateString()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUserProfile()}},{key:"render",value:function(){return r.a.createElement("div",{className:"UserProfil"},r.a.createElement("div",null,r.a.createElement("img",{src:this.state.avatarURL,alt:"userbild"}),r.a.createElement(p.b,{to:"/usereditor"},"Edit Avatar ",r.a.createElement(g.a,{icon:"user-edit"}))),r.a.createElement("div",{className:"userData"},r.a.createElement("h1",null,"Username: ",this.state.username),r.a.createElement("h1",null,"Email: ",this.state.email),r.a.createElement("h1",null,"Mitglied seit: ",this.state.createdAt),r.a.createElement("h1",null,"Usertype: ",this.state.usertype)))}}]),t}(n.Component),R=a(51),B=a.n(R),T=a(68),I=function(e){return console.log("file to be handled: ",e),f.a.post("api/usereditor/upload",e).then((function(e){return e.data})).catch((function(e){return function(e){throw console.error(e),e}(e)}))},H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFile=function(e){var t=e.target.files[0];a.setState({avatarURL:t})},a.handleSubmit=function(){var e=Object(T.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("handleSubmit: ",a.state.avatarURL),(n=new FormData).append("avatarURL",a.state.avatarURL),e.prev=4,e.next=7,I(n);case 7:r=e.sent,a.setState({avatarURL:r}),a.props.history.push("/userprofil"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),a.setState({error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),a.state={username:a.props.user.username,avatarUrl:a.props.user.avatarURL},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("This is a test",this.state),r.a.createElement("div",null,r.a.createElement("h2",null,"Change your avatar"),r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Label,{htmlFor:"avatarURL"},"Current avatar: "),r.a.createElement(k.a.Control,{type:"file",name:"image",id:"image",onChange:this.handleFile})),r.a.createElement(S.a,{type:"submit"},"Edit Avatar ",r.a.createElement(g.a,{icon:"user-edit"}))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",show:!1,user:a.props.user},a.changeFormEntry=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(O.a)({},n,r))},a.createGame=function(e){e.preventDefault(),f.a.post("/api/game/create",{title:a.state.title,description:a.state.description,user:a.state.user}).then((function(e){a.setState({show:!1,title:"",description:""},a.props.allGames())}))},a.handleClose=function(){a.setState({show:!1,title:"",description:"",genre:""})},a.handleShow=function(){a.setState({show:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{variant:"primary",onClick:this.handleShow},"Add New Game ",r.a.createElement(g.a,{icon:"address-card"})),r.a.createElement(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"New Game")),r.a.createElement(N.a.Body,null,r.a.createElement("form",{onSubmit:this.createGame,className:"createGame"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Titel: "),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.changeFormEntry})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description"},"Description "),r.a.createElement("textarea",{name:"description",onChange:this.changeFormEntry,defaultValue:this.state.description})))),r.a.createElement(N.a.Footer,null,r.a.createElement("button",{variant:"secondary",onClick:this.handleClose},r.a.createElement(g.a,{icon:"times-circle"})),r.a.createElement("button",{variant:"primary",onClick:this.createGame},r.a.createElement(g.a,{icon:"save"})))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={games:[],user:a.props.user,defaultImage:"https://upload.wikimedia.org/wikipedia/commons/f/fe/Video-Game-Controller-Icon-IDV-green.svg"},a.getAllGames=function(){f.a.get("/api/game/allGames").then((function(e){a.setState({games:e.data})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllGames()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M,{user:this.state.user,allGames:function(){return e.getAllGames()}}),r.a.createElement("div",{className:"gameArrange"},this.state.games.map((function(t){return r.a.createElement("div",{key:t._id,className:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"front"},r.a.createElement("h1",null,t.title),r.a.createElement("img",{src:e.state.defaultImage,alt:"game"})),r.a.createElement("div",{className:"back"},r.a.createElement("p",null,t.description))))}))))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Event History"))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",entrie:"",show:!1},a.addEntrie=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.createEntrie=function(e){e.preventDefault(),f.a.post("/api/guestbook/create",{title:a.state.title,entrie:a.state.entrie,user:a.props.user._id}).then((function(e){a.setState({entrie:"",title:"",show:!1},a.props.showAll())}))},a.handleClose=function(){a.setState({show:!1,title:"",entrie:""})},a.handleShow=function(){a.setState({show:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{variant:"primary",onClick:this.handleShow},"Add Guestbook Entry ",r.a.createElement(g.a,{icon:"address-card"})),r.a.createElement(N.a,{show:this.state.show,onHide:this.handleClose,animation:!1},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"New Guestbook Entry")),r.a.createElement(N.a.Body,null,r.a.createElement("form",{className:"guestbookForm"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Titel "),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.addEntrie}),r.a.createElement("label",{htmlFor:"entrie"},"Eintrag ")),r.a.createElement("div",null,r.a.createElement("textarea",{cols:"100",rows:"5",name:"entrie",value:this.state.entrie,onChange:this.addEntrie})))),r.a.createElement(N.a.Footer,null,r.a.createElement("button",{variant:"secondary",onClick:this.handleClose},r.a.createElement(g.a,{icon:"times-circle"})),r.a.createElement("button",{variant:"primary",onClick:this.createEntrie},r.a.createElement(g.a,{icon:"save"})))))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).showAllEntries=function(){f.a.get("/api/guestbook").then((function(e){a.setState({guestbook:e.data})}))},a.state={guestbook:[],currentUser:a.props.user,showAnswer:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.showAllEntries()}},{key:"deleteEntrie",value:function(e){f.a.delete("/api/guestbook/delete/".concat(e)),this.showAllEntries()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"guestBook-Align"},r.a.createElement(J,{showAll:this.showAllEntries,user:this.state.currentUser}),r.a.createElement("div",{className:"guestbookEntrie"},this.state.guestbook.map((function(t){var a=t.createdAt,n=new Date(a);return r.a.createElement("div",{key:t._id},r.a.createElement("div",{className:"guestbook"},r.a.createElement("div",{className:"guestBookUser"},r.a.createElement("img",{src:t.user.avatarURL,alt:"bild"}),r.a.createElement("p",null,t.user.username)),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.entrie),r.a.createElement("p",null,n.toLocaleDateString()," ",n.toLocaleTimeString()))),"admin"===e.state.currentUser.userType?r.a.createElement("button",{onClick:function(){return e.deleteEntrie(t._id)}},r.a.createElement(g.a,{icon:"trash-alt"})):null)}))))}}]),t}(n.Component),z=a(32),$=a(69),q=a(70);z.b.add($.a,q.a);var K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{user:this.state.user,setUser:this.setUser}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(U,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/userprofil",render:function(t){return r.a.createElement(P,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(F,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/game",render:function(t){return r.a.createElement(_,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{exact:!0,path:"/main",render:function(t){return r.a.createElement(G,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/eventhistory",render:function(t){return r.a.createElement(W,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/guestbook",render:function(t){return r.a.createElement(V,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.a,{exact:!0,path:"/playerdetail",render:function(t){return r.a.createElement(L,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/usereditor",render:function(t){return r.a.createElement(H,Object.assign({},t,{user:e.state.user}))}})),r.a.createElement("footer",null,r.a.createElement(g.a,{icon:"copyright"}),r.a.createElement("i",null," by JAS")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.get("/api/auth/loggedin").then((function(e){var t=e.data;s.a.render(r.a.createElement(p.a,null,r.a.createElement(K,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(119)},77:function(e,t,a){},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.061fc30f.chunk.js.map