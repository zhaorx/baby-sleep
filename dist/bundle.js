
var window = window || {};

// hack promise polyfill
var context = Function("return this")();
context.console = console;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputed", function() { return getComputed; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPureObject", function() { return mobx__WEBPACK_IMPORTED_MODULE_2__["toJS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return mobx__WEBPACK_IMPORTED_MODULE_2__["observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return mobx__WEBPACK_IMPORTED_MODULE_2__["extendObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return mobx__WEBPACK_IMPORTED_MODULE_2__["action"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _core_createStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(159);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return _core_createStore__WEBPACK_IMPORTED_MODULE_4__["createStoreWithThis"]; });

/* harmony import */ var _core_injectMixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _core_watcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _core_watcher__WEBPACK_IMPORTED_MODULE_6__["watch"]; });

/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(127);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__["getMixin"]; });












function createApp(config) {
  var mpx = new EXPORT_MPX();

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  _platform__WEBPACK_IMPORTED_MODULE_3__["createApp"].apply(_platform__WEBPACK_IMPORTED_MODULE_3__, [Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({ proto: mpx.proto }, config)].concat(rest));
}

function createPage(config) {
  var mpx = new EXPORT_MPX();

  for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  _platform__WEBPACK_IMPORTED_MODULE_3__["createPage"].apply(_platform__WEBPACK_IMPORTED_MODULE_3__, [Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({ proto: mpx.proto }, config)].concat(rest));
}

function createComponent(config) {
  var mpx = new EXPORT_MPX();

  for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  _platform__WEBPACK_IMPORTED_MODULE_3__["createComponent"].apply(_platform__WEBPACK_IMPORTED_MODULE_3__, [Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({ proto: mpx.proto }, config)].concat(rest));
}



function getComputed(computed) {
  // ts computed类型推导辅助函数
  return computed;
}

function extendProps(target, proxyObj, rawProps, option) {
  var keys = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1___default()(proxyObj);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (APIs[key] || rawProps.indexOf(key) > -1) {
        continue;
      } else if (option && (option.prefix || option.postfix)) {
        var transformKey = option.prefix ? option.prefix + '_' + key : key + '_' + option.postfix;
        target[transformKey] = proxyObj[key];
      } else if (!target.hasOwnProperty(key)) {
        target[key] = proxyObj[key];
      } else {
        console.error(new Error('the new property: "' + key + '" from installing plugin conflicts with already exists\uFF0Cplease use prefix/postfix, such as "use(\'plugin\', {prefix: \'mm\'})"'));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// 安装插件进行扩展API
var installedPlugins = [];

function use(plugin) {
  if (installedPlugins.indexOf(plugin) > -1) {
    return this;
  }

  for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    rest[_key4 - 1] = arguments[_key4];
  }

  var option = rest[0];
  var proxyMPX = factory();
  var rawProps = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1___default()(proxyMPX);
  var rawPrototypeProps = babel_runtime_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_1___default()(proxyMPX.prototype);
  if (option && (option.prefix || option.postfix)) {
    // 设置前后缀的参数，不需传递给plugin
    rest.shift();
  }
  rest.unshift(proxyMPX);
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, rest);
  } else if (typeof plugin === 'function') {
    plugin.apply(null, rest);
  }
  extendProps(EXPORT_MPX, proxyMPX, rawProps, option);
  extendProps(EXPORT_MPX.prototype, proxyMPX.prototype, rawPrototypeProps, option);
  installedPlugins.push(plugin);
  return this;
}

var APIs = {
  createApp: createApp,
  createPage: createPage,
  createComponent: createComponent,
  createStore: _core_createStore__WEBPACK_IMPORTED_MODULE_4__["default"],
  createStoreWithThis: _core_createStore__WEBPACK_IMPORTED_MODULE_4__["createStoreWithThis"],
  toPureObject: mobx__WEBPACK_IMPORTED_MODULE_2__["toJS"],
  mixin: _core_injectMixins__WEBPACK_IMPORTED_MODULE_5__["injectMixins"],
  injectMixins: _core_injectMixins__WEBPACK_IMPORTED_MODULE_5__["injectMixins"],
  observable: mobx__WEBPACK_IMPORTED_MODULE_2__["observable"],
  extendObservable: mobx__WEBPACK_IMPORTED_MODULE_2__["extendObservable"],
  watch: _core_watcher__WEBPACK_IMPORTED_MODULE_6__["watch"],
  use: use,
  set: mobx__WEBPACK_IMPORTED_MODULE_2__["set"],
  get: mobx__WEBPACK_IMPORTED_MODULE_2__["get"],
  remove: mobx__WEBPACK_IMPORTED_MODULE_2__["remove"],
  setConvertRule: _convertor_convertor__WEBPACK_IMPORTED_MODULE_8__["setConvertRule"],
  createAction: mobx__WEBPACK_IMPORTED_MODULE_2__["action"],
  getMixin: _core_mergeOptions__WEBPACK_IMPORTED_MODULE_9__["getMixin"],
  getComputed: getComputed

  // 实例属性
};var InstanceAPIs = {
  $set: mobx__WEBPACK_IMPORTED_MODULE_2__["set"],
  $get: mobx__WEBPACK_IMPORTED_MODULE_2__["get"],
  $remove: mobx__WEBPACK_IMPORTED_MODULE_2__["remove"]
};

function factory() {
  // 作为原型挂载属性的中间层
  function MPX() {
    this.proto = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])({}, this);
  }

  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])(MPX, APIs);
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["extend"])(MPX.prototype, InstanceAPIs);
  return MPX;
}

var EXPORT_MPX = factory();

/* harmony default export */ __webpack_exports__["default"] = (EXPORT_MPX);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(52);
module.exports = __webpack_require__(54);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
var global = __webpack_require__(18);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(49)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(8);
var step = __webpack_require__(9);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(15)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(12);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(33);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(34);
var setToStringTag = __webpack_require__(48);
var getPrototypeOf = __webpack_require__(50);
var ITERATOR = __webpack_require__(49)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var core = __webpack_require__(19);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(22);
var has = __webpack_require__(32);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(27) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(26);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(27) && !__webpack_require__(28)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(28)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
var document = __webpack_require__(18).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(25);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(48);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(49)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(24);
var dPs = __webpack_require__(36);
var enumBugKeys = __webpack_require__(46);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var anObject = __webpack_require__(24);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(27) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(46);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(32);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(39)(false);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(40);
var toAbsoluteIndex = __webpack_require__(42);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(41);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(41);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(44)('keys');
var uid = __webpack_require__(45);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(19);
var global = __webpack_require__(18);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(18).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(23).f;
var has = __webpack_require__(32);
var TAG = __webpack_require__(49)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(44)('wks');
var uid = __webpack_require__(45);
var Symbol = __webpack_require__(18).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(32);
var toObject = __webpack_require__(51);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(53)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(15)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(41);
var defined = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var get = __webpack_require__(55);
module.exports = __webpack_require__(19).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(49)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(19).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(49)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
var $Object = __webpack_require__(19).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(60)('getOwnPropertyNames', function () {
  return __webpack_require__(61).f;
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(17);
var core = __webpack_require__(19);
var fails = __webpack_require__(28);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(62).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

















function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target.__mobxDidRunLazyInitializers === true)
        return;
    var decorators = target.__mobxDecorators;
    if (decorators) {
        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
                var inheritedDecorators = target.__mobxDecorators;
                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
            }
            target.__mobxDecorators[prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = __assign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
    });
}

function createAction(actionName, fn) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

