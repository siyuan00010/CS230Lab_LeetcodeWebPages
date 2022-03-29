import { Component } from "@angular/core";
@Component({
    selector: 'lc-problemSet',
    templateUrl:'problemSet.component.html',
})
export class ProblemSetComponent{
    img1: string;
    img2: string;
    img3 : string;
    imgcslfb: string;
    imgcslf: string;
    imgOI: string;
    imgAssess: string;
    constructor() {
        this.img1 = "https://assets.leetcode.com/users/images/ecd95b0f-8b72-4996-825d-c5ec5b9f02fa_1642233920.9738734.png";
        this.img2 = "https://assets.leetcode.com/users/images/8375d35c-7090-4814-8884-ab1788526b4e_1644629529.1573594.png";
        this.img3 = "https://assets.leetcode.com/users/images/46bbe046-6030-45ee-b6cb-f334d02db90f_1624653186.6738565.png";
        this.imgcslfb = "https://leetcode.com/static/images/facebook_bloomberg.png";
        this.imgcslf = "https://leetcode.com/static/images/facebook.png";
        this.imgOI = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/online-interview.bdc7e113a.png";
        this.imgAssess = "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/mock-assessment.b7bc636b4.png";
    }

}
