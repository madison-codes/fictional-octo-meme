webpackJsonp([27],{

/***/ "./.cache/api-runner-browser.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var plugins = [{
	  plugin: __webpack_require__("./node_modules/gatsby-remark-autolink-headers/gatsby-browser.js"),
	  options: { "plugins": [] }
	}];
	"use strict";
	
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-browser.js'),
	//   require('/path/to/plugin2/gatsby-browser.js'),
	// ]
	
	module.exports = function (api, args, defaultReturn) {
	  // Run each plugin in series.
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  }
	
	  // Filter out undefined results.
	  );results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	};
	//# sourceMappingURL=api-runner-browser.js.map

/***/ }),

/***/ "./.cache/async-requires.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "page-component---node-modules-gatsby-plugin-offline-app-shell-js": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),
	  "page-component---src-templates-blog-post-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-post-tsx!./src/templates/blog-post.tsx"),
	  "page-component---src-templates-tags-page-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tags-page-tsx!./src/templates/tags-page.tsx"),
	  "page-component---src-templates-blog-page-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-page-tsx!./src/templates/blog-page.tsx"),
	  "page-component---src-pages-404-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-tsx!./src/pages/404.tsx"),
	  "page-component---src-pages-blog-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-blog-tsx!./src/pages/blog.tsx"),
	  "page-component---src-pages-about-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-about-tsx!./src/pages/about.tsx"),
	  "page-component---src-pages-docs-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-docs-tsx!./src/pages/docs.tsx"),
	  "page-component---src-pages-index-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-tsx!./src/pages/index.tsx"),
	  "page-component---src-pages-support-tsx": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-support-tsx!./src/pages/support.tsx")
	};
	
	exports.json = {
	  "offline-plugin-app-shell-fallback.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json"),
	  "blog-2017-05-02-article-2.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-05-02-article-2!./.cache/json/blog-2017-05-02-article-2.json"),
	  "blog-2017-05-02-article-1.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-05-02-article-1!./.cache/json/blog-2017-05-02-article-1.json"),
	  "blog-2017-04-18-welcoming.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-04-18-welcoming!./.cache/json/blog-2017-04-18-welcoming.json"),
	  "blog-tags-test.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-test!./.cache/json/blog-tags-test.json"),
	  "blog-tags-starter.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-starter!./.cache/json/blog-tags-starter.json"),
	  "blog-tags-gatsby.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-gatsby!./.cache/json/blog-tags-gatsby.json"),
	  "blog-page-1.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-page-1!./.cache/json/blog-page-1.json"),
	  "404.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),
	  "blog.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog!./.cache/json/blog.json"),
	  "about.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),
	  "docs.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs!./.cache/json/docs.json"),
	  "index.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),
	  "support.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---support!./.cache/json/support.json"),
	  "404-html.json": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")
	};
	
	exports.layouts = {
	  "index": __webpack_require__("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.tsx")
	};

/***/ }),

/***/ "./.cache/component-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loader = __webpack_require__("./.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	var ComponentRenderer = function (_React$Component) {
	  (0, _inherits3.default)(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    (0, _classCallCheck3.default)(this, ComponentRenderer);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (ComponentRenderer.__proto__ || (0, _getPrototypeOf2.default)(ComponentRenderer)).call(this));
	
	    _this.state = {
	      location: props.location,
	      pageResources: _loader2.default.getResourcesForPathname(props.location.pathname)
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(ComponentRenderer, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (this.state.location.pathname !== nextProps.location.pathname) {
	        var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	        if (!pageResources) {
	          // Page resources won't be set in cases where the browser back button
	          // or forward button is pushed as we can't wait as normal for resources
	          // to load before changing the page.
	          _loader2.default.getResourcesForPathname(nextProps.location.pathname, function (pageResources) {
	            _this2.setState({
	              location: nextProps.location,
	              pageResources: pageResources
	            });
	          });
	        } else {
	          this.setState({
	            location: nextProps.location,
	            pageResources: pageResources
	          });
	        }
	      }
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      // Listen to events so when our page gets updated, we can transition.
	      // This is only useful on delayed transitions as the page will get rendered
	      // without the necessary page resources and then re-render once those come in.
	      _emitter2.default.on("onPostLoadPageResources", function (e) {
	        if (e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	          _this3.setState({ pageResources: e.pageResources });
	        }
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (this.state.pageResources) {
	        return (0, _react.createElement)(this.state.pageResources.component, (0, _extends3.default)({}, this.props, this.state.pageResources.json));
	      } else {
	        return null;
	      }
	    }
	  }]);
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	exports.default = ComponentRenderer;
	//# sourceMappingURL=component-renderer.js.map

/***/ }),

