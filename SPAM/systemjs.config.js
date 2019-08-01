/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'src',

            // angular
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/core/src': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/core/src/render3': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

            // angular material
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/material/core': 'npm:@angular/material/bundles/material-core.umd.js',
            '@angular/material/form-field': 'npm:@angular/material/bundles/material-form-field.umd.js',
            '@angular/material/dialog': 'npm:@angular/material/bundles/material-dialog.umd.js',
            '@angular/material/button': 'npm:@angular/material/bundles/material-button.umd.js',
            '@angular/material/toolbar': 'npm:@angular/material/bundles/material-toolbar.umd.js',
            '@angular/material/menu': 'npm:@angular/material/bundles/material-menu.umd.js',
            '@angular/material/select': 'npm:@angular/material/bundles/material-select.umd.js',
            '@angular/material/tabs': 'npm:@angular/material/bundles/material-tabs.umd.js',
            '@angular/material/input': 'npm:@angular/material/bundles/material-input.umd.js',
            '@angular/material/progress-spinner': 'npm:@angular/material/bundles/material-progress-spinner.umd.js',
            '@angular/material/chips': 'npm:@angular/material/bundles/material-chips.umd.js',
            '@angular/material/sidenav': 'npm:@angular/material/bundles/material-sidenav.umd.js',
            '@angular/material/checkbox': 'npm:@angular/material/bundles/material-checkbox.umd.js',
            '@angular/material/card': 'npm:@angular/material/bundles/material-card.umd.js',
            '@angular/material/icon': 'npm:@angular/material/bundles/material-icon.umd.js',
            '@angular/material/tooltip': 'npm:@angular/material/bundles/material-tooltip.umd.js',
            '@angular/material/snack-bar': 'npm:@angular/material/bundles/material-snack-bar.umd.js',
            '@angular/material/divider': 'npm:@angular/material/bundles/material-divider.umd.js',
            '@angular/material/datepicker': 'npm:@angular/material/bundles/material-datepicker.umd.js',
            '@angular/material/slide-toggle': 'npm:@angular/material/bundles/material-slide-toggle.umd.js',
            '@angular/material/list': 'npm:@angular/material/bundles/material-list.umd.js',

            // angular cdk
            '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
            '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
            '@angular/cdk/accordion': 'npm:@angular/cdk/bundles/cdk-accordion.umd.js',
            '@angular/cdk/bidi': 'npm:/@angular/cdk/bundles/cdk-bidi.umd.js',
            '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
            '@angular/cdk/collections': 'npm:@angular/cdk/bundles/cdk-collections.umd.js',
            '@angular/cdk/keycodes': 'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
            '@angular/cdk/layout': 'npm:@angular/cdk/bundles/cdk-layout.umd.js',
            '@angular/cdk/observers': 'npm:@angular/cdk/bundles/cdk-observers.umd.js',
            '@angular/cdk/overlay': 'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
            '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
            '@angular/cdk/portal': 'npm:@angular/cdk/bundles/cdk-portal.umd.js',
            '@angular/cdk/scrolling': 'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
            '@angular/cdk/stepper': 'npm:@angular/cdk/bundles/cdk-stepper.umd.js',
            '@angular/cdk/table': 'npm:@angular/cdk/bundles/cdk-table.umd.js',
            '@angular/cdk/text-field': 'npm:@angular/cdk/bundles/cdk-text-field.umd.js',
            '@angular/cdk/tree': 'npm:@angular/cdk/bundles/cdk-tree.umd.js',

            //ng
            '@ngx-translate/core': 'npm:@ngx-translate/core/bundles/ngx-translate-core.umd.js',
            '@ngx-translate/http-loader': 'npm:@ngx-translate/http-loader/bundles/ngx-translate-http-loader.umd.js',
            '@ngrx/effects': 'npm:@ngrx/effects/bundles/effects.umd.js',
            '@ngrx/entity': 'npm:@ngrx/entity/bundles/entity.umd.js',
            '@ngrx/router-store': 'npm:@ngrx/router-store/bundles/router-store.umd.js',
            '@ngrx/store': 'npm:@ngrx/store/bundles/store.umd.js',
            '@ngrx/store-devtools': 'npm:@ngrx/store-devtools/bundles/store-devtools.umd.js',

            //fontawesome
            '@fortawesome/angular-fontawesome': 'npm:@fortawesome/angular-fontawesome/bundles/angular-fontawesome.umd.js',
            '@fortawesome/fontawesome-svg-core': 'npm:@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons': 'npm:@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons': 'npm:@fortawesome/free-solid-svg-icons',


            // other libraries
            'rxjs': 'npm:rxjs',
            'rxjs/operators': 'npm:rxjs/operators',
            'rxjs-compat':'npm:rxjs-compat',
            'tslib': 'npm:tslib/tslib.js',
            'moment': 'npm:moment/moment.js',
            'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-currency-mask': 'npm:ng2-currency-mask',
            'browser-detect': 'npm:browser-detect/dist/browser-detect.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            'rxjs': {main: 'index.js',defaultExtension: 'js'},
            'rxjs/operators':{main: 'index.js',defaultExtension: 'js'},
            'rxjs-compat': {main: 'index.js',defaultExtension: 'js'},
            'ng2-currency-mask': { main: 'index.js', defaultExtension: 'js' },
            '@fortawesome/fontawesome-svg-core': { main: 'index.js', defaultExtension: 'js' },
            '@fortawesome/free-brands-svg-icons':{ main: 'index.js', defaultExtension: 'js' },
            '@fortawesome/free-solid-svg-icons': { main: 'index.js', defaultExtension: 'js' },
            '@angular/material': { format:'cjs', defaultExtension:'js' }
        }
    });
})(this);
