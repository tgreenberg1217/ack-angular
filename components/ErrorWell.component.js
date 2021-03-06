"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ack_angular_fx_1 = require("ack-angular-fx");
var error_well_pug_1 = require("./templates/error-well.pug");
var ErrorWell = (function () {
    function ErrorWell() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    };
    ErrorWell.prototype.getErrorMessage = function (error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    };
    ErrorWell.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'error-well',
                    template: error_well_pug_1.string,
                    animations: ack_angular_fx_1.fxArray
                },] },
    ];
    ErrorWell.propDecorators = {
        message: [{ type: core_1.Input }],
        error: [{ type: core_1.Input }],
        cssClasses: [{ type: core_1.Input }],
        closable: [{ type: core_1.Input }],
        allowDetails: [{ type: core_1.Input }]
    };
    return ErrorWell;
}());
exports.ErrorWell = ErrorWell;
