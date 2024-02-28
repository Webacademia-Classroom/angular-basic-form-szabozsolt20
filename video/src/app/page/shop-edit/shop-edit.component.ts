import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shop-edit',
  standalone: true,
  imports: [],
  templateUrl: './shop-edit.component.html',
  styleUrl: './shop-edit.component.scss'
})
export class ShopEditComponent implements OnInit {
  @Input({transform: numberAttribute}) id: number;

  productService = inject(ProductService);

  ngOnInit(): void {

  }
}
