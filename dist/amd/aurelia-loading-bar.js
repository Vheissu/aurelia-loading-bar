define(["require", "exports", "aurelia-fetch-client", "nprogress"], function (require, exports, aurelia_fetch_client_1, nprogress) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.http = new aurelia_fetch_client_1.HttpClient();
    exports.http.configure(function (config) {
        config.withInterceptor({
            request: function (request) {
                nprogress.start();
                return request;
            },
            response: function (response) {
                nprogress.done();
                return response;
            },
        });
    });
});
//# sourceMappingURL=aurelia-loading-bar.js.map