function dontReassignFields() {
    fail$1( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    // TODO: deprecate?
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

var toString = Object.prototype.toString;
function deepEqual(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a), key;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isES6Map(a) || isObservableMap(a))
        return iteratorToArray(a.entries());
    return a;
}
function has$$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay ? function (f) { return setTimeout(f, opts.delay); } : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (typeof opts === "boolean") {
        opts = { fireImmediately: opts };
        deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
    }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        if ( true && !options.get)
            return fail$1("missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () { };
    ComputedValue.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this
                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this
                    .name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this
                .name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this
                .name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

declareAtom();
var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : globalState.UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(Atom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, name, defaultEnhancer) {
        this.target = target;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.values = {};
    }
    ObservableObjectAdministration.prototype.read = function (owner, key) {
        if (false) {}
        return this.values[key].get();
    };
    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
        var instance = this.target;
        if (false) {}
        var observable = this.values[key];
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values[key])
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldValue = this.values[key].get();
            if (this.keys)
                this.keys.remove(key);
            delete this.values[key];
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var _this = this;
        if (this.keys === undefined) {
            this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true);
        }
        return this.keys.slice();
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    var adm = target.$mobx;
    if (adm)
        return adm;
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
    var adm = asObservableObject(target);
    assertPropertyConfigurable(target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
    if (adm.keys)
        adm.keys.push(propName);
    notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
    var adm = asObservableObject(target);
    options.name = adm.name + "." + propName;
    options.context = target;
    adm.values[propName] = new ComputedValue(options);
    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.read(this, propName);
            },
            set: function (v) {
                this.$mobx.write(this, propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner.$mobx;
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner.$mobx;
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(this, propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(this, propName, v);
            }
        }));
}
function notifyPropertyAddition(adm, object, key, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: key,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(__assign({}, change, { name: adm.name, key: key }));
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

function createDecoratorForEnhancer(enhancer) {
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value
            : undefined;
        defineObservableProperty(target, propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && Object({"NODE_ENV":"development"}) && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail$1( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail$1( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail$1( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail$1( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

function extendShallowObservable(target, properties, decorators) {
    deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
    return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
    initializeInstance(target);
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    startBatch();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed(descriptor.value))
                    fail$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get ? computedDecorator : defaultDecorator;
            if ( true && typeof decorator !== "function")
                return fail$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch();
    }
    return target;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
    deep: false,
    name: undefined,
    defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|defaultDecorator)$/.test(key))
        fail$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true };
    if (true) {
        if (typeof thing !== "object")
            return fail$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false ? referenceEnhancer : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$1( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
        return observable.box(value, { name: name, deep: false });
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
        return observable.array(initialValues, { name: name, deep: false });
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
        return observable.map(initialValues, { name: name, deep: false });
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        return extendObservable({}, props, decorators, o);
    },
    shallowObject: function (props, name) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("shallowObject");
        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
        return observable.object(props, {}, { name: name, deep: false });
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    return fail$1( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}

function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
    iterator[iteratorSymbol()] = self;
    return iterator;
}
function self() {
    return this;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + key, false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keys.push(key);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return this._keys[iteratorSymbol()]();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        return makeIterable({
            next: function () {
                return nextIndex < self._keys.length
                    ? { value: self.get(self._keys[nextIndex++]), done: false }
                    : { value: undefined, done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        return makeIterable({
            next: function () {
                if (nextIndex < self._keys.length) {
                    var key = self._keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this._keys.forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this._keys.slice().forEach(function (key) { return _this.delete(key); });
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = _this._keys;
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var _this = this;
        var res = {};
        this._keys.forEach(function (key) { return (res["" + key] = _this.get(key)); });
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = new Map();
        this._keys.forEach(function (key) { return res.set(key, _this.get(key)); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            this._keys.map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail$1( true &&
                    "It is not possible to get index atoms from arrays");
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail$1( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail$1( true && "please specify a property");
            var observable = thing.$mobx.values[property];
            if (!observable)
                fail$1( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail$1( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail$1("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing.$mobx)
        return thing.$mobx;
    fail$1( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$1( true && "Not an atom that can be (un)observed");
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom;
var isAtom;
function declareAtom() {
    if (Atom)
        return;
    Atom = /** @class */ (function () {
        /**
         * Create a new atom. For debugging purposes it is recommended to give it a name.
         * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
         */
        function AtomImpl(name) {
            if (name === void 0) { name = "Atom@" + getNextId(); }
            this.name = name;
            this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
            this.isBeingObserved = false;
            this.observers = [];
            this.observersIndexes = {};
            this.diffValue = 0;
            this.lastAccessedBy = 0;
            this.lowestObserverState = IDerivationState.NOT_TRACKING;
        }
        AtomImpl.prototype.onBecomeUnobserved = function () {
            // noop
        };
        AtomImpl.prototype.onBecomeObserved = function () {
            /* noop */
        };
        /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
        AtomImpl.prototype.reportObserved = function () {
            return reportObserved(this);
        };
        /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
        AtomImpl.prototype.reportChanged = function () {
            startBatch();
            propagateChanged(this);
            endBatch();
        };
        AtomImpl.prototype.toString = function () {
            return this.name;
        };
        return AtomImpl;
    }());
    isAtom = createInstanceofPredicate("Atom", Atom);
}
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    onBecomeObserved(atom, onBecomeObservedHandler);
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    return atom;
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems =
            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            var prev = allowStateChangesStart(true);
            _this.spliceWithArray(0, 0, initialValues);
            allowStateChangesEnd(prev);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = __spread(oldItems.slice(0, toIndex), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
                .values
                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    
    this.$mobx.atom.reportObserved();
    var self = this;
    var nextIndex = 0;
    return makeIterable({
        next: function () {
            return nextIndex < self.length
                ? { value: self[nextIndex++], done: false }
                : { done: true, value: undefined };
        }
    });
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    addHiddenProp(ObservableArray.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Array");
}
// Internet Explorer on desktop doesn't support this.....
// So, let's don't do this to avoid different semantics
// See #1395
// addHiddenProp(
//     ObservableArray.prototype,
//     typeof Symbol !== "undefined" ? Symbol.isConcatSpreadable as any : "@@isConcatSpreadable",
//     {
//         enumerable: false,
//         configurable: true,
//         value: true
//     }
// )
/**
 * Wrap function from prototype
 */

[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getGlobal() {
    return typeof window !== "undefined" ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail$1(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail$1("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return iteratorToArray(map.keys());
    return fail$1("Cannot get keys from '" + map + "'");
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail$1( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers$$1 || globalState.enforceActions === "strict"))
        fail$1( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$1( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending && isSpyEnabled()) {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer.$mobx.isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj.$mobx.getKeys();
    }
    if (isObservableMap(obj)) {
        return obj._keys.slice();
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$1( true &&
        "'keys()' can only be used on observable objects, arrays and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail$1( true &&
        "'values()' can only be used on observable objects, arrays and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$1( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj.$mobx;
        var existingObservable = adm.values[key];
        if (existingObservable) {
            adm.write(obj, key, value);
        }
        else {
            defineObservableProperty(obj, key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail$1( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        
        obj.$mobx.remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$1( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$1(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
        return !!adm.values[key];
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$1( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has$1(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail$1( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, arrayBuffer = options.arrayBuffer, reactionScheduler = options.reactionScheduler;
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (typeof arrayBuffer === "number") {
        reserveArrayBuffer(arrayBuffer);
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

var generatorId = 0;
function flow(generator) {
    if (arguments.length !== 1)
        fail$1( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_2.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_3[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_3;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$1( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail$1( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$1( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

// This line should come after all the imports as well, for the same reason
// as noted above. I will file a bug with rollupjs - @rossipedia
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        }
    });
}
// TODO: remove in some future build
if ( true &&
    typeof module.exports !== "undefined") {
    var warnedAboutDefaultExport_1 = false;
    Object.defineProperty(module.exports, "default", {
        enumerable: false,
        get: function () {
            if (!warnedAboutDefaultExport_1) {
                warnedAboutDefaultExport_1 = true;
                console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
            }
            return undefined;
        }
    });
    [
        "extras",
        "Atom",
        "BaseAtom",
        "asFlat",
        "asMap",
        "asReference",
        "asStructure",
        "autorunAsync",
        "createTranformer",
        "expr",
        "isModifierDescriptor",
        "isStrictModeEnabled",
        "map",
        "useStrict",
        "whyRun"
    ].forEach(function (prop) {
        Object.defineProperty(module.exports, prop, {
            enumerable: false,
            get: function () {
                fail$1("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
            },
            set: function () { }
        });
    });
}
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(64), __webpack_require__(1), __webpack_require__(65)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _createApp__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return _createPage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);




function createApp(option) {
  var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_0__["default"])(option, 'app', [{
    onLaunch: function onLaunch() {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(this, option.proto);
    }
  }]),
      rawOptions = _transferOptions.rawOptions;

  global.currentCtor(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["dissolveAttrs"])(Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_1__["default"])(rawOptions, 'app', false), 'methods'));
  /* eslint-disable-line */
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transferOptions; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _injectMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _mergeOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(121);
/* harmony import */ var _convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);







function transferOptions(options, type) {
  var builtInMixins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var currentInject = void 0;
  if (global.currentInject && global.currentInject.moduleId === global.currentModuleId) {
    currentInject = global.currentInject;
  }
  // 文件编译路径
  options.mpxFileResource = global.currentResource;
  // 注入全局写入的mixins
  options = Object(_injectMixins__WEBPACK_IMPORTED_MODULE_2__["mergeInjectedMixins"])(options, type);

  if (currentInject && currentInject.injectComputed) {
    // 编译计算属性注入
    options.computed = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, options.computed, currentInject.injectComputed);
  }
  // 转换mode
  options.mpxConvertMode = options.mpxConvertMode || Object(_convertor_getConvertMode__WEBPACK_IMPORTED_MODULE_4__["getConvertMode"])(global.currentSrcMode, "wx");
  var rawOptions = Object(_mergeOptions__WEBPACK_IMPORTED_MODULE_3__["default"])(options, type);
  // 注入内建的mixins, 内建mixin是按原始平台编写的，所以合并规则和rootMixins保持一致
  rawOptions.mixins = builtInMixins;
  if (currentInject && currentInject.propKeys) {
    var computedKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(options.computed || {});
    // 头条/百度小程序受限父子组件生命周期顺序的问题，向子组件传递computed属性，子组件初始挂载时是拿不到对应数据的，在此做出提示
    currentInject.propKeys.forEach(function (key) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["findItem"])(computedKeys, key)) {
        console.error('The child component can\'t achieve the value of computed prop\u3010' + key + '\u3011when attached, which is governed by the order of tt/swan miniprogram\'s lifecycles ');
      }
    });
  }
  return {
    rawOptions: rawOptions,
    currentInject: currentInject
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(19).Object.keys;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(51);
var $keys = __webpack_require__(37);

__webpack_require__(60)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
module.exports = __webpack_require__(19).Object.assign;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(75) });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(27);
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(76);
var pIE = __webpack_require__(77);
var toObject = __webpack_require__(51);
var IObject = __webpack_require__(12);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(28)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectMixins", function() { return injectMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMixins", function() { return getInjectedMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeInjectedMixins", function() { return mergeInjectedMixins; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);


var MIXINS_MAPS = {
  app: [],
  page: [],
  component: []
};
function injectMixins(mixins, type) {
  if (!type) {
    type = ['app', 'page', 'component'];
  } else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["type"])(type) === 'String') {
    type = [type];
  }
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["type"])(mixins) === 'Object') {
    mixins = [mixins];
  }
  type.forEach(function (key) {
    var curMixins = MIXINS_MAPS[key];
    if (curMixins) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(mixins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mixin = _step.value;

          curMixins.indexOf(mixin) === -1 && curMixins.push(mixin);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
  return this;
}

function getInjectedMixins(type) {
  return MIXINS_MAPS[type].slice(0);
}

function mergeInjectedMixins(options, type) {
  var injectedMixins = getInjectedMixins(type);
  if (injectedMixins.length) {
    options.mixins = options.mixins ? injectedMixins.concat(options.mixins) : injectedMixins;
  }
  return options;
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncLock", function() { return asyncLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aliasReplace", function() { return aliasReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findItem", function() { return findItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMap", function() { return normalizeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExistAttr", function() { return isExistAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setByPath", function() { return setByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByPath", function() { return getByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineGetterSetter", function() { return defineGetterSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProperties", function() { return filterProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerableKeys", function() { return enumerableKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dissolveAttrs", function() { return dissolveAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeArray", function() { return likeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyClass", function() { return stringifyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hump2dash", function() { return hump2dash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dash2hump", function() { return dash2hump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStyleText", function() { return parseStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStyleText", function() { return genStyleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjectArray", function() { return mergeObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDynamicStyle", function() { return normalizeDynamicStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processUndefined", function() { return processUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffAndCloneA", function() { return diffAndCloneA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIdentifierStr", function() { return isValidIdentifierStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberStr", function() { return isNumberStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectDataset", function() { return collectDataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preprocessRenderData", function() { return preprocessRenderData; });
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var _getByPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(118);










function type(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}

function asyncLock() {
  var lock = false;
  return function (fn, onerror) {
    if (!lock) {
      lock = true;
      babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve().then(function () {
        lock = false;
        typeof fn === 'function' && fn();
      }).catch(function (e) {
        lock = false;
        console.error(e);
        typeof onerror === 'function' && onerror();
      });
    }
  };
}

function aliasReplace() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var alias = arguments[1];
  var target = arguments[2];

  if (options[alias]) {
    var dataType = type(options[alias]);
    switch (dataType) {
      case 'Object':
        options[target] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, options[alias], options[target]);
        break;
      case 'Array':
        options[target] = options[alias].concat(options[target] || []);
        break;
      default:
        options[target] = options[alias];
        break;
    }
    delete options[alias];
  }
  return options;
}

function findItem() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments[1];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (type(key) === 'RegExp' && key.test(item) || item === key) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

function normalizeMap(prefix, arr) {
  if (typeof prefix !== 'string') {
    arr = prefix;
    prefix = '';
  }
  var objType = type(arr);
  if (objType === 'Array') {
    var map = {};
    arr.forEach(function (value) {
      map[value] = prefix ? prefix + '.' + value : value;
    });
    return map;
  }
  if (prefix && objType === 'Object') {
    arr = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, arr);
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(arr).forEach(function (key) {
      if (typeof arr[key] === 'string') {
        arr[key] = prefix + '.' + arr[key];
      }
    });
  }
  return arr;
}

function isExistAttr(obj, attr) {
  var type = typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj);
  var isNullOrUndefined = obj === null || obj === undefined;
  if (isNullOrUndefined) {
    return false;
  } else if (type === 'object' || type === 'function') {
    return attr in obj;
  } else {
    return obj[attr] !== undefined;
  }
}

function setByPath(data, pathStr, value) {
  var parent = void 0;
  var variable = void 0;
  Object(_getByPath__WEBPACK_IMPORTED_MODULE_7__["default"])(data, pathStr, function (value, key, end) {
    if (end) {
      parent = value;
      variable = key;
    }
    return value[key];
  });
  if (parent) {
    parent[variable] = value;
  }
}

function getByPath(data, pathStr) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var errTip = arguments[3];

  var results = [];
  pathStr.split(',').forEach(function (item) {
    var path = item.trim();
    if (!path) return;
    var result = Object(_getByPath__WEBPACK_IMPORTED_MODULE_7__["default"])(data, path, function (value, key) {
      var newValue = void 0;
      if (Object(mobx__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(value)) {
        // key可能不是一个响应式属性，那么get将无法返回正确值
        newValue = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["get"])(value, key) || value[key];
      } else if (isExistAttr(value, key)) {
        newValue = value[key];
      } else {
        newValue = errTip;
      }
      return newValue;
    });
    // 小程序setData时不允许undefined数据
    results.push(result === undefined ? defaultVal : result);
  });
  return results.length > 1 ? results : results[0];
}

function defineGetterSetter(target, key, getValue, setValue, context) {
  var get = void 0;
  var set = void 0;
  if (typeof getValue === 'function') {
    get = context ? getValue.bind(context) : getValue;
  } else {
    get = function get() {
      return getValue;
    };
  }
  if (typeof setValue === 'function') {
    set = context ? setValue.bind(context) : setValue;
  }
  var descriptor = {
    get: get,
    configurable: true,
    enumerable: true
  };
  if (set) descriptor.set = set;
  babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, descriptor);
}

function proxy(target, source, keys, mapKeys, readonly) {
  if (typeof mapKeys === 'boolean') {
    readonly = mapKeys;
    mapKeys = null;
  }
  keys.forEach(function (key, index) {
    var descriptor = {
      get: function get() {
        return source[key];
      },

      configurable: true,
      enumerable: true
    };
    !readonly && (descriptor.set = function (val) {
      source[key] = val;
    });
    babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, mapKeys ? mapKeys[index] : key, descriptor);
  });
  return target;
}

function filterProperties(source) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newData = {};
  props.forEach(function (prop) {
    if (prop in source) {
      var result = source[prop];
      newData[prop] = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(result) ? Object(mobx__WEBPACK_IMPORTED_MODULE_6__["toJS"])(result) : result;
    }
  });
  return newData;
}

function merge(to, from) {
  if (!from) return to;
  var key = void 0,
      toVal = void 0,
      fromVal = void 0;
  var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (type(toVal) === 'Object' && type(fromVal) === 'Object') {
      merge(toVal, fromVal);
    } else {
      to[key] = fromVal;
    }
  }
  return to;
}

function enumerableKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

function extend(target) {
  for (var _len = arguments.length, froms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    froms[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(froms), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var from = _step2.value;

      if (type(from) === 'Object') {
        // for in 能遍历原型链上的属性
        for (var key in from) {
          target[key] = from[key];
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return target;
}

function dissolveAttrs() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments[1];

  if (type(keys) === 'String') {
    keys = [keys];
  }
  var newOptions = extend({}, target);
  keys.forEach(function (key) {
    var value = target[key];
    if (type(value) !== 'Object') return;
    delete newOptions[key];
    extend(newOptions, value);
  });
  return newOptions;
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(obj)) === 'object';
}

function likeArray(arr) {
  return Array.isArray(arr) || Object(mobx__WEBPACK_IMPORTED_MODULE_6__["isObservableArray"])(arr);
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function stringifyClass(value) {
  if (likeArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified = void 0;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  }
  return res;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function hump2dash(value) {
  return value.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
}

function dash2hump(value) {
  return value.replace(/-([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
  });
}

function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(tmp[0].trim())] = tmp[1].trim());
    }
  });
  return res;
}

function genStyleText(styleObj) {
  var res = '';
  for (var key in styleObj) {
    if (styleObj.hasOwnProperty(key)) {
      var item = styleObj[key];
      res += hump2dash(key) + ':' + item + ';';
    }
  }
  return res;
}

function mergeObjectArray(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function normalizeDynamicStyle(value) {
  if (likeArray(value)) {
    return mergeObjectArray(value);
  }
  if (typeof value === 'string') {
    return parseStyleText(value);
  }
  return value;
}

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (var key in obj) {
    return false;
  }
  return true;
}

function processUndefined(obj) {
  var result = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] !== undefined) {
        result[key] = obj[key];
      } else {
        result[key] = '';
      }
    }
  }
  return result;
}

function unwrap(a) {
  if (Object(mobx__WEBPACK_IMPORTED_MODULE_6__["isObservableArray"])(a)) {
    return a.peek();
  }
  if (Object(mobx__WEBPACK_IMPORTED_MODULE_6__["isObservableMap"])(a)) {
    return a.entries();
  }
  return a;
}

function noop() {}

function diffAndCloneA(a, b) {
  var diffPaths = [];
  var curPath = [];
  var diff = false;

  function deepDiffAndCloneA(a, b, currentDiff) {
    var setDiff = function setDiff(val) {
      if (currentDiff) return;
      if (val) {
        currentDiff = val;
        diffPaths.push(curPath.slice());
      }
    };

    var toString = Object.prototype.toString;
    var type = typeof a === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(a);
    var clone = a;

    if (type !== 'object' || a === null) {
      setDiff(a !== b);
    } else {
      a = unwrap(a);
      b = unwrap(b);
      var sameClass = true;

      var className = toString.call(a);
      if (className !== toString.call(b)) {
        setDiff(true);
        sameClass = false;
      }
      var length = void 0;
      switch (className) {
        case '[object RegExp]':
        case '[object String]':
          if (sameClass) setDiff('' + a !== '' + b);
          break;
        case '[object Number]':
        case '[object Date]':
        case '[object Boolean]':
          if (sameClass) setDiff(+a !== +b);
          break;
        case '[object Symbol]':
          if (sameClass) setDiff(a !== b);
          break;
        case '[object Array]':
          length = a.length;
          if (sameClass && length !== b.length) {
            setDiff(true);
          }
          clone = [];
          for (var i = 0; i < length; i++) {
            curPath.push(i);
            clone[i] = deepDiffAndCloneA(a[i], sameClass ? b[i] : undefined, currentDiff);
            curPath.pop();
          }
          break;
        default:
          var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(a);
          var key = void 0;
          length = keys.length;
          if (sameClass && length !== babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(b).length) {
            setDiff(true);
          }
          clone = {};
          for (var _i = 0; _i < length; _i++) {
            key = keys[_i];
            curPath.push(key);
            clone[key] = deepDiffAndCloneA(a[key], sameClass ? b[key] : undefined, currentDiff);
            curPath.pop();
          }
      }
    }
    if (currentDiff) {
      diff = currentDiff;
    }
    return clone;
  }

  var clone = deepDiffAndCloneA(a, b, diff);

  return {
    clone: clone,
    diff: diff,
    diffPaths: diffPaths
  };
}

function isValidIdentifierStr(str) {
  return (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(str)
  );
}

function isNumberStr(str) {
  return (/^\d+$/.test(str)
  );
}

var datasetReg = /^data-(.+)$/;

function collectDataset(props) {
  var dataset = {};
  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      var matched = datasetReg.exec(key);
      if (matched) {
        dataset[matched[1]] = props[key];
      }
    }
  }
  return dataset;
}

/**
 * process renderData, remove sub node if visit parent node already
 * @param {Object} renderData
 * @return {Object} processedRenderData
 */
function preprocessRenderData(renderData) {
  // method for get key path array
  var processKeyPathMap = function processKeyPathMap(keyPathMap) {
    var keyPath = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(keyPathMap);
    return keyPath.filter(function (keyA) {
      return keyPath.every(function (keyB) {
        if (keyA.startsWith(keyB) && keyA !== keyB) {
          var nextChar = keyA[keyB.length];
          if (nextChar === '.' || nextChar === '[') {
            return false;
          }
        }
        return true;
      });
    });
  };

  var processedRenderData = {};
  var renderDataFinalKey = processKeyPathMap(renderData);
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(renderData).forEach(function (item) {
    if (renderDataFinalKey.indexOf(item) > -1) {
      processedRenderData[item] = renderData[item];
    }
  });
  return processedRenderData;
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var $Object = __webpack_require__(19).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(27), 'Object', { defineProperty: __webpack_require__(23).f });


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(84);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(87);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(6);
module.exports = __webpack_require__(86).f('iterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(49);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(95);
__webpack_require__(96);
__webpack_require__(97);
module.exports = __webpack_require__(19).Symbol;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(18);
var has = __webpack_require__(32);
var DESCRIPTORS = __webpack_require__(27);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(33);
var META = __webpack_require__(90).KEY;
var $fails = __webpack_require__(28);
var shared = __webpack_require__(44);
var setToStringTag = __webpack_require__(48);
var uid = __webpack_require__(45);
var wks = __webpack_require__(49);
var wksExt = __webpack_require__(86);
var wksDefine = __webpack_require__(91);
var enumKeys = __webpack_require__(92);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(24);
var isObject = __webpack_require__(25);
var toObject = __webpack_require__(51);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(31);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(61);
var $GOPD = __webpack_require__(94);
var $GOPS = __webpack_require__(76);
var $DP = __webpack_require__(23);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(77).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(45)('meta');
var isObject = __webpack_require__(25);
var has = __webpack_require__(32);
var setDesc = __webpack_require__(23).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(28)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var core = __webpack_require__(19);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(86);
var defineProperty = __webpack_require__(23).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(76);
var pIE = __webpack_require__(77);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(13);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(77);
var createDesc = __webpack_require__(31);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(32);
var IE8_DOM_DEFINE = __webpack_require__(26);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(27) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91)('asyncIterator');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91)('observable');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
__webpack_require__(52);
__webpack_require__(6);
__webpack_require__(100);
__webpack_require__(116);
__webpack_require__(117);
module.exports = __webpack_require__(19).Promise;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var global = __webpack_require__(18);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(56);
var $export = __webpack_require__(17);
var isObject = __webpack_require__(25);
var aFunction = __webpack_require__(21);
var anInstance = __webpack_require__(101);
var forOf = __webpack_require__(102);
var speciesConstructor = __webpack_require__(105);
var task = __webpack_require__(106).set;
var microtask = __webpack_require__(108)();
var newPromiseCapabilityModule = __webpack_require__(109);
var perform = __webpack_require__(110);
var userAgent = __webpack_require__(111);
var promiseResolve = __webpack_require__(112);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(49)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(113)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(48)($Promise, PROMISE);
__webpack_require__(114)(PROMISE);
Wrapper = __webpack_require__(19)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(115)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(103);
var isArrayIter = __webpack_require__(104);
var anObject = __webpack_require__(24);
var toLength = __webpack_require__(40);
var getIterFn = __webpack_require__(55);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(24);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(49)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(24);
var aFunction = __webpack_require__(21);
var SPECIES = __webpack_require__(49)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(107);
var html = __webpack_require__(47);
var cel = __webpack_require__(29);
var global = __webpack_require__(18);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var macrotask = __webpack_require__(106).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(21);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var isObject = __webpack_require__(25);
var newPromiseCapability = __webpack_require__(109);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(22);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(18);
var core = __webpack_require__(19);
var dP = __webpack_require__(23);
var DESCRIPTORS = __webpack_require__(27);
var SPECIES = __webpack_require__(49)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(49)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(17);
var core = __webpack_require__(19);
var global = __webpack_require__(18);
var speciesConstructor = __webpack_require__(105);
var promiseResolve = __webpack_require__(112);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(109);
var perform = __webpack_require__(110);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getByPath; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var curStack = void 0;
var targetStacks = void 0;
var property = void 0;

var Stack = function () {
  function Stack(mark) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Stack);

    this.mark = mark;
    // 字符串stack需要特殊处理
    this.type = /['"]/.test(mark) ? 'string' : 'normal';
    this.value = [];
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Stack, [{
    key: 'push',
    value: function push(data) {
      this.value.push(data);
    }
  }]);

  return Stack;
}();

function startStack(mark) {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  curStack && targetStacks.push(curStack);
  curStack = new Stack(mark);
}

function endStack() {
  // 开启栈或关闭栈都意味着前面的字符拼接截止
  propertyJoinOver();
  // 字符串栈直接拼接
  var result = curStack.type === 'string' ? '\'' + curStack.value.join('') + '\'' : curStack.value;
  curStack = targetStacks.pop();
  // 将当前stack结果保存到父级stack里
  curStack.push(result);
}

function propertyJoinOver() {
  property && curStack.push(property);
  property = '';
}

function init() {
  property = '';
  // 根stack
  curStack = new Stack();
  targetStacks = [];
}

function parse(str) {
  if (/^[^[\]]+$/.test(str)) {
    // 对于仅“点”属性访问，直接分割，避免无意义的解析
    return str.split('.');
  }
  // 重置全局数据
  init();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(str), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var char = _step.value;

      // 当前遍历引号内的字符串时
      if (curStack.type === 'string') {
        // 若为对应的结束flag，则出栈，反之直接push
        curStack.mark === char ? endStack() : curStack.push(char);
      } else if (/['"[]/.test(char)) {
        startStack(char);
      } else if (char === ']') {
        endStack();
      } else if (char === '.' || char === '+') {
        propertyJoinOver();
        char === '+' && curStack.push(char);
      } else {
        property += char.trim();
      }
    }
    // 字符解析收尾
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  propertyJoinOver();
  return curStack.value;
}

function outPutByPath(context, path, transfer) {
  var result = context;
  var len = path.length;
  for (var index = 0; index < len; index++) {
    var item = path[index];
    if (result) {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        // 数组最终得到一个key
        var key = outPutByPath(context, item, transfer);
        result = transfer ? transfer(result, key, index === len - 1) : result[key];
      } else if (/^'.+'$/.test(item) || /^\d+$/.test(item) && index === 0) {
        result = item.replace(/'/g, '');
      } else if (item === '+') {
        // 获取加号后面所有path最终的结果
        result += outPutByPath(context, path.slice(index + 1), transfer);
        break;
      } else {
        result = transfer ? transfer(result, item, index === len - 1) : result[item];
      }
    }
  }
  return result;
}

function getByPath(context, pathStr, transfer) {
  if (!pathStr) {
    return context;
  }
  return outPutByPath(context, parse(pathStr), transfer);
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(80);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMixin", function() { return getMixin; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _convertor_convertor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(127);







var CURRENT_HOOKS = [];
var curType = void 0;
var convertRule = void 0;
var mpxCustomKeysForBlend = void 0;

function mergeOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments[1];
  var needConvert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // 缓存混合模式下的自定义属性列表
  mpxCustomKeysForBlend = options.mpxCustomKeysForBlend || [];
  // needConvert为false，表示衔接原生的root配置，那么此时的配置都是当前原生环境支持的配置，不需要转换
  convertRule = Object(_convertor_convertor__WEBPACK_IMPORTED_MODULE_5__["getConvertRule"])(needConvert ? options.mpxConvertMode || 'default' : 'local');
  // 微信小程序使用Component创建page
  if (type === 'page' && convertRule.pageMode) {
    curType = convertRule.pageMode;
  } else {
    curType = type;
  }
  CURRENT_HOOKS = convertRule.lifecycle[curType];
  var newOptions = {};
  extractMixins(newOptions, options, needConvert);
  if (needConvert) {
    proxyHooks(newOptions);
    // 自定义补充转换函数
    typeof convertRule.convert === 'function' && convertRule.convert(newOptions);
  }
  newOptions.mpxCustomKeysForBlend = mpxCustomKeysForBlend;
  return transformHOOKS(newOptions);
}

function getMixin() {
  var mixin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // 用于ts反向推导mixin类型
  return mixin.mixins ? extractMixins({}, mixin, true) : mixin;
}

function extractMixins(mergeOptions, options, needConvert) {
  // 如果编译阶段behaviors都被当做mixins处理，那么进行别名替换
  if (options.behaviors && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(options.behaviors[0]) === 'Object') {
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["aliasReplace"])(options, 'behaviors', 'mixins');
  }
  if (options.mixins) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(options.mixins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mix = _step.value;

        if (typeof mix === 'string') {
          console.error('\u3010MPX CONVERT ERROR\u3011at ' + (global.currentResource || '') + ' : Don\'t support for convert the string-formatted\u3010behavior\u3011into mixin');
        } else {
          extractMixins(mergeOptions, mix, needConvert);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  options = extractLifetimes(options);
  options = extractPageHooks(options);
  if (needConvert) {
    options = extractObservers(options);
  }
  mergeMixins(mergeOptions, options);
  return mergeOptions;
}

function extractLifetimes(options) {
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(options.lifetimes) === 'Object') {
    var newOptions = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, options, options.lifetimes);
    delete newOptions.lifetimes;
    return newOptions;
  } else {
    return options;
  }
}

function extractObservers(options) {
  var observers = options.observers;
  var props = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options.properties, options.props);
  var watch = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options.watch);
  var extract = false;
  function mergeWatch(key, config) {
    if (watch[key]) {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(watch[key]) !== 'Array' && (watch[key] = [watch[key]]);
    } else {
      watch[key] = [];
    }
    watch[key].push(config);
    extract = true;
  }
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(props).forEach(function (key) {
    var prop = props[key];
    if (prop && prop.observer) {
      mergeWatch(key, {
        handler: function handler() {
          var _callback;

          var callback = prop.observer;
          if (typeof callback === 'string') {
            callback = this[callback];
          }

          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          typeof callback === 'function' && (_callback = callback).call.apply(_callback, [this].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rest)));
        },

        deep: true,
        immediateAsync: true
      });
    }
  });
  if (observers) {
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(observers).forEach(function (key) {
      var callback = observers[key];
      if (callback) {
        var deep = false;
        var propsArr = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(props);
        var keyPathArr = [];
        key.split(',').forEach(function (item) {
          var result = item.trim();
          result && keyPathArr.push(result);
        });
        // 针对prop的watch都需要立刻执行一次
        var watchProp = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(propsArr), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var prop = _step2.value;

            if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["findItem"])(keyPathArr, prop)) {
              watchProp = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (key.indexOf('.**')) {
          deep = true;
          key = key.replace('.**', '');
        }
        mergeWatch(key, {
          handler: function handler(val, old) {
            var cb = callback;
            if (typeof cb === 'string') {
              cb = this[cb];
            }
            if (typeof cb === 'function') {
              var _cb;

              if (keyPathArr.length < 2) {
                val = [val];
                old = [old];
              }
              (_cb = cb).call.apply(_cb, [this].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(old)));
            }
          },

          deep: deep,
          immediateAsync: watchProp
        });
      }
    });
  }
  if (extract) {
    var newOptions = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, options);
    newOptions.watch = watch;
    delete newOptions.observers;
    return newOptions;
  }
  return options;
}

function extractPageHooks(options) {
  if (curType === 'blend') {
    var newOptions = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, options);
    var methods = newOptions.methods;
    var PAGE_HOOKS = convertRule.lifecycle.page;
    methods && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(methods).forEach(function (key) {
      if (PAGE_HOOKS.indexOf(key) > -1) {
        if (newOptions[key]) {
          console.warn('【MPX ERROR】', 'Don\'t redefine the lifecycle [' + key + ']\uFF0C it will use the methods\'s lifecycle if redefined');
        }
        newOptions[key] = methods[key];
      }
    });
    return newOptions;
  } else {
    return options;
  }
}

function mergeMixins(parent, child) {
  for (var key in child) {
    if (CURRENT_HOOKS.indexOf(key) > -1) {
      mergeHooks(parent, child, key);
    } else if (key === 'data') {
      mergeDataFn(parent, child, key);
    } else if (/^(computed|properties|props|methods|proto)$/.test(key)) {
      mergeSimpleProps(parent, child, key);
    } else if (/^(watch|pageLifetimes|observers)$/.test(key)) {
      mergeToArray(parent, child, key);
    } else if (/^behaviors$/.test(key)) {
      mergeArray(parent, child, key);
    } else if (key !== 'mixins' && key !== 'mpxCustomKeysForBlend') {
      if (curType === 'blend' && typeof child[key] !== 'function' && mpxCustomKeysForBlend.indexOf(key) === -1) {
        mpxCustomKeysForBlend.push(key);
      }
      mergeDefault(parent, child, key);
    }
  }
}

function mergeDefault(parent, child, key) {
  parent[key] = child[key];
}

function mergeHooks(parent, child, key) {
  if (parent[key]) {
    parent[key].push(child[key]);
  } else {
    parent[key] = [child[key]];
  }
}

function mergeSimpleProps(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (!parentVal) {
    parent[key] = parentVal = {};
  }
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["extend"])(parentVal, childVal);
}

function mergeDataFn(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (!parentVal) {
    if (typeof childVal === 'function') {
      parent[key] = childVal;
    } else {
      parent[key] = {};
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["merge"])(parent[key], childVal);
    }
  } else if (typeof parentVal !== 'function' && typeof childVal !== 'function') {
    mergeData(parent, child, key);
  } else {
    parent[key] = function mergeFn() {
      return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["merge"])(typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal, typeof childVal === 'function' ? childVal.call(this, this) : childVal);
    };
  }
}

function mergeData(parent, child, key) {
  var childVal = child[key];
  if (!parent[key]) {
    parent[key] = {};
  }
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["merge"])(parent[key], childVal);
}

function mergeArray(parent, child, key) {
  var childVal = child[key];
  if (!parent[key]) {
    parent[key] = [];
  }
  parent[key] = parent[key].concat(childVal);
}

function mergeToArray(parent, child, key) {
  var parentVal = parent[key];
  var childVal = child[key];
  if (!parentVal) {
    parent[key] = parentVal = {};
  }
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(childVal).forEach(function (key) {
    if (key in parentVal) {
      var _parent = parentVal[key];
      var _child = childVal[key];
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(_parent) !== 'Array') {
        _parent = [_parent];
      }
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(_child) !== 'Array') {
        _child = [_child];
      }
      parentVal[key] = _parent.concat(_child);
    } else {
      parentVal[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(childVal[key]) === 'Array' ? childVal[key] : [childVal[key]];
    }
  });
}

function composeHooks(target, includes) {
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(target).forEach(function (key) {
    if (!includes || includes.indexOf(key) !== -1) {
      var hooksArr = target[key];
      hooksArr && (target[key] = function () {
        var result = void 0;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var i = 0; i < hooksArr.length; i++) {
          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["type"])(hooksArr[i]) === 'Function') {
            var data = hooksArr[i].apply(this, args);
            data !== undefined && (result = data);
          }
          if (result === '__abort__') {
            break;
          }
        }
        return result;
      });
    }
  });
}

function proxyHooks(options) {
  var lifecycleProxyMap = convertRule.lifecycleProxyMap;
  lifecycleProxyMap && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(lifecycleProxyMap).forEach(function (key) {
    var newHooks = (options[key] || []).slice();
    var proxyArr = lifecycleProxyMap[key];
    proxyArr && proxyArr.forEach(function (lifecycle) {
      if (CURRENT_HOOKS.indexOf(lifecycle) !== -1) {
        newHooks.push.apply(newHooks, options[lifecycle]);
        delete options[lifecycle];
      }
    });
    newHooks.length && (options[key] = newHooks);
  });
}

function transformHOOKS(options) {
  composeHooks(options, CURRENT_HOOKS);
  options.pageLifetimes && composeHooks(options.pageLifetimes);
  if (curType === 'blend' && convertRule.support) {
    var COMPONENT_HOOKS = convertRule.lifecycle.component;
    for (var key in options) {
      // 使用Component创建page实例，页面专属生命周期&自定义方法需写在methods内部
      if (typeof options[key] === 'function' && key !== 'data' && COMPONENT_HOOKS.indexOf(key) === -1) {
        (options.methods || (options.methods = {}))[key] = options[key];
        delete options[key];
      }
    }
  }
  return options;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(123);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(125);
module.exports = __webpack_require__(19).Array.from;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(20);
var $export = __webpack_require__(17);
var toObject = __webpack_require__(51);
var call = __webpack_require__(103);
var isArrayIter = __webpack_require__(104);
var toLength = __webpack_require__(40);
var createProperty = __webpack_require__(126);
var getIterFn = __webpack_require__(55);

$export($export.S + $export.F * !__webpack_require__(115)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(23);
var createDesc = __webpack_require__(31);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConvertRule", function() { return setConvertRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertRule", function() { return getConvertRule; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(133);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var _wxToAli__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(135);










// 生命周期模板
var lifecycleTemplates = {
  wx: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  ali: _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE"],
  swan: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  qq: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"],
  tt: _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE"]
  // 根据当前环境获取的默认生命周期信息
};var lifecycleInfo = Object(_helper_env__WEBPACK_IMPORTED_MODULE_6__["is"])('ali') ? _platform_patch_ali_lifecycle__WEBPACK_IMPORTED_MODULE_4__ : _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_3__;
var pageMode = Object(_helper_env__WEBPACK_IMPORTED_MODULE_6__["is"])('ali') ? '' : 'blend';

/**
 * 转换规则包含四点
 * lifecycle [object] 生命周期
 * lifecycleProxyMap [object] 代理规则
 * pageMode [string] 页面生命周期合并模式, 目前仅wx支持[blend]
 * support [boolean]当前平台是否支持当前pageMode
 * convert [function] 自定义转换函数, 接收一个options
 */
var defaultConvertRule = {
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(lifecycleInfo.LIFECYCLE),
  lifecycleProxyMap: lifecycleInfo.lifecycleProxyMap,
  pageMode: pageMode,
  support: !!pageMode,
  convert: null
};

var RULEMAPS = {
  local: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultConvertRule),
  default: defaultConvertRule,
  wxToAli: _wxToAli__WEBPACK_IMPORTED_MODULE_8__["default"] // 微信转支付宝rule


  // 外部控制默认转换规则
};function setConvertRule(rule) {
  if (rule.lifecycleTemplate) {
    rule.lifecycle = lifecycleTemplates[rule.lifecycleTemplate];
  }
  if (rule.lifecycle) {
    // 合并内建钩子
    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(rule.lifecycle);
  }
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(defaultConvertRule).forEach(function (key) {
    if (rule.hasOwnProperty(key)) {
      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["type"])(defaultConvertRule[key]) === 'Object') {
        defaultConvertRule[key] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConvertRule[key], rule[key]);
      } else {
        defaultConvertRule[key] = rule[key];
      }
    }
  });
}

function getConvertRule(convertMode) {
  var rule = void 0;
  if (typeof convertMode === 'function') {
    rule = convertMode() || {};
    var lifecycle = lifecycleTemplates[rule.lifecycleTemplate] || rule.lifecycle;
    // 混入内部钩子
    rule.lifecycle = Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_5__["mergeLifecycle"])(lifecycle);
  } else {
    rule = RULEMAPS[convertMode];
  }
  if (!rule || !rule.lifecycle) {
    console.error('no convert rule for ' + convertMode);
  } else {
    return rule;
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(72);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


var _lifecycleProxyMap;


var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound'];

var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];

var COMPONENT_HOOKS = ['beforeCreate', 'created', 'attached', 'ready', 'moved', 'detached', 'pageShow', 'pageHide', 'updated'];

var lifecycleProxyMap = (_lifecycleProxyMap = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["BEFORECREATE"], ['beforeCreate']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"], ['created', 'attached']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["MOUNTED"], ['onReady']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["UPDATED"], ['updated']), _lifecycleProxyMap);

var LIFECYCLE = {
  APP_HOOKS: APP_HOOKS,
  PAGE_HOOKS: PAGE_HOOKS,
  COMPONENT_HOOKS: COMPONENT_HOOKS
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(80);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORECREATE", function() { return BEFORECREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFOREMOUNT", function() { return BEFOREMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUNTED", function() { return MOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED", function() { return UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROYED", function() { return DESTROYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_LIFECYCLES", function() { return INNER_LIFECYCLES; });
var BEFORECREATE = '__beforeCreate__';
var CREATED = '__created__';
var BEFOREMOUNT = '__beforeMount__';
var MOUNTED = '__mounted__';
var UPDATED = '__updated__';
var DESTROYED = '__destroyed__';
var INNER_LIFECYCLES = [BEFORECREATE, CREATED, BEFOREMOUNT, MOUNTED, UPDATED, DESTROYED];

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleProxyMap", function() { return lifecycleProxyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE", function() { return LIFECYCLE; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);


var _lifecycleProxyMap;



var APP_HOOKS = ['onLaunch', 'onShow', 'onHide', 'onError'];

var PAGE_HOOKS = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTitleClick', 'onOptionMenuClick', 'onUpdated', 'onBeforeCreate'];

var COMPONENT_HOOKS = ['onInit', 'deriveDataFromProps', 'didMount', 'didUpdate', 'didUnmount', 'pageShow', 'pageHide', 'updated', 'beforeCreate'];

var lifecycleProxyMap = (_lifecycleProxyMap = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["BEFORECREATE"], ['beforeCreate', 'onBeforeCreate']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["CREATED"], ['onLoad']), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_lifecycleProxyMap, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_1__["UPDATED"], ['updated', 'onUpdated']), _lifecycleProxyMap);

var LIFECYCLE = {
  APP_HOOKS: APP_HOOKS,
  PAGE_HOOKS: PAGE_HOOKS,
  COMPONENT_HOOKS: COMPONENT_HOOKS
};

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeLifecycle", function() { return mergeLifecycle; });
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);

function mergeLifecycle(lifecycle) {
  if (lifecycle) {
    var pageHooks = (lifecycle.PAGE_HOOKS || []).concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]);
    var componentHooks = (lifecycle.COMPONENT_HOOKS || []).concat(_core_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]);
    return {
      'app': lifecycle.APP_HOOKS || [],
      'page': pageHooks,
      'component': componentHooks,
      'blend': pageHooks.concat(lifecycle.COMPONENT_HOOKS || [])
    };
  }
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
var env = {};
env.wx = typeof wx !== 'undefined' && typeof wx.getSystemInfo === 'function';
env.ali = typeof my !== 'undefined' && typeof my.getSystemInfo === 'function';
env.swan = typeof swan !== 'undefined' && typeof swan.getSystemInfo === 'function';

function is(type) {
  return !!env[type];
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(133);





var NOTSUPPORTS = ['moved', 'pageLifetimes', 'definitionFilter'];

function convertErrorDesc(key) {
  console.error('\u3010MPX CONVERT ERROR\u3011at ' + (global.currentResource || '') + ' : Don\'t support for convert the option\u3010' + key + '\u3011 of the wx-component into the ali-component');
}

function notSupportTip(options) {
  NOTSUPPORTS.forEach(function (key) {
    if (options[key]) {
      convertErrorDesc(key);
      delete options[key];
    }
  });
  // relations部分支持
  var relations = options['relations'];
  if (relations) {
    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(relations).forEach(function (path) {
      var item = relations[path];
      if (item.target) {
        convertErrorDesc('relations > target');
      }
      if (item.linkChanged) {
        convertErrorDesc('relations > linkChanged');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  lifecycle: Object(_mergeLifecycle__WEBPACK_IMPORTED_MODULE_3__["mergeLifecycle"])(_platform_patch_wx_lifecycle__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE"]),
  pageMode: 'blend',
  support: false,
  lifecycleProxyMap: {
    '__created__': ['onLoad', 'created', 'attached'],
    '__mounted__': ['ready', 'onReady'],
    '__destroyed__': ['detached'],
    '__updated__': ['updated']
  },
  convert: function convert(options) {
    if (options.properties) {
      var newProps = {};
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options.properties).forEach(function (key) {
        var prop = options.properties[key];
        if (prop && prop.hasOwnProperty('value')) {
          newProps[key] = prop.value;
        } else {
          newProps[key] = typeof prop === 'function' ? prop() : null;
        }
      });
      options.props = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newProps, options.props);
      delete options.properties;
    }
    notSupportTip(options);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConvertMode", function() { return getConvertMode; });
var CONVERTMODES = {
  'wx-ali': 'wxToAli'
};
function getConvertMode(srcMode, mode) {
  return CONVERTMODES[srcMode + '-' + mode];
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);


/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('page'));

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderCallBack", function() { return getRenderCallBack; });
/* harmony import */ var _core_transferOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _ali_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(154);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(134);






function createFactory(type) {
  return function (options) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        isNative = _ref.isNative;

    options.__nativeRender__ = !!isNative;
    options.__type__ = type;
    var getDefaultOptions = void 0;
    if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_4__["is"])('ali')) {
      getDefaultOptions = _ali_getDefaultOptions__WEBPACK_IMPORTED_MODULE_3__["getDefaultOptions"];
    } else {
      getDefaultOptions = _wx_getDefaultOptions__WEBPACK_IMPORTED_MODULE_2__["getDefaultOptions"];
    }
    // 获取内建的mixins
    var builtInMixins = Object(_builtInMixins_index__WEBPACK_IMPORTED_MODULE_1__["default"])(options, type);

    var _transferOptions = Object(_core_transferOptions__WEBPACK_IMPORTED_MODULE_0__["default"])(options, type, builtInMixins),
        rawOptions = _transferOptions.rawOptions,
        currentInject = _transferOptions.currentInject;

    var defaultOptions = getDefaultOptions(type, { rawOptions: rawOptions, currentInject: currentInject });
    global.currentCtor(defaultOptions);
  };
}

function getRenderCallBack(context) {
  return function () {
    if (!Object(_helper_env__WEBPACK_IMPORTED_MODULE_4__["is"])('ali') || context.options.__type__ === 'page') {
      context.updated();
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBuiltInMixins; });
/* harmony import */ var _pageStatusMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _proxyEventMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _renderHelperMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var _refsMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _showMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var _relationsMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145);







function getBuiltInMixins(options, type) {
  return [Object(_pageStatusMixin__WEBPACK_IMPORTED_MODULE_0__["default"])(type), Object(_proxyEventMixin__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_renderHelperMixin__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_refsMixin__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_showMixin__WEBPACK_IMPORTED_MODULE_4__["default"])(type), Object(_relationsMixin__WEBPACK_IMPORTED_MODULE_5__["default"])(type)].filter(function (item) {
    return item;
  });
}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


function pageStatusMixin(mixinType) {
  if (mixinType === 'page') {
    return {
      data: {
        mpxPageStatus: 'show'
      },
      onShow: function onShow() {
        this.mpxPageStatus = 'show';
      },
      onHide: function onHide() {
        this.mpxPageStatus = 'hide';
      }
    };
  } else {
    if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_0__["is"])('ali')) {
      return {
        watch: {
          '$page.mpxPageStatus': {
            handler: function handler(val) {
              if (val) {
                var rawOptions = this.$rawOptions;
                var callback = val === 'show' ? rawOptions.pageShow : rawOptions.pageHide;
                typeof callback === 'function' && callback.call(this);
              }
            },

            immediate: true
          }
        }
      };
    } else {
      return {
        properties: {
          mpxPageStatus: {
            type: String
          }
        },
        watch: {
          mpxPageStatus: {
            handler: function handler(val) {
              if (val) {
                var rawOptions = this.$rawOptions;
                var callback = val === 'show' ? rawOptions.pageShow : rawOptions.pageHide;
                typeof callback === 'function' && callback.call(this);
              }
            },

            immediate: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxyEventMixin; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);




function proxyEventMixin() {
  var methods = {
    __invoke: function __invoke($event) {
      var _this = this;

      var type = $event.type;
      var emitMode = $event.detail && $event.detail.mpxEmit;
      if (!type) {
        throw new Error('Event object must have [type] property!');
      }
      var fallbackType = '';
      if (type === 'begin' || type === 'end') {
        // 地图的 regionchange 事件会派发 e.type 为 begin 和 end 的事件
        fallbackType = 'regionchange';
      }
      var target = $event.currentTarget || $event.target;
      if (!target) {
        throw new Error('[' + type + '] event object must have [currentTarget/target] property!');
      }
      var eventConfigs = target.dataset.eventconfigs || {};
      var curEventConfig = eventConfigs[type] || eventConfigs[fallbackType] || [];
      var returnedValue = void 0;
      curEventConfig.forEach(function (item) {
        var callbackName = item[0];
        if (emitMode) {
          $event = $event.detail.data;
        }
        if (callbackName) {
          var params = item.length > 1 ? item.slice(1).map(function (item) {
            if (/^\$event/.test(item)) {
              _this.__mpxTempEvent = $event;
              var value = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["getByPath"])(_this, item.replace('$event', '__mpxTempEvent'));
              // 删除临时变量
              delete _this.__mpxTempEvent;
              return value;
            } else {
              return item;
            }
          }) : [$event];
          if (typeof _this[callbackName] === 'function') {
            returnedValue = _this[callbackName].apply(_this, params);
          } else {
            console.warn('【MPX ERROR】', '[' + callbackName + '] is not function');
          }
        }
      });
      return returnedValue;
    },
    __model: function __model(expr, $event) {
      var valuePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['value'];
      var filterMethod = arguments[3];

      var innerFilter = {
        trim: function trim(val) {
          return typeof val === 'string' && val.trim();
        }
      };
      var originValue = valuePath.reduce(function (acc, cur) {
        return acc[cur];
      }, $event.detail);
      var value = filterMethod ? innerFilter[filterMethod] ? innerFilter[filterMethod](originValue) : typeof this[filterMethod] === 'function' && this[filterMethod] : originValue;
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["setByPath"])(this, expr, value);
    }
  };
  if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_1__["is"])('ali')) {
    babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(methods, {
      triggerEvent: function triggerEvent(eventName, eventDetail) {
        var handlerName = eventName.replace(/^./, function (matched) {
          return matched.toUpperCase();
        });
        var handler = this.props && (this.props['on' + handlerName] || this.props['catch' + handlerName]);
        if (handler && typeof handler === 'function') {
          var dataset = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_2__["collectDataset"])(this.props);
          var id = this.props.id || '';
          var timeStamp = +new Date();
          var eventObj = {
            type: eventName,
            timeStamp: timeStamp,
            target: {
              id: id,
              dataset: dataset,
              targetDataset: dataset
            },
            currentTarget: {
              id: id,
              dataset: dataset
            },
            detail: eventDetail
          };
          handler.call(this, eventObj);
        }
      }
    });
  }
  return {
    methods: methods
  };
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderHelperMixin; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);




function renderHelperMixin() {
  return {
    methods: {
      __iterate: function __iterate(val, handler) {
        var i = void 0,
            l = void 0,
            keys = void 0,
            key = void 0;
        if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["likeArray"])(val) || typeof val === 'string') {
          for (i = 0, l = val.length; i < l; i++) {
            handler(val[i], i);
          }
        } else if (typeof val === 'number') {
          for (i = 0; i < val; i++) {
            handler(i + 1, i);
          }
        } else if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(val)) {
          keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(val);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            handler(val[key], key, i);
          }
        }
      },
      __travel: function __travel(val) {
        var __seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        // render函数中深度遍历对象，处理props传递问题
        if (Object(mobx__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(val) && __seen.indexOf(val) === -1) {
          Object(mobx__WEBPACK_IMPORTED_MODULE_2__["toJS"])(val, false);
          __seen.push(val);
        }
        return val;
      },
      __get: function __get(target, property) {
        if (Object(mobx__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(target) && !Object(mobx__WEBPACK_IMPORTED_MODULE_2__["isObservableArray"])(target)) {
          return Object(mobx__WEBPACK_IMPORTED_MODULE_2__["get"])(target, property);
        }
        return target[property];
      }
    }
  };
}

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRefsMixin; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(134);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);







function getRefsMixin() {
  var _ref;

  var aliMethods = void 0;
  if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_4__["is"])('ali')) {
    var proxyMethods = ['boundingClientRect', 'scrollOffset'];

    aliMethods = {
      createSelectorQuery: function createSelectorQuery() {
        var _my;

        var selectorQuery = (_my = my).createSelectorQuery.apply(_my, arguments);
        var cbs = [];
        proxyMethods.forEach(function (name) {
          var originalMethod = selectorQuery[name];
          selectorQuery[name] = function () {
            var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helper_utils__WEBPACK_IMPORTED_MODULE_5__["noop"];

            cbs.push(cb);
            return originalMethod.call(this);
          };
        });

        var originalExec = selectorQuery.exec;
        selectorQuery.exec = function () {
          var originalCb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helper_utils__WEBPACK_IMPORTED_MODULE_5__["noop"];

          var cb = function cb(results) {
            results.forEach(function (item, index) {
              cbs[index](item);
            });
            originalCb(results);
          };
          return originalExec.call(this, cb);
        };
        return selectorQuery;
      },
      selectComponent: function selectComponent(selector, all) {
        var children = this.__children__ || [];
        var result = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            if (child.identifiers.indexOf(selector) > -1) {
              result.push(child.component);
              if (!all) {
                break;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (selector.lastIndexOf('.') > 0) {
          console.error('the selectComponent or selectAllComponents only supports the single selector, so the compound selector may be failed');
        }
        return all ? result : result[0];
      },
      selectAllComponents: function selectAllComponents(selector) {
        return this.selectComponent(selector, true);
      },
      __updateRef: function __updateRef(destroyed) {
        this.triggerEvent && this.triggerEvent('updateRef', {
          component: this,
          destroyed: destroyed
        });
      },
      __handleUpdateRef: function __handleUpdateRef(e) {
        if (!this.__children__) {
          this.__children__ = [];
        }
        var component = e.detail.component;
        var destroyed = e.detail.destroyed;
        var className = component.mpxClass || component.className;
        var identifiers = className ? className.trim().split(/\s+/).map(function (item) {
          return '.' + item;
        }) : [];
        if (component.id) {
          identifiers.push('#' + component.id);
        }
        if (destroyed) {
          this.__children__ = this.__children__.filter(function (item) {
            return item.component !== component;
          });
        } else {
          this.__children__.push({
            component: component,
            identifiers: identifiers
          });
        }
      }
    };
  }
  return _ref = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["BEFORECREATE"], function () {
    this.$refs = {};
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["CREATED"], function () {
    this.__updateRef && this.__updateRef();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["BEFOREMOUNT"], function () {
    this.__getRefs();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["UPDATED"], function () {
    this.__getRefs();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, _core_innerLifecycle__WEBPACK_IMPORTED_MODULE_3__["DESTROYED"], function () {
    // 销毁ref
    this.__updateRef && this.__updateRef(true);
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 'methods', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, aliMethods, {
    __getRefs: function __getRefs() {
      var _this = this;

      if (this.__getRefsData) {
        var refs = this.__getRefsData();
        refs.forEach(function (ref) {
          _this.$refs[ref.key] = _this.__getRefNode(ref);
        });
      }
    },
    __getRefNode: function __getRefNode(ref) {
      if (!ref) return;
      var selector = ref.selector.replace(/{{mpxCid}}/g, this.__mpxProxy.uid);
      if (ref.type === 'node') {
        var query = this.createSelectorQuery();
        return query && (ref.all ? query.selectAll(selector) : query.select(selector));
      } else if (ref.type === 'component') {
        return ref.all ? this.selectAllComponents(selector) : this.selectComponent(selector);
      }
    }
  })), _ref;
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageStatusMixin; });
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


function pageStatusMixin(mixinType) {
  if (mixinType === 'component') {
    if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_0__["is"])('ali')) {
      return {
        props: {
          mpxShow: true
        }
      };
    } else {
      return {
        properties: {
          mpxShow: {
            type: Boolean,
            value: true
          }
        }
      };
    }
  }
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relationsMixin; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _helper_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);




var targets = [];
var curTarget = null;

function pushTarget(cur) {
  targets.push(curTarget);
  curTarget = cur;
}

function popTarget() {
  curTarget = targets.pop();
}

function parsePath(path, absolute) {
  if (path.indexOf('/') === 0) {
    return path;
  }
  var dirs = absolute.split('/').slice(0, -1);
  var relatives = path.split('/');
  relatives = relatives.filter(function (path) {
    if (path === '..') {
      dirs.pop();
      return false;
    } else {
      return path !== '.';
    }
  });
  return dirs.concat(relatives).join('/');
}

function transferPath(relations, base) {
  var newRelations = {};
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(relations).forEach(function (key) {
    newRelations[parsePath(key, base)] = relations[key];
  });
  return newRelations;
}

function relationsMixin(mixinType) {
  if (Object(_helper_env__WEBPACK_IMPORTED_MODULE_2__["is"])('ali') && mixinType === 'component') {
    return {
      methods: {
        getRelationNodes: function getRelationNodes(path) {
          var realPath = parsePath(path, this.is);
          return this.$relationNodesMap && this.$relationNodesMap[realPath] || [];
        },
        mpxCollectChildComponent: function mpxCollectChildComponent(children, list) {
          var _this = this;

          if (this.$mpxRelations) {
            children.forEach(function (child) {
              if (child && child.props) {
                if (child.props.$isCustomComponent) {
                  // 只有relations中声明为后代的节点才能被作为有效子节点
                  var relation = _this.$mpxRelations[child.type.displayName];
                  if (relation && (relation.type === 'child' || relation.type === 'descendant')) {
                    child.props.$mpxIsSlot = true;
                    list.push(child);
                  }
                } else {
                  var childrenType = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["type"])(child.props.children);
                  if (childrenType === 'Object' || childrenType === 'Array') {
                    var slotChildren = childrenType !== 'Array' ? [child.props.children] : child.props.children;
                    _this.mpxCollectChildComponent(slotChildren, list);
                  }
                }
              }
            });
          }
        },
        mpxSlotNotify: function mpxSlotNotify() {
          if (this.mpxSlotLinkNum < this.mpxSlotChildren.length) {
            this.mpxSlotLinkNum++;
            if (this.mpxSlotLinkNum === this.mpxSlotChildren.length) {
              popTarget();
            }
          }
        },
        mpxExecAllRelations: function mpxExecAllRelations(type) {
          var _this2 = this;

          this.mpxRelationContexts.forEach(function (context) {
            context.mpxExecRelation(_this2, type);
            _this2.mpxExecRelation(context, type);
          });
        },
        mpxExecRelation: function mpxExecRelation(target, type) {
          this.mpxCacheRelationNode(target, type);
          var relations = this.$mpxRelations || {};
          var path = target.is;
          if (relations[path]) {
            typeof relations[path][type] === 'function' && relations[path][type].call(this, target);
          }
        },
        mpxCacheRelationNode: function mpxCacheRelationNode(target, type) {
          var path = target.is;
          var nodes = this.$relationNodesMap[path] || [];
          if (type === 'linked') {
            nodes.push(target);
          } else {
            var index = nodes.indexOf(target);
            index > -1 && nodes.splice(index, 1);
          }
          this.$relationNodesMap[path] = nodes;
        },
        mpxGetRelation: function mpxGetRelation(child) {
          var parentRelations = this.$mpxRelations || {};
          var childRelations = child.$mpxRelations || {};
          if (parentRelations[child.is] && childRelations[this.is]) {
            var parentType = parentRelations[child.is].type;
            var childType = childRelations[this.is].type;
            return {
              parentType: parentType,
              childType: childType
            };
          }
        },
        mpxPropagateFindRelation: function mpxPropagateFindRelation(child) {
          var cur = this;
          var contexts = [];
          var depth = 1;
          // 向上查找所有可能匹配的父级relation上下文
          while (cur) {
            var relations = cur.mpxGetRelation(child);
            if (relations) {
              if (relations.parentType === 'child' && relations.childType === 'parent' && depth === 1 || relations.parentType === 'descendant' && relations.childType === 'ancestor') {
                contexts.push(cur);
              }
            }
            cur = cur.mpxSlotParent;
            depth++;
          }
          return contexts;
        }
      },
      onInit: function onInit() {
        if (this.$rawOptions.relations) {
          this.$mpxRelations = transferPath(this.$rawOptions.relations, this.is);
          this.$relationNodesMap = {};
        }
        if (curTarget && this.props.$mpxIsSlot) {
          this.mpxSlotParent = curTarget; // slot 父级
          if (this.$mpxRelations) {
            var contexts = curTarget.mpxPropagateFindRelation(this); // relation 父级|祖先
            if (contexts) {
              this.mpxRelationContexts = contexts;
              this.mpxExecAllRelations('linked');
            }
          }
        }
      },
      deriveDataFromProps: function deriveDataFromProps(nextProps) {
        var _this3 = this;

        this.mpxSlotParent && this.mpxSlotParent.mpxSlotNotify(); // 通知slot父级，确保父级能执行popTarget
        var slots = nextProps.$slots || {};
        var slotKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(slots);
        if (slotKeys.length) {
          this.mpxSlotChildren = [];
          this.mpxSlotLinkNum = 0;
          slotKeys.forEach(function (key) {
            _this3.mpxCollectChildComponent(slots[key], _this3.mpxSlotChildren);
          });
          if (this.mpxSlotChildren.length) {
            pushTarget(this);
          }
        }
      },
      didUnmount: function didUnmount() {
        if (this.mpxRelationContexts) {
          this.mpxExecAllRelations('unlinked');
        }
      }
    };
  }
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);
/* harmony import */ var _core_customOptionKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(153);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(121);









function transformProperties(properties) {
  if (!properties) {
    return {};
  }
  var newProps = {};
  Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["enumerableKeys"])(properties).forEach(function (key) {
    var rawFiled = properties[key];
    var newFiled = null;
    if (rawFiled === null) {
      rawFiled = {
        type: null
      };
    }
    if (typeof rawFiled === 'function') {
      newFiled = {
        type: rawFiled
      };
    } else {
      newFiled = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_3__["extend"])({}, rawFiled);
    }
    newFiled.observer = function (value, oldValue) {
      if (this.__mpxProxy) {
        this[key] = value;
        this.__mpxProxy.updated();
      }
    };
    newProps[key] = newFiled;
  });
  return newProps;
}

