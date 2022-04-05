import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { UserInfo } from "./user-info.model";

@Injectable({
    providedIn: 'root'
  })
  export class DatabaseService {
    items: Observable<UserInfo []>;
    constructor(private db:AngularFireDatabase){
        console.log("Setting up firebase communication")
    this.items = this.db.list<UserInfo>('myinfo').valueChanges();
    console.log()
  }
    
   
    public showData(){
      this.items.subscribe((data: UserInfo []) => {
        console.log("Data Recieved");         
          for (let item of data){
            console.log(item);
          }
      })
    }
  }