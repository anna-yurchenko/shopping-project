import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item: any

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log("added to cart")
  }

}
