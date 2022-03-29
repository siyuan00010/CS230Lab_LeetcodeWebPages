import { Component } from "@angular/core";
@Component({
    selector: 'lc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent{
    img: string;

    constructor() {
        this.img = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg";
    }
}