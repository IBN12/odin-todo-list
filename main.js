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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/comfortaa/Comfortaa-Regular.ttf */ "./src/fonts/comfortaa/Comfortaa-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/springtown-market/SpringtownMarket_PERSONAL_USE_ONLY.otf */ "./src/fonts/springtown-market/SpringtownMarket_PERSONAL_USE_ONLY.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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

/* font-0 - Comfortaa */
@font-face {
    font-family:comfortaa;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
} 

/* font-1 - Springtown Market */
@font-face {
    font-family: springtown-market;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* display-mssg */
.display-mssg{
    margin-top: 10px;
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    line-height: 2;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* todo-mssg */
.todo-mssg{
    margin-top: 100px; 
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    line-height: 3;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* notes-mssg */
.notes-mssg{
    margin-top: 100px;
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    line-height: 3; 
    text-align: center !important;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* projects-mssg */
.projects-mssg{
    margin-top: 100px; 
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    line-height: 3;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* project-todo-mssg */
.project-todo-mssg{
    margin-top: 30px; 
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    line-height: 3; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* priority-choosen */
.priority-chosen{
    background-color: #2dd4bf;
    border: 1px solid #2dd4bf !important; 
    color: white;  
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* current-button */
.current-button{
    background-color: #2563eb !important;
    border: 1px solid #2563eb !important; 
    color: white; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* disable-clicker */
.disable-clicker{
    pointer-events: none;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* disable-resize */
.disable-resize{
    resize: none; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* error-container */
.error-container{
    display: flex;
    flex-direction: column; 
    gap: 3px; 

    color: #ef4444;
    font-weight: bold; 
    text-align: center; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |Content| */
#content{
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    padding: 10px; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |Main Title| */
.main-title{
    font-family: springtown-market, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    font-size: 3em;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |Main Screen| */
.main-screen{
    display: flex;
    gap: 3px;

    padding: 5px;
    height: 550px; /* Desktop Change: Might change height. */
}
.main-screen > div{
    border-radius: 10px;
}

.main-screen > div:nth-child(1){ /* Button Section (Button Screen) */
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 3px 3px 5px 1px black;
    padding: 5px;
    background-color: #94a3b8; 
}
.main-screen > div:nth-child(1) > button{
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    border-radius: 10px; 
    border: 1px solid #0f172a3f;
    padding: 5px 5px 5px 5px;
}
.main-screen > div:nth-child(1) > button:hover{
    background-color: #2564eb8c;
    border: 1px solid #2564eb8c;
    color: white; 
    cursor: pointer; 
}

.main-screen > div:nth-child(2){ /* Display Screen (Input Section) */
    width: 400px; /* Size may need to change depending on the amount of content. */
    text-align: center;
    background-color: #94a3b8; 
    padding: 10px;
    box-shadow: 3px 3px 5px 1px black; 
}
.main-screen > div:nth-child(2) > form{ /* New Todo Form */
    display: flex; 
    flex-direction: column;
    gap: 20px;
}
.main-screen > div:nth-child(2) > form > div > label{
    display: block;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    color: white;
}
.main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{
    margin: 0;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |New Todo Button Screen| */
#todo-name{ /* Todo Name Input */
    border: 1px solid #0f172aa9;
    border-top: none; 
    border-right: none;
    border-left: none;
    background-color: #94a3b8; 
    color: white;
    font-size: 14px;
    width: 180px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
#todo-name:focus{
    outline: none;
    border-bottom-color: #2563eb; 
}

#todo-description{ /* Todo Description Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    background-color: #94a3b8;
    color: white;
    width: 200px;
    padding: 5px;
    font-size: 14px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
#todo-description:focus{
    outline: none;
    border-color: #2563eb;
}

#todo-due-date{ /* Todo Due Date Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    background-color: #94a3b8; 
    padding: 5px;
    color: white;
    font-size: 16px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
#todo-due-date:hover{
    cursor: pointer; 
}
#todo-due-date:focus{
    outline: none;
    border-color: #2563eb; 
}

.main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ 
    display: flex;
    justify-content: center; 
    gap: 5px;
}
.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{
    padding: 0px 10px 0px 10px;
    font-size: 16px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    border: 1px solid #0f172a3f;
    border-radius: 10px; 
}
.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:hover{
    background-color:#2dd4bf; 
    border: 1px solid #2dd4bf; 
    color: white; 
    cursor: pointer; 
}

.main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */
    font-size: 16px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    padding: 0px 10px 0px 10px; 
    background-color: #2564eb8c;
    border: 1px solid #2564eb8c;
    border-radius: 10px;
    color: white; 
}
.main-screen > div:nth-child(2) > form > div:nth-child(5) > button:hover{
    border: 1px solid #2563eb;
    background-color: #2563eb; 
    cursor: pointer; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |View Todos Screen| */
.todo-screen{
    display: flex;
    flex-direction: column;
    gap: 10px;

    height: 100%;
    overflow-y: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #94a3b8 #0f172aa9; 
    padding: 10px;
}
.todo-screen > div{ /* todo rows (todo items)*/
    display: flex; 
    flex-direction: column;
    gap: 5px;

    border: 1px solid #0f172aa9;
    border-radius: 10px;
    padding: 3px; 
}
.todo-screen > div > div:nth-child(1){ /* Todo name container */
    word-wrap: break-word; 
    color: white; 
    font-size: 15px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
}
.todo-screen > div > div:nth-child(2){/* Todo Misc Container */
    display: flex;
    justify-content: center;
    gap: 5px;
}
.todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */
    width: 40px;
    height: 40px; 
    cursor: pointer; 
}

/* View Todo Screen|Description Window */
.todo-description-window{
    display: flex;
    flex-direction: column; 
    gap: 3px;

    border: 2px solid #0f172a !important;
    border-radius: 10px; 
    position: absolute;
    width: 500px;
    top: 100px;
    height: 300px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color:#94a3b888;
}
.todo-description-window > div:nth-child(1){ /* Close Container */
    display: flex;
    justify-content: end;
}
.todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer; 
}
.todo-description-window > div:nth-child(2){ /* Details Container */
    display: flex;
    flex-direction: column;
    gap: 5px; 

    padding: 5px;
}
.todo-description-window > div:nth-child(2) > div{
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    word-wrap:break-word;
    padding: 3px; 
}
.todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */
    font-weight: bold;
}
.todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */
    font-size: 15px; 
    color: white;
}

/* View Todo Screen|Edit Todo Window */
.edit-todo-window{
    border: 2px solid #0f172a;
    border-radius: 10px; 
    background-color: #94a3b888;
    position: absolute;
    width: 500px;
    height: 550px;
    top: 100px;
}
.edit-todo-window > div:nth-child(1){ /* Close Container */
    display: flex;
    justify-content: end;
}
.edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer; 
}
.edit-todo-window > form{ /* Edit Section (Form)*/
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 15px;

    padding: 10px;
}
.edit-todo-window > form > div > label{
    display: block; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    text-align: center; 
    color: white; 
}
.edit-todo-window > form > div > h4{
    margin: 0; 
    text-align: center;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}

#edit-name{ /* Edit Name Input */
    border: 1px solid #0f172aa9;
    border-left: none;
    border-right: none;
    border-top: none;
    background-color: #94a3b888;
    width: 180px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white;
}
#edit-name:focus{
    outline: none; 
    border-bottom-color: #2563eb; 
}

#edit-description{ /* Edit Description Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px;
    padding: 5px; 
    background-color: #94a3b888;
    color: white; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
}
#edit-description:focus{
    outline: none; 
    border-color:#2563eb; 
}

#edit-due-date{ /* Edit Due Date Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    background-color: #94a3b888;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    color: white;
    padding: 3px;
}
#edit-due-date:hover{
    cursor: pointer; 
}
#edit-due-date:focus{
    outline: none;
    border-color: #2563eb;
}

.edit-todo-window > form > div:nth-child(4) > div{ /* Edit Todo Priority Container */
    display: flex;
    gap: 5px; 
}
.edit-todo-window > form > div:nth-child(4) > div > button{
    border: 1px solid #0f172aa9;
    border-radius: 10px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    padding: 0px 5px 0px 5px;
}
.edit-todo-window > form > div:nth-child(4) > div > button:hover{
    background-color: #2dd4bf;
    border: 1px solid #2dd4bf;
    color: white; 
    cursor: pointer; 
}

.edit-todo-window > form > div:nth-child(5) > button{ /* Edit Todo Submit Button */
    border: 1px solid #2564eb8c;
    border-radius: 10px; 
    background-color: #2564eb8c;
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    padding: 3px 10px 3px 10px; 
}
.edit-todo-window > form > div:nth-child(5) > button:hover{
    background-color: #2563eb;
    border: 1px solid #2563eb;
    cursor: pointer; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |New Project Button Screen| */
#project-name{ /* Project Name Input */
    background-color: #94a3b8;
    border: 1px solid #0f172aa9;
    border-top: none;
    border-right: none;
    border-left: none; 
    width: 180px;
    font-size: 14px; 
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
}
#project-name:focus{
    outline: none; 
    border-bottom-color: #2563eb;
}

.main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */
    font-size: 16px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    padding: 0px 10px 0px 10px; 
    background-color: #2564eb8c;
    border: 1px solid #2564eb8c;
    border-radius: 10px;
    color: white;
}
.main-screen > div:nth-child(2) > form > div:nth-child(2) > button:hover{ /* Will also work with the "New Note Submit Button". */
    border: 1px solid #2563eb;
    background-color:#2563eb;
    cursor: pointer; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |View Projects Screen| */
.projects-screen{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    height: 100%;
    overflow-y: scroll; 
    scrollbar-width: thin; 
    scrollbar-color: #94a3b8 #0f172aa9; 
    padding: 10px;
}
.projects-screen > div{ /* Project Container (Each Project) */
    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid #0f172aa9;
    border-radius: 10px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 3px; 
}
.projects-screen > div > div:nth-child(1){ /* Project Name */
    color: white; 
    font-weight: bold; 
    word-wrap: break-word; 
    cursor: pointer; 
}
.projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */
    width: 40px;
    height: 40px;
    cursor: pointer; 
}

/* View Projects Screen|Delete Project Window| */
.delete-project-window{ 
    display: flex;
    flex-direction: column;
    gap: 15px; 

    position: absolute;
    top: 100px;
    width: 500px; 
    height: 300px;
    border: 2px solid #0f172a;
    border-radius: 10px;
    padding: 10px;  
}
.delete-project-window > div:nth-child(1){ /* Close Button Container */
    display: flex;
    justify-content: end; 
}
.delete-project-window > div:nth-child(1) > img[src]{ /* Close Button Image */
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer;
}

.delete-project-window > div:nth-child(2){ /* Delete Prompt Container */
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    padding: 5px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */
    color: red; 
    text-align: center; 
}
.delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */
    border: 1px solid #f87171;
    border-radius: 10px;
    padding: 3px 15px 3px 15px;
    background-color: #f87171; 
    color: white;
    font-weight: bold;  
    font-size: 15px; 
    cursor: pointer; 
}

/* View Projects Screen|Project Screen & Project Todos Section */
.project-screen{  
    display: flex;
    flex-direction: column;
    gap: 10px; 

    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-weight: bold; 
    color: white;
    height: 100%; 
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 #0f172aa9; 
    padding: 5px; 
}
.project-screen > div:nth-child(1){ /* Project Name */
    font-size: 16px; 
    word-wrap: break-word;
    letter-spacing: 2px;
}
.project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */
    display: flex;
    justify-content: space-around;  
    gap: 10px;

    border: 1px solid #0f172aa9;
    border-radius: 10px; 
}
.project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */
    width: 40px;
    height: 40px;
    cursor: pointer; 
}
.project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.project-todos-section > div{ /* Project Todo (Each todo) */
    display: flex;
    flex-direction: column;
    gap: 3px;

    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    padding: 5px; 
}
.project-todos-section > div > div:nth-child(1){ /* Project Todo Name */
    word-wrap: break-word;
}
.project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */
    display: flex;
    justify-content: center; 
    gap: 5px;
}
.project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */
    width: 40px;
    height: 40px;
    cursor: pointer; 
}

/* Project Screen & Project Todos Section|Add Todo Window */
.add-todo-window{
    display: flex;
    flex-direction: column;
    gap: 10px; 

    position: absolute;
    width: 500px; 
    height: 550px;
    top: 100px;
    border: 2px solid #0f172a;
    border-radius: 10px; 
    background-color:#94a3b888; 
}
.add-todo-window > div:nth-child(1){ /* Close Button Container */
    display: flex;
    justify-content: end;
}
.add-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer; 
}

.add-todo-window > form { /* Add Todo Section (Form) */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
.add-todo-window > form > div > label{
    display: block; 
    text-align: center;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    color: white; 
}
.add-todo-window > form > div > h4{
    text-align: center;
    margin: 0;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}

#add-todo-name{ /* Project Todo Name Input */
    border: 1px solid #0f172aa9;
    border-left: none;
    border-right: none;
    border-top: none; 
    background-color:#94a3b888;
    width: 180px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    color: white; 
}
#add-todo-name:focus{
    outline: none;
    border-bottom-color:#2563eb;
}

#add-todo-description{ /* Project Todo Description Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px;
    padding: 5px; 
    width: 200px; 
    color: white;
    background-color: #94a3b888;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
#add-todo-description:focus{
    outline: none;
    border: 1px solid #2563eb;
}

#add-todo-due-date{ /* Project Todo Due Date Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px;
    padding: 3px;
    color: white;
    background-color:#94a3b888;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    cursor: pointer; 
}
#add-todo-due-date:focus{
    outline: none; 
    border: 1px solid #2563eb;
}

.add-todo-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */
    display: flex;
    gap: 5px;
}
.add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button{
    border: 1px solid #0f172aa9; 
    border-radius: 10px;
    padding: 0px 5px 0px 5px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
}
.add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button:hover{
    cursor: pointer;
    background-color:#2dd4bf;
    border: 1px solid #2dd4bf; 
    color: white; 
}

.add-todo-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */
    border: 1px solid #2564eb8c; 
    border-radius: 10px;
    background-color:#2564eb8c;
    color: white;
    padding: 1px 10px 1px 10px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
}
.add-todo-window > form > div:nth-child(5) > button:hover{
    cursor: pointer; 
    background-color: #2563eb;
    border: 1px solid #2563eb; 
}

/* Project Screen & Project Todos Section|Project Todo Details Window */
.project-todo-details-window{
    position: absolute;
    width: 500px;
    height: 300px;
    top: 100px; 
    border: 2px solid #0f172a; 
    border-radius: 10px; 
    background-color: #94a3b888;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.project-todo-details-window > div:nth-child(1){ /* Close Button Container */
    display: flex;
    justify-content: end;
}
.project-todo-details-window > div:nth-child(1) > img[src]{ /* Close Button */
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer; 
}
.project-todo-details-window > div:nth-child(2){ /* Details Container (Description|Due Date|Priority) */
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 5px; 
}
.project-todo-details-window > div:nth-child(2) > div{ /* Description|Due Date|Priority */
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    padding: 5px;
}
.project-todo-details-window > div:nth-child(2) > div > div:nth-child(1){ /* Data Labels */
    font-weight: bold; 
}
.project-todo-details-window > div:nth-child(2) > div > div:nth-child(2){ /* Local Storage Data */
    color: white; 
    font-size: 15px; 
}
.project-todo-details-window > div:nth-child(2) > div:nth-child(1){ /* Description */
    word-wrap: break-word; 
}

/* Project Screen & Project Todos Section|Project Todo Edit Window */
.project-todo-edit-window{
    border: 2px solid #0f172a; 
    border-radius: 10px; 
    background-color:#94a3b888; 
    width: 500px;
    height: 550px;
    position: absolute;
    top: 100px;
    color: white;
}
.project-todo-edit-window > div:nth-child(1){ /* Close Container */
    display: flex;
    justify-content: end;
}
.project-todo-edit-window > div:nth-child(1) > img[src]{ /* Close Button */ 
    width: 40px;
    height: 40px;
    opacity: 0.6;
    cursor: pointer; 
}
.project-todo-edit-window > form{ /* Todo Form */
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 15px; 

    padding: 10px;
}
.project-todo-edit-window > form > div > label{
    display: block;
    text-align: center; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
}
.project-todo-edit-window > form > div > h4{
    text-align: center;
    margin: 0;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#edit-project-name-todo{ /* Project Todo Name Input */
    border: 1px solid #0f172aa9; 
    border-left: none;
    border-right: none;
    border-top: none; 
    background-color:#94a3b888; 
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    width: 180px;
}
#edit-project-name-todo:focus{
    outline: none;
    border-bottom-color: #2563eb;
}

#edit-project-todo-description{ /* Project Todo Description Input */
    background-color: #94a3b888;
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    border: 1px solid #0f172aa9;
    border-radius: 10px; 
    padding: 5px;
}
#edit-project-todo-description:focus{
    outline: none;
    border:1px solid #2563eb;
}

