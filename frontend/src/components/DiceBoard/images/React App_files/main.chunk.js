(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/Dice.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Dice/Dice.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dice_group1{\n    display:inline-block;\n    text-align: center;\n    padding: 5px 5px 5px 5px;\n    border-radius: 2px;\n    border: 2px solid #228B22;\n}\n.dice_group1:hover{\n    background-color: #ADFF2F;\n}\n\n.dice_group3{\n    display:inline-block;\n    width: 64px;\n    text-align: center;\n\n}\n.dice_group3_border{\n    width: 64px;\n    height:64px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n.dice_group3_border:hover{\n    background-color: #ADFF2F;\n}\n.center{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\n.dice_group2{\n    display:inline-block;\n    width: 50px;\n    text-align: center;\n}\n\n.dice_group2:hover{\n    background-color: #ADFF2F;\n}\n.dice_group4{\n    width: 120px;\n    text-align: center;\n}\n\n.dice_rate{\n    color:white;\n    font-weight: bold;\n}\n.dice_num_top{\n    font-size: 30px;\n    font-family: arial;\n    font-weight: bold;\n    color: #0000;\n    text-align: center;\n    text-shadow: 0px 1px 1px rgba(0,0,0,0.75);\n    /* margin-top: 10px; */\n}\n\n.dice_num_bottom{\n    font-size: 30px;\n    font-family: arial;\n    font-weight: bold;\n    color: #DC143C;\n    text-align: center;\n    text-shadow: 0px 1px 1px rgba(0,0,0,0.75);\n    /* margin-top: 10px; */\n}\n.dice_num_2{\n    font-size: 20px;\n    font-family: arial;\n    font-weight: bold;\n    color: gray;\n    text-align: center;\n    text-shadow: 0px 1px 1px rgba(0,0,0,0.75);\n    /* margin-top: 10px; */\n}\n\n.dice_name_small{\n    font-family: arial;\n    font-weight: bold;\n    font-size: 30px;\n    text-transform: uppercase;\n    color: #0000;\n    text-align: center;\n    text-shadow: 0px 1px 1px rgba(0,0,0,0.75);\n    margin-bottom: 10px;\n}\n\n.dice_name_big{\n    font-family: arial;\n    font-weight: bold;\n    font-size: 30px;\n    text-transform: uppercase;\n    color: #DC143C;\n    text-align: center;\n    text-shadow: 0px 2px 2px rgba(0,0,0,0.75);\n    margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/DiceNo.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Dice/DiceNo.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dice_x_item{\n    background: url(" + escape(__webpack_require__(/*! ./images/dice_w.png */ "./src/components/Dice/images/dice_w.png")) + ") no-repeat;\n    width: 56px;\n    height: 57px;\n    float: left;\n}\n\n.dice_x_num1{\n    background-position:-1px 0px;\n}\n\n.dice_x_num2{\n    background-position:-57px 0px;\n}\n\n.dice_x_num3{\n    background-position:-112px 0px;\n}\n.dice_x_num4{\n    background-position:-168px 0px;\n}\n\n.dice_x_num5{\n    background-position:-224px 0px;\n}\n\n.dice_x_num6{\n    background-position:-281px 0px;\n}\n\n\n.dice_md_item{\n    background: url(" + escape(__webpack_require__(/*! ./images/dice_md.png */ "./src/components/Dice/images/dice_md.png")) + ") no-repeat;\n    width: 41px;\n    height: 41px;\n    float: left;\n}\n\n.dice_md_num1{\n    background-position:0px -1px;\n}\n\n.dice_md_num2{\n    background-position:-41px -1px;\n}\n\n.dice_md_num3{\n    background-position:-82px -1px;\n}\n.dice_md_num4{\n    background-position:-122px -2px;\n}\n\n.dice_md_num5{\n    background-position:-162px -2px;\n}\n\n.dice_md_num6{\n    background-position:-202px -2px;\n}\n\n.dice_sm_item{\n    background: url(" + escape(__webpack_require__(/*! ./images/dice_sm.png */ "./src/components/Dice/images/dice_sm.png")) + ") no-repeat;\n    width: 32px;\n    height: 33px;\n    float: left;\n}\n\n.dice_sm_num1{\n    background-position:-2px -2px;\n}\n\n.dice_sm_num2{\n    background-position:-34px -2px;\n}\n\n.dice_sm_num3{\n    background-position:-66px -2px;\n}\n.dice_sm_num4{\n    background-position:-97px -2px;\n}\n\n.dice_sm_num5{\n    background-position:-129px -2px;\n}\n\n.dice_sm_num6{\n    background-position:-162px -2px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DiceBoard/DiceBoard.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/DiceBoard/DiceBoard.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".DiceBoard {\n    height: 400px;\n    background: url(" + escape(__webpack_require__(/*! ./images/dice3.png */ "./src/components/DiceBoard/images/dice3.png")) + ") no-repeat; \n    position: relative;\n}\n\n.DiceBoardRow1 {\n    width:700px;\n    top:0px;\n    padding:26px 120px 0px 76px;\n    position: relative;\n    display:inline-block;\n}\n\n.board-row{\n    justify-content: center;\n    align-items: center;\n}\n.group1{\n    width:10%;\n    display:inline-block;\n    text-align: center;\n    margin:3px;\n    /* background-color:#FF0000; */\n}\n\n\n .ThreeDice{\n    width:20%;\n    height:86px;\n    display:inline-block;\n    text-align: center;\n    margin:3px;\n    /* background-color:#FF0000; */\n }\n .ThreeDice:hover{\n    /* background-color:#FF0000; */\n }\n\n .DiceBoardRow2 {\n    width:665px;\n    height:80px;\n    display: table;\n    position: relative;\n    left:40px;\n    margin:3px;\n}\n.DiceBoardRow2Col{\n    display: table-cell;\n    width: 116px;\n    /* background-color:#FF0000; */\n}\n.DiceBoardRow2ColMid{\n    display: table-cell;\n    padding-left:3px;\n    padding-right:3px;\n    /* width: 421px; */\n    \n}\n .group2{\n    width:55px;\n    display:inline-block;\n    text-align: center;\n    margin-bottom:5px;\n    margin-bottom:10px;\n    margin:3px;\n    /* background-color:#FF0000; */\n}\n\n .group3{\n    display:inline-block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    width:15%;\n    margin: 2px 2px;\n}\n.DiceBoardRow2Col:hover{\n    background-color:#ADFF2F;\n }\n\n .group4{\n    width:16.66%;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    display:inline-block;\n}\n\n\n .DiceBoardRow3 {\n    display:table;\n    width:420px;\n    top:17px;\n    left:165px;\n    position: relative;\n\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/quocle/dice/src/App.js";




var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "App-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Edit ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "src/App.js"), " and save to reload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Learn React")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Dice/Dice.css":
/*!**************************************!*\
  !*** ./src/components/Dice/Dice.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Dice.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/Dice.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Dice.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/Dice.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Dice.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/Dice.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Dice/Dice.jsx":
/*!**************************************!*\
  !*** ./src/components/Dice/Dice.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dice.css */ "./src/components/Dice/Dice.css");
/* harmony import */ var _Dice_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Dice_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DiceNo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DiceNo.css */ "./src/components/Dice/DiceNo.css");
/* harmony import */ var _DiceNo_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DiceNo_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/quocle/dice/src/components/Dice/Dice.jsx";




