(this.webpackJsonpstrimr=this.webpackJsonpstrimr||[]).push([[0],{187:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),c=n.n(r),o=n(20),s=n.n(o),l=n(253),u=n(254),d=n(252),j=n(27),b=n(235),O=n(259),p=n(249),g=n(78),m=n.n(g),h=n(102),x=n(81),f=n(29),y=n(255),v=n(221),S=n(261),C=n(224),N=n(225),_=n(256),w=n(226),E=n(227),T=n(228),k=n(229),I=n(230),P=n(82),A=n.n(P),R=n(120),q=n.n(R),D=n(121),L=n.n(D),F=n(49),G=n(257),U=Object(G.a)(a||(a=Object(F.a)(["\n    mutation addOrRemoveFromQueue($input: SongInput!) {\n    addOrRemoveFromQueue(input: $input) @client\n  }\n"]))),W=Object(G.a)(i||(i=Object(F.a)(["\n  mutation addSong(\n    $title: String\n    $duration: Float\n    $artist: String\n    $thumbnail: String\n    $url: String\n  ) {\n    insert_songs(\n      objects: {\n        artist: $artist\n        duration: $duration\n        thumbnail: $thumbnail\n        url: $url\n        title: $title\n      }\n    ) {\n      affected_rows\n    }\n  }\n"]))),H=n(5),Q=Object(v.a)((function(e){return{container:{display:"flex",alignItems:"center",marginTop:20},urlInput:{margin:e.spacing(1)},addSongBtn:{margin:e.spacing(1)},dialogContent:{textAlign:"center"},thumbnail:{width:"90%",borderRadius:"2%"}}})),$={duration:0,title:"",artist:"",thumbnail:""};var z=function(){var e=Object(y.a)(W),t=Object(j.a)(e,1)[0],n=c.a.useState(!1),a=Object(j.a)(n,2),i=a[0],r=a[1],o=c.a.useState(""),s=Object(j.a)(o,2),l=s[0],u=s[1],d=c.a.useState(!1),b=Object(j.a)(d,2),O=b[0],p=b[1],g=c.a.useState($),v=Object(j.a)(g,2),P=v[0],R=v[1];function D(e){var t=e.target,n=t.name,a=t.value;R((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,a))}))}function F(){return(F=Object(h.a)(m.a.mark((function e(t){var n,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.player,!(a=n.player.player).getVideoData){e.next=6;break}i=U(a),e.next=10;break;case 6:if(!a.getCurrentSound){e.next=10;break}return e.next=9,z(a);case 9:i=e.sent;case 10:R(Object(f.a)(Object(f.a)({},i),{},{url:l}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(h.a)(m.a.mark((function e(){var n,a,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=P.title,a=P.artist,i=P.thumbnail,c=P.duration,t({variables:{url:l.length>0?l:null,artist:a.length>0?a:null,title:n.length>0?n:null,duration:c>0?c:null,thumbnail:i.length>0?i:null}}),R($),r(!1),u("")}catch(o){console.error("Error adding song",o)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t=e.getDuration(),n=e.getVideoData(),a=n.title,i=n.author,r=n.video_id;return{title:a,duration:t,thumbnail:"https://img.youtube.com/vi/".concat(r,"/0.jpg"),artist:i}}function z(e){return new Promise((function(t){e.getCurrentSound((function(e){e&&t({duration:Number(e.duration/1e3),title:e.title,artist:e.user.username,thumbnail:e.artwork_url.replace("-large","-t500x500")})}))}))}c.a.useEffect((function(){var e=q.a.canPlay(l)||L.a.canPlay(l);p(e)}),[l]);var J=Q(),B=J.container,K=J.addSongBtn,M=J.urlInput,X=J.dialogContent,V=J.thumbnailStyle,Y=P.thumbnail,Z=P.title,ee=P.artist;return Object(H.jsxs)("div",{className:B,children:[Object(H.jsxs)(S.a,{className:X,open:i,onClose:!1,children:[Object(H.jsx)(C.a,{children:"Add song"}),Object(H.jsxs)(N.a,{children:[Object(H.jsx)("img",{className:V,src:Y,alt:"Video thumbnail"}),Object(H.jsx)(_.a,{onChange:D,value:Z,type:"text",fullWidth:!0,margin:"dense",label:"Title",name:"title",required:!0}),Object(H.jsx)(_.a,{onChange:D,value:ee,type:"text",fullWidth:!0,margin:"dense",name:"artist",label:"Artist",required:!0}),Object(H.jsx)(_.a,{onChange:D,value:Y,type:"text",fullWidth:!0,margin:"dense",name:"thumbnail",label:"Song thumbnail",required:!0}),Object(H.jsx)(_.a,{onChange:D,value:l,fullWidth:!0,margin:"dense",name:"url",label:"URL",required:!0})]}),Object(H.jsxs)(w.a,{children:[Object(H.jsx)(E.a,{color:"secondary",onClick:function(){return r(!1)},children:"Cancel"}),Object(H.jsx)(E.a,{onClick:function(){return G.apply(this,arguments)},color:"primary",variant:"outlined",children:"Add song"})]})]}),Object(H.jsx)(_.a,{onChange:function(e){return u(e.target.value)},value:l,className:M,type:"url",fullWidth:!0,margin:"normal",placeholder:"Add Soundcloud or Youtube URL",InputProps:{startAdornment:Object(H.jsx)(T.a,{position:"start",children:Object(H.jsx)(k.a,{})})}}),Object(H.jsx)(E.a,{disabled:!O,onClick:function(e){r(!0)},className:K,variant:"contained",color:"primary",endIcon:Object(H.jsx)(I.a,{}),children:"Add"}),Object(H.jsx)(A.a,{url:l,hidden:!0,onReady:function(e){return F.apply(this,arguments)}})]})},J=n(231),B=n(141),K=n(232),M=n(233),X=Object(v.a)((function(e){return{title:{marginLeft:20}}}));var V=function(){var e=X().title;return Object(H.jsx)("div",{children:Object(H.jsx)(J.a,{position:"fixed",children:Object(H.jsxs)(K.a,{children:[Object(H.jsx)(M.a,{}),Object(H.jsx)(B.a,{variant:"h6",component:"h1",className:e,children:"Music Streaming | Strimr"})]})})})};var Y,Z=function(e,t){switch(t.type){case"PLAY_SONG":return Object(f.a)(Object(f.a)({},e),{},{isPlaying:!0});case"PAUSE_SONG":return Object(f.a)(Object(f.a)({},e),{},{isPlaying:!1});case"SET_SONG":return Object(f.a)(Object(f.a)({},e),{},{song:t.payload.song});default:return e}},ee=n(264),te=n(234),ne=n(236),ae=n(237),ie=n(238),re=n(239),ce=n(240),oe=n(241),se=n(242),le=n(243),ue=Object(G.a)(Y||(Y=Object(F.a)(["\n    subscription getSongs {\n        songs(order_by: {created_at: desc}) {\n        artist\n        title\n        thumbnail\n        url\n        id\n        duration\n    }\n}\n\n"]))),de=Object(v.a)((function(e){return{container:{margin:e.spacing(3)},songInfoContainer:{display:"flex",alignItems:"center"},songContainer:{display:"flex",alignItems:"center"},thumbnail:{objectFit:"cover",width:150,height:150},songInfo:{width:"100%",display:"flex",justifyContent:"space-between"},title:{minWidth:100,maxHeight:50,textOverflow:"ellipsis",overflow:"hidden"}}}));function je(e){var t=e.song,n=de(),a=Object(b.a)((function(e){return e.breakpoints.up("xs")})),i=Object(y.a)(U,{onCompleted:function(e){return localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),r=Object(j.a)(i,1)[0],o=c.a.useContext(Te),s=o.state,l=o.dispatch,u=c.a.useState(!1),d=Object(j.a)(u,2),O=d[0],p=d[1];return c.a.useEffect((function(){var e=s.isPlaying&&t.id===s.song.id;p(e)}),[t.id,s.isPlaying,s.song.id]),Object(H.jsx)(ne.a,{className:n.container,children:Object(H.jsxs)("div",{className:n.songInfoContainer,children:[Object(H.jsx)(ae.a,{image:t.thumbnail,className:n.thumbnail}),Object(H.jsxs)("div",{className:n.songInfo,children:[Object(H.jsxs)(ie.a,{children:[Object(H.jsx)(B.a,{className:n.title,style:{display:a?"":"none"},gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(H.jsx)(B.a,{variant:"body1",component:"p",color:"textSecondary",children:t.artist})]}),Object(H.jsxs)(re.a,{children:[Object(H.jsx)(ce.a,{onClick:function(){l({type:"SET_SONG",payload:{song:t}}),l(s.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},size:"small",color:"primary",children:O?Object(H.jsx)(oe.a,{}):Object(H.jsx)(se.a,{})}),Object(H.jsx)(ce.a,{onClick:function(){r({variables:{input:Object(f.a)(Object(f.a)({},t),{},{__typename:"Song"})}})},size:"small",color:"secondary",children:Object(H.jsx)(le.a,{})})]})]})]})})}var be,Oe=function(){var e=Object(ee.a)(ue),t=e.data,n=e.loading,a=e.error;return n?Object(H.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:50},children:Object(H.jsx)(te.a,{})}):a?Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:50},children:["Error loading song lists.... Try again later",console.log(a)]}):Object(H.jsx)("div",{children:t.songs.map((function(e){return Object(H.jsx)(je,{song:e},e.id)}))})},pe=n(260),ge=n(263),me=n(245),he=n(246),xe=n(247),fe=n(248),ye=Object(G.a)(be||(be=Object(F.a)(["\n  query getQueuedSongs {\n    queue @client {\n      id\n      title\n      artist\n      thumbnail\n      duration\n      url\n    }\n  }\n"]))),ve=n(262),Se=n(244);var Ce=Object(v.a)((function(e){return{avatar:{width:64,height:64},text:{overflow:"hidden",textOverflow:"ellipsis"},container:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"50px auto 50px",gridGap:40,alignItems:"center",marginTop:30},songInfoContainer:{overflow:"hidden",whiteSpace:"nowrap"}}}));function Ne(e){var t=e.song,n=Ce(),a=Object(y.a)(U,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),i=Object(j.a)(a,1)[0];return Object(H.jsxs)("div",{className:n.container,children:[Object(H.jsx)(ve.a,{src:t.thumbnail,alt:"Song thumbnail",className:n.avatar}),Object(H.jsxs)("div",{className:n.songInfoContainer,children:[Object(H.jsx)(B.a,{variant:"subtitle2",className:n.text,children:t.title}),Object(H.jsx)(B.a,{color:"textSecondary",variant:"body2",className:n.text,children:t.artist})]}),Object(H.jsx)(ce.a,{onClick:function(){window.confirm("Are you sure you want to remove song from playlist?")&&i({variables:{input:Object(f.a)(Object(f.a)({},t),{},{__typename:"Song"})}})},children:Object(H.jsx)(Se.a,{color:"error"})})]})}var _e=function(e){var t=e.queue;return Object(b.a)((function(e){return e.breakpoints.up("md")}))&&Object(H.jsxs)("div",{style:{margin:"10px 0"},children:[Object(H.jsxs)(B.a,{variant:"button",color:"textSecondary",children:["Playlist (",t.length,")"]}),Object(H.jsx)("div",{style:{"::Webkitscrollbar?":{display:"none"},maxHeight:550,overflow:"auto",scrollbarWidth:"none"},children:t.map((function(e,t){return Object(H.jsx)(Ne,{song:e},t)}))})]})},we=Object(v.a)((function(e){return{container:{display:"flex",justifyContent:"space-between"},details:{display:"flex",flexDirection:"column",padding:"0 15px"},content:{flex:"1 0 auto"},thumbnail:{width:150},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},playIcon:{height:38,width:38}}}));var Ee=function(){var e=c.a.useContext(Te),t=e.state,n=e.dispatch,a=c.a.useState(0),i=Object(j.a)(a,2),r=i[0],o=i[1],s=Object(pe.a)(ye).data,l=c.a.useState(!1),u=Object(j.a)(l,2),d=u[0],b=u[1];c.a.useEffect((function(){var e=s.queue.findIndex((function(e){return e.id===t.song.id}));o(e)}),[s.queue,t.song.id]);var O=c.a.useState(0),p=Object(j.a)(O,2),g=p[0],m=p[1];c.a.useEffect((function(){var e=s.queue[r+1];g>=.99&&e&&(m(0),n({type:"SET_SONG",payload:{song:e}}))}),[s.queue,n,g,r]);var h,x=c.a.useState(!1),f=Object(j.a)(x,2),y=f[0],v=f[1],S=c.a.useState(0),C=Object(j.a)(S,2),N=C[0],_=C[1],w=c.a.useRef(),E=we();return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(ne.a,{variant:"outlined",className:E.container,children:[Object(H.jsxs)("div",{className:E.details,children:[Object(H.jsxs)(ie.a,{className:E.content,children:[Object(H.jsx)(B.a,{variant:"h5",component:"h3",children:t.song.title}),Object(H.jsx)(B.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:t.song.artist})]}),Object(H.jsxs)("div",{className:E.controls,children:[Object(H.jsx)(ce.a,{children:Object(H.jsx)(me.a,{onClick:function(){var e=s.queue[r-1];e&&n({type:"SET_SONG",payload:{song:e}})}})}),Object(H.jsx)(ce.a,{onClick:function(){n(t.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},children:t.isPlaying?Object(H.jsx)(he.a,{className:E.playIcon}):Object(H.jsx)(se.a,{className:E.playIcon})}),Object(H.jsx)(ce.a,{children:Object(H.jsx)(xe.a,{onClick:function(){var e=s.queue[r+1];e&&n({type:"SET_SONG",payload:{song:e}})}})}),Object(H.jsxs)(B.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:[(h=N,new Date(1e3*h).toISOString().substr(11,8))," "]}),Object(H.jsx)(fe.a,{onClick:function(){return b(!0)},onDoubleClick:function(){return b(!1)},style:{marginLeft:"20px",color:d?"#009688":"white",cursor:"pointer"}})]}),Object(H.jsx)(ge.a,{onChange:function(e,t){m(t)},onMouseDown:function(){v(!0)},onMouseUp:function(){v(!1),w.current.seekTo(g)},value:g,type:"range",min:0,max:1,step:.01})]}),Object(H.jsx)(A.a,{ref:w,onProgress:function(e){var t=e.played,n=e.playedSeconds;y||(m(t),_(n))},playing:t.isPlaying,url:t.song.url,hidden:!0,loop:d}),Object(H.jsx)(ae.a,{className:E.thumbnail,loading:"lazy",image:t.song.thumbnail})]}),Object(H.jsx)(_e,{queue:s.queue})]})},Te=c.a.createContext({song:{title:"Click on play icon to start playing song"},isPlaying:!1});var ke,Ie=function(){var e=c.a.useContext(Te),t=Object(r.useReducer)(Z,e),n=Object(j.a)(t,2),a=n[0],i=n[1],o=Object(b.a)((function(e){return e.breakpoints.up("sm")})),s=Object(b.a)((function(e){return e.breakpoints.up("md")}));return Object(H.jsxs)(Te.Provider,{value:{state:a,dispatch:i},children:[Object(H.jsx)(O.a,{only:"xs",children:Object(H.jsx)(V,{})}),Object(H.jsxs)(p.a,{container:!0,spacing:3,children:[Object(H.jsxs)(p.a,{item:!0,xs:12,md:7,style:{paddingTop:o?80:10},children:[Object(H.jsx)(z,{}),Object(H.jsx)(Oe,{})]}),Object(H.jsx)(p.a,{item:!0,xs:12,md:5,style:s?{position:"fixed",top:70,right:0,width:"100%"}:{position:"fixed",left:0,bottom:0,width:"100%"},children:Object(H.jsx)(Ee,{})})]})]})},Pe=n(134),Ae=n(250),Re=n(251),qe=Object(Pe.a)({palette:{type:"dark",primary:Ae.a,secondary:Re.a}}),De=n(135),Le=n(128),Fe=n(137),Ge=n(136);console.log("process here: ",Object({NODE_ENV:"production",PUBLIC_URL:"/strimr",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HASURA_SECRET:"NXkXfGTskTmL3RQ35Ewazaov5oAhJuk22j77eHdiN3tD5zpIUCcedkaLf86vSq13"}).name),console.log("process again: ",Object({NODE_ENV:"production",PUBLIC_URL:"/strimr",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HASURA_SECRET:"NXkXfGTskTmL3RQ35Ewazaov5oAhJuk22j77eHdiN3tD5zpIUCcedkaLf86vSq13"}).REACT_APP_NOT_SECRET_CODE);var Ue=new Le.a({link:new Fe.a({uri:"wss://apollo-music-share-1.hasura.app/v1/graphql",options:{reconnect:!0,connectionParams:{headers:{contentType:"application/json","x-hasura-admin-secret":"NXkXfGTskTmL3RQ35Ewazaov5oAhJuk22j77eHdiN3tD5zpIUCcedkaLf86vSq13"}}}}),cache:new Ge.a,typeDefs:Object(G.a)(ke||(ke=Object(F.a)(["\n    type Song {\n      id: uuid\n      title: String\n      artist: String\n      duration: Float\n      thumbnail: String\n      url: String\n    }\n    input SongInput {\n      id: uuid\n      title: String\n      artist: String\n      duration: Float\n      thumbnail: String\n      url: String\n    }\n    type Query {\n      queue: [Song]!\n    }\n    type Mutation {\n      addOrRemoveFromQueue(input: SongInput!): [Song]!\n    }\n  "]))),resolvers:{Mutation:{addOrRemoveFromQueue:function(e,t,n){var a=t.input,i=n.cache,r=i.readQuery({query:ye});if(r){var c=r.queue,o=c.some((function(e){return e.id===a.id}))?c.filter((function(e){return e.id!==a.id})):[].concat(Object(De.a)(c),[a]);return i.writeQuery({query:ye,data:{queue:o}}),o}return[]}}}}),We={queue:Boolean(localStorage.getItem("queue"))?JSON.parse(localStorage.getItem("queue")):[]};Ue.writeData({data:We});var He=Ue;s.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(d.a,{client:He,children:Object(H.jsxs)(l.a,{theme:qe,children:[Object(H.jsx)(u.a,{}),Object(H.jsx)(Ie,{})]})})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.8c448a5c.chunk.js.map