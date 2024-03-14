/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body - The main body for the application. */
body{
    padding: 0;
    margin: 0;
}

/* * - All elements for the application. */
*{
    box-sizing: border-box;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* priority-choosen */
.priority-chosen{
    background-color: lightblue; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* current-button */
.current-button{
    background-color: lightcoral;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* disable-clicker */
.disable-clicker{
    pointer-events: none;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* Mobile Developement */
@media only screen and (max-width: 1000px){
    #content{
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid red;
        padding: 10px;
    }

    /* main title */
    #content > h1{
        text-align: center;
    }

    /* |Main Screen Section| */
    .main-screen{
        display: flex;
        gap: 3px;

        border: 1px solid purple;
        padding: 5px;
        height: 550px;
    }
    .main-screen > div{
        border: 1px solid green;
    }

    .main-screen > div:nth-child(1){ /* Button Section */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .main-screen > div:nth-child(1) > div{ /* Display Projects Window */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        
        border: 1px solid blue;
        height: 100%;
        overflow-y: scroll;
    }
    .main-screen > div:nth-child(1) > div > h4{ /* Display Title (projects) */
        margin: 0;
    }

    .main-screen > div:nth-child(2){ /* Input Section */
        /* flex: 1; */
        width: 200px; /*Size may need to change depending on the amount of content. */
        text-align: center;
    }
    .main-screen > div:nth-child(2) > form{ /* New Todo Form */
        display: flex; 
        flex-direction: column;
        gap:10px;
    }
    .main-screen > div:nth-child(2) > form > div > label{
        display: block;
    }
    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{
        margin: 0;
    }

    /* |Todo Section| */
    .todo-section{
        display: flex;
        flex-direction: column;
        gap: 3px;

        height: 100%;
        overflow-y: scroll;
    }
    .todo-section > div{ /* todo rows (todo items)*/
        border: 1px solid orange;
    }

    /* |Todo Description Window|*/
    .todo-description-window{
        display: flex;
        flex-direction: column; 
        gap: 3px;

        border: 3px solid black !important;
        position: absolute;
        width: 300px;
        right: 37px;
        top: 150px;
        height: 200px;
    }
    .todo-description-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;

        border: 1px solid purple;
    }
    .todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
    .todo-description-window > div:nth-child(2){ /* Details Container */
        display: flex;
        flex-direction: column;
        gap: 5px; 

        border: 1px solid darkgreen; 
        padding: 5px;
    }
    .todo-description-window > div:nth-child(2) > div{
        border: 1px solid pink;
    }

    /* |Edit Todo Window| */
    .edit-todo-window{
        border: 1px solid black;
        position: absolute;
        width: 300px;
        height: 350px;
        top: 150px;
        right: 37px;
        text-align: center;
    }
    .edit-todo-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;

        border: 1px solid blue;
    }
    .edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
    .edit-todo-window > form{ /* Edit Section (Form)*/
        padding: 10px;
    }
    .edit-todo-window > form > div
    {
        border: 1px solid lightblue;
    }
    .edit-todo-window > form > div > label{
        display: block; 
    }

    /* |Project Section| */
    .project-section{
        border: 1px solid orangered;
        padding: 10px;
    }
    .project-section > div:nth-child(1){ /* Add Todo Container */
        display: flex;
        justify-content: end;

        border: 1px solid yellow;
    }
    .project-section > div:nth-child(1) > img[src]{ /* Add Todo Button */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }

    /* |Add Todo Window (project Section)| */
    .add-todo-window{
        position: absolute;
        width: 250px;
        height: 300px;
        top: 100px;
        border: 1px solid lightseagreen;
    }
    .add-todo-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end;

        border: 1px solid blue;
    }
    .add-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }

    .add-todo-window > form { /* Add Todo Section (Form) */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .add-todo-window > form > div > label{
        display: block; 
        text-align: center;
    }
    .add-todo-window > form > div > h4{
        text-align: center;
        margin: 0;
    }

    /* |Delete Project Window (Project Section)| */
    .delete-project-window{ 
        position: absolute;
        top: 100px;
        width: 250px;
        height: 300px;
        border: 1px solid lightsalmon;
    }
    .delete-project-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end; 

        border: 1px solid orange;
    }
    .delete-project-window > div:nth-child(1) > img[src]{ /* Close Button Image */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }

    .delete-project-window > div:nth-child(2){ /* Delete Prompt Container */
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid black;
    }
    .delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */
        color: red; 
    }
    .delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */
        color: red;
    }

    /* |Project Todos Section| */
    .project-todos-section{
        display: flex;
        flex-direction: column;
        gap: 10px;

        border: 1px solid green;
    }
    .project-todos-section > div{ /* Project Todos */
        display: flex;
        flex-direction: column;
        gap: 3px;
        border: 1px solid gold;
    }
    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */
        display: flex;
        justify-content: space-evenly;
        gap: 5px;
    }
    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Porject Todo Buttons */
        width: 40px;
        height: 40px;
    }

    /* |Project Todo Details Window| */
    .project-todo-details-window{
        position:absolute;
        width: 250px;
        height: 300px;
        top: 100px; 
        border: 1px solid black;
    }
    .project-todo-details-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end;

        border: 1px solid orange;
    }
    .project-todo-details-window > div:nth-child(1) > img[src]{ /* Close Button */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
    .project-todo-details-window > div:nth-child(2){ /* Details Container (Description|Due Date|Priority) */
        display: flex;
        flex-direction: column;
        gap: 5px;

        border: 1px solid blue;
    }

    /* |Project Todo Edit Window| */
    .project-todo-edit-window{
        border: 1px solid black;
        width: 250px;
        height: 300px;
        position: absolute;
        top: 100px;
    }
    .project-todo-edit-window > div:nth-child(1){
        display: flex;
        justify-content: end;
        
        border: 1px solid gold;
    }
    .project-todo-edit-window > div:nth-child(1) > img[src]{
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements for the application. */\n*{\n    box-sizing: border-box;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* priority-choosen */\n.priority-chosen{\n    background-color: lightblue; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* current-button */\n.current-button{\n    background-color: lightcoral;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* disable-clicker */\n.disable-clicker{\n    pointer-events: none;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* Mobile Developement */\n@media only screen and (max-width: 1000px){\n    #content{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        border: 1px solid red;\n        padding: 10px;\n    }\n\n    /* main title */\n    #content > h1{\n        text-align: center;\n    }\n\n    /* |Main Screen Section| */\n    .main-screen{\n        display: flex;\n        gap: 3px;\n\n        border: 1px solid purple;\n        padding: 5px;\n        height: 550px;\n    }\n    .main-screen > div{\n        border: 1px solid green;\n    }\n\n    .main-screen > div:nth-child(1){ /* Button Section */\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n\n    .main-screen > div:nth-child(1) > div{ /* Display Projects Window */\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 5px;\n        \n        border: 1px solid blue;\n        height: 100%;\n        overflow-y: scroll;\n    }\n    .main-screen > div:nth-child(1) > div > h4{ /* Display Title (projects) */\n        margin: 0;\n    }\n\n    .main-screen > div:nth-child(2){ /* Input Section */\n        /* flex: 1; */\n        width: 200px; /*Size may need to change depending on the amount of content. */\n        text-align: center;\n    }\n    .main-screen > div:nth-child(2) > form{ /* New Todo Form */\n        display: flex; \n        flex-direction: column;\n        gap:10px;\n    }\n    .main-screen > div:nth-child(2) > form > div > label{\n        display: block;\n    }\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{\n        margin: 0;\n    }\n\n    /* |Todo Section| */\n    .todo-section{\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        height: 100%;\n        overflow-y: scroll;\n    }\n    .todo-section > div{ /* todo rows (todo items)*/\n        border: 1px solid orange;\n    }\n\n    /* |Todo Description Window|*/\n    .todo-description-window{\n        display: flex;\n        flex-direction: column; \n        gap: 3px;\n\n        border: 3px solid black !important;\n        position: absolute;\n        width: 300px;\n        right: 37px;\n        top: 150px;\n        height: 200px;\n    }\n    .todo-description-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n\n        border: 1px solid purple;\n    }\n    .todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .todo-description-window > div:nth-child(2){ /* Details Container */\n        display: flex;\n        flex-direction: column;\n        gap: 5px; \n\n        border: 1px solid darkgreen; \n        padding: 5px;\n    }\n    .todo-description-window > div:nth-child(2) > div{\n        border: 1px solid pink;\n    }\n\n    /* |Edit Todo Window| */\n    .edit-todo-window{\n        border: 1px solid black;\n        position: absolute;\n        width: 300px;\n        height: 350px;\n        top: 150px;\n        right: 37px;\n        text-align: center;\n    }\n    .edit-todo-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n\n        border: 1px solid blue;\n    }\n    .edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .edit-todo-window > form{ /* Edit Section (Form)*/\n        padding: 10px;\n    }\n    .edit-todo-window > form > div\n    {\n        border: 1px solid lightblue;\n    }\n    .edit-todo-window > form > div > label{\n        display: block; \n    }\n\n    /* |Project Section| */\n    .project-section{\n        border: 1px solid orangered;\n        padding: 10px;\n    }\n    .project-section > div:nth-child(1){ /* Add Todo Container */\n        display: flex;\n        justify-content: end;\n\n        border: 1px solid yellow;\n    }\n    .project-section > div:nth-child(1) > img[src]{ /* Add Todo Button */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n\n    /* |Add Todo Window (project Section)| */\n    .add-todo-window{\n        position: absolute;\n        width: 250px;\n        height: 300px;\n        top: 100px;\n        border: 1px solid lightseagreen;\n    }\n    .add-todo-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end;\n\n        border: 1px solid blue;\n    }\n    .add-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n\n    .add-todo-window > form { /* Add Todo Section (Form) */\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n    .add-todo-window > form > div > label{\n        display: block; \n        text-align: center;\n    }\n    .add-todo-window > form > div > h4{\n        text-align: center;\n        margin: 0;\n    }\n\n    /* |Delete Project Window (Project Section)| */\n    .delete-project-window{ \n        position: absolute;\n        top: 100px;\n        width: 250px;\n        height: 300px;\n        border: 1px solid lightsalmon;\n    }\n    .delete-project-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end; \n\n        border: 1px solid orange;\n    }\n    .delete-project-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n\n    .delete-project-window > div:nth-child(2){ /* Delete Prompt Container */\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        border: 1px solid black;\n    }\n    .delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */\n        color: red; \n    }\n    .delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */\n        color: red;\n    }\n\n    /* |Project Todos Section| */\n    .project-todos-section{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        border: 1px solid green;\n    }\n    .project-todos-section > div{ /* Project Todos */\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n        border: 1px solid gold;\n    }\n    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */\n        display: flex;\n        justify-content: space-evenly;\n        gap: 5px;\n    }\n    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Porject Todo Buttons */\n        width: 40px;\n        height: 40px;\n    }\n\n    /* |Project Todo Details Window| */\n    .project-todo-details-window{\n        position:absolute;\n        width: 250px;\n        height: 300px;\n        top: 100px; \n        border: 1px solid black;\n    }\n    .project-todo-details-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end;\n\n        border: 1px solid orange;\n    }\n    .project-todo-details-window > div:nth-child(1) > img[src]{ /* Close Button */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .project-todo-details-window > div:nth-child(2){ /* Details Container (Description|Due Date|Priority) */\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n\n        border: 1px solid blue;\n    }\n\n    /* |Project Todo Edit Window| */\n    .project-todo-edit-window{\n        border: 1px solid black;\n        width: 250px;\n        height: 300px;\n        position: absolute;\n        top: 100px;\n    }\n    .project-todo-edit-window > div:nth-child(1){\n        display: flex;\n        justify-content: end;\n        \n        border: 1px solid gold;\n    }\n    .project-todo-edit-window > div:nth-child(1) > img[src]{\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DisplayProjectTodos.js":
/*!********************************************!*\
  !*** ./src/modules/DisplayProjectTodos.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayProjectTodos: () => (/* binding */ DisplayProjectTodos)
/* harmony export */ });
/* harmony import */ var _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete-outline.svg */ "./src/images/delete-outline.svg");
/* harmony import */ var _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/note-outline.svg */ "./src/images/note-outline.svg");
/* harmony import */ var _images_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/note-edit-outline.svg */ "./src/images/note-edit-outline.svg");
/* harmony import */ var _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/TodoMatcher */ "./src/utils/TodoMatcher.js");
/* harmony import */ var _ProjectContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectContent */ "./src/modules/ProjectContent.js");
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");


 








// DisplayProjectTodos(): Will display all the project todos from each project. 
function DisplayProjectTodos(){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    const projectSection = document.querySelector('.project-section');

    projectArray.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const projectTodosSection = document.createElement('div');
            projectTodosSection.classList.add('project-todos-section');
            
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const projectTodo = document.createElement('div');

                const projectTodoName = document.createElement('div');
                projectTodoName.textContent = `${todoArray[i].name}`;

                projectTodo.appendChild(projectTodoName); 

                const projectTodoButtons = document.createElement('div');

                const detailsImageButton = new Image();
                detailsImageButton.src = _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
                detailsImageButton.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_5__.ProjectTodoDetailsWindow); 
                
                const editImageButton = new Image();
                editImageButton.src = _images_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
                editImageButton.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_5__.ProjectTodoEditWindow); 
    
                const deleteImageButton = new Image();
                deleteImageButton.src = _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
                deleteImageButton.addEventListener('click', _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_6__.DeleteStoredTodoProject);
    
                projectTodoButtons.appendChild(detailsImageButton);
                projectTodoButtons.appendChild(editImageButton);
                projectTodoButtons.appendChild(deleteImageButton);
    
                projectTodo.appendChild(projectTodoButtons); 
    
                projectTodosSection.appendChild(projectTodo); 
    
                projectSection.appendChild(projectTodosSection); 
            }
        }
    });
}

/***/ }),

/***/ "./src/modules/DisplayTodos.js":
/*!*************************************!*\
  !*** ./src/modules/DisplayTodos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewTodos: () => (/* binding */ ViewTodos)
/* harmony export */ });
/* harmony import */ var _images_window_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/window-close.svg */ "./src/images/window-close.svg");
/* harmony import */ var _TodoContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoContent */ "./src/modules/TodoContent.js");
/* harmony import */ var _utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ButtonActivation */ "./src/utils/ButtonActivation.js");






// ViewTodos(): Will display all the todos in the application.
function ViewTodos(e){
    ClearInputSection();
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button"; 
    const viewTodoButton = document.querySelector('.main-screen > div:nth-child(1) > button:nth-child(4)');
    viewTodoButton.classList.add('current-button'); // When (e) is not applicable. 

    Todos(); 
}

// Todos(): All the todos in the application. (Note: Called again after editing the todo.)
function Todos(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-section'); 
    
    inputSection.appendChild(todoSection); 

    const todos = JSON.parse(localStorage.getItem('todos')); 
    console.log('Todos on display: ', todos); // Testing
    console.log('\n'); // Testing

    todos.forEach((todo, index) => {
        const todoRow = document.createElement('div');
        todoRow.dataset.userTodo = index; 
        
        const todoName = document.createElement('div');
        todoName.textContent = `${todo.name}`;

        const todoDescription = document.createElement('button');
        todoDescription.textContent = 'Details';
        todoDescription.addEventListener('click', TodoDescription); 

        const editTodo = document.createElement('button');
        editTodo.textContent = 'Edit';
        editTodo.addEventListener('click', _TodoContent__WEBPACK_IMPORTED_MODULE_1__.EditTodo);

        const deleteTodo = document.createElement('button');
        deleteTodo.textContent = `Del`;
        deleteTodo.addEventListener('click', _TodoContent__WEBPACK_IMPORTED_MODULE_1__.DeleteTodo);

        todoRow.appendChild(todoName);
        todoRow.appendChild(todoDescription);
        todoRow.appendChild(editTodo); 
        todoRow.appendChild(deleteTodo);  

        todoSection.appendChild(todoRow); 
    });
}

// TodoDescription(): Will display the details about the todo.
function TodoDescription(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

    const todoDescriptionWindow = document.createElement('div');
    todoDescriptionWindow.classList.add('todo-description-window');

    const closeContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_0__;
    closeContainer.appendChild(closeButtonImage); 

    const detailsContainer = document.createElement('div');

    todoDescriptionWindow.appendChild(closeContainer);
    todoDescriptionWindow.appendChild(detailsContainer); 

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
        if (todo.name === e.target.parentNode.children[0].textContent)
        {
            const detailsSectionOne = document.createElement('div');
            const descriptionTitle = document.createElement('div');
            descriptionTitle.textContent = 'Description:';
            const description = document.createElement('div');
            description.textContent = todo.description;
            detailsSectionOne.appendChild(descriptionTitle); 
            detailsSectionOne.appendChild(description);

            const detailsSectionTwo = document.createElement('div');
            const dueDateTitle = document.createElement('div');
            dueDateTitle.textContent = "Due Date:";
            const dueDate = document.createElement('div');
            dueDate.textContent = todo.dueDate;
            detailsSectionTwo.appendChild(dueDateTitle); 
            detailsSectionTwo.appendChild(dueDate);

            const detailsSectionThree = document.createElement('div');
            const priorityTitle = document.createElement('div');
            priorityTitle.textContent = "Priority:";
            const priority = document.createElement('div'); 
            priority.textContent = todo.priority;
            detailsSectionThree.appendChild(priorityTitle);
            detailsSectionThree.appendChild(priority); 

            detailsContainer.appendChild(detailsSectionOne);
            detailsContainer.appendChild(detailsSectionTwo);
            detailsContainer.appendChild(detailsSectionThree);
        }
    });

    mainScreen.setAttribute('style', 'filter: blur(10px);'); // Blur the background 
    mainScreen.classList.add('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.DisableButtons)();

    content.appendChild(todoDescriptionWindow);

    closeButtonImage.addEventListener('click', RemoveTodoDescription);
}

// RemoveTodoDescription(): Will remove the todo description window
function RemoveTodoDescription(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const todoDescriptionWindow = document.querySelector('.todo-description-window');
    const closeButtonImage = document.querySelector('.todo-description-window > div:nth-child(1) > img[src]');
    
    content.removeChild(todoDescriptionWindow); 

    mainScreen.removeAttribute('style'); // Remove blur background
    mainScreen.classList.remove('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', RemoveTodoDescription);
}

// ClearInputSection(): Clears the input section.
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    
    buttons.forEach(button => button.classList.remove('current-button')); 
    projects.forEach(button => button.classList.remove('current-button')); 
}

/***/ }),

/***/ "./src/modules/Dom-Content.js":
/*!************************************!*\
  !*** ./src/modules/Dom-Content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayProjects: () => (/* binding */ DisplayProjects),
/* harmony export */   InitializeDomContent: () => (/* binding */ InitializeDomContent)
/* harmony export */ });
/* harmony import */ var _TodoContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoContent */ "./src/modules/TodoContent.js");
/* harmony import */ var _ProjectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectContent */ "./src/modules/ProjectContent.js");
/* harmony import */ var _NoteContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContent */ "./src/modules/NoteContent.js");
/* harmony import */ var _DisplayTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayTodos */ "./src/modules/DisplayTodos.js");




 


// InitializeDomContent(): Initalizing all dom dontent for the application. 
function InitializeDomContent(){
    MainTitle();

    MainScreen(); 

    ButtonSection();

    InputSection();

    DisplayProjects();
}

// MainTitle(): The main title for the application.
function MainTitle(){
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "The Todo List";

    const content = document.getElementById('content');
    
    content.appendChild(mainTitle); 
}

// MainScreen(): The main todo list screen.
function MainScreen(){
    const mainScreen = document.createElement('div');
    mainScreen.classList.add('main-screen');
    
    const content = document.getElementById('content'); 

    content.appendChild(mainScreen);
}

// ButtonSection(): The main button section for the todo list.
function ButtonSection(){
    const buttonSection = document.createElement('div');

    const mainScreen = document.querySelector('.main-screen');
    mainScreen.appendChild(buttonSection);

    TodoButton();

    ProjectButton(); 

    NotesButton();

    ViewTodosButton();
    
    ViewNotesButton(); 
}

// InputSection(): The main input section for the todo list.
function InputSection(){
    const inputSection = document.createElement('div');
    inputSection.textContent = "Create New Todo's";

    const mainScreen = document.querySelector('.main-screen');

    mainScreen.appendChild(inputSection);
}

// TodoButton(): The todo list button.
function TodoButton(){
    const todoButton = document.createElement('button');
    todoButton.textContent = 'New Todo';
    
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    buttonSection.appendChild(todoButton); 

    todoButton.addEventListener('click', _TodoContent__WEBPACK_IMPORTED_MODULE_0__.InputTodo);
}

// ProjectButton(): The project button.
function ProjectButton(){
    const projectButton = document.createElement('button');
    projectButton.textContent = 'New Project';

    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)'); 
    buttonSection.appendChild(projectButton);

    projectButton.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_1__.InputProject); 
}

// NotesButton(): The notes button. 
function NotesButton(){
    const notesButton = document.createElement('button');
    notesButton.textContent = "New Note";

    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    buttonSection.appendChild(notesButton);

    notesButton.addEventListener('click', _NoteContent__WEBPACK_IMPORTED_MODULE_2__.InputNotes); 
}

// ViewTodosButton(): Button will allow the users to view all the current todos.
function ViewTodosButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');

    const viewTodosButton = document.createElement('button');
    viewTodosButton.textContent = 'View Todos';

    buttonSection.appendChild(viewTodosButton); 

    viewTodosButton.addEventListener('click', _DisplayTodos__WEBPACK_IMPORTED_MODULE_3__.ViewTodos); 
}

// ViewNotesButton(): Button will allow the user to view all the current notes.
function ViewNotesButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');

    const viewNotesButton = document.createElement('button');
    viewNotesButton.textContent = 'View Notes';

    buttonSection.appendChild(viewNotesButton);
}

// DisplayProjects(): Will display all the current projects.
function DisplayProjects(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    
    const displayProjects = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = "Projects";
    displayProjects.appendChild(title); 

    buttonSection.appendChild(displayProjects); 

    const projects = JSON.parse(localStorage.getItem('projects'));

    if (projects !== null)
    {
        projects.forEach((project) => {
            const projectButton = document.createElement('button');
            projectButton.textContent = `${project.projectName}`;
    
            displayProjects.appendChild(projectButton); 
    
            projectButton.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_1__.ProjectClicked);
        });
    }
}



/***/ }),

/***/ "./src/modules/NoteContent.js":
/*!************************************!*\
  !*** ./src/modules/NoteContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputNotes: () => (/* binding */ InputNotes)
/* harmony export */ });
// InputNote(): Will allow the user to input notes into the application.
function InputNotes(e){
    ClearInputSection();
    RemovePreviousSelectedButton(); 

    e.target.classList.value = 'current-button'; 

    NoteForm(); 
    NoteInput(); 
    NoteSubmit();
}

// NoteForm(): Creates the user note form.
function NoteForm(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    
    const noteForm = document.createElement('form');

    inputSection.appendChild(noteForm); 
}

// NoteInput(): Creates the the user input for notes. 
function NoteInput(){
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 

    const noteFormSectionOne = document.createElement('div');
    const noteInputLabel = document.createElement('label');
    noteInputLabel.textContent = 'Enter Notes';
    noteInputLabel.setAttribute('for', 'note-input');
    const noteInput = document.createElement('textarea');
    noteInput.setAttribute('type', 'text');
    noteInput.setAttribute('name', 'note-input');
    noteInput.setAttribute('id', 'note-input'); 

    noteFormSectionOne.appendChild(noteInputLabel);
    noteFormSectionOne.appendChild(noteInput);

    noteForm.appendChild(noteFormSectionOne); 
}

// NoteSubmit(): Creates the submit button. 
function NoteSubmit(){
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const noteFormSectionTwo = document.createElement('div');
    const noteSubmit = document.createElement('button');
    noteSubmit.textContent = 'Submit'; 
    noteSubmit.setAttribute('type', 'submit');

    noteFormSectionTwo.appendChild(noteSubmit);

    noteForm.appendChild(noteFormSectionTwo);
}

// ClearInputSection(): Clears the input section
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    buttonSection.forEach(button => button.classList.remove('current-button'));
}

/***/ }),

/***/ "./src/modules/ProjectContent.js":
/*!***************************************!*\
  !*** ./src/modules/ProjectContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTodoToProject: () => (/* binding */ AddTodoToProject),
/* harmony export */   DeleteProject: () => (/* binding */ DeleteProject),
/* harmony export */   InputProject: () => (/* binding */ InputProject),
/* harmony export */   ProjectClicked: () => (/* binding */ ProjectClicked),
/* harmony export */   ProjectTodoDetailsWindow: () => (/* binding */ ProjectTodoDetailsWindow),
/* harmony export */   ProjectTodoEditWindow: () => (/* binding */ ProjectTodoEditWindow)
/* harmony export */ });
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/TodoMatcher */ "./src/utils/TodoMatcher.js");
/* harmony import */ var _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ButtonActivation */ "./src/utils/ButtonActivation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_window_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/window-close.svg */ "./src/images/window-close.svg");
/* harmony import */ var _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/delete-forever.svg */ "./src/images/delete-forever.svg");
/* harmony import */ var _DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DisplayProjectTodos */ "./src/modules/DisplayProjectTodos.js");








 






// InputProject(): Allows the user to input project information. 
function InputProject(e){
    ClearInputSection();
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button"; 

    ProjectForm();
    ProjectName(); 
    ProjectSubmit();
}

// ProjectForm(): Creates the user project form.
function ProjectForm(){
    const inputScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const projectForm = document.createElement('form');
    
    inputScreen.appendChild(projectForm); 
}

// ProjectName(): Creates the user project input for the name.
function ProjectName(){
    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const projectFormSectionOne = document.createElement('div');

    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = "Project Name";
    projectNameLabel.setAttribute('for', 'project-name');
    const projectName = document.createElement('input'); 
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'project-name');
    projectName.setAttribute('name', 'project-name');

    projectFormSectionOne.appendChild(projectNameLabel);
    projectFormSectionOne.appendChild(projectName); 

    projectForm.appendChild(projectFormSectionOne); 
}

