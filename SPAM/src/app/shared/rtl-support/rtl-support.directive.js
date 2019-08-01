"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var RtlSupportDirective = /** @class */ (function () {
    function RtlSupportDirective(el, translate) {
        this.el = el;
        this.translate = translate;
        el.nativeElement.style.textAlign =
            translate.currentLang === 'he' ? 'right' : 'left';
        el.nativeElement.style.direction =
            translate.currentLang === 'he' ? 'rtl' : 'ltr';
    }
    RtlSupportDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.translate.onLangChange.subscribe(function (event) {
            _this.el.nativeElement.style.textAlign =
                event.lang === 'he' ? 'right' : 'left';
            _this.el.nativeElement.style.direction =
                event.lang === 'he' ? 'rtl' : 'ltr';
        });
    };
    RtlSupportDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    RtlSupportDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[rtl]' // tslint:disable-line
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_2.TranslateService])
    ], RtlSupportDirective);
    return RtlSupportDirective;
}());
exports.RtlSupportDirective = RtlSupportDirective;
//# sourceMappingURL=rtl-support.directive.js.map