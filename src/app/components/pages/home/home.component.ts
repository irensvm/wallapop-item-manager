import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.services';
import { Item } from '../services/item.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe( params => {
    //if(params.["searchTerm"])
    // this.items = this.itemsService.getAll().filter(item => this.item.name.toLowerCase())

    //  })
    this.onGetItems();
  }
  onGetItems(): void {
    this.itemsService.getItems().subscribe(
      (response: any) => {
        this.items = response.items;
        console.log(this.items);
      },
      (error: any) => console.log(error),
      () => console.log('done getting items from home component')
    );
  }
}