// ProjectSubmit(): Creates the user project submit button.
function ProjectSubmit(){
    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    
    const projectFormSectionTwo = document.createElement('div'); 
    const projectSubmit = document.createElement('button');
    projectSubmit.textContent = "Submit"; 
    projectSubmit.setAttribute('type', 'submit');
    
    projectFormSectionTwo.appendChild(projectSubmit); 

    projectForm.appendChild(projectFormSectionTwo); 

    projectSubmit.addEventListener('click', ProjectSubmitted);
}

// ProjectSubmitted(): Submitting the project into the local storage.
function ProjectSubmitted(e){
    e.preventDefault();
    console.log(e); // Testing
    console.log(e.target); // Testing 

    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    const projectName = document.getElementById('project-name');
    (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreProjects)(projectName.value);

    projectForm.reset();
}

// ProjectClicked(): Brings up the project content when clicked in the display projects section.
function ProjectClicked(e){
    console.log(e); // Testing
    console.log(e.target); // Testing
    console.log('\n'); // Testing
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)'); 

    _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher = e.target.textContent; 
    
    ClearInputSection();
    RemovePreviousSelectedButton(); 

    e.target.classList.add('current-button'); 

    // Todo: Add project content from the project that the user has clicked on in here.
    // Note: You may be able to put this into a different function.
    // Note: 3-5-2024 ~ You will showcase all the todos from each project here. 
    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section');
    
    inputSection.appendChild(projectSection); 

    AddTodoToProject();
    DeleteProject(); 

    (0,_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_7__.DisplayProjectTodos)(); 
}

// DeleteProject(): Button will delete the current project that the user has clicked on.
function DeleteProject(){
    const addTodoContainer = document.querySelector('.project-section > div:nth-child(1)');
    const deleteProjectButton = new Image();
    deleteProjectButton.src = _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_6__;
    addTodoContainer.appendChild(deleteProjectButton);

    deleteProjectButton.addEventListener('click', DeleteProjectWindow); 
}

// DeleteProjectWindow(): Will bring the delete project to prompt the user about deleting the project. 
function DeleteProjectWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const deleteProjectWindow = document.createElement('div');
    deleteProjectWindow.classList.add('delete-project-window');
    
    content.appendChild(deleteProjectWindow);

    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.DisableButtons)(); 

    // Close Window Button:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_5__;
    closeButtonContainer.appendChild(closeButtonImage); 
    deleteProjectWindow.appendChild(closeButtonContainer); 

    // Delete Prompt:
    const deletePromptContainer = document.createElement('div'); 
    const deletePromptMssg = document.createElement('p');
    deletePromptMssg.textContent = 'Continue with project deletion?';
    deletePromptContainer.appendChild(deletePromptMssg);
    deleteProjectWindow.appendChild(deletePromptContainer); 

    // Delete Project (Yes Button):
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Yes';
    deletePromptContainer.appendChild(deleteButton); 
    deleteButton.addEventListener('click', _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.DeleteStoredProject);

    closeButtonImage.addEventListener('click', CloseDeleteProjectWindow); 
}

// CloseDeleteProjectWindow(): Will close the delete project window.
function CloseDeleteProjectWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window'); 
    const closeButtonImage = document.querySelector('.delete-project-window > div:nth-child(1) > img[src]');

    content.removeChild(deleteProjectWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', CloseDeleteProjectWindow); 
}

// AddTodoToProject(): The add todo plus button will add todos to the project.  
function AddTodoToProject(){
    const projectSection = document.querySelector('.project-section'); 
    const addTodoContainer = document.createElement('div');
    const addTodoButton = new Image();
    addTodoButton.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__;
    addTodoContainer.appendChild(addTodoButton); 
    projectSection.appendChild(addTodoContainer); 

    addTodoButton.addEventListener('click', AddTodoWindow);
}

// AddTodo(): The add todo window will showcase all the form fields to add the todo content to the project. 
function AddTodoWindow(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const addTodoWindow = document.createElement('div');
    addTodoWindow.classList.add('add-todo-window'); 

    content.appendChild(addTodoWindow);

    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_5__;
    closeButtonContainer.appendChild(closeButtonImage); 

    const addTodoForm = document.createElement('form');

    const addTodoSectionOne = document.createElement('div');
    const addTodoNameLabel = document.createElement('label');
    addTodoNameLabel.textContent = "Name";
    addTodoNameLabel.setAttribute('for', 'add-todo-name');
    const addTodoName = document.createElement('input');
    addTodoName.setAttribute('type', 'text');
    addTodoName.setAttribute('id', 'add-todo-name');
    addTodoName.setAttribute('name', 'add-todo-name'); 
    addTodoSectionOne.appendChild(addTodoNameLabel);
    addTodoSectionOne.appendChild(addTodoName); 

    const addTodoSectionTwo = document.createElement('div');
    const addTodoDescriptionLabel = document.createElement('label');
    addTodoDescriptionLabel.textContent  = "Description";
    addTodoDescriptionLabel.setAttribute('for', 'add-todo-description');
    const addTodoDescription = document.createElement('textarea');
    addTodoDescription.setAttribute('type', 'text');
    addTodoDescription.setAttribute('id', 'add-todo-description'); 
    addTodoDescription.setAttribute('name', 'add-todo-description'); 
    addTodoSectionTwo.appendChild(addTodoDescriptionLabel);
    addTodoSectionTwo.appendChild(addTodoDescription); 

    const addTodoSectionThree = document.createElement('div');
    const addTodoDueDateLabel = document.createElement('label');
    addTodoDueDateLabel.textContent = "Due Date";
    addTodoDueDateLabel.setAttribute('for', 'add-todo-due-date');
    const addTodoDueDate = document.createElement('input');
    addTodoDueDate.setAttribute('type', 'date');
    addTodoDueDate.setAttribute('id', 'add-todo-due-date');
    addTodoDueDate.setAttribute('name', 'add-todo-due-date');
    addTodoSectionThree.appendChild(addTodoDueDateLabel);
    addTodoSectionThree.appendChild(addTodoDueDate); 

    const addTodoSectionFour = document.createElement('div');
    const addTodoPriorityLabel = document.createElement('h4'); 
    addTodoPriorityLabel.textContent = "Priority"; 
    const addTodoPriority = document.createElement('div');
    const lowPriority = document.createElement('button');
    lowPriority.textContent = 'Low';
    lowPriority.setAttribute('type', 'button');
    lowPriority.addEventListener('click', AddLowPriority);
    const medPriority = document.createElement('button');
    medPriority.textContent = 'Med';
    medPriority.setAttribute('type', 'button');
    medPriority.addEventListener('click', AddMedPriority); 
    const highPriority = document.createElement('button');
    highPriority.textContent = 'High';
    highPriority.setAttribute('type', 'button');
    highPriority.addEventListener('click', AddHighPriority);
    addTodoPriority.appendChild(lowPriority);
    addTodoPriority.appendChild(medPriority);
    addTodoPriority.appendChild(highPriority); 
    addTodoSectionFour.appendChild(addTodoPriorityLabel); 
    addTodoSectionFour.appendChild(addTodoPriority); 

    const addTodoSectionFive = document.createElement('div');
    const addTodoSubmit = document.createElement('button');
    addTodoSubmit.textContent = "Submit";
    addTodoSubmit.setAttribute('type', 'submit');
    addTodoSectionFive.appendChild(addTodoSubmit);

    addTodoForm.appendChild(addTodoSectionOne); 
    addTodoForm.appendChild(addTodoSectionTwo); 
    addTodoForm.appendChild(addTodoSectionThree); 
    addTodoForm.appendChild(addTodoSectionFour);
    addTodoForm.appendChild(addTodoSectionFive);  

    closeButtonImage.addEventListener('click', CloseAddTodoWindow);

    addTodoSubmit.addEventListener('click', SubmitAddTodo);
    
    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.DisableButtons)(); 

    addTodoWindow.appendChild(closeButtonContainer); 
    addTodoWindow.appendChild(addTodoForm); 
}

// AddLowPriority(): Adds a low priority to the todo.
function AddLowPriority(){
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');

    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    lowPriority.classList.add('priority-chosen');
}

// AddMedPriority(): Adds a med priority to the todo.
function AddMedPriority(){
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)'); 
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');

    lowPriority.classList.remove('priority-chosen'); 
    highPriority.classList.remove('priority-chosen'); 

    medPriority.classList.add('priority-chosen');
}

// AddHighPriority(): Adds a high priority to the todo. 
function AddHighPriority(){
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)'); 

    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen');

    highPriority.classList.add('priority-chosen'); 
}

// SubmitAddTodo(): Will submit all the data to the project. 
function SubmitAddTodo(e){
    e.preventDefault();
    
    const addTodoName = document.getElementById('add-todo-name'); 
    const addTodoDescription = document.getElementById('add-todo-description');
    const addTodoDueDate = document.getElementById('add-todo-due-date'); 
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');
    const content = document.getElementById('content');
    const addTodoWindow = document.querySelector('.add-todo-window'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const projectSection = document.querySelector('.project-section'); 
    let priority = "";

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    console.log(projectArray); //Testing 


    if (lowPriority.classList.contains('priority-chosen'))
    {
        priority = "Low";
    }
    else if (medPriority.classList.contains('priority-chosen'))
    {
        priority = "Med";
    }
    else if (highPriority.classList.contains('priority-chosen'))
    {
        priority = "High";
    }

    if (addTodoName.value === "" || addTodoDescription.value === "" || addTodoDueDate.value === "" || priority === "")
    {
        console.log("Some of the fields are missing"); // Testing 
        console.log("Please fill in all the fields..."); // Testing
        return; 
    }

    let dueDate = new Date(addTodoDueDate.value);
    console.log('Full Date: ', dueDate); // Testing 
    console.log("User Year: ", dueDate.getFullYear()); // Testing
    console.log("User Month: ", dueDate.getMonth()); // Testing
    console.log("User Date: ", dueDate.getDate() + 1); // Testing
    console.log('\n'); // Testing

    let currentDate = new Date();
    console.log('Current Full Date: ', currentDate); // Testing
    console.log("Current Year: ", currentDate.getFullYear()); // Testing
    console.log("Current Month: ", currentDate.getMonth()); // Testing
    console.log("Current Date: ", currentDate.getDate()); // Testing 
    console.log('\n'); // Testing

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    console.log("Result: ", result); // Testing 
    console.log('\n'); // Testing 

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        projectArray.forEach((project) => {
            if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
            {
                project.todos.push({name: addTodoName.value, description: addTodoDescription.value, dueDate: reformattedDueDate, priority: priority});
            }
        });

        localStorage.removeItem('projects'); 
        localStorage.setItem('projects', JSON.stringify(projectArray));
        console.log('Current Storage: ', JSON.parse(localStorage.getItem('projects'))); // Testing 
        console.log('\n'); // Testing 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker'); 
        (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)(); 
        content.removeChild(addTodoWindow); 

        projectSection.replaceChildren();
        AddTodoToProject(); 
        DeleteProject(); 
        (0,_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_7__.DisplayProjectTodos)(); 
    }
    // TODO: 3-05-2024 ~ Will need to create a popup note that tells the user if the date is behind, and when one of the
    // fields is empty.  
}

// RemoveAddTodo(): Will close the add todo window.
function CloseAddTodoWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const addTodoWindow = document.querySelector('.add-todo-window');
    const closeButtonImage = document.querySelector('.add-todo-window > div:nth-child(1) > img[src]');

    content.removeChild(addTodoWindow);
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', CloseAddTodoWindow); 
}

// AddTodoDetails(): Details about the todo added to the project.
function ProjectTodoDetailsWindow(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoDetailsWindow = document.createElement('div');
    projectTodoDetailsWindow.classList.add('project-todo-details-window');

    content.appendChild(projectTodoDetailsWindow); 

    // Close Button Section
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_5__;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoDetailsWindow.appendChild(closeButtonContainer); 
    closeButtonImage.addEventListener('click', CloseProjectTodoDetailsWindow);

    // Details Section
    const projectTodoDetails = document.createElement('div'); 
    const projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects); // Testing
    projects.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todoObject = todoArray[i];

                if (todoObject.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    const projectTodoDescriptionSection = document.createElement('div');
                    const projectTodoDescriptionLabel = document.createElement('div');
                    projectTodoDescriptionLabel.textContent = "Description";
                    const projectTodoDescription = document.createElement('div');
                    projectTodoDescription.textContent = `${todoObject.description}`;
                    projectTodoDescriptionSection.appendChild(projectTodoDescriptionLabel);
                    projectTodoDescriptionSection.appendChild(projectTodoDescription); 
                    
                    const projectTodoDueDateSection = document.createElement('div');
                    const projectTodoDueDateLabel = document.createElement('div');
                    projectTodoDueDateLabel.textContent = 'Due Date'; 
                    const projectTodoDueDate = document.createElement('div');
                    projectTodoDueDate.textContent = `${todoObject.dueDate}`;
                    projectTodoDueDateSection.appendChild(projectTodoDueDateLabel);
                    projectTodoDueDateSection.appendChild(projectTodoDueDate); 

                    const projectTodoPrioritySection = document.createElement('div');
                    const projectTodoPriorityLabel = document.createElement('div');
                    projectTodoPriorityLabel.textContent = "Priority";
                    const projectTodoPriority = document.createElement('div');
                    projectTodoPriority.textContent = `${todoObject.priority}`;
                    projectTodoPrioritySection.appendChild(projectTodoPriorityLabel);
                    projectTodoPrioritySection.appendChild(projectTodoPriority); 
                    
                    projectTodoDetails.appendChild(projectTodoDescriptionSection);
                    projectTodoDetails.appendChild(projectTodoDueDateSection);
                    projectTodoDetails.appendChild(projectTodoPrioritySection);
                }
            }
        }
    });
    projectTodoDetailsWindow.appendChild(projectTodoDetails); 

    mainScreen.setAttribute('style', 'filter:blur(10px);');
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.DisableButtons)(); 
}

// CloseProjectTodoDetailsWindow(): Will close the project todo details window.
function CloseProjectTodoDetailsWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const projectTodoDetailsWindow = document.querySelector('.project-todo-details-window'); 
    
    content.removeChild(projectTodoDetailsWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)();
}

// ProjectTodoEditWindow(): User can edit the projects todo content.
function ProjectTodoEditWindow(e){
    console.log(e); // Testing
    console.log(e.target); // Testing
    console.log(e.target.parentNode.parentNode.childNodes[0].textContent); // Testing 

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoEditWindow = document.createElement('div');
    projectTodoEditWindow.classList.add('project-todo-edit-window');

    content.appendChild(projectTodoEditWindow);

    // Close Button Section:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_5__;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoEditWindow.appendChild(closeButtonContainer); 

    // Edit Todo Section:
    const projectTodoEdit = document.createElement('form');

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todo = todoArray[i];

                if (todo.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    // Collecting the todo index: 
                    _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.editedTodoIndex = i; 

                    // Edit Name:
                    const projectTodoEditSectionOne = document.createElement('div');
                    const projectTodoEditNameLabel = document.createElement('label');
                    projectTodoEditNameLabel.setAttribute('for', 'edit-project-name-todo');
                    projectTodoEditNameLabel.textContent = "Edit Name";
                    const projectTodoEditName = document.createElement('input');
                    projectTodoEditName.setAttribute('type', 'text');
                    projectTodoEditName.setAttribute('id', 'edit-project-name-todo');
                    projectTodoEditName.setAttribute('name', 'edit-project-name-todo'); 
                    projectTodoEditName.setAttribute('value', `${todo.name}`); 
                    projectTodoEditSectionOne.appendChild(projectTodoEditNameLabel);
                    projectTodoEditSectionOne.appendChild(projectTodoEditName); 
                    projectTodoEdit.appendChild(projectTodoEditSectionOne); 

                    // Edit Description:
                    const projectTodoEditSectionTwo = document.createElement('div');
                    const projectTodoEditDescriptionLabel = document.createElement('label');
                    projectTodoEditDescriptionLabel.setAttribute('for', 'edit-project-todo-description');
                    projectTodoEditDescriptionLabel.textContent = "Edit Description"; 
                    const projectTodoEditDescription = document.createElement('textarea');
                    projectTodoEditDescription.setAttribute('id', 'edit-project-todo-description');
                    projectTodoEditDescription.setAttribute('name', 'edit-project-todo-description');
                    projectTodoEditDescription.innerHTML = `${todo.description}`;
                    projectTodoEditSectionTwo.appendChild(projectTodoEditDescriptionLabel);
                    projectTodoEditSectionTwo.appendChild(projectTodoEditDescription);
                    projectTodoEdit.appendChild(projectTodoEditSectionTwo);

                    // Edit Due Date: 
                    const d = new Date(`${todo.dueDate}`);
                    let dMonth = String(d.getMonth() + 1); 
                    let dYear = String(d.getFullYear()); 
                    let dDate = String(d.getDate());
                    if (d.getMonth() < 10)
                    {
                        dMonth = '0' + String(d.getMonth() + 1);
                    }

                    if (d.getDate() < 10)
                    {
                        dDate = '0' + String(d.getDate()); 
                    }
                    const projectTodoEditSectionThree = document.createElement('div');
                    const projectTodoEditDueDateLabel = document.createElement('label');
                    projectTodoEditDueDateLabel.setAttribute('for', 'edit-project-todo-due-date');
                    projectTodoEditDueDateLabel.textContent = 'Edit Due Date';
                    const projectTodoEditDueDate = document.createElement('input');
                    projectTodoEditDueDate.setAttribute('type', 'date');
                    projectTodoEditDueDate.setAttribute('id', 'edit-project-todo-due-date');
                    projectTodoEditDueDate.setAttribute('name', 'edit-project-todo-due-date'); 
                    projectTodoEditDueDate.setAttribute('value', `${dYear}-${dMonth}-${dDate}`);
                    projectTodoEditSectionThree.appendChild(projectTodoEditDueDateLabel);
                    projectTodoEditSectionThree.appendChild(projectTodoEditDueDate); 
                    projectTodoEdit.appendChild(projectTodoEditSectionThree); 

                    // Edit Priority:
                    const projectTodoEditSectionFour = document.createElement('div');
                    const projectTodoEditPriorityLabel = document.createElement('h4');
                    projectTodoEditPriorityLabel.textContent = 'Edit Priority'; 
                    const projectTodoEditPriority = document.createElement('div');
                    const lowPriority = document.createElement('button');
                    lowPriority.setAttribute('type', 'button');
                    lowPriority.textContent = 'Low';
                    lowPriority.addEventListener('click', EditProjectTodoPriority);
                    const medPriority = document.createElement('button');
                    medPriority.setAttribute('type', 'button');
                    medPriority.textContent = 'Med';
                    medPriority.addEventListener('click', EditProjectTodoPriority);
                    const highPriority = document.createElement('button');
                    highPriority.setAttribute('type', 'button');
                    highPriority.textContent = 'High';
                    highPriority.addEventListener('click', EditProjectTodoPriority); 
                    if (todo.priority === lowPriority.textContent)
                    {
                        lowPriority.classList.add('priority-chosen');
                    }
                    else if (todo.priority === medPriority.textContent)
                    {
                        medPriority.classList.add('priority-chosen'); 
                    }
                    else if (todo.priority === highPriority.textContent)
                    {
                        highPriority.classList.add('priority-chosen'); 
                    }    
                    projectTodoEditPriority.appendChild(lowPriority);
                    projectTodoEditPriority.appendChild(medPriority);
                    projectTodoEditPriority.appendChild(highPriority);
                    projectTodoEditSectionFour.appendChild(projectTodoEditPriorityLabel);
                    projectTodoEditSectionFour.appendChild(projectTodoEditPriority); 
                    projectTodoEdit.appendChild(projectTodoEditSectionFour); 

                    // Sumbit Button:
                    const projectTodoEditSectionFive = document.createElement('div');
                    const projectTodoEditSubmit = document.createElement('button');
                    projectTodoEditSubmit.setAttribute('type', 'submit'); 
                    projectTodoEditSubmit.textContent = 'Submit';
                    projectTodoEditSubmit.addEventListener('click', SubmitEditedProjectTodo); 
                    projectTodoEditSectionFive.appendChild(projectTodoEditSubmit); 
                    projectTodoEdit.appendChild(projectTodoEditSectionFive); 
                }
            }
        }
    });
    projectTodoEditWindow.appendChild(projectTodoEdit); 

    mainScreen.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.DisableButtons)(); 

    closeButtonImage.addEventListener('click', CloseProjectTodoEditWindow);
}

// EditProjectTodoPriority(): Will allow the user to choose the priority for the project todo. 
function EditProjectTodoPriority(e){
    const lowPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.project-todo-edit-window > form > div:nth-child(4) > div > button:nth-child(3)');
    
    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen'); 
    highPriority.classList.remove('priority-chosen'); 

    e.target.classList.add('priority-chosen');  
}

// SubmitEditProjectTodo(): Will submit all the edited project todo data.
function SubmitEditedProjectTodo(e){
    e.preventDefault();

    const mainScreen = document.querySelector('.main-screen'); 
    const content = document.getElementById('content'); 
    const projectSection = document.querySelector('.project-section'); 
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window'); 
    const editedProjectTodoName = document.querySelector('.project-todo-edit-window > form > div:nth-child(1) > input');
    const editedProjectTodoDescription = document.querySelector('.project-todo-edit-window > form > div:nth-child(2) > textarea');
    const editedProjectTodoDueDate = document.querySelector('.project-todo-edit-window > form > div:nth-child(3) > input');
    const editedProjectTodoPriority = document.querySelectorAll('.project-todo-edit-window > form > div:nth-child(4) > div > button');
    let priority = ""; 

    editedProjectTodoPriority.forEach((button) => {
        if (button.classList.contains('priority-chosen'))
        {
            priority = button.textContent; 
        }
    });

    if (editedProjectTodoName.value === "" || editedProjectTodoDescription.value === "" || editedProjectTodoDueDate.value === "")
    {
        console.log('Please fill in the missing fields'); // Testing
        return;
    }

    // Todo: Work with the DueDate first. 
    const dueDate = new Date(editedProjectTodoDueDate.value);
    console.log('Full Edited Date: ', dueDate); // Testing
    console.log('Edited Year: ', dueDate.getFullYear()); // Testing
    console.log('Edited Month: ', dueDate.getMonth()); // Testing
    console.log('Edited Date: ', dueDate.getDate() + 1); // Testing
    console.log('\n'); // Testing 

    const currentDate = new Date();
    console.log('Full Current Date: ', currentDate); // Testing
    console.log('Current Year: ', currentDate.getFullYear()); // Testing
    console.log('Current Month: ', currentDate.getMonth()); // Testing
    console.log('Current Date: ', currentDate.getDate()); // Testing
    console.log('\n'); // Testing 

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
    console.log('Result: ', result); // Testing 
    console.log('\n'); // Testing

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreEditedTodoProjects)(editedProjectTodoName.value, editedProjectTodoDescription.value, reformattedDueDate, priority); 

        content.removeChild(projectTodoEditWindow); 

        projectSection.replaceChildren(); 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker');
        (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)();

        AddTodoToProject(); 
        (0,_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_7__.DisplayProjectTodos)(); 
    }
    // Note: Implement an else statement if the result of the due date is older than the current date. 


}

// CloseProjectTodoEditWindow(): Will close the project todo edit window.
function CloseProjectTodoEditWindow(){
    const content = document.getElementById('content');
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window');
    const mainScreen = document.querySelector('.main-screen');

    content.removeChild(projectTodoEditWindow);

    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)(); 
}

// ClearInputSection(): Clears the input section 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren();
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button'); // Button Section
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button'); // Display Project Section.  
    
    buttons.forEach((button) => button.classList.remove('current-button'));
    projects.forEach((button) => button.classList.remove('current-button')); 
}

/***/ }),

/***/ "./src/modules/TodoContent.js":
/*!************************************!*\
  !*** ./src/modules/TodoContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteTodo: () => (/* binding */ DeleteTodo),
/* harmony export */   EditTodo: () => (/* binding */ EditTodo),
/* harmony export */   InputTodo: () => (/* binding */ InputTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ButtonActivation */ "./src/utils/ButtonActivation.js");
/* harmony import */ var _DisplayTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayTodos */ "./src/modules/DisplayTodos.js");
/* harmony import */ var _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/TodoMatcher */ "./src/utils/TodoMatcher.js");
/* harmony import */ var _images_window_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/window-close.svg */ "./src/images/window-close.svg");







// InputTodo(): Allows the user to input todo information.
function InputTodo(e){
    ClearInputSection(); 
    RemovePreviousSelectedButton();

    e.target.classList.value = "current-button";

    TodoForm();
    TodoName(); 
    TodoDescription();
    TodoDueDate(); 
    TodoPriority(); 
    TodoSubmit();
}

// TodoForm(): Creates the todo form.
function TodoForm(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    
    const todoForm = document.createElement('form');
    
    inputSection.appendChild(todoForm); 
}

// TodoName(): The todo name section.
function TodoName(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionOne = document.createElement('div');
    const todoNameLabel = document.createElement('label');
    todoNameLabel.textContent = "Name";
    todoNameLabel.setAttribute('for', 'todo-name');
    const todoName = document.createElement('input');
    todoName.setAttribute('type', 'text');
    todoName.setAttribute('id', 'todo-name');
    todoName.setAttribute('name', 'todo-name');

    todoFormSectionOne.appendChild(todoNameLabel);
    todoFormSectionOne.appendChild(todoName); 

    todoForm.appendChild(todoFormSectionOne);
}

// TodoDescription(): The todo description section.
function TodoDescription(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    
    const todoFormSectionTwo = document.createElement('div'); 
    const todoDescriptionLabel = document.createElement('label'); 
    todoDescriptionLabel.textContent = "Description";
    todoDescriptionLabel.setAttribute('for', 'todo-description');
    const todoDescription = document.createElement('textarea');
    todoDescription.setAttribute('type', 'text');
    todoDescription.setAttribute('id', 'todo-description');
    todoDescription.setAttribute('name', 'todo-description');

    todoFormSectionTwo.appendChild(todoDescriptionLabel);
    todoFormSectionTwo.appendChild(todoDescription); 

    todoForm.appendChild(todoFormSectionTwo); 
}

