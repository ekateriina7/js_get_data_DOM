var e=Array.from(document.querySelectorAll(".population")).map(function(e){var r=e.innerText,t="",n=!0,o=!1,a=void 0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var i=l.value;isNaN(i)||" "===i||(t+=i)}}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return parseInt(t,10)}),r=e.reduce(function(e,r){return e+r},0),t=r/e.length;document.querySelector(".total-population").innerText=r.toLocaleString("en-US"),document.querySelector(".average-population").innerText=Number(t.toFixed(0)).toLocaleString("en-US");
//# sourceMappingURL=index.6fd4b498.js.map