var Dice =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dice, _React$Component);

  function Dice(props) {
    Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dice);

    return Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dice).call(this, props)); // this.state = {
    //   value: null,
    // };
  }

  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dice, [{
    key: "render",
    value: function render() {
      if (this.props.type === 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_group1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_md_item ".concat("dice_md_num" + this.props.value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }));
      } else if (this.props.type === 2) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_group2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, this.props.value <= 10 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_num_top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.value) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_num_bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.value), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_rate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "1:", this.props.rate));
      } else if (this.props.type === 3) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_group3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_group3_border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_sm_item ".concat("dice_sm_num" + this.props.value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_sm_item ".concat("dice_sm_num" + this.props.value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_sm_item ".concat("dice_sm_num" + this.props.value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_rate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "1:", this.props.rate));
      } else if (this.props.type === 4) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_group4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, this.props.value ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_name_small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "SMALL") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_name_big",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "BIG"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_rate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "1:", this.props.rate), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "dice_num_2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, this.props.value ? "4-10" : "11-17"));
      }
    }
  }]);

  return Dice;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dice);

/***/ }),

/***/ "./src/components/Dice/DiceNo.css":
/*!****************************************!*\
  !*** ./src/components/Dice/DiceNo.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceNo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/DiceNo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceNo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/DiceNo.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceNo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dice/DiceNo.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Dice/images/dice_md.png":
/*!************************************************!*\
  !*** ./src/components/Dice/images/dice_md.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dice_md.bd8cc1ff.png";

/***/ }),