// TodoDueDate(): The todo due date section.
function TodoDueDate(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionThree = document.createElement('div');
    const todoDueDateLabel = document.createElement('label');
    todoDueDateLabel.textContent = "Due Date";
    todoDueDateLabel.setAttribute('for', 'todo-due-date');
    const todoDueDate = document.createElement('input');
    todoDueDate.setAttribute('type', 'date');
    todoDueDate.setAttribute('id', 'todo-due-date');
    todoDueDate.setAttribute('name', 'todo-due-date'); 

    todoFormSectionThree.appendChild(todoDueDateLabel); 
    todoFormSectionThree.appendChild(todoDueDate);

    todoForm.appendChild(todoFormSectionThree);
}

// TodoPriority(): The todo priority section. 
function TodoPriority(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionFour = document.createElement('div');
    const todoPriorityLabel = document.createElement('h4');
    todoPriorityLabel.textContent = 'Priority'; 

    const todoPriority = document.createElement('div');
    const lowPriority = document.createElement('button');
    lowPriority.textContent = 'Low';
    lowPriority.setAttribute('type', 'button');
    const medPriority = document.createElement('button');
    medPriority.textContent = 'Med';
    medPriority.setAttribute('type', 'button');
    const highPriority = document.createElement('button'); 
    highPriority.textContent = 'High';
    highPriority.setAttribute('type', 'button'); 

    todoPriority.appendChild(lowPriority); 
    todoPriority.appendChild(medPriority); 
    todoPriority.appendChild(highPriority); 

    todoFormSectionFour.appendChild(todoPriorityLabel); 
    todoFormSectionFour.appendChild(todoPriority); 

    todoForm.appendChild(todoFormSectionFour);

    lowPriority.addEventListener('click', LowPriority);
    medPriority.addEventListener('click', MedPriority);
    highPriority.addEventListener('click', HighPriority); 
}

// LowPriority(): Low priority selection.
function LowPriority(e){
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)');
    
    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    e.target.classList.value = 'priority-chosen';
}

// MedPriority(): Med priority selection. 
function MedPriority(e){
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 

    lowPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen'); 

    e.target.classList.value = 'priority-chosen';
}

// HighPriority(): High priority selection. 
function HighPriority(e){
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');

    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen'); 

    e.target.classList.value = 'priority-chosen'; 
}

// TodoSubmit(): The todo submit section.
function TodoSubmit(){
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form');

    const todoFormSectionFive = document.createElement('div');
    const todoSubmit = document.createElement('button');
    todoSubmit.textContent = "Submit";
    todoSubmit.setAttribute('type', 'submit'); 

    todoFormSectionFive.appendChild(todoSubmit); 

    todoForm.appendChild(todoFormSectionFive); 

    todoSubmit.addEventListener('click', SubmitData);
}

// SubmitData(): Submit the todo data into the initial storage.
function SubmitData(e){
    e.preventDefault(); 
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const todoName = document.getElementById('todo-name');
    const todoDescription = document.getElementById('todo-description'); 
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 
    let priority = "";

    const todoDueDate = document.getElementById('todo-due-date');
    console.log(todoDueDate.value); // Testing
    const dueDate = new Date(todoDueDate.value); 
    console.log(dueDate); // Testing 
    console.log('Date: ', dueDate.getDate() + 1); // Testing
    console.log('Year: ', dueDate.getFullYear()); // Testing
    console.log('Month: ', dueDate.getMonth()); // Testing
    console.log('\n'); // Testing

    const currentDate = new Date();
    console.log('Current Date: ', currentDate); // Testing
    console.log('Current Day Date: ', currentDate.getDate()); // Testing
    console.log('Current Year: ', currentDate.getFullYear()); // Testing
    console.log('Current Month: ', currentDate.getMonth()); // Testing 
    console.log('\n');

    // Test if the due date is ahead of the current date. 
    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 
                   new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); 
    console.log('Comparisons Result: ', result); // Testing
    console.log('\n'); // Testing

    if (lowPriority.classList.contains('priority-chosen'))
    {
        priority = "Low";
    }
    else if (medPriority.classList.contains('priority-chosen'))
    {
        priority = "Med";
    }
    else if (highPriority.classList.contains('priority-chosen'))
    {
        priority = "High"; 
    }

    if (todoName.value === "" || priority === "" || todoDescription.value === "" || todoDueDate.value === "")
    {
        console.log("There is an empty field, please fill it in."); // Testing
        return; 
    }

    if (result === 1)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreTodos)(todoName.value, todoDescription.value, reformattedDueDate, priority);

        lowPriority.classList.remove('priority-chosen');
        medPriority.classList.remove('priority-chosen');
        highPriority.classList.remove('priority-chosen');
        todoForm.reset();

        // ViewTodos();
    }
}

// EditTodo(): Allows the user to edit the todo.
function EditTodo(e){
    console.log('Editing Todo...'); // Testing
    console.log(e.target); // Testing
    console.log(e); // Testing
    _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_3__.todoMatcher.matcher = e.target.childNodes[0].parentNode.parentNode.childNodes[0].innerHTML;

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const editTodoWindow = document.createElement('div');
    editTodoWindow.classList.add('edit-todo-window'); 

    const closeContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_4__;
    closeContainer.appendChild(closeButtonImage); 

    editTodoWindow.appendChild(closeContainer);

    const editForm = document.createElement('form');

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
        if (todo.name === e.target.parentNode.children[0].textContent)
        {
            const editFormSectionOne = document.createElement('div');
            const editNameLabel = document.createElement('label');
            editNameLabel.setAttribute('for', 'edit-name');
            editNameLabel.textContent = 'Edit Name'; 
            const editNameInput = document.createElement('input');
            editNameInput.setAttribute('type', 'text');
            editNameInput.setAttribute('id', 'edit-name');
            editNameInput.setAttribute('name', 'edit-name');
            editNameInput.setAttribute('value', `${todo.name}`);
            editFormSectionOne.appendChild(editNameLabel);
            editFormSectionOne.appendChild(editNameInput); 

            const editFormSectionTwo = document.createElement('div');
            const editDescriptionLabel = document.createElement('div');
            editDescriptionLabel.setAttribute('for', 'edit-description');
            editDescriptionLabel.textContent = 'Edit Description';
            const editDescriptionInput = document.createElement('textarea');
            editDescriptionInput.setAttribute('type', 'text');
            editDescriptionInput.setAttribute('id', 'edit-description');
            editDescriptionInput.setAttribute('name', 'edit-description');
            editDescriptionInput.innerHTML = `${todo.description}`;
            editFormSectionTwo.appendChild(editDescriptionLabel);
            editFormSectionTwo.appendChild(editDescriptionInput); 

            const d = new Date(`${todo.dueDate}`); 
            let dMonth = String(d.getMonth() + 1); 
            let dYear = String(d.getFullYear());
            let dDate = String(d.getDate()); 
            if (d.getMonth() < 10)
            {
                dMonth = '0' + String(d.getMonth() + 1);
            }
            
            if (d.getDate() < 10)
            {
                dDate = '0' + String(d.getDate());
            }
    
            const editFormSectionThree = document.createElement('div');
            const editDueDateLabel = document.createElement('label');
            editDueDateLabel.setAttribute('for', 'edit-due-date');
            editDueDateLabel.textContent = 'Edit Due Date';
            const editDueDateInput = document.createElement('input');
            editDueDateInput.setAttribute('type', 'date'); 
            editDueDateInput.setAttribute('id', 'edit-due-date');
            editDueDateInput.setAttribute('name', 'edit-due-date');
            editDueDateInput.setAttribute('value', `${dYear}-${dMonth}-${dDate}`);
            editFormSectionThree.appendChild( editDueDateLabel);
            editFormSectionThree.appendChild(editDueDateInput); 

            const editFormSectionFour = document.createElement('div');
            const editPriorityLabel = document.createElement('h4');
            editPriorityLabel.textContent = "Edit Priority"; 
            const editPriority = document.createElement('div');
            const editLowButton = document.createElement('button');
            editLowButton.setAttribute('type', 'button');
            editLowButton.addEventListener('click', EditPriority)
            editLowButton.textContent = 'Low';
            const editMedButton = document.createElement('button');
            editMedButton.setAttribute('type', 'button');
            editMedButton.textContent = 'Med';
            editMedButton.addEventListener('click', EditPriority);
            const editHighButton = document.createElement('button');
            editHighButton.setAttribute('type', 'button');
            editHighButton.textContent ='High';
            editHighButton.addEventListener('click', EditPriority); 

            if (todo.priority === "Low")
            {
                editLowButton.classList.add('priority-chosen');
            }
            else if (todo.priority === 'Med')
            {
                editMedButton.classList.add('priority-chosen');
            }
            else if (todo.priority === 'High')
            {
                editHighButton.classList.add('priority-chosen'); 
            }
            editPriority.appendChild(editLowButton);
            editPriority.appendChild(editMedButton);
            editPriority.appendChild(editHighButton); 
            editFormSectionFour.appendChild(editPriorityLabel);
            editFormSectionFour.appendChild(editPriority);

            const editFormSectionFive = document.createElement('div');
            const editSubmitButton = document.createElement('button');
            editSubmitButton.textContent = "Submit"; 
            editSubmitButton.setAttribute('type', 'submit');
            editSubmitButton.addEventListener('click', SubmitEditedTodo);
            editFormSectionFive.appendChild(editSubmitButton);


            editForm.appendChild(editFormSectionOne);
            editForm.appendChild(editFormSectionTwo);
            editForm.appendChild(editFormSectionThree);
            editForm.appendChild(editFormSectionFour); 
            editForm.appendChild(editFormSectionFive); 
        }
    });

    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.DisableButtons)();

    editTodoWindow.appendChild(editForm); 
    content.appendChild(editTodoWindow); 

    closeButtonImage.addEventListener('click', RemoveEditTodo);
}

// RemoveEditTodo(): Will remove the edit todo window. 
function RemoveEditTodo(e){
    const content = document.getElementById('content');
    const editTodoWindow = document.querySelector('.edit-todo-window');
    const mainScreen = document.querySelector('.main-screen');
    const closeButtonImage = document.querySelector('.edit-todo-window > div:nth-child(1) > img[src]');

    mainScreen.removeAttribute('style'); 
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.EnableButtons)(); 

    content.removeChild(editTodoWindow); 

    closeButtonImage.removeEventListener('click', RemoveEditTodo); 
} 

// EditPriority(): Will allow the user to change the todo priority.
function EditPriority(e){
    const lowPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.edit-todo-window > form > div:nth-child(4) > div > button:nth-child(3)'); 
    lowPriority.classList.remove('priority-chosen');
    medPriority.classList.remove('priority-chosen');
    highPriority.classList.remove('priority-chosen');

    e.target.classList.add('priority-chosen');
} 

// SubmitEditedTodo(): Submit edited todo back into the local storage.
function SubmitEditedTodo(e){
    e.preventDefault();
    console.log(e); // Testing
    console.log(e.target); // Testing

    const content = document.getElementById('content'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const editTodoWindow = document.querySelector('.edit-todo-window'); 
    const editNameInput = document.getElementById('edit-name');
    const editDescriptionInput = document.getElementById('edit-description');
    const editDueDateInput = document.getElementById('edit-due-date');
    const editPriority = document.querySelectorAll('.edit-todo-window > form > div:nth-child(4) > div > button');
    let currentPriority = "";
    let indexToReplace = 0;
    console.log(editDueDateInput.value); // Testing 

    const todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos); // Testing

    if (editNameInput.value === "" || editDescriptionInput.value === "" || editDueDateInput.value === "")
    {
        console.log('Please fill all the input fields'); // Testing
        return; 
    }

    const editedDueDate = new Date(editDueDateInput.value);
    console.log(editedDueDate); // Testing 
    console.log('Edited Full Year: ', editedDueDate.getFullYear()); // Testing
    console.log('Edited Month: ', editedDueDate.getMonth()); // Testing
    console.log('Edited Date: ', editedDueDate.getDate() + 1); // Testing
    console.log('\n'); // Testing 

    const currentDate = new Date();
    console.log(currentDate); // Testing
    console.log('Current Full Year: ', currentDate.getFullYear()); // Testing
    console.log('Current Month: ', currentDate.getMonth()); // Testing
    console.log('Current Date: ', currentDate.getDate()); // Testing
    console.log('\n'); // Testing 

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1), 'MMM-dd-yyyy');
        console.log('Reformatted Due Date: ', reformattedDueDate); // Testing

        todos.forEach((todo, index) => {
            if (todo.name === _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_3__.todoMatcher.matcher)
            {
                indexToReplace = index;
            }
        });

        editPriority.forEach((priority) => {
            if (priority.classList.contains('priority-chosen'))
            {
                currentPriority = priority.innerHTML;
            }
        });

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreEditedTodos)(editNameInput.value, editDescriptionInput.value, reformattedDueDate, currentPriority, todos, indexToReplace);
        content.removeChild(editTodoWindow);
        mainScreen.removeAttribute('style');
        (0,_DisplayTodos__WEBPACK_IMPORTED_MODULE_2__.ViewTodos)(e); 
    }
    else if (result === -1)
    {
        console.log('The due date is behind the current date.'); // Testing
        console.log('Please update the due date.'); // Testing
        console.log('\n'); // Testing 
        return;  
    }
}

// DeleteTodo(): Will Delete the todo from the display and local storage.
function DeleteTodo(e){
    console.log(e); // Testing
    console.log(e.target); // Testing 

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo, index) => {
        if (todo.name === e.target.parentNode.childNodes[0].innerHTML)
        {
            todos.splice(index, 1);
        }
    });

    (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.DeleteStoredTodos)(todos); 
    (0,_DisplayTodos__WEBPACK_IMPORTED_MODULE_2__.ViewTodos)(e);
}

// ClearInputSection(): Clears the input section. 
function ClearInputSection(){
    const inputSection = document.querySelector('.main-screen > div:nth-child(2)');
    inputSection.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttons = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const projects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');

    buttons.forEach((button) => button.classList.remove('current-button'));
    projects.forEach((button) => button.classList.remove('current-button')); 
}

/***/ }),

/***/ "./src/utils/ButtonActivation.js":
/*!***************************************!*\
  !*** ./src/utils/ButtonActivation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisableButtons: () => (/* binding */ DisableButtons),
/* harmony export */   EnableButtons: () => (/* binding */ EnableButtons)
/* harmony export */ });
// DisableButtons(): Will disable the UI buttons.
function DisableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > button');
    const displayProjectButtons = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    const projectTodosSection = document.querySelectorAll('.project-todos-section > div > div:nth-child(2) > img[src]'); // Might not need this. 
    
    buttonSection.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayTodoButtons.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayProjectButtons.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });
}

// EnableButtons(): Will enable the UI buttons.
function EnableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > button');
    const displayProjectButtons = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button'); 
    const projetTodosSection = document.querySelectorAll('.project-todos-section > div > div:nth-child(2) > img[src]'); // Might not need this.

    buttonSection.forEach((button) => {
        button.removeAttribute('disabled'); 
    });

    displayTodoButtons.forEach((button) => {
        button.removeAttribute('disabled');
    });

    displayProjectButtons.forEach((button) => {
        button.removeAttribute('disabled'); 
    }); 
}

/***/ }),

/***/ "./src/utils/InitialStorage.js":
/*!*************************************!*\
  !*** ./src/utils/InitialStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteStoredProject: () => (/* binding */ DeleteStoredProject),
/* harmony export */   DeleteStoredTodoProject: () => (/* binding */ DeleteStoredTodoProject),
/* harmony export */   DeleteStoredTodos: () => (/* binding */ DeleteStoredTodos),
/* harmony export */   InitialStorage: () => (/* binding */ InitialStorage),
/* harmony export */   StoreEditedTodoProjects: () => (/* binding */ StoreEditedTodoProjects),
/* harmony export */   StoreEditedTodos: () => (/* binding */ StoreEditedTodos),
/* harmony export */   StoreProjects: () => (/* binding */ StoreProjects),
/* harmony export */   StoreTodos: () => (/* binding */ StoreTodos)
/* harmony export */ });
/* harmony import */ var _modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Dom-Content */ "./src/modules/Dom-Content.js");
/* harmony import */ var _modules_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/DisplayProjectTodos */ "./src/modules/DisplayProjectTodos.js");
/* harmony import */ var _modules_ProjectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ProjectContent */ "./src/modules/ProjectContent.js");
/* harmony import */ var _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _ButtonActivation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonActivation */ "./src/utils/ButtonActivation.js");








// InitialStorage(): The initial local storage area for the application.
function InitialStorage(){
    if (localStorage.length === 0)
    {
        localStorage.setItem('todos', JSON.stringify([]));
        localStorage.setItem('projects', JSON.stringify([])); 
    } 
}

// StoreTodos(): Will store todos into the local storage. 
function StoreTodos(todoName, todoDescription, todoDueDate, todoPriority){
    console.log('Todo Name: ', todoName); // Testing
    console.log('Todo Description: ', todoDescription); // Testing
    console.log('Todo Due Date: ', todoDueDate); // Testing
    console.log('Todo Priority: ', todoPriority); // Testing
    console.log('\n'); // Testing 

    const todoObj = {
        name: todoName,
        description: todoDescription,
        dueDate: todoDueDate,
        priority: todoPriority,
    }

    let todoArr = JSON.parse(localStorage.getItem('todos'));
    todoArr.push(todoObj); 
    localStorage.setItem('todos', JSON.stringify(todoArr));
}

// StoreEditedTodos(): Will store the edited todo content into the local storage.
function StoreEditedTodos(todoName, todoDescription, todoDueDate, todoPriority, todoArray, indexToReplace){
    console.log('Edited Todo: ', todoName); // Testing
    console.log('Edited Todo Description: ', todoDescription); // Testing 
    console.log('Edited Todo Due Date: ', todoDueDate); // Testing
    console.log('Edited Todo Priority: ', todoPriority); 
    console.log('Todo Array: ', todoArray); // Testing 
    console.log('Index To Replace: ', indexToReplace); // Testing
    console.log('\n'); // Testing 

    const todoObj = {
        name: todoName,
        description: todoDescription,
        dueDate: todoDueDate,
        priority: todoPriority,
    };

    todoArray[indexToReplace] = todoObj; 

    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// DeleteStoredTodos(): Will Delete the stored todos in the local storage.
function DeleteStoredTodos(todoArray){
    console.log('Todo array after deletion',todoArray); // Testing 
    console.log('\n'); // Testing 

    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// StoreProjects(): Will store the project into the local storage as an array. 
function StoreProjects(project){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    const displayProjects = document.querySelector('.main-screen > div:nth-child(1) > div');
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    
    const projectObj = {
        projectName: project,
        todos: [], 
    };

    projectArray.push(projectObj);

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray)); 

    buttonSection.removeChild(displayProjects); 

    (0,_modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__.DisplayProjects)(); 
}

// StoreTodoProjects(): Will store the edited todo 
function StoreEditedTodoProjects(todoName, todoDescription, todoDueDate, todoPriority){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    console.log('Project Array: ', projectArray); // Testing
    projectArray.forEach((project) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            todoArray[_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.editedTodoIndex] = {name: todoName, description: todoDescription, dueDate: todoDueDate, priority: todoPriority};

            project.todos = todoArray;
            
            localStorage.removeItem('projects');
        }
    });

    localStorage.setItem('projects', JSON.stringify(projectArray));
}

// DeleteStoredTodoProject(): Will delete the stored todo in the proeject section. 
function DeleteStoredTodoProject(e){
    console.log(e.target.parentNode.parentNode.childNodes[0].textContent); // Testing
    const deleteName = e.target.parentNode.parentNode.childNodes[0].textContent;
    console.log(e); // Testing 
    console.log('\n'); // Testing

    const projectArray = JSON.parse(localStorage.getItem('projects'));

    projectArray.forEach((project) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            todoArray.forEach((todo, index) => {
                if (todo.name === deleteName)
                {
                    todoArray.splice(index, 1);
                    project.todos = todoArray;

                    localStorage.removeItem('projects'); 
                }
            });
        }
    });

    localStorage.setItem('projects', JSON.stringify(projectArray));
    
    const projectSection = document.querySelector('.project-section');
    projectSection.replaceChildren(); 
    (0,_modules_ProjectContent__WEBPACK_IMPORTED_MODULE_2__.AddTodoToProject)();
    (0,_modules_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_1__.DisplayProjectTodos)();
}

// DeleteStoredProject(): Delete the current stored project that the user clicked on. 
function DeleteStoredProject(){
    const displayAllProjects = document.querySelectorAll('.main-screen > div:nth-child(1) > div > button');
    const projectSection = document.querySelector('.project-section');
    const content = document.getElementById('content'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window');
    const mainScreen = document.querySelector('.main-screen');
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    projectArray.forEach((project, index) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            projectArray.splice(index, 1);
        }
    });

    displayAllProjects.forEach((button) => {
        if (button.textContent === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const displayProjectContainer = document.querySelector('.main-screen > div:nth-child(1) > div');
            displayProjectContainer.removeChild(button); 
        }
    }); 

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray));

    if (projectArray.length !== 0)
    {
        const firstProject = projectArray[0];
        _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher = firstProject.projectName;

        displayAllProjects.forEach((button) => {
            if (button.textContent === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
            {
                button.classList.add('current-button'); 
            }
            else
            {
                button.classList.remove('current-button');
            }
        });

        content.removeChild(deleteProjectWindow); 

        projectSection.replaceChildren(); 

        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker');
        (0,_ButtonActivation__WEBPACK_IMPORTED_MODULE_4__.EnableButtons)();

        (0,_modules_ProjectContent__WEBPACK_IMPORTED_MODULE_2__.AddTodoToProject)();
        (0,_modules_ProjectContent__WEBPACK_IMPORTED_MODULE_2__.DeleteProject)();
        (0,_modules_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_1__.DisplayProjectTodos)(); 
    }  
    // Note: Implement an else statement if the 'projectArray' is empty. 
}

/***/ }),

/***/ "./src/utils/ProjectMatcher.js":
/*!*************************************!*\
  !*** ./src/utils/ProjectMatcher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectMatcher: () => (/* binding */ projectMatcher)
/* harmony export */ });
let projectMatcher = {matcher: null, editedTodoIndex: null}; 


/***/ }),

/***/ "./src/utils/TodoMatcher.js":
/*!**********************************!*\
  !*** ./src/utils/TodoMatcher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoMatcher: () => (/* binding */ todoMatcher)
/* harmony export */ });
let todoMatcher = {matcher: null};

/***/ }),

/***/ "./src/images/delete-forever.svg":
/*!***************************************!*\
  !*** ./src/images/delete-forever.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21789bc1cc869bfbd84a.svg";

/***/ }),

/***/ "./src/images/delete-outline.svg":
/*!***************************************!*\
  !*** ./src/images/delete-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0f9210e9a66c2310564.svg";

/***/ }),

/***/ "./src/images/note-edit-outline.svg":
/*!******************************************!*\
  !*** ./src/images/note-edit-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "356f180dee7aa7100a4b.svg";

/***/ }),

/***/ "./src/images/note-outline.svg":
/*!*************************************!*\
  !*** ./src/images/note-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aba570fbbcca75bf0ac6.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e3f9f26bf67d6d91415.svg";

/***/ }),

/***/ "./src/images/window-close.svg":
/*!*************************************!*\
  !*** ./src/images/window-close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b21e92a39327adf0776a.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Dom-Content */ "./src/modules/Dom-Content.js");
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");





/** |Todo List Project|
 * => Assignment:
 * 1. Your 'todos' are going to be objects that you'll want to dynamically create, which means 
 * either using factories or constructors/classes to generate them. 
 * 
 * 2. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should 
 * have a title, description, dueDate and priorty. You might also want to include notes or even a
 * checklist.
 * You will need:
 * todo title
 * todo description
 * todo dueDate
 * todo priorty
 * todo notes
 * 
 * 8. We haven't learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their 
 * todos will disappear! You should add some persistence to this todo app using the Web Storage API.
 * 
 * LocalStorage allows you to save data on the user's computer. The downside here is that the data is only accessible on
 * the computer that it was created on. Even so, it's pretty handy!
 * 
 * Set up a function that saves the projects (and todos) to local storage every time a new project (or todo) is created, and another function 
 * that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get 
 * tripped up: 
 * -> Make sure your app doesn't crash if the data you may want to retrieve form localStorage isn't there!
 * 
 * -> You can inspect data you saved in localStorage using DevTools! To do this, open the 'Application' tab in DevTools and click on the 
 * 'Local Storage' tab under 'Storage'. Every time you add, update and delete data from  localStorage in your app, those changes will be
 * reflected in DevlTools. 
 * 
 * -> localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. Keep in mind you
 * cannot store functions in JSON, so you'll have to figure out how to add methods back to your object properties once you fetch them. 
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Practicing with Local Storage|
/** |Basic Concepts|
 * => Storage objects are simple key-value stores, similar to objects, but they stay intact through page loads. The keys and the values 
 * are always strings (note that, as with objects, integer keys will be automatically converted to strings). You can access these values like an objects, or with
 * the 'Storage.getItem()' and 'Storage.setItem()' methods. These three lines all set the (same) colorSetting entry: 
 * 
 * localStorage.colorSetting = '#a4509b'; 
 * localStorage["colorSetting"] = "#a4509b";
 * localStorage.setItem("colorSetting", "#a4509b");
 * 
 * Note: It's recommended to use the Web Storage API(setItem, getItem, removeItem, key, length) to prevent the pitfalls associated with using plain objects as
 * key-value stores. 
 * 
 * => The teo mechanisms within Web Storage are as follows:
 * 1. SessionStorage maintains a separate storage area for each given origin that's available for the duration of the page sessions (as long as the browser is open,
 * including page reloads and restores).
 * 
 * 2. localStorage does the same thing, but persists even when the browser is closed and reopened. 
 * 
 * => JSON: Storage only supports storing and retrieving strings. If you want to save other data types, you have to convert them to strings. For plain objects
 * and arrays, you can use 'JSON.stringify()'.
 */

// console.log('|Practicing with Local Storage|');
// let testOne = 333;
// localStorage.setItem('test', testOne); 

// let returnOne = Number(localStorage.getItem('test'));
// console.log('Value: ', returnOne);
// console.log('Value Type: ', typeof(returnOne)); 
// console.log('Local Storage Length: ', localStorage.length); 
// console.log('\n');

// console.log('=> Deleting key from local storage...');
// localStorage.removeItem('test');
// console.log('Local Storage Length: ', localStorage.length);
// console.log('\n'); 


// console.log('=> Adding an object to the local storage...');
// const testObj = {nameOne: 'Isom'};
// localStorage.setItem('testObj', JSON.stringify(testObj));
// console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
// console.log('\n'); 

