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
	
	var data = JSON.parse(localStorage.getItem('appData'));
	
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
	                        _react2.default.createElement(_inventoryList2.default, { data: data.inventory })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Content;
	}(_react2.default.Component);
	
	exports.default = Content;

/***/ },

/***/ 172:
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
	            return _react2.default.createElement(
	                "div",
	                { className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" },
	                _react2.default.createElement(
	                    "h1",
	                    { className: "page-header" },
	                    "Dashboard"
	                ),
	                _react2.default.createElement(
	                    "h2",
	                    { className: "sub-header" },
	                    "Inventory List"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "table-responsive" },
	                    _react2.default.createElement(
	                        "table",
	                        { className: "table table-striped" },
	                        _react2.default.createElement(
	                            "thead",
	                            null,
	                            _react2.default.createElement(
	                                "tr",
	                                null,
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "#"
	                                ),
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                ),
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "Header"
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "tbody",
	                            null,
	                            _react2.default.createElement(
	                                "tr",
	                                null,
	                                _react2.default.createElement(
	                                    "td",
	                                    null,
	                                    "1,001"
	                                ),
	                                _react2.default.createElement(
	                                    "td",
	                                    null,
	                                    "Lorem"
	                                ),
	                                _react2.default.createElement(
	                                    "td",
	                                    null,
	                                    "ipsum"
	                                ),
	                                _react2.default.createElement(
	                                    "td",
	                                    null,
	                                    "dolor"
	                                ),
	                                _react2.default.createElement(
	                                    "td",
	                                    null,
	                                    "sit"
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ContentBody;
	}(_react2.default.Component);
	
	exports.default = ContentBody;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QvaW5kZXguanN4PzRmNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsS0FBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0tBRXBDLE9BQU87ZUFBUCxPQUFPOztjQUFQLE9BQU87K0JBQVAsT0FBTzs7dUVBQVAsT0FBTzs7O2tCQUFQLE9BQU87O2tDQUNmO0FBQ0wsb0JBQ0k7OztpQkFDSSx5REFBYztpQkFDZDs7dUJBQUssU0FBUyxFQUFDLGlCQUFpQjtxQkFDNUI7OzJCQUFLLFNBQVMsRUFBQyxLQUFLO3lCQUNoQixzREFBVzt5QkFDWCx5REFBZSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVUsR0FBRztzQkFDckM7a0JBQ0o7Y0FDSixDQUNUO1VBQ0o7OztZQWJnQixPQUFPO0dBQVMsZ0JBQU0sU0FBUzs7bUJBQS9CLE9BQU8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDUFAsV0FBVztlQUFYLFdBQVc7O2NBQVgsV0FBVzsrQkFBWCxXQUFXOzt1RUFBWCxXQUFXOzs7a0JBQVgsV0FBVzs7a0NBQ25CO0FBQ0wsb0JBQ0k7O21CQUFLLFNBQVMsRUFBQyx5REFBeUQ7aUJBQ3BFOzt1QkFBSSxTQUFTLEVBQUMsYUFBYTs7a0JBQWU7aUJBQzFDOzt1QkFBSSxTQUFTLEVBQUMsWUFBWTs7a0JBQW9CO2lCQUMxQzs7dUJBQUssU0FBUyxFQUFDLGtCQUFrQjtxQkFDN0I7OzJCQUFPLFNBQVMsRUFBQyxxQkFBcUI7eUJBQ2xDOzs7NkJBQ0E7OztpQ0FDSTs7OztrQ0FBVTtpQ0FDVjs7OztrQ0FBZTtpQ0FDZjs7OztrQ0FBZTtpQ0FDZjs7OztrQ0FBZTtpQ0FDZjs7OztrQ0FBZTs4QkFDZDswQkFDRzt5QkFDUjs7OzZCQUNBOzs7aUNBQ0k7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQVk7OEJBQ1g7MEJBQ0Q7c0JBQ0o7a0JBQ047Y0FDSixDQUNSO1VBQ0w7OztZQTlCZ0IsV0FBVztHQUFTLGdCQUFNLFNBQVM7O21CQUFuQyxXQUFXLEMiLCJmaWxlIjoiMC5hMmI5N2I5YWJlNTU0ZTIyODc5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Rhc2hib2FyZC5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc2lkZWJhcic7XG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tICcuLi9pbnZlbnRvcnktbGlzdCc7XG5pbXBvcnQgUHJpbWFyeU5hdiBmcm9tICcuLi9wcmltYXJ5LW5hdic7XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBEYXRhJykpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5TmF2IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5TGlzdCBkYXRhPXtkYXRhLmludmVudG9yeX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRlbnQvaW5kZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTkgY29sLXNtLW9mZnNldC0zIGNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTIgbWFpblwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5JbnZlbnRvcnkgTGlzdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IZWFkZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SGVhZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkhlYWRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IZWFkZXI8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MSwwMDE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TG9yZW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aXBzdW08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZG9sb3I8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+c2l0PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ludmVudG9yeS1saXN0L2luZGV4LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=