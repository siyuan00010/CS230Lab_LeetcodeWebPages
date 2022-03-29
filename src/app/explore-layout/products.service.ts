// Creat a service component to store backend info
//import { HttpClient } from "@angular/common/http";
import { exploreCate } from "./explore-item.model";
import { Injectable} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  items: Observable<Object[]>
  constructor(private db: AngularFireDatabase) {
    // console.log("Setting up Fire Communication")
    this.items = this.db.list<exploreCate>('exploreCate').valueChanges();
  }
  public getProducts() {
    return this.db.list<exploreCate>("exploreCate").valueChanges();
  }
  public showData(){
    this.items.subscribe((data) => {
      console.log("Data Recieved");
      for (let item of data){
        console.log(item);
      }
    })
  }

}
/*use httpClient to read data from backend*/ 
// export class ProductsService{
//   private baseUrl:string='https://leetcode-590a6-default-rtdb.firebaseio.com/exploreCategory/';
//   private productsEndPoint:string='Featured.json';
// //get product info from backend
//   constructor(private http:HttpClient){

//   }
//   public getProducts() {
//     return this.http.get<exploreCate []>(this.baseUrl + this.productsEndPoint);
//    
//   }
//   public getProduct(index: number) {
//     return this.http.get<exploreCate>(this.baseUrl + 'Featured' + index + '.json');

//   }
  
//   }
  
  
  
