/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { products  } = param;\n    _s();\n    const [sliderRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({\n        slides: {\n            perView: 3,\n            spacing: 48\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ignite Shop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_3__.HomeContainer, {\n                ref: sliderRef,\n                className: \"keen-slider\",\n                children: products.map((product)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/product/\".concat(product.id),\n                        prefetch: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                            className: \"keen-slider__slide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: product.imageUrl,\n                                    width: 520,\n                                    height: 480,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: product.price\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gisele\\\\Desktop\\\\ignite\\\\reactjs\\\\ignite-shop\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"czjHPJ+WAOa0SN9idoqsoyyfytY=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQzhCO0FBQ21CO0FBRVk7QUFFckI7QUFHWjtBQUNBOztBQVdiLFNBQVNNLEtBQUssS0FBdUIsRUFBRTtRQUF6QixFQUFFQyxTQUFRLEVBQWEsR0FBdkI7O0lBQ3pCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHUCxnRUFBYUEsQ0FBQztRQUM5QlEsUUFBUTtZQUNKQyxTQUFTO1lBQ1RDLFNBQVM7UUFDYjtJQUNKO0lBRUEscUJBQ0c7OzBCQUNBLDhEQUFDTixrREFBSUE7MEJBQ0osNEVBQUNPOzhCQUFNOzs7Ozs7Ozs7OzswQkFHUCw4REFBQ1YsNkRBQWFBO2dCQUFDVyxLQUFLTDtnQkFBV00sV0FBVTswQkFDcENQLFNBQVNRLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBVztvQkFDckIscUJBQ0ksOERBQUNaLGtEQUFJQTt3QkFBa0JhLE1BQU0sWUFBdUIsT0FBWEQsUUFBUUUsRUFBRTt3QkFBSUMsVUFBVSxLQUFLO2tDQUNsRSw0RUFBQ2hCLHVEQUFPQTs0QkFBQ1csV0FBVTs7OENBQ2YsOERBQUNkLG1EQUFLQTtvQ0FBQ29CLEtBQUtKLFFBQVFLLFFBQVE7b0NBQUVDLE9BQU87b0NBQUtDLFFBQVE7b0NBQUtDLEtBQUk7Ozs7Ozs4Q0FFM0QsOERBQUNDOztzREFDRyw4REFBQ0M7c0RBQVFWLFFBQVFXLElBQUk7Ozs7OztzREFDckIsOERBQUNDO3NEQUFNWixRQUFRYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTnJCYixRQUFRRSxFQUFFOzs7OztnQkFXN0I7Ozs7Ozs7O0FBSVosQ0FBQztHQWhDdUJaOztRQUNBTCw0REFBYUE7OztLQURiSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlS2VlblNsaWRlciB9IGZyb20gJ2tlZW4tc2xpZGVyL3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbnRhaW5lciwgUHJvZHVjdCB9IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvaG9tZVwiXHJcblxyXG5pbXBvcnQgJ2tlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3MnXHJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL2xpYi9zdGlwZSdcclxuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XHJcbiAgICBwcm9kdWN0czoge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgICAgICAgcHJpY2U6IHN0cmluZztcclxuICAgIH1bXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfTogSG9tZVByb3BzKSB7XHJcbiAgICBjb25zdCBbc2xpZGVyUmVmXSA9IHVzZUtlZW5TbGlkZXIoe1xyXG4gICAgICAgIHNsaWRlczoge1xyXG4gICAgICAgICAgICBwZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjaW5nOiA0OFxyXG4gICAgICAgIH1cclxuICAgIH0pIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPklnbml0ZSBTaG9wPC90aXRsZT5cclxuICAgICAgIDwvSGVhZD5cclxuICAgICAgIFxyXG4gICAgICAgIDxIb21lQ29udGFpbmVyIHJlZj17c2xpZGVyUmVmfSBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Byb2R1Y3QuaWR9IGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3QgY2xhc3NOYW1lPSdrZWVuLXNsaWRlcl9fc2xpZGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZVVybH0gd2lkdGg9ezUyMH0gaGVpZ2h0PXs0ODB9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZHVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvSG9tZUNvbnRhaW5lcj5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdHJpcGUucHJvZHVjdHMubGlzdCh7XHJcbiAgICAgICAgZXhwYW5kOiBbJ2RhdGEuZGVmYXVsdF9wcmljZSddXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5tYXAocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBwcm9kdWN0LmRlZmF1bHRfcHJpY2UgYXMgU3RyaXBlLlByaWNlXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlc1swXSxcclxuICAgICAgICAgICAgcHJpY2U6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnQlJMJyxcclxuICAgICAgICAgICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKSxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdHMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMiwgLy8gMiBob3Vyc1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUtlZW5TbGlkZXIiLCJIb21lQ29udGFpbmVyIiwiUHJvZHVjdCIsIkxpbmsiLCJIZWFkIiwiSG9tZSIsInByb2R1Y3RzIiwic2xpZGVyUmVmIiwic2xpZGVzIiwicGVyVmlldyIsInNwYWNpbmciLCJ0aXRsZSIsInJlZiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJocmVmIiwiaWQiLCJwcmVmZXRjaCIsInNyYyIsImltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJmb290ZXIiLCJzdHJvbmciLCJuYW1lIiwic3BhbiIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});