function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);
  babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default()(context, {
    setData: {
      get: function get() {
        return this.__mpxProxy.setData.bind(this.__mpxProxy);
      },

      configurable: true
    },
    __getInitialData: {
      get: function get() {
        return function () {
          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get: function get() {
        return rawSetData;
      },

      configurable: false
    }
  });
  // 绑定注入的render
  if (currentInject) {
    if (currentInject.render) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default()(context, {
        __injectedRender: {
          get: function get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }
    if (currentInject.getRefsData) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_2___default()(context, {
        __getRefsData: {
          get: function get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options) {
  var newOptions = {};
  var ignoreProps = _core_customOptionKeys__WEBPACK_IMPORTED_MODULE_5__["default"];
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options).forEach(function (key) {
    if (ignoreProps.indexOf(key) !== -1 || key === 'data' && typeof options[key] === 'function') {
      return;
    }
    if (key === 'properties' || key === 'props') {
      newOptions['properties'] = transformProperties(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options['properties'], options['props']));
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function getRootMixin(mixin) {
  var supportBehavior = typeof Behavior !== 'undefined';
  if (supportBehavior) {
    return {
      // eslint-disable-next-line no-undef
      behaviors: [Behavior(mixin)]
    };
  } else {
    return mixin;
  }
}

function initProxy(context, rawOptions, currentInject) {
  // 提供代理对象需要的api
  transformApiForProxy(context, currentInject);
  // 缓存options
  context.$rawOptions = rawOptions;
  // 创建proxy对象
  var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_4__["default"](rawOptions, context);
  context.__mpxProxy = mpxProxy;
  // 组件监听视图数据更新, attached之后才能拿到properties
  context.__mpxProxy.created();
}

function getDefaultOptions(type, _ref) {
  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === undefined ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;

  var rootMixins = [getRootMixin({
    onLoad: function onLoad() {
      // 百度小程序page onLoad > attached
      if (!this.__mpxProxy) {
        initProxy(this, rawOptions, currentInject);
      }
    },
    attached: function attached() {
      if (!this.__mpxProxy) {
        initProxy(this, rawOptions, currentInject);
      }
    },
    ready: function ready() {
      this.__mpxProxy && this.__mpxProxy.mounted();
    },
    detached: function detached() {
      this.__mpxProxy && this.__mpxProxy.destroyed();
    }
  })];
  rawOptions.mixins = rawOptions.mixins ? rootMixins.concat(rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_6__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions);
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var $Object = __webpack_require__(19).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(27), 'Object', { defineProperties: __webpack_require__(36) });


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var _queueWatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(151);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(152);
/* harmony import */ var _platform_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(138);
/* harmony import */ var _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(131);













var uid = 0;

var MPXProxy = function () {
  function MPXProxy(options, target) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MPXProxy);

    this.target = target;
    if (typeof target.__getInitialData !== 'function') {
      console.error('【MPX ERROR】', 'please specify a \u3010__getInitialData\u3011function to get miniprogram\'s initial data');
      return;
    }
    this.uid = uid++;
    this.name = options.name || '';
    this.options = options;
    // initial -> created -> mounted -> destroyed
    this.state = 'initial';
    this.watchers = []; // 保存所有观察者
    this.renderReaction = null;
    this.computedKeys = options.computed ? Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(options.computed) : [];
    this.localKeys = this.computedKeys.slice(); // 非props key
    this.forceUpdateKeys = []; // 强制更新的key，无论是否发生change
    this.curRenderTask = null;
    this.lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["asyncLock"])();
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MPXProxy, [{
    key: 'created',
    value: function created() {
      this.initApi();
      this.initialData = this.target.__getInitialData();
      this.cacheData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, this.initialData); // 缓存数据，用于diff
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["BEFORECREATE"]);
      this.initState(this.options);
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["CREATED"];

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      this.callUserHook.apply(this, [_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["CREATED"]].concat(params));
      // 强制走小程序原生渲染逻辑
      this.options.__nativeRender__ ? this.setData() : this.initRender();
    }
  }, {
    key: 'renderTaskExecutor',
    value: function renderTaskExecutor(isEmptyRender) {
      if (!this.isMounted() && this.curRenderTask || this.isMounted() && isEmptyRender) {
        return;
      }
      var promiseResolve = void 0;
      var promise = new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
        promiseResolve = resolve;
      });
      this.curRenderTask = {
        promise: promise,
        resolve: promiseResolve
        // isMounted之前基于mounted触发，isMounted之后基于setData回调触发
      };return this.isMounted() && promiseResolve;
    }
  }, {
    key: 'isMounted',
    value: function isMounted() {
      return this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["MOUNTED"];
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      if (this.state === _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["CREATED"]) {
        this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["MOUNTED"];
        // 用于处理refs等前置工作
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["BEFOREMOUNT"]);
        this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["MOUNTED"]);
        this.curRenderTask && this.curRenderTask.resolve();
      }
    }
  }, {
    key: 'updated',
    value: function updated() {
      var _this = this;

      if (this.isMounted()) {
        this.lockTask(function () {
          // 由于异步，需要确认 this.state
          if (_this.isMounted()) {
            _this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["UPDATED"]);
          }
        });
      }
    }
  }, {
    key: 'destroyed',
    value: function destroyed() {
      this.clearWatchers();
      this.state = _innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["DESTROYED"];
      this.callUserHook(_innerLifecycle__WEBPACK_IMPORTED_MODULE_10__["DESTROYED"]);
    }
  }, {
    key: 'initApi',
    value: function initApi() {
      var _this2 = this;

      // 挂载扩展属性到实例上
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["proxy"])(this.target, this.options.proto, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(this.options.proto), true);
      // 挂载混合模式下的自定义属性
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["proxy"])(this.target, this.options, this.options.mpxCustomKeysForBlend);
      // 挂载$watch
      this.target.$watch = function () {
        return _this2.watch.apply(_this2, arguments);
      };
      // 强制执行render
      this.target.$forceUpdate = function () {
        return _this2.forceUpdate.apply(_this2, arguments);
      };
      // 监听单次回调
      this.target.$updated = function (fn) {
        console.warn('【MPX WARN】', '【this.$updated】 has be deprecated，please use 【this.$nextTick】 ');
        _this2.nextTick(fn);
      };
      this.target.$nextTick = function (fn) {
        return _this2.nextTick(fn);
      };
    }
  }, {
    key: 'initState',
    value: function initState() {
      var options = this.options;
      this.initProps();
      var data = this.initData(options.data);
      var proxyData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, this.initialData, data);
      this.initComputed(options.computed, proxyData);
      this.data = Object(mobx__WEBPACK_IMPORTED_MODULE_5__["observable"])(proxyData);
      /* target的数据访问代理到将proxy的data */
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["proxy"])(this.target, this.data, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(this.data).concat(this.computedKeys));
      // 初始化watch
      this.initWatch(options.watch);
    }
  }, {
    key: 'initProps',
    value: function initProps() {
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["proxy"])(this.target, this.initialData, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(this.initialData));
    }
  }, {
    key: 'initData',
    value: function initData(dataFn) {
      // mpxCid 解决支付宝环境selector为全局问题
      var data = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
        mpxCid: this.uid
      }, typeof dataFn === 'function' ? dataFn.call(this.target) : dataFn);
      this.collectLocalKeys(data);
      return data;
    }
  }, {
    key: 'initComputed',
    value: function initComputed(computedConfig, proxyData) {
      var _this3 = this;

      this.computedKeys.forEach(function (key) {
        if (key in proxyData) {
          console.error('【MPX ERROR】', 'the computed key \u3010' + key + '\u3011 is duplicated, please check');
        }
        var getValue = computedConfig[key].get || computedConfig[key];
        var setValue = computedConfig[key].set;
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["defineGetterSetter"])(proxyData, key, getValue, setValue, _this3.target);
      });
    }
  }, {
    key: 'initWatch',
    value: function initWatch(watches) {
      var _this4 = this;

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["type"])(watches) === 'Object') {
        Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(watches).forEach(function (key) {
          var handler = watches[key];
          if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["type"])(handler) === 'Array') {
            handler.forEach(function (item) {
              _this4.watch(key, item);
            });
          } else {
            _this4.watch(key, handler);
          }
        });
      }
    }
  }, {
    key: 'collectLocalKeys',
    value: function collectLocalKeys(data) {
      this.localKeys.push.apply(this.localKeys, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["enumerableKeys"])(data));
    }
  }, {
    key: 'nextTick',
    value: function nextTick(fn) {
      var _this5 = this;

      if (typeof fn === 'function') {
        Object(_queueWatcher__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
          _this5.curRenderTask ? _this5.curRenderTask.promise.then(fn) : fn();
        });
      }
    }
  }, {
    key: 'callUserHook',
    value: function callUserHook(hookName) {
      var hook = this.options[hookName];
      if (typeof hook === 'function') {
        for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }

        hook.call.apply(hook, [this.target].concat(params));
      }
    }
  }, {
    key: 'watch',
    value: function watch(expr, handler, options) {
      var watcher = Object(_watcher__WEBPACK_IMPORTED_MODULE_8__["watch"])(this.target, expr, handler, options);
      this.watchers.push(watcher);
      return this.removeWatch(watcher);
    }
  }, {
    key: 'removeWatch',
    value: function removeWatch(watcher) {
      var _this6 = this;

      return function () {
        var watchers = _this6.watchers;
        if (watcher) {
          var index = watchers.indexOf(watcher);
          index > -1 && watchers.splice(index, 1);
          watcher.destroy();
        } else {
          watcher = watchers.shift();
          while (watcher) {
            watcher.destroy();
            watcher = watchers.shift();
          }
        }
      };
    }
  }, {
    key: 'clearWatchers',
    value: function clearWatchers() {
      this.renderReaction = null;
      this.removeWatch()();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var newData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["filterProperties"])(this.data, this.localKeys);
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(newData).forEach(function (key) {
        if (!_this7.checkInForceUpdateKeys(key) && mobx__WEBPACK_IMPORTED_MODULE_5__["comparer"].structural(_this7.cacheData[key], newData[key])) {
          // 强制更新的key，无论是否变化，都要进行最终的setData
          delete newData[key];
        } else {
          _this7.cacheData[key] = newData[key];
        }
      });
      this.doRender(newData);
    }
  }, {
    key: 'renderWithData',
    value: function renderWithData(rawRenderData) {
      var renderData = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["preprocessRenderData"])(rawRenderData);
      if (!this.miniRenderData) {
        this.miniRenderData = {};
        for (var key in renderData) {
          if (renderData.hasOwnProperty(key)) {
            var item = renderData[key];
            var data = item[0];
            var firstKey = item[1];
            if (this.localKeys.indexOf(firstKey) > -1) {
              this.miniRenderData[key] = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["diffAndCloneA"])(data).clone;
            }
          }
        }
        this.doRender(this.miniRenderData);
      } else {
        this.doRender(this.processRenderData(renderData));
      }
    }
  }, {
    key: 'processRenderData',
    value: function processRenderData(renderData) {
      var result = {};
      for (var key in renderData) {
        if (renderData.hasOwnProperty(key)) {
          var item = renderData[key];
          var data = item[0];
          var firstKey = item[1];

          var _diffAndCloneA = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["diffAndCloneA"])(data, this.miniRenderData[key]),
              clone = _diffAndCloneA.clone,
              diff = _diffAndCloneA.diff;

          if (this.localKeys.indexOf(firstKey) > -1 && (this.checkInForceUpdateKeys(key) || diff)) {
            this.miniRenderData[key] = result[key] = clone;
          }
        }
      }
      return result;
    }
  }, {
    key: 'doRender',
    value: function doRender(data, cb) {
      var _this8 = this;

      if (typeof this.target.__render !== 'function') {
        console.error('【MPX ERROR】', 'please specify a 【__render】 function to render view');
        return;
      }
      if (typeof cb !== 'function') {
        cb = undefined;
      }

      var isEmpty = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["isEmptyObject"])(data);
      var resolve = this.renderTaskExecutor(isEmpty);
      this.forceUpdateKeys = []; // 仅用于当次的render

      if (isEmpty) {
        cb && cb();
        return;
      }
      /**
       * mounted之后才接收回调来触发updated钩子，换言之mounted之前修改数据是不会触发updated的
       */
      var callback = cb;
      if (this.isMounted()) {
        callback = function callback() {
          Object(_platform_patch__WEBPACK_IMPORTED_MODULE_9__["getRenderCallBack"])(_this8)();
          cb && cb();
          resolve && resolve();
        };
      }
      this.target.__render(Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["processUndefined"])(data), callback);
    }
  }, {
    key: 'setData',
    value: function setData(data, callback) {
      // 同步数据到proxy
      data && this.forceUpdate(data);
      if (this.options.__nativeRender__) {
        // 走原生渲染
        return this.doRender(data, callback);
      } else if (typeof callback === 'function') {
        this.nextTick(callback);
      }
    }
  }, {
    key: 'initRender',
    value: function initRender() {
      var _this9 = this;

      var renderWatcher = void 0;
      var renderExecutionFailed = false;
      if (this.target.__injectedRender) {
        renderWatcher = Object(_watcher__WEBPACK_IMPORTED_MODULE_8__["watch"])(this.target, function () {
          if (renderExecutionFailed) {
            _this9.render();
          } else {
            try {
              return _this9.target.__injectedRender();
            } catch (e) {
              console.warn('\u3010MPX WARN\u3011at [' + _this9.options.mpxFileResource + ']', 'Failed to execute render function, degrade to full-set-data mode!', e);
              console.warn('【MPX WARN】', 'If the render function execution failed because of "__wxs_placeholder", ignore this warning.');
              renderExecutionFailed = true;
              _this9.render();
            }
          }
        }, {
          handler: function handler(ret) {
            if (!renderExecutionFailed) {
              _this9.renderWithData(ret);
            }
          },
          immediate: true,
          forceCallback: true
        });
      } else {
        renderWatcher = Object(_watcher__WEBPACK_IMPORTED_MODULE_8__["watch"])(this.target, function () {
          _this9.render();
        });
      }
      this.renderReaction = renderWatcher.reaction;
      this.watchers.push(renderWatcher);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(params, callback) {
      var _this10 = this;

      var paramsType = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["type"])(params);
      var forceUpdateKeys = this.localKeys;
      if (paramsType === 'Function') {
        callback = params;
        params = null;
      } else if (paramsType === 'Object') {
        forceUpdateKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(params);
        forceUpdateKeys.forEach(function (key) {
          Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["setByPath"])(_this10.data, key, params[key]);
        });
      }
      this.setForceUpdateKeys(forceUpdateKeys);
      Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["type"])(callback) === 'Function' && this.nextTick(callback);
      // 无论是否改变，强制将状态置为stale，从而触发render
      if (this.renderReaction) {
        this.renderReaction.dependenciesState = 2;
        this.renderReaction.schedule();
      }
    }
  }, {
    key: 'setForceUpdateKeys',
    value: function setForceUpdateKeys() {
      var _this11 = this;

      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      keys.forEach(function (key) {
        if (_this11.forceUpdateKeys.indexOf(key) === -1) {
          _this11.forceUpdateKeys.push(key);
        }
      });
    }
  }, {
    key: 'checkInForceUpdateKeys',
    value: function checkInForceUpdateKeys(key) {
      return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_6__["findItem"])(this.forceUpdateKeys, new RegExp('^' + key));
    }
  }]);

  return MPXProxy;
}();

