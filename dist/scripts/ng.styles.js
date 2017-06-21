'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgSearchboxFilterOperatorsStyle = [":host {\n  float: left;\n}\n:host div.ng-searchbox-added-filter-operator {\n  background: #FFF;\n  border-radius: 6px;\n  margin-right: 10px;\n  margin-top: 8px;\n}\n:host div.ng-searchbox-added-filter-operator span {\n  padding: 5px 6px 5px 6px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  display: block;\n}\n:host div.ng-searchbox-added-filter-operator span i.fa-arrow-left {\n  margin-right: 5px;\n  color: rgba(0, 0, 0, 0.75);\n}\n:host div.ng-searchbox-added-filter-operator span i.fa-arrow-right {\n  margin-left: 5px;\n  color: rgba(0, 0, 0, 0.75);\n}\n:host div.ng-searchbox-added-filter-operator div.ng-searchbox-filter-operators-wrapper {\n  position: absolute;\n}\n"];
exports.NgSearchboxAddedFilterStyle = [":host > div.ng-searchbox-added-filter {\n  display: block;\n  float: left;\n  transition: opacity 0.5s ease-in-out;\n  -moz-transition: opacity 0.5s ease-in-out;\n  -webkit-transition: opacity 0.5s ease-in-out;\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents {\n  background: #FFF;\n  padding: 5px 6px 5px 6px;\n  border-radius: 6px;\n  margin-right: 10px;\n  margin-top: 8px;\n  float: left;\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents input {\n  outline: none;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #D4D1D1;\n  font-size: 14px;\n  padding-left: 5px;\n  margin-right: 3px;\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents span.filter-name {\n  font-size: 13px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents span.selector-type {\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  margin-top: 0px;\n  background: #CAE5FF;\n  margin-left: 9px;\n  padding: 4px;\n  opacity: 0.6;\n  border-radius: 4px;\n  margin-right: 7px;\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents span.filter-value {\n  display: inline-block;\n  padding-bottom: 2px;\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.82);\n}\n:host > div.ng-searchbox-added-filter > div.ng-searchbox-added-filter-contents i.fa-times {\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: top;\n  font-size: 18px;\n  margin-right: 5px;\n}\n"];
exports.NgSearchboxAddedFiltersWrapperStyle = [":host {\n  padding: 0 0 8px 7px;\n  background: #E1F0FD;\n  border-radius: 6px;\n  margin-top: 7px;\n  margin-bottom: 4px;\n  display: none;\n}\n:host.active {\n  display: block;\n}\n:host div.ng-searchbox-added-filters {\n  display: none;\n}\n"];
exports.NgSearchboxFilterSelectorsStyle = [":host div.ng-searchbox-filter-selectors {\n  position: absolute;\n  z-index: 3;\n  margin-top: 4px;\n}\n:host div.ng-searchbox-filter-selectors ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0 0 0 0;\n  display: block;\n  border-left: 1px solid #A9A9A9;\n  border-right: 1px solid #A9A9A9;\n  border-bottom: 1px solid #A9A9A9;\n  max-height: 130px;\n  overflow-y: scroll;\n}\n:host div.ng-searchbox-filter-selectors ul li {\n  padding: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n:host div.ng-searchbox-filter-selectors ul li:nth-child(odd) {\n  background: #E1F0FD;\n}\n"];
exports.NgSearchboxFilteringStyle = [":host {\n  display: block;\n}\n:host span.filtering-selection {\n  border-right: 1px solid rgba(4, 4, 4, 0.3);\n  margin-top: 0;\n  cursor: pointer;\n  opacity: 0.75;\n  margin-left: 0;\n  font-size: 16px;\n  font-weight: normal;\n  margin-right: 8px;\n  display: block;\n  text-align: center;\n  width: 20px;\n  padding: 11px 8px 11px 8px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  background: #cee8ff;\n  background: -moz-linear-gradient(top, #cee8ff 0%, #b5dcff 100%);\n  background: -webkit-linear-gradient(top, #cee8ff 0%, #b5dcff 100%);\n  background: linear-gradient(to bottom, #cee8ff 0%, #b5dcff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cee8ff', endColorstr='#b5dcff',GradientType=0 );\n  transition: opacity 0.25s ease-in-out;\n  -moz-transition: opacity 0.25s ease-in-out;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  position: absolute;\n  z-index: 2;\n}\n:host span.filtering-selection.active {\n  background: #b5dcff;\n  background: -moz-linear-gradient(top, #b5dcff 0%, #cee8ff 100%);\n  background: -webkit-linear-gradient(top, #b5dcff 0%, #cee8ff 100%);\n  background: linear-gradient(to bottom, #b5dcff 0%, #cee8ff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5dcff', endColorstr='#cee8ff',GradientType=0 );\n}\n:host ul {\n  position: absolute;\n  z-index: 6;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow-y: scroll;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  left: 0;\n  top: 0;\n}\n:host ul li {\n  font-size: 14px;\n  margin-right: 8px;\n  padding: 5px 10px;\n  border-bottom: 2px solid #FFF;\n  cursor: pointer;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: background 0.25s ease-in-out;\n  -moz-transition: background 0.25s ease-in-out;\n  -webkit-transition: background 0.25s ease-in-out;\n}\n:host ul li:last-child {\n  border-bottom: none;\n}\n:host ul li.root-filter {\n  background: #CEE8FF;\n}\n:host ul li.child-filter {\n  background: #FFDFDF;\n}\n:host ul li.child-filter:hover {\n  background: #FFD6D6;\n}\n:host ul li i.fa-filter {\n  opacity: 0.45;\n  margin-right: 5px;\n}\n:host ul li i.fa-level-up, :host ul li i.fa-level-down {\n  margin-right: 4px;\n}\n:host ul li:hover span.ng-filter-display-name {\n  font-weight: bold;\n}\n:host ul li span.ng-filtered-from {\n  opacity: 0.6;\n  font-size: 12px;\n  margin-left: 10px;\n}\n"];
exports.NgSearchboxStyle = [".ng-clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n\n* html .ng-clearfix {\n  height: 1%;\n}\n\n:host {\n  border: 1px solid rgba(4, 4, 4, 0.3);\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  position: relative;\n  border-radius: 4px;\n  display: block;\n  background: #FFF;\n  padding: 4px;\n}\n:host div.ng-searchbox-wrapper {\n  position: relative;\n}\n:host div.ng-searchbox-wrapper input {\n  font-size: 18px;\n  border: none;\n  width: 100%;\n  outline: none;\n  padding: 9px 8px 9px 50px;\n  color: rgba(0, 0, 0, 0.68);\n  font-weight: normal;\n  font-style: italic;\n}\n:host div.ng-searchbox-wrapper div.ng-searchbox-buttons {\n  position: absolute;\n  z-index: 1;\n  right: 10px;\n  transform: translate(0, 50%);\n  top: 0;\n  font-size: 18px;\n}\n:host div.ng-searchbox-wrapper div.ng-searchbox-buttons i {\n  margin-right: 5px;\n  cursor: pointer;\n}\n:host div.ng-searchbox-wrapper div.ng-searchbox-buttons i.fa-trash, :host div.ng-searchbox-wrapper div.ng-searchbox-buttons i.fa-eraser {\n  color: #4A92D0;\n}\n:host div.ng-searchbox-wrapper div.ng-searchbox-buttons i:last-child {\n  margin-right: 0;\n}\n"];
exports.GlobalStyle = [".ng-clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n\n* html .ng-clearfix {\n  height: 1%;\n}\n"];
