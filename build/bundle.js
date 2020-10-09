/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/js/responsive-nav-master.js/responsive-nav.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/js/responsive-nav-master.js/responsive-nav.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*! responsive-nav.js 1.0.39 by @viljamis */\\n\\n.nav-collapse ul {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  display: block;\\n  list-style: none;\\n}\\n\\n.nav-collapse li {\\n  width: 100%;\\n  display: block;\\n}\\n\\n.js .nav-collapse {\\n  clip: rect(0 0 0 0);\\n  max-height: 0;\\n  position: absolute;\\n  display: block;\\n  overflow: hidden;\\n  zoom: 1;\\n}\\n\\n.nav-collapse.opened {\\n  max-height: 9999px;\\n}\\n\\n.nav-toggle {\\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  -o-user-select: none;\\n  user-select: none;\\n}\\n\\n@media screen and (min-width: 40em) {\\n  .js .nav-collapse {\\n    position: relative;\\n  }\\n  .js .nav-collapse.closed {\\n    max-height: none;\\n  }\\n  .nav-toggle {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/js/responsive-nav-master.js/responsive-nav.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_home_image_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/home_image.jpeg */ \"./public/images/home_image.jpeg\");\n/* harmony import */ var _public_images_menu_image_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/menu_image.jpeg */ \"./public/images/menu_image.jpeg\");\n/* harmony import */ var _public_images_contact_image_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/contact_image.jpeg */ \"./public/images/contact_image.jpeg\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_home_image_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_menu_image_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_contact_image_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\n* {\\n  border: 0 none;\\n  list-style: none outside none;\\n  margin: 0;\\n  outline: 0 none;\\n  padding: 0;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0 auto;\\n  height: 100%;\\n  width: 100%;\\n  font-size: 16px;\\n  line-height: 20px;\\n  color: #333;\\n  overflow-x: hidden;\\n  font-family: Arial, Helvetica, sans-serif;\\n  position: relative;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\na:hover {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n.title {\\n  font-size: 2.2rem;\\n  font-weight: 500;\\n  font-style: italic;\\n  margin-top: 30px;\\n  text-align: center;\\n  line-height: 2rem;\\n}\\n\\n.home-background {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  height: 800px;\\n}\\n\\n.menu-background {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  height: 800px;\\n}\\n\\n.contact-background {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  height: 800px;\\n}\\n\\n.nav-item,\\n.current {\\n  cursor: pointer;\\n}\\n\\n.home-title,\\n.menu-title,\\n.contact-title {\\n  text-align: center;\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/images/contact_image.jpeg":
/*!******************************************!*\
  !*** ./public/images/contact_image.jpeg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d5177b1c1232d04bd4e0afa774bcab4f.jpeg\");\n\n//# sourceURL=webpack:///./public/images/contact_image.jpeg?");

/***/ }),

/***/ "./public/images/home_image.jpeg":
/*!***************************************!*\
  !*** ./public/images/home_image.jpeg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2058f0f111483987a3078741b184284c.jpeg\");\n\n//# sourceURL=webpack:///./public/images/home_image.jpeg?");

/***/ }),

/***/ "./public/images/menu_image.jpeg":
/*!***************************************!*\
  !*** ./public/images/menu_image.jpeg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4284190e8c666d95b63ec547ea1839b2.jpeg\");\n\n//# sourceURL=webpack:///./public/images/menu_image.jpeg?");

/***/ }),

/***/ "./public/js/responsive-nav-master.js/responsive-nav.css":
/*!***************************************************************!*\
  !*** ./public/js/responsive-nav-master.js/responsive-nav.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./responsive-nav.css */ \"./node_modules/css-loader/dist/cjs.js!./public/js/responsive-nav-master.js/responsive-nav.css\");\n\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {};\noptions.insert = \"head\";\noptions.singleton = false;\nvar update = api(content, options);\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/js/responsive-nav-master.js/responsive-nav.css?");

