import { HttpClient } from 'aurelia-fetch-client';
import * as nprogress from 'nprogress';
export var http = new HttpClient();
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
//# sourceMappingURL=aurelia-loading-bar.js.map