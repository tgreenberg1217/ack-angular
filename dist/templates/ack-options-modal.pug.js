"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ack-modal [(ref)]=\"ackModal\" (onClose)=\"onClose.emit($event)\" [allowClose]=\"allowClose\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [backgroundColor]=\"backgroundColor\" (backgroundColorChange)=\"backgroundColorChange.emit($event)\"><ng-content></ng-content><div class=\"border-grey-6x border bg-white\"><ack-options [(ref)]=\"ackOptions\" [array]=\"array\" [(model)]=\"model\" [multiple]=\"multiple\" [toggleable]=\"toggleable\" [stylize]=\"stylize\" [templateRef]=\"templateRef\" [arrayKey]=\"arrayKey\" [arrayToModelKey]=\"arrayToModelKey\" [modelKey]=\"modelKey\"></ack-options></div></ack-modal>";