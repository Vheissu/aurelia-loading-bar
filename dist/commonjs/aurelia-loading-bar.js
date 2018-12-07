"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var nprogress = require("nprogress");
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
//# sourceMappingURL=aurelia-loading-bar.js.map