/* harmony default export */ __webpack_exports__["default"] = (MPXProxy);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return queueWatcher; });
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);

var queue = [];
var idsMap = {};
var flushing = false;
var curIndex = 0;
var lockTask = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_0__["asyncLock"])();
function queueWatcher(watcher) {
  if (!watcher.id && typeof watcher === 'function') {
    watcher = {
      id: Infinity,
      run: watcher
    };
  }
  if (!idsMap[watcher.id] || watcher.id === Infinity) {
    idsMap[watcher.id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      var i = queue.length - 1;
      while (i > curIndex && watcher.id < queue[i].id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    lockTask(flushQueue, resetQueue);
  }
}

function flushQueue() {
  flushing = true;
  queue.sort(function (a, b) {
    return a.id - b.id;
  });
  for (curIndex = 0; curIndex < queue.length; curIndex++) {
    var watcher = queue[curIndex];
    idsMap[watcher.id] = null;
    // 如果已经销毁，就不再执行
    watcher.destroyed || watcher.run();
  }
  resetQueue();
}

function resetQueue() {
  flushing = false;
  curIndex = queue.length = 0;
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var _queueWatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(151);








var uid = 0;

var Watcher = function () {
  function Watcher(context, expr, callback, options) {
    var _this = this;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Watcher);

    this.destroyed = false;
    this.get = function () {
      return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["type"])(expr) === 'String' ? Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["getByPath"])(context, expr) : expr();
    };
    var callbackType = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["type"])(callback);
    if (callbackType === 'Object') {
      options = callback;
      callback = null;
    } else if (callbackType === 'String') {
      callback = context[callback];
    }
    this.callback = typeof callback === 'function' ? Object(mobx__WEBPACK_IMPORTED_MODULE_4__["action"])(callback.bind(context)) : null;
    this.options = options || {};
    this.id = ++uid;
    this.reaction = new mobx__WEBPACK_IMPORTED_MODULE_4__["Reaction"]('mpx-watcher-' + this.id, function () {
      _this.update();
    });
    var value = this.getValue();
    if (this.options.immediateAsync) {
      Object(_queueWatcher__WEBPACK_IMPORTED_MODULE_6__["default"])(this);
    } else {
      this.value = value;
      if (this.options.immediate) {
        this.callback && this.callback(this.value);
      }
    }
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Watcher, [{
    key: 'getValue',
    value: function getValue() {
      var _this2 = this;

      var value = void 0;
      this.reaction.track(function () {
        value = _this2.get();
        if (_this2.options.deep) {
          var valueType = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["type"])(value);
          // 某些情况下，最外层是非isObservable 对象，比如同时观察多个属性时
          if (!Object(mobx__WEBPACK_IMPORTED_MODULE_4__["isObservable"])(value) && (valueType === 'Array' || valueType === 'Object')) {
            if (valueType === 'Array') {
              value = value.map(function (item) {
                return Object(mobx__WEBPACK_IMPORTED_MODULE_4__["toJS"])(item, false);
              });
            } else {
              var newValue = {};
              babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(value).forEach(function (key) {
                newValue[key] = Object(mobx__WEBPACK_IMPORTED_MODULE_4__["toJS"])(value[key], false);
              });
              value = newValue;
            }
          } else {
            value = Object(mobx__WEBPACK_IMPORTED_MODULE_4__["toJS"])(value, false);
          }
        } else if (Object(mobx__WEBPACK_IMPORTED_MODULE_4__["isObservableArray"])(value)) {
          value.peek();
        } else if (Object(mobx__WEBPACK_IMPORTED_MODULE_4__["isObservableObject"])(value)) {
          Object(mobx__WEBPACK_IMPORTED_MODULE_4__["keys"])(value);
        }
      });
      return value;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.options.sync) {
        this.run();
      } else {
        Object(_queueWatcher__WEBPACK_IMPORTED_MODULE_6__["default"])(this);
      }
    }
  }, {
    key: 'run',
    value: function run() {
      var immediateAsync = !this.hasOwnProperty('value');
      var oldValue = this.value;
      this.value = this.getValue();
      if (immediateAsync || this.value !== oldValue || Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["isObject"])(this.value) || this.options.forceCallback) {
        if (this.callback) {
          immediateAsync ? this.callback(this.value) : this.callback(this.value, oldValue);
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.destroyed = true;
      this.reaction.getDisposer()();
    }
  }]);

  return Watcher;
}();