#edit-project-todo-due-date{ /* Project Todo Due Date Input */
    border: 1px solid #0f172aa9;
    border-radius: 10px;
    background-color: #94a3b888;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    color: white; 
    padding: 3px; 
    cursor: pointer; 
}
#edit-project-todo-due-date:focus{
    outline: none;
    border: 1px solid #2563eb; 
}

.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */
    display: flex;
    gap: 10px;
}
.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button{ 
    border: 1px solid black;
    border-radius: 10px;
    padding: 0px 5px 0px 5px; 
    font-weight: bold; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button:hover{
    border: 1px solid #2dd4bf;
    background-color: #2dd4bf; 
    color: white; 
    cursor: pointer; 
}

.project-todo-edit-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */
    border: 1px solid #2564eb8c;
    border-radius: 10px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    background-color: #2564eb8c;
    color: white;
    padding: 3px 10px 3px 10px; 
}
.project-todo-edit-window > form > div:nth-child(5) > button:hover{
    border: 1px solid #2563eb;
    background-color:#2563eb;
    cursor: pointer; 
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |New Note Button Screen| */
#note-input{
    border-radius: 10px;
    border: 1px solid #0f172aa9; 
    background-color: #94a3b8; 
    padding: 5px;
    color: white;
    width: 200px;
    font-size: 14px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 #0f172aa9; 
}
#note-input:focus{
    outline: none;
    border-color: #2563eb;
}

/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* |View Notes Screen| */
.notes-screen{
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 3px;
    overflow-y: scroll; 
    height: 100%; 
    scrollbar-width: thin;
    scrollbar-color: #94a3b8 #0f172aa9; 
}
.notes-screen > div{ /* Notes Container */
    border: 1px solid #0f172aa9; 
    border-radius: 10px; 
    text-align: left;
    padding: 3px;
    color: white;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    word-wrap: break-word; 
}
.notes-screen > div > div:nth-child(1){ /* Delete Notes Container */
    display: flex;
    justify-content: end;
}
.notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */
    width: 40px;
    height: 40px;
}


/****************************************************************************************************************************************************************************/
/****************************************************************************************************************************************************************************/
/* Mobile Developement */
/* Media-0 - For desktop miniturization and some mobile viewports. */
@media only screen and (max-width: 1000px){
    #content{
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10px;
    }

    /* |Main Title| */
    .main-title{
        font-family: springtown-market, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 2em; 
    }

    /* |Main Screen| */
    .main-screen{
        display: flex;
        gap: 3px;

        padding: 5px;
        height: 550px;
    }
    .main-screen > div{
        border-radius: 10px;
    }

    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 5px;
        background-color: #94a3b8; 
    }
    .main-screen > div:nth-child(1) > button{
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        border-radius: 10px; 
        border: 1px solid #0f172a3f;
        padding: 5px 5px 5px 5px;
    }

    .main-screen > div:nth-child(2){ /* Display Screen (Input Section) */
        width: 200px; /*Size may need to change depending on the amount of content. */
        text-align: center;
        background-color: #94a3b8; 
        padding: 10px;
    }
    .main-screen > div:nth-child(2) > form{ /* New Todo Form */
        display: flex; 
        flex-direction: column;
        gap: 20px;
    }
    .main-screen > div:nth-child(2) > form > div > label{
        display: block;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        color: white;
    }
    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{
        margin: 0;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white; 
    }

    /* |New Todo Button Screen| */
    #todo-name{ /* Todo Name Input*/
        border: 1px solid #0f172aa9;
        border-top: none; 
        border-right: none;
        border-left: none;
        background-color: #94a3b8; 
        color: white;
        font-size: 14px;
        width: 150px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-name:focus{
        outline: none;
        border-bottom-color: #2563eb; 
    }

    #todo-description{ /* Todo Description Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        background-color: #94a3b8;
        color: white;
        width: 170px;
        padding: 5px;
        font-size: 14px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-description:focus{
        outline: none;
        border-color: #2563eb;
    }

    #todo-due-date{ /* Todo Due Date Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        background-color: #94a3b8; 
        padding: 5px;
        color: white;
        font-size: 16px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-due-date:focus{
        outline: none;
        border-color: #2563eb; 
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ 
        display: flex;
        justify-content: center; 
        gap: 5px;
    }
    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{
        padding: 0px 10px 0px 10px;
        font-size: 16px; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        border: 1px solid #0f172a3f;
        border-radius: 10px; 
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */
        font-size: 16px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        padding: 0px 10px 0px 10px; 
        background-color: #2563eb;
        border: 1px solid #2563eb;
        border-radius: 10px;
        color: white; 
    }

    /* |View Todos Screen| */
    .todo-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;

        height: 100%;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #4771ac81 #0f172aa9; 
        padding: 5px;
    }
    .todo-screen > div{ /* todo rows (todo items)*/
        display: flex; 
        flex-direction: column;
        gap: 5px;

        border: 1px solid #0f172aa9;
        border-radius: 10px;
        padding: 3px; 
    }
    .todo-screen > div > div:nth-child(1){ /* Todo name container */
        word-wrap: break-word; 
        color: white; 
        font-size: 15px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
    }
    .todo-screen > div > div:nth-child(2){/* Todo Misc Container */
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    .todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */
        width: 40px;
        height: 40px; 
    }

    /* |Todo Description Window|*/
    .todo-description-window{
        display: flex;
        flex-direction: column; 
        gap: 3px;

        border: 2px solid #0f172a !important;
        border-radius: 10px; 
        position: absolute;
        width: 300px;
        top: 100px;
        height: auto;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color:#94a3b888;
    }
    .todo-description-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;
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

        padding: 5px;
    }
    .todo-description-window > div:nth-child(2) > div{
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        word-wrap:break-word;
        padding: 3px; 
    }
    .todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */
        font-weight: bold;
    }
    .todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */
        font-size: 15px; 
        color: white;
    }

    /* |Edit Todo Window| */
    .edit-todo-window{
        border: 2px solid #0f172a;
        border-radius: 10px; 
        background-color: #94a3b888;
        position: absolute;
        width: 250px;
        height: auto;
        top: 100px;
    }
    .edit-todo-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;
    }
    .edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
    .edit-todo-window > form{ /* Edit Section (Form)*/
        display: flex; 
        flex-direction: column;
        align-items: center;
        gap: 15px;

        padding: 10px;
    }
    .edit-todo-window > form > div > label{
        display: block; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        text-align: center; 
        color: white; 
    }
    .edit-todo-window > form > div > h4{
        margin: 0; 
        text-align: center;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white; 
    }

    #edit-name{ /* Edit Name Input */
        border: 1px solid #0f172aa9;
        border-left: none;
        border-right: none;
        border-top: none;
        background-color: #94a3b888;
        width: 150px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white;
    }
    #edit-name:focus{
        outline: none; 
        border-bottom-color: #2563eb; 
    }

    #edit-description{ /* Edit Description Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px;
        padding: 5px; 
        background-color: #94a3b888;
        color: white; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    }
    #edit-description:focus{
        outline: none; 
        border-color:#2563eb; 
    }

    #edit-due-date{ /* Edit Due Date Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        background-color: #94a3b888;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        color: white;
        padding: 3px;
    }
    #edit-due-date:focus{
        outline: none;
        border-color: #2563eb;
    }

    .edit-todo-window > form > div:nth-child(4) > div{ /* Edit Todo Priority Container */
        display: flex;
        gap: 5px; 
    }
    .edit-todo-window > form > div:nth-child(4) > div > button{
        border: 1px solid #0f172aa9;
        border-radius: 10px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        padding: 0px 5px 0px 5px;
    }

    .edit-todo-window > form > div:nth-child(5) > button{ /* Edit Todo Submit Button */
        border: 1px solid #2563eb;
        border-radius: 10px; 
        background-color: #2563eb;
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        padding: 3px 10px 3px 10px; 
    }

    /* |New Project Button Screen| */
    #project-name{ /* Project Name Input */
        background-color: #94a3b8;
        border: 1px solid #0f172aa9;
        border-top: none;
        border-right: none;
        border-left: none; 
        width: 150px;
        font-size: 14px; 
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    }
    #project-name:focus{
        outline: none; 
        border-bottom-color: #2563eb;
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */
        font-size: 16px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        padding: 0px 10px 0px 10px; 
        background-color: #2563eb;
        border: 1px solid #2563eb; 
        border-radius: 10px;
        color: white;
    }

    /* |View Projects Screen| */
    .projects-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        height: 100%;
        overflow-y: scroll; 
        scrollbar-color: #4771ac81 #0f172aa9; 
        scrollbar-width: thin; 
        padding: 5px; 
    }
    .projects-screen > div{ /* Project Container (Each Project) */
        display: flex;
        flex-direction: column;
        gap: 10px;

        border: 1px solid #0f172aa9;
        border-radius: 10px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        padding: 3px; 
    }
    .projects-screen > div > div:nth-child(1){ /* Project Name */
        color: white; 
        font-weight: bold; 
        word-wrap: break-word; 
    }
    .projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */
        width: 40px;
        height: 40px;
    }

    /* |Delete Project Window|*/
    .delete-project-window{ 
        display: flex;
        flex-direction: column;
        gap: 15px; 

        position: absolute;
        top: 100px;
        width: 250px;
        height: 300px;
        border: 2px solid #0f172a;
        border-radius: 10px;
        padding: 10px; 
    }
    .delete-project-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end; 
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

        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        padding: 5px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */
        color: red; 
        text-align: center; 
    }
    .delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */
        border: 1px solid #f87171;
        border-radius: 10px;
        padding: 3px 15px 3px 15px;
        background-color: #f87171; 
        color: white;
        font-weight: bold;  
        font-size: 15px; 
    }

    /* |Project Screen| */
    .project-screen{  
        display: flex;
        flex-direction: column;
        align-items: center; 
        gap: 10px; 

        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        font-weight: bold; 
        color: white; 
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #4771ac81 #0f172aa9;
        padding: 0px; 
    }
    .project-screen > div:nth-child(1){ /* Project Name */
        font-size: 16px; 
        word-wrap: break-word;
        width: 140px; 
        letter-spacing: 2px;
    }
    .project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */
        display: flex;
        align-items: center;
        justify-content: space-around;  
        gap: 10px;

        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        width: 160px; 
    }
    .project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */
        width: 40px;
        height: 40px;
    }
    .project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .project-todos-section > div{ /* Project Todo (Each todo) */
        display: flex;
        flex-direction: column;
        gap: 3px;

        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        padding: 5px; 
        width: 160px; 
    }
    .project-todos-section > div > div:nth-child(1){ /* Project Todo Name */
        word-wrap: break-word;
    }
    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */
        display: flex;
        justify-content: space-evenly;
        gap: 5px;
    }
    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */
        width: 40px;
        height: 40px;
    }

    /* |Add Todo Window (Project Screen)| */
    .add-todo-window{
        display: flex;
        flex-direction: column;
        gap: 10px; 

        position: absolute;
        width: 250px;
        height: auto;
        top: 100px;
        border: 2px solid #0f172a;
        border-radius: 10px; 
        background-color:#94a3b888; 
    }
    .add-todo-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end;
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
        gap: 15px;
    }
    .add-todo-window > form > div > label{
        display: block; 
        text-align: center;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        color: white; 
    }
    .add-todo-window > form > div > h4{
        text-align: center;
        margin: 0;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white; 
    }

    #add-todo-name{ /* Project Todo Name Input */
        border: 1px solid #0f172aa9;
        border-left: none;
        border-right: none;
        border-top: none; 
        background-color:#94a3b888;
        width: 150px; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        color: white; 
    }
    #add-todo-name:focus{
        outline: none;
        border-bottom-color:#2563eb;
    }

    #add-todo-description{ /* Project Todo Description Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px;
        padding: 5px; 
        color: white;
        background-color: #94a3b888;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #add-todo-description:focus{
        outline: none;
        border: 1px solid #2563eb;
    }

    #add-todo-due-date{ /* Project Todo Due Date Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px;
        padding: 3px;
        color: white;
        background-color:#94a3b888;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #add-todo-due-date:focus{
        outline: none; 
        border: 1px solid #2563eb;
    }

    .add-todo-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */
        display: flex;
        gap: 5px;
    }
    .add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button{
        border: 1px solid #0f172aa9; 
        border-radius: 10px;
        padding: 0px 5px 0px 5px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
    }

    .add-todo-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */
        border: 1px solid #2563eb;
        border-radius: 10px;
        background-color:#2563eb; 
        color: white;
        padding: 1px 10px 1px 10px; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
    }

    /* |Project Todo Details Window (Project Screen)| */
    .project-todo-details-window{
        position: absolute;
        width: 250px;
        height: 300px;
        top: 100px; 
        border: 2px solid #0f172a; 
        border-radius: 10px; 
        background-color: #94a3b888;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .project-todo-details-window > div:nth-child(1){ /* Close Button Container */
        display: flex;
        justify-content: end;
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

        padding: 5px; 
    }
    .project-todo-details-window > div:nth-child(2) > div{ /* Description|Due Date|Priority */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        padding: 5px;
    }
    .project-todo-details-window > div:nth-child(2) > div > div:nth-child(1){ /* Data Labels */
        font-weight: bold; 
    }
    .project-todo-details-window > div:nth-child(2) > div > div:nth-child(2){ /* Local Storage Data */
        color: white; 
        font-size: 15px; 
    }
    .project-todo-details-window > div:nth-child(2) > div:nth-child(1){ /* Description */
        word-wrap: break-word; 
    }

    /* |Project Todo Edit Window| */
    .project-todo-edit-window{
        border: 2px solid #0f172a; 
        border-radius: 10px; 
        background-color:#94a3b888; 
        width: 250px;
        height: auto;
        position: absolute;
        top: 100px;
        color: white;
    }
    .project-todo-edit-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;
    }
    .project-todo-edit-window > div:nth-child(1) > img[src]{
        width: 40px;
        height: 40px;
        opacity: 0.6;
    }
    .project-todo-edit-window > form{ /* Todo Form */
        display: flex; 
        flex-direction: column;
        align-items: center;
        gap: 15px; 

        padding: 10px;
    }
    .project-todo-edit-window > form > div > label{
        display: block;
        text-align: center; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
    }
    .project-todo-edit-window > form > div > h4{
        text-align: center;
        margin: 0;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    #edit-project-name-todo{ /* Project Todo Name Input */
        border: 1px solid #0f172aa9; 
        border-left: none;
        border-right: none;
        border-top: none; 
        background-color:#94a3b888; 
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        width: 150px;
    }
    #edit-project-name-todo:focus{
        outline: none;
        border-bottom-color: #2563eb;
    }

    #edit-project-todo-description{ /* Project Todo Description Input */
        background-color: #94a3b888;
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        padding: 5px;
    }
    #edit-project-todo-description:focus{
        outline: none;
        border:1px solid #2563eb;
    }

    #edit-project-todo-due-date{ /* Project Todo Due Date Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px;
        background-color: #94a3b888;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
        color: white; 
        padding: 3px; 
    }
    #edit-project-todo-due-date:focus{
        outline: none;
        border: 1px solid #2563eb; 
    }

    .project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */
        display: flex;
        gap: 10px;
    }
    .project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button{ 
        border: 1px solid black;
        border-radius: 10px;
        padding: 0px 5px 0px 5px; 
        font-weight: bold; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .project-todo-edit-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */
        border: 1px solid black; 
        border-radius: 10px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        background-color: #2563eb; 
        color: white;
        padding: 3px 10px 3px 10px; 
    }

    /* |New Note Button Screen| */
    #note-input{
        border-radius: 10px;
        border: 1px solid #0f172aa9; 
        background-color: #94a3b8; 
        padding: 5px;
        color: white;
        width: 170px;
        font-size: 14px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        scrollbar-width: thin;
        scrollbar-color: #4771ac81 #0f172aa9; 
    }
    #note-input:focus{
        outline: none;
        border-color: #2563eb;
    }

    /* |View Notes Screen| */
    .notes-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 5px;
        overflow-y: scroll; 
        scrollbar-width: thin; 
        scrollbar-color: #4771ac81 #0f172aa9; 
        height: 100%; 
    }
    .notes-screen > div{ /* Notes Container */
        border: 1px solid #0f172aa9; 
        border-radius: 10px; 
        text-align: left;
        padding: 3px;
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .notes-screen > div > div:nth-child(1){ /* Delete Notes Container */
        display: flex;
        justify-content: end;
    }
    .notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */
        width: 40px;
        height: 40px;
    }
}

/* media-1 - For mobile viewports smaller than 340px. */
@media only screen and (max-width: 340px){
    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 5px;
        background-color: #94a3b8; 
    }
    .main-screen > div:nth-child(1) > button{
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        font-size: 9px;
        border-radius: 10px; 
        border: 1px solid #0f172a3f;
        padding: 5px 5px 5px 5px;
    }
}

