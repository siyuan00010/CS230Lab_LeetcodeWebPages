import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { authResponse } from './authResponse';

@Component({
  selector: 'lc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent{
  public buttonClicked!:string;
  private authObservable!: Observable<authResponse>;
  constructor(private authService:AuthenticationService) { }

  public onSubmit(data:NgForm){
    console.log("Button clicked ="+this.buttonClicked);
    console.log(data.value);

    if(this.buttonClicked == 'Signup'){
      this.authObservable = this.authService.signUp(data.value.email, data.value.password);
    }
    if (this.buttonClicked == 'Login'){
      this.authObservable = this.authService.Login(data.value.email, data.value.password);
    }
    this.authObservable.subscribe(
      (data:authResponse) => {
        console.log(data)
      },
      error => {
        console.log(error.error)
      }
    );
    data.resetForm;
  }
  
}
