!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){root=this,ws=window.WebSocket;var r=n(2);window.paybook=r,console.log("paybook start")},function(t,e,n){var r={},o=n(3),i=n(10),s=n(11);r.api=o,r.action=i,r.store=s,t.exports=r},function(t,e,n){var r=n(4),o={};o.apiKey=!1,o.baseUri="https://sync.paybook.com/v1",o.is_test=!1;var i=function(t){return console.log("======ERROR"),t.response?t.response.body:(console.log(t),t)},s=function(t,e,n,s){e.api_key=o.apiKey,s===!0?dataUrl=t:dataUrl=o.baseUri+t,r.post(dataUrl).type("json").send(e).set("Content-Type","application/x-www-form-urlencoded").set("Accept","application/json").end(function(t,e){return t?void(n?n(i(t),void 0):i(t)):void n(void 0,e.body.response)})},a=function(t,e,n){e.api_key=o.apiKey,r.del(o.baseUri+t).query(e).set("Accept","application/json").end(function(t,e){return t?void n(i(t),void 0):(console.log("==BODY DEL"),console.log(e.body),void n(void 0,e.body))})},c=function(t,e,n){e.api_key=o.apiKey,e.is_test=o.is_test,r.get(o.baseUri+t).query(e).set("Accept","application/json").end(function(t,e){return t?void n(i(t),void 0):(console.log("==BODY GET"),console.log(e.body),void n(void 0,e.body))})};o.setApiKey=function(t){this.apiKey=t},o.setTest=function(t){this.is_test=t},o.createUser=function(t,e,n){var r={name:t,id_external:e};s("/users",r,n)},o.getUsers=function(t,e){c("/users",{},e)},o.deleteUser=function(t,e){var n={id_user:t};a("/users/"+t,n,e)},o.createSession=function(t,e){s("/sessions",{id_user:t},e)},o.login=o.createSession,o.verifySession=function(t,e){c("/sessions/"+t+"/verify",{},e)},o.deleteSession=function(t,e){a("/sessions/"+t,{},e)},o.signup=function(t,e){s("/users",{name:t},e)},o.credentials=function(t,e,n,r){var o={token:t,id_site:e,credentials:n};s("/credentials",o,r)},o.submitTwofa=function(t,e,n,r,o){var i={token:e,id_site:n,twofa:r};console.log(i),s(t,i,o,!0)},o.getCredentials=function(t,e){c("/credentials",{token:t},e)},o.deleteCredentials=function(t,e,n){a("/credentials/"+e,{},n)},o.getAccounts=function(t,e,n){var r={token:t};for(var o in e)r[o]=e[o];c("/accounts",r,n)},o.getTransactions=function(t,e,n){var r={token:t};for(var o in e)r[o]=e[o];c("/transactions",r,n)},o.getTransactionsCount=function(t,e,n){var r={token:t};for(var o in e)r[o]=e[o];c("/transactions/count",r,n)},o.getAttahcments=function(t,e,n){var r={token:t};for(var o in e)r[o]=e[o];c("/attachments",r,n)},o.getAttahcmentsCount=function(t,e,n){var r={token:t};for(var o in e)r[o]=e[o];c("/attachments/counts",r,n)},o.getAttahcment=function(t,e,n){var r={token:t};c("/attachments/"+e,r,n)},o.getAttahcmentExtra=function(t,e,n){var r={token:t};c("/attachments/"+e+"/extra",r,n)},o.cataloguesAccountTypes=function(t,e){c("/catalogues/account_types",{token:t},e)},o.cataloguesAttachmentTypes=function(t,e){c("/catalogues/attachment_types",{token:t},e)},o.cataloguesAccountCountries=function(t,e){c("/catalogues/countries",{token:t},e)},o.cataloguesSites=function(t,e){c("/catalogues/sites",{token:t},e)},o.cataloguesSiteOrganizations=function(t,e){c("/catalogues/site_organizations",{token:t},e)},t.exports=o},function(t,e,n){function r(){}function o(t){if(!b(t))return t;var e=[];for(var n in t)null!=t[n]&&i(e,n,t[n]);return e.join("&")}function i(t,e,n){if(Array.isArray(n))return n.forEach(function(n){i(t,e,n)});if(b(n))for(var r in n)i(t,e+"["+r+"]",n[r]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}function s(t){for(var e,n,r={},o=t.split("&"),i=0,s=o.length;s>i;++i)e=o[i],n=e.indexOf("="),-1==n?r[decodeURIComponent(e)]="":r[decodeURIComponent(e.slice(0,n))]=decodeURIComponent(e.slice(n+1));return r}function a(t){var e,n,r,o,i=t.split(/\r?\n/),s={};i.pop();for(var a=0,c=i.length;c>a;++a)n=i[a],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),o=_(n.slice(e+1)),s[r]=o;return s}function c(t){return/[\/+]json\b/.test(t)}function u(t){return t.split(/ *; */).shift()}function f(t){return y(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),r=n.shift(),o=n.shift();return r&&o&&(t[r]=o),t},{})}function d(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function l(t,e){var n=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new d(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,t.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(t)}if(n.emit("response",e),t)return n.callback(t,e);try{if(e.status>=200&&e.status<300)return n.callback(t,e);var o=new Error(e.statusText||"Unsuccessful HTTP response");o.original=t,o.response=e,o.status=e.status,n.callback(o,e)}catch(r){n.callback(r)}})}function p(t,e){var n=m("DELETE",t);return e&&n.end(e),n}var h,v=n(5),y=n(6),g=n(7),b=n(8);h="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var m=t.exports=n(9).bind(null,l);m.getXHR=function(){if(!(!h.XMLHttpRequest||h.location&&"file:"==h.location.protocol&&h.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var _="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};m.serializeObject=o,m.parseString=s,m.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},m.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},m.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},d.prototype.get=function(t){return this.header[t.toLowerCase()]},d.prototype._setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=u(e);var n=f(e);for(var r in n)this[r]=n[r]},d.prototype._parseBody=function(t){var e=m.parse[this.type];return!e&&c(this.type)&&(e=m.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},d.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},d.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",o=new Error(r);return o.status=this.status,o.method=e,o.url=n,o},m.Response=d,v(l.prototype);for(var w in g)l.prototype[w]=g[w];l.prototype.type=function(t){return this.set("Content-Type",m.types[t]||t),this},l.prototype.responseType=function(t){return this._responseType=t,this},l.prototype.accept=function(t){return this.set("Accept",m.types[t]||t),this},l.prototype.auth=function(t,e,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(t+":"+e);this.set("Authorization","Basic "+r);break;case"auto":this.username=t,this.password=e}return this},l.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},l.prototype.attach=function(t,e,n){return this._getFormData().append(t,e,n||e.name),this},l.prototype._getFormData=function(){return this._formData||(this._formData=new h.FormData),this._formData},l.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},l.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},l.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},l.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},l.prototype.end=function(t){var e=this,n=this.xhr=m.getXHR(),o=this._timeout,i=this._formData||this._data;this._callback=t||r,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(r){t=0}if(0==t){if(e.timedout)return e._timeoutError();if(e._aborted)return;return e.crossDomainError()}e.emit("end")}};var s=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(n.onprogress=s);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=s)}catch(a){}if(o&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},o)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof i&&!this._isHost(i)){var u=this._header["content-type"],f=this._serializer||m.serialize[u?u.split(";")[0]:""];!f&&c(u)&&(f=m.serialize["application/json"]),f&&(i=f(i))}for(var d in this.header)null!=this.header[d]&&n.setRequestHeader(d,this.header[d]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send("undefined"!=typeof i?i:null),this},m.Request=l,m.get=function(t,e,n){var r=m("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},m.head=function(t,e,n){var r=m("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.options=function(t,e,n){var r=m("OPTIONS",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.del=p,m["delete"]=p,m.patch=function(t,e,n){var r=m("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.post=function(t,e,n){var r=m("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.put=function(t,e,n){var r=m("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r}},function(t,e,n){function r(t){return t?o(t):void 0}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;o>r;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports=function(t,e,n){for(var r=0,o=t.length,i=3==arguments.length?n:t[r++];o>r;)i=e.call(null,i,t[r],++r,t);return i}},function(t,e,n){var r=n(8);e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.serialize=function(t){return this._serializer=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(t,e){n.end(function(n,r){n?e(n):t(r)})})}return this._fullfilledPromise.then(t,e)},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(t,e){if(r(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(t,e){return this._getFormData().append(t,e),this},e.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},e.withCredentials=function(){return this._withCredentials=!0,this},e.redirects=function(t){return this._maxRedirects=t,this},e.toJSON=function(){return{method:this.method,url:this.url,data:this._data}},e._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},e.send=function(t){var e=r(t),n=this._header["content-type"];if(e&&r(this._data))for(var o in t)this._data[o]=t[o];else"string"==typeof t?(n||this.type("form"),n=this._header["content-type"],"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(n||this.type("json"),this)}},function(t,e){function n(t){return null!==t&&"object"==typeof t}t.exports=n},function(t,e){function n(t,e,n){return"function"==typeof n?new t("GET",e).end(n):2==arguments.length?new t("GET",e):new t(e,n)}t.exports=n},function(t,e,n){var r={},o=n(3),i=n(11),s=n(26);r.setTest=function(t,e){o.setTest(t),r.catalogues(e)},r.getAccounts=function(t){var e=i.getState();o.getAccounts(e.user.token,{},function(e,n){return e?void(t&&t&&t(e,void 0)):(i.dispatch({type:"ACCOUNTS_SET",accounts:n.response}),void(t&&t(void 0,n.response)))})},r.getTransactions=function(t){var e=i.getState();o.getTransactions(e.user.token,{},function(e,n){return e?void(t&&t&&t(e,void 0)):(i.dispatch({type:"TRANSACTIONS_SET",transactions:n.response}),void(t&&t(void 0,n.response)))})},r.submitTwofa=function(t,e){var n=i.getState();o.submitTwofa(n.credentials.submit.twofa,n.user.token,n.credentials.site.id_site,t,function(t,n){return t?void(e&&e&&e(t,void 0)):void(e&&e(void 0,n))})},r.waitForTwofa=function(t,e){i.dispatch({type:"CREDENTIALS_TWOFA",twofa:t}),e&&e()},r.checkCredentialsStatus=function(t,e,n){var o=new s(t);root.process?o.on("message",function(t,o){t=JSON.parse(t),console.log("====code "+t.code),i.dispatch({type:"CREDENTIALS_STATE",state:t.code}),t.code>=200&&t.code<300?e&&e(void 0,t.code):410==t.code?r.waitForTwofa(t.twofa,n):t.code>=400&&e&&e(t.code,void 0)}):o.onmessage=function(t,o){data=JSON.parse(t.data),console.log(data),console.log("====code "+data.code),i.dispatch({type:"CREDENTIALS_STATE",state:data.code}),data.code>=200&&data.code<300?e&&e(void 0,data.code):410==data.code?r.waitForTwofa(data.twofa,n):data.code>=400&&e&&e(data.code,void 0)}},r.getCredentials=function(t){var e=i.getState();o.getCredentials(e.user.token,function(e,n){return e?void(t&&t&&t(e,void 0)):(i.dispatch({type:"CREDENTIALS_SITES",credentials:n.response}),void(t&&t(void 0,n.response)))})},r.submitCredentials=function(t,e,n){var s=i.getState();o.credentials(s.user.token,s.credentials.site.id_site,t,function(t,o){return t?void(e&&e(t,void 0)):(i.dispatch({type:"CREDENTIALS_SUBMIT",credentials:o}),void r.checkCredentialsStatus(o.ws,e,n))})},r.setSite=function(t){var e=i.getState().catalogues,n=!1;e.forEach(function(e){e.id_site===t&&(n=e)}),i.dispatch({type:"CREDENTIALS_SITE",site:n})},r.catalogues=function(t){var e=i.getState().user.toke;o.cataloguesSites(e,function(n,r){return n?void(t&&t(n,void 0)):void o.cataloguesSiteOrganizations(e,function(e,n){if(e)return void(t&&t(e,void 0));var o=r.response,s=n.response;o.forEach(function(t){s.forEach(function(e){t.id_site_organization==e.id_site_organization&&(t.avatar=e.avatar)})}),i.dispatch({type:"CATALOGUES_SET",catalogues:o}),t&&t(void 0,o)})})},r.signup=function(t,e,n){o.createUser(t,e,function(t,e){return t?void(n&&n(t,void 0)):void(n&&n(void 0,e))})},r.login=function(t,e,n){o.getUsers({},function(r,s){if(r)return void(n&&n(r,void 0));var a=s.response,c=!1;return a.forEach(function(n){n.name===t&&n.id_external===e&&(c=n)}),c===!1?void(n&&n(r,void 0)):void o.createSession(c.id_user,function(e,r){return e?void(n&&n(e,void 0)):(i.dispatch({type:"USER_LOGIN",token:r.token,username:t}),void(n&&n(void 0,r)))})})},r.error=function(t,e){},r.loading=function(t){},t.exports=r},function(t,e,n){var r=n(12),o=r.createStore,i=r.combineReducers,s={user:{username:!1,token:!1},catalogues:[],credentials:{submit:!1,site:!1,state:!1,twofa:!1},credentialsSites:[],accounts:[],transactions:[]},a=function(t,e){if(void 0===t)return s.catalogues;if("CATALOGUES_SET"===e.type){var n=e.catalogues.slice(0);return n}return t},c=function(t,e){if(void 0===t)return s.catalogues;if("ACCOUNTS_SET"===e.type){var n=e.accounts.slice(0);return n}return t},u=function(t,e){if(void 0===t)return s.catalogues;if("TRANSACTIONS_SET"===e.type){var n=e.transactions.slice(0);return n}return t},f=function(t,e){if(void 0===t)return s.catalogues;if("CREDENTIALS_SITES"===e.type){var n=e.credentials.slice(0);return n}return t},d=function(t,e){return void 0===t?Object.assign({},t,s.credentials):"CREDENTIALS_CLEAR"===e.type?Object.assign({},t,{submit:!1,site:!1,state:!1,twofa:!1}):"CREDENTIALS_SUBMIT"===e.type?Object.assign({},t,{submit:e.credentials}):"CREDENTIALS_STATE"===e.type?Object.assign({},t,{state:e.state}):"CREDENTIALS_SITE"===e.type?Object.assign({},t,{site:e.site}):"CREDENTIALS_TWOFA"===e.type?Object.assign({},t,{twofa:e.twofa}):t},l=function(t,e){return void 0===t||"USER_LOGOUT"===e.type?Object.assign({},t,s.user):"USER_LOGIN"===e.type?Object.assign({},t,{username:e.username,token:e.token}):t},p=i({catalogues:a,credentials:d,user:l,credentialsSites:f,accounts:c,transactions:u});store=o(p,s),t.exports=store},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var i=n(14),s=r(i),a=n(21),c=r(a),u=n(23),f=r(u),d=n(24),l=r(d),p=n(25),h=r(p),v=n(22),y=r(v);"production"!==t.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,y["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),e.createStore=s["default"],e.combineReducers=c["default"],e.bindActionCreators=f["default"],e.applyMiddleware=l["default"],e.compose=h["default"]}).call(e,n(13))},function(t,e){function n(){d&&s&&(d=!1,s.length?f=s.concat(f):l=-1,f.length&&r())}function r(){if(!d){var t=c(n);d=!0;for(var e=f.length;e;){for(s=f,f=[];++l<e;)s&&s[l].run();l=-1,e=f.length}s=null,d=!1,u(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var s,a=t.exports={},c=setTimeout,u=clearTimeout,f=[],d=!1,l=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new o(t,e)),1!==f.length||d||c(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){g===y&&(g=y.slice())}function i(){return v}function a(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return r(),g.push(t),function(){if(e){e=!1,r();var n=g.indexOf(t);g.splice(n,1)}}}function f(t){if(!(0,s["default"])(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,v=h(v,t)}finally{b=!1}for(var e=y=g,n=0;n<e.length;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");h=t,f({type:u.INIT})}function l(){var t,e=a;return t={subscribe:function(t){function n(){t.next&&t.next(i())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[c["default"]]=function(){return this},t}var p;if("function"==typeof e&&"undefined"==typeof n&&(n=e,e=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var h=t,v=e,y=[],g=y,b=!1;return f({type:u.INIT}),p={dispatch:f,subscribe:a,getState:i,replaceReducer:d},p[c["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(15),s=r(i),a=n(19),c=r(a),u=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){function r(t){if(!s(t)||l.call(t)!=a||i(t))return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==d}var o=n(16),i=n(17),s=n(18),a="[object Object]",c=Object.prototype,u=Function.prototype.toString,f=c.hasOwnProperty,d=u.call(Object),l=c.toString;t.exports=r},function(t,e){function n(t){return r(Object(t))}var r=Object.getPrototypeOf;t.exports=n},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){(function(e){"use strict";t.exports=n(20)(e||window||this)}).call(e,function(){return this}())},function(t,e){"use strict";t.exports=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(t,e,n){var r=Object.keys(e),o=n&&n.type===c.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,f["default"])(t))return"The "+o+' has unexpected type of "'+{}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(t).filter(function(t){return!e.hasOwnProperty(t)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function s(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function a(e){for(var n=Object.keys(e),r={},a=0;a<n.length;a++){var c=n[a];"function"==typeof e[c]&&(r[c]=e[c])}var u,f=Object.keys(r);try{s(r)}catch(d){u=d}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(u)throw u;if("production"!==t.env.NODE_ENV){var s=i(e,r,n);s&&(0,l["default"])(s)}for(var a=!1,c={},d=0;d<f.length;d++){var p=f[d],h=r[p],v=e[p],y=h(v,n);if("undefined"==typeof y){var g=o(p,n);throw new Error(g)}c[p]=y,a=a||y!==v}return a?c:e}}e.__esModule=!0,e["default"]=a;var c=n(14),u=n(15),f=r(u),d=n(22),l=r(d)}).call(e,n(13))},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;i<r.length;i++){var s=r[i],a=t[s];"function"==typeof a&&(o[s]=n(a,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var s=t(n,r,o),c=s.dispatch,u=[],f={getState:s.getState,dispatch:function(t){return c(t)}};return u=e.map(function(t){return t(f)}),c=a["default"].apply(void 0,u)(s.dispatch),i({},s,{dispatch:c})}}}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var s=n(25),a=r(s)},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};var r=function(){var t=e[e.length-1],n=e.slice(0,-1);return{v:function(){return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}e.__esModule=!0,e["default"]=n},function(t,e){t.exports=ws}]);
//# sourceMappingURL=paybook.js.map