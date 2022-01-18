import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any = [];
  // public product:any=[];
  public grandTotal: number = 0;
  // public length!:number;
  public getCartDeltails: any = [];
  username: any;
  constructor(private cartservice: CartService, private auth: AuthService) {}
  ngOnInit(): void {
    this.cartservice.cartSubject.subscribe((ress: any) => {
      console.log('ressa', ress);
      this.getCartDeltails = ress;
      console.log('getCartDeltails', this.getCartDeltails);
      //call api auth get user
      this.auth.login(this.user).subscribe();
    });
    this.cartDetails();
    this.totalMoney();
    this.username = localStorage.getItem('username');
  }
  deleteItem(item: any) {
    console.log('idItem', item);
    let dataLocal: any = localStorage.getItem('item');
    console.log('dataLocal', dataLocal);
    this.getCartDeltails = JSON.parse(dataLocal);
    const isFilter = this.getCartDeltails.filter((e: any, index: any) => {
      return index !== item;
    });
    console.log('isFilter', isFilter);
    this.getCartDeltails.splice(isFilter);
  }
  cartDetails() {
    let local: any = localStorage.getItem('item');
    if (local) {
      this.getCartDeltails = JSON.parse(local);
      console.log('getCartDeltail', this.getCartDeltails);
    }
  }
  totalMoney() {
    let totalPrice: any = localStorage.getItem('item');
    let abcd = JSON.parse(totalPrice);
    abcd = this.getCartDeltails.map((i: any) => {
      return Number(i.productPrice);
    });
    console.log('totalPrice', abcd);
    let abc = abcd.reduce(function (a: any, b: any) {
      return a + b;
    }, 0);
    this.grandTotal = abc;
  }
}
