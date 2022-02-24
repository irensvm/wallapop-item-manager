import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ItemListComponent } from './components/pages/item-list/item-list.component';
import { ItemComponent } from './components/pages/item-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ItemComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ItemListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
