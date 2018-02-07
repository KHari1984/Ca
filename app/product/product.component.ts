import{Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';


@Component({
    selector:'edu-product',
    templateUrl:'app/product/product.component.html'
    
})
export class ProductComponent implements OnInit
{
    
    pageTitle:string='Cars'   
    products:IProduct[];   
    errorMessage:string;    
    selectedProduct: IProduct;
    
    constructor(private ProductService: ProductService) { }
   
    ngOnInit():void{
        this.ProductService.getProducts()
             .subscribe(products =>this.products = products,
                     error=> this.errorMessage=<any>error)
     }
 

    onSelect(prod:IProduct):void{
        this.selectedProduct= prod;
    }
   
    
    

    
}