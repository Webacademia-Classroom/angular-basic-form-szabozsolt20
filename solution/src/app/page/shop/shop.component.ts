import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  productService = inject(ProductService);

  list: Product[] = this.productService.list;
}
