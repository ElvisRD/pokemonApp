import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TypePokemonComponent } from './components/type-pokemon/type-pokemon.component';
import { NgOptimizedImage } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardStatsComponent } from './components/card-stats/card-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    ProgressBarComponent,
    TypePokemonComponent,
    SpinnerComponent,
    CardStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
