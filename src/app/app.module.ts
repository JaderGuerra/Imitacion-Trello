import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SortablejsModule } from 'ngx-sortablejs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [AppComponent, ListComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
