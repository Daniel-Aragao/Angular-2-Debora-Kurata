import {Component, OnInit} from '@angular/core'
import {RouteParams, Router} from '@angular/router-deprecated'
import {ProductService} from './product.service'
import {IProduct} from './product'
import {StarComponent} from '../shared/star.component/star.component'


@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives:[StarComponent]
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product Detail";
    product: IProduct;
    _id: number;
    errorMessage: string;

    constructor(private _routeParams: RouteParams,
        private _router: Router,
        private _productService: ProductService) {
        
        this._id = +this._routeParams.get('id');
        this.pageTitle += `: ${this._id}`;        
    }

    ngOnInit(): void{
       if (!this.product) {            
           this.getProduct(this._id);
       }
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void{
        this._router.navigate(['Products'])
    }
}