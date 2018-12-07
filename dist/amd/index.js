define(["require", "exports", "aurelia-fetch-client", "./aurelia-loading-bar", "nprogress/nprogress.css", "./styles.css"], function (require, exports, aurelia_fetch_client_1, aurelia_loading_bar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.http = aurelia_loading_bar_1.http;
    function configure(aurelia) {
        aurelia.container.registerInstance(aurelia_fetch_client_1.HttpClient, aurelia_loading_bar_1.http);
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map