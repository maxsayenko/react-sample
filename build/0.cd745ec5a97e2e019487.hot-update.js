webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(167);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _content = __webpack_require__(168);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var data = __webpack_require__(173).default;
	window.localStorage.setItem('appData', JSON.stringify(data));
	
	_reactDom2.default.render(_react2.default.createElement(_content2.default, null), document.getElementById('app'));

/***/ },

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
	
	var data = JSON.parse(localStorage.getItem('appData')).inventory;
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsS0FBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxHQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDeEMsT0FBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7QUFRN0Qsb0JBQVMsTUFBTSxDQUNYLHNEQUFXLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRCxLQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7O0tBRTlDLE9BQU87ZUFBUCxPQUFPOztjQUFQLE9BQU87K0JBQVAsT0FBTzs7dUVBQVAsT0FBTzs7O2tCQUFQLE9BQU87O2tDQUNmO0FBQ0wsb0JBQ0k7OztpQkFDSSx5REFBYztpQkFDZDs7dUJBQUssU0FBUyxFQUFDLGlCQUFpQjtxQkFDNUI7OzJCQUFLLFNBQVMsRUFBQyxLQUFLO3lCQUNoQixzREFBVzt5QkFDWCx5REFBZSxJQUFJLEVBQUUsSUFBSyxHQUFHO3NCQUMzQjtrQkFDSjtjQUNKLENBQ1Q7VUFDSjs7O1lBYmdCLE9BQU87R0FBUyxnQkFBTSxTQUFTOzttQkFBL0IsT0FBTyxDIiwiZmlsZSI6IjAuY2Q3NDVlYzVhOTdlMmUwMTk0ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbW9kZWwnKS5kZWZhdWx0O1xud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHBEYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQnO1xuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q29udGVudCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9kYXNoYm9hcmQuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL3NpZGViYXInO1xuaW1wb3J0IEludmVudG9yeUxpc3QgZnJvbSAnLi4vaW52ZW50b3J5LWxpc3QnO1xuaW1wb3J0IFByaW1hcnlOYXYgZnJvbSAnLi4vcHJpbWFyeS1uYXYnO1xuXG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwRGF0YScpKS5pbnZlbnRvcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFByaW1hcnlOYXYgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlbnRvcnlMaXN0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250ZW50L2luZGV4LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=