/***/ "./.cache/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__("./node_modules/mitt/dist/mitt.js");
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;
	//# sourceMappingURL=emitter.js.map

/***/ }),

/***/ "./.cache/find-page.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var pageCache = {}; // TODO add tests especially for handling prefixed links.
	
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (pathname) {
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = pathname.slice(pathPrefix.length
	
	    // Remove any hashfragment
	    );if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};
	//# sourceMappingURL=find-page.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(21, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/404-html.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(20, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/404.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(19, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/about.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-04-18-welcoming!./.cache/json/blog-2017-04-18-welcoming.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(18, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-2017-04-18-welcoming.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-05-02-article-1!./.cache/json/blog-2017-05-02-article-1.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(17, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-2017-05-02-article-1.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-2017-05-02-article-2!./.cache/json/blog-2017-05-02-article-2.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(16, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-2017-05-02-article-2.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-page-1!./.cache/json/blog-page-1.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(15, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-page-1.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-gatsby!./.cache/json/blog-tags-gatsby.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(14, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-tags-gatsby.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-starter!./.cache/json/blog-tags-starter.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(13, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-tags-starter.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog-tags-test!./.cache/json/blog-tags-test.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(12, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog-tags-test.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---blog!./.cache/json/blog.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(11, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/blog.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---docs!./.cache/json/docs.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(10, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/docs.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(9, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/index.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(8, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---support!./.cache/json/support.json":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(7, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/support.json") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./.cache/loader.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	var _findPage = __webpack_require__("./.cache/find-page.js");
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	
	// Prefetcher logic
	if (true) {
	  prefetcher = __webpack_require__("./.cache/prefetcher.js")({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = resourceName.slice(0, 6) === "page-c" ? asyncRequires.components[resourceName] : asyncRequires.json[resourceName];
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var _module = preferDefault(executeChunk());
	        resourceCache[resourceName] = _module;
	        cb(err, _module);
	      }
	    });
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    var pathPrefix = "";
	    if (false) {
	      pathPrefix = __PATH_PREFIX__;
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue(path) {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(path) {
	    // Check page exists.
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount
	
	    // Add resources to queue.
	    );var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (true) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (false) {
	      var page = findPage(path);
	      if (!page) return;
	
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName]
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      var _page = findPage(path);
	
	      if (!_page) {
	        console.log("A page wasn't found for \"" + path + "\"");
	        return;
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path
	        // Nope, we need to load resource(s)
	      });var component = void 0;
	      var json = void 0;
	      // Load the component/json and parallal and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json) {
	          pathScriptsCache[path] = { component: component, json: json };
	          var _pageResources = { component: component, json: json };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          console.log("Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          console.log("Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	module.exports = queue;
	//# sourceMappingURL=loader.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./.cache/pages.json":
/***/ (function(module, exports) {

	module.exports = [
		{
			"componentChunkName": "page-component---node-modules-gatsby-plugin-offline-app-shell-js",
			"jsonName": "offline-plugin-app-shell-fallback.json",
			"path": "/offline-plugin-app-shell-fallback/"
		},
		{
			"componentChunkName": "page-component---src-templates-blog-post-tsx",
			"jsonName": "blog-2017-05-02-article-2.json",
			"path": "/blog/2017-05-02--article-2/"
		},
		{
			"componentChunkName": "page-component---src-templates-blog-post-tsx",
			"jsonName": "blog-2017-05-02-article-1.json",
			"path": "/blog/2017-05-02--article-1/"
		},
		{
			"componentChunkName": "page-component---src-templates-blog-post-tsx",
			"jsonName": "blog-2017-04-18-welcoming.json",
			"path": "/blog/2017-04-18--welcoming/"
		},
		{
			"componentChunkName": "page-component---src-templates-tags-page-tsx",
			"jsonName": "blog-tags-test.json",
			"path": "/blog/tags/test/"
		},
		{
			"componentChunkName": "page-component---src-templates-tags-page-tsx",
			"jsonName": "blog-tags-starter.json",
			"path": "/blog/tags/starter/"
		},
		{
			"componentChunkName": "page-component---src-templates-tags-page-tsx",
			"jsonName": "blog-tags-gatsby.json",
			"path": "/blog/tags/gatsby/"
		},
		{
			"componentChunkName": "page-component---src-templates-blog-page-tsx",
			"jsonName": "blog-page-1.json",
			"path": "/blog/page/1/"
		},
		{
			"componentChunkName": "page-component---src-pages-404-tsx",
			"jsonName": "404.json",
			"path": "/404/"
		},
		{
			"componentChunkName": "page-component---src-pages-blog-tsx",
			"jsonName": "blog.json",
			"path": "/blog/"
		},
		{
			"componentChunkName": "page-component---src-pages-about-tsx",
			"jsonName": "about.json",
			"path": "/about/"
		},
		{
			"componentChunkName": "page-component---src-pages-docs-tsx",
			"jsonName": "docs.json",
			"path": "/docs/"
		},
		{
			"componentChunkName": "page-component---src-pages-index-tsx",
			"jsonName": "index.json",
			"path": "/"
		},
		{
			"componentChunkName": "page-component---src-pages-support-tsx",
			"jsonName": "support.json",
			"path": "/support/"
		},
		{
			"componentChunkName": "page-component---src-pages-404-tsx",
			"jsonName": "404-html.json",
			"path": "/404.html"
		}
	];

/***/ }),

/***/ "./.cache/prefetcher.js":
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (_ref) {
	  var getNextQueuedResources = _ref.getNextQueuedResources,
	      createResourceDownload = _ref.createResourceDownload;
	
	  var pagesLoading = [];
	  var resourcesDownloading = [];
	
	  // Do things
	  var startResourceDownloading = function startResourceDownloading() {
	    var nextResource = getNextQueuedResources();
	    if (nextResource) {
	      resourcesDownloading.push(nextResource);
	      createResourceDownload(nextResource);
	    }
	  };
	
	  var reducer = function reducer(action) {
	    switch (action.type) {
	      case "RESOURCE_FINISHED":
	        resourcesDownloading = resourcesDownloading.filter(function (r) {
	          return r !== action.payload;
	        });
	        break;
	      case "ON_PRE_LOAD_PAGE_RESOURCES":
	        pagesLoading.push(action.payload.path);
	        break;
	      case "ON_POST_LOAD_PAGE_RESOURCES":
	        pagesLoading = pagesLoading.filter(function (p) {
	          return p !== action.payload.page.path;
	        });
	        break;
	      case "ON_NEW_RESOURCES_ADDED":
	        break;
	    }
	
	    // Take actions.
	    // Wait for event loop queue to finish.
	    setTimeout(function () {
	      if (resourcesDownloading.length === 0 && pagesLoading.length === 0) {
	        // Start another resource downloading.
	        startResourceDownloading();
	      }
	    }, 0);
	  };
	
	  return {
	    onResourcedFinished: function onResourcedFinished(event) {
	      // Tell prefetcher that the resource finished downloading
	      // so it can grab the next one.
	      reducer({ type: "RESOURCE_FINISHED", payload: event });
	    },
	    onPreLoadPageResources: function onPreLoadPageResources(event) {
	      // Tell prefetcher a page load has started so it should stop
	      // loading anything new
	      reducer({ type: "ON_PRE_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onPostLoadPageResources: function onPostLoadPageResources(event) {
	      // Tell prefetcher a page load has finished so it should start
	      // loading resources again.
	      reducer({ type: "ON_POST_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onNewResourcesAdded: function onNewResourcesAdded() {
	      // Tell prefetcher that more resources to be downloaded have
	      // been added.
	      reducer({ type: "ON_NEW_RESOURCES_ADDED" });
	    },
	    getState: function getState() {
	      return { pagesLoading: pagesLoading, resourcesDownloading: resourcesDownloading };
	    },
	    empty: function empty() {
	      pagesLoading = [];
	      resourcesDownloading = [];
	    }
	  };
	};
	//# sourceMappingURL=prefetcher.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _apiRunnerBrowser = __webpack_require__("./.cache/api-runner-browser.js");
	
	var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var _reactRouterScroll = __webpack_require__("./node_modules/react-router-scroll/lib/index.js");
	
	var _createBrowserHistory = __webpack_require__("./node_modules/history/createBrowserHistory.js");
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _emitter = __webpack_require__("./.cache/emitter.js");
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__("./.cache/pages.json");
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _componentRenderer = __webpack_require__("./.cache/component-renderer.js");
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__("./.cache/async-requires.js");
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__("./.cache/loader.js");
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	window.___emitter = _emitter2.default;
	// emitter.on(`*`, (type, e) => console.log(`emitter`, type, e))
	
	// import invariant from "invariant"
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	
	window.___loader = _loader2.default;
	
	window.matchPath = _reactRouterDom.matchPath;
	
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser2.default)("onClientEntry");
	
	var navigateTo = function navigateTo(pathname) {
	  // If we're already at this path, do nothing.
	  if (window.location.pathname === pathname) {
	    return;
	  }
	
	  // Listen to loading events. If page resources load before
	  // a second, navigate immediately.
	  function eventHandler(e) {
	    if (e.page.path === _loader2.default.getPage(pathname).path) {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      clearTimeout(timeoutId);
	      window.___history.push(pathname);
	    }
	  }
	
	  // Start a timer to wait for a second before transitioning and showing a
	  // loader in case resources aren't around yet.
	  var timeoutId = setTimeout(function () {
	    _emitter2.default.off("onPostLoadPageResources", eventHandler);
	    _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	    window.___history.push(pathname);
	  }, 1000);
	
	  if (_loader2.default.getResourcesForPathname(pathname)) {
	    // The resources are already loaded so off we go.
	    clearTimeout(timeoutId);
	    window.___history.push(pathname);
	  } else {
	    // They're not loaded yet so let's add a listener for when
	    // they finish loading.
	    _emitter2.default.on("onPostLoadPageResources", eventHandler);
	  }
	};
	
	// window.___loadScriptsForPath = loadScriptsForPath
	window.___navigateTo = navigateTo;
	
	var history = (0, _createBrowserHistory2.default)();
	
	function attachToHistory(history) {
	  window.___history = history;
	
	  history.listen(function (location, action) {
	    (0, _apiRunnerBrowser2.default)("onRouteUpdate", { location: location, action: action });
	  });
	}
	
	function shouldUpdateScroll(prevRouterProps, _ref) {
	  var pathname = _ref.location.pathname;
	
	  var results = (0, _apiRunnerBrowser2.default)("shouldUpdateScroll", {
	    prevRouterProps: prevRouterProps,
	    pathname: pathname
	  });
	  if (results.length > 0) {
	    return results[0];
	  }
	
	  if (prevRouterProps) {
	    var oldPathname = prevRouterProps.location.pathname;
	
	    if (oldPathname === pathname) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var AltRouter = (0, _apiRunnerBrowser2.default)("replaceRouterComponent", { history: history })[0];
	var DefaultRouter = function DefaultRouter(_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(_reactRouterDom.BrowserRouter, { history: history }, children);
	};
	
	var loadLayout = function loadLayout(cb) {
	  if (_asyncRequires2.default.layouts["index"]) {
	    _asyncRequires2.default.layouts["index"](function (err, executeChunk) {
	      var module = executeChunk();
	      cb(module);
	    });
	  } else {
	    cb(function (props) {
	      return _react2.default.createElement("div", null, props.children());
	    });
	  }
	};
	
	loadLayout(function (layout) {
	  var Root = function Root() {
	    return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_reactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)((0, _reactRouterDom.withRouter)(layout), {
	      children: function children(layoutProps) {
	        return (0, _react.createElement)(_reactRouterDom.Route, {
	          render: function render(routeProps) {
	            attachToHistory(routeProps.history);
	            var props = layoutProps ? layoutProps : routeProps;
	            if (_loader2.default.getPage(props.location.pathname)) {
	              return (0, _react.createElement)(_componentRenderer2.default, (0, _extends3.default)({}, props));
	            } else {
	              // TODO check (somehow) if we loaded the page
	              // from a service worker (app shell) as if this
	              // is the case and we get a 404 we want to kill
	              // the sw and reload as probably the user is
	              // trying to visit a page that was created after
	              // the first time they visited.
	              return (0, _react.createElement)(_componentRenderer2.default, {
	                location: { pathname: "/404.html" }
	              });
	            }
	          }
	        });
	      }
	    })));
	  };
	
	  var NewRoot = (0, _apiRunnerBrowser2.default)("wrapRootComponent", { Root: Root }, Root)[0];
	  _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0);
	});
	//# sourceMappingURL=production-app.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(22, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/gatsby-plugin-offline/app-shell.js") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby-remark-autolink-headers/gatsby-browser.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var scrollToHash = function scrollToHash(offsetY) {
	  // Make sure React has had a change to flush to DOM first.
	  setTimeout(function () {
	    var hash = window.location.hash.replace(`#`, ``);
	    if (hash !== ``) {
	      var element = document.getElementById(hash);
	      if (element) {
	        var offset = element.offsetTop;
	        window.scrollTo(0, offset - offsetY);
	      }
	    }
	  }, 10);
	};
	
	exports.onClientEntry = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	  // This code is only so scrolling to header hashes works in development.
	  // For production, the equivalent code is in gatsby-ssr.js.
	  if (("production") !== `production`) {
	    scrollToHash(offsetY);
	  }
	};
	
	exports.onRouteUpdate = function (args, pluginOptions) {
	  var offsetY = 0;
	  if (pluginOptions.offsetY) {
	    offsetY = pluginOptions.offsetY;
	  }
	
	  scrollToHash(offsetY);
	};

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	patch();
	
	function patch() {
	  var head = document.querySelector(`head`);
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    }
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    );if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== `SCRIPT`) {
	      if (typeof console !== `undefined` && console.warn) {
	        console.warn(`Script is not a script`, script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}
	//# sourceMappingURL=patch.js.map

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(t,o){(n[t]||(n[t]=[])).push(o)},off:function(t,o){n[t]&&n[t].splice(n[t].indexOf(o)>>>0,1)},emit:function(t,o){(n[t]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(t,o)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(2, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/layouts/index.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-tsx!./src/pages/404.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(26, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/404.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-about-tsx!./src/pages/about.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(25, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/about.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-blog-tsx!./src/pages/blog.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(6, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/blog.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-docs-tsx!./src/pages/docs.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(3, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/docs.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-tsx!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(1, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-support-tsx!./src/pages/support.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(24, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/support.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-page-tsx!./src/templates/blog-page.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(5, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/templates/blog-page.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-post-tsx!./src/templates/blog-post.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(23, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/templates/blog-post.tsx") })
	        }
	      });
	     }
	    

/***/ }),

/***/ "./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-tags-page-tsx!./src/templates/tags-page.tsx":
/***/ (function(module, exports, __webpack_require__) {

	
	    __webpack_require__(
	      "./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"
	    );
	    module.exports = function(cb) { 
	     return __webpack_require__.e/* nsure */(4, function(_, error) {
	        if (error) {
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/templates/tags-page.tsx") })
	        }
	      });
	     }
	    

/***/ })

});
//# sourceMappingURL=app-ca1f21f01432208f86c7.js.map