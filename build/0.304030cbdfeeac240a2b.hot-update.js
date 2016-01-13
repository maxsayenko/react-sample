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
	
	var data = localStorage.getItem('appData').inventory;
	
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

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxLQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7S0FFbEMsT0FBTztlQUFQLE9BQU87O2NBQVAsT0FBTzsrQkFBUCxPQUFPOzt1RUFBUCxPQUFPOzs7a0JBQVAsT0FBTzs7a0NBQ2Y7QUFDTCxvQkFDSTs7O2lCQUNJLHlEQUFjO2lCQUNkOzt1QkFBSyxTQUFTLEVBQUMsaUJBQWlCO3FCQUM1Qjs7MkJBQUssU0FBUyxFQUFDLEtBQUs7eUJBQ2hCLHNEQUFXO3lCQUNYLHlEQUFlLElBQUksRUFBRSxJQUFLLEdBQUc7c0JBQzNCO2tCQUNKO2NBQ0osQ0FDVDtVQUNKOzs7WUFiZ0IsT0FBTztHQUFTLGdCQUFNLFNBQVM7O21CQUEvQixPQUFPLEMiLCJmaWxlIjoiMC4zMDQwMzBjYmRmZWVhYzI0MGEyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Rhc2hib2FyZC5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc2lkZWJhcic7XG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tICcuLi9pbnZlbnRvcnktbGlzdCc7XG5pbXBvcnQgUHJpbWFyeU5hdiBmcm9tICcuLi9wcmltYXJ5LW5hdic7XG5cbmNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwRGF0YScpLmludmVudG9yeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UHJpbWFyeU5hdiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEludmVudG9yeUxpc3QgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRlbnQvaW5kZXguanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==