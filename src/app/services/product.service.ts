import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService{
    
    private BASE_URL : string = "http://localhost:3000/api/product/";
    
    constructor(
        private httpClient : HttpClient
    ){}

    findAll(){
        return this.httpClient.get(this.BASE_URL+ 'findAll')
            .toPromise()
            .then(res => res as Product[])
    }

}
