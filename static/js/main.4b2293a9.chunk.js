(this.webpackJsonptypingapp=this.webpackJsonptypingapp||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),s=a.n(l);a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,o,i=a(6),u=a(7),m=a(9),d=a(8),p=(a(20),a(24)),E=a(25),b=a(26),h=a(27),f=(a(21),a(22),a(5)),g=a.n(f),y=[],k=0,v=!1,N=!1,w=0,x=[],C=[],M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={allNodes:y,rawArray:[],currentLetter:"",index:0,wordsPerMin:0,timerIsOn:!1,accuracyScore:100,timerTime:0,totalCharTyped:0},e.changeColor=function(){return e.state.allNodes.map((function(t,a){return 1===t.currentColor?a===e.state.index?" "===t.letter?r.createElement(p.a,{className:"Error1 bg-black pa2 shadow-1",md:"auto",key:a},t.letter):r.createElement(p.a,{className:"Error1 bg-black pa1 shadow-1",md:"auto",key:a},t.letter):" "===t.letter?r.createElement(p.a,{className:"Error pa2 bb",md:"auto",key:a},t.letter):r.createElement(p.a,{className:"Error pa1 bb",md:"auto",key:a},t.letter):a===e.state.index?" "===t.letter?r.createElement(p.a,{className:"Coll1 bg-black pa2 shadow-1",md:"auto",key:a},t.letter):r.createElement(p.a,{className:"Coll1 bg-black pa1 shadow-1",md:"auto",key:a},t.letter):" "===t.letter?r.createElement(p.a,{className:"Coll bg-lightest-blue pa2 bb",md:"auto",key:a},t.letter):r.createElement(p.a,{className:"Coll bg-lightest-blue pa1 bb",md:"auto",key:a},t.letter)}))},e.gettingKeyPressed=function(t){if(27===t.which&&(g()(".startButton").prop("disabled",!1),e.setState({timerIsOn:!1}),clearInterval(o),v=!0),!1===v&&!0===N){32===t.keyCode&&t.target===document.body&&t.preventDefault();var a=e.state.index;if(e.setState({currentLetter:t.key}),e.state.index<e.state.allNodes.length){if("Shift"!==e.state.currentLetter)if(e.setState({totalCharTyped:e.state.totalCharTyped+1}),e.state.currentLetter===e.state.allNodes[e.state.index].letter)e.setState({index:a+1});else{var r=Object.assign({},e.state.allNodes);r[e.state.index].currentColor=1,y=r}if(a>=5){w=Math.round(a/5/(e.state.timerTime/60)),e.setState({wordsPerMin:w});var n=Math.round((e.state.index-x.length)/e.state.totalCharTyped*100);e.setState({accuracyScore:n})}}else e.reset()}},e.filterErrors=function(){return C=[],(x=e.state.allNodes.filter((function(e){return e.currentColor>0}))).map((function(e){if(C.some((function(t){return t.letterMistake===e.letter}))){var t;for(t=0;t<C.length;t++)C[t].letterMistake===e.letter&&(C[t].countMistake=C[t].countMistake+1)}else{var a={letterMistake:e.letter,countMistake:1};C.push(a)}})),0!==x.length?r.createElement("div",null,r.createElement(E.a,{className:"justify-content-md-center"},r.createElement(p.a,{className:"text-center bg-lightest-blue b bb",md:"3"},"Errors:")),r.createElement(E.a,{className:"justify-content-md-center"},r.createElement(p.a,{className:"bg-lightest-blue",md:"3"},r.createElement("ul",null,e.returnErrors())))):r.createElement("div",null)},e.returnErrors=function(){return C.map((function(e,t){return" "===e.letterMistake?r.createElement("li",{key:t},"Space",": ",e.countMistake):","===e.letterMistake?r.createElement("li",{key:t},"Comma",": ",e.countMistake):"."===e.letterMistake?r.createElement("li",{key:t},"Period",": ",e.countMistake):r.createElement("li",{key:t},e.letterMistake,": ",e.countMistake)}))},e.start=function(){v=!1,N=!0,g()(".startButton").prop("disabled",!0),c=Array.from(e.props.text),0===k&&c.map((function(e,t){var a={letter:e,currentColor:0};y.push(a)})),k+=1,e.setState({timerIsOn:!0}),o=setInterval((function(){!0===e.state.timerIsOn&&e.setState({timerTime:e.state.timerTime+1})}),1e3)},e.reset=function(){g()(".resetButton").prop("disabled",!0),y=[],C=[],e.setState({index:0}),k=0,e.setState({allNodes:y}),e.setState({timerTime:0}),clearInterval(o),e.setState({wordsPerMin:0}),e.start(),g()(".resetButton").prop("disabled",!1)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.gettingKeyPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.gettingKeyPressed)}},{key:"render",value:function(){return r.createElement(b.a,null,r.createElement(E.a,{className:"bg-lightest-blue topContainer"},r.createElement(p.a,{className:"text-center"},r.createElement("p",null,"Timer: ",this.state.timerTime)),r.createElement(p.a,{className:"text-center"},r.createElement("p",null,"Words per minute: ",this.state.wordsPerMin)),r.createElement(p.a,{className:"text-center"},r.createElement("p",null,"Accuracy Score: ",this.state.accuracyScore,"%"))),r.createElement(E.a,{className:"justify-content-md-center bg-lightest-blue bottomContainer"},this.changeColor()),r.createElement(E.a,null,r.createElement("br",null)),r.createElement(E.a,{className:"justify-content-md-center"},r.createElement(p.a,null),r.createElement(p.a,null),r.createElement(p.a,{className:"text-center"},r.createElement(h.a,{variant:"warning",className:"startButton",onClick:this.start},"Start")),r.createElement(p.a,{className:"text-center"},r.createElement("h6",{className:"yellow"},"Press Escape key to pause")),r.createElement(p.a,{className:"text-center"},r.createElement(h.a,{variant:"warning",className:"resetButton",onClick:this.reset},"Reset")),r.createElement(p.a,null),r.createElement(p.a,null)),r.createElement(E.a,null,r.createElement("br",null)),r.createElement(b.a,{className:"justify-content-md-center"},this.filterErrors()))}}]),a}(r.Component),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.text;return r.createElement(b.a,{className:"hero-image",fluid:!0},r.createElement(b.a,{className:"text-center bg-lightest-blue topContainer",fluid:!0},r.createElement("br",null),r.createElement("h4",null,"Welcome to typing speed practice website!"),r.createElement("br",{className:" bg-lightest-blue"})),r.createElement("br",null),r.createElement(M,{text:e}))}}]),a}(r.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.4b2293a9.chunk.js.map