/* harmony default export */ __webpack_exports__["default"] = (Watcher);


function watch(context, expr, handler, options) {
  var callback = void 0;
  if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_5__["type"])(handler) === 'Object') {
    callback = handler.handler;
    options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, handler);
    delete options.handler;
  } else {
    callback = handler;
  }
  return new Watcher(context, expr, callback, options);
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _innerLifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);

/* harmony default export */ __webpack_exports__["default"] = (['proto', 'mixins', 'watch', 'computed', 'mpxCustomKeysForBlend'].concat(_innerLifecycle__WEBPACK_IMPORTED_MODULE_0__["INNER_LIFECYCLES"]));

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(155);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var _core_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(150);
/* harmony import */ var _core_customOptionKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(153);
/* harmony import */ var _core_mergeOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);











function transformApiForProxy(context, currentInject) {
  var rawSetData = context.setData.bind(context);
  if (babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(context, 'setData').configurable) {
    Object.defineProperty(context, 'setData', {
      get: function get() {
        return context.__mpxProxy.setData.bind(context.__mpxProxy);
      },

      configurable: true
    });
  }
  babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
    __getInitialData: {
      get: function get() {
        return function () {
          if (context.props) {
            var newData = context.$rawOptions.__nativeRender__ ? context.data : babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, context.data);
            babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(context.props).forEach(function (key) {
              if (!key.startsWith('$') && typeof context.props[key] !== 'function') {
                newData[key] = context.props[key];
              }
            });
            return newData;
          }
          return context.data;
        };
      },

      configurable: false
    },
    __render: {
      get: function get() {
        return rawSetData;
      },

      configurable: false
    }
  });
  if (currentInject) {
    if (currentInject.render) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
        __injectedRender: {
          get: function get() {
            return currentInject.render.bind(context);
          },

          configurable: false
        }
      });
    }
    if (currentInject.getRefsData) {
      babel_runtime_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default()(context, {
        __getRefsData: {
          get: function get() {
            return currentInject.getRefsData;
          },

          configurable: false
        }
      });
    }
  }
}

