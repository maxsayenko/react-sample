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
	
	__webpack_require__(176);
	
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
	                    _react2.default.createElement('img', { className: 'list-image', src: 'images/' + this.props.image, alt: this.props.title })
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

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(177, function() {
				var newContent = __webpack_require__(177);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".list-image {\n    max-height: 30px;\n    max-width: 30px;\n}", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QtaXRlbS9pbmRleC5qc3g/NGVlZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LWxpc3QtaXRlbS9zdHlsZXMuY3NzP2RjODkqIiwid2VicGFjazovLy8uL3NyYy9pbnZlbnRvcnktbGlzdC1pdGVtL3N0eWxlcy5jc3M/NThjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FHcUIsaUJBQWlCO2VBQWpCLGlCQUFpQjs7Y0FBakIsaUJBQWlCOytCQUFqQixpQkFBaUI7O3VFQUFqQixpQkFBaUI7OztrQkFBakIsaUJBQWlCOztrQ0FDekI7QUFDTCxvQkFDSTs7O2lCQUNJOzs7cUJBQUksdUNBQUssU0FBUyxFQUFDLFlBQVksRUFBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sR0FBRztrQkFBSztpQkFDakc7OztxQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7a0JBQU07aUJBQzNCOzs7cUJBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2tCQUFNO2lCQUM1Qjs7O3FCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztrQkFBTTtpQkFDN0I7OztxQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7a0JBQU07Y0FDekIsQ0FDUjtVQUNKOzs7WUFYZ0IsaUJBQWlCO0dBQVMsZ0JBQU0sU0FBUzs7bUJBQXpDLGlCQUFpQixDOzs7Ozs7O0FDSHRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXVDLHVCQUF1QixzQkFBc0IsR0FBRzs7QUFFdkYiLCJmaWxlIjoiMC43NmE1NzI4NWIyNTFmNGRkZmE0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5TGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJsaXN0LWltYWdlXCIgc3JjPXsnaW1hZ2VzLycgKyB0aGlzLnByb3BzLmltYWdlfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYXV0aG9yfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmNvdW50cnl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZGF0ZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnZlbnRvcnktbGlzdC1pdGVtL2luZGV4LmpzeFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnZlbnRvcnktbGlzdC1pdGVtL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaW1hZ2Uge1xcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvaW52ZW50b3J5LWxpc3QtaXRlbS9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9