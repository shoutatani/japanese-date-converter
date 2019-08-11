/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/japanese-date-converter.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/japanese-date-converter.ts":
/*!****************************************!*\
  !*** ./src/japanese-date-converter.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JapaneseDateConverter; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar JapaneseDateConverter =\n/*#__PURE__*/\nfunction () {\n  function JapaneseDateConverter(_ref) {\n    var inputValue = _ref.inputValue,\n        settings = _ref.settings;\n\n    _classCallCheck(this, JapaneseDateConverter);\n\n    _defineProperty(this, \"inputValue\", void 0);\n\n    _defineProperty(this, \"settings\", void 0);\n\n    _defineProperty(this, \"gengo\", void 0);\n\n    _defineProperty(this, \"gengoList\", void 0);\n\n    _defineProperty(this, \"formatOptions\", void 0);\n\n    this.inputValue = inputValue;\n    this.settings = settings;\n    this.gengoList = [{\n      name: \"M\",\n      ligature: \"㍾\",\n      from: new Date(\"1868-01-25\"),\n      to: new Date(\"1912-07-29\"),\n      ggg: \"明治\",\n      gg: \"明\"\n    }, {\n      name: \"T\",\n      ligature: \"㍽\",\n      from: new Date(\"1912-07-30\"),\n      to: new Date(\"1926-12-24\"),\n      ggg: \"大正\",\n      gg: \"大\"\n    }, {\n      name: \"S\",\n      ligature: \"㍼\",\n      from: new Date(\"1926-12-25\"),\n      to: new Date(\"1989-01-07\"),\n      ggg: \"昭和\",\n      gg: \"昭\"\n    }, {\n      name: \"H\",\n      ligature: \"㍻\",\n      from: new Date(\"1989-01-08\"),\n      to: new Date(\"2019-04-30\"),\n      ggg: \"平成\",\n      gg: \"平\"\n    }, {\n      name: \"R\",\n      ligature: \"\\u32FF\",\n      from: new Date(\"2019-05-01\"),\n      to: new Date(),\n      ggg: \"令和\",\n      gg: \"令\"\n    }];\n    this.formatOptions = {\n      years: [\"ggg\", \"gg\", \"g\", \"ee\", \"e\", \"yyyy\", \"yy\"],\n      months: [\"mmmmm\", \"mmmm\", \"mmm\", \"mm\", \"m\"],\n      days: [\"dd\", \"d\"]\n    };\n  }\n\n  _createClass(JapaneseDateConverter, [{\n    key: \"execute\",\n    value: function execute() {\n      if (!this.checkValue()) {\n        return this.inputValue;\n      }\n\n      return this.convert();\n    }\n  }, {\n    key: \"checkValue\",\n    value: function checkValue() {\n      var MINIMUM_LENGTH = 7;\n\n      if (this.inputValue.length < MINIMUM_LENGTH) {\n        return false;\n      }\n\n      return true;\n    }\n  }, {\n    key: \"getGengoFromWarekiLetter\",\n    value: function getGengoFromWarekiLetter(firstLetter) {\n      var result = null;\n      this.gengoList.forEach(function (gengo, index) {\n        if (gengo.name === firstLetter || index + 1 === Number.parseInt(firstLetter)) {\n          result = gengo;\n        }\n      }, this.gengoList);\n      return result;\n    }\n  }, {\n    key: \"hasWarekiLetter\",\n    value: function hasWarekiLetter() {\n      return this.inputValue.match(/^\\d{7}$/) || this.inputValue.match(/^[A-Z1-9]{1}\\d{6}$/) || this.inputValue.match(/^[A-Z1-9]{1}\\d{2}.+\\d{2}.+\\d{2}/);\n    }\n  }, {\n    key: \"getGengoFromDate\",\n    value: function getGengoFromDate(date) {\n      var gengo = this.gengoList.find(function (gengo) {\n        return date >= gengo.from && date <= gengo.to;\n      });\n\n      if (date < this.gengoList[0].from) {\n        gengo = this.gengoList[0];\n      }\n\n      if (date > this.gengoList[this.gengoList.length - 1].from) {\n        gengo = this.gengoList[this.gengoList.length - 1];\n      }\n\n      return gengo;\n    }\n  }, {\n    key: \"getSeirekiYear\",\n    value: function getSeirekiYear(gengo, warekiYear) {\n      if (!gengo) {\n        return null;\n      }\n\n      return gengo.from.getFullYear() + warekiYear - 1;\n    }\n  }, {\n    key: \"getWarekiYear\",\n    value: function getWarekiYear(date) {\n      var gengo = this.getGengoFromDate(date);\n      return date.getFullYear() - (gengo.from.getFullYear() - 1);\n    }\n  }, {\n    key: \"getDate\",\n    value: function getDate(gengo) {\n      var result = null;\n\n      switch (this.inputValue.length) {\n        case 7:\n          {\n            // 4300121\n            // H300121\n            var warekiYear = Number.parseInt(this.inputValue.substr(1, 2));\n            var month = Number.parseInt(this.inputValue.substr(3, 2));\n            var day = Number.parseInt(this.inputValue.substr(5, 2));\n            var seirekiYear = this.getSeirekiYear(gengo, warekiYear);\n            return new Date(seirekiYear, month - 1, day);\n          }\n\n        case 8:\n          {\n            // 20180121\n            var _seirekiYear = Number.parseInt(this.inputValue.substr(0, 4));\n\n            var _month = Number.parseInt(this.inputValue.substr(4, 2));\n\n            var _day = Number.parseInt(this.inputValue.substr(6, 4));\n\n            return new Date(_seirekiYear, _month - 1, _day);\n          }\n\n        case 9:\n          {\n            // H30/01/01\n            // H30.01.21\n            // 430/01/01\n            // 430.01.01\n            var _warekiYear = Number.parseInt(this.inputValue.substr(1, 2));\n\n            var _month2 = Number.parseInt(this.inputValue.match(/\\d{2}.+(\\d{2}).+\\d{2}/) ? this.inputValue.match(/\\d{2}.+(\\d{2}).+\\d{2}/)[1] : null);\n\n            var _day2 = Number.parseInt(this.inputValue.match(/\\d{2}.+\\d{2}.+(\\d{2})/) ? this.inputValue.match(/\\d{2}.+\\d{2}.+(\\d{2})/)[1] : null);\n\n            var _seirekiYear2 = this.getSeirekiYear(gengo, _warekiYear);\n\n            return new Date(_seirekiYear2, _month2 - 1, _day2);\n          }\n\n        case 10:\n          {\n            // 2018/01/01\n            // 2018.01.01\n            var _seirekiYear3 = Number.parseInt(this.inputValue.substr(0, 4));\n\n            var _month3 = Number.parseInt(this.inputValue.match(/\\d{4}.+(\\d{2}).+\\d{2}/) ? this.inputValue.match(/\\d{4}.+(\\d{2}).+\\d{2}/)[1] : null);\n\n            var _day3 = Number.parseInt(this.inputValue.match(/\\d{4}.+\\d{2}.+(\\d{2})/) ? this.inputValue.match(/\\d{4}.+\\d{2}.+(\\d{2})/)[1] : null);\n\n            return new Date(_seirekiYear3, _month3 - 1, _day3);\n          }\n\n        default:\n          break;\n      }\n\n      return result;\n    }\n  }, {\n    key: \"searchFormatTarget\",\n    value: function searchFormatTarget(format) {\n      var formatOptions = this.formatOptions;\n      var formatTarget = null;\n      formatTarget = formatOptions.years.find(function (yearFormat) {\n        return format.includes(yearFormat);\n      });\n\n      if (formatTarget) {\n        return formatTarget;\n      }\n\n      formatTarget = formatOptions.months.find(function (monthFormat) {\n        return format.includes(monthFormat);\n      });\n\n      if (formatTarget) {\n        return formatTarget;\n      }\n\n      formatTarget = formatOptions.days.find(function (dayFormat) {\n        return format.includes(dayFormat);\n      });\n      return formatTarget;\n    }\n  }, {\n    key: \"convertFormatTargetToValue\",\n    value: function convertFormatTargetToValue(date, gengo, formatTarget) {\n      var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\n      switch (formatTarget) {\n        case \"ggg\":\n          return gengo.ggg;\n\n        case \"gg\":\n          return gengo.gg;\n\n        case \"g\":\n          return gengo.name;\n\n        case \"ee\":\n          return this.getWarekiYear(date).toString().padStart(2, \"0\");\n\n        case \"e\":\n          return this.getWarekiYear(date).toString();\n\n        case \"yyyy\":\n          return date.getFullYear().toString();\n\n        case \"yy\":\n          return date.getFullYear().toString().substr(2, 2);\n\n        case \"mmmmm\":\n          return monthNames[date.getMonth()].substr(0, 1);\n\n        case \"mmmm\":\n          return monthNames[date.getMonth()];\n\n        case \"mmm\":\n          return monthNames[date.getMonth()].substr(0, 3);\n\n        case \"mm\":\n          return (date.getMonth() + 1).toString().padStart(2, \"0\");\n\n        case \"m\":\n          return (date.getMonth() + 1).toString();\n\n        case \"dd\":\n          return date.getDate().toString().padStart(2, \"0\");\n\n        case \"d\":\n          return date.getDate().toString();\n\n        default:\n          return null;\n      }\n    }\n  }, {\n    key: \"convertDateByFormat\",\n    value: function convertDateByFormat(date, gengo, format) {\n      var replacedString = format;\n      var formatTarget = this.searchFormatTarget(replacedString);\n\n      while (formatTarget) {\n        replacedString = replacedString.replace(formatTarget, this.convertFormatTargetToValue(date, gengo, formatTarget));\n        formatTarget = this.searchFormatTarget(replacedString);\n      }\n\n      return replacedString;\n    }\n  }, {\n    key: \"convert\",\n    value: function convert() {\n      var result = null;\n\n      switch (this.inputValue.length) {\n        // ex. 平成30年1月21日\n        case 7:\n          {\n            // 4300121(和暦を数値で表すパターン)\n            // H300121\n            if (!this.hasWarekiLetter()) {\n              return this.inputValue;\n            }\n\n            var gengo = this.getGengoFromWarekiLetter(this.inputValue.substr(0, 1));\n\n            var _date = this.getDate(gengo);\n\n            var _format = this.settings.format;\n            return this.convertDateByFormat(_date, gengo, _format);\n          }\n\n        case 8:\n          // 20180121\n          if (this.inputValue.match(/\\D/)) {\n            return this.inputValue;\n          }\n\n          var date = this.getDate();\n          var format = this.settings.format;\n          return this.convertDateByFormat(date, null, format);\n\n        case 9:\n          {\n            // H30/01/01\n            // H30.01.21\n            // 430/01/01\n            // 430.01.01\n            if (!this.hasWarekiLetter()) {\n              return this.inputValue;\n            }\n\n            var _gengo = this.getGengoFromWarekiLetter(this.inputValue.substr(0, 1));\n\n            var _date2 = this.getDate(_gengo);\n\n            var _format2 = this.settings.format;\n            return this.convertDateByFormat(_date2, null, _format2);\n          }\n\n        case 10:\n          {\n            // 2018/01/01\n            // 2018.01.01\n            var _date3 = this.getDate();\n\n            var _gengo2 = this.getGengoFromDate(_date3);\n\n            var _format3 = this.settings.format;\n            return this.convertDateByFormat(_date3, _gengo2, _format3);\n          }\n\n        default:\n          break;\n      }\n\n      return result;\n    }\n  }]);\n\n  return JapaneseDateConverter;\n}();\n\n\n\n//# sourceURL=webpack:///./src/japanese-date-converter.ts?");

/***/ })

/******/ });