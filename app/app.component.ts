import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component.ts';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives: [ProductListComponent]
})

export class AppComponent{
    pageTitle: string = 'Acme Product Management'
}