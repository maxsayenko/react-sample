webpackHotUpdate(0,{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var InventoryListItem = function (_React$Component) {
	    _inherits(InventoryListItem, _React$Component);
	
	    function InventoryListItem() {
	        _classCallCheck(this, InventoryListItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InventoryListItem).apply(this, arguments));
	    }
	
	    _createClass(InventoryListItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    _react2.default.createElement('img', { src: 'images/' + this.props.image, alt: this.props.title })
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.author
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.country
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.date
	                )
	            );
	        }
	    }]);
	
	    return InventoryListItem;
	}(_react2.default.Component);
	
	exports.default = InventoryListItem;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QtaXRlbS9pbmRleC5qc3g/NGVlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCLGlCQUFpQjtlQUFqQixpQkFBaUI7O2NBQWpCLGlCQUFpQjsrQkFBakIsaUJBQWlCOzt1RUFBakIsaUJBQWlCOzs7a0JBQWpCLGlCQUFpQjs7a0NBQ3pCO0FBQ0wsb0JBQ0k7OztpQkFDSTs7O3FCQUFJLHVDQUFLLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxHQUFHO2tCQUFLO2lCQUMxRTs7O3FCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztrQkFBTTtpQkFDM0I7OztxQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07a0JBQU07aUJBQzVCOzs7cUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2tCQUFNO2lCQUM3Qjs7O3FCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtrQkFBTTtjQUN6QixDQUNSO1VBQ0o7OztZQVhnQixpQkFBaUI7R0FBUyxnQkFBTSxTQUFTOzttQkFBekMsaUJBQWlCLEMiLCJmaWxlIjoiMC43MGZiNWJjZmZjZDQ2MTcxNDc1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5TGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+PGltZyBzcmM9eydpbWFnZXMvJyArIHRoaXMucHJvcHMuaW1hZ2V9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5hdXRob3J9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuY291bnRyeX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5kYXRlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2ludmVudG9yeS1saXN0LWl0ZW0vaW5kZXguanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==