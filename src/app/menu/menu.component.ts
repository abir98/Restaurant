import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  all =[
    {id:1,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-01.jpg?alt=media&token=8c9c003c-a73c-49e3-bc35-543666c98b39"},
    {id:2,desc:"Special Drinks 2",price:"9 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-02.jpg?alt=media&token=20421d0d-10ac-4f45-9271-da68a216ebce"},
    {id:3,desc:"Special Drinks 3",price:"10 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-03.jpg?alt=media&token=8cbf6b29-2eea-4310-8fdd-4779e29fd775"},
    {id:4,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-04.jpg?alt=media&token=bf78e962-7c89-46c0-a180-b7af203caf9a"},
    {id:5,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-05.jpg?alt=media&token=020919ef-3aee-4133-a221-e800718d3efe"},
    {id:6,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-06.jpg?alt=media&token=a738fd42-fc0f-4ff8-9d25-3f968c8f3704"},
    {id:7,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-07.jpg?alt=media&token=d3ab795a-61a3-4fff-bfc7-f806de760c9b"},
    {id:8,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-08.jpg?alt=media&token=2e923619-c50f-460a-8ea5-e0dc51d5eab7"},
    {id:9,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-09.jpg?alt=media&token=5650139f-faac-472c-adf1-5a0aa3e15619"}
  ]
  tab =this.all;
  Drinks=[
    {id:1,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-01.jpg?alt=media&token=8c9c003c-a73c-49e3-bc35-543666c98b39"},
    {id:2,desc:"Special Drinks 2",price:"9 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-02.jpg?alt=media&token=20421d0d-10ac-4f45-9271-da68a216ebce"},
    {id:3,desc:"Special Drinks 3",price:"10 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-03.jpg?alt=media&token=8cbf6b29-2eea-4310-8fdd-4779e29fd775"}

  ]
  Launch=[
    {id:4,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-04.jpg?alt=media&token=bf78e962-7c89-46c0-a180-b7af203caf9a"},
    {id:5,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-05.jpg?alt=media&token=020919ef-3aee-4133-a221-e800718d3efe"},
    {id:6,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-06.jpg?alt=media&token=a738fd42-fc0f-4ff8-9d25-3f968c8f3704"}

  ]
  Dinner=[
    {id:7,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-07.jpg?alt=media&token=d3ab795a-61a3-4fff-bfc7-f806de760c9b"},
    {id:8,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-08.jpg?alt=media&token=2e923619-c50f-460a-8ea5-e0dc51d5eab7"},
    {id:9,desc:"Special Drinks 1",price:"7 TND",info:"Sed id magna vitae eros sagittis euismod.",url:"https://firebasestorage.googleapis.com/v0/b/ouzzo-f0acc.appspot.com/o/images%2Fimg-09.jpg?alt=media&token=5650139f-faac-472c-adf1-5a0aa3e15619"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

  load(val){
   if(val == "Drinks"){
    this.tab=this.Drinks;
   }else if(val == "All"){
    this.tab=this.all;
   }else if(val == "Lunch"){
    this.tab=this.Launch;
   }else if(val == "Dinner"){
    this.tab=this.Dinner;
   }
  
  }
}
