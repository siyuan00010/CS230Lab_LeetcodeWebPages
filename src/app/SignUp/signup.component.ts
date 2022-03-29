import { Component } from "@angular/core";
@Component({
    selector: 'lc-signup',
    templateUrl:'signup.component.html',
})
export class SignupComponent{
    imglc: string;

    constructor() {
        this.imglc = "https://leetcode.com/static/images/LeetCode_logo.png";
    }


}