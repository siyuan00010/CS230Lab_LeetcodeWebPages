import { HttpClient } from "@angular/common/http";
import { UserInfo } from "../user-info/user-info.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class UserInfoService {
      // modifyUserInfo(data: UserInfo) {
      //     throw new Error("Method not implemented.");
      // }
      private baseUrl:string = 'https://leetcode-590a6-default-rtdb.firebaseio.com/';
      private myInfoEndpoint: string = 'myinfo.json';
      constructor(private http:HttpClient){
    
        }
      getUserInfo(){
          console.log(this.baseUrl+this.myInfoEndpoint);
          return this.http.get<UserInfo>(this.baseUrl+this.myInfoEndpoint);
      }  
      modifyUserInfo(data:UserInfo){
        return this.http.put(this.baseUrl+this.myInfoEndpoint, data);
  }
}