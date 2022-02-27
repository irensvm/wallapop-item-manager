import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemListComponent } from './components/pages/item-list/item-list.component';
import { ItemComponent } from './components/pages/item-list/item/item.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './components/pages/search/search.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, ItemComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
