import { HttpClient } from 'aurelia-fetch-client';
import 'nprogress/nprogress.css';
import './styles.css';

import { FrameworkConfiguration } from 'aurelia-framework';
import { http } from './aurelia-loading-bar';

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.container.registerInstance(HttpClient, http);
}

export { http };