/* media-2 - For mobile viewports smaller than 300px */
@media only screen and (max-width: 300px){
    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 5px;
        background-color: #94a3b8; 
        width: fit-content;
    }
    .main-screen > div:nth-child(1) > button{
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        font-size: 9px; 
        border-radius: 10px; 
        border: 1px solid #0f172a3f;
        padding: 5px 5px 5px 5px;
    }

    .main-screen > div:nth-child(2){ /* Display Screen (Input Section) */
        width: fit-content; 
        text-align: center;
        background-color: #94a3b8; 
        padding: 10px;
    }
    .main-screen > div:nth-child(2) > form{ /* New Todo Form */
        display: flex; 
        flex-direction: column;
        gap: 20px;
    }
    .main-screen > div:nth-child(2) > form > div > label{
        display: block;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        color: white;
    }
    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{
        margin: 0;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white; 
    }

    /* |New Todo Button Screen| */
    #todo-name{ /* Todo Name Input*/
        border: 1px solid #0f172aa9;
        border-top: none; 
        border-right: none;
        border-left: none;
        background-color: #94a3b8; 
        color: white;
        font-size: 14px;
        width: 140px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-name:focus{
        outline: none;
        border-bottom-color: #2563eb; 
    }

    #todo-description{ /* Todo Description Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        background-color: #94a3b8;
        color: white;
        width: 140px;
        padding: 5px;
        font-size: 14px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-description:focus{
        outline: none;
        border-color: #2563eb;
    }

    #todo-due-date{ /* Todo Due Date Input */
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        background-color: #94a3b8; 
        padding: 5px;
        color: white;
        width: 130px;
        font-size: 12px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    #todo-due-date:focus{
        outline: none;
        border-color: #2563eb; 
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ 
        display: flex;
        justify-content: center; 
        gap: 5px;
    }
    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{
        padding: 3px;
        font-size: 12px; 
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
        border: 1px solid #0f172a3f;
        border-radius: 10px; 
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */
        font-size: 16px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        padding: 0px 10px 0px 10px; 
        background-color: #2563eb;
        border: 1px solid #2563eb;
        border-radius: 10px;
        color: white; 
    }

    /* |View Todos Screen|*/
    .todo-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;

        height: 100%;
        overflow-y: scroll;
    }
    .todo-screen > div{ /* todo rows (todo items)*/
        display: flex; 
        flex-direction: column;
        gap: 5px;

        border: 1px solid #0f172aa9;
        border-radius: 10px;
        padding: 3px; 
        width: 130px;
    }
    .todo-screen > div > div:nth-child(1){ /* Todo name container */
        word-wrap: break-word; 
        color: white; 
        font-size: 15px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold; 
    }
    .todo-screen > div > div:nth-child(2){/* Todo Misc Container */
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    .todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */
        width: 40px;
        height: 40px; 
    }

    /* |Todo Description Window| */
    .todo-description-window{
        display: flex;
        flex-direction: column; 
        gap: 3px;

        border: 2px solid #0f172a !important;
        border-radius: 10px; 
        position: absolute;
        width: 250px;
        top: 100px;
        height: auto;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color:#94a3b888;
    }
    .todo-description-window > div:nth-child(1){ /* Close Container */
        display: flex;
        justify-content: end;
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

        padding: 5px;
    }
    .todo-description-window > div:nth-child(2) > div{
        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        word-wrap:break-word;
        padding: 3px; 
    }
    .todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */
        font-weight: bold;
    }
    .todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */
        font-size: 15px; 
        color: white;
    }

    /* |New Project Button Screen| */
    #project-name{ /* Project Name Input */
        background-color: #94a3b8;
        border: 1px solid #0f172aa9;
        border-top: none;
        border-right: none;
        border-left: none; 
        width: 140px;
        font-size: 14px; 
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
    }
    #project-name:focus{
        outline: none; 
        border-bottom-color: #2563eb;
    }

    .main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */
        font-size: 16px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: bold;
        padding: 0px 10px 0px 10px; 
        background-color: #2563eb;
        border: 1px solid #2563eb; 
        border-radius: 10px;
        color: white;
    }

    /* |View Projects Screen| */
    .projects-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .projects-screen > div{ /* Project Container (Each Project) */
        display: flex;
        flex-direction: column;
        gap: 10px;

        border: 1px solid #0f172aa9;
        border-radius: 10px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        padding: 3px; 
        width: 130px;
    }
    .projects-screen > div > div:nth-child(1){ /* Project Name */
        color: white; 
        font-weight: bold; 
        word-wrap: break-word; 
    }
    .projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .projects-screen > div > div:nth-child(2) > div:nth-child(1){ /* Todos Length Tag */
        font-size: 14px; 
    }
    .projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */
        width: 40px;
        height: 40px;
    }

    /* |Project Screen| */
    .project-screen{  
        display: flex;
        flex-direction: column;
        gap: 10px; 

        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        font-weight: bold; 
        color: white; 
        height: 100%;
        overflow-y: scroll; 
        scrollbar-width: thin;
        scrollbar-color: #4771ac81 #0f172aa9;
        padding: 0; 
    }
    .project-screen > div:nth-child(1){ /* Project Name */
        font-size: 15px; 
        word-wrap: break-word; 
        letter-spacing: 2px;
    }
    .project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */
        display: flex;
        align-items: center;
        justify-content: space-around;  
        gap: 10px;

        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        width: 140px; 
    }
    .project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */
        width: 40px;
        height: 40px;
    }
    .project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .project-todos-section > div{ /* Project Todo (Each todo) */
        display: flex;
        flex-direction: column;
        gap: 3px;

        border: 1px solid #0f172aa9;
        border-radius: 10px; 
        padding: 5px; 
        width: 140px; 
    }
    .project-todos-section > div > div:nth-child(1){ /* Project Todo Name */
        word-wrap: break-word;
    }
    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */
        display: flex;
        justify-content: space-evenly;
        gap: 5px;
    }
    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */
        width: 30px;
        height: 30px;
    }

    /* |New Note Button Screen| */
    #note-input{
        border-radius: 10px;
        border: 1px solid #0f172aa9; 
        background-color: #94a3b8; 
        padding: 5px;
        color: white;
        width: 140px;
        font-size: 14px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        scrollbar-width: thin;
        scrollbar-color: #4771ac81 #0f172aa9; 
    }
    #note-input:focus{
        outline: none;
        border-color: #2563eb;
    }

    /* |View Notes Screen| */
    .notes-screen{
        display: flex;
        flex-direction: column;
        gap: 10px;

        height: 100%; 
    }
    .notes-screen > div{ /* Notes Container */
        border: 1px solid #0f172aa9; 
        border-radius: 10px; 
        text-align: left;
        padding: 5px;
        color: white;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 12px; 
        width: 130px; 
    }
    .notes-screen > div > div:nth-child(1){ /* Delete Notes Container */
        display: flex;
        justify-content: end;
    }
    .notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */
        width: 40px;
        height: 40px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements for the application. */\n*{\n    box-sizing: border-box;\n}\n\n/* font-0 - Comfortaa */\n@font-face {\n    font-family:comfortaa;\n    src: url('../fonts/comfortaa/Comfortaa-Regular.ttf');\n} \n\n/* font-1 - Springtown Market */\n@font-face {\n    font-family: springtown-market;\n    src: url('../fonts/springtown-market/SpringtownMarket_PERSONAL_USE_ONLY.otf');\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* display-mssg */\n.display-mssg{\n    margin-top: 10px;\n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    line-height: 2;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* todo-mssg */\n.todo-mssg{\n    margin-top: 100px; \n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    line-height: 3;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* notes-mssg */\n.notes-mssg{\n    margin-top: 100px;\n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    line-height: 3; \n    text-align: center !important;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* projects-mssg */\n.projects-mssg{\n    margin-top: 100px; \n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    line-height: 3;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* project-todo-mssg */\n.project-todo-mssg{\n    margin-top: 30px; \n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    line-height: 3; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* priority-choosen */\n.priority-chosen{\n    background-color: #2dd4bf;\n    border: 1px solid #2dd4bf !important; \n    color: white;  \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* current-button */\n.current-button{\n    background-color: #2563eb !important;\n    border: 1px solid #2563eb !important; \n    color: white; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* disable-clicker */\n.disable-clicker{\n    pointer-events: none;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* disable-resize */\n.disable-resize{\n    resize: none; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* error-container */\n.error-container{\n    display: flex;\n    flex-direction: column; \n    gap: 3px; \n\n    color: #ef4444;\n    font-weight: bold; \n    text-align: center; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |Content| */\n#content{\n    display: flex; \n    flex-direction: column; \n    align-items: center; \n\n    padding: 10px; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |Main Title| */\n.main-title{\n    font-family: springtown-market, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    font-size: 3em;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |Main Screen| */\n.main-screen{\n    display: flex;\n    gap: 3px;\n\n    padding: 5px;\n    height: 550px; /* Desktop Change: Might change height. */\n}\n.main-screen > div{\n    border-radius: 10px;\n}\n\n.main-screen > div:nth-child(1){ /* Button Section (Button Screen) */\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    box-shadow: 3px 3px 5px 1px black;\n    padding: 5px;\n    background-color: #94a3b8; \n}\n.main-screen > div:nth-child(1) > button{\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    border-radius: 10px; \n    border: 1px solid #0f172a3f;\n    padding: 5px 5px 5px 5px;\n}\n.main-screen > div:nth-child(1) > button:hover{\n    background-color: #2564eb8c;\n    border: 1px solid #2564eb8c;\n    color: white; \n    cursor: pointer; \n}\n\n.main-screen > div:nth-child(2){ /* Display Screen (Input Section) */\n    width: 400px; /* Size may need to change depending on the amount of content. */\n    text-align: center;\n    background-color: #94a3b8; \n    padding: 10px;\n    box-shadow: 3px 3px 5px 1px black; \n}\n.main-screen > div:nth-child(2) > form{ /* New Todo Form */\n    display: flex; \n    flex-direction: column;\n    gap: 20px;\n}\n.main-screen > div:nth-child(2) > form > div > label{\n    display: block;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    color: white;\n}\n.main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{\n    margin: 0;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |New Todo Button Screen| */\n#todo-name{ /* Todo Name Input */\n    border: 1px solid #0f172aa9;\n    border-top: none; \n    border-right: none;\n    border-left: none;\n    background-color: #94a3b8; \n    color: white;\n    font-size: 14px;\n    width: 180px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#todo-name:focus{\n    outline: none;\n    border-bottom-color: #2563eb; \n}\n\n#todo-description{ /* Todo Description Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    background-color: #94a3b8;\n    color: white;\n    width: 200px;\n    padding: 5px;\n    font-size: 14px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#todo-description:focus{\n    outline: none;\n    border-color: #2563eb;\n}\n\n#todo-due-date{ /* Todo Due Date Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    background-color: #94a3b8; \n    padding: 5px;\n    color: white;\n    font-size: 16px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#todo-due-date:hover{\n    cursor: pointer; \n}\n#todo-due-date:focus{\n    outline: none;\n    border-color: #2563eb; \n}\n\n.main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ \n    display: flex;\n    justify-content: center; \n    gap: 5px;\n}\n.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{\n    padding: 0px 10px 0px 10px;\n    font-size: 16px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    border: 1px solid #0f172a3f;\n    border-radius: 10px; \n}\n.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:hover{\n    background-color:#2dd4bf; \n    border: 1px solid #2dd4bf; \n    color: white; \n    cursor: pointer; \n}\n\n.main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */\n    font-size: 16px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    padding: 0px 10px 0px 10px; \n    background-color: #2564eb8c;\n    border: 1px solid #2564eb8c;\n    border-radius: 10px;\n    color: white; \n}\n.main-screen > div:nth-child(2) > form > div:nth-child(5) > button:hover{\n    border: 1px solid #2563eb;\n    background-color: #2563eb; \n    cursor: pointer; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |View Todos Screen| */\n.todo-screen{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    height: 100%;\n    overflow-y: scroll;\n    scrollbar-width: thin; \n    scrollbar-color: #94a3b8 #0f172aa9; \n    padding: 10px;\n}\n.todo-screen > div{ /* todo rows (todo items)*/\n    display: flex; \n    flex-direction: column;\n    gap: 5px;\n\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    padding: 3px; \n}\n.todo-screen > div > div:nth-child(1){ /* Todo name container */\n    word-wrap: break-word; \n    color: white; \n    font-size: 15px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n}\n.todo-screen > div > div:nth-child(2){/* Todo Misc Container */\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n}\n.todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */\n    width: 40px;\n    height: 40px; \n    cursor: pointer; \n}\n\n/* View Todo Screen|Description Window */\n.todo-description-window{\n    display: flex;\n    flex-direction: column; \n    gap: 3px;\n\n    border: 2px solid #0f172a !important;\n    border-radius: 10px; \n    position: absolute;\n    width: 500px;\n    top: 100px;\n    height: 300px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color:#94a3b888;\n}\n.todo-description-window > div:nth-child(1){ /* Close Container */\n    display: flex;\n    justify-content: end;\n}\n.todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer; \n}\n.todo-description-window > div:nth-child(2){ /* Details Container */\n    display: flex;\n    flex-direction: column;\n    gap: 5px; \n\n    padding: 5px;\n}\n.todo-description-window > div:nth-child(2) > div{\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    word-wrap:break-word;\n    padding: 3px; \n}\n.todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */\n    font-weight: bold;\n}\n.todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */\n    font-size: 15px; \n    color: white;\n}\n\n/* View Todo Screen|Edit Todo Window */\n.edit-todo-window{\n    border: 2px solid #0f172a;\n    border-radius: 10px; \n    background-color: #94a3b888;\n    position: absolute;\n    width: 500px;\n    height: 550px;\n    top: 100px;\n}\n.edit-todo-window > div:nth-child(1){ /* Close Container */\n    display: flex;\n    justify-content: end;\n}\n.edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer; \n}\n.edit-todo-window > form{ /* Edit Section (Form)*/\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n\n    padding: 10px;\n}\n.edit-todo-window > form > div > label{\n    display: block; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    text-align: center; \n    color: white; \n}\n.edit-todo-window > form > div > h4{\n    margin: 0; \n    text-align: center;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n#edit-name{ /* Edit Name Input */\n    border: 1px solid #0f172aa9;\n    border-left: none;\n    border-right: none;\n    border-top: none;\n    background-color: #94a3b888;\n    width: 180px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white;\n}\n#edit-name:focus{\n    outline: none; \n    border-bottom-color: #2563eb; \n}\n\n#edit-description{ /* Edit Description Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    padding: 5px; \n    background-color: #94a3b888;\n    color: white; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n}\n#edit-description:focus{\n    outline: none; \n    border-color:#2563eb; \n}\n\n#edit-due-date{ /* Edit Due Date Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    background-color: #94a3b888;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    color: white;\n    padding: 3px;\n}\n#edit-due-date:hover{\n    cursor: pointer; \n}\n#edit-due-date:focus{\n    outline: none;\n    border-color: #2563eb;\n}\n\n.edit-todo-window > form > div:nth-child(4) > div{ /* Edit Todo Priority Container */\n    display: flex;\n    gap: 5px; \n}\n.edit-todo-window > form > div:nth-child(4) > div > button{\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    padding: 0px 5px 0px 5px;\n}\n.edit-todo-window > form > div:nth-child(4) > div > button:hover{\n    background-color: #2dd4bf;\n    border: 1px solid #2dd4bf;\n    color: white; \n    cursor: pointer; \n}\n\n.edit-todo-window > form > div:nth-child(5) > button{ /* Edit Todo Submit Button */\n    border: 1px solid #2564eb8c;\n    border-radius: 10px; \n    background-color: #2564eb8c;\n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    padding: 3px 10px 3px 10px; \n}\n.edit-todo-window > form > div:nth-child(5) > button:hover{\n    background-color: #2563eb;\n    border: 1px solid #2563eb;\n    cursor: pointer; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |New Project Button Screen| */\n#project-name{ /* Project Name Input */\n    background-color: #94a3b8;\n    border: 1px solid #0f172aa9;\n    border-top: none;\n    border-right: none;\n    border-left: none; \n    width: 180px;\n    font-size: 14px; \n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n}\n#project-name:focus{\n    outline: none; \n    border-bottom-color: #2563eb;\n}\n\n.main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */\n    font-size: 16px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    padding: 0px 10px 0px 10px; \n    background-color: #2564eb8c;\n    border: 1px solid #2564eb8c;\n    border-radius: 10px;\n    color: white;\n}\n.main-screen > div:nth-child(2) > form > div:nth-child(2) > button:hover{ /* Will also work with the \"New Note Submit Button\". */\n    border: 1px solid #2563eb;\n    background-color:#2563eb;\n    cursor: pointer; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |View Projects Screen| */\n.projects-screen{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    \n    height: 100%;\n    overflow-y: scroll; \n    scrollbar-width: thin; \n    scrollbar-color: #94a3b8 #0f172aa9; \n    padding: 10px;\n}\n.projects-screen > div{ /* Project Container (Each Project) */\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    padding: 3px; \n}\n.projects-screen > div > div:nth-child(1){ /* Project Name */\n    color: white; \n    font-weight: bold; \n    word-wrap: break-word; \n    cursor: pointer; \n}\n.projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */\n    width: 40px;\n    height: 40px;\n    cursor: pointer; \n}\n\n/* View Projects Screen|Delete Project Window| */\n.delete-project-window{ \n    display: flex;\n    flex-direction: column;\n    gap: 15px; \n\n    position: absolute;\n    top: 100px;\n    width: 500px; \n    height: 300px;\n    border: 2px solid #0f172a;\n    border-radius: 10px;\n    padding: 10px;  \n}\n.delete-project-window > div:nth-child(1){ /* Close Button Container */\n    display: flex;\n    justify-content: end; \n}\n.delete-project-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer;\n}\n\n.delete-project-window > div:nth-child(2){ /* Delete Prompt Container */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    padding: 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */\n    color: red; \n    text-align: center; \n}\n.delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */\n    border: 1px solid #f87171;\n    border-radius: 10px;\n    padding: 3px 15px 3px 15px;\n    background-color: #f87171; \n    color: white;\n    font-weight: bold;  \n    font-size: 15px; \n    cursor: pointer; \n}\n\n/* View Projects Screen|Project Screen & Project Todos Section */\n.project-screen{  \n    display: flex;\n    flex-direction: column;\n    gap: 10px; \n\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    font-weight: bold; \n    color: white;\n    height: 100%; \n    overflow-y: scroll;\n    scrollbar-width: thin;\n    scrollbar-color: #94a3b8 #0f172aa9; \n    padding: 5px; \n}\n.project-screen > div:nth-child(1){ /* Project Name */\n    font-size: 16px; \n    word-wrap: break-word;\n    letter-spacing: 2px;\n}\n.project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */\n    display: flex;\n    justify-content: space-around;  \n    gap: 10px;\n\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n}\n.project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */\n    width: 40px;\n    height: 40px;\n    cursor: pointer; \n}\n.project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.project-todos-section > div{ /* Project Todo (Each todo) */\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    padding: 5px; \n}\n.project-todos-section > div > div:nth-child(1){ /* Project Todo Name */\n    word-wrap: break-word;\n}\n.project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */\n    display: flex;\n    justify-content: center; \n    gap: 5px;\n}\n.project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */\n    width: 40px;\n    height: 40px;\n    cursor: pointer; \n}\n\n/* Project Screen & Project Todos Section|Add Todo Window */\n.add-todo-window{\n    display: flex;\n    flex-direction: column;\n    gap: 10px; \n\n    position: absolute;\n    width: 500px; \n    height: 550px;\n    top: 100px;\n    border: 2px solid #0f172a;\n    border-radius: 10px; \n    background-color:#94a3b888; \n}\n.add-todo-window > div:nth-child(1){ /* Close Button Container */\n    display: flex;\n    justify-content: end;\n}\n.add-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer; \n}\n\n.add-todo-window > form { /* Add Todo Section (Form) */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n.add-todo-window > form > div > label{\n    display: block; \n    text-align: center;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    color: white; \n}\n.add-todo-window > form > div > h4{\n    text-align: center;\n    margin: 0;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n#add-todo-name{ /* Project Todo Name Input */\n    border: 1px solid #0f172aa9;\n    border-left: none;\n    border-right: none;\n    border-top: none; \n    background-color:#94a3b888;\n    width: 180px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    color: white; \n}\n#add-todo-name:focus{\n    outline: none;\n    border-bottom-color:#2563eb;\n}\n\n#add-todo-description{ /* Project Todo Description Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    padding: 5px; \n    width: 200px; \n    color: white;\n    background-color: #94a3b888;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n#add-todo-description:focus{\n    outline: none;\n    border: 1px solid #2563eb;\n}\n\n#add-todo-due-date{ /* Project Todo Due Date Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    padding: 3px;\n    color: white;\n    background-color:#94a3b888;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    cursor: pointer; \n}\n#add-todo-due-date:focus{\n    outline: none; \n    border: 1px solid #2563eb;\n}\n\n.add-todo-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */\n    display: flex;\n    gap: 5px;\n}\n.add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button{\n    border: 1px solid #0f172aa9; \n    border-radius: 10px;\n    padding: 0px 5px 0px 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n}\n.add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button:hover{\n    cursor: pointer;\n    background-color:#2dd4bf;\n    border: 1px solid #2dd4bf; \n    color: white; \n}\n\n.add-todo-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */\n    border: 1px solid #2564eb8c; \n    border-radius: 10px;\n    background-color:#2564eb8c;\n    color: white;\n    padding: 1px 10px 1px 10px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n}\n.add-todo-window > form > div:nth-child(5) > button:hover{\n    cursor: pointer; \n    background-color: #2563eb;\n    border: 1px solid #2563eb; \n}\n\n/* Project Screen & Project Todos Section|Project Todo Details Window */\n.project-todo-details-window{\n    position: absolute;\n    width: 500px;\n    height: 300px;\n    top: 100px; \n    border: 2px solid #0f172a; \n    border-radius: 10px; \n    background-color: #94a3b888;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.project-todo-details-window > div:nth-child(1){ /* Close Button Container */\n    display: flex;\n    justify-content: end;\n}\n.project-todo-details-window > div:nth-child(1) > img[src]{ /* Close Button */\n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer; \n}\n.project-todo-details-window > div:nth-child(2){ /* Details Container (Description|Due Date|Priority) */\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n    padding: 5px; \n}\n.project-todo-details-window > div:nth-child(2) > div{ /* Description|Due Date|Priority */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    padding: 5px;\n}\n.project-todo-details-window > div:nth-child(2) > div > div:nth-child(1){ /* Data Labels */\n    font-weight: bold; \n}\n.project-todo-details-window > div:nth-child(2) > div > div:nth-child(2){ /* Local Storage Data */\n    color: white; \n    font-size: 15px; \n}\n.project-todo-details-window > div:nth-child(2) > div:nth-child(1){ /* Description */\n    word-wrap: break-word; \n}\n\n/* Project Screen & Project Todos Section|Project Todo Edit Window */\n.project-todo-edit-window{\n    border: 2px solid #0f172a; \n    border-radius: 10px; \n    background-color:#94a3b888; \n    width: 500px;\n    height: 550px;\n    position: absolute;\n    top: 100px;\n    color: white;\n}\n.project-todo-edit-window > div:nth-child(1){ /* Close Container */\n    display: flex;\n    justify-content: end;\n}\n.project-todo-edit-window > div:nth-child(1) > img[src]{ /* Close Button */ \n    width: 40px;\n    height: 40px;\n    opacity: 0.6;\n    cursor: pointer; \n}\n.project-todo-edit-window > form{ /* Todo Form */\n    display: flex; \n    flex-direction: column;\n    align-items: center;\n    gap: 15px; \n\n    padding: 10px;\n}\n.project-todo-edit-window > form > div > label{\n    display: block;\n    text-align: center; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n}\n.project-todo-edit-window > form > div > h4{\n    text-align: center;\n    margin: 0;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n#edit-project-name-todo{ /* Project Todo Name Input */\n    border: 1px solid #0f172aa9; \n    border-left: none;\n    border-right: none;\n    border-top: none; \n    background-color:#94a3b888; \n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    width: 180px;\n}\n#edit-project-name-todo:focus{\n    outline: none;\n    border-bottom-color: #2563eb;\n}\n\n#edit-project-todo-description{ /* Project Todo Description Input */\n    background-color: #94a3b888;\n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    border: 1px solid #0f172aa9;\n    border-radius: 10px; \n    padding: 5px;\n}\n#edit-project-todo-description:focus{\n    outline: none;\n    border:1px solid #2563eb;\n}\n\n#edit-project-todo-due-date{ /* Project Todo Due Date Input */\n    border: 1px solid #0f172aa9;\n    border-radius: 10px;\n    background-color: #94a3b888;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    color: white; \n    padding: 3px; \n    cursor: pointer; \n}\n#edit-project-todo-due-date:focus{\n    outline: none;\n    border: 1px solid #2563eb; \n}\n\n.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */\n    display: flex;\n    gap: 10px;\n}\n.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button{ \n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 0px 5px 0px 5px; \n    font-weight: bold; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button:hover{\n    border: 1px solid #2dd4bf;\n    background-color: #2dd4bf; \n    color: white; \n    cursor: pointer; \n}\n\n.project-todo-edit-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */\n    border: 1px solid #2564eb8c;\n    border-radius: 10px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    background-color: #2564eb8c;\n    color: white;\n    padding: 3px 10px 3px 10px; \n}\n.project-todo-edit-window > form > div:nth-child(5) > button:hover{\n    border: 1px solid #2563eb;\n    background-color:#2563eb;\n    cursor: pointer; \n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |New Note Button Screen| */\n#note-input{\n    border-radius: 10px;\n    border: 1px solid #0f172aa9; \n    background-color: #94a3b8; \n    padding: 5px;\n    color: white;\n    width: 200px;\n    font-size: 14px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    scrollbar-width: thin;\n    scrollbar-color: #94a3b8 #0f172aa9; \n}\n#note-input:focus{\n    outline: none;\n    border-color: #2563eb;\n}\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* |View Notes Screen| */\n.notes-screen{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    padding: 3px;\n    overflow-y: scroll; \n    height: 100%; \n    scrollbar-width: thin;\n    scrollbar-color: #94a3b8 #0f172aa9; \n}\n.notes-screen > div{ /* Notes Container */\n    border: 1px solid #0f172aa9; \n    border-radius: 10px; \n    text-align: left;\n    padding: 3px;\n    color: white;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    word-wrap: break-word; \n}\n.notes-screen > div > div:nth-child(1){ /* Delete Notes Container */\n    display: flex;\n    justify-content: end;\n}\n.notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */\n    width: 40px;\n    height: 40px;\n}\n\n\n/****************************************************************************************************************************************************************************/\n/****************************************************************************************************************************************************************************/\n/* Mobile Developement */\n/* Media-0 - For desktop miniturization and some mobile viewports. */\n@media only screen and (max-width: 1000px){\n    #content{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        padding: 10px;\n    }\n\n    /* |Main Title| */\n    .main-title{\n        font-family: springtown-market, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 2em; \n    }\n\n    /* |Main Screen| */\n    .main-screen{\n        display: flex;\n        gap: 3px;\n\n        padding: 5px;\n        height: 550px;\n    }\n    .main-screen > div{\n        border-radius: 10px;\n    }\n\n    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n\n        padding: 5px;\n        background-color: #94a3b8; \n    }\n    .main-screen > div:nth-child(1) > button{\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        border-radius: 10px; \n        border: 1px solid #0f172a3f;\n        padding: 5px 5px 5px 5px;\n    }\n\n    .main-screen > div:nth-child(2){ /* Display Screen (Input Section) */\n        width: 200px; /*Size may need to change depending on the amount of content. */\n        text-align: center;\n        background-color: #94a3b8; \n        padding: 10px;\n    }\n    .main-screen > div:nth-child(2) > form{ /* New Todo Form */\n        display: flex; \n        flex-direction: column;\n        gap: 20px;\n    }\n    .main-screen > div:nth-child(2) > form > div > label{\n        display: block;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        color: white;\n    }\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{\n        margin: 0;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n    }\n\n    /* |New Todo Button Screen| */\n    #todo-name{ /* Todo Name Input*/\n        border: 1px solid #0f172aa9;\n        border-top: none; \n        border-right: none;\n        border-left: none;\n        background-color: #94a3b8; \n        color: white;\n        font-size: 14px;\n        width: 150px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-name:focus{\n        outline: none;\n        border-bottom-color: #2563eb; \n    }\n\n    #todo-description{ /* Todo Description Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        background-color: #94a3b8;\n        color: white;\n        width: 170px;\n        padding: 5px;\n        font-size: 14px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-description:focus{\n        outline: none;\n        border-color: #2563eb;\n    }\n\n    #todo-due-date{ /* Todo Due Date Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        background-color: #94a3b8; \n        padding: 5px;\n        color: white;\n        font-size: 16px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-due-date:focus{\n        outline: none;\n        border-color: #2563eb; \n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ \n        display: flex;\n        justify-content: center; \n        gap: 5px;\n    }\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{\n        padding: 0px 10px 0px 10px;\n        font-size: 16px; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        border: 1px solid #0f172a3f;\n        border-radius: 10px; \n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */\n        font-size: 16px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        padding: 0px 10px 0px 10px; \n        background-color: #2563eb;\n        border: 1px solid #2563eb;\n        border-radius: 10px;\n        color: white; \n    }\n\n    /* |View Todos Screen| */\n    .todo-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        height: 100%;\n        overflow-y: scroll;\n        scrollbar-width: thin;\n        scrollbar-color: #4771ac81 #0f172aa9; \n        padding: 5px;\n    }\n    .todo-screen > div{ /* todo rows (todo items)*/\n        display: flex; \n        flex-direction: column;\n        gap: 5px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        padding: 3px; \n    }\n    .todo-screen > div > div:nth-child(1){ /* Todo name container */\n        word-wrap: break-word; \n        color: white; \n        font-size: 15px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n    }\n    .todo-screen > div > div:nth-child(2){/* Todo Misc Container */\n        display: flex;\n        justify-content: center;\n        gap: 5px;\n    }\n    .todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */\n        width: 40px;\n        height: 40px; \n    }\n\n    /* |Todo Description Window|*/\n    .todo-description-window{\n        display: flex;\n        flex-direction: column; \n        gap: 3px;\n\n        border: 2px solid #0f172a !important;\n        border-radius: 10px; \n        position: absolute;\n        width: 300px;\n        top: 100px;\n        height: auto;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        background-color:#94a3b888;\n    }\n    .todo-description-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n    }\n    .todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .todo-description-window > div:nth-child(2){ /* Details Container */\n        display: flex;\n        flex-direction: column;\n        gap: 5px; \n\n        padding: 5px;\n    }\n    .todo-description-window > div:nth-child(2) > div{\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        word-wrap:break-word;\n        padding: 3px; \n    }\n    .todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */\n        font-weight: bold;\n    }\n    .todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */\n        font-size: 15px; \n        color: white;\n    }\n\n    /* |Edit Todo Window| */\n    .edit-todo-window{\n        border: 2px solid #0f172a;\n        border-radius: 10px; \n        background-color: #94a3b888;\n        position: absolute;\n        width: 250px;\n        height: auto;\n        top: 100px;\n    }\n    .edit-todo-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n    }\n    .edit-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .edit-todo-window > form{ /* Edit Section (Form)*/\n        display: flex; \n        flex-direction: column;\n        align-items: center;\n        gap: 15px;\n\n        padding: 10px;\n    }\n    .edit-todo-window > form > div > label{\n        display: block; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        text-align: center; \n        color: white; \n    }\n    .edit-todo-window > form > div > h4{\n        margin: 0; \n        text-align: center;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n    }\n\n    #edit-name{ /* Edit Name Input */\n        border: 1px solid #0f172aa9;\n        border-left: none;\n        border-right: none;\n        border-top: none;\n        background-color: #94a3b888;\n        width: 150px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white;\n    }\n    #edit-name:focus{\n        outline: none; \n        border-bottom-color: #2563eb; \n    }\n\n    #edit-description{ /* Edit Description Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        padding: 5px; \n        background-color: #94a3b888;\n        color: white; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    }\n    #edit-description:focus{\n        outline: none; \n        border-color:#2563eb; \n    }\n\n    #edit-due-date{ /* Edit Due Date Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        background-color: #94a3b888;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n        color: white;\n        padding: 3px;\n    }\n    #edit-due-date:focus{\n        outline: none;\n        border-color: #2563eb;\n    }\n\n    .edit-todo-window > form > div:nth-child(4) > div{ /* Edit Todo Priority Container */\n        display: flex;\n        gap: 5px; \n    }\n    .edit-todo-window > form > div:nth-child(4) > div > button{\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        padding: 0px 5px 0px 5px;\n    }\n\n    .edit-todo-window > form > div:nth-child(5) > button{ /* Edit Todo Submit Button */\n        border: 1px solid #2563eb;\n        border-radius: 10px; \n        background-color: #2563eb;\n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        padding: 3px 10px 3px 10px; \n    }\n\n    /* |New Project Button Screen| */\n    #project-name{ /* Project Name Input */\n        background-color: #94a3b8;\n        border: 1px solid #0f172aa9;\n        border-top: none;\n        border-right: none;\n        border-left: none; \n        width: 150px;\n        font-size: 14px; \n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    }\n    #project-name:focus{\n        outline: none; \n        border-bottom-color: #2563eb;\n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */\n        font-size: 16px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        padding: 0px 10px 0px 10px; \n        background-color: #2563eb;\n        border: 1px solid #2563eb; \n        border-radius: 10px;\n        color: white;\n    }\n\n    /* |View Projects Screen| */\n    .projects-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        \n        height: 100%;\n        overflow-y: scroll; \n        scrollbar-color: #4771ac81 #0f172aa9; \n        scrollbar-width: thin; \n        padding: 5px; \n    }\n    .projects-screen > div{ /* Project Container (Each Project) */\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        padding: 3px; \n    }\n    .projects-screen > div > div:nth-child(1){ /* Project Name */\n        color: white; \n        font-weight: bold; \n        word-wrap: break-word; \n    }\n    .projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 20px;\n    }\n    .projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */\n        width: 40px;\n        height: 40px;\n    }\n\n    /* |Delete Project Window|*/\n    .delete-project-window{ \n        display: flex;\n        flex-direction: column;\n        gap: 15px; \n\n        position: absolute;\n        top: 100px;\n        width: 250px;\n        height: 300px;\n        border: 2px solid #0f172a;\n        border-radius: 10px;\n        padding: 10px; \n    }\n    .delete-project-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end; \n    }\n    .delete-project-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n\n    .delete-project-window > div:nth-child(2){ /* Delete Prompt Container */\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        padding: 5px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    .delete-project-window > div:nth-child(2) > p{ /* Delete Prompt Message */\n        color: red; \n        text-align: center; \n    }\n    .delete-project-window > div:nth-child(2) > button{ /* Delete prompt Button */\n        border: 1px solid #f87171;\n        border-radius: 10px;\n        padding: 3px 15px 3px 15px;\n        background-color: #f87171; \n        color: white;\n        font-weight: bold;  \n        font-size: 15px; \n    }\n\n    /* |Project Screen| */\n    .project-screen{  \n        display: flex;\n        flex-direction: column;\n        align-items: center; \n        gap: 10px; \n\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        font-weight: bold; \n        color: white; \n        height: 100%;\n        overflow-y: scroll;\n        scrollbar-width: thin;\n        scrollbar-color: #4771ac81 #0f172aa9;\n        padding: 0px; \n    }\n    .project-screen > div:nth-child(1){ /* Project Name */\n        font-size: 16px; \n        word-wrap: break-word;\n        width: 140px; \n        letter-spacing: 2px;\n    }\n    .project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */\n        display: flex;\n        align-items: center;\n        justify-content: space-around;  \n        gap: 10px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        width: 160px; \n    }\n    .project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */\n        width: 40px;\n        height: 40px;\n    }\n    .project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    .project-todos-section > div{ /* Project Todo (Each todo) */\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        padding: 5px; \n        width: 160px; \n    }\n    .project-todos-section > div > div:nth-child(1){ /* Project Todo Name */\n        word-wrap: break-word;\n    }\n    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */\n        display: flex;\n        justify-content: space-evenly;\n        gap: 5px;\n    }\n    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */\n        width: 40px;\n        height: 40px;\n    }\n\n    /* |Add Todo Window (Project Screen)| */\n    .add-todo-window{\n        display: flex;\n        flex-direction: column;\n        gap: 10px; \n\n        position: absolute;\n        width: 250px;\n        height: auto;\n        top: 100px;\n        border: 2px solid #0f172a;\n        border-radius: 10px; \n        background-color:#94a3b888; \n    }\n    .add-todo-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end;\n    }\n    .add-todo-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n\n    .add-todo-window > form { /* Add Todo Section (Form) */\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 15px;\n    }\n    .add-todo-window > form > div > label{\n        display: block; \n        text-align: center;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        color: white; \n    }\n    .add-todo-window > form > div > h4{\n        text-align: center;\n        margin: 0;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n    }\n\n    #add-todo-name{ /* Project Todo Name Input */\n        border: 1px solid #0f172aa9;\n        border-left: none;\n        border-right: none;\n        border-top: none; \n        background-color:#94a3b888;\n        width: 150px; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n        color: white; \n    }\n    #add-todo-name:focus{\n        outline: none;\n        border-bottom-color:#2563eb;\n    }\n\n    #add-todo-description{ /* Project Todo Description Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        padding: 5px; \n        color: white;\n        background-color: #94a3b888;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #add-todo-description:focus{\n        outline: none;\n        border: 1px solid #2563eb;\n    }\n\n    #add-todo-due-date{ /* Project Todo Due Date Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        padding: 3px;\n        color: white;\n        background-color:#94a3b888;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #add-todo-due-date:focus{\n        outline: none; \n        border: 1px solid #2563eb;\n    }\n\n    .add-todo-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */\n        display: flex;\n        gap: 5px;\n    }\n    .add-todo-window > form > div:nth-child(4) > div:nth-child(2) > button{\n        border: 1px solid #0f172aa9; \n        border-radius: 10px;\n        padding: 0px 5px 0px 5px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n    }\n\n    .add-todo-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */\n        border: 1px solid #2563eb;\n        border-radius: 10px;\n        background-color:#2563eb; \n        color: white;\n        padding: 1px 10px 1px 10px; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n    }\n\n    /* |Project Todo Details Window (Project Screen)| */\n    .project-todo-details-window{\n        position: absolute;\n        width: 250px;\n        height: 300px;\n        top: 100px; \n        border: 2px solid #0f172a; \n        border-radius: 10px; \n        background-color: #94a3b888;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    .project-todo-details-window > div:nth-child(1){ /* Close Button Container */\n        display: flex;\n        justify-content: end;\n    }\n    .project-todo-details-window > div:nth-child(1) > img[src]{ /* Close Button */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .project-todo-details-window > div:nth-child(2){ /* Details Container (Description|Due Date|Priority) */\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n\n        padding: 5px; \n    }\n    .project-todo-details-window > div:nth-child(2) > div{ /* Description|Due Date|Priority */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        padding: 5px;\n    }\n    .project-todo-details-window > div:nth-child(2) > div > div:nth-child(1){ /* Data Labels */\n        font-weight: bold; \n    }\n    .project-todo-details-window > div:nth-child(2) > div > div:nth-child(2){ /* Local Storage Data */\n        color: white; \n        font-size: 15px; \n    }\n    .project-todo-details-window > div:nth-child(2) > div:nth-child(1){ /* Description */\n        word-wrap: break-word; \n    }\n\n    /* |Project Todo Edit Window| */\n    .project-todo-edit-window{\n        border: 2px solid #0f172a; \n        border-radius: 10px; \n        background-color:#94a3b888; \n        width: 250px;\n        height: auto;\n        position: absolute;\n        top: 100px;\n        color: white;\n    }\n    .project-todo-edit-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n    }\n    .project-todo-edit-window > div:nth-child(1) > img[src]{\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .project-todo-edit-window > form{ /* Todo Form */\n        display: flex; \n        flex-direction: column;\n        align-items: center;\n        gap: 15px; \n\n        padding: 10px;\n    }\n    .project-todo-edit-window > form > div > label{\n        display: block;\n        text-align: center; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n    }\n    .project-todo-edit-window > form > div > h4{\n        text-align: center;\n        margin: 0;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n\n    #edit-project-name-todo{ /* Project Todo Name Input */\n        border: 1px solid #0f172aa9; \n        border-left: none;\n        border-right: none;\n        border-top: none; \n        background-color:#94a3b888; \n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n        width: 150px;\n    }\n    #edit-project-name-todo:focus{\n        outline: none;\n        border-bottom-color: #2563eb;\n    }\n\n    #edit-project-todo-description{ /* Project Todo Description Input */\n        background-color: #94a3b888;\n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        padding: 5px;\n    }\n    #edit-project-todo-description:focus{\n        outline: none;\n        border:1px solid #2563eb;\n    }\n\n    #edit-project-todo-due-date{ /* Project Todo Due Date Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        background-color: #94a3b888;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n        color: white; \n        padding: 3px; \n    }\n    #edit-project-todo-due-date:focus{\n        outline: none;\n        border: 1px solid #2563eb; \n    }\n\n    .project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2){ /* Project Todo Priority Container */\n        display: flex;\n        gap: 10px;\n    }\n    .project-todo-edit-window > form > div:nth-child(4) > div:nth-child(2) > button{ \n        border: 1px solid black;\n        border-radius: 10px;\n        padding: 0px 5px 0px 5px; \n        font-weight: bold; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n\n    .project-todo-edit-window > form > div:nth-child(5) > button{ /* Project Todo Submit Button */\n        border: 1px solid black; \n        border-radius: 10px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        background-color: #2563eb; \n        color: white;\n        padding: 3px 10px 3px 10px; \n    }\n\n    /* |New Note Button Screen| */\n    #note-input{\n        border-radius: 10px;\n        border: 1px solid #0f172aa9; \n        background-color: #94a3b8; \n        padding: 5px;\n        color: white;\n        width: 170px;\n        font-size: 14px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        scrollbar-width: thin;\n        scrollbar-color: #4771ac81 #0f172aa9; \n    }\n    #note-input:focus{\n        outline: none;\n        border-color: #2563eb;\n    }\n\n    /* |View Notes Screen| */\n    .notes-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        padding: 5px;\n        overflow-y: scroll; \n        scrollbar-width: thin; \n        scrollbar-color: #4771ac81 #0f172aa9; \n        height: 100%; \n    }\n    .notes-screen > div{ /* Notes Container */\n        border: 1px solid #0f172aa9; \n        border-radius: 10px; \n        text-align: left;\n        padding: 3px;\n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    .notes-screen > div > div:nth-child(1){ /* Delete Notes Container */\n        display: flex;\n        justify-content: end;\n    }\n    .notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */\n        width: 40px;\n        height: 40px;\n    }\n}\n\n/* media-1 - For mobile viewports smaller than 340px. */\n@media only screen and (max-width: 340px){\n    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n\n        padding: 5px;\n        background-color: #94a3b8; \n    }\n    .main-screen > div:nth-child(1) > button{\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        font-size: 9px;\n        border-radius: 10px; \n        border: 1px solid #0f172a3f;\n        padding: 5px 5px 5px 5px;\n    }\n}\n\n/* media-2 - For mobile viewports smaller than 300px */\n@media only screen and (max-width: 300px){\n    .main-screen > div:nth-child(1){ /* Button Section (Button Screen) */\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n\n        padding: 5px;\n        background-color: #94a3b8; \n        width: fit-content;\n    }\n    .main-screen > div:nth-child(1) > button{\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        font-size: 9px; \n        border-radius: 10px; \n        border: 1px solid #0f172a3f;\n        padding: 5px 5px 5px 5px;\n    }\n\n    .main-screen > div:nth-child(2){ /* Display Screen (Input Section) */\n        width: fit-content; \n        text-align: center;\n        background-color: #94a3b8; \n        padding: 10px;\n    }\n    .main-screen > div:nth-child(2) > form{ /* New Todo Form */\n        display: flex; \n        flex-direction: column;\n        gap: 20px;\n    }\n    .main-screen > div:nth-child(2) > form > div > label{\n        display: block;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        color: white;\n    }\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > h4{\n        margin: 0;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white; \n    }\n\n    /* |New Todo Button Screen| */\n    #todo-name{ /* Todo Name Input*/\n        border: 1px solid #0f172aa9;\n        border-top: none; \n        border-right: none;\n        border-left: none;\n        background-color: #94a3b8; \n        color: white;\n        font-size: 14px;\n        width: 140px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-name:focus{\n        outline: none;\n        border-bottom-color: #2563eb; \n    }\n\n    #todo-description{ /* Todo Description Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        background-color: #94a3b8;\n        color: white;\n        width: 140px;\n        padding: 5px;\n        font-size: 14px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-description:focus{\n        outline: none;\n        border-color: #2563eb;\n    }\n\n    #todo-due-date{ /* Todo Due Date Input */\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        background-color: #94a3b8; \n        padding: 5px;\n        color: white;\n        width: 130px;\n        font-size: 12px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n    #todo-due-date:focus{\n        outline: none;\n        border-color: #2563eb; \n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div{ /* Todo Priority Container */ \n        display: flex;\n        justify-content: center; \n        gap: 5px;\n    }\n    .main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button{\n        padding: 3px;\n        font-size: 12px; \n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n        border: 1px solid #0f172a3f;\n        border-radius: 10px; \n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(5) > button{ /* Todo Submit Button */\n        font-size: 16px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        padding: 0px 10px 0px 10px; \n        background-color: #2563eb;\n        border: 1px solid #2563eb;\n        border-radius: 10px;\n        color: white; \n    }\n\n    /* |View Todos Screen|*/\n    .todo-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        height: 100%;\n        overflow-y: scroll;\n    }\n    .todo-screen > div{ /* todo rows (todo items)*/\n        display: flex; \n        flex-direction: column;\n        gap: 5px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        padding: 3px; \n        width: 130px;\n    }\n    .todo-screen > div > div:nth-child(1){ /* Todo name container */\n        word-wrap: break-word; \n        color: white; \n        font-size: 15px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold; \n    }\n    .todo-screen > div > div:nth-child(2){/* Todo Misc Container */\n        display: flex;\n        justify-content: center;\n        gap: 5px;\n    }\n    .todo-screen > div > div:nth-child(2) > img[src]{ /* Misc (Description|Edit|Delete) */\n        width: 40px;\n        height: 40px; \n    }\n\n    /* |Todo Description Window| */\n    .todo-description-window{\n        display: flex;\n        flex-direction: column; \n        gap: 3px;\n\n        border: 2px solid #0f172a !important;\n        border-radius: 10px; \n        position: absolute;\n        width: 250px;\n        top: 100px;\n        height: auto;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        background-color:#94a3b888;\n    }\n    .todo-description-window > div:nth-child(1){ /* Close Container */\n        display: flex;\n        justify-content: end;\n    }\n    .todo-description-window > div:nth-child(1) > img[src]{ /* Close Button Image */\n        width: 40px;\n        height: 40px;\n        opacity: 0.6;\n    }\n    .todo-description-window > div:nth-child(2){ /* Details Container */\n        display: flex;\n        flex-direction: column;\n        gap: 5px; \n\n        padding: 5px;\n    }\n    .todo-description-window > div:nth-child(2) > div{\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        word-wrap:break-word;\n        padding: 3px; \n    }\n    .todo-description-window > div:nth-child(2) > div > div:nth-child(1){ /* Labels */\n        font-weight: bold;\n    }\n    .todo-description-window > div:nth-child(2) > div > div:nth-child(2){ /* description data  */\n        font-size: 15px; \n        color: white;\n    }\n\n    /* |New Project Button Screen| */\n    #project-name{ /* Project Name Input */\n        background-color: #94a3b8;\n        border: 1px solid #0f172aa9;\n        border-top: none;\n        border-right: none;\n        border-left: none; \n        width: 140px;\n        font-size: 14px; \n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; \n    }\n    #project-name:focus{\n        outline: none; \n        border-bottom-color: #2563eb;\n    }\n\n    .main-screen > div:nth-child(2) > form > div:nth-child(2) > button{ /* Project Submit Button */\n        font-size: 16px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-weight: bold;\n        padding: 0px 10px 0px 10px; \n        background-color: #2563eb;\n        border: 1px solid #2563eb; \n        border-radius: 10px;\n        color: white;\n    }\n\n    /* |View Projects Screen| */\n    .projects-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    .projects-screen > div{ /* Project Container (Each Project) */\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        padding: 3px; \n        width: 130px;\n    }\n    .projects-screen > div > div:nth-child(1){ /* Project Name */\n        color: white; \n        font-weight: bold; \n        word-wrap: break-word; \n    }\n    .projects-screen > div > div:nth-child(2){ /* Project Misc Container (Todos|Delete Button) */\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 20px;\n    }\n    .projects-screen > div > div:nth-child(2) > div:nth-child(1){ /* Todos Length Tag */\n        font-size: 14px; \n    }\n    .projects-screen > div > div:nth-child(2) > img[src]{ /* Delete Button Image */\n        width: 40px;\n        height: 40px;\n    }\n\n    /* |Project Screen| */\n    .project-screen{  \n        display: flex;\n        flex-direction: column;\n        gap: 10px; \n\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        font-weight: bold; \n        color: white; \n        height: 100%;\n        overflow-y: scroll; \n        scrollbar-width: thin;\n        scrollbar-color: #4771ac81 #0f172aa9;\n        padding: 0; \n    }\n    .project-screen > div:nth-child(1){ /* Project Name */\n        font-size: 15px; \n        word-wrap: break-word; \n        letter-spacing: 2px;\n    }\n    .project-screen > div:nth-child(2){ /* project prompt Container (Arrow Button|Todo List Logo|Add Todo Button) */\n        display: flex;\n        align-items: center;\n        justify-content: space-around;  \n        gap: 10px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        width: 140px; \n    }\n    .project-screen > div:nth-child(2) > img[src]{ /* Arrow Button & Add Todo Button */\n        width: 40px;\n        height: 40px;\n    }\n    .project-todos-section{ /* Project Todos Container (Todo Name|Todo Details|Edit Todo|Delete Todo) */\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    .project-todos-section > div{ /* Project Todo (Each todo) */\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n\n        border: 1px solid #0f172aa9;\n        border-radius: 10px; \n        padding: 5px; \n        width: 140px; \n    }\n    .project-todos-section > div > div:nth-child(1){ /* Project Todo Name */\n        word-wrap: break-word;\n    }\n    .project-todos-section > div > div:nth-child(2){ /* Project Todo Button Section */\n        display: flex;\n        justify-content: space-evenly;\n        gap: 5px;\n    }\n    .project-todos-section > div > div:nth-child(2) > img[src]{ /* Project Todo Buttons */\n        width: 30px;\n        height: 30px;\n    }\n\n    /* |New Note Button Screen| */\n    #note-input{\n        border-radius: 10px;\n        border: 1px solid #0f172aa9; \n        background-color: #94a3b8; \n        padding: 5px;\n        color: white;\n        width: 140px;\n        font-size: 14px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        scrollbar-width: thin;\n        scrollbar-color: #4771ac81 #0f172aa9; \n    }\n    #note-input:focus{\n        outline: none;\n        border-color: #2563eb;\n    }\n\n    /* |View Notes Screen| */\n    .notes-screen{\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        height: 100%; \n    }\n    .notes-screen > div{ /* Notes Container */\n        border: 1px solid #0f172aa9; \n        border-radius: 10px; \n        text-align: left;\n        padding: 5px;\n        color: white;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 12px; \n        width: 130px; \n    }\n    .notes-screen > div > div:nth-child(1){ /* Delete Notes Container */\n        display: flex;\n        justify-content: end;\n    }\n    .notes-screen > div > div:nth-child(1) > img[src]{ /* Delete Notes Button Image */\n        width: 40px;\n        height: 40px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/modules/DisplayNotes.js":
/*!*************************************!*\
  !*** ./src/modules/DisplayNotes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayNotes: () => (/* binding */ DisplayNotes),
/* harmony export */   NotesBeingDisplayed: () => (/* binding */ NotesBeingDisplayed)
/* harmony export */ });
/* harmony import */ var _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete-outline.svg */ "./src/images/delete-outline.svg");
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");
 



// DisplayNotes(): Will control the flow of notes being displayed. 
function DisplayNotes(e){
    ClearDisplayScreen();
    RemovePreviousSelectedButton(); 

    e.target.classList.value = 'current-button'; 

    NotesBeingDisplayed();
}

// NotesBeingDisplayed(): Will display all the user created notes. 
function NotesBeingDisplayed(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    
    const notesScreen = document.createElement('div');
    notesScreen.classList.add('notes-screen'); 

    const notesArray = JSON.parse(localStorage.getItem('notes')); 

    if (notesArray.length === 0)
    {
        const notesMssg = document.createElement('div'); 
        notesMssg.classList.add('notes-mssg'); 
        notesMssg.textContent = "Add a new note by clicking on the New Note button.";
        notesScreen.appendChild(notesMssg);
    }

    notesArray.forEach((noteObj) => {
        const noteContainer = document.createElement('div');

        const deleteNoteContainer = document.createElement('div');
        const deleteNote = new Image();
        deleteNote.src = _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__; 
        deleteNoteContainer.appendChild(deleteNote); 
        deleteNote.addEventListener('click', _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__.DeleteNoteFromLocalStorage); 

        const note = document.createElement('div');
        note.textContent = `${noteObj.note}`;

        noteContainer.appendChild(deleteNoteContainer);
        noteContainer.appendChild(note); 
        notesScreen.appendChild(noteContainer);
    });
    
    displayScreen.appendChild(notesScreen); 
}

// ClearDisplayScreen(): Clear the display the screen of all the previous content.
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    displayScreen.replaceChildren(); 
}

// RemovePreviousSelectedButton(): Will remove the selector from the previously selected button. 
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button'); 
    
    buttonSection.forEach(button => button.classList.remove('current-button'));
}

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
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _ProjectContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectContent */ "./src/modules/ProjectContent.js");


 







