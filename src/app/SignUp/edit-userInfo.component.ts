import { Component} from "@angular/core";
import { DatabaseService } from "../user-info/database.service";
import { UserInfo } from "../user-info/user-info.model";
import { UserInfoService } from "../user-info/user-info.service";


@Component({
    selector: 'lc-edit-userInfo',
    templateUrl: 'signup.component.html',
})
export class EditUserInfoComponent{

    constructor(private InfoService:UserInfoService, private dbService:DatabaseService) {
      dbService.showData();

    }

    onUpdateUserInfo(data:UserInfo){
        this.InfoService.modifyUserInfo(data).subscribe(data => {
            console.log("Data send to backend")
        })
        }
}