function filterOptions(options, type) {
  var newOptions = {};
  var ignoreProps = _core_customOptionKeys__WEBPACK_IMPORTED_MODULE_7__["default"];
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options).forEach(function (key) {
    if (ignoreProps.indexOf(key) !== -1 || key === 'data' && typeof options[key] === 'function') {
      return;
    }
    if (key === 'properties' || key === 'props') {
      newOptions['props'] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, options['properties'], options['props']);
    } else if (key === 'methods' && type === 'page') {
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(newOptions, options[key]);
    } else {
      newOptions[key] = options[key];
    }
  });
  return newOptions;
}

function getDefaultOptions(type, _ref) {
  var _ref2;

  var _ref$rawOptions = _ref.rawOptions,
      rawOptions = _ref$rawOptions === undefined ? {} : _ref$rawOptions,
      currentInject = _ref.currentInject;

  var hookNames = type === 'component' ? ['onInit', 'didMount', 'didUnmount'] : ['onLoad', 'onReady', 'onUnload'];
  var rootMixins = [(_ref2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[0], function () {
    var _mpxProxy;

    // 提供代理对象需要的api
    transformApiForProxy(this, currentInject);
    // 缓存options
    this.$rawOptions = rawOptions;
    // 创建proxy对象
    var mpxProxy = new _core_proxy__WEBPACK_IMPORTED_MODULE_6__["default"](rawOptions, this);
    this.__mpxProxy = mpxProxy;
    (_mpxProxy = this.__mpxProxy).created.apply(_mpxProxy, arguments);
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 'deriveDataFromProps', function deriveDataFromProps(nextProps) {
    var _this = this;

    if (this.__mpxProxy && this.__mpxProxy.isMounted() && nextProps && nextProps !== this.props) {
      if (this.$rawOptions.__nativeRender__) {
        var newData = {};
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps).forEach(function (key) {
          if (!key.startsWith('$') && typeof nextProps[key] !== 'function' && !mobx__WEBPACK_IMPORTED_MODULE_5__["comparer"].structural(_this.props[key], nextProps[key])) {
            newData[key] = nextProps[key];
          }
        });
        this.__mpxProxy.setData(newData);
      } else {
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(nextProps).forEach(function (key) {
          if (!key.startsWith('$') && typeof nextProps[key] !== 'function' && !mobx__WEBPACK_IMPORTED_MODULE_5__["comparer"].structural(_this.props[key], nextProps[key])) {
            _this[key] = nextProps[key];
          }
        });
      }
    }
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 'didUpdate', function didUpdate() {
    this.__mpxProxy && this.__mpxProxy.updated();
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[1], function () {
    if (this.__mpxProxy) {
      this.__mpxProxy.mounted();
    } else {
      console.error('请在支付宝开发工具的详情设置里面，启用component2编译。依赖基础库版本 >=1.14.0');
    }
  }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, hookNames[2], function () {
    this.__mpxProxy && this.__mpxProxy.destroyed();
  }), _ref2)];
  rawOptions.mixins = rawOptions.mixins ? rootMixins.concat(rawOptions.mixins) : rootMixins;
  rawOptions = Object(_core_mergeOptions__WEBPACK_IMPORTED_MODULE_8__["default"])(rawOptions, type, false);
  return filterOptions(rawOptions, type);
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var $Object = __webpack_require__(19).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(11);
var $getOwnPropertyDescriptor = __webpack_require__(94).f;

__webpack_require__(60)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);


/* harmony default export */ __webpack_exports__["default"] = (Object(_patch__WEBPACK_IMPORTED_MODULE_0__["default"])('component'));

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithThis", function() { return createStoreWithThis; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var _mapStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(160);












function transformGetters(getters, module, store) {
  var newGetters = {};

  var _loop = function _loop(key) {
    if (key in store.getters) {
      console.warn('【MPX ERROR】', new Error('duplicate getter type: ' + key));
    }
    Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["defineGetterSetter"])(newGetters, key, function () {
      if (store.withThis) {
        return getters[key].call({
          state: module.state,
          getters: module.getters,
          rootState: store.state
        });
      }
      return getters[key](module.state, store.getters, store.state);
    });
  };

  for (var key in getters) {
    _loop(key);
  }
  return newGetters;
}

