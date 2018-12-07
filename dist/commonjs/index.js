"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
require("nprogress/nprogress.css");
require("./styles.css");
var aurelia_loading_bar_1 = require("./aurelia-loading-bar");
exports.http = aurelia_loading_bar_1.http;
function configure(aurelia) {
    aurelia.container.registerInstance(aurelia_fetch_client_1.HttpClient, aurelia_loading_bar_1.http);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map