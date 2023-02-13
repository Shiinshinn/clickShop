import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
sort: string = 'asc';
itemsCount: number = 12;

  onSortClick(val: string) :void {
    this.sort = val;
  }

  onItemsUpdate(){
    
  }

}