/***/ "./src/components/Dice/images/dice_sm.png":
/*!************************************************!*\
  !*** ./src/components/Dice/images/dice_sm.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Dice/images/dice_w.png":
/*!***********************************************!*\
  !*** ./src/components/Dice/images/dice_w.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dice_w.6563ec27.png";

/***/ }),

/***/ "./src/components/DiceBoard/DiceBoard.css":
/*!************************************************!*\
  !*** ./src/components/DiceBoard/DiceBoard.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceBoard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DiceBoard/DiceBoard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceBoard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DiceBoard/DiceBoard.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DiceBoard.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/DiceBoard/DiceBoard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/DiceBoard/DiceBoard.jsx":
/*!************************************************!*\
  !*** ./src/components/DiceBoard/DiceBoard.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Dice_Dice_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Dice/Dice.jsx */ "./src/components/Dice/Dice.jsx");
/* harmony import */ var _DiceBoard_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DiceBoard.css */ "./src/components/DiceBoard/DiceBoard.css");
/* harmony import */ var _DiceBoard_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DiceBoard_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/quocle/dice/src/components/DiceBoard/DiceBoard.jsx";




var DiceBoard =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DiceBoard, _React$Component);

  function DiceBoard(props) {
    var _this;

    Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DiceBoard);

    _this = Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DiceBoard).call(this, props));
    _this.state = {
      squares: Array(30).fill(null)
    };
    return _this;
  }

  Object(_Users_quocle_dice_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DiceBoard, [{
    key: "handleClick",
    value: function handleClick(i) {
      var squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({
        squares: squares
      });
    }
  }, {
    key: "renderSquare",
    value: function renderSquare(i, type, value, rate) {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Dice_Dice_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: type,
        value: value,
        rate: rate,
        onClick: function onClick() {
          return _this2.handleClick(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.renderSquare(0, 3, 1, 150)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.renderSquare(1, 3, 2, 150)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.renderSquare(2, 3, 3, 150)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ThreeDice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.renderSquare(3, 3, 4, 150)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.renderSquare(4, 3, 5, 150)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.renderSquare(5, 3, 6, 150)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow2Col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.renderSquare(26, 4, 0, 1)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow2ColMid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "board-row2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.renderSquare(6, 2, 4, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.renderSquare(7, 2, 5, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.renderSquare(8, 2, 6, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.renderSquare(9, 2, 7, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.renderSquare(10, 2, 8, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.renderSquare(11, 2, 9, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.renderSquare(12, 2, 10, 6))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "board-row2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.renderSquare(13, 2, 11, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.renderSquare(14, 2, 12, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, this.renderSquare(15, 2, 13, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.renderSquare(16, 2, 14, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.renderSquare(17, 2, 15, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.renderSquare(18, 2, 16, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.renderSquare(19, 2, 17, 6)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow2Col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, this.renderSquare(27, 4, 1, 1))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DiceBoardRow3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, this.renderSquare(20, 1, 1, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.renderSquare(21, 1, 2, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, this.renderSquare(22, 1, 3, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.renderSquare(23, 1, 4, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, this.renderSquare(24, 1, 5, 6)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "group4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.renderSquare(25, 1, 6, 6))));
    }
  }]);

  return DiceBoard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DiceBoard);

/***/ }),

/***/ "./src/components/DiceBoard/images/dice3.png":
/*!***************************************************!*\
  !*** ./src/components/DiceBoard/images/dice3.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dice3.0a6d2787.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var components_DiceBoard_DiceBoard_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/DiceBoard/DiceBoard.jsx */ "./src/components/DiceBoard/DiceBoard.jsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/quocle/dice/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DiceBoard_DiceBoard_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/quocle/dice/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/quocle/dice/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map