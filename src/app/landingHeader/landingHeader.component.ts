import { Component } from "@angular/core";

@Component({
    selector: 'lc-landingHeader',
    templateUrl:'landingHeader.component.html',
    styleUrls:['landingHeader.component.css']
})
export class LandingHeaderComponent{
    imglc: string;
    
    constructor(){
        this.imglc = "https://leetcode.com/static/images/LeetCode_logo_rvs.png";
    }
}