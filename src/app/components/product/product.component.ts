import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product: any = [];
  data: any;
  itemCart: any = [];
  constructor(
    private productService: ProductService,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      console.log('data', data);
      this.product = data;
    });
    this.data = localStorage.getItem('item');
  }
  addtoCart(item: any) {
    const cart: any = localStorage.getItem('item');
    if (JSON.parse(cart)) {
      const abc = JSON.parse(cart);
      const isFilter = abc.filter((i: any) => i.id !== item.id);
      console.log('isFilter', isFilter);
      if (isFilter.length > 0) {
        localStorage.removeItem('item');
        abc.push(item);
        localStorage.setItem('item', JSON.stringify(abc));
        // localStorage.getItem('item',this.cartservice.addtoCart(item))
      }
    } else {
      localStorage.setItem('item', JSON.stringify([item]));
    }
    this.cartNumberFunc();
    // console.log(prod);
    // let cartDataNull = localStorage.getItem('localCart')
    // if(cartDataNull ==null){
    //   let storeDataGet:any=[];
    //   storeDataGet.push(prod);
    //   localStorage.setItem('localCart', JSON.stringify(storeDataGet))
    // }
    // else{
    //   var id = prod.id;
    //   let index:number=-1;
    //   this.itemCart = JSON.parse(cartDataNull);
    //   for(let i=0;i<this.itemCart.length; i++){
    //     if(parseInt(id) === parrseInt(this.itemCart[i].id)
    //   }
    // }
    // localStorage.setItem('localCart',JSON.stringify(prod));
  }
  cartNumber: number = 0;
  productList: any;
  cartNumberFunc() {
    let dataLocal: any = localStorage.getItem('item');
    var cartValue = JSON.parse(dataLocal);
    this.productList = cartValue;
    console.log('cartvalue', cartValue);
    // this.cartNumber = cartValue.length;
    // this.cartservice.cartSubject.next(this.cartNumber);
    this.cartservice.cartSubject.next(this.productList);
    console.log('thisProductList', this.productList);
  }
}
