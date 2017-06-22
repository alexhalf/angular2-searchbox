import { API, Search } from 'angular2-searchbox';
export declare class AppComponent {
    operators: Search.Operator[];
    selectors: Search.Selector[];
    tybFilters: Search.AvailableFilter[];
    tybConfig: Search.Configuration;
    register(api: API): void;
}
