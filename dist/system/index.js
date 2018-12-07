System.register(["aurelia-fetch-client", "nprogress/nprogress.css", "./styles.css", "./aurelia-loading-bar"], function (exports_1, context_1) {
    "use strict";
    var aurelia_fetch_client_1, aurelia_loading_bar_1;
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.container.registerInstance(aurelia_fetch_client_1.HttpClient, aurelia_loading_bar_1.http);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (aurelia_loading_bar_1_1) {
                aurelia_loading_bar_1 = aurelia_loading_bar_1_1;
            }
        ],
        execute: function () {
            exports_1("http", aurelia_loading_bar_1.http);
        }
    };
});
//# sourceMappingURL=index.js.map