import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './shared/components/services/item.services';
import { ItemsService } from './shared/components/services/items.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wallapop-item-manager';
  items: Item[] =[]


  constructor(
    private itemsService: ItemsService){

  }

  ngOnInit(): void {
      this.onGetItems()
  }


  onGetItems(): void {
    this.itemsService.getItems().subscribe(
      (response: any) => {this.items = response.items;
        console.log(this.items)
      }, 
      (error: any) => console.log(error),
      () => console.log('done getting items')



    )
  }
   // constructor(){
   //   type HttpResponse = { code: number, data: string}

   //   const observable = new Observable<HttpResponse>(subscriber => {
   //     console.log('inside subscriber...')
     //   subscriber.next({ code: 200, data: 'this is data x...'})
       // subscriber.error({ code: 500, data: 'an error ocurred'})
        //console.log('subs is emitting...')

      //})

      //observable.subscribe({
        //next(response:HttpResponse) {
         // console.log('got response: ', response)
        //},
        //error(error: any) {
          //console.log('something happen', error)
        //}
     // })
   // }
  
}