// DisplayProjectTodos(): Will display all the project todos from each project. 
function DisplayProjectTodos(){
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    const projectScreen = document.querySelector('.project-screen');

    projectArray.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const projectTodosSection = document.createElement('div');
            projectTodosSection.classList.add('project-todos-section');
            
            const todoArray = project.todos;

            if (todoArray.length === 0)
            {
                const projectTodoMssg = document.createElement('div'); 
                projectTodoMssg.classList.add('project-todo-mssg'); 
                projectTodoMssg.textContent = "Click the plus button to add a new Todo."; 
                projectTodosSection.appendChild(projectTodoMssg); 
                projectScreen.appendChild(projectTodosSection); 
            }

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
                deleteImageButton.addEventListener('click', _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_4__.DeleteStoredTodoProject);
    
                projectTodoButtons.appendChild(detailsImageButton);
                projectTodoButtons.appendChild(editImageButton);
                projectTodoButtons.appendChild(deleteImageButton);
    
                projectTodo.appendChild(projectTodoButtons); 
    
                projectTodosSection.appendChild(projectTodo); 
    
                projectScreen.appendChild(projectTodosSection); 
            }
        }
    });
}

/***/ }),

/***/ "./src/modules/DisplayProjects.js":
/*!****************************************!*\
  !*** ./src/modules/DisplayProjects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayProjects: () => (/* binding */ DisplayProjects),
