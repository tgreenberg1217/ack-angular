"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-template #placeholder=\"\"><ng-template [ngTemplateOutlet]=\"body\"></ng-template><ng-content *ngIf=\"!body\"></ng-content></ng-template><ng-template *ngIf=\"!AckApp.fixedElementStage || inline\"><div style=\"position:fixed;\" [style.top]=\"align==='top' ? 0 : null\" [style.right]=\"align==='right' ? 0 : null\" [style.bottom]=\"align==='bottom' ? 0 : null\" [style.left]=\"align==='left' ? 0 : null\"><ng-template [ngTemplateOutlet]=\"layout\"></ng-template></div></ng-template>";
