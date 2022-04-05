import { Component} from "@angular/core";
import { DatabaseService } from "../user-info/database.service";
import { UserInfo } from "../user-info/user-info.model";
import { UserInfoService } from "../user-info/user-info.service";


@Component({
    selector: 'lc-signup',
    templateUrl:'signup.component.html',
})
export class SignupComponent{
    imglc: string;
        
    constructor(private InfoService:UserInfoService, private dbService:DatabaseService) {
        
        this.imglc = "https://leetcode.com/static/images/LeetCode_logo.png";
        dbService.showData();
  
      }
  
      onUpdateUserInfo(data:UserInfo){
          this.InfoService.modifyUserInfo(data).subscribe(data => {
              console.log("Data send to backend")
          })
          }


}