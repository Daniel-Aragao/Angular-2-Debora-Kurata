import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; //Load all features
import {ROUTER_PROVIDERS, Routes} from '@angular/router';

import {ProductListComponent} from './products/product-list.component.ts';
import {ProductService} from './products/product.service';
import {WelcomeComponent} from './home/welcome.component'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})

@Routes([
    {path:'/', component:WelcomeComponent},
    {path:'/welcome', component: WelcomeComponent },
    {path:'/products', component:ProductListComponent}
])

export class AppComponent{
    pageTitle: string = 'Acme Product Management'
}