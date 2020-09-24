import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SortablejsModule } from 'ngx-sortablejs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, TareaComponent, CardsComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SortablejsModule.forRoot({ animation: 150 }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
