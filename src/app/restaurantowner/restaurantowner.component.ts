import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/models/Owner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurantowner',
  templateUrl: './restaurantowner.component.html',
  styleUrls: ['./restaurantowner.component.css']
})
export class RestaurantownerComponent implements OnInit {

  theOwner :Owner
  constructor(private toast : ToastrService,private service:BackendService,private route:Router) { }
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
  }
  checkData(form : NgForm){


  if(form.invalid){
    return;
  }
  if(form.value.password !=form.value.Rpassword){
    this.toast.error("Password Incorrect !");
  }else{

    this.service.addOwner( form.value.fname ,form.value.lname,form.value.email ,form.value.phone ,form.value.adress , form.value.password)
    form.resetForm();
    this.toast.success("Owner Added ! ","Success")
    setTimeout(() => {
      this.route.navigateByUrl('/loginres');
    }, 500);
     
  }
 
  }
}
