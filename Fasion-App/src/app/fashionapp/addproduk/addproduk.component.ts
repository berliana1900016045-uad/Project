import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteprodukComponent } from '../deleteproduk/deleteproduk.component';
import { IsidetailComponent } from '../isidetail/isidetail.component';
import { ProdukdetailsComponent } from '../produkdetails/produkdetails.component';

@Component({
  selector: 'app-addproduk',
  templateUrl: './addproduk.component.html',
  styleUrls: ['./addproduk.component.scss']
})
export class AddprodukComponent implements OnInit {
  title:any;
  fashionapp:any={};
  fashionapps:any=[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

//Membuat fungsi loading:
 loading: any

 //Membuat Fungsi Buat Produk
 buatProduk(data: any, idx: any) 
 {
  let dialog=  this.dialog.open(ProdukdetailsComponent, {
     width: '450px',
     data:data
   });

   dialog.afterClosed().subscribe(res=>{
    if(res)
    {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if(idx==-1)this.fashionapps.push(res);
      //jika tidak maka perbarui data
      else this.fashionapps[idx]=data;
      }
  })

}

//Membuat Fungsi Isi  Detail Produk:
isidetailProduk(){
  const dialogRef = this.dialog.open(IsidetailComponent, {
    width: '450px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog ditutup');
  });

}

//Membuat Fungsi  Delete Produk:
deleteProduk()
{
  const dialogRef = this.dialog.open(DeleteprodukComponent, {
    width: '450px',      
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result == true)
    {
      console.log('Menghapus data');
    }
  });
}

}
