import { Component } from "@angular/core";
@Component({
    selector: 'lc-footer',
    templateUrl:'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent{
    img: string;

    constructor() {
        this.img = "https://leetcode.com/static/images/region/us.svg";
    }

}