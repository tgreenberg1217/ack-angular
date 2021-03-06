"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var HtmlWidthModel = (function () {
    function HtmlWidthModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new core_1.EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
    }
    HtmlWidthModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.changed(); }, 0);
    };
    HtmlWidthModel.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.HtmlSizeService.checkWatchers();
    };
    HtmlWidthModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    HtmlWidthModel.prototype.hasChanged = function () {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    };
    HtmlWidthModel.prototype.setModel = function (htmlSize) {
        this.htmlWidthModel = htmlSize.width;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlWidthModel]'
                },] },
    ];
    HtmlWidthModel.ctorParameters = function () { return [
        { type: HtmlSizeWatcher_1.HtmlSizeService }
    ]; };
    HtmlWidthModel.propDecorators = {
        htmlWidthModel: [{ type: core_1.Input }],
        htmlWidthModelChange: [{ type: core_1.Output }]
    };
    return HtmlWidthModel;
}());
exports.HtmlWidthModel = HtmlWidthModel;
