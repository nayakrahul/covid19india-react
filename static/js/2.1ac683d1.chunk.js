(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[2],{120:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},134:function(t,e,n){"use strict";var o=n(120);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withIsVisible",{enumerable:!0,get:function(){return r.withIsVisible}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"useIsVisible",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"VisibilityObserver",{enumerable:!0,get:function(){return u.default}});var r=n(199),i=o(n(155)),s=o(n(209)),u=o(n(135))},135:function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={},i=new WeakMap,s=function(t){return t.forEach((function(t){return i.get(t.target).call(null,t)}))},u=function(t){o.unobserve(t),i.delete(t)},c={getSubscribers:function(){return i},setIntersectionObserverOptions:function(t){o||(r=t)},unwatch:u,watch:function(t,e){if(t&&!i.has(t))return i.set(t,e),(o||(o=new IntersectionObserver(s,r)),o).observe(t),function(){return u(t)}}};e.default=c},154:function(t,e){!function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[],n=null,o=null;i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?f(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},i._resetCrossOriginUpdater=function(){n=null,o=null},i.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,r=null,i=null;if(this.POLL_INTERVAL?r=n.setInterval(o,this.POLL_INTERVAL):(s(n,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(i=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),u(t,"resize",o,!0)),u(e,"scroll",o,!0),i&&i.disconnect()})),e!=(this.root&&this.root.ownerDocument||t)){var c=d(e);c&&this._monitorIntersections(c.ownerDocument)}}},i.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&this.root.ownerDocument||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var r=d(n);if((n=r&&r.ownerDocument)==e)return!0}return!1}))){var r=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),r(),e!=o){var i=d(e);i&&this._unmonitorIntersections(i.ownerDocument)}}}},i.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},i.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=a(i),u=this._rootContainsTarget(i),c=o.entry,l=t&&u&&this._computeTargetAndRootIntersection(i,s,e),f=o.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n&&!this.root?null:e,intersectionRect:l});c?t&&u?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},i.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s=r,u=p(e),l=!1;!l&&u;){var h=null,d=1==u.nodeType?window.getComputedStyle(u):{};if("none"==d.display)return null;if(u==this.root||9==u.nodeType)if(l=!0,u==this.root||u==t)n&&!this.root?!o||0==o.width&&0==o.height?(u=null,h=null,s=null):h=o:h=i;else{var b=p(u),g=b&&a(b),m=b&&this._computeTargetAndRootIntersection(b,g,i);g&&m?(u=b,h=f(g,m)):(u=null,s=null)}else{var v=u.ownerDocument;u!=v.body&&u!=v.documentElement&&"visible"!=d.overflow&&(h=a(u))}if(h&&(s=c(h,s)),!s)break;u=u&&p(u)}return s}},i.prototype._getRootRect=function(){var e;if(this.root)e=a(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!==i<o)return!0}},i.prototype._rootIsInDom=function(){return!this.root||h(t,this.root)},i.prototype._rootContainsTarget=function(e){return h(this.root||t,e)&&(!this.root||this.root.ownerDocument==e.ownerDocument)},i.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},i.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=i,window.IntersectionObserverEntry=r}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=l(t.rootBounds),this.boundingClientRect=l(t.boundingClientRect),this.intersectionRect=l(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-r,u=o-n;return s>=0&&u>=0&&{top:n,bottom:o,left:r,right:i,width:s,height:u}||null}function a(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?d(e):n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}function d(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}}()},155:function(t,e,n){"use strict";var o=n(120);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(47)),i=o(n(48)),s=o(n(204)),u=o(n(206)),c=o(n(156)),a=o(n(207)),l=o(n(36)),f=o(n(7)),h=o(n(32)),p=o(n(135)),d=function(t){function e(){var t,n;(0,r.default)(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=(0,s.default)(this,(t=(0,u.default)(e)).call.apply(t,[this].concat(i))),(0,l.default)((0,c.default)(n),"state",{isVisible:!1}),(0,l.default)((0,c.default)(n),"handleVisibilityChange",(function(t){var e=t.isIntersecting;n.state.isVisible!==e&&n.setState({isVisible:e}),e&&n.props.once&&n.unwatch()})),n}return(0,a.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){this.unwatch=p.default.watch(h.default.findDOMNode(this),this.handleVisibilityChange)}},{key:"componentWillUnmount",value:function(){this.unwatch()}},{key:"render",value:function(){var t=this.state.isVisible,e=this.props.children(t);return e&&f.default.Children.only(e)}}]),e}(f.default.PureComponent);e.default=d},156:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},199:function(t,e,n){"use strict";var o=n(120);Object.defineProperty(e,"__esModule",{value:!0}),e.withIsVisible=void 0;var r=o(n(200)),i=o(n(201)),s=o(n(7)),u=o(n(203)),c=o(n(155)),a=function(t){return t.displayName||t.name||"Component"},l={once:!1};e.withIsVisible=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=e.once,o=function(e){var o=e.forwardedRef,u=(0,i.default)(e,["forwardedRef"]);return s.default.createElement(c.default,{once:n,children:function(e){return s.default.createElement(t,(0,r.default)({},u,{isVisible:e,ref:o}))}})};function f(t,e){return s.default.createElement(o,(0,r.default)({},t,{forwardedRef:e}))}return o.displayName="WithIsVisible(".concat(a(t),")"),(0,u.default)(o,t),f.displayName="withIsVisible(".concat(a(t),")"),s.default.forwardRef(f)}},200:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},201:function(t,e,n){var o=n(202);t.exports=function(t,e){if(null==t)return{};var n,r,i=o(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},202:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}},203:function(t,e,n){"use strict";var o=n(131),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(t){return o.isMemo(t)?s:u[t.$$typeof]||r}u[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var a=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,o){if("string"!==typeof n){if(d){var r=p(n);r&&r!==d&&t(e,r,o)}var s=l(n);f&&(s=s.concat(f(n)));for(var u=c(e),b=c(n),g=0;g<s.length;++g){var m=s[g];if(!i[m]&&(!o||!o[m])&&(!b||!b[m])&&(!u||!u[m])){var v=h(n,m);try{a(e,m,v)}catch(y){}}}return e}return e}},204:function(t,e,n){var o=n(205),r=n(156);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},205:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},206:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},207:function(t,e,n){var o=n(208);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},208:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},209:function(t,e,n){"use strict";var o=n(120);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(151)),i=n(7),s=o(n(135)),u={once:!1};var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=e.once,o=(0,i.useState)(!1),c=(0,r.default)(o,2),a=c[0],l=c[1];function f(e){var o=e.isIntersecting;l(o),o&&n&&s.default.unwatch(t.current)}return(0,i.useEffect)((function(){return s.default.watch(t.current,f)}),[t,f]),a};e.default=c}}]);
//# sourceMappingURL=2.1ac683d1.chunk.js.map