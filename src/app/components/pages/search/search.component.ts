import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search = {
    title: "title",
    description: "description",
    price: "price",
    email: "email"

  }

  constructor(
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
  }

}