/* harmony export */   OpenProject: () => (/* binding */ OpenProject),
/* harmony export */   ProjectPrompt: () => (/* binding */ ProjectPrompt),
/* harmony export */   ProjectsBeingDisplayed: () => (/* binding */ ProjectsBeingDisplayed)
/* harmony export */ });
/* harmony import */ var _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete-forever.svg */ "./src/images/delete-forever.svg");
/* harmony import */ var _images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arrow-left.svg */ "./src/images/arrow-left.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _ProjectContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectContent */ "./src/modules/ProjectContent.js");
/* harmony import */ var _DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisplayProjectTodos */ "./src/modules/DisplayProjectTodos.js");
 
 








// DisplayProjects(): Will display all the current user created projects.
function DisplayProjects(e){
    ClearDisplayScreen();
    RemovePreviousSelectedButton(); 

    e.target.classList.add('current-button'); 

    ProjectsBeingDisplayed(); 
}

// ProjectsBeingDisplayed(): The projects will be displayed in the projects screen.
function ProjectsBeingDisplayed(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const projectsScreen = document.createElement('div');
    projectsScreen.classList.add('projects-screen');

    const projectArray = JSON.parse(localStorage.getItem('projects'));

    if (projectArray.length === 0)
    {
        const projectsMssg = document.createElement('div'); 
        projectsMssg.classList.add('projects-mssg'); 
        projectsMssg.textContent = "Add a new project by clicking on the New Project button.";
        projectsScreen.appendChild(projectsMssg); 
    }

    projectArray.forEach((project) => {
        const todoArray = project.todos;

        const projectContainer = document.createElement('div'); 

        const projectName = document.createElement('div');
        projectName.textContent = `${project.projectName}`;
        projectName.addEventListener('click', OpenProject);

        const projectMisc = document.createElement('div'); 

        const numOfTodos = document.createElement('div');
        numOfTodos.textContent = `Todos: ${todoArray.length}`; 

        const delProjectImg = new Image();
        delProjectImg.src = _images_delete_forever_svg__WEBPACK_IMPORTED_MODULE_0__; 
        delProjectImg.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_4__.DeleteProjectWindow);

        projectContainer.appendChild(projectName);
        projectContainer.appendChild(projectMisc); 
        projectMisc.appendChild(numOfTodos); 
        projectMisc.appendChild(delProjectImg);

        projectsScreen.appendChild(projectContainer);
    });

    displayScreen.appendChild(projectsScreen);
}

