/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"headingMd\": \"Home_headingMd__SEBf6\",\n\t\"padding1px\": \"Home_padding1px__uJX3C\",\n\t\"headingLg\": \"Home_headingLg__oQ2Vy\",\n\t\"list\": \"Home_list__qBUOI\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9iMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiLFxuXHRcImhlYWRpbmdNZFwiOiBcIkhvbWVfaGVhZGluZ01kX19TRUJmNlwiLFxuXHRcInBhZGRpbmcxcHhcIjogXCJIb21lX3BhZGRpbmcxcHhfX3VKWDNDXCIsXG5cdFwiaGVhZGluZ0xnXCI6IFwiSG9tZV9oZWFkaW5nTGdfX29RMlZ5XCIsXG5cdFwibGlzdFwiOiBcIkhvbWVfbGlzdF9fcUJVT0lcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./lib/post.ts":
/*!*********************!*\
  !*** ./lib/post.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    return allPostsData.sort((a, b)=>{\n        if (a.date < b.date) {\n            return 1;\n        } else {\n            return -1;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFDUztBQUVqQyxNQUFNRyxpQkFBaUJGLGdEQUFTLENBQUNJLFFBQVFDLEdBQUcsSUFBSTtBQUV6QyxTQUFTQyxxQkFBcUI7SUFDakMsTUFBTUMsWUFBWVIscURBQWMsQ0FBQ0c7SUFFakMsTUFBTU8sZUFBZUYsVUFBVUcsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDN0MsTUFBTUMsS0FBS0QsU0FBU0UsT0FBTyxDQUFDLFNBQVM7UUFFckMsTUFBTUMsV0FBV2QsZ0RBQVMsQ0FBQ0UsZ0JBQWdCUztRQUMzQyxNQUFNSSxlQUFlaEIsc0RBQWUsQ0FBQ2UsVUFBVTtRQUUvQyxNQUFNRyxlQUFlaEIsa0RBQU1BLENBQUNjO1FBRTVCLE9BQU87WUFDSEg7WUFDQSxHQUFJSyxhQUFhQyxJQUFJO1FBQ3pCO0lBQ0o7SUFFQSxPQUFPVCxhQUFhVSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTTtRQUMvQixJQUFJRCxFQUFFRSxJQUFJLEdBQUdELEVBQUVDLElBQUksRUFBRTtZQUNqQixPQUFPO1FBQ1gsT0FBTztZQUNILE9BQU8sQ0FBQztRQUNaLENBQUM7SUFDTDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvcG9zdC50cz85OWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInBvc3RzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcblxuICAgIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGZpbGVOYW1lcy5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG5cbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKTtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgICAgICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgLi4uKG1hdHRlclJlc3VsdC5kYXRhIGFzIHsgZGF0ZTogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pLFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImZpbGVOYW1lcyIsInJlYWRkaXJTeW5jIiwiYWxsUG9zdHNEYXRhIiwibWFwIiwiZmlsZU5hbWUiLCJpZCIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsIm1hdHRlclJlc3VsdCIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/post.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/post */ \"./lib/post.ts\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home({ allPostsData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"\",\n                    children: \"BOB\"\n                }, void 0, false, {\n                    fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"[BOB Introduction]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"(This is a website)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().padding1px)}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingLg),\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        children: allPostsData.map(({ id , title , date  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightText),\n                                        children: date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\nconst getStaticProps = async ()=>{\n    const allPostsData = (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getSortedPostsData)();\n    console.log(allPostsData);\n    return {\n        props: {\n            allPostsData\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkI7QUFFb0I7QUFDRTtBQUVwQyxTQUFTRyxLQUFLLEVBQ3pCQyxhQUFZLEVBT2YsRUFBRTtJQUNDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXSiwwRUFBb0I7OzBCQUNoQyw4REFBQ0Ysa0RBQUlBOzBCQUNELDRFQUFDUTtvQkFBTUYsV0FBVTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDRztnQkFBUUgsV0FBV0osMEVBQW9COztrQ0FDcEMsOERBQUNTO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNBO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRVAsOERBQUNGO2dCQUFRSCxXQUFXLENBQUMsRUFBRUosMEVBQW9CLENBQUMsQ0FBQyxFQUFFQSwyRUFBcUIsQ0FBQyxDQUFDOztrQ0FDbEUsOERBQUNXO3dCQUFHUCxXQUFXSiwwRUFBb0I7a0NBQUU7Ozs7OztrQ0FDckMsOERBQUNhO3dCQUFHVCxXQUFXSixxRUFBZTtrQ0FDekJFLGFBQWFhLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEdBQUUsRUFBRVYsTUFBSyxFQUFFVyxLQUFJLEVBQUUsaUJBQ2xDLDhEQUFDQztnQ0FBR2QsV0FBV0oseUVBQW1COztrREFDOUIsOERBQUNvQjtrREFBR2Q7Ozs7OztrREFDSiw4REFBQ2U7Ozs7O2tEQUNELDhEQUFDQzt3Q0FBTWxCLFdBQVdKLDBFQUFvQjtrREFBR2lCOzs7Ozs7OytCQUhKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRSxDQUFDO0FBRU0sTUFBTVEsaUJBQWlDLFVBQVk7SUFDdEQsTUFBTXRCLGVBQWVILDZEQUFrQkE7SUFDdkMwQixRQUFRQyxHQUFHLENBQUN4QjtJQUVaLE9BQU87UUFDSHlCLE9BQU87WUFDSHpCO1FBQ0o7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gXCIuLi9saWIvcG9zdFwiO1xuaW1wb3J0IGhvbWVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XG4gICAgYWxsUG9zdHNEYXRhLFxufToge1xuICAgIGFsbFBvc3RzRGF0YToge1xuICAgICAgICBkYXRlOiBzdHJpbmc7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgfVtdO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGUgY2xhc3NOYW1lPScnPkJPQjwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2hvbWVTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgICAgICAgICA8cD5bQk9CIEludHJvZHVjdGlvbl08L3A+XG4gICAgICAgICAgICAgICAgPHA+KFRoaXMgaXMgYSB3ZWJzaXRlKTwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7aG9tZVN0eWxlcy5oZWFkaW5nTWR9ICR7aG9tZVN0eWxlcy5wYWRkaW5nMXB4fWB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2hvbWVTdHlsZXMuaGVhZGluZ0xnfT5CbG9nPC9oMj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtob21lU3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGl0bGUsIGRhdGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtob21lU3R5bGVzLmxpZ2h0VGV4dH0+e2RhdGV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gICAgY29uc29sZS5sb2coYWxsUG9zdHNEYXRhKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhbGxQb3N0c0RhdGEsXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImhvbWVTdHlsZXMiLCJIb21lIiwiYWxsUG9zdHNEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJzZWN0aW9uIiwiaGVhZGluZ01kIiwicCIsInBhZGRpbmcxcHgiLCJoMiIsImhlYWRpbmdMZyIsInVsIiwibGlzdCIsIm1hcCIsImlkIiwiZGF0ZSIsImxpIiwibGlzdEl0ZW0iLCJhIiwiYnIiLCJzbWFsbCIsImxpZ2h0VGV4dCIsImdldFN0YXRpY1Byb3BzIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();