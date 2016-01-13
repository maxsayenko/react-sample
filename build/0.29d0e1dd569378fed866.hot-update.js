webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// main.js
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(167);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _primaryNav = __webpack_require__(168);
	
	var _primaryNav2 = _interopRequireDefault(_primaryNav);
	
	var _content = __webpack_require__(169);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_primaryNav2.default, null), _react2.default.createElement(_content2.default, null), document.getElementById('app'));

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sidebar = __webpack_require__(170);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _contentBody = __webpack_require__(171);
	
	var _contentBody2 = _interopRequireDefault(_contentBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Content = function (_React$Component) {
	    _inherits(Content, _React$Component);
	
	    function Content() {
	        _classCallCheck(this, Content);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	    }
	
	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { 'class': 'container-fluid' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'row' },
	                    _react2.default.createElement(_sidebar2.default, null),
	                    _react2.default.createElement(_contentBody2.default, null)
	                )
	            );
	        }
	    }]);
	
	    return Content;
	}(_react2.default.Component);
	
	exports.default = Content;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sidebar = function (_React$Component) {
	    _inherits(Sidebar, _React$Component);
	
	    function Sidebar() {
	        _classCallCheck(this, Sidebar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).apply(this, arguments));
	    }
	
	    _createClass(Sidebar, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { "class": "col-sm-3 col-md-2 sidebar" },
	                React.createElement(
	                    "ul",
	                    { "class": "nav nav-sidebar" },
	                    React.createElement(
	                        "li",
	                        { "class": "active" },
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Overview ",
	                            React.createElement(
	                                "span",
	                                { "class": "sr-only" },
	                                "(current)"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Reports"
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Analytics"
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            "Export"
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Sidebar;
	}(React.Component);
	
	exports.default = Sidebar;

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContentBody = function (_React$Component) {
	    _inherits(ContentBody, _React$Component);
	
	    function ContentBody() {
	        _classCallCheck(this, ContentBody);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentBody).apply(this, arguments));
	    }
	
	    _createClass(ContentBody, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { "class": "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" },
	                React.createElement(
	                    "h1",
	                    { "class": "page-header" },
	                    "Dashboard"
	                ),
	                React.createElement(
	                    "h2",
	                    { "class": "sub-header" },
	                    "Section title"
	                ),
	                React.createElement(
	                    "div",
	                    { "class": "table-responsive" },
	                    React.createElement(
	                        "table",
	                        { "class": "table table-striped" },
	                        React.createElement(
	                            "thead",
	                            null,
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "th",
	                                    null,
	                                    "#"
	                                ),
	                                React.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                React.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                React.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                React.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "tbody",
	                            null,
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,001"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Lorem"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "ipsum"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "dolor"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sit"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,002"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "amet"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "consectetur"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "adipiscing"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "elit"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,003"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Integer"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nec"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "odio"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Praesent"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,003"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "libero"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Sed"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "cursus"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "ante"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,004"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "dapibus"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "diam"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Sed"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nisi"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,005"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Nulla"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "quis"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sem"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "at"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,006"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nibh"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "elementum"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "imperdiet"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Duis"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,007"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sagittis"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "ipsum"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Praesent"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "mauris"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,008"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Fusce"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nec"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "tellus"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sed"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,009"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "augue"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "semper"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "porta"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Mauris"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,010"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "massa"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Vestibulum"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "lacinia"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "arcu"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,011"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "eget"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nulla"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Class"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "aptent"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,012"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "taciti"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sociosqu"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "ad"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "litora"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,013"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "torquent"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "per"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "conubia"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "nostra"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,014"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "per"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "inceptos"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "himenaeos"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "Curabitur"
	                                )
	                            ),
	                            React.createElement(
	                                "tr",
	                                null,
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "1,015"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "sodales"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "ligula"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "in"
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    "libero"
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ContentBody;
	}(React.Component);
	
	exports.default = ContentBody;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZWJhci9pbmRleC5qc3g/ZGU2MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC1ib2R5L2luZGV4LmpzeD83ZmE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsYUFBWTs7O0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNiLG9CQUFTLE1BQU0sQ0FDWCx5REFBYyxFQUNkLHNEQUFXLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NUb0IsT0FBTztlQUFQLE9BQU87O2NBQVAsT0FBTzsrQkFBUCxPQUFPOzt1RUFBUCxPQUFPOzs7a0JBQVAsT0FBTzs7a0NBQ2Y7QUFDTCxvQkFDSTs7bUJBQUssU0FBTSxpQkFBaUI7aUJBQ3hCOzt1QkFBSyxTQUFNLEtBQUs7cUJBQ1osc0RBQVc7cUJBQ1gsMERBQWU7a0JBQ2I7Y0FDSixDQUNUO1VBQ0o7OztZQVZnQixPQUFPO0dBQVMsZ0JBQU0sU0FBUzs7bUJBQS9CLE9BQU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDRlAsT0FBTztlQUFQLE9BQU87O2NBQVAsT0FBTzsrQkFBUCxPQUFPOzt1RUFBUCxPQUFPOzs7a0JBQVAsT0FBTzs7a0NBQ2Y7QUFDTCxvQkFDSTs7bUJBQUssU0FBTSwyQkFBMkI7aUJBQ2xDOzt1QkFBSSxTQUFNLGlCQUFpQjtxQkFDdkI7OzJCQUFJLFNBQU0sUUFBUTt5QkFBQzs7K0JBQUcsSUFBSSxFQUFDLEdBQUc7OzZCQUFVOzttQ0FBTSxTQUFNLFNBQVM7OzhCQUFpQjswQkFBSTtzQkFBSztxQkFDdkY7Ozt5QkFBSTs7K0JBQUcsSUFBSSxFQUFDLEdBQUc7OzBCQUFZO3NCQUFLO3FCQUNoQzs7O3lC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Q0FDSTs7OztrQ0FBYztpQ0FDZDs7OztrQ0FBWTtpQ0FDWjs7OztrQ0FBaUI7aUNBQ2pCOzs7O2tDQUFrQjtpQ0FDbEI7Ozs7a0NBQWtCOzhCQUNqQjs2QkFDTDs7O2lDQUNJOzs7O2tDQUFjO2lDQUNkOzs7O2tDQUFnQjtpQ0FDaEI7Ozs7a0NBQWU7aUNBQ2Y7Ozs7a0NBQVc7aUNBQ1g7Ozs7a0NBQWU7OEJBQ2Q7MEJBQ0Q7c0JBQ0o7a0JBQ047Y0FDSixDQUNSO1VBQ0w7OztZQXZJZ0IsV0FBVztHQUFTLEtBQUssQ0FBQyxTQUFTOzttQkFBbkMsV0FBVyxDIiwiZmlsZSI6IjAuMjlkMGUxZGQ1NjkzNzhmZWQ4NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gbWFpbi5qc1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByaW1hcnlOYXYgZnJvbSAnLi9wcmltYXJ5LW5hdic7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFByaW1hcnlOYXYgLz4sXG4gICAgPENvbnRlbnQgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc2lkZWJhcic7XG5pbXBvcnQgQ29udGVudEJvZHkgZnJvbSAnLi4vY29udGVudC1ib2R5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRCb2R5IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRlbnQvaW5kZXguanN4XG4gKiovIiwiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIGNvbC1tZC0yIHNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj5PdmVydmlldyA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlJlcG9ydHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QW5hbHl0aWNzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkV4cG9ydDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NpZGViYXIvaW5kZXguanN4XG4gKiovIiwiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOSBjb2wtc20tb2Zmc2V0LTMgY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMiBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInN1Yi1oZWFkZXJcIj5TZWN0aW9uIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IZWFkZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SGVhZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkhlYWRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IZWFkZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TG9yZW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aXBzdW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZG9sb3I8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+c2l0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEsMDAyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmFtZXQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Y29uc2VjdGV0dXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+YWRpcGlzY2luZzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5lbGl0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEsMDAzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkludGVnZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bmVjPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPm9kaW88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJhZXNlbnQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bGliZXJvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNlZDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5jdXJzdXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+YW50ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xLDAwNDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5kYXBpYnVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmRpYW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2VkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPm5pc2k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVsbGE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+cXVpczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5zZW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+YXQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDY8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bmliaDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5lbGVtZW50dW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aW1wZXJkaWV0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkR1aXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDc8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+c2FnaXR0aXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aXBzdW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJhZXNlbnQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bWF1cmlzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEsMDA4PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZ1c2NlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPm5lYzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50ZWxsdXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+c2VkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEsMDA5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmF1Z3VlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnNlbXBlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5wb3J0YTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXVyaXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMTA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bWFzc2E8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmVzdGlidWx1bTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5sYWNpbmlhPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmFyY3U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMTE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZWdldDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5udWxsYTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DbGFzczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5hcHRlbnQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMTI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+dGFjaXRpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnNvY2lvc3F1PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmFkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmxpdG9yYTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xLDAxMzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50b3JxdWVudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5wZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Y29udWJpYTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5ub3N0cmE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMTQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+cGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmluY2VwdG9zPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmhpbWVuYWVvczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DdXJhYml0dXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMTU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+c29kYWxlczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5saWd1bGE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+bGliZXJvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRlbnQtYm9keS9pbmRleC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9