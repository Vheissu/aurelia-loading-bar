System.register(["aurelia-fetch-client", "nprogress"], function (exports_1, context_1) {
    "use strict";
    var aurelia_fetch_client_1, nprogress, http;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (nprogress_1) {
                nprogress = nprogress_1;
            }
        ],
        execute: function () {
            exports_1("http", http = new aurelia_fetch_client_1.HttpClient());
            http.configure(function (config) {
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
        }
    };
});
//# sourceMappingURL=aurelia-loading-bar.js.map