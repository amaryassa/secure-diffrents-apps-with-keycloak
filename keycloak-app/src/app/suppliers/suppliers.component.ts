import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../services/suppliers.service';

export interface Supplier {
  id: number;
  name: string;
}

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  errorMessage: string = null;
  suppliers: Supplier[];

  constructor(private suppliersService: SuppliersService) { }

  ngOnInit(): void {
    this.suppliersService.getSuppliers().subscribe(
      data => {
        this.suppliers = data;
      },
      err => {
        this.errorMessage = err;
        console.log('errorrr ! ', err)
      }
    );

  }

}
