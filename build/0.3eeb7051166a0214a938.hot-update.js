webpackHotUpdate(0,{

/***/ 173:
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
	
	var InventoryListItem = function (_React$Component) {
	    _inherits(InventoryListItem, _React$Component);
	
	    function InventoryListItem() {
	        _classCallCheck(this, InventoryListItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InventoryListItem).apply(this, arguments));
	    }
	
	    _createClass(InventoryListItem, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    _react2.default.createElement("img", { src: "{this.props.image}", alt: "{this.props.title}" })
	                ),
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    this.props.author
	                ),
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    this.props.country
	                ),
	                _react2.default.createElement(
	                    "td",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QtaXRlbS9pbmRleC5qc3g/NGVlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRXFCLGlCQUFpQjtlQUFqQixpQkFBaUI7O2NBQWpCLGlCQUFpQjsrQkFBakIsaUJBQWlCOzt1RUFBakIsaUJBQWlCOzs7a0JBQWpCLGlCQUFpQjs7a0NBQ3pCO0FBQ0wsb0JBQ0k7OztpQkFDSTs7O3FCQUFJLHVDQUFLLEdBQUcsRUFBQyxvQkFBb0IsRUFBQyxHQUFHLEVBQUMsb0JBQW9CLEdBQUc7a0JBQUs7aUJBQ2xFOzs7cUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2tCQUFNO2lCQUMzQjs7O3FCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtrQkFBTTtpQkFDNUI7OztxQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87a0JBQU07aUJBQzdCOzs7cUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2tCQUFNO2NBQ3pCLENBQ1I7VUFDSjs7O1lBWGdCLGlCQUFpQjtHQUFTLGdCQUFNLFNBQVM7O21CQUF6QyxpQkFBaUIsQyIsImZpbGUiOiIwLjNlZWI3MDUxMTY2YTAyMTRhOTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnlMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz1cInt0aGlzLnByb3BzLmltYWdlfVwiIGFsdD1cInt0aGlzLnByb3BzLnRpdGxlfVwiIC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYXV0aG9yfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmNvdW50cnl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZGF0ZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnZlbnRvcnktbGlzdC1pdGVtL2luZGV4LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=