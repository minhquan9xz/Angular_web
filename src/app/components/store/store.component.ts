import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../Service/product.service';
import {
  MessageService,
  ConfirmationService,
  PrimeNGConfig,
} from 'primeng/api';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [MessageService],
})
export class StoreComponent implements OnInit {
  product: Product[] = [];
  category: any;
  brand: any;
  productName: any;
  totalLength: any;
  page: number = 2;
  teampArray: any = [];
  newArray: any = [];
  arrays: any = [];
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res: any) => {
      this.product = res;
      this.arrays = res;
      this.totalLength = res.length;
      this.productService.getCategory().subscribe((re: any) => {
        this.category = re;
        this.productService.getBrand().subscribe((r: any) => {
          this.brand = r;
        });
      });
    });
    // this.primengConfig.ripple = true;
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Thông báo',
      detail: 'Đã thêm vào giỏ hàng',
    });
  }

  Search() {
    if (this.productName == '') {
      this.ngOnInit();
    } else {
      this.product = this.product.filter((res: any) => {
        return res.productName
          .toLowerCase()
          .match(this.productName.toLowerCase());
      });
    }
  }
  //   onChange(event:any){
  //     if(event.target.checked){
  //       console.log(event.target.checked);
  // this.teampArray = this.arrays.filter((e:any)=>{
  //   console.log(e);
  //   e.id==event.target.value
  //   console.log(e.id);
  //   console.log(event.target.value);
  //   console.log(this.teampArray);

  // })
  // this.product =[];
  // this.newArray.push(this.teampArray)
  // console.log(this.newArray);

  // for(let i=0; i<this.newArray.length; i++){
  //   var firstArray = this.newArray[i];
  //   for(let i=0; i<firstArray.length; i++){
  //     var obj = firstArray[i]
  //     this.product.push(obj)
  //   }
  // }
  //     }
  //     else{
  //       this.teampArray = this.product.filter((e:any)=>e.id!=event.target.value);
  //       this.newArray=[];
  //       this.product = [];
  //       this.newArray.push(this.teampArray);
  //     }

  //   }
}
