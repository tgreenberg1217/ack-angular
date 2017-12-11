import { EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp";
export declare class AckModal {
    element: ElementRef;
    AckApp: AckApp;
    layout: ElementRef;
    isModelMode: boolean;
    wrapStyle: any;
    wrapCellStyle: any;
    allowClose: boolean;
    backgroundColor: string;
    showModel: boolean;
    showModelChange: EventEmitter<{}>;
    close: EventEmitter<{}>;
    constructor(element: ElementRef, AckApp: AckApp);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