// console.log('=> Adding a property to the local storage object...');
// testObj['nameTwo'] = 'Jordan';
// localStorage.setItem('testObj', JSON.stringify(testObj)); 
// console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj')));
// console.log('\n'); 

// console.log('=> Adding a another property to the local storage object...');
// testObj['nameThree'] = 'Brock';
// localStorage.setItem('testObj', JSON.stringify(testObj));
// console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
// console.log('\n');

// console.log('=> Adding another object to the local storage...');
// const randomObj = {random: null};
// localStorage.setItem('randomObj', JSON.stringify(randomObj));
// console.log('Object Value: ', JSON.parse(localStorage.getItem('randomObj')));
// console.log('\n'); 

// console.log('=> Deleting the random object from the local storage...'); 
// localStorage.removeItem('randomObj'); 
// console.log('Object Value: ', JSON.parse(localStorage.getItem('randomObj')));
// console.log('\n'); 

// console.log('=> Deleting a property from test object in local storage...');
// delete testObj.nameTwo; 
// localStorage.setItem('testObj', JSON.stringify(testObj));
// console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj'))); 
// console.log('\n'); 

// console.log('=> Deleting test object from the local storage...');
// localStorage.removeItem('testObj');
// console.log('Object Value: ', JSON.parse(localStorage.getItem('testObj')));
// console.log('\n'); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Practicing with Date-fns|
console.log("|Practicing with Date-Fns|"); // Testing 

const dateOne = new Date();
console.log('Basic Date One: ', dateOne); 
console.log('Date One Day of the week : ', dateOne.getDay());
console.log('Date One Day: ', dateOne.getDate()); 
console.log('Date One Month: ', dateOne.getMonth() + 1); 
console.log('Date One FullYear: ', dateOne.getFullYear()); 
console.log('\n'); 

