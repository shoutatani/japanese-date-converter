!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JapaneseDateConverter=e():t.JapaneseDateConverter=e()}(this,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>r});class r{constructor({inputValue:t,settings:e}){this.inputValue=t,this.settings=e,this.gengoList=[{name:"M",ligature:"㍾",from:new Date(1868,0,25),to:new Date(1912,6,29),ggg:"明治",gg:"明"},{name:"T",ligature:"㍽",from:new Date(1912,6,30),to:new Date(1926,11,24),ggg:"大正",gg:"大"},{name:"S",ligature:"㍼",from:new Date(1926,11,25),to:new Date(1989,0,7),ggg:"昭和",gg:"昭"},{name:"H",ligature:"㍻",from:new Date(1989,0,8),to:new Date(2019,3,30),ggg:"平成",gg:"平"},{name:"R",ligature:"㋿",from:new Date(2019,4,1),to:new Date,ggg:"令和",gg:"令"}],this.formatOptions={yearsOfString:["ggg","gg","g"],yearsOfNumber:["ee","e","yyyy","yy"],monthsOfString:["mmmmm","mmmm","mmm"],monthsOfNumber:["MM","M"],days:["dd","d"]}}execute(){return this.validate()?this.convert():this.inputValue}validate(){return!(this.inputValue.length<7||(this.checkInvalidWarekiYear(),0))}checkInvalidWarekiYear(){if(!this.hasWarekiLetter())return;const t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1)),e=this.getDate(t);if(e&&t!==this.getGengoFromDate(e))throw new Error("Invalid Wareki year is specified")}getGengoFromWarekiLetter(t){let e=null;return this.gengoList.forEach(((r,n)=>{r.name!==t&&n+1!==Number.parseInt(t)||(e=r)}),this.gengoList),e}hasWarekiLetter(){return!!this.inputValue.match(/^\d{7}$|^[A-Z1-9]{1}\d{6}$|^[A-Z1-9]{1}\d{2}\D+\d{2}\D+\d{2}/)}getGengoFromDate(t){let e=this.gengoList.find((e=>t>=e.from&&t<=e.to));return t<this.gengoList[0].from&&(e=this.gengoList[0]),t>this.gengoList[this.gengoList.length-1].from&&(e=this.gengoList[this.gengoList.length-1]),e}getSeirekiYear(t,e){return t?t.from.getFullYear()+e-1:null}getWarekiYear(t){const e=this.getGengoFromDate(t);return t.getFullYear()-(e.from.getFullYear()-1)}getDate(t){switch(this.inputValue.length){case 7:{const e=Number.parseInt(this.inputValue.substr(1,2)),r=Number.parseInt(this.inputValue.substr(3,2)),n=Number.parseInt(this.inputValue.substr(5,2)),a=this.getSeirekiYear(t,e);return new Date(a,r-1,n)}case 8:{const t=Number.parseInt(this.inputValue.substr(0,4)),e=Number.parseInt(this.inputValue.substr(4,2)),r=Number.parseInt(this.inputValue.substr(6,4));return new Date(t,e-1,r)}case 9:{const e=Number.parseInt(this.inputValue.substr(1,2)),r=Number.parseInt(this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)?this.inputValue.match(/\d{2}.+(\d{2}).+\d{2}/)[1]:null),n=Number.parseInt(this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)?this.inputValue.match(/\d{2}.+\d{2}.+(\d{2})/)[1]:null),a=this.getSeirekiYear(t,e);return new Date(a,r-1,n)}case 10:{const t=Number.parseInt(this.inputValue.substr(0,4)),e=Number.parseInt(this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)?this.inputValue.match(/\d{4}.+(\d{2}).+\d{2}/)[1]:null),r=Number.parseInt(this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)?this.inputValue.match(/\d{4}.+\d{2}.+(\d{2})/)[1]:null);return new Date(t,e-1,r)}}return null}convertFormatTargetToValue(t,e,r){const n=["January","February","March","April","May","June","July","August","September","October","November","December"];switch(r){case"ggg":return e.ggg;case"gg":return e.gg;case"g":return e.name;case"ee":return this.getWarekiYear(t).toString().padStart(2,"0");case"e":return this.getWarekiYear(t).toString();case"yyyy":return t.getFullYear().toString();case"yy":return t.getFullYear().toString().substr(2,2);case"mmmmm":return n[t.getMonth()].substr(0,1);case"mmmm":return n[t.getMonth()];case"mmm":return n[t.getMonth()].substr(0,3);case"MM":return(t.getMonth()+1).toString().padStart(2,"0");case"M":return(t.getMonth()+1).toString();case"dd":return t.getDate().toString().padStart(2,"0");case"d":return t.getDate().toString();default:return null}}convertDateByFormat(t,e,r){let n=r;const a=this.formatOptions.yearsOfString.find((t=>n.includes(t)));n=n.replace(a,this.convertFormatTargetToValue(t,e,a));const s=this.formatOptions.yearsOfNumber.find((t=>n.includes(t)));n=n.replace(s,this.convertFormatTargetToValue(t,e,s));const i=this.formatOptions.monthsOfString.find((t=>n.includes(t)));n=n.replace(i,this.convertFormatTargetToValue(t,e,i));const u=this.formatOptions.monthsOfNumber.find((t=>n.includes(t)));n=n.replace(u,this.convertFormatTargetToValue(t,e,u));const o=this.formatOptions.days.find((t=>n.includes(t)));return n=n.replace(o,this.convertFormatTargetToValue(t,e,o)),n}convert(){switch(this.inputValue.length){case 7:{if(!this.hasWarekiLetter())return this.inputValue;const t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1)),e=this.getDate(t),r=this.settings.format;return this.convertDateByFormat(e,t,r)}case 8:if(this.inputValue.match(/\D/))return this.inputValue;const t=this.getDate(),e=this.settings.format;return this.convertDateByFormat(t,null,e);case 9:{if(!this.hasWarekiLetter())return this.inputValue;const t=this.getGengoFromWarekiLetter(this.inputValue.substr(0,1)),e=this.getDate(t),r=this.settings.format;return this.convertDateByFormat(e,null,r)}case 10:{const t=this.getDate();let e=this.getGengoFromDate(t);const r=this.settings.format;return this.convertDateByFormat(t,e,r)}}return null}}return e})()));