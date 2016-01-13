webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// main.js
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(169);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _content = __webpack_require__(170);
	
	var _content2 = _interopRequireDefault(_content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_content2.default, null), document.getElementById('app'));

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(12);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(174);
	
	var _primaryNav = __webpack_require__(171);
	
	var _primaryNav2 = _interopRequireDefault(_primaryNav);
	
	var _sidebar = __webpack_require__(172);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _contentBody = __webpack_require__(173);
	
	var _contentBody2 = _interopRequireDefault(_contentBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                        _react2.default.createElement(_contentBody2.default, null)
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

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(175, function() {
				var newContent = __webpack_require__(175);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * Base structure\n */\n\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px;\n}\n\n\n/*\n * Global add-ons\n */\n\n.sub-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Sidebar\n */\n\n/* Hide for mobile, show later */\n.sidebar {\n  display: none;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee;\n  }\n}\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px; /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px;\n}\n.nav-sidebar > li > a {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.nav-sidebar > .active > a,\n.nav-sidebar > .active > a:hover,\n.nav-sidebar > .active > a:focus {\n  color: #fff;\n  background-color: #428bca;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}\n\n\n/*\n * Placeholder dashboard ideas\n */\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n.placeholders h4 {\n  margin-bottom: 0;\n}\n.placeholder {\n  margin-bottom: 20px;\n}\n.placeholder img {\n  display: inline-block;\n  border-radius: 50%;\n}\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qc3g/MGQ1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9pbmRleC5qc3g/ZDhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9kYXNoYm9hcmQuY3NzPzQwMjUqIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2Rhc2hib2FyZC5jc3M/NTU1MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGFBQVk7OztBQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLG9CQUFTLE1BQU0sQ0FDWCxzREFBVyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2pDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDSm9CLE9BQU87ZUFBUCxPQUFPOztjQUFQLE9BQU87K0JBQVAsT0FBTzs7dUVBQVAsT0FBTzs7O2tCQUFQLE9BQU87O2tDQUNmO0FBQ0wsb0JBQ0k7OztpQkFDSSx5REFBYztpQkFDZDs7dUJBQUssU0FBUyxFQUFDLGlCQUFpQjtxQkFDNUI7OzJCQUFLLFNBQVMsRUFBQyxLQUFLO3lCQUNoQixzREFBVzt5QkFDWCwwREFBZTtzQkFDYjtrQkFDSjtjQUNKLENBQ1Q7VUFDSjs7O1lBYmdCLE9BQU87R0FBUyxnQkFBTSxTQUFTOzttQkFBL0IsT0FBTyxDOzs7Ozs7O0FDUDVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EseUlBQXdJLHNCQUFzQixHQUFHLGlEQUFpRCx5QkFBeUIsa0NBQWtDLEdBQUcsK0ZBQStGLGNBQWMsR0FBRyx3RUFBd0Usa0JBQWtCLEdBQUcsNkJBQTZCLGNBQWMsc0JBQXNCLGdCQUFnQixnQkFBZ0IsY0FBYyxvQkFBb0IscUJBQXFCLG9CQUFvQix5QkFBeUIsdUJBQXVCLCtGQUErRixtQ0FBbUMsS0FBSyxHQUFHLDRDQUE0Qyx3QkFBd0Isd0RBQXdELHVCQUF1QixHQUFHLHlCQUF5Qix3QkFBd0IsdUJBQXVCLEdBQUcsb0dBQW9HLGdCQUFnQiw4QkFBOEIsR0FBRyx5Q0FBeUMsa0JBQWtCLEdBQUcsNkJBQTZCLFdBQVcsMEJBQTBCLHlCQUF5QixLQUFLLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLGdFQUFnRSx3QkFBd0IsdUJBQXVCLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxvQkFBb0IsMEJBQTBCLHVCQUF1QixHQUFHOztBQUV0cEQiLCJmaWxlIjoiMC5iNTMyY2U2NGM3Y2FhNWE4ZDAxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBtYWluLmpzXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENvbnRlbnQgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vZGFzaGJvYXJkLmNzcyc7XG5pbXBvcnQgUHJpbWFyeU5hdiBmcm9tICcuLi9wcmltYXJ5LW5hdic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9zaWRlYmFyJztcbmltcG9ydCBDb250ZW50Qm9keSBmcm9tICcuLi9jb250ZW50LWJvZHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5TmF2IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEJvZHkgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRlbnQvaW5kZXguanN4XG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXNoYm9hcmQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Rhc2hib2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXNoYm9hcmQuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbnRlbnQvZGFzaGJvYXJkLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIEJhc2Ugc3RydWN0dXJlXFxuICovXFxuXFxuLyogTW92ZSBkb3duIGNvbnRlbnQgYmVjYXVzZSB3ZSBoYXZlIGEgZml4ZWQgbmF2YmFyIHRoYXQgaXMgNTBweCB0YWxsICovXFxuYm9keSB7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuXFxuLypcXG4gKiBHbG9iYWwgYWRkLW9uc1xcbiAqL1xcblxcbi5zdWItaGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcbi8qXFxuICogVG9wIG5hdmlnYXRpb25cXG4gKiBIaWRlIGRlZmF1bHQgYm9yZGVyIHRvIHJlbW92ZSAxcHggbGluZS5cXG4gKi9cXG4ubmF2YmFyLWZpeGVkLXRvcCB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qXFxuICogU2lkZWJhclxcbiAqL1xcblxcbi8qIEhpZGUgZm9yIG1vYmlsZSwgc2hvdyBsYXRlciAqL1xcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTFweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xcbiAgfVxcbn1cXG5cXG4vKiBTaWRlYmFyIG5hdmlnYXRpb24gKi9cXG4ubmF2LXNpZGViYXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMjFweDsgLyogMjBweCBwYWRkaW5nICsgMXB4IGJvcmRlciAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG59XFxuLm5hdi1zaWRlYmFyID4gbGkgPiBhIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5uYXYtc2lkZWJhciA+IC5hY3RpdmUgPiBhLFxcbi5uYXYtc2lkZWJhciA+IC5hY3RpdmUgPiBhOmhvdmVyLFxcbi5uYXYtc2lkZWJhciA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcXG59XFxuXFxuXFxuLypcXG4gKiBNYWluIGNvbnRlbnRcXG4gKi9cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluIHtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgfVxcbn1cXG4ubWFpbiAucGFnZS1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuXFxuLypcXG4gKiBQbGFjZWhvbGRlciBkYXNoYm9hcmQgaWRlYXNcXG4gKi9cXG5cXG4ucGxhY2Vob2xkZXJzIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGFjZWhvbGRlcnMgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnBsYWNlaG9sZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wbGFjZWhvbGRlciBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2NvbnRlbnQvZGFzaGJvYXJkLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==