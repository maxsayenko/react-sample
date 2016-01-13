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
	
	//const data = JSON.parse(localStorage.getItem('appData')).inventory;
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNxQixPQUFPO2VBQVAsT0FBTzs7Y0FBUCxPQUFPOytCQUFQLE9BQU87O3VFQUFQLE9BQU87OztrQkFBUCxPQUFPOztrQ0FDZjtBQUNMLG9CQUNJOzs7aUJBQ0kseURBQWM7aUJBQ2Q7O3VCQUFLLFNBQVMsRUFBQyxpQkFBaUI7cUJBQzVCOzsyQkFBSyxTQUFTLEVBQUMsS0FBSzt5QkFDaEIsc0RBQVc7eUJBQ1gseURBQWUsSUFBSSxFQUFFLElBQUssR0FBRztzQkFDM0I7a0JBQ0o7Y0FDSixDQUNUO1VBQ0o7OztZQWJnQixPQUFPO0dBQVMsZ0JBQU0sU0FBUzs7bUJBQS9CLE9BQU8sQyIsImZpbGUiOiIwLmE0N2Y1Zjc4MGIwZmY1NWU5NzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vZGFzaGJvYXJkLmNzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9zaWRlYmFyJztcbmltcG9ydCBJbnZlbnRvcnlMaXN0IGZyb20gJy4uL2ludmVudG9yeS1saXN0JztcbmltcG9ydCBQcmltYXJ5TmF2IGZyb20gJy4uL3ByaW1hcnktbmF2JztcblxuLy9jb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwRGF0YScpKS5pbnZlbnRvcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFByaW1hcnlOYXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnlMaXN0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250ZW50L2luZGV4LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=