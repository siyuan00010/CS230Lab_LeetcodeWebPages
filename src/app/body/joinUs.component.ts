import { Component } from "@angular/core";

@Component({
    selector: 'lc-joinUs',
    templateUrl:'joinUs.component.html',
})
export class joinUsComponent{
    imgFB: string;
    imgLM: string;
    imgAP: string;
    imgUB: string;
    imgSS: string;
    imgJt: string;
    imgAz: string;
    imgBoA: string;
    imgIt: string;
    imgPin: string;
    imgCis: string;
    imgStr: string;

    constructor(){
        this.imgAP = 'https://leetcode.com/static/images/landing_page/apple.svg';
        this.imgFB = 'https://leetcode.com/static/images/landing_page/facebook.svg';
        this.imgLM = 'https://leetcode.com/static/images/landing_page/leap-motion.svg';
        this.imgUB = 'https://leetcode.com/static/images/landing_page/uber.svg';
        this.imgSS = 'https://leetcode.com/static/images/landing_page/squarespace.svg';
        this.imgJt = 'https://leetcode.com/static/images/landing_page/jet.svg';
        this.imgAz = 'https://leetcode.com/static/images/landing_page/amazon.svg';
        this.imgIt = 'https://leetcode.com/static/images/landing_page/intel.svg';
        this.imgBoA = 'https://leetcode.com/static/images/landing_page/bank-of-america.svg';
        this.imgPin = 'https://leetcode.com/static/images/landing_page/pinterest.svg';
        this.imgCis = 'https://leetcode.com/static/images/landing_page/cisco.svg';
        this.imgStr = 'https://leetcode.com/static/images/landing_page/stripe.svg';
    }
}