import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log("Button clicked");
    console.log(data);
  }
}
