import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { BackendService } from '../services/backend.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private authListenerSubs : Subscription;
  clientAuthenticated=false

  imagePath="./asstes/files/images/logo.png"
  constructor(private service : BackendService,private toast : ToastrService,public dialog: MatDialog,private route:Router) { }

 

  ngOnInit(): void {
    this.authListenerSubs = this.service.getStatusListener()
    .subscribe(isAuthenticated =>{
     this.clientAuthenticated= isAuthenticated
    });
    console.log(this.clientAuthenticated) 
  }

  onlogout(){
    this.service.logout()
    this.toast.warning("logged Out  ! ")
  }

  openDialog() {
   this.dialog.open(DialogLoginComponent);
  }

}
