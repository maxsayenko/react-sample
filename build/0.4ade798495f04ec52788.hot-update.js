webpackHotUpdate(0,{

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(169);
	
	var _sidebar = __webpack_require__(171);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _inventoryList = __webpack_require__(172);
	
	var _inventoryList2 = _interopRequireDefault(_inventoryList);
	
	var _primaryNav = __webpack_require__(174);
	
	var _primaryNav2 = _interopRequireDefault(_primaryNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//const data = localStorage.getItem('appData').inventory;
	
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
	                null,
	                _react2.default.createElement(_primaryNav2.default, null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(_sidebar2.default, null),
	                        _react2.default.createElement(_inventoryList2.default, { data: data })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Content;
	}(_react2.default.Component);
	
	exports.default = Content;

/***/ },

/***/ 174:
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
	
	var PrimaryNav = function (_React$Component) {
	    _inherits(PrimaryNav, _React$Component);
	
	    function PrimaryNav() {
	        _classCallCheck(this, PrimaryNav);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PrimaryNav).apply(this, arguments));
	    }
	
	    _createClass(PrimaryNav, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "nav",
	                { className: "navbar navbar-inverse navbar-fixed-top" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container-fluid" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "navbar-header" },
	                        _react2.default.createElement(
	                            "button",
	                            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
	                            _react2.default.createElement(
	                                "span",
	                                { className: "sr-only" },
	                                "Toggle navigation"
	                            ),
	                            _react2.default.createElement("span", { className: "icon-bar" }),
	                            _react2.default.createElement("span", { className: "icon-bar" }),
	                            _react2.default.createElement("span", { className: "icon-bar" })
	                        ),
	                        _react2.default.createElement(
	                            "a",
	                            { className: "navbar-brand", href: "#" },
	                            "3/4 Fart"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { id: "navbar", className: "navbar-collapse collapse" },
	                        _react2.default.createElement(
	                            "ul",
	                            { className: "nav navbar-nav navbar-right" },
	                            "// Some links might go here."
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PrimaryNav;
	}(_react2.default.Component);
	
	exports.default = PrimaryNav;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbWFyeS1uYXYvaW5kZXguanN4P2M4MzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FTcUIsT0FBTztlQUFQLE9BQU87O2NBQVAsT0FBTzsrQkFBUCxPQUFPOzt1RUFBUCxPQUFPOzs7a0JBQVAsT0FBTzs7a0NBQ2Y7QUFDTCxvQkFDSTs7O2lCQUNJLHlEQUFjO2lCQUNkOzt1QkFBSyxTQUFTLEVBQUMsaUJBQWlCO3FCQUM1Qjs7MkJBQUssU0FBUyxFQUFDLEtBQUs7eUJBQ2hCLHNEQUFXO3lCQUNYLHlEQUFlLElBQUksRUFBRSxJQUFLLEdBQUc7c0JBQzNCO2tCQUNKO2NBQ0osQ0FDVDtVQUNKOzs7WUFiZ0IsT0FBTztHQUFTLGdCQUFNLFNBQVM7O21CQUEvQixPQUFPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1BQLFVBQVU7ZUFBVixVQUFVOztjQUFWLFVBQVU7K0JBQVYsVUFBVTs7dUVBQVYsVUFBVTs7O2tCQUFWLFVBQVU7O2tDQUNsQjtBQUNMLG9CQUNJOzttQkFBSyxTQUFTLEVBQUMsd0NBQXdDO2lCQUNuRDs7dUJBQUssU0FBUyxFQUFDLGlCQUFpQjtxQkFDNUI7OzJCQUFLLFNBQVMsRUFBQyxlQUFlO3lCQUMxQjs7K0JBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsZUFBWSxVQUFVLEVBQUMsZUFBWSxTQUFTLEVBQUMsaUJBQWMsT0FBTyxFQUFDLGlCQUFjLFFBQVE7NkJBQy9JOzttQ0FBTSxTQUFTLEVBQUMsU0FBUzs7OEJBQXlCOzZCQUNsRCx3Q0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFROzZCQUNsQyx3Q0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFROzZCQUNsQyx3Q0FBTSxTQUFTLEVBQUMsVUFBVSxHQUFROzBCQUM3Qjt5QkFDVDs7K0JBQUcsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsR0FBRzs7MEJBQWE7c0JBQy9DO3FCQUNOOzsyQkFBSyxFQUFFLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQywwQkFBMEI7eUJBQ2pEOzsrQkFBSSxTQUFTLEVBQUMsNkJBQTZCOzswQkFFdEM7c0JBQ0g7a0JBQ0o7Y0FDSixDQUNUO1VBQ0o7OztZQXRCZ0IsVUFBVTtHQUFTLGdCQUFNLFNBQVM7O21CQUFsQyxVQUFVLEMiLCJmaWxlIjoiMC40YWRlNzk4NDk1ZjA0ZWM1Mjc4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Rhc2hib2FyZC5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc2lkZWJhcic7XG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tICcuLi9pbnZlbnRvcnktbGlzdCc7XG5pbXBvcnQgUHJpbWFyeU5hdiBmcm9tICcuLi9wcmltYXJ5LW5hdic7XG5cbi8vY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBEYXRhJykuaW52ZW50b3J5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5TmF2IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5TGlzdCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGVudC9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltYXJ5TmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPjMvNCBGYXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgbGlua3MgbWlnaHQgZ28gaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJpbWFyeS1uYXYvaW5kZXguanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==