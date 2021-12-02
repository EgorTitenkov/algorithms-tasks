/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algorithms_and_functional_programming/add.ts":
/*!**********************************************************!*\
  !*** ./src/algorithms_and_functional_programming/add.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.add = void 0;
function add(n) {
    return function (y) {
        return n + y;
    };
}
exports.add = add;
// const add2 = add(2)
// const add6 = add(6)
// console.log(add2(5))
// console.log(add6(5))


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
var add_1 = __webpack_require__(/*! ./algorithms_and_functional_programming/add */ "./src/algorithms_and_functional_programming/add.ts");
var add2 = (0, add_1.add)(2)(5);
console.log(add2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixHQUFHLENBQUMsQ0FBUztJQUMzQixPQUFPLFVBQVUsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFKRCxrQkFJQztBQUVELHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1Qjs7Ozs7OztVQ1R2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNGQSx5SUFBZ0U7QUFFaEUsSUFBTSxJQUFJLEdBQUcsYUFBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29yaXRobS10YXNrcy8uL3NyYy9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL2FkZC50cyIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdGFza3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXRhc2tzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhZGQobjogbnVtYmVyKTogKHk6IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh5KSB7XG4gICAgcmV0dXJuIG4gKyB5XG4gIH1cbn1cblxuLy8gY29uc3QgYWRkMiA9IGFkZCgyKVxuLy8gY29uc3QgYWRkNiA9IGFkZCg2KVxuLy8gY29uc29sZS5sb2coYWRkMig1KSlcbi8vIGNvbnNvbGUubG9nKGFkZDYoNSkpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtmbGF0dGVuQW5kU29ydH0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy9mbGF0dGVuQW5kU29ydFwiO1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL2NvbXBvc2VcIjtcbmltcG9ydCB7dW5pcXVlU3VtfSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL3VuaXF1ZVN1bVwiO1xuaW1wb3J0IHttYXhUcmlwbGV0U3VtfSBmcm9tIFwiLi9hcnJheV9mdW5jdGlvbnMvbWF4VHJpcGxldFN1bVwiO1xuaW1wb3J0IHtTaW5nbGV0b259IGZyb20gXCIuL2NsYXNzZXNfYW5kX3BhdHRlcm5zL1NpbmdsZXRvblwiO1xuaW1wb3J0IHt6aXBXaXRofSBmcm9tIFwiLi9oaWdoZXJfb3JkZXJfZnVuY3Rpb25zL3ppcFdpdGhcIjtcbmltcG9ydCB7c2VxdWVuY2VTdW19IGZyb20gXCIuL3JlY3Vyc2lvbi9zZXF1ZW5jZVN1bVwiO1xuaW1wb3J0IHthbHBoYWJldGl6ZWR9IGZyb20gXCIuL3N0cmluZ19mdW5jdGlvbnMvYWxwaGFiZXRpemVkXCI7XG5pbXBvcnQge2FycmF5T2ZPYmplY3RTb3J0aW5nfSBmcm9tIFwiLi9zb3J0aW5nL2FycmF5T2ZPYmplY3RTb3J0aW5nXCI7XG5pbXBvcnQge2NvdW50RHVwbGljYXRlc30gZnJvbSBcIi4vc3RyaW5nX2Z1bmN0aW9ucy9jb3VudER1cGxpY2F0ZXNcIjtcbmltcG9ydCB7YXJpdGhtZXRpY1NlcXVlbmNlU3VtfSBmcm9tIFwiLi9hcnJheV9mdW5jdGlvbnMvYXJpdGhtZXRpY1NlcXVlbmNlU3VtXCI7XG5pbXBvcnQge3N1bUF2ZXJhZ2V9IGZyb20gXCIuL2FycmF5X2Z1bmN0aW9ucy9zdW1BdmVyYWdlXCI7XG5pbXBvcnQge3RvQXJhYmljfSBmcm9tIFwiLi9zdHJpbmdfZnVuY3Rpb25zL3JvbWFuVG9OdW1iZXJcIjtcbmltcG9ydCB7cGF0dGVybkFtb3VudH0gZnJvbSBcIi4vYXJyYXlfZnVuY3Rpb25zL3BhdHRlcm5BbW91bnRcIjtcbmltcG9ydCB7c3ByZWFkfSBmcm9tIFwiLi9oaWdoZXJfb3JkZXJfZnVuY3Rpb25zL3NwcmVhZFwiO1xuaW1wb3J0IHtNeU5vZGUsIHN0cmluZ2lmeX0gZnJvbSBcIi4vcmVjdXJzaW9uL3N0cmluZ2lmeVwiO1xuaW1wb3J0IHtyZWR1Y2V9IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvcmVkdWNlXCI7XG5pbXBvcnQge3RvTWFjaGluZU5hbWV9IGZyb20gXCIuL3N0cmluZ19mdW5jdGlvbnMvdG9NYWNoaW5lTmFtZVwiO1xuaW1wb3J0IHtiaWdnZXN0fSBmcm9tIFwiLi9hcnJheV9mdW5jdGlvbnMvYmlnZ2VzdFwiO1xuaW1wb3J0IHttdWx0aXBseUFsbH0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy9tdWx0aXBseUFsbFwiO1xuaW1wb3J0IHthZGR9IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvYWRkXCI7XG5cbmNvbnN0IGFkZDIgPSBhZGQoMikoNSlcbmNvbnNvbGUubG9nKGFkZDIpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=