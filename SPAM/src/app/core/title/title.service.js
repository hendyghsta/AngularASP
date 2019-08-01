"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../environments/environment");
var TitleService = /** @class */ (function () {
    function TitleService(translateService, title) {
        this.translateService = translateService;
        this.title = title;
    }
    TitleService.prototype.setTitle = function (snapshot, lazyTranslateService) {
        var _this = this;
        var lastChild = snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        var title = lastChild.data.title;
        var translate = lazyTranslateService || this.translateService;
        if (title) {
            translate
                .get(title)
                .pipe(operators_1.filter(function (translatedTitle) { return translatedTitle !== title; }))
                .subscribe(function (translatedTitle) {
                return _this.title.setTitle(translatedTitle + " - " + environment_1.environment.appName);
            });
        }
        else {
            this.title.setTitle(environment_1.environment.appName);
        }
    };
    TitleService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            platform_browser_1.Title])
    ], TitleService);
    return TitleService;
}());
exports.TitleService = TitleService;
//# sourceMappingURL=title.service.js.map