import { Component } from "@angular/core";
@Component({
    selector: 'lc-ft',
    templateUrl:'landingft.component.html',
    styleUrls:['landingft.component.css']
})
export class landingFooterComponent{
    img: string;

    constructor() {
        this.img = "https://leetcode.com/static/images/region/us.svg";
    }

}