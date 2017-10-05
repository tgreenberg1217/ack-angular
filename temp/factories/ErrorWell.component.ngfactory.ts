/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './AbsoluteOverflowX.component.ngfactory';
import * as i2 from './AbsoluteOverflowX.component';
import * as i3 from '@angular/common';
import * as i4 from './pipes';
import * as i5 from './ErrorWell.component';
const styles_ErrorWell:any[] = ([] as any[]);
export const RenderType_ErrorWell:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_ErrorWell,
    data:{'animation':[{type:7,name:'childStag50',definitions:[{type:1,expr:'* => *',
        animation:[{type:11,selector:'.childFx',animation:[{type:12,timings:50,animation:[{type:9,
            options:(null as any)}]}],options:{optional:true,limit:500}}],options:(null as any)}],
        options:{}},{type:7,name:'childStag',definitions:[{type:1,expr:'* => *',animation:[{type:11,
        selector:'.childFx',animation:[{type:12,timings:100,animation:[{type:9,options:(null as any)}]}],
        options:{optional:true,limit:500}}],options:(null as any)}],options:{}},{type:7,
        name:'childStag200',definitions:[{type:1,expr:'* => *',animation:[{type:11,
            selector:'.childFx',animation:[{type:12,timings:200,animation:[{type:9,
                options:(null as any)}]}],options:{optional:true,limit:500}}],options:(null as any)}],
        options:{}},{type:7,name:'childStag300',definitions:[{type:1,expr:'* => *',
        animation:[{type:11,selector:'.childFx',animation:[{type:12,timings:300,animation:[{type:9,
            options:(null as any)}]}],options:{optional:true,limit:500}}],options:(null as any)}],
        options:{}},{type:7,name:'childStag400',definitions:[{type:1,expr:'* => *',
        animation:[{type:11,selector:'.childFx',animation:[{type:12,timings:400,animation:[{type:9,
            options:(null as any)}]}],options:{optional:true,limit:500}}],options:(null as any)}],
        options:{}},{type:7,name:'childStag500',definitions:[{type:1,expr:'* => *',
        animation:[{type:11,selector:'.childFx',animation:[{type:12,timings:500,animation:[{type:9,
            options:(null as any)}]}],options:{optional:true,limit:500}}],options:(null as any)}],
        options:{}},{type:7,name:'200',definitions:[{type:1,expr:'zoomInUp => void, * => zoomOutUp',
        animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            offset:0},offset:(null as any)},{type:6,styles:{transform:'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
            offset:0.4},offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => zoomInUp',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:1,transform:'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
            offset:0.6},offset:(null as any)},{type:6,styles:{transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'zoomInRight => void, * => zoomOutLeft',animation:[{type:4,styles:{type:5,
            steps:[{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{transform:'scale3d(.475, .475, .475) translate3d(10px, 0, 0)',
                offset:0.6},offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => zoomInRight',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:1,transform:'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)',
            offset:0.6},offset:(null as any)},{type:6,styles:{transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'zoomInLeft => void, * => zoomOutRight',animation:[{type:4,styles:{type:5,
            steps:[{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{transform:'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)',
                offset:0.6},offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => zoomInLeft',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:1,transform:'scale3d(.475, .475, .475) translate3d(10px, 0, 0)',
            offset:0.6},offset:(null as any)},{type:6,styles:{transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'zoomInDown => void, * => zoomOutDown',animation:[{type:4,styles:{type:5,
            steps:[{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{transform:'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
                offset:0.4},offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => zoomInDown',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:1,transform:'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
            offset:0.6},offset:(null as any)},{type:6,styles:{transform:'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'zoomIn => void, * => zoomOut',animation:[{type:4,styles:{type:5,
            steps:[{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1)',offset:0},
                offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.1, .1, .1)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => zoomIn',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'scale3d(.1, .1, .1)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:0,name:'zoomOutUp',
            styles:{type:6,styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'zoomOutRight',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'zoomOutLeft',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'zoomOutDown',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'zoomOut',styles:{type:6,styles:{display:'none'},
            offset:(null as any)},options:(undefined as any)},{type:1,expr:'* => slideOutUp',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:'hidden',
                transform:'translate3d(0, 0, 0)',offset:0},offset:(null as any)},{type:6,
                styles:{visibility:'visible',transform:'translate3d(0, -100%, 0)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'slideInUp => void',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{visibility:'hidden',
                transform:'translate3d(0, -100%, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'* => slideInUp',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:'hidden',
                transform:'translate3d(0, 100%, 0)',offset:0},offset:(null as any)},
                {type:6,styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => slideOutLeft',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{visibility:'hidden',transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{visibility:'visible',
                transform:'translate3d(-100%, 0, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'slideInRight => void',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{visibility:'visible',
                transform:'translate3d(0, 0, 0)',offset:0},offset:(null as any)},{type:6,
                styles:{visibility:'hidden',transform:'translate3d(-100%, 0, 0)',offset:1},
                offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => slideInRight',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'hidden',transform:'translate3d(100%, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => slideOutRight',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'hidden',transform:'translate3d(0, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'visible',transform:'translate3d(100%, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'slideInLeft => void',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'hidden',transform:'translate3d(100%, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => slideInLeft',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'hidden',transform:'translate3d(-100%, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => slideOutDown',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'hidden',transform:'translate3d(0, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'visible',transform:'translate3d(0, 100%, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'slideInDown => void',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'hidden',transform:'translate3d(0, 100%, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => slideInDown',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{visibility:'hidden',transform:'translate3d(0, -100%, 0)',offset:0},
            offset:(null as any)},{type:6,styles:{visibility:'visible',transform:'translate3d(0, 0, 0)',
            offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:0,name:'slideOutUp',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'slideOutRight',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'slideOutLeft',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'slideOutDown',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:1,expr:'rotateInUpRight => void, * => rotateOutUpRight',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:1,transformOrigin:'right bottom',
                transform:'rotate3d(0, 0, 1, 0deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0,transformOrigin:'right bottom',transform:'rotate3d(0, 0, 1, 45deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => rotateInUpRight',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transformOrigin:'right bottom',
                transform:'rotate3d(0, 0, 1, -45deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:1,transformOrigin:'right bottom',transform:'rotate3d(0, 0, 1, 0deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'rotateInUpLeft => void, * => rotateOutUpLeft',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transformOrigin:'left bottom',
                transform:'rotate3d(0, 0, 1, 0deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0,transformOrigin:'left bottom',transform:'rotate3d(0, 0, 1, -45deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => rotateInUpLeft',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transformOrigin:'left bottom',
                transform:'rotate3d(0, 0, 1, 45deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:1,transformOrigin:'left bottom',transform:'rotate3d(0, 0, 1, 0deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'rotateInDownRight => void, * => rotateOutDownRight',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transformOrigin:'right bottom',
                transform:'rotate3d(0, 0, 1, 0deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0,transformOrigin:'right bottom',transform:'rotate3d(0, 0, 1, -45deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => rotateInDownRight',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transformOrigin:'right bottom',
                transform:'rotate3d(0, 0, 1, 45deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:1,transformOrigin:'right bottom',transform:'rotate3d(0, 0, 1, 0deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'rotateInDownLeft => void, * => rotateOutDownLeft',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transformOrigin:'left bottom',
                transform:'rotate3d(0, 0, 1, 0deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0,transformOrigin:'left bottom',transform:'rotate3d(0, 0, 1, 45deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => rotateInDownLeft',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transformOrigin:'left bottom',
                transform:'rotate3d(0, 0, 1, -45deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:1,transformOrigin:'left bottom',transform:'rotate3d(0, 0, 1, 0deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'rotateIn => void, * => rotateOut',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transformOrigin:'center',
                transform:'rotate3d(0, 0, 1, 0deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0,transformOrigin:'center',transform:'rotate3d(0, 0, 1, 200deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => rotateIn',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transformOrigin:'center',
                transform:'rotate3d(0, 0, 1, -200deg)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:1,transformOrigin:'center',transform:'rotate3d(0, 0, 1, 0deg)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:0,name:'rotateOutUpRight',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'rotateOutUpLeft',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'rotateOutDownRight',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'rotateOutDownLeft',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'rotateOut',styles:{type:6,styles:{display:'none'},
            offset:(null as any)},options:(undefined as any)},{type:1,expr:'bounceInUp => void, * => bounceOutUp',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{transform:'translate3d(0, -10px, 0)',
                offset:0.2},offset:(null as any)},{type:6,styles:{opacity:1,transform:'translate3d(0, 20px, 0)',
                offset:0.5},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(0, -1000px, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => bounceInUp',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(0, 1000px, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, -20px, 0)',offset:0.6},
                offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 10px, 0)',
                offset:0.75},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, -5px, 0)',
                offset:0.9},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'bounceInRight => void, * => bounceOutLeft',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(20px, 0, 0)',
                offset:0.2},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(-1000px, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => bounceInRight',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(1000px, 0, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(-20px, 0, 0)',offset:0.6},
                offset:(null as any)},{type:6,styles:{transform:'translate3d(10px, 0, 0)',
                offset:0.75},offset:(null as any)},{type:6,styles:{transform:'translate3d(-5px, 0, 0)',
                offset:0.9},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'bounceInLeft => void, * => bounceOutRight',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(-20px, 0, 0)',
                offset:0.2},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(1000px, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => bounceInLeft',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(-1000px, 0, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(20px, 0, 0)',offset:0.6},
                offset:(null as any)},{type:6,styles:{transform:'translate3d(-10px, 0, 0)',
                offset:0.75},offset:(null as any)},{type:6,styles:{transform:'translate3d(5px, 0, 0)',
                offset:0.9},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'bounceInDown => void, * => bounceOutDown',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{transform:'translate3d(0, 10px, 0)',
                offset:0.2},offset:(null as any)},{type:6,styles:{opacity:1,transform:'translate3d(0, -20px, 0)',
                offset:0.5},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(0, 1000px, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => bounceInDown',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(0, -1000px, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, 20px, 0)',offset:0.6},
                offset:(null as any)},{type:6,styles:{transform:'translate3d(0, -10px, 0)',
                offset:0.75},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 5px, 0)',
                offset:0.9},offset:(null as any)},{type:6,styles:{transform:'translate3d(0, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'bounceIn => void, * => bounceOut',animation:[{type:4,styles:{type:5,
            steps:[{type:6,styles:{transform:'scale3d(.9, .9, .9)',offset:0.2},offset:(null as any)},
                {type:6,styles:{opacity:1,transform:'scale3d(1.1, 1.1, 1.1)',offset:0.5},
                    offset:(null as any)},{type:6,styles:{opacity:0,transform:'scale3d(.3, .3, .3)',
                    offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],
            options:(null as any)},{type:1,expr:'* => bounceIn',animation:[{type:4,
            styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:'scale3d(.3, .3, .3)',
                offset:0},offset:(null as any)},{type:6,styles:{transform:'scale3d(1.1, 1.1, 1.1)',
                offset:0.2},offset:(null as any)},{type:6,styles:{transform:'scale3d(.9, .9, .9)',
                offset:0.4},offset:(null as any)},{type:6,styles:{transform:'scale3d(1.03, 1.03, 1.03)',
                offset:0.6},offset:(null as any)},{type:6,styles:{transform:'scale3d(.97, .97, .97)',
                offset:0.8},offset:(null as any)},{type:6,styles:{opacity:1,transform:'scale3d(1, 1, 1)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:0,name:'bounceOutUp',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'bounceOutRight',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'bounceOutLeft',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'bounceOutDown',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'bounceOut',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:'fadeInUp => void, * => fadeOutUp',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(0, -100%, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => fadeInUp',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(0, 100%, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'fadeInRight => void, * => fadeOutLeft',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(-100%, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => fadeInRight',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(100%, 0, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'fadeInLeft => void, * => fadeOutRight',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(100%, 0, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => fadeInLeft',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(-100%, 0, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'fadeInDown => void, * => fadeOutDown',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',
                offset:0},offset:(null as any)},{type:6,styles:{opacity:0,transform:'translate3d(0, 100%, 0)',
                offset:1},offset:(null as any)}]},timings:'200ms 0ms linear'}],options:(null as any)},
        {type:1,expr:'* => fadeInDown',animation:[{type:4,styles:{type:5,steps:[{type:6,
            styles:{opacity:0,transform:'translate3d(0, -100%, 0)',offset:0},offset:(null as any)},
            {type:6,styles:{opacity:1,transform:'translate3d(0, 0, 0)',offset:1},offset:(null as any)}]},
            timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'fadeIn => void, * => fadeOut',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,offset:0},
                offset:(null as any)},{type:6,styles:{opacity:0,offset:1},offset:(null as any)}]},
                timings:'200ms 0ms linear'}],options:(null as any)},{type:1,expr:'* => fadeIn',
            animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,offset:0},
                offset:(null as any)},{type:6,styles:{opacity:1,offset:1},offset:(null as any)}]},
                timings:'200ms 0ms linear'}],options:(null as any)},{type:0,name:'fadeOutUp',
            styles:{type:6,styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'fadeOutRight',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'fadeOutLeft',styles:{type:6,
            styles:{display:'none'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'fadeOutDown',styles:{type:6,styles:{display:'none'},offset:(null as any)},
            options:(undefined as any)},{type:0,name:'fadeOut',styles:{type:6,styles:{display:'none'},
            offset:(null as any)},options:(undefined as any)}],options:{}}]}});
function View_ErrorWell_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a',[['class',
      'text-blue underline text-xs']],(null as any),[[(null as any),'click']],(_v,
      en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>(_co.moreDetails = !_co.moreDetails)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['details']))],(null as any),
      (null as any));
}
function View_ErrorWell_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a',[['class',
      'text-blue underline text-xs']],(null as any),[[(null as any),'click']],(_v,
      en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>(_co.errorClose = _co.error)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['close']))],(null as any),
      (null as any));
}
function View_ErrorWell_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'div',([] as any[]),
      [[24,'@200',0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),4,'absolute-overflow-x',[['class','text-sm']],
          (null as any),(null as any),(null as any),i1.View_AbsoluteOverflowX_0,i1.RenderType_AbsoluteOverflowX)),
      i0.ɵdid(49152,(null as any),0,i2.AbsoluteOverflowX,([] as any[]),(null as any),
          (null as any)),(_l()(),i0.ɵeld(0,(null as any),0,2,'pre',[['class','margin-0 pad-xs']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),i0.ɵpid(0,i3.JsonPipe,([] as any[]))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = 'fadeInUp';
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = i0.ɵunv(_v,4,0,i0.ɵnov(_v,5).transform(_co.error));
        _ck(_v,4,0,currVal_1);
      });
}
function View_ErrorWell_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),12,'div',[['class',
      'pad-xxs']],[[24,'@200',0]],(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i3.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),8,'div',[['class','flex-valign-center flex-wrap child-margin-xxs']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'div',[['class','flex-1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'div',[['class','strong text-3x margin-0 cursor-pointer']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>(_co.moreDetails = !_co.moreDetails)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),2,(null as any),View_ErrorWell_2)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),i0.ɵppd(1),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ErrorWell_3)),i0.ɵdid(16384,(null as any),
          0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ErrorWell_4)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = 'pad-xxs';
    const currVal_2:any = _co.cssClasses;
    _ck(_v,1,0,currVal_1,currVal_2);
    const currVal_4:any = (_co.error && (i0.ɵunv(_v,7,0,_ck(_v,8,0,i0.ɵnov((<any>_v.parent),
        0),_co.error)) != 'string'));
    _ck(_v,7,0,currVal_4);
    const currVal_5:any = _co.error;
    _ck(_v,10,0,currVal_5);
    const currVal_6:any = _co.moreDetails;
    _ck(_v,12,0,currVal_6);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'fadeInUp';
    _ck(_v,0,0,currVal_0);
    const currVal_3:any = _co.getErrorMessage(_co.error);
    _ck(_v,5,0,currVal_3);
  });
}
export function View_ErrorWell_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i4.TypeofPipe,([] as any[])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_ErrorWell_1)),i0.ɵdid(16384,
      (null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any))],(_ck,_v) => {
    var _co:i5.ErrorWell = _v.component;
    const currVal_0:any = ((_co.error != (null as any)) && (_co.errorClose != _co.error));
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
export function View_ErrorWell_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'error-well',([] as any[]),
      (null as any),(null as any),(null as any),View_ErrorWell_0,RenderType_ErrorWell)),
      i0.ɵdid(114688,(null as any),0,i5.ErrorWell,([] as any[]),(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const ErrorWellNgFactory:i0.ComponentFactory<i5.ErrorWell> = i0.ɵccf('error-well',
    i5.ErrorWell,View_ErrorWell_Host_0,{message:'message',error:'error',cssClasses:'cssClasses'},
    {},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2Fja2VyYXBwbGUvcHJvamVjdHMvQWNrL2Jyb3dzZXIvIEFuZ3VsYXIvYWNrLWFuZ3VsYXIvc3JjL0Vycm9yV2VsbC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvYWNrZXJhcHBsZS9wcm9qZWN0cy9BY2svYnJvd3Nlci8gQW5ndWxhci9hY2stYW5ndWxhci9zcmMvRXJyb3JXZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2Fja2VyYXBwbGUvcHJvamVjdHMvQWNrL2Jyb3dzZXIvIEFuZ3VsYXIvYWNrLWFuZ3VsYXIvc3JjL0Vycm9yV2VsbC5jb21wb25lbnQudHMuRXJyb3JXZWxsLmh0bWwiLCJuZzovLy9Vc2Vycy9hY2tlcmFwcGxlL3Byb2plY3RzL0Fjay9icm93c2VyLyBBbmd1bGFyL2Fjay1hbmd1bGFyL3NyYy9FcnJvcldlbGwuY29tcG9uZW50LnRzLkVycm9yV2VsbF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJwYWQteHhzXCIgKm5nSWY9XCJlcnJvciE9bnVsbCAmYW1wOyZhbXA7IGVycm9yQ2xvc2UhPWVycm9yXCIgW0AyMDBdPVwiJ2ZhZGVJblVwJ1wiIFtuZ0NsYXNzXT1cImNzc0NsYXNzZXNcIj48ZGl2IGNsYXNzPVwiZmxleC12YWxpZ24tY2VudGVyIGZsZXgtd3JhcCBjaGlsZC1tYXJnaW4teHhzXCI+PGRpdiBjbGFzcz1cImZsZXgtMVwiPjxkaXYgY2xhc3M9XCJzdHJvbmcgdGV4dC0zeCBtYXJnaW4tMCBjdXJzb3ItcG9pbnRlclwiIChjbGljayk9XCJtb3JlRGV0YWlscz0hbW9yZURldGFpbHNcIj57eyBnZXRFcnJvck1lc3NhZ2UoZXJyb3IpIH19PC9kaXY+PC9kaXY+PGEgY2xhc3M9XCJ0ZXh0LWJsdWUgdW5kZXJsaW5lIHRleHQteHNcIiAqbmdJZj1cImVycm9yICZhbXA7JmFtcDsgKGVycm9yfHR5cGVvZikhPSdzdHJpbmcnXCIgKGNsaWNrKT1cIm1vcmVEZXRhaWxzPSFtb3JlRGV0YWlsc1wiPmRldGFpbHM8L2E+PGEgY2xhc3M9XCJ0ZXh0LWJsdWUgdW5kZXJsaW5lIHRleHQteHNcIiAqbmdJZj1cImVycm9yXCIgKGNsaWNrKT1cImVycm9yQ2xvc2U9ZXJyb3JcIj5jbG9zZTwvYT48L2Rpdj48ZGl2ICpuZ0lmPVwibW9yZURldGFpbHNcIiBbQDIwMF09XCInZmFkZUluVXAnXCI+PGFic29sdXRlLW92ZXJmbG93LXggY2xhc3M9XCJ0ZXh0LXNtXCI+PHByZSBjbGFzcz1cIm1hcmdpbi0wIHBhZC14c1wiPnt7IGVycm9yfGpzb24gfX08L3ByZT48L2Fic29sdXRlLW92ZXJmbG93LXg+PC9kaXY+PC9kaXY+IiwiPGVycm9yLXdlbGw+PC9lcnJvci13ZWxsPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0ErVDtNQUFBO2VBQUE7SUFBQTtJQUFBO0lBQXlGO01BQUE7TUFBQTtJQUFBO0lBQXpGO0VBQUEsZ0NBQTRIOzs7O29CQUFXO01BQUE7ZUFBQTtJQUFBO0lBQUE7SUFBcUQ7TUFBQTtNQUFBO0lBQUE7SUFBckQ7RUFBQSxnQ0FBZ0Y7Ozs7b0JBQWU7TUFBQSwwRUFBNkM7YUFBQTtVQUFBO2FBQUE7VUFBQSxlQUFxQztVQUFBO01BQTZCOzs7UUFBdEY7UUFBekIsV0FBeUIsU0FBekI7UUFBK0c7UUFBQTs7OztvQkFBcHBCO01BQUE7YUFBQTttQ0FBQTtNQUFpSDtVQUFBO01BQTJEO1VBQUEsMERBQW9CO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBb0Q7Y0FBQTtjQUFBO1lBQUE7WUFBcEQ7VUFBQSxnQ0FBdUY7TUFBd0M7YUFBQTtVQUFBLCtCQUF1QyxJQUFnRztVQUFBLHdEQUFBO1VBQUE7TUFBK0Y7YUFBQTtVQUFBOztJQUFoaUI7SUFBcUY7SUFBMUYsV0FBSyxVQUFxRixTQUExRjtJQUFzVztRQUFBO0lBQXZDLFdBQXVDLFNBQXZDO0lBQThLO0lBQXZDLFlBQXVDLFNBQXZDO0lBQW9HO0lBQUwsWUFBSyxTQUFMOzs7SUFBL2Q7SUFBdEUsV0FBc0UsU0FBdEU7SUFBdVI7SUFBQTs7OzsyREFBdlI7TUFBQSxzRUFBQTtNQUFBO01BQUE7O0lBQXFCO0lBQXJCLFdBQXFCLFNBQXJCOzs7O29CQ0FBO01BQUE7YUFBQTs7UUFBQTs7Ozs7In0=
