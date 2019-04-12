import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './tools.component.html',
  selector: 'app-tools',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  modalRef: BsModalRef;
  products: Product[];
  productStruc: ProductStruc = new ProductStruc();
  errorMsgStruc: ErrorMsgStruc = new ErrorMsgStruc();
  productId: string;
  product: Product;
  productReturn: boolean = false;


  constructor(
    private productService : ProductService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.productService.findAll().then(
      res => {
        this.products = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSave() {
    this.errorMsgStruc.name = this.errorMsgStruc.price = '';
    !this.productStruc.name ? this.errorMsgStruc.name = 'Name required' : '';
    !this.productStruc.price ? this.errorMsgStruc.price = 'Price required' : '';

    if (this.productStruc.name || this.productStruc.price) {
      this.productStruc = {
        ...this.productStruc,
        'status': true
      };
      this.productService.createProduct(this.productStruc).subscribe(res => {
        this.modalRef.hide();
        console.log(res);
      }, error => {
        console.log(error);
      });
    }

  }

  onSearch() {
    if (this.productId) {
      console.log(this.productId);
      this.productService.find(this.productId).then(res => {
        this.product = res;
        this.productReturn = true;
        console.log(res);
      }, error => { 
        console.log(error);
      });
    } else {
      this.ngOnInit();
    }
  }

  onDelete(id: string) {
    console.log(id);
      // this.productService.find(this.productId).then(res => {
      //   this.product = res;
      //   this.productReturn = true;
      //   console.log(res);
      // }, error => { 
      //   console.log(error);
      // });
  }

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template);
  }

}

class ProductStruc {
    id: string;
    name: string;
    price: number;
    status: boolean;
}

class ErrorMsgStruc {
  name: string;
  price: string;
}