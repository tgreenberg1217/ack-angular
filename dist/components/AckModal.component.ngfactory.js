"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./AckModal.component");
var styles_AckModal = [];
var RenderType_AckModal = i0.ɵcrt({ encapsulation: 2, styles: styles_AckModal, data: { "animation": [{ type: 7, name: "childStag50", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 50, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "childStag", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 100, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "childStag200", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 200, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "childStag300", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 300, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "childStag400", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 400, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "childStag500", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".childFx", animation: [{ type: 12, timings: 500, animation: [{ type: 9, options: null }] }], options: { "optional": true, "limit": 300 } }], options: null }], options: {} }, { type: 7, name: "200", definitions: [{ type: 1, expr: "zoomInUp => void, * => zoomOutUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => zoomInUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "zoomInRight => void, * => zoomOutLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => zoomInRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "zoomInLeft => void, * => zoomOutRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => zoomInLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "zoomInDown => void, * => zoomOutDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => zoomInDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "zoomIn => void, * => zoomOut", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => zoomIn", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 0, name: "zoomOutUp", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "zoomOutRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "zoomOutLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "zoomOutDown", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "zoomOut", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 1, expr: "* => slideOutUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "slideInUp => void", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideInUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideOutLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "slideInRight => void", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideInRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideOutRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "slideInLeft => void", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideInLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideOutDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "slideInDown => void", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => slideInDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 0, name: "slideOutUp", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "slideOutRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "slideOutLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "slideOutDown", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 1, expr: "rotateInUpRight => void, * => rotateOutUpRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => rotateInUpRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "rotateInUpLeft => void, * => rotateOutUpLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => rotateInUpLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "rotateInDownRight => void, * => rotateOutDownRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => rotateInDownRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "rotateInDownLeft => void, * => rotateOutDownLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => rotateInDownLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "rotateIn => void, * => rotateOut", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => rotateIn", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 0, name: "rotateOutUpRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "rotateOutUpLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "rotateOutDownRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "rotateOutDownLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "rotateOut", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 1, expr: "bounceInUp => void, * => bounceOutUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => bounceInUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "bounceInRight => void, * => bounceOutLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => bounceInRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }, offset: null }, { type: 6, styles: { "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "bounceInLeft => void, * => bounceOutRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => bounceInLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }, offset: null }, { type: 6, styles: { "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "bounceInDown => void, * => bounceOutDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => bounceInDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }, offset: null }, { type: 6, styles: { "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "bounceIn => void, * => bounceOut", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => bounceIn", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }, offset: null }, { type: 6, styles: { "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }, offset: null }, { type: 6, styles: { "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 0, name: "bounceOutUp", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "bounceOutRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "bounceOutLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "bounceOutDown", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "bounceOut", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 1, expr: "fadeInUp => void, fadeInUp => hidden, * => fadeOutUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => fadeInUp, hidden => fadeInUp", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "fadeInRight => void, * => fadeOutLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => fadeInRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "fadeInLeft => void, * => fadeOutRight", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => fadeInLeft", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "fadeInDown => void, * => fadeOutDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => fadeInDown", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "fadeIn => void, * => fadeOut", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 1, "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 0, "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 1, expr: "* => fadeIn", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { "opacity": 0, "offset": 0 }, offset: null }, { type: 6, styles: { "opacity": 1, "offset": 1 }, offset: null }] }, timings: "200ms 0ms linear" }], options: null }, { type: 0, name: "fadeOutUp", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "fadeOutRight", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "fadeOutLeft", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "fadeOutDown", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }, { type: 0, name: "fadeOut", styles: { type: 6, styles: { "display": "none" }, offset: null }, options: undefined }], options: {} }] } });
exports.RenderType_AckModal = RenderType_AckModal;
function View_AckModal_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["style", "position:relative;"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "div", [["style", "position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20;"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["style", "cursor:pointer;border:3px solid white;border-radius:50%;background-color:black;color:white;text-align:center;font-family:Arial;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["style", "line-height:22px;font-size:23px;height:25px;width:25px;"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["x"]))], null, null); }
function View_AckModal_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 16, "div", [["style", "position:fixed;top:0;left:0;z-index:20;height:100%;width:100%;overflow:auto;"]], [[24, "@200", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 15, "div", [["style", "height:100%;width:100%;padding:20px;display:inline-table;"]], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "background-color": 0 }), (_l()(), i0.ɵeld(4, 0, null, null, 12, "table", [["align", "center"], ["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["style", "height:100%;margin:auto;"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(6, 0, null, null, 10, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 0, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.allowClose ? _co.close() : 0) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 4, "td", [["valign", "top"]], null, null, null, null, null)), i0.ɵdid(11, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckModal_2)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(15, 0, null, null, 1, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 0, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.allowClose ? _co.close() : 0) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, _co.backgroundColor); _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.wrapStyle; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.wrapCellStyle; _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.allowClose; _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = "fadeInUp"; _ck(_v, 0, 0, currVal_0); }); }
function View_AckModal_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckModal_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.showModelMode || _co.showModel); _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_AckModal_0 = View_AckModal_0;
function View_AckModal_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ack-modal", [], null, null, null, View_AckModal_0, RenderType_AckModal)), i0.ɵdid(1, 114688, null, 0, i2.AckModal, [i0.ElementRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AckModal_Host_0 = View_AckModal_Host_0;
var AckModalNgFactory = i0.ɵccf("ack-modal", i2.AckModal, View_AckModal_Host_0, { wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", allowClose: "allowClose", backgroundColor: "backgroundColor", ref: "ref", showModel: "showModel" }, { onClose: "onClose", backgroundColorChange: "backgroundColorChange", refChange: "refChange", showModelChange: "showModelChange" }, ["*"]);
exports.AckModalNgFactory = AckModalNgFactory;
