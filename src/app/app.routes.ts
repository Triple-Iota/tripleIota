import {RouterConfig, provideRouter} from '@angular/router'
import {LandingPage} from './landing'

const routes:RouterConfig = [
    {
        path: '',
        component: LandingPage
    }
];

export const appRouterProviders = [
    provideRouter(routes)
]