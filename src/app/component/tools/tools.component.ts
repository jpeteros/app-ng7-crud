import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  modalRef: BsModalRef;
  products: Product[];

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

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
