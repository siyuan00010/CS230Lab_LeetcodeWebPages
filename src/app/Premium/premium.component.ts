import { Component } from "@angular/core";
@Component({
    selector: 'lc-premium',
    templateUrl:'premium.component.html',
})
export class PremiumComponent{
    img1: string;
    img2: string;
    imgcsla : string;
    imgcslfb: string;
    imgcslf: string;
    imgOI: string;
    imgAssess: string;
    constructor() {
        this.img1 = "https://leetcode.com/static/images/LeetCode_logo.png";
        this.img2 = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg";
        this.imgcsla = "https://leetcode.com/static/images/amazon.png";
        this.imgcslfb = "https://leetcode.com/static/images/facebook_bloomberg.png";
        this.imgcslf = "https://leetcode.com/static/images/facebook.png";
        this.imgOI = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/online-interview.bdc7e113a.png";
        this.imgAssess = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/mock-assessment.b7bc636b4.png";
    }

}