import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component.ts';
import {ProductService} from './products/product.service'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Management'
}