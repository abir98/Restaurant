import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BackendService } from '../services/backend.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy {

  isactive=1; 
  check
  passval=''
   clientAuthenticated =false
  @ViewChild('someInput') someInput!: ElementRef;
  @ViewChild('someInput2') someInput2!: ElementRef;

  private authListenerSubs : Subscription;
  constructor(private service : BackendService,private toast : ToastrService,private route:Router) { }
  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.authListenerSubs = this.service.getStatusListener()
    .subscribe(isAuthenticated =>{
     this.clientAuthenticated= isAuthenticated
    });
  }

  onSingin(form : NgForm){
    if(form.invalid){
      return;
    }
    for(let i =0;i<3;i++){
      this.service.loginuser(form.value.email,form.value.Password)

      
    }
    if(this.service.getauth){
      this.route.navigateByUrl('/home')
      this.toast.info("Login Success !");
    }else{
      this.toast.error("Wrong Information !");
    }
  }
  onSingup(form){
    if(form.invalid){
      return;
    }
    if(form.value.Password !=form.value.RepeatPassword){
      this.toast.error("Password Incorrect !");
    }else{
      this.someInput.nativeElement.checked =true
      this.someInput2.nativeElement.checked =false
      this.activate(1)
      this.service.addPost(form.value.Username,form.value.Password,form.value.Email)
      form.resetForm();
      this.toast.success("Client Added ! ","Success")
      
    }
   
    
  }

  gobacktoSignin(){
    this.someInput.nativeElement.checked =true
    this.someInput2.nativeElement.checked =false
    this.activate(1)
  }

  activate(val){
    if(val == 1 ){
      this.isactive =1;
    }else{
      this.isactive=2;
    }
  }


}