// OpenProject(): Will open the project in the projects being displayed. 
function OpenProject(e){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher = e.target.textContent; 

    ProjectPrompt(); 
}

// ProjectPrompt(): All the prompts associated with the project:
function ProjectPrompt(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const projectScreen = document.createElement('div');
    projectScreen.classList.add('project-screen'); 

    const projectArray = JSON.parse(localStorage.getItem('projects')); 

    projectArray.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher)
        {
            const projectPrompt = document.createElement('div'); 

            const backArrowImg = new Image();
            backArrowImg.src = _images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__;
            backArrowImg.addEventListener('click', BackToProjectsSection); 

            const projectName = document.createElement('div');
            projectName.textContent = `${_utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_3__.projectMatcher.matcher}`; 
         
            const addTodoImg = new Image(); 
            addTodoImg.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__;
            addTodoImg.addEventListener('click', _ProjectContent__WEBPACK_IMPORTED_MODULE_4__.AddTodoWindow);

            projectPrompt.appendChild(backArrowImg);
            projectPrompt.appendChild(addTodoImg); 
            projectScreen.appendChild(projectName); 
            projectScreen.appendChild(projectPrompt); 
        }
    });

    displayScreen.appendChild(projectScreen); 

    (0,_DisplayProjectTodos__WEBPACK_IMPORTED_MODULE_5__.DisplayProjectTodos)();
}

// BackToProjectsSection(): Will take the user back to the projects section.
function BackToProjectsSection(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    ProjectsBeingDisplayed(); 
}

// ClearDisplayScreen(): Will clear the display screen of any remaining data.
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren();
}

// RemovePreviousSelectedButton(): Will remove the previous selected button classlist.
function RemovePreviousSelectedButton(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    buttonSection.forEach(button => button.classList.remove('current-button'));
}

/***/ }),

/***/ "./src/modules/DisplayTodos.js":
/*!*************************************!*\
  !*** ./src/modules/DisplayTodos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todos: () => (/* binding */ Todos),
/* harmony export */   ViewTodos: () => (/* binding */ ViewTodos)
/* harmony export */ });
/* harmony import */ var _TodoContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoContent */ "./src/modules/TodoContent.js");
/* harmony import */ var _utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ButtonActivation */ "./src/utils/ButtonActivation.js");
/* harmony import */ var _images_window_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/window-close.svg */ "./src/images/window-close.svg");
/* harmony import */ var _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/note-outline.svg */ "./src/images/note-outline.svg");
/* harmony import */ var _images_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/note-edit-outline.svg */ "./src/images/note-edit-outline.svg");
/* harmony import */ var _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/delete-outline.svg */ "./src/images/delete-outline.svg");





 
 


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
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-screen'); 
    
    displayScreen.appendChild(todoSection); 

    const todos = JSON.parse(localStorage.getItem('todos')); 

    if (todos.length === 0)
    {
        const todoMssg = document.createElement('div');
        todoMssg.classList.add('todo-mssg'); 
        todoMssg.textContent = "Add a new todo by clicking on the New Todo button.";
        todoSection.appendChild(todoMssg); 
    }

    todos.forEach((todo, index) => {
        const todoRow = document.createElement('div');
        todoRow.dataset.userTodo = index; 
        
        const todoName = document.createElement('div');
        todoName.textContent = `${todo.name}`;

        const todoMisc = document.createElement('div');

        const todoDescription = new Image();
        todoDescription.src = _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
        todoDescription.addEventListener('click', ViewTodoDescription); 

        const editTodo = new Image();
        editTodo.src = _images_note_edit_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
        editTodo.addEventListener('click', _TodoContent__WEBPACK_IMPORTED_MODULE_0__.EditTodo);

        const deleteTodo = new Image();
        deleteTodo.src = _images_delete_outline_svg__WEBPACK_IMPORTED_MODULE_5__;
        deleteTodo.addEventListener('click', _TodoContent__WEBPACK_IMPORTED_MODULE_0__.DeleteTodo);

        todoMisc.appendChild(todoDescription);
        todoMisc.appendChild(editTodo);
        todoMisc.appendChild(deleteTodo);
        todoRow.appendChild(todoName);
        todoRow.appendChild(todoMisc);  

        todoSection.appendChild(todoRow); 
    });
}

// TodoDescription(): Will display the details about the todo.
function ViewTodoDescription(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen'); 
    const mainTitle = document.querySelector('.main-title'); 

    const todoDescriptionWindow = document.createElement('div');
    todoDescriptionWindow.classList.add('todo-description-window');

    const closeContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_2__;
    closeContainer.appendChild(closeButtonImage); 

    const detailsContainer = document.createElement('div');

    todoDescriptionWindow.appendChild(closeContainer);
    todoDescriptionWindow.appendChild(detailsContainer); 

    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo) => {
        if (todo.name === e.target.parentNode.parentNode.children[0].textContent)
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

    mainTitle.setAttribute('style', 'filter: blur(10px);');
    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.DisableButtons)();

    content.appendChild(todoDescriptionWindow);

    closeButtonImage.addEventListener('click', CloseTodoDescriptionWindow);
}

// CloseTodoDescriptionWindow(): Will remove the todo description window
function CloseTodoDescriptionWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const todoDescriptionWindow = document.querySelector('.todo-description-window');
    const closeButtonImage = document.querySelector('.todo-description-window > div:nth-child(1) > img[src]');
    
    content.removeChild(todoDescriptionWindow); 

    mainTitle.removeAttribute('style');  
    mainScreen.removeAttribute('style'); // Remove blur background
    mainScreen.classList.remove('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', CloseTodoDescriptionWindow);
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
/* harmony export */   InitializeDomContent: () => (/* binding */ InitializeDomContent)
/* harmony export */ });
/* harmony import */ var _TodoContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoContent */ "./src/modules/TodoContent.js");
/* harmony import */ var _ProjectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectContent */ "./src/modules/ProjectContent.js");
/* harmony import */ var _NoteContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteContent */ "./src/modules/NoteContent.js");
/* harmony import */ var _DisplayProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayProjects */ "./src/modules/DisplayProjects.js");
/* harmony import */ var _DisplayNotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayNotes */ "./src/modules/DisplayNotes.js");
/* harmony import */ var _DisplayTodos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisplayTodos */ "./src/modules/DisplayTodos.js");





 


// InitializeDomContent(): Initalizing all dom dontent for the application. 
function InitializeDomContent(){
    MainTitle();

    MainScreen(); 

    ButtonSection();

    DisplayScreen();
}

// MainTitle(): The main title for the application.
function MainTitle(){
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title'); 
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

    ViewProjectsButton();
}

// InputSection(): The main input section for the todo list.
function DisplayScreen(){
    const displayScreen = document.createElement('div');

    const displayMessage = document.createElement('div');
    displayMessage.classList.add('display-mssg'); 
    displayMessage.textContent = `Welcome to The Todo List. This application will allow you
    to create todo's, projects, and notes for your daily tasks. Please enjoy.`

    displayScreen.appendChild(displayMessage); 

    const mainScreen = document.querySelector('.main-screen');

    mainScreen.appendChild(displayScreen);
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

    viewTodosButton.addEventListener('click', _DisplayTodos__WEBPACK_IMPORTED_MODULE_5__.ViewTodos); 
}

// ViewNotesButton(): Button will allow the user to view all the current notes.
function ViewNotesButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');

    const viewNotesButton = document.createElement('button');
    viewNotesButton.textContent = 'View Notes';
    viewNotesButton.addEventListener('click', _DisplayNotes__WEBPACK_IMPORTED_MODULE_4__.DisplayNotes);

    buttonSection.appendChild(viewNotesButton);
}

