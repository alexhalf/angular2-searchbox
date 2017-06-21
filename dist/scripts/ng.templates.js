'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgSearchboxAddedFilterTemplate = "<div class=\"ng-searchbox-added-filter\" #ngSearchboxAddedFilter=\"\"><template [ngIf]=\"searchbox &amp;&amp; searchbox.ngSearchBoxEnableFilterOperators\"><ng-searchbox-filter-operators [filter]=\"filter\"></ng-searchbox-filter-operators></template><div class=\"ng-searchbox-added-filter-contents\" (click)=\"openFilter();\"><span class=\"filter-name\" [innerText]=\"filter.displayName + ':'\"></span><template [ngIf]=\"filter &amp;&amp; filter.selector\"><span class=\"selector-type\" [innerText]=\"filter.selector.name\"></span></template><template [ngIf]=\"filter &amp;&amp; filter.value &amp;&amp; !filter.editing\"><span class=\"filter-value\" [innerText]=\"filter.value\"></span></template><template [ngIf]=\"filter &amp;&amp; filter.editing\"><input type=\"text\" [(ngModel)]=\"v\" (ngModelChange)=\"valueChange($event);\" (keydown)=\"onKeyDown($event);\" (keyup)=\"onKeyUp($event);\"/></template><i class=\"fa fa-times\" (click)=\"destroy();\"></i><ng-searchbox-filter-selectors [filter]=\"filter\" [observer]=\"onChange\"></ng-searchbox-filter-selectors></div></div>";
exports.NgSearchboxAddedFiltersWrapperTemplate = "<div class=\"ng-searchbox-added-filters\" #ngSearchboxAddedFilters=\"\"></div>";
exports.NgSearchboxFilterOperatorsTemplate = "<div class=\"ng-searchbox-added-filter-operator\" [hidden]=\"!hasOperator\"><span (click)=\"toggleOperators();\"><i class=\"fa fa-arrow-left\"></i><template [ngIf]=\"filter &amp;&amp; filter.operator\"><i [innerText]=\"filter.operator.name\"></i></template><i class=\"fa fa-arrow-right\"></i></span><div class=\"ng-searchbox-filter-operators-wrapper\" [hidden]=\"!showOperators\"><ul><li *ngFor=\"let operator of operators\" [ngClass]=\"{ 'active': operator.selected }\" (click)=\"takeOperator(operator);\"><span [innerText]=\"operator.name\"></span></li></ul></div></div>";
exports.NgSearchboxFilterSelectorsTemplate = "<div class=\"ng-searchbox-filter-selectors\" [hidden]=\"!filter.editing\"><ul class=\"ng-searchbox-selectors-list\"><li *ngFor=\"let selector of selectors\" [ngClass]=\"{ 'active': selector.selected }\" (click)=\"takeSelector(selector);\"><span [innerText]=\"selector.name\"></span></li></ul></div>";
exports.NgSearchboxFilteringTemplate = "<div class=\"ng-filtering ng-clearfix\"><span class=\"filtering-selection\" [ngClass]=\"{ 'active': active }\" (click)=\"toggleFilters();\"><i class=\"fa fa-filter\"></i></span><ul [hidden]=\"!active\" #ngSearchboxFilteringList=\"\"><li *ngFor=\"let filter of availableFilters\" [ngClass]=\"{ 'child-filter': filter.child, 'root-filter': filter.root }\" (click)=\"addFilter($event, filter.name);\"><i class=\"fa fa-filter\"></i><span class=\"ng-filter-display-name\" [innerText]=\"filter.displayName\"></span><template [ngIf]=\"filter.root\"><span class=\"ng-filtered-from\"><i class=\"fa fa-level-up\"></i>(Derived from Root<i class=\"fa fa-angle-double-right\"></i><span [innerText]=\"' ' + filter.root\"></span>)</span></template><template [ngIf]=\"filter.child\"><span class=\"ng-filtered-from\"><i class=\"fa fa-level-down\"></i>(Derived from<span [innerText]=\"' ' + filter.child\"></span>)</span></template></li></ul></div>";
exports.NgSearchboxTemplate = "<div class=\"ng-searchbox\"><template [ngIf]=\"ngSearchBoxFiltering\"><ng-searchbox-filtering [observer]=\"onChange\"></ng-searchbox-filtering></template><div class=\"ng-searchbox-wrapper\"><input [id]=\"sid\" type=\"text\" [(ngModel)]=\"query\" (ngModelChange)=\"queryChange($event);\" (keydown)=\"onKeyDown($event);\" [placeholder]=\"placeholder\"/><div class=\"ng-searchbox-buttons\"><template [ngIf]=\"hasQuery\"><i class=\"fa fa-eraser\" (click)=\"handleEraser();\"></i></template><template [ngIf]=\"(hasQuery || (Filtering &amp;&amp; Filtering.hasFilters))\"><i class=\"fa fa-trash\" (click)=\"handleGarbage();\"></i></template><i class=\"fa fa-search\" (click)=\"handleSearch();\"></i></div></div><ng-searchbox-added-filters-wrapper class=\"ng-clearfix\" [ngClass]=\"{ 'active': (Filtering &amp;&amp; Filtering.hasFilters) }\" [observer]=\"onChange\" #ngSearchboxAddedFiltersWrapper=\"\"></ng-searchbox-added-filters-wrapper></div>";
