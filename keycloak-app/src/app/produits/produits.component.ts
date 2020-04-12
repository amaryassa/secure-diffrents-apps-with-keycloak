import { Component, OnInit } from '@angular/core';
interface Produit {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[] = [
    { id: 1, name: 'ordi HP', price: 850 },
    { id: 1, name: 'imprimante LX HP', price: 150 },
    { id: 1, name: 'Iphone X', price: 1150 }
  ];

  constructor() { }

  ngOnInit(): void {


  }

}
