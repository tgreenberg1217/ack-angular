"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Prompts_1 = require("./Prompts");
var AckApp = (function () {
    function AckApp(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.modals = [];
    }
    AckApp.prototype.registerModal = function (item) {
        this.modals.push(item);
        return this;
    };
    AckApp.prototype.unregisterModal = function (item) {
        for (var index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    };
    AckApp.decorators = [
        { type: core_1.Injectable },
    ];
    AckApp.ctorParameters = function () { return [
        { type: Prompts_1.Prompts }
    ]; };
    return AckApp;
}());
exports.AckApp = AckApp;
