"use strict";var precacheConfig=[["/react-drum-machine/index.html","9a61e0ce71012a6cd8f072488347a9c4"],["/react-drum-machine/static/css/main.9a53bf9c.css","90b1f36dec516397cde4242fef5d9032"],["/react-drum-machine/static/js/main.893e7a6f.js","a500de7f4adb40bc8e7b80741182cfca"],["/react-drum-machine/static/media/clap-808.bb88ffe0.mp3","bb88ffe031087b62bd0a3a23cb14038d"],["/react-drum-machine/static/media/crash-noise.b830886b.mp3","b830886bddf9754d1720d3bf28647fc0"],["/react-drum-machine/static/media/hihat-dist02.7ece78ae.mp3","7ece78ae5897121fc15db3f1493ee798"],["/react-drum-machine/static/media/kick-thump.647c97f9.mp3","647c97f988b05a6bbf9335ec8d66d32c"],["/react-drum-machine/static/media/kick-zapper.92d87635.mp3","92d87635c60801b570a59dd13a41983a"],["/react-drum-machine/static/media/perc-tribal.99b1647b.mp3","99b1647ba8d589453f444ac377a41430"],["/react-drum-machine/static/media/ride-acoustic02.1cc4663d.mp3","1cc4663d3fee469f47553d782303117d"],["/react-drum-machine/static/media/snare-block.f6dd295f.mp3","f6dd295fb7d2a1581084bd10da013896"],["/react-drum-machine/static/media/tom-analog.722554d7.mp3","722554d71aadf5fcda925d16baabdcee"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/react-drum-machine/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});