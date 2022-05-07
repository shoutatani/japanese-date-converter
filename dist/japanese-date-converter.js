!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JapaneseDateConverter=e():t.JapaneseDateConverter=e()}(this,(function(){return function(){"use strict";var t={};(function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);var e=function(){function t(t){var e=t.inputValue,r=t.settings;this.inputValue=e,this.settings=r,this.gengoList=[{name:"M",ligature:"㍾",from:new Date(1868,0,25),to:new Date(1912,6,29),ggg:"明治",gg:"明"},{name:"T",ligature:"㍽",from:new Date(1912,6,30),to:new Date(1926,11,24),ggg:"大正",gg:"大"},{name:"S",ligature:"㍼",from:new Date(1926,11,25),to:new Date(1989,0,7),ggg:"昭和",gg:"昭"},{name:"H",ligature:"㍻",from:new Date(1989,0,8),to:new Date(2019,3,30),ggg:"平成",gg:"平"},{name:"R",ligature:"㋿",from:new Date(2019,4,1),to:new Date,ggg:"令和",gg:"令"}],this.formatOptions={yearsOfString:["ggg","gg","g"],yearsOfNumber:["ee","e","yyyy","yy"],monthsOfString:["mmmmm","mmmm","mmm"],monthsOfNumber:["MM","M"],days:["dd","d"]}}return t.prototype.execute=function(){return this.validate()?this.convert():this.inputValue},t.prototype.validate=function(){return!(this.inputValue.length<7||(this.checkInvalidWarekiYear(),0))},t.prototype.checkInvalidWarekiYear=function(){if(this.hasWarekiLetter()){var t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1)),e=this.getDate(t);if(e&&t!==this.getGengoFromDate(e))throw new Error("Invalid Wareki year is specified")}},t.prototype.getGengoFromWarekiLetter=function(t){var e=null;return this.gengoList.forEach((function(r,n){r.name!==t&&n+1!==Number.parseInt(t)||(e=r)}),this.gengoList),e},t.prototype.hasWarekiLetter=function(){return!!this.inputValue.match(/^\d{7}$|^[A-Z1-9]{1}\d{6}$|^[A-Z1-9]{1}\d{2}\D+\d{2}\D+\d{2}/)},t.prototype.getGengoFromDate=function(t){var e=this.gengoList.find((function(e){return t>=e.from&&t<=e.to}));return t<this.gengoList[0].from&&(e=this.gengoList[0]),t>this.gengoList[this.gengoList.length-1].from&&(e=this.gengoList[this.gengoList.length-1]),e},t.prototype.getSeirekiYear=function(t,e){return t?t.from.getFullYear()+e-1:null},t.prototype.getWarekiYear=function(t){var e=this.getGengoFromDate(t);return t.getFullYear()-(e.from.getFullYear()-1)},t.prototype.getDate=function(t){switch(this.inputValue.length){case 7:var e=Number.parseInt(this.inputValue.substr(1,2)),r=Number.parseInt(this.inputValue.substr(3,2)),n=Number.parseInt(this.inputValue.substr(5,2)),a=this.getSeirekiYear(t,e);return new Date(a,r-1,n);case 8:return a=Number.parseInt(this.inputValue.substr(0,4)),r=Number.parseInt(this.inputValue.substr(4,2)),n=Number.parseInt(this.inputValue.substr(6,4)),new Date(a,r-1,n);case 9:return e=Number.parseInt(this.inputValue.substr(1,2)),r=Number.parseInt(this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)?this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)[1]:null),n=Number.parseInt(this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)?this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)[1]:null),a=this.getSeirekiYear(t,e),new Date(a,r-1,n);case 10:return a=Number.parseInt(this.inputValue.substr(0,4)),r=Number.parseInt(this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)?this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)[1]:null),n=Number.parseInt(this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)?this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)[1]:null),new Date(a,r-1,n)}return null},t.prototype.convertFormatTargetToValue=function(t,e,r){var n=["January","February","March","April","May","June","July","August","September","October","November","December"];switch(r){case"ggg":return e.ggg;case"gg":return e.gg;case"g":return e.name;case"ee":return this.getWarekiYear(t).toString().padStart(2,"0");case"e":return this.getWarekiYear(t).toString();case"yyyy":return t.getFullYear().toString();case"yy":return t.getFullYear().toString().substr(2,2);case"mmmmm":return n[t.getMonth()].substr(0,1);case"mmmm":return n[t.getMonth()];case"mmm":return n[t.getMonth()].substr(0,3);case"MM":return(t.getMonth()+1).toString().padStart(2,"0");case"M":return(t.getMonth()+1).toString();case"dd":return t.getDate().toString().padStart(2,"0");case"d":return t.getDate().toString();default:return null}},t.prototype.convertDateByFormat=function(t,e,r){var n=r,a=this.formatOptions.yearsOfString.find((function(t){return n.includes(t)}));n=n.replace(a,this.convertFormatTargetToValue(t,e,a));var i=this.formatOptions.yearsOfNumber.find((function(t){return n.includes(t)}));n=n.replace(i,this.convertFormatTargetToValue(t,e,i));var u=this.formatOptions.monthsOfString.find((function(t){return n.includes(t)}));n=n.replace(u,this.convertFormatTargetToValue(t,e,u));var s=this.formatOptions.monthsOfNumber.find((function(t){return n.includes(t)}));n=n.replace(s,this.convertFormatTargetToValue(t,e,s));var o=this.formatOptions.days.find((function(t){return n.includes(t)}));return n=n.replace(o,this.convertFormatTargetToValue(t,e,o))},t.prototype.convert=function(){switch(this.inputValue.length){case 7:if(!this.hasWarekiLetter())return this.inputValue;var t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1)),e=this.getDate(t),r=this.settings.format;return this.convertDateByFormat(e,t,r);case 8:if(this.inputValue.match(/\D/))return this.inputValue;var n=this.getDate(),a=this.settings.format;return this.convertDateByFormat(n,null,a);case 9:if(!this.hasWarekiLetter())return this.inputValue;t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1));var i=this.getDate(t),u=this.settings.format;return this.convertDateByFormat(i,null,u);case 10:var s=this.getDate(),o=(t=this.getGengoFromDate(s),this.settings.format);return this.convertDateByFormat(s,t,o)}return null},t}();return t.default=e,t}()}));