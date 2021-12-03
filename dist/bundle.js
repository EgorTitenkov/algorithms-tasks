/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/string_functions/toMachineName.ts":
/*!***********************************************!*\
  !*** ./src/string_functions/toMachineName.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toMachineName = void 0;
function toMachineName(name, separator) {
    var str = name.toLowerCase().replace(/\w[0-9]\w/, '');
    return str
        .split(' ')
        .filter(function (word) { return word; })
        .join(separator)
        .toLowerCase();
}
exports.toMachineName = toMachineName;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var toMachineName_1 = __webpack_require__(/*! ./string_functions/toMachineName */ "./src/string_functions/toMachineName.ts");
console.log((0, toMachineName_1.toMachineName)('312Hello       my name is Egor', '-'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLFNBQWlCO0lBQzNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUNyRCxPQUFPLEdBQUc7U0FDUCxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksRUFBSixDQUFJLENBQUM7U0FDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNmLFdBQVcsRUFBRTtBQUNsQixDQUFDO0FBUEQsc0NBT0M7Ozs7Ozs7VUNQRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNMQSw2SEFBK0Q7QUFLL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBYSxFQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXRhc2tzLy4vc3JjL3N0cmluZ19mdW5jdGlvbnMvdG9NYWNoaW5lTmFtZS50cyIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdGFza3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXRhc2tzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b01hY2hpbmVOYW1lKG5hbWU6IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgbGV0IHN0ciA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdbMC05XVxcdy8sICcnKVxuICByZXR1cm4gc3RyXG4gICAgLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKCh3b3JkKSA9PiB3b3JkKVxuICAgIC5qb2luKHNlcGFyYXRvcilcbiAgICAudG9Mb3dlckNhc2UoKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7ZmxhdHRlbkFuZFNvcnR9IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvZmxhdHRlbkFuZFNvcnRcIjtcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy9jb21wb3NlXCI7XG5pbXBvcnQge3VuaXF1ZVN1bX0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy91bmlxdWVTdW1cIjtcbmltcG9ydCB7bWF4VHJpcGxldFN1bX0gZnJvbSBcIi4vYXJyYXlfZnVuY3Rpb25zL21heFRyaXBsZXRTdW1cIjtcbmltcG9ydCB7U2luZ2xldG9ufSBmcm9tIFwiLi9jbGFzc2VzX2FuZF9wYXR0ZXJucy9TaW5nbGV0b25cIjtcbmltcG9ydCB7emlwV2l0aH0gZnJvbSBcIi4vaGlnaGVyX29yZGVyX2Z1bmN0aW9ucy96aXBXaXRoXCI7XG5pbXBvcnQge3NlcXVlbmNlU3VtfSBmcm9tIFwiLi9yZWN1cnNpb24vc2VxdWVuY2VTdW1cIjtcbmltcG9ydCB7YWxwaGFiZXRpemVkfSBmcm9tIFwiLi9zdHJpbmdfZnVuY3Rpb25zL2FscGhhYmV0aXplZFwiO1xuaW1wb3J0IHthcnJheU9mT2JqZWN0U29ydGluZ30gZnJvbSBcIi4vc29ydGluZy9hcnJheU9mT2JqZWN0U29ydGluZ1wiO1xuaW1wb3J0IHtjb3VudER1cGxpY2F0ZXN9IGZyb20gXCIuL3N0cmluZ19mdW5jdGlvbnMvY291bnREdXBsaWNhdGVzXCI7XG5pbXBvcnQge2FyaXRobWV0aWNTZXF1ZW5jZVN1bX0gZnJvbSBcIi4vYXJyYXlfZnVuY3Rpb25zL2FyaXRobWV0aWNTZXF1ZW5jZVN1bVwiO1xuaW1wb3J0IHtzdW1BdmVyYWdlfSBmcm9tIFwiLi9hcnJheV9mdW5jdGlvbnMvc3VtQXZlcmFnZVwiO1xuaW1wb3J0IHt0b0FyYWJpY30gZnJvbSBcIi4vc3RyaW5nX2Z1bmN0aW9ucy9yb21hblRvTnVtYmVyXCI7XG5pbXBvcnQge3BhdHRlcm5BbW91bnR9IGZyb20gXCIuL2FycmF5X2Z1bmN0aW9ucy9wYXR0ZXJuQW1vdW50XCI7XG5pbXBvcnQge3NwcmVhZH0gZnJvbSBcIi4vaGlnaGVyX29yZGVyX2Z1bmN0aW9ucy9zcHJlYWRcIjtcbmltcG9ydCB7TXlOb2RlLCBzdHJpbmdpZnl9IGZyb20gXCIuL3JlY3Vyc2lvbi9zdHJpbmdpZnlcIjtcbmltcG9ydCB7cmVkdWNlfSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL3JlZHVjZVwiO1xuaW1wb3J0IHt0b01hY2hpbmVOYW1lfSBmcm9tIFwiLi9zdHJpbmdfZnVuY3Rpb25zL3RvTWFjaGluZU5hbWVcIjtcbmltcG9ydCB7YmlnZ2VzdH0gZnJvbSBcIi4vYXJyYXlfZnVuY3Rpb25zL2JpZ2dlc3RcIjtcbmltcG9ydCB7bXVsdGlwbHlBbGx9IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvbXVsdGlwbHlBbGxcIjtcbmltcG9ydCB7YWRkfSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL2FkZFwiO1xuXG5jb25zb2xlLmxvZyh0b01hY2hpbmVOYW1lKCczMTJIZWxsbyAgICAgICBteSBuYW1lIGlzIEVnb3InLCAnLScpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9