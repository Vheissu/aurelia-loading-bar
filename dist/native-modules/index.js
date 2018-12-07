import { HttpClient } from 'aurelia-fetch-client';
import 'nprogress/nprogress.css';
import './styles.css';
import { http } from './aurelia-loading-bar';
export function configure(aurelia) {
    aurelia.container.registerInstance(HttpClient, http);
}
export { http };
//# sourceMappingURL=index.js.map