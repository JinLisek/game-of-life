(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),c=n(5),l=(n(33),n(34),n(21)),u=n(6),s=n(13),m=n(11),f=n(20),d=n(19),g=n(10),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).render=function(){return a.a.createElement("td",{onClick:r.onClick,className:r.getTileColor()})},r.onClick=function(){var e=r.state.tile;e.isAlive=!e.isAlive,r.setState({tile:e})},r.getTileColor=function(){return r.state.tile.isAlive?"bg-dark":"bg-light"},r.state={tile:e.tile},r}return n}(a.a.Component);function p(e,t,n){return!(e<0||t<0||e>=n.length||t>=n[0].length)&&n[e][t].isAlive}var h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){e.timerId=setInterval((function(){if("RUNNING"===e.props.gameState){for(var t=e.props.grid,n=Object(l.a)(t),r=0;r<n.length;++r)for(var a=0;a<n[r].length;++a){var i=0;p(a-1,r-1,t)&&i++,p(a,r-1,t)&&i++,p(a+1,r-1,t)&&i++,p(a-1,r,t)&&i++,p(a+1,r,t)&&i++,p(a-1,r+1,t)&&i++,p(a,r+1,t)&&i++,p(a+1,r+1,t)&&i++;var o=n[a][r];o.isAlive||3!==i?o.isAlive&&(i<2||i>3)&&(o.isAlive=!1):o.isAlive=!0}e.props.updateGrid(n)}}),1e3)},e.componentWillUnmount=function(){clearInterval(e.timerId)},e.render=function(){return a.a.createElement(g.a,{style:{width:600,height:"auto"}},a.a.createElement(d.a,null,a.a.createElement(f.a,{bordered:!0,size:"sm"},a.a.createElement("tbody",null,e.props.grid.map((function(e){return a.a.createElement("tr",{key:"row: "+e[0].y},e.map((function(e){return a.a.createElement(v,{tile:e,key:"x: "+e.x+", y: "+e.y})})))}))))))},e}return n}(a.a.Component),b=Object(c.b)((function(e){var t=e.game,n=e.grid;return{gameState:t.state,grid:n}}),(function(e){return{updateGrid:function(t){return e({type:"grid/updateGrid",updatedGrid:t})}}}))(h),y=n(12);var E=Object(c.b)((function(e){return{gameState:e.game.state}}),(function(e){return{startGame:function(){return e({type:"game/startGame"})}}}))((function(e){return a.a.createElement(y.a,{onClick:e.startGame},"Start")}));var O=Object(c.b)((function(e){return{gameState:e.game.state}}),(function(e){return{stopGame:function(){return e({type:"game/stopGame"})}}}))((function(e){return a.a.createElement(y.a,{onClick:e.stopGame},"Stop")}));var j=function(){return a.a.createElement(g.a,null,a.a.createElement(b,null),a.a.createElement(E,null),a.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(7),w=n(8),k=function e(t,n){Object(u.a)(this,e),this.isAlive=!1,this.x=t,this.y=n},A=Array.from({length:50},(function(e,t){return Array.from({length:50},(function(e,n){return new k(n,t)}))}));var S={state:"STOPPED"};var C=Object(G.c)(Object(G.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"game/startGame":return Object(w.a)(Object(w.a)({},e),{},{state:"RUNNING"});case"game/stopGame":return Object(w.a)(Object(w.a)({},e),{},{state:"STOPPED"});default:return e}},grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"grid/updateGrid":return t.updatedGrid;default:return e}}}));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:C},a.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1012eecd.chunk.js.map