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
// console.log(toMachineName('312Hello       my name is Egor', '-'))


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
console.log((0, toMachineName_1.toMachineName)('312Hello2       1my name is Egor', '-'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLFNBQWlCO0lBQzNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztJQUNyRCxPQUFPLEdBQUc7U0FDUCxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksRUFBSixDQUFJLENBQUM7U0FDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNmLFdBQVcsRUFBRTtBQUNsQixDQUFDO0FBUEQsc0NBT0M7QUFFRCxvRUFBb0U7Ozs7Ozs7VUNUcEU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsNkhBQStEO0FBSy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWEsRUFBQyxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29yaXRobS10YXNrcy8uL3NyYy9zdHJpbmdfZnVuY3Rpb25zL3RvTWFjaGluZU5hbWUudHMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXRhc2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ29yaXRobS10YXNrcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9NYWNoaW5lTmFtZShuYW1lOiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nKSB7XG4gIGxldCBzdHIgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFx3WzAtOV1cXHcvLCAnJylcbiAgcmV0dXJuIHN0clxuICAgIC5zcGxpdCgnICcpXG4gICAgLmZpbHRlcigod29yZCkgPT4gd29yZClcbiAgICAuam9pbihzZXBhcmF0b3IpXG4gICAgLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gY29uc29sZS5sb2codG9NYWNoaW5lTmFtZSgnMzEySGVsbG8gICAgICAgbXkgbmFtZSBpcyBFZ29yJywgJy0nKSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge2ZsYXR0ZW5BbmRTb3J0fSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL2ZsYXR0ZW5BbmRTb3J0XCI7XG5pbXBvcnQge2NvbXBvc2V9IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvY29tcG9zZVwiO1xuaW1wb3J0IHt1bmlxdWVTdW19IGZyb20gXCIuL2FsZ29yaXRobXNfYW5kX2Z1bmN0aW9uYWxfcHJvZ3JhbW1pbmcvdW5pcXVlU3VtXCI7XG5pbXBvcnQge21heFRyaXBsZXRTdW19IGZyb20gXCIuL2FycmF5X2Z1bmN0aW9ucy9tYXhUcmlwbGV0U3VtXCI7XG5pbXBvcnQge1NpbmdsZXRvbn0gZnJvbSBcIi4vY2xhc3Nlc19hbmRfcGF0dGVybnMvU2luZ2xldG9uXCI7XG5pbXBvcnQge3ppcFdpdGh9IGZyb20gXCIuL2hpZ2hlcl9vcmRlcl9mdW5jdGlvbnMvemlwV2l0aFwiO1xuaW1wb3J0IHtzZXF1ZW5jZVN1bX0gZnJvbSBcIi4vcmVjdXJzaW9uL3NlcXVlbmNlU3VtXCI7XG5pbXBvcnQge2FscGhhYmV0aXplZH0gZnJvbSBcIi4vc3RyaW5nX2Z1bmN0aW9ucy9hbHBoYWJldGl6ZWRcIjtcbmltcG9ydCB7YXJyYXlPZk9iamVjdFNvcnRpbmd9IGZyb20gXCIuL3NvcnRpbmcvYXJyYXlPZk9iamVjdFNvcnRpbmdcIjtcbmltcG9ydCB7Y291bnREdXBsaWNhdGVzfSBmcm9tIFwiLi9zdHJpbmdfZnVuY3Rpb25zL2NvdW50RHVwbGljYXRlc1wiO1xuaW1wb3J0IHthcml0aG1ldGljU2VxdWVuY2VTdW19IGZyb20gXCIuL2FycmF5X2Z1bmN0aW9ucy9hcml0aG1ldGljU2VxdWVuY2VTdW1cIjtcbmltcG9ydCB7c3VtQXZlcmFnZX0gZnJvbSBcIi4vYXJyYXlfZnVuY3Rpb25zL3N1bUF2ZXJhZ2VcIjtcbmltcG9ydCB7dG9BcmFiaWN9IGZyb20gXCIuL3N0cmluZ19mdW5jdGlvbnMvcm9tYW5Ub051bWJlclwiO1xuaW1wb3J0IHtwYXR0ZXJuQW1vdW50fSBmcm9tIFwiLi9hcnJheV9mdW5jdGlvbnMvcGF0dGVybkFtb3VudFwiO1xuaW1wb3J0IHtzcHJlYWR9IGZyb20gXCIuL2hpZ2hlcl9vcmRlcl9mdW5jdGlvbnMvc3ByZWFkXCI7XG5pbXBvcnQge015Tm9kZSwgc3RyaW5naWZ5fSBmcm9tIFwiLi9yZWN1cnNpb24vc3RyaW5naWZ5XCI7XG5pbXBvcnQge3JlZHVjZX0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy9yZWR1Y2VcIjtcbmltcG9ydCB7dG9NYWNoaW5lTmFtZX0gZnJvbSBcIi4vc3RyaW5nX2Z1bmN0aW9ucy90b01hY2hpbmVOYW1lXCI7XG5pbXBvcnQge2JpZ2dlc3R9IGZyb20gXCIuL2FycmF5X2Z1bmN0aW9ucy9iaWdnZXN0XCI7XG5pbXBvcnQge211bHRpcGx5QWxsfSBmcm9tIFwiLi9hbGdvcml0aG1zX2FuZF9mdW5jdGlvbmFsX3Byb2dyYW1taW5nL211bHRpcGx5QWxsXCI7XG5pbXBvcnQge2FkZH0gZnJvbSBcIi4vYWxnb3JpdGhtc19hbmRfZnVuY3Rpb25hbF9wcm9ncmFtbWluZy9hZGRcIjtcblxuY29uc29sZS5sb2codG9NYWNoaW5lTmFtZSgnMzEySGVsbG8yICAgICAgIDFteSBuYW1lIGlzIEVnb3InLCAnLScpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9