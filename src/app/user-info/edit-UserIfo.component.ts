import { Component } from "@angular/core";
import { UserInfo } from "../user-info/user-info.model";
import { UserInfoService } from "../user-info/user-info.service";

@Component({
    selector: 'lc-edit-user-info',
    templateUrl: 'edit-UserInfo.component.html',
})
export class EditUserInfoComponent {
    constructor(private infoService: UserInfoService) {

    }

    onUpdateUserInfo(data: UserInfo) {
        // console.log("You Pressed the Button.");
        // console.log(data);
        this.infoService.modifyUserInfo(data).subscribe((data) =>{
            console.log("Updated information sent to backend. ");
        }
        )
    }
}