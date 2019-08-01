"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    CustomSerializer = tslib_1.__decorate([
        core_1.Injectable()
    ], CustomSerializer);
    return CustomSerializer;
}());
exports.CustomSerializer = CustomSerializer;
//# sourceMappingURL=custom-serializer.js.map