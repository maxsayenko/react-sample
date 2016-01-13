webpackHotUpdate(0,{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _inventoryListItem = __webpack_require__(173);
	
	var _inventoryListItem2 = _interopRequireDefault(_inventoryListItem);
	
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
	        key: 'render',
	        value: function render() {
	            var inventoryItems = this.props.data.map(function (item) {
	                var image = item.images[0];
	                return _react2.default.createElement(_inventoryListItem2.default, {
	                    key: item.id,
	                    image: image,
	                    title: item.title,
	                    author: item.author,
	                    country: item.country,
	                    date: item.date
	                });
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' },
	                _react2.default.createElement(
	                    'h1',
	                    { className: 'page-header' },
	                    'Dashboard'
	                ),
	                _react2.default.createElement(
	                    'h2',
	                    { className: 'sub-header' },
	                    'Inventory List'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'table-responsive' },
	                    _react2.default.createElement(
	                        'table',
	                        { className: 'table table-striped' },
	                        _react2.default.createElement(
	                            'thead',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Image'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Title'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Author'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Country'
	                                ),
	                                _react2.default.createElement(
	                                    'th',
	                                    null,
	                                    'Date'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            inventoryItems
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ContentBody;
	}(_react2.default.Component);
	
	exports.default = ContentBody;
	;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QvaW5kZXguanN4PzRmNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FHcUIsV0FBVztlQUFYLFdBQVc7O2NBQVgsV0FBVzsrQkFBWCxXQUFXOzt1RUFBWCxXQUFXOzs7a0JBQVgsV0FBVzs7a0NBQ25CO0FBQ0wsaUJBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUk7QUFDL0MscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0Isd0JBQU87QUFDSCx3QkFBRyxFQUFFLElBQUksQ0FBQyxFQUFHO0FBQ2IsMEJBQUssRUFBRSxLQUFNO0FBQ2IsMEJBQUssRUFBRSxJQUFJLENBQUMsS0FBTTtBQUNsQiwyQkFBTSxFQUFFLElBQUksQ0FBQyxNQUFPO0FBQ3BCLDRCQUFPLEVBQUUsSUFBSSxDQUFDLE9BQVE7QUFDdEIseUJBQUksRUFBRSxJQUFJLENBQUMsSUFBSzttQkFDZDtjQUNULENBQUMsQ0FBQztBQUNILG9CQUNJOzttQkFBSyxTQUFTLEVBQUMseURBQXlEO2lCQUNwRTs7dUJBQUksU0FBUyxFQUFDLGFBQWE7O2tCQUFlO2lCQUMxQzs7dUJBQUksU0FBUyxFQUFDLFlBQVk7O2tCQUFvQjtpQkFFOUM7O3VCQUFLLFNBQVMsRUFBQyxrQkFBa0I7cUJBQzdCOzsyQkFBTyxTQUFTLEVBQUMscUJBQXFCO3lCQUNsQzs7OzZCQUNBOzs7aUNBQ0k7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQWM7aUNBQ2Q7Ozs7a0NBQWU7aUNBQ2Y7Ozs7a0NBQWdCO2lDQUNoQjs7OztrQ0FBYTs4QkFDWjswQkFDRzt5QkFDUjs7OzZCQUNNLGNBQWM7MEJBQ1o7c0JBQ0o7a0JBQ047Y0FFSixDQUNSO1VBQ0w7OztZQXJDZ0IsV0FBVztHQUFTLGdCQUFNLFNBQVM7O21CQUFuQyxXQUFXO0FBc0MvQixFIiwiZmlsZSI6IjAuMjBiNGJmNmRiN2Q4OWFkODRjNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW52ZW50b3J5TGlzdEl0ZW0gZnJvbSAnLi4vaW52ZW50b3J5LWxpc3QtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGludmVudG9yeUl0ZW1zID0gdGhpcy5wcm9wcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gaXRlbS5pbWFnZXNbMF07XG4gICAgICAgICAgICByZXR1cm4gPEludmVudG9yeUxpc3RJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgIGNvdW50cnk9e2l0ZW0uY291bnRyeX1cbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05IGNvbC1zbS1vZmZzZXQtMyBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0yIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+SW52ZW50b3J5IExpc3Q8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BdXRob3I8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGludmVudG9yeUl0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnZlbnRvcnktbGlzdC9pbmRleC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9