/***/ }),

/***/ "./public/js/responsive-nav-master.js/responsive-nav.js":
/*!**************************************************************!*\
  !*** ./public/js/responsive-nav-master.js/responsive-nav.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*! responsive-nav.js 1.0.39\n * https://github.com/viljamis/responsive-nav.js\n * http://responsive-nav.com\n *\n * Copyright (c) 2015 @viljamis\n * Available under the MIT license\n */\n\n/* global Event */\n(function (document, window, index) {\n  // Index is used to keep multiple navs on the same page namespaced\n  \"use strict\";\n\n  var responsiveNav = function (el, options) {\n    var computed = !!window.getComputedStyle;\n    /**\n     * getComputedStyle polyfill for old browsers\n     */\n\n    if (!computed) {\n      window.getComputedStyle = function (el) {\n        this.el = el;\n\n        this.getPropertyValue = function (prop) {\n          var re = /(\\-([a-z]){1})/g;\n\n          if (prop === \"float\") {\n            prop = \"styleFloat\";\n          }\n\n          if (re.test(prop)) {\n            prop = prop.replace(re, function () {\n              return arguments[2].toUpperCase();\n            });\n          }\n\n          return el.currentStyle[prop] ? el.currentStyle[prop] : null;\n        };\n\n        return this;\n      };\n    }\n    /* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */\n\n    /**\n     * Add Event\n     * fn arg can be an object or a function, thanks to handleEvent\n     * read more at: http://www.thecssninja.com/javascript/handleevent\n     *\n     * @param  {element}  element\n     * @param  {event}    event\n     * @param  {Function} fn\n     * @param  {boolean}  bubbling\n     */\n\n\n    var addEvent = function (el, evt, fn, bubble) {\n      if (\"addEventListener\" in el) {\n        // BBOS6 doesn't support handleEvent, catch and polyfill\n        try {\n          el.addEventListener(evt, fn, bubble);\n        } catch (e) {\n          if (typeof fn === \"object\" && fn.handleEvent) {\n            el.addEventListener(evt, function (e) {\n              // Bind fn as this and set first arg as event object\n              fn.handleEvent.call(fn, e);\n            }, bubble);\n          } else {\n            throw e;\n          }\n        }\n      } else if (\"attachEvent\" in el) {\n        // check if the callback is an object and contains handleEvent\n        if (typeof fn === \"object\" && fn.handleEvent) {\n          el.attachEvent(\"on\" + evt, function () {\n            // Bind fn as this\n            fn.handleEvent.call(fn);\n          });\n        } else {\n          el.attachEvent(\"on\" + evt, fn);\n        }\n      }\n    },\n\n    /**\n     * Remove Event\n     *\n     * @param  {element}  element\n     * @param  {event}    event\n     * @param  {Function} fn\n     * @param  {boolean}  bubbling\n     */\n    removeEvent = function (el, evt, fn, bubble) {\n      if (\"removeEventListener\" in el) {\n        try {\n          el.removeEventListener(evt, fn, bubble);\n        } catch (e) {\n          if (typeof fn === \"object\" && fn.handleEvent) {\n            el.removeEventListener(evt, function (e) {\n              fn.handleEvent.call(fn, e);\n            }, bubble);\n          } else {\n            throw e;\n          }\n        }\n      } else if (\"detachEvent\" in el) {\n        if (typeof fn === \"object\" && fn.handleEvent) {\n          el.detachEvent(\"on\" + evt, function () {\n            fn.handleEvent.call(fn);\n          });\n        } else {\n          el.detachEvent(\"on\" + evt, fn);\n        }\n      }\n    },\n\n    /**\n     * Get the children of any element\n     *\n     * @param  {element}\n     * @return {array} Returns matching elements in an array\n     */\n    getChildren = function (e) {\n      if (e.children.length < 1) {\n        throw new Error(\"The Nav container has no containing elements\");\n      } // Store all children in array\n\n\n      var children = []; // Loop through children and store in array if child != TextNode\n\n      for (var i = 0; i < e.children.length; i++) {\n        if (e.children[i].nodeType === 1) {\n          children.push(e.children[i]);\n        }\n      }\n\n      return children;\n    },\n\n    /**\n     * Sets multiple attributes at once\n     *\n     * @param {element} element\n     * @param {attrs}   attrs\n     */\n    setAttributes = function (el, attrs) {\n      for (var key in attrs) {\n        el.setAttribute(key, attrs[key]);\n      }\n    },\n\n    /**\n     * Adds a class to any element\n     *\n     * @param {element} element\n     * @param {string}  class\n     */\n    addClass = function (el, cls) {\n      if (el.className.indexOf(cls) !== 0) {\n        el.className += \" \" + cls;\n        el.className = el.className.replace(/(^\\s*)|(\\s*$)/g, \"\");\n      }\n    },\n\n    /**\n     * Remove a class from any element\n     *\n     * @param  {element} element\n     * @param  {string}  class\n     */\n    removeClass = function (el, cls) {\n      var reg = new RegExp(\"(\\\\s|^)\" + cls + \"(\\\\s|$)\");\n      el.className = el.className.replace(reg, \" \").replace(/(^\\s*)|(\\s*$)/g, \"\");\n    },\n\n    /**\n     * forEach method that passes back the stuff we need\n     *\n     * @param  {array}    array\n     * @param  {Function} callback\n     * @param  {scope}    scope\n     */\n    forEach = function (array, callback, scope) {\n      for (var i = 0; i < array.length; i++) {\n        callback.call(scope, i, array[i]);\n      }\n    };\n\n    var nav,\n        opts,\n        navToggle,\n        styleElement = document.createElement(\"style\"),\n        htmlEl = document.documentElement,\n        hasAnimFinished,\n        isMobile,\n        navOpen;\n\n    var ResponsiveNav = function (el, options) {\n      var i;\n      /**\n       * Default options\n       * @type {Object}\n       */\n\n      this.options = {\n        animate: true,\n        // Boolean: Use CSS3 transitions, true or false\n        transition: 284,\n        // Integer: Speed of the transition, in milliseconds\n        label: \"Menu\",\n        // String: Label for the navigation toggle\n        insert: \"before\",\n        // String: Insert the toggle before or after the navigation\n        customToggle: \"\",\n        // Selector: Specify the ID of a custom toggle\n        closeOnNavClick: false,\n        // Boolean: Close the navigation when one of the links are clicked\n        openPos: \"relative\",\n        // String: Position of the opened nav, relative or static\n        navClass: \"nav-collapse\",\n        // String: Default CSS class. If changed, you need to edit the CSS too!\n        navActiveClass: \"js-nav-active\",\n        // String: Class that is added to <html> element when nav is active\n        jsClass: \"js\",\n        // String: 'JS enabled' class which is added to <html> element\n        init: function () {},\n        // Function: Init callback\n        open: function () {},\n        // Function: Open callback\n        close: function () {} // Function: Close callback\n\n      }; // User defined options\n\n      for (i in options) {\n        this.options[i] = options[i];\n      } // Adds \"js\" class for <html>\n\n\n      addClass(htmlEl, this.options.jsClass); // Wrapper\n\n      this.wrapperEl = el.replace(\"#\", \"\"); // Try selecting ID first\n\n      if (document.getElementById(this.wrapperEl)) {\n        this.wrapper = document.getElementById(this.wrapperEl); // If element with an ID doesn't exist, use querySelector\n      } else if (document.querySelector(this.wrapperEl)) {\n        this.wrapper = document.querySelector(this.wrapperEl); // If element doesn't exists, stop here.\n      } else {\n        throw new Error(\"The nav element you are trying to select doesn't exist\");\n      } // Inner wrapper\n\n\n      this.wrapper.inner = getChildren(this.wrapper); // For minification\n\n      opts = this.options;\n      nav = this.wrapper; // Init\n\n      this._init(this);\n    };\n\n    ResponsiveNav.prototype = {\n      /**\n       * Unattaches events and removes any classes that were added\n       */\n      destroy: function () {\n        this._removeStyles();\n\n        removeClass(nav, \"closed\");\n        removeClass(nav, \"opened\");\n        removeClass(nav, opts.navClass);\n        removeClass(nav, opts.navClass + \"-\" + this.index);\n        removeClass(htmlEl, opts.navActiveClass);\n        nav.removeAttribute(\"style\");\n        nav.removeAttribute(\"aria-hidden\");\n        removeEvent(window, \"resize\", this, false);\n        removeEvent(window, \"focus\", this, false);\n        removeEvent(document.body, \"touchmove\", this, false);\n        removeEvent(navToggle, \"touchstart\", this, false);\n        removeEvent(navToggle, \"touchend\", this, false);\n        removeEvent(navToggle, \"mouseup\", this, false);\n        removeEvent(navToggle, \"keyup\", this, false);\n        removeEvent(navToggle, \"click\", this, false);\n\n        if (!opts.customToggle) {\n          navToggle.parentNode.removeChild(navToggle);\n        } else {\n          navToggle.removeAttribute(\"aria-hidden\");\n        }\n      },\n\n      /**\n       * Toggles the navigation open/close\n       */\n      toggle: function () {\n        if (hasAnimFinished === true) {\n          if (!navOpen) {\n            this.open();\n          } else {\n            this.close();\n          }\n        }\n      },\n\n      /**\n       * Opens the navigation\n       */\n      open: function () {\n        if (!navOpen) {\n          removeClass(nav, \"closed\");\n          addClass(nav, \"opened\");\n          addClass(htmlEl, opts.navActiveClass);\n          addClass(navToggle, \"active\");\n          nav.style.position = opts.openPos;\n          setAttributes(nav, {\n            \"aria-hidden\": \"false\"\n          });\n          navOpen = true;\n          opts.open();\n        }\n      },\n\n      /**\n       * Closes the navigation\n       */\n      close: function () {\n        if (navOpen) {\n          addClass(nav, \"closed\");\n          removeClass(nav, \"opened\");\n          removeClass(htmlEl, opts.navActiveClass);\n          removeClass(navToggle, \"active\");\n          setAttributes(nav, {\n            \"aria-hidden\": \"true\"\n          }); // If animations are enabled, wait until they finish\n\n          if (opts.animate) {\n            hasAnimFinished = false;\n            setTimeout(function () {\n              nav.style.position = \"absolute\";\n              hasAnimFinished = true;\n            }, opts.transition + 10); // Animations aren't enabled, we can do these immediately\n          } else {\n            nav.style.position = \"absolute\";\n          }\n\n          navOpen = false;\n          opts.close();\n        }\n      },\n\n      /**\n       * Resize is called on window resize and orientation change.\n       * It initializes the CSS styles and height calculations.\n       */\n      resize: function () {\n        // Resize watches navigation toggle's display state\n        if (window.getComputedStyle(navToggle, null).getPropertyValue(\"display\") !== \"none\") {\n          isMobile = true;\n          setAttributes(navToggle, {\n            \"aria-hidden\": \"false\"\n          }); // If the navigation is hidden\n\n          if (nav.className.match(/(^|\\s)closed(\\s|$)/)) {\n            setAttributes(nav, {\n              \"aria-hidden\": \"true\"\n            });\n            nav.style.position = \"absolute\";\n          }\n\n          this._createStyles();\n\n          this._calcHeight();\n        } else {\n          isMobile = false;\n          setAttributes(navToggle, {\n            \"aria-hidden\": \"true\"\n          });\n          setAttributes(nav, {\n            \"aria-hidden\": \"false\"\n          });\n          nav.style.position = opts.openPos;\n\n          this._removeStyles();\n        }\n      },\n\n      /**\n       * Takes care of all even handling\n       *\n       * @param  {event} event\n       * @return {type} returns the type of event that should be used\n       */\n      handleEvent: function (e) {\n        var evt = e || window.event;\n\n        switch (evt.type) {\n          case \"touchstart\":\n            this._onTouchStart(evt);\n\n            break;\n\n          case \"touchmove\":\n            this._onTouchMove(evt);\n\n            break;\n\n          case \"touchend\":\n          case \"mouseup\":\n            this._onTouchEnd(evt);\n\n            break;\n\n          case \"click\":\n            this._preventDefault(evt);\n\n            break;\n\n          case \"keyup\":\n            this._onKeyUp(evt);\n\n            break;\n\n          case \"focus\":\n          case \"resize\":\n            this.resize(evt);\n            break;\n        }\n      },\n\n      /**\n       * Initializes the widget\n       */\n      _init: function () {\n        this.index = index++;\n        addClass(nav, opts.navClass);\n        addClass(nav, opts.navClass + \"-\" + this.index);\n        addClass(nav, \"closed\");\n        hasAnimFinished = true;\n        navOpen = false;\n\n        this._closeOnNavClick();\n\n        this._createToggle();\n\n        this._transitions();\n\n        this.resize();\n        /**\n         * On IE8 the resize event triggers too early for some reason\n         * so it's called here again on init to make sure all the\n         * calculated styles are correct.\n         */\n\n        var self = this;\n        setTimeout(function () {\n          self.resize();\n        }, 20);\n        addEvent(window, \"resize\", this, false);\n        addEvent(window, \"focus\", this, false);\n        addEvent(document.body, \"touchmove\", this, false);\n        addEvent(navToggle, \"touchstart\", this, false);\n        addEvent(navToggle, \"touchend\", this, false);\n        addEvent(navToggle, \"mouseup\", this, false);\n        addEvent(navToggle, \"keyup\", this, false);\n        addEvent(navToggle, \"click\", this, false);\n        /**\n         * Init callback here\n         */\n\n        opts.init();\n      },\n\n      /**\n       * Creates Styles to the <head>\n       */\n      _createStyles: function () {\n        if (!styleElement.parentNode) {\n          styleElement.type = \"text/css\";\n          document.getElementsByTagName(\"head\")[0].appendChild(styleElement);\n        }\n      },\n\n      /**\n       * Removes styles from the <head>\n       */\n      _removeStyles: function () {\n        if (styleElement.parentNode) {\n          styleElement.parentNode.removeChild(styleElement);\n        }\n      },\n\n      /**\n       * Creates Navigation Toggle\n       */\n      _createToggle: function () {\n        // If there's no toggle, let's create one\n        if (!opts.customToggle) {\n          var toggle = document.createElement(\"a\");\n          toggle.innerHTML = opts.label;\n          setAttributes(toggle, {\n            \"href\": \"#\",\n            \"class\": \"nav-toggle\"\n          }); // Determine where to insert the toggle\n\n          if (opts.insert === \"after\") {\n            nav.parentNode.insertBefore(toggle, nav.nextSibling);\n          } else {\n            nav.parentNode.insertBefore(toggle, nav);\n          }\n\n          navToggle = toggle; // There is a toggle already, let's use that one\n        } else {\n          var toggleEl = opts.customToggle.replace(\"#\", \"\");\n\n          if (document.getElementById(toggleEl)) {\n            navToggle = document.getElementById(toggleEl);\n          } else if (document.querySelector(toggleEl)) {\n            navToggle = document.querySelector(toggleEl);\n          } else {\n            throw new Error(\"The custom nav toggle you are trying to select doesn't exist\");\n          }\n        }\n      },\n\n      /**\n       * Closes the navigation when a link inside is clicked.\n       */\n      _closeOnNavClick: function () {\n        if (opts.closeOnNavClick) {\n          var links = nav.getElementsByTagName(\"a\"),\n              self = this;\n          forEach(links, function (i, el) {\n            addEvent(links[i], \"click\", function () {\n              if (isMobile) {\n                self.toggle();\n              }\n            }, false);\n          });\n        }\n      },\n\n      /**\n       * Prevents the default functionality.\n       *\n       * @param  {event} event\n       */\n      _preventDefault: function (e) {\n        if (e.preventDefault) {\n          if (e.stopImmediatePropagation) {\n            e.stopImmediatePropagation();\n          } // e.preventDefault();\n\n\n          e.stopPropagation();\n          return false; // This is strictly for old IE\n        } else {\n          e.returnValue = false;\n        }\n      },\n\n      /**\n       * On touch start we get the location of the touch.\n       *\n       * @param  {event} event\n       */\n      _onTouchStart: function (e) {\n        if (!Event.prototype.stopImmediatePropagation) {\n          this._preventDefault(e);\n        }\n\n        this.startX = e.touches[0].clientX;\n        this.startY = e.touches[0].clientY;\n        this.touchHasMoved = false;\n        /**\n         * Remove mouseup event completely here to avoid\n         * double triggering the event.\n         */\n\n        removeEvent(navToggle, \"mouseup\", this, false);\n      },\n\n      /**\n       * Check if the user is scrolling instead of tapping.\n       *\n       * @param  {event} event\n       */\n      _onTouchMove: function (e) {\n        if (Math.abs(e.touches[0].clientX - this.startX) > 10 || Math.abs(e.touches[0].clientY - this.startY) > 10) {\n          this.touchHasMoved = true;\n        }\n      },\n\n      /**\n       * On touch end toggle the navigation.\n       *\n       * @param  {event} event\n       */\n      _onTouchEnd: function (e) {\n        this._preventDefault(e);\n\n        if (!isMobile) {\n          return;\n        } // If the user isn't scrolling\n\n\n        if (!this.touchHasMoved) {\n          // If the event type is touch\n          if (e.type === \"touchend\") {\n            this.toggle();\n            return; // Event type was click, not touch\n          } else {\n            var evt = e || window.event; // If it isn't a right click, do toggling\n\n            if (!(evt.which === 3 || evt.button === 2)) {\n              this.toggle();\n            }\n          }\n        }\n      },\n\n      /**\n       * For keyboard accessibility, toggle the navigation on Enter\n       * keypress too.\n       *\n       * @param  {event} event\n       */\n      _onKeyUp: function (e) {\n        var evt = e || window.event;\n\n        if (evt.keyCode === 13) {\n          this.toggle();\n        }\n      },\n\n      /**\n       * Adds the needed CSS transitions if animations are enabled\n       */\n      _transitions: function () {\n        if (opts.animate) {\n          var objStyle = nav.style,\n              transition = \"max-height \" + opts.transition + \"ms\";\n          objStyle.WebkitTransition = objStyle.MozTransition = objStyle.OTransition = objStyle.transition = transition;\n        }\n      },\n\n      /**\n       * Calculates the height of the navigation and then creates\n       * styles which are later added to the page <head>\n       */\n      _calcHeight: function () {\n        var savedHeight = 0;\n\n        for (var i = 0; i < nav.inner.length; i++) {\n          savedHeight += nav.inner[i].offsetHeight;\n        }\n\n        var innerStyles = \".\" + opts.jsClass + \" .\" + opts.navClass + \"-\" + this.index + \".opened{max-height:\" + savedHeight + \"px !important} .\" + opts.jsClass + \" .\" + opts.navClass + \"-\" + this.index + \".opened.dropdown-active {max-height:9999px !important}\";\n\n        if (styleElement.styleSheet) {\n          styleElement.styleSheet.cssText = innerStyles;\n        } else {\n          styleElement.innerHTML = innerStyles;\n        }\n\n        innerStyles = \"\";\n      }\n    };\n    /**\n     * Return new Responsive Nav\n     */\n\n    return new ResponsiveNav(el, options);\n  };\n\n  if ( true && module.exports) {\n    module.exports = responsiveNav;\n  } else {\n    window.responsiveNav = responsiveNav;\n  }\n})(document, window, 0);\n\n//# sourceURL=webpack:///./public/js/responsive-nav-master.js/responsive-nav.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactContent = content => {\n  const contactTitle = document.createElement('h4');\n  contactTitle.textContent = '+27 7875 090 123';\n  contactTitle.setAttribute('class', 'contact-title');\n  content.appendChild(contactTitle);\n  const divEl = document.createElement('div');\n  divEl.setAttribute('class', 'contact-background');\n  content.appendChild(divEl);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactContent);\n\n//# sourceURL=webpack:///./src/js/contact.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst homeContent = content => {\n  const divEl = document.createElement('div');\n  const homeTitle = document.createElement('h4');\n  homeTitle.textContent = 'A Home Away From Home';\n  homeTitle.setAttribute('class', 'home-title');\n  ;\n  homeTitle.setAttribute('id', 'title');\n  content.appendChild(homeTitle);\n  divEl.setAttribute('class', 'home-background');\n  divEl.setAttribute('id', 'background');\n  content.appendChild(divEl);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeContent);\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_responsive_nav_master_js_responsive_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/js/responsive-nav-master.js/responsive-nav */ \"./public/js/responsive-nav-master.js/responsive-nav.js\");\n/* harmony import */ var _public_js_responsive_nav_master_js_responsive_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_js_responsive_nav_master_js_responsive_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_responsive_nav_master_js_responsive_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/js/responsive-nav-master.js/responsive-nav.css */ \"./public/js/responsive-nav-master.js/responsive-nav.css\");\n/* harmony import */ var _public_js_responsive_nav_master_js_responsive_nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_responsive_nav_master_js_responsive_nav_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/js/contact.js\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst pageTitle = document.querySelector('#title');\nconst pageDiv = document.querySelector('#background');\nconst titleStr = document.createElement('h2');\nconst navItems = [{\n  content: _home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  text: 'Home'\n}, {\n  content: _menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  text: 'Menu List'\n}, {\n  content: _contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  text: 'Contact'\n}];\nconst navElem = document.createElement('nav');\nconst navList = document.createElement('ul');\nlet navItem;\nnavElem.appendChild(navList);\n\nfor (let i = 0; i < navItems.length; i += 1) {\n  navItem = document.createElement('li');\n  navItem.textContent = navItems[i].text;\n  const pageContent = navItems[i].content;\n  navItem.setAttribute('class', 'nav-item');\n\n  navItem.onclick = () => {\n    clear();\n    pageContent(content);\n  };\n\n  navList.appendChild(navItem);\n}\n\nnavList.children[0].className = 'current';\nnavElem.setAttribute('class', 'nav-collapse nav-element');\ndocument.body.insertBefore(titleStr, content);\ntitleStr.textContent = 'Eat Well Shade';\ntitleStr.setAttribute('class', 'title');\ntitleStr.after(navElem);\nObject(_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n_public_js_responsive_nav_master_js_responsive_nav__WEBPACK_IMPORTED_MODULE_1___default()('.nav-collapse');\n\nconst clear = () => {\n  content.textContent = '';\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuContent = content => {\n  const divEl = document.createElement('div');\n  const menuTitle = document.createElement('h4');\n  menuTitle.textContent = 'Browse through our delicious meals';\n  menuTitle.setAttribute('class', 'menu-title');\n  content.appendChild(menuTitle);\n  divEl.setAttribute('class', 'menu-background');\n  content.appendChild(divEl);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuContent);\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ })

/******/ });