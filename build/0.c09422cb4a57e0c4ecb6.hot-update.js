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
	
	var data = __webpack_require__(173);
	window.localstorage.setItem('appData', data);
	
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
	                _react2.default.createElement(PrimaryNav, null),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGFBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsS0FBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxHQUFTLENBQUMsQ0FBQztBQUNoQyxPQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBUTdDLG9CQUFTLE1BQU0sQ0FDWCxzREFBVyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ05vQixPQUFPO2VBQVAsT0FBTzs7Y0FBUCxPQUFPOytCQUFQLE9BQU87O3VFQUFQLE9BQU87OztrQkFBUCxPQUFPOztrQ0FDZjtBQUNMLG9CQUNJOzs7aUJBQ0ksOEJBQUMsVUFBVSxPQUFHO2lCQUNkOzt1QkFBSyxTQUFTLEVBQUMsaUJBQWlCO3FCQUM1Qjs7MkJBQUssU0FBUyxFQUFDLEtBQUs7eUJBQ2hCLHNEQUFXO3lCQUNYLHlEQUFlLElBQUksRUFBRSxJQUFLLEdBQUc7c0JBQzNCO2tCQUNKO2NBQ0osQ0FDVDtVQUNKOzs7WUFiZ0IsT0FBTztHQUFTLGdCQUFNLFNBQVM7O21CQUEvQixPQUFPLEMiLCJmaWxlIjoiMC5jMDk0MjJjYjRhNTdlMGM0ZWNiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xud2luZG93LmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdhcHBEYXRhJywgZGF0YSk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudCc7XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDb250ZW50IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2Rhc2hib2FyZC5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vc2lkZWJhcic7XG5pbXBvcnQgSW52ZW50b3J5TGlzdCBmcm9tICcuLi9pbnZlbnRvcnktbGlzdCc7XG5cbi8vY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBEYXRhJykuaW52ZW50b3J5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5TmF2IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW52ZW50b3J5TGlzdCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGVudC9pbmRleC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9