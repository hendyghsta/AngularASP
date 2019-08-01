"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_store_1 = require("@ngrx/router-store");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var store_devtools_1 = require("@ngrx/store-devtools");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var environment_1 = require("../../environments/environment");
var core_state_1 = require("./core.state");
exports.selectRouterState = core_state_1.selectRouterState;
var auth_effects_1 = require("./auth/auth.effects");
var auth_selectors_1 = require("./auth/auth.selectors");
exports.selectIsAuthenticated = auth_selectors_1.selectIsAuthenticated;
exports.selectAuth = auth_selectors_1.selectAuth;
var auth_actions_1 = require("./auth/auth.actions");
exports.authLogin = auth_actions_1.authLogin;
exports.authLogout = auth_actions_1.authLogout;
var auth_guard_service_1 = require("./auth/auth-guard.service");
exports.AuthGuardService = auth_guard_service_1.AuthGuardService;
var title_service_1 = require("./title/title.service");
exports.TitleService = title_service_1.TitleService;
var route_animations_1 = require("./animations/route.animations");
exports.ROUTE_ANIMATIONS_ELEMENTS = route_animations_1.ROUTE_ANIMATIONS_ELEMENTS;
exports.routeAnimations = route_animations_1.routeAnimations;
var animations_service_1 = require("./animations/animations.service");
exports.AnimationsService = animations_service_1.AnimationsService;
var app_error_handler_service_1 = require("./error-handler/app-error-handler.service");
var custom_serializer_1 = require("./router/custom-serializer");
var local_storage_service_1 = require("./local-storage/local-storage.service");
exports.LocalStorageService = local_storage_service_1.LocalStorageService;
var http_error_interceptor_1 = require("./http-interceptors/http-error.interceptor");
var google_analytics_effects_1 = require("./google-analytics/google-analytics.effects");
var notification_service_1 = require("./notifications/notification.service");
exports.NotificationService = notification_service_1.NotificationService;
var settings_effects_1 = require("./settings/settings.effects");
var settings_selectors_1 = require("./settings/settings.selectors");
exports.selectSettingsLanguage = settings_selectors_1.selectSettingsLanguage;
exports.selectEffectiveTheme = settings_selectors_1.selectEffectiveTheme;
exports.selectSettingsStickyHeader = settings_selectors_1.selectSettingsStickyHeader;
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, environment_1.environment.i18nPrefix + "/assets/i18n/", '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                // angular
                common_1.CommonModule,
                http_1.HttpClientModule,
                // ngrx
                store_1.StoreModule.forRoot(core_state_1.reducers, { metaReducers: core_state_1.metaReducers }),
                router_store_1.StoreRouterConnectingModule.forRoot(),
                effects_1.EffectsModule.forRoot([
                    auth_effects_1.AuthEffects,
                    settings_effects_1.SettingsEffects,
                    google_analytics_effects_1.GoogleAnalyticsEffects
                ]),
                environment_1.environment.production
                    ? []
                    : store_devtools_1.StoreDevtoolsModule.instrument({
                        name: 'Angular NgRx Material Starter'
                    }),
                // 3rd party
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            declarations: [],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: http_error_interceptor_1.HttpErrorInterceptor, multi: true },
                { provide: core_1.ErrorHandler, useClass: app_error_handler_service_1.AppErrorHandler },
                { provide: router_store_1.RouterStateSerializer, useClass: custom_serializer_1.CustomSerializer }
            ],
            exports: [core_2.TranslateModule]
        }),
        tslib_1.__param(0, core_1.Optional()),
        tslib_1.__param(0, core_1.SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map