import { Component, OnInit } from "@angular/core";
//import { mock_product_list } from "./mock_product_list";
import { exploreCate } from "./explore-item.model"
import { ProductsService } from "./products.service";


@Component({
    selector: 'lc-explore-layout',
    templateUrl: 'explore-layout.component.html',
})
export class ExploreLayoutComponent implements OnInit {
    products: exploreCate[] = [];
    constructor(private productsService:ProductsService, private dbService:ProductsService) {
      dbService.showData();

    }
    ngOnInit(): void {
        this.productsService.getProducts().subscribe((data: exploreCate[]) => {
                    console.log("Fetching product data");
                    console.log(data);
                    for (var product of data) {
                        console.log(product);
                        this.products.push(product);
                    }
                
            
        })
    }
}
//data read using HttpClient
    // products: exploreCate[] = [];
    // constructor(private productsService: ProductsService) {
    //     // for (var product of mock_product_list) {
    //     //     console.log(product);
    //     //     this.products.push(product);
    //     // }
    // }
    // ngOnInit(): void {
    //     //throw new Error("Method not implemented.");
    //     this.productsService.getProducts().subscribe((data: exploreCate[]) => {
    //         console.log("Fetching product data");
    //         console.log(data);
    //         for (var product of data) {
    //             console.log(product);
    //             this.products.push(product);
    //         }

    //     })

    // }}