function transformMutations(mutations, module, store) {
  var newMutations = {};

  var _loop2 = function _loop2(key) {
    if (store.mutations[key]) {
      console.warn('【MPX ERROR】', new Error('duplicate mutation type: ' + key));
    }
    newMutations[key] = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["action"])(function () {
      for (var _len = arguments.length, payload = Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }

      if (store.withThis) return mutations[key].apply({ state: module.state }, payload);
      return mutations[key].apply(mutations, [module.state].concat(payload));
    });
  };

  for (var key in mutations) {
    _loop2(key);
  }
  return newMutations;
}

function transformActions(actions, module, store) {
  var newActions = {};

  var _loop3 = function _loop3(key) {
    if (store.actions[key]) {
      console.warn('【MPX ERROR】', new Error('duplicate action type: ' + key));
    }
    newActions[key] = function () {
      var context = {
        rootState: store.state,
        state: module.state,
        getters: store.getters,
        dispatch: store.dispatch.bind(store),
        commit: store.commit.bind(store)
      };

      var result = void 0;

      for (var _len2 = arguments.length, payload = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        payload[_key2] = arguments[_key2];
      }

      if (store.withThis) {
        result = actions[key].apply(context, payload);
      } else {
        result = actions[key].apply(actions, [context].concat(payload));
      }
      // action一定返回一个promise
      if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
        return result;
      } else {
        return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(result);
      }
    };
  };

  for (var key in actions) {
    _loop3(key);
  }
  return newActions;
}

