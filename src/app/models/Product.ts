export class Product{
id:string;
productImg:string;
productCategory:string;
productName:string;
productPrice:string;
constructor(id:any,productImg:any,productCategory:any,productName:any,productPrice:any){
    this.id = id;
    this.productImg = productImg;
    this.productCategory = productCategory;
    this.productName = productName;
    this.productPrice = productPrice;
}
}