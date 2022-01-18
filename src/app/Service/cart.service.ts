import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  // public producList = new BehaviorSubject<any>([])
  cartSubject = new BehaviorSubject<any>([]);

  constructor() {}

  // getProfile(){
  //  return this.producList.asObservable();
  // }
  // setProfile(product:any){
  //   this.cartItemList.push(...product);
  //   this.producList.next(product);
  // }
  // addtoCart(product:any){
  //   this.cartItemList.push(product);
  //   this.producList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList);
  // }
  // getTotalPrice() : number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any)=>{
  //     // grandTotal +=     Number.parseFloat(a.productPrice);
  //     // Number.parseFloat
  //     var s1 = a.productPrice;
  //     var s2 = Number.parseInt(s1.substring(1));

  //     // console.log('price : ',s2);

  //     grandTotal+= s2;
  //   });
  //   // console.log("...",grandTotal);

  //   return grandTotal;
  // }
  // removeCartItem(product:any){
  //   this.cartItemList.map((a:any,index:any)=>{
  //     if(product.id === a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  //   this.producList.next(this.cartItemList);
  // }
  // removeAllCart(){
  //   this.cartItemList = [];
  //   this.producList.next(this.cartItemList);
  // }
}