function mergeDeps(module, deps, getterKeys) {
  var mergeProps = ['state', 'getters', 'mutations', 'actions'];
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(deps).forEach(function (key) {
    var store = deps[key];
    mergeProps.forEach(function (prop) {
      if (module[prop] && key in module[prop]) {
        console.warn('【MPX ERROR】', new Error('deps\'s name: [' + key + '] conflicts with ' + prop + '\'s key in current options'));
      } else {
        module[prop] = module[prop] || {};
        prop === 'getters' && getterKeys.push(key);
        prop === 'state' ? Object(mobx__WEBPACK_IMPORTED_MODULE_6__["extendObservable"])(module[prop], babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, store[prop])) : module[prop][key] = store[prop];
      }
    });
  });
}

var Store = function () {
  function Store(options) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Store);

    this.withThis = options.withThis;
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this.state = this.registerModule(options).state;
    babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, Object(_mapStore__WEBPACK_IMPORTED_MODULE_8__["default"])(this));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Store, [{
    key: 'dispatch',
    value: function dispatch(type) {
      var action = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["getByPath"])(this.actions, type);
      if (!action) {
        return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.reject(new Error('unknown action type: ' + type));
      } else {
        for (var _len3 = arguments.length, payload = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          payload[_key3 - 1] = arguments[_key3];
        }

        return action.apply(undefined, payload);
      }
    }
  }, {
    key: 'commit',
    value: function commit(type) {
      var mutation = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["getByPath"])(this.mutations, type);
      if (!mutation) {
        console.warn('【MPX ERROR】', new Error('unknown mutation type: ' + type));
      } else {
        for (var _len4 = arguments.length, payload = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          payload[_key4 - 1] = arguments[_key4];
        }

        return mutation.apply(undefined, payload);
      }
    }
  }, {
    key: 'registerModule',
    value: function registerModule(module) {
      var _this = this;

      var getterKeys = [];
      var reactiveModule = {
        state: Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])(module.state || {})
      };
      if (module.getters) {
        // mobx计算属性是不可枚举的，所以单独收集
        getterKeys.push.apply(getterKeys, babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(module.getters));
        reactiveModule.getters = Object(mobx__WEBPACK_IMPORTED_MODULE_6__["observable"])(transformGetters(module.getters, reactiveModule, this));
      }
      if (module.mutations) {
        reactiveModule.mutations = transformMutations(module.mutations, reactiveModule, this);
      }
      if (module.actions) {
        reactiveModule.actions = transformActions(module.actions, reactiveModule, this);
      }
      if (module.deps) {
        mergeDeps(reactiveModule, module.deps, getterKeys);
      }
      // merge getters, 不能用Object.assign，会导致直接执行一次getter函数
      reactiveModule.getters && Object(_helper_utils__WEBPACK_IMPORTED_MODULE_7__["proxy"])(this.getters, reactiveModule.getters, getterKeys, true);
      // merge mutations
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.mutations, reactiveModule.mutations);
      // merge actions
      babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this.actions, reactiveModule.actions);
      // 子module
      if (module.modules) {
        var childs = module.modules;
        babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(childs).forEach(function (key) {
          Object(mobx__WEBPACK_IMPORTED_MODULE_6__["extendObservable"])(reactiveModule.state, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, _this.registerModule(childs[key]).state));
        });
      }
      return reactiveModule;
    }
  }]);

  return Store;
}();

function createStore(options) {
  return new Store(options);
}

function createStoreWithThis(options) {
  options.withThis = true;
  return new Store(options);
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);


function mapFactory(type, store) {
  return function (depPath, maps) {
    maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["normalizeMap"])(depPath, maps);
    var result = {};

    var _loop = function _loop(key) {
      result[key] = function (payload) {
        var value = maps[key];
        if (type === 'mutations') {
          return store.commit(value, payload);
        } else if (type === 'actions') {
          return store.dispatch(value, payload);
        } else {
          var getterVal = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["getByPath"])(store.getters, value, '', '__NOTFOUND__');
          if (getterVal === '__NOTFOUND__') {
            console.warn('【MPX ERROR】', new Error('unknown getter named [' + value + ']'));
            getterVal = '';
          }
          return getterVal;
        }
      };
    };

    for (var key in maps) {
      _loop(key);
    }
    return result;
  };
}
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return {
    mapGetters: mapFactory('getters', store),
    mapMutations: mapFactory('mutations', store),
    mapActions: mapFactory('actions', store),
    mapState: function mapState(depPath, maps) {
      maps = Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["normalizeMap"])(depPath, maps);
      var result = {};
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(maps).forEach(function (key) {
        var value = maps[key];
        result[key] = function () {
          if (typeof value === 'function') {
            return value.call(this, store.state, store.getters);
          } else if (typeof value === 'string') {
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["getByPath"])(store.state, value);
          }
        };
      });
      return result;
    }
  };
});

/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ })
/******/ ]);
module.exports = window["webpackJsonp"];
