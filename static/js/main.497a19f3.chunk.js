(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=(a(15),a(1)),l=a(2),i=a(4),u=a(3),d=a(5),p=a(9),h=a(6),f=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).flipCellsAroundMe=function(){},a.handleClick=function(e){a.props.flipCellsAroundMe()},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(n.Component)),m=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){a.setState({board:a.createBoard(),hasWon:!1})},a.state={hasWon:!1,board:a.createBoard()},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"flipCellsAround",value:function(e){console.log("flipping");var t=this.props,a=t.ncols,n=t.nrows,r=this.state,s=r.board,c=r.hasWon,o=e.split("-").map(Number),l=Object(p.a)(o,2),i=l[0],u=l[1];function d(e,t){t>=0&&t<a&&e>=0&&e<n&&(s[e][t]=!s[e][t])}d(i,u),d(i,u+1),d(i,u-1),d(i+1,u),d(i-1,u);for(var h=0,f=0;f<this.props.nrows;f++)for(var m=0;m<this.props.ncols;m++)!0===s[f][m]&&h++;0===h&&(c=!0),this.setState({board:s,hasWon:c})}},{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var a=[],n=0;n<this.props.ncols;n++)a.push(Math.random()<this.props.chanceLightStartsOn);e.push(a)}return e}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Board-winner"},r.a.createElement("div",{className:"neon"},"You"),r.a.createElement("div",{className:"flux"},"win!")),r.a.createElement("div",{className:"Board-retry"},r.a.createElement("button",{className:"Board-button",onClick:this.handleClick},"Play again ",r.a.createElement("i",{className:"fas fa-undo-alt"}))));for(var t=[],a=0;a<this.props.nrows;a++){for(var n=[],s=function(t){var s="".concat(a,"-").concat(t);n.push(r.a.createElement(f,{key:s,isLit:e.state.board[a][t],flipCellsAroundMe:function(){return e.flipCellsAround(s)}}))},c=0;c<this.props.ncols;c++)s(c);t.push(r.a.createElement("tr",{key:a},n))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-neons"},r.a.createElement("div",{className:"neon"},"Lights"),r.a.createElement("div",{className:"flux"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t)))}}]),t}(n.Component));m.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var b=m,v=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),t}(n.Component));c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.497a19f3.chunk.js.map