import { Component } from "@angular/core";
@Component({
    selector: 'lc-signin',
    templateUrl:'signin.component.html',
})
export class SigninComponent{
    imglc: string;

    constructor() {
        this.imglc = "https://leetcode.com/static/images/LeetCode_logo.png";
    }


}