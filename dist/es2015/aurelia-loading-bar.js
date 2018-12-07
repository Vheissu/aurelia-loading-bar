import { HttpClient } from 'aurelia-fetch-client';
import * as nprogress from 'nprogress';
export const http = new HttpClient();
http.configure(config => {
    config.withInterceptor({
        request(request) {
            nprogress.start();
            return request;
        },
        response(response) {
            nprogress.done();
            return response;
        },
    });
});
//# sourceMappingURL=aurelia-loading-bar.js.map