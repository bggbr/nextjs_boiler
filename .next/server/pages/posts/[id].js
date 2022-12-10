"use strict";
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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/post.ts":
/*!*********************!*\
  !*** ./lib/post.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    return allPostsData.sort((a, b)=>{\n        if (a.date < b.date) {\n            return 1;\n        } else {\n            return -1;\n        }\n    });\n}\nfunction getAllPostIds() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    return fileNames.map((fileName)=>{\n        return {\n            params: {\n                id: fileName.replace(/\\.md$/, \"\")\n            }\n        };\n    });\n}\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf-8\");\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    return {\n        id,\n        contentHtml,\n        ...matterResult.data\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBQ1M7QUFDRDtBQUNLO0FBRXJDLE1BQU1LLGlCQUFpQkosZ0RBQVMsQ0FBQ00sUUFBUUMsR0FBRyxJQUFJO0FBRXpDLFNBQVNDLHFCQUFxQjtJQUNqQyxNQUFNQyxZQUFZVixxREFBYyxDQUFDSztJQUVqQyxNQUFNTyxlQUFlRixVQUFVRyxHQUFHLENBQUMsQ0FBQ0MsV0FBYTtRQUM3QyxNQUFNQyxLQUFLRCxTQUFTRSxPQUFPLENBQUMsU0FBUztRQUVyQyxNQUFNQyxXQUFXaEIsZ0RBQVMsQ0FBQ0ksZ0JBQWdCUztRQUMzQyxNQUFNSSxlQUFlbEIsc0RBQWUsQ0FBQ2lCLFVBQVU7UUFFL0MsTUFBTUcsZUFBZWxCLGtEQUFNQSxDQUFDZ0I7UUFFNUIsT0FBTztZQUNISDtZQUNBLEdBQUlLLGFBQWFDLElBQUk7UUFDekI7SUFDSjtJQUVBLE9BQU9ULGFBQWFVLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNO1FBQy9CLElBQUlELEVBQUVFLElBQUksR0FBR0QsRUFBRUMsSUFBSSxFQUFFO1lBQ2pCLE9BQU87UUFDWCxPQUFPO1lBQ0gsT0FBTyxDQUFDO1FBQ1osQ0FBQztJQUNMO0FBQ0osQ0FBQztBQUVNLFNBQVNDLGdCQUFnQjtJQUM1QixNQUFNaEIsWUFBWVYscURBQWMsQ0FBQ0s7SUFDakMsT0FBT0ssVUFBVUcsR0FBRyxDQUFDLENBQUNDLFdBQWE7UUFDL0IsT0FBTztZQUNIYSxRQUFRO2dCQUNKWixJQUFJRCxTQUFTRSxPQUFPLENBQUMsU0FBUztZQUNsQztRQUNKO0lBQ0o7QUFDSixDQUFDO0FBRU0sZUFBZVksWUFBWWIsRUFBVSxFQUFFO0lBQzFDLE1BQU1FLFdBQVdoQixnREFBUyxDQUFDSSxnQkFBZ0IsQ0FBQyxFQUFFVSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxNQUFNRyxlQUFlbEIsc0RBQWUsQ0FBQ2lCLFVBQVU7SUFFL0MsTUFBTUcsZUFBZWxCLGtEQUFNQSxDQUFDZ0I7SUFFNUIsTUFBTVcsbUJBQW1CLE1BQU0xQiw4Q0FBTUEsR0FBRzJCLEdBQUcsQ0FBQzFCLG1EQUFVQSxFQUFFRyxPQUFPLENBQUNhLGFBQWFXLE9BQU87SUFDcEYsTUFBTUMsY0FBY0gsaUJBQWlCSSxRQUFRO0lBRTdDLE9BQU87UUFDSGxCO1FBQ0FpQjtRQUNBLEdBQUlaLGFBQWFDLElBQUk7SUFDekI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3Bvc3QudHM/OTlmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCByZW1hcmtIdG1sIGZyb20gXCJyZW1hcmstaHRtbFwiO1xuXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInBvc3RzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcblxuICAgIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGZpbGVOYW1lcy5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG5cbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKTtcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgICAgICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgLi4uKG1hdHRlclJlc3VsdC5kYXRhIGFzIHsgZGF0ZTogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pLFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0SWRzKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbiAgICByZXR1cm4gZmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApO1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgXCJ1dGYtOFwiKTtcblxuICAgIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuXG4gICAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpLnVzZShyZW1hcmtIdG1sKS5wcm9jZXNzKG1hdHRlclJlc3VsdC5jb250ZW50KTtcbiAgICBjb25zdCBjb250ZW50SHRtbCA9IHByb2Nlc3NlZENvbnRlbnQudG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBjb250ZW50SHRtbCxcbiAgICAgICAgLi4uKG1hdHRlclJlc3VsdC5kYXRhIGFzIHsgZGF0ZTogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pLFxuICAgIH07XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicmVtYXJrIiwicmVtYXJrSHRtbCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRTb3J0ZWRQb3N0c0RhdGEiLCJmaWxlTmFtZXMiLCJyZWFkZGlyU3luYyIsImFsbFBvc3RzRGF0YSIsIm1hcCIsImZpbGVOYW1lIiwiaWQiLCJyZXBsYWNlIiwiZnVsbFBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJtYXR0ZXJSZXN1bHQiLCJkYXRhIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsImdldEFsbFBvc3RJZHMiLCJwYXJhbXMiLCJnZXRQb3N0RGF0YSIsInByb2Nlc3NlZENvbnRlbnQiLCJ1c2UiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/post.ts\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPath\": () => (/* binding */ getStaticPath),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/post */ \"./lib/post.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_post__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_post__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Post = ({ postData  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/posts/[id].tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/posts/[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {}, void 0, false, {\n                fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/posts/[id].tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bjj/Documents/문서 - 방재정의 MacBook\\xa0Pro/next.js/nextjs_boiler/pages/posts/[id].tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nconst getStaticPath = async ()=>{\n    const paths = (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getAllPostIds)();\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const postData = await (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getPostData)(params === null || params === void 0 ? void 0 : params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRWtDO0FBRTVELE1BQU1HLE9BQU8sQ0FBQyxFQUNWQyxTQUFRLEVBT1gsR0FBSztJQUNGLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOztvQkFDSTtrQ0FDRCw4REFBQ0M7a0NBQU9ILFNBQVNHLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNDOzs7Ozs7Ozs7OztBQU9iO0FBRUEsaUVBQWVMLElBQUlBLEVBQUM7QUFFYixNQUFNTSxnQkFBZ0MsVUFBWTtJQUNyRCxNQUFNQyxRQUFRVCx3REFBYUE7SUFFM0IsT0FBTztRQUNIUztRQUNBQyxVQUFVLEtBQUs7SUFDbkI7QUFDSixFQUFFO0FBRUssTUFBTUMsaUJBQWlDLE9BQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUs7SUFDaEUsTUFBTVQsV0FBVyxNQUFNRixzREFBV0EsQ0FBQ1csbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRQyxFQUFFO0lBRTdDLE9BQU87UUFDSEMsT0FBTztZQUNIWDtRQUNKO0lBQ0o7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RcIjtcblxuY29uc3QgUG9zdCA9ICh7XG4gICAgcG9zdERhdGEsXG59OiB7XG4gICAgcG9zdERhdGE6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgZGF0YTogc3RyaW5nO1xuICAgICAgICBjb250ZW50SHRtbDogc3RyaW5nO1xuICAgIH07XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Bvc3REYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5oZWFkaW5nWGx9Pntwb3N0RGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+e3Bvc3REYXRhLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfaHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0+PC9kaXY+ICovfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGg6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXM/LmlkIGFzIHN0cmluZyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdERhdGEsXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRBbGxQb3N0SWRzIiwiZ2V0UG9zdERhdGEiLCJQb3N0IiwicG9zdERhdGEiLCJkaXYiLCJoZWFkIiwidGl0bGUiLCJhcnRpY2xlIiwiZ2V0U3RhdGljUGF0aCIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImlkIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();