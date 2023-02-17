/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOM-Contnet.js":
/*!************************************!*\
  !*** ./src/modules/DOM-Contnet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayAddWindow": () => (/* binding */ DisplayAddWindow),
/* harmony export */   "LoadDomContent": () => (/* binding */ LoadDomContent),
/* harmony export */   "MainHomeDisplayScreen": () => (/* binding */ MainHomeDisplayScreen),
/* harmony export */   "MainProjectDisplayScreen": () => (/* binding */ MainProjectDisplayScreen)
/* harmony export */ });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: DOM-Content.js
// Description: Handles all Dom manipulation for the application.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LoadDomContent() {
    // Home button will be the default button selected when the application opens.
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    homeButton.classList.add('current-module-tab');

    // Display screen will be the default screen selected when the application opens.
    const mainWindowDisplay = document.querySelector('.main-window-display');
    const homeDisplay = document.createElement('div');
    homeDisplay.classList.add('home-display');
    homeDisplay.textContent = 'You are viewing the main home display screen.';
    mainWindowDisplay.appendChild(homeDisplay);

    // Hide any UI for adding new todos and projects.
    HideAddWindow();
}

// MainHomeDisplayScreen(): The main display screen for home todo's.
function MainHomeDisplayScreen() {

    if (document.querySelector('.main-window-nav > div:nth-child(2) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(2) button').classList.remove('current-module-tab');

        const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
        homeButton.classList.add('current-module-tab');

        const mainWindowDisplay = document.querySelector('.main-window-display');
        mainWindowDisplay.replaceChildren();

        const homeDisplay = document.createElement('div');
        homeDisplay.classList.add('home-display');
        homeDisplay.textContent = 'You are viewing the main home display screen';

        mainWindowDisplay.appendChild(homeDisplay);
    }
}

// MainProjectDisplayScreen(): The main display screen for projects.
function MainProjectDisplayScreen(){

    if (document.querySelector('.main-window-nav > div:nth-child(1) button').classList.contains('current-module-tab'))
    {
        document.querySelector('.main-window-nav > div:nth-child(1) button').classList.remove('current-module-tab');

        const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
        projectButton.classList.add('current-module-tab');

        const mainWindowDisplay = document.querySelector('.main-window-display');
        mainWindowDisplay.replaceChildren();

        const projectDisplay = document.createElement('div');
        projectDisplay.classList.add('project-display');
        projectDisplay.textContent = 'You are viewing the main project display screen';

        mainWindowDisplay.appendChild(projectDisplay); 

    }
}

// DisplayAddWindow(): Displays the add window when the user clicks on the add button.
function DisplayAddWindow(){
    console.log("You are now viewing the add window..."); // Testing
    RevealAddWindow();
}

// HideAddWindow(): Hides the add todo or porject window until the user clicks the add button. 
function HideAddWindow(){
    const addWindow = document.querySelector('.add-window');
    addWindow.classList.add('hide-window');
}

// RevealAddWindow(): Reveals the add todo or project window when the user clicks the add button.
function RevealAddWindow(){
    const addWindow = document.querySelector('.add-window');
    addWindow.classList.remove('hide-window');
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM_Contnet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM-Contnet */ "./src/modules/DOM-Contnet.js");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: The main index javascript file for the application.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Center


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Testing Center

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainNavSelection = (()=>{
    const homeButton = document.querySelector('.main-window-nav > div:nth-child(1) button');
    const projectButton = document.querySelector('.main-window-nav > div:nth-child(2) button');
    const addButton = document.querySelector('.main-window-nav > div:nth-child(3) button');

    homeButton.addEventListener('click', _modules_DOM_Contnet__WEBPACK_IMPORTED_MODULE_0__.MainHomeDisplayScreen);
    projectButton.addEventListener('click', _modules_DOM_Contnet__WEBPACK_IMPORTED_MODULE_0__.MainProjectDisplayScreen);
    addButton.addEventListener('click', _modules_DOM_Contnet__WEBPACK_IMPORTED_MODULE_0__.DisplayAddWindow);
})();