// ViewProjectsButton(): Button will allow the user to view all the current projects.
function ViewProjectsButton(){
    const buttonSection = document.querySelector('.main-screen > div:nth-child(1)');
    const viewProjectsButton = document.createElement('button');
    viewProjectsButton.textContent = 'View Projects';

    buttonSection.appendChild(viewProjectsButton); 

    viewProjectsButton.addEventListener('click', _DisplayProjects__WEBPACK_IMPORTED_MODULE_3__.DisplayProjects); 
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
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");


// InputNote(): Will allow the user to input notes into the application.
function InputNotes(e){
    ClearDisplayScreen(); 
    RemovePreviousSelectedButton(); 

    e.target.classList.value = 'current-button'; 

    NoteForm(); 
    NoteInput(); 
    NoteSubmit();
}

// NoteForm(): Creates the user note form.
function NoteForm(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const noteForm = document.createElement('form');

    displayScreen.appendChild(noteForm); 
}

// NoteInput(): Creates the the user input for notes. 
function NoteInput(){
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 

    const noteFormSectionOne = document.createElement('div');
    const noteInputLabel = document.createElement('label');
    noteInputLabel.textContent = 'Enter Notes';
    noteInputLabel.setAttribute('for', 'note-input');
    const noteInput = document.createElement('textarea');
    noteInput.classList.add('disable-resize'); 
    noteInput.setAttribute('type', 'text');
    noteInput.setAttribute('name', 'note-input');
    noteInput.setAttribute('id', 'note-input'); 
    noteInput.setAttribute('rows', '10');
    noteInput.setAttribute('maxLength', '200');

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
    noteSubmit.addEventListener('click', _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.SubmitNoteToLocalStorage); 

    noteFormSectionTwo.appendChild(noteSubmit);

    noteForm.appendChild(noteFormSectionTwo);
}

// ClearInputSection(): Clears the input section
function ClearDisplayScreen(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 
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
/* harmony export */   AddTodoWindow: () => (/* binding */ AddTodoWindow),
/* harmony export */   DeleteProjectWindow: () => (/* binding */ DeleteProjectWindow),
/* harmony export */   InputProject: () => (/* binding */ InputProject),
/* harmony export */   ProjectTodoDetailsWindow: () => (/* binding */ ProjectTodoDetailsWindow),
/* harmony export */   ProjectTodoEditWindow: () => (/* binding */ ProjectTodoEditWindow)
/* harmony export */ });
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ButtonActivation */ "./src/utils/ButtonActivation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _images_window_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/window-close.svg */ "./src/images/window-close.svg");
/* harmony import */ var _DisplayProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayProjects */ "./src/modules/DisplayProjects.js");











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
    projectName.setAttribute('maxLength', '20'); 

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

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    const projectForm = document.querySelector('.main-screen > div:nth-child(2) > form');
    const projectName = document.getElementById('project-name');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container'); 
    let projectNameExist = false;

    // Test if the error container is inside the project form. 
    if (projectForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(3)'); 
        projectForm.removeChild(previousErrorContainer); 
        projectForm.classList.remove('error-contains-container'); 
    }

    projectArray.forEach((project) => {
        if (project.projectName === projectName.value)
        {
            projectName.setCustomValidity('This project name already exist...');
            projectName.reportValidity();
            projectNameExist = true; 
        }
    });

    if (!projectNameExist)
    {
        if (projectName.value === "")
        {
            const projectNameError = document.createElement('div');
            projectNameError.textContent = "Project name field is missing..."; 
            errorContainer.appendChild(projectNameError); 
            projectForm.appendChild(errorContainer); 
            projectForm.classList.add('contains-error-container'); 
            return;
        }

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreProjects)(projectName.value);
    }
    
    projectForm.reset();
}

// DeleteProjectWindow(): Will bring the delete project to prompt the user about deleting the project. 
function DeleteProjectWindow(e){
    _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__.projectMatcher.matcher = e.target.parentNode.parentNode.childNodes[0].innerHTML;

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const deleteProjectWindow = document.createElement('div');
    deleteProjectWindow.classList.add('delete-project-window');
    
    content.appendChild(deleteProjectWindow);

    mainTitle.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.DisableButtons)(); 

    // Close Window Button:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_3__;
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
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window'); 
    const closeButtonImage = document.querySelector('.delete-project-window > div:nth-child(1) > img[src]');

    content.removeChild(deleteProjectWindow);

    mainTitle.removeAttribute('style'); 
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', CloseDeleteProjectWindow); 
}

// AddTodo(): The add todo window will showcase all the form fields to add the todo content to the project. 
function AddTodoWindow(e){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const addTodoWindow = document.createElement('div');
    addTodoWindow.classList.add('add-todo-window'); 

    content.appendChild(addTodoWindow);

    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_3__;
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
    addTodoName.setAttribute('maxLength', '20');  
    addTodoSectionOne.appendChild(addTodoNameLabel);
    addTodoSectionOne.appendChild(addTodoName); 

    const addTodoSectionTwo = document.createElement('div');
    const addTodoDescriptionLabel = document.createElement('label');
    addTodoDescriptionLabel.textContent  = "Description";
    addTodoDescriptionLabel.setAttribute('for', 'add-todo-description');
    const addTodoDescription = document.createElement('textarea');
    addTodoDescription.classList.add('disable-resize'); 
    addTodoDescription.setAttribute('type', 'text');
    addTodoDescription.setAttribute('id', 'add-todo-description'); 
    addTodoDescription.setAttribute('name', 'add-todo-description'); 
    addTodoDescription.setAttribute('maxLength', '150'); 
    addTodoDescription.setAttribute('rows', '10');  
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
    highPriority.addEventListener('click', AddHighPriority);console.log('Will display the notes here...'); // Testing 
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

    addTodoSubmit.addEventListener('click', SubmitTodoToProject);
    
    mainTitle.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.setAttribute('style', 'filter: blur(10px);');
    mainScreen.classList.add('disable-clicker'); 
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.DisableButtons)(); 

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
function SubmitTodoToProject(e){
    e.preventDefault();
    
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');  
    const addTodoName = document.getElementById('add-todo-name'); 
    const addTodoDescription = document.getElementById('add-todo-description');
    const addTodoDueDate = document.getElementById('add-todo-due-date'); 
    const addTodoForm = document.querySelector('.add-todo-window > form'); 
    const lowPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.add-todo-window > form > div:nth-child(4) > div > button:nth-child(3)');
    const content = document.getElementById('content');
    const addTodoWindow = document.querySelector('.add-todo-window');
    const mainTitle = document.querySelector('.main-title');  
    const mainScreen = document.querySelector('.main-screen'); 
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    let priority = "";

    const projectArray = JSON.parse(localStorage.getItem('projects'));

    // Test if the add todo form contains an error container child.
    if (addTodoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.add-todo-window > form > div:nth-child(6)');
        addTodoForm.removeChild(previousErrorContainer); 
        addTodoForm.classList.remove('contains-error-container'); 
    }

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
        if (addTodoName.value === "")
        {
            const addTodoNameError = document.createElement('div');
            addTodoNameError.textContent = 'Name field is missing...';
            errorContainer.appendChild(addTodoNameError); 
        }

        if (addTodoDescription.value === "")
        {
            const addTodoDescriptionError = document.createElement('div');
            addTodoDescriptionError.textContent = 'Description field is missing...';
            errorContainer.appendChild(addTodoDescriptionError);
        }

        if (addTodoDueDate.value === "")
        {
            const addTodoDueDateError = document.createElement('div'); 
            addTodoDueDateError.textContent = 'Due date field is missing...';
            errorContainer.appendChild(addTodoDueDateError); 
        }

        if (priority === "")
        {
            const priorityError = document.createElement('div');
            priorityError.textContent = 'Priority field is missing...';
            errorContainer.appendChild(priorityError);
        }
        
        addTodoForm.appendChild(errorContainer);
        addTodoForm.classList.add('contains-error-container'); 
        return; 
    }

    let dueDate = new Date(addTodoDueDate.value);

    let currentDate = new Date();

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        projectArray.forEach((project) => {
            if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__.projectMatcher.matcher)
            {
                project.todos.push({name: addTodoName.value, description: addTodoDescription.value, dueDate: reformattedDueDate, priority: priority});
            }
        });

        localStorage.removeItem('projects'); 
        localStorage.setItem('projects', JSON.stringify(projectArray));

        content.removeChild(addTodoWindow); 

        mainTitle.removeAttribute('style'); 
        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker'); 
        (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)(); 

        displayScreen.replaceChildren();

        (0,_DisplayProjects__WEBPACK_IMPORTED_MODULE_4__.ProjectPrompt)();
    }
    else if (result === -1)
    {
        const projectTodoDueDateInvalid = document.createElement('div'); 
        projectTodoDueDateInvalid.textContent = 'The due date is older than the current date...'; 
        errorContainer.appendChild(projectTodoDueDateInvalid); 
        errorContainer.classList.add('error-container'); 
        addTodoForm.appendChild(errorContainer); 
        addTodoForm.classList.add('contains-error-container'); 
    } 
}

// RemoveAddTodo(): Will close the add todo window.
function CloseAddTodoWindow(){
    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const addTodoWindow = document.querySelector('.add-todo-window');
    const closeButtonImage = document.querySelector('.add-todo-window > div:nth-child(1) > img[src]');

    content.removeChild(addTodoWindow);
    mainTitle.removeAttribute('style');  
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)(); 

    closeButtonImage.removeEventListener('click', CloseAddTodoWindow); 
}

// AddTodoDetails(): Details about the todo added to the project.
function ProjectTodoDetailsWindow(e){
    const content = document.getElementById('content');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoDetailsWindow = document.createElement('div');
    projectTodoDetailsWindow.classList.add('project-todo-details-window');

    content.appendChild(projectTodoDetailsWindow); 

    // Close Button Section
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image(); 
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_3__;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoDetailsWindow.appendChild(closeButtonContainer); 
    closeButtonImage.addEventListener('click', CloseProjectTodoDetailsWindow);

    // Details Section
    const projectTodoDetails = document.createElement('div'); 
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todoObject = todoArray[i];

                if (todoObject.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    const projectTodoDescriptionSection = document.createElement('div');
                    const projectTodoDescriptionLabel = document.createElement('div');
                    projectTodoDescriptionLabel.textContent = "Description:";
                    const projectTodoDescription = document.createElement('div');
                    projectTodoDescription.textContent = `${todoObject.description}`;
                    projectTodoDescriptionSection.appendChild(projectTodoDescriptionLabel);
                    projectTodoDescriptionSection.appendChild(projectTodoDescription); 
                    
                    const projectTodoDueDateSection = document.createElement('div');
                    const projectTodoDueDateLabel = document.createElement('div');
                    projectTodoDueDateLabel.textContent = 'Due Date:'; 
                    const projectTodoDueDate = document.createElement('div');
                    projectTodoDueDate.textContent = `${todoObject.dueDate}`;
                    projectTodoDueDateSection.appendChild(projectTodoDueDateLabel);
                    projectTodoDueDateSection.appendChild(projectTodoDueDate); 

                    const projectTodoPrioritySection = document.createElement('div');
                    const projectTodoPriorityLabel = document.createElement('div');
                    projectTodoPriorityLabel.textContent = "Priority:";
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

    mainTitle.setAttribute('style', 'filter: blur(10px);');
    mainScreen.setAttribute('style', 'filter:blur(10px);');
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.DisableButtons)(); 
}

// CloseProjectTodoDetailsWindow(): Will close the project todo details window.
function CloseProjectTodoDetailsWindow(){
    const content = document.getElementById('content');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen');
    const projectTodoDetailsWindow = document.querySelector('.project-todo-details-window'); 
    
    content.removeChild(projectTodoDetailsWindow);

    mainTitle.removeAttribute('style');  
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)();
}

// ProjectTodoEditWindow(): User can edit the projects todo content.
function ProjectTodoEditWindow(e){
    const content = document.getElementById('content');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen'); 

    const projectTodoEditWindow = document.createElement('div');
    projectTodoEditWindow.classList.add('project-todo-edit-window');

    content.appendChild(projectTodoEditWindow);

    // Close Button Section:
    const closeButtonContainer = document.createElement('div');
    const closeButtonImage = new Image();
    closeButtonImage.src = _images_window_close_svg__WEBPACK_IMPORTED_MODULE_3__;
    closeButtonContainer.appendChild(closeButtonImage); 
    projectTodoEditWindow.appendChild(closeButtonContainer); 

    // Edit Todo Section:
    const projectTodoEdit = document.createElement('form');

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            for (let i = 0; i < todoArray.length; i++)
            {
                const todo = todoArray[i];

                if (todo.name === e.target.parentNode.parentNode.childNodes[0].textContent)
                {
                    // Collecting the todo index: 
                    _utils_ProjectMatcher__WEBPACK_IMPORTED_MODULE_1__.projectMatcher.editedTodoIndex = i; 

                    // Edit Name:
                    const projectTodoEditSectionOne = document.createElement('div');
                    const projectTodoEditNameLabel = document.createElement('label');
                    projectTodoEditNameLabel.setAttribute('for', 'edit-project-name-todo');
                    projectTodoEditNameLabel.textContent = "Edit Name";
                    const projectTodoEditName = document.createElement('input');
                    projectTodoEditName.setAttribute('type', 'text');
                    projectTodoEditName.setAttribute('id', 'edit-project-name-todo');
                    projectTodoEditName.setAttribute('name', 'edit-project-name-todo'); 
                    projectTodoEditName.setAttribute('maxLength', '20'); 
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
                    projectTodoEditDescription.classList.add('disable-resize'); 
                    projectTodoEditDescription.setAttribute('id', 'edit-project-todo-description');
                    projectTodoEditDescription.setAttribute('name', 'edit-project-todo-description');
                    projectTodoEditDescription.setAttribute('maxLength', '150'); 
                    projectTodoEditDescription.setAttribute('rows', '10'); 
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

    mainTitle.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.DisableButtons)(); 

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

    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const mainTitle = document.querySelector('.main-title'); 
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    const content = document.getElementById('content'); 
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window'); 
    const projectTodoForm = document.querySelector('.project-todo-edit-window > form'); 
    const editedProjectTodoName = document.querySelector('.project-todo-edit-window > form > div:nth-child(1) > input');
    const editedProjectTodoDescription = document.querySelector('.project-todo-edit-window > form > div:nth-child(2) > textarea');
    const editedProjectTodoDueDate = document.querySelector('.project-todo-edit-window > form > div:nth-child(3) > input');
    const editedProjectTodoPriority = document.querySelectorAll('.project-todo-edit-window > form > div:nth-child(4) > div > button');
    let priority = ""; 

    // Test if the project todo form contains a previous error container. 
    if (projectTodoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.project-todo-edit-window > form > div:nth-child(6)');
        projectTodoForm.removeChild(previousErrorContainer); 
        projectTodoForm.classList.remove('contains-error-container'); 
    }

    // Original priority placement: 
    editedProjectTodoPriority.forEach((button) => {
        if (button.classList.contains('priority-chosen'))
        {
            priority = button.textContent; 
        }
    });

    if (editedProjectTodoName.value === "" || editedProjectTodoDescription.value === "" || editedProjectTodoDueDate.value === "")
    {
        if (editedProjectTodoName.value === "")
        {
            const editedProjectTodoNameError = document.createElement('div');
            editedProjectTodoNameError.textContent = 'Name field is missing...';
            errorContainer.appendChild(editedProjectTodoNameError); 
        }

        if (editedProjectTodoDescription.value === "")
        {
            const editedProjectTodoDescriptionError = document.createElement('div');
            editedProjectTodoDescriptionError.textContent = 'Description field is missing...';
            errorContainer.appendChild(editedProjectTodoDescriptionError);
        }

        if (editedProjectTodoDueDate.value === "")
        {
            const editedProjectTodoDueDateError = document.createElement('div');
            editedProjectTodoDueDateError.textContent = 'Due date field is missing...';
            errorContainer.appendChild(editedProjectTodoDueDateError); 
        }

        projectTodoForm.appendChild(errorContainer); 
        projectTodoForm.classList.add('contains-error-container'); 
        return;
    }

    // Todo: Work with the DueDate first. 
    const dueDate = new Date(editedProjectTodoDueDate.value);

    const currentDate = new Date();

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreEditedTodoProjects)(editedProjectTodoName.value, editedProjectTodoDescription.value, reformattedDueDate, priority); 

        content.removeChild(projectTodoEditWindow); 

        displayScreen.replaceChildren(); 

        mainTitle.removeAttribute('style'); 
        mainScreen.removeAttribute('style');
        mainScreen.classList.remove('disable-clicker');
        (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)();

        (0,_DisplayProjects__WEBPACK_IMPORTED_MODULE_4__.ProjectPrompt)();
    }
    else if (result === -1)
    {
        const editedProjectDueDateInvalid = document.createElement('div'); 
        editedProjectDueDateInvalid.textContent = 'Due date is older than the current date...'; 
        errorContainer.appendChild(editedProjectDueDateInvalid); 
        projectTodoForm.appendChild(errorContainer);
        projectTodoForm.classList.add('contains-error-container'); 
        return; 
    }

}

