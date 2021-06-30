import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produkdetails',
  templateUrl: './produkdetails.component.html',
  styleUrls: ['./produkdetails.component.scss']
})
export class ProdukdetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProdukdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) { }

  ngOnInit(): void {
  }
  saveData() {
    this.dialogRef.close(this.data);
  }


}
