"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var material_1 = require("@angular/material");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faBars, free_solid_svg_icons_1.faUserCircle, free_solid_svg_icons_1.faPowerOff, free_solid_svg_icons_1.faCog, free_solid_svg_icons_1.faRocket, free_solid_svg_icons_1.faPlayCircle, free_brands_svg_icons_1.faGithub, free_brands_svg_icons_1.faMediumM, free_brands_svg_icons_1.faTwitter, free_brands_svg_icons_1.faInstagram, free_brands_svg_icons_1.faYoutube, free_solid_svg_icons_1.faPlus, free_solid_svg_icons_1.faEdit, free_solid_svg_icons_1.faTrash, free_solid_svg_icons_1.faTimes, free_solid_svg_icons_1.faCaretUp, free_solid_svg_icons_1.faCaretDown, free_solid_svg_icons_1.faExclamationTriangle, free_solid_svg_icons_1.faFilter, free_solid_svg_icons_1.faTasks, free_solid_svg_icons_1.faCheck, free_solid_svg_icons_1.faSquare, free_solid_svg_icons_1.faLanguage, free_solid_svg_icons_1.faPaintBrush, free_solid_svg_icons_1.faLightbulb, free_solid_svg_icons_1.faWindowMaximize, free_solid_svg_icons_1.faStream, free_solid_svg_icons_1.faBook);
var big_input_component_1 = require("./big-input/big-input/big-input.component");
var big_input_action_component_1 = require("./big-input/big-input-action/big-input-action.component");
var rtl_support_directive_1 = require("./rtl-support/rtl-support.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.TranslateModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatSelectModule,
                material_1.MatTabsModule,
                material_1.MatInputModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatChipsModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatCheckboxModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule,
                material_1.MatSnackBarModule,
                material_1.MatSlideToggleModule,
                material_1.MatDividerModule,
                angular_fontawesome_1.FontAwesomeModule
            ],
            declarations: [
                big_input_component_1.BigInputComponent,
                big_input_action_component_1.BigInputActionComponent,
                rtl_support_directive_1.RtlSupportDirective
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatChipsModule,
                material_1.MatInputModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatCheckboxModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatListModule,
                material_1.MatSelectModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule,
                material_1.MatSnackBarModule,
                material_1.MatSlideToggleModule,
                material_1.MatDividerModule,
                material_1.MatSliderModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                angular_fontawesome_1.FontAwesomeModule,
                big_input_component_1.BigInputComponent,
                big_input_action_component_1.BigInputActionComponent,
                rtl_support_directive_1.RtlSupportDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map