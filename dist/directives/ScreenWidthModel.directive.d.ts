import { EventEmitter } from "@angular/core";
export declare class ScreenWidthModel {
    window: any;
    onResize: () => any;
    screenWidthModel: number;
    screenWidthModelChange: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    setModel(): void;
    ngOnDestroy(): void;
}