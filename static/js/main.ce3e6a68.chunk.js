(this.webpackJsonppp4_2106=this.webpackJsonppp4_2106||[]).push([[0],{29:function(t,e,a){},30:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),i=a(23),n=a.n(i),r=(a(29),a(30),a(2)),o=a(4),l=a.n(o),h=a(12),u=a(7),j=a(9),p=a(11),d=a(10),b=(a(32),a(13)),f=(a(33),a(0)),m=function(t){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"/Home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"/About",children:"About"})})]})})},v=function(t){return Object(f.jsx)("header",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("h1",{children:"Marvel Wiki"})}),Object(f.jsx)("li",{children:Object(f.jsx)(m,{})})]})})},x=a(14),O=(a(40),function(t){return Object(f.jsxs)("footer",{children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/jjkneiss-aba/",children:Object(f.jsx)(x.c,{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.facebook.com/daevus.abaddon.1/",children:Object(f.jsx)(x.a,{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"https://www.instagram.com/jj_kneiss/",children:Object(f.jsx)(x.b,{})})})]}),Object(f.jsxs)("a",{href:"http://marvel.com\\",className:"attribute",children:[" ",t.credit]})]})}),g=a(17),w=(a(41),function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(u.a)(this,a),(s=e.call(this,t)).handleChange=function(t){s.setState({value:t.target.value})},s.handleSubmit=function(t){t.preventDefault()},s.doSearch=function(t){t.preventDefault(),s.props.history.push("/Search/"+s.state.value)},s.state={value:s.props.match.params.text||""},s.handleChange=s.handleChange.bind(Object(g.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(g.a)(s)),s}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.doSearch,children:[Object(f.jsx)("input",{type:"text",value:this.state.value,placeholder:"Search",onChange:this.handleChange}),Object(f.jsx)("button",{disabled:!(this.state.value&&this.state.value.length>0),children:Object(f.jsx)(x.d,{})})]})}}]),a}(c.a.Component)),k=Object(r.f)(w),y=function t(){Object(u.a)(this,t),this.id="",this.name="",this.description="",this.thumbnail="",this.comics="",this.events="",this.series="",this.stories="",this.wiki=""},S=(a(42),function(t){var e=t.val.name,a=t.val.id,s=t.val.description||"No Description Available",c=t.val.thumbnail,i=function(e){return Object(f.jsx)(b.b,{to:{pathname:"/Character/"+a,state:t.val},children:e})};return Object(f.jsxs)("article",{className:"item-card",children:[Object(f.jsx)("h3",{children:i(e)}),i(Object(f.jsx)("img",{alt:e,src:c,width:t.width,height:t.height})),Object(f.jsxs)("div",{className:"description",children:[function(){if("No Description Available"===s||" "===s)return Object(f.jsx)("p",{className:"unavailable",children:"No Description Available"});var t=s.slice(" ",240);return t+="...",Object(f.jsx)("p",{children:t})}(),i("Details")]})]},t.id)}),D=(a(43),function(t){var e=t.path.map((function(t,e){return Object(f.jsx)(S,{val:t,height:"150px",width:"150px"},t.id)}));return Object(f.jsx)("section",{className:"characters",children:e})}),A=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={charData:[],attribution:[],limiter:8,offset:0,totalResults:0},t.loadAPI=Object(h.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://gateway.marvel.com/v1/public/characters?&apikey=","9fc3988f672586da032a847df46e7861",a="https://gateway.marvel.com/v1/public/characters?&apikey=9fc3988f672586da032a847df46e7861",a+="&limit="+t.state.limiter,a+="&offset="+t.state.offset,console.log("api url",a),t.setData(a);case 7:case"end":return e.stop()}}),e)}))),t.componentDidMount=function(){return t.loadAPI()},t}return Object(j.a)(a,[{key:"sendSearch",value:function(t){var e=this;void 0!==t&&""!==t?Object(h.a)(l.a.mark((function a(){var s,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:"https://gateway.marvel.com/v1/public/characters?nameStartsWith=",s="https://gateway.marvel.com/v1/public/characters?nameStartsWith="+t,s+="&limit="+e.state.limiter,s+="&offset="+e.state.offset,"&apikey=","9fc3988f672586da032a847df46e7861","&apikey=9fc3988f672586da032a847df46e7861",c=s+"&apikey=9fc3988f672586da032a847df46e7861",e.setData(c);case 10:case"end":return a.stop()}}),a)})))():alert("Search bar empty.")}},{key:"setData",value:function(){var t=Object(h.a)(l.a.mark((function t(e){var a,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,c=this.state.charData||[],0===s.data.results.length?alert("No results. Please check your spelling"):(console.log(e),console.log("api response",s.data),this.setState({offset:s.data.offset+s.data.count,totalResults:s.data.total}),console.log("data",this.state.charData),console.log("limiter",this.state.limiter),console.log("offset",this.state.offset),console.log("totalResults",this.state.totalResults),s.data.results.forEach((function(t){var e=new y;e.id=t.id,e.name=t.name,e.description=t.description,e.thumbnail=t.thumbnail.path+"."+t.thumbnail.extension,e.comics=t.comics,e.events=t.events,e.series=t.series,e.stories=t.stories,e.wiki=t.urls[0].url,c.push(e)})),this.setState({charData:c}),this.setState({attribution:s.attributionText}),console.log(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{}),Object(f.jsx)(k,{}),Object(f.jsx)(D,{path:this.state.charData,className:"characters"}),Object(f.jsx)("button",{className:"load-more",onClick:this.loadAPI,children:"Load More"}),Object(f.jsxs)("p",{children:["Showing ",this.state.charData.length," of ",this.state.totalResults," results."]}),Object(f.jsx)(O,{credit:this.state.attribution})]})}}]),a}(s.Component),N=a.p+"static/media/profileImage.60151e97.jpg",C=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={formInput:[{}],profile:[{name:"Jamie Kneiss",thumbnail:N,description:"Description"}],project:[{name:"Project Synopsis: Marvel Wiki",description:"A simple wiki using the Marvel API"}]},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this.state.profile.map((function(t,e){return Object(f.jsx)(S,{val:t,height:"100px",width:"100px"},e)}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("section",{children:[Object(f.jsxs)("div",{className:"profile",children:[Object(f.jsx)("h2",{children:"Jamie Kneiss"}),Object(f.jsx)("img",{alt:t,src:N,height:"300px",width:"300px"}),Object(f.jsx)("p",{children:"Jamie is an aspiring web developer doing his best to bring the spirit of each project to life."})]}),Object(f.jsxs)("div",{className:"project",children:[Object(f.jsx)("h2",{children:"Project: Marvel Wiki"}),Object(f.jsx)("p",{children:"While just a basic wiki application using the Marvel API, this React based application has taught Jamie a lot about the React framework, maintaining project scope, and simply thinking along the lines that a developer should. "})]})]})]})}}]),a}(s.Component),P=(a(44),function(t){return Object(f.jsxs)("article",{children:[Object(f.jsx)("h2",{children:t.title}),Object(f.jsx)("ul",{children:0===t.path.length?Object(f.jsx)("p",{className:"unavailable",children:"Not Available"}):t.path.map((function(t,e){return Object(f.jsx)("li",{children:t.name},e)}))})]})}),R=(a(45),function(t){return Object(f.jsxs)("section",{className:"individual",children:[Object(f.jsx)("h2",{children:t.character.name}),Object(f.jsx)("img",{alt:t.character.name,src:t.character.thumbnail,height:"300px",width:"300px"}),t.method,Object(f.jsx)("a",{href:t.character.wiki,children:"Go to Official Marvel Wiki"})]})}),I=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={character:{id:"",name:"",description:"",thumbnail:"",comics:[],series:[],stories:[],events:[],wiki:""}},t.loadCharacter=function(){var e=t.props.location.state,a=new y;void 0===e?t.loadAPI():(a.id=e.id,a.name=e.name,a.description=e.description,a.thumbnail=e.thumbnail,a.comics=e.comics.items,a.series=e.series.items,a.stories=e.stories.items,a.events=e.events.items,a.wiki=e.wiki),t.setState({character:a})},t.loadAPI=Object(h.a)(l.a.mark((function e(){var a,s,c,i,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.match.params.text,"https://gateway.marvel.com/v1/public/characters/","9fc3988f672586da032a847df46e7861",s="https://gateway.marvel.com/v1/public/characters/"+(a+"?apikey=")+"9fc3988f672586da032a847df46e7861",e.prev=5,e.next=8,fetch(s);case 8:return c=e.sent,e.next=11,c.json();case 11:i=e.sent,n=i.data.results[0],console.log(),(r=new y).id=n.id,r.name=n.name,r.description=n.description,r.thumbnail=n.thumbnail.path+"."+n.thumbnail.extension,r.comics=n.comics.items,r.series=n.series.items,r.stories=n.stories.items,r.events=n.events.items,r.wiki=n.wiki,t.setState({character:r}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(5),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[5,27]])}))),t.componentDidMount=function(){return t.loadCharacter()},t}return Object(j.a)(a,[{key:"renderDescription",value:function(t){return""===t?Object(f.jsx)("p",{className:"unavailable",children:"No Description Available"}):Object(f.jsx)("p",{children:t})}},{key:"renderLists",value:function(t){console.log(t.comics.length);var e=[t.comics,t.series,t.events,t.stories];console.log(e);var a=t.comics.length+t.series.length+t.events.length+t.stories.length;return e.forEach((function(t){a+=t.length})),console.log(a),0===a?Object(f.jsx)("p",{children:"whoops"}):Object(f.jsxs)("section",{className:"characters",children:[Object(f.jsx)(P,{title:"Comics",path:t.comics}),Object(f.jsx)(P,{title:"Series",path:t.series}),Object(f.jsx)(P,{title:"Events",path:t.events}),Object(f.jsx)(P,{title:"Stories",path:t.stories})]})}},{key:"render",value:function(){var t=this.state.character;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{}),Object(f.jsx)(R,{character:t,method:this.renderDescription(t.description)}),this.renderLists(t),Object(f.jsx)(O,{credit:this.state.attribution})]})}}]),a}(s.Component),M=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={charData:[],attribution:[],limiter:8,offset:0,totalResults:0},t.loadAPI=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.sendSearch(t.props.match.params.text);case 1:case"end":return e.stop()}}),e)}))),t.componentDidMount=function(){return t.sendSearch(t.props.match.params.text,"search")},t.componentDidUpdate=function(e){e.match.params.text!==t.props.match.params.text&&(t.setState({charData:[]}),t.setState({offset:0}),t.setState({totalResults:0}),console.log("Prior Update: Offset: ".concat(t.state.offset,", Limiter: ").concat(t.state.limiter,", Total: ").concat(t.state.totalResults)),t.sendSearch(t.props.match.params.text,"search"))},t}return Object(j.a)(a,[{key:"sendSearch",value:function(t,e){var a=this;void 0!==t&&""!==t?Object(h.a)(l.a.mark((function s(){var c,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:"https://gateway.marvel.com/v1/public/characters?nameStartsWith=",c="https://gateway.marvel.com/v1/public/characters?nameStartsWith="+t,c+="&limit="+a.state.limiter,"search"===e?(a.setState({offset:0}),c+="&offset=0"):c+="&offset="+a.state.offset,"&apikey=","9fc3988f672586da032a847df46e7861","&apikey=9fc3988f672586da032a847df46e7861",i=c+"&apikey=9fc3988f672586da032a847df46e7861",a.setData(i);case 10:case"end":return s.stop()}}),s)})))():alert("Search bar empty.")}},{key:"setData",value:function(){var t=Object(h.a)(l.a.mark((function t(e){var a,s,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,c=this.state.charData||[],i=s.attributionText,0===s.data.results.length?alert("No results. Please check your spelling"):(console.log("api response",s.data),s.data.results.forEach((function(t){var e=new y;e.id=t.id,e.name=t.name,e.description=t.description,e.thumbnail=t.thumbnail.path+"."+t.thumbnail.extension,e.comics=t.comics,e.events=t.events,e.series=t.series,e.stories=t.stories,e.wiki=t.urls[1].url,c.push(e)})),this.setState({charData:c,attribution:i,offset:s.data.offset+s.data.count,totalResults:s.data.total}),console.log(c)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,this,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{}),Object(f.jsx)(k,{}),Object(f.jsx)(D,{path:this.state.charData,className:"characters"}),Object(f.jsx)("button",{disabled:this.state.charData.length===this.state.totalResults,className:"load-more",onClick:this.loadAPI,children:"Load More"}),Object(f.jsxs)("p",{children:["Showing ",this.state.charData.length," of ",this.state.totalResults," results."]}),Object(f.jsx)(O,{credit:this.state.attribution})]})}}]),a}(s.Component),W=function(){return Object(f.jsx)("section",{children:Object(f.jsxs)(r.c,{children:[Object(f.jsx)(r.a,{exact:!0,path:"/",component:A}),Object(f.jsx)(r.a,{path:"/Home",component:A}),Object(f.jsx)(r.a,{path:"/About",component:C}),Object(f.jsx)(r.a,{path:"/Character/:text",component:I}),Object(f.jsx)(r.a,{path:"/Search/:text",component:M})]})})};var J=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b.a,{children:Object(f.jsx)(W,{})})})};n.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ce3e6a68.chunk.js.map