// CloseProjectTodoEditWindow(): Will close the project todo edit window.
function CloseProjectTodoEditWindow(){
    const content = document.getElementById('content');
    const projectTodoEditWindow = document.querySelector('.project-todo-edit-window');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen');

    content.removeChild(projectTodoEditWindow);

    mainTitle.removeAttribute('style');
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_2__.EnableButtons)(); 
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
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    
    const todoForm = document.createElement('form');
    
    displayScreen.appendChild(todoForm); 
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
    todoName.setAttribute('maxLength', '20'); 

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
    todoDescription.classList.add('disable-resize'); 
    todoDescription.setAttribute('type', 'text');
    todoDescription.setAttribute('id', 'todo-description');
    todoDescription.setAttribute('name', 'todo-description');
    todoDescription.setAttribute('rows', '10');
    todoDescription.setAttribute('maxLength', '150'); 


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
    const errorContainer = document.createElement('div'); 
    errorContainer.classList.add('error-container');
    const todoForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const todoName = document.getElementById('todo-name');
    const todoDescription = document.getElementById('todo-description'); 
    const lowPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(1)');
    const medPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(2)');
    const highPriority = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(4) > div > button:nth-child(3)'); 
    let priority = "";

    // Test if the error container is inside in the todo form. 
    if (todoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(6)'); 
        todoForm.removeChild(previousErrorContainer); 
        todoForm.classList.remove('contains-error-container');  
    }

    const todoDueDate = document.getElementById('todo-due-date');
    const dueDate = new Date(todoDueDate.value); 

    const currentDate = new Date();

    // Test if the due date is ahead of the current date. 
    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 
                   new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); 

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
        if (todoName.value === "")
        {
            const todoNameError = document.createElement('div');
            todoNameError.textContent = 'Name field is missing...';
            errorContainer.appendChild(todoNameError); 
        }
        
        if (todoDescription.value === "")
        {
            const todoDescriptionError = document.createElement('div');
            todoDescriptionError.textContent = "Description field is missing...";
            errorContainer.appendChild(todoDescriptionError);
        }

        if (todoDueDate.value === "")
        {
            const todoDueDateError = document.createElement('div');
            todoDueDateError.textContent = "Due date field is missing..."; 
            errorContainer.appendChild(todoDueDateError); 
        }

        if (priority === "")
        {
            const priorityError = document.createElement('div'); 
            priorityError.textContent = "Priority field is missing..."; 
            errorContainer.appendChild(priorityError); 
        }

        todoForm.appendChild(errorContainer);  
        todoForm.classList.add('contains-error-container'); 
        return; 
    }

    if (result === 1 || result === 0) 
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate() + 1), 'MMM-dd-yyyy');

        (0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_0__.StoreTodos)(todoName.value, todoDescription.value, reformattedDueDate, priority);

        lowPriority.classList.remove('priority-chosen');
        medPriority.classList.remove('priority-chosen');
        highPriority.classList.remove('priority-chosen');
        todoForm.reset();
    }
    else if (result === -1)
    {
        const dueDateInvalid = document.createElement('div'); 
        dueDateInvalid.textContent = 'Due date older than current date...'; 
        errorContainer.appendChild(dueDateInvalid); 
        todoForm.classList.add('contains-error-container');
        todoForm.appendChild(errorContainer); 
        return; 
    }
}

// EditTodo(): Allows the user to edit the todo.
function EditTodo(e){
    _utils_TodoMatcher__WEBPACK_IMPORTED_MODULE_3__.todoMatcher.matcher = e.target.parentNode.parentNode.children[0].textContent; 

    const content = document.getElementById('content');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
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
        if (todo.name === e.target.parentNode.parentNode.children[0].textContent)
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
            editNameInput.setAttribute('maxLength', '20'); 
            editFormSectionOne.appendChild(editNameLabel);
            editFormSectionOne.appendChild(editNameInput); 

            const editFormSectionTwo = document.createElement('div');
            const editDescriptionLabel = document.createElement('label');
            editDescriptionLabel.setAttribute('for', 'edit-description');
            editDescriptionLabel.textContent = 'Edit Description';
            const editDescriptionInput = document.createElement('textarea');
            editDescriptionInput.classList.add('disable-resize'); 
            editDescriptionInput.setAttribute('type', 'text');
            editDescriptionInput.setAttribute('id', 'edit-description');
            editDescriptionInput.setAttribute('name', 'edit-description');
            editDescriptionInput.setAttribute('rows', '10'); 
            editDescriptionInput.setAttribute('maxLength', '150'); 
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
    mainTitle.setAttribute('style', 'filter: blur(10px);'); 
    mainScreen.classList.add('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.DisableButtons)();

    editTodoWindow.appendChild(editForm); 
    content.appendChild(editTodoWindow); 

    closeButtonImage.addEventListener('click', CloseEditTodoWindow);
}

// CloseEditTodoWindow(): Will remove the edit todo window. 
function CloseEditTodoWindow(e){
    const content = document.getElementById('content');
    const editTodoWindow = document.querySelector('.edit-todo-window');
    const mainScreen = document.querySelector('.main-screen');
    const mainTitle = document.querySelector('.main-title'); 
    const closeButtonImage = document.querySelector('.edit-todo-window > div:nth-child(1) > img[src]');

    mainScreen.removeAttribute('style'); 
    mainTitle.removeAttribute('style'); 
    mainScreen.classList.remove('disable-clicker');
    (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.EnableButtons)(); 

    content.removeChild(editTodoWindow); 

    closeButtonImage.removeEventListener('click', CloseEditTodoWindow); 
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

    const content = document.getElementById('content'); 
    const mainScreen = document.querySelector('.main-screen'); 
    const mainTitle = document.querySelector('.main-title');  
    const editTodoWindow = document.querySelector('.edit-todo-window'); 
    const editTodoForm = document.querySelector('.edit-todo-window > form'); 
    const editNameInput = document.getElementById('edit-name');
    const editDescriptionInput = document.getElementById('edit-description');
    const editDueDateInput = document.getElementById('edit-due-date');
    const editPriority = document.querySelectorAll('.edit-todo-window > form > div:nth-child(4) > div > button');
    const errorContainer = document.createElement('div'); 
    errorContainer.classList.add('error-container'); 
    let currentPriority = "";
    let indexToReplace = 0;

    const todos = JSON.parse(localStorage.getItem('todos'));

    if (editTodoForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.edit-todo-window > form > div:nth-child(6)'); 
        editTodoForm.removeChild(previousErrorContainer); 
        editTodoForm.classList.remove('contains-error-container'); 
    }

    if (editNameInput.value === "" || editDescriptionInput.value === "" || editDueDateInput.value === "")
    {
        if (editNameInput.value === "")
        {
            const editNameInputError = document.createElement('div'); 
            editNameInputError.textContent = 'Name field is missing...'; 
            errorContainer.appendChild(editNameInputError); 
        }

        if (editDescriptionInput.value === "")
        {
            const editDescriptionInputError = document.createElement('div');
            editDescriptionInputError.textContent = 'Description field is missing...'; 
            errorContainer.appendChild(editDescriptionInputError); 
        }
        
        if (editDueDateInput.value === "")
        {
            const editDueDateInputError = document.createElement('div');
            editDueDateInputError.textContent = 'Due date field is missing...';
            errorContainer.appendChild(editDueDateInputError); 
        }

        editTodoForm.appendChild(errorContainer);
        editTodoForm.classList.add('contains-error-container');  
        return; 
    }

    const editedDueDate = new Date(editDueDateInput.value);

    const currentDate = new Date();

    const result = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1),
                              new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

    if (result === 1 || result === 0)
    {
        const reformattedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(editedDueDate.getFullYear(), editedDueDate.getMonth(), editedDueDate.getDate() + 1), 'MMM-dd-yyyy');

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
        mainTitle.removeAttribute('style'); 
        mainScreen.removeAttribute('style'); 
        mainScreen.classList.remove('disable-clicker'); 
        (0,_utils_ButtonActivation__WEBPACK_IMPORTED_MODULE_1__.EnableButtons)();
        (0,_DisplayTodos__WEBPACK_IMPORTED_MODULE_2__.ViewTodos)(e); 
    }
    else if (result === -1)
    {
        const invalidDueDate = document.createElement('div');
        invalidDueDate.textContent = "Due date is older than the current date..."; 
        errorContainer.appendChild(invalidDueDate); 
        editTodoForm.appendChild(errorContainer); 
        editTodoForm.classList.add('contains-error-container'); 
        return;  
    }
}

// DeleteTodo(): Will Delete the todo from the display and local storage.
function DeleteTodo(e){
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach((todo, index) => {
        if (todo.name === e.target.parentNode.parentNode.childNodes[0].innerHTML)
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
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]');
    const displayProjectsNameButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(1)');
    const displayProjectsDeleteButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButtonPrompt = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > img[src]'); 
    
    buttonSection.forEach((button) => {
        button.setAttribute('disabled', 'true');
    });

    displayTodoButtons.forEach((imgButton) => {
        imgButton.setAttribute('disabled', 'true');
    });

    displayProjectsNameButton.forEach((nameButton) => {
        nameButton.setAttribute('disabled', 'true');
    });

    displayProjectsDeleteButton.forEach((deleteButton) => {
        deleteButton.setAttribute('disabled', 'true'); 
    });

    displayProjectTodosButtonPrompt.forEach((promptButton) => {
        promptButton.setAttribute('disabled', 'true'); 
    });

    displayProjectTodosButton.forEach((projectTodoButton) => {
        projectTodoButton.setAttribute('disabled', 'true');
    });
}

// EnableButtons(): Will enable the UI buttons.
function EnableButtons(){
    const buttonSection = document.querySelectorAll('.main-screen > div:nth-child(1) > button');
    const displayTodoButtons = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]');
    const displayProjectsNameButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(1)'); 
    const displayProjectsDeleteButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButtonPrompt = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(2) > img[src]'); 
    const displayProjectTodosButton = document.querySelectorAll('.main-screen > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > img[src]'); 

    buttonSection.forEach((button) => {
        button.removeAttribute('disabled'); 
    });

    displayTodoButtons.forEach((button) => {
        button.removeAttribute('disabled');
    });

    displayProjectsNameButton.forEach((nameButton) => {
        nameButton.removeAttribute('disabled'); 
    }); 

    displayProjectsDeleteButton.forEach((deleteButton) => {
        deleteButton.removeAttribute('disabled');
    }); 

    displayProjectTodosButtonPrompt.forEach((promptButton) => {
        promptButton.removeAttribute('disabled'); 
    }); 

    displayProjectTodosButton.forEach((projectTodoButton) => {
        projectTodoButton.removeAttribute('disabled'); 
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
/* harmony export */   DeleteNoteFromLocalStorage: () => (/* binding */ DeleteNoteFromLocalStorage),
/* harmony export */   DeleteStoredProject: () => (/* binding */ DeleteStoredProject),
/* harmony export */   DeleteStoredTodoProject: () => (/* binding */ DeleteStoredTodoProject),
/* harmony export */   DeleteStoredTodos: () => (/* binding */ DeleteStoredTodos),
/* harmony export */   InitialStorage: () => (/* binding */ InitialStorage),
/* harmony export */   StoreEditedTodoProjects: () => (/* binding */ StoreEditedTodoProjects),
/* harmony export */   StoreEditedTodos: () => (/* binding */ StoreEditedTodos),
/* harmony export */   StoreProjects: () => (/* binding */ StoreProjects),
/* harmony export */   StoreTodos: () => (/* binding */ StoreTodos),
/* harmony export */   SubmitNoteToLocalStorage: () => (/* binding */ SubmitNoteToLocalStorage)
/* harmony export */ });
/* harmony import */ var _modules_DisplayProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DisplayProjects */ "./src/modules/DisplayProjects.js");
/* harmony import */ var _modules_DisplayNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/DisplayNotes */ "./src/modules/DisplayNotes.js");
/* harmony import */ var _ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMatcher */ "./src/utils/ProjectMatcher.js");
/* harmony import */ var _ButtonActivation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonActivation */ "./src/utils/ButtonActivation.js");







// InitialStorage(): The initial local storage area for the application.
function InitialStorage(){
    if (localStorage.length === 0)
    {
        localStorage.setItem('todos', JSON.stringify([]));
        localStorage.setItem('projects', JSON.stringify([])); 
        localStorage.setItem('notes', JSON.stringify([]));
    } 
}

// StoreTodos(): Will store todos into the local storage. 
function StoreTodos(todoName, todoDescription, todoDueDate, todoPriority){
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
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todoArray)); 
}

// StoreProjects(): Will store the project into the local storage as an array. 
function StoreProjects(project){
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    
    const projectObj = {
        projectName: project,
        todos: [], 
    };

    projectArray.push(projectObj);

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray)); 
}

// StoreTodoProjects(): Will store the edited todo 
function StoreEditedTodoProjects(todoName, todoDescription, todoDueDate, todoPriority){
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
        {
            const todoArray = project.todos;

            todoArray[_ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.editedTodoIndex] = {name: todoName, description: todoDescription, dueDate: todoDueDate, priority: todoPriority};

            project.todos = todoArray;
            
            localStorage.removeItem('projects');
        }
    });

    localStorage.setItem('projects', JSON.stringify(projectArray));
}

// DeleteStoredTodoProject(): Will delete the stored todo in the proeject section. 
function DeleteStoredTodoProject(e){
    const deleteName = e.target.parentNode.parentNode.childNodes[0].textContent;

    const projectArray = JSON.parse(localStorage.getItem('projects'));
    projectArray.forEach((project) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
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
    
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)');
    displayScreen.replaceChildren(); 

    (0,_modules_DisplayProjects__WEBPACK_IMPORTED_MODULE_0__.ProjectPrompt)(); 
}

// DeleteStoredProject(): Delete the current stored project that the user clicked on. 
function DeleteStoredProject(){
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    const content = document.getElementById('content'); 
    const deleteProjectWindow = document.querySelector('.delete-project-window');
    const mainTitle = document.querySelector('.main-title'); 
    const mainScreen = document.querySelector('.main-screen');
    const projectArray = JSON.parse(localStorage.getItem('projects'));

    projectArray.forEach((project, index) => {
        if (project.projectName === _ProjectMatcher__WEBPACK_IMPORTED_MODULE_2__.projectMatcher.matcher)
        {
            projectArray.splice(index, 1);
        }
    });

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(projectArray));

    content.removeChild(deleteProjectWindow); 

    displayScreen.replaceChildren(); 

    mainTitle.removeAttribute('style'); 
    mainScreen.removeAttribute('style');
    mainScreen.classList.remove('disable-clicker');
    (0,_ButtonActivation__WEBPACK_IMPORTED_MODULE_3__.EnableButtons)();

    (0,_modules_DisplayProjects__WEBPACK_IMPORTED_MODULE_0__.ProjectsBeingDisplayed)(); 
}

// SubmitNote(): Will submit the note to the local storage. 
function SubmitNoteToLocalStorage(e){
    e.preventDefault(); 
    const noteInput = document.getElementById('note-input');
    const noteForm = document.querySelector('.main-screen > div:nth-child(2) > form'); 
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container'); 

    if (noteForm.classList.contains('contains-error-container'))
    {
        const previousErrorContainer = document.querySelector('.main-screen > div:nth-child(2) > form > div:nth-child(3)');
        noteForm.removeChild(previousErrorContainer); 
        noteForm.classList.remove('contains-error-container'); 
    }

    if (noteInput.value === "")
    {
        const noteInputError = document.createElement('div'); 
        noteInputError.textContent = 'Note field is missing....';
        errorContainer.appendChild(noteInputError);
        noteForm.appendChild(errorContainer); 
        noteForm.classList.add('contains-error-container'); 
        return; 
    }

    const noteObj = {
        note: noteInput.value,
    }


    const noteArray = JSON.parse(localStorage.getItem('notes'));
    noteArray.push(noteObj);

    localStorage.removeItem('notes');
    localStorage.setItem('notes', JSON.stringify(noteArray));

    noteForm.reset(); 
}

// DeleteNoteFromLocalStorage(): Will delete the note from the local storage. 
function DeleteNoteFromLocalStorage(e){
    const currentNote = e.target.parentNode.nextSibling.textContent; 
    const displayScreen = document.querySelector('.main-screen > div:nth-child(2)'); 
    const noteArray = JSON.parse(localStorage.getItem('notes'));
    
    noteArray.forEach((note, index) => {
        if (note.note === currentNote)
        {
            noteArray.splice(index, 1); 
        }
    });

    localStorage.removeItem('notes');
    localStorage.setItem('notes', JSON.stringify(noteArray));

    displayScreen.replaceChildren(); 
    (0,_modules_DisplayNotes__WEBPACK_IMPORTED_MODULE_1__.NotesBeingDisplayed)(); 
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

/***/ "./src/fonts/comfortaa/Comfortaa-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/comfortaa/Comfortaa-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "886fcced57daea5944e7.ttf";

/***/ }),

/***/ "./src/fonts/springtown-market/SpringtownMarket_PERSONAL_USE_ONLY.otf":
/*!****************************************************************************!*\
  !*** ./src/fonts/springtown-market/SpringtownMarket_PERSONAL_USE_ONLY.otf ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c3282dc7c0571bb3176.otf";

/***/ }),

/***/ "./src/images/arrow-left.svg":
/*!***********************************!*\
  !*** ./src/images/arrow-left.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "405d29aab76b790ff691.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Dom-Content */ "./src/modules/Dom-Content.js");
/* harmony import */ var _utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/InitialStorage */ "./src/utils/InitialStorage.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");




(0,_utils_InitialStorage__WEBPACK_IMPORTED_MODULE_1__.InitialStorage)();
(0,_modules_Dom_Content__WEBPACK_IMPORTED_MODULE_0__.InitializeDomContent)(); 
})();

/******/ })()
;