"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var overlay_1 = require("@angular/cdk/overlay");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var core_2 = require("@ngx-translate/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_state_1 = require("../core.state");
var local_storage_service_1 = require("../local-storage/local-storage.service");
var animations_service_1 = require("../animations/animations.service");
var title_service_1 = require("../title/title.service");
var settings_actions_1 = require("./settings.actions");
var settings_selectors_1 = require("./settings.selectors");
exports.SETTINGS_KEY = 'SETTINGS';
var INIT = rxjs_1.of('anms-init-effect-trigger');
var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions$, store, router, overlayContainer, localStorageService, titleService, animationsService, translateService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.overlayContainer = overlayContainer;
        this.localStorageService = localStorageService;
        this.titleService = titleService;
        this.animationsService = animationsService;
        this.translateService = translateService;
        this.changeHour = effects_1.createEffect(function () {
            return rxjs_1.interval(60000).pipe(operators_1.mapTo(new Date().getHours()), operators_1.distinctUntilChanged(), operators_1.map(function (hour) { return settings_actions_1.actionSettingsChangeHour({ hour: hour }); }));
        });
        this.persistSettings = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(settings_actions_1.actionSettingsChangeAnimationsElements, settings_actions_1.actionSettingsChangeAnimationsPage, settings_actions_1.actionSettingsChangeAnimationsPageDisabled, settings_actions_1.actionSettingsChangeAutoNightMode, settings_actions_1.actionSettingsChangeLanguage, settings_actions_1.actionSettingsChangeStickyHeader, settings_actions_1.actionSettingsChangeTheme), operators_1.withLatestFrom(_this.store.pipe(store_1.select(core_state_1.selectSettingsState))), operators_1.tap(function (_a) {
                var action = _a[0], settings = _a[1];
                return _this.localStorageService.setItem(exports.SETTINGS_KEY, settings);
            }));
        }, { dispatch: false });
        this.updateRouteAnimationType = effects_1.createEffect(function () {
            return rxjs_1.merge(INIT, _this.actions$.pipe(effects_1.ofType(settings_actions_1.actionSettingsChangeAnimationsElements, settings_actions_1.actionSettingsChangeAnimationsPage))).pipe(operators_1.withLatestFrom(rxjs_1.combineLatest([
                _this.store.pipe(store_1.select(settings_selectors_1.selectPageAnimations)),
                _this.store.pipe(store_1.select(settings_selectors_1.selectElementsAnimations))
            ])), operators_1.tap(function (_a) {
                var action = _a[0], _b = _a[1], pageAnimations = _b[0], elementsAnimations = _b[1];
                return _this.animationsService.updateRouteAnimationType(pageAnimations, elementsAnimations);
            }));
        }, { dispatch: false });
        this.updateTheme = effects_1.createEffect(function () {
            return rxjs_1.merge(INIT, _this.actions$.pipe(effects_1.ofType(settings_actions_1.actionSettingsChangeTheme))).pipe(operators_1.withLatestFrom(_this.store.pipe(store_1.select(settings_selectors_1.selectEffectiveTheme))), operators_1.tap(function (_a) {
                var action = _a[0], effectiveTheme = _a[1];
                var classList = _this.overlayContainer.getContainerElement()
                    .classList;
                var toRemove = Array.from(classList).filter(function (item) {
                    return item.includes('-theme');
                });
                if (toRemove.length) {
                    classList.remove.apply(classList, toRemove);
                }
                classList.add(effectiveTheme);
            }));
        }, { dispatch: false });
        this.setTranslateServiceLanguage = effects_1.createEffect(function () {
            return _this.store.pipe(store_1.select(settings_selectors_1.selectSettingsLanguage), operators_1.distinctUntilChanged(), operators_1.tap(function (language) { return _this.translateService.use(language); }));
        }, { dispatch: false });
        this.setTitle = effects_1.createEffect(function () {
            return rxjs_1.merge(_this.actions$.pipe(effects_1.ofType(settings_actions_1.actionSettingsChangeLanguage)), _this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.ActivationEnd; }))).pipe(operators_1.tap(function () {
                _this.titleService.setTitle(_this.router.routerState.snapshot.root, _this.translateService);
            }));
        }, { dispatch: false });
    }
    SettingsEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            store_1.Store,
            router_1.Router,
            overlay_1.OverlayContainer,
            local_storage_service_1.LocalStorageService,
            title_service_1.TitleService,
            animations_service_1.AnimationsService,
            core_2.TranslateService])
    ], SettingsEffects);
    return SettingsEffects;
}());
exports.SettingsEffects = SettingsEffects;
//# sourceMappingURL=settings.effects.js.map