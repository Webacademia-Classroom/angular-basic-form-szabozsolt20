import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
  ],
  templateUrl: './shop-edit.component.html',
  styleUrl: './shop-edit.component.scss'
})
export class ShopEditComponent implements OnInit {
  @Input({transform: numberAttribute}) id!: number;

  productService = inject(ProductService);

  product$: Observable<Product> = of(new Product());

  ngOnInit(): void {
    if (this.id) {
      this.product$ = this.productService.get(this.id);
    }
  }
}
