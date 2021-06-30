import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashionapp',
  templateUrl: './fashionapp.component.html',
  styleUrls: ['./fashionapp.component.scss']
})
export class FashionappComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  mode:string='side';

  //LogOut
  logout()
  {
    let conf=confirm('Apakah anda ingin keluar dari aplikasi ini?');
    if (conf)
    {
      localStorage.removeItem('appToken');
      window.location.reload();
    }
  }
   
 
  //menu:
  menu = [
   {
     name: 'Database Product',
     icon: 'note_add',
     url: '/fashionapp/addproduk'
   },
   {
     group: 'Enrolled',
     children: [
       {
         name: 'Edit Image',
         icon: 'camera_enchance',
         url: '/fashionapp/dashboard'
       },
       {
         name: 'Produk',
         icon: 'laptop_chromebook',
         url: '/fashionapp/dashboard'
       }
     ]
   }
 ];
 
 }
 
