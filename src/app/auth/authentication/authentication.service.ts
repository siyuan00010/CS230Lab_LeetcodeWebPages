import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { authResponse } from "./authResponse";

@Injectable({
    providedIn:'root'
})
export class AuthenticationService{
    baseUrl:string="https://identitytoolkit.googleapis.com/vl/accounts";
    SignUpEndPoint:string="signUp";
    SignInEndPoint:string="signInWithPassword";
    public constructor(private http:HttpClient){

    }

    public signUp(email:string,password:string){
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken":true
        };
        return this.http.post<authResponse>(this.baseUrl + ":" + this.SignUpEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }
    public Login(email:string,password:string){
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken":true
        };
        return this.http.post<authResponse>(this.baseUrl + ":" + this.SignInEndPoint + "?" + "key=" + environment.firebase.apiKey, requestBody);
    }
}