(0,_modules_DOM_Contnet__WEBPACK_IMPORTED_MODULE_0__.LoadDomContent)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lIOztBQUV6SDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qyx1RUFBcUI7QUFDOUQsNENBQTRDLDBFQUF3QjtBQUNwRSx3Q0FBd0Msa0VBQWdCO0FBQ3hELENBQUM7OztBQUdELG9FQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ET00tQ29udG5ldC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUHJvZ3JhbTogRE9NLUNvbnRlbnQuanNcbi8vIERlc2NyaXB0aW9uOiBIYW5kbGVzIGFsbCBEb20gbWFuaXB1bGF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4vLyBOb3RlczogTi9BXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZERvbUNvbnRlbnQoKSB7XG4gICAgLy8gSG9tZSBidXR0b24gd2lsbCBiZSB0aGUgZGVmYXVsdCBidXR0b24gc2VsZWN0ZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gb3BlbnMuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdy1uYXYgPiBkaXY6bnRoLWNoaWxkKDEpIGJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1tb2R1bGUtdGFiJyk7XG5cbiAgICAvLyBEaXNwbGF5IHNjcmVlbiB3aWxsIGJlIHRoZSBkZWZhdWx0IHNjcmVlbiBzZWxlY3RlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBvcGVucy5cbiAgICBjb25zdCBtYWluV2luZG93RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdy1kaXNwbGF5Jyk7XG4gICAgY29uc3QgaG9tZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdob21lLWRpc3BsYXknKTtcbiAgICBob21lRGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3UgYXJlIHZpZXdpbmcgdGhlIG1haW4gaG9tZSBkaXNwbGF5IHNjcmVlbi4nO1xuICAgIG1haW5XaW5kb3dEaXNwbGF5LmFwcGVuZENoaWxkKGhvbWVEaXNwbGF5KTtcblxuICAgIC8vIEhpZGUgYW55IFVJIGZvciBhZGRpbmcgbmV3IHRvZG9zIGFuZCBwcm9qZWN0cy5cbiAgICBIaWRlQWRkV2luZG93KCk7XG59XG5cbi8vIE1haW5Ib21lRGlzcGxheVNjcmVlbigpOiBUaGUgbWFpbiBkaXNwbGF5IHNjcmVlbiBmb3IgaG9tZSB0b2RvJ3MuXG5leHBvcnQgZnVuY3Rpb24gTWFpbkhvbWVEaXNwbGF5U2NyZWVuKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdy1uYXYgPiBkaXY6bnRoLWNoaWxkKDIpIGJ1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1tb2R1bGUtdGFiJykpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3ctbmF2ID4gZGl2Om50aC1jaGlsZCgyKSBidXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1vZHVsZS10YWInKTtcblxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td2luZG93LW5hdiA+IGRpdjpudGgtY2hpbGQoMSkgYnV0dG9uJyk7XG4gICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1tb2R1bGUtdGFiJyk7XG5cbiAgICAgICAgY29uc3QgbWFpbldpbmRvd0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3ctZGlzcGxheScpO1xuICAgICAgICBtYWluV2luZG93RGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgICAgICBjb25zdCBob21lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdob21lLWRpc3BsYXknKTtcbiAgICAgICAgaG9tZURpc3BsYXkudGV4dENvbnRlbnQgPSAnWW91IGFyZSB2aWV3aW5nIHRoZSBtYWluIGhvbWUgZGlzcGxheSBzY3JlZW4nO1xuXG4gICAgICAgIG1haW5XaW5kb3dEaXNwbGF5LmFwcGVuZENoaWxkKGhvbWVEaXNwbGF5KTtcbiAgICB9XG59XG5cbi8vIE1haW5Qcm9qZWN0RGlzcGxheVNjcmVlbigpOiBUaGUgbWFpbiBkaXNwbGF5IHNjcmVlbiBmb3IgcHJvamVjdHMuXG5leHBvcnQgZnVuY3Rpb24gTWFpblByb2plY3REaXNwbGF5U2NyZWVuKCl7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td2luZG93LW5hdiA+IGRpdjpudGgtY2hpbGQoMSkgYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LW1vZHVsZS10YWInKSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdy1uYXYgPiBkaXY6bnRoLWNoaWxkKDEpIGJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbW9kdWxlLXRhYicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3ctbmF2ID4gZGl2Om50aC1jaGlsZCgyKSBidXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1vZHVsZS10YWInKTtcblxuICAgICAgICBjb25zdCBtYWluV2luZG93RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdy1kaXNwbGF5Jyk7XG4gICAgICAgIG1haW5XaW5kb3dEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlzcGxheScpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9ICdZb3UgYXJlIHZpZXdpbmcgdGhlIG1haW4gcHJvamVjdCBkaXNwbGF5IHNjcmVlbic7XG5cbiAgICAgICAgbWFpbldpbmRvd0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpOyBcblxuICAgIH1cbn1cblxuLy8gRGlzcGxheUFkZFdpbmRvdygpOiBEaXNwbGF5cyB0aGUgYWRkIHdpbmRvdyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYWRkIGJ1dHRvbi5cbmV4cG9ydCBmdW5jdGlvbiBEaXNwbGF5QWRkV2luZG93KCl7XG4gICAgY29uc29sZS5sb2coXCJZb3UgYXJlIG5vdyB2aWV3aW5nIHRoZSBhZGQgd2luZG93Li4uXCIpOyAvLyBUZXN0aW5nXG4gICAgUmV2ZWFsQWRkV2luZG93KCk7XG59XG5cbi8vIEhpZGVBZGRXaW5kb3coKTogSGlkZXMgdGhlIGFkZCB0b2RvIG9yIHBvcmplY3Qgd2luZG93IHVudGlsIHRoZSB1c2VyIGNsaWNrcyB0aGUgYWRkIGJ1dHRvbi4gXG5mdW5jdGlvbiBIaWRlQWRkV2luZG93KCl7XG4gICAgY29uc3QgYWRkV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKTtcbiAgICBhZGRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZS13aW5kb3cnKTtcbn1cblxuLy8gUmV2ZWFsQWRkV2luZG93KCk6IFJldmVhbHMgdGhlIGFkZCB0b2RvIG9yIHByb2plY3Qgd2luZG93IHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSBhZGQgYnV0dG9uLlxuZnVuY3Rpb24gUmV2ZWFsQWRkV2luZG93KCl7XG4gICAgY29uc3QgYWRkV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC13aW5kb3cnKTtcbiAgICBhZGRXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS13aW5kb3cnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQcm9ncmFtOiBpbmRleC5qc1xuLy8gRGVzY3JpcHRpb246IFRoZSBtYWluIGluZGV4IGphdmFzY3JpcHQgZmlsZSBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuLy8gTm90ZXM6IE4vQVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEltcG9ydCBDZW50ZXJcbmltcG9ydCB7TG9hZERvbUNvbnRlbnQsIE1haW5Ib21lRGlzcGxheVNjcmVlbiwgTWFpblByb2plY3REaXNwbGF5U2NyZWVuLCBEaXNwbGF5QWRkV2luZG93fSAgZnJvbSBcIi4vbW9kdWxlcy9ET00tQ29udG5ldFwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGVzdGluZyBDZW50ZXJcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgbWFpbk5hdlNlbGVjdGlvbiA9ICgoKT0+e1xuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3ctbmF2ID4gZGl2Om50aC1jaGlsZCgxKSBidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td2luZG93LW5hdiA+IGRpdjpudGgtY2hpbGQoMikgYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td2luZG93LW5hdiA+IGRpdjpudGgtY2hpbGQoMykgYnV0dG9uJyk7XG5cbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTWFpbkhvbWVEaXNwbGF5U2NyZWVuKTtcbiAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTWFpblByb2plY3REaXNwbGF5U2NyZWVuKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5QWRkV2luZG93KTtcbn0pKCk7XG5cblxuTG9hZERvbUNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==