const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate()), 'MMM/dd/yyyy');
console.log('Result using format: ', result);
console.log('\n'); 
console.log('---------------------------------------------------------');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__.InitialStorage)();
(0,_modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__.InitializeDomContent)(); 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDMU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3VCO0FBQ047QUFDK0M7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHlCQUF5QiwyREFBVTtBQUNuQywwQkFBMEIsMkRBQVU7O0FBRXBDO0FBQ0Esc0JBQXNCLHlHQUErQjtBQUNyRDtBQUNBLHVCQUF1Qix5R0FBK0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2REFBaUI7QUFDeEU7O0FBRUE7QUFDQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGlCO0FBQ0s7QUFDSjtBQUNRO0FBSzlCO0FBQ0k7QUFDRjs7QUFFdEM7QUFDQTtBQUNzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZ0M7O0FBRWhDO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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NkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFFBQVEsNkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsZ0RBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFjO0FBQ2QsMEVBQW9CLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0Rpc3BsYXlQcm9qZWN0VG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9EaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Eb20tQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL05vdGVDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy91dGlscy9CdXR0b25BY3RpdmF0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3V0aWxzL0luaXRpYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3V0aWxzL1Byb2plY3RNYXRjaGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3V0aWxzL1RvZG9NYXRjaGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb21wYXJlQXNjLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJvZHkgLSBUaGUgbWFpbiBib2R5IGZvciB0aGUgYXBwbGljYXRpb24uICovXG5ib2R5e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiAqIC0gQWxsIGVsZW1lbnRzIGZvciB0aGUgYXBwbGljYXRpb24uICovXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBwcmlvcml0eS1jaG9vc2VuICovXG4ucHJpb3JpdHktY2hvc2Vue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBjdXJyZW50LWJ1dHRvbiAqL1xuLmN1cnJlbnQtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBkaXNhYmxlLWNsaWNrZXIgKi9cbi5kaXNhYmxlLWNsaWNrZXJ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBNb2JpbGUgRGV2ZWxvcGVtZW50ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgI2NvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC8qIG1haW4gdGl0bGUgKi9cbiAgICAjY29udGVudCA+IGgxe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogfE1haW4gU2NyZWVuIFNlY3Rpb258ICovXG4gICAgLm1haW4tc2NyZWVue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNweDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICB9XG4gICAgLm1haW4tc2NyZWVuID4gZGl2e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICB9XG5cbiAgICAubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpeyAvKiBCdXR0b24gU2VjdGlvbiAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdnsgLyogRGlzcGxheSBQcm9qZWN0cyBXaW5kb3cgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGg0eyAvKiBEaXNwbGF5IFRpdGxlIChwcm9qZWN0cykgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMil7IC8qIElucHV0IFNlY3Rpb24gKi9cbiAgICAgICAgLyogZmxleDogMTsgKi9cbiAgICAgICAgd2lkdGg6IDIwMHB4OyAvKlNpemUgbWF5IG5lZWQgdG8gY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgYW1vdW50IG9mIGNvbnRlbnQuICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm17IC8qIE5ldyBUb2RvIEZvcm0gKi9cbiAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDoxMHB4O1xuICAgIH1cbiAgICAubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybSA+IGRpdiA+IGxhYmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gaDR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAvKiB8VG9kbyBTZWN0aW9ufCAqL1xuICAgIC50b2RvLXNlY3Rpb257XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIH1cbiAgICAudG9kby1zZWN0aW9uID4gZGl2eyAvKiB0b2RvIHJvd3MgKHRvZG8gaXRlbXMpKi9cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIH1cblxuICAgIC8qIHxUb2RvIERlc2NyaXB0aW9uIFdpbmRvd3wqL1xuICAgIC50b2RvLWRlc2NyaXB0aW9uLXdpbmRvd3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICByaWdodDogMzdweDtcbiAgICAgICAgdG9wOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgLnRvZG8tZGVzY3JpcHRpb24td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXsgLyogQ2xvc2UgQ29udGFpbmVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgICB9XG4gICAgLnRvZG8tZGVzY3JpcHRpb24td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBDbG9zZSBCdXR0b24gSW1hZ2UgKi9cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAudG9kby1kZXNjcmlwdGlvbi13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEZXRhaWxzIENvbnRhaW5lciAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDVweDsgXG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZWVuOyBcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAudG9kby1kZXNjcmlwdGlvbi13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xuICAgIH1cblxuICAgIC8qIHxFZGl0IFRvZG8gV2luZG93fCAqL1xuICAgIC5lZGl0LXRvZG8td2luZG93e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIHRvcDogMTUwcHg7XG4gICAgICAgIHJpZ2h0OiAzN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5lZGl0LXRvZG8td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXsgLyogQ2xvc2UgQ29udGFpbmVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgfVxuICAgIC5lZGl0LXRvZG8td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBDbG9zZSBCdXR0b24gSW1hZ2UgKi9cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGZvcm17IC8qIEVkaXQgU2VjdGlvbiAoRm9ybSkqL1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXZcbiAgICB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgICB9XG4gICAgLmVkaXQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2ID4gbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICB9XG5cbiAgICAvKiB8UHJvamVjdCBTZWN0aW9ufCAqL1xuICAgIC5wcm9qZWN0LXNlY3Rpb257XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLnByb2plY3Qtc2VjdGlvbiA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIEFkZCBUb2RvIENvbnRhaW5lciAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gICAgfVxuICAgIC5wcm9qZWN0LXNlY3Rpb24gPiBkaXY6bnRoLWNoaWxkKDEpID4gaW1nW3NyY117IC8qIEFkZCBUb2RvIEJ1dHRvbiAqL1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgLyogfEFkZCBUb2RvIFdpbmRvdyAocHJvamVjdCBTZWN0aW9uKXwgKi9cbiAgICAuYWRkLXRvZG8td2luZG93e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzZWFncmVlbjtcbiAgICB9XG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIEJ1dHRvbiBDb250YWluZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICB9XG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXXsgLyogQ2xvc2UgQnV0dG9uIEltYWdlICovXG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG5cbiAgICAuYWRkLXRvZG8td2luZG93ID4gZm9ybSB7IC8qIEFkZCBUb2RvIFNlY3Rpb24gKEZvcm0pICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXYgPiBsYWJlbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2ID4gaDR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC8qIHxEZWxldGUgUHJvamVjdCBXaW5kb3cgKFByb2plY3QgU2VjdGlvbil8ICovXG4gICAgLmRlbGV0ZS1wcm9qZWN0LXdpbmRvd3sgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNhbG1vbjtcbiAgICB9XG4gICAgLmRlbGV0ZS1wcm9qZWN0LXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIEJ1dHRvbiBDb250YWluZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7IFxuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgICB9XG4gICAgLmRlbGV0ZS1wcm9qZWN0LXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXXsgLyogQ2xvc2UgQnV0dG9uIEltYWdlICovXG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG5cbiAgICAuZGVsZXRlLXByb2plY3Qtd2luZG93ID4gZGl2Om50aC1jaGlsZCgyKXsgLyogRGVsZXRlIFByb21wdCBDb250YWluZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgLmRlbGV0ZS1wcm9qZWN0LXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMikgPiBweyAvKiBEZWxldGUgUHJvbXB0IE1lc3NhZ2UgKi9cbiAgICAgICAgY29sb3I6IHJlZDsgXG4gICAgfVxuICAgIC5kZWxldGUtcHJvamVjdC13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ueyAvKiBEZWxldGUgcHJvbXB0IEJ1dHRvbiAqL1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC8qIHxQcm9qZWN0IFRvZG9zIFNlY3Rpb258ICovXG4gICAgLnByb2plY3QtdG9kb3Mtc2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIH1cbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9uID4gZGl2eyAvKiBQcm9qZWN0IFRvZG9zICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogM3B4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xuICAgIH1cbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9uID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKXsgLyogUHJvamVjdCBUb2RvIEJ1dHRvbiBTZWN0aW9uICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLnByb2plY3QtdG9kb3Mtc2VjdGlvbiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBpbWdbc3JjXXsgLyogUG9yamVjdCBUb2RvIEJ1dHRvbnMgKi9cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAvKiB8UHJvamVjdCBUb2RvIERldGFpbHMgV2luZG93fCAqL1xuICAgIC5wcm9qZWN0LXRvZG8tZGV0YWlscy13aW5kb3d7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7IFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgLnByb2plY3QtdG9kby1kZXRhaWxzLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIEJ1dHRvbiBDb250YWluZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIH1cbiAgICAucHJvamVjdC10b2RvLWRldGFpbHMtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBDbG9zZSBCdXR0b24gKi9cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAucHJvamVjdC10b2RvLWRldGFpbHMtd2luZG93ID4gZGl2Om50aC1jaGlsZCgyKXsgLyogRGV0YWlscyBDb250YWluZXIgKERlc2NyaXB0aW9ufER1ZSBEYXRlfFByaW9yaXR5KSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDVweDtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIH1cblxuICAgIC8qIHxQcm9qZWN0IFRvZG8gRWRpdCBXaW5kb3d8ICovXG4gICAgLnByb2plY3QtdG9kby1lZGl0LXdpbmRvd3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgIH1cbiAgICAucHJvamVjdC10b2RvLWVkaXQtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICAgIFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xuICAgIH1cbiAgICAucHJvamVjdC10b2RvLWVkaXQtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNde1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4Q0FBOEM7QUFDOUM7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBLDBDQUEwQztBQUMxQztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw2S0FBNks7QUFDN0ssNktBQTZLO0FBQzdLLHFCQUFxQjtBQUNyQjtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQSw2S0FBNks7QUFDN0ssNktBQTZLO0FBQzdLLG1CQUFtQjtBQUNuQjtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQSw2S0FBNks7QUFDN0ssNktBQTZLO0FBQzdLLG9CQUFvQjtBQUNwQjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQSw2S0FBNks7QUFDN0ssNktBQTZLO0FBQzdLLHdCQUF3QjtBQUN4QjtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7O1FBRW5CLHFCQUFxQjtRQUNyQixhQUFhO0lBQ2pCOztJQUVBLGVBQWU7SUFDZjtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQSwwQkFBMEI7SUFDMUI7UUFDSSxhQUFhO1FBQ2IsUUFBUTs7UUFFUix3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQSxpQ0FBaUMsbUJBQW1CO1FBQ2hELGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsU0FBUztJQUNiOztJQUVBLHVDQUF1Qyw0QkFBNEI7UUFDL0QsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsUUFBUTs7UUFFUixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBLDRDQUE0Qyw2QkFBNkI7UUFDckUsU0FBUztJQUNiOztJQUVBLGlDQUFpQyxrQkFBa0I7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LHNCQUFzQjtRQUN0QixTQUFTOztRQUVULHVCQUF1QjtJQUMzQjtJQUNBLDhCQUE4QixrQkFBa0I7UUFDNUMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1Isc0JBQXNCO0lBQzFCO0lBQ0EsaURBQWlELGdDQUFnQztRQUM3RSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLFFBQVE7SUFDWjtJQUNBLDREQUE0RCx5QkFBeUI7UUFDakYsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUEsa0NBQWtDO0lBQ2xDO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtRQUNWLHVCQUF1QjtJQUMzQjtJQUNBLGlEQUFpRCwyQkFBMkI7UUFDeEUsYUFBYTtRQUNiLG9CQUFvQjs7UUFFcEIsd0JBQXdCO0lBQzVCO0lBQ0EsNERBQTRELGlCQUFpQjtRQUN6RSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQSxpREFBaUQsc0RBQXNEO1FBQ25HLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsUUFBUTs7UUFFUixzQkFBc0I7SUFDMUI7O0lBRUEsK0JBQStCO0lBQy9CO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLG9CQUFvQjs7UUFFcEIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBib2R5IC0gVGhlIG1haW4gYm9keSBmb3IgdGhlIGFwcGxpY2F0aW9uLiAqL1xcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogKiAtIEFsbCBlbGVtZW50cyBmb3IgdGhlIGFwcGxpY2F0aW9uLiAqL1xcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHByaW9yaXR5LWNob29zZW4gKi9cXG4ucHJpb3JpdHktY2hvc2Vue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBjdXJyZW50LWJ1dHRvbiAqL1xcbi5jdXJyZW50LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogZGlzYWJsZS1jbGlja2VyICovXFxuLmRpc2FibGUtY2xpY2tlcntcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE1vYmlsZSBEZXZlbG9wZW1lbnQgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcbiAgICAvKiBtYWluIHRpdGxlICovXFxuICAgICNjb250ZW50ID4gaDF7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogfE1haW4gU2NyZWVuIFNlY3Rpb258ICovXFxuICAgIC5tYWluLXNjcmVlbntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNweDtcXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGhlaWdodDogNTUwcHg7XFxuICAgIH1cXG4gICAgLm1haW4tc2NyZWVuID4gZGl2e1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIH1cXG5cXG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKXsgLyogQnV0dG9uIFNlY3Rpb24gKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXZ7IC8qIERpc3BsYXkgUHJvamVjdHMgV2luZG93ICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIFxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgfVxcbiAgICAubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gaDR7IC8qIERpc3BsYXkgVGl0bGUgKHByb2plY3RzKSAqL1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMil7IC8qIElucHV0IFNlY3Rpb24gKi9cXG4gICAgICAgIC8qIGZsZXg6IDE7ICovXFxuICAgICAgICB3aWR0aDogMjAwcHg7IC8qU2l6ZSBtYXkgbmVlZCB0byBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZSBhbW91bnQgb2YgY29udGVudC4gKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybXsgLyogTmV3IFRvZG8gRm9ybSAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOjEwcHg7XFxuICAgIH1cXG4gICAgLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXYgPiBsYWJlbHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGg0e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIC8qIHxUb2RvIFNlY3Rpb258ICovXFxuICAgIC50b2RvLXNlY3Rpb257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogM3B4O1xcblxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB9XFxuICAgIC50b2RvLXNlY3Rpb24gPiBkaXZ7IC8qIHRvZG8gcm93cyAodG9kbyBpdGVtcykqL1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICB9XFxuXFxuICAgIC8qIHxUb2RvIERlc2NyaXB0aW9uIFdpbmRvd3wqL1xcbiAgICAudG9kby1kZXNjcmlwdGlvbi13aW5kb3d7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICAgICAgICBnYXA6IDNweDtcXG5cXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICByaWdodDogMzdweDtcXG4gICAgICAgIHRvcDogMTUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuICAgIC50b2RvLWRlc2NyaXB0aW9uLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIENvbnRhaW5lciAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICB9XFxuICAgIC50b2RvLWRlc2NyaXB0aW9uLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXXsgLyogQ2xvc2UgQnV0dG9uIEltYWdlICovXFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgfVxcbiAgICAudG9kby1kZXNjcmlwdGlvbi13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEZXRhaWxzIENvbnRhaW5lciAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDVweDsgXFxuXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47IFxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuICAgIC50b2RvLWRlc2NyaXB0aW9uLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXZ7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xcbiAgICB9XFxuXFxuICAgIC8qIHxFZGl0IFRvZG8gV2luZG93fCAqL1xcbiAgICAuZWRpdC10b2RvLXdpbmRvd3tcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgICAgIHRvcDogMTUwcHg7XFxuICAgICAgICByaWdodDogMzdweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIENvbnRhaW5lciAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgfVxcbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXXsgLyogQ2xvc2UgQnV0dG9uIEltYWdlICovXFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgfVxcbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGZvcm17IC8qIEVkaXQgU2VjdGlvbiAoRm9ybSkqL1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICAuZWRpdC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXZcXG4gICAge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbiAgICB9XFxuICAgIC5lZGl0LXRvZG8td2luZG93ID4gZm9ybSA+IGRpdiA+IGxhYmVse1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxcbiAgICB9XFxuXFxuICAgIC8qIHxQcm9qZWN0IFNlY3Rpb258ICovXFxuICAgIC5wcm9qZWN0LXNlY3Rpb257XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXNlY3Rpb24gPiBkaXY6bnRoLWNoaWxkKDEpeyAvKiBBZGQgVG9kbyBDb250YWluZXIgKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG4gICAgfVxcbiAgICAucHJvamVjdC1zZWN0aW9uID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBBZGQgVG9kbyBCdXR0b24gKi9cXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuXFxuICAgIC8qIHxBZGQgVG9kbyBXaW5kb3cgKHByb2plY3QgU2VjdGlvbil8ICovXFxuICAgIC5hZGQtdG9kby13aW5kb3d7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIH1cXG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIEJ1dHRvbiBDb250YWluZXIgKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIH1cXG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXXsgLyogQ2xvc2UgQnV0dG9uIEltYWdlICovXFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgfVxcblxcbiAgICAuYWRkLXRvZG8td2luZG93ID4gZm9ybSB7IC8qIEFkZCBUb2RvIFNlY3Rpb24gKEZvcm0pICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXYgPiBsYWJlbHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWRkLXRvZG8td2luZG93ID4gZm9ybSA+IGRpdiA+IGg0e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIC8qIHxEZWxldGUgUHJvamVjdCBXaW5kb3cgKFByb2plY3QgU2VjdGlvbil8ICovXFxuICAgIC5kZWxldGUtcHJvamVjdC13aW5kb3d7IFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNhbG1vbjtcXG4gICAgfVxcbiAgICAuZGVsZXRlLXByb2plY3Qtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXsgLyogQ2xvc2UgQnV0dG9uIENvbnRhaW5lciAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kOyBcXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgfVxcbiAgICAuZGVsZXRlLXByb2plY3Qtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBDbG9zZSBCdXR0b24gSW1hZ2UgKi9cXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGUtcHJvamVjdC13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEZWxldGUgUHJvbXB0IENvbnRhaW5lciAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gICAgLmRlbGV0ZS1wcm9qZWN0LXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMikgPiBweyAvKiBEZWxldGUgUHJvbXB0IE1lc3NhZ2UgKi9cXG4gICAgICAgIGNvbG9yOiByZWQ7IFxcbiAgICB9XFxuICAgIC5kZWxldGUtcHJvamVjdC13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ueyAvKiBEZWxldGUgcHJvbXB0IEJ1dHRvbiAqL1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcblxcbiAgICAvKiB8UHJvamVjdCBUb2RvcyBTZWN0aW9ufCAqL1xcbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9ue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9uID4gZGl2eyAvKiBQcm9qZWN0IFRvZG9zICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogM3B4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9uID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKXsgLyogUHJvamVjdCBUb2RvIEJ1dHRvbiBTZWN0aW9uICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2Rvcy1zZWN0aW9uID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSA+IGltZ1tzcmNdeyAvKiBQb3JqZWN0IFRvZG8gQnV0dG9ucyAqL1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLyogfFByb2plY3QgVG9kbyBEZXRhaWxzIFdpbmRvd3wgKi9cXG4gICAgLnByb2plY3QtdG9kby1kZXRhaWxzLXdpbmRvd3tcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIHRvcDogMTAwcHg7IFxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gICAgLnByb2plY3QtdG9kby1kZXRhaWxzLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7IC8qIENsb3NlIEJ1dHRvbiBDb250YWluZXIgKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2RvLWRldGFpbHMtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdeyAvKiBDbG9zZSBCdXR0b24gKi9cXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRvZG8tZGV0YWlscy13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiBEZXRhaWxzIENvbnRhaW5lciAoRGVzY3JpcHRpb258RHVlIERhdGV8UHJpb3JpdHkpICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgfVxcblxcbiAgICAvKiB8UHJvamVjdCBUb2RvIEVkaXQgV2luZG93fCAqL1xcbiAgICAucHJvamVjdC10b2RvLWVkaXQtd2luZG93e1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2RvLWVkaXQtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICAgIFxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXG4gICAgfVxcbiAgICAucHJvamVjdC10b2RvLWVkaXQtd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNde1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjY7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkZWxldGVQcm9qZWN0VG9kb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9kZWxldGUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IGRldGFpbHNQcm9qZWN0VG9kb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9ub3RlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBlZGl0UHJvamVjdFRvZG9JbWFnZSBmcm9tICcuLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUuc3ZnJzsgXG5cbmltcG9ydCB7IHByb2plY3RNYXRjaGVyIH0gZnJvbSAnLi4vdXRpbHMvUHJvamVjdE1hdGNoZXInO1xuaW1wb3J0IHsgdG9kb01hdGNoZXIgfSBmcm9tICcuLi91dGlscy9Ub2RvTWF0Y2hlcic7XG5cbmltcG9ydCB7IFByb2plY3RUb2RvRGV0YWlsc1dpbmRvdyB9IGZyb20gJy4vUHJvamVjdENvbnRlbnQnO1xuaW1wb3J0IHsgUHJvamVjdFRvZG9FZGl0V2luZG93IH0gZnJvbSAnLi9Qcm9qZWN0Q29udGVudCc7XG5pbXBvcnQgeyBEZWxldGVTdG9yZWRUb2RvUHJvamVjdCB9IGZyb20gJy4uL3V0aWxzL0luaXRpYWxTdG9yYWdlJztcblxuLy8gRGlzcGxheVByb2plY3RUb2RvcygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSBwcm9qZWN0IHRvZG9zIGZyb20gZWFjaCBwcm9qZWN0LiBcbmV4cG9ydCBmdW5jdGlvbiBEaXNwbGF5UHJvamVjdFRvZG9zKCl7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNlY3Rpb24nKTtcblxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TWF0Y2hlci5tYXRjaGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3NTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0VG9kb3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kb3Mtc2VjdGlvbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0LnRvZG9zO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7dG9kb0FycmF5W2ldLm5hbWV9YDtcblxuICAgICAgICAgICAgICAgIHByb2plY3RUb2RvLmFwcGVuZENoaWxkKHByb2plY3RUb2RvTmFtZSk7IFxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzSW1hZ2VCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBkZXRhaWxzSW1hZ2VCdXR0b24uc3JjID0gZGV0YWlsc1Byb2plY3RUb2RvSW1hZ2U7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0ltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUHJvamVjdFRvZG9EZXRhaWxzV2luZG93KTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEltYWdlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgZWRpdEltYWdlQnV0dG9uLnNyYyA9IGVkaXRQcm9qZWN0VG9kb0ltYWdlO1xuICAgICAgICAgICAgICAgIGVkaXRJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFByb2plY3RUb2RvRWRpdFdpbmRvdyk7IFxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUltYWdlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSW1hZ2VCdXR0b24uc3JjID0gZGVsZXRlUHJvamVjdFRvZG9JbWFnZTtcbiAgICAgICAgICAgICAgICBkZWxldGVJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERlbGV0ZVN0b3JlZFRvZG9Qcm9qZWN0KTtcbiAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0ltYWdlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoZWRpdEltYWdlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0J1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2VCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RUb2RvLmFwcGVuZENoaWxkKHByb2plY3RUb2RvQnV0dG9ucyk7IFxuICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvc1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRvZG8pOyBcbiAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb3NTZWN0aW9uKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJpbXBvcnQgd2luZG93Q2xvc2VJbWcgZnJvbSAnLi4vaW1hZ2VzL3dpbmRvdy1jbG9zZS5zdmcnO1xuXG5pbXBvcnQgeyBFZGl0VG9kbywgRGVsZXRlVG9kbyB9IGZyb20gJy4vVG9kb0NvbnRlbnQnO1xuXG5pbXBvcnQgeyBEaXNhYmxlQnV0dG9ucywgRW5hYmxlQnV0dG9ucyB9IGZyb20gJy4uL3V0aWxzL0J1dHRvbkFjdGl2YXRpb24nO1xuXG4vLyBWaWV3VG9kb3MoKTogV2lsbCBkaXNwbGF5IGFsbCB0aGUgdG9kb3MgaW4gdGhlIGFwcGxpY2F0aW9uLlxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdUb2RvcyhlKXtcbiAgICBDbGVhcklucHV0U2VjdGlvbigpO1xuICAgIFJlbW92ZVByZXZpb3VzU2VsZWN0ZWRCdXR0b24oKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9IFwiY3VycmVudC1idXR0b25cIjsgXG4gICAgY29uc3Qgdmlld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuICAgIHZpZXdUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtYnV0dG9uJyk7IC8vIFdoZW4gKGUpIGlzIG5vdCBhcHBsaWNhYmxlLiBcblxuICAgIFRvZG9zKCk7IFxufVxuXG4vLyBUb2RvcygpOiBBbGwgdGhlIHRvZG9zIGluIHRoZSBhcHBsaWNhdGlvbi4gKE5vdGU6IENhbGxlZCBhZ2FpbiBhZnRlciBlZGl0aW5nIHRoZSB0b2RvLilcbmZ1bmN0aW9uIFRvZG9zKCl7XG4gICAgY29uc3QgaW5wdXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKScpO1xuXG4gICAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXNlY3Rpb24nKTsgXG4gICAgXG4gICAgaW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9TZWN0aW9uKTsgXG5cbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpOyBcbiAgICBjb25zb2xlLmxvZygnVG9kb3Mgb24gZGlzcGxheTogJywgdG9kb3MpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Sb3cuZGF0YXNldC51c2VyVG9kbyA9IGluZGV4OyBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gYCR7dG9kby5uYW1lfWA7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVG9kb0Rlc2NyaXB0aW9uKTsgXG5cbiAgICAgICAgY29uc3QgZWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdFRvZG8udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRWRpdFRvZG8pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlVG9kby50ZXh0Q29udGVudCA9IGBEZWxgO1xuICAgICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGVsZXRlVG9kbyk7XG5cbiAgICAgICAgdG9kb1Jvdy5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdG9kb1Jvdy5hcHBlbmRDaGlsZChlZGl0VG9kbyk7IFxuICAgICAgICB0b2RvUm93LmFwcGVuZENoaWxkKGRlbGV0ZVRvZG8pOyAgXG5cbiAgICAgICAgdG9kb1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb1Jvdyk7IFxuICAgIH0pO1xufVxuXG4vLyBUb2RvRGVzY3JpcHRpb24oKTogV2lsbCBkaXNwbGF5IHRoZSBkZXRhaWxzIGFib3V0IHRoZSB0b2RvLlxuZnVuY3Rpb24gVG9kb0Rlc2NyaXB0aW9uKGUpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTsgXG5cbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGVzY3JpcHRpb25XaW5kb3cuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi13aW5kb3cnKTtcblxuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlQnV0dG9uSW1hZ2Uuc3JjID0gd2luZG93Q2xvc2VJbWc7XG4gICAgY2xvc2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25JbWFnZSk7IFxuXG4gICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0Rlc2NyaXB0aW9uV2luZG93LmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbiAgICB0b2RvRGVzY3JpcHRpb25XaW5kb3cuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7IFxuXG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLm5hbWUgPT09IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNTZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZGV0YWlsc1NlY3Rpb25PbmUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSk7IFxuICAgICAgICAgICAgZGV0YWlsc1NlY3Rpb25PbmUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzU2VjdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGRldGFpbHNTZWN0aW9uVHdvLmFwcGVuZENoaWxkKGR1ZURhdGVUaXRsZSk7IFxuICAgICAgICAgICAgZGV0YWlsc1NlY3Rpb25Ud28uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNTZWN0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICBkZXRhaWxzU2VjdGlvblRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuICAgICAgICAgICAgZGV0YWlsc1NlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eSk7IFxuXG4gICAgICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNTZWN0aW9uT25lKTtcbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1NlY3Rpb25Ud28pO1xuICAgICAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzU2VjdGlvblRocmVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFpblNjcmVlbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbHRlcjogYmx1cigxMHB4KTsnKTsgLy8gQmx1ciB0aGUgYmFja2dyb3VuZCBcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtY2xpY2tlcicpOyBcbiAgICBEaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25XaW5kb3cpO1xuXG4gICAgY2xvc2VCdXR0b25JbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlbW92ZVRvZG9EZXNjcmlwdGlvbik7XG59XG5cbi8vIFJlbW92ZVRvZG9EZXNjcmlwdGlvbigpOiBXaWxsIHJlbW92ZSB0aGUgdG9kbyBkZXNjcmlwdGlvbiB3aW5kb3dcbmZ1bmN0aW9uIFJlbW92ZVRvZG9EZXNjcmlwdGlvbigpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjcmlwdGlvbi13aW5kb3cnKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzY3JpcHRpb24td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdJyk7XG4gICAgXG4gICAgY29udGVudC5yZW1vdmVDaGlsZCh0b2RvRGVzY3JpcHRpb25XaW5kb3cpOyBcblxuICAgIG1haW5TY3JlZW4ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpOyAvLyBSZW1vdmUgYmx1ciBiYWNrZ3JvdW5kXG4gICAgbWFpblNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLWNsaWNrZXInKTsgXG4gICAgRW5hYmxlQnV0dG9ucygpOyBcblxuICAgIGNsb3NlQnV0dG9uSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZW1vdmVUb2RvRGVzY3JpcHRpb24pO1xufVxuXG4vLyBDbGVhcklucHV0U2VjdGlvbigpOiBDbGVhcnMgdGhlIGlucHV0IHNlY3Rpb24uXG5mdW5jdGlvbiBDbGVhcklucHV0U2VjdGlvbigpe1xuICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMiknKTtcbiAgICBpbnB1dFNlY3Rpb24ucmVwbGFjZUNoaWxkcmVuKCk7IFxufVxuXG4vLyBSZW1vdmVQcmV2aW91c1NlbGVjdGVkQnV0dG9uKCk6IFdpbGwgcmVtb3ZlIHRoZSBwcmV2aW91cyBzZWxlY3RlZCBidXR0b24gY2xhc3NsaXN0LlxuZnVuY3Rpb24gUmVtb3ZlUHJldmlvdXNTZWxlY3RlZEJ1dHRvbigpe1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uJyk7XG4gICAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1idXR0b24nKSk7IFxuICAgIHByb2plY3RzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWJ1dHRvbicpKTsgXG59IiwiaW1wb3J0IHsgSW5wdXRUb2RvIH0gZnJvbSBcIi4vVG9kb0NvbnRlbnRcIjtcbmltcG9ydCB7IElucHV0UHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RDb250ZW50XCI7XG5pbXBvcnQgeyBJbnB1dE5vdGVzIH0gZnJvbSBcIi4vTm90ZUNvbnRlbnRcIjtcblxuaW1wb3J0IHsgVmlld1RvZG9zIH0gZnJvbSBcIi4vRGlzcGxheVRvZG9zXCI7IFxuaW1wb3J0IHsgUHJvamVjdENsaWNrZWQgfSBmcm9tIFwiLi9Qcm9qZWN0Q29udGVudFwiO1xuXG4vLyBJbml0aWFsaXplRG9tQ29udGVudCgpOiBJbml0YWxpemluZyBhbGwgZG9tIGRvbnRlbnQgZm9yIHRoZSBhcHBsaWNhdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURvbUNvbnRlbnQoKXtcbiAgICBNYWluVGl0bGUoKTtcblxuICAgIE1haW5TY3JlZW4oKTsgXG5cbiAgICBCdXR0b25TZWN0aW9uKCk7XG5cbiAgICBJbnB1dFNlY3Rpb24oKTtcblxuICAgIERpc3BsYXlQcm9qZWN0cygpO1xufVxuXG4vLyBNYWluVGl0bGUoKTogVGhlIG1haW4gdGl0bGUgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbmZ1bmN0aW9uIE1haW5UaXRsZSgpe1xuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgVG9kbyBMaXN0XCI7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7IFxufVxuXG4vLyBNYWluU2NyZWVuKCk6IFRoZSBtYWluIHRvZG8gbGlzdCBzY3JlZW4uXG5mdW5jdGlvbiBNYWluU2NyZWVuKCl7XG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1zY3JlZW4nKTtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5TY3JlZW4pO1xufVxuXG4vLyBCdXR0b25TZWN0aW9uKCk6IFRoZSBtYWluIGJ1dHRvbiBzZWN0aW9uIGZvciB0aGUgdG9kbyBsaXN0LlxuZnVuY3Rpb24gQnV0dG9uU2VjdGlvbigpe1xuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcbiAgICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKGJ1dHRvblNlY3Rpb24pO1xuXG4gICAgVG9kb0J1dHRvbigpO1xuXG4gICAgUHJvamVjdEJ1dHRvbigpOyBcblxuICAgIE5vdGVzQnV0dG9uKCk7XG5cbiAgICBWaWV3VG9kb3NCdXR0b24oKTtcbiAgICBcbiAgICBWaWV3Tm90ZXNCdXR0b24oKTsgXG59XG5cbi8vIElucHV0U2VjdGlvbigpOiBUaGUgbWFpbiBpbnB1dCBzZWN0aW9uIGZvciB0aGUgdG9kbyBsaXN0LlxuZnVuY3Rpb24gSW5wdXRTZWN0aW9uKCl7XG4gICAgY29uc3QgaW5wdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRTZWN0aW9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFRvZG8nc1wiO1xuXG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbicpO1xuXG4gICAgbWFpblNjcmVlbi5hcHBlbmRDaGlsZChpbnB1dFNlY3Rpb24pO1xufVxuXG4vLyBUb2RvQnV0dG9uKCk6IFRoZSB0b2RvIGxpc3QgYnV0dG9uLlxuZnVuY3Rpb24gVG9kb0J1dHRvbigpe1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICBcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKScpO1xuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7IFxuXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIElucHV0VG9kbyk7XG59XG5cbi8vIFByb2plY3RCdXR0b24oKTogVGhlIHByb2plY3QgYnV0dG9uLlxuZnVuY3Rpb24gUHJvamVjdEJ1dHRvbigpe1xuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcblxuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpJyk7IFxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG5cbiAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgSW5wdXRQcm9qZWN0KTsgXG59XG5cbi8vIE5vdGVzQnV0dG9uKCk6IFRoZSBub3RlcyBidXR0b24uIFxuZnVuY3Rpb24gTm90ZXNCdXR0b24oKXtcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5vdGVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgTm90ZVwiO1xuXG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSknKTtcbiAgICBidXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKG5vdGVzQnV0dG9uKTtcblxuICAgIG5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgSW5wdXROb3Rlcyk7IFxufVxuXG4vLyBWaWV3VG9kb3NCdXR0b24oKTogQnV0dG9uIHdpbGwgYWxsb3cgdGhlIHVzZXJzIHRvIHZpZXcgYWxsIHRoZSBjdXJyZW50IHRvZG9zLlxuZnVuY3Rpb24gVmlld1RvZG9zQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSknKTtcblxuICAgIGNvbnN0IHZpZXdUb2Rvc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZpZXdUb2Rvc0J1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3IFRvZG9zJztcblxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQodmlld1RvZG9zQnV0dG9uKTsgXG5cbiAgICB2aWV3VG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBWaWV3VG9kb3MpOyBcbn1cblxuLy8gVmlld05vdGVzQnV0dG9uKCk6IEJ1dHRvbiB3aWxsIGFsbG93IHRoZSB1c2VyIHRvIHZpZXcgYWxsIHRoZSBjdXJyZW50IG5vdGVzLlxuZnVuY3Rpb24gVmlld05vdGVzQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSknKTtcblxuICAgIGNvbnN0IHZpZXdOb3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZpZXdOb3Rlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3IE5vdGVzJztcblxuICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQodmlld05vdGVzQnV0dG9uKTtcbn1cblxuLy8gRGlzcGxheVByb2plY3RzKCk6IFdpbGwgZGlzcGxheSBhbGwgdGhlIGN1cnJlbnQgcHJvamVjdHMuXG5leHBvcnQgZnVuY3Rpb24gRGlzcGxheVByb2plY3RzKCl7XG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSknKTtcbiAgICBcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgZGlzcGxheVByb2plY3RzLmFwcGVuZENoaWxkKHRpdGxlKTsgXG5cbiAgICBidXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0cyk7IFxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIGlmIChwcm9qZWN0cyAhPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnByb2plY3ROYW1lfWA7XG4gICAgXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7IFxuICAgIFxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFByb2plY3RDbGlja2VkKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCIvLyBJbnB1dE5vdGUoKTogV2lsbCBhbGxvdyB0aGUgdXNlciB0byBpbnB1dCBub3RlcyBpbnRvIHRoZSBhcHBsaWNhdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE5vdGVzKGUpe1xuICAgIENsZWFySW5wdXRTZWN0aW9uKCk7XG4gICAgUmVtb3ZlUHJldmlvdXNTZWxlY3RlZEJ1dHRvbigpOyBcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9ICdjdXJyZW50LWJ1dHRvbic7IFxuXG4gICAgTm90ZUZvcm0oKTsgXG4gICAgTm90ZUlucHV0KCk7IFxuICAgIE5vdGVTdWJtaXQoKTtcbn1cblxuLy8gTm90ZUZvcm0oKTogQ3JlYXRlcyB0aGUgdXNlciBub3RlIGZvcm0uXG5mdW5jdGlvbiBOb3RlRm9ybSgpe1xuICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMiknKTtcbiAgICBcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGlucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChub3RlRm9ybSk7IFxufVxuXG4vLyBOb3RlSW5wdXQoKTogQ3JlYXRlcyB0aGUgdGhlIHVzZXIgaW5wdXQgZm9yIG5vdGVzLiBcbmZ1bmN0aW9uIE5vdGVJbnB1dCgpe1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0nKTsgXG5cbiAgICBjb25zdCBub3RlRm9ybVNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBub3RlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbm90ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgTm90ZXMnO1xuICAgIG5vdGVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGUtaW5wdXQnKTtcbiAgICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbm90ZS1pbnB1dCcpO1xuICAgIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGUtaW5wdXQnKTsgXG5cbiAgICBub3RlRm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQobm90ZUlucHV0TGFiZWwpO1xuICAgIG5vdGVGb3JtU2VjdGlvbk9uZS5hcHBlbmRDaGlsZChub3RlSW5wdXQpO1xuXG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUZvcm1TZWN0aW9uT25lKTsgXG59XG5cbi8vIE5vdGVTdWJtaXQoKTogQ3JlYXRlcyB0aGUgc3VibWl0IGJ1dHRvbi4gXG5mdW5jdGlvbiBOb3RlU3VibWl0KCl7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybScpO1xuXG4gICAgY29uc3Qgbm90ZUZvcm1TZWN0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgbm90ZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5vdGVTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JzsgXG4gICAgbm90ZVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cbiAgICBub3RlRm9ybVNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQobm90ZVN1Ym1pdCk7XG5cbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlRm9ybVNlY3Rpb25Ud28pO1xufVxuXG4vLyBDbGVhcklucHV0U2VjdGlvbigpOiBDbGVhcnMgdGhlIGlucHV0IHNlY3Rpb25cbmZ1bmN0aW9uIENsZWFySW5wdXRTZWN0aW9uKCl7XG4gICAgY29uc3QgaW5wdXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKScpO1xuICAgIGlucHV0U2VjdGlvbi5yZXBsYWNlQ2hpbGRyZW4oKTsgXG59XG5cbi8vIFJlbW92ZVByZXZpb3VzU2VsZWN0ZWRCdXR0b24oKTogV2lsbCByZW1vdmUgdGhlIHByZXZpb3VzIHNlbGVjdGVkIGJ1dHRvbiBjbGFzc2xpc3QuXG5mdW5jdGlvbiBSZW1vdmVQcmV2aW91c1NlbGVjdGVkQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBidXR0b24nKTtcbiAgICBidXR0b25TZWN0aW9uLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWJ1dHRvbicpKTtcbn0iLCJpbXBvcnQgeyBTdG9yZVByb2plY3RzIH0gZnJvbSBcIi4uL3V0aWxzL0luaXRpYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBTdG9yZUVkaXRlZFRvZG9Qcm9qZWN0cyB9IGZyb20gXCIuLi91dGlscy9Jbml0aWFsU3RvcmFnZVwiO1xuaW1wb3J0IHsgRGVsZXRlU3RvcmVkUHJvamVjdCB9IGZyb20gXCIuLi91dGlscy9Jbml0aWFsU3RvcmFnZVwiO1xuaW1wb3J0IHsgdG9kb01hdGNoZXIgfSBmcm9tIFwiLi4vdXRpbHMvVG9kb01hdGNoZXJcIjtcbmltcG9ydCB7IHByb2plY3RNYXRjaGVyIH0gZnJvbSBcIi4uL3V0aWxzL1Byb2plY3RNYXRjaGVyXCI7XG5pbXBvcnQgeyBEaXNhYmxlQnV0dG9ucywgRW5hYmxlQnV0dG9ucyB9IGZyb20gXCIuLi91dGlscy9CdXR0b25BY3RpdmF0aW9uXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuaW1wb3J0IHBsdXNCdXR0b25JbWFnZSBmcm9tICcuLi9pbWFnZXMvcGx1cy5zdmcnOyBcbmltcG9ydCB3aW5kb3dDbG9zZUltYWdlIGZyb20gJy4uL2ltYWdlcy93aW5kb3ctY2xvc2Uuc3ZnJztcbmltcG9ydCBkZWxldGVGb3JldmVyQnV0dG9uIGZyb20gJy4uL2ltYWdlcy9kZWxldGUtZm9yZXZlci5zdmcnO1xuXG5pbXBvcnQgeyBEaXNwbGF5UHJvamVjdFRvZG9zIH0gZnJvbSBcIi4vRGlzcGxheVByb2plY3RUb2Rvc1wiO1xuXG5cbi8vIElucHV0UHJvamVjdCgpOiBBbGxvd3MgdGhlIHVzZXIgdG8gaW5wdXQgcHJvamVjdCBpbmZvcm1hdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRQcm9qZWN0KGUpe1xuICAgIENsZWFySW5wdXRTZWN0aW9uKCk7XG4gICAgUmVtb3ZlUHJldmlvdXNTZWxlY3RlZEJ1dHRvbigpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID0gXCJjdXJyZW50LWJ1dHRvblwiOyBcblxuICAgIFByb2plY3RGb3JtKCk7XG4gICAgUHJvamVjdE5hbWUoKTsgXG4gICAgUHJvamVjdFN1Ym1pdCgpO1xufVxuXG4vLyBQcm9qZWN0Rm9ybSgpOiBDcmVhdGVzIHRoZSB1c2VyIHByb2plY3QgZm9ybS5cbmZ1bmN0aW9uIFByb2plY3RGb3JtKCl7XG4gICAgY29uc3QgaW5wdXRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgXG4gICAgaW5wdXRTY3JlZW4uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pOyBcbn1cblxuLy8gUHJvamVjdE5hbWUoKTogQ3JlYXRlcyB0aGUgdXNlciBwcm9qZWN0IGlucHV0IGZvciB0aGUgbmFtZS5cbmZ1bmN0aW9uIFByb2plY3ROYW1lKCl7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybScpO1xuXG4gICAgY29uc3QgcHJvamVjdEZvcm1TZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgXG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0LW5hbWUnKTtcblxuICAgIHByb2plY3RGb3JtU2VjdGlvbk9uZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgICBwcm9qZWN0Rm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpOyBcblxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RGb3JtU2VjdGlvbk9uZSk7IFxufVxuXG4vLyBQcm9qZWN0U3VibWl0KCk6IENyZWF0ZXMgdGhlIHVzZXIgcHJvamVjdCBzdWJtaXQgYnV0dG9uLlxuZnVuY3Rpb24gUHJvamVjdFN1Ym1pdCgpe1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Rm9ybVNlY3Rpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiOyBcbiAgICBwcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBcbiAgICBwcm9qZWN0Rm9ybVNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7IFxuXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1TZWN0aW9uVHdvKTsgXG5cbiAgICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUHJvamVjdFN1Ym1pdHRlZCk7XG59XG5cbi8vIFByb2plY3RTdWJtaXR0ZWQoKTogU3VibWl0dGluZyB0aGUgcHJvamVjdCBpbnRvIHRoZSBsb2NhbCBzdG9yYWdlLlxuZnVuY3Rpb24gUHJvamVjdFN1Ym1pdHRlZChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG4gICAgU3RvcmVQcm9qZWN0cyhwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xufVxuXG4vLyBQcm9qZWN0Q2xpY2tlZCgpOiBCcmluZ3MgdXAgdGhlIHByb2plY3QgY29udGVudCB3aGVuIGNsaWNrZWQgaW4gdGhlIGRpc3BsYXkgcHJvamVjdHMgc2VjdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0Q2xpY2tlZChlKXtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMiknKTsgXG5cbiAgICBwcm9qZWN0TWF0Y2hlci5tYXRjaGVyID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuICAgIFxuICAgIENsZWFySW5wdXRTZWN0aW9uKCk7XG4gICAgUmVtb3ZlUHJldmlvdXNTZWxlY3RlZEJ1dHRvbigpOyBcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtYnV0dG9uJyk7IFxuXG4gICAgLy8gVG9kbzogQWRkIHByb2plY3QgY29udGVudCBmcm9tIHRoZSBwcm9qZWN0IHRoYXQgdGhlIHVzZXIgaGFzIGNsaWNrZWQgb24gaW4gaGVyZS5cbiAgICAvLyBOb3RlOiBZb3UgbWF5IGJlIGFibGUgdG8gcHV0IHRoaXMgaW50byBhIGRpZmZlcmVudCBmdW5jdGlvbi5cbiAgICAvLyBOb3RlOiAzLTUtMjAyNCB+IFlvdSB3aWxsIHNob3djYXNlIGFsbCB0aGUgdG9kb3MgZnJvbSBlYWNoIHByb2plY3QgaGVyZS4gXG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlY3Rpb24nKTtcbiAgICBcbiAgICBpbnB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pOyBcblxuICAgIEFkZFRvZG9Ub1Byb2plY3QoKTtcbiAgICBEZWxldGVQcm9qZWN0KCk7IFxuXG4gICAgRGlzcGxheVByb2plY3RUb2RvcygpOyBcbn1cblxuLy8gRGVsZXRlUHJvamVjdCgpOiBCdXR0b24gd2lsbCBkZWxldGUgdGhlIGN1cnJlbnQgcHJvamVjdCB0aGF0IHRoZSB1c2VyIGhhcyBjbGlja2VkIG9uLlxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVByb2plY3QoKXtcbiAgICBjb25zdCBhZGRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VjdGlvbiA+IGRpdjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zcmMgPSBkZWxldGVGb3JldmVyQnV0dG9uO1xuICAgIGFkZFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG5cbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGVsZXRlUHJvamVjdFdpbmRvdyk7IFxufVxuXG4vLyBEZWxldGVQcm9qZWN0V2luZG93KCk6IFdpbGwgYnJpbmcgdGhlIGRlbGV0ZSBwcm9qZWN0IHRvIHByb21wdCB0aGUgdXNlciBhYm91dCBkZWxldGluZyB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBEZWxldGVQcm9qZWN0V2luZG93KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVQcm9qZWN0V2luZG93LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LXdpbmRvdycpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdFdpbmRvdyk7XG5cbiAgICBtYWluU2NyZWVuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsdGVyOiBibHVyKDEwcHgpOycpO1xuICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1jbGlja2VyJyk7XG4gICAgRGlzYWJsZUJ1dHRvbnMoKTsgXG5cbiAgICAvLyBDbG9zZSBXaW5kb3cgQnV0dG9uOlxuICAgIGNvbnN0IGNsb3NlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlQnV0dG9uSW1hZ2Uuc3JjID0gd2luZG93Q2xvc2VJbWFnZTtcbiAgICBjbG9zZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkltYWdlKTsgXG4gICAgZGVsZXRlUHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkNvbnRhaW5lcik7IFxuXG4gICAgLy8gRGVsZXRlIFByb21wdDpcbiAgICBjb25zdCBkZWxldGVQcm9tcHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgZGVsZXRlUHJvbXB0TXNzZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZWxldGVQcm9tcHRNc3NnLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlIHdpdGggcHJvamVjdCBkZWxldGlvbj8nO1xuICAgIGRlbGV0ZVByb21wdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9tcHRNc3NnKTtcbiAgICBkZWxldGVQcm9qZWN0V2luZG93LmFwcGVuZENoaWxkKGRlbGV0ZVByb21wdENvbnRhaW5lcik7IFxuXG4gICAgLy8gRGVsZXRlIFByb2plY3QgKFllcyBCdXR0b24pOlxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdZZXMnO1xuICAgIGRlbGV0ZVByb21wdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pOyBcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEZWxldGVTdG9yZWRQcm9qZWN0KTtcblxuICAgIGNsb3NlQnV0dG9uSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDbG9zZURlbGV0ZVByb2plY3RXaW5kb3cpOyBcbn1cblxuLy8gQ2xvc2VEZWxldGVQcm9qZWN0V2luZG93KCk6IFdpbGwgY2xvc2UgdGhlIGRlbGV0ZSBwcm9qZWN0IHdpbmRvdy5cbmZ1bmN0aW9uIENsb3NlRGVsZXRlUHJvamVjdFdpbmRvdygpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTsgXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdC13aW5kb3cnKTsgXG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdC13aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDEpID4gaW1nW3NyY10nKTtcblxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGVsZXRlUHJvamVjdFdpbmRvdyk7XG5cbiAgICBtYWluU2NyZWVuLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtY2xpY2tlcicpO1xuICAgIEVuYWJsZUJ1dHRvbnMoKTsgXG5cbiAgICBjbG9zZUJ1dHRvbkltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2xvc2VEZWxldGVQcm9qZWN0V2luZG93KTsgXG59XG5cbi8vIEFkZFRvZG9Ub1Byb2plY3QoKTogVGhlIGFkZCB0b2RvIHBsdXMgYnV0dG9uIHdpbGwgYWRkIHRvZG9zIHRvIHRoZSBwcm9qZWN0LiAgXG5leHBvcnQgZnVuY3Rpb24gQWRkVG9kb1RvUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VjdGlvbicpOyBcbiAgICBjb25zdCBhZGRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZFRvZG9CdXR0b24uc3JjID0gcGx1c0J1dHRvbkltYWdlO1xuICAgIGFkZFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbik7IFxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKGFkZFRvZG9Db250YWluZXIpOyBcblxuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRUb2RvV2luZG93KTtcbn1cblxuLy8gQWRkVG9kbygpOiBUaGUgYWRkIHRvZG8gd2luZG93IHdpbGwgc2hvd2Nhc2UgYWxsIHRoZSBmb3JtIGZpZWxkcyB0byBhZGQgdGhlIHRvZG8gY29udGVudCB0byB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBBZGRUb2RvV2luZG93KGUpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcbiAgICBjb25zdCBhZGRUb2RvV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVG9kb1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby13aW5kb3cnKTsgXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRvZG9XaW5kb3cpO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbkltYWdlID0gbmV3IEltYWdlKCk7IFxuICAgIGNsb3NlQnV0dG9uSW1hZ2Uuc3JjID0gd2luZG93Q2xvc2VJbWFnZTtcbiAgICBjbG9zZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkltYWdlKTsgXG5cbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IGFkZFRvZG9TZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkVG9kb05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYWRkVG9kb05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIGFkZFRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWRkLXRvZG8tbmFtZScpO1xuICAgIGNvbnN0IGFkZFRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRUb2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZFRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvZG8tbmFtZScpO1xuICAgIGFkZFRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZGQtdG9kby1uYW1lJyk7IFxuICAgIGFkZFRvZG9TZWN0aW9uT25lLmFwcGVuZENoaWxkKGFkZFRvZG9OYW1lTGFiZWwpO1xuICAgIGFkZFRvZG9TZWN0aW9uT25lLmFwcGVuZENoaWxkKGFkZFRvZG9OYW1lKTsgXG5cbiAgICBjb25zdCBhZGRUb2RvU2VjdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRvZG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBhZGRUb2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCAgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgYWRkVG9kb0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWRkLXRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBhZGRUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGFkZFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGFkZFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10b2RvLWRlc2NyaXB0aW9uJyk7IFxuICAgIGFkZFRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLXRvZG8tZGVzY3JpcHRpb24nKTsgXG4gICAgYWRkVG9kb1NlY3Rpb25Ud28uYXBwZW5kQ2hpbGQoYWRkVG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGFkZFRvZG9TZWN0aW9uVHdvLmFwcGVuZENoaWxkKGFkZFRvZG9EZXNjcmlwdGlvbik7IFxuXG4gICAgY29uc3QgYWRkVG9kb1NlY3Rpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZFRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgYWRkVG9kb0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdhZGQtdG9kby1kdWUtZGF0ZScpO1xuICAgIGNvbnN0IGFkZFRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRUb2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGFkZFRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvZG8tZHVlLWRhdGUnKTtcbiAgICBhZGRUb2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWRkLXRvZG8tZHVlLWRhdGUnKTtcbiAgICBhZGRUb2RvU2VjdGlvblRocmVlLmFwcGVuZENoaWxkKGFkZFRvZG9EdWVEYXRlTGFiZWwpO1xuICAgIGFkZFRvZG9TZWN0aW9uVGhyZWUuYXBwZW5kQ2hpbGQoYWRkVG9kb0R1ZURhdGUpOyBcblxuICAgIGNvbnN0IGFkZFRvZG9TZWN0aW9uRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTsgXG4gICAgYWRkVG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7IFxuICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgbG93UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBZGRMb3dQcmlvcml0eSk7XG4gICAgY29uc3QgbWVkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZWRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWQnO1xuICAgIG1lZFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBtZWRQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEFkZE1lZFByaW9yaXR5KTsgXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQWRkSGlnaFByaW9yaXR5KTtcbiAgICBhZGRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgIGFkZFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRQcmlvcml0eSk7XG4gICAgYWRkVG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7IFxuICAgIGFkZFRvZG9TZWN0aW9uRm91ci5hcHBlbmRDaGlsZChhZGRUb2RvUHJpb3JpdHlMYWJlbCk7IFxuICAgIGFkZFRvZG9TZWN0aW9uRm91ci5hcHBlbmRDaGlsZChhZGRUb2RvUHJpb3JpdHkpOyBcblxuICAgIGNvbnN0IGFkZFRvZG9TZWN0aW9uRml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb2RvU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBhZGRUb2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRUb2RvU2VjdGlvbkZpdmUuYXBwZW5kQ2hpbGQoYWRkVG9kb1N1Ym1pdCk7XG5cbiAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvU2VjdGlvbk9uZSk7IFxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9TZWN0aW9uVHdvKTsgXG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb1NlY3Rpb25UaHJlZSk7IFxuICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9TZWN0aW9uRm91cik7XG4gICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb1NlY3Rpb25GaXZlKTsgIFxuXG4gICAgY2xvc2VCdXR0b25JbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENsb3NlQWRkVG9kb1dpbmRvdyk7XG5cbiAgICBhZGRUb2RvU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU3VibWl0QWRkVG9kbyk7XG4gICAgXG4gICAgbWFpblNjcmVlbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbHRlcjogYmx1cigxMHB4KTsnKTtcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtY2xpY2tlcicpOyBcbiAgICBEaXNhYmxlQnV0dG9ucygpOyBcblxuICAgIGFkZFRvZG9XaW5kb3cuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25Db250YWluZXIpOyBcbiAgICBhZGRUb2RvV2luZG93LmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKTsgXG59XG5cbi8vIEFkZExvd1ByaW9yaXR5KCk6IEFkZHMgYSBsb3cgcHJpb3JpdHkgdG8gdGhlIHRvZG8uXG5mdW5jdGlvbiBBZGRMb3dQcmlvcml0eSgpe1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcblxuICAgIG1lZFByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWNob3NlbicpO1xuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcblxuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNob3NlbicpO1xufVxuXG4vLyBBZGRNZWRQcmlvcml0eSgpOiBBZGRzIGEgbWVkIHByaW9yaXR5IHRvIHRoZSB0b2RvLlxuZnVuY3Rpb24gQWRkTWVkUHJpb3JpdHkoKXtcbiAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8td2luZG93ID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7IFxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTsgXG5cbiAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaG9zZW4nKTtcbn1cblxuLy8gQWRkSGlnaFByaW9yaXR5KCk6IEFkZHMgYSBoaWdoIHByaW9yaXR5IHRvIHRoZSB0b2RvLiBcbmZ1bmN0aW9uIEFkZEhpZ2hQcmlvcml0eSgpe1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG5cbiAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcblxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaG9zZW4nKTsgXG59XG5cbi8vIFN1Ym1pdEFkZFRvZG8oKTogV2lsbCBzdWJtaXQgYWxsIHRoZSBkYXRhIHRvIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIFN1Ym1pdEFkZFRvZG8oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGNvbnN0IGFkZFRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLW5hbWUnKTsgXG4gICAgY29uc3QgYWRkVG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgYWRkVG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tZHVlLWRhdGUnKTsgXG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8td2luZG93ID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgbWVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8td2luZG93ID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGFkZFRvZG9XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8td2luZG93Jyk7IFxuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTsgXG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZWN0aW9uJyk7IFxuICAgIGxldCBwcmlvcml0eSA9IFwiXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpOyAvL1Rlc3RpbmcgXG5cblxuICAgIGlmIChsb3dQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5LWNob3NlbicpKVxuICAgIHtcbiAgICAgICAgcHJpb3JpdHkgPSBcIkxvd1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZWRQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5LWNob3NlbicpKVxuICAgIHtcbiAgICAgICAgcHJpb3JpdHkgPSBcIk1lZFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eS1jaG9zZW4nKSlcbiAgICB7XG4gICAgICAgIHByaW9yaXR5ID0gXCJIaWdoXCI7XG4gICAgfVxuXG4gICAgaWYgKGFkZFRvZG9OYW1lLnZhbHVlID09PSBcIlwiIHx8IGFkZFRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9PT0gXCJcIiB8fCBhZGRUb2RvRHVlRGF0ZS52YWx1ZSA9PT0gXCJcIiB8fCBwcmlvcml0eSA9PT0gXCJcIilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZSBvZiB0aGUgZmllbGRzIGFyZSBtaXNzaW5nXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBmaWxsIGluIGFsbCB0aGUgZmllbGRzLi4uXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgIHJldHVybjsgXG4gICAgfVxuXG4gICAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShhZGRUb2RvRHVlRGF0ZS52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coJ0Z1bGwgRGF0ZTogJywgZHVlRGF0ZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJVc2VyIFllYXI6IFwiLCBkdWVEYXRlLmdldEZ1bGxZZWFyKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJVc2VyIE1vbnRoOiBcIiwgZHVlRGF0ZS5nZXRNb250aCgpKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBEYXRlOiBcIiwgZHVlRGF0ZS5nZXREYXRlKCkgKyAxKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBGdWxsIERhdGU6ICcsIGN1cnJlbnREYXRlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBZZWFyOiBcIiwgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgTW9udGg6IFwiLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBEYXRlOiBcIiwgY3VycmVudERhdGUuZ2V0RGF0ZSgpKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoZHVlRGF0ZS5nZXRGdWxsWWVhcigpLCBkdWVEYXRlLmdldE1vbnRoKCksIGR1ZURhdGUuZ2V0RGF0ZSgpICsgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkpKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgaWYgKHJlc3VsdCA9PT0gMSB8fCByZXN1bHQgPT09IDApXG4gICAge1xuICAgICAgICBjb25zdCByZWZvcm1hdHRlZER1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUoZHVlRGF0ZS5nZXRGdWxsWWVhcigpLCBkdWVEYXRlLmdldE1vbnRoKCksIGR1ZURhdGUuZ2V0RGF0ZSgpICsgMSksICdNTU0tZGQteXl5eScpO1xuXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE1hdGNoZXIubWF0Y2hlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zLnB1c2goe25hbWU6IGFkZFRvZG9OYW1lLnZhbHVlLCBkZXNjcmlwdGlvbjogYWRkVG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlOiByZWZvcm1hdHRlZER1ZURhdGUsIHByaW9yaXR5OiBwcmlvcml0eX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTsgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBTdG9yYWdlOiAnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgICAgICBtYWluU2NyZWVuLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgbWFpblNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLWNsaWNrZXInKTsgXG4gICAgICAgIEVuYWJsZUJ1dHRvbnMoKTsgXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoYWRkVG9kb1dpbmRvdyk7IFxuXG4gICAgICAgIHByb2plY3RTZWN0aW9uLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBBZGRUb2RvVG9Qcm9qZWN0KCk7IFxuICAgICAgICBEZWxldGVQcm9qZWN0KCk7IFxuICAgICAgICBEaXNwbGF5UHJvamVjdFRvZG9zKCk7IFxuICAgIH1cbiAgICAvLyBUT0RPOiAzLTA1LTIwMjQgfiBXaWxsIG5lZWQgdG8gY3JlYXRlIGEgcG9wdXAgbm90ZSB0aGF0IHRlbGxzIHRoZSB1c2VyIGlmIHRoZSBkYXRlIGlzIGJlaGluZCwgYW5kIHdoZW4gb25lIG9mIHRoZVxuICAgIC8vIGZpZWxkcyBpcyBlbXB0eS4gIFxufVxuXG4vLyBSZW1vdmVBZGRUb2RvKCk6IFdpbGwgY2xvc2UgdGhlIGFkZCB0b2RvIHdpbmRvdy5cbmZ1bmN0aW9uIENsb3NlQWRkVG9kb1dpbmRvdygpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcbiAgICBjb25zdCBhZGRUb2RvV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLXdpbmRvdycpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8td2luZG93ID4gZGl2Om50aC1jaGlsZCgxKSA+IGltZ1tzcmNdJyk7XG5cbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGFkZFRvZG9XaW5kb3cpO1xuICAgIG1haW5TY3JlZW4ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1jbGlja2VyJyk7XG4gICAgRW5hYmxlQnV0dG9ucygpOyBcblxuICAgIGNsb3NlQnV0dG9uSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDbG9zZUFkZFRvZG9XaW5kb3cpOyBcbn1cblxuLy8gQWRkVG9kb0RldGFpbHMoKTogRGV0YWlscyBhYm91dCB0aGUgdG9kbyBhZGRlZCB0byB0aGUgcHJvamVjdC5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0VG9kb0RldGFpbHNXaW5kb3coZSl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbicpOyBcblxuICAgIGNvbnN0IHByb2plY3RUb2RvRGV0YWlsc1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUb2RvRGV0YWlsc1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tZGV0YWlscy13aW5kb3cnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9EZXRhaWxzV2luZG93KTsgXG5cbiAgICAvLyBDbG9zZSBCdXR0b24gU2VjdGlvblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpOyBcbiAgICBjbG9zZUJ1dHRvbkltYWdlLnNyYyA9IHdpbmRvd0Nsb3NlSW1hZ2U7XG4gICAgY2xvc2VCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25JbWFnZSk7IFxuICAgIHByb2plY3RUb2RvRGV0YWlsc1dpbmRvdy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkNvbnRhaW5lcik7IFxuICAgIGNsb3NlQnV0dG9uSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDbG9zZVByb2plY3RUb2RvRGV0YWlsc1dpbmRvdyk7XG5cbiAgICAvLyBEZXRhaWxzIFNlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0VG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7IC8vIFRlc3RpbmdcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TWF0Y2hlci5tYXRjaGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0LnRvZG9zO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvT2JqZWN0ID0gdG9kb0FycmF5W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvZG9PYmplY3QubmFtZSA9PT0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0Rlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0b2RvT2JqZWN0LmRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRGVzY3JpcHRpb24pOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvRHVlRGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZG9PYmplY3QuZHVlRGF0ZX1gO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0R1ZURhdGVTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9EdWVEYXRlU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0R1ZURhdGUpOyBcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb1ByaW9yaXR5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHt0b2RvT2JqZWN0LnByaW9yaXR5fWA7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvUHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvUHJpb3JpdHlTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUb2RvUHJpb3JpdHkpOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0Rlc2NyaXB0aW9uU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0R1ZURhdGVTZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RUb2RvUHJpb3JpdHlTZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0VG9kb0RldGFpbHNXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9EZXRhaWxzKTsgXG5cbiAgICBtYWluU2NyZWVuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsdGVyOmJsdXIoMTBweCk7Jyk7XG4gICAgbWFpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWNsaWNrZXInKTtcbiAgICBEaXNhYmxlQnV0dG9ucygpOyBcbn1cblxuLy8gQ2xvc2VQcm9qZWN0VG9kb0RldGFpbHNXaW5kb3coKTogV2lsbCBjbG9zZSB0aGUgcHJvamVjdCB0b2RvIGRldGFpbHMgd2luZG93LlxuZnVuY3Rpb24gQ2xvc2VQcm9qZWN0VG9kb0RldGFpbHNXaW5kb3coKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuJyk7XG4gICAgY29uc3QgcHJvamVjdFRvZG9EZXRhaWxzV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1kZXRhaWxzLXdpbmRvdycpOyBcbiAgICBcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKHByb2plY3RUb2RvRGV0YWlsc1dpbmRvdyk7XG5cbiAgICBtYWluU2NyZWVuLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtY2xpY2tlcicpO1xuICAgIEVuYWJsZUJ1dHRvbnMoKTtcbn1cblxuLy8gUHJvamVjdFRvZG9FZGl0V2luZG93KCk6IFVzZXIgY2FuIGVkaXQgdGhlIHByb2plY3RzIHRvZG8gY29udGVudC5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0VG9kb0VkaXRXaW5kb3coZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCk7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuJyk7IFxuXG4gICAgY29uc3QgcHJvamVjdFRvZG9FZGl0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRvZG9FZGl0V2luZG93LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1lZGl0LXdpbmRvdycpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXRXaW5kb3cpO1xuXG4gICAgLy8gQ2xvc2UgQnV0dG9uIFNlY3Rpb246XG4gICAgY29uc3QgY2xvc2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY2xvc2VCdXR0b25JbWFnZS5zcmMgPSB3aW5kb3dDbG9zZUltYWdlO1xuICAgIGNsb3NlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uSW1hZ2UpOyBcbiAgICBwcm9qZWN0VG9kb0VkaXRXaW5kb3cuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25Db250YWluZXIpOyBcblxuICAgIC8vIEVkaXQgVG9kbyBTZWN0aW9uOlxuICAgIGNvbnN0IHByb2plY3RUb2RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TWF0Y2hlci5tYXRjaGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0LnRvZG9zO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0FycmF5W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvZG8ubmFtZSA9PT0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0aW5nIHRoZSB0b2RvIGluZGV4OiBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hdGNoZXIuZWRpdGVkVG9kb0luZGV4ID0gaTsgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWRpdCBOYW1lOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXRTZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvRWRpdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlZGl0LXByb2plY3QtbmFtZS10b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRWRpdCBOYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvRWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXByb2plY3QtbmFtZS10b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtcHJvamVjdC1uYW1lLXRvZG8nKTsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdE5hbWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3RvZG8ubmFtZX1gKTsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0TmFtZUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0U2VjdGlvbk9uZS5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXROYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXRTZWN0aW9uT25lKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWRpdCBEZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FZGl0U2VjdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXREZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlZGl0LXByb2plY3QtdG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXREZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IERlc2NyaXB0aW9uXCI7IFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1wcm9qZWN0LXRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtcHJvamVjdC10b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke3RvZG8uZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0U2VjdGlvblR3by5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXREZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0U2VjdGlvblR3by5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXRTZWN0aW9uVHdvKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFZGl0IER1ZSBEYXRlOiBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGAke3RvZG8uZHVlRGF0ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRNb250aCA9IFN0cmluZyhkLmdldE1vbnRoKCkgKyAxKTsgXG4gICAgICAgICAgICAgICAgICAgIGxldCBkWWVhciA9IFN0cmluZyhkLmdldEZ1bGxZZWFyKCkpOyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGREYXRlID0gU3RyaW5nKGQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZ2V0TW9udGgoKSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkTW9udGggPSAnMCcgKyBTdHJpbmcoZC5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5nZXREYXRlKCkgPCAxMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZERhdGUgPSAnMCcgKyBTdHJpbmcoZC5nZXREYXRlKCkpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXRTZWN0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FZGl0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0RHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VkaXQtcHJvamVjdC10b2RvLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdFZGl0IER1ZSBEYXRlJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FZGl0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdER1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtcHJvamVjdC10b2RvLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdER1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtcHJvamVjdC10b2RvLWR1ZS1kYXRlJyk7IFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXREdWVEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtkWWVhcn0tJHtkTW9udGh9LSR7ZERhdGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFNlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXREdWVEYXRlTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXRTZWN0aW9uVGhyZWUuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0RHVlRGF0ZSk7IFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXQuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0U2VjdGlvblRocmVlKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWRpdCBQcmlvcml0eTpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FZGl0U2VjdGlvbkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FZGl0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBQcmlvcml0eSc7IFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRWRpdFByb2plY3RUb2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBtZWRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lZFByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZCc7XG4gICAgICAgICAgICAgICAgICAgIG1lZFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRWRpdFByb2plY3RUb2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBFZGl0UHJvamVjdFRvZG9Qcmlvcml0eSk7IFxuICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gbG93UHJpb3JpdHkudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNob3NlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IG1lZFByaW9yaXR5LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaG9zZW4nKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gaGlnaFByaW9yaXR5LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2hvc2VuJyk7IFxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXRQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKG1lZFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0U2VjdGlvbkZvdXIuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0UHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFNlY3Rpb25Gb3VyLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRWRpdFByaW9yaXR5KTsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0VkaXRTZWN0aW9uRm91cik7IFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1bWJpdCBCdXR0b246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvRWRpdFNlY3Rpb25GaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUb2RvRWRpdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpOyBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRvZG9FZGl0U3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFN1Ym1pdEVkaXRlZFByb2plY3RUb2RvKTsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvRWRpdFNlY3Rpb25GaXZlLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRWRpdFN1Ym1pdCk7IFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb0VkaXQuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0U2VjdGlvbkZpdmUpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0VG9kb0VkaXRXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9FZGl0KTsgXG5cbiAgICBtYWluU2NyZWVuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsdGVyOiBibHVyKDEwcHgpOycpOyBcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtY2xpY2tlcicpO1xuICAgIERpc2FibGVCdXR0b25zKCk7IFxuXG4gICAgY2xvc2VCdXR0b25JbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENsb3NlUHJvamVjdFRvZG9FZGl0V2luZG93KTtcbn1cblxuLy8gRWRpdFByb2plY3RUb2RvUHJpb3JpdHkoKTogV2lsbCBhbGxvdyB0aGUgdXNlciB0byBjaG9vc2UgdGhlIHByaW9yaXR5IGZvciB0aGUgcHJvamVjdCB0b2RvLiBcbmZ1bmN0aW9uIEVkaXRQcm9qZWN0VG9kb1ByaW9yaXR5KGUpe1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1lZGl0LXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1lZGl0LXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWRpdC13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgICBcbiAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTsgXG4gICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWNob3NlbicpOyBcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNob3NlbicpOyAgXG59XG5cbi8vIFN1Ym1pdEVkaXRQcm9qZWN0VG9kbygpOiBXaWxsIHN1Ym1pdCBhbGwgdGhlIGVkaXRlZCBwcm9qZWN0IHRvZG8gZGF0YS5cbmZ1bmN0aW9uIFN1Ym1pdEVkaXRlZFByb2plY3RUb2RvKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTsgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IFxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VjdGlvbicpOyBcbiAgICBjb25zdCBwcm9qZWN0VG9kb0VkaXRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWVkaXQtd2luZG93Jyk7IFxuICAgIGNvbnN0IGVkaXRlZFByb2plY3RUb2RvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWRpdC13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCgxKSA+IGlucHV0Jyk7XG4gICAgY29uc3QgZWRpdGVkUHJvamVjdFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWRpdC13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCgyKSA+IHRleHRhcmVhJyk7XG4gICAgY29uc3QgZWRpdGVkUHJvamVjdFRvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1lZGl0LXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpID4gaW5wdXQnKTtcbiAgICBjb25zdCBlZGl0ZWRQcm9qZWN0VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdG9kby1lZGl0LXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gXCJcIjsgXG5cbiAgICBlZGl0ZWRQcm9qZWN0VG9kb1ByaW9yaXR5LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHktY2hvc2VuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gYnV0dG9uLnRleHRDb250ZW50OyBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVkaXRlZFByb2plY3RUb2RvTmFtZS52YWx1ZSA9PT0gXCJcIiB8fCBlZGl0ZWRQcm9qZWN0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiIHx8IGVkaXRlZFByb2plY3RUb2RvRHVlRGF0ZS52YWx1ZSA9PT0gXCJcIilcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgZmlsbCBpbiB0aGUgbWlzc2luZyBmaWVsZHMnKTsgLy8gVGVzdGluZ1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVG9kbzogV29yayB3aXRoIHRoZSBEdWVEYXRlIGZpcnN0LiBcbiAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoZWRpdGVkUHJvamVjdFRvZG9EdWVEYXRlLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygnRnVsbCBFZGl0ZWQgRGF0ZTogJywgZHVlRGF0ZSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnRWRpdGVkIFllYXI6ICcsIGR1ZURhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnRWRpdGVkIE1vbnRoOiAnLCBkdWVEYXRlLmdldE1vbnRoKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ0VkaXRlZCBEYXRlOiAnLCBkdWVEYXRlLmdldERhdGUoKSArIDEpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdGdWxsIEN1cnJlbnQgRGF0ZTogJywgY3VycmVudERhdGUpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgWWVhcjogJywgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBNb250aDogJywgY3VycmVudERhdGUuZ2V0TW9udGgoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBEYXRlOiAnLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZShkdWVEYXRlLmdldEZ1bGxZZWFyKCksIGR1ZURhdGUuZ2V0TW9udGgoKSwgZHVlRGF0ZS5nZXREYXRlKCkgKyAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGN1cnJlbnREYXRlLmdldERhdGUoKSkpO1xuICAgIGNvbnNvbGUubG9nKCdSZXN1bHQ6ICcsIHJlc3VsdCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBpZiAocmVzdWx0ID09PSAxIHx8IHJlc3VsdCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlZm9ybWF0dGVkRHVlRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlLmdldEZ1bGxZZWFyKCksIGR1ZURhdGUuZ2V0TW9udGgoKSwgZHVlRGF0ZS5nZXREYXRlKCkgKyAxKSwgJ01NTS1kZC15eXl5Jyk7XG5cbiAgICAgICAgU3RvcmVFZGl0ZWRUb2RvUHJvamVjdHMoZWRpdGVkUHJvamVjdFRvZG9OYW1lLnZhbHVlLCBlZGl0ZWRQcm9qZWN0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCByZWZvcm1hdHRlZER1ZURhdGUsIHByaW9yaXR5KTsgXG5cbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChwcm9qZWN0VG9kb0VkaXRXaW5kb3cpOyBcblxuICAgICAgICBwcm9qZWN0U2VjdGlvbi5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgICAgICAgbWFpblNjcmVlbi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1jbGlja2VyJyk7XG4gICAgICAgIEVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICBBZGRUb2RvVG9Qcm9qZWN0KCk7IFxuICAgICAgICBEaXNwbGF5UHJvamVjdFRvZG9zKCk7IFxuICAgIH1cbiAgICAvLyBOb3RlOiBJbXBsZW1lbnQgYW4gZWxzZSBzdGF0ZW1lbnQgaWYgdGhlIHJlc3VsdCBvZiB0aGUgZHVlIGRhdGUgaXMgb2xkZXIgdGhhbiB0aGUgY3VycmVudCBkYXRlLiBcblxuXG59XG5cbi8vIENsb3NlUHJvamVjdFRvZG9FZGl0V2luZG93KCk6IFdpbGwgY2xvc2UgdGhlIHByb2plY3QgdG9kbyBlZGl0IHdpbmRvdy5cbmZ1bmN0aW9uIENsb3NlUHJvamVjdFRvZG9FZGl0V2luZG93KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcHJvamVjdFRvZG9FZGl0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdG9kby1lZGl0LXdpbmRvdycpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcblxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJvamVjdFRvZG9FZGl0V2luZG93KTtcblxuICAgIG1haW5TY3JlZW4ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1jbGlja2VyJyk7XG4gICAgRW5hYmxlQnV0dG9ucygpOyBcbn1cblxuLy8gQ2xlYXJJbnB1dFNlY3Rpb24oKTogQ2xlYXJzIHRoZSBpbnB1dCBzZWN0aW9uIFxuZnVuY3Rpb24gQ2xlYXJJbnB1dFNlY3Rpb24oKXtcbiAgICBjb25zdCBpbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpJyk7XG4gICAgaW5wdXRTZWN0aW9uLnJlcGxhY2VDaGlsZHJlbigpO1xufVxuXG4vLyBSZW1vdmVQcmV2aW91c1NlbGVjdGVkQnV0dG9uKCk6IFdpbGwgcmVtb3ZlIHRoZSBwcmV2aW91cyBzZWxlY3RlZCBidXR0b24gY2xhc3NsaXN0LlxuZnVuY3Rpb24gUmVtb3ZlUHJldmlvdXNTZWxlY3RlZEJ1dHRvbigpe1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gYnV0dG9uJyk7IC8vIEJ1dHRvbiBTZWN0aW9uXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uJyk7IC8vIERpc3BsYXkgUHJvamVjdCBTZWN0aW9uLiAgXG4gICAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWJ1dHRvbicpKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWJ1dHRvbicpKTsgXG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBTdG9yZVRvZG9zLCBTdG9yZUVkaXRlZFRvZG9zLCBEZWxldGVTdG9yZWRUb2RvcyB9IGZyb20gXCIuLi91dGlscy9Jbml0aWFsU3RvcmFnZVwiO1xuaW1wb3J0IHsgRGlzYWJsZUJ1dHRvbnMsIEVuYWJsZUJ1dHRvbnMgfSBmcm9tIFwiLi4vdXRpbHMvQnV0dG9uQWN0aXZhdGlvblwiO1xuaW1wb3J0IHsgVmlld1RvZG9zIH0gZnJvbSBcIi4vRGlzcGxheVRvZG9zXCI7XG5pbXBvcnQgeyB0b2RvTWF0Y2hlciB9IGZyb20gXCIuLi91dGlscy9Ub2RvTWF0Y2hlclwiO1xuaW1wb3J0IHdpbmRvd0Nsb3NlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3dpbmRvdy1jbG9zZS5zdmcnO1xuXG4vLyBJbnB1dFRvZG8oKTogQWxsb3dzIHRoZSB1c2VyIHRvIGlucHV0IHRvZG8gaW5mb3JtYXRpb24uXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRUb2RvKGUpe1xuICAgIENsZWFySW5wdXRTZWN0aW9uKCk7IFxuICAgIFJlbW92ZVByZXZpb3VzU2VsZWN0ZWRCdXR0b24oKTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9IFwiY3VycmVudC1idXR0b25cIjtcblxuICAgIFRvZG9Gb3JtKCk7XG4gICAgVG9kb05hbWUoKTsgXG4gICAgVG9kb0Rlc2NyaXB0aW9uKCk7XG4gICAgVG9kb0R1ZURhdGUoKTsgXG4gICAgVG9kb1ByaW9yaXR5KCk7IFxuICAgIFRvZG9TdWJtaXQoKTtcbn1cblxuLy8gVG9kb0Zvcm0oKTogQ3JlYXRlcyB0aGUgdG9kbyBmb3JtLlxuZnVuY3Rpb24gVG9kb0Zvcm0oKXtcbiAgICBjb25zdCBpbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpJyk7XG4gICAgXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgXG4gICAgaW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTsgXG59XG5cbi8vIFRvZG9OYW1lKCk6IFRoZSB0b2RvIG5hbWUgc2VjdGlvbi5cbmZ1bmN0aW9uIFRvZG9OYW1lKCl7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybScpO1xuXG4gICAgY29uc3QgdG9kb0Zvcm1TZWN0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIHRvZG9OYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1uYW1lJyk7XG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW5hbWUnKTtcbiAgICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndG9kby1uYW1lJyk7XG5cbiAgICB0b2RvRm9ybVNlY3Rpb25PbmUuYXBwZW5kQ2hpbGQodG9kb05hbWVMYWJlbCk7XG4gICAgdG9kb0Zvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKHRvZG9OYW1lKTsgXG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybVNlY3Rpb25PbmUpO1xufVxuXG4vLyBUb2RvRGVzY3JpcHRpb24oKTogVGhlIHRvZG8gZGVzY3JpcHRpb24gc2VjdGlvbi5cbmZ1bmN0aW9uIFRvZG9EZXNjcmlwdGlvbigpe1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0nKTtcbiAgICBcbiAgICBjb25zdCB0b2RvRm9ybVNlY3Rpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyBcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICB0b2RvRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG5cbiAgICB0b2RvRm9ybVNlY3Rpb25Ud28uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHRvZG9Gb3JtU2VjdGlvblR3by5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pOyBcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JtU2VjdGlvblR3byk7IFxufVxuXG4vLyBUb2RvRHVlRGF0ZSgpOiBUaGUgdG9kbyBkdWUgZGF0ZSBzZWN0aW9uLlxuZnVuY3Rpb24gVG9kb0R1ZURhdGUoKXtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtJyk7XG5cbiAgICBjb25zdCB0b2RvRm9ybVNlY3Rpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgdG9kb0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLWR1ZS1kYXRlJyk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWR1ZS1kYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG8tZHVlLWRhdGUnKTsgXG5cbiAgICB0b2RvRm9ybVNlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUxhYmVsKTsgXG4gICAgdG9kb0Zvcm1TZWN0aW9uVGhyZWUuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Zvcm1TZWN0aW9uVGhyZWUpO1xufVxuXG4vLyBUb2RvUHJpb3JpdHkoKTogVGhlIHRvZG8gcHJpb3JpdHkgc2VjdGlvbi4gXG5mdW5jdGlvbiBUb2RvUHJpb3JpdHkoKXtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtJyk7XG5cbiAgICBjb25zdCB0b2RvRm9ybVNlY3Rpb25Gb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JzsgXG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkJztcbiAgICBtZWRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpOyBcblxuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7IFxuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRQcmlvcml0eSk7IFxuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpOyBcblxuICAgIHRvZG9Gb3JtU2VjdGlvbkZvdXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGFiZWwpOyBcbiAgICB0b2RvRm9ybVNlY3Rpb25Gb3VyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7IFxuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Zvcm1TZWN0aW9uRm91cik7XG5cbiAgICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIExvd1ByaW9yaXR5KTtcbiAgICBtZWRQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lZFByaW9yaXR5KTtcbiAgICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIaWdoUHJpb3JpdHkpOyBcbn1cblxuLy8gTG93UHJpb3JpdHkoKTogTG93IHByaW9yaXR5IHNlbGVjdGlvbi5cbmZ1bmN0aW9uIExvd1ByaW9yaXR5KGUpe1xuICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgICBcbiAgICBtZWRQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPSAncHJpb3JpdHktY2hvc2VuJztcbn1cblxuLy8gTWVkUHJpb3JpdHkoKTogTWVkIHByaW9yaXR5IHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBNZWRQcmlvcml0eShlKXtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7IFxuXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG4gICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWNob3NlbicpOyBcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9ICdwcmlvcml0eS1jaG9zZW4nO1xufVxuXG4vLyBIaWdoUHJpb3JpdHkoKTogSGlnaCBwcmlvcml0eSBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gSGlnaFByaW9yaXR5KGUpe1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG4gICAgbWVkUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7IFxuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID0gJ3ByaW9yaXR5LWNob3Nlbic7IFxufVxuXG4vLyBUb2RvU3VibWl0KCk6IFRoZSB0b2RvIHN1Ym1pdCBzZWN0aW9uLlxuZnVuY3Rpb24gVG9kb1N1Ym1pdCgpe1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9Gb3JtU2VjdGlvbkZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgdG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7IFxuXG4gICAgdG9kb0Zvcm1TZWN0aW9uRml2ZS5hcHBlbmRDaGlsZCh0b2RvU3VibWl0KTsgXG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRm9ybVNlY3Rpb25GaXZlKTsgXG5cbiAgICB0b2RvU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU3VibWl0RGF0YSk7XG59XG5cbi8vIFN1Ym1pdERhdGEoKTogU3VibWl0IHRoZSB0b2RvIGRhdGEgaW50byB0aGUgaW5pdGlhbCBzdG9yYWdlLlxuZnVuY3Rpb24gU3VibWl0RGF0YShlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0nKTsgXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKTsgXG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgbWVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDIpID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgzKScpOyBcbiAgICBsZXQgcHJpb3JpdHkgPSBcIlwiO1xuXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9EdWVEYXRlLnZhbHVlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSh0b2RvRHVlRGF0ZS52YWx1ZSk7IFxuICAgIGNvbnNvbGUubG9nKGR1ZURhdGUpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdEYXRlOiAnLCBkdWVEYXRlLmdldERhdGUoKSArIDEpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1llYXI6ICcsIGR1ZURhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnTW9udGg6ICcsIGR1ZURhdGUuZ2V0TW9udGgoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBEYXRlOiAnLCBjdXJyZW50RGF0ZSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBEYXkgRGF0ZTogJywgY3VycmVudERhdGUuZ2V0RGF0ZSgpKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IFllYXI6ICcsIGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgTW9udGg6ICcsIGN1cnJlbnREYXRlLmdldE1vbnRoKCkpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTtcblxuICAgIC8vIFRlc3QgaWYgdGhlIGR1ZSBkYXRlIGlzIGFoZWFkIG9mIHRoZSBjdXJyZW50IGRhdGUuIFxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoZHVlRGF0ZS5nZXRGdWxsWWVhcigpLCBkdWVEYXRlLmdldE1vbnRoKCksIGR1ZURhdGUuZ2V0RGF0ZSgpICsgMSksIFxuICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGN1cnJlbnREYXRlLmdldERhdGUoKSkpOyBcbiAgICBjb25zb2xlLmxvZygnQ29tcGFyaXNvbnMgUmVzdWx0OiAnLCByZXN1bHQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBpZiAobG93UHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eS1jaG9zZW4nKSlcbiAgICB7XG4gICAgICAgIHByaW9yaXR5ID0gXCJMb3dcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobWVkUHJpb3JpdHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmlvcml0eS1jaG9zZW4nKSlcbiAgICB7XG4gICAgICAgIHByaW9yaXR5ID0gXCJNZWRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHktY2hvc2VuJykpXG4gICAge1xuICAgICAgICBwcmlvcml0eSA9IFwiSGlnaFwiOyBcbiAgICB9XG5cbiAgICBpZiAodG9kb05hbWUudmFsdWUgPT09IFwiXCIgfHwgcHJpb3JpdHkgPT09IFwiXCIgfHwgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiIHx8IHRvZG9EdWVEYXRlLnZhbHVlID09PSBcIlwiKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBpcyBhbiBlbXB0eSBmaWVsZCwgcGxlYXNlIGZpbGwgaXQgaW4uXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgIHJldHVybjsgXG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gMSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlZm9ybWF0dGVkRHVlRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShkdWVEYXRlLmdldEZ1bGxZZWFyKCksIGR1ZURhdGUuZ2V0TW9udGgoKSwgZHVlRGF0ZS5nZXREYXRlKCkgKyAxKSwgJ01NTS1kZC15eXl5Jyk7XG5cbiAgICAgICAgU3RvcmVUb2Rvcyh0b2RvTmFtZS52YWx1ZSwgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlLCByZWZvcm1hdHRlZER1ZURhdGUsIHByaW9yaXR5KTtcblxuICAgICAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICAgICAgbWVkUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG4gICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcblxuICAgICAgICAvLyBWaWV3VG9kb3MoKTtcbiAgICB9XG59XG5cbi8vIEVkaXRUb2RvKCk6IEFsbG93cyB0aGUgdXNlciB0byBlZGl0IHRoZSB0b2RvLlxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRUb2RvKGUpe1xuICAgIGNvbnNvbGUubG9nKCdFZGl0aW5nIFRvZG8uLi4nKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUpOyAvLyBUZXN0aW5nXG4gICAgdG9kb01hdGNoZXIubWF0Y2hlciA9IGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbicpO1xuICAgIGNvbnN0IGVkaXRUb2RvV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdFRvZG9XaW5kb3cuY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvLXdpbmRvdycpOyBcblxuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlQnV0dG9uSW1hZ2Uuc3JjID0gd2luZG93Q2xvc2VJbWFnZTtcbiAgICBjbG9zZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkltYWdlKTsgXG5cbiAgICBlZGl0VG9kb1dpbmRvdy5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5uYW1lID09PSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBlZGl0Rm9ybVNlY3Rpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZWRpdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlZGl0LW5hbWUnKTtcbiAgICAgICAgICAgIGVkaXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBOYW1lJzsgXG4gICAgICAgICAgICBjb25zdCBlZGl0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGVkaXROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGVkaXROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW5hbWUnKTtcbiAgICAgICAgICAgIGVkaXROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtbmFtZScpO1xuICAgICAgICAgICAgZWRpdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dG9kby5uYW1lfWApO1xuICAgICAgICAgICAgZWRpdEZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKGVkaXROYW1lTGFiZWwpO1xuICAgICAgICAgICAgZWRpdEZvcm1TZWN0aW9uT25lLmFwcGVuZENoaWxkKGVkaXROYW1lSW5wdXQpOyBcblxuICAgICAgICAgICAgY29uc3QgZWRpdEZvcm1TZWN0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0RGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZWRpdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBjb25zdCBlZGl0RGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBlZGl0RGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBlZGl0RGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uSW5wdXQuaW5uZXJIVE1MID0gYCR7dG9kby5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZWRpdEZvcm1TZWN0aW9uVHdvLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgICAgIGVkaXRGb3JtU2VjdGlvblR3by5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb25JbnB1dCk7IFxuXG4gICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYCR7dG9kby5kdWVEYXRlfWApOyBcbiAgICAgICAgICAgIGxldCBkTW9udGggPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSk7IFxuICAgICAgICAgICAgbGV0IGRZZWFyID0gU3RyaW5nKGQuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBsZXQgZERhdGUgPSBTdHJpbmcoZC5nZXREYXRlKCkpOyBcbiAgICAgICAgICAgIGlmIChkLmdldE1vbnRoKCkgPCAxMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkTW9udGggPSAnMCcgKyBTdHJpbmcoZC5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkLmdldERhdGUoKSA8IDEwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGREYXRlID0gJzAnICsgU3RyaW5nKGQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRGb3JtU2VjdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGVkaXREdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZWRpdC1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgZWRpdER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdFZGl0IER1ZSBEYXRlJztcbiAgICAgICAgICAgIGNvbnN0IGVkaXREdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZWRpdER1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpOyBcbiAgICAgICAgICAgIGVkaXREdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICBlZGl0RHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlZGl0LWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICBlZGl0RHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtkWWVhcn0tJHtkTW9udGh9LSR7ZERhdGV9YCk7XG4gICAgICAgICAgICBlZGl0Rm9ybVNlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZCggZWRpdER1ZURhdGVMYWJlbCk7XG4gICAgICAgICAgICBlZGl0Rm9ybVNlY3Rpb25UaHJlZS5hcHBlbmRDaGlsZChlZGl0RHVlRGF0ZUlucHV0KTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGVkaXRGb3JtU2VjdGlvbkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGVkaXRQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJFZGl0IFByaW9yaXR5XCI7IFxuICAgICAgICAgICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0TG93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0TG93QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRMb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBFZGl0UHJpb3JpdHkpXG4gICAgICAgICAgICBlZGl0TG93QnV0dG9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICBjb25zdCBlZGl0TWVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0TWVkQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRNZWRCdXR0b24udGV4dENvbnRlbnQgPSAnTWVkJztcbiAgICAgICAgICAgIGVkaXRNZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBFZGl0UHJpb3JpdHkpO1xuICAgICAgICAgICAgY29uc3QgZWRpdEhpZ2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRIaWdoQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRIaWdoQnV0dG9uLnRleHRDb250ZW50ID0nSGlnaCc7XG4gICAgICAgICAgICBlZGl0SGlnaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEVkaXRQcmlvcml0eSk7IFxuXG4gICAgICAgICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJMb3dcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlZGl0TG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNob3NlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gJ01lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWRpdE1lZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaG9zZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdIaWdoJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlZGl0SGlnaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaG9zZW4nKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdExvd0J1dHRvbik7XG4gICAgICAgICAgICBlZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdE1lZEJ1dHRvbik7XG4gICAgICAgICAgICBlZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoZWRpdEhpZ2hCdXR0b24pOyBcbiAgICAgICAgICAgIGVkaXRGb3JtU2VjdGlvbkZvdXIuYXBwZW5kQ2hpbGQoZWRpdFByaW9yaXR5TGFiZWwpO1xuICAgICAgICAgICAgZWRpdEZvcm1TZWN0aW9uRm91ci5hcHBlbmRDaGlsZChlZGl0UHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0Rm9ybVNlY3Rpb25GaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0U3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjsgXG4gICAgICAgICAgICBlZGl0U3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGVkaXRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTdWJtaXRFZGl0ZWRUb2RvKTtcbiAgICAgICAgICAgIGVkaXRGb3JtU2VjdGlvbkZpdmUuYXBwZW5kQ2hpbGQoZWRpdFN1Ym1pdEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdEZvcm1TZWN0aW9uT25lKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXRGb3JtU2VjdGlvblR3byk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0Rm9ybVNlY3Rpb25UaHJlZSk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0Rm9ybVNlY3Rpb25Gb3VyKTsgXG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0Rm9ybVNlY3Rpb25GaXZlKTsgXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1haW5TY3JlZW4uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWx0ZXI6IGJsdXIoMTBweCk7Jyk7XG4gICAgbWFpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLWNsaWNrZXInKTtcbiAgICBEaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgZWRpdFRvZG9XaW5kb3cuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pOyBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVkaXRUb2RvV2luZG93KTsgXG5cbiAgICBjbG9zZUJ1dHRvbkltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVtb3ZlRWRpdFRvZG8pO1xufVxuXG4vLyBSZW1vdmVFZGl0VG9kbygpOiBXaWxsIHJlbW92ZSB0aGUgZWRpdCB0b2RvIHdpbmRvdy4gXG5mdW5jdGlvbiBSZW1vdmVFZGl0VG9kbyhlKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBlZGl0VG9kb1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8td2luZG93Jyk7XG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbicpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSkgPiBpbWdbc3JjXScpO1xuXG4gICAgbWFpblNjcmVlbi5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IFxuICAgIG1haW5TY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1jbGlja2VyJyk7XG4gICAgRW5hYmxlQnV0dG9ucygpOyBcblxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdFRvZG9XaW5kb3cpOyBcblxuICAgIGNsb3NlQnV0dG9uSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZW1vdmVFZGl0VG9kbyk7IFxufSBcblxuLy8gRWRpdFByaW9yaXR5KCk6IFdpbGwgYWxsb3cgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSB0b2RvIHByaW9yaXR5LlxuZnVuY3Rpb24gRWRpdFByaW9yaXR5KGUpe1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8td2luZG93ID4gZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby13aW5kb3cgPiBmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTsgXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG4gICAgbWVkUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgncHJpb3JpdHktY2hvc2VuJyk7XG4gICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByaW9yaXR5LWNob3NlbicpO1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2hvc2VuJyk7XG59IFxuXG4vLyBTdWJtaXRFZGl0ZWRUb2RvKCk6IFN1Ym1pdCBlZGl0ZWQgdG9kbyBiYWNrIGludG8gdGhlIGxvY2FsIHN0b3JhZ2UuXG5mdW5jdGlvbiBTdWJtaXRFZGl0ZWRUb2RvKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IFxuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTsgXG4gICAgY29uc3QgZWRpdFRvZG9XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLXdpbmRvdycpOyBcbiAgICBjb25zdCBlZGl0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbmFtZScpO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBlZGl0RHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUnKTtcbiAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvLXdpbmRvdyA+IGZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2ID4gYnV0dG9uJyk7XG4gICAgbGV0IGN1cnJlbnRQcmlvcml0eSA9IFwiXCI7XG4gICAgbGV0IGluZGV4VG9SZXBsYWNlID0gMDtcbiAgICBjb25zb2xlLmxvZyhlZGl0RHVlRGF0ZUlucHV0LnZhbHVlKTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgY29uc29sZS5sb2codG9kb3MpOyAvLyBUZXN0aW5nXG5cbiAgICBpZiAoZWRpdE5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCBlZGl0RHVlRGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBmaWxsIGFsbCB0aGUgaW5wdXQgZmllbGRzJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgcmV0dXJuOyBcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0ZWREdWVEYXRlID0gbmV3IERhdGUoZWRpdER1ZURhdGVJbnB1dC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coZWRpdGVkRHVlRGF0ZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ0VkaXRlZCBGdWxsIFllYXI6ICcsIGVkaXRlZER1ZURhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnRWRpdGVkIE1vbnRoOiAnLCBlZGl0ZWREdWVEYXRlLmdldE1vbnRoKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ0VkaXRlZCBEYXRlOiAnLCBlZGl0ZWREdWVEYXRlLmdldERhdGUoKSArIDEpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREYXRlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IEZ1bGwgWWVhcjogJywgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBNb250aDogJywgY3VycmVudERhdGUuZ2V0TW9udGgoKSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBEYXRlOiAnLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZShlZGl0ZWREdWVEYXRlLmdldEZ1bGxZZWFyKCksIGVkaXRlZER1ZURhdGUuZ2V0TW9udGgoKSwgZWRpdGVkRHVlRGF0ZS5nZXREYXRlKCkgKyAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCksIGN1cnJlbnREYXRlLmdldERhdGUoKSkpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gMSB8fCByZXN1bHQgPT09IDApXG4gICAge1xuICAgICAgICBjb25zdCByZWZvcm1hdHRlZER1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUoZWRpdGVkRHVlRGF0ZS5nZXRGdWxsWWVhcigpLCBlZGl0ZWREdWVEYXRlLmdldE1vbnRoKCksIGVkaXRlZER1ZURhdGUuZ2V0RGF0ZSgpICsgMSksICdNTU0tZGQteXl5eScpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVmb3JtYXR0ZWQgRHVlIERhdGU6ICcsIHJlZm9ybWF0dGVkRHVlRGF0ZSk7IC8vIFRlc3RpbmdcblxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8ubmFtZSA9PT0gdG9kb01hdGNoZXIubWF0Y2hlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleFRvUmVwbGFjZSA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0UHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5LWNob3NlbicpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmlvcml0eSA9IHByaW9yaXR5LmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgU3RvcmVFZGl0ZWRUb2RvcyhlZGl0TmFtZUlucHV0LnZhbHVlLCBlZGl0RGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgcmVmb3JtYXR0ZWREdWVEYXRlLCBjdXJyZW50UHJpb3JpdHksIHRvZG9zLCBpbmRleFRvUmVwbGFjZSk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdFRvZG9XaW5kb3cpO1xuICAgICAgICBtYWluU2NyZWVuLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgVmlld1RvZG9zKGUpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdWx0ID09PSAtMSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgZHVlIGRhdGUgaXMgYmVoaW5kIHRoZSBjdXJyZW50IGRhdGUuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSB1cGRhdGUgdGhlIGR1ZSBkYXRlLicpOyAvLyBUZXN0aW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgcmV0dXJuOyAgXG4gICAgfVxufVxuXG4vLyBEZWxldGVUb2RvKCk6IFdpbGwgRGVsZXRlIHRoZSB0b2RvIGZyb20gdGhlIGRpc3BsYXkgYW5kIGxvY2FsIHN0b3JhZ2UuXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlVG9kbyhlKXtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRvZG8ubmFtZSA9PT0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlubmVySFRNTClcbiAgICAgICAge1xuICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgRGVsZXRlU3RvcmVkVG9kb3ModG9kb3MpOyBcbiAgICBWaWV3VG9kb3MoZSk7XG59XG5cbi8vIENsZWFySW5wdXRTZWN0aW9uKCk6IENsZWFycyB0aGUgaW5wdXQgc2VjdGlvbi4gXG5mdW5jdGlvbiBDbGVhcklucHV0U2VjdGlvbigpe1xuICAgIGNvbnN0IGlucHV0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMiknKTtcbiAgICBpbnB1dFNlY3Rpb24ucmVwbGFjZUNoaWxkcmVuKCk7IFxufVxuXG4vLyBSZW1vdmVQcmV2aW91c1NlbGVjdGVkQnV0dG9uKCk6IFdpbGwgdGhlIHByZXZpb3VzIHNlbGVjdGVkIGJ1dHRvbiBjbGFzc2xpc3QuXG5mdW5jdGlvbiBSZW1vdmVQcmV2aW91c1NlbGVjdGVkQnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b24nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1idXR0b24nKSk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1idXR0b24nKSk7IFxufSIsIi8vIERpc2FibGVCdXR0b25zKCk6IFdpbGwgZGlzYWJsZSB0aGUgVUkgYnV0dG9ucy5cbmV4cG9ydCBmdW5jdGlvbiBEaXNhYmxlQnV0dG9ucygpe1xuICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gYnV0dG9uJyk7XG4gICAgY29uc3QgZGlzcGxheVRvZG9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IGRpdiA+IGJ1dHRvbicpO1xuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0VG9kb3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdG9kb3Mtc2VjdGlvbiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBpbWdbc3JjXScpOyAvLyBNaWdodCBub3QgbmVlZCB0aGlzLiBcbiAgICBcbiAgICBidXR0b25TZWN0aW9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSk7XG5cbiAgICBkaXNwbGF5VG9kb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9KTtcblxuICAgIGRpc3BsYXlQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH0pO1xufVxuXG4vLyBFbmFibGVCdXR0b25zKCk6IFdpbGwgZW5hYmxlIHRoZSBVSSBidXR0b25zLlxuZXhwb3J0IGZ1bmN0aW9uIEVuYWJsZUJ1dHRvbnMoKXtcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKSA+IGJ1dHRvbicpO1xuICAgIGNvbnN0IGRpc3BsYXlUb2RvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBkaXYgPiBidXR0b24nKTtcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uJyk7IFxuICAgIGNvbnN0IHByb2pldFRvZG9zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRvZG9zLXNlY3Rpb24gPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpID4gaW1nW3NyY10nKTsgLy8gTWlnaHQgbm90IG5lZWQgdGhpcy5cblxuICAgIGJ1dHRvblNlY3Rpb24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IFxuICAgIH0pO1xuXG4gICAgZGlzcGxheVRvZG9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgZGlzcGxheVByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpOyBcbiAgICB9KTsgXG59IiwiaW1wb3J0IHsgRGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4uL21vZHVsZXMvRG9tLUNvbnRlbnRcIjtcbmltcG9ydCB7IERpc3BsYXlQcm9qZWN0VG9kb3MgfSBmcm9tIFwiLi4vbW9kdWxlcy9EaXNwbGF5UHJvamVjdFRvZG9zXCI7XG5pbXBvcnQgeyBBZGRUb2RvVG9Qcm9qZWN0IH0gZnJvbSBcIi4uL21vZHVsZXMvUHJvamVjdENvbnRlbnRcIjtcbmltcG9ydCB7IERlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi4vbW9kdWxlcy9Qcm9qZWN0Q29udGVudFwiO1xuXG5pbXBvcnQgeyBwcm9qZWN0TWF0Y2hlciB9IGZyb20gXCIuL1Byb2plY3RNYXRjaGVyXCI7XG5pbXBvcnQgeyBFbmFibGVCdXR0b25zIH0gZnJvbSBcIi4vQnV0dG9uQWN0aXZhdGlvblwiO1xuXG4vLyBJbml0aWFsU3RvcmFnZSgpOiBUaGUgaW5pdGlhbCBsb2NhbCBzdG9yYWdlIGFyZWEgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiBJbml0aWFsU3RvcmFnZSgpe1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoW10pKTsgXG4gICAgfSBcbn1cblxuLy8gU3RvcmVUb2RvcygpOiBXaWxsIHN0b3JlIHRvZG9zIGludG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlVG9kb3ModG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSl7XG4gICAgY29uc29sZS5sb2coJ1RvZG8gTmFtZTogJywgdG9kb05hbWUpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1RvZG8gRGVzY3JpcHRpb246ICcsIHRvZG9EZXNjcmlwdGlvbik7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnVG9kbyBEdWUgRGF0ZTogJywgdG9kb0R1ZURhdGUpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1RvZG8gUHJpb3JpdHk6ICcsIHRvZG9Qcmlvcml0eSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCB0b2RvT2JqID0ge1xuICAgICAgICBuYW1lOiB0b2RvTmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogdG9kb0R1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiB0b2RvUHJpb3JpdHksXG4gICAgfVxuXG4gICAgbGV0IHRvZG9BcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICB0b2RvQXJyLnB1c2godG9kb09iaik7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnIpKTtcbn1cblxuLy8gU3RvcmVFZGl0ZWRUb2RvcygpOiBXaWxsIHN0b3JlIHRoZSBlZGl0ZWQgdG9kbyBjb250ZW50IGludG8gdGhlIGxvY2FsIHN0b3JhZ2UuXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVFZGl0ZWRUb2Rvcyh0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvQXJyYXksIGluZGV4VG9SZXBsYWNlKXtcbiAgICBjb25zb2xlLmxvZygnRWRpdGVkIFRvZG86ICcsIHRvZG9OYW1lKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdFZGl0ZWQgVG9kbyBEZXNjcmlwdGlvbjogJywgdG9kb0Rlc2NyaXB0aW9uKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnRWRpdGVkIFRvZG8gRHVlIERhdGU6ICcsIHRvZG9EdWVEYXRlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdFZGl0ZWQgVG9kbyBQcmlvcml0eTogJywgdG9kb1ByaW9yaXR5KTsgXG4gICAgY29uc29sZS5sb2coJ1RvZG8gQXJyYXk6ICcsIHRvZG9BcnJheSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ0luZGV4IFRvIFJlcGxhY2U6ICcsIGluZGV4VG9SZXBsYWNlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnN0IHRvZG9PYmogPSB7XG4gICAgICAgIG5hbWU6IHRvZG9OYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiB0b2RvRHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRvZG9Qcmlvcml0eSxcbiAgICB9O1xuXG4gICAgdG9kb0FycmF5W2luZGV4VG9SZXBsYWNlXSA9IHRvZG9PYmo7IFxuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9zJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSk7IFxufVxuXG4vLyBEZWxldGVTdG9yZWRUb2RvcygpOiBXaWxsIERlbGV0ZSB0aGUgc3RvcmVkIHRvZG9zIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVN0b3JlZFRvZG9zKHRvZG9BcnJheSl7XG4gICAgY29uc29sZS5sb2coJ1RvZG8gYXJyYXkgYWZ0ZXIgZGVsZXRpb24nLHRvZG9BcnJheSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9zJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSk7IFxufVxuXG4vLyBTdG9yZVByb2plY3RzKCk6IFdpbGwgc3RvcmUgdGhlIHByb2plY3QgaW50byB0aGUgbG9jYWwgc3RvcmFnZSBhcyBhbiBhcnJheS4gXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm9qZWN0cyhwcm9qZWN0KXtcbiAgICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNjcmVlbiA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0T2JqID0ge1xuICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdCxcbiAgICAgICAgdG9kb3M6IFtdLCBcbiAgICB9O1xuXG4gICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE9iaik7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTsgXG5cbiAgICBidXR0b25TZWN0aW9uLnJlbW92ZUNoaWxkKGRpc3BsYXlQcm9qZWN0cyk7IFxuXG4gICAgRGlzcGxheVByb2plY3RzKCk7IFxufVxuXG4vLyBTdG9yZVRvZG9Qcm9qZWN0cygpOiBXaWxsIHN0b3JlIHRoZSBlZGl0ZWQgdG9kbyBcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZUVkaXRlZFRvZG9Qcm9qZWN0cyh0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5KXtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IEFycmF5OiAnLCBwcm9qZWN0QXJyYXkpOyAvLyBUZXN0aW5nXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RNYXRjaGVyLm1hdGNoZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9BcnJheSA9IHByb2plY3QudG9kb3M7XG5cbiAgICAgICAgICAgIHRvZG9BcnJheVtwcm9qZWN0TWF0Y2hlci5lZGl0ZWRUb2RvSW5kZXhdID0ge25hbWU6IHRvZG9OYW1lLCBkZXNjcmlwdGlvbjogdG9kb0Rlc2NyaXB0aW9uLCBkdWVEYXRlOiB0b2RvRHVlRGF0ZSwgcHJpb3JpdHk6IHRvZG9Qcmlvcml0eX07XG5cbiAgICAgICAgICAgIHByb2plY3QudG9kb3MgPSB0b2RvQXJyYXk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuLy8gRGVsZXRlU3RvcmVkVG9kb1Byb2plY3QoKTogV2lsbCBkZWxldGUgdGhlIHN0b3JlZCB0b2RvIGluIHRoZSBwcm9lamVjdCBzZWN0aW9uLiBcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVTdG9yZWRUb2RvUHJvamVjdChlKXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCk7IC8vIFRlc3RpbmdcbiAgICBjb25zdCBkZWxldGVOYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TWF0Y2hlci5tYXRjaGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSBwcm9qZWN0LnRvZG9zO1xuXG4gICAgICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5uYW1lID09PSBkZWxldGVOYW1lKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3MgPSB0b2RvQXJyYXk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNlY3Rpb24nKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gICAgQWRkVG9kb1RvUHJvamVjdCgpO1xuICAgIERpc3BsYXlQcm9qZWN0VG9kb3MoKTtcbn1cblxuLy8gRGVsZXRlU3RvcmVkUHJvamVjdCgpOiBEZWxldGUgdGhlIGN1cnJlbnQgc3RvcmVkIHByb2plY3QgdGhhdCB0aGUgdXNlciBjbGlja2VkIG9uLiBcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVTdG9yZWRQcm9qZWN0KCl7XG4gICAgY29uc3QgZGlzcGxheUFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tc2NyZWVuID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2VjdGlvbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyBcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1wcm9qZWN0LXdpbmRvdycpO1xuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4nKTtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE1hdGNoZXIubWF0Y2hlcilcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRpc3BsYXlBbGxQcm9qZWN0cy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gcHJvamVjdE1hdGNoZXIubWF0Y2hlcilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zY3JlZW4gPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2Jyk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b24pOyBcbiAgICAgICAgfVxuICAgIH0pOyBcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gICAgaWYgKHByb2plY3RBcnJheS5sZW5ndGggIT09IDApXG4gICAge1xuICAgICAgICBjb25zdCBmaXJzdFByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gICAgICAgIHByb2plY3RNYXRjaGVyLm1hdGNoZXIgPSBmaXJzdFByb2plY3QucHJvamVjdE5hbWU7XG5cbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gcHJvamVjdE1hdGNoZXIubWF0Y2hlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1idXR0b24nKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtYnV0dG9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGVsZXRlUHJvamVjdFdpbmRvdyk7IFxuXG4gICAgICAgIHByb2plY3RTZWN0aW9uLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAgICAgICBtYWluU2NyZWVuLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgbWFpblNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLWNsaWNrZXInKTtcbiAgICAgICAgRW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgIEFkZFRvZG9Ub1Byb2plY3QoKTtcbiAgICAgICAgRGVsZXRlUHJvamVjdCgpO1xuICAgICAgICBEaXNwbGF5UHJvamVjdFRvZG9zKCk7IFxuICAgIH0gIFxuICAgIC8vIE5vdGU6IEltcGxlbWVudCBhbiBlbHNlIHN0YXRlbWVudCBpZiB0aGUgJ3Byb2plY3RBcnJheScgaXMgZW1wdHkuIFxufSIsImV4cG9ydCBsZXQgcHJvamVjdE1hdGNoZXIgPSB7bWF0Y2hlcjogbnVsbCwgZWRpdGVkVG9kb0luZGV4OiBudWxsfTsgXG4iLCJleHBvcnQgbGV0IHRvZG9NYXRjaGVyID0ge21hdGNoZXI6IG51bGx9OyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKlxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgZGlmZiA9IF9kYXRlTGVmdC5nZXRUaW1lKCkgLSBfZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVBc2M7XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgSW5pdGlhbGl6ZURvbUNvbnRlbnQgfSBmcm9tIFwiLi9tb2R1bGVzL0RvbS1Db250ZW50XCI7XG5pbXBvcnQgeyBJbml0aWFsU3RvcmFnZSB9IGZyb20gXCIuL3V0aWxzL0luaXRpYWxTdG9yYWdlXCI7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuLyoqIHxUb2RvIExpc3QgUHJvamVjdHxcbiAqID0+IEFzc2lnbm1lbnQ6XG4gKiAxLiBZb3VyICd0b2RvcycgYXJlIGdvaW5nIHRvIGJlIG9iamVjdHMgdGhhdCB5b3UnbGwgd2FudCB0byBkeW5hbWljYWxseSBjcmVhdGUsIHdoaWNoIG1lYW5zIFxuICogZWl0aGVyIHVzaW5nIGZhY3RvcmllcyBvciBjb25zdHJ1Y3RvcnMvY2xhc3NlcyB0byBnZW5lcmF0ZSB0aGVtLiBcbiAqIFxuICogMi4gQnJhaW5zdG9ybSB3aGF0IGtpbmQgb2YgcHJvcGVydGllcyB5b3VyIHRvZG8taXRlbXMgYXJlIGdvaW5nIHRvIGhhdmUuIEF0IGEgbWluaW11bSB0aGV5IHNob3VsZCBcbiAqIGhhdmUgYSB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgYW5kIHByaW9ydHkuIFlvdSBtaWdodCBhbHNvIHdhbnQgdG8gaW5jbHVkZSBub3RlcyBvciBldmVuIGFcbiAqIGNoZWNrbGlzdC5cbiAqIFlvdSB3aWxsIG5lZWQ6XG4gKiB0b2RvIHRpdGxlXG4gKiB0b2RvIGRlc2NyaXB0aW9uXG4gKiB0b2RvIGR1ZURhdGVcbiAqIHRvZG8gcHJpb3J0eVxuICogdG9kbyBub3Rlc1xuICogXG4gKiA4LiBXZSBoYXZlbid0IGxlYXJuZWQgYW55IHRlY2huaXF1ZXMgZm9yIGFjdHVhbGx5IHN0b3Jpbmcgb3VyIGRhdGEgYW55d2hlcmUsIHNvIHdoZW4gdGhlIHVzZXIgcmVmcmVzaGVzIHRoZSBwYWdlLCBhbGwgb2YgdGhlaXIgXG4gKiB0b2RvcyB3aWxsIGRpc2FwcGVhciEgWW91IHNob3VsZCBhZGQgc29tZSBwZXJzaXN0ZW5jZSB0byB0aGlzIHRvZG8gYXBwIHVzaW5nIHRoZSBXZWIgU3RvcmFnZSBBUEkuXG4gKiBcbiAqIExvY2FsU3RvcmFnZSBhbGxvd3MgeW91IHRvIHNhdmUgZGF0YSBvbiB0aGUgdXNlcidzIGNvbXB1dGVyLiBUaGUgZG93bnNpZGUgaGVyZSBpcyB0aGF0IHRoZSBkYXRhIGlzIG9ubHkgYWNjZXNzaWJsZSBvblxuICogdGhlIGNvbXB1dGVyIHRoYXQgaXQgd2FzIGNyZWF0ZWQgb24uIEV2ZW4gc28sIGl0J3MgcHJldHR5IGhhbmR5IVxuICogXG4gKiBTZXQgdXAgYSBmdW5jdGlvbiB0aGF0IHNhdmVzIHRoZSBwcm9qZWN0cyAoYW5kIHRvZG9zKSB0byBsb2NhbCBzdG9yYWdlIGV2ZXJ5IHRpbWUgYSBuZXcgcHJvamVjdCAob3IgdG9kbykgaXMgY3JlYXRlZCwgYW5kIGFub3RoZXIgZnVuY3Rpb24gXG4gKiB0aGF0IGxvb2tzIGZvciB0aGF0IGRhdGEgaW4gbG9jYWxTdG9yYWdlIHdoZW4geW91ciBhcHAgaXMgZmlyc3QgbG9hZGVkLiBBZGRpdGlvbmFsbHksIGhlcmUgYXJlIGEgY291cGxlIG9mIHF1aWNrIHRpcHMgdG8gaGVscCB5b3Ugbm90IGdldCBcbiAqIHRyaXBwZWQgdXA6IFxuICogLT4gTWFrZSBzdXJlIHlvdXIgYXBwIGRvZXNuJ3QgY3Jhc2ggaWYgdGhlIGRhdGEgeW91IG1heSB3YW50IHRvIHJldHJpZXZlIGZvcm0gbG9jYWxTdG9yYWdlIGlzbid0IHRoZXJlIVxuICogXG4gKiAtPiBZb3UgY2FuIGluc3BlY3QgZGF0YSB5b3Ugc2F2ZWQgaW4gbG9jYWxTdG9yYWdlIHVzaW5nIERldlRvb2xzISBUbyBkbyB0aGlzLCBvcGVuIHRoZSAnQXBwbGljYXRpb24nIHRhYiBpbiBEZXZUb29scyBhbmQgY2xpY2sgb24gdGhlIFxuICogJ0xvY2FsIFN0b3JhZ2UnIHRhYiB1bmRlciAnU3RvcmFnZScuIEV2ZXJ5IHRpbWUgeW91IGFkZCwgdXBkYXRlIGFuZCBkZWxldGUgZGF0YSBmcm9tICBsb2NhbFN0b3JhZ2UgaW4geW91ciBhcHAsIHRob3NlIGNoYW5nZXMgd2lsbCBiZVxuICogcmVmbGVjdGVkIGluIERldmxUb29scy4gXG4gKiBcbiAqIC0+IGxvY2FsU3RvcmFnZSB1c2VzIEpTT04gdG8gc2VuZCBhbmQgc3RvcmUgZGF0YSwgYW5kIHdoZW4geW91IHJldHJpZXZlIHRoZSBkYXRhLCBpdCB3aWxsIGFsc28gYmUgaW4gSlNPTiBmb3JtYXQuIEtlZXAgaW4gbWluZCB5b3VcbiAqIGNhbm5vdCBzdG9yZSBmdW5jdGlvbnMgaW4gSlNPTiwgc28geW91J2xsIGhhdmUgdG8gZmlndXJlIG91dCBob3cgdG8gYWRkIG1ldGhvZHMgYmFjayB0byB5b3VyIG9iamVjdCBwcm9wZXJ0aWVzIG9uY2UgeW91IGZldGNoIHRoZW0uIFxuICovXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyB8UHJhY3RpY2luZyB3aXRoIExvY2FsIFN0b3JhZ2V8XG4vKiogfEJhc2ljIENvbmNlcHRzfFxuICogPT4gU3RvcmFnZSBvYmplY3RzIGFyZSBzaW1wbGUga2V5LXZhbHVlIHN0b3Jlcywgc2ltaWxhciB0byBvYmplY3RzLCBidXQgdGhleSBzdGF5IGludGFjdCB0aHJvdWdoIHBhZ2UgbG9hZHMuIFRoZSBrZXlzIGFuZCB0aGUgdmFsdWVzIFxuICogYXJlIGFsd2F5cyBzdHJpbmdzIChub3RlIHRoYXQsIGFzIHdpdGggb2JqZWN0cywgaW50ZWdlciBrZXlzIHdpbGwgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gc3RyaW5ncykuIFlvdSBjYW4gYWNjZXNzIHRoZXNlIHZhbHVlcyBsaWtlIGFuIG9iamVjdHMsIG9yIHdpdGhcbiAqIHRoZSAnU3RvcmFnZS5nZXRJdGVtKCknIGFuZCAnU3RvcmFnZS5zZXRJdGVtKCknIG1ldGhvZHMuIFRoZXNlIHRocmVlIGxpbmVzIGFsbCBzZXQgdGhlIChzYW1lKSBjb2xvclNldHRpbmcgZW50cnk6IFxuICogXG4gKiBsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nID0gJyNhNDUwOWInOyBcbiAqIGxvY2FsU3RvcmFnZVtcImNvbG9yU2V0dGluZ1wiXSA9IFwiI2E0NTA5YlwiO1xuICogbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvclNldHRpbmdcIiwgXCIjYTQ1MDliXCIpO1xuICogXG4gKiBOb3RlOiBJdCdzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgV2ViIFN0b3JhZ2UgQVBJKHNldEl0ZW0sIGdldEl0ZW0sIHJlbW92ZUl0ZW0sIGtleSwgbGVuZ3RoKSB0byBwcmV2ZW50IHRoZSBwaXRmYWxscyBhc3NvY2lhdGVkIHdpdGggdXNpbmcgcGxhaW4gb2JqZWN0cyBhc1xuICoga2V5LXZhbHVlIHN0b3Jlcy4gXG4gKiBcbiAqID0+IFRoZSB0ZW8gbWVjaGFuaXNtcyB3aXRoaW4gV2ViIFN0b3JhZ2UgYXJlIGFzIGZvbGxvd3M6XG4gKiAxLiBTZXNzaW9uU3RvcmFnZSBtYWludGFpbnMgYSBzZXBhcmF0ZSBzdG9yYWdlIGFyZWEgZm9yIGVhY2ggZ2l2ZW4gb3JpZ2luIHRoYXQncyBhdmFpbGFibGUgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGFnZSBzZXNzaW9ucyAoYXMgbG9uZyBhcyB0aGUgYnJvd3NlciBpcyBvcGVuLFxuICogaW5jbHVkaW5nIHBhZ2UgcmVsb2FkcyBhbmQgcmVzdG9yZXMpLlxuICogXG4gKiAyLiBsb2NhbFN0b3JhZ2UgZG9lcyB0aGUgc2FtZSB0aGluZywgYnV0IHBlcnNpc3RzIGV2ZW4gd2hlbiB0aGUgYnJvd3NlciBpcyBjbG9zZWQgYW5kIHJlb3BlbmVkLiBcbiAqIFxuICogPT4gSlNPTjogU3RvcmFnZSBvbmx5IHN1cHBvcnRzIHN0b3JpbmcgYW5kIHJldHJpZXZpbmcgc3RyaW5ncy4gSWYgeW91IHdhbnQgdG8gc2F2ZSBvdGhlciBkYXRhIHR5cGVzLCB5b3UgaGF2ZSB0byBjb252ZXJ0IHRoZW0gdG8gc3RyaW5ncy4gRm9yIHBsYWluIG9iamVjdHNcbiAqIGFuZCBhcnJheXMsIHlvdSBjYW4gdXNlICdKU09OLnN0cmluZ2lmeSgpJy5cbiAqL1xuXG4vLyBjb25zb2xlLmxvZygnfFByYWN0aWNpbmcgd2l0aCBMb2NhbCBTdG9yYWdlfCcpO1xuLy8gbGV0IHRlc3RPbmUgPSAzMzM7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIHRlc3RPbmUpOyBcblxuLy8gbGV0IHJldHVybk9uZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKTtcbi8vIGNvbnNvbGUubG9nKCdWYWx1ZTogJywgcmV0dXJuT25lKTtcbi8vIGNvbnNvbGUubG9nKCdWYWx1ZSBUeXBlOiAnLCB0eXBlb2YocmV0dXJuT25lKSk7IFxuLy8gY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgTGVuZ3RoOiAnLCBsb2NhbFN0b3JhZ2UubGVuZ3RoKTsgXG4vLyBjb25zb2xlLmxvZygnXFxuJyk7XG5cbi8vIGNvbnNvbGUubG9nKCc9PiBEZWxldGluZyBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlLi4uJyk7XG4vLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xuLy8gY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgTGVuZ3RoOiAnLCBsb2NhbFN0b3JhZ2UubGVuZ3RoKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgXG5cblxuLy8gY29uc29sZS5sb2coJz0+IEFkZGluZyBhbiBvYmplY3QgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuLi4nKTtcbi8vIGNvbnN0IHRlc3RPYmogPSB7bmFtZU9uZTogJ0lzb20nfTtcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0T2JqJywgSlNPTi5zdHJpbmdpZnkodGVzdE9iaikpO1xuLy8gY29uc29sZS5sb2coJ09iamVjdCBWYWx1ZTogJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdE9iaicpKSk7IFxuLy8gY29uc29sZS5sb2coJ1xcbicpOyBcblxuLy8gY29uc29sZS5sb2coJz0+IEFkZGluZyBhIHByb3BlcnR5IHRvIHRoZSBsb2NhbCBzdG9yYWdlIG9iamVjdC4uLicpO1xuLy8gdGVzdE9ialsnbmFtZVR3byddID0gJ0pvcmRhbic7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdE9iaicsIEpTT04uc3RyaW5naWZ5KHRlc3RPYmopKTsgXG4vLyBjb25zb2xlLmxvZygnT2JqZWN0IFZhbHVlOiAnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0T2JqJykpKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgXG5cbi8vIGNvbnNvbGUubG9nKCc9PiBBZGRpbmcgYSBhbm90aGVyIHByb3BlcnR5IHRvIHRoZSBsb2NhbCBzdG9yYWdlIG9iamVjdC4uLicpO1xuLy8gdGVzdE9ialsnbmFtZVRocmVlJ10gPSAnQnJvY2snO1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3RPYmonLCBKU09OLnN0cmluZ2lmeSh0ZXN0T2JqKSk7XG4vLyBjb25zb2xlLmxvZygnT2JqZWN0IFZhbHVlOiAnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0T2JqJykpKTsgXG4vLyBjb25zb2xlLmxvZygnXFxuJyk7XG5cbi8vIGNvbnNvbGUubG9nKCc9PiBBZGRpbmcgYW5vdGhlciBvYmplY3QgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuLi4nKTtcbi8vIGNvbnN0IHJhbmRvbU9iaiA9IHtyYW5kb206IG51bGx9O1xuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JhbmRvbU9iaicsIEpTT04uc3RyaW5naWZ5KHJhbmRvbU9iaikpO1xuLy8gY29uc29sZS5sb2coJ09iamVjdCBWYWx1ZTogJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmFuZG9tT2JqJykpKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgXG5cbi8vIGNvbnNvbGUubG9nKCc9PiBEZWxldGluZyB0aGUgcmFuZG9tIG9iamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLi4uJyk7IFxuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JhbmRvbU9iaicpOyBcbi8vIGNvbnNvbGUubG9nKCdPYmplY3QgVmFsdWU6ICcsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JhbmRvbU9iaicpKSk7XG4vLyBjb25zb2xlLmxvZygnXFxuJyk7IFxuXG4vLyBjb25zb2xlLmxvZygnPT4gRGVsZXRpbmcgYSBwcm9wZXJ0eSBmcm9tIHRlc3Qgb2JqZWN0IGluIGxvY2FsIHN0b3JhZ2UuLi4nKTtcbi8vIGRlbGV0ZSB0ZXN0T2JqLm5hbWVUd287IFxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3RPYmonLCBKU09OLnN0cmluZ2lmeSh0ZXN0T2JqKSk7XG4vLyBjb25zb2xlLmxvZygnT2JqZWN0IFZhbHVlOiAnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0T2JqJykpKTsgXG4vLyBjb25zb2xlLmxvZygnXFxuJyk7IFxuXG4vLyBjb25zb2xlLmxvZygnPT4gRGVsZXRpbmcgdGVzdCBvYmplY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4uLicpO1xuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3RPYmonKTtcbi8vIGNvbnNvbGUubG9nKCdPYmplY3QgVmFsdWU6ICcsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RPYmonKSkpO1xuLy8gY29uc29sZS5sb2coJ1xcbicpOyBcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHxQcmFjdGljaW5nIHdpdGggRGF0ZS1mbnN8XG5jb25zb2xlLmxvZyhcInxQcmFjdGljaW5nIHdpdGggRGF0ZS1GbnN8XCIpOyAvLyBUZXN0aW5nIFxuXG5jb25zdCBkYXRlT25lID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKCdCYXNpYyBEYXRlIE9uZTogJywgZGF0ZU9uZSk7IFxuY29uc29sZS5sb2coJ0RhdGUgT25lIERheSBvZiB0aGUgd2VlayA6ICcsIGRhdGVPbmUuZ2V0RGF5KCkpO1xuY29uc29sZS5sb2coJ0RhdGUgT25lIERheTogJywgZGF0ZU9uZS5nZXREYXRlKCkpOyBcbmNvbnNvbGUubG9nKCdEYXRlIE9uZSBNb250aDogJywgZGF0ZU9uZS5nZXRNb250aCgpICsgMSk7IFxuY29uc29sZS5sb2coJ0RhdGUgT25lIEZ1bGxZZWFyOiAnLCBkYXRlT25lLmdldEZ1bGxZZWFyKCkpOyBcbmNvbnNvbGUubG9nKCdcXG4nKTsgXG5cbmNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZShkYXRlT25lLmdldEZ1bGxZZWFyKCksIGRhdGVPbmUuZ2V0TW9udGgoKSwgZGF0ZU9uZS5nZXREYXRlKCkpLCAnTU1NL2RkL3l5eXknKTtcbmNvbnNvbGUubG9nKCdSZXN1bHQgdXNpbmcgZm9ybWF0OiAnLCByZXN1bHQpO1xuY29uc29sZS5sb2coJ1xcbicpOyBcbmNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5Jbml0aWFsU3RvcmFnZSgpO1xuSW5pdGlhbGl6ZURvbUNvbnRlbnQoKTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9