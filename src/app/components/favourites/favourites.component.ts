import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() favouritesProducts: any;
  @Output()  change: EventEmitter<number> = new EventEmitter<number>();

  constructor() {   }

  ngOnInit(): void {
    console.log(this.favouritesProducts.lenght>0)
  }



  removeFromList(product: any) {
    this.change.emit(product);
  }

}
