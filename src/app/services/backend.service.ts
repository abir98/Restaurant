import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Subject } from 'rxjs';
import { Clients } from 'src/models/client';
import { Owner } from 'src/models/Owner';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private isapproved =false
  private token :string
  private authStatusListener = new Subject<boolean>()
  constructor(private http : HttpClient) { }

  addOwner(val,val1,val2,val3,val4,val5){
    const ps :Owner ={firstname:val,lastname : val1,email:val2,phone:val3,adresse:val4,password:val5};
    this.http.post<{message:string}>('http://localhost:9999/owner/add',ps)
    .subscribe(responseData =>{
      console.log(responseData.message);
    });
  
  }


  addPost(user :string,passw:string,mail:string){
    const ps :Clients ={id:null,username : user,password:passw,email:mail};
    this.http.post<{message:string}>('http://localhost:9999/client/add',ps)
    .subscribe(responseData =>{
      console.log(responseData.message);
    });
  
  }

  getToken(){
    return this.token
  }

  getauth(){
    return this.isapproved
  }

  getStatusListener(){
    return this.authStatusListener.asObservable();
  }

  loginuser(user :string,passw:string){
    const data ={email:user,password:passw}
    this.http.post<{token:string}>("http://localhost:9999/client/login",data)
    .subscribe(response =>{
      const toke =response.token
      this.token = toke
      if(this.token){
        this.isapproved =true
        this.authStatusListener.next(true)
        
      }
    })
  }

  logout(){
    this.token =null
    this.authStatusListener.next(false)
    this.isapproved=false
  }

  logintest(user :string,passw:string):boolean{
    this.loginuser(user,passw);
    if(this.isapproved){
      return true
    }else{
      return false